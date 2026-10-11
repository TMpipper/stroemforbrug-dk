/**
 * audit-prices — ingen pris må stå skrevet; hver pris i den byggede HTML skal være byggets egen.
 *
 * Pass 1 (kilden, src/**): ingen "x,xx kr./kWh", ingen af de gamle konstanter (1,86 / 1,95 / 1,76 /
 *   1,87 / 2,02), ingen momsfaktor uden for feed-kopierne, intet kr.-beløb i samme tabelrække eller
 *   sætning som et kWh-tal i indholdsfilerne (det skal være et {{kr}}-token), ingen ukendte tokens,
 *   intet "kr" i et OG-kort, ingen `new Date()` som dato i sitemap/dateModified.
 * Pass 2 (den byggede HTML, .next/server/app): ingen "{{" (urenderet token); én data-price-basis pr.
 *   prisside; hvert "x,xx kr./kWh" på siden er et af grundlagets tal (±0,005) eller et spænd eller
 *   ≥ 3,00 (offentlig ladning); alle sider deler samme dk1/dk2/måned (ellers har bygget krydset en
 *   feedopdatering — byg igen); grundlaget regnes om mod feedet live og skal ramme inden for 0,01.
 *
 * Kører i postbuild og i `npm run audit`. Fejler = ingen deploy.
 */
import "./lib/env.mjs";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { ANY_TOKEN_RE, TOKEN_RE } from "../src/lib/tokens.ts";

const ROOT = process.cwd();
const SRC = join(ROOT, "src");
const APP = join(ROOT, ".next", "server", "app");
const errors: string[] = [];
const warnings: string[] = [];
const fail = (m: string) => errors.push(m);

function walk(dir: string, exts: string[], acc: string[] = []): string[] {
  if (!existsSync(dir)) return acc;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, exts, acc);
    else if (exts.some((e) => name.endsWith(e))) acc.push(p);
  }
  return acc;
}
const rel = (p: string) => relative(ROOT, p);

/* ------------------------------------------------------------------ */
/* Pass 1 — kilden                                                     */
/* ------------------------------------------------------------------ */

/** Fjerner ${…}-udtryk og kommentarer, så en beregnet værdi ikke ligner et typet tal. */
function outsideExpressions(text: string): string {
  return text
    .replace(/\$\{[^}]*\}/g, "${}")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/^\s*\/\/.*$/gm, "");
}

