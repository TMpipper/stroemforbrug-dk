/**
 * Feedets offentlige kontrakt.
 *
 * Denne fil importerer INTET. Den kan kopieres uændret ind i et site, der ikke deler
 * monorepo med feedet — og det gør fem af de seks elsider. Uden den fik de `any` tilbage
 * fra hvert kald, og et omdøbt felt ville først vise sig som et tomt felt på siden.
 *
 * DENNE FIL ER EN KOPI af el-feed/src/lib/dto.ts. Ret den ikke her — ret den i feedet og
 * kopiér igen. Feedet har en kontraktkontrol nederst i src/lib/feed.ts, som fejler ved
 * oversættelse, hvis svarene holder op med at passe på typerne.
 *
 * Alle beløb er INKL. moms, medmindre feltnavnet siger andet. Beløb i kroner er kroner,
 * øre er øre — enheden står i feltnavnet, aldrig kun i en kommentar.
 */

export type PriceArea = "DK1" | "DK2";
export type ProductType = "variable" | "fixed";
export type VerificationStatus = "unverified" | "verified" | "mismatch" | "stale";
export type FeeKind = "per_kwh" | "monthly" | "payment_monthly" | "switch_penalty";

export interface FeedTrustpilot {
  trustScore: number | null;
  stars: number | null;
  reviewCount: number | null;
  /** Trustpilots retningslinjer kræver et link tilbage, hver gang scoren vises. */
  profileUrl: string | null;
  /** Tidspunktet for sidste VELLYKKEDE hentning. Rykker sig aldrig ved en fejl. */
  updatedAt: string | Date | null;
}

/**
 * Vores egen vurdering af, hvor godt selskabet oplyser sin pris. 0-100.
 *
 * Ikke en vurdering af kundeservice — det er Trustpilots felt — og ikke en vurdering af
 * selskabet som sådan. Hver faktor er kontrolleret i data, og rubrikken er offentlig.
 * Vises scoren, skal `factors` kunne slås op samme sted.
 */
export interface FeedTransparency {
  score: number;
  factors: { code: string; label: string; weight: number; share: number }[];
  computedAt: string | Date | null;
}

export type FeedAdvisoryLevel = "obs" | "fraraades";
export type FeedAdvisoryCategory =
  | "myndighed" | "konkurs" | "overfakturering" | "klager" | "telefonsalg"
  | "vildledning" | "gebyrer" | "produktskifte" | "test" | "anmeldelser";

/** Én dokumenteret grund. Alt her gengives ordret på siderne — derfor kilde, link og dato. */
export interface FeedAdvisoryReason {
  category: FeedAdvisoryCategory;
  title: string;
  /** Faktuel tekst med datoen skrevet i teksten. Aldrig en pris eller en score i tal. */
  detail: string;
  sourceName: string;
  sourceUrl: string;
  /** ISO-dato for kildens dokument eller afgørelse. */
  sourceDate: string;
  /** Kun på den automatiske Trustpilot-grund: tallene bag, så sitet formaterer selv. */
  metrics?: { trustScore: number; reviewCount: number };
}

/**
 * Anmærkning på et selskab — vores eget register, aldrig en tredjeparts vurdering.
 *
 * `fraraades` sættes kun ved myndighedsafgørelser, insolvens eller dokumenteret
 * overfakturering; `obs` ved mindre alvorlige, dokumenterede forhold og ved den
 * automatiske Trustpilot-regel. Kriterierne står på sitesnes metodeside, og reglen bag
 * den automatiske anmærkning står i `FeedAdvisoriesResponse.meta.rules`.
 */
export interface FeedAdvisory {
  level: FeedAdvisoryLevel;
  /** Én sætning i vores egen stemme, højst 200 tegn. */
  summary: string;
  since: string;
  /** Datoen, anmærkningen vurderes igen. Den automatiske bortfalder med aflæsningen. */
  reviewAt: string;
  /** true når KUN Trustpilot-reglen udløste anmærkningen. */
  automatic: boolean;
  reasons: FeedAdvisoryReason[];
}

export interface FeedAdvisoryRules {
  trustpilot: { maxScore: number; minReviews: number };
}

export interface FeedAdvisoriesResponse {
  meta: { count: number; generatedAt: string; rules: FeedAdvisoryRules };
  items: { supplier: { slug: string; name: string }; advisory: FeedAdvisory }[];
}

/* ------------------------------------------------------------------ */
/* Selskabsfakta                                                       */
/* ------------------------------------------------------------------ */

/**
 * included = oprindelsesgarantier er med i selve aftalen · addon = et tilvalg · none =
 * selskabet tilbyder det ikke · unknown = ikke bekræftet hos selskabet. "unknown" vises
 * som "under afklaring" — aldrig som "nej", og aldrig som "ja".
 */
export type FeedOriginGuaranteeStatus = "included" | "addon" | "none" | "unknown";

/**
 * Det, sitesne ellers havde tastet ind i prosa om et selskab: EPSI-scoren, om
 * oprindelsesgarantier er med i prisen, og om selskabet er kundeejet. Hver påstand bærer
 * sin kilde (https) og datoen, den blev læst; er kilden ukendt, er feltet null eller
 * "unknown". Ingen af felterne er et tal, feedet selv regner ud — de er læst hos EPSI,
 * selskabet eller CVR og skal genlæses mindst én gang om året.
 */
export interface FeedSupplierFacts {
  /** EPSI Rating Danmark, elmarkedet privatkunder — kun det, EPSI selv har offentliggjort. */
  epsi: { score: number | null; rank: number | null; year: number; sourceUrl: string; note: string | null } | null;
  originGuarantee: {
    status: FeedOriginGuaranteeStatus;
    /** included: aftalen selv · addon: den grønne variant i feedet (produkt-slug). */
    productSlug: string | null;
    /** addon: den almindelige variant, tilvalget måles imod (produkt-slug). */
    baseProductSlug: string | null;
    /** øre/kWh inkl. moms — KUN når tilvalget ikke er et selvstændigt produkt i feedet. */
    addonOreInclVat: number | null;
    note: string | null;
    sourceUrl: string | null;
    verifiedAt: string | null;
  };
  ownership: {
    /** null = ukendt. */
    customerOwned: boolean | null;
    /** Selskabets egen betegnelse: a.m.b.a., erhvervsdrivende fond, A/S … */
    form: string | null;
    note: string | null;
    sourceUrl: string | null;
    verifiedAt: string | null;
  };
  foundedYear: number | null;
  customers: { count: number; asOf: string; sourceUrl: string } | null;
  updatedAt: string | Date;
}

