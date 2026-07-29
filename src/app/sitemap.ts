import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/config";
import { getPublishedSlugs } from "@/lib/appliances";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url;
  const now = new Date().toISOString();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/beregner/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/gennemsnitligt/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/husstand/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/husstand/1-person/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/husstand/2-personer/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/husstand/familie/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/husstand/med-varmepumpe/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/varmepumpe/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/varmepumpe/luft-til-luft/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/varmepumpe/luft-til-vand/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/hvad-koster-en-kwh/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/sparetips/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/standby/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/stromslugere/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/spare-paa-stroemmen/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/hvad-koster-det-at-lade-en-elbil/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/om-os/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/kontakt/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/privatlivspolitik/`, lastModified: now, changeFrequency: "yearly", priority: 0.1 },
  ];

  // Dynamic appliance pages
  const reservedSlugs = ["beregner", "gennemsnitligt", "husstand", "varmepumpe", "sparetips", "om-os", "kontakt", "privatlivspolitik", "go"];
  const appliancePages: MetadataRoute.Sitemap = getPublishedSlugs()
    .filter((slug) => !reservedSlugs.includes(slug))
    .map((slug) => ({
      url: `${base}/${slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...staticPages, ...appliancePages];
}
