/**
 * Sammenligningens logik, uden brugerflade.
 *
 * Filtre, sortering, selskabssøgning og besparelse mod din nuværende aftale. Rene
 * funktioner, ingen React, ingen DOM — så de kan testes, og så de seks elsider kan dele
 * regnestykket uden at dele design.
 *
 * DENNE FIL ER EN KOPI af el-feed/examples/site/lib/el-feed-compare.ts. Ret den i feedet
 * og kopiér igen, ligesom `el-feed.ts` og `el-feed-types.ts`.
 *
 * Referencen, det her er bygget efter, har fire fejl, som IKKE er gengivet. De er
 * beskrevet ved hver funktion, fordi de alle sammen er nemme at genindføre:
 *
 *  1. "Billigst i dag" sad på den første synlige række frem for på den billigste. Efter
 *     en søgning på ét selskab bar dets dyreste aftale badget.
 *  2. Optællingen talte rækker, der ikke blev vist.
 *  3. Månedsprisen dividerede altid med 12, også når perioden var seks måneder.
 *  4. Superlativet tog ikke hensyn til, om aftalen overhovedet kunne fås.
 */
import type { FeedAdvisoryLevel, FeedEstimateProduct } from "./types";

/* ------------------------------------------------------------------ */
/* Den form, logikken arbejder på                                      */
/* ------------------------------------------------------------------ */

/**
 * Det, sammenligningen skal bruge at vide om en aftale — og ikke mere.
 *
 * Feedets svar er den ene kilde, men et site har typisk sin egen rækketype med partnere,
 * sporingslinks og andet, der ikke hører hjemme i et delt regnestykke. Derfor er
 * funktionerne skrevet mod den her smalle form: en rækketype, der har felterne, kan
 * sendes direkte ind og kommer ud igen som sig selv, med sine egne felter i behold.
 *
 * `fromFeed()` laver formen ud af feedets DTO, hvis man starter derfra.
 */
export interface CompareRow {
  id: string;
  productName: string;
  supplierSlug: string;
  supplierName: string;
  logo: string | null;
  type: "variable" | "fixed";
  paymentType: string | null;
  isIntro: boolean;
  /** Prisen efter introperioden. Er den null, kender vi ikke aftalens rigtige pris. */
  nextProduct: { slug: string; name: string } | null;
  firstTimeDiscountKr: number;
  restricted: boolean;
  /** Gennemsigtighedsscoren følger stadig med fra feedet, men indgår ikke i sortering eller visning. */
  transparency: { score: number } | null;
  /**
   * Anmærkning fra vores register: "obs" eller "fraraades". Null = ingen. `source` er den
   * første kildes navn og dato — kun til sætningen i `whyNotCheapest`, aldrig til rækkefølgen.
   */
  advisory: { level: FeedAdvisoryLevel; source?: { name: string; date: string } | null } | null;
  /** Aftalens betingelse med kildens ord (feriebolig, studiekort …). Kun til forklaringer. */
  eligibility?: string | null;
  /** Frisk Trustpilot-score. Tæller kun ved lige pris, og kun fra TRUSTPILOT_TIEBREAK_MIN_REVIEWS anmeldelser. */
  trustpilot: { score: number; reviews: number } | null;
  /** Hele regningen over den valgte periode, inkl. moms. */
  allInKr: number;
}

/** Feedets DTO oversat til den form, logikken her arbejder på. */
export function fromFeed(p: FeedEstimateProduct): CompareRow {
  return {
    id: p.slug,
    productName: p.name,
    supplierSlug: p.supplier.slug,
    supplierName: p.supplier.name,
    logo: p.supplier.logoUrl,
    type: p.type,
    paymentType: p.paymentType,
    isIntro: p.introOffer,
    nextProduct: p.nextProduct,
    firstTimeDiscountKr: p.firstTimeDiscountKr,
    restricted: p.restricted,
    transparency: p.supplier.transparency,
    advisory: p.supplier.advisory
      ? {
          level: p.supplier.advisory.level,
          source: p.supplier.advisory.reasons[0]
            ? { name: p.supplier.advisory.reasons[0].sourceName, date: p.supplier.advisory.reasons[0].sourceDate }
            : null,
        }
      : null,
    eligibility: p.eligibility,
    trustpilot:
      p.supplier.trustpilot && p.supplier.trustpilot.trustScore !== null && p.supplier.trustpilot.reviewCount !== null
        ? { score: p.supplier.trustpilot.trustScore, reviews: p.supplier.trustpilot.reviewCount }
        : null,
    allInKr: p.estimate.totalInclVat,
  };
}

