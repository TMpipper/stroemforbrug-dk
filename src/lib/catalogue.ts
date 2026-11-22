/**
 * Kataloget: én post pr. apparat med alt det, der før lå spredt i syv opslagstabeller (kategori, motiv,
 * »kører hele døgnet«, EU-energimærke, søgeord). Nye apparater bærer posten selv (`ApplianceData.meta`);
 * de 43 oprindelige får den fra LEGACY_META nedenfor, så deres datafiler ikke skal røres.
 *
 * Kategorierne er sitets navigation: hver kategori med mindst HUB_MIN_ITEMS udgivne apparater får sin egen
 * side under /apparater/<slug>/; resten vises kun som afsnit på /apparater/.
 */
import { getPublishedAppliances } from "./appliances";
import type { MotifKey } from "./visuals/motifs";
import type { ApplianceData, CalculatorOption, CatalogueMeta, CategoryKey } from "./types";

export type { CatalogueMeta, CategoryKey, Usage } from "./types";

export interface Category {
  key: CategoryKey;
  /** Overskrift og menupunkt. */
  label: string;
  /** URL-segmentet under /apparater/ (ASCII: æ → ae, ø → oe, å → aa). */
  slug: string;
  motif: MotifKey;
  /** Én sætning til hubbens indledning og menuen — ingen tal, ingen superlativer. */
  blurb: string;
  /** Hubbens søgeord til title og H1 (»Strømforbrug i køkkenet«). */
  keyword: string;
}

/** Rækkefølgen er menuens og /apparater/'s. */
export const CATEGORIES: Category[] = [
  { key: "koekken", label: "Køkken og madlavning", slug: "koekken", motif: "ovn", blurb: "Ovn, kogeplader, opvaskemaskine og de små køkkenmaskiner.", keyword: "Strømforbrug i køkkenet" },
  { key: "koelFrys", label: "Køl og frys", slug: "koel-og-frys", motif: "koeleskab", blurb: "Køleskabe og frysere kører hele døgnet, hele året.", keyword: "Strømforbrug for køl og frys" },
  { key: "vask", label: "Vask, tørring og rengøring", slug: "vask-og-toerring", motif: "vaskemaskine", blurb: "Vaskemaskine, tørretumbler, strygejern og støvsugere.", keyword: "Strømforbrug til vask og tørring" },
  { key: "varme", label: "Opvarmning", slug: "opvarmning", motif: "radiator", blurb: "Varmepumper, elradiatorer, gulvvarme og varmeblæsere.", keyword: "Strømforbrug til opvarmning" },
  { key: "varmtVand", label: "Varmt vand", slug: "varmt-vand", motif: "radiator", blurb: "Varmtvandsbeholdere og vandvarmere.", keyword: "Strømforbrug til varmt vand" },
  { key: "klima", label: "Køling, luft og ventilation", slug: "klima-og-luft", motif: "stik", blurb: "Affugtere, aircondition, ventilation og luftrensere.", keyword: "Strømforbrug til køling og luft" },
  { key: "underholdning", label: "TV, lyd og spillekonsoller", slug: "tv-og-underholdning", motif: "tv", blurb: "TV, spillekonsoller, lyd og streaming.", keyword: "Strømforbrug for tv og konsoller" },
  { key: "it", label: "Computer, internet og mobil", slug: "computer-og-internet", motif: "computer", blurb: "Computere, skærme, router og opladning.", keyword: "Strømforbrug for computer og internet" },
  { key: "lys", label: "Lys og belysning", slug: "lys", motif: "lampe", blurb: "Pærer, lyskæder og belysning ude og inde.", keyword: "Strømforbrug for lys" },
  { key: "transport", label: "Elbil og transport", slug: "elbil-og-transport", motif: "elbil", blurb: "Elbil, ladeboks, elcykel og andre køretøjer med stik.", keyword: "Strømforbrug for elbil og transport" },
  { key: "have", label: "Have og udendørs", slug: "have-og-udendoers", motif: "robotklipper", blurb: "Plæneklippere, pumper og alt det, der står udenfor.", keyword: "Strømforbrug i haven" },
  { key: "poolSpa", label: "Pool, spa og sauna", slug: "pool-spa-og-sauna", motif: "sauna", blurb: "Pool, spabad og sauna — store forbrug i korte perioder.", keyword: "Strømforbrug for pool, spa og sauna" },
  { key: "pleje", label: "Personlig pleje og sundhed", slug: "personlig-pleje", motif: "stik", blurb: "Hårtørrer, glattejern og udstyr til sundhed og pleje.", keyword: "Strømforbrug for personlig pleje" },
  { key: "vaerksted", label: "Værksted og værktøj", slug: "vaerksted", motif: "stik", blurb: "Elværktøj, kompressor og udstyr til værkstedet.", keyword: "Strømforbrug i værkstedet" },
  { key: "hobby", label: "Hobby, dyr og smart home", slug: "hobby-og-smart-home", motif: "stik", blurb: "Akvarier, terrarier, 3D-printere og smarte hjem.", keyword: "Strømforbrug for hobby og smart home" },
  { key: "energi", label: "Solceller og batteri", slug: "solceller-og-batteri", motif: "sol", blurb: "Det, der laver eller gemmer strøm i stedet for at bruge den.", keyword: "Solceller og batteri" },
];

