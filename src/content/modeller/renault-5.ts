import type { ModelData } from "@/lib/models";

const renault5: ModelData = {
  slug: "renault-5",
  parent: "elbil",
  brand: "Renault",
  name: "Renault 5",
  released: "2024-11",
  synonyms: [
    "renault 5 forbrug",
    "renault 5 strømforbrug",
    "renault 5 e-tech forbrug",
    "r5 elbil forbrug",
    "renault 5 kwh pr 100 km",
    "renault 5 52 kwh rækkevidde",
    "renault 5 forbrug pr km",
  ],
  title: "Renault 5 strømforbrug (2026) → 40 og 52 kWh i kWh pr. km",
  description:
    "Renault 5 E-Tech electric med 40 og 52 kWh: Renaults officielle WLTP-forbrug fra den danske prisliste, kWh om året, pris pr. 100 km og en fuld opladning.",
  intro:
    "Den lille Renault 5 er billig at lade, fordi batteriet er lille — men pr. kilometer bruger den lidt mere end flere større biler, fx VW ID.3 Neo og Toyota bZ4X.",
  content: `<h2>Hvad bruger en Renault 5 pr. 100 km?</h2>
<p>Renaults danske prisliste for Renault 5 E-Tech electric, gældende fra 28. august til 31. december 2026, oplyser forbruget efter WLTP-metoden for kombineret kørsel. Tallet er målt som strøm fra stikkontakten, så tabet i laderen er med. Versionen med 40 kWh batteri og 120 hk står til 14,5–14,8 kWh pr. 100 km, og versionen med 52 kWh og 150 hk til 14,9–15,2 kWh.</p>
<p>Renault oplyser et spænd for hver version. Prislisten siger ikke, hvilket udstyrsniveau der giver hvilket tal, men alle versioner kører på 18-tommer fælge, så hjulstørrelsen forklarer det ikke. Tabellen ovenfor bruger det laveste tal for hver batteristørrelse; i den høje ende af spændet skal du lægge 0,3 kWh pr. 100 km til. Det er 45 kWh om året med 15.000 km kørsel, svarende til {{kr 45}}.</p>

<h2>40 eller 52 kWh?</h2>
<p>Forskellen mellem de to batterier er 0,4 kWh pr. 100 km. Den store version vejer 57 kg mere ifølge Renaults prisliste og har en stærkere motor. Med 15.000 km om året bruger 40 kWh-versionen omkring 2.175 kWh og 52 kWh-versionen omkring 2.235 kWh — en forskel på 60 kWh, svarende til {{kr 60}} om året.</p>
<p>Rækkevidden er det, der virkelig adskiller dem: 310 km efter WLTP for det lille batteri og 410 km for det store. Til en bil, der mest bruges i byen og på pendlerture under 100 km om dagen, rækker 40 kWh langt. Kører du ofte længere ture, er 52 kWh den mest praktiske, og merforbruget er lille. Kører du som mange småbilsejere 10.000 km om året, ender 40 kWh-versionen på omkring 1.450 kWh.</p>

<h2>Lille bil, men ikke den laveste</h2>
<p>Mange forventer, at den mindste bil bruger mindst. Det passer ikke helt her. <a href="/elbil/vw-id-3/">VW ID.3 Neo</a> med 170 hk står til 14,1 kWh pr. 100 km og den store <a href="/elbil/toyota-bz4x/">Toyota bZ4X</a> med forhjulstræk til 13,9 kWh, begge lavere end Renault 5's 14,5 kWh. Over 15.000 km er de 0,4 kWh pr. 100 km mod ID.3 omkring 60 kWh om året. Vægt er ikke alt: ved landevejsfart betyder luftmodstanden mest, og her har længere, strømlinede biler en fordel.</p>
<p>EU's registreringsdata for 2025 bekræfter niveauet: de danske Renault 5 med 120 hk lå på 14,6–14,8 kWh pr. 100 km og med 150 hk på 15,0–15,3 kWh. Til gengæld er batteriet lille, så hver opladning er billig — og det er dét, de fleste mærker på regningen.</p>

<h2>Hvad koster det at lade en Renault 5?</h2>
<p>En fuld opladning af det lille batteri på 40 kWh koster {{kr 40}} ved månedens elpris på {{pris_kwh}}, og det store på 52 kWh {{kr 52}} — lidt mere målt fra stikket på grund af ladetabet. 100 km i en Renault 5 med 40 kWh batteri koster {{kr 14,5}}, og en arbejdsdag med 40 km frem og tilbage omkring {{kr 5,8}} i strøm.</p>
<p>Begge versioner har en indbygget lader, der kan lade med op til 11 kW på tre faser. Renault opgiver 2 timer og 37 minutter fra 15 til 80 % for 40 kWh og 3 timer og 13 minutter for 52 kWh på en 11 kW <a href="/ladestander/">ladestander</a>. Fra en almindelig stikkontakt med 2,3 kW tager det samme 11–17 timer. Lynladning sker med 80 kW for det lille og 100 kW for det store batteri, og 15–80 % tager omkring en halv time. Det korte ladebehov gør det let at nøjes med de billigste nattetimer; se <a href="/hvad-koster-det-at-lade-en-elbil/">hvad det koster at lade en elbil</a> time for time.</p>

<h2>Vinter og motorvej</h2>
<p>Regn med 15–30 % mere forbrug i frost og ved 130 km/t: 14,5 kWh bliver til 16,7–18,9 kWh pr. 100 km, og 100 km koster så {{kr 16,7-18,9}} hjemmeladet. Med det lille batteri falder rækkevidden fra 310 km til omkring 215–265 km, med det store fra 410 km til omkring 285–350 km. Planlæg længere vinterture efter det. Forvarm bilen, mens den er tilsluttet, brug sædevarme, og hold dæktrykket oppe, når det bliver koldt. Flere modeller står på siden om <a href="/elbil/">elbilers strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvad er Renault 5's forbrug pr. km?",
      answer:
        "Ifølge Renaults danske prisliste bruger Renault 5 E-Tech electric 14,5–14,8 kWh pr. 100 km med 40 kWh batteri og 14,9–15,2 kWh med 52 kWh batteri efter WLTP. Det er 0,145–0,152 kWh pr. km, målt fra stikkontakten.",
    },
    {
      question: "Hvad koster det at lade en Renault 5?",
      answer:
        "En fuld opladning af 40 kWh-batteriet koster {{kr 40}} og af 52 kWh-batteriet {{kr 52}} ved månedens elpris på {{pris_kwh}}. 100 km koster {{kr 14,5}} med det lille batteri ved hjemmeladning.",
    },
    {
      question: "Hvor langt kører en Renault 5 på en opladning?",
      answer:
        "310 km med 40 kWh og 410 km med 52 kWh efter WLTP ifølge Renaults prisliste. Om vinteren og på motorvej skal du regne med 15–30 % mindre: omkring 215–265 og 285–350 km.",
    },
    {
      question: "Bruger Renault 5 mindre strøm end en VW ID.3?",
      answer:
        "Nej. VW ID.3 Neo med 170 hk står til 14,1 kWh pr. 100 km, Renault 5 med 40 kWh til 14,5 kWh. Renault 5 har til gengæld et mindre batteri, så en fuld opladning koster mindre.",
    },
    {
      question: "Hvor lang tid tager det at lade en Renault 5 hjemme?",
      answer:
        "På en 11 kW ladestander tager 15–80 % 2 timer og 37 minutter med 40 kWh og 3 timer og 13 minutter med 52 kWh ifølge Renault. Fra en almindelig stikkontakt tager det 11–17 timer.",
    },
  ],
  sources: [
    {
      name: "Renault Danmark — Renault 5 E-Tech electric, prisliste 28. august–31. december 2026 (forbrug, rækkevidde, batteri, ladetider)",
      url: "https://edge.sitecorecloud.io/hedinitaban27a1-hedin8837-prod5c4b-4604/media/project/hedin/distribution-cars/renaultdksite/cardocuments/prisliste-renault-5-e-tech-electric.pdf",
    },
    { name: "Renault Danmark — Renault 5 E-Tech electric, modelside", url: "https://www.renault.dk/biler/elbiler/r5" },
    {
      name: "EEA — CO2-emissioner fra nye personbiler 2025 (danske registreringer, WLTP Wh/km)",
      url: "https://www.eea.europa.eu/en/datahub/datahubitem-view/fa8b1229-3db6-495d-b18e-9c9b3267c02b",
    },
  ],
  variants: [
    { name: "40 kWh, 120 hk", watts: {}, whPerKm: 145, source: 0 },
    { name: "52 kWh, 150 hk", watts: {}, whPerKm: 149, source: 0 },
  ],
  publishDate: "2026-12-01",
  updated: "2026-11-22",
  measuredBy: "efter WLTP-normen (Renaults officielle tal, målt fra stikkontakten)",
  figuresNote:
    "WLTP er EU's fælles testcyklus for bilers forbrug; tallet er målt som strøm fra stikkontakten, så ladetabet er med. Tallene er det laveste forbrug pr. batteristørrelse på Renaults danske prisliste, med EU's registreringsdata (EEA) som krydstjek — kilderne står nederst på siden.",
};

export default renault5;
