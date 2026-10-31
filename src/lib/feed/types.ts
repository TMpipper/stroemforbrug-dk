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
  /**
   * Selskabets årspris, når tilbuddet er brugt op: efterfølgerens pris for et introtilbud
   * med kæde, ellers aftalens egen årspris uden velkomstrabat. Det, kunden betaler år to.
   */
  lastingAnnualInclVat: number;
}

/**
 * "intro": en anden pris i en periode. "rebate": en kontant velkomstrabat på en aftale, hvis
 * pris er den samme før og efter (elpris.dk kalder også den et introtilbud med efterfølger —
 * AURA's "Rabat 500 kr."). "intro_rebate": begge dele.
 */
export type FeedOfferKind = "intro" | "rebate" | "intro_rebate";

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
   * kan ikke sammenlignes ærligt med en varig. `prices` er efterfølgerens egne tal ved
   * dette forbrug — til "derefter"-linjen på kortet.
   */
  nextProduct: {
    slug: string;
    name: string;
    prices?: { energyOreInclVat: number; spotBased: boolean; subscriptionKrMonthInclVat: number; paymentFeesKrYearInclVat: number; annualInclVat: number };
  } | null;
  /** Hvilken slags tilbud aftalen er — se `FeedOfferKind`. Null: en varig aftale. */
  offerKind: FeedOfferKind | null;
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
  /**
   * Hvor sikkert området er kendt (25. okt. 2026). `address`: adressen afgjorde det. `postcode`: kun
   * postnummeret — med `ambiguous` er `candidates` mulighederne, og `gridArea` må ikke vises som læserens.
   * `area`: kalderen gav selv området. `region`: landsdelens repræsentative. Valgfri, så en ældre kopi
   * af kontrakten stadig passer.
   */
  precision?: "address" | "postcode" | "area" | "region";
  /** Adressen som Danmarks Adresseregister skriver den, når `address=` blev fundet; ellers null. */
  addressLabel?: string | null;
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
    /**
     * Selskabets del over perioden, inkl. moms: summen af månedernes `supplierKr`, så et
     * introtilbud tæller prisen efter perioden med, og velkomstrabatten er trukket fra.
     * Brug den — aldrig `supplierCost.annualInclVat` skaleret til perioden.
     */
    supplierKrInclVat: number;
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
  /**
   * Netområder, hvis nettarif for en C-kunde i dag er nul i alle timer eller i gennemsnit under 3 øre/kWh
   * ekskl. moms uden en tilladelse med kilde (el-feedets data/grid-tariff-codes.ts). Valgfri: ældre feeds har den ikke.
   */
  tariffs?: {
    ok: boolean;
    implausible: { area: string; avgOreExVat: number | null; allZero: boolean; codes: string[] }[];
    /** C-tarif forskellig på hverdage og i weekenden uden kilde (ugen før) — typisk en B-lav- eller kollektiv kode */
    weekendProfile?: { area: string; codes: string[]; weekdayAvgOre: number; weekendAvgOre: number }[];
    /**
     * Tarifjobbets seneste tjek mod DataHubs noter og satser på netselskabets GLN (null: ingen kørsel endnu): koder i
     * stakken, hvis note ikke er en C-forbrugers (tarif/abonnement), og C-led på GLN'et, der mangler i stakken.
     */
    sourceChecks?: {
      checkedAt: string | null;
      nonCTariffCodes: { area: string; code: string; note: string }[];
      nonCSubscriptionCodes: { area: string; code: string; note: string }[];
      uncoveredCharges: { area: string; code: string; chargeType: "D01" | "D03"; note: string; kind: "surcharge" | "rebate" | "timeOfUseC" }[];
    } | null;
  };
  /**
   * Green Power Denmarks adresseopslag (andet led i `address=`), tre adresser med kendt svar, højst ét tjek i
   * timen. En advarsel: `ok` øverst påvirkes ikke, for uden GPD svarer `address=` med postnummerets kandidater.
   */
  addressLookup?: {
    ok: boolean;
    checkedAt: string;
    checks: { label: string; expected: string; got: string | null; area: string | null; ok: boolean; error?: string }[];
  };
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

/* ------------------------------------------------------------------ */
/* Naturgas — /api/v1/gas/*                                            */
/* ------------------------------------------------------------------ */

export type FeedGasSegment = "privat" | "erhverv";
export type FeedGasPriceType = "variabel" | "fast" | "intro";
export interface FeedGasExIncl { ex: number; incl: number }

/**
 * Satserne oven på gasprisen, opløst for én dato: afgifter, Evidas tarif og Energinets
 * nødforsyningstarif ekskl. og inkl. moms (momsen er feedets daterede sats), hver med kilde.
 * Det er det `GasRateSet`, el-feed-gas.ts regner med — send det med til motoren, aldrig egne tal.
 */
