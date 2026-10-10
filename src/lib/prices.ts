/**
 * Sitets prismotor — det ENE sted, der afgør marginal mod all-in. Alt andet får tallene som argument.
 *
 * To priser, som aldrig må blandes:
 *  - `marginal` (kr./kWh inkl. moms, UDEN abonnement): hvad én kWh mere koster. Det er prisen,
 *    et apparat koster at bruge. Fælles regel fra el-feed (src/lib/feed/marginal.ts).
 *  - `deals[*].cheapest/typical` (hele regningen ved REFERENCE_KWH, MED abonnementer): hvad en
 *    husstand betaler — kun til "skift elselskab", aldrig til et apparat.
 *
 * Den eneste lovlige krydsning er `savingPerKwh`: forskellen mellem markedets marginalpris og
 * den billigste rene, varige aftales marginalpris. Den skalerer ærligt ned til ét apparat.
 *
 * Feedet er sandheden. Fejler det, kaster vi: under ISR beholder Next den sidst byggede side,
 * og i prebuild stopper audit-feed bygget, før det kan skrive forkerte tal. Ingen reservekonstant.
 */
import { cache } from "react";
import { elFeed, type Place } from "./feed/client";
import { basisSentence, marginalFromFeed, type MarginalPrice } from "./feed/marginal";
import { cheapestBadgeId, fromFeed, isClean, isLastingDeal, marketReference, scopeText } from "./feed/compare";
import type { FeedEstimateProduct, FeedEstimateResponse } from "./feed/types";
import { goSlugFor } from "./partners";

export type Region = "DK1" | "DK2";
export const REGIONS: readonly Region[] = ["DK1", "DK2"];
/** Feedets standardforbrug — et forbrugstal, ikke en pris. */
export const REFERENCE_KWH = 4000;
export const PERIOD_MONTHS = 12 as const;

/** Mærkede tal, så en all-in-pris ikke kan sniges ind, hvor et apparat regnes. */
export type MarginalKr = number & { readonly __kind?: "marginal" };
export type AllInKr = number & { readonly __kind?: "all-in" };

export interface Marginal {
  dk1: MarginalPrice;
  dk2: MarginalPrice;
  /** Landsgennemsnit (lige vægt DK1/DK2), rundet til øre — til prosa med ét tal. */
  dk: MarginalKr;
  /** "2026-10" */
  month: string;
  /** Den obligatoriske grundlagssætning. */
  basis: string;
}

export interface CheapestDeal {
  id: string;
  supplierSlug: string;
  supplierName: string;
  productName: string;
  /** /go/-slug når selskabet er partner, ellers null (ingen knap). */
  goSlug: string | null;
  spotBased: boolean;
  /** Hele regningen over 12 måneder ved `kwh`, inkl. abonnementer. */
  allInKr: AllInKr;
  allInKrPerKwh: AllInKr;
  /** Aftalens energipris/tillæg, øre/kWh inkl. moms. */
  energyOreInclVat: number;
  /** Aftalens marginalpris: markedets grundlag + aftalens tillæg (spot) eller net+afgifter + fast energipris. */
  marginalKrPerKwh: MarginalKr;
  validTo: string | null;
}

export interface DealMarket {
  region: Region;
  kwh: number;
  areaLabel: string;
  regionRepresentative: boolean;
  periodMonths: typeof PERIOD_MONTHS;
  cheapest: CheapestDeal | null;
  /** Medianen af de rene, varige aftaler — "en typisk aftale", ikke den billigste. */
  typical: { allInKr: AllInKr; allInKrPerKwh: AllInKr; offers: number; suppliers: number } | null;
  /** Omfanget, enhver superlativ skal stå sammen med i samme sætning. */
  scope: string;
  offers: number;
  suppliers: number;
  generatedAt: string;
}

export interface SitePrices {
  marginal: Marginal;
  deals: Record<Region, DealMarket>;
  /** Feedets eget tidsstempel for aftalerne (ISO). */
  generatedAt: string;
}

const roundOre = (kr: number) => Math.round(kr * 100) / 100;

function dealMarketFrom(region: Region, kwh: number, res: FeedEstimateResponse, marginal: MarginalPrice): DealMarket {
  const items = res.items;
  if (!items.length) throw new Error(`el-feed: ingen aftaler for ${region} ved ${kwh} kWh`);
  const rows = items.map(fromFeed);
  const clean = rows.filter((r) => isClean(r) && isLastingDeal(r));
  const areaLabel = res.meta.area.gridCompany ?? res.meta.area.gridArea;
  const scope = scopeText(clean.length, new Set(clean.map((r) => r.supplierSlug)).size, areaLabel, kwh, res.meta.periodMonths);
  const ref = marketReference(rows);
  const bestId = cheapestBadgeId(rows);
  const best = bestId ? items.find((p) => p.slug === bestId) ?? null : null;
  return {
    region,
    kwh,
    areaLabel,
    regionRepresentative: res.meta.area.regionRepresentative,
    periodMonths: PERIOD_MONTHS,
    cheapest: best ? cheapestFrom(best, kwh, marginal) : null,
    typical: ref ? { allInKr: ref.allInKr, allInKrPerKwh: roundOre(ref.allInKr / kwh), offers: ref.offers, suppliers: ref.suppliers } : null,
    scope,
    offers: clean.length,
    suppliers: new Set(clean.map((r) => r.supplierSlug)).size,
    generatedAt: res.meta.generatedAt,
  };
}

