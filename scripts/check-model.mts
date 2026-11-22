/**
 * check-model — modelsidernes datafiler (src/content/modeller/<slug>.ts). Kører i postbuild med --all.
 *
 *   npx tsx scripts/check-model.mts macbook-air-m4 …   |   --all
 *
 * Reglerne: officielle tal med kilde pr. variant, titel/beskrivelse i audit-seo's bånd og husets format,
 * priser kun som tokens, ingen eksterne links i prosaen, ingen forhandlerlinks (ejeren 22. nov. 2026),
 * og en brugsprofil for apparatet, så årsforbruget kan regnes.
 */
import { readdirSync } from "node:fs";
import { join } from "node:path";
import { APPLIANCES } from "../src/lib/appliances.ts";
import { allModels, annualKwh, PROFILES } from "../src/lib/models.ts";
import { ANY_TOKEN_RE, TOKEN_RE } from "../src/lib/tokens.ts";
import routes from "../content/routes.json" with { type: "json" };

const DIR = join(import.meta.dirname, "../src/content/modeller");
const args = process.argv.slice(2);
const files = readdirSync(DIR).filter((f) => f.endsWith(".ts") && f !== "index.ts").map((f) => f.replace(/\.ts$/, ""));
const slugs = args.includes("--all") ? files : args;
const registered = new Set(allModels().map((m) => m.slug));
const known = new Set([...APPLIANCES.map((a) => a.slug), ...routes.reserved]);
const modelPaths = new Set(allModels().map((m) => `/${m.parent}/${m.slug}/`));
const titles = new Map<string, string>(APPLIANCES.map((a) => [a.title, a.slug]));
const len = (s: string) => [...s].length;
const text = (h: string) => h.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
const RETAILERS = /(power\.dk|elgiganten|proshop|komplett|bilka|coolshop|pricerunner|amazon\.|apple\.com\/dk\/shop|føtex|computersalg)/i;
let failures = 0;

for (const slug of slugs) {
  const errs: string[] = [];
  const e = (m: string) => errs.push(m);
  let m;
  try {
    m = (await import(join(DIR, `${slug}.ts`))).default;
  } catch (err) {
    console.log(`✗ ${slug}: kan ikke indlæses — ${(err as Error).message}`);
    failures++;
    continue;
  }
  if (m.slug !== slug) e(`slug "${m.slug}" ≠ filnavn`);
  if (!registered.has(slug)) e("står ikke i src/content/modeller/index.ts");
  if (!APPLIANCES.some((a) => a.slug === m.parent)) e(`parent »${m.parent}« er ikke et apparat`);
  if (!PROFILES[m.parent]) e(`ingen brugsprofil for »${m.parent}« i src/lib/models.ts PROFILES`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(m.publishDate) || !/^\d{4}-\d{2}-\d{2}$/.test(m.updated)) e("publishDate/updated skal være YYYY-MM-DD");
  if (!/^\d{4}-\d{2}$/.test(m.released)) e("released skal være YYYY-MM");

  if (len(m.title) < 50 || len(m.title) > 60) e(`titel ${len(m.title)} tegn (50–60): "${m.title}"`);
  if (!/\(2026\) → /.test(m.title)) e(`titel skal have formatet "Model strømforbrug (2026) → …"`);
  if (/strømforbrug\.dk|kr\./i.test(m.title)) e("titel må ikke have sitenavn eller pris");
  if (titles.has(m.title)) e(`titlen findes allerede (${titles.get(m.title)})`);
  titles.set(m.title, slug);
  if (len(m.description) < 120 || len(m.description) > 158) e(`beskrivelse ${len(m.description)} tegn (120–158)`);
  if (m.synonyms.length < 2) e("mindst 2 synonymer (søgningen lever af dem)");

  if (!m.variants.length) e("ingen varianter");
  // Standardteksten siger »målt af <brand> ved 230 V« — kun sand for producentens egne 230 V-rapporter (Apple PER).
  const nonPer = m.brand !== "Apple" || m.variants.some((v: { whPerKm?: number; kwhPer100Cycles?: number }) => v.whPerKm !== undefined || v.kwhPer100Cycles !== undefined);
  if (nonPer && (!m.measuredBy || !m.figuresNote)) e("measuredBy og figuresNote skal sige, hvor tallene kommer fra (EPREL, WLTP, producentens side) — standarden siger »målt ved 230 V«");
  for (const v of m.variants) {
    if (!m.sources[v.source]?.url?.startsWith("https://")) e(`${v.name}: source ${v.source} findes ikke eller har ingen https-url`);
    if (!Object.keys(v.watts).length && v.annualKwh === undefined && v.whPerKm === undefined && v.kwhPer100Cycles === undefined) e(`${v.name}: hverken watt-tal eller annualKwh`);
    if (v.adapterEfficiency !== undefined && (v.adapterEfficiency <= 0.5 || v.adapterEfficiency > 1)) e(`${v.name}: adapterEfficiency skal være 0,5–1 (fx 0.888)`);
    try {
      if (PROFILES[m.parent]) annualKwh(v, m.parent);
    } catch (err) {
      e((err as Error).message);
    }
  }

  const all = [m.intro, m.content, ...m.faqs.flatMap((f: { question: string; answer: string }) => [f.question, f.answer])].join("\n");
  for (const t of all.match(ANY_TOKEN_RE) ?? []) if (!new RegExp(`^${TOKEN_RE.source}$`).test(t)) e(`ugyldigt token ${t}`);
  const plain = text(all.replace(TOKEN_RE, "TOKEN"));
  for (const s of plain.split(/(?<=[.!?])\s+/)) {
    if (/\d[\d.,–-]*\s?(kr\.|kroner|øre)/.test(s) && !/(købe|indkøb|nypris|koster fra|install)/i.test(s)) e(`skrevet beløb (brug token): "${s.slice(0, 140)}"`);
  }
  if (/elpris\.dk|mondo media|grøn strøm/i.test(all)) e("forbudt ord (elpris.dk / Mondo Media / grøn strøm)");
  if (RETAILERS.test(all)) e("forhandler nævnt eller linket — ejeren har valgt ingen forhandlerlinks");
  const h2 = (m.content.match(/<h2>/g) ?? []).length;
  const words = text(m.content).split(" ").length;
  if (h2 < 4) e(`content har ${h2} <h2> (mindst 4)`);
  if (words < 500) e(`content er ${words} ord (mindst 500)`);
  for (const [, href] of m.content.matchAll(/href="([^"]+)"/g)) {
    if (/^https?:/.test(href)) e(`eksternt link i content (${href}) — kilder hører til i sources[]`);
    else if (!href.endsWith("/")) e(`internt link uden afsluttende skråstreg: ${href}`);
    else if (!modelPaths.has(href) && !known.has(href.split("/")[1])) e(`internt link til ukendt side: ${href}`);
  }
  if (m.faqs.length < 4 || m.faqs.length > 8) e(`${m.faqs.length} FAQ (4–8)`);
  if (!m.sources.length || m.sources.some((s: { url?: string }) => !s.url?.startsWith("https://"))) e("sources: alle med https-url");

  if (errs.length) failures++;
  console.log(`${errs.length ? "✗" : "✓"} ${slug} — ${m.variants.length} varianter, ${words} ord, ${h2} h2, ${m.faqs.length} FAQ`);
  for (const x of errs) console.log(`    FEJL  ${x}`);
}
for (const f of files) if (!registered.has(f)) console.log(`note  ${f}.ts står ikke i index.ts endnu`);
process.exit(failures ? 1 : 0);
