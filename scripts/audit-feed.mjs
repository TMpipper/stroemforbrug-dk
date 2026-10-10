#!/usr/bin/env node
/**
 * audit-feed — stopper en build, der ikke kan vide, hvad den skriver.
 *
 * Hver pris på Strømforbrug.dk kommer fra el-feed. Er feedet nede, tomt eller gammelt, når
 * builden kører, ville siden enten fejle midt i eller — værre — blive bygget på forældede tal
 * og se helt normal ud bagefter. Kører før `next build` (se `prebuild`).
 *
 * Ud over Billigstes tre kontroller (ok, antal aftaler, alder) kræver dette site de felter,
 * marginalprisen og tidspunkt-blokken regner på: 24 spot- og 24 nettarif-værdier pr. landsdel,
 * mindst én ren, varig, spotbaseret aftale pr. landsdel, og mindst 23 timer i dagens timepris.
 */
import "./lib/env.mjs";

const BASE = (process.env.EL_FEED_URL ?? "").trim().replace(/\/$/, "");
const MAX_AGE_HOURS = 48;
const MIN_PRODUCTS = 50;
const REGIONS = ["DK1", "DK2"];

const fail = (msg) => { console.error(`audit-feed: ${msg}`); process.exit(1); };
if (!BASE) fail("EL_FEED_URL mangler. Sitet kan ikke bygges uden feedet.");

const get = async (path) => {
  const res = await fetch(`${BASE}${path}`, { headers: { Accept: "application/json" }, signal: AbortSignal.timeout(30_000) })
    .catch((e) => fail(`kunne ikke nå ${BASE}${path}: ${e.message}`));
  if (!res.ok) fail(`${path} svarede ${res.status}`);
  return res.json();
};
const hoursSince = (iso) => (iso ? (Date.now() - new Date(iso).getTime()) / 3_600_000 : Infinity);

const health = await get("/api/v1/health");
if (!health.ok) fail("feedet melder selv, at det ikke er klar");
if ((health.counts?.products ?? 0) < MIN_PRODUCTS) fail(`kun ${health.counts?.products ?? 0} aftaler i feedet — forventer mindst ${MIN_PRODUCTS}`);
const ageProducts = hoursSince(health.dataAsOf?.products);
if (ageProducts > MAX_AGE_HOURS) fail(`aftalerne er ${Math.round(ageProducts)} timer gamle (grænsen er ${MAX_AGE_HOURS})`);
if (hoursSince(health.dataAsOf?.spot) > MAX_AGE_HOURS) fail(`spotpriserne slutter ${Math.round(hoursSince(health.dataAsOf?.spot))} timer tilbage i tiden`);
if (hoursSince(health.dataAsOf?.tariffs) > 24 * 14) fail("nettarifferne er mere end 14 dage gamle");

for (const region of REGIONS) {
  const m = await get(`/api/v1/market?region=${region}`);
  const t = m.thisMonth ?? {};
  if (!Array.isArray(t.spotHourlyOre) || t.spotHourlyOre.length !== 24) fail(`${region}: thisMonth.spotHourlyOre har ikke 24 værdier`);
  if (!Array.isArray(t.gridTariffHourlyKr) || t.gridTariffHourlyKr.length !== 24) fail(`${region}: thisMonth.gridTariffHourlyKr har ikke 24 værdier`);
  for (const k of ["transmissionKr", "systemKr", "elAfgiftKr"]) if (typeof t[k] !== "number" || !(t[k] >= 0)) fail(`${region}: thisMonth.${k} mangler`);
  if (!/^\d{4}-\d{2}$/.test(String(t.month))) fail(`${region}: thisMonth.month er ikke en måned`);
  if (typeof t.spotBasis !== "string" || !t.spotBasis) fail(`${region}: thisMonth.spotBasis mangler — grundlagssætningen kan ikke skrives`);

  const est = await get(`/api/v1/estimate?region=${region}&kwh=4000&period=12&compact=1`);
  const items = est.items ?? [];
  if (items.length < 20) fail(`${region}: kun ${items.length} aftaler i estimatet`);
  if (items.some((p) => p.restricted === undefined || p.firstTimeDiscountKr === undefined || p.nextProduct === undefined || p.supplier?.advisory === undefined)) {
    fail(`${region}: estimatet mangler et af felterne restricted/firstTimeDiscountKr/nextProduct/supplier.advisory`);
  }
  const spotClean = items.filter((p) => p.prices?.spotBased && !p.restricted && !p.supplier?.advisory && !(p.firstTimeDiscountKr > 0) && !p.introOffer);
  if (!spotClean.length) fail(`${region}: ingen ren, varig, spotbaseret aftale — medianen af tillæg kan ikke regnes`);
  if (spotClean.some((p) => typeof p.prices?.energyOreExVat !== "number")) fail(`${region}: prices.energyOreExVat mangler`);

  const tp = await get(`/api/v1/timepris?region=${region}`);
  const hours = tp.market?.today?.hours ?? [];
  if (hours.length < 23) fail(`${region}: dagens timepris har kun ${hours.length} timer`);
  if (typeof tp.market?.now?.totalOre !== "number") fail(`${region}: timepris mangler market.now.totalOre`);
}

console.log(`audit-feed: ok — ${health.counts.products} aftaler, priser fra ${health.dataAsOf.products}, 24-timers marked og timepris i DK1/DK2`);
