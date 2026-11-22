/**
 * Modelsider (ejeren 22. nov. 2026): én side pr. modelfamilie under sit apparat — /laptop/macbook-air-m4/.
 *
 * Kun officielle tal står i datafilerne (src/content/modeller/<slug>.ts): producentens målinger ved 230 V
 * (Apples Product Environmental Reports), batteriets Wh fra tekniske specifikationer, energimærkets kWh.
 * Årsforbruget og prisen regnes her — med ÉN fast brugsprofil pr. apparat, så alle modeller under samme
 * apparat kan sammenlignes. Ingen forhandlerlinks (ejerens valg).
 */
import type { FAQ, Source } from "./types";
import { MODELS_ALL } from "../content/modeller";
import { isLive } from "./publish";

export type ModeKey = "off" | "sleep" | "standby" | "idle" | "on";

export const MODE_LABEL: Record<ModeKey, string> = {
  off: "Slukket",
  sleep: "Dvale",
  standby: "Standby",
  idle: "Tændt, i tomgang",
  on: "I brug",
};

export interface ModelVariant {
  /** Kort variantnavn, fx »13" M4« */
  name: string;
  /** Producentens målte effekt pr. tilstand ved 230 V (W). */
  watts: Partial<Record<ModeKey, number>>;
  /** Opladerens forbrug uden last (W) */
  adapterNoLoadW?: number;
  /** Opladerens effektivitet ved 230 V (0–1) */
  adapterEfficiency?: number;
  /** Den medfølgende oplader (W) — også loftet for, hvad maskinen kan trække fra stikket */
  adapterW?: number;
  /** Batteriets kapacitet (Wh) */
  batteryWh?: number;
  /** Officielt årsforbrug (energimærke), bruges i stedet for profilen */
  annualKwh?: number;
  /** Indeks i modellens `sources` for variantens tal */
  source: number;
}

export interface ModelData {
  slug: string;
  /** Apparatets slug: siden ligger på /<parent>/<slug>/ */
  parent: string;
  brand: string;
  /** Familiens navn, fx »MacBook Air M4« */
  name: string;
  /** YYYY-MM */
  released: string;
  synonyms: string[];
  title: string;
  description: string;
  /** 1–3 sætninger efter det beregnede svar øverst; tokens tilladt */
  intro: string;
  /** Prosa (HTML, tokens tilladt) — skrevet til modellen, ingen skabelon */
  content: string;
  faqs: FAQ[];
  sources: Source[];
  variants: ModelVariant[];
  publishDate: string;
  updated: string;
}

/** Brugsprofilen pr. apparat: timer pr. døgn i hver tilstand (summer til 24). */
export interface UsageProfile {
  hours: Partial<Record<ModeKey, number>>;
  /** Sætningen, der forklarer profilen på siden */
  text: string;
}

export const PROFILES: Record<string, UsageProfile> = {
  laptop: {
    hours: { idle: 6, sleep: 18 },
    text: "6 timer tændt om dagen og låget lukket (dvale) resten af døgnet, alle årets dage. Tændt regnes med producentens tomgangstal med skærmen tændt — almindeligt kontorarbejde ligger tæt på, tungt arbejde (video, spil, kompilering) trækker mere, op til opladerens effekt.",
  },
  computer: {
    hours: { idle: 8, sleep: 16 },
    text: "8 timer tændt om dagen og dvale resten af døgnet, alle årets dage. Tændt regnes med producentens tomgangstal — tungt arbejde trækker mere.",
  },
};

export function profileFor(parent: string): UsageProfile {
  const p = PROFILES[parent];
  if (!p) throw new Error(`models: ingen brugsprofil for apparatet »${parent}« — tilføj den i PROFILES`);
  return p;
}

/** kWh om året for en variant: energimærkets tal, ellers profilen × de målte watt. */
export function annualKwh(v: ModelVariant, parent: string): number {
  if (v.annualKwh !== undefined) return v.annualKwh;
  const { hours } = profileFor(parent);
  let wh = 0;
  for (const [mode, h] of Object.entries(hours) as [ModeKey, number][]) {
    const w = v.watts[mode];
    if (w === undefined) throw new Error(`models: ${v.name} mangler ${mode}-effekt til profilen for ${parent}`);
    wh += w * h;
  }
  return (wh * 365) / 1000;
}

/** kWh fra stikket til én fuld opladning (batteri ÷ opladerens effektivitet). */
export function chargeKwh(v: ModelVariant): number | null {
  if (!v.batteryWh) return null;
  return v.batteryWh / (v.adapterEfficiency ?? 0.88) / 1000;
}

export const isModelPublished = (m: ModelData) => isLive(m.publishDate);

export function getModel(parent: string, slug: string): ModelData | undefined {
  return MODELS_ALL.find((m) => m.parent === parent && m.slug === slug);
}

export function allModels(): ModelData[] {
  return MODELS_ALL;
}

export function publishedModels(): ModelData[] {
  return MODELS_ALL.filter(isModelPublished);
}

export function modelsFor(parent: string): ModelData[] {
  return publishedModels()
    .filter((m) => m.parent === parent)
    .sort((a, b) => b.released.localeCompare(a.released) || a.name.localeCompare(b.name, "da"));
}

export const modelPath = (m: Pick<ModelData, "parent" | "slug">) => `/${m.parent}/${m.slug}/`;

/** »3,63–4,37 W« — enheden én gang. */
export function wattRange(ws: number[]): string {
  const lo = Math.min(...ws), hi = Math.max(...ws);
  return lo === hi ? formatWatt(lo) : `${formatWatt(lo).replace(" W", "")}–${formatWatt(hi)}`;
}

/** Watt med dansk komma og de decimaler, tallet har brug for (0,29 W · 3,6 W · 20,9 W). */
export function formatWatt(w: number): string {
  const d = w < 1 ? 2 : w < 10 ? 2 : 1;
  return `${w.toLocaleString("da-DK", { maximumFractionDigits: d })} W`;
}
