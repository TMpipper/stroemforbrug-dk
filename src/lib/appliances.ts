import type { ApplianceData } from "./types";
import { isLive } from "./publish";
import { APPLIANCES_CORE } from "./appliances-core";
import { APPLIANCES_EXTRA } from "./appliances-extra";
import { APPLIANCES_PHASE2A } from "./appliances-phase2a";
import { APPLIANCES_PHASE2B } from "./appliances-phase2b";
import { APPLIANCES_NEW } from "../content/apparater";

// Phase 3 — drip-published via publishDate
let phase3: ApplianceData[] = [];
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const mod = require("./appliances-phase3");
  if (mod.APPLIANCES_PHASE3) phase3 = mod.APPLIANCES_PHASE3;
} catch { /* not yet available */ }

export const APPLIANCES: ApplianceData[] = [
  ...APPLIANCES_CORE,
  ...APPLIANCES_EXTRA,
  ...APPLIANCES_PHASE2A,
  ...APPLIANCES_PHASE2B,
  ...phase3,
  ...APPLIANCES_NEW,
];

/**
 * Er apparatet udgivet? (ingen publishDate = altid). Samme regel som resten af sitet (`isLive`, dansk dag):
 * før 22. nov. 2026 sammenlignede den `new Date("2026-12-01")` (UTC-midnat) med nu, så en side gik live
 * kl. 01 dansk tid — og et byg mellem 00 og 01 viste den ikke, selv om menuen (isLive) gjorde.
 */
export function isPublished(a: ApplianceData): boolean {
  return !a.publishDate || isLive(a.publishDate);
}

/** All appliances that are currently published — for sitemap, homepage, listings */
export function getPublishedAppliances(): ApplianceData[] {
  return APPLIANCES.filter(isPublished);
}

/** Get a single appliance by slug (published or not — pages are always pre-built) */
export function getAppliance(slug: string): ApplianceData | undefined {
  return APPLIANCES.find((a) => a.slug === slug);
}

/** All slugs — for generateStaticParams (pre-build all, even future-dated) */
export function getAllSlugs(): string[] {
  return APPLIANCES.map((a) => a.slug);
}

/** Published slugs only — for sitemap */
export function getPublishedSlugs(): string[] {
  return APPLIANCES.filter(isPublished).map((a) => a.slug);
}
