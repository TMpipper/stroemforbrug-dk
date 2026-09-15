/**
 * On-page SEO audit for Strømforbrug.dk.
 *
 * Encodes the checkable items from Projects/SEO/content/content-quality-checklist.md
 * so they cannot quietly regress. Run alongside `npm run audit-prices`.
 *
 * Findings from the first run (2026-09-15), all since fixed:
 *  - layout.tsx appended "| Strømforbrug.dk" to 61 of 62 pages
 *  - 35 of 43 titles were under 50 characters after the brand suffix was removed
 *  - sitemap.ts stamped `new Date()` on every URL, so each deploy claimed all
 *    62 pages had just changed — the faked-freshness signal the checklist
 *    explicitly warns against
 *  - 68 citations linked to a homepage rather than the page supporting the claim
 *
 * Run: npm run audit-seo
 */

import { existsSync, readFileSync } from "node:fs";
import { APPLIANCES, getAllSlugs } from "../src/lib/appliances.ts";
import { applianceRank } from "../src/lib/appliance-insights.ts";
import { sourcesFor } from "../src/lib/sources.ts";
import { assertHouseholds } from "../src/lib/home-insights.ts";
import { articleFor } from "../src/lib/appliance-insights.ts";

let failures = 0;
let warnings = 0;
const fail = (m: string) => { console.error(`FAIL  ${m}`); failures++; };
const warn = (m: string) => { console.warn(`warn  ${m}`); warnings++; };
const ok = (m: string) => console.log(`ok    ${m}`);

const strip = (h: string) => h.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
const words = (s: string) => strip(s).split(" ").filter(Boolean).length;

/* ---------- 1. title + description length ---------- */

const TITLE_MIN = 50, TITLE_MAX = 60;
const DESC_MIN = 120, DESC_MAX = 158;

const badTitles = APPLIANCES.filter((a) => a.title.length < TITLE_MIN || a.title.length > TITLE_MAX);
if (badTitles.length) {
  for (const a of badTitles.slice(0, 10)) fail(`title ${a.title.length} chars (want ${TITLE_MIN}-${TITLE_MAX}): ${a.title}`);
  if (badTitles.length > 10) fail(`…and ${badTitles.length - 10} more titles out of range`);
} else ok(`all ${APPLIANCES.length} titles are ${TITLE_MIN}-${TITLE_MAX} characters`);

const badDesc = APPLIANCES.filter((a) => a.description.length < DESC_MIN || a.description.length > DESC_MAX);
if (badDesc.length) {
  for (const a of badDesc.slice(0, 10)) fail(`description ${a.description.length} chars (want ${DESC_MIN}-${DESC_MAX}): ${a.slug}`);
} else ok(`all descriptions are ${DESC_MIN}-${DESC_MAX} characters`);

/* ---------- 2. brand suffix ---------- */

