/**
 * Tokens i prosa: det eneste sted, et beløb må "stå" i indholdsfilerne.
 *
 * Apparatsidernes tekst, tabeller, FAQ og hurtige svar skriver ALDRIG en pris — de skriver
 * et token, og `renderWith()` regner det med byggets marginalpris. Grammatikken er lukket;
 * et ukendt token bliver stående synligt, så audit-prices (pass 2) fanger det i den byggede HTML.
 *
 *   {{pris_kwh}}      → "1,52 kr./kWh"     {{pris_kwh_tal}} → "1,52"
 *   {{pris_dk1}}      → "1,49 kr./kWh"     {{pris_dk2}}     → "1,55 kr./kWh"
 *   {{maaned}}        → "oktober 2026"
 *   {{kr 2000}}       → "3.040 kr."        (2.000 kWh × marginalpris, hele kroner)
 *   {{kr 2000-4000}}  → "3.040-6.080 kr."  (bindestreg bevares som skrevet: - – —)
 *   {{kr 1,2}}        → "1,82 kr."         (under 10 kr. → to decimaler)
 *   {{kr 4000 /md}}   → "253 kr."          (/md ÷ 12, /dag ÷ 365, /uge ÷ 52 — periodeordet står i prosaen)
 *   {{oere 0,1}}      → "15 øre"
 */
import { formatKr, formatKrExact, formatPrice, danishMonth } from "./format";

export interface TokenPrices {
  /** kr./kWh inkl. moms, uden abonnement — landsgennemsnit af DK1 og DK2 */
  dk: number;
  dk1: number;
  dk2: number;
  /** "2026-10" */
  month: string;
}

const NUM = String.raw`\d+(?:\.\d{3})*(?:,\d+)?`;
const RANGE = String.raw`${NUM}(?:\s?[-–—]\s?${NUM})?`;
export const TOKEN_RE = new RegExp(
  String.raw`\{\{(pris_kwh_tal|pris_kwh|pris_dk1|pris_dk2|maaned|kr ${RANGE}(?: \/(?:md|dag|uge))?|oere ${RANGE})\}\}`,
  "g",
);
/** Alt, der ligner et token, også de ugyldige — til audit. */
export const ANY_TOKEN_RE = /\{\{[a-zæøå][^}"':]*\}\}/g;

const DIVISOR: Record<string, number> = { md: 12, dag: 365, uge: 52 };

function parseDa(n: string): number {
  return Number(n.replace(/\./g, "").replace(",", "."));
}

function krAmount(kwhAmount: number, price: number, divisor: number): string {
  const amount = (kwhAmount * price) / divisor;
  return Math.abs(amount) < 10 ? formatKrExact(amount) : formatKr(amount);
}

function expand(token: string, p: TokenPrices): string {
  switch (token) {
    case "pris_kwh":
      return `${formatPrice(p.dk)} kr./kWh`;
    case "pris_kwh_tal":
      return formatPrice(p.dk);
    case "pris_dk1":
      return `${formatPrice(p.dk1)} kr./kWh`;
    case "pris_dk2":
      return `${formatPrice(p.dk2)} kr./kWh`;
    case "maaned":
      return danishMonth(p.month);
  }
  const m = token.match(new RegExp(String.raw`^(kr|oere) (${NUM})(?:(\s?[-–—]\s?)(${NUM}))?(?: \/(md|dag|uge))?$`));
  if (!m) return `{{${token}}}`;
  const [, kind, a, dash, b, per] = m;
  const divisor = per ? DIVISOR[per]! : 1;
  if (kind === "oere") {
    const one = (x: string) => Math.round(parseDa(x) * p.dk * 100).toLocaleString("da-DK");
    return b ? `${one(a!)}${dash}${one(b)} øre` : `${one(a!)} øre`;
  }
  return b ? `${krAmount(parseDa(a!), p.dk, divisor)}${dash}${krAmount(parseDa(b), p.dk, divisor)} kr.` : `${krAmount(parseDa(a!), p.dk, divisor)} kr.`;
}

/** Erstatter alle kendte tokens; ukendte bliver stående, så de ses. */
export function renderWith(p: TokenPrices, text: string): string {
  return text.replace(TOKEN_RE, (_, token: string) => expand(token, p));
}

/** Tokens, der ikke følger grammatikken (til audit og tests). */
export function invalidTokens(text: string): string[] {
  const valid = new Set([...text.matchAll(TOKEN_RE)].map((m) => m[0]));
  return [...text.matchAll(ANY_TOKEN_RE)].map((m) => m[0]).filter((t) => !valid.has(t));
}

/** Dansk typografi: et beløb, der slutter en sætning, får ikke to punktummer ("104 kr.." → "104 kr."). */
export function collapseAbbreviationPeriods(text: string): string {
  return text.replace(/\b(kr|md|pr|ca|fx|inkl|ekskl|t|nr)\.\.(?=\s|$|<)/g, "$1.");
}

/**
 * Tabeller i HTML-strenge får et rullevindue (`.table-scroll`, som Elpriser.dk's Prose.tsx): kortet sidder på
 * vinduet, og en bred tabel ruller sideværts i stedet for at skubbe siden ud over 390 px.
 */
export function wrapTables(html: string): string {
  return html.replace(/<table\b[\s\S]*?<\/table>/g, (t) => `<div class="table-scroll">${t}</div>`);
}
