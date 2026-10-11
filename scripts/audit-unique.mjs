#!/usr/bin/env node
/**
 * audit-unique — stopper en build, hvor en sidegruppe er én skabelon med udskiftede navne.
 *
 * Googles spam-opdateringer i 2026 (marts, juni, august, september) ramte "scaled content":
 * mange sider, der kun adskiller sig i cifre og apparatnavne. Portet fra Elpriser.dk
 * 11. oktober 2026; målingen er Løn.dk's.
 *
 * Målingen: sætningerne i hver sides EGEN brødtekst (<main> uden de delte blokke, skifte-CTA'en,
 * prisgrundlaget, tidspunkt-blokken, tabellerne og navigationen), normaliseret så tal bliver
 * til "#" — "En vaskemaskine bruger 150 kWh om året" og "En tørretumbler bruger 250 kWh om
 * året" er IKKE samme sætning, men "Ved 4.000 kWh koster den 7.012 kr." og "… 7.460 kr." er.
 * Strengt med vilje: cifre gør ikke en side unik.
 *
 * To gulve pr. gruppe:
 *  1. Hver side har mindst UNIQUE_MIN sætninger, som ingen anden side i gruppen har.
 *  2. Antallet af distinkte sætninger i gruppen er mindst DISTINCT_FACTOR_MIN gange den
 *     længste sides sætningsantal — ellers er gruppen én side gentaget. Gulvet kan kun nås,
 *     når gruppen har flere sider end faktoren (to varmepumpesider kan højst give 2,0×), så
 *     for mindre grupper måles faktoren kun og skrives ud.
 *
 * Grupperne udledes af content/urls.json: apparat = hver /<slug>/, der ikke er en af de
 * reserverede hub-stier; husstand = /husstand/*; varmepumpe = /varmepumpe/*.
 *
 * Kør: npm run audit-unique   (automatisk via postbuild og `npm run audit`)
 */
import { readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { innerText, stripElements, walkHtml } from "./lib/html.mjs";

const ROOT = resolve(import.meta.dirname, "..");
const BUILD = join(ROOT, ".next/server/app");

/* Gulvene — ændres her, aldrig i stilhed. De målte værdier skrives altid ud. */
const UNIQUE_MIN = 8;
const DISTINCT_FACTOR_MIN = 2.5;
const MIN_WORDS = 6;
const WORST_SHOWN = 5;

/** Elementer, der er fælles for siderne og derfor ikke tæller som sidens egen tekst. */
const SHARED_ATTRS = ["data-shared", "data-switch-cta", "data-price-basis", "data-best-time"];

/** Hub-stier, der ikke er apparatsider. Alt andet i registret på formen /<slug>/ er et apparat. */
const RESERVED = new Set([
  "/", "/beregner/", "/gennemsnitligt/", "/husstand/", "/varmepumpe/", "/hvad-koster-en-kwh/",
  "/hvad-koster-det-at-lade-en-elbil/", "/sparetips/", "/standby/", "/stromslugere/",
  "/spare-paa-stroemmen/", "/om-os/", "/kontakt/", "/privatlivspolitik/",
]);

const files = walkHtml(BUILD).filter((f) => !/_global-error|_not-found/.test(f));
if (!files.length) {
  console.log("audit-unique: ingen bygget HTML fundet — kør efter `next build`.");
  process.exit(0);
}

const REGISTRY = JSON.parse(readFileSync(join(ROOT, "content/urls.json"), "utf8")).map((u) => u.path);
const isHousehold = (p) => p.startsWith("/husstand/") && p !== "/husstand/";
const isHeatpump = (p) => p.startsWith("/varmepumpe/") && p !== "/varmepumpe/";
const isAppliance = (p) => !RESERVED.has(p) && !isHousehold(p) && !isHeatpump(p) && /^\/[a-z0-9-]+\/$/.test(p);

const GROUPS = {
  apparat: new Set(REGISTRY.filter(isAppliance)),
  husstand: new Set(REGISTRY.filter(isHousehold)),
  varmepumpe: new Set(REGISTRY.filter(isHeatpump)),
};

const pathOf = (file) => {
  const p = file.slice(BUILD.length).replace(/\.html$/, "");
  return p === "/index" ? "/" : `${p}/`;
};

/** Sidens egen HTML: <main> uden script/style, de delte blokke, tabeller og navigation. */
function ownHtml(html) {
  let h = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? html;
  for (const attr of SHARED_ATTRS) h = stripElements(h, attr);
  return h
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<table[\s\S]*?<\/table>/gi, " ")
    .replace(/<nav[\s\S]*?<\/nav>/gi, " ");
}

