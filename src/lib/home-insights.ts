/**
 * Computed aggregates for the pillar page.
 *
 * The homepage previously listed 43 appliances and 663 words of general prose,
 * which is less than any of the appliance pages it links to — backwards for the
 * page that should own the head term. This module turns the same 43 rows into
 * the things a reader actually wants from an overview: which appliances
 * dominate a bill, what a household of a given size realistically uses, and how
 * that compares to the national average.
 *
 * Everything derives from the appliance data and the price engine. The one
 * judgement call is which appliances sit in which household basket, and that is
 * stated openly in the methodology section rather than presented as measurement.
 */

import { getPublishedAppliances } from "./appliances";
import type { ApplianceData } from "./types";
import { EL_PRICE_KR_PER_KWH, PRICE_DK1, PRICE_DK2, MARKET, formatKr, formatPrice } from "./pricing";
import type { FAQ } from "./types";

/* ---------- categories ---------- */

export type CategoryKey =
  | "koelFrys" | "vaskToerring" | "madlavning" | "underholdning" | "varme" | "transport" | "oevrigt";

export const CATEGORY_LABELS: Record<CategoryKey, string> = {
  koelFrys: "Køl og frys",
  vaskToerring: "Vask og tørring",
  madlavning: "Madlavning",
  underholdning: "Underholdning og elektronik",
  varme: "Varme og vand",
  transport: "Transport",
  oevrigt: "Øvrigt",
};

const CATEGORY_OF: Record<string, CategoryKey> = {
  koeleskab: "koelFrys", fryser: "koelFrys", kummefryser: "koelFrys",
  vaskemaskine: "vaskToerring", toerretumbler: "vaskToerring", strygejern: "vaskToerring",
  opvaskemaskine: "madlavning", ovn: "madlavning", komfur: "madlavning", induktion: "madlavning",
  mikroovn: "madlavning", airfryer: "madlavning", kaffemaskine: "madlavning",
  elkedel: "madlavning", broedrister: "madlavning", quooker: "madlavning",
  tv: "underholdning", computer: "underholdning", laptop: "underholdning",
  playstation: "underholdning", "gaming-pc": "underholdning", router: "underholdning",
  "mobil-opladning": "underholdning",
  elbil: "transport", ladestander: "transport",
  varmepumpe: "varme", jordvarme: "varme", elradiator: "varme", varmeblaeser: "varme",
  gulvvarme: "varme", "gulvvarme-el": "varme", varmtvandsbeholder: "varme", sauna: "varme",
};

export function categoryOf(slug: string): CategoryKey {
  return CATEGORY_OF[slug] ?? "oevrigt";
}

/**
 * Deliberately NOT exported as a site-wide "share of consumption" breakdown.
 * Summing every heating appliance in the catalogue adds varmepumpe, jordvarme,
 * elradiator, sauna and pool together, which no household has at once — the
 * first version of this file produced "varme = 60 % of consumption" that way.
 * Categories are only meaningful inside a household basket; see
 * HouseholdResult.categories.
 */

/* ---------- household profiles ---------- */

export interface HouseholdProfile {
  slug: string;
  label: string;
  persons: number;
  /**
   * Total annual consumption, anchored to Energistyrelsen's published figures
   * rather than summed from our appliance list. Building a household total
   * bottom-up from 43 catalogue entries understates it badly — lighting,
   * chargers, small kitchen items and standby across a whole home never get
   * their own page, and a first attempt produced a family of four using less
   * per person than someone living alone.
   */
  totalKwh: number;
  /** The tracked appliances this household is assumed to have. */
  basket: string[];
  source: string;
}

export const HOUSEHOLD_PROFILES: HouseholdProfile[] = [
  {
    slug: "lejlighed-1",
    label: "Lejlighed, 1 person",
    persons: 1,
    totalKwh: 1600,
    basket: ["koeleskab", "tv", "router", "laptop", "vaskemaskine", "mikroovn", "elkedel"],
    source: "Energistyrelsens gennemsnit på ca. 1.600 kWh pr. dansker",
  },
  {
    slug: "lejlighed-2",
    label: "Lejlighed, 2 personer",
    persons: 2,
    totalKwh: 2600,
    basket: ["koeleskab", "fryser", "tv", "router", "laptop", "computer", "vaskemaskine", "opvaskemaskine", "ovn", "elkedel", "kaffemaskine"],
    source: "To voksne uden elvarme, skaleret fra Energistyrelsens gennemsnit",
  },
  {
    slug: "hus-familie",
    label: "Hus, familie på 4",
    persons: 4,
    totalKwh: 4500,
    basket: ["koeleskab", "fryser", "tv", "router", "computer", "laptop", "playstation", "vaskemaskine", "toerretumbler", "opvaskemaskine", "ovn", "komfur", "elkedel", "kaffemaskine", "stoevsuger"],
    source: "Energistyrelsen: 2 voksne og 2 børn i et hus på 150 m²",
  },
  {
    slug: "hus-varmepumpe",
    label: "Hus med varmepumpe",
    persons: 4,
    totalKwh: 8500,
    basket: ["varmepumpe", "koeleskab", "fryser", "tv", "router", "computer", "vaskemaskine", "toerretumbler", "opvaskemaskine", "ovn", "elkedel", "kaffemaskine", "stoevsuger"],
    source: "Familie på 4 plus en luft-til-vand varmepumpe til opvarmning",
  },
  {
    slug: "hus-varmepumpe-elbil",
    label: "Hus med varmepumpe og elbil",
    persons: 4,
    totalKwh: 12000,
    basket: ["varmepumpe", "elbil", "koeleskab", "fryser", "tv", "router", "computer", "vaskemaskine", "toerretumbler", "opvaskemaskine", "ovn", "elkedel", "kaffemaskine", "stoevsuger"],
    source: "Som ovenfor plus en elbil kørt ca. 15.000 km om året",
  },
];

