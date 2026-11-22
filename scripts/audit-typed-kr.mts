/**
 * audit-typed-kr — ingen håndskrevne kr./øre-beløb for STRØM i apparaternes prosa, tabeller og FAQ.
 * Et elbeløb skrives som token ({{kr N}} = N kWh × månedens pris, {{pris_kwh}}, {{oere N}}), ellers går det i stå.
 * Lovlige skrevne beløb står i en sætning, der siger, hvad de er: indkøb, installation, tilskud, benzin …
 * 22. nov. 2026: 272 sætninger i 41 sider. Mål: 0. `--max N` tillader N (overgang); uden fejler alt over 0.
 */
import { APPLIANCES } from "../src/lib/appliances.ts";
import { TOKEN_RE } from "../src/lib/tokens.ts";

const ALLOWED = /(købe|købs|indkøb|anskaff|install|koster fra|nypris|pris for selve|udskiftning koster|tilskud|benzin|diesel|brændstof|abonnement|merpris|prisforskel ved køb|håndværker|montering)/i;
const max = Number(process.argv[process.argv.indexOf("--max") + 1]) || 0;
const text = (h: string) => h.replace(/<\/(td|th)>/g, " | ").replace(/<\/tr>/g, ". ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
let total = 0;
for (const a of APPLIANCES) {
  const all = [a.quickAnswer, a.content, ...a.faqs.flatMap((f) => [f.question, f.answer])].join("\n");
  const hits = text(all.replace(TOKEN_RE, "TOKEN"))
    .split(/(?<=[.!?])\s+/)
    .filter((s) => /\d[\d.,–-]*\s?(kr\.|kroner|øre)(?!\/kWh)/.test(s) || /\d+[,.]\d+\s?kr\.\/kWh/.test(s))
    .filter((s) => !ALLOWED.test(s));
  if (hits.length) {
    total += hits.length;
    if (process.argv.includes("--verbose")) for (const h of hits) console.log(`${a.slug}: ${h.trim().slice(0, 180)}`);
    else console.log(`${a.slug}: ${hits.length}`);
  }
}
console.log(`audit-typed-kr: ${total} sætning(er) med skrevne elbeløb${max ? ` (tilladt indtil videre: ${max})` : ""}.`);
process.exit(total > max ? 1 : 0);