/* ------------------------------------------------------------------ */
/* Anmærkninger                                                        */
/* ------------------------------------------------------------------ */

/** 0 = ingen anmærkning, 1 = OBS, 2 = frarådes. Rækkefølgen i listen følger båndet før alt andet. */
export type Band = 0 | 1 | 2;

/**
 * Skal være lig feedets ADVISORY_RULES.trustpilot.minReviews (pinnet af tests/advisories.test.ts).
 * Under grænsen er en score ikke et grundlag — hverken for et mærke eller for at afgøre
 * rækkefølgen mellem to aftaler til samme pris.
 */
export const TRUSTPILOT_TIEBREAK_MIN_REVIEWS = 50;

export function bandOf(row: Pick<CompareRow, "advisory">): Band {
  if (!row.advisory) return 0;
  return row.advisory.level === "fraraades" ? 2 : 1;
}

/**
 * Del listen i det, der vises som listen, og det, der vises for sig nederst.
 *
 * Kun frarådede selskaber lægges for sig; OBS-rækker bliver i listen — de står i forvejen
 * efter alle rene rækker, fordi sorteringen tager båndet først. Rækkefølgen bevares.
 */
export function partitionAdvised<T extends CompareRow>(rows: T[]): { listed: T[]; advised: T[] } {
  const listed: T[] = [];
  const advised: T[] = [];
  for (const r of rows) (bandOf(r) === 2 ? advised : listed).push(r);
  return { listed, advised };
}

/* ------------------------------------------------------------------ */
/* Filtre                                                              */
/* ------------------------------------------------------------------ */

export type PriceTypeFilter = "fast" | "variabel";
export type SettlementFilter = "faktisk" | "aconto";
export type OfferFilter = "introtilbud" | "velkomstrabat";

export interface CompareFilters {
  priceTypes: PriceTypeFilter[];
  settlementTypes: SettlementFilter[];
  offerTypes: OfferFilter[];
  /** Skjul aftaler med en betingelse (fagforening, studiekort, feriebolig). */
  hideRestricted: boolean;
}

/**
 * Standarden skjuler aftaler med en betingelse.
 *
 * Tolv aftaler i markedet forudsætter noget, en almindelig husstand ikke har: en feriebolig
 * eller flere boliger (goenergi go'ferie, Energi Viborg Saml-El, Verdo Bolig2), et studiekort
 * (goenergi go'studie), køb af ladeboks (nef Bil og Bolig), en refusionsaftale (EGO El og
 * Bil) eller et medlemskab (Elforbundet). Vist som standard lå de øverst på pris og fyldte
 * listen med aftaler, læseren ikke kan få. De findes stadig — filteret "Vis også aftaler med
 * betingelser" slår dem til — og de har aldrig kunnet bære "billigst".
 */
export const DEFAULT_FILTERS: CompareFilters = {
  priceTypes: ["fast", "variabel"],
  settlementTypes: ["faktisk", "aconto"],
  offerTypes: ["introtilbud", "velkomstrabat"],
  hideRestricted: true,
};

/**
 * Afregningsform.
 *
 * Kilden bruger tre værdier: `Bagudbetalt` (du betaler for det, du har brugt),
 * `Forudbetalt` (aconto) og `Kombination`. De ti kombinationsaftaler hører hjemme under
 * BEGGE filtre — de er begge dele, og at gemme dem under et tredje, uvalgt filter ville
 * få dem til at forsvinde for alle.
 */
export function settlementOf(paymentType: string | null): SettlementFilter[] {
  const t = (paymentType ?? "").toLowerCase();
  if (t.includes("kombination")) return ["faktisk", "aconto"];
  if (t.includes("forud")) return ["aconto"];
  return ["faktisk"];
}

