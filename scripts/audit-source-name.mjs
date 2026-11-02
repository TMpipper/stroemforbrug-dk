#!/usr/bin/env node
/**
 * audit-source-name — »elpris.dk« står KUN i kildelisten.
 *
 * Ejerens regel (2. nov. 2026): »we use Elpris.dk as source. But I don't want it to be in the text/content« og
 * »Please just tell we show all energy providers in denmark«. Forsyningstilsynets prisportal er en kilde til
 * elaftalerne, men på sitet hedder det »alle elselskaber i Danmark«, »selskabets egne priser« eller »de priser,
 * selskabet har indberettet til Forsyningstilsynet«. Navnet må kun stå i kildelisten (hvert element med
 * attributten `data-sources`) — som tekst og som https-adresse.
 *
 * Kontrollen læser det, læseren og maskinerne får (aldrig kilden): hver bygget side, llms.txt/llms-full.txt og
 * de åbne datafiler. Fra HTML'en fjernes kildelisten, kommentarer, `<script>`-tags UNDTAGEN `application/ld+json`
 * (JSON-LD's tekst kontrolleres) og værdien af `href`/`src`/`srcset` — resten (tekst, overskrifter, title, alt,
 * aria-*, meta-beskrivelser, OG, JSON-LD) må ikke indeholde /elpris\.dk/i. Vores eget navn »Elpriser.dk« rammes
 * ikke (»elpris« + ».dk« skal stå lige efter hinanden). En ren https-adresse tæller som en href. I JSON er
 * nøglerne `sources`/`source` (dataens kildeliste) fritaget; prosa som `note` og `description` er ikke.
 *
 * Porteret fra Elpriser.dk's scripts/audit-source-name.mjs (selvstændig: ingen lib-afhængigheder).
 *
 * Kør: npm run audit-source-name                     (den byggede .next + public/*.txt — i postbuild)
 *      BASE=https://<domæne> node scripts/audit-source-name.mjs [sti …]
 *                                                      (det levende site: stierne, ellers hele sitemappet +
 *                                                       llms.txt og llms-full.txt)
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const BUILD = join(ROOT, ".next/server/app");
const PUBLIC = join(ROOT, "public");
const NAME = /elpris\.dk/gi;
const SOURCES_ATTR = "data-sources";
const BASE = (process.env.BASE ?? "").replace(/\/$/, "");

const VOID = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);

/** Hvert element med en given attribut, som den fulde, balancerede HTML-streng. */
function elementsWith(html, attr) {
  const out = [];
  const open = new RegExp(`<([a-zA-Z][a-zA-Z0-9-]*)\\b[^>]*\\s${attr}(?=[=\\s/>])(?:=("[^"]*"|'[^']*'|[^\\s>]+))?[^>]*>`, "g");
  for (const m of html.matchAll(open)) {
    const tag = m[1].toLowerCase();
    if (VOID.has(tag)) { out.push(m[0]); continue; }
    const tagRe = new RegExp(`<(/?)${tag}\\b[^>]*?(/?)>`, "gi");
    let depth = 0;
    let end = -1;
    for (const t of html.slice(m.index).matchAll(tagRe)) {
      if (t[2] === "/") continue;
      depth += t[1] === "/" ? -1 : 1;
      if (depth === 0) { end = m.index + t.index + t[0].length; break; }
    }
    out.push(end === -1 ? html.slice(m.index) : html.slice(m.index, end));
  }
  return out;
}

/** HTML'en uden elementerne med attributten — yderste først. */
function stripElements(html, attr) {
  const els = elementsWith(html, attr);
  const outer = els.filter((e) => !els.some((o) => o !== e && o.length > e.length && o.includes(e)));
  let out = html;
  for (const el of outer) out = out.replace(el, " ");
  return out;
}

/** HTML uden kildelisten, scripts (undtagen JSON-LD), kommentarer og adresser. */
export function scrubHtml(html) {
  let h = stripElements(html, SOURCES_ATTR);
  h = h.replace(/<!--[\s\S]*?-->/g, " ");
  h = h.replace(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi, (m, attrs, body) =>
    /application\/ld\+json/i.test(attrs) ? `<script${attrs}>${scrubJsonText(body)}</script>` : " ");
  h = h.replace(/\s(?:href|src|srcset)=("[^"]*"|'[^']*'|[^\s>]+)/gi, " ");
  return h;
}

/** En ren adresse som JSON-streng ("https://…") er en href, ikke tekst. */
function scrubJsonText(s) {
  return s.replace(/"https?:\/\/[^"\s]*"/g, '""');
}

/** Tekstfiler (llms.txt): markdown-links og bare adresser er hrefs. */
function scrubText(s) {
  return s.replace(/\]\((?:https?:\/\/)[^)\s]*\)/g, "]()").replace(/https?:\/\/\S+/g, " ");
}

/** JSON: alle strengværdier uden for nøglen `sources`/`source`, ren adresse undtaget. */
function jsonStrings(value, path = "", out = []) {
  if (typeof value === "string") {
    if (!/^https?:\/\/\S+$/.test(value)) out.push({ path, text: value });
  } else if (Array.isArray(value)) {
    value.forEach((v, i) => jsonStrings(v, `${path}[${i}]`, out));
  } else if (value && typeof value === "object") {
    for (const [k, v] of Object.entries(value)) {
      if (/^sources?$/i.test(k)) continue;
      jsonStrings(v, path ? `${path}.${k}` : k, out);
    }
  }
  return out;
}