export interface FeedSupplierRef {
  slug: string;
  name: string;
  homepageUrl: string | null;
  /** Spejlet hos os, ikke hos kilden. Indholdets hash står i adressen. */
  logoUrl: string | null;
  trustpilot: FeedTrustpilot | null;
  transparency: FeedTransparency | null;
  /** Anmærkning fra vores register, eller null. Se FeedAdvisory. */
  advisory: FeedAdvisory | null;
  /** Selskabsfakta (EPSI, oprindelsesgarantier, ejerskab). Valgfri på produktrækker; fuld på /suppliers. */
  facts?: FeedSupplierFacts | null;
}

export interface FeedSupplier {
  slug: string;
  name: string;
  cvr: string | null;
  homepageUrl: string | null;
  logoUrl: string | null;
  productCount: number;
  trustpilot: FeedTrustpilot | null;
  transparency: FeedTransparency | null;
  advisory: FeedAdvisory | null;
  /** Selskabsfakta med kilde og dato pr. påstand, eller null når ingen er registreret. */
  facts: FeedSupplierFacts | null;
}

export interface FeedFee {
  name: string;
  kind: FeeKind;
  amountInclVat: number;
  unit: "øre/kWh" | "kr/md" | "kr";
}

export interface FeedPrices {
  /** Variable: tillæg til spot. Faste: hele energiprisen. */
  energyOreInclVat: number;
  energyOreExVat: number;
  spotBased: boolean;
  perKwhFeesOreInclVat: number;
  subscriptionKrMonthInclVat: number;
  monthlyFeesKrMonthInclVat: number;
  cheapestPaymentMethod: string | null;
  paymentFeesKrYearInclVat: number;
  validFrom: string;
  validTo: string | null;
}

export interface FeedSupplierCost {
  annualInclVat: number;
  monthlyInclVat: number;
  /**
   * Tallet der rangeres efter. For faste produkter er selskabets præmie over forventet
   * spotpris trukket fra, og for produkter med indbygget nettarif er tariffen trukket fra,
   * så alle rækker måler det samme. Begge fradrag er skøn — se `comparableIsEstimate`.
   */
  comparableAnnualInclVat: number;
  comparableIsEstimate: boolean;
}

export interface FeedProduct {
  rank: number;
  id: number;
  slug: string;
  name: string;
  supplier: FeedSupplierRef;
  type: ProductType;
  billing: string | null;
  bindingMonths: number;
  introOffer: boolean;
  offer: string | null;
  /**
   * Betingelser for overhovedet at kunne få aftalen — fagforeningsmedlemskab,
   * studiekort, feriebolig, ladeboks. Står der noget her, SKAL det vises sammen med
   * prisen, og aftalen må ikke kaldes markedets billigste.
   */
  eligibility: string | null;
  /** Kortform af `eligibility`: aftalen er ikke åben for enhver. */
  restricted: boolean;
  /**
   * Hvad et introtilbud går over i. Er den sat, er `estimate` regnet med prisen
   * bagefter; er den null, gælder introprisen hele perioden i estimatet, og aftalen
   * kan ikke sammenlignes ærligt med en varig.
   */
  nextProduct: { slug: string; name: string } | null;
  /** Hvor ofte en variabel pris justeres: "Hvert kvartal", "Hver måned", … */
  priceUpdateInterval: string | null;
  /** Opsigelsesvarsel, selskabets egen tekst. */
  termination: string | null;
  /** Depositum i kr. inkl. moms. */
  depositKrInclVat: number | null;
  /** Antal betalinger om året — 12 eller 4. Kvartalsvis betaling er en reel forskel. */
  numberOfPayments: number | null;
  /** Kontant velkomstrabat i kroner, som kunden får den. Ikke et beløb, moms lægges til. */
  firstTimeDiscountKr: number;
  paymentType: string | null;
  paymentDescription: string | null;
  deliveryStart: string | null;
  deliveryEnd: string | null;
  /** Andel vedvarende energi, 0..1, som selskabet har indberettet den. */
  sustainableShare: number | null;
  /**
   * Hvor aftalen kommer fra. "elpris": indberettet til Forsyningstilsynets portal, som alt
   * andet. "partner": et tilbud, selskabet giver via sitets eget link — vilkårene er læst på
   * selskabets tilbudsside (`offerUrl`), ikke på elpris.dk. Skal mærkes på siden.
   */
  origin: "elpris" | "partner";
  offerUrl: string | null;
  /**
   * Sidste dag med intropris, regnet fra i dag — for et introtilbud med kendt efterfølger.
   * For et introtilbud uden efterfølger er det prisens egen slutdato, hvis kilden har en.
   * Null for alt andet. Brug denne, ikke `prices.validTo`, når du skriver "gælder til".
   */
  introEnds: string | null;
  prices: FeedPrices;
  fees: FeedFee[];
  supplierCost: FeedSupplierCost;
  links: { order: string | null; readMore: string | null; fees: string | null };
  verification: {
    status: VerificationStatus;
    lastVerifiedAt: string | Date | null;
    /** Tal fra kilden, der ser ud som indberetningsfejl. Se pricing.qualityFlags. */
    qualityFlags: string[];
  };
  warning: string | null;
  source: { name: string; lastUpdate: string | null; changedAt: string | Date | null };
}

export interface FeedArea {
  gridArea: string;
  ambiguous: boolean;
  candidates: string[];
  gridCompany: string | null;
  /** Området er landsdelens repræsentative, ikke læserens eget. Skal skrives på siden. */
  regionRepresentative: boolean;
}

export interface FeedListMeta {
  gridArea: string;
  priceArea: PriceArea | null;
  kwh: number;
  profile: string;
  expectedSpotOreInclVat: number | null;
  count: number;
  generatedAt: string;
  /** Metodesætningen. Skal vises, hvor rangeringen vises. */
  note: string;
  area: FeedArea;
  /** Det valgte forbrug som boligtype, hvis kaldet brugte et. */
  preset: string | null;
}

export interface FeedProductsResponse {
  meta: FeedListMeta;
  items: FeedProduct[];
}

export interface FeedMonthEstimate {
  month: string;
  kwh: number;
  spotOre: number;
  supplierKr: number;
  spotKr: number;
  gridKr: number;
  energinetKr: number;
  taxKr: number;
  vatKr: number;
  totalInclVat: number;
  /** Hvor spotprisen for måneden kommer fra, i klar tekst. */
  spotBasis: string;
  /** Sat, når måneden dækker både introprisen og prisen bagefter. 0..1. */
  introShare?: number;
}

export interface FeedEstimateProduct extends FeedProduct {
  estimate: {
    /** Udeladt når kaldet er `compact=1`. Totalerne er der altid. */
    months?: FeedMonthEstimate[];
    totalInclVat: number;
    averageMonthlyInclVat: number;
  };
}

