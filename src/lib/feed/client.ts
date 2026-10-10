/**
 * Klient til el-feed. Kopiér denne fil og `el-feed-types.ts` ind i hvert el-site.
 *
 * Alle tal på sitet kommer herfra. Ingen pris skrives i hånden — hverken i data eller i
 * brødtekst.
 *
 * .env på sitet:
 *   EL_FEED_URL=https://el-feed.vercel.app
 *   REVALIDATE_SECRET=<samme som i el-feed>
 *   SITE_DOMAIN=billigste-elselskab.nu
 *
 * Cachestrategi: svaret gemmes under cache-tags, og feedet kalder sitets
 * `/api/revalidate/` med de tags, der er blevet forældede. `revalidate: 300` er et
 * sikkerhedsnet, hvis et webhook-kald går tabt — ikke den normale vej til friske tal. Det
 * matcher feedets CDN-cache, så en forældet kopi, der slipper igennem, højst lever fem
 * minutter på sitet (med 3600 levede den en time).
 */
import type {
  FeedAdvisoriesResponse,
  FeedChangeKind,
  FeedChangesResponse,
  FeedEstimateResponse,
  FeedFeaturedResponse,
  FeedGridAreaDetailResponse,
  FeedGridAreaResponse,
  FeedGridAreasResponse,
  FeedHealthResponse,
  FeedMarketResponse,
  FeedPresetsResponse,
  FeedProductsResponse,
  FeedReportResponse,
  FeedScoreRubricResponse,
  FeedSpotResolution,
  FeedSpotResponse,
  FeedSupplierPricesResponse,
  FeedSupplierResponse,
  FeedSuppliersResponse,
  FeedTimeprisResponse,
  FeedVerificationsResponse,
  FeedDstHistoryResponse,
  FeedHouseholdHistoryResponse,
  FeedSpotHistoryResponse,
  HistoryArea,
  FeedAfgifterResponse,
  FeedMonthlyBasis,
  FeedCo2Response,
  FeedDailyPricesResponse,
  FeedMonthlyPricesResponse,
  FeedTarifferResponse,
} from "./types";

const BASE = process.env.EL_FEED_URL;

/** Cache-tags feedet kan gøre ugyldige. Skal stemme med TAGS i el-feed/src/lib/revalidate.ts. */
export const FEED_TAGS = {
  all: "el-feed",
  products: "el-feed:products",
  featured: "el-feed:featured",
  trustpilot: "el-feed:trustpilot",
  market: "el-feed:market",
  advisories: "el-feed:advisories",
  reports: "el-feed:reports",
  history: "el-feed:history",
  rates: "el-feed:rates",
  co2: "el-feed:co2",
  supplier: (slug: string) => `el-feed:supplier:${slug}`,
} as const;

type Params = object;

export class FeedError extends Error {
  constructor(readonly path: string, readonly status: number, readonly body: string) {
    super(`el-feed ${path}: HTTP ${status} ${body}`.trim());
    this.name = "FeedError";
  }
}

async function get<T>(path: string, params: Params, tags: string[]): Promise<T> {
  if (!BASE) throw new Error("EL_FEED_URL mangler");
  const qs = new URLSearchParams(
    Object.entries(params as Record<string, unknown>)
      .filter(([, v]) => v !== undefined && v !== null && v !== "")
      .map(([k, v]) => [k, String(v)]),
  );
  const res = await fetch(`${BASE}${path}${qs.size ? `?${qs}` : ""}`, {
    next: { tags: [FEED_TAGS.all, ...tags], revalidate: 300 },
  });
  if (!res.ok) throw new FeedError(path, res.status, (await res.text()).slice(0, 300));
  return (await res.json()) as T;
}

/** Stedet, priserne gælder for. Præcis ét af felterne bør sættes. */
export interface Place {
  /** Fuld adresse. Giver læserens eget netområde — det mest præcise. */
  address?: string;
  /** Postnummer. 138 af 1.073 postnumre dækker flere netområder; se `area.ambiguous`. */
  zip?: string;
  /** Netområdekode, fx "791". */
  area?: string;
  /** Kun landsdelen. Svaret markerer sig da som `regionRepresentative`. */
  region?: "DK1" | "DK2";
}