/** En kategori får sin egen hub-side fra så mange udgivne apparater — færre giver en tynd side. */
export const HUB_MIN_ITEMS = 3;

const BY_KEY = new Map(CATEGORIES.map((c) => [c.key, c]));
const BY_SLUG = new Map(CATEGORIES.map((c) => [c.slug, c]));

export function category(key: CategoryKey): Category {
  const c = BY_KEY.get(key);
  if (!c) throw new Error(`catalogue: ukendt kategori ${key}`);
  return c;
}

export function categoryBySlug(slug: string): Category | undefined {
  return BY_SLUG.get(slug);
}

/**
 * De 43 oprindelige apparater. `hasEuLabel` er sat efter EU's energimærkeforordninger (2017/1369 og de
 * delegerede forordninger pr. produktgruppe) — kun produktgrupper med et gældende EU-mærke får en
 * energimærke-tabel. Støvsugermærket blev annulleret af EU-Domstolen i 2018; computere, routere,
 * kogeplader, elradiatorer og småapparater har aldrig haft et.
 */
export const LEGACY_META: Record<string, CatalogueMeta> = {
  koeleskab: { category: "koelFrys", usage: "always-on", hasEuLabel: true, motif: "koeleskab", synonyms: ["køleskab", "koeleskab", "køle-fryseskab", "kølefryseskab", "amerikanerkøleskab"] },
  fryser: { category: "koelFrys", usage: "always-on", hasEuLabel: true, motif: "koeleskab", synonyms: ["fryser", "skabsfryser", "fryseskab"] },
  kummefryser: { category: "koelFrys", usage: "always-on", hasEuLabel: true, motif: "koeleskab", synonyms: ["kummefryser", "fryseboks", "gammel kummefryser"] },

  opvaskemaskine: { category: "koekken", usage: "per-use", hasEuLabel: true, motif: "vaskemaskine", synonyms: ["opvaskemaskine", "opvasker", "opvask", "eco-program"] },
  ovn: { category: "koekken", usage: "per-use", shiftable: false, hasEuLabel: true, motif: "ovn", synonyms: ["ovn", "bageovn", "elovn", "varmluftsovn", "ovn 200 grader"] },
  komfur: { category: "koekken", usage: "per-use", shiftable: false, hasEuLabel: true, motif: "ovn", synonyms: ["komfur", "elkomfur", "keramisk komfur"] },
  induktion: { category: "koekken", usage: "per-use", shiftable: false, hasEuLabel: false, motif: "ovn", synonyms: ["induktion", "induktionskogeplade", "induktionskomfur", "kogeplade"] },
  mikroovn: { category: "koekken", usage: "per-use", shiftable: false, hasEuLabel: false, motif: "ovn", synonyms: ["mikroovn", "mikrobølgeovn", "microovn", "mikro"] },
  airfryer: { category: "koekken", usage: "per-use", shiftable: false, hasEuLabel: false, motif: "ovn", synonyms: ["airfryer", "air fryer", "varmluftfrituregryde", "ninja airfryer"] },
  kaffemaskine: { category: "koekken", usage: "per-use", shiftable: false, hasEuLabel: false, motif: "elkedel", synonyms: ["kaffemaskine", "espressomaskine", "moccamaster", "nespresso", "kaffe"] },
  elkedel: { category: "koekken", usage: "per-use", shiftable: false, hasEuLabel: false, motif: "elkedel", synonyms: ["elkedel", "vandkoger", "kedel", "kogende vand"] },
  broedrister: { category: "koekken", usage: "per-use", shiftable: false, hasEuLabel: false, motif: "ovn", synonyms: ["brødrister", "toaster", "broedrister"] },
  quooker: { category: "koekken", usage: "per-use", shiftable: false, hasEuLabel: false, motif: "elkedel", synonyms: ["quooker", "kogende vand-hane", "kogendevandshane", "kogevandshane"] },

  vaskemaskine: { category: "vask", usage: "per-use", hasEuLabel: true, motif: "vaskemaskine", synonyms: ["vaskemaskine", "vask", "40 graders vask", "60 graders vask", "kogevask"] },
  toerretumbler: { category: "vask", usage: "per-use", hasEuLabel: true, motif: "vaskemaskine", synonyms: ["tørretumbler", "toerretumbler", "tumbler", "kondenstørretumbler", "varmepumpetørretumbler"] },
  strygejern: { category: "vask", usage: "per-use", hasEuLabel: false, synonyms: ["strygejern", "strygestation", "dampstrygejern"] },
  stoevsuger: { category: "vask", usage: "per-use", hasEuLabel: false, synonyms: ["støvsuger", "stoevsuger", "ledningsfri støvsuger", "dyson"] },
  robotstoevsuger: { category: "vask", usage: "per-use", hasEuLabel: false, motif: "robotklipper", synonyms: ["robotstøvsuger", "robot støvsuger", "roomba", "støvsugerrobot"] },

  varmepumpe: { category: "varme", usage: "heating", hasEuLabel: true, motif: "varmepumpe", synonyms: ["varmepumpe", "luft til vand", "luft til luft", "luft-til-vand-varmepumpe", "luft-til-luft-varmepumpe"] },
  jordvarme: { category: "varme", usage: "heating", hasEuLabel: true, motif: "varmepumpe", synonyms: ["jordvarme", "jordvarmeanlæg", "væske-vand-varmepumpe"] },
  elradiator: { category: "varme", usage: "heating", hasEuLabel: false, motif: "radiator", synonyms: ["elradiator", "elpanel", "panelradiator", "elvarme", "radiator"] },
  varmeblaeser: { category: "varme", usage: "per-hour", hasEuLabel: false, motif: "radiator", synonyms: ["varmeblæser", "varmeblaeser", "blæser varme", "keramisk varmeblæser"] },
  gulvvarme: { category: "varme", usage: "heating", hasEuLabel: false, motif: "radiator", synonyms: ["gulvvarme", "el-gulvvarme", "elgulvvarme", "gulvvarme badeværelse"] },
  "gulvvarme-el": { category: "varme", usage: "heating", hasEuLabel: false, motif: "radiator", synonyms: ["gulvvarmemåtte", "varmemåtte", "el-måtter", "varmefolie"] },

  varmtvandsbeholder: { category: "varmtVand", usage: "always-on", hasEuLabel: true, motif: "radiator", synonyms: ["varmtvandsbeholder", "vandvarmer", "elvandvarmer", "varmtvandsbeholder 110 l"] },

  affugter: { category: "klima", usage: "per-hour", shiftable: true, hasEuLabel: false, synonyms: ["affugter", "luftaffugter", "affugter kælder", "kondensaffugter"] },

  tv: { category: "underholdning", usage: "per-hour", hasEuLabel: true, motif: "tv", synonyms: ["tv", "fjernsyn", "fladskærm", "smart-tv", "oled", "55 tommer", "65 tommer"] },
  playstation: { category: "underholdning", usage: "per-hour", hasEuLabel: false, motif: "tv", synonyms: ["playstation", "ps5", "ps4", "spillekonsol", "konsol"] },

  computer: { category: "it", usage: "per-hour", hasEuLabel: false, motif: "computer", synonyms: ["computer", "stationær computer", "pc", "stationær pc", "desktop"] },
  laptop: { category: "it", usage: "per-hour", hasEuLabel: false, motif: "computer", synonyms: ["laptop", "bærbar", "bærbar computer", "macbook", "notebook"] },
  "gaming-pc": { category: "it", usage: "per-hour", hasEuLabel: false, motif: "computer", synonyms: ["gaming-pc", "gamer pc", "gaming computer", "gamercomputer"] },
  router: { category: "it", usage: "always-on", hasEuLabel: false, motif: "computer", synonyms: ["router", "wifi", "modem", "internet", "mesh"] },
  "mobil-opladning": { category: "it", usage: "per-use", hasEuLabel: false, motif: "batteri", synonyms: ["mobil", "mobiltelefon", "opladning", "iphone", "smartphone", "oplader"] },

  "led-paere": { category: "lys", usage: "per-hour", hasEuLabel: true, motif: "lampe", synonyms: ["led-pære", "led pære", "pære", "lys", "glødepære", "sparepære"] },
  lyskaede: { category: "lys", usage: "per-hour", hasEuLabel: false, motif: "lampe", synonyms: ["lyskæde", "julelys", "juletræslys", "led-lyskæde", "julebelysning"] },

  elbil: { category: "transport", usage: "per-km", hasEuLabel: false, motif: "elbil", synonyms: ["elbil", "el-bil", "tesla", "opladning elbil", "kWh pr km"] },
  ladestander: { category: "transport", usage: "per-km", hasEuLabel: false, motif: "elbil", synonyms: ["ladestander", "ladeboks", "billader", "wallbox", "lader"] },

  robotplaeneklipper: { category: "have", usage: "per-use", hasEuLabel: false, motif: "robotklipper", synonyms: ["robotplæneklipper", "robotklipper", "plæneklipper", "automower"] },

  pool: { category: "poolSpa", usage: "heating", hasEuLabel: false, synonyms: ["pool", "swimmingpool", "poolpumpe", "poolvarme"] },
  sauna: { category: "poolSpa", usage: "per-use", hasEuLabel: false, motif: "sauna", synonyms: ["sauna", "saunaovn", "infrarød sauna", "elsauna"] },

  haartoerrere: { category: "pleje", usage: "per-use", shiftable: false, hasEuLabel: false, synonyms: ["hårtørrer", "haartoerrer", "føntørrer", "føn"] },

  akvarium: { category: "hobby", usage: "always-on", hasEuLabel: false, synonyms: ["akvarium", "akvarievarmer", "akvariepumpe", "fisk"] },

  solceller: { category: "energi", usage: "production", hasEuLabel: false, motif: "sol", synonyms: ["solceller", "solcelleanlæg", "solpaneler", "egetforbrug"] },
};

