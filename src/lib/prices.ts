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
import { VAT_FACTOR, basisSentence, marginalFromFeed, type MarginalPrice } from "./feed/marginal";
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
  /** Feedets spejlede logo (/api/v1/logo/<slug>.<ext>?v=…) — aldrig en lokal fil. */
  logoUrl: string | null;
  productName: string;
  /** /go/-slug når selskabet er partner, ellers null (ingen knap). */
  goSlug: string | null;
  spotBased: boolean;
  /** Hele regningen over 12 måneder ved `kwh`, inkl. abonnementer. */
  allInKr: AllInKr;
  allInKrPerKwh: AllInKr;
  /** Aftalens energipris/tillæg, øre/kWh inkl. moms. */
  energyOreInclVat: number;
  /** Elselskabets abonnement ved dette forbrug, kr./md. inkl. moms (Altids trin ved 4.000 kWh = 18). */
  subscriptionKrMonth: number;
  /** Alle gebyrer pr. år inkl. moms: kWh-gebyrer, månedlige gebyrer og betalingsgebyr. */
  feesKrYear: number;
  /** Elselskabets samlede andel af regningen pr. år (abonnement + tillæg × kWh + gebyrer), kr. inkl. moms. */
  supplierKrYear: number;
  bindingMonths: number;
  /** Aftalens marginalpris: markedets grundlag + aftalens tillæg (spot) eller net+afgifter + fast energipris. */
  marginalKrPerKwh: MarginalKr;
  validTo: string | null;
}

/** Den billigste rene, varige aftale blandt de selskaber, vi har en aftale med — det, den store knap peger på. */
export interface CheapestPartner extends CheapestDeal {
  goSlug: string;
  /** Placering blandt alle rene, varige aftaler i markedet (1 = markedets billigste). */
  rankInMarket: number;
  /** Samme årspris som markedets billigste aftale (fx Altid Energi = Enkel Energi 2026-10-11). */
  tiedWithCheapest: boolean;
  /** "af de N elselskaber uden anmærkning, vi har en aftale med, ved 4.000 kWh om året i …" */
  partnerScope: string;
}

