import type { ModelData } from "@/lib/models";

const vwId4: ModelData = {
  slug: "vw-id-4",
  parent: "elbil",
  brand: "Volkswagen",
  name: "VW ID.4",
  released: "2023-09",
  synonyms: [
    "vw id 4 forbrug",
    "vw id4 strømforbrug",
    "volkswagen id.4 forbrug",
    "id4 forbrug pr km",
    "id.4 pro forbrug",
    "id.4 gtx forbrug",
    "id4 kwh pr 100 km",
  ],
  title: "VW ID.4 strømforbrug (2026) → Pure, Pro og GTX i kWh",
  description:
    "VW ID.4 Pure, Pro, Pro 4MOTION og GTX: Volkswagens officielle WLTP-forbrug fra den danske prisliste, kWh om året, pris pr. 100 km og vinterrækkevidde.",
  intro:
    "ID.4 var den mest registrerede elbil i Danmark i 2025 ifølge EU's registreringsdata — og Pro-versionen med baghjulstræk er den sparsomste i familien.",
  content: `<h2>Hvad bruger en VW ID.4 pr. 100 km?</h2>
<p>Volkswagen opgiver forbruget for hver ID.4-version på den danske prisliste, målt efter WLTP, EU's fælles testcyklus. Tallet er strøm fra stikkontakten, så tabet i bilens lader er regnet med, og du kan gange det direkte med din elpris. ID.4 Pro med 286 hk og baghjulstræk står i dag til 15,9 kWh pr. 100 km. På prislisten fra foråret 2026 havde Pure med det mindre batteri 16,2 kWh, Pro 4MOTION med firehjulstræk 16,5 kWh og GTX med 340 hk 16,8 kWh.</p>
<p>Tallene gælder grundudstyret i hver version. Style-udstyret og de særlige Edition-modeller med større fælge har ligget op til 0,3 kWh højere. Det lyder af lidt, men over et år med 15.000 km er 0,2 kWh pr. 100 km 30 kWh — omkring {{kr 30}} om året.</p>

<h2>Pure, Pro, 4MOTION eller GTX?</h2>
<p>Det overraskende er, at ID.4 Pure med det mindste batteri bruger mere strøm end Pro. Pure har 190 hk og 58 kWh brugbart batteri, mens Pro har 286 hk og 77 kWh brugbart. Volkswagens egne tal viser altså en forskel på 0,3 kWh pr. 100 km i den modsatte retning af, hvad mange forventer. Vælg derfor ikke Pure for at spare strøm — vælg den, hvis du kører korte ture og ikke har brug for rækkevidden.</p>
<p>Firehjulstræk koster omkring 0,6 kWh pr. 100 km mere end Pro, og GTX med den kraftigste drivlinje og sportsundervogn 0,9 kWh. Med 15.000 km om året betyder det 2.385 kWh for Pro, 2.475 kWh for Pro 4MOTION og 2.520 kWh for GTX — en forskel på omkring 135 kWh mellem den mest og den mindst sparsomme version, svarende til {{kr 135}} om året. Tabellen ovenfor viser prisen for hver.</p>
<p>EU's registreringsdata for 2025 bekræfter niveauet: De danske ID.4 med 286 hk lå på 159–175 Wh/km med et gennemsnit på 163, og GTX på 170–175 Wh/km. Den ældre Pure med 170 hk lå på 166–170 Wh/km.</p>

<h2>Hvad koster det at lade en VW ID.4?</h2>
<p>En fuld opladning af Pro's 77 kWh brugbare batteri koster {{kr 77}} ved månedens elpris på {{pris_kwh}}, og Pure's 58 kWh {{kr 58}} — begge lidt mere fra stikket på grund af ladetabet. Pr. kilometer er det lettere at overskue: 100 km i en ID.4 Pro koster {{kr 15,9}} hjemme, og en dag med 40 km pendling omkring {{kr 6,4}} i strøm.</p>
<p>ID.4 lader med 11 kW på vekselstrøm, og Volkswagen opgiver 8,5 timer fra 0 til 100 % for Pro — en nat på en <a href="/ladestander/">ladeboks</a>. Til hverdag lader de fleste fra 20 til 80 %, og så er bilen fyldt på få timer. Planlæg opladningen efter nattens billigste timer i bilens app eller ladeboksen; læs mere om <a href="/hvad-koster-det-at-lade-en-elbil/">hvad det koster at lade en elbil</a>, når prisen skifter time for time.</p>
<p>På lynlader tager Pro op til 165 kW, og Volkswagen opgiver 29 minutter fra 10 til 80 %. Offentlig lynladning koster typisk to-tre gange så meget pr. kWh som hjemme, så det er hjemmeladningen, der bestemmer årsregningen.</p>

<h2>Rækkevidde om vinteren og på motorvej</h2>
<p>ID.4 Pro har en WLTP-rækkevidde på 561 km. Regn med 15–30 % mindre i dansk vinterkørsel, fordi kabinen og batteriet skal varmes, og dækkene ruller tungere: typisk 390–475 km. På motorvejen ved 130 km/t stiger forbruget tilsvarende til omkring 18–21 kWh pr. 100 km, og 100 km koster så {{kr 18-21}} hjemmeladet. ID.4 er en høj SUV med stor frontflade, så farten betyder mere her end i en lav sedan.</p>
<p>Forvarm bilen via appen, mens den er tilsluttet laderen, så varmen kommer fra nettet. En varmepumpe sparer mest omkring frysepunktet — tjek udstyrslisten for netop din ID.4, om den har en.</p>

<h2>Sådan sparer du strøm i en ID.4</h2>
<p>Hold farten nede på motorvejen; 110 km/t i stedet for 130 km/t sparer mærkbart på en langtur. Kør i B-tilstand i byen, så bilen genvinder mere energi ved opbremsning. Tjek dæktrykket, når temperaturen falder, og brug sæde- og rattvarme frem for høj kabinetemperatur. Sammenlign med <a href="/elbil/skoda-enyaq/">Skoda Enyaq</a>, der bygger på samme platform og batterier, eller med <a href="/elbil/tesla-model-y/">Tesla Model Y</a>. Flere modeller står på siden om <a href="/elbil/">elbilers strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvad er VW ID.4's forbrug pr. km?",
      answer:
        "Ifølge Volkswagens danske prisliste bruger ID.4 Pro 15,9 kWh pr. 100 km efter WLTP. Pure havde 16,2 kWh, Pro 4MOTION 16,5 kWh og GTX 16,8 kWh på prislisten fra foråret 2026. Det er 0,159–0,168 kWh pr. km, målt fra stikkontakten.",
    },
    {
      question: "Hvad koster det at lade en VW ID.4?",
      answer:
        "En fuld opladning af ID.4 Pro's 77 kWh brugbare batteri koster {{kr 77}} ved månedens elpris på {{pris_kwh}}. 100 km koster {{kr 15,9}} ved hjemmeladning, og 15.000 km om året omkring {{kr 2385}} i alt.",
    },
    {
      question: "Hvor langt kører en ID.4 om vinteren?",
      answer:
        "Regn med 15–30 % under WLTP-rækkevidden i frost og på motorvej. ID.4 Pro med 561 km WLTP kører typisk 390–475 km på en opladning en kold vinterdag.",
    },
    {
      question: "Bruger ID.4 Pure mindre strøm end Pro?",
      answer:
        "Nej. Pure med det mindre batteri stod til 16,2 kWh pr. 100 km mod 15,9 kWh for Pro på Volkswagens danske prisliste. Pro kører samtidig markant længere på en opladning.",
    },
    {
      question: "Hvor meget mere bruger ID.4 GTX?",
      answer:
        "GTX med firehjulstræk og 340 hk stod til 16,8 kWh pr. 100 km, 0,9 kWh mere end Pro. Med 15.000 km om året er det omkring 135 kWh ekstra, svarende til {{kr 135}} om året.",
    },
  ],
  sources: [
    { name: "Volkswagen Danmark — ID.4 prisliste (forbrug, rækkevidde, batteri), november 2026", url: "https://www.volkswagen.dk/app/da/prisliste/id4/" },
    {
      name: "Volkswagen Danmark — ID.4 prisliste, april 2026 (arkiveret kopi med Pure, Pro 4MOTION og GTX)",
      url: "https://web.archive.org/web/20260416203659/https://www.volkswagen.dk/app/da/prisliste/id4/",
    },
    {
      name: "EEA — CO2-emissioner fra nye personbiler 2025 (danske registreringer, WLTP Wh/km)",
      url: "https://www.eea.europa.eu/en/datahub/datahubitem-view/fa8b1229-3db6-495d-b18e-9c9b3267c02b",
    },
  ],
  variants: [
    { name: "Pure", watts: {}, whPerKm: 162, source: 1 },
    { name: "Pro", watts: {}, whPerKm: 159, source: 0 },
    { name: "Pro 4MOTION", watts: {}, whPerKm: 165, source: 1 },
    { name: "GTX", watts: {}, whPerKm: 168, source: 1 },
  ],
  publishDate: "2026-11-26",
  updated: "2026-11-22",
  measuredBy: "efter WLTP-normen (Volkswagens officielle tal, målt fra stikkontakten)",
  figuresNote:
    "WLTP er EU's fælles testcyklus for bilers forbrug; tallet er målt som strøm fra stikkontakten, så ladetabet er med. Tallene er fra Volkswagens danske prisliste og EU's registreringsdata (EEA) som krydstjek — kilderne står nederst på siden.",
};

export default vwId4;