export function metaOf(a: Pick<ApplianceData, "slug" | "meta">): CatalogueMeta {
  const m = a.meta ?? LEGACY_META[a.slug];
  if (!m) throw new Error(`catalogue: ${a.slug} mangler meta (kategori, brug, energimærke) — tilføj den i apparatets datafil`);
  return m;
}

/**
 * Kan forbruget flyttes til dagens billige timer? Det styrer tidspunkt-blokken (vindue eller døgnets
 * gennemsnit) og hub-kortenes etiket. Pr. gang og pr. km kan flyttes; resten følger brugen eller mørket.
 */
export function isShiftable(a: Pick<ApplianceData, "slug" | "meta">): boolean {
  const m = metaOf(a);
  if (m.shiftable !== undefined) return m.shiftable;
  return m.usage === "per-use" || m.usage === "per-km";
}

/* ---------- beregneren ---------- */

/**
 * De 43 oprindelige beregnere blev alle regnet som »forbrug pr. uge × 52« — også når forbruget var pr. dag,
 * pr. km eller pr. år (live 22. nov. 2026: elbil 41.652 kr./år, jordvarme 305.448 kr./år, tv 11 kr./år).
 * Her står, hvad deres `kwhPerUse` faktisk betyder. Kalibreret mod hvert apparats `typicalKwh`.
 */
