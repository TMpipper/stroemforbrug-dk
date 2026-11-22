import type { ModelData } from "@/lib/models";

const teslaModelY: ModelData = {
  slug: "tesla-model-y",
  parent: "elbil",
  brand: "Tesla",
  name: "Tesla Model Y",
  released: "2025-01",
  synonyms: [
    "tesla model y forbrug",
    "tesla model y strømforbrug",
    "model y kwh pr 100 km",
    "tesla model y forbrug pr km",
    "juniper forbrug",
    "model y long range forbrug",
    "model y performance forbrug",
  ],
  title: "Tesla Model Y strømforbrug (2026) → kWh pr. km og ladepris",
  description:
    "Tesla Model Y (Juniper): Teslas officielle WLTP-forbrug for Standard, Long Range og Performance, kWh om året, pris pr. 100 km og vinterforbrug.",
  intro:
    "Model Y er sparsom for en bil af sin størrelse — men vinterkørsel og motorvej flytter tallet mere end valget mellem versionerne.",
  content: `<h2>Hvad betyder Model Y's WLTP-tal i dansk kørsel?</h2>
<p>Tesla opgiver ét officielt strømforbrug pr. version af den nye Model Y, der kom til Europa i januar 2025 under kodenavnet Juniper. Tallet er målt efter WLTP, EU's fælles testcyklus, og det er målt som strøm fra stikkontakten — ikke som strøm ud af batteriet. Det betyder, at tabet i den indbyggede lader allerede er regnet med, og at tallet kan ganges direkte med din elpris. Premium Long Range med firehjulstræk ligger på 15,9 kWh pr. 100 km, og indgangsmodellen Standard med baghjulstræk på 13,1 kWh.</p>
<p>WLTP-cyklussen er kørt ved omkring 23 grader og blander by, landevej og en kort motorvejsdel. En dansk pendler på landevej om sommeren kommer derfor tæt på tallet, mens en vinter med frost, våde veje og 130 km/t på motorvejen typisk koster 15–30 % mere. For Premium Long Range AWD betyder det, at 15,9 kWh pr. 100 km kan blive til 18–21 kWh en kold januarmorgen, og at 100 km så koster {{kr 18-21}} i stedet for {{kr 15,9}} ved hjemmeladning.</p>

<h2>Standard, Long Range eller Performance — hvor stor er forskellen?</h2>
<p>Forskellen mellem versionerne er mindre, end prisen antyder. Standard med baghjulstræk er den letteste og bruger 13,1 kWh pr. 100 km ifølge Tesla; med 15.000 km om året er det omkring 1.965 kWh. Premium Long Range med baghjulstræk, som Tesla også har solgt i Danmark, står til 14,2 kWh. Den ekstra motor foran i Premium Long Range AWD koster 1,7 kWh pr. 100 km mere end baghjulstræk-versionen, og Performance med større fælge og sportsundervogn lander på 16,2 kWh. Over et helt år er forskellen mellem Standard og Performance omkring 465 kWh — svarende til {{kr 465}} ved månedens elpris.</p>
<p>Teslas tal gælder standardfælgene for hver version. Vælger du større fælge, stiger forbruget lidt, fordi bredere dæk har mere rullemodstand og luftmodstand. Den ældre Model Y fra 2020–2024 brugte mærkbart mere: Tesla opgiver selv 16,9 kWh for Long Range AWD og 17,3 kWh for Performance af den gamle generation. Køber du brugt, er Juniper altså en reel forbedring på forbruget.</p>

<h2>Hvad koster det at lade en Tesla Model Y hjemme?</h2>
<p>Hjemmeladning er klart billigere end at lade Model Y på offentlige ladere. Med en <a href="/ladestander/">ladeboks</a> på 11 kW fylder du bilen op på en nat, og du betaler kun den almindelige elpris: {{pris_kwh}} i snit denne måned. Kører du 40 km om dagen i en Premium Long Range AWD, bruger du omkring 6,4 kWh, svarende til {{kr 6,4}} om dagen. Et helt år med 15.000 km koster omkring {{kr 2385}} for den version og {{kr 1965}} for Standard — tabellen ovenfor regner det præcist for hver variant.</p>
<p>Tesla oplyser ikke selv batteriets brugbare kapacitet, så vi regner pr. kilometer i stedet for pr. opladning. Det er også mere retvisende: De færreste lader fra 0 til 100 %. Tesla anbefaler at sætte ladegrænsen til 80–90 % til hverdag, og app'en kan starte opladningen på de billigste timer om natten. Læs mere om <a href="/hvad-koster-det-at-lade-en-elbil/">hvad det koster at lade en elbil</a>, og hvordan timeprisen påvirker regningen.</p>

<h2>Supercharger og offentlig lynladning</h2>
<p>Teslas egne Superchargere og de andre lynladere langs motorvejene er bekvemme på ferieturen, men prisen pr. kWh er typisk to-tre gange så høj som hjemme, og den svinger efter tidspunkt og abonnement. Lynladning har også et lidt større tab, fordi batteriet skal køles under opladningen. Til den daglige kørsel betyder det, at hver kWh, du kan flytte hjem i garagen eller i indkørslen, sparer mere end noget valg mellem versionerne. Bor du i lejlighed uden egen lader, er det værd at undersøge, om boligforeningen kan få en fælles løsning.</p>

<h2>Rækkevidde om vinteren og varmepumpen</h2>
<p>Model Y har varmepumpe som standard, og den henter varme fra luften og fra batteriets og motorernes spildvarme. Det gør bilen bedre end mange konkurrenter i frostvejr, men fysikken er den samme: Kold luft er tungere, kolde dæk ruller tungere, og kabinen og batteriet skal varmes op. De 600 km WLTP-rækkevidde for Premium Long Range AWD bliver derfor typisk til 420–510 km i dansk vinterkørsel, og Standard-versionens 534 km til omkring 375–455 km.</p>
<p>Den største gevinst får du ved at forvarme bilen, mens den stadig er tilsluttet laderen. Så kommer varmen fra nettet og ikke fra batteriet, og du kører ud med varm kabine og et batteri, der arbejder mere effektivt.</p>

<h2>Sådan får du forbruget ned i en Model Y</h2>
<p>Farten betyder mest: Mellem 110 og 130 km/t stiger luftmodstanden så meget, at forbruget let vokser med en femtedel. Hold dæktrykket på Teslas anbefaling, især om vinteren, hvor trykket falder med temperaturen. Brug sædevarme og rattvarme frem for at skrue kabinetemperaturen op, og fjern tagboks eller cykelholder, når du ikke bruger dem. Sammenlign med andre familiebiler på siden om <a href="/elbil/">elbilers strømforbrug</a> — eller se Škodas bud på en kompakt elbil i <a href="/elbil/skoda-elroq/">Skoda Elroq</a>.</p>`,
  faqs: [
    {
      question: "Hvad er Tesla Model Y's forbrug pr. km?",
      answer:
        "Ifølge Tesla bruger den nye Model Y (Juniper) 13,1 kWh pr. 100 km som Standard RWD, 15,9 kWh som Premium Long Range AWD og 16,2 kWh som Performance. Det svarer til 0,131–0,162 kWh pr. km, målt fra stikkontakten efter WLTP.",
    },
    {
      question: "Hvad koster det at lade en Tesla Model Y?",
      answer:
        "Ved hjemmeladning koster 100 km i en Premium Long Range AWD {{kr 15,9}} ved månedens elpris på {{pris_kwh}}. Med 15.000 km om året bliver det omkring {{kr 2385}} i strøm. Lynladning undervejs koster typisk to-tre gange så meget pr. kWh.",
    },
    {
      question: "Hvor langt kører en Tesla Model Y om vinteren?",
      answer:
        "Regn med 15–30 % mindre end WLTP-rækkevidden i frost og på motorvej. Premium Long Range AWD med 600 km WLTP kører typisk 420–510 km på en opladning om vinteren; forvarmning ved laderen hjælper mest.",
    },
    {
      question: "Bruger Juniper mindre strøm end den gamle Model Y?",
      answer:
        "Ja. Tesla opgiver 15,9 kWh pr. 100 km for den nye Premium Long Range AWD mod 16,9 kWh for Long Range AWD fra 2020–2024. Over 15.000 km er det omkring 150 kWh mindre om året, svarende til {{kr 150}} ved månedens elpris.",
    },
    {
      question: "Er ladetabet med i Teslas forbrugstal?",
      answer:
        "Ja. WLTP-forbruget er målt som strøm fra stikkontakten under AC-opladning, så tabet i bilens lader er med. Du kan gange tallet direkte med din elpris.",
    },
  ],
  sources: [
    { name: "Tesla Danmark — Model Y, specifikationer og officielt strømforbrug", url: "https://www.tesla.com/da_dk/modely" },
    { name: "Tesla — Køretøjets strømforbrug (WLTP-tabel for alle modeller)", url: "https://www.tesla.com/da_dk/support/power-consumption" },
    {
      name: "EEA — CO2-emissioner fra nye personbiler 2025 (danske registreringer, WLTP Wh/km)",
      url: "https://www.eea.europa.eu/en/datahub/datahubitem-view/fa8b1229-3db6-495d-b18e-9c9b3267c02b",
    },
  ],
  variants: [
    { name: "Standard RWD", watts: {}, whPerKm: 131, source: 0 },
    { name: "Premium Long Range RWD", watts: {}, whPerKm: 142, source: 0 },
    { name: "Premium Long Range AWD", watts: {}, whPerKm: 159, source: 0 },
    { name: "Performance AWD", watts: {}, whPerKm: 162, source: 0 },
  ],
  publishDate: "2026-11-24",
  updated: "2026-11-22",
  measuredBy: "efter WLTP-normen (Teslas officielle tal, målt fra stikkontakten)",
  figuresNote:
    "WLTP er EU's fælles testcyklus for bilers forbrug; tallet er målt som strøm fra stikkontakten, så ladetabet er med. Tallene er fra Teslas danske modelside og EU's registreringsdata (EEA) som krydstjek — kilderne står nederst på siden.",
};

export default teslaModelY;