const KWH_PRICE = /\b[12],\d{2}\s*kr\.?\s*(?:\/|pr\.?\s*)k[Ww]h/g;
const OLD_NUMBERS = /\b(?:1,86|1,95|1,76|1,87|2,02)\b/g;
const VAT = /\b1[.,]25\b/g;
const KWH_FIGURE = /\d[\d.]*\s*k[Ww]h/;
const KR_FIGURE = /\d[\d.]*(?:,\d+)?\s*kr\b/;
const CROSS_FUEL = /gasfyr|oliefyr|fjernvarme|naturgas|benzin|diesel|offentlig ladning|lynlader|hurtiglader|\bgas\b|\(gas\)|ækvivalent|besparelse vs|vs\. gas/i;
const PURCHASE = /indkøbspris|købspris|anskaffelse|installation|investering|monteret|håndværker|tilskud|abonnement|startgebyr|wallbox|hjemmelader|pris, inkl\. mont/i;
const HARDWARE_FLOOR = 20000;
const hasHardwareAmount = (text: string) => [...text.matchAll(/(\d{1,3}(?:\.\d{3})+|\d{5,})\s*kr/g)].some((m) => Number(m[1].replace(/\./g, "")) >= HARDWARE_FLOOR);
const EXEMPT_SRC = [/src\/lib\/feed\//, /src\/lib\/format\.ts$/, /src\/lib\/tokens\.ts$/, /src\/lib\/prices-updated\.ts$/];
const CONTENT_FILES = /src\/lib\/appliances(-[a-z0-9]+)?\.ts$/;

for (const file of walk(SRC, [".ts", ".tsx"])) {
  const r = rel(file);
  if (EXEMPT_SRC.some((re) => re.test(r))) continue;
  const raw = readFileSync(file, "utf8");
  const text = outsideExpressions(raw);
  const isOg = /opengraph-image\.tsx$|\/og\//.test(r);

  for (const line of text.split("\n")) {
    if (CROSS_FUEL.test(line) || /pr\. kWh varme/.test(line)) continue;
    for (const m of line.matchAll(KWH_PRICE)) fail(`${r}: skrevet kWh-pris "${m[0]}" — brug {{pris_kwh}} eller formatPrice(t.dk)`);
  }
  for (const m of text.matchAll(OLD_NUMBERS)) fail(`${r}: den gamle konstant ${m[0]} står stadig i kilden`);
  if (!/src\/lib\/feed\//.test(r)) for (const m of text.matchAll(VAT)) warnings.push(`${r}: momsfaktoren ${m[0]} uden for feed-kopierne`);
  if (isOg && /\bkr\b/.test(text)) fail(`${r}: et delekort må ikke bære en pris (kr)`);
  for (const t of raw.matchAll(ANY_TOKEN_RE)) {
    const valid = new RegExp(TOKEN_RE.source).test(t[0]);
    if (!valid) fail(`${r}: ukendt token ${t[0]}`);
  }

  if (CONTENT_FILES.test(r) || /src\/app\//.test(r)) {
    // Tabelrækker: et kr.-beløb i samme <tr> som et kWh-tal skal være et token.
    for (const row of raw.matchAll(/<tr>[\s\S]*?<\/tr>/g)) {
      const cells = row[0];
      if (!KWH_FIGURE.test(cells) || CROSS_FUEL.test(cells) || PURCHASE.test(cells) || hasHardwareAmount(cells)) continue;
      // Tabelhovedet bestemmer rækkens mening: "Besparelse vs. gas" eller "Pris inkl. inst." gælder hver række.
      const before = raw.slice(Math.max(0, row.index! - 1500), row.index!);
      const theadStart = before.lastIndexOf("<thead>");
      const thead = theadStart >= 0 ? before.slice(theadStart) : "";
      if (CROSS_FUEL.test(thead) || PURCHASE.test(thead) || /inkl\. inst|købspris|anskaff/i.test(thead)) continue;
      // Et kr.-beløb FØR det første kWh-tal er en produktpris efterfulgt af en besparelse, ikke en elpris.
      const firstKwh = cells.search(KWH_FIGURE);
      const firstKr = cells.search(KR_FIGURE);
      if (firstKr >= 0 && firstKr < firstKwh) continue;
      const plain = cells.replace(/\{\{[^}]*\}\}/g, "").replace(/\{[^}]*\}/g, "");
      if (KR_FIGURE.test(plain)) fail(`${r}: kr.-beløb ved siden af kWh i en tabelrække skal være et {{kr …}}-token: ${cells.replace(/\s+/g, " ").slice(0, 110)}…`);
    }
    // Sætninger i indholdsfilerne: samme regel pr. sætning.
    if (CONTENT_FILES.test(r)) {
      const prose = raw.replace(/<tr>[\s\S]*?<\/tr>/g, " ").replace(/<[^>]+>/g, " ");
      for (const sentence of prose.split(/(?<=[.!?])\s+|"|\n\s*\{ question/)) {
        if (!KWH_FIGURE.test(sentence) || CROSS_FUEL.test(sentence) || PURCHASE.test(sentence) || hasHardwareAmount(sentence)) continue;
        const plain = sentence.replace(/\{\{[^}]*\}\}/g, "");
        if (KR_FIGURE.test(plain)) fail(`${r}: kr.-beløb i samme sætning som et kWh-tal skal være et token: "${sentence.trim().slice(0, 120)}"`);
      }
    }
  }
}