type CalcFix = { per: string; perYear: number; optionScale?: number };
const WEEK = 52, DAY = 365, HEATING_SEASON = 212; // fyringssæsonen oktober–april
const LEGACY_CALC: Record<string, CalcFix> = {
  // pr. gang, antal pr. uge
  opvaskemaskine: { per: "gang", perYear: WEEK }, toerretumbler: { per: "gang", perYear: WEEK }, airfryer: { per: "gang", perYear: WEEK },
  ovn: { per: "gang", perYear: WEEK }, vaskemaskine: { per: "vask", perYear: WEEK }, induktion: { per: "gang", perYear: WEEK },
  haartoerrere: { per: "gang", perYear: WEEK }, robotstoevsuger: { per: "gang", perYear: WEEK }, sauna: { per: "gang", perYear: WEEK },
  // pr. time, timer pr. uge
  strygejern: { per: "time", perYear: WEEK }, stoevsuger: { per: "time", perYear: WEEK },
  // pr. døgn, dage pr. uge
  kummefryser: { per: "døgn", perYear: WEEK }, fryser: { per: "døgn", perYear: WEEK }, akvarium: { per: "døgn", perYear: WEEK },
  varmtvandsbeholder: { per: "døgn", perYear: WEEK },
  // pr. gang, antal pr. dag
  kaffemaskine: { per: "kop", perYear: DAY }, mikroovn: { per: "gang", perYear: DAY }, elkedel: { per: "kogning", perYear: DAY },
  komfur: { per: "gang", perYear: DAY }, "mobil-opladning": { per: "opladning", perYear: DAY }, broedrister: { per: "gang", perYear: DAY },
  // pr. time, timer pr. dag
  tv: { per: "time", perYear: DAY }, computer: { per: "time", perYear: DAY }, laptop: { per: "time", perYear: DAY },
  playstation: { per: "time", perYear: DAY }, "gaming-pc": { per: "time", perYear: DAY }, "led-paere": { per: "time", perYear: DAY },
  gulvvarme: { per: "time", perYear: DAY },
  lyskaede: { per: "time", perYear: 60 }, // november–december
  elradiator: { per: "time", perYear: HEATING_SEASON }, varmeblaeser: { per: "time", perYear: HEATING_SEASON },
  // tallet er pr. døgn, men skyderen tæller timer pr. dag
  varmepumpe: { per: "time", perYear: DAY, optionScale: 1 / 10 }, affugter: { per: "time", perYear: DAY, optionScale: 1 / 8 },
  koeleskab: { per: "døgn", perYear: DAY / 24 }, router: { per: "døgn", perYear: DAY / 24 }, quooker: { per: "døgn", perYear: DAY / 24 },
  // tallet er pr. 10 km (elbil) og pr. 50 km (ladestander); skyderen er km pr. uge
  elbil: { per: "km", perYear: WEEK, optionScale: 1 / 10 }, ladestander: { per: "km", perYear: WEEK, optionScale: 1 / 50 },
  robotplaeneklipper: { per: "dag", perYear: 30 }, // klippesæsonen april–oktober, ca. 30 uger
  pool: { per: "døgn", perYear: 7 }, // tallet er pr. døgn; skyderen er uger i sæsonen
  "gulvvarme-el": { per: "m² i døgnet", perYear: 182 }, // halvdelen af året
  jordvarme: { per: "kWh varme", perYear: 1 },
};

