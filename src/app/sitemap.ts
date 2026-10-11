import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/config";
import { getPublishedSlugs, getAppliance } from "@/lib/appliances";
import { pageMeta } from "@/lib/pages";

/**
 * Datoerne er gemt, ikke genereret: `lastModified` kommer fra pageMeta() (sidste
 * indholdsmæssige ændring) — aldrig fra `new Date()`, som ville fortælle Google, at alle
 * sider ændrede sig ved hvert deploy. Prisernes friskhed står i grundlagssætningen på siden,
 * ikke her.
 */

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
    lastModified: pageMeta(p.path ? `/${p.path}/` : "/").updated,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const appliancePages: MetadataRoute.Sitemap = getPublishedSlugs()
    .filter((slug) => !RESERVED_SLUGS.includes(slug))
    .map((slug) => {
      const own = getAppliance(slug)?.updated;
      const meta = pageMeta(`/${slug}/`).updated;
      return {
        url: `${base}/${slug}/`,
        lastModified: own && own > meta ? own : meta,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      };
    });

  return [...staticPages, ...appliancePages];
}
