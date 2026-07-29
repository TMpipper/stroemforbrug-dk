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
}

export interface ApplianceData {
  slug: string;
  name: string;
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