export interface CalcModel {
  options: CalculatorOption[];
  per: string;
  perYear: number;
  defaultIndex: number;
  usageDefault: number;
}

const roundToStep = (v: number, step: number, min: number, max: number) =>
  Math.min(max, Math.max(min, Math.round(v / step) * step));

/**
 * Beregnerens model: muligheder i rigtige kWh pr. `per`, ganget op til et år med `perYear`, og et
 * udgangspunkt (mulighed + forbrug), der rammer apparatets `typicalKwh` — så nøgletallet »Typisk forbrug«
 * og beregnerens første resultat er det samme år. Null for apparater uden forbrugsberegner (solceller).
 */
export function calcModel(a: ApplianceData): CalcModel | null {
  if (metaOf(a).usage === "production") return null;
  const c = a.calculatorConfig;
  const fix = LEGACY_CALC[a.slug];
  const per = c.per ?? fix?.per;
  const perYear = c.perYear ?? fix?.perYear;
  if (!per || !perYear) throw new Error(`catalogue: ${a.slug} — calculatorConfig mangler per/perYear`);
  const scale = c.optionScale ?? fix?.optionScale ?? 1;
  const options = c.options.map((o) => ({ ...o, kwhPerUse: o.kwhPerUse * scale }));
  const yearly = (i: number, usage: number) => options[i].kwhPerUse * usage * perYear;
  let defaultIndex = 0;
  options.forEach((_, i) => {
    if (Math.abs(yearly(i, c.usageDefault) - a.typicalKwh) < Math.abs(yearly(defaultIndex, c.usageDefault) - a.typicalKwh)) defaultIndex = i;
  });
  const usageDefault = roundToStep(a.typicalKwh / (options[defaultIndex].kwhPerUse * perYear), c.usageStep, c.usageMin, c.usageMax);
  return { options, per, perYear, defaultIndex, usageDefault };
}