/** Har aftalen et tilbud, og i så fald hvilken slags? */
export function offersOf(p: Pick<CompareRow, "isIntro" | "firstTimeDiscountKr">): OfferFilter[] {
  const out: OfferFilter[] = [];
  if (p.isIntro) out.push("introtilbud");
  /*
   * "Rabataftaler" er andre portalers eget begreb, og kilden har ikke noget
   * tilsvarende. Det nærmeste ærlige er en kontant velkomstrabat — en anden slags ting
   * end en midlertidig pris, og derfor et andet ord.
   */
  if (p.firstTimeDiscountKr > 0) out.push("velkomstrabat");
  return out;
}

/**
 * Filtrér listen.
 *
 * Tilbudsfiltrene er fratrækkende: en aftale UDEN tilbud vises altid. Slår man begge
 * fra, tømmes listen altså ikke — man fjerner tilbuddene. Det er sådan referencen og
 * alle konkurrenterne opfører sig, og det er også det, etiketterne lover.
 */
export function filterProducts<T extends CompareRow>(rows: T[], f: CompareFilters): T[] {
  return rows.filter((p) => {
    const priceOk = f.priceTypes.includes(p.type === "fixed" ? "fast" : "variabel");
    if (!priceOk) return false;

    const settlement = settlementOf(p.paymentType);
    if (!settlement.some((s) => f.settlementTypes.includes(s))) return false;

    const offers = offersOf(p);
    if (offers.length && !offers.some((o) => f.offerTypes.includes(o))) return false;

    if (f.hideRestricted && p.restricted) return false;
    return true;
  });
}

/* ------------------------------------------------------------------ */
/* Sortering                                                           */
/* ------------------------------------------------------------------ */

/**
 * Sorteringerne. "billigst" er standard; de to andre bruger Trustpilot-scoren som mål for
 * kvalitet. Gennemsigtighedsscoren indgår ikke længere (25. september 2026): sitene viser
 * den ikke, og en sortering efter et tal, læseren ikke kan se, er ikke til at forklare.
 */
export type SortMode = "billigst" | "pris-og-trustpilot" | "hoejeste-trustpilot";

/** Gamle adresser (`?sorter=pris-og-score`) skal stadig virke. */
const LEGACY_SORT_MODES: Record<string, SortMode> = { "pris-og-score": "pris-og-trustpilot", "bedste-score": "hoejeste-trustpilot" };

export function normalizeSortMode(value: string | null | undefined): SortMode | null {
  if (!value) return null;
  if (value === "billigst" || value === "pris-og-trustpilot" || value === "hoejeste-trustpilot") return value;
  return LEGACY_SORT_MODES[value] ?? null;
}

const priceOf = (p: CompareRow) => p.allInKr;
/** Trustpilot-scoren som kvalitetsmål — kun når den bygger på nok anmeldelser. Ellers null: vi ved bare ikke noget. */
const trustpilotOf = (p: CompareRow) =>
  p.trustpilot && p.trustpilot.reviews >= TRUSTPILOT_TIEBREAK_MIN_REVIEWS ? p.trustpilot.score : null;

/**
 * Sortér.
 *
 * Båndet kommer først i alle tre sorteringer: selskaber uden anmærkning, så OBS, så
 * frarådede. Ingen pris og ingen score flytter et selskab op over et rent — det er den
 * ene regel, læseren skal kunne regne med, og den står på metodesiden.
 *
 * Inden for båndet: sorteringens egen nøgle, og ved lighed prisen, så Trustpilot (kun
 * når begge har mindst TRUSTPILOT_TIEBREAK_MIN_REVIEWS anmeldelser — en score på tolv
 * anmeldelser afgør ingenting), så navn. En manglende score er neutral, ikke "værst".
 *
 * `pris-og-trustpilot` er halvt pris, halvt Trustpilot, hver normaliseret over listen.
 * Prisen normaliseres inden for sin egen produkttype, så en billig fast aftale og en
 * billig variabel begge kan stå øverst — de to slags kan ikke måles på samme skala,
 * fordi den ene har bundet sin pris og den anden ikke har.
 *
 * Et selskab uden brugbar Trustpilot-score får medianen og ikke nul. Nul ville sige
 * "værst i markedet" om et selskab, vi bare ikke ved noget om, og det er en påstand.
 */