export interface FeedEstimateResponse {
  meta: FeedListMeta & {
    months: { month: string; spotBasis: string }[];
    /** Hvor mange måneder totalen dækker. Skriv ALDRIG "kr/år" om en 6-måneders total. */
    periodMonths: number;
    compact: boolean;
  };
  items: FeedEstimateProduct[];
}

/** Boligtyperne i forbrugsvælgeren. Samme liste på alle sider — hentes, skrives ikke af. */
export interface FeedPreset {
  key: string;
  label: string;
  kwh: number;
  /** Forbrugsprofilens id. En varmepumpe bruger strømmen, når spotprisen er høj. */
  profileId: string;
  electricHeating: boolean;
}

export interface FeedPresetsResponse {
  meta: { count: number; generatedAt: string };
  items: FeedPreset[];
}

/** Rubrikken bag gennemsigtighedsscoren. Skal kunne gengives, hvor scoren vises. */
export interface FeedScoreRubricResponse {
  meta: { totalWeight: number };
  items: { code: string; label: string; description: string; weight: number }[];
}

export interface FeedFeaturedItem {
  position: number;
  /** Altid true. En fremhævet plads er betalt placering og skal mærkes som reklame. */
  sponsored: true;
  headline: string | null;
  badge: string | null;
  bullets: string[];
  ctaLabel: string;
  campaignTerms: string | null;
  /** Selskabets egen farve som kortets kant — kun pynt, ingen påstand. */
  accentColor: string | null;
  ctaUrl: string | null;
  product: FeedProduct;
}

export interface FeedFeaturedResponse {
  meta: { area: FeedArea };
  /** Den lovpligtige oplysning om, at pladserne er betalte. Vises sammen med blokken. */
  disclosure: string;
  items: FeedFeaturedItem[];
}

export interface FeedSuppliersResponse {
  meta: { count: number; generatedAt: string };
  items: FeedSupplier[];
}

export interface FeedSupplierResponse {
  meta: FeedListMeta;
  supplier: FeedSupplier;
  products: FeedProduct[];
}

export interface FeedGridAreaResponse extends FeedArea {
  priceArea: PriceArea | null;
}

export interface FeedMarketResponse {
  meta: { area: FeedArea; priceArea: PriceArea; unit: string };
  spot: { ts: string; ore: number }[];
  thisMonth: {
    month: string;
    spotHourlyOre: number[];
    spotBasis: string;
    gridTariffHourlyKr: number[];
    gridSubscriptionKrMonth: number;
    transmissionKr: number;
    systemKr: number;
    elAfgiftKr: number;
    tsoSubscriptionKrMonth: number;
  };
}

export interface FeedHealthResponse {
  ok: boolean;
  generatedAt: string;
  counts: { suppliers: number; products: number; verified: number };
  dataAsOf: { products: string | null; spot: string | null; trustpilot: string | null; tariffs: string | null; allinMonthly: string | null };
}

export interface FeedError {
  error: string;
  candidates?: string[];
}

/* ------------------------------------------------------------------ */
/* Selskabets priser i alle netområder — /suppliers/[slug]/prices       */
/* ------------------------------------------------------------------ */

/**
 * Et produkts pris, sammenfattet til det, en læser sammenligner på: forbrugsvægtet
 * energipris (variabel: tillægget; fast: hele energiprisen) og abonnement, ved 4.000 kWh.
 * Gyldighedsdatoerne følger med, men er ikke en del af prisen — en forlænget `validTo`
 * er ikke en prisændring.
 */
export interface FeedPriceDigest {
  /** øre/kWh ekskl. moms, forbrugsvægtet ved feedets referenceforbrug */
  energyOreExVat: number;
  energyOreInclVat: number;
  subscriptionKrMonthInclVat: number;
  spotBased: boolean;
  validFrom: string;
  validTo: string | null;
}

/** Ét produkts pris i ét netområde. */
export interface FeedAreaPrice extends FeedPriceDigest {
  gridArea: string;
  priceArea: PriceArea | null;
  /** Kildens egen dato for prisen (elpris.dk `lastUpdate`). */
  sourceLastUpdate: string | null;
  /** Hvornår feedet sidst så prisen i dette område ændre sig. */
  changedAt: string | Date;
}

/** Netområder med samme pris, samlet — "prisen varierer i k netområder" skrives herfra. */
export interface FeedAreaPriceGroup {
  energyOreInclVat: number;
  subscriptionKrMonthInclVat: number;
  spotBased: boolean;
  areas: string[];
}

/**
 * Én prisændring på et produkt, samlet over de netområder den ramte samme danske dag.
 * Rækker, hvor kun gyldighedsdatoer eller kildens `lastUpdate` flyttede sig, er ikke med.
 */
export interface FeedPriceHistoryItem {
  day: string;
  at: string | Date;
  areas: string[];
  from: FeedPriceDigest;
  to: FeedPriceDigest;
  /** øre/kWh inkl. moms; positivt = dyrere. */
  energyDeltaOreInclVat: number;
  /** kr/md inkl. moms; positivt = dyrere. */
  subscriptionDeltaKrInclVat: number;
  direction: "up" | "down" | "mixed";
}

export interface FeedSupplierPriceProduct {
  id: number;
  slug: string;
  name: string;
  type: ProductType;
  billing: string | null;
  bindingMonths: number;
  introOffer: boolean;
  nextProduct: { slug: string; name: string } | null;
  /** Introperiodens længde i dage fra kilden, når den er indberettet. */
  introDays: number | null;
  deliveryEnd: string | null;
  eligibility: string | null;
  restricted: boolean;
  paymentType: string | null;
  numberOfPayments: number | null;
  depositKrInclVat: number | null;
  firstTimeDiscountKr: number;
  priceUpdateInterval: string | null;
  termination: string | null;
  /** Kildens egen erklæring. Alle produkter på elpris.dk melder den samme generelle deklaration. */
  sustainableShare: number | null;
  energySources: Record<string, number> | null;
  origin: "elpris" | "partner";
  fees: FeedFee[];
  links: { order: string | null; readMore: string | null; fees: string | null };
  verification: { status: VerificationStatus; lastVerifiedAt: string | Date | null };
  firstSeenAt: string | Date;
  /** Seneste prisændring på tværs af netområder. */
  pricesChangedAt: string | Date | null;
  /** Ét element pr. netområde, produktet er indberettet i. */
  areaPrices: FeedAreaPrice[];
  areaPriceVaries: boolean;
  areaPriceGroups: FeedAreaPriceGroup[];
  /** Prisændringer i feedets historik (`meta.historyDays`), nyeste først. */
  history: FeedPriceHistoryItem[];
}

export interface FeedSupplierPricesResponse {
  meta: {
    kwh: number;
    profile: string;
    areaCount: number;
    historyDays: number;
    generatedAt: string;
    /** Metodesætningen for tallene. Skal vises, hvor tabellen vises. */
    note: string;
  };
  supplier: FeedSupplier;
  products: FeedSupplierPriceProduct[];
}