export interface HouseholdResult extends HouseholdProfile {
  appliances: ApplianceData[];
  /** Sum of the tracked appliances in this basket */
  trackedKwh: number;
  /**
   * Everything the tracked appliances do not account for: belysning, opladere,
   * små køkkenapparater, standby i hele boligen. Derived, never typed.
   */
  residualKwh: number;
  residualShare: number;
  totalCost: number;
  top: ApplianceData[];
  categories: { key: CategoryKey; label: string; kwh: number; share: number }[];
  missing: string[];
}

export function householdResult(p: HouseholdProfile): HouseholdResult {
  const all = getPublishedAppliances();
  const appliances = p.basket
    .map((s) => all.find((a) => a.slug === s))
    .filter((a): a is ApplianceData => Boolean(a));
  const missing = p.basket.filter((s) => !all.some((a) => a.slug === s));
  const trackedKwh = appliances.reduce((n, a) => n + a.typicalKwh, 0);
  const residualKwh = Math.max(0, p.totalKwh - trackedKwh);

  // Categories are computed WITHIN a household, where the mutually exclusive
  // alternatives (varmepumpe vs jordvarme vs elradiator) are already resolved.
  // Summing them across the whole catalogue would be meaningless.
  const byCat = new Map<CategoryKey, number>();
  for (const a of appliances) {
    const k = categoryOf(a.slug);
    byCat.set(k, (byCat.get(k) ?? 0) + a.typicalKwh);
  }
  const categories = [...byCat.entries()]
    .map(([key, kwh]) => ({ key, label: CATEGORY_LABELS[key], kwh, share: kwh / p.totalKwh }))
    .sort((a, b) => b.kwh - a.kwh);

  return {
    ...p,
    appliances,
    trackedKwh,
    residualKwh,
    residualShare: residualKwh / p.totalKwh,
    totalCost: p.totalKwh * EL_PRICE_KR_PER_KWH,
    top: [...appliances].sort((a, b) => b.typicalKwh - a.typicalKwh).slice(0, 3),
    categories,
    missing,
  };
}

export function allHouseholds(): HouseholdResult[] {
  return HOUSEHOLD_PROFILES.map(householdResult);
}

/* ---------- headline figures ---------- */

/** Energistyrelsen's reference: an average Dane uses about 1.600 kWh/year. */
export const AVERAGE_PER_PERSON_KWH = 1600;
/** Reference household used across the site. */
export const REFERENCE_HOUSEHOLD_KWH = 4000;

export interface TopAppliance {
  appliance: ApplianceData;
  kwh: number;
  cost: number;
  share: number;
  /**
   * True for appliances most homes simply do not have (pool, sauna, jordvarme).
   * They top the raw ranking but are not what makes an ordinary bill large, so
   * the page labels them instead of presenting them as typical.
   */
  optional: boolean;
}

const OPTIONAL = new Set([
  "pool", "sauna", "akvarium", "jordvarme", "solceller", "gaming-pc",
  "ladestander", "gulvvarme-el", "robotplaeneklipper", "lyskaede",
]);

export function topAppliances(n = 10, opts: { includeOptional?: boolean } = {}): TopAppliance[] {
  return [...getPublishedAppliances()]
    .filter((a) => (opts.includeOptional ? true : !OPTIONAL.has(a.slug)))
    .sort((a, b) => b.typicalKwh - a.typicalKwh)
    .slice(0, n)
    .map((appliance) => ({
      appliance,
      kwh: appliance.typicalKwh,
      cost: appliance.typicalKwh * EL_PRICE_KR_PER_KWH,
      share: appliance.typicalKwh / REFERENCE_HOUSEHOLD_KWH,
      optional: OPTIONAL.has(appliance.slug),
    }));
}

export const MARKET_PERIOD = MARKET.period;

/**
 * Build-time sanity check on the baskets: a profile that references an
 * appliance we do not have, or lands outside a plausible Danish household
 * range, is a data error rather than an interesting finding.
 * Called from `npm run audit-seo`.
 */
