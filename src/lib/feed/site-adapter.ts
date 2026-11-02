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
  /**
   * Naturgas — kun sites med gassammenligningen (components/gas-comparison/). Udeladt = ingen
   * knapper. `goHref` får feedets `trackingSlug` (feedets slug + "-gas") og svarer med sitets
   * /go/-link, når sitet har en aftale med selskabet — ellers null. Et selskab, vi fraråder,
   * får aldrig en knap, uanset hvad den svarer. Hold funktionen let: adapteren ender også i
   * klientkomponenter (links til selskabssider gives som prop til InteractiveGasFeed).
   */
  gas?: {
    goHref(trackingSlug: string): string | null;
    /** Metodens afsnit om naturgas, med anker. Udeladt = `routes.method`. */
    method?: string;
  };
  /**
   * Ladebokse — kun sites med ladeboks-sammenligningen (components/ladeboks-comparison/).
   * `goHref` får sælgerens `trackingSlug` ("<sælger>-ladeboks") og rækkens tilbud
   * (`LadeboksGoOffer`) og svarer med sitets /go/-link, når sitet har en aftale — ellers null,
   * og rækken står uden knap. Knappen flytter aldrig rækkefølgen: den er regnet af totalprisen
   * alene.
   *
   * Har sitet ét link til køb og et andet til leje (OK siden 2. nov. 2026: `ok-ladeboks` og
   * `ok-ladeboks-leje`), vælger det efter `offer.rented`. Et site med ét link pr. sælger kan
   * ignorere andet argument. `offer` er udeladt, når kalderen ikke viser ét bestemt tilbud
   * (fx en knap pr. sælger) — så gælder køb-linket.
   */
  ladeboks?: {
    goHref(trackingSlug: string, offer?: LadeboksGoOffer): string | null;
    /** Metodens afsnit om ladebokse, med anker. Udeladt = `routes.method`. */
    method?: string;
    /** Elpriser.dk-appens side (smart opladning). Udeladt = ingen app-linje under listen. */
    appHref?: string;
  };
}

/**
 * Rækkens tilbud, som `ladeboks.goHref` får det. Skrevet ud her, så kontrakten ikke importerer
 * noget; de fælles komponenter laver det med `goOfferOf()` i ladeboks-compare.ts.
 */
export interface LadeboksGoOffer {
  /** Feedets tilbuds-id ("ok-ladepakke-leje"). Kun til logning — vælg aldrig link efter id'et. */
  id: string;
  type: "eje" | "leje" | "udskift" | "abonnement";
  /**
   * true = lejet boks: `leje`, eller `udskift` uden engangskøb af boksen men med fast månedlig
   * leje (`isRentedOffer`). false = købt boks eller ladeabonnement uden boks.
   */
  rented: boolean;
}
