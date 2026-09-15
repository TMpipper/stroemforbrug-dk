/**
 * Canonical elpris engine for Strømforbrug.dk.
 *
 * Every kroner figure on this site derives from EL_PRICE_KR_PER_KWH. Never type
 * a price or a cost into prose — import `costPerYear`, `costRange` or `formatKr`
 * and let it compute. `npm run audit-prices` fails the build if prose drifts.
 *
 * Mirrors the cost engine on elselskaber.dk (src/lib/pricing.ts) so the two
 * sites can never disagree about what a kWh costs.
 *
 * Marginal elpris (kr./kWh) = (spotpris + transport + elafgift) × 1,25 + spottillæg
 *
 * Abonnement is deliberately NOT included: it is a fixed monthly cost that does
 * not change when an appliance runs an hour longer. Every figure on this site
 * answers "what does using this cost", so the marginal price is the correct one.
 */

export type Area = "DK1" | "DK2";

export const MOMS = 1.25;

/**
 * Market inputs — update monthly together with SITE_CONFIG.pricesLastUpdated.
 * Sources:
 *  - Spot: Energi Data Service, DayAheadPrices, månedsgennemsnit (ekskl. moms)
 *  - Transport: Forsyningstilsynet elprisstatistik (netselskab + Energinet
 *    net-/systemtarif + net-abonnement omregnet til øre/kWh ved 4.000 kWh),
 *    forbrugsvægtet gennemsnit for de 30 mest solgte produkter (ekskl. moms)
 *  - Elafgift: 0,8 øre/kWh ekskl. moms i 2026 og 2027 (midlertidigt nedsat, skat.dk)
 */
export const MARKET = {
  period: "august 2026",
  periodIso: "2026-08",
  spotOre: { DK1: 93.63, DK2: 94.87 },
  transportOre: { DK1: 41.49, DK2: 49.21 },
  elafgiftOre: 0.8,
  /**
   * Median spottillæg across the seven providers whose terms we verify on their
   * own price pages (Altid 0, SEF 0, OK 0, EWII 6,5, DCC 7,5, Norlys 9,7, AURA 10).
   */
  medianTillaegOre: 6.5,
  sources: {
    spot: "https://www.energidataservice.dk/tso-electricity/DayAheadPrices",
    transport: "https://forsyningstilsynet.dk/analyser-og-tal/forbrugerpriser/elpriser",
    elafgift: "https://svmn.dk/tal-og-metode/satser/satser-og-beloebsgraenser-i-lovgivningen/elafgiftsloven",
  },
  /** Forsyningstilsynet's own all-in average for the 30 best-selling products, same month */
  fstAverageKrKwh: { DK1: 1.87, DK2: 2.02 },
} as const;

/** Fixed part of the price everyone pays regardless of provider, øre/kWh inkl. moms */
export function marketBaseOre(area: Area): number {
  return (MARKET.spotOre[area] + MARKET.transportOre[area] + MARKET.elafgiftOre) * MOMS;
}

/**
 * Typical abonnement converted to øre/kWh at the reference consumption, so it can
 * be subtracted from Forsyningstilsynet's all-in average to get a marginal price.
 */
export const REFERENCE_KWH = 4000;
export const TYPICAL_ABONNEMENT_KR_MONTH = 30;
const abonnementOre = (TYPICAL_ABONNEMENT_KR_MONTH * 12) / REFERENCE_KWH * 100;

/**
 * Marginal elpris for one area, kr./kWh inkl. moms.
 *
 * Derived from Forsyningstilsynet's published all-in average for the 30
 * best-selling products — a representative market basket — minus a typical
 * abonnement. We deliberately do NOT build this from our own seven partners'
 * spottillæg: they are among the cheapest on the market, so their median would
 * understate what a normal household actually pays and would flatter the
 * savings figures on this site. `assertPriceModel()` keeps the two in step.
 */
export function priceForArea(area: Area): number {
  return MARKET.fstAverageKrKwh[area] - abonnementOre / 100;
}

/** Component build-up, used only as a cross-check on priceForArea() */
export function priceFromComponents(area: Area): number {
  return (marketBaseOre(area) + MARKET.medianTillaegOre) / 100;
}

export const PRICE_DK1 = priceForArea("DK1");
export const PRICE_DK2 = priceForArea("DK2");

/**
 * National average marginal elpris, kr./kWh inkl. moms — the single number behind
 * every cost on this site. Rounded to øre so prose and calculators always agree.
 */
export const EL_PRICE_KR_PER_KWH = Math.round(((PRICE_DK1 + PRICE_DK2) / 2) * 100) / 100;

/**
 * Two independent methods must agree within 5 %: Forsyningstilsynet's basket
 * minus abonnement, and spot + transport + afgift + median tillæg built from
 * first-party sources. If a MARKET update breaks this, one of the inputs is stale.
 * Called from `npm run audit-prices`.
 */
export function assertPriceModel(): void {
  for (const area of ["DK1", "DK2"] as const) {
    const fst = priceForArea(area);
    const components = priceFromComponents(area);
    const drift = Math.abs(fst - components) / fst;
    if (drift > 0.05) {
      throw new Error(
        `pricing.ts: ${area} price methods disagree by ${(drift * 100).toFixed(1)} % ` +
          `(Forsyningstilsynet-derived ${fst.toFixed(3)} vs components ${components.toFixed(3)}). ` +
          `Check MARKET.spotOre / transportOre / fstAverageKrKwh for ${MARKET.period}.`,
      );
    }
  }
}

