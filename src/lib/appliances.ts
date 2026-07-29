import type { ApplianceData } from "./types";
import { APPLIANCES_CORE } from "./appliances-core";
import { APPLIANCES_EXTRA } from "./appliances-extra";
import { APPLIANCES_PHASE2A } from "./appliances-phase2a";
import { APPLIANCES_PHASE2B } from "./appliances-phase2b";

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
];

/** Check if an appliance is published (no publishDate = always published) */
export function isPublished(a: ApplianceData): boolean {
  if (!a.publishDate) return true;
  return new Date(a.publishDate) <= new Date();
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
