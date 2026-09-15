/**
 * The elaftaler we link to, and the engine that decides which one to recommend
 * at a given consumption.
 *
 * Why this exists: Strømforbrug.dk's audience is people measuring their own
 * consumption, and the cheapest aftale is NOT the same at 1.600 kWh and at
 * 10.000 kWh. A single hardcoded "billigste selskab" is wrong for most of the
 * visitors this site attracts, so the CTA computes the winner per household.
 *
 * Terms mirror elselskaber.dk/src/lib/providers.ts, verified on each provider's
 * own price page on 2026-09-13. Tillæg are øre/kWh INKL. moms.
 * Never type one of these numbers into prose — import and render it.
 */

import { CHEAPEST_TILLAEG_ORE, marketBaseOre, type Area } from "./pricing";

export interface FeeTier {
  upToKwh: number | null;
  feeKrMonth: number;
}

export interface Product {
  name: string;
  tillaegOre: number;
  feeTiers: FeeTier[];
}

export interface Campaign {
  /** Months the campaign runs for a new customer. */
  months: number;
  /** Abonnement during the campaign, kr./md. */
  feeKrMonth?: number;
  /** Spottillæg during the campaign, øre/kWh inkl. moms. */
  tillaegOre?: number;
  /** One-off rebate, kr. */
  cashbackKr?: number;
  label: string;
  /** YYYY-MM-DD the campaign starts. Omit when already running. */
  validFrom?: string;
  /** YYYY-MM-DD the campaign ends. Omit when open-ended. */
  validUntil?: string;
  conditions?: string;
}

export interface Offer {
  slug: string;
  name: string;
  products: Product[];
  campaigns?: Campaign[];
  trustpilot: number;
  binding: string;
  /** Oprindelsesgarantier included in the standard product? */
  greenIncluded: boolean;
  priceUrl: string;
}

/**
 * Today in Europe/Copenhagen as YYYY-MM-DD. Deliberately NOT the UTC date: in
 * CEST a build run between 00:00 and 02:00 Danish time would otherwise still see
 * yesterday, so a campaign starting that morning would not go live.
 */
