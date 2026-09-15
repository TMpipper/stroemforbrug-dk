/**
 * Derived insight per appliance — the part of a page a competitor cannot copy
 * without rebuilding the same data layer.
 *
 * Every SERP for "hvor meget strøm bruger en X" is a row of pages quoting the
 * same kWh range. What none of them do is answer the questions a reader
 * actually has next: does it cost the same where I live, what does it cost in
 * January versus July, is my old one worth replacing, and how much of the bill
 * is it just sitting there.
 *
 * All of it is computed from data the appliance already carries (kwhRange,
 * typicalKwh, seasonalProfile, energyLabels, standbyWatts) and the verified
 * price engine, so it stays correct across all 43 pages and cannot drift.
 */

import type { ApplianceData } from "./types";
import { APPLIANCES } from "./appliances";
import { EL_PRICE_KR_PER_KWH, PRICE_DK1, PRICE_DK2, MARKET } from "./pricing";

export const MONTHS = [
  "Januar", "Februar", "Marts", "April", "Maj", "Juni",
  "Juli", "August", "September", "Oktober", "November", "December",
] as const;

/* ---------- region ---------- */

export interface RegionalCost {
  dk1: number;
  dk2: number;
  /** kr. extra per year east of Storebælt */
  difference: number;
  /** Percentage more expensive in DK2 */
  percent: number;
}

/**
 * The same appliance costs more east of Storebælt, because DK2 carries both a
 * higher spot price and a higher nettarif. Nobody on this SERP splits it.
 */
export function regionalCost(a: ApplianceData): RegionalCost {
  const dk1 = a.typicalKwh * PRICE_DK1;
  const dk2 = a.typicalKwh * PRICE_DK2;
  return {
    dk1,
    dk2,
    difference: dk2 - dk1,
    percent: ((dk2 - dk1) / dk1) * 100,
  };
}

/* ---------- season ---------- */

export interface SeasonalMonth {
  month: string;
  short: string;
  kwh: number;
  cost: number;
  /** Share of the year's cost, 0-1, for bar widths */
  share: number;
}

export interface SeasonalCost {
  months: SeasonalMonth[];
  peak: SeasonalMonth;
  low: SeasonalMonth;
  /** How many times more expensive the peak month is than the lowest */
  ratio: number;
  /** True when the appliance is genuinely seasonal and the section is worth showing */
  isSeasonal: boolean;
}

/**
 * `seasonalProfile` is twelve multipliers. They are NOT normalised in the data,
 * so dividing by their sum is what makes the months add up to the appliance's
 * actual annual consumption — otherwise a profile averaging 1,05 would quietly
 * inflate the year by 5 %.
 */
export function seasonalCost(a: ApplianceData, price = EL_PRICE_KR_PER_KWH): SeasonalCost {
  const profile = a.seasonalProfile?.length === 12 ? a.seasonalProfile : new Array(12).fill(1);
  const total = profile.reduce((n, v) => n + v, 0);

  const months: SeasonalMonth[] = profile.map((v, i) => {
    const kwh = (a.typicalKwh * v) / total;
    return {
      month: MONTHS[i],
      short: MONTHS[i].slice(0, 3),
      kwh,
      cost: kwh * price,
      share: v / total,
    };
  });

  const sorted = [...months].sort((x, y) => y.cost - x.cost);
  const peak = sorted[0];
  const low = sorted[sorted.length - 1];
  const ratio = low.cost > 0 ? peak.cost / low.cost : 1;

  return { months, peak, low, ratio, isSeasonal: ratio >= 1.25 };
}

/* ---------- replacing an old unit ---------- */

export interface ReplacementSaving {
  bestClass: string;
  bestKwh: number;
  /** kr./år for the efficient unit itself — never derived from typicalKwh */
  bestCost: number;
  worstClass: string;
  worstKwh: number;
  worstCost: number;
  kwhSaved: number;
  yearlySaving: number;
  /**
   * False when the labels are descriptive ("Gaming/avanceret") rather than EU
   * energy classes, so the page can say "type" instead of "energimærke".
   */
  usesEnergyClasses: boolean;
  /**
   * What a new unit may cost and still pay for itself in electricity within
   * ten years. Stated this way deliberately: we do not know what the reader
   * would pay for the appliance, so quoting a payback time would mean inventing
   * a purchase price. This inverts it into a figure that is fully derived.
   */
  breakEvenPrice10yr: number;
  breakEvenPrice5yr: number;
}

/** A, A+, A++, A+++, B-G — the EU scale, as opposed to a descriptive label */
const ENERGY_CLASS_RE = /^(A\+{0,3}|[B-G])$/;

