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
/**
 * Opgraderingen 22. nov. 2026 (a8e0c79, cf012f1, 0c6f3d5, af422c3): forside med søgning, /apparater/ som produktfinder,
 * beregneren rettet (én årspris), og hver af de 43 gamle apparatsider fik ny H1 efter brug, fjernede opdigtede
 * energimærketabeller og ingen skrevne kronebeløb — reelle ændringer af substansen, så de sider rykkes til den dag.
 */
export const UPGRADE = "2026-11-22";

/** Sider, hvis indhold er ændret EFTER relanceringen — path uden skråstreger. */
const OVERRIDES: Record<string, { updated?: string; published?: string }> = {
  "": { updated: UPGRADE },
  apparater: { updated: UPGRADE },
  beregner: { updated: UPGRADE },
  kontakt: { updated: RELAUNCH },
  privatlivspolitik: { updated: RELAUNCH },
  // Elpriser.dk-appens side (ejerens app-undtagelse 19. okt. 2026).
  app: { published: "2026-10-19", updated: "2026-10-19" },
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