export interface FeedGasRateSet {
  /** YYYY-MM-DD, den dag satserne gælder for */
  date: string;
  /** Momsfaktoren for datoen */
  moms: number;
  vat: FeedVatRate | null;
  referenceM3: number;
  kwhPerM3: number;
  afgifter: {
    year: number;
    naturgasKrM3: FeedGasExIncl;
    co2KrM3: FeedGasExIncl;
    noxKrM3: FeedGasExIncl;
    totalKrM3: FeedGasExIncl;
    nextYear: number | null;
    source: string;
    verifiedAt: string;
    reviewBy: string | null;
    provenance: FeedRateProvenance[];
  };
  evidaTariff: {
    validFrom: string;
    volumenKrM3: FeedGasExIncl;
    fixedKrYear: FeedGasExIncl;
    partsInclKrYear: { grundpris: number; maaler: number; kapacitet: number };
    source: string;
    verifiedAt: string;
    reviewBy: string | null;
    provenance: FeedRateProvenance[];
  };
  noedforsyning: {
    validFrom: string;
    gasYear: string;
    beskyttedeKrM3: FeedGasExIncl;
    /** Sidste gasårs sats — portalen kan halte nogle uger efter 1. oktober */
    previous: { validFrom: string; gasYear: string; beskyttedeKrM3: FeedGasExIncl } | null;
    source: string;
    verifiedAt: string;
    reviewBy: string | null;
    provenance: FeedRateProvenance[];
  };
  /** kr./m³ inkl. moms oven på enhver gaspris: afgifter + Evida volumen + nødforsyning */
  stateAndGridKrM3: number;
  /** Evidas faste betaling (grundpris + måler + kapacitet), kr./år inkl. moms */
  evidaFixedKrYear: number;
  typicalConsumption: {
    presets: { m3: number; label: string; description: string }[];
    slider: { min: number; max: number; step: number };
    source: string;
    verifiedAt: string;
  };
  /** Koder, hvis review_by er passeret på `date` — skal være tom */
  dueReview: string[];
  /** Første dag, afgiftssatsen ikke længere gælder (null = åben) */
  validTo: string | null;
}

export type FeedGasOrigin = "portal" | "partner";

export interface FeedGasSupplierRef {
  slug: string;
  name: string;
  website: string;
  /** Slug i el-feedets `suppliers`, når gasselskabet også er elselskab og koblingen er sikker */
  feedSupplierSlug: string | null;
  /** Logo fra el-feedets spejl, når koblingen findes */
  logoUrl: string | null;
  initials: string;
  status: "active" | "bankrupt";
  /** Sitesnes sporingsslug (/go/<slug>/): feedets slug + "-gas" */
  trackingSlug: string;
  /** Anmærkning fra gasregistret, ellers det koblede elselskabs (et selskab er ét selskab), ellers null. Rækker med en anmærkning står nederst uanset pris og kan aldrig være "billigst". */
  advisory: FeedAdvisory | null;
  /** Det koblede elselskabs Trustpilot-aflæsning — profilen dækker som regel hele selskabet, se `trustpilotNote` på /gas/suppliers */
  trustpilot: FeedTrustpilot | null;
}

export interface FeedGasProductRow {
  /** `${supplierSlug}:${slug(produkt)}` — stabilt siden oktober 2026 */
  id: string;
  supplier: FeedGasSupplierRef;
  /** Produktnavnet ordret, som selskabet indberettede det */
  product: string;
  segment: FeedGasSegment;
  priceType: FeedGasPriceType;
  bindingMonths: number;
  /** Selskabets egen pris, kr./m³ inkl. moms */
  gasPriceKrM3: number;
  subscriptionKrYear: number;
  mandatoryFeeKrMonth: number;
  /** Portalens egen "samlet pris pr. m³" — for et partnertilbud portalens eget tillæg lagt på tilbuddets gaspris */
  portalTotalKrM3: number;
  /** Selskabets side, som portalen linker til */
  sourceUrl: string;
  /** gaspris + afgifter + Evida volumen + nødforsyning, kr./m³ inkl. moms */
  allInKrM3: number;
  /** Alt ved svarets m³, kr./år inkl. moms — rangeringsnøglen */
  annualCostKr: number;
  effectiveKrM3: number;
  /** annualCostKr / kWh (12,157 kWh pr. m³) */
  krPerKwh: number;
  /** gaspris × m³ + abonnement + gebyrer — selskabets del af regningen */
  supplierShareKrYear: number;
  /** gaspris minus Energinets neutrale gaspris for seneste hele måned, begge inkl. moms */
  marginOverWholesaleKrM3: number | null;
  /** 1 = billigst ved dette m³ i segmentet */
  /** Placering i svaret: selskaber med en anmærkning efter dem uden, derefter efter årspris */
  rank: number;
  /** Prisen varer (variabel): de eneste rækker, der kan kaldes "billigst" */
  lasting: boolean;
  badge: "billigst" | null;
  /** Portalens dato, da de nuværende vilkår først blev set */
  reportedAt: string;
  firstSeenAt: string | Date;
  changedAt: string | Date;
  warning: string | null;
  /** portal = indberettet til gasprisguiden.dk · partner = et tilbud via sitene (aldrig i winners eller scope) */
  origin: FeedGasOrigin;
  /** Tilbudssiden for et partnertilbud; null for portalens rækker (brug sourceUrl) */
  offerUrl: string | null;
  /** Krydstjek mod selskabets egen side */
  verification: { status: VerificationStatus; lastVerifiedAt: string | Date | null };
  /** intro | rebate for et partnertilbud; null for portalens rækker */
  offerKind: "intro" | "rebate" | null;
  /** Vilkårene ordret fra selskabets tilbudsside (partnertilbud); null for portalens rækker */
  terms: string | null;
  /** Datoen, tilbudssiden blev læst (partnertilbud) */
  checkedAt: string | null;
  validFrom: string | null;
  validTo: string | null;
  /** Kontant velkomstrabat i kr. det første år (bruttobeløb) — allerede trukket fra annualCostKr; 0 for alle andre */
  firstTimeDiscountKr: number;
  /** Introperiodens sidste dag for et partnerintro — annualCostKr er da blandet med prisen bagefter over de næste 365 dage */
  introEnds: string | null;
  /** Prisen bagefter for et introtilbud */
  nextOffer: { id: string; product: string; gasPriceKrM3: number; subscriptionKrYear: number; mandatoryFeeKrMonth: number } | null;
  /** Årsprisen, når tilbuddet er brugt op (prisen bagefter, uden rabat) — lig annualCostKr for portalens rækker */
  lastingAnnualCostKr: number;
  /** Gives kun via sitesnes link — navnet siger "via os" */
  exclusive: boolean;
}