export function replacementSaving(
  a: ApplianceData,
  price = EL_PRICE_KR_PER_KWH,
): ReplacementSaving | null {
  if (a.energyLabels.length < 2) return null;
  const sorted = [...a.energyLabels].sort((x, y) => x.kwhPerYear - y.kwhPerYear);
  const best = sorted[0];
  const worst = sorted[sorted.length - 1];
  const kwhSaved = worst.kwhPerYear - best.kwhPerYear;
  if (kwhSaved <= 0) return null;
  const yearlySaving = kwhSaved * price;
  return {
    bestClass: best.class,
    bestKwh: best.kwhPerYear,
    bestCost: best.kwhPerYear * price,
    worstClass: worst.class,
    worstKwh: worst.kwhPerYear,
    worstCost: worst.kwhPerYear * price,
    usesEnergyClasses: a.energyLabels.every((l) => ENERGY_CLASS_RE.test(l.class)),
    kwhSaved,
    yearlySaving,
    breakEvenPrice10yr: yearlySaving * 10,
    breakEvenPrice5yr: yearlySaving * 5,
  };
}

/* ---------- standby ---------- */

export interface StandbyShare {
  watts: number;
  kwhPerYear: number;
  costPerYear: number;
  /** Standby's share of the appliance's typical annual consumption, 0-1, capped at 1 */
  share: number;
  /** True when standby is a meaningful part of the bill rather than a rounding error */
  isSignificant: boolean;
  /**
   * True for devices that are simply never switched off — a router's "standby"
   * is its whole consumption. Reporting that as "100,1 %" reads like a bug, so
   * the page says so in words instead.
   */
  isAlwaysOn: boolean;
}

const HOURS_PER_YEAR = 8760;

export function standbyShare(a: ApplianceData, price = EL_PRICE_KR_PER_KWH): StandbyShare | null {
  if (!a.standbyWatts || a.standbyWatts <= 0) return null;
  const kwhPerYear = (a.standbyWatts * HOURS_PER_YEAR) / 1000;
  const raw = a.typicalKwh > 0 ? kwhPerYear / a.typicalKwh : 0;
  return {
    watts: a.standbyWatts,
    kwhPerYear,
    costPerYear: kwhPerYear * price,
    share: Math.min(1, raw),
    isSignificant: raw >= 0.05,
    isAlwaysOn: raw >= 0.9,
  };
}

/* ---------- where it sits among the rest ---------- */

export interface ApplianceRank {
  rank: number;
  total: number;
  /** Share of a 4.000 kWh household this appliance represents, 0-1 */
  householdShare: number;
  costlier: ApplianceData | null;
  cheaper: ApplianceData | null;
  /** Percentile from the top, e.g. 5 = in the most expensive 5 % */
  topPercent: number;
}

const REFERENCE_HOUSEHOLD_KWH = 4000;

/**
 * Ranking every appliance against the others turns 43 isolated pages into one
 * comparable dataset, and gives each page a genuine reason to link to its
 * neighbours rather than a generic "se også" grid.
 */
export function applianceRank(a: ApplianceData): ApplianceRank {
  const sorted = [...APPLIANCES].sort((x, y) => y.typicalKwh - x.typicalKwh);
  const idx = sorted.findIndex((x) => x.slug === a.slug);
  return {
    rank: idx + 1,
    total: sorted.length,
    householdShare: a.typicalKwh / REFERENCE_HOUSEHOLD_KWH,
    costlier: idx > 0 ? sorted[idx - 1] : null,
    cheaper: idx < sorted.length - 1 ? sorted[idx + 1] : null,
    topPercent: Math.round(((idx + 1) / sorted.length) * 100),
  };
}

/* ---------- the lot, for the page ---------- */

export interface ApplianceInsights {
  regional: RegionalCost;
  seasonal: SeasonalCost;
  replacement: ReplacementSaving | null;
  standby: StandbyShare | null;
  rank: ApplianceRank;
  yearlyCost: number;
  period: string;
}

export function insightsFor(a: ApplianceData, price = EL_PRICE_KR_PER_KWH): ApplianceInsights {
  return {
    regional: regionalCost(a),
    seasonal: seasonalCost(a, price),
    replacement: replacementSaving(a, price),
    standby: standbyShare(a, price),
    rank: applianceRank(a),
    yearlyCost: a.typicalKwh * price,
    period: MARKET.period,
  };
}

/* ---------- Danish grammar ---------- */

/**
 * "en" or "et" for this appliance. Danish nouns are common or neuter, and
 * getting it wrong is immediately visible: "en køleskab" reads as broken.
 * The appliance's own `heading` is written correctly per appliance, so the
 * article is read from there rather than guessed — never build the phrase by
 * hand. Five of the 43 are neuter (tv, køleskab, strygejern, akvarium, komfur).
 */
export function articleFor(a: ApplianceData): "en" | "et" {
  return /\bbruger et\b/i.test(a.heading) ? "et" : "en";
}

/**
 * "din" or "dit". Danish possessives inflect with the same gender as the
 * article, so "din køleskab" is as wrong as "en køleskab".
 */
export function possessiveFor(a: ApplianceData): "din" | "dit" {
  return articleFor(a) === "et" ? "dit" : "din";
}
