#!/usr/bin/env node
/**
 * audit-widget — Elpriser.dk's kort og tidspunkt-blokken sidder, hvor de skal, i den byggede HTML.
 *
 *  1. Hver apparatside har præcis én tidspunkt-blok (data-best-time) med et beregnet kr.-tal og en
 *     henvisning til Elpriser.dk (data-family-link).
 *  2. De tunge apparater (src/lib/heavy-run.ts), /elpriser/ og forsiden har Elpriser.dk's iframe —
 *     præcis så mange som ventet, med title og loading="lazy" — og ingen anden side har en iframe.
 *  3. Ingen side linker til en anden af vores domæner end elpriser.dk (audit-claims vogter listen;
 *     her kontrolleres, at familielinket findes i header og footer på hver side).
 *  4. next.config.ts sender frame-src for elpriser.dk.
 *
 * Kører efter `next build` (postbuild / npm run audit).
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { walkHtml } from "./lib/html.mjs";

const ROOT = process.cwd();
const BUILD = join(ROOT, ".next/server/app");
const errors = [];
const fail = (m) => errors.push(m);

const files = walkHtml(BUILD).filter((f) => !/_not-found|_global-error/.test(f));
if (!files.length) { console.log("audit-widget: ingen bygget HTML — kør efter next build."); process.exit(0); }
const pathOf = (f) => { const p = f.slice(BUILD.length).replace(/\.html$/, ""); return p === "/index" ? "/" : `${p}/`; };

const urls = JSON.parse(readFileSync(join(ROOT, "content/urls.json"), "utf8")).map((u) => u.path);
const RESERVED = new Set(["/", "/beregner/", "/gennemsnitligt/", "/husstand/", "/varmepumpe/", "/hvad-koster-en-kwh/", "/hvad-koster-det-at-lade-en-elbil/", "/sparetips/", "/standby/", "/stromslugere/", "/spare-paa-stroemmen/", "/om-os/", "/kontakt/", "/privatlivspolitik/", "/elpriser/", "/metode/", "/apparater/"]);
const appliancePaths = new Set(urls.filter((p) => !RESERVED.has(p) && !p.startsWith("/husstand/") && !p.startsWith("/varmepumpe/")));
const heavy = [...readFileSync(join(ROOT, "src/lib/heavy-run.ts"), "utf8").matchAll(/"([a-z0-9-]+)"/g)].map((m) => `/${m[1]}/`);

const IFRAME = /<iframe\b[^>]*src="https:\/\/elpriser\.dk\/embed\/elpriser\/[^"]+"[^>]*>/g;
let appliances = 0, iframes = 0;
for (const f of files) {
  const html = readFileSync(f, "utf8");
  const path = pathOf(f);
  const frames = [...html.matchAll(IFRAME)];
  const expected = path === "/" ? 1 : path === "/elpriser/" ? 1 : heavy.includes(path) ? 1 : path === "/varmepumpe/" ? 1 : 0;
  if (frames.length !== expected) fail(`${path}: ${frames.length} iframe(s) fra elpriser.dk, ventede ${expected}`);
  for (const m of frames) {
    if (!/title="[^"]+"/.test(m[0])) fail(`${path}: iframen mangler title`);
    if (!/loading="lazy"/.test(m[0])) fail(`${path}: iframen er ikke loading="lazy"`);
  }
  iframes += frames.length;
  if (appliancePaths.has(path)) {
    appliances++;
    const blocks = html.match(/data-best-time="(window|always-on)"/g) ?? [];
    if (blocks.length !== 1) fail(`${path}: ${blocks.length} tidspunkt-blok(ke), ventede 1`);
    // React skiller tekstknuder med <!-- -->; fjern dem, før tal og enhed læses som én streng.
    const block = (html.match(/<section[^>]*data-best-time[\s\S]*?<\/section>/)?.[0] ?? "").replace(/<!--\s*-->/g, "");
    if (!/\d,\d{2} kr\.\/kWh/.test(block)) fail(`${path}: tidspunkt-blokken har intet beregnet kr./kWh-tal`);
    if (!/kl\. \d{2}–\d{2}/.test(block)) fail(`${path}: tidspunkt-blokken nævner intet tidsrum`);
    if (!/data-family-link/.test(block)) fail(`${path}: tidspunkt-blokken henviser ikke til Elpriser.dk`);
  }
  const familyLinks = (html.match(/data-family-link/g) ?? []).length;
  if (familyLinks < 2) fail(`${path}: familielinket til Elpriser.dk mangler i header/footer (${familyLinks})`);
}
if (appliances < 40) fail(`kun ${appliances} apparatsider fundet`);

const cfg = readFileSync(join(ROOT, "next.config.ts"), "utf8");
if (!/frame-src https:\/\/elpriser\.dk/.test(cfg)) fail("next.config.ts: frame-src https://elpriser.dk mangler");
if (!existsSync(join(ROOT, "src/components/widget/ElpriserWidget.tsx"))) fail("src/components/widget/ElpriserWidget.tsx mangler (feed-sync)");

if (errors.length) { console.error(`audit-widget: ${errors.length} fejl`); for (const e of errors.slice(0, 40)) console.error(`  ✗ ${e}`); process.exit(1); }
console.log(`audit-widget: ok — ${appliances} apparatsider med tidspunkt-blok, ${iframes} Elpriser.dk-kort, familielink på alle sider.`);
