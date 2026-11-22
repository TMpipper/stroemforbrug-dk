/**
 * Sitesøgningen — ren funktion uden afhængigheder, så den kører både i SearchBox (klienten) og på /soeg/
 * (serveren, uden JavaScript). Indekset bygges i src/lib/search-index.ts og serveres fra /api/soeg/.
 *
 * Danske søgninger fra Google ligner »hvor meget strøm bruger en opvaskemaskine« eller »ps5 strømforbrug«:
 * spørgeordene fjernes, æ/ø/å normaliseres (begge stavemåder virker), bøjningsendelser skæres af, og et
 * enkelt tastefejl (»kummefryzer«) tilgives.
 */

export type SearchKind = "apparat" | "model" | "kategori" | "guide" | "værktøj" | "husstand";

export interface SearchEntry {
  /** Visningsnavn */
  t: string;
  /** URL med afsluttende skråstreg */
  u: string;
  k: SearchKind;
  /** Undertekst: kategori eller kort beskrivelse */
  d: string;
  /** Søgeord (navn + synonymer), allerede normaliseret og stemmet */
  w: string[];
  /** Typisk forbrug, kWh/år — kun apparater */
  kwh?: number;
}

/** Ord og fraser, der intet siger om, HVAD der søges efter. Normaliseret form. */
const STOP_PHRASES = [
  "hvor meget stroem bruger", "hvor meget el bruger", "hvor meget bruger", "hvad bruger", "hvad koster det at bruge",
  "hvad koster det at", "hvad koster", "hvor mange kwh bruger", "hvor mange watt bruger", "hvor mange kwh", "hvor mange watt",
];
const STOP_WORDS = new Set([
  "stroemforbrug", "stromforbrug", "elforbrug", "forbrug", "stroem", "strom", "el", "kwh", "watt", "w", "pris", "priser",
  "en", "et", "min", "mit", "mine", "din", "dit", "i", "pr", "om", "aaret", "aret", "timen", "time", "dag", "doegnet", "dognet",
  "af", "til", "for", "paa", "pa", "med", "og", "det", "der", "at", "bruger", "koster", "gennemsnit", "ca",
]);

export function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/æ/g, "ae").replace(/ø/g, "oe").replace(/å/g, "aa")
    .replace(/é/g, "e").replace(/ü/g, "u").replace(/ö/g, "oe").replace(/ä/g, "ae")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

/** Let dansk stemmer: »opvaskemaskinen«, »opvaskemaskiner« → »opvaskemaskin«. */
export function stem(w: string): string {
  for (const suf of ["erne", "ene", "er", "en", "et", "e"]) {
    if (w.length - suf.length >= 4 && w.endsWith(suf)) return w.slice(0, -suf.length);
  }
  return w;
}

/** Søgeord til indekset: hvert ord stemmet, plus hele frasen samlet (»air fryer« → »airfryer«). */
export function termsFor(texts: string[]): string[] {
  const out = new Set<string>();
  for (const t of texts) {
    const n = normalize(t);
    if (!n) continue;
    for (const w of n.split(" ")) out.add(stem(w));
    if (n.includes(" ")) out.add(n.replace(/ /g, ""));
  }
  return [...out];
}

export function queryTokens(q: string): string[] {
  let n = ` ${normalize(q)} `;
  for (const p of STOP_PHRASES) n = n.replace(` ${p} `, " ");
  const all = n.trim().split(" ").filter(Boolean);
  const words = all.filter((w) => !STOP_WORDS.has(w));
  // Kun stopord (»kwh pris«)? Så er de selve søgningen.
  return (words.length ? words : all).map(stem);
}

/** Optimal string alignment-afstand, afbrudt over `max`. */
function editDistance(a: string, b: string, max: number): number {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  const prev2: number[] = [];
  let prev = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    let rowMin = i;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      let v = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) v = Math.min(v, prev2[j - 2] + 1);
      cur.push(v);
      rowMin = Math.min(rowMin, v);
    }
    if (rowMin > max) return max + 1;
    prev2.splice(0, prev2.length, ...prev);
    prev = cur;
  }
  return prev[b.length];
}

function tokenScore(tok: string, words: string[]): number {
  let best = 0;
  for (const w of words) {
    if (w === tok) return 10;
    if (w.startsWith(tok)) best = Math.max(best, tok.length >= 2 ? 7 : 3);
    else if (tok.length >= 4 && w.includes(tok)) best = Math.max(best, 4);
    // Danske sammensatte ord: »vinkøleskab« rammer »køleskab«, »gamingcomputer« rammer »computer«.
    else if (w.length >= 5 && tok.endsWith(w)) best = Math.max(best, 3);
    else if (tok.length >= 4) {
      const max = tok.length >= 8 ? 2 : 1;
      if (editDistance(tok, w.slice(0, tok.length + max), max) <= max) best = Math.max(best, 3);
    }
  }
  return best;
}

const KIND_BOOST: Record<SearchKind, number> = { apparat: 1.0, model: 0.95, kategori: 0.9, værktøj: 0.85, husstand: 0.85, guide: 0.8 };

/** De bedste hits: alle søgeord skal ramme noget; navnet vejer tungest. */
export function search(index: SearchEntry[], q: string, limit = 8): SearchEntry[] {
  const toks = queryTokens(q);
  if (!toks.length) return [];
  const scored: { e: SearchEntry; s: number }[] = [];
  for (const e of index) {
    let s = 0;
    let ok = true;
    for (const tok of toks) {
      const v = tokenScore(tok, e.w);
      if (!v) { ok = false; break; }
      s += v;
    }
    if (!ok) continue;
    const name = normalize(e.t);
    if (name === toks.join(" ") || stem(name.replace(/ /g, "")) === toks.join("")) s += 8;
    else if (name.startsWith(toks[0])) s += 3;
    scored.push({ e, s: s * KIND_BOOST[e.k] });
  }
  return scored.sort((a, b) => b.s - a.s || a.e.t.localeCompare(b.e.t, "da")).slice(0, limit).map((x) => x.e);
}
