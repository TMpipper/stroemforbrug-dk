/**
 * Skriver src/lib/prices-updated.ts med elpris.dk's egen opdateringsdato, hentet fra el-feed.
 *
 * Sitets priser kommer live fra feedet, men "Opdateret {dato}" i bylines, dateModified og
 * sitemappet stod som en håndskrevet konstant — og den blev stående, mens priserne blev
 * fornyet hver nat. Nu kommer datoen fra `dataAsOf.products` i feedets health-endpoint:
 * tidspunktet for den seneste import fra elpris.dk, regnet om til dansk kalenderdag. Kører i
 * prebuild EFTER audit-feed, så feedet er kendt tilgængeligt; fejler bygget, hvis datoen
 * mangler, for en forkert opdateringsdato er en påstand om friskhed, vi ikke kan stå inde for.
 */
import "./lib/env.mjs";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const OUT = join(ROOT, "src/lib/prices-updated.ts");
const BASE = (process.env.EL_FEED_URL ?? "").trim().replace(/\/$/, "");

const fail = (msg) => { console.error(`prices-updated: ${msg}`); process.exit(1); };
if (!BASE) fail("EL_FEED_URL mangler.");

/** "2026-09-30 23:30:28.167+00" → dansk kalenderdag "2026-10-01". */
function copenhagenDay(stamp) {
  const d = new Date(String(stamp).replace(" ", "T").replace(/\+00$/, "Z"));
  if (Number.isNaN(d.getTime())) return null;
  return new Intl.DateTimeFormat("sv-SE", { timeZone: "Europe/Copenhagen", year: "numeric", month: "2-digit", day: "2-digit" }).format(d);
}

const res = await fetch(`${BASE}/api/v1/health`, { signal: AbortSignal.timeout(30_000) }).catch((e) => fail(`feedet svarede ikke: ${e.message}`));
if (!res.ok) fail(`/api/v1/health svarede ${res.status}`);
const products = (await res.json())?.dataAsOf?.products;
if (!products) fail("health-svaret har ingen dataAsOf.products — datoen kan ikke bekræftes.");
const day = copenhagenDay(products);
if (!day) fail(`kunne ikke læse datoen "${products}".`);

const body = `/**
 * GENERERET af scripts/prices-updated.mjs i prebuild — rediger ikke.
 *
 * elpris.dk's seneste prisopdatering, som el-feed importerede den (dansk kalenderdag).
 * Den er sitets ene kilde til "Opdateret {dato}", dateModified og sitemappets lastmod.
 */
export const PRICES_UPDATED = "${day}";
`;
const before = (() => { try { return readFileSync(OUT, "utf8"); } catch { return ""; } })();
if (before === body) { console.log(`prices-updated: uændret (${day})`); process.exit(0); }
writeFileSync(OUT, body);
console.log(`prices-updated: ${day} skrevet til src/lib/prices-updated.ts`);