export function sortProducts<T extends CompareRow>(rows: T[], mode: SortMode): T[] {
  const out = [...rows];
  const byName = (a: T, b: T) =>
    `${a.supplierName} ${a.productName}`.localeCompare(`${b.supplierName} ${b.productName}`, "da");
  const band = (a: T, b: T) => bandOf(a) - bandOf(b);
  const tail = (a: T, b: T) => {
    const price = priceOf(a) - priceOf(b);
    if (price) return price;
    const ta = trustpilotOf(a), tb = trustpilotOf(b);
    if (ta !== null && tb !== null && ta !== tb) return tb - ta;
    return byName(a, b);
  };

  if (mode === "billigst") {
    return out.sort((a, b) => band(a, b) || tail(a, b));
  }

  const scores = rows.map(trustpilotOf).filter((s): s is number => s !== null).sort((a, b) => a - b);
  const median = scores.length ? (scores[Math.floor(scores.length / 2)] ?? 0) : 0;
  const score = (p: T) => trustpilotOf(p) ?? median;

  if (mode === "hoejeste-trustpilot") {
    return out.sort((a, b) => band(a, b) || score(b) - score(a) || tail(a, b));
  }

  const bounds = (pick: (p: T) => boolean) => {
    const vs = rows.filter(pick).map(priceOf);
    return vs.length ? { min: Math.min(...vs), max: Math.max(...vs) } : null;
  };
  const b = { fixed: bounds((p) => p.type === "fixed"), variable: bounds((p) => p.type !== "fixed") };
  const sMin = scores[0] ?? 0;
  const sMax = scores.at(-1) ?? 0;
  const norm = (v: number, min: number, max: number) => (max <= min ? 0 : (v - min) / (max - min));

  const combined = (p: T) => {
    const pb = p.type === "fixed" ? b.fixed : b.variable;
    const priceNorm = pb ? norm(priceOf(p), pb.min, pb.max) : 0;
    return (1 - priceNorm) * 0.5 + norm(score(p), sMin, sMax) * 0.5;
  };
  return out.sort((a, b2) => band(a, b2) || combined(b2) - combined(a) || tail(a, b2));
}

/* ------------------------------------------------------------------ */
/* "Billigst i dag"                                                    */
/* ------------------------------------------------------------------ */

/**
 * Hvilken aftale må bære "Billigst i dag"?
 *
 * Referencen sætter badget på `index === 0` — den første SYNLIGE række. Søger man på ét
 * selskab, får dets dyreste aftale badget; sorterer man efter score, får den bedst
 * vurderede det. Her regnes det ud af prisen, og to slags aftaler er udelukket:
 *
 *  - **Aftaler med en betingelse.** Vindstøds Elforbundet-aftale er markedets billigste
 *    og kræver fagforeningsmedlemskab. "Billigst" om en aftale, læseren ikke kan få, er
 *    ikke en pris, men en påstand, vi ikke kan stå inde for.
 *  - **Introtilbud.** Introprisen ophører; med kendt efterfølger regnes hele perioden
 *    igennem, og aftalen konkurrerer i listen — men "billigst" er en pris, der bliver ved.
 *  - **Kontant velkomstrabat.** Et engangsbeløb, der ikke findes år to.
 *  - **Selskaber med en anmærkning.** Et selskab, vi fraråder eller har en OBS på, kan
 *    have markedets laveste pris — og så er det stadig ikke det, vi kalder billigst.
 *    Omfanget på badget siger "uden anmærkninger", og det skal passe.
 *
 * Returnerer aftalens `id`, eller null hvis ingen kvalificerer sig.
 */
export function cheapestBadgeId(rows: CompareRow[]): string | null {
  const eligible = rows.filter((p) => isClean(p) && isLastingDeal(p));
  if (!eligible.length) return null;
  return eligible.reduce((a, b) => (priceOf(b) < priceOf(a) ? b : a)).id;
}

/* ------------------------------------------------------------------ */
/* Rene og varige aftaler, markedets reference og forklaringen         */
/* ------------------------------------------------------------------ */