/* ---------- overskriften ---------- */

/**
 * H1 efter, hvordan apparatet bruges. Før havde alle 41 apparatsider »kWh, pris pr. gang og billigste
 * tidspunkt« — også routeren og køleskabet, der ikke har nogen »gang«. Første del (»Strømforbrug for en X«)
 * kommer fra datafilens `heading`, så artikel og bøjning er dem, der allerede står der.
 * H1'en må ikke spejle Elpriser.dk's »Hvor meget strøm bruger en X?« (audit-sister-titles).
 */
export function headingFor(a: ApplianceData): string {
  const m = metaOf(a);
  const [prefix] = a.heading.split(":");
  const calc = m.usage === "production" ? null : calcModel(a);
  const per = calc?.per ?? "gang";
  const shift = isShiftable(a);
  switch (m.usage) {
    case "production":
      return a.heading;
    case "per-use":
      return `${prefix}: kWh, pris pr. ${per} og ${shift ? "billigste tidspunkt" : "dyreste timer"}`;
    case "per-hour":
      return `${prefix}: watt, pris i timen og ${shift ? "billigste tidspunkt" : "dyreste timer"}`;
    case "always-on":
      return `${prefix}: kWh i døgnet og pris om året`;
    case "heating":
      return `${prefix}: kWh om året, pris pr. måned og billige timer`;
    case "per-km":
      return `${prefix}: kWh pr. km, pris pr. opladning og billigste tidspunkt`;
  }
}

/* ---------- hubberne ---------- */


/** Udgivne apparater i en kategori, størst forbrug først. */
export function appliancesIn(key: CategoryKey): ApplianceData[] {
  return getPublishedAppliances().filter((a) => metaOf(a).category === key).sort((a, b) => b.typicalKwh - a.typicalKwh);
}

/** Kategorier, der har nok apparater til deres egen side (/apparater/<slug>/). */
export function liveHubs(): Category[] {
  return CATEGORIES.filter((c) => appliancesIn(c.key).length >= HUB_MIN_ITEMS);
}

/** Hub-siden for et apparats kategori, hvis den findes. */
export function hubFor(a: ApplianceData): Category | undefined {
  const c = category(metaOf(a).category);
  return liveHubs().some((h) => h.key === c.key) ? c : undefined;
}

/**
 * De mest søgte apparater (Google Autocomplete for »strømforbrug«, research 22. nov. 2026) — forsidens
 * genveje og footerens liste. Footeren viste før alle apparater på hver side; ved 250 er det en linkfarm.
 */
export const POPULAR_SLUGS = [
  "opvaskemaskine", "vaskemaskine", "toerretumbler", "koeleskab", "varmepumpe", "elbil",
  "tv", "airfryer", "fryser", "kummefryser", "ovn", "computer",
];