function copenhagenToday(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Copenhagen",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

/**
 * Build date as YYYY-MM-DD. Campaigns switch on and off against this. The site
 * is statically generated, so a campaign starting on a given morning needs a
 * deploy that morning. Override with CAMPAIGN_DATE to preview a future date.
 */
export const BUILD_DATE: string = process.env.CAMPAIGN_DATE || copenhagenToday();

export function activeCampaign(campaigns: Campaign[] | undefined, on: string = BUILD_DATE): Campaign | undefined {
  if (!campaigns?.length) return undefined;
  return campaigns.find((c) => (!c.validFrom || on >= c.validFrom) && (!c.validUntil || on <= c.validUntil));
}

const VERIFIED = "2026-09-13";

export const OFFERS: Offer[] = [
  {
    slug: "altid-energi",
    name: "Altid Energi",
    products: [
      {
        name: "Altid Energi Spot",
        tillaegOre: 0,
        feeTiers: [
          { upToKwh: 5000, feeKrMonth: 18 },
          { upToKwh: 8000, feeKrMonth: 38 },
          { upToKwh: 12000, feeKrMonth: 58 },
          { upToKwh: 20000, feeKrMonth: 98 },
          { upToKwh: null, feeKrMonth: 127 },
        ],
      },
    ],
    trustpilot: 4.5,
    binding: "Ingen binding",
    greenIncluded: false,
    priceUrl: "https://altidenergi.dk/priser/",
  },
  {
    slug: "sef-energi",
    name: "SEF Energi",
    products: [
      {
        name: "BareEl",
        tillaegOre: 0,
        feeTiers: [
          { upToKwh: 6000, feeKrMonth: 39 },
          { upToKwh: null, feeKrMonth: 59 },
        ],
      },
      { name: "TimeEl", tillaegOre: 10.5, feeTiers: [{ upToKwh: null, feeKrMonth: 19 }] },
    ],
    trustpilot: 4.3,
    binding: "Ingen binding",
    greenIncluded: false,
    priceUrl: "https://sefenergi.dk/privat/el/el-aftaler/bareel/",
  },
  {
    slug: "ewii",
    name: "EWII",
    products: [
      { name: "Plus El", tillaegOre: 6.5, feeTiers: [{ upToKwh: null, feeKrMonth: 29 }] },
      { name: "Basis El", tillaegOre: 16.5, feeTiers: [{ upToKwh: null, feeKrMonth: 0 }] },
    ],
    campaigns: [
      {
        // "Intro El", announced by EWII on 2026-09-15, TV support in weeks 43-44.
        // Worth ~304 kr. at 4.000 kWh, i.e. LESS than the 400 kr. it replaces.
        // It only beats the old offer above roughly 7.000 kWh/år, which is why
        // this site — whose visitors skew high-consumption — is a good fit for it.
        months: 6,
        feeKrMonth: 0,
        tillaegOre: 0,
        label: "0 øre tillæg og 0 kr. abonnement i 6 mdr.",
        validFrom: "2026-10-01",
        validUntil: "2027-04-18",
        conditions:
          "Nye kunder uden EWII-el på adressen de seneste 6 måneder. Efter 6 måneder — eller ved et forbrug over 8.000 kWh — gælder normalprisen: markedspris + 6,5 øre/kWh og 29 kr./md.",
      },
      {
        months: 12,
        cashbackKr: 400,
        label: "400 kr. rabat på Plus El",
        validUntil: "2026-09-30",
        conditions: "Nye kunder uden aktiv EWII-elaftale på adressen de seneste 6 måneder",
      },
    ],
    trustpilot: 4.2,
    binding: "Ingen binding",
    greenIncluded: false,
    priceUrl: "https://www.ewii.dk/privat/el/plus-el/",
  },
  {
    slug: "aura",
    name: "AURA",
    products: [
      { name: "AURA POWER", tillaegOre: 0, feeTiers: [{ upToKwh: null, feeKrMonth: 49 }] },
      { name: "AURA FlexEl", tillaegOre: 10, feeTiers: [{ upToKwh: null, feeKrMonth: 21 }] },
      { name: "AURA Light", tillaegOre: 23, feeTiers: [{ upToKwh: null, feeKrMonth: 0 }] },
    ],
    campaigns: [
      { months: 12, cashbackKr: 500, label: "500 kr. velkomstrabat", validUntil: "2027-01-07", conditions: "Nye kunder, modregnes på første elregning" },
    ],
    trustpilot: 4.6,
    binding: "Ingen binding",
    greenIncluded: false,
    priceUrl: "https://www.aura.dk/el/alle-elaftaler/",
  },
  {
    slug: "ok",
    name: "OK",
    products: [
      { name: "OK El Højt Forbrug", tillaegOre: 0, feeTiers: [{ upToKwh: null, feeKrMonth: 49 }] },
      { name: "OK El Lavt Forbrug", tillaegOre: 19, feeTiers: [{ upToKwh: null, feeKrMonth: 0 }] },
    ],
    campaigns: [
      { months: 12, cashbackKr: 500, label: "500 kr. velkomstrabat", validUntil: "2026-09-21", conditions: "Nye elkunder uden OK el de seneste 12 måneder" },
    ],
    trustpilot: 4.3,
    binding: "Ingen binding",
    greenIncluded: false,
    priceUrl: "https://www.ok.dk/privat/produkter/el",
  },
  {
    slug: "dcc-energi",
    name: "DCC Energi",
    products: [{ name: "DCC Energi Flex", tillaegOre: 7.5, feeTiers: [{ upToKwh: null, feeKrMonth: 25 }] }],
    campaigns: [
      { months: 6, feeKrMonth: 0, label: "0 kr. abonnement i 6 mdr.", conditions: "Spottillægget på 7,5 øre/kWh løber uændret" },
    ],
    trustpilot: 4.1,
    binding: "Ingen binding",
    greenIncluded: false,
    priceUrl: "https://www.dccenergi.dk/el/",
  },
  {
    slug: "norlys",
    name: "Norlys",
    products: [{ name: "Norlys FlexEl", tillaegOre: 9.7, feeTiers: [{ upToKwh: null, feeKrMonth: 29 }] }],
    trustpilot: 3.5,
    binding: "Ingen binding",
    greenIncluded: true,
    priceUrl: "https://norlys.dk/el/",
  },
];

export const OFFERS_VERIFIED_AT = VERIFIED;

function feeFor(product: Product, kwh: number): number {
  for (const tier of product.feeTiers) if (tier.upToKwh === null || kwh <= tier.upToKwh) return tier.feeKrMonth;
  return product.feeTiers[product.feeTiers.length - 1].feeKrMonth;
}

/** National average of DK1 and DK2, matching the rest of this site. */
function baseOre(area?: Area): number {
  return area ? marketBaseOre(area) : (marketBaseOre("DK1") + marketBaseOre("DK2")) / 2;
}

function productAnnualCost(product: Product, kwh: number, area?: Area): number {
  return ((baseOre(area) + product.tillaegOre) / 100) * kwh + feeFor(product, kwh) * 12;
}

/** Cheapest product for this household, at normal price. */
export function bestProduct(offer: Offer, kwh: number, area?: Area): Product {
  return offer.products.reduce((best, p) =>
    productAnnualCost(p, kwh, area) < productAnnualCost(best, kwh, area) ? p : best,
  );
}

/** All-in annual cost at normal price, kr. inkl. moms og abonnement. */
export function annualCost(offer: Offer, kwh: number, area?: Area): number {
  return productAnnualCost(bestProduct(offer, kwh, area), kwh, area);
}

/** All-in cost for the first 12 months, including any campaign live on BUILD_DATE. */
export function firstYearCost(offer: Offer, kwh: number, area?: Area): number {
  const product = bestProduct(offer, kwh, area);
  const cost = productAnnualCost(product, kwh, area);
  const c = activeCampaign(offer.campaigns);
  if (!c) return cost;
  const months = Math.min(12, c.months);
  let discount = 0;
  if (c.feeKrMonth !== undefined) discount += (feeFor(product, kwh) - c.feeKrMonth) * months;
  if (c.tillaegOre !== undefined) discount += ((product.tillaegOre - c.tillaegOre) / 100) * kwh * (months / 12);
  if (c.cashbackKr) discount += c.cashbackKr;
  return cost - discount;
}

/** What the live campaign is worth to this household over the first year, kr. */
export function campaignValue(offer: Offer, kwh: number, area?: Area): number {
  return annualCost(offer, kwh, area) - firstYearCost(offer, kwh, area);
}

export interface RankedOffer {
  offer: Offer;
  product: Product;
  firstYear: number;
  normal: number;
  campaign?: Campaign;
}

/** Every aftale ranked by first-year cost for this household, cheapest first. */
export function rankByFirstYear(kwh: number, area?: Area): RankedOffer[] {
  return OFFERS.map((offer) => ({
    offer,
    product: bestProduct(offer, kwh, area),
    firstYear: firstYearCost(offer, kwh, area),
    normal: annualCost(offer, kwh, area),
    campaign: activeCampaign(offer.campaigns),
  })).sort((a, b) => a.firstYear - b.firstYear || a.normal - b.normal);
}

/**
 * The aftale we recommend at this consumption: genuinely the cheapest over the
 * first year. Nothing here is weighted towards a partner — if a provider wins,
 * it is because the arithmetic says so.
 */
export function bestOfferFor(kwh: number, area?: Area): RankedOffer {
  return rankByFirstYear(kwh, area)[0];
}

/** "6,5" — Danish decimal comma, trailing zero trimmed. */
export function formatOre(ore: number): string {
  return ore.toFixed(1).replace(/\.0$/, "").replace(".", ",");
}

/**
 * Invariants the rest of the site relies on. `pricing.ts` carries
 * CHEAPEST_TILLAEG_ORE as a plain number (it cannot import this file without a
 * cycle), so every marginal-price figure and every "spar X kr." on the site is
 * wrong if a tracked offer ever quotes a lower tillæg. Fail the build instead.
 *
 * Also catches campaigns left in place after they expired — a dead campaign in
 * a CTA is the exact class of claim that got this site into trouble.
 * Called from `npm run audit-prices`.
 */
export function assertOffers(on: string = BUILD_DATE): void {
  const lowest = Math.min(...OFFERS.flatMap((o) => o.products.map((p) => p.tillaegOre)));
  if (lowest !== CHEAPEST_TILLAEG_ORE) {
    throw new Error(
      `offers.ts: lowest spottillæg is ${lowest} øre but pricing.ts says ` +
        `CHEAPEST_TILLAEG_ORE = ${CHEAPEST_TILLAEG_ORE}. Update pricing.ts.`,
    );
  }
  for (const offer of OFFERS) {
    for (const c of offer.campaigns ?? []) {
      if (c.validUntil && c.validUntil < on && activeCampaign([c], on)) {
        throw new Error(`offers.ts: ${offer.name} campaign "${c.label}" expired ${c.validUntil} but is still active.`);
      }
    }
    if (!offer.products.length) throw new Error(`offers.ts: ${offer.name} has no products.`);
  }
}