/** Ingen anmærkning — hverken OBS eller frarådes. */
export function isClean(row: Pick<CompareRow, "advisory">): boolean {
  return row.advisory === null;
}

/**
 * "Varig" betyder: ingen tilbud, ingen rabat, ingen betingelse — en pris, der gælder
 * hele perioden, og en aftale, enhver kan få.
 *
 * Et introtilbud tæller ALDRIG som varigt, heller ikke med kendt efterfølger (ejerens
 * beslutning 1. oktober 2026): over 6 måneder vinder en intro uden abonnement altid, og
 * så ville "billigst" pege på en pris, der ophører. Introen prissættes stadig over hele
 * perioden med efterfølgerens pris og konkurrerer i listen; den bærer bare ikke badget.
 * To ting mere holder en aftale ude: en kontant førstegangsrabat, der ikke findes år to,
 * og en betingelse, som gør, at de fleste læsere slet ikke kan få aftalen. Anmærkningen
 * er IKKE med her — den er en egenskab ved selskabet, ikke ved aftalen, og siderne skal
 * kunne vise "alle varige aftaler" inklusive dem med OBS. Brug `isClean` ved siden af.
 */
export function isLastingDeal(
  row: Pick<CompareRow, "isIntro" | "nextProduct" | "firstTimeDiscountKr" | "restricted">,
): boolean {
  return !row.isIntro && row.firstTimeDiscountKr === 0 && !row.restricted;
}

export interface MarketReference {
  /** Medianen af de rene, varige aftalers pris over perioden, inkl. moms. */
  allInKr: number;
  offers: number;
  suppliers: number;
}

/**
 * "En typisk aftale": medianen over de aftaler, der både er rene og varige.
 *
 * Det er referencen for "du kan spare ca. X", når læseren ikke har valgt sin egen aftale.
 * Medianen er valgt frem for gennemsnittet, fordi to nulkroners introtilbud og et par
 * dyre fastprisaftaler ellers trækker tallet derhen, hvor ingen betaler. Grundlaget er
 * HELE det regulerede marked — aldrig kun partnere, og aldrig aftaler med anmærkning,
 * betingelse, ukendt efterpris eller kontant rabat: så ville "typisk" være et tal, vi
 * selv havde valgt. Lige antal: gennemsnittet af de to midterste.
 */
export function marketReference(rows: readonly CompareRow[]): MarketReference | null {
  const eligible = rows.filter((r) => isClean(r) && isLastingDeal(r));
  if (!eligible.length) return null;
  const prices = eligible.map(priceOf).sort((a, b) => a - b);
  const mid = Math.floor(prices.length / 2);
  const median = prices.length % 2 === 1 ? prices[mid]! : (prices[mid - 1]! + prices[mid]!) / 2;
  return { allInKr: median, offers: eligible.length, suppliers: new Set(eligible.map((r) => r.supplierSlug)).size };
}

/**
 * Omfanget for et superlativ som én sætning: aftalerne uden betingelse, selskaberne uden
 * anmærkning, netområdet og forbruget. Ordene er en del af påstanden — uden dem ville
 * "billigst af 182" være usandt den dag, et selskab, vi fraråder, eller en ferieboligaftale
 * har den laveste pris (sag 20/05642). Vises hver gang "billigst" eller "typisk" vises.
 */
export function scopeText(
  offers: number,
  suppliers: number,
  areaLabel: string,
  kwh: number,
  periodMonths = 12,
  /** Når kun én pristype er med i sammenligningen, siger omfanget det: "variable elaftaler". */
  kind: PriceTypeFilter | null = null,
): string {
  const n = (v: number) => Math.round(v).toLocaleString("da-DK");
  const periode = periodMonths === 12 ? "" : ` regnet over ${periodMonths} måneder`;
  const what = kind === "variabel" ? "variable elaftaler" : kind === "fast" ? "fastprisaftaler" : "elaftaler";
  return `af de ${n(offers)} ${what} uden betingelser fra ${n(suppliers)} elselskaber uden anmærkninger i ${areaLabel} ved ${n(kwh)} kWh om året${periode}`;
}