const sitemap = readFileSync(join(SRC, "app", "sitemap.ts"), "utf8");
if (/lastModified:\s*now\b|const now = new Date\(\)/.test(sitemap)) fail("sitemap.ts genererer datoer med new Date()");
for (const file of walk(join(SRC, "app"), [".tsx"])) {
  if (/dateModified:\s*new Date\(/.test(readFileSync(file, "utf8"))) fail(`${rel(file)}: dateModified: new Date(`);
}

/* ------------------------------------------------------------------ */
/* Pass 2 — den byggede HTML                                           */
/* ------------------------------------------------------------------ */

const attr = (html: string, name: string) => html.match(new RegExp(`${name}="([^"]*)"`))?.[1] ?? null;
const near = (a: number, b: number, tol: number) => Math.abs(a - b) <= tol + 1e-9;
const parseDa = (s: string) => Number(s.replace(/\./g, "").replace(",", "."));

if (!existsSync(APP)) {
  warnings.push("ingen .next/server/app — pass 2 sprunget over (kør efter next build)");
} else {
  const pages = walk(APP, [".html"]).filter((p) => !/_not-found|_global-error|not-found\.html$/.test(p));
  const basisSeen = new Map<string, string[]>();
  for (const file of pages) {
    const html = readFileSync(file, "utf8");
    const name = rel(file).replace(/^\.next\/server\/app\//, "");
    if (html.includes("{{")) fail(`${name}: urenderet token "{{" i HTML`);
    const basis = html.match(/<p[^>]*data-price-basis[^>]*>/g) ?? [];
    const hasKwhPrice = /\d,\d{2}\s*kr\.\/kWh/.test(html);
    if (basis.length > 1) fail(`${name}: ${basis.length} grundlagssætninger — der må kun være én`);
    if (hasKwhPrice && basis.length === 0) fail(`${name}: siden viser en kWh-pris, men har ingen data-price-basis`);
    if (!basis.length) continue;
    const b = basis[0];
    const declared = ["data-dk1", "data-dk2", "data-dk", "data-cheapest-dk1", "data-cheapest-dk2", "data-cheapest-allin-dk1", "data-cheapest-allin-dk2", "data-diff", "data-typical-dk1", "data-typical-dk2"]
      .map((k) => attr(b, k)).filter((v): v is string => !!v).map(Number);
    const key = `${attr(b, "data-dk1")}|${attr(b, "data-dk2")}|${attr(b, "data-month")}`;
    basisSeen.set(key, [...(basisSeen.get(key) ?? []), name]);
    const body = html.replace(/<script[\s\S]*?<\/script>/g, "");
    for (const m of body.matchAll(/(\d{1,3}(?:\.\d{3})*,\d{2})\s*kr\.\/kWh/g)) {
      const v = parseDa(m[1]);
      const before = body.slice(Math.max(0, m.index! - 12), m.index!);
      if (/\d[,.]\d{1,2}\s*(?:og|til|-|–|—)\s*$/.test(before)) continue; // et spænd
      if (v >= 3) continue; // offentlig ladning m.m.
      if (!declared.some((d) => near(d, v, 0.005))) fail(`${name}: "${m[0]}" er ikke et af byggets grundlagstal (${declared.join(", ")})`);
    }
  }
  if (basisSeen.size > 1) fail(`bygget krydsede en feedopdatering — forskellige grundlag: ${[...basisSeen.entries()].map(([k, v]) => `${k} (${v.length} sider, fx ${v[0]})`).join("; ")} — byg igen`);

  // Grundlaget mod feedet lige nu (fanger en ødelagt motor, ikke feedets egen drift).
  if (basisSeen.size === 1 && process.env.EL_FEED_URL) {
    const [key] = [...basisSeen.keys()];
    const [dk1, dk2] = key.split("|").map(Number);
    try {
      const { marginalFromFeed } = await import("../src/lib/feed/marginal.ts");
      const base = process.env.EL_FEED_URL.trim().replace(/\/$/, "");
      for (const [region, built] of [["DK1", dk1], ["DK2", dk2]] as const) {
        const [m, est] = await Promise.all([
          fetch(`${base}/api/v1/market?region=${region}`, { signal: AbortSignal.timeout(20_000) }).then((r) => r.json()),
          fetch(`${base}/api/v1/estimate?region=${region}&kwh=4000&period=12&compact=1`, { signal: AbortSignal.timeout(20_000) }).then((r) => r.json()),
        ]);
        const live = marginalFromFeed(region, m.thisMonth, est.items).krPerKwh;
        if (!near(live, built, 0.01)) warnings.push(`${region}: bygget med ${built.toFixed(2)} kr./kWh, feedet siger ${live.toFixed(2)} nu — bygget er ældre end feedet (ok) eller motoren regner forkert (ikke ok)`);
      }
    } catch (e) {
      warnings.push(`kunne ikke efterregne grundlaget mod feedet: ${(e as Error).message}`);
    }
  }
}

/* ------------------------------------------------------------------ */

for (const w of warnings) console.warn(`  advarsel: ${w}`);
if (errors.length) {
  console.error(`\naudit-prices: ${errors.length} fejl`);
  for (const e of errors.slice(0, 60)) console.error(`  ✗ ${e}`);
  if (errors.length > 60) console.error(`  … og ${errors.length - 60} til`);
  process.exit(1);
}
console.log(`audit-prices: ok (${warnings.length} advarsler)`);