export function assertHouseholds(): void {
  for (const r of allHouseholds()) {
    if (r.missing.length) {
      throw new Error(`home-insights: profile "${r.slug}" references unknown appliances: ${r.missing.join(", ")}`);
    }
    if (r.totalKwh < 900 || r.totalKwh > 20000) {
      throw new Error(`home-insights: profile "${r.slug}" totals ${Math.round(r.totalKwh)} kWh, outside a plausible range`);
    }
    if (r.trackedKwh > r.totalKwh) {
      throw new Error(
        `home-insights: profile "${r.slug}" has ${Math.round(r.trackedKwh)} kWh of tracked appliances ` +
          `but a stated total of ${r.totalKwh} kWh — the basket cannot exceed the household.`,
      );
    }
    const perPerson = r.totalKwh / r.persons;
    if (perPerson < 700 || perPerson > 4000) {
      throw new Error(`home-insights: profile "${r.slug}" implies ${Math.round(perPerson)} kWh per person, which is not plausible`);
    }
  }
}

/* ---------- FAQ ---------- */


/**
 * Homepage FAQs, computed so the answers cannot contradict the tables above
 * them. Written to be self-contained: each answers the question in the first
 * sentence, which is what both featured snippets and AI Overviews quote.
 */
export function homeFaqs(): FAQ[] {
  const h = allHouseholds();
  const flat = h[0], pair = h[1], family = h[2], hp = h[3], ev = h[4];
  const top = topAppliances(3);
  return [
    {
      question: "Hvor meget strøm bruger en gennemsnitlig dansk husstand?",
      answer: `Energistyrelsen regner med ca. ${formatKr(AVERAGE_PER_PERSON_KWH)} kWh pr. dansker om året, hvilket svarer til en person i lejlighed — ${formatKr(flat.totalCost)} kr. To personer bruger typisk ${formatKr(pair.totalKwh)} kWh, og en familie på fire i hus omkring ${formatKr(family.totalKwh)} kWh, altså ${formatKr(family.totalCost)} kr. om året. Har I varmepumpe eller elbil, ligger forbruget markant højere.`,
    },
    {
      question: "Hvad koster 1 kWh strøm?",
      answer: `En kWh koster ca. ${formatPrice(EL_PRICE_KR_PER_KWH)} kr. inkl. moms, afgifter og transport — ${formatPrice(PRICE_DK1)} kr. vest for Storebælt og ${formatPrice(PRICE_DK2)} kr. øst for. Oven i kommer et fast abonnement til elselskabet, som ikke afhænger af, hvor meget du bruger.`,
    },
    {
      question: "Hvilke apparater bruger mest strøm?",
      answer: `Opvarmning, varmt vand og transport fylder mest: ${top.map((t) => `en ${t.appliance.name.toLowerCase()} bruger typisk ${formatKr(t.kwh)} kWh om året (${formatKr(t.cost)} kr.)`).join(", ")}. Til sammenligning betyder belysning og elektronik langt mindre, end de fleste tror.`,
    },
    {
      question: "Hvor meget mere bruger et hus med varmepumpe?",
      answer: `En varmepumpe løfter typisk husstandens forbrug fra ca. ${formatKr(family.totalKwh)} til ${formatKr(hp.totalKwh)} kWh om året. Elregningen stiger altså markant, men den erstatter gas eller olie, så den samlede varmeudgift falder.`,
    },
    {
      question: "Hvor meget bruger en elbil om året?",
      answer: `En elbil kørt ca. 15.000 km om året bruger typisk 2.500–3.500 kWh. For en husstand med både varmepumpe og elbil betyder det et samlet forbrug omkring ${formatKr(ev.totalKwh)} kWh — ${formatKr(ev.totalCost)} kr. om året.`,
    },
    {
      question: "Hvordan finder jeg mit eget strømforbrug?",
      answer: `Log ind på Eloverblik.dk med MitID og se dit præcise time-for-time forbrug. Vil du måle et enkelt apparat, sætter du et energimåler-stik mellem apparatet og stikkontakten. Du kan også bruge vores strømberegner til et estimat.`,
    },
  ];
}

/**
 * The biggest consumers among ordinary household appliances — deliberately
 * excluding heating, hot water and transport, which dominate the raw ranking
 * and are covered separately. This is the "what about the things everyone
 * actually has" cut, and it complements topAppliances() rather than repeating it.
 */
export function topEverydayAppliances(n = 5): TopAppliance[] {
  const EVERYDAY: CategoryKey[] = ["koelFrys", "vaskToerring", "madlavning", "underholdning"];
  return [...getPublishedAppliances()]
    .filter((a) => EVERYDAY.includes(categoryOf(a.slug)) && !OPTIONAL.has(a.slug))
    .sort((a, b) => b.typicalKwh - a.typicalKwh)
    .slice(0, n)
    .map((appliance) => ({
      appliance,
      kwh: appliance.typicalKwh,
      cost: appliance.typicalKwh * EL_PRICE_KR_PER_KWH,
      share: appliance.typicalKwh / REFERENCE_HOUSEHOLD_KWH,
      optional: false,
    }));
}
