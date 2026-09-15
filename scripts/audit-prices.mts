/**
 * Price and offer audit for Strømforbrug.dk.
 *
 * `pricing.ts` and `offers.ts` both document that "npm run audit-prices" keeps
 * them honest, but the script did not exist, so `assertPriceModel()` and
 * `assertOffers()` were dead code. This runs them, plus a prose sweep for
 * hardcoded kroner and øre figures that should have been rendered from the
 * engine.
 *
 * Run: npm run audit-prices
 * Preview a future campaign date: CAMPAIGN_DATE=2026-10-01 npm run audit-prices
 */

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import {
  assertPriceModel,
  CHEAPEST_MARGINAL_KR_PER_KWH,
  EL_PRICE_KR_PER_KWH,
  MARKET,
  PRICE_DK1,
  PRICE_DK2,
  TYPICAL_ALL_IN_KR_PER_KWH,
} from "../src/lib/pricing.ts";
import {
  assertOffers,
  BUILD_DATE,
  OFFERS,
  activeCampaign,
  rankByFirstYear,
} from "../src/lib/offers.ts";

let failures = 0;
const fail = (msg: string) => {
  console.error(`FAIL  ${msg}`);
  failures++;
};
const ok = (msg: string) => console.log(`ok    ${msg}`);

/* ---------- 1. engine invariants ---------- */

try {
  assertPriceModel();
  ok("price model: Forsyningstilsynet basket and component build-up agree");
} catch (e) {
  fail((e as Error).message);
}

try {
  assertOffers();
  ok(`offers: invariants hold on ${BUILD_DATE}`);
} catch (e) {
  fail((e as Error).message);
}

/* ---------- 2. campaign sanity ---------- */

for (const offer of OFFERS) {
  const live = activeCampaign(offer.campaigns);
  const scheduled = (offer.campaigns ?? []).filter((c) => c.validFrom && c.validFrom > BUILD_DATE);
  if (live) ok(`${offer.name}: "${live.label}" is live`);
  for (const c of scheduled) console.log(`info  ${offer.name}: "${c.label}" starts ${c.validFrom}`);
  const stale = (offer.campaigns ?? []).filter((c) => c.validUntil && c.validUntil < BUILD_DATE);
  if (stale.length && !live && !scheduled.length) {
    console.warn(`warn  ${offer.name}: only expired campaigns remain — remove them or add the current one`);
  }
}

/* ---------- 3. prose sweep ---------- */

/*
 * A hardcoded figure is only a BUG when it disagrees with the engine. One that
 * still agrees is merely fragile: it will silently go stale at the next MARKET
 * update. So drift fails the build, agreement warns.
 */

const engineKrKwh = new Set<number>([
  EL_PRICE_KR_PER_KWH,
  TYPICAL_ALL_IN_KR_PER_KWH,
  CHEAPEST_MARGINAL_KR_PER_KWH,
  round2(PRICE_DK1),
  round2(PRICE_DK2),
  round2(MARKET.fstAverageKrKwh.DK1),
  round2(MARKET.fstAverageKrKwh.DK2),
]);
for (const kwh of [1600, 2500, 4000, 6000, 9000, 12000]) {
  for (const r of rankByFirstYear(kwh)) engineKrKwh.add(round2(r.firstYear / kwh));
}

const engineOre = new Set<number>(OFFERS.flatMap((o) => o.products.map((p) => p.tillaegOre)));
for (const o of OFFERS) for (const c of o.campaigns ?? []) if (c.tillaegOre !== undefined) engineOre.add(c.tillaegOre);

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}
function near(value: number, pool: Set<number>, tolerance: number): boolean {
  for (const v of pool) if (Math.abs(v - value) <= tolerance) return true;
  return false;
}
function daNum(s: string): number {
  return Number(s.replace(/\s+/g, "").replace(",", "."));
}

const ALLOW_FILES = new Set(["src/lib/pricing.ts", "src/lib/offers.ts"]);
let warnings = 0;
const offEngine: string[] = [];

function walk(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (/\.(ts|tsx)$/.test(entry)) out.push(full);
  }
  return out;
}

for (const file of walk("src")) {
  const rel = file.replace(/\\/g, "/");
  if (ALLOW_FILES.has(rel)) continue;
  const text = readFileSync(file, "utf8");

  for (const m of text.matchAll(/(\d,\d{2})\s*kr\.?\s*\/\s*kWh/g)) {
    const v = daNum(m[1]);
    if (near(v, engineKrKwh, 0.011)) {
      warnings++;
      console.warn(`warn  ${rel}: "${m[1]} kr./kWh" is hardcoded but currently correct — render it from pricing.ts before the next MARKET update`);
    } else {
      // Not every kr./kWh on the site is a household elpris: the EV page quotes
      // public charging rates, and several pages quote night vs. day prices.
      // Those are legitimately different numbers, so this reports rather than
      // fails. Review the list when MARKET changes.
      offEngine.push(`${rel}: "${m[1]} kr./kWh"`);
    }
  }

  for (const m of text.matchAll(/(\d+(?:,\d+)?)\s*øre\s*(?:i\s*)?(?:spot)?till(?:æ|ae)g/gi)) {
    const v = daNum(m[1]);
    if (!near(v, engineOre, 0.01)) {
      fail(`${rel}: "${m[1]} øre tillæg" matches no tracked product — stale or invented`);
    }
  }

  for (const m of text.matchAll(/0\s*kr\.?\s*\(intro\)/gi)) {
    fail(`${rel}: "${m[0]}" — intro terms must be rendered from offers.ts, not typed`);
  }
}

