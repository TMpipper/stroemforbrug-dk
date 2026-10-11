/**
 * Ækvivalenskontrol af kodemod'en: byg sitet med PRICE_OVERRIDE_DEV=1.86 og sammenlign hver sides
 * kr.-beløb med den gamle HTML (baseline fra før omlægningen). Et beløb, der fandtes før og ikke
 * findes nu (±1 %), er et token, der regner forkert — eller en sætning, der er skrevet om; begge
 * dele skal ses. Brug: node scripts/equivalence-check.mjs <baseline-dir> [.next/server/app]
 */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const [BASE, NEW = ".next/server/app"] = process.argv.slice(2);
if (!BASE) { console.error("brug: node scripts/equivalence-check.mjs <baseline-dir>"); process.exit(2); }
const text = (html) => html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ")
  .replace(/<[^>]*data-switch-cta[\s\S]*?<\/div>\s*<\/div>/g, " ").replace(/<p[^>]*data-price-basis[\s\S]*?<\/p>/g, " ")
  .replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ");
const amounts = (t) => [...t.matchAll(/(\d{1,3}(?:\.\d{3})+|\d+)(?:,\d+)?\s*kr\b/g)].map((m) => Number(m[0].replace(/\s*kr\b/, "").replace(/\./g, "").replace(",", ".")));
const pages = readdirSync(BASE).filter((f) => f.endsWith(".html") && !/_not-found|_global-error/.test(f));
let worst = [];
for (const f of pages) {
  const np = join(NEW, f);
  if (!existsSync(np)) { console.log(`  mangler i nyt build: ${f}`); continue; }
  const a = amounts(text(readFileSync(join(BASE, f), "utf8")));
  const b = amounts(text(readFileSync(np, "utf8")));
  const pool = [...b];
  const missing = [];
  for (const v of a) {
    const i = pool.findIndex((w) => Math.abs(w - v) <= Math.max(1, v * 0.01));
    if (i >= 0) pool.splice(i, 1); else missing.push(v);
  }
  worst.push({ f, total: a.length, missing });
}
worst.sort((x, y) => y.missing.length - x.missing.length);
let sum = 0, tot = 0;
for (const w of worst) { sum += w.missing.length; tot += w.total; }
console.log(`${pages.length} sider · ${tot} beløb før · ${sum} mangler nu (${((sum / tot) * 100).toFixed(1)} %)`);
for (const w of worst.slice(0, 15)) console.log(`  ${String(w.missing.length).padStart(3)}/${String(w.total).padStart(3)}  ${w.f}  ${w.missing.slice(0, 12).join(", ")}${w.missing.length > 12 ? " …" : ""}`);