export interface FeedGasProductGroup {
  rank: number;
  primary: FeedGasProductRow;
  /** Samme selskab, identisk gaspris/abonnement/gebyrer/binding/pristype — tilvalgsvarianter */
  variants: FeedGasProductRow[];
  badge: "billigst" | null;
}

export interface FeedGasScope { products: number; suppliers: number; lasting: number; fixed: number; intro: number; groups: number }

export interface FeedGasExcludedSupplier { slug: string; name: string; bankruptAt: string; sourceUrl: string | null; rows: number }

export interface FeedGasChange {
  reportedAt: string;
  changedAt: string | Date;
  kind: "added" | "price" | "removed" | "returned";
  offer: { id: string; supplierSlug: string; supplierName: string; product: string };
  from: Record<string, unknown> | null;
  to: Record<string, unknown> | null;
}

export interface FeedGasProductsResponse {
  meta: {
    m3: number;
    segment: FeedGasSegment;
    /** Portalens dato — den dato, hver pris skal undertekstes med */
    reportedAt: string;
    fetchedAt: string | Date;
    source: string;
    municipalitiesChecked: number[];
    generatedAt: string;
    scope: FeedGasScope;
    /** "af de N variable gasprodukter til private fra M gasselskaber, som … viste den D" — i samme sætning som ethvert superlativ */
    scopeSentence: { variabel: string; alle: string; fast: string };
    /** Måneden, selskaberne prisede efter */
    wholesale: { month: string; neutralDkkKwh: number; krM3Incl: number } | null;
    addOn: { stateAndGridKrM3: number; evidaFixedKrYear: number; portalAddOnKrM3: number; portalRecipe: string; portalDelta: number };
    attribution: string;
    note: string;
  };
  rates: FeedGasRateSet;
  rows: FeedGasProductRow[];
  groups: FeedGasProductGroup[];
  /** Varige rækker fra selskaber uden anmærkning inden for 1 kr. af den billigste ved m³ — de eneste, der kan kaldes "billigst" */
  winners: { ids: string[]; supplierNames: string; annualCostKr: number | null; gasPriceKrM3: number | null };
  spread: { cheapestId: string; dearestId: string; diffKrYear: number } | null;
  excluded: FeedGasExcludedSupplier[];
  /** Nyeste først, højst ti */
  changes: FeedGasChange[];
}

export interface FeedGasDailyPoint {
  /** YYYY-MM-DD gasdag (06:00–06:00) */
  gasDay: string;
  eexEurMwh: number;
  withinDayEurMwh: number | null;
  /** Energinets neutrale gaspris, DKK/kWh ekskl. moms */
  neutralDkkKwh: number;
  theDkkKwh: number | null;
  fxDkkPer100Eur: number | null;
}
export interface FeedGasMonthlyPoint { month: string; neutralDkkKwh: number }
/** Forsyningstilsynets månedsstatistik for 1.650 m³: delene ekskl. moms, momsen for sig, totalen inkl. */
export interface FeedGasFtPoint {
  month: string;
  gasKrM3ExVat: number;
  distributionKrM3ExVat: number;
  afgifterKrM3ExVat: number;
  noedforsyningKrM3ExVat: number;
  vatKrM3: number;
  totalKrM3InclVat: number;
}
export type FeedGasDstGroup = "small" | "mid" | "large";
/** Danmarks Statistik ENERGI3 pr. halvår og forbrugsgruppe: niveau 0–2 ekskl. moms, 3 inkl. */
export interface FeedGasDstPoint { period: string; group: FeedGasDstGroup; bandLabel: string; level0: number; level1: number; level2: number; level3: number }
export interface FeedGasReportPoint {
  reportedAt: string;
  fetchedAt: string | Date;
  products: { id: string; gasPriceKrM3: number; subscriptionKrYear: number; priceType: FeedGasPriceType }[];
}

export interface FeedGasSeriesStats {
  min: number; max: number; avg: number; first: number; last: number;
  minDay: string; maxDay: string; firstDay: string; lastDay: string;
  changePct: number; changeAbs: number;
}

export interface FeedGasMarketResponse {
  meta: { today: string; generatedAt: string; attribution: string; note: string };
  daily: {
    fetchedAt: string | Date;
    from: string;
    to: string;
    latest: FeedGasDailyPoint;
    last45: FeedGasDailyPoint[];
    /** Seneste neutrale gaspris som kr./m³ inkl. moms */
    latestKrM3Incl: number;
    provisionalUntil: string;
    isProvisional: boolean;
    /** Over de seneste 31 gasdage, kr./m³ inkl. moms */
    stats30: FeedGasSeriesStats;
    trend: { text: string; pct: number; direction: "op" | "ned" | "uændret"; days: number };
    dkVsDe: { days: number; dkCheaperDays: number; avgSpreadDkkKwh: number; maxSpreadDay: FeedGasDailyPoint; minSpreadDay: FeedGasDailyPoint } | null;
  };
  monthly: {
    fetchedAt: string | Date;
    latest: FeedGasMonthlyPoint;
    last13: FeedGasMonthlyPoint[];
    latestKrM3Incl: number;
    years: { year: number; avg: number; min: number; max: number; months: number; changePct: number | null }[];
  };
  ft: {
    fetchedAt: string | Date;
    source: string;
    fileUrl: string;
    vintage: string;
    consumptionM3: number;
    latest: FeedGasFtPoint;
    last13: FeedGasFtPoint[];
    extremes: { max: FeedGasFtPoint; min: FeedGasFtPoint };
    years: { year: number; avgTotal: number; minTotal: number; maxTotal: number; avgGas: number; months: number; changePct: number | null }[];
  };
  dst: {
    updated: string | Date;
    groups: Record<FeedGasDstGroup, string>;
    period: string;
    latest: Record<FeedGasDstGroup, FeedGasDstPoint>;
    /** Lagene i gruppen 457–4.569 m³ */
    stack: { energiselskab: number; transport: number; afgifter: number; moms: number };
  } | null;
  season: {
    years: number[];
    /** Jan..dec, summer til 1 */
    shares: number[];
    method: string;
    source: string;
    summary: { peakMonth: number; troughMonth: number; peakShare: number; troughShare: number; winterShare: number; summerShare: number; peakToTrough: number };
  } | null;
  /** Eurostats seneste halvår for Danmark, nabolandene og EU27 (bånd D2); Danmarks placering fra billigst (1) blandt landene uden EU27 */
  europe: {
    period: string;
    updated: string | Date;
    band: string;
    bandLabel: string;
    unit: string;
    source: string;
    rows: FeedGasEurostatPoint[];
    dkRank: number | null;
    of: number;
  } | null;
  rates: FeedGasRateSet;
}

