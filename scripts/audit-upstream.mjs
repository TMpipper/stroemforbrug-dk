#!/usr/bin/env node
/**
 * Kopierne fra el-feed (src/lib/feed/, src/components/comparison/, src/components/featured/)
 * er feedets kontrakt, regelsæt og fælles komponenter og må ikke rettes lokalt. Kører som
 * prebuild: en kopi, der ikke matcher hashen fra `npm run feed-sync`, stopper bygningen.
 * Ret i el-feed, kør feed-sync igen.
 */
import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const upstream = JSON.parse(readFileSync(join(ROOT, "src/lib/feed/UPSTREAM.json"), "utf8"));
let failed = 0;
if (upstream.repo !== "TMpipper/el-feed" || !/^[0-9a-f]{40}$/.test(upstream.commit)) {
  console.error("audit-upstream: UPSTREAM.json er ikke skrevet af feed-sync");
  failed++;
}
for (const [file, hash] of Object.entries(upstream.files)) {
  const path = join(ROOT, file);
  if (!existsSync(path)) { console.error(`audit-upstream: ${file} mangler — kør npm run feed-sync`); failed++; continue; }
  const actual = createHash("sha256").update(readFileSync(path)).digest("hex");
  if (actual !== hash) {
    console.error(`audit-upstream: ${file} er ændret lokalt (forventede ${hash.slice(0, 12)}…, fandt ${actual.slice(0, 12)}…). Ret i el-feed og kør npm run feed-sync.`);
    failed++;
  }
}
if (failed) process.exit(1);
console.log(`audit-upstream: ${Object.keys(upstream.files).length} kopier matcher el-feed ${upstream.commit.slice(0, 7)}`);