/** Sidens egne sætninger, normaliserede. */
function sentencesOf(html) {
  const out = new Set();
  for (const m of ownHtml(html).matchAll(/<(p|li|dd|h2|h3|summary)\b[^>]*>([\s\S]*?)<\/\1>/gi)) {
    const text = innerText(m[2]);
    for (const raw of text.split(/(?<=[.!?])\s+/)) {
      const s = raw
        .toLowerCase()
        .replace(/\d[\d.,]*/g, "#")
        .replace(/[«»"'„“”]/g, "")
        .replace(/\s+/g, " ")
        .trim();
      if (s.split(" ").length >= MIN_WORDS) out.add(s);
    }
  }
  return out;
}

const pages = files.map((f) => ({ path: pathOf(f), html: readFileSync(f, "utf8") }));
const failures = [];

console.log(`audit-unique: gulve — mindst ${UNIQUE_MIN} egne sætninger pr. side, distinkte sætninger mindst ${DISTINCT_FACTOR_MIN}× den længste side.`);

for (const [name, paths] of Object.entries(GROUPS)) {
  const members = pages.filter((p) => paths.has(p.path));
  const missing = [...paths].filter((p) => !members.some((m) => m.path === p));
  if (missing.length) failures.push(`${name}: ${missing.length} side(r) i registret er ikke bygget: ${missing.join(", ")}`);
  if (members.length < 2) continue;

  const sets = members.map((p) => ({ path: p.path, set: sentencesOf(p.html) }));
  const counter = new Map();
  for (const { set } of sets) for (const s of set) counter.set(s, (counter.get(s) ?? 0) + 1);
  const longest = Math.max(...sets.map((s) => s.set.size));
  const instances = sets.reduce((n, s) => n + s.set.size, 0);
  const uniqueInstances = [...counter.values()].filter((c) => c === 1).length;
  const factor = longest ? counter.size / longest : 0;

  const perPage = sets
    .map(({ path, set }) => ({ path, total: set.size, unique: [...set].filter((s) => counter.get(s) === 1).length }))
    .sort((a, b) => a.unique - b.unique || a.total - b.total);
  const thin = perPage.filter((p) => p.unique < UNIQUE_MIN);

  console.log(
    `audit-unique: ${name} — ${members.length} sider, ${instances} sætninger, ${counter.size} distinkte, ${((uniqueInstances / Math.max(1, instances)) * 100).toFixed(1)} % unikke, længste side ${longest}, faktor ${factor.toFixed(2)}`,
  );
  console.log(`  svageste sider (egne/alle): ${perPage.slice(0, WORST_SHOWN).map((p) => `${p.path} ${p.unique}/${p.total}`).join(", ")}`);

  if (thin.length) failures.push(`${name}: sider med under ${UNIQUE_MIN} egne sætninger: ${thin.map((p) => `${p.path} (${p.unique})`).join(", ")}`);
  if (members.length >= DISTINCT_FACTOR_MIN) {
    if (factor < DISTINCT_FACTOR_MIN) failures.push(`${name}: distinkte sætninger er kun ${factor.toFixed(2)}× den længste side (gulv ${DISTINCT_FACTOR_MIN})`);
  } else {
    console.log(`  faktor-gulvet kræver mindst ${Math.ceil(DISTINCT_FACTOR_MIN)} sider — kun målt for ${name}.`);
  }
}

if (failures.length) {
  console.error(`\naudit-unique: ${failures.length} fejl\n`);
  for (const f of failures) console.error(`  ✗ ${f}`);
  process.exit(1);
}
console.log("audit-unique: ok.");
