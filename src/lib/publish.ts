/**
 * Udgivelsesdatoer — én regel for "er siden live endnu?".
 *
 * Nye sidetyper (selskabspriser, netselskaber, nyheder) drypper ud over uger. Hver side
 * bærer en `publishDate`, og alt, der lister sider — statiske params, hubs, sitemap,
 * llms.txt — spørger HER, så en side ikke kan stå i sitemappet før den findes, eller
 * findes uden at stå der.
 *
 * Datoen læses i dansk tid. Kl. 00:30 dansk tid er det stadig "i går" i UTC, og en side
 * dateret i dag ville ellers først gå live to timer for sent — eller for tidligt om vinteren.
 *
 * `PUBLISH_DATE=2026-11-01` i miljøet lader et lokalt byg vise, hvad der er live på en given
 * dag (samme idé som `CAMPAIGN_DATE` på søstersiderne). Bruges kun til kontrol.
 */
import { copenhagenDay } from "./dates";

const ISO_DAY = /^\d{4}-\d{2}-\d{2}$/;

/** "2026-09-30" — dags dato i København. */
export function todayCopenhagen(now: Date = new Date()): string {
  const override = process.env.PUBLISH_DATE?.trim();
  if (override) {
    if (!ISO_DAY.test(override)) throw new Error(`PUBLISH_DATE skal være YYYY-MM-DD, fik "${override}"`);
    return override;
  }
  return copenhagenDay(now.toISOString());
}

/** Er en side med denne udgivelsesdato live i dag? Datoen SKAL være YYYY-MM-DD. */
export function isLive(publishDate: string, now: Date = new Date()): boolean {
  if (!ISO_DAY.test(publishDate)) throw new Error(`publishDate skal være YYYY-MM-DD, fik "${publishDate}"`);
  return publishDate <= todayCopenhagen(now);
}