/* ------------------------------------------------------------------ */
/* Timepris — /timepris                                                 */
/* ------------------------------------------------------------------ */

/** Én dansk time. Alle beløb i øre/kWh INKL. moms; komponenterne summer til `totalOre`. */
export interface FeedTimeprisHour {
  /** Tidsrummets start i dansk tid med offset, fx "2026-10-01T17:00:00+02:00" (kvarter: "…T17:15:00+02:00"). */
  start: string;
  /** Timen på døgnet, 0–23, dansk tid. */
  hour: number;
  /** Kun med `resolution=quarter`: kvarterets start i timen. Udeladt for en hel time. */
  minute?: 0 | 15 | 30 | 45;
  /** Spotprisen. 0 for en fastprisaftale — dens energipris står i `markupOre`. */
  spotOre: number;
  gridOre: number;
  /** Energinets transmission og system plus elafgift. */
  chargesOre: number;
  /** Selskabets tillæg og gebyrer pr. kWh (variabel) eller hele energiprisen (fast). */
  markupOre: number;
  totalOre: number;
  /**
   * Markedets salgspris: det, en husstand får for en kWh, den sender ud på nettet — spotprisen
   * EKSKL. moms minus netselskabets indfødningstarif og Energinets balancetarif for produktion,
   * før elselskabets fradrag. Står uden for summen af delene ovenfor, altid ekskl. moms uanset
   * `vat`, og null, når netselskabet ikke har indberettet en indfødningstarif for området.
   */
  saleOre: number | null;
}

export interface FeedTimeprisDay {
  day: string;
  hours: FeedTimeprisHour[];
  minOre: number;
  maxOre: number;
  avgOre: number;
  /** De tre billigste og dyreste timer på døgnet (timenummer, uden gentagelser). */
  cheapestHours: number[];
  dearestHours: number[];
  /** Kun med `resolution=quarter`: de tre billigste tidsrums `start`. */
  cheapestStarts?: string[];
  /** Salgsprisens døgn (ekskl. moms) — null, når området ingen indfødningstarif har. */
  sale: { minOre: number; maxOre: number; avgOre: number; bestHours: number[]; worstHours: number[] } | null;
}

export interface FeedTimeprisItem {
  /** Anmærkningen følger med: et selskab med en står for sig, og et frarådet får aldrig en knap. */
  supplier: { slug: string; name: string; advisory: FeedAdvisory | null };
  product: { slug: string; name: string; type: ProductType; spotBased: boolean; restricted: boolean; introOffer: boolean };
  /** Tillæg + gebyrer pr. kWh ved referenceforbruget, øre/kWh inkl. moms, forbrugsvægtet over døgnet. */
  markupOreInclVat: number;
  markupOreExVat: number;
  today: FeedTimeprisDay;
  tomorrow: FeedTimeprisDay | null;
  /** Den aktuelle time med selskabets tillæg — eller null uden for dagens spotdata. */
  now: FeedTimeprisHour | null;
}

export interface FeedTimeprisResponse {
  meta: {
    area: FeedArea;
    priceArea: PriceArea;
    kwh: number;
    profile: string;
    /** Den aktuelle danske time, som `now` er regnet for. */
    nowHour: string;
    /** Seneste spotpris i databasen. */
    spotAsOf: string | null;
    tomorrowAvailable: boolean;
    /** Med `vat=0` er alle beløb i `hours[]` ekskl. moms. */
    vat: 0 | 1;
    unit: "øre/kWh inkl. moms" | "øre/kWh ekskl. moms";
    /** Kreditering, som Energi Data Services CC BY 4.0 kræver. */
    attribution: string;
    /**
     * Opløsningen i `hours[]`: "hour" (standard) eller "quarter" (15 minutter, kun fra
     * 1. oktober 2025 — en ældre dag falder tilbage til "hour", og feltet siger det).
     */
    resolution: "hour" | "quarter";
    /** Sat når `items` er udeladt: `resolution=quarter` uden `product` giver kun markedets stak. */
    itemsOmitted?: string;
    generatedAt: string;
    note: string;
  };
  /** Markedets stak uden selskabets tillæg: spot + nettarif + Energinet + elafgift. */
  market: { today: FeedTimeprisDay; tomorrow: FeedTimeprisDay | null; now: FeedTimeprisHour | null };
  /** Dagens satser bag stakken med kilde, gyldighed og hentetidspunkt — én sats pr. led. */
  rates: { today: FeedRateSet; tomorrow: FeedRateSet | null };
  items: FeedTimeprisItem[];
}

/* ---------------------------------- Spot bagud i tid ---------------------------------- */

export type FeedSpotResolution = "quarter" | "hour" | "day" | "month";

export interface FeedSpotPoint {
  /** Kvarter/time: ISO med dansk offset. Dag: "YYYY-MM-DD". Måned: "YYYY-MM". */
  start: string;
  /** Gennemsnitlig spotpris i tidsrummet, øre/kWh ekskl. moms. */
  ore: number;
  /** Kun med `vat=1`. */
  oreInclVat?: number;
  /** Laveste og højeste underliggende pris i tidsrummet (dag og måned). */
  minOre?: number;
  maxOre?: number;
  /** Antal kilderækker bag punktet (kvarter: 1). */
  n: number;
}

export interface FeedSpotResponse {
  meta: {
    priceArea: PriceArea;
    resolution: FeedSpotResolution;
    /** Vinduet som danske dage, begge inklusive. */
    from: string;
    to: string;
    unit: "øre/kWh ekskl. moms";
    /** Momsfaktoren på vinduets sidste dag — fra momsloven, ikke et fast tal. */
    vatFactor: number;
    /** Kildens opløsning i vinduet: kvarter fra 1. oktober 2025, timer før, "mixed" hen over skiftet. */
    nativeResolution: "quarter" | "hour" | "mixed";
    /** Seneste spotpris i databasen for området. */
    spotAsOf: string | null;
    generatedAt: string;
    note: string;
  };
  points: FeedSpotPoint[];
  summary: { minOre: number; maxOre: number; avgOre: number; minStart: string; maxStart: string } | null;
}

/* ---------------------------------- Historik: år tilbage ---------------------------------- */

/** Landsdel eller hele landet — Forsyningstilsynets statistik findes for alle tre. */
export type HistoryArea = "DK1" | "DK2" | "DK";
/** Komponentsættet bag en måned: Elpris.dk-serien fra april 2016 eller forsyningspligtserien 2005–marts 2016. */
export type HouseholdSeriesKey = "elpris_2016" | "forsyningspligt_2005";

