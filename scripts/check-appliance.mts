/**
 * check-appliance — hurtigt tjek af nye apparatfiler (src/content/apparater/<slug>.ts) uden et helt byg.
 *
 *   npx tsx scripts/check-appliance.mts vinkoeleskab emhaette …
 *   npx tsx scripts/check-appliance.mts --all        (alle filer i mappen)
 *
 * Fanger det, bygget ellers først fejler på (titel/beskrivelse-bånd, tokens, beregnerens standard), plus
 * husets regler, som ingen audit ser i kilden: ingen skrevne kr.-beløb, ingen eksterne links i prosaen,
 * ingen »elpris.dk«, energimærker kun hvor EU-mærket findes. Exit 1 ved fejl.
 */
import { readdirSync } from "node:fs";
import { join } from "node:path";
import { APPLIANCES } from "../src/lib/appliances.ts";
import { calcModel, headingFor, metaOf } from "../src/lib/catalogue.ts";
import { ANY_TOKEN_RE, TOKEN_RE } from "../src/lib/tokens.ts";
import type { ApplianceData } from "../src/lib/types.ts";
import routes from "../content/routes.json" with { type: "json" };

const DIR = join(import.meta.dirname, "../src/content/apparater");
const args = process.argv.slice(2);
const slugs = args.includes("--all")
  ? readdirSync(DIR).filter((f) => f.endsWith(".ts") && f !== "index.ts").map((f) => f.replace(/\.ts$/, ""))
  : args;
if (!slugs.length) {
  console.log("Brug: npx tsx scripts/check-appliance.mts <slug> [slug …] | --all");
  process.exit(2);
}

const known = new Set([...APPLIANCES.map((a) => a.slug), ...slugs]);
const pages = new Set([...routes.reserved, "apparater", "husstand", "varmepumpe"]);
const len = (s: string) => [...s].length;
const text = (html: string) => html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
let failures = 0;