/** Eurostat nrg_pc_202, husholdninger, forbrugsbånd D2 (20–199 GJ om året): EUR pr. kWh pr. halvår, tre afgiftsniveauer */
export interface FeedGasEurostatPoint {
  /** Eurostats geokode: DK, DE, SE, NL, …, EU27_2020 */
  geo: string;
  geoName: string;
  /** "2025-S1" */
  period: string;
  band: string;
  eurKwhInclTax: number | null;
  eurKwhExVat: number | null;
  eurKwhExTax: number | null;
  /** (alle afgifter inkl. − ekskl. alle afgifter) / inkl. — skatter og afgifters andel af prisen; negativ, når afgifterne samlet var et tilskud (krisetiltagene 2022–23) */
  taxShare: number | null;
}

export type FeedGasHistorySeries = "eds-daily" | "eds-monthly" | "ft-monthly" | "dst" | "products" | "eurostat";
export interface FeedGasHistoryRowTypes {
  "eds-daily": FeedGasDailyPoint;
  "eds-monthly": FeedGasMonthlyPoint;
  "ft-monthly": FeedGasFtPoint;
  dst: FeedGasDstPoint;
  products: FeedGasReportPoint;
  eurostat: FeedGasEurostatPoint;
}
export interface FeedGasHistoryResponse<S extends FeedGasHistorySeries = FeedGasHistorySeries> {
  meta: {
    series: S;
    label: string;
    publisher: string;
    source: string;
    unit: string;
    fetchedAt: string | Date | null;
    from: string | null;
    to: string | null;
    totalRows: number;
    generatedAt: string;
    attribution: string;
  };
  rows: FeedGasHistoryRowTypes[S][];
}

export interface FeedGasHealthResponse {
  ok: boolean;
  generatedAt: string;
  today: string;
  reportedAt: string | null;
  fetchedAt: { portal: string | Date | null; daily: string | Date | null; monthly: string | Date | null; ft: string | Date | null; dst: string | Date | null; season: string | Date | null };
  products: number;
  householdProducts: number;
  suppliers: number;
  dailyTo: string | null;
  monthlyTo: string | null;
  ftTo: string | null;
  dstTo: string | null;
  dstUpdated: string | Date | null;
  seasonYears: number[];
  /** Satskoder, hvis review_by er passeret, eller som ingen gældende række har */
  ratesDueReview: string[];
  excludedRows: number;
  bankrupt: { slug: string; name: string; bankruptAt: string }[];
  portalRecipe: string | null;
  portalDelta: number | null;
  /** Portalens systemtarif stemmer med Evidas faste betaling i gas_rates */
  evidaFixedMatchesPortal: boolean | null;
  /** Kilder, der er ældre end de bør være — tom, når alt er friskt */
  stale: string[];
  /** Aktive gasselskaber uden kobling til et elselskab (ingen logo, Trustpilot eller selskabsfakta derfra) */
  suppliersUnlinked: string[];
  facts: { rows: number; stale: number; unknownBiogas: number };
  /** Anmærkninger: aktive i gasregistret, poster hvis review-dato er passeret, og selskaber med en arvet el-anmærkning */
  advisories: { active: number; dueReview: string[]; inheritedFromEl: string[] };
  presets: number;
  verification: { verified: number; mismatch: number; unverified: number };
  /** Partnertilbud (origin = partner): aktive, skjulte efter-priser, tilbud, der udløber inden 30 dage, og introtilbud uden efter-pris (vises ikke; gør ok falsk) */
  partnerOffers: { active: number; hidden: number; expiring: { id: string; validTo: string }[]; withoutAfter: string[] };
  /** De fremhævede gaspladser: aktive pladser og hvor mange der løses til et tilbud ved referenceforbruget */
  featured: { slots: number; resolved: number; skipped: string[] };
  /** Seneste frosne månedsrapport for gas */
  lastReport: string | null;
  eurostat: { rows: number; latestPeriod: string | null; updated: string | Date | null };
  /** Logoer spejlet fra portalen for aktive gasselskaber, og hvem der mangler både portal- og el-logo */
  logos: { mirrored: number; missing: string[] };
  /** Trustpilot for gasselskaber uden kobling til el: rækker, og hvem der er uden frisk aflæsning */
  trustpilotGasOnly: { rows: number; stale: string[] };
}

/* ---------- selskabslaget for gas (18. oktober 2026) ---------- */

