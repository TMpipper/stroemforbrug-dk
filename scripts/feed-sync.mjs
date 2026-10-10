#!/usr/bin/env node
/**
 * Kopiér feedets kontrakt, delte regelsæt OG de fælles komponenter ind i sitet — fra en
 * COMMITTET tilstand i el-feed.
 *
 *   npm run feed-sync            # HEAD i ../el-feed
 *   npm run feed-sync -- <ref>   # en bestemt commit
 *   EL_FEED_DIR=/sti/til/el-feed npm run feed-sync
 *
 * Kopierne må aldrig rettes på sitet: ret dem i feedet, kør dets test, og kør dette script
 * igen. src/lib/feed/UPSTREAM.json gemmer commit og sha256 pr. fil, og
 * scripts/audit-upstream.mjs fejler bygningen, hvis en kopi er ændret lokalt. Filerne læses
 * med `git show <ref>:<sti>`, så en halvfærdig arbejdskopi i feedets mappe aldrig havner her.
 *
 * Hvad der kopieres (el-feed/examples/site/ → sitet):
 *   lib/el-feed-types.ts        → src/lib/feed/types.ts
 *   lib/el-feed-compare.ts      → src/lib/feed/compare.ts
 *   lib/el-feed.ts              → src/lib/feed/client.ts
 *   lib/site-adapter.ts         → src/lib/feed/site-adapter.ts   (grænsefladen; sitet skriver src/lib/site-adapter.ts)
 *   (Strømforbrug.dk: offer-copy og sammenligning/fremhævede kort udeladt — ejerens valg 2026-10-11;
 *    de forudsætter sammenligningssidernes @/lib/{prices,format}-flade. Kun kontrakt, klient,
 *    regelsæt, marginalpris og widgetten synkroniseres.)
 *   lib/el-feed-marginal.ts     → src/lib/feed/marginal.ts    (marginalprisen til apparat-/forbrugssider)
 *
 * Dette script er selv en kopi af el-feed/examples/site/scripts/feed-sync.mjs.
 */
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const FEED_DIR = resolve(process.env.EL_FEED_DIR ?? join(ROOT, "..", "el-feed"));
const REF = process.argv[2] ?? "HEAD";
const UPSTREAM = "examples/site";
const LIB = [
  ["lib/el-feed-types.ts", "src/lib/feed/types.ts"],
  ["lib/el-feed-compare.ts", "src/lib/feed/compare.ts"],
  ["lib/el-feed.ts", "src/lib/feed/client.ts"],
  ["lib/site-adapter.ts", "src/lib/feed/site-adapter.ts"],
  ["lib/el-feed-marginal.ts", "src/lib/feed/marginal.ts"],
];
const DIRS = [
  // Elpris-widgetten fra Elpriser.dk som iframe på søstersiterne (elpriser-dk selv ejer kortet og synkroniserer den ikke).
  ["components/widget", "src/components/widget"],
];

const git = (...args) => execFileSync("git", ["-C", FEED_DIR, ...args], { encoding: "utf8" });
const commit = git("rev-parse", REF).trim();

const files = [...LIB];
for (const [src, dst] of DIRS) {
  const names = git("ls-tree", "-r", "--name-only", commit, `${UPSTREAM}/${src}`).split("\n").filter(Boolean);
  for (const p of names) {
    const base = p.slice(`${UPSTREAM}/${src}/`.length);
    files.push([`${src}/${base}`, `${dst}/${base}`]);
  }
}

const hashes = {};
for (const [src, dst] of files) {
  let text = git("show", `${commit}:${UPSTREAM}/${src}`);
  // Kun importstierne skifter navn; alt andet er ordret.
  text = text.replace(/from "\.\/el-feed-types"/g, 'from "./types"').replace(/from "\.\/el-feed-compare"/g, 'from "./compare"');
  const out = join(ROOT, dst);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, text);
  hashes[dst] = createHash("sha256").update(text).digest("hex");
  console.log(`feed-sync: ${src} → ${dst}`);
}
writeFileSync(
  join(ROOT, "src/lib/feed/UPSTREAM.json"),
  JSON.stringify({ repo: "TMpipper/el-feed", path: UPSTREAM, commit, files: hashes }, null, 2) + "\n",
);
console.log(`feed-sync: ${files.length} filer fra el-feed ${commit.slice(0, 7)} — hashes i src/lib/feed/UPSTREAM.json`);