/** Et metodebrud i serien — står ved tallene, hvor de vises. */
export interface FeedHistoryBreak {
  /** Første måned, bruddet gælder fra. */
  month: string;
  note: string;
  sourceUrl: string | null;
}

/** Én måned i Forsyningstilsynets statistik: husholdning med 4.000 kWh om året, øre/kWh. Delene er ekskl. moms; momsen står for sig. */
export interface FeedHouseholdHistoryPoint {
  month: string;
  series: HouseholdSeriesKey;
  totalOreInclVat: number;
  totalOreExVat: number;
  vatOre: number;
  energyOreExVat: number;
  supplierSubscriptionOreExVat: number;
  gridTariffOreExVat: number;
  gridSubscriptionOreExVat: number;
  energinetOreExVat: number;
  psoOreExVat: number;
  elAfgiftOreExVat: number;
  /** Eldistributionsafgift, elsparebidrag og CO2-afgift — kun i den gamle serie. */
  otherTaxesOreExVat: number;
}

export interface FeedHouseholdHistorySummary {
  latest: { month: string; totalOreInclVat: number };
  /** Samme måned året før — null, hvis vinduet ikke rækker. */
  yearAgo: { month: string; totalOreInclVat: number } | null;
  changeOreInclVat: number | null;
  /** Ændring i procent af prisen året før, afrundet til én decimal. */
  changePct: number | null;
  max: { month: string; totalOreInclVat: number };
  min: { month: string; totalOreInclVat: number };
  /** Kalenderår i vinduet; `months` < 12 betyder et ufuldstændigt år. */
  yearly: { year: number; months: number; avgOreInclVat: number; minMonth: string; maxMonth: string }[];
}

export interface FeedHouseholdHistoryResponse {
  meta: {
    region: HistoryArea;
    /** Vinduet som måneder, begge inklusive. */
    from: string;
    to: string;
    unit: "øre/kWh inkl. moms";
    /** Grundlaget: årligt forbrug, abonnementer regnet om pr. kWh. */
    kwh: number;
    series: HouseholdSeriesKey[];
    breaks: FeedHistoryBreak[];
    source: { name: string; url: string; vintage: string | null };
    generatedAt: string;
    note: string;
  };
  points: FeedHouseholdHistoryPoint[];
  summary: FeedHouseholdHistorySummary | null;
}

/** Spotprisen pr. dansk måned: gennemsnit af timerne, øre/kWh ekskl. moms. */
export interface FeedSpotHistoryPoint {
  month: string;
  avgOre: number;
  /** Kun med `vat=1`. */
  avgOreInclVat?: number;
  minOre: number;
  maxOre: number;
  hours: number;
  hoursAtOrBelowZero: number;
  /** Mindst 25 døgns timer bag måneden. */
  complete: boolean;
}

export interface FeedSpotHistoryResponse {
  meta: {
    priceArea: PriceArea;
    from: string;
    to: string;
    unit: "øre/kWh ekskl. moms";
    vatFactor: number;
    /** Første måned i serien. */
    historyFrom: string;
    generatedAt: string;
    note: string;
  };
  points: FeedSpotHistoryPoint[];
  summary: { minOre: number; maxOre: number; avgOre: number; minMonth: string; maxMonth: string } | null;
}

/** Danmarks Statistik ENERGI1 for ét forbrugsbånd: de fire prisdefinitioner pr. halvår, kr. pr. kWh. Kun totalen er inkl. moms. */
export interface FeedDstHistoryPoint {
  /** "2025H2" */
  period: string;
  fromMonth: string;
  toMonth: string;
  energyKrPerKwhExVat: number | null;
  withNetworkKrPerKwhExVat: number | null;
  withTaxesKrPerKwhExVat: number | null;
  totalKrPerKwhInclVat: number | null;
}

export interface FeedDstHistoryResponse {
  meta: {
    band: string;
    bandLabel: string;
    unit: "kr./kWh";
    definitions: { code: string; label: string }[];
    /** Årgangen hos Danmarks Statistik. */
    updated: string | null;
    source: { name: string; url: string };
    generatedAt: string;
    note: string;
  };
  points: FeedDstHistoryPoint[];
}

/* ------------------------------------------------------------------ */
/* Satser med kilde — /tariffer, /afgifter, /priser/maaned, timepris.rates */
/* ------------------------------------------------------------------ */

export interface FeedRateSource {
  name: string;
  url: string;
}

/** Hver sats bærer sin kilde, sin gyldighed og hvornår feedet hentede den. */
export interface FeedRateProvenance {
  /** Kildens egen kode for satsen (DataHubs ChargeTypeCode, "moms", "elafgift"). */
  code: string;
  validFrom: string | Date;
  validTo: string | Date | null;
  source: FeedRateSource;
  /** Sidst hentet hos kilden. */
  fetchedAt: string | Date;
  /** Første gang netop denne udgave af satsen blev set. */
  recordedAt: string | Date;
}

export interface FeedVatRate extends FeedRateProvenance {
  /** 0.25 */
  rate: number;
  /** 1.25 */
  factor: number;
}

export interface FeedRatedTariff extends FeedRateProvenance {
  status: FeedPeriodStatus;
  hourlyOreExVat: number[];
  hourlyOreInclVat: number[];
  bands: FeedTariffBand[];
}

export interface FeedRatedSubscription extends FeedRateProvenance {
  krMonthExVat: number;
  krMonthInclVat: number;
}

export interface FeedRatedCharge extends FeedRateProvenance {
  chargeType: string;
  oreExVat: number;
  oreInclVat: number;
}

export interface FeedRatedMonthlyCharge extends FeedRateProvenance {
  chargeType: string;
  krMonthExVat: number;
  krMonthInclVat: number;
}

/** Elafgiften: DataHubs række, når Energinet har indberettet perioden, ellers Skattestyrelsens sats — og krydstjekket mellem dem. */
export interface FeedRatedTax extends FeedRateProvenance {
  oreExVat: number;
  oreInclVat: number;
  origin: "datahub" | "skattestyrelsen" | "fallback";
  crossCheck: { datahubOreExVat: number | null; skattestyrelsenOreExVat: number | null; agrees: boolean | null };
}