function cheapestFrom(p: FeedEstimateProduct, kwh: number, m: MarginalPrice): CheapestDeal {
  const spotBased = p.prices.spotBased;
  const energyOreInclVat = p.prices.energyOreInclVat;
  // Spotaftale: markedets grundlag (spot + net + afgifter) + tillægget.
  // Fastprisaftale: net + afgifter (uden spot) + den faste energipris.
  const netAndChargesKr = ((m.parts.gridOre + m.parts.chargesOre) * 1.25) / 100;
  const marginalKrPerKwh = spotBased ? m.baseKrPerKwh + energyOreInclVat / 100 : netAndChargesKr + energyOreInclVat / 100;
  return {
    id: p.slug,
    supplierSlug: p.supplier.slug,
    supplierName: p.supplier.name,
    productName: p.name,
    goSlug: goSlugFor(p.supplier.slug),
    spotBased,
    allInKr: p.estimate.totalInclVat,
    allInKrPerKwh: roundOre(p.estimate.totalInclVat / kwh),
    energyOreInclVat,
    marginalKrPerKwh: roundOre(marginalKrPerKwh),
    validTo: p.prices.validTo,
  };
}

const estimateFor = cache(async (region: Region, kwh: number) =>
  elFeed.estimate({ region, kwh, period: PERIOD_MONTHS, compact: 1 } as Place & { kwh: number; period: 12; compact: 1 }),
);
const marketFor = cache(async (region: Region) => elFeed.market({ region }));

const marginalFor = cache(async (region: Region): Promise<MarginalPrice> => {
  const [m, est] = await Promise.all([marketFor(region), estimateFor(region, REFERENCE_KWH)]);
  return marginalFromFeed(region, m.thisMonth, est.items);
});

/** Alle sitets priser for dette build/request — ét kald pr. render, delt af alle komponenter. */
export const getPrices = cache(async (): Promise<SitePrices> => {
  const [dk1, dk2, est1, est2] = await Promise.all([
    marginalFor("DK1"),
    marginalFor("DK2"),
    estimateFor("DK1", REFERENCE_KWH),
    estimateFor("DK2", REFERENCE_KWH),
  ]);
  if (dk1.month !== dk2.month) throw new Error(`el-feed: DK1 (${dk1.month}) og DK2 (${dk2.month}) er i hver sin måned`);
  const dk = roundOre((dk1.krPerKwh + dk2.krPerKwh) / 2);
  return {
    marginal: { dk1, dk2, dk, month: dk1.month, basis: basisSentence(dk1, dk2) },
    deals: { DK1: dealMarketFrom("DK1", REFERENCE_KWH, est1, dk1), DK2: dealMarketFrom("DK2", REFERENCE_KWH, est2, dk2) },
    generatedAt: est1.meta.generatedAt,
  };
});

/** Markedet ved et andet forbrug end referencen — til CTA'en på husstands- og varmepumpesider. */
export const getDealMarket = cache(async (region: Region, kwh: number): Promise<DealMarket> => {
  const [res, m] = await Promise.all([estimateFor(region, kwh), marginalFor(region)]);
  return dealMarketFrom(region, kwh, res, m);
});

/** Feedets ni boligtyper (forbrugsvælgeren) — hentes, skrives aldrig af. */
export const getPresets = cache(async () => (await elFeed.presets()).items);

/** Den tokenbare del af priserne — det, prosaen må regne med. */
export function tokenPrices(p: SitePrices) {
  return { dk: p.marginal.dk, dk1: p.marginal.dk1.krPerKwh, dk2: p.marginal.dk2.krPerKwh, month: p.marginal.month };
}

/**
 * Hvad én kWh er billigere på den billigste rene, varige aftale end på markedets marginalpris.
 * Den ENESTE lovlige krydsning af de to prisverdener — og den er marginal mod marginal.
 */
export function savingPerKwh(p: SitePrices, region: Region): number {
  const c = p.deals[region].cheapest;
  if (!c) return 0;
  return Math.max(0, roundOre(p.marginal[region === "DK1" ? "dk1" : "dk2"].krPerKwh - c.marginalKrPerKwh));
}

/** Årlig besparelse, der kan tilskrives ét apparats forbrug, kr. */
export function applianceSaving(kwhPerYear: number, p: SitePrices, region: Region): number {
  return Math.max(0, kwhPerYear * savingPerKwh(p, region));
}