function snippet(s, at) {
  return s
    .slice(Math.max(0, at - 90), at + 70)
    .replace(/<[^>]*>/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function hitsIn(kind, body) {
  if (kind === "json") {
    let parsed;
    try { parsed = JSON.parse(body); } catch { return hitsIn("text", body); }
    return jsonStrings(parsed).flatMap(({ path, text }) =>
      [...text.matchAll(NAME)].map((m) => `${path}: ${snippet(text, m.index)}`));
  }
  const s = kind === "html" ? scrubHtml(body) : scrubText(body);
  return [...s.matchAll(NAME)].map((m) => snippet(s, m.index));
}

const kindOf = (path, type = "") =>
  /\.json$/.test(path) || /json/.test(type) ? "json" : /\.(txt|csv|md)$/.test(path) || /text\/(plain|csv|markdown)/.test(type) ? "text" : "html";

function walkFiles(dir) {
  if (!statSync(dir, { throwIfNoEntry: false })) return [];
  return readdirSync(dir).flatMap((n) => {
    const full = join(dir, n);
    return statSync(full).isDirectory() ? walkFiles(full) : [full];
  });
}

const results = []; // { path, hits[], note? }

if (BASE) {
  const get = async (p) => {
    const r = await fetch(`${BASE}${p}`, { headers: { "user-agent": "audit-source-name/1" }, signal: AbortSignal.timeout(30_000) });
    return { status: r.status, type: r.headers.get("content-type") ?? "", text: await r.text() };
  };
  let paths = process.argv.slice(2);
  if (!paths.length) {
    const sm = await get("/sitemap.xml");
    let locs = [...sm.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
    // Et sitemap-index: følg under-sitemapsene.
    if (/<sitemapindex/i.test(sm.text)) {
      const subs = locs;
      locs = [];
      for (const u of subs) {
        const sub = await get(u.replace(/^https?:\/\/[^/]+/, ""));
        locs.push(...[...sub.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim()));
      }
    }
    paths = locs.map((u) => u.replace(/^https?:\/\/[^/]+/, "") || "/");
    paths.push("/llms.txt", "/llms-full.txt");
    paths = [...new Set(paths)];
  }
  for (let i = 0; i < paths.length; i += 8) {
    await Promise.all(paths.slice(i, i + 8).map(async (p) => {
      try {
        const r = await get(p);
        if (r.status !== 200) { results.push({ path: p, hits: [], note: `svarede ${r.status}` }); return; }
        results.push({ path: p, hits: hitsIn(kindOf(p, r.type), r.text) });
      } catch (e) {
        results.push({ path: p, hits: [], note: e.message });
      }
    }));
  }
} else {
  const files = walkFiles(BUILD);
  const pages = files.filter((f) => f.endsWith(".html"));
  if (!pages.length) {
    console.log("audit-source-name: ingen bygget HTML fundet — kør efter `next build`.");
    process.exit(0);
  }
  for (const f of pages) {
    results.push({ path: "/" + relative(BUILD, f).replace(/\.html$/, "/").replace(/(^|\/)index\/$/, "$1"), hits: hitsIn("html", readFileSync(f, "utf8")) });
  }
  // Route handlers, der er prerenderet (llms.txt, /data/*.json …): deres krop ligger i en .body-fil.
  for (const f of files.filter((f) => f.endsWith(".body"))) {
    const p = "/" + relative(BUILD, f).replace(/\.body$/, "");
    if (/\.(xml|png|jpe?g|ico|webmanifest)$/.test(p) || /(opengraph|twitter)-image|icon|apple-icon/.test(p)) continue;
    results.push({ path: p, hits: hitsIn(kindOf(p), readFileSync(f, "utf8")) });
  }
  // Statiske tekst- og datafiler i public/.
  for (const f of walkFiles(PUBLIC).filter((f) => /\.(txt|md|json)$/.test(f))) {
    const p = "/" + relative(PUBLIC, f);
    if (/^\/[0-9a-f]{32}\.txt$/.test(p)) continue; // IndexNow-nøglen
    results.push({ path: p, hits: hitsIn(kindOf(p), readFileSync(f, "utf8")) });
  }
}

const bad = results.filter((r) => r.hits.length);
const total = bad.reduce((n, r) => n + r.hits.length, 0);
const where = BASE || ".next + public";
for (const r of results.filter((r) => r.note)) console.log(`audit-source-name: note — ${r.path} ${r.note}`);
if (bad.length) {
  console.error(`audit-source-name: ${total} gang(e) »elpris.dk« uden for Kilder på ${bad.length} af ${results.length} filer (${where}):`);
  for (const r of bad.sort((a, b) => a.path.localeCompare(b.path))) {
    const uniq = [...new Map(r.hits.map((h) => [h, 0])).keys()];
    console.error(`  ${r.path} (${r.hits.length})`);
    for (const h of uniq) console.error(`    … ${h} …`);
  }
  console.error(`Regel: navnet elpris.dk står kun i kildelisten (elementer med ${SOURCES_ATTR}) og dataens \`sources\` — sig »alle elselskaber i Danmark« / »selskabets egne priser«.`);
  process.exit(1);
}
console.log(`audit-source-name: OK — ${results.length} filer (${where}) nævner ikke elpris.dk uden for Kilder.`);