/** Satserne bag én dags pris i ét netområde. Alle øre/kWh; abonnementer kr/md. */
export interface FeedRateSet {
  /** Den danske dag, satserne er slået op for. */
  date: string;
  vat: FeedVatRate | null;
  grid: {
    tariffs: FeedRatedTariff[];
    /** Summen af områdets tarifkomponenter pr. dansk time. */
    hourlyOreExVat: number[];
    hourlyOreInclVat: number[];
    subscriptions: FeedRatedSubscription[];
    subscriptionKrMonthExVat: number;
    subscriptionKrMonthInclVat: number;
  };
  energinet: {
    transmission: FeedRatedCharge | null;
    system: FeedRatedCharge | null;
    /** Balancetarif for forbrug — opkrævet til og med 2022, null derefter. */
    balance: FeedRatedCharge | null;
    /** PSO-tariffens komponenter — opkrævet til og med juni 2022, tom derefter. */
    pso: FeedRatedCharge[];
    tsoSubscription: FeedRatedMonthlyCharge | null;
  };
  /**
   * Producentsiden — det, der trækkes fra spotprisen for en kWh, husstanden sælger. Netselskabets
   * indfødningstarif (flad, én eller flere rækker: lokal + regional, tarif + rabat) og Energinets
   * balancetarif for produktion (kode 45012). Energinets indfødningstarif (0,5 øre) har ingen kode i
   * DataHub og er derfor ikke med. `feedInOreExVat` er null, når netselskabet ikke har indberettet en.
   */
  producer: {
    feedIn: FeedRatedCharge[];
    feedInOreExVat: number | null;
    balance: FeedRatedCharge | null;
    /** feedIn + balance, øre/kWh ekskl. moms — null, når indfødningstariffen eller balancetariffen mangler for tidspunktet. */
    deductionOreExVat: number | null;
  };
  elafgift: { normal: FeedRatedTax | null; reduced: FeedRatedTax | null };
  /** Kreditering, som Energi Data Services CC BY 4.0 kræver. */
  attribution: string;
}

export interface FeedUpcomingRateChange {
  kind: "grid-tariff" | "grid-subscription" | "grid-feedin" | "transmission" | "system" | "balance" | "balanceProduction" | "pso" | "tsoSubscription" | "elafgift" | "elafgiftReduceret" | "vat";
  code: string;
  validFrom: string | Date;
  oreExVat?: number;
  krMonthExVat?: number;
  rate?: number;
  source: FeedRateSource;
}

export interface FeedTarifferResponse {
  meta: {
    area: FeedArea;
    priceArea: PriceArea | null;
    gridCompany: string | null;
    date: string;
    unit: { tariff: "øre/kWh"; subscription: "kr/md" };
    /** Første dag, feedet har en nettarif for området. */
    historyFrom: string | null;
    attribution: string;
    generatedAt: string;
    note: string;
  };
  rates: FeedRateSet;
  /** Alt undtagen spot og selskabets tillæg, pr. dansk time. */
  withoutSpot: { hourlyOreExVat: number[]; hourlyOreInclVat: number[] };
  upcoming: FeedUpcomingRateChange[];
}

export interface FeedAfgifterResponse {
  meta: { date: string; attribution: string; generatedAt: string; note: string };
  vat: FeedVatRate | null;
  elafgift: FeedRateSet["elafgift"];
  energinet: FeedRateSet["energinet"];
  /** Energinets tariffer + elafgift pr. kWh — det, der kommer oveni spot og nettarif overalt i landet. */
  perKwh: { oreExVat: number; oreInclVat: number };
  /** Salgssiden: Energinets balancetarif for produktion (`45012`) — det, en producent betaler pr. kWh, der sælges. Netselskabets indfødningstarif står i `/tariffer`. */
  producer: { balance: FeedRatedCharge | null };
  upcoming: FeedUpcomingRateChange[];
}

/** all-in: markedets købspris inkl. moms · spot: spotprisen alene inkl. moms · sale: markedets salgspris ekskl. moms. */
export type FeedMonthlyBasis = "all-in" | "spot" | "sale";

export interface FeedMonthlyDelta {
  month: string;
  avgOreInclVat: number;
  deltaOreInclVat: number;
  /** Procent af den måned, der sammenlignes med; null når den var nul. */
  deltaPct: number | null;
}

/** Én måneds gennemsnit. Delene er null i spot-grundlaget. */
export interface FeedMonthlyPricePoint {
  month: string;
  avgOreInclVat: number;
  avgOreExVat: number;
  spotOreExVat: number;
  gridOreExVat: number | null;
  energinetOreExVat: number | null;
  psoOreExVat: number | null;
  elafgiftOreExVat: number | null;
  /** Kun basis=sale: netselskabets indfødningstarif + Energinets balancetarif for produktion, trukket fra spot. */
  producerOreExVat: number | null;
  /** 0 i basis=sale (salgsprisen er ekskl. moms). */
  vatOre: number;
  hours: number;
  /** Alle månedens timer er med; indeværende måned er altid til dato. */
  complete: boolean;
  previousMonth: FeedMonthlyDelta | null;
  sameMonthLastYear: FeedMonthlyDelta | null;
}

export interface FeedMonthlyPricesResponse {
  meta: {
    area: FeedArea;
    priceArea: PriceArea;
    gridArea: string;
    basis: FeedMonthlyBasis;
    from: string;
    to: string;
    unit: "øre/kWh inkl. moms" | "øre/kWh ekskl. moms";
    /** Første måned med et gennemsnit for området i dette grundlag. */
    historyFrom: string | null;
    currentMonthToDate: boolean;
    method: string;
    attribution: string;
    generatedAt: string;
    note: string;
  };
  points: FeedMonthlyPricePoint[];
  summary: { minMonth: string; maxMonth: string; avgOreInclVat: number; latest: { month: string; avgOreInclVat: number } } | null;
}

/* ---------------------------------- CO₂ ---------------------------------- */

/** Ét kvarter: start som ISO med dansk offset, g CO₂/kWh (gennemsnit af kvarterets 5-minutters målinger). */
export interface FeedCo2Point {
  start: string;
  gPerKwh: number;
}

export interface FeedCo2Response {
  meta: {
    priceArea: PriceArea;
    unit: "g CO₂/kWh";
    /** Det seneste hele kvarter med en måling — "lige nu" er typisk 10–30 minutter bagud. */
    asOf: string | null;
    /** Hvornår feedet hentede den prognose, der vises. */
    prognosisIssuedAt: string | null;
    /** Prognosens sidste kvarter. */
    horizon: string | null;
    generatedAt: string;
    method: string;
    attribution: string;
    note: string;
  };
  /** Det seneste hele kvarter med en måling — lige efter midnat gårsdagens sidste; null kun uden et helt kvarter. */
  now: FeedCo2Point | null;
  /** Dagens målte kvarterer indtil nu (dansk dag). */
  today: FeedCo2Point[];
  /** Prognosen fra kvarteret efter den seneste måling til horisonten. */
  prognosis: FeedCo2Point[];
  /** Prognosens kvarterer på morgendagens danske dag — tom, til Energinet har udgivet den (normalt fra kl. 15). */
  tomorrow: FeedCo2Point[];
  summary: {
    today: { minG: number; maxG: number; avgG: number; minStart: string; maxStart: string } | null;
    /** Den grønneste og den mest udledende time i prognosen fra nu (timegennemsnit). */
    next: { greenestStart: string; greenestG: number; dirtiestStart: string; dirtiestG: number; hours: number } | null;
    /** Gennemsnittet af de seneste 400 dages målinger, samme måned sidste år og første dag i feedets historik. */
    typical: { avgG13Months: number | null; sameMonthLastYearG: number | null; since: string | null };
  };
}

