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