for (const slug of slugs) {
  const errs: string[] = [];
  const warns: string[] = [];
  let a: ApplianceData;
  try {
    a = (await import(join(DIR, `${slug}.ts`))).default as ApplianceData;
  } catch (e) {
    console.log(`✗ ${slug}: kan ikke indlæses — ${(e as Error).message}`);
    failures++;
    continue;
  }
  const e = (m: string) => errs.push(m);

  if (a.slug !== slug) e(`slug "${a.slug}" ≠ filnavn`);
  if (APPLIANCES.filter((x) => x.slug === slug).length > 1) e("slug findes allerede");
  if (routes.reserved.includes(slug)) e("slug er en reserveret rute");
  if (!a.meta) e("mangler meta");
  if (!a.calculatorConfig.per || !a.calculatorConfig.perYear) e("calculatorConfig mangler per/perYear");
  if (!a.publishDate || !/^\d{4}-\d{2}-\d{2}$/.test(a.publishDate)) e("publishDate mangler (YYYY-MM-DD)");

  // Titel og beskrivelse (audit-seo's bånd og husets format)
  if (len(a.title) < 50 || len(a.title) > 60) e(`titel ${len(a.title)} tegn (50–60): "${a.title}"`);
  if (!/\(2026\) → /.test(a.title)) e(`titel skal have formatet "Nøgleord (2026) → …": "${a.title}"`);
  if (/strømforbrug\.dk|kr\./i.test(a.title)) e("titel må ikke have sitenavn eller pris");
  if (len(a.description) < 120 || len(a.description) > 158) e(`beskrivelse ${len(a.description)} tegn (120–158)`);
  if (!/^Strømforbrug for /.test(a.heading) || !a.heading.includes(":")) e(`heading skal være "Strømforbrug for en/et X: …"`);

  // Tal
  if (a.typicalKwh < a.kwhRange[0] || a.typicalKwh > a.kwhRange[1]) e(`typicalKwh ${a.typicalKwh} uden for kwhRange`);
  if (a.seasonalProfile.length !== 12) e("seasonalProfile skal have 12 måneder");
  try {
    const meta = metaOf(a);
    const calc = calcModel(a);
    if (calc) {
      const year = calc.options[calc.defaultIndex].kwhPerUse * calc.usageDefault * calc.perYear;
      const off = Math.abs(year - a.typicalKwh) / a.typicalKwh;
      if (off > 0.2) e(`beregnerens standard giver ${Math.round(year)} kWh/år mod typicalKwh ${a.typicalKwh} (${Math.round(off * 100)} % fra) — ret options/usage-grænserne`);
    }
    headingFor(a);
    if (!meta.hasEuLabel && a.energyLabels.length) e("energyLabels på et produkt uden EU-energimærke — lad listen være tom");
    if (meta.synonyms.length < 2) warns.push("færre end 2 synonymer — søgningen lever af dem");
  } catch (err) {
    e((err as Error).message);
  }

  // Tekst
  const all = [a.quickAnswer, a.content, ...a.faqs.flatMap((f) => [f.question, f.answer])].join("\n");
  for (const t of all.match(ANY_TOKEN_RE) ?? []) if (!new RegExp(`^${TOKEN_RE.source}$`).test(t)) e(`ugyldigt token ${t}`);
  const plain = text(all.replace(TOKEN_RE, "TOKEN"));
  // Skrevne beløb: kun indkøbs-/installationspriser må stå med tal, og kun i en sætning, der siger det.
  for (const sentence of plain.split(/(?<=[.!?])\s+/)) {
    if (/\d[\d.,–-]*\s?(kr\.|kroner|øre)/.test(sentence) && !/(købe|købs|indkøb|anskaff|install|koster fra|nypris|pris for selve|udskiftning koster|tilskud)/i.test(sentence)) {
      e(`skrevet beløb (brug {{kr N}}-token): "${sentence.slice(0, 140)}"`);
    }
  }
  if (/\d+[,.]\d+\s?kr\.\/kWh/.test(plain)) e("skrevet kWh-pris — brug {{pris_kwh}}");
  if (/elpris\.dk/i.test(all)) e("»elpris.dk« må ikke stå i teksten");
  if (/mondo media/i.test(all)) e("»Mondo Media« må ikke stå på sitet");
  if (/grøn strøm/i.test(all)) e("»grøn strøm« er forbudt (ECGT)");
  if (/<h1/i.test(a.content)) e("ingen <h1> i content");
  const h2 = (a.content.match(/<h2>/g) ?? []).length;
  if (h2 < 5) e(`content har ${h2} <h2> (mindst 5)`);
  const words = text(a.content).split(" ").length;
  if (words < 800) e(`content er ${words} ord (mindst 800)`);
  if (!/TOKEN/.test(text(a.quickAnswer.replace(TOKEN_RE, "TOKEN")))) warns.push("quickAnswer har intet pris-token");
  for (const [, href] of a.content.matchAll(/href="([^"]+)"/g)) {
    if (/^https?:/.test(href)) e(`eksternt link i content (${href}) — kilder hører til i sources[]`);
    else {
      const head = href.replace(/^\//, "").split("/")[0];
      if (!href.endsWith("/")) e(`internt link uden afsluttende skråstreg: ${href}`);
      else if (head && !known.has(head) && !pages.has(head)) e(`internt link til ukendt side: ${href}`);
    }
  }
  if (a.faqs.length < 4 || a.faqs.length > 8) e(`${a.faqs.length} FAQ (4–8)`);
  for (const r of a.relatedSlugs) if (!known.has(r)) e(`relatedSlugs: ukendt ${r}`);
  if (!a.sources.length || a.sources.some((s) => !s.url?.startsWith("https://"))) e("sources: mindst én, alle med https-url");

  if (errs.length) failures++;
  console.log(`${errs.length ? "✗" : "✓"} ${slug} — ${words} ord, ${h2} h2, ${a.faqs.length} FAQ, titel ${len(a.title)}/beskr. ${len(a.description)}`);
  for (const m of errs) console.log(`    FEJL  ${m}`);
  for (const m of warns) console.log(`    note  ${m}`);
}
process.exit(failures ? 1 : 0);