/* ---------------------------------- Pris pr. dag ---------------------------------- */

/** Én dansk dags gennemsnit — samme regnestykke som måneden, skåret pr. døgn. Delene er null i spot- og salgsgrundlaget. */
export interface FeedDailyPricePoint {
  /** "YYYY-MM-DD", dansk dag. */
  day: string;
  /** 1 = mandag … 7 = søndag. */
  weekday: number;
  avgOreInclVat: number;
  avgOreExVat: number;
  spotOreExVat: number;
  gridOreExVat: number | null;
  energinetOreExVat: number | null;
  psoOreExVat: number | null;
  elafgiftOreExVat: number | null;
  /** Kun basis=sale: netselskabets indfødningstarif + Energinets balancetarif for produktion, trukket fra spot. */
  producerOreExVat: number | null;
  /** 0 i basis=sale (salgsprisen er ekskl. moms). */
  vatOre: number;
  /** Dagens billigste og dyreste time i grundlaget (inkl. moms; ekskl. i basis=sale). */
  minOreInclVat: number;
  maxOreInclVat: number;
  /** Timer med spot bag gennemsnittet (23, 24 eller 25 for en hel dag). */
  hours: number;
  /** Dagen er omme, og alle dens timer er med. */
  complete: boolean;
}

export interface FeedDailyPricesResponse {
  meta: {
    area: FeedArea;
    priceArea: PriceArea;
    gridArea: string;
    basis: FeedMonthlyBasis;
    /** Vinduet som danske dage, begge inklusive. */
    from: string;
    to: string;
    unit: "øre/kWh inkl. moms" | "øre/kWh ekskl. moms";
    /** Første dag med et gennemsnit for området i dette grundlag — null, før opfyldningen har kørt. */
    historyFrom: string | null;
    method: string;
    attribution: string;
    generatedAt: string;
    note: string;
  };
  points: FeedDailyPricePoint[];
  summary: { minDay: string; maxDay: string; avgOreInclVat: number; days: number } | null;
}

/* ------------------------------------------------------------------ */
/* Netområder og nettariffer — /grid-areas, /grid-areas/[code]          */
/* ------------------------------------------------------------------ */

export interface FeedTariffBand {
  krPerKwhExVat: number;
  oreInclVat: number;
  /** Timerne på døgnet med denne sats, dansk tid. */
  hours: number[];
}

export type FeedPeriodStatus = "past" | "current" | "upcoming";

export interface FeedTariffPeriod {
  chargeCode: string;
  validFrom: string | Date;
  validTo: string | Date | null;
  status: FeedPeriodStatus;
  source: string;
  /** Kildens adresse, sidst hentet, og hvornår netop denne udgave af satsen først blev set. */
  sourceUrl: string;
  fetchedAt: string | Date;
  recordedAt: string | Date;
  /** kr/kWh ekskl. moms, 24 værdier (dansk time). */
  hourlyKrExVat: number[];
  /** øre/kWh inkl. moms, 24 værdier. */
  hourlyOreInclVat: number[];
  bands: FeedTariffBand[];
}

export interface FeedSubscriptionPeriod {
  chargeCode: string;
  validFrom: string | Date;
  validTo: string | Date | null;
  status: FeedPeriodStatus;
  source: string;
  sourceUrl: string;
  fetchedAt: string | Date;
  recordedAt: string | Date;
  krMonthExVat: number;
  krMonthInclVat: number;
}

export interface FeedGridAreaSummary {
  code: string;
  name: string;
  gridCompany: string;
  priceArea: PriceArea | null;
  zipCount: number;
  /** Postnumre, der også hører til et andet netområde. */
  ambiguousZipCount: number;
  /** Den nettarif, der gælder lige nu — summen af områdets tarifkomponenter. */
  current: {
    hourlyOreInclVat: number[];
    lowOreInclVat: number;
    highOreInclVat: number;
    peakHours: number[];
    subscriptionKrMonthInclVat: number;
    validFrom: string | Date | null;
    validTo: string | Date | null;
  } | null;
  /** Første kommende tarifperiode, der ændrer satsen. */
  upcomingFrom: string | Date | null;
  tariffCodes: string[];
}

export interface FeedGridAreasResponse {
  meta: { count: number; kwh: number; generatedAt: string; note: string };
  items: FeedGridAreaSummary[];
}

export interface FeedNationalCharge {
  chargeType: string;
  chargeCode: string;
  validFrom: string | Date;
  validTo: string | Date | null;
  status: FeedPeriodStatus;
  amountExVat: number;
  amountInclVat: number;
  unit: "kr/kWh" | "kr/md";
  source: string;
  sourceUrl: string;
  fetchedAt: string | Date;
  recordedAt: string | Date;
}

export interface FeedGridAreaDetailResponse extends FeedGridAreaSummary {
  zips: { zip: number; city: string; ambiguous: boolean; alternatives: string[] }[];
  /** Seneste 12 måneder + nu + kommende, sammenfaldende perioder slået sammen. */
  tariffPeriods: FeedTariffPeriod[];
  subscriptionPeriods: FeedSubscriptionPeriod[];
  periodsTruncated: boolean;
  national: FeedNationalCharge[];
  /** Nettarif, netabonnement og afgifter for en husstand ved `kwh` på parcelhusprofilen, kr inkl. moms, kommende 12 måneder. */
  exampleYear: {
    kwh: number;
    profile: string;
    fromMonth: string;
    months: number;
    gridTariffKr: number;
    gridSubscriptionKr: number;
    transmissionKr: number;
    systemKr: number;
    elAfgiftKr: number;
    tsoSubscriptionKr: number;
    totalKr: number;
  } | null;
  generatedAt: string;
}

/* ------------------------------------------------------------------ */
/* Ændringer — /changes                                                 */
/* ------------------------------------------------------------------ */

export type FeedChangeKind =
  | "price"
  | "product-added"
  | "product-removed"
  | "trustpilot"
  | "tariff-period-started"
  | "tariff-period-upcoming"
  | "national-charge-changed"
  | "advisory-set"
  | "advisory-lifted";

interface FeedChangeBase {
  /** Stabil nøgle for ændringen — samme ændring får samme id ved hvert kald. */
  id: string;
  kind: FeedChangeKind;
  at: string | Date;
  /** Dansk dag. */
  day: string;
  supplier: { slug: string; name: string } | null;
  product: { slug: string; name: string } | null;
  /** Berørte netområder; tom = landsdækkende eller uden område. */
  areas: string[];
  source: { name: string; url: string | null };
}