/** Gasselskabsfakta — hver påstand med kilde og læsedato, eller null/unknown. Aldrig et tal, feedet selv regner. */
export interface FeedGasSupplierFacts {
  biogas: {
    status: FeedOriginGuaranteeStatus;
    /** included: tilbuddet selv · addon: den grønne variant (tilbuds-id) */
    offerKey: string | null;
    /** addon: den almindelige variant, tilvalget måles imod (tilbuds-id) */
    baseOfferKey: string | null;
    /** kr./m³ inkl. moms — KUN når tilvalget ikke er et selvstændigt tilbud i feedet */
    addonKrM3InclVat: number | null;
    note: string | null;
    sourceUrl: string | null;
    verifiedAt: string | null;
  };
  /** Står Evidas betaling på selskabets regning (én regning)? null = ukendt */
  combinedEvidaBill: { value: boolean | null; note: string | null; sourceUrl: string | null; verifiedAt: string | null };
  /** Tilbyder selskabet en serviceaftale til gasfyret? null = ukendt */
  serviceAgreement: { value: boolean | null; name: string | null; note: string | null; sourceUrl: string | null; verifiedAt: string | null };
  terms: {
    /** Betalingsmåder med gebyr pr. regning inkl. moms (0 = gratis); null = ikke læst */
    paymentMethods: { name: string; feeKrInclVat: number }[] | null;
    termination: string | null;
    priceUpdateCadence: string | null;
    app: boolean | null;
    note: string | null;
    sourceUrl: string | null;
    verifiedAt: string | null;
  };
  /** Kun for selskaber uden kobling til et elselskab; ellers står ejerskabet i `elSupplier.facts` */
  ownership: { customerOwned: boolean | null; form: string | null; note: string | null; sourceUrl: string | null; verifiedAt: string | null };
  foundedYear: number | null;
  customers: { count: number; asOf: string; sourceUrl: string } | null;
  updatedAt: string | Date;
}

export interface FeedGasSupplier extends FeedGasSupplierRef {
  /** Fra gasrækken, ellers det koblede elselskab */
  cvr: string | null;
  homepageUrl: string | null;
  offerCount: { privat: number; erhverv: number };
  /** Hvad Trustpilot-profilen dækker ud over gas, uden tal */
  trustpilotNote: string | null;
  /** true når anmærkningen er elregistrets, læst gennem koblingen */
  advisoryInheritedFromEl: boolean;
  facts: FeedGasSupplierFacts | null;
  /** Det koblede elselskab med dets fakta — EPSI måler elmarkedet, aldrig gas */
  elSupplier: { slug: string; name: string; facts: FeedSupplierFacts | null } | null;
  verification: { verified: number; mismatch: number; unverified: number };
}

export interface FeedGasSuppliersResponse {
  meta: { count: number; generatedAt: string; attribution: string; note: string };
  items: FeedGasSupplier[];
}

export type FeedGasStackWho = "leverandør" | "staten" | "evida" | "energinet";
export interface FeedGasStackLine {
  key: "gas" | "abonnement" | "gebyrer" | "rabat" | "naturgasafgift" | "co2afgift" | "noxafgift" | "evidaVolumen" | "noedforsyning" | "evidaGrundpris" | "evidaMaaler" | "evidaKapacitet";
  label: string;
  who: FeedGasStackWho;
  /** Pr. m³, hvor linjen følger forbruget */
  krM3?: number;
  krYear: number;
  source: string;
}
/** Årsprisen delt op (motorens priceStack); linjerne summer til annualCostKr */
export interface FeedGasPriceStack {
  m3: number;
  lines: FeedGasStackLine[];
  totalKrYear: number;
  totalKrM3: number;
  herafMomsKrYear: number;
  supplierShareKrYear: number;
  stateShareKrYear: number;
  gridShareKrYear: number;
}

export interface FeedGasOfferHistoryPoint { reportedAt: string; gasPriceKrM3: number; subscriptionKrYear: number; priceType: FeedGasPriceType }

/** Et af selskabets tilbud med dets placering i hele markedet ved svarets m³ */
export interface FeedGasSupplierOffer extends FeedGasProductRow {
  /** Placering blandt de varige (variable) produkter i segmentet — null for intro og fast */
  rankAmongLasting: number | null;
  ofLasting: number;
  /** Prisniveau (identiske årspriser tæller som ét) og antal niveauer blandt alle produkter */
  level: number;
  ofLevels: number;
  isWinner: boolean;
  /** Kr./år over det billigste varige produkt uden anmærkning (0 for vinderen) */
  diffToCheapestKrYear: number;
  /** Kr./år under det dyreste produkt i segmentet */
  diffToDearestKrYear: number;
  medianLastingKrYear: number | null;
  /** Tillægget over Energinets månedspris: placering blandt de varige (1 = lavest), spændet og måneden */
  margin: { rank: number | null; of: number; lowestKrM3: number | null; highestKrM3: number | null; month: string | null } | null;
  stack: FeedGasPriceStack;
  /** Prisen pr. portaldato, ældste først (højst 400 dage) */
  history: FeedGasOfferHistoryPoint[];
}

export interface FeedGasSupplierResponse {
  meta: {
    m3: number;
    segment: FeedGasSegment;
    reportedAt: string;
    fetchedAt: string | Date;
    scope: FeedGasScope;
    scopeSentence: { variabel: string; alle: string; fast: string };
    /** Selskabets billigste varige tilbud ved hver boligtype: `rank` er placeringen blandt de varige variable produkter ved boligtypens m³
     *  (feedets rangering — selskaber med en anmærkning nederst), af `ofLasting` — samme mål som tilbuddenes `rankAmongLasting`. */
    presets: { key: string; label: string; m3: number; offerId: string | null; rank: number | null; ofLasting: number; annualCostKr: number | null }[];
    generatedAt: string;
    attribution: string;
    note: string;
  };
  rates: FeedGasRateSet;
  supplier: FeedGasSupplier;
  offers: FeedGasSupplierOffer[];
}

/** Boligtyperne i gasforbrugsvælgeren — samme liste på alle sider; hentes, skrives ikke af. */
export interface FeedGasPreset { key: string; label: string; description: string; m3: number; sourceUrl: string; verifiedAt: string }
export interface FeedGasPresetsResponse { meta: { count: number; generatedAt: string }; items: FeedGasPreset[] }

