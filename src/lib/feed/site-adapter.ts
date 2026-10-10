/**
 * Kontrakten mellem feedets fælles komponenter og det enkelte site.
 *
 * De fælles komponenter (examples/site/components/comparison/ og /featured/) kopieres ordret
 * ind i hvert site og må ikke rettes dér. Alt, der er sitets eget — ruter, sporingslink,
 * anmeldelsessider — når komponenterne gennem ÉN fil på sitet: `src/lib/site-adapter.ts`,
 * som eksporterer `SITE` og opfylder denne grænseflade (`satisfies SiteAdapter`).
 *
 * DENNE FIL ER EN KOPI (src/lib/feed/site-adapter.ts på sitet). Ret den i el-feed.
 */
export interface SiteAdapter {
  /** Sitets nøgle i feedets `sites`-tabel og hos go-redirectoren: "elselskab", "billigste" … */
  key: string;
  routes: {
    /** Metodesiden: "/beregningsmetode/" eller "/vores-metode/". */
    method: string;
    /** Afsnittet om anmærkninger (OBS/Frarådes) på metodesiden, med anker. */
    advisories: string;
    /** Afsnittet om udvælgelsen af de fremhævede (§ 6 a), med anker. */
    featured: string;
    /** Privatlivspolitikkens afsnit om e-mail-formularen. */
    privacyLead: string;
    /** Hvor et selskab kan gøre indsigelse mod en anmærkning. */
    complaint: string;
  };
  /** Link til partnerens anmeldelse på dette site — eller null, når sitet ingen har. */
  reviewHref(partnerSlug: string): string | null;
  /**
   * Sitets standard for sammenligningen, når siden og adressen ikke siger andet: periode og
   * forvalgte filtre. Udeladt = 12 måneder og alle pristyper. En side kan stadig give
   * `period`/`initialFilters` til InteractiveFeed/ComparisonShell, og adressen vinder altid.
   * Typerne er skrevet ud her, så kontrakten ikke importerer noget (se CompareFilters).
   */
  defaults?: {
    period?: 6 | 12;
    filters?: {
      priceTypes?: ("fast" | "variabel")[];
      settlementTypes?: ("faktisk" | "aconto")[];
      offerTypes?: ("introtilbud" | "velkomstrabat")[];
      hideRestricted?: boolean;
    };
  };
}
