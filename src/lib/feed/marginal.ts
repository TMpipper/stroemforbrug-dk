/**
 * Fælles regel fra el-feed (examples/site/lib/el-feed-marginal.ts) — ret den dér, ikke her.
 *
 * Marginalprisen: hvad én kWh MERE koster, uden abonnement. Det er prisen apparat- og
 * forbrugssider regner med ("hvad koster det at bruge") — aldrig den gennemsnitlige all-in-pris,
 * som også fordeler abonnementer ud pr. kWh og derfor overdriver, hvad en time mere koster.
 *
 *   (gns. af månedens spotprofil + gns. af nettariffen + Energinets tariffer + elafgift
 *    + medianen af de rene, varige, spotbaserede aftalers tillæg) × moms
 *
 * Alle led kommer fra feedet pr. landsdel (repræsentativt netområde). Tillægget er medianen,
 * så sitet hverken regner med den billigste partners tillæg eller med en dyr aftales.
 *
 * Bemærk `spotBasis`: feedets `thisMonth.spotHourlyOre` er en TIME-PROFIL for måneden
 * (sæsonmønster fra samme måned sidste år, løftet til de seneste tre hele måneders niveau) —
 * ikke månedens realiserede gennemsnit. Grundlagssætningen skal derfor gengive feedets egen
 * tekst og må ikke kalde tallet "spotprisens gennemsnit for måneden".
 *
 * Modulet er rent (ingen React/Next), så det kan testes i el-feed og kopieres ordret.
 */
import type { FeedEstimateProduct, FeedMarketResponse } from "./types";
import { fromFeed, isClean, isLastingDeal } from "./compare";

/** Momsfaktoren for marginalprisens eget regnestykke — det ene tal, der må stå i en kopi. */
export const VAT_FACTOR = 1.25;

export type MarginalRegion = "DK1" | "DK2";
export type ThisMonth = FeedMarketResponse["thisMonth"];

export interface MarginalParts {
  /** øre/kWh ekskl. moms */
  spotOre: number;
  gridOre: number;
  chargesOre: number;
  markupOre: number;
}

export interface MarginalPrice {
  region: MarginalRegion;
  /** "2026-10" */
  month: string;
  /** Feedets egen beskrivelse af spotgrundlaget — SKAL vises, hvor prisen bruges. */
  spotBasis: string;
  /** kr./kWh inkl. moms, uden abonnement, rundet til hele øre */
  krPerKwh: number;
  /** Markedets grundlag uden tillæg (spot + net + afgifter), kr./kWh inkl. moms, rundet til øre. */
  baseKrPerKwh: number;
  parts: MarginalParts;
  /** Antal rene, varige, spotbaserede aftaler bag medianen. */
  markupOffers: number;
}

export class MarginalError extends Error {
  constructor(message: string) {
    super(`marginalpris: ${message}`);
    this.name = "MarginalError";
  }
}

const avg = (xs: readonly number[]) => xs.reduce((a, b) => a + b, 0) / xs.length;

export function median(xs: readonly number[]): number {
  if (!xs.length) throw new MarginalError("median af en tom liste");
  const s = [...xs].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m]! : (s[m - 1]! + s[m]!) / 2;
}

const finitePositive = (x: unknown): x is number => typeof x === "number" && Number.isFinite(x) && x > 0;
const finiteNonNegative = (x: unknown): x is number => typeof x === "number" && Number.isFinite(x) && x >= 0;
const roundOre = (kr: number) => Math.round(kr * 100) / 100;

/**
 * Tillæggene (øre/kWh ekskl. moms), der må indgå i medianen: aftaler uden anmærkning,
 * uden introtilbud, uden kontant rabat, uden betingelse — og spotbaserede, så "tillæg"
 * betyder det samme for alle.
 */
export function cleanLastingSpotMarkupsOreExVat(items: readonly FeedEstimateProduct[]): number[] {
  return items
    .filter((p) => p.prices.spotBased)
    .filter((p) => {
      const row = fromFeed(p);
      return isClean(row) && isLastingDeal(row);
    })
    .map((p) => p.prices.energyOreExVat)
    .filter((x): x is number => typeof x === "number" && Number.isFinite(x) && x >= 0);
}