export type FeedGasChangeKind =
  | "offer-added" | "offer-price" | "offer-removed" | "offer-returned"
  | "rate-changed" | "supplier-added" | "supplier-bankrupt" | "advisory-set" | "advisory-lifted";

export interface FeedGasChangeBase {
  id: string;
  kind: FeedGasChangeKind;
  at: string | Date;
  /** Dansk dato */
  day: string;
  supplier: { slug: string; name: string } | null;
  source: { name: string; url: string | null };
}
export interface FeedGasOfferChange extends FeedGasChangeBase {
  kind: "offer-added" | "offer-price" | "offer-removed" | "offer-returned";
  offer: { id: string; product: string; segment: FeedGasSegment; priceType: FeedGasPriceType };
  /** Portalens dato for de nye vilkår */
  reportedAt: string;
  from: Record<string, unknown> | null;
  to: Record<string, unknown> | null;
  gasPriceDeltaKrM3: number | null;
  subscriptionDeltaKrYear: number | null;
}
export interface FeedGasRateChange extends FeedGasChangeBase {
  kind: "rate-changed";
  code: string;
  unit: "kr_m3" | "kr_year";
  validFrom: string | Date;
  validTo: string | Date | null;
  fromExVat: number | null;
  toExVat: number;
  fromInclVat: number | null;
  toInclVat: number;
}
export interface FeedGasSupplierChange extends FeedGasChangeBase {
  kind: "supplier-added" | "supplier-bankrupt";
  bankruptAt: string | null;
}
export interface FeedGasAdvisoryChange extends FeedGasChangeBase {
  kind: "advisory-set" | "advisory-lifted";
  level: FeedAdvisoryLevel;
  summary: string;
  since: string;
  reasons: FeedAdvisoryReason[];
  /** true når posten er elregistrets, læst gennem koblingen til elselskabet */
  inheritedFromEl: boolean;
}
export type FeedGasChangeItem = FeedGasOfferChange | FeedGasRateChange | FeedGasSupplierChange | FeedGasAdvisoryChange;
export interface FeedGasChangesResponse {
  meta: { since: string; until: string; count: number; truncated: boolean; kinds: FeedGasChangeKind[]; generatedAt: string; note: string };
  items: FeedGasChangeItem[];
}

/* ---------- det kommercielle lag for gas (sprint B, 18. oktober 2026) ---------- */

/** En fremhævet gasplads — altid annonce; samme kort på alle sites */
export interface FeedGasFeaturedItem {
  position: number;
  sponsored: true;
  headline: string | null;
  badge: string | null;
  bullets: string[];
  ctaLabel: string;
  campaignTerms: string | null;
  accentColor: string | null;
  /** Affiliate-URL med sitets sporingsparameter; ellers tilbudssiden/selskabets side */
  ctaUrl: string | null;
  /** Det tilbud, pladsen løses til ved svarets m³ (en selskabsplads: selskabets billigste varige tilbud) */
  offer: FeedGasProductRow;
}
export interface FeedGasFeaturedResponse {
  meta: { m3: number; segment: FeedGasSegment; reportedAt: string; generatedAt: string; note: string };
  disclosure: string;
  items: FeedGasFeaturedItem[];
}

/** Markedsbilledet i en månedsrapport: portalens sidste liste i måneden ved referenceforbruget med månedens satser */
export interface FeedGasReportMarket {
  m3: number;
  reportedAt: string;
  /** Dagen, satserne er slået op for (sidste portaldato i måneden) */
  ratesDate: string;
  products: number;
  householdProducts: number;
  suppliers: number;
  /** Varige produkter til private fra selskaber uden anmærkning */
  cleanLastingCount: number;
  cheapestLasting: { supplier: { slug: string; name: string }; offer: { id: string; product: string }; gasPriceKrM3: number; annualCostKr: number } | null;
  medianAnnualCostKr: number | null;
  spreadKrYear: number | null;
  /** Selskaber, der bar en anmærkning ved genereringen (gasregistret eller arvet) */
  advisedSuppliers: string[];
}
export interface FeedGasReportWholesale {
  gasDays: number;
  from: string;
  to: string;
  avgKrM3Incl: number;
  minKrM3Incl: number;
  maxKrM3Incl: number;
  minDay: string;
  maxDay: string;
  firstKrM3Incl: number;
  lastKrM3Incl: number;
  changePct: number;
  /** Energinets månedspris for måneden — det, selskaberne priser efter */
  monthlyNeutralDkkKwh: number | null;
  monthlyKrM3Incl: number | null;
  previousMonthKrM3Incl: number | null;
  sameMonthLastYearKrM3Incl: number | null;
  /** Energinet godkender balanceprisen den 25. i måneden efter */
  provisional: boolean;
}
export interface FeedGasReportResponse {
  month: string;
  period: { from: string; to: string };
  generatedAt: string;
  feedSince: string | null;
  portal: { dates: string[]; last: { reportedAt: string; products: number; householdProducts: number; suppliers: number; excludedRows: number } | null };
  market: FeedGasReportMarket | null;
  offers: {
    added: FeedGasOfferChange[];
    removed: FeedGasOfferChange[];
    returned: FeedGasOfferChange[];
    priceChanges: { count: number; up: number; down: number; medianGasPriceDeltaKrM3: number | null; largest: FeedGasOfferChange[]; bySupplier: { slug: string; name: string; count: number; up: number; down: number }[] };
  };
  wholesale: FeedGasReportWholesale | null;
  /** Forsyningstilsynets række for måneden, når den er udgivet */
  ft: FeedGasFtPoint | null;
  rates: { inForce: FeedGasRateSet | null; changes: FeedGasRateChange[] };
  suppliers: { active: number; bankrupt: FeedGasSupplierChange[] };
  advisories: FeedGasAdvisoryChange[];
  sources: { name: string; url: string }[];
  method: string;
}

