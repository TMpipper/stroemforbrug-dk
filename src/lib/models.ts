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
  /** Officielt årsforbrug (energimærke, fx køleskabe), bruges i stedet for profilen */
  annualKwh?: number;
  /** WLTP-forbrug fra stikkontakten (Wh/km) — elbiler; ladetabet er med i WLTP-målingen */
  whPerKm?: number;
  /** Energimærkets kWh pr. 100 programmer (eco) — vaske-, opvaske- og tørremaskiner */
  kwhPer100Cycles?: number;
  /** Energiklassen på EU-mærket, fx »A« */
  energyClass?: string;
  /** Indeks i modellens `sources` for variantens tal */
  source: number;
}

export interface ModelData {
  slug: string;
  /** Apparatets slug: siden ligger på /<parent>/<slug>/ */
  parent: string;
  /** Undergruppe, der kun sammenlignes indbyrdes (varmepumper: »luft-til-luft« / »luft-til-vand« — ét rum mod et helt hus). */
  group?: string;
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
  /** Hvem der har målt, til svaret øverst — standard »ifølge <brand>s egne målinger ved 230 V« */
  measuredBy?: string;
  /** Sætningen under tabellen med de officielle tal — standard 230 V-sætningen */
  figuresNote?: string;
}

/** Brugsprofilen pr. apparat: timer pr. døgn i hver tilstand (summer til 24). */
export interface UsageProfile {
  /** Timer pr. døgn i hver tilstand (watt-modeller) */
  hours?: Partial<Record<ModeKey, number>>;
  /** Km om året (elbiler, regnes med whPerKm) */
  kmPerYear?: number;
  /** Programmer om året (regnes med kwhPer100Cycles) */
  cyclesPerYear?: number;
  /** Fulde opladninger om året (tablets: regnes med batteryWh ÷ opladerens effektivitet) */
  chargesPerYear?: number;
  /** Ordet for ét program: »vask«, »opvask«, »tørring« */
  cycleLabel?: string;
  /** Kort form til svaret øverst: »seks timers brug om dagen« */
  short: string;
  /** Sætningen, der forklarer profilen på siden */
  text: string;
}

export const PROFILES: Record<string, UsageProfile> = {
  laptop: {
    hours: { idle: 6, sleep: 18 },
    short: "seks timers brug om dagen",
    text: "6 timer tændt om dagen og låget lukket (dvale) resten af døgnet, alle årets dage. Tændt regnes med producentens tomgangstal med skærmen tændt — almindeligt kontorarbejde ligger tæt på, tungt arbejde (video, spil, kompilering) trækker mere, op til opladerens effekt.",
  },
  computer: {
    hours: { idle: 8, sleep: 16 },
    short: "otte timers brug om dagen",
    text: "8 timer tændt om dagen og dvale resten af døgnet, alle årets dage. Tændt regnes med producentens tomgangstal — tungt arbejde trækker mere.",
  },
  elbil: {
    kmPerYear: 15000,
    short: "15.000 km kørsel",
    text: "15.000 km om året, alt ladet hjemme til månedens elpris. WLTP-tallet er målt fra stikkontakten, så ladetabet er med; vinterkørsel og motorvej trækker typisk 15–30 % mere, bykørsel om sommeren mindre.",
  },
  tv: {
    hours: { on: 5, standby: 19 },
    short: "fem timers tv om dagen",
    text: "5 timer tændt om dagen i standardbilledet (SDR) og standby resten af døgnet, alle årets dage. HDR-indhold og høj lysstyrke trækker mere — energimærkets HDR-tal står længere nede på siden.",
  },
  skaerm: {
    hours: { on: 6, standby: 18 },
    short: "seks timers brug om dagen",
    text: "6 timer tændt om dagen i standardbilledet (SDR), som energimærket er målt i, og standby resten af døgnet, alle årets dage. Høj lysstyrke, HDR og høj opdateringshastighed trækker mere — HDR-tallene står længere nede på siden.",
  },
  playstation: {
    hours: { on: 2, standby: 22 },
    short: "to timers spil om dagen",
    text: "2 timers spil om dagen og hvile (rest mode) resten af døgnet, alle årets dage. Hvile med opladning af controllere og opdateringer slået til bruger mere end tallet her.",
  },
  "nintendo-switch": {
    hours: { on: 2, sleep: 22 },
    short: "to timers spil om dagen",
    text: "2 timers spil om dagen i dock på tv'et og dvale resten af døgnet, alle årets dage. Dvale med netværk slået til (til opdateringer) bruger mere end tallet her; håndholdt spil bruger mindre fra stikket.",
  },
  vaskemaskine: {
    cyclesPerYear: 260,
    cycleLabel: "vask",
    short: "fem vaske om ugen",
    text: "5 vaske om ugen på eco 40-60-programmet, som energimærket er målt på. Varmere programmer bruger mere — en 60-graders vask typisk det dobbelte, en 30-graders mindre.",
  },
  opvaskemaskine: {
    cyclesPerYear: 312,
    cycleLabel: "opvask",
    short: "seks opvaske om ugen",
    text: "6 opvaske om ugen på eco-programmet, som energimærket er målt på. Intensivprogrammer bruger mere, de korte hurtigprogrammer ofte også, fordi de varmer vandet hurtigere op.",
  },
  "varmepumpe-toerretumbler": {
    cyclesPerYear: 156,
    cycleLabel: "tørring",
    short: "tre tørringer om ugen",
    text: "3 tørringer om ugen på eco-programmet (skabstørt bomuld), som energimærket er målt på — vægtet mellem fuld og halv fyldning.",
  },
  // Varmepumper (24. nov. 2026): energimærkets årsforbrug til opvarmning i det »gennemsnitlige« klima, som mærket i Danmark viser.
  varmepumpe: {
    short: "energimærkets årsforbrug til varme",
    text: "Energimærkets årsforbrug til opvarmning i EU-mærkets gennemsnitlige klima og ved pumpens dimensionerende varmebehov. Et koldere år og et større eller dårligere isoleret hus giver mere (for luft-til-vand også en højere fremløbstemperatur); som supplement til brændeovn eller fjernvarme bruger pumpen mindre.",
  },
  koeleskab: {
    short: "energimærkets årsforbrug",
    text: "Energimærkets årsforbrug: målt ved 25 °C i rummet, døren lukket, termostaten på standard. Et køkken på 20–22 °C giver lidt mindre, et varmt bryggers eller hyppig døråbning mere.",
  },
  fryser: {
    short: "energimærkets årsforbrug",
    text: "Energimærkets årsforbrug: målt ved 25 °C i rummet med lukket dør og −18 °C i fryseren. Står fryseren i et køligt rum, bruger den mindre; et varmt rum og tit åbning giver mere.",
  },
  kummefryser: {
    short: "energimærkets årsforbrug",
    text: "Energimærkets årsforbrug: målt ved 25 °C i rummet med lukket låg og −18 °C. I en kold garage eller kælder bruger en kummefryser typisk mindre — tjek dog, at modellen tåler lave temperaturer (klimaklassen).",
  },
  ipad: {
    chargesPerYear: 208,
    short: "fire fulde opladninger om ugen",
    text: "4 fulde opladninger om ugen (208 om året), regnet som batteriets Wh ÷ opladerens effektivitet. Står opladeren i stikket bagefter, bruger den sit lille tomgangsforbrug oveni.",
  },
  "vaskemaskine-med-toerretumbler": {
    cyclesPerYear: 156,
    cycleLabel: "vask og tørring",
    short: "tre vaske med tørring om ugen",
    text: "3 vaske med tørring om ugen på programmet, som energimærket er målt på (vask og tør).",
  },
};