export const elFeed = {
  /** Alle aftaler i netområdet, rangeret efter selskabets egen pris. */
  products: (p: Place & {
    kwh?: number;
    profile?: string;
    type?: "variable" | "fixed";
    supplier?: string;
    intro?: "include" | "exclude" | "only";
    verifiedOnly?: 1;
  }) => get<FeedProductsResponse>("/api/v1/products", p, [FEED_TAGS.products, FEED_TAGS.trustpilot]),

  /** De fremhævede pladser. Vis ALTID `disclosure` sammen med dem — det er betalt placering. */
  featured: (p: Place & { kwh?: number } = {}) =>
    get<FeedFeaturedResponse>(
      "/api/v1/featured",
      { ...p, site: process.env.SITE_DOMAIN },
      [FEED_TAGS.featured, FEED_TAGS.products],
    ),

  suppliers: () =>
    get<FeedSuppliersResponse>("/api/v1/suppliers", {}, [FEED_TAGS.products, FEED_TAGS.trustpilot]),

  supplier: (slug: string, p: Place & { kwh?: number; profile?: string } = {}) =>
    get<FeedSupplierResponse>(`/api/v1/suppliers/${slug}`, p, [
      FEED_TAGS.supplier(slug),
      FEED_TAGS.trustpilot,
    ]),

  /**
   * Samlet månedsestimat inkl. spot, nettarif, Energinet, elafgift og moms.
   * Det er dette tal, en læser kan genkende fra sin regning — i modsætning til
   * `supplierCost`, som kun er den del, selskabet selv bestemmer.
   */
  estimate: (p: Place & {
    /** Boligtype fra /api/v1/presets. Sætter både forbrug OG forbrugsprofil — brug den. */
    preset?: string;
    /** Rent forbrug. Prissætter altid på parcelhusprofilen, medmindre `profile` sættes. */
    kwh?: number;
    profile?: string;
    product?: string;
    /**
     * Antal måneder, totalen dækker — 6 eller 12. Kommer igen som `meta.periodMonths`,
     * og det tal SKAL med, hvor totalen vises: en seks-måneders total er ikke "kr/år".
     */
    period?: number;
    intro?: "include" | "exclude" | "only";
    supplier?: string;
    /** 1 = uden måned-for-måned-opdeling. Hele markedet falder fra ~690 til ~150 KB. */
    compact?: 1;
  }) => get<FeedEstimateResponse>("/api/v1/estimate", p, [FEED_TAGS.products, FEED_TAGS.market]),

  /** Boligtyperne i forbrugsvælgeren. Hent dem — skriv dem aldrig af. */
  presets: () => get<FeedPresetsResponse>("/api/v1/presets", {}, [FEED_TAGS.products]),

  /** Rubrikken bag gennemsigtighedsscoren. Skal gengives, hvor scoren vises. */
  scoreRubric: () => get<FeedScoreRubricResponse>("/api/v1/score-rubrik", {}, [FEED_TAGS.products]),

  /**
   * Registret over anmærkninger med kilder, og grænserne bag den automatiske regel.
   * Metodesiden gengiver begge dele herfra — aldrig tal skrevet af.
   */
  advisories: () =>
    get<FeedAdvisoriesResponse>("/api/v1/advisories", {}, [FEED_TAGS.advisories, FEED_TAGS.trustpilot]),

  /** Netområde og netselskab for en adresse eller et postnummer. */
  gridArea: (p: Pick<Place, "address" | "zip" | "area">) =>
    get<FeedGridAreaResponse>("/api/v1/grid-area", p, [FEED_TAGS.market]),

  /** Dagens og morgendagens spotpriser plus tariffer og afgifter for området. */
  market: (p: Place = {}) => get<FeedMarketResponse>("/api/v1/market", p, [FEED_TAGS.market]),

  /** Friskhed og antal. Bruges af sitets audit-feed ved build. */
  health: () => get<FeedHealthResponse>("/api/v1/health", {}, []),

  /* ---- Selskabssider, netselskabssider og markedsovervågning (oktober 2026) ---- */

  /**
   * Ét selskabs aftaler i ALLE netområder ved 4.000 kWh, samlet i grupper med samme pris,
   * med prishistorik. Grundlaget for en selskabsside; `supplier()` er stadig kaldet for ét
   * område ved læserens forbrug.
   */
  supplierPrices: (slug: string) =>
    get<FeedSupplierPricesResponse>(`/api/v1/suppliers/${slug}/prices`, {}, [FEED_TAGS.supplier(slug), FEED_TAGS.products]),

  /**
   * Selskabets pris pr. kWh time for time i dag og i morgen (spot + net + Energinet +
   * elafgift + tillæg, inkl. moms). Uden `product`: hvert selskabs billigste variable aftale
   * uden betingelser. Abonnement er ikke pr. kWh og er ikke med — skriv det, hvor tallet vises.
   * `day` giver en anden dag (og dagen efter) med de satser, der gjaldt den dag; før områdets
   * historik er svaret 404 med `historyFrom`.
   */
  timepris: (p: Place & { product?: string; kwh?: number; resolution?: "hour" | "quarter"; vat?: 0 | 1; day?: string } = {}) =>
    get<FeedTimeprisResponse>("/api/v1/timepris", p, [FEED_TAGS.market, FEED_TAGS.products, FEED_TAGS.rates]),

  /**
   * Satserne, der gjaldt i netområdet en dag (standard i dag): nettarif pr. time, netabonnement,
   * Energinets led, elafgift og moms — hver med kilde, gyldighed og hentetidspunkt. Strengt
   * opslag: en dag uden nettarif i feedet er 404 med første kendte dag.
   */
  tariffer: (p: Place & { date?: string } = {}) =>
    get<FeedTarifferResponse>("/api/v1/tariffer", p, [FEED_TAGS.rates, FEED_TAGS.market]),

  /** De landsdækkende led oveni spot og nettarif på en dag: elafgift, Energinet, moms — med kilde, og kommende skift. */
  afgifter: (p: { date?: string } = {}) =>
    get<FeedAfgifterResponse>("/api/v1/afgifter", p, [FEED_TAGS.rates]),

  /**
   * Markedets pris pr. måned i netområdet, øre/kWh inkl. moms: fladt gennemsnit over månedens
   * timer af spot + nettarif + Energinet + elafgift (basis all-in, fra 2019), spot alene (basis spot) eller markedets salgspris ekskl. moms (basis sale: spot minus producenttarifferne)
   * (fra 2015), med sammenligning mod måneden før og samme måned året før. Uden `to`:
   * indeværende måned til dato; uden `from`: 24 måneder.
   */
  priserMaaned: (p: Place & { from?: string; to?: string; basis?: FeedMonthlyBasis } = {}) =>
    get<FeedMonthlyPricesResponse>("/api/v1/priser/maaned", p, [FEED_TAGS.rates, FEED_TAGS.market]),

  /**
   * Markedets pris pr. dansk dag i netområdet: fladt gennemsnit over dagens timer af spot + nettarif
   * + Energinet + elafgift inkl. moms (basis all-in), spot alene (basis spot) eller salgsprisen
   * ekskl. moms (basis sale) — med dagens billigste og dyreste time. Uden `to`: i dag; uden
   * `from`: de sidste syv dage. Højst 92 dage; `to` højst i morgen.
   */
  priserDag: (p: Place & { from?: string; to?: string; basis?: FeedMonthlyBasis } = {}) =>
    get<FeedDailyPricesResponse>("/api/v1/priser/dag", p, [FEED_TAGS.rates, FEED_TAGS.market]),

  /**
   * CO₂-udledningen fra det forbrugte el i prisområdet, g CO₂/kWh: lige nu (seneste hele kvarter),
   * dagens kvarterer, Energinets prognose for de næste timer (hele morgendagen, når den er udgivet)
   * og den grønneste time. Foreløbige tal; den endelige deklaration kommer senere. Feedet henter
   * hvert tiende minut — vis `meta.asOf` ved tallet.
   */
  co2: (p: Pick<Place, "region" | "area" | "zip"> = {}) =>
    get<FeedCo2Response>("/api/v1/co2", p, [FEED_TAGS.co2]),

  /**
   * Spotpriser bagud i tid for DK1/DK2: kvarter (op til 7 dage, fra 1. oktober 2025), time
   * (62 dage), dansk dag (400 dage) eller måned (36 måneder). øre/kWh ekskl. moms; `vat: 1`
   * lægger `oreInclVat` ved siden af. Uden `from`/`to`: i dag og i morgen (kvarter/time),
   * de sidste 30 dage (dag), de sidste 13 måneder (måned).
   */
  spot: (p: Pick<Place, "region" | "area" | "zip"> & { from?: string; to?: string; resolution?: FeedSpotResolution; vat?: 1 } = {}) =>
    get<FeedSpotResponse>("/api/v1/spot", p, [FEED_TAGS.market]),

  /** Alle netområder med gældende nettarif, abonnement og næste ændring. */
  gridAreas: () => get<FeedGridAreasResponse>("/api/v1/grid-areas", {}, [FEED_TAGS.market]),

  /**
   * Ét netområde: postnumre, tarifperioder (seneste 12 måneder, nu og kommende), afgifter og
   * et eksempelår. Ikke det samme som `gridArea()`, der slår et postnummer op.
   */
  gridAreaDetail: (code: string) =>
    get<FeedGridAreaDetailResponse>(`/api/v1/grid-areas/${code}`, {}, [FEED_TAGS.market]),

  /**
   * Markedets ændringer, nyeste først: priser, aftaler til og fra, Trustpilot, tarifperioder,
   * landsdækkende satser og anmærkninger. `since`/`until` som danske dage (until inklusive).
   */
  changes: (p: { since?: string; until?: string; kind?: FeedChangeKind[]; supplier?: string; area?: string; limit?: number } = {}) =>
    get<FeedChangesResponse>(
      "/api/v1/changes",
      { ...p, kind: p.kind?.join(",") },
      [FEED_TAGS.products, FEED_TAGS.trustpilot, FEED_TAGS.market, FEED_TAGS.advisories],
    ),

  /** Krydstjek pr. selskab: tjek, stemmer, afvigelser og åbne afvigelser med kilde. */
  verifications: (p: { days?: number } = {}) =>
    get<FeedVerificationsResponse>("/api/v1/verifications/summary", p, [FEED_TAGS.products]),

  /** Månedsrapport for en afsluttet måned ("2026-10"). 404 for en måned, der ikke er slut. */
  report: (month: string) => get<FeedReportResponse>(`/api/v1/reports/${month}`, {}, [FEED_TAGS.reports]),

  /** Husholdningernes elpris pr. måned (Forsyningstilsynet, 4.000 kWh/år, øre/kWh inkl. moms) — DK1, DK2 eller hele landet; standard de seneste 120 måneder. */
  historyHousehold: (p: { region?: HistoryArea; from?: string; to?: string } = {}) =>
    get<FeedHouseholdHistoryResponse>("/api/v1/history/household", p, [FEED_TAGS.history]),

  /** Spotprisen pr. måned siden 2015 for prisområdet (øre/kWh ekskl. moms; `vat: 1` lægger inkl. moms ved siden af). */
  historySpot: (p: Pick<Place, "region" | "area" | "zip"> & { from?: string; to?: string; vat?: 1 } = {}) =>
    get<FeedSpotHistoryResponse>("/api/v1/history/spot", p, [FEED_TAGS.history]),

  /** Danmarks Statistiks ENERGI1 pr. halvår for ét forbrugsbånd (standard 3 = 2,5–4,9 MWh), kr./kWh. */
  historyDst: (p: { band?: string } = {}) => get<FeedDstHistoryResponse>("/api/v1/history/dst", p, [FEED_TAGS.history]),
};