/* ---------------------------------- Elpris-prognose ---------------------------------- */

export type FeedForecastKind = "known" | "forecast" | "typical";

/** Et bånd: 10 %-, 50 %- og 90 %-fraktilen. */
export interface FeedForecastBand {
  p10: number;
  p50: number;
  p90: number;
}

export interface FeedForecastHour {
  /** Timens start, dansk lokaltid med offset. */
  start: string;
  hour: number;
  /** Spot ekskl. moms, øre/kWh — den kendte pris (known) eller prognosens p50 (forecast). */
  spotOreExVat: number;
  /** Husstandens pris inkl. moms i netområdet: spot + nettarif i timen + Energinets led + elafgift, × moms. */
  allInOreInclVat: number;
  /** Prognosens bånd om husstandens pris (kun forecast). */
  p10OreInclVat?: number;
  p90OreInclVat?: number;
}

export interface FeedForecastOutlookPart {
  /** lav/middel/høj = laveste/midterste/højeste tredjedel af de seneste 90 døgns realiserede produktion i prisområdet. */
  level: "lav" | "middel" | "høj";
  /** Døgnmiddel af den prognosticerede produktion, MWh pr. time. */
  mwh: number;
  /** Andel af de seneste 90 realiserede døgn, der lå lavere (0–100). */
  percentile: number;
}

/** Ugens udsigt for vind og sol bag en dag — modellen på ECMWF's vejrprognose, offentlig uanset udgivne prishorisonter. */
export interface FeedForecastOutlook {
  wind: FeedForecastOutlookPart;
  solar: FeedForecastOutlookPart;
  /** Energinets egen day-ahead-prognose for dagen (døgnmiddel, MWh pr. time), når den er udgivet — normalt kun for i morgen. */
  reference: { energinetWindMwh: number; energinetSolarMwh: number } | null;
  basis: string;
}

export interface FeedForecastGates {
  day2: { rmaeMax: number; rpinballMax: number; coverage80: [number, number]; minScoredDays: number };
  days3to7: { rmaeMax: number; rankCorrMin: number; cheap2HitRateMin: number; coverage80: [number, number]; minScoredDays: number };
}

export interface FeedForecastDay {
  /** "YYYY-MM-DD", dansk dag. */
  day: string;
  /** 1 = mandag … 7 = søndag. */
  weekday: number;
  /** Dage efter kørslens sidst kendte day-ahead-dag; null for typical uden kørsel og for kendte dage. */
  horizonDay: number | null;
  /** known = offentliggjorte priser; forecast = en udgivet horisont; typical = samme ugedag og måned de seneste tre år. */
  kind: FeedForecastKind;
  /** Husstandens pris inkl. moms, øre/kWh: known → dagens gennemsnit/laveste/højeste time; ellers bånd om døgnmidlet. */
  allIn: { avg: number; min: number; max: number } | FeedForecastBand;
  /** Spot ekskl. moms på samme måde. */
  spot: { avg: number; min: number; max: number } | FeedForecastBand;
  /** Timerne for dagen: kendte dage med prisen, prognosedage med p50 og bånd pr. time, typiske dage med fraktiler pr. time; null kun når en time mangler grundlag. */
  hours: FeedForecastHour[] | null;
  /** typical: grundlaget, fx "13 tirsdage i oktober 2023–2025". */
  basis: string | null;
  /** Det, der lægges oveni spot i døgnmidlet (øre/kWh ekskl. moms) og momsfaktoren — så et site kan vise, hvor lidt af prisen der er usikker. */
  partsOreExVat: { grid: number; energinet: number; tax: number; vatFactor: number } | null;
  /** Vind- og soludsigten bag dagen; null for dage uden en prognosekørsel (og i udgaver før 13. oktober 2026). */
  outlook: FeedForecastOutlook | null;
  /** Udgaven bag dagen (horisonten, prognosen og udsigten): kørslens id og udstedelse. Fra 17. oktober 2026 kan ugen komme fra to udgaver — den nyeste (en 06z/18z-vejrkørsel dækker dag 1–4) lagt oven på den nyeste hele (dag 5–7); meta.runs viser dem. null uden kørsel. */
  runId: number | null;
  issuedAt: string | null;
}

export interface FeedForecastSeparation {
  /** Den billigere dag (efter p50). */
  a: string;
  b: string;
  /** klar = a's p90 ligger under b's p10; ellers usikker. */
  status: "klar" | "usikker";
}

export interface FeedForecastAccuracyRow {
  /** Døgnmidlets fejl, øre/kWh (spot ekskl. moms). */
  mae: number;
  /** Fejlen delt med den naive prognoses — under 1 er bedre end naiv. */
  rmae: number;
  /** Andel dage, der faldt inden for p10–p90 (mål 0,80). */
  coverage80: number;
  pinball: number;
  n: number;
  naive: string;
  /** Ugemålene over k = 2…7 pr. udstedelse: Spearman-rangkorrelation (median), andel af de to billigste forudsagte dage, der faktisk var blandt de to billigste, og andel »klare« adskillelser, der holdt. null før de findes. */
  rankCorr: number | null;
  cheap2HitRate: number | null;
  separationHonesty: number | null;
  /** Portens status (meta.gates): null, før horisonten har nok scorede dage; ellers om kravene er bestået — »under indkøring« eller »bestået«. */
  gatePassed: boolean | null;
  /** Ejerens mål (17. oktober 2026) i procent af det realiserede døgnmiddel: middel af |niveaufejlen| (p50 mod døgnmidlet), timefejlen som andel af døgnmidlet (mål ≤ 0,10), andelen af dage inden for ±5 % — og hvor mange dage der bar procenttal (dage med et døgnmiddel under 10 øre tæller ikke). null før oraklet har målt dem. */
  levelMape: number | null;
  nmae: number | null;
  within5Rate: number | null;
  nPct: number | null;
}

