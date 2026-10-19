#!/usr/bin/env node
/**
 * audit-app-promo — Elpriser.dk-appens promo på et søstersite (el-feed, 19. okt. 2026).
 *
 * Kører efter `next build` over hver prerenderet side i .next/server/app og fejler, når:
 *   - en side har mere end én stribe, ét bånd eller ét kort, eller to promoer med samme id;
 *   - en promo mangler `data-shared` eller `data-family-app`;
 *   - der står et /go/- eller /gaa/-link inde i en promo (appens knapper er aldrig partnerklik);
 *   - et butikslink (App Store, Google Play) mangler `target="_blank"`, eller et apps.apple.com-link mangler `data-app-cta`, eller der er mere end ét App Store-badge
 *     (`data-store="ios"`) uden for <footer>;
 *   - et link til elpriser.dk står i et app-træ (`data-family-app`) og ikke går til /app/, eller et
 *     link til elpriser.dk/app/ står UDEN for et app-træ (ejerens undtagelse gælder kun appen);
 *   - et link til elpriser.dk bærer `ref=` (Elpriser.dk's influencerkode);
 *   - promoteksten indeholder et ciffer (uden for `data-live-hours`, sitets formaterede prisspejl);
 *   - en pengeside (config `money`, eller enhver side med `comparisonMarker`) har en promo eller
 *     Safaris smart-banner OVER sammenligningen —
 *     promoen skal stå efter det sidste træf på `comparisonMarker`, og banneret må slet ikke stå der;
 *   - en side i `noPromo` (juridiske sider) har en promo;
 *   - en side i `requirePromo` (fx sitets app-side) mangler en;
 *   - bundbjælken (`data-app-promo="bar"`) står alene uden en stribe/et bånd/et kort på siden, står på en
 *     app-side (`data-app-page`), ikke sendes lukket (`data-state="closed"`) eller ikke er fast placeret.
 *
 * Konfigurationen er sitets egen: scripts/app-promo.config.json
 *   { "money": ["/", "/billigste"], "comparisonMarker": "data-feed-list", "noPromo": ["/privatlivspolitik"],
 *     "requirePromo": ["/elpris-app"] }
 * Stierne skrives uden afsluttende skråstreg. DENNE FIL ER EN KOPI — ret den i el-feed.
 */
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const CONFIG_PATH = join(ROOT, "scripts/app-promo.config.json");
const config = existsSync(CONFIG_PATH) ? JSON.parse(readFileSync(CONFIG_PATH, "utf8")) : {};
const HTML_DIR = join(ROOT, config.htmlDir ?? ".next/server/app");
const norm = (p) => (p === "/" ? "/" : p.replace(/\/+$/, ""));
const MONEY = new Set((config.money ?? []).map(norm));
const NO_PROMO = new Set((config.noPromo ?? []).map(norm));
const REQUIRE = new Set((config.requirePromo ?? []).map(norm));
const MARKER = config.comparisonMarker ? new RegExp(config.comparisonMarker, "g") : null;

if (!existsSync(HTML_DIR)) {
  console.error(`audit-app-promo: ${relative(ROOT, HTML_DIR)} findes ikke — kør next build først`);
  process.exit(1);
}

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (name.endsWith(".html")) out.push(p);
  }
  return out;
}

function routeOf(file) {
  let r = "/" + relative(HTML_DIR, file).replace(/\\/g, "/").replace(/\.html$/, "");
  r = r.replace(/\/\([^/]+\)/g, ""); // rutegrupper som (da)
  if (r === "/index" || r === "") return "/";
  return norm(r.replace(/\/index$/, ""));
}

const VOID = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"]);

/**
 * Går gennem HTML'en med en lille tag-stak og giver for hvert tag (og hver tekstbid) de omsluttende
 * elementers flag: inde i en promo, et app-træ, <footer>, et prisspejl, en <svg>.
 */