const layout = readFileSync("src/app/layout.tsx", "utf8");
if (/template:\s*`%s\s*\|/.test(layout)) {
  fail("layout.tsx appends a brand suffix to every title — it costs keyword space on every page");
} else ok("no brand suffix in the title template");

/* ---------- 3. manufactured freshness ---------- */

const sitemapSrc = readFileSync("src/app/sitemap.ts", "utf8");
if (/lastModified:\s*now\b/.test(sitemapSrc) || /const now = new Date\(\)/.test(sitemapSrc)) {
  fail("sitemap.ts stamps a generated date on URLs — store real per-page dates instead");
} else ok("sitemap lastmod comes from stored dates, not new Date()");

const appliancePage = readFileSync("src/app/[apparat]/page.tsx", "utf8");
if (/dateModified:\s*new Date\(/.test(appliancePage)) {
  fail("[apparat]/page.tsx generates dateModified at render time");
} else ok("dateModified comes from stored content dates");

/* ---------- 4. headings and depth ---------- */

for (const a of APPLIANCES) {
  const h1 = (a.content.match(/<h1/g) ?? []).length;
  if (h1 > 0) fail(`${a.slug}: content contains an <h1> — the page template already renders one`);
}
if (!failures) ok("no duplicate H1 inside appliance content");

const thin = APPLIANCES.map((a) => ({
  slug: a.slug,
  w: words(a.content) + words(a.quickAnswer) + a.faqs.reduce((n, f) => n + words(f.question) + words(f.answer), 0),
})).filter((x) => x.w < 900).sort((a, b) => a.w - b.w);
if (thin.length) {
  warn(`${thin.length} page(s) under 900 prose words: ${thin.slice(0, 6).map((t) => `${t.slug} (${t.w})`).join(", ")}`);
} else ok("every appliance page is at least 900 prose words");

/* ---------- 5. internal links ---------- */

const slugs = new Set(getAllSlugs());
const RESERVED = new Set([
  "beregner", "gennemsnitligt", "husstand", "varmepumpe", "sparetips", "om-os",
  "kontakt", "privatlivspolitik", "stromslugere", "standby", "spare-paa-stroemmen",
  "hvad-koster-en-kwh", "hvad-koster-det-at-lade-en-elbil",
]);

let broken = 0;
let overLinked = 0;
for (const a of APPLIANCES) {
  const targets: string[] = [];
  for (const m of a.content.matchAll(/href="\/([^"]*)"/g)) {
    const path = m[1].replace(/\/$/, "");
    if (!path) { fail(`${a.slug}: link to "/" with a specific anchor — point it somewhere real`); broken++; continue; }
    const head = path.split("/")[0];
    if (!slugs.has(head) && !RESERVED.has(head)) { fail(`${a.slug}: broken internal link /${path}`); broken++; }
    targets.push(head);
  }
  // checklist: cap prose links to roughly one per distinct destination
  const counts = new Map<string, number>();
  targets.forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1));
  for (const [dest, n] of counts) if (n > 2) { warn(`${a.slug}: links to /${dest}/ ${n} times — reads as manipulative internal linking`); overLinked++; }
}
if (!broken) ok("no broken internal links");
if (!overLinked) ok("no destination linked more than twice from one page");

/* ---------- 6. orphans ---------- */

const inbound = new Map<string, Set<string>>();
const add = (to: string, from: string) => {
  if (to === from) return;
  if (!inbound.has(to)) inbound.set(to, new Set());
  inbound.get(to)!.add(from);
};
for (const a of APPLIANCES) {
  for (const m of a.content.matchAll(/href="\/([^"/]+)\/?"/g)) add(m[1], a.slug);
  for (const r of a.relatedSlugs) add(r, a.slug);
  const rank = applianceRank(a);
  if (rank.costlier) add(rank.costlier.slug, a.slug);
  if (rank.cheaper) add(rank.cheaper.slug, a.slug);
}
const orphans = APPLIANCES.filter((a) => (inbound.get(a.slug)?.size ?? 0) < 2);
if (orphans.length) {
  fail(`${orphans.length} page(s) with fewer than 2 inbound internal links: ${orphans.map((o) => o.slug).join(", ")}`);
} else ok("every appliance has at least 2 inbound internal links");

/* ---------- 7. citations ---------- */

const GENERIC = ["https://ens.dk", "https://sparenergi.dk", "https://www.bolius.dk", "https://bolius.dk"];
let genericCites = 0;
for (const a of APPLIANCES) for (const s of a.sources) if (s.url && GENERIC.includes(s.url)) genericCites++;
if (genericCites) {
  warn(`${genericCites} citation(s) still point at a homepage — sourcesFor() overrides them at render, but clean up the data`);
} else ok("no homepage-only citations left in the data");

for (const a of APPLIANCES) {
  if (sourcesFor(a.slug).length === 0) fail(`${a.slug}: no verified sources mapped in sources.ts`);
}

/* ---------- 8. hub pages ---------- */

// The hub pages were unguarded while the appliance pages were audited, and they
// ended up the thinnest content on the site — the homepage at 663 words linking
// out to 43 far deeper pages.
try {
  assertHouseholds();
  ok("household profiles are plausible and reference known appliances");
} catch (e) {
  fail((e as Error).message);
}

const homeSrc = readFileSync("src/app/page.tsx", "utf8");
for (const type of ["articleSchema", "breadcrumbSchema", "faqSchema"]) {
  if (!homeSrc.includes(type)) fail(`homepage is missing ${type} — every appliance page has richer markup than the pillar`);
}
if (homeSrc.includes("articleSchema") && homeSrc.includes("faqSchema")) ok("homepage carries Article, Breadcrumb and FAQ schema");

// Rendered depth, when a build is present.
const HUB_MIN_WORDS = 900;
const HUBS = ["index", "beregner", "husstand", "gennemsnitligt", "hvad-koster-en-kwh", "stromslugere", "standby", "sparetips", "spare-paa-stroemmen", "varmepumpe"];
if (existsSync(".next/server/app")) {
  const thinHubs: string[] = [];
  for (const h of HUBS) {
    const f = `.next/server/app/${h}.html`;
    if (!existsSync(f)) continue;
    const html = readFileSync(f, "utf8");
    const body = (html.split("</header>")[1] ?? html).split("<footer")[0];
    const text = body.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<[^>]+>/g, " ").replace(/&[a-z#0-9]+;/gi, " ").replace(/\s+/g, " ").trim();
    const n = text.split(" ").length;
    if (n < HUB_MIN_WORDS) thinHubs.push(`${h} (${n})`);
  }
  if (thinHubs.length) warn(`hub page(s) under ${HUB_MIN_WORDS} rendered words: ${thinHubs.join(", ")}`);
  else ok(`every built hub page is at least ${HUB_MIN_WORDS} rendered words`);
} else {
  warn("no build found — run npm run build first to check hub page depth");
}

/* ---------- 9. Danish gender ---------- */

/*
 * Five of the 43 appliances are neuter (tv, køleskab, strygejern, akvarium,
 * komfur). Building "en {name}" or "din {name}" in a component produces
 * "en køleskab", which reads as broken Danish and shipped briefly on both the
 * share cards and the rank prose. Components must use articleFor() and
 * possessiveFor(); this checks the rendered output rather than the source, so
 * it catches the phrase however it was built.
 */
const neuter = APPLIANCES.filter((a) => articleFor(a) === "et").map((a) => a.name.toLowerCase());
if (existsSync(".next/server/app") && neuter.length) {
  // "en tv-boks" is correct — boks is common gender — so require a word boundary
  // that is not a hyphen continuing into a compound.
  const pattern = new RegExp(`\\b(en|din) (${neuter.join("|")})(?![\\w-])`, "i");
  let genderErrors = 0;
  for (const a of APPLIANCES) {
    const f = `.next/server/app/${a.slug}.html`;
    if (!existsSync(f)) continue;
    const text = readFileSync(f, "utf8").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
    const m = pattern.exec(text);
    if (m) { fail(`${a.slug}: "${m[0]}" — neuter noun with a common-gender article; use articleFor()/possessiveFor()`); genderErrors++; }
  }
  if (!genderErrors) ok(`Danish gender correct for the ${neuter.length} neuter appliances`);
}

/* ---------- summary ---------- */

console.log("");
console.log(`appliances            ${APPLIANCES.length}`);
console.log(`prose words, median   ${[...APPLIANCES].map((a) => words(a.content)).sort((x, y) => x - y)[Math.floor(APPLIANCES.length / 2)]}`);
console.log(`warnings              ${warnings}`);

if (failures) {
  console.error(`\n${failures} problem(s) found.`);
  process.exit(1);
}
console.log("\nAll on-page SEO checks passed.");
