#!/usr/bin/env node
/**
 * audit-sister-titles — Strømforbrug.dk's apparattitler og H1'er må ikke spejle Elpriser.dk's 36 apparatsider.
 *
 * Ejerens valg 2026-10-11: de to sites adskilles ved vinkel, ikke ved plumbing. Google behøver intet link for at se, at to
 * sider svarer på samme søgning — men ens titler på tværs af to domæner er både et fodaftryk og en kannibalisering.
 * Reglen: ingen titel/H1 her deler seks sammenhængende ord (normaliseret) med en titel/H1 på elpriser.dk's apparatsider.
 * Kører mod nettet; del af `npm run audit`, ikke af postbuild.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { walkHtml } from "./lib/html.mjs";

const ROOT = process.cwd();
const BUILD = join(ROOT, ".next/server/app");
const SISTER = "https://elpriser.dk";
const SHINGLE = 6;

const norm = (s) => s.toLowerCase().replace(/&amp;/g, "&").replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim();
const shingles = (s) => { const w = norm(s).split(" ").filter(Boolean); const out = new Set(); for (let i = 0; i + SHINGLE <= w.length; i++) out.add(w.slice(i, i + SHINGLE).join(" ")); return out; };
const titleOf = (html) => html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "";
const h1Of = (html) => html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1].replace(/<[^>]+>/g, "") ?? "";

const get = async (url) => { const r = await fetch(url, { headers: { "user-agent": "stroemforbrug-audit" }, signal: AbortSignal.timeout(20_000) }); if (!r.ok) throw new Error(`${url} → ${r.status}`); return r.text(); };

let sitemap;
try { sitemap = await get(`${SISTER}/sitemap.xml`); } catch (e) { console.log(`audit-sister-titles: elpriser.dk svarede ikke (${e.message}) — sprunget over.`); process.exit(0); }
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).filter((u) => /hvor-meget-str(oe|o)m-bruger/.test(u));
if (!urls.length) { console.log("audit-sister-titles: ingen apparatsider i søstersitets sitemap — sprunget over."); process.exit(0); }
const sister = [];
for (const u of urls) { try { const h = await get(u); sister.push({ u, title: titleOf(h), h1: h1Of(h) }); } catch { /* en død side tæller ikke */ } }
const sisterShingles = new Map();
for (const s of sister) for (const text of [s.title, s.h1]) for (const sh of shingles(text)) sisterShingles.set(sh, s.u);

const files = walkHtml(BUILD).filter((f) => !/_not-found|_global-error/.test(f));
const errors = [];
for (const f of files) {
  const html = readFileSync(f, "utf8");
  for (const [kind, text] of [["title", titleOf(html)], ["h1", h1Of(html)]]) {
    for (const sh of shingles(text)) if (sisterShingles.has(sh)) { errors.push(`${f.slice(BUILD.length)} ${kind} »${text}« deler »${sh}« med ${sisterShingles.get(sh)}`); break; }
  }
}
if (errors.length) { console.error(`audit-sister-titles: ${errors.length} titler/H1'er spejler Elpriser.dk`); for (const e of errors.slice(0, 30)) console.error(`  ✗ ${e}`); process.exit(1); }
console.log(`audit-sister-titles: ok — ${files.length} sider mod ${sister.length} apparatsider på elpriser.dk, ingen delte ${SHINGLE}-ords-sekvenser.`);