export function marginalFromFeed(
  region: MarginalRegion,
  thisMonth: ThisMonth,
  items: readonly FeedEstimateProduct[],
): MarginalPrice {
  if (!Array.isArray(thisMonth.spotHourlyOre) || thisMonth.spotHourlyOre.length !== 24) {
    throw new MarginalError(`${region}: spotHourlyOre har ${thisMonth.spotHourlyOre?.length ?? 0} værdier, ikke 24`);
  }
  if (!Array.isArray(thisMonth.gridTariffHourlyKr) || thisMonth.gridTariffHourlyKr.length !== 24) {
    throw new MarginalError(`${region}: gridTariffHourlyKr har ${thisMonth.gridTariffHourlyKr?.length ?? 0} værdier, ikke 24`);
  }
  if (!/^\d{4}-\d{2}$/.test(thisMonth.month)) throw new MarginalError(`${region}: ugyldig måned "${thisMonth.month}"`);
  if (typeof thisMonth.spotBasis !== "string" || !thisMonth.spotBasis.trim()) {
    throw new MarginalError(`${region}: spotBasis mangler — grundlaget kan ikke beskrives`);
  }
  const spotOre = avg(thisMonth.spotHourlyOre);
  const gridOre = avg(thisMonth.gridTariffHourlyKr) * 100;
  const { transmissionKr, systemKr, elAfgiftKr } = thisMonth;
  if (!finitePositive(spotOre) || !finitePositive(gridOre)) throw new MarginalError(`${region}: spot eller nettarif er ikke positiv`);
  if (![transmissionKr, systemKr, elAfgiftKr].every(finiteNonNegative)) throw new MarginalError(`${region}: Energinet-tariffer eller elafgift mangler`);
  const chargesOre = (transmissionKr + systemKr + elAfgiftKr) * 100;

  const markups = cleanLastingSpotMarkupsOreExVat(items);
  if (!markups.length) throw new MarginalError(`${region}: ingen ren, varig, spotbaseret aftale at tage medianen af`);
  const markupOre = median(markups);

  const baseOreExVat = spotOre + gridOre + chargesOre;
  return {
    region,
    month: thisMonth.month,
    spotBasis: thisMonth.spotBasis,
    krPerKwh: roundOre(((baseOreExVat + markupOre) * VAT_FACTOR) / 100),
    baseKrPerKwh: roundOre((baseOreExVat * VAT_FACTOR) / 100),
    parts: { spotOre, gridOre, chargesOre, markupOre },
    markupOffers: markups.length,
  };
}

const MONTHS = ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"];

/** "2026-10" → "oktober 2026" */
export function marginalMonthLabel(month: string): string {
  const [y, m] = month.split("-").map(Number);
  return `${MONTHS[(m ?? 1) - 1]} ${y}`;
}

/** "1,52 kr./kWh" — dansk komma, altid to decimaler. */
export function formatMarginal(krPerKwh: number): string {
  return `${krPerKwh.toFixed(2).replace(".", ",")} kr./kWh`;
}

/**
 * Den obligatoriske grundlagssætning, hvor marginalprisen bruges. Gengiver feedets eget
 * spotgrundlag ordret, så sitet aldrig påstår et månedsgennemsnit, feedet ikke har regnet.
 */
export function basisSentence(dk1: MarginalPrice, dk2: MarginalPrice): string {
  const basis = dk1.spotBasis === dk2.spotBasis ? dk1.spotBasis : `${dk1.spotBasis}; ${dk2.spotBasis}`;
  return (
    `Regnet med ${formatMarginal(dk1.krPerKwh)} i Vestdanmark (DK1) og ${formatMarginal(dk2.krPerKwh)} i Østdanmark (DK2): ` +
    `feedets forventede spotpris for ${marginalMonthLabel(dk1.month)} (${basis.replace(/\.$/, "")}), ` +
    `nettariffen i landsdelens repræsentative netområde, Energinets tariffer, elafgift og medianen af de rene, varige ` +
    `spotaftalers tillæg — alt inkl. moms og uden abonnement, som ikke ændrer sig, når et apparat bruger en time mere.`
  );
}