/** Den ene pristype, et filter har ladet stå — eller null, når begge (eller ingen) er med. */
export function singlePriceType(priceTypes: readonly PriceTypeFilter[] | undefined): PriceTypeFilter | null {
  if (!priceTypes || priceTypes.length !== 1) return null;
  return priceTypes[0]!;
}

/**
 * Omfanget for det, der faktisk sammenlignes: rene aftaler uden betingelse af de pristyper,
 * filtret viser. Åbner sitet på "kun variable", er "billigst" billigst af de variable, og
 * sætningen siger det — den må aldrig tælle fastprisaftaler, læseren ikke kan se.
 */
export function scopeForRows<T extends CompareRow>(
  rows: readonly T[],
  areaLabel: string,
  kwh: number,
  periodMonths: number,
  priceTypes?: readonly PriceTypeFilter[],
): string {
  const kind = singlePriceType(priceTypes);
  const pool = rows.filter((r) => isClean(r) && !r.restricted && (!kind || (r.type === "fixed" ? "fast" : "variabel") === kind));
  return scopeText(pool.length, new Set(pool.map((r) => r.supplierSlug)).size, areaLabel, kwh, periodMonths, kind);
}

const MONTHS_DA = [
  "januar", "februar", "marts", "april", "maj", "juni",
  "juli", "august", "september", "oktober", "november", "december",
];

/** "22. november 2026" fra "2026-11-22" (også med klokkeslæt bagefter); ellers tom streng. */
export function danishDate(iso: string | null | undefined): string {
  const m = iso ? /^(\d{4})-(\d{2})-(\d{2})/.exec(iso) : null;
  return m ? `${Number(m[3])}. ${MONTHS_DA[Number(m[2]) - 1]} ${m[1]}` : "";
}

/**
 * Hvorfor en aftale, der er billigere end den billigste varige, ikke kan kaldes billigst —
 * som én sætning til brødtekst. Rækkefølgen er den, der er mest afgørende først: en
 * anmærkning (med kilde og dato, så sætningen kan dokumenteres), dernæst intropris uden
 * kendt pris bagefter, kontant rabat, betingelse. Null, hvis aftalen faktisk kan bære badget.
 */
export function whyNotCheapest(
  row: Pick<CompareRow, "supplierName" | "advisory" | "isIntro" | "nextProduct" | "firstTimeDiscountKr" | "restricted" | "eligibility">,
): string | null {
  if (row.advisory) {
    const level = row.advisory.level === "fraraades" ? "et selskab, vi fraråder" : "et selskab med en OBS-anmærkning";
    const src = row.advisory.source;
    const source = src ? ` (kilde: ${src.name}, ${danishDate(src.date)})` : "";
    return `Fordi ${row.supplierName} er ${level}${source}, og et selskab med en anmærkning kan ikke bære "billigst".`;
  }
  if (row.isIntro) {
    return row.nextProduct
      ? "Fordi den er et introtilbud: introprisen gælder kun en del af perioden, og \"billigst\" gives kun til aftaler uden tilbud."
      : "Fordi den er et introtilbud, og prisen efter introperioden fremgår ikke af selskabets indberetning.";
  }
  if (row.firstTimeDiscountKr > 0) {
    const kr = Math.round(row.firstTimeDiscountKr).toLocaleString("da-DK");
    return `Fordi prisen indeholder en kontant velkomstrabat på ${kr} kr., som ikke findes år to.`;
  }
  if (row.restricted) {
    return `Fordi aftalen har en betingelse, de fleste læsere ikke opfylder${row.eligibility ? `: ${row.eligibility}` : ""}.`;
  }
  return null;
}

/* ------------------------------------------------------------------ */
/* Selskabssøgning                                                     */
/* ------------------------------------------------------------------ */

export interface SupplierOption {
  slug: string;
  name: string;
  logoUrl: string | null;
  /** Antal aftaler fra selskabet i den liste, der blev søgt i. */
  productCount: number;
}