/** Én scoret dag i slægtslinjen for dag 1: den udgave, der var live før auktionen kl. 12 dagen før, mod de offentliggjorte priser. Spot ekskl. moms, øre/kWh. */
export interface FeedForecastRecentDay {
  day: string;
  realisedOre: number;
  p10Ore: number;
  p50Ore: number;
  p90Ore: number;
  /** (p50 − facit)/|facit|; null for dage med et døgnmiddel under 10 øre. */
  levelErrPct: number | null;
  within5: boolean | null;
  runId: number;
  issuedAt: string;
}

/** Slægtslinjens række: den udgave, der var live før auktionen for hver dag, på tværs af modelskift — samme mål som modellens egen række, men uden portstatus: slægtslinjen vises, den udgiver aldrig en horisont. */
export interface FeedForecastLineageRow {
  mae: number;
  rmae: number;
  coverage80: number;
  n: number;
  levelMape: number | null;
  nmae: number | null;
  within5Rate: number | null;
  nPct: number | null;
}

export interface FeedForecastResponse {
  meta: {
    area: FeedArea;
    priceArea: PriceArea;
    unit: "øre/kWh inkl. moms";
    /** Seneste kendte spot-time. */
    asOf: string | null;
    /** Kørslens udstedelse — null, når ingen kørsel er udgivet. */
    issuedAt: string | null;
    modelId: string | null;
    weatherRun: { model: string; runAt: string } | null;
    /** Kørslens dækning i danske dage. */
    horizon: { from: string; to: string } | null;
    /** Udgaverne bag ugen i læserækkefølge: den nyeste først, så den nyeste hele, hvis den nyeste er afkortet (06z/18z); `days` er de prognosedage i svaret, der kom fra udgaven. Tom uden kørsel. */
    runs: { runId: number; issuedAt: string; modelId: string; horizon: { from: string; to: string }; truncated: boolean; days: string[] }[];
    /** Horisonter (dage efter den sidst kendte dag), ejeren har udgivet; tom = alt vises som typical. */
    enabledHorizons: number[];
    /** Sandt når ingen kørsel er under 30 timer gammel. */
    stale: boolean;
    /** Dage, der er udeladt, fordi netområdets satser ikke findes strengt for dagen. */
    missing: { day: string; reason: string }[];
    method: string;
    attribution: string;
    attributions: { name: string; url: string; licence: string; text: string }[];
    caveat: string;
    note: string;
    /** Portene, en horisont skal bestå, før ejeren udgiver den (så et site kan vise mål og status uden egne tal). */
    gates: FeedForecastGates;
    generatedAt: string;
  };
  /** I morgen og de seks dage efter, i rækkefølge. */
  days: FeedForecastDay[];
  /** Kun over dage med kind = forecast; null uden udgivne horisonter. */
  ranking: { cheapest: string[]; dearest: string[]; separation: FeedForecastSeparation[]; basis: string } | null;
  /** Målt træfsikkerhed fra oraklet — null kun uden en kørsel; `window` null og tom `byHorizon`, til de første dage er scoret. `lineage` er slægtslinjen (oraklets model_id `__production__`): den udgave, der var live før auktionen kl. 12 dagen før, for hver dag siden den første udgave 13. oktober 2026 — på tværs af modelskift og kun til visning. */
  accuracy: {
    window: "30d" | "90d" | "all" | null; since: string | null; scoredDays: number; byHorizon: Record<string, FeedForecastAccuracyRow>;
    lineage: { window: "30d" | "90d" | "all"; byHorizon: Record<string, FeedForecastLineageRow> } | null;
    /** De seneste 14 scorede dage for dag 1 i slægtslinjen, ældste først — så et site kan tegne prognose mod facit dag for dag. Tom, til den første dag er scoret. */
    recent: FeedForecastRecentDay[];
  } | null;
}


/* ---------------------------------- Frostvagtens temperatur ---------------------------------- */

/** Én time i en ECMWF-kørsel: den koldeste 2 m-temperatur blandt prisområdets punkter. */
export interface FeedTemperatureHour {
  /** Timen, prognosen gælder (kørslens starttid + trinet), som ISO med dansk offset. */
  at: string;
  /** °C rundet ned til 0,1 — aldrig varmere end arkivet; null, hvor et af områdets punkter mangler timen. */
  tempC: number | null;
  /** Det koldeste punkt (`points[].siteId`) — ved lige tal det første; null sammen med tempC. */
  siteId: string | null;
}

/** Ét prisområde: den nyeste hele kørsel, der har alle områdets punkter, og dens timer. */
export interface FeedTemperatureArea {
  /** `runAt` er kørslens starttid (00z, 06z, 12z eller 18z, UTC); `fetchedAt`, da arkivet hentede den. */
  run: { model: string; runAt: string; fetchedAt: string | null };
  /** Områdets temperaturpunkter: celler i ECMWF's 0,25°-net, ikke husstandens adresse. */
  points: { siteId: string; name: string; lat: number; lon: number }[];
  /** Kørslens timer i rækkefølge: hver tredje time til 144 timer, derefter hver sjette (00z og 12z til 240). */
  hours: FeedTemperatureHour[];
}

export interface FeedTemperatureResponse {
  meta: {
    unit: "°C";
    /** Prisområderne i `areas`. */
    priceAreas: string[];
    generatedAt: string;
    method: string;
    note: string;
    attribution: string;
    attributions: { name: string; url: string; licence: string; text: string }[];
  };
  /** Nøglet på prisområde (DK1, DK2; NO1–NO5 og SE1–SE4 kan komme til); null, når ingen af de seneste hele kørsler har alle områdets punkter. */
  areas: Record<string, FeedTemperatureArea | null>;
}
