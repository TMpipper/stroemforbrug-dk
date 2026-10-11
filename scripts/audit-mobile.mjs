#!/usr/bin/env node
/**
 * audit-mobile — siderne i en rigtig browser mod en kørende server.
 *
 * Portet fra Elpriser.dk 11. oktober 2026 uden dets produktregler (timeliste, diagram, »Flere
 * valg«). Fem sider — én pr. sidetype — i 320, 360, 390, 430 og 768 px, og 1280 px som kontrol
 * af, at telefonlaget ikke når skrivebordet:
 *   /  /vaskemaskine/  /beregner/  /husstand/familie/  /hvad-koster-en-kwh/
 *
 * Regler (alle bredder): ingen vandret rulning; præcis én h1; hver berøringsflade mindst
 * 24 × 24 px (WCAG 2.5.8, AA — bredden tæller også); under 768 px har felter mindst 16 px skrift
 * (iOS Safari zoomer ellers ind på feltet). /hvad-koster-en-kwh/ under 768 px: skifte-CTA'ens knap
 * ([data-switch-cta] a.btn-cta) inden for de første 600 px — findes knappen ikke, noteres det,
 * og delkontrollen springes over.
 *
 * Serveren: scriptet starter selv `next start` på en ledig port og lukker den igen. Sæt BASE
 * (fx BASE=http://localhost:3000) for at måle mod en server, der allerede kører.
 *
 * Kør: npm run audit-mobile   (efter `next build`; del af `npm run audit`, ikke af postbuild)
 * Uden Playwright (npm i -D playwright && npx playwright install chromium) springes kontrollen
 * over med kode 0 — den må ikke blokere en build på en maskine uden browser.
 */
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { createServer } from "node:net";
import { join, resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const PATHS = ["/", "/vaskemaskine/", "/beregner/", "/husstand/familie/", "/hvad-koster-en-kwh/"];
const WIDTHS = [320, 360, 390, 430, 768, 1280];
const CTA_PATH = "/hvad-koster-en-kwh/";
const CTA_SELECTOR = "[data-switch-cta] a.btn-cta";
const CTA_MAX_TOP = 600;

const skip = (why) => {
  console.log(`audit-mobile: playwright ikke installeret — spring over (${why}). Installer med \`npm i -D playwright && npx playwright install chromium\`.`);
  process.exit(0);
};

let chromium;
try {
  ({ chromium } = await import("playwright"));
} catch (e) {
  skip(e.code === "ERR_MODULE_NOT_FOUND" ? "pakken mangler" : e.message.slice(0, 80));
}

if (!existsSync(join(ROOT, ".next/BUILD_ID")) && !process.env.BASE) {
  console.error("audit-mobile: ingen build i .next — kør `next build` først.");
  process.exit(1);
}

/* ── Serveren ─────────────────────────────────────────────────────────────── */

const freePort = () =>
  new Promise((res, rej) => {
    const s = createServer();
    s.once("error", rej);
    s.listen(0, "127.0.0.1", () => {
      const { port } = s.address();
      s.close(() => res(port));
    });
  });

let server = null;
let BASE = (process.env.BASE ?? "").trim().replace(/\/$/, "");
if (!BASE) {
  const port = await freePort();
  BASE = `http://127.0.0.1:${port}`;
  server = spawn(process.execPath, [join(ROOT, "node_modules/next/dist/bin/next"), "start", "-p", String(port), "-H", "127.0.0.1"], {
    cwd: ROOT,
    stdio: ["ignore", "ignore", "pipe"],
    env: { ...process.env, PORT: String(port) },
  });
  let stderr = "";
  server.stderr.on("data", (d) => { stderr += d; });
  server.on("exit", (code) => { if (code && !server.stopped) console.error(`audit-mobile: next start stoppede med kode ${code}\n${stderr.slice(-800)}`); });
}
const stopServer = () => {
  if (!server || server.stopped) return;
  server.stopped = true;
  try { server.kill("SIGTERM"); } catch { /* allerede død */ }
};
process.on("exit", stopServer);
process.on("SIGINT", () => { stopServer(); process.exit(130); });

/* Vent på, at serveren svarer — op til 60 s. */
let ready = false;
const deadline = Date.now() + 60_000;
while (Date.now() < deadline) {
  try {
    const r = await fetch(`${BASE}/`, { signal: AbortSignal.timeout(5_000) });
    if (r.ok) { ready = true; break; }
  } catch { /* ikke oppe endnu */ }
  if (server?.exitCode !== null && server?.exitCode !== undefined) break;
  await new Promise((r) => setTimeout(r, 500));
}
if (!ready) {
  console.error(`audit-mobile: ingen server på ${BASE} efter 60 s.`);
  stopServer();
  process.exit(1);
}

/* ── Browseren ────────────────────────────────────────────────────────────── */

let browser;
try {
  browser = await chromium.launch();
} catch (e) {
  stopServer();
  if (/Executable doesn't exist|browserType\.launch|install/i.test(e.message)) skip("Chromium er ikke hentet");
  throw e;
}

/** Alt måles i siden: rektangler, skriftstørrelser og CTA'ens placering — uden at røre tilstanden. */
async function inspect(page, ctaSelector) {
  return page.evaluate((ctaSel) => {
    const de = document.documentElement;
    const label = (el, b) => `${el.tagName.toLowerCase()} "${(el.getAttribute("aria-label") ?? el.textContent ?? "").trim().slice(0, 30)}" ${Math.round(b.width)}×${Math.round(b.height)}`;
    const horizontal = de.scrollWidth > de.clientWidth + 1;
    // Synderen: det element, der rager længst ud over højre kant — så fundet peger på en komponent, ikke bare en side.
    // Et element inde i en beholder med overflow-x auto/scroll/hidden (en tabel i sin rulleramme) gør ikke
    // dokumentet bredere og springes over; af en kæde med samme højre kant nævnes det yderste.
    let culprit = null;
    if (horizontal) {
      const clipped = new Map();
      const isClipped = (el) => {
        if (!el || el === document.body) return false;
        if (clipped.has(el)) return clipped.get(el);
        const ox = getComputedStyle(el).overflowX;
        const v = ox === "auto" || ox === "scroll" || ox === "hidden" || ox === "clip" || isClipped(el.parentElement);
        clipped.set(el, v);
        return v;
      };
      let worst = de.clientWidth + 1;
      let found = null;
      for (const el of document.querySelectorAll("body *")) {
        const b = el.getBoundingClientRect();
        if (b.width && b.right > worst && !isClipped(el.parentElement)) { worst = b.right; found = el; }
      }
      if (found) {
        const name = (el) => {
          const b = el.getBoundingClientRect();
          const cls = (el.getAttribute("class") ?? "").split(/\s+/).slice(0, 4).join(".");
          const txt = (el.textContent ?? "").trim().replace(/\s+/g, " ").slice(0, 30);
          return `<${el.tagName.toLowerCase()}${el.id ? `#${el.id}` : ""}${cls ? `.${cls}` : ""}>${txt ? ` "${txt}"` : ""} ${Math.round(b.width)} px bred, højre kant ${Math.round(b.right)} px`;
        };
        let outer = found;
        while (outer.parentElement && outer.parentElement !== document.body && outer.parentElement.getBoundingClientRect().right >= worst - 1) outer = outer.parentElement;
        culprit = outer === found ? name(found) : `${name(outer)} ← inderst ${name(found)}`;
      }
    }
    const h1 = document.querySelectorAll("h1").length;
    // Berøringsflader: WCAG 2.5.8 kræver 24 × 24 px i begge retninger. Skjulte (0 × 0) springes over.
    const tooSmall = [];
    const small = [];
    for (const el of document.querySelectorAll('button, a[role="button"], a.btn-cta, a[data-cta], summary, [role="option"], [role="tab"]')) {
      if (!(el instanceof HTMLElement)) continue;
      const b = el.getBoundingClientRect();
      if (!b.width || !b.height) continue;
      // WCAG 2.5.8's undtagelse: et mål inde i løbende tekst er begrænset af linjehøjden.
      const display = getComputedStyle(el).display;
      if ((display === "inline" || display === "inline-block") && el.parentElement && ["P", "SPAN", "LI", "TD", "DD"].includes(el.parentElement.tagName) && b.height < 24) continue;
      if (b.height < 24 || b.width < 24) tooSmall.push(label(el, b));
      else if (b.height < 40 && el.tagName !== "BUTTON") small.push(label(el, b));
    }
    // Felter under 16 px skrift zoomer iOS Safari ind på.
    const inputsSmall = [];
    for (const el of document.querySelectorAll("input, select, textarea")) {
      const b = el.getBoundingClientRect();
      if (!b.width || !b.height) continue;
      if (el instanceof HTMLInputElement && ["checkbox", "radio", "range", "hidden", "submit", "button"].includes(el.type)) continue;
      const fs = parseFloat(getComputedStyle(el).fontSize);
      if (fs < 16) inputsSmall.push(`${el.tagName.toLowerCase()}[${el.getAttribute("name") ?? el.getAttribute("role") ?? el.type}] ${fs}px`);
    }
    const cta = ctaSel ? document.querySelector(ctaSel) : null;
    return {
      horizontal,
      overflowPx: de.scrollWidth - de.clientWidth,
      culprit,
      h1,
      tooSmall: tooSmall.slice(0, 6),
      small: small.slice(0, 6),
      inputsSmall: inputsSmall.slice(0, 4),
      hasCta: !!cta,
      ctaTop: cta ? Math.round(cta.getBoundingClientRect().top + window.scrollY) : null,
    };
  }, ctaSelector);
}

const failures = [];
const notes = new Set();

async function check(width, path) {
  const tag = `${path} @ ${width} px`;
  const ctx = await browser.newContext({ viewport: { width, height: 844 }, deviceScaleFactor: 2, locale: "da-DK", isMobile: width < 768, hasTouch: width < 1280 });
  const page = await ctx.newPage();
  try {
    // Elpriser.dk's kort (iframe) hentes fra nettet og poller — det må ikke afgøre, om SITETS layout holder.
    await page.route(/https:\/\/elpriser\.dk\//, (route) => route.abort());
    const res = await page.goto(`${BASE}${path}`, { waitUntil: "load", timeout: 60_000 });
    await page.waitForTimeout(400);
    if (!res || res.status() !== 200) {
      failures.push(`${tag}: status ${res?.status()}`);
      return;
    }
    const wantCta = path === CTA_PATH && width < 768;
    const r = await inspect(page, wantCta ? CTA_SELECTOR : null);
    if (r.horizontal) failures.push(`${tag}: vandret rulning (${r.overflowPx} px for bred${r.culprit ? ` — ${r.culprit}` : ""})`);
    if (r.h1 !== 1) failures.push(`${tag}: ${r.h1} h1`);
    if (r.tooSmall.length) failures.push(`${tag}: berøringsflader under 24 px — ${r.tooSmall.join("; ")}`);
    // iPhone zoomer ind på et felt under 16 px; iPad og skrivebord gør ikke — reglen gælder under 768 px.
    if (width < 768 && r.inputsSmall.length) failures.push(`${tag}: felter under 16 px skrift (iOS zoomer) — ${r.inputsSmall.join("; ")}`);
    const extra = [];
    if (r.small.length) extra.push(`pille-links under 40 px: ${r.small.join("; ")}`);
    if (wantCta) {
      if (!r.hasCta) notes.add(`${CTA_PATH}: ingen ${CTA_SELECTOR} i siden — CTA-inden-for-${CTA_MAX_TOP}-px-reglen er sprunget over`);
      else if (r.ctaTop > CTA_MAX_TOP) failures.push(`${tag}: skifte-CTA'en ved ${r.ctaTop} px (krav ≤ ${CTA_MAX_TOP})`);
      else extra.push(`CTA ${r.ctaTop} px`);
    }
    console.log(`audit-mobile: ${tag} — ok${extra.length ? ` (${extra.join(", ")})` : ""}`);
  } catch (e) {
    failures.push(`${tag}: ${e.message.slice(0, 120)}`);
  } finally {
    await ctx.close();
  }
}

let count = 0;
for (const path of PATHS) for (const width of WIDTHS) { await check(width, path); count++; }
await browser.close();
stopServer();

for (const n of notes) console.log(`audit-mobile: note — ${n}`);
if (failures.length) {
  console.error(`\naudit-mobile: ${failures.length} fejl\n`);
  for (const f of failures) console.error(`  ✗ ${f}`);
  process.exit(1);
}
console.log(`audit-mobile: ok — ${count} visninger (${PATHS.length} sider i ${WIDTHS.join("/")} px): ingen vandret rulning, én h1, berøringsflader ≥ 24 × 24 px, felter ≥ 16 px under 768 px.`);
