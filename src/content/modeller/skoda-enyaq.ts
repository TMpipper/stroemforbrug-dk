import type { ModelData } from "@/lib/models";

const skodaEnyaq: ModelData = {
  slug: "skoda-enyaq",
  parent: "elbil",
  brand: "Skoda",
  name: "Skoda Enyaq",
  released: "2025-01",
  synonyms: [
    "skoda enyaq forbrug",
    "skoda enyaq strømforbrug",
    "skoda enyaq forbrug pr km",
    "enyaq 85 forbrug",
    "enyaq 60 forbrug",
    "enyaq coupe forbrug",
    "enyaq kwh pr 100 km",
  ],
  title: "Skoda Enyaq strømforbrug (2026) → kWh pr. 100 km og pris",
  description:
    "Den nye Skoda Enyaq og Enyaq Coupé: Škodas officielle WLTP-forbrug for 60, 85, 85x og RS, kWh om året, pris pr. 100 km og en fuld opladning.",
  intro:
    "Den store Enyaq bruger ikke mere strøm end den mindre Elroq — ifølge Škodas egne tal ligger den endda en anelse lavere med det store batteri.",
  content: `<h2>Hvad bruger en Skoda Enyaq pr. 100 km?</h2>
<p>Den opdaterede Enyaq, som Škoda præsenterede i januar 2025 med ny front og nyt design, står på den danske prisliste med et officielt WLTP-forbrug for hver version. Tallet er målt som strøm fra stikkontakten, så tabet i laderen er med. Enyaq 60 ligger på 15,1 kWh pr. 100 km, Enyaq 85 på 15,3 kWh, den firehjulstrukne 85x på 15,5 kWh og RS på 15,6 kWh. Tallene gælder Selection-udstyret; Sportline med større fælge og sænket undervogn ligger 0,1–0,2 kWh højere.</p>
<p>Coupé-udgaven med det skrå tag glider lidt lettere gennem luften: Enyaq Coupé 85 bruger 15,0 kWh pr. 100 km og kører 588 km på en opladning efter WLTP — omkring 10 km længere end SUV'en med samme batteri. Forskellen i forbrug er kun 0,3 kWh pr. 100 km, så vælg karrosseri efter plads og smag; strømregningen afgør det ikke.</p>

<h2>Sådan har tallene udviklet sig</h2>
<p>EU's registreringsdata for 2025 viser de danske Enyaq 85 med et gennemsnit på 15,5 kWh pr. 100 km og Enyaq 60 på 16,0 kWh. De nyeste tal på prislisten ligger 0,2–0,9 kWh lavere, fordi Škoda løbende har opdateret drivlinjen. Den ældre Enyaq fra før opdateringen i 2025 havde generelt et højere forbrug. Har du en brugt Enyaq, står det tal, der gælder for netop din bil, på registreringsattesten.</p>

<h2>Enyaq 60, 85, 85x eller RS?</h2>
<p>Enyaq 60 har 58 kWh brugbart batteri og 190 hk; de øvrige versioner har 77 kWh brugbart. Forskellen i forbrug mellem 60 og 85 er 0,2 kWh pr. 100 km — over 15.000 km om året kun omkring 30 kWh, svarende til {{kr 30}} om året. Til gengæld giver det store batteri 579 km WLTP-rækkevidde mod 453 km. Firehjulstrækket i 85x koster yderligere 0,2 kWh pr. 100 km, og RS med 340 hk ender på 15,6 kWh — kun 0,5 kWh over den billigste version.</p>
<p>Med 15.000 km om året bruger en Enyaq 85 omkring 2.295 kWh, svarende til {{kr 2295}} ved månedens elpris, og en RS omkring 2.340 kWh. Tabellen ovenfor regner det for alle varianter.</p>

<h2>Hvad koster det at lade en Skoda Enyaq?</h2>
<p>En fuld opladning af det store batteri med 77 kWh brugbar kapacitet koster {{kr 77}} ved månedens elpris på {{pris_kwh}}, og det lille batteri på 58 kWh {{kr 58}} — begge lidt mere målt fra stikket, fordi der tabes strøm i opladningen. Til dagligt er prisen pr. kilometer mere nyttig: 100 km i en Enyaq 85 koster {{kr 15,3}}, og en arbejdsdag med 50 km frem og tilbage omkring {{kr 7,7}} i strøm.</p>
<p>Enyaq lader med 11 kW på vekselstrøm, og Škoda opgiver 8,5 timer fra 0 til 100 % for de store batterier — en nat på en <a href="/ladestander/">ladeboks</a> med tre faser. På lynlader tager 85, 85x og RS op til 165 kW og kommer fra 10 til 80 % på 29 minutter, Enyaq 60 op til 105 kW. Offentlig lynladning koster typisk to-tre gange så meget pr. kWh som hjemme, så den daglige kørsel bør lades i indkørslen, gerne på nattens billigste timer. Se <a href="/hvad-koster-det-at-lade-en-elbil/">hvad det koster at lade en elbil</a> time for time.</p>

<h2>Rækkevidde om vinteren og på langtur</h2>
<p>En Enyaq bruges ofte som familiebil på ferieturen, og her betyder fart og temperatur mest. Regn med 15–30 % mere forbrug i dansk frost og ved 130 km/t: Enyaq 85's 15,3 kWh pr. 100 km bliver til 17,5–20 kWh, og 100 km koster så {{kr 17,5-20}} hjemmeladet. WLTP-rækkevidden på 579 km bliver tilsvarende til omkring 405–490 km. Med tagboks eller cykelholder kommer der yderligere luftmodstand oveni.</p>
<p>Forvarm bilen, mens den er tilsluttet, så varmen kommer fra nettet og batteriet starter turen varmt. En varmepumpe sparer mest omkring frysepunktet; tjek udstyrslisten for den konkrete bil, om den har en. Brug navigationens planlægning til lynladere, så batteriet varmes op inden ladestoppet og lader hurtigere.</p>

<h2>Tips til et lavere forbrug</h2>
<p>Hold dæktrykket på Škodas anbefaling, og tjek det, når temperaturen falder. Brug sæde- og rattvarme frem for høj kabinetemperatur. Lad bilens genvinding arbejde i bykørsel. Og vælg fælge med omtanke: Sportline-hjulene koster lidt strøm hver kilometer. Sammenlign Enyaq med den mindre <a href="/elbil/skoda-elroq/">Skoda Elroq</a> eller med <a href="/elbil/toyota-bz4x/">Toyota bZ4X</a>, eller se flere modeller på siden om <a href="/elbil/">elbilers strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvad er Skoda Enyaq's forbrug pr. km?",
      answer:
        "Ifølge Škodas danske prisliste bruger den nye Enyaq 15,1 kWh pr. 100 km som 60, 15,3 kWh som 85, 15,5 kWh som 85x og 15,6 kWh som RS efter WLTP. Enyaq Coupé 85 bruger 15,0 kWh. Det er 0,15–0,156 kWh pr. km, målt fra stikkontakten.",
    },
    {
      question: "Hvad koster det at lade en Skoda Enyaq?",
      answer:
        "En fuld opladning af det store batteris 77 kWh koster {{kr 77}} ved månedens elpris på {{pris_kwh}}, det lille batteris 58 kWh {{kr 58}} ved samme pris. 100 km i en Enyaq 85 koster {{kr 15,3}} ved hjemmeladning.",
    },
    {
      question: "Hvor langt kører en Enyaq 85 om vinteren?",
      answer:
        "Regn med 15–30 % under WLTP-rækkevidden i frost og på motorvej. Enyaq 85 med 579 km WLTP kører typisk 405–490 km på en opladning om vinteren.",
    },
    {
      question: "Bruger Enyaq Coupé mindre strøm end SUV'en?",
      answer:
        "Lidt: Enyaq Coupé 85 står til 15,0 kWh pr. 100 km mod 15,3 kWh for SUV'en ifølge Škoda. Over 15.000 km om året er forskellen omkring 45 kWh, svarende til {{kr 45}} om året.",
    },
    {
      question: "Hvor stort er batteriet i en Skoda Enyaq?",
      answer:
        "Enyaq 60 har 58 kWh brugbart (61 kWh brutto), og Enyaq 85, 85x og RS har 77 kWh brugbart (82 kWh brutto) ifølge Škodas danske prisliste.",
    },
  ],
  sources: [
    { name: "Škoda Danmark — Enyaq priser og varianter (forbrug, rækkevidde, batteri)", url: "https://ww4.skoda.dk/prislister/enyaq/" },
    { name: "Škoda Danmark — Enyaq Coupé priser og varianter", url: "https://ww4.skoda.dk/prislister/enyaq-coupe/" },
    {
      name: "EEA — CO2-emissioner fra nye personbiler 2025 (danske registreringer, WLTP Wh/km)",
      url: "https://www.eea.europa.eu/en/datahub/datahubitem-view/fa8b1229-3db6-495d-b18e-9c9b3267c02b",
    },
  ],
  variants: [
    { name: "60", watts: {}, whPerKm: 151, source: 0 },
    { name: "85", watts: {}, whPerKm: 153, source: 0 },
    { name: "85x", watts: {}, whPerKm: 155, source: 0 },
    { name: "RS", watts: {}, whPerKm: 156, source: 0 },
    { name: "Coupé 85", watts: {}, whPerKm: 150, source: 1 },
  ],
  publishDate: "2026-11-25",
  updated: "2026-11-22",
  measuredBy: "efter WLTP-normen (Škodas officielle tal, målt fra stikkontakten)",
  figuresNote:
    "WLTP er EU's fælles testcyklus for bilers forbrug; tallet er målt som strøm fra stikkontakten, så ladetabet er med. Tallene er fra Škodas danske prislister og EU's registreringsdata (EEA) som krydstjek — kilderne står nederst på siden.",
};

export default skodaEnyaq;