/**
 * Selskaberne i listen, alfabetisk på dansk.
 *
 * Antallet tælles i ét gennemløb. Referencen kalder `products.filter(...)` inde i sin
 * `map` og laver dermed n×m sammenligninger for 54 selskaber og 206 aftaler ved hvert
 * tastetryk i søgefeltet.
 *
 * `query` matcher på navnet, uden hensyn til store bogstaver og danske tegn, så "orsted"
 * finder Ørsted.
 */
export function searchSuppliers(rows: CompareRow[], query = ""): SupplierOption[] {
  const by = new Map<string, SupplierOption>();
  for (const p of rows) {
    const found = by.get(p.supplierSlug);
    if (found) { found.productCount++; continue; }
    by.set(p.supplierSlug, { slug: p.supplierSlug, name: p.supplierName, logoUrl: p.logo, productCount: 1 });
  }
  const q = variants(query);
  return [...by.values()]
    .filter((s) => !query.trim() || matches(variants(s.name), q))
    .sort((a, b) => a.name.localeCompare(b.name, "da"));
}

/**
 * To måder at skrive det samme på.
 *
 * Ø har ingen dekomposition i Unicode, så `normalize("NFD")` gør ingenting ved den. Folk
 * søger både "orsted" og "oersted" efter Ørsted, og vælger man kun den ene udskrivning,
 * finder den anden ingenting. Derfor foldes både navn og søgning begge veje, og der
 * matches på tværs.
 */
function variants(s: string): [string, string] {
  const base = s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
  return [
    base.replace(/æ/g, "a").replace(/ø/g, "o").replace(/å/g, "a"),
    base.replace(/æ/g, "ae").replace(/ø/g, "oe").replace(/å/g, "aa"),
  ];
}

const matches = (name: [string, string], q: [string, string]) =>
  name.some((n) => q.some((x) => x && n.includes(x)));

/* ------------------------------------------------------------------ */
/* Besparelse mod din nuværende aftale                                 */
/* ------------------------------------------------------------------ */

export type SavingsVerdict =
  | { kind: "cheaper"; amount: number }
  | { kind: "pricier"; amount: number }
  | { kind: "same" };

/**
 * Hvor meget sparer man ved at skifte fra `current` til `row`?
 *
 * Under 50 kr. over perioden siger vi "omtrent samme pris" frem for et tal. Begge sider
 * er estimater bygget på den samme forventede spotpris, og at skrive "spar 12 kr." oven
 * på den usikkerhed ville give tallet en præcision, det ikke har.
 *
 * Begge beløb skal dække den SAMME periode. Kald med rækker fra samme svar.
 */
export function savingsAgainst(
  current: CompareRow | null,
  row: CompareRow,
  neutralBandKr = 50,
): SavingsVerdict | null {
  if (!current) return null;
  const diff = priceOf(current) - priceOf(row);
  if (Math.abs(diff) < neutralBandKr) return { kind: "same" };
  return diff > 0
    ? { kind: "cheaper", amount: Math.round(diff) }
    : { kind: "pricier", amount: Math.round(-diff) };
}

/* ------------------------------------------------------------------ */
/* Visning                                                             */
/* ------------------------------------------------------------------ */

/**
 * Månedsprisen for den valgte periode.
 *
 * Referencen dividerer altid med 12. Ved seks måneder viser den derfor det halve af,
 * hvad man reelt betaler om måneden — under en overskrift, der oven i købet siger
 * "kr/år". Her divideres med den periode, tallet faktisk dækker.
 */
export function monthlyOf(p: CompareRow, periodMonths: number): number {
  return p.allInKr / Math.max(1, periodMonths);
}

/**
 * Sætningen over listen: hvor mange rækker der VISES, af hvor mange der er.
 *
 * `shown` skal være antallet af faktisk gengivne rækker. I referencen tælles skiven før
 * den række, der skjules som "din nuværende aftale", fjernes, så der står 20 og vises 19.
 */
export function resultSummary(shown: number, total: number, kwh: number, periodMonths: number): string {
  const n = (v: number) => v.toLocaleString("da-DK");
  const periode = periodMonths === 12 ? "12 måneder" : `${periodMonths} måneder`;
  return `Viser ${n(shown)} af ${n(total)} elaftaler for ${n(kwh)} kWh om året, regnet over ${periode}.`;
}