export function profileFor(parent: string): UsageProfile {
  const p = PROFILES[parent];
  if (!p) throw new Error(`models: ingen brugsprofil for apparatet »${parent}« — tilføj den i PROFILES`);
  return p;
}

/** kWh om året for en variant: energimærkets årstal, ellers profilen × WLTP, × mærkets kWh pr. program eller × de målte watt. */
export function annualKwh(v: ModelVariant, parent: string): number {
  if (v.annualKwh !== undefined) return v.annualKwh;
  const p = profileFor(parent);
  if (v.whPerKm !== undefined) {
    if (!p.kmPerYear) throw new Error(`models: ${v.name} har whPerKm, men profilen for ${parent} har ingen kmPerYear`);
    return (v.whPerKm * p.kmPerYear) / 1000;
  }
  if (v.kwhPer100Cycles !== undefined) {
    if (!p.cyclesPerYear) throw new Error(`models: ${v.name} har kwhPer100Cycles, men profilen for ${parent} har ingen cyclesPerYear`);
    return (v.kwhPer100Cycles / 100) * p.cyclesPerYear;
  }
  if (p.chargesPerYear) {
    const c = chargeKwh(v);
    if (c === null) throw new Error(`models: ${v.name} mangler batteryWh til profilen for ${parent}`);
    return c * p.chargesPerYear;
  }
  const hours = p.hours;
  if (!hours) throw new Error(`models: ${v.name} har kun watt, men profilen for ${parent} har ingen timer`);
  let wh = 0;
  for (const [mode, h] of Object.entries(hours) as [ModeKey, number][]) {
    const w = v.watts[mode];
    if (w === undefined) throw new Error(`models: ${v.name} mangler ${mode}-effekt til profilen for ${parent}`);
    wh += w * h;
  }
  return (wh * 365) / 1000;
}

/** Hvad én »enhed« koster i kWh: 100 km (elbil) eller ét program (energimærke). null for watt-modeller. */
export function unitKwh(v: ModelVariant, parent: string): { label: string; kwh: number } | null {
  if (v.whPerKm !== undefined) return { label: "Pr. 100 km", kwh: v.whPerKm / 10 };
  if (v.kwhPer100Cycles !== undefined) return { label: `Pr. ${profileFor(parent).cycleLabel ?? "program"}`, kwh: v.kwhPer100Cycles / 100 };
  return null;
}

/** Modellens nøgletal til sammenligninger og kort: kWh/100 km, kWh pr. program eller watt i tomgang/brug. */
export function keyFigure(v: ModelVariant, parent: string): { label: string; text: string } | null {
  const da = (n: number, d: number) => n.toLocaleString("da-DK", { maximumFractionDigits: d });
  if (v.whPerKm !== undefined) return { label: "WLTP", text: `${da(v.whPerKm / 10, 1)} kWh/100 km` };
  if (v.kwhPer100Cycles !== undefined) return { label: "Energimærke", text: `${da(v.kwhPer100Cycles / 100, 2)} kWh pr. ${profileFor(parent).cycleLabel ?? "program"}` };
  if (v.annualKwh !== undefined) return { label: "Energimærke", text: `${da(v.annualKwh, 0)} kWh/år` };
  if (v.watts.idle !== undefined) return { label: "Tomgang", text: formatWatt(v.watts.idle) };
  if (v.watts.on !== undefined) return { label: "I brug", text: formatWatt(v.watts.on) };
  return null;
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

/** Dansk ejefald af et navn: Apples, Sonys — men Siemens', Bosch' (navne på -s, -x, -z og -sch) og LG's (forkortelser). */
export function possessive(name: string): string {
  if (/([sxz]|sch)$/i.test(name)) return `${name}'`;
  return /^[A-ZÆØÅ]{2,}$/.test(name) ? `${name}'s` : `${name}s`;
}

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