export interface FeedPriceChange extends FeedChangeBase {
  kind: "price";
  from: FeedPriceDigest;
  to: FeedPriceDigest;
  energyDeltaOreInclVat: number;
  subscriptionDeltaKrInclVat: number;
  direction: "up" | "down" | "mixed";
}

export interface FeedProductChange extends FeedChangeBase {
  kind: "product-added" | "product-removed";
  productType: ProductType;
  introOffer: boolean;
  origin: "elpris" | "partner";
  /** Sidste dag, produktet blev set hos kilden (kun product-removed). */
  lastSeenAt: string | Date | null;
}

export interface FeedTrustpilotChange extends FeedChangeBase {
  kind: "trustpilot";
  from: { trustScore: number | null; reviewCount: number | null };
  to: { trustScore: number | null; reviewCount: number | null };
  scoreDelta: number | null;
  reviewDelta: number | null;
  /** Det tusinde, antallet af anmeldelser passerede — eller null. */
  crossedThousand: number | null;
}

export interface FeedTariffChange extends FeedChangeBase {
  kind: "tariff-period-started" | "tariff-period-upcoming";
  gridArea: string;
  gridCompany: string;
  chargeCode: string;
  validFrom: string | Date;
  validTo: string | Date | null;
  lowOreInclVat: number;
  highOreInclVat: number;
  hourlyOreInclVat: number[];
  previous: { lowOreInclVat: number; highOreInclVat: number; validFrom: string | Date } | null;
  /** Ændring i den dyreste time, øre/kWh inkl. moms — null uden forrige periode. */
  peakDeltaOreInclVat: number | null;
}

export interface FeedNationalChargeChange extends FeedChangeBase {
  kind: "national-charge-changed";
  chargeType: string;
  chargeCode: string;
  validFrom: string | Date;
  validTo: string | Date | null;
  fromExVat: number | null;
  toExVat: number;
  unit: "kr/kWh" | "kr/md";
}

export interface FeedAdvisoryChange extends FeedChangeBase {
  kind: "advisory-set" | "advisory-lifted";
  level: FeedAdvisoryLevel;
  summary: string;
  since: string;
  reasons: FeedAdvisoryReason[];
}

export type FeedChangeItem =
  | FeedPriceChange
  | FeedProductChange
  | FeedTrustpilotChange
  | FeedTariffChange
  | FeedNationalChargeChange
  | FeedAdvisoryChange;

export interface FeedChangesResponse {
  meta: {
    since: string;
    until: string;
    count: number;
    /** Sandt når flere ændringer fandtes end `limit`. */
    truncated: boolean;
    kinds: FeedChangeKind[];
    kwh: number;
    generatedAt: string;
    note: string;
  };
  items: FeedChangeItem[];
}

/* ------------------------------------------------------------------ */
/* Verifikation — /verifications/summary                                */
/* ------------------------------------------------------------------ */

export interface FeedVerificationMismatch {
  product: { slug: string; name: string };
  checkedAt: string | Date;
  sourceUrl: string | null;
  expected: { energyOreExVat: number; subscriptionKrMonthExVat: number; spotBased: boolean } | null;
  found: Record<string, unknown> | null;
  note: string | null;
}

export interface FeedVerificationSupplier {
  supplier: { slug: string; name: string };
  products: number;
  verifiedProducts: number;
  mismatchProducts: number;
  checks: number;
  matches: number;
  mismatches: number;
  notFound: number;
  errors: number;
  lastCheckedAt: string | Date | null;
  lastMatchAt: string | Date | null;
  openMismatches: FeedVerificationMismatch[];
}

export interface FeedVerificationsResponse {
  meta: {
    /** Vinduet, tællingerne dækker, i dage. */
    days: number;
    products: number;
    verifiedProducts: number;
    checks: number;
    matches: number;
    mismatches: number;
    notFound: number;
    errors: number;
    generatedAt: string;
    method: string;
  };
  items: FeedVerificationSupplier[];
}

/* ------------------------------------------------------------------ */
/* Månedsrapport — /reports/[yyyy-mm]                                   */
/* ------------------------------------------------------------------ */

export interface FeedReportSpot {
  priceArea: PriceArea;
  /** Antal danske dage med data i måneden. */
  days: number;
  avgOreExVat: number;
  avgOreInclVat: number;
  minOreExVat: number;
  maxOreExVat: number;
  /** Timer, hvor spotprisen var nul eller negativ. */
  hoursAtOrBelowZero: number;
  /** Gennemsnit pr. time på døgnet, øre/kWh ekskl. moms, 24 værdier. */
  byHour: number[];
  previousMonthAvgOreExVat: number | null;
  sameMonthLastYearAvgOreExVat: number | null;
}

export interface FeedReportMarketArea {
  gridArea: string;
  priceArea: PriceArea;
  productCount: number;
  /** Aftaler uden anmærkning, betingelse, kontantrabat eller introtilbud. */
  cleanLastingCount: number;
  cheapestLasting: { supplier: { slug: string; name: string }; product: { slug: string; name: string }; comparableAnnualInclVat: number } | null;
  medianComparableAnnualInclVat: number | null;
  /** Dyreste minus billigste blandt de rene, varige aftaler. */
  spreadKrInclVat: number | null;
}

export interface FeedReportResponse {
  month: string;
  period: { from: string; to: string };
  generatedAt: string;
  /** Første dag, feedet har registreret markedet. En rapport for en måned før den dækker kun spot. */
  feedSince: string | null;
  spot: FeedReportSpot[];
  priceChanges: {
    count: number;
    products: number;
    suppliers: number;
    up: number;
    down: number;
    mixed: number;
    medianEnergyDeltaOreInclVat: number | null;
    largest: FeedPriceChange[];
    bySupplier: { slug: string; name: string; count: number; up: number; down: number }[];
  };
  products: { added: FeedProductChange[]; removed: FeedProductChange[]; activeAtGeneration: number };
  introOffers: {
    added: FeedProductChange[];
    /** Introtilbud, hvis pris udløber i måneden, ifølge kildens `validTo`. */
    expiring: { supplier: { slug: string; name: string }; product: { slug: string; name: string }; validTo: string }[];
  };
  suppliers: { active: number; advised: number; fraraades: number; obs: number };
  trustpilot: FeedTrustpilotChange[];
  tariffs: { started: FeedTariffChange[]; upcoming: FeedTariffChange[] };
  nationalCharges: FeedNationalChargeChange[];
  advisories: FeedAdvisoryChange[];
  /** Markedet ved genereringstidspunktet — ikke et øjebliksbillede fra månedens sidste dag. */
  market: { asOf: string; kwh: number; areas: FeedReportMarketArea[] };
  sources: { name: string; url: string }[];
  method: string;
}