export interface DealMarket {
  region: Region;
  cheapestPartner: CheapestPartner | null;
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

/**
 * Feedets logo-URL → vores egen /api/logo/… (samme fil, samme hash). Browseren henter så billedet fra
 * samme oprindelse; Chromium (ORB) blokerede det ellers direkte fra el-feed. Kilden er stadig kun feedet.
 */
export function localLogoUrl(url: string | null | undefined): string | null {
  if (!url) return null;
  const m = url.match(/\/api\/v1\/logo\/([a-z0-9-]+\.[a-z]+)(?:\?v=([a-f0-9]+))?/i);
  if (!m) return null;
  return `/api/logo/${m[1]}${m[2] ? `?v=${m[2]}` : ""}`;
}

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
  // Partnerne: rene, varige aftaler fra selskaber med /go/-aftale, billigste først (rows er allerede sorteret efter pris).
  const partnerRows = clean.filter((r) => goSlugFor(r.supplierSlug));
  const partnerBest = partnerRows[0] ? items.find((p) => p.slug === partnerRows[0].id) ?? null : null;
  const cheapestPartner: CheapestPartner | null = partnerBest
    ? {
        ...cheapestFrom(partnerBest, kwh, marginal),
        goSlug: goSlugFor(partnerBest.supplier.slug)!,
        rankInMarket: clean.findIndex((r) => r.id === partnerBest.slug) + 1,
        tiedWithCheapest: !!best && Math.round(best.estimate.totalInclVat) === Math.round(partnerBest.estimate.totalInclVat),
        partnerScope: `af de ${new Set(partnerRows.map((r) => r.supplierSlug)).size} elselskaber uden anmærkning, vi har en aftale med, ved ${kwh.toLocaleString("da-DK")} kWh om året i ${areaLabel}`,
      }
    : null;
  return {
    region,
    cheapestPartner,
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
  const netAndChargesKr = ((m.parts.gridOre + m.parts.chargesOre) * VAT_FACTOR) / 100;
  const marginalKrPerKwh = spotBased ? m.baseKrPerKwh + energyOreInclVat / 100 : netAndChargesKr + energyOreInclVat / 100;
  return {
    id: p.slug,
    supplierSlug: p.supplier.slug,
    supplierName: p.supplier.name,
    logoUrl: localLogoUrl(p.supplier.logoUrl),
    productName: p.name,
    goSlug: goSlugFor(p.supplier.slug),
    spotBased,
    allInKr: p.estimate.totalInclVat,
    allInKrPerKwh: roundOre(p.estimate.totalInclVat / kwh),
    energyOreInclVat,
    subscriptionKrMonth: p.prices.subscriptionKrMonthInclVat,
    feesKrYear: Math.round((p.prices.perKwhFeesOreInclVat * kwh) / 100 + p.prices.monthlyFeesKrMonthInclVat * 12 + p.prices.paymentFeesKrYearInclVat),
    supplierKrYear: Math.round(p.supplierCost.annualInclVat),
    bindingMonths: p.bindingMonths ?? 0,
    marginalKrPerKwh: roundOre(marginalKrPerKwh),
    validTo: p.prices.validTo,
  };
}

const estimateFor = cache(async (region: Region, kwh: number) =>
  elFeed.estimate({ region, kwh, period: PERIOD_MONTHS, compact: 1 } as Place & { kwh: number; period: 12; compact: 1 }),
);
const marketFor = cache(async (region: Region) => elFeed.market({ region }));

/**
 * Kun til ækvivalenskontrollen af kodemod'en (scripts/equivalence-check.mjs): bygger sitet med en
 * fastlåst marginalpris, så den nye HTML kan sammenlignes med den gamle. Virker aldrig på Vercel.
 */
const DEV_OVERRIDE: Partial<Record<Region, number>> | null = (() => {
  if (process.env.VERCEL || !process.env.PRICE_OVERRIDE_DEV) return null;
  const [a, b] = process.env.PRICE_OVERRIDE_DEV.split(",").map(Number);
  return a ? { DK1: a, DK2: b || a } : null;
})();

const marginalFor = cache(async (region: Region): Promise<MarginalPrice> => {
  const [m, est] = await Promise.all([marketFor(region), estimateFor(region, REFERENCE_KWH)]);
  const real = marginalFromFeed(region, m.thisMonth, est.items);
  const o = DEV_OVERRIDE?.[region];
  if (o) return { ...real, krPerKwh: o, baseKrPerKwh: o - 0.1 };
  return real;
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

/** Det, beregneren (klient) må kende: de to marginalpriser og måneden. */
export function calculatorPrices(p: SitePrices) {
  return { dk1: p.marginal.dk1.krPerKwh, dk2: p.marginal.dk2.krPerKwh, month: p.marginal.month };
}

/**
 * Beregnerens aftale: den billigste rene, varige aftale blandt PARTNERNE (den har en knap) — markedets
 * billigste som reserve, hvis ingen partner er med. Besparelsen er marginal mod marginal.
 */
export function calculatorDeal(p: SitePrices) {
  const one = (r: Region) => {
    const m = p.deals[r];
    const c = m.cheapestPartner ?? m.cheapest;
    if (!c) return null;
    const marginal = p.marginal[r === "DK1" ? "dk1" : "dk2"].krPerKwh;
    return {
      supplierName: c.supplierName,
      logoUrl: c.logoUrl,
      productName: c.productName,
      goSlug: c.goSlug,
      savingPerKwh: Math.max(0, roundOre(marginal - c.marginalKrPerKwh)),
      subscriptionKrMonth: c.subscriptionKrMonth,
      markupOre: Math.round(c.energyOreInclVat),
      feesKrYear: c.feesKrYear,
      bindingMonths: c.bindingMonths,
      /** Omfanget, der skal stå sammen med "billigst" — partnerskopet, når aftalen er en partners. */
      scope: "partnerScope" in c ? (c as CheapestPartner).partnerScope : m.scope,
    };
  };
  return { DK1: one("DK1"), DK2: one("DK2") };
}

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
