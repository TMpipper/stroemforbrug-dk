import type { ModelData } from "@/lib/models";

const toyotaBz4x: ModelData = {
  slug: "toyota-bz4x",
  parent: "elbil",
  brand: "Toyota",
  name: "Toyota bZ4X",
  released: "2026-01",
  synonyms: [
    "toyota bz4x forbrug",
    "toyota bz4x strømforbrug",
    "bz4x kwh pr 100 km",
    "bz4x forbrug pr km",
    "bz4x 2026 forbrug",
    "bz4x awd forbrug",
    "ny bz4x rækkevidde",
  ],
  title: "Toyota bZ4X strømforbrug (2026) → kWh, pris og rækkevidde",
  description:
    "Den nye Toyota bZ4X: Toyotas officielle WLTP-forbrug for 57,7 og 73,1 kWh med for- og firehjulstræk, kWh om året, pris pr. 100 km og vinterrækkevidde.",
  intro:
    "Den opdaterede bZ4X bruger markant mindre strøm end den første udgave — og forhjulstræk med stort batteri er lige så sparsom som den lille.",
  content: `<h2>Hvad bruger den nye Toyota bZ4X pr. 100 km?</h2>
<p>Toyota opgiver forbruget for hver bZ4X-version i de danske specifikationer, målt efter WLTP, EU's fælles testcyklus, og angivet i Wh pr. km. Tallet er strøm fra stikkontakten, så tabet i bilens lader er med. Den opdaterede bZ4X, der kom til Europa ved årsskiftet 2025/2026, findes med to batterier og to drivlinjer: 57,7 kWh med forhjulstræk og 167 hk, 73,1 kWh med forhjulstræk og 224 hk, og 73,1 kWh med firehjulstræk og 343 hk. De to forhjulstrukne bruger begge 139 Wh/km, svarende til 13,9 kWh pr. 100 km, og firehjulstrækket 145 Wh/km i Active Tech-udstyret.</p>
<p>Tallene gælder de mindste fælge. Executive-udstyret med de store hjul ligger højere: Toyota opgiver 141 Wh/km for forhjulstræk og 148 Wh/km for firehjulstræk i Executive-udstyrets standardkonfiguration, og op til 154 og 159 Wh/km afhængigt af hjulvalget. Det er en tydelig illustration af, hvad dæk og fælge betyder for en elbil.</p>

<h2>Hvorfor bruger den nye bZ4X mindre end den gamle?</h2>
<p>Den første bZ4X fra 2022 havde ry for at være tørstig, og EU's registreringsdata for 2025 bekræfter det: De danske biler af den ældre udgave lå på 144–179 Wh/km. Den opdaterede model har nye motorer, et nyt batteri og en batteriforvarmer, og forhjulstrukne versioner ligger nu på 139 Wh/km. Over 15.000 km om året er forskellen mellem en ældre bZ4X på omkring 150 Wh/km og den nye på 139 Wh/km cirka 165 kWh, svarende til {{kr 165}} om året. Køber du brugt, er årgangen altså vigtigere for strømforbruget end udstyret.</p>

<h2>Lille eller stort batteri, for- eller firehjulstræk</h2>
<p>Det store batteri på 73,1 kWh (69 kWh brugbart) koster ikke ekstra i forbrug med forhjulstræk: begge versioner står til 139 Wh/km, men det store batteri kører 569 km mod 444 km på en opladning i Active Tech-udstyret. Firehjulstrækket med 343 hk bruger 6 Wh/km mere, hvilket over et år med 15.000 km giver 90 kWh ekstra — omkring {{kr 90}} om året. Det er en lille pris for trækket i sne og den kraftige acceleration, men vælger du firehjulstræk for en sikkerheds skyld, så husk, at en forhjulstrukket elbil med gode vinterdæk klarer dansk vinter fint.</p>
<p>Med 15.000 km om året bruger de forhjulstrukne versioner omkring 2.085 kWh, svarende til {{kr 2085}}, og firehjulstrækket omkring 2.175 kWh, svarende til {{kr 2175}} om året. Tabellen ovenfor viser det for hver variant ved månedens elpris.</p>

<h2>Hvad koster det at lade en Toyota bZ4X?</h2>
<p>Batteriet på 73,1 kWh har 69 kWh brugbar kapacitet ifølge Toyota, og en fuld opladning af det brugbare batteri koster {{kr 69}} ved månedens elpris på {{pris_kwh}} — lidt mere målt fra stikket på grund af ladetabet. Det lille batteri har 54 kWh brugbart og koster {{kr 54}} at fylde. Pr. 100 km koster en forhjulstrukket bZ4X {{kr 13,9}} ved hjemmeladning.</p>
<p>bZ4X lader med 11 kW på vekselstrøm som standard, og Executive-udstyret har en 22 kW-lader. Hjemme betyder 22 kW sjældent noget, fordi de fleste danske ladebokse leverer 11 kW, og bilen alligevel står hele natten. Det vigtige er, at du lader på nattens billigste timer. Læs om <a href="/ladestander/">ladestandere</a> og om <a href="/hvad-koster-det-at-lade-en-elbil/">hvad det koster at lade en elbil</a>, når prisen skifter time for time.</p>
<p>På farten lader bZ4X med op til 150 kW på jævnstrøm, og Toyota opgiver 30 minutter fra 10 til 80 %. Offentlig lynladning koster typisk to-tre gange så meget pr. kWh som hjemmeladning, så til den daglige kørsel er det hjemmeladningen, der bestemmer regningen.</p>

<h2>Rækkevidde om vinteren — varmepumpe og forvarmning</h2>
<p>bZ4X har varmepumpe, og batteriet kan forvarmes, før du kører til en lynlader. Alligevel koster kulde rækkevidde, fordi kabinen og batteriet skal varmes, og dækkene ruller tungere. Regn med 15–30 % mindre end WLTP i dansk frost: 569 km bliver til omkring 400–485 km, og 444 km til omkring 310–380 km. På motorvejen ved 130 km/t stiger forbruget tilsvarende, og 100 km kan så koste {{kr 16-18}} i stedet for {{kr 13,9}} ved landevejskørsel om sommeren.</p>
<p>Forvarm kabinen via appen, mens bilen er tilsluttet laderen, og brug sæde- og rattvarme frem for at skrue op for kabinetemperaturen. Hold dæktrykket på Toyotas anbefaling — det falder, når det bliver koldt.</p>

<h2>bZ4X sammenlignet med andre familie-SUV'er</h2>
<p>Med 13,9 kWh pr. 100 km for forhjulstræk ligger den nye bZ4X lavere end mange elbiler i samme størrelse. Den er sparsommere end <a href="/elbil/skoda-elroq/">Skoda Elroq</a>, der ligger på 15,1–15,9 kWh, og forhjulstrukne versioner kommer tæt på <a href="/elbil/tesla-model-y/">Tesla Model Y</a> Standard. Toyota sælger også den rummeligere bZ4X Touring, som har sin egen specifikation. Se flere modeller på siden om <a href="/elbil/">elbilers strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvad er Toyota bZ4X's forbrug pr. km?",
      answer:
        "Ifølge Toyotas danske specifikationer bruger den nye bZ4X 139 Wh/km med forhjulstræk (både 57,7 og 73,1 kWh) og 145 Wh/km med firehjulstræk på de mindste fælge, efter WLTP. Det er 13,9–14,5 kWh pr. 100 km.",
    },
    {
      question: "Hvad koster det at lade en Toyota bZ4X?",
      answer:
        "Det store batteris 69 kWh brugbare kapacitet koster {{kr 69}} at fylde ved månedens elpris på {{pris_kwh}}, det lille batteris 54 kWh {{kr 54}} ved samme pris. 100 km koster {{kr 13,9}} ved hjemmeladning i en forhjulstrukket bZ4X.",
    },
    {
      question: "Hvor langt kører en bZ4X om vinteren?",
      answer:
        "Regn med 15–30 % under WLTP-rækkevidden i frost. Med det store batteri og forhjulstræk (569 km WLTP) er det typisk 400–485 km, med det lille batteri (444 km) omkring 310–380 km.",
    },
    {
      question: "Bruger den nye bZ4X mindre strøm end den gamle?",
      answer:
        "Ja. EU's registreringsdata for 2025 viser 144–179 Wh/km for den ældre bZ4X i Danmark, mens Toyota opgiver 139 Wh/km for den opdaterede model med forhjulstræk.",
    },
    {
      question: "Hvor stort er batteriet i en Toyota bZ4X?",
      answer:
        "Toyota opgiver 57,7 kWh brutto og 54 kWh netto for det lille batteri, og 73,1 kWh brutto og 69 kWh netto for det store. Det er nettotallet, du kan bruge til at køre.",
    },
  ],
  sources: [
    { name: "Toyota Danmark — bZ4X, specifikationer (elektrisk forbrug, rækkevidde, batteri)", url: "https://www.toyota.dk/nye-biler/bz4x/specifications" },
    { name: "Toyota Danmark — bZ4X, modelside", url: "https://www.toyota.dk/nye-biler/bz4x" },
    {
      name: "EEA — CO2-emissioner fra nye personbiler 2025 (danske registreringer, WLTP Wh/km)",
      url: "https://www.eea.europa.eu/en/datahub/datahubitem-view/fa8b1229-3db6-495d-b18e-9c9b3267c02b",
    },
  ],
  variants: [
    { name: "57,7 kWh FWD", watts: {}, whPerKm: 139, source: 0 },
    { name: "73,1 kWh FWD", watts: {}, whPerKm: 139, source: 0 },
    { name: "73,1 kWh AWD", watts: {}, whPerKm: 145, source: 0 },
  ],
  publishDate: "2026-11-25",
  updated: "2026-11-22",
  measuredBy: "efter WLTP-normen (Toyotas officielle tal, målt fra stikkontakten)",
  figuresNote:
    "WLTP er EU's fælles testcyklus for bilers forbrug; tallet er målt som strøm fra stikkontakten, så ladetabet er med. Tallene er fra Toyotas danske specifikationer og EU's registreringsdata (EEA) som krydstjek — kilderne står nederst på siden.",
};

export default toyotaBz4x;