function scan(html) {
  const body = html.replace(/<!--[\s\S]*?-->/g, "").replace(/<(script|style|template)\b[\s\S]*?<\/\1>/gi, "");
  const stack = [];
  const tags = [];
  const texts = [];
  const re = /<\/?([a-zA-Z][\w-]*)((?:[^>"']|"[^"]*"|'[^']*')*)>/g;
  let last = 0;
  let m;
  const flags = () => ({
    promo: stack.find((e) => e.promo)?.promo ?? null,
    family: stack.some((e) => e.family),
    footer: stack.some((e) => e.name === "footer"),
    live: stack.some((e) => e.live),
    svg: stack.some((e) => e.name === "svg"),
  });
  while ((m = re.exec(body))) {
    const text = body.slice(last, m.index);
    if (text.trim()) texts.push({ text, ...flags() });
    last = re.lastIndex;
    const [raw, nameRaw, attrs] = m;
    const name = nameRaw.toLowerCase();
    if (raw.startsWith("</")) {
      const i = stack.map((e) => e.name).lastIndexOf(name);
      if (i >= 0) stack.length = i;
      continue;
    }
    const promo = /\sdata-app-promo="([^"]*)"/.exec(attrs)?.[1] ?? null;
    const el = {
      name,
      promo: promo ? { variant: promo, attrs, pos: m.index } : null,
      family: /\sdata-family-app(=|\s|$|\/)/.test(attrs) || !!promo,
      live: /\sdata-live-hours(=|\s|$|\/)/.test(attrs),
    };
    tags.push({ name, attrs, pos: m.index, ...flags(), self: el });
    if (!VOID.has(name) && !raw.endsWith("/>")) stack.push(el);
  }
  return { tags, texts, body };
}

const failures = [];
let pages = 0;
let promos = 0;
for (const file of walk(HTML_DIR)) {
  const route = routeOf(file);
  if (route.startsWith("/_") || route.includes("/api/")) continue;
  const html = readFileSync(file, "utf8");
  pages++;
  const fail = (msg) => failures.push(`${route}: ${msg}`);
  // `body` is the HTML without comments, <script>, <style> and <template>: Next's flight payload repeats every
  // attribute (data-comparison, data-app-promo) at the end of the page, so positions are measured on `body`.
  const { tags, texts, body } = scan(html);

  const roots = tags.filter((t) => t.self.promo);
  promos += roots.length;
  const counts = {};
  const ids = new Set();
  for (const r of roots) {
    counts[r.self.promo.variant] = (counts[r.self.promo.variant] ?? 0) + 1;
    const id = /\sid="([^"]*)"/.exec(r.attrs)?.[1];
    if (!id) fail(`promo (${r.self.promo.variant}) uden id`);
    else if (ids.has(id)) fail(`to promoer med id="${id}"`);
    else ids.add(id);
    if (!/\sdata-shared(=|\s|$)/.test(r.attrs)) fail(`promo #${id} mangler data-shared`);
    if (!/\sdata-family-app(=|\s|$)/.test(r.attrs)) fail(`promo #${id} mangler data-family-app`);
  }
  for (const [variant, n] of Object.entries(counts)) if (n > 1) fail(`${n} promoer af typen "${variant}" — højst én pr. side`);
  const bar = roots.find((r) => r.self.promo.variant === "bar");
  if (bar) {
    if (roots.length < 2) fail("bundbjælken står alene — den hører til sidens stribe, bånd eller kort");
    if (tags.some((t) => /\sdata-app-page(=|\s|$)/.test(t.attrs))) fail("bundbjælken på app-siden");
    if (!/\sdata-state="closed"/.test(bar.attrs)) fail("bundbjælken skal sendes lukket (data-state=\"closed\")");
    if (!/\sclass="[^"]*\bfixed\b/.test(bar.attrs)) fail("bundbjælken er ikke fast placeret (fixed)");
  }

  let iosBadges = 0;
  for (const t of tags) {
    if (t.name !== "a") continue;
    const href = /\shref="([^"]*)"/.exec(t.attrs)?.[1] ?? "";
    const inApp = t.family || !!t.promo;
    if (t.promo && /^(?:https?:\/\/[^/]+)?\/(go|gaa)\//.test(href)) fail(`partnerlink ${href} inde i appens promo`);
    if (/^https?:\/\/apps\.apple\.com\//.test(href) && !/\sdata-app-cta="/.test(t.attrs)) fail(`App Store-link uden data-app-cta: ${href}`);
    // Butikslinks åbner i et nyt vindue (ejeren 19. okt. 2026).
    if (/^https?:\/\/(apps\.apple\.com|play\.google\.com)\//.test(href) && !/\starget="_blank"/.test(t.attrs)) fail(`butikslink uden target="_blank": ${href}`);
    if (/\sdata-store="ios"/.test(t.attrs) && !t.footer) iosBadges++;
    const ep = /^https?:\/\/(?:www\.)?elpriser\.dk(\/[^"]*)?$/.exec(href);
    if (ep) {
      const path = ep[1] ?? "/";
      if (/[?&](amp;)?ref=/.test(path)) fail(`link til Elpriser.dk med ref=: ${href}`);
      const isApp = /^\/app\/?(\?|#|$)/.test(path);
      if (inApp && !isApp) fail(`link til ${href} i appens promo — kun https://elpriser.dk/app/ er tilladt`);
      if (!inApp && isApp) fail(`link til elpriser.dk/app/ uden for et app-træ (data-family-app): ${href}`);
    }
  }
  if (iosBadges > 1) fail(`${iosBadges} App Store-badges uden for footeren — højst ét pr. side`);

  for (const t of texts) {
    if (!t.promo || t.live || t.svg) continue;
    const text = t.text.replace(/&[a-z]+;|&#\d+;|&#x[0-9a-f]+;/gi, " "); // React writes ' as &#x27;
    if (/\d/.test(text)) fail(`ciffer i promoens tekst: "${text.trim().slice(0, 80)}"`);
  }

  const banners = (html.match(/<meta[^>]+name="apple-itunes-app"/g) ?? []).length;
  if (banners > 1) fail(`${banners} smart-bannere — højst ét`);

  // En side er en pengeside, når config siger det ELLER når sammenligningens markør står på den.
  const hits = MARKER ? [...body.matchAll(MARKER)] : [];
  if (MONEY.has(route) || hits.length) {
    if (banners) fail("Safaris smart-banner på en pengeside (står over sammenligningen)");
    if (roots.length) {
      if (!MARKER) fail("pengeside med promo, men app-promo.config.json har ingen comparisonMarker");
      else {
        if (!hits.length) fail(`pengeside med promo, men sammenligningens markør /${config.comparisonMarker}/ findes ikke`);
        else {
          const lastHit = hits[hits.length - 1].index;
          const firstPromo = body.search(/\sdata-app-promo="/);
          if (firstPromo < lastHit) fail("appens promo står over eller inde i sammenligningen — den skal stå under");
        }
      }
    }
  }
  if (NO_PROMO.has(route) && roots.length) fail("promo på en side, der ikke må have én (noPromo)");
  if (REQUIRE.has(route) && !roots.length && !tags.some((t) => /\sdata-app-page(=|\s|$)/.test(t.attrs))) fail("siden skal have appens promo eller app-side-markøren data-app-page");
}

for (const r of REQUIRE) if (![...walk(HTML_DIR)].some((f) => routeOf(f) === r)) failures.push(`${r}: siden findes ikke i bygningen (requirePromo)`);

if (failures.length) {
  console.error(`audit-app-promo: ${failures.length} fejl`);
  for (const f of failures) console.error("  ✗ " + f);
  process.exit(1);
}
console.log(`audit-app-promo: ${pages} sider, ${promos} promoer — ok`);