/* ---------- 3b. stale table rows ---------- */

/*
 * The prose sweep only sees figures with a unit attached. In a JSX table the
 * kWh unit usually lives in the column HEADER, so a row like
 *   <td>1.500-2.000</td><td>3.750-5.000 kr.</td>
 * has no anchor in the cell and slipped through twice — roughly 50 rows across
 * seven hub pages were still priced at the old 2,50 kr./kWh long after the
 * prose was corrected. This checks each row against its own bare-number cells.
 */

const OLD_PRICE = 2.5;
const NUMBER = String.raw`\d{1,3}(?:\.\d{3})*(?:,\d+)?`;
const daNumber = (v: string) => Number(v.replace(/\./g, "").replace(",", "."));
/** Rows comparing against another fuel move the opposite way and are excluded. */
const CROSS_FUEL = /gasfyr|oliefyr|fjernvarme|naturgas|benzin|diesel|besparelse vs|vs\. gas/i;

let staleRows = 0;
for (const file of walk("src/app")) {
  const rel = file.replace(/\\/g, "/");
  const text = readFileSync(file, "utf8");
  for (const row of text.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)) {
    const body = row[1];
    // A row inherits its table's meaning: "besparelse vs. gasfyr" usually sits
    // in the <thead> or the footnote, not in the row itself.
    const tableStart = text.lastIndexOf("<table", row.index ?? 0);
    const tableEnd = text.indexOf("</table>", row.index ?? 0);
    const tableContext = tableStart >= 0 ? text.slice(tableStart, tableEnd > 0 ? tableEnd + 400 : undefined) : body;
    if (CROSS_FUEL.test(body) || CROSS_FUEL.test(tableContext)) continue;
    const cells = [...body.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map((m) => m[1]);
    const anchors: number[] = [];
    for (const c of cells) {
      if (/kr/.test(c)) continue;
      for (const n of c.replace(/<[^>]+>/g, "").matchAll(new RegExp(`(${NUMBER})`, "g"))) {
        anchors.push(daNumber(n[1]));
      }
    }
    if (!anchors.length) continue;
    for (const k of body.matchAll(new RegExp(`(${NUMBER})\\s*kr\\.`, "g"))) {
      const v = daNumber(k[1]);
      const stale = anchors.some((a) => a > 50 && Math.abs(v / (a * OLD_PRICE) - 1) < 0.015);
      const current = anchors.some((a) => a > 50 && Math.abs(v / (a * EL_PRICE_KR_PER_KWH) - 1) < 0.015);
      if (stale && !current) {
        fail(`${rel}: table row has ${k[1]} kr. — that is a same-row figure priced at the old ${OLD_PRICE} kr./kWh`);
        staleRows++;
        break;
      }
    }
  }
}
if (!staleRows) ok("no table row is still priced at the old 2,50 kr./kWh");

/* ---------- 4. summary ---------- */

console.log("");
console.log(`market period       ${MARKET.period}`);
console.log(`marginal elpris     ${EL_PRICE_KR_PER_KWH.toFixed(2)} kr./kWh`);
console.log(`typical all-in      ${TYPICAL_ALL_IN_KR_PER_KWH.toFixed(2)} kr./kWh`);
console.log(`build date          ${BUILD_DATE}`);
console.log("");
console.log("cheapest first-year aftale by household:");
for (const kwh of [1600, 2500, 4000, 6000, 9000, 12000]) {
  const [best, second] = rankByFirstYear(kwh);
  console.log(
    `  ${String(kwh).padStart(6)} kWh  ${best.offer.name.padEnd(13)} ${Math.round(best.firstYear).toLocaleString("da-DK").padStart(7)} kr.` +
      `   (nr. 2: ${second.offer.name} ${Math.round(second.firstYear).toLocaleString("da-DK")} kr.)`,
  );
}

if (warnings) console.log(`${warnings} hardcoded kr./kWh figure(s) still agree with the engine — render them from pricing.ts before the next MARKET update.`);
if (offEngine.length) {
  console.log(`\n${offEngine.length} kr./kWh figure(s) are not engine values. Some are legitimate (public charging, night rates); the rest are stale:`);
  for (const line of offEngine) console.log(`  ${line}`);
}

if (failures) {
  console.error(`\n${failures} problem(s) found.`);
  process.exit(1);
}
console.log("\nAll price and offer checks passed.");
