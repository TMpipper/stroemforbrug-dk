/**
 * Sidernes redaktionelle datoer — den ENE kilde til byline, dateModified og sitemappets lastmod.
 *
 * To datoer findes på sitet, og de må ikke blandes:
 *  - `PRICES_UPDATED` (src/lib/prices-updated.ts, genereret i prebuild): feedets dataalder.
 *    Vises kun i grundlagssætningen ("Tal fra el-feed, opdateret …").
 *  - `pageMeta(path).updated` (her): sidste indholdsmæssige ændring af SIDEN. Rykkes i hånden,
 *    når substansen ændrer sig — aldrig automatisk, aldrig af et deploy.
 *
 * `RELAUNCH` er dagen, hvor hele sitet fik feedets priser og den nye grundlagssætning: alle
 * tal og hver sides grundlag ændrede sig, så alle sider er reelt gennemgået den dag (samme
 * regel som Elpriser.dk's RELAUNCH 2026-10-10).
 */

export const RELAUNCH = "2026-10-11";
export const FIRST_PUBLISHED = "2026-07-29";

/** Sider, hvis indhold er ændret EFTER relanceringen — path uden skråstreger. */
const OVERRIDES: Record<string, { updated?: string; published?: string }> = {
  kontakt: { updated: RELAUNCH },
  privatlivspolitik: { updated: RELAUNCH },
};

export interface PageMeta {
  published: string;
  updated: string;
}

/** `path` som "/" eller "/husstand/familie/" (eller uden skråstreger). */
export function pageMeta(path: string): PageMeta {
  const key = path.replace(/^\/+|\/+$/g, "");
  const o = OVERRIDES[key] ?? {};
  return { published: o.published ?? FIRST_PUBLISHED, updated: o.updated ?? RELAUNCH };
}
