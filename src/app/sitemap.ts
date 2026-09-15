import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/config";
import { getPublishedSlugs, getAppliance } from "@/lib/appliances";

/**
 * Every URL previously carried `new Date()` as its lastModified, so each deploy
 * told Google that all 62 pages had just changed — including the ones nobody had
 * touched. Google's helpful-content guidance treats that kind of manufactured
 * freshness as a negative trust signal, and it also wastes crawl budget on
 * pages that are genuinely unchanged.
 *
 * Dates below are stored, not generated. Bump `CONTENT_UPDATED` for a static
 * page when its substance changes, and an appliance's own `updated` field when
 * that appliance's content changes.
 */

/** Real dates of the last substantive edit per static page. */
const CONTENT_UPDATED: Record<string, string> = {
  "": "2026-09-15",
  "beregner": "2026-09-15",
  "gennemsnitligt": "2026-09-15",
  "husstand": "2026-09-15",
  "husstand/1-person": "2026-09-15",
  "husstand/2-personer": "2026-09-15",
  "husstand/familie": "2026-09-15",
  "husstand/med-varmepumpe": "2026-09-15",
  "varmepumpe": "2026-09-15",
  "varmepumpe/luft-til-luft": "2026-09-15",
  "varmepumpe/luft-til-vand": "2026-09-15",
  "hvad-koster-en-kwh": "2026-09-15",
  "sparetips": "2026-09-15",
  "standby": "2026-09-15",
  "stromslugere": "2026-09-15",
  "spare-paa-stroemmen": "2026-09-15",
  "hvad-koster-det-at-lade-en-elbil": "2026-09-15",
  "om-os": "2026-09-15",
  "kontakt": "2026-07-29",
  "privatlivspolitik": "2026-07-29",
};

interface StaticEntry {
  path: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
}

const STATIC_PAGES: StaticEntry[] = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "beregner", changeFrequency: "monthly", priority: 0.9 },
  { path: "gennemsnitligt", changeFrequency: "monthly", priority: 0.8 },
  { path: "husstand", changeFrequency: "monthly", priority: 0.8 },
  { path: "husstand/1-person", changeFrequency: "monthly", priority: 0.7 },
  { path: "husstand/2-personer", changeFrequency: "monthly", priority: 0.7 },
  { path: "husstand/familie", changeFrequency: "monthly", priority: 0.7 },
  { path: "husstand/med-varmepumpe", changeFrequency: "monthly", priority: 0.7 },
  { path: "varmepumpe", changeFrequency: "monthly", priority: 0.8 },
  { path: "varmepumpe/luft-til-luft", changeFrequency: "monthly", priority: 0.7 },
  { path: "varmepumpe/luft-til-vand", changeFrequency: "monthly", priority: 0.7 },
  { path: "hvad-koster-en-kwh", changeFrequency: "monthly", priority: 0.8 },
  { path: "sparetips", changeFrequency: "monthly", priority: 0.7 },
  { path: "standby", changeFrequency: "monthly", priority: 0.7 },
  { path: "stromslugere", changeFrequency: "monthly", priority: 0.7 },
  { path: "spare-paa-stroemmen", changeFrequency: "monthly", priority: 0.7 },
  { path: "hvad-koster-det-at-lade-en-elbil", changeFrequency: "monthly", priority: 0.7 },
  { path: "om-os", changeFrequency: "yearly", priority: 0.3 },
  { path: "kontakt", changeFrequency: "yearly", priority: 0.3 },
  { path: "privatlivspolitik", changeFrequency: "yearly", priority: 0.1 },
];

const RESERVED_SLUGS = [
  "beregner", "gennemsnitligt", "husstand", "varmepumpe",
  "sparetips", "om-os", "kontakt", "privatlivspolitik", "go",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url;

  const staticPages: MetadataRoute.Sitemap = STATIC_PAGES.map((p) => ({
    url: p.path ? `${base}/${p.path}/` : `${base}/`,
    lastModified: CONTENT_UPDATED[p.path] ?? SITE_CONFIG.lastUpdated,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const appliancePages: MetadataRoute.Sitemap = getPublishedSlugs()
    .filter((slug) => !RESERVED_SLUGS.includes(slug))
    .map((slug) => ({
      url: `${base}/${slug}/`,
      lastModified: getAppliance(slug)?.updated ?? SITE_CONFIG.lastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...staticPages, ...appliancePages];
}