export const PRICE_DEFINITION =
  `Marginal elpris pr. kWh inkl. moms: gennemsnitlig spotpris for ${MARKET.period} + median spottillæg + gennemsnitlig nettarif, Energinet-tarif og net-abonnement + elafgift. Abonnement er ikke medregnet, fordi det er en fast månedlig udgift, der ikke ændrer sig, når et apparat kører en time længere.`;

/* ---------- all-in prices, for savings comparisons ---------- */

/**
 * Forsyningstilsynet's average already includes abonnement, so this is the
 * all-in yearly cost on a typical aftale — the baseline every saving on this
 * site is measured against.
 */
export function typicalAnnualCost(kwhPerYear: number): number {
  const avg = (MARKET.fstAverageKrKwh.DK1 + MARKET.fstAverageKrKwh.DK2) / 2;
  return avg * kwhPerYear;
}

/** Typical all-in price per kWh, for prose that needs a single headline number */
export const TYPICAL_ALL_IN_KR_PER_KWH =
  Math.round(((MARKET.fstAverageKrKwh.DK1 + MARKET.fstAverageKrKwh.DK2) / 2) * 100) / 100;

/**
 * The lowest spottillæg among the aftaler we track (Altid Energi, SEF BareEl and
 * OK Højt Forbrug all quote 0 øre). Duplicated here as a plain number rather than
 * imported from offers.ts, because offers.ts imports this file — `assertOffers()`
 * there fails the build if any tracked offer ever goes below it.
 */
export const CHEAPEST_TILLAEG_ORE = 0;

/**
 * Marginal price on the cheapest aftale — market base plus its spottillæg, no
 * abonnement. Compare against EL_PRICE_KR_PER_KWH (also marginal); never against
 * an all-in figure, and never describe it as "uden abonnement": the cheapest
 * aftale still charges 18–127 kr./md. depending on consumption.
 */
export const CHEAPEST_MARGINAL_KR_PER_KWH =
  Math.round(
    (((marketBaseOre("DK1") + marketBaseOre("DK2")) / 2 + CHEAPEST_TILLAEG_ORE) / 100) * 100,
  ) / 100;

/**
 * What one kWh is cheaper on the cheapest aftale. Use this — never
 * (marginal − all-in) — when showing what switching saves on a single
 * appliance's consumption: the saving comes from the household's aftale, so the
 * per-kWh differential is the only figure that scales down honestly.
 */
export const SAVING_PER_KWH = EL_PRICE_KR_PER_KWH - CHEAPEST_MARGINAL_KR_PER_KWH;

/** Yearly saving attributable to one appliance's consumption, kr. */
export function applianceSaving(kwhPerYear: number): number {
  return Math.max(0, kwhPerYear * SAVING_PER_KWH);
}

/* ---------- cost helpers ---------- */

/** Annual cost in kr. of a given yearly consumption */
export function costPerYear(kwhPerYear: number, price = EL_PRICE_KR_PER_KWH): number {
  return kwhPerYear * price;
}

/** Monthly cost in kr. of a given yearly consumption */
export function costPerMonth(kwhPerYear: number, price = EL_PRICE_KR_PER_KWH): number {
  return (kwhPerYear * price) / 12;
}

/* ---------- formatting ---------- */

/** "1.234" — whole kroner, Danish thousands separator */
export function formatKr(amount: number): string {
  return Math.round(amount).toLocaleString("da-DK");
}

/** "1,85" — two decimals, Danish comma */
export function formatPrice(price: number): string {
  return price.toFixed(2).replace(".", ",");
}

/** "2,45" for small amounts where whole kroner would lose the point */
export function formatKrExact(amount: number): string {
  return amount.toFixed(2).replace(".", ",");
}

/** "310-520" — a cost range from a kWh range */
export function costRange(kwhRange: readonly [number, number], price = EL_PRICE_KR_PER_KWH): string {
  return `${formatKr(kwhRange[0] * price)}-${formatKr(kwhRange[1] * price)}`;
}

/** "26-43" — a monthly cost range from a yearly kWh range */
export function costRangeMonthly(kwhRange: readonly [number, number], price = EL_PRICE_KR_PER_KWH): string {
  return `${formatKr((kwhRange[0] * price) / 12)}-${formatKr((kwhRange[1] * price) / 12)}`;
}

/** "18-30" øre — cost of a small kWh amount expressed in øre */
export function costOre(kwh: number, price = EL_PRICE_KR_PER_KWH): number {
  return Math.round(kwh * price * 100);
}

/** The formatted price string used throughout prose: "1,85 kr./kWh" */
export const PRICE_LABEL = `${formatPrice(EL_PRICE_KR_PER_KWH)} kr./kWh`;

/* ---------- SEO helpers ---------- */

/**
 * Swaps the year in a title or description for the current one at build time.
 *
 * Titles are written with a literal "(2026)" in the content files so they read
 * correctly in the editor, but a hardcoded year silently goes stale every
 * January — on a site whose whole pitch is current prices, that is the first
 * thing a reader notices. The site is statically generated and redeployed, so
 * rendering the year keeps every title current without touching 43 data files.
 */
export function withCurrentYear(text: string, now: Date = new Date()): string {
  return text.replace(/\((19|20)\d{2}\)/g, `(${now.getFullYear()})`);
}
