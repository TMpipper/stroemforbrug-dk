// Fryser sitets URL-register: hver side i .next/server/app med titel og beskrivelse.
// Kør efter `next build`. Ingen URL herfra må forsvinde i en opgradering (audit-live læser filen).
import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const APP = join(ROOT, ".next", "server", "app");
const OUT = join(ROOT, "content", "urls.json");
const SKIP = /(^|\/)(_not-found|_global-error|not-found)\.html$|\.rsc$/;

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, acc);
    else if (name.endsWith(".html") && !SKIP.test(p)) acc.push(p);
  }
  return acc;
}
const decode = (s) => s.replace(/&amp;/g, "&").replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const entries = walk(APP).map((file) => {
  const html = readFileSync(file, "utf8");
  const rel = relative(APP, file).replace(/\.html$/, "");
  const path = rel === "index" ? "/" : `/${rel.replace(/\/index$/, "")}/`;
  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
  const description = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "");
  const noindex = /<meta name="robots" content="[^"]*noindex/.test(html);
  return { path, title, description, noindex };
}).sort((a, b) => a.path.localeCompare(b.path, "da"));
const prev = (() => { try { return JSON.parse(readFileSync(OUT, "utf8")); } catch { return null; } })();
if (prev && !process.argv.includes("--write")) {
  const have = new Set(entries.map((e) => e.path));
  const missing = prev.filter((e) => !have.has(e.path)).map((e) => e.path);
  if (missing.length) { console.error(`URL-registret mangler ${missing.length} sider i dette build:\n  ${missing.join("\n  ")}`); process.exit(1); }
  console.log(`URL-register: ${prev.length} frosne sider findes alle (${entries.length} bygget).`);
} else {
  writeFileSync(OUT, JSON.stringify(entries, null, 2) + "\n");
  console.log(`Skrev ${entries.length} sider til content/urls.json`);
}
