export interface EnergyLabel {
  class: string;
  kwhPerYear: number;
}

export interface ApplianceModel {
  brand: string;
  model: string;
  kwh: number;
  energyClass?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Source {
  name: string;
  url?: string;
}

export interface CalculatorOption {
  label: string;
  kwhPerUse: number;
}

export interface CalculatorConfig {
  title: string;
  options: CalculatorOption[];
  usageLabel: string;
  usageUnit: string;
  usageMin: number;
  usageMax: number;
  usageDefault: number;
  usageStep: number;
  /**
   * Hvad ét `kwhPerUse` er, og hvordan det bliver til et år — påkrævet for nye apparater (de oprindelige 43 får
   * det fra catalogue.ts LEGACY_CALC). kWh/år = kwhPerUse × optionScale × forbrug × perYear.
   * `per` er enheden for én gang i ental efter »pr.«: "gang", "time", "døgn", "km", "kop" …
   */
  per?: string;
  perYear?: number;
  optionScale?: number;
}

export type CategoryKey =
  | "koekken" | "koelFrys" | "vask" | "varme" | "varmtVand" | "klima" | "underholdning" | "it" | "lys"
  | "transport" | "have" | "poolSpa" | "pleje" | "vaerksted" | "hobby" | "energi";

/** Hvordan apparatet bruger strøm — styrer H1, beregnerens enheder og tidspunkt-blokken. */
export type Usage = "per-use" | "per-hour" | "always-on" | "heating" | "per-km" | "production";

export interface CatalogueMeta {
  category: CategoryKey;
  usage: Usage;
  /** Har produktgruppen et gældende EU-energimærke? Kun da vises en energimærke-tabel. */
  hasEuLabel: boolean;
  /** Søgeord ud over navnet: synonymer, stavemåder, modelnavne (»ps5«, »fjernsyn«). */
  synonyms: string[];
  /** Eget motiv; ellers kategoriens. */
  motif?: import("./visuals/motifs").MotifKey;
  /** Kan forbruget flyttes til billige timer? Standard: pr. gang og pr. km ja, resten nej. */
  shiftable?: boolean;
}

export interface ApplianceData {
  slug: string;
  /** Kataloget (kategori, brug, energimærke, søgeord). Påkrævet for nye apparater; de 43 oprindelige har LEGACY_META. */
  meta?: CatalogueMeta;
  name: string;
  /** "en" eller "et". Sættes eksplicit for intetkønsordene; ellers læses det af den oprindelige overskrift. */
  article?: "en" | "et";
  title: string;
  description: string;
  heading: string;
  quickAnswer: string;
  kwhRange: [number, number];
  typicalKwh: number;
  wattage: number;
  standbyWatts: number;
  energyLabels: EnergyLabel[];
  models: ApplianceModel[];
  seasonalProfile: number[];
  content: string;
  faqs: FAQ[];
  relatedSlugs: string[];
  sources: Source[];
  calculatorConfig: CalculatorConfig;
  /** ISO date string (YYYY-MM-DD). Page hidden from sitemap/listings until this date. */
  publishDate?: string;
  /**
   * ISO date (YYYY-MM-DD) of the last SUBSTANTIVE change to this appliance's
   * content. Bump it only when the substance changed — not for a typo or a
   * restyle. Falls back to pageMeta().updated (RELAUNCH) when unset.
   *
   * Per-page rather than site-wide on purpose: a single site date silently
   * re-dates all 43 pages whenever one of them is edited, which is the faked
   * freshness signal Google's helpful-content guidance warns about.
   */
  updated?: string;
}

export interface HouseholdData {
  slug: string;
  title: string;
  description: string;
  heading: string;
  quickAnswer: string;
  typicalKwh: number;
  kwhRange: [number, number];
  content: string;
  faqs: FAQ[];
}
