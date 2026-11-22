import type { ModelData } from "@/lib/models";

const vwId7: ModelData = {
  slug: "vw-id-7",
  parent: "elbil",
  brand: "Volkswagen",
  name: "VW ID.7",
  released: "2023-11",
  synonyms: [
    "vw id7 forbrug",
    "volkswagen id.7 strømforbrug",
    "id.7 tourer forbrug",
    "id 7 kwh pr 100 km",
    "vw id.7 rækkevidde vinter",
    "id.7 gtx forbrug",
    "id.7 style s forbrug",
  ],
  title: "VW ID.7 strømforbrug (2026) → sedan og Tourer i kWh pr. km",
  description:
    "VW ID.7 og ID.7 Tourer: Volkswagens officielle WLTP-forbrug for Pure, Life, Style, Style S og GTX, kWh om året, pris pr. 100 km og en fuld opladning.",
  intro:
    "ID.7 Style S med det store batteri er den mest sparsomme med 13,8 kWh pr. 100 km. GTX Tourer med firehjulstræk bruger mest, 16,6 kWh.",
  content: `<h2>Hvad bruger en VW ID.7 pr. 100 km?</h2>
<p>VW ID.7 er Volkswagens store elbil, en lang fastback-sedan og stationcaren ID.7 Tourer på samme platform. Volkswagens danske prislister opgiver ét WLTP-forbrug pr. version. For sedanen spænder det fra 13,8 kWh pr. 100 km i Style S til 16,3 kWh i GTX Max 4MOTION. Tourer bruger 0,3–0,5 kWh mere i hver version, fra 14,3 til 16,6 kWh. WLTP-tallet er målt som strøm fra stikkontakten, så ladetabet er med.</p>
<p>Med 15.000 km om året bruger den mest sparsomme, Style S, omkring 2.070 kWh. Det svarer til {{kr 2070}} ved månedens elpris. Den mest strømkrævende, GTX Max Tourer, bruger omkring 2.490 kWh, svarende til {{kr 2490}}. De almindelige Pure og Life ligger midt imellem med 2.130–2.205 kWh. 100 km koster {{kr 13,8-16,6}} hjemmeladet, afhængigt af version.</p>
<p>EU's registreringsdata for 2025 ligger tæt på. Danske ID.7 med 210 kW-motoren lå i gennemsnit på 14,2 kWh pr. 100 km og Tourer på 14,6 kWh. Med 250 kW-firehjulstræk var gennemsnittet 17,1 og 17,4 kWh.</p>

<h2>Batteri og version: derfor er Style S den sparsomme</h2>
<p>Pure og Life har 59 kWh nyttigt batteri og en motor på 204 hk. Style har 77 kWh og 286 hk, Style S og GTX har 86 kWh. Det store batteri vejer mere, men Style S er alligevel den mest sparsomme version på prislisten, 0,4 kWh under Pure, og den kører 701 km efter WLTP. Pure når 473 km og Style 594 km.</p>
<p>GTX Max har en ekstra motor på forakslen og 340 hk. Det koster 2,5 kWh pr. 100 km mod Style S — omkring 375 kWh om året, svarende til {{kr 375}}. Har du ikke brug for firehjulstræk, er Style S både den stærke og den sparsomme løsning.</p>

<h2>ID.7 Tourer: hvad koster stationcaren?</h2>
<p>Tourer har et større bagagerum og en lidt mindre aerodynamisk bagende. Ifølge Volkswagens Tourer-prisliste bruger den 14,6 kWh i Pure, 14,7 i Life, 15,1 i Style, 14,3 i Style S og 16,6 i GTX Max. Forskellen til sedanen er 0,3–0,5 kWh pr. 100 km, svarende til 45–75 kWh om året. Rækkevidden falder tilsvarende, så Tourer Style S kører 679 km mod sedanens 701 km.</p>

<h2>Hvad koster det at lade en ID.7?</h2>
<p>En fuld opladning af det nyttige batteri koster {{kr 59}} for Pure og Life, {{kr 77}} for Style og {{kr 86}} for Style S og GTX ved månedens elpris på {{pris_kwh}} — lidt mere målt fra stikket. Hjemme lader alle versioner med op til 11 kW. Volkswagen opgiver 6,5 timer for 59 kWh og 8–9 timer for de store batterier, så det klares på en <a href="/ladestander/">ladeboks</a> på en nat.</p>
<p>På lynlader tager Pure og Life op til 160 kW, Style 175 kW og Style S op til 200 kW. Fra 10 til 80 % tager det 27–28 minutter ifølge Volkswagen, uanset batteri. Offentlig lynladning koster typisk væsentligt mere pr. kWh end hjemmeladning, og prisen afhænger af operatør og abonnement. Med den lange rækkevidde kan de fleste nøjes med at lade hjemme om natten. Se <a href="/hvad-koster-det-at-lade-en-elbil/">hvad det koster at lade en elbil</a> på forskellige tidspunkter.</p>

<h2>ID.7 mod ID.4, Model 3 og Enyaq</h2>
<p>Trods størrelsen bruger ID.7 mindre strøm end den kortere SUV <a href="/elbil/vw-id-4/">VW ID.4</a>, der ligger på 15,9–16,8 kWh pr. 100 km. Det lave, strømlinede karrosseri gør forskellen. Mod <a href="/elbil/skoda-enyaq/">Škoda Enyaq</a> 85 på 15,3 kWh sparer ID.7 Style S 1,5 kWh pr. 100 km, omkring 225 kWh om året.</p>
<p><a href="/elbil/tesla-model-3/">Tesla Model 3</a> er stadig mere sparsom: 13,0 kWh for baghjulstræk og 14,3 kWh for Long Range AWD. Forskellen er dog mindre end mellem de fleste SUV'er, og ID.7 Style S er en af de mest sparsomme store elbiler på vores sider.</p>

<h2>Vinter og motorvej</h2>
<p>I dansk frost og ved høj fart stiger forbruget typisk 15–30 % over WLTP. For Style S betyder det 15,9–17,9 kWh pr. 100 km og en rækkevidde på omkring 490–600 km. For Pure kommer man ned på omkring 330–400 km. Forvarm kabinen, mens bilen sidder i laderen. Brug sædevarme, og hold 110–120 km/t på lange ture. Det sparer mere strøm end noget andet.</p>
<p>Du kan sammenligne med de andre modeller på siden om <a href="/elbil/">elbilers strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvad er VW ID.7's forbrug pr. km?",
      answer:
        "Ifølge Volkswagens danske prisliste bruger ID.7 13,8–16,3 kWh pr. 100 km efter WLTP, fra Style S til GTX Max. Det er 0,138–0,163 kWh pr. km, målt fra stikkontakten.",
    },
    {
      question: "Bruger ID.7 Tourer mere strøm end sedanen?",
      answer:
        "Ja, 0,3–0,5 kWh mere pr. 100 km i hver version. Tourer spænder fra 14,3 kWh i Style S til 16,6 kWh i GTX Max ifølge Volkswagen.",
    },
    {
      question: "Hvad koster det at lade en VW ID.7?",
      answer:
        "En fuld opladning koster {{kr 59}} for Pure og Life, {{kr 77}} for Style og {{kr 86}} for Style S og GTX ved månedens elpris på {{pris_kwh}} plus lidt ladetab.",
    },
    {
      question: "Hvilken ID.7 bruger mindst strøm?",
      answer:
        "Style S med 86 kWh-batteri: 13,8 kWh pr. 100 km og 701 km rækkevidde efter WLTP. Med 15.000 km om året er det omkring 2.070 kWh, svarende til {{kr 2070}}.",
    },
    {
      question: "Hvor langt kører en ID.7 om vinteren?",
      answer:
        "Regn med 15–30 % under WLTP i frost og på motorvej. Style S kører typisk 490–600 km, Pure omkring 330–400 km.",
    },
  ],
  sources: [
    {
      name: "Volkswagen Danmark — ID.7, prisliste med forbrug, rækkevidde og ladetider",
      url: "https://www.volkswagen.dk/app/da/prisliste/id7/",
    },
    {
      name: "Volkswagen Danmark — ID.7 Tourer, prisliste",
      url: "https://www.volkswagen.dk/app/da/prisliste/id7-tourer/",
    },
    {
      name: "EEA — CO2-emissioner fra nye personbiler 2025 (danske registreringer, WLTP Wh/km)",
      url: "https://www.eea.europa.eu/en/datahub/datahubitem-view/fa8b1229-3db6-495d-b18e-9c9b3267c02b",
    },
  ],
  variants: [
    { name: "Pure (59 kWh)", watts: {}, whPerKm: 142, source: 0 },
    { name: "Life (59 kWh)", watts: {}, whPerKm: 143, source: 0 },
    { name: "Style (77 kWh)", watts: {}, whPerKm: 148, source: 0 },
    { name: "Style S (86 kWh)", watts: {}, whPerKm: 138, source: 0 },
    { name: "GTX Max 4MOTION", watts: {}, whPerKm: 163, source: 0 },
    { name: "Tourer Pure (59 kWh)", watts: {}, whPerKm: 146, source: 1 },
    { name: "Tourer Life (59 kWh)", watts: {}, whPerKm: 147, source: 1 },
    { name: "Tourer Style (77 kWh)", watts: {}, whPerKm: 151, source: 1 },
    { name: "Tourer Style S (86 kWh)", watts: {}, whPerKm: 143, source: 1 },
    { name: "Tourer GTX Max 4MOTION", watts: {}, whPerKm: 166, source: 1 },
  ],
  publishDate: "2026-12-09",
  updated: "2026-11-22",
  measuredBy: "efter WLTP-normen (Volkswagens officielle tal, målt fra stikkontakten)",
  figuresNote:
    "WLTP er EU's fælles testcyklus for bilers forbrug; tallet er målt som strøm fra stikkontakten, så ladetabet er med. Tallene er fra Volkswagens danske prislister for ID.7 og ID.7 Tourer med EU's registreringsdata (EEA) som krydstjek. Kilderne står nederst på siden.",
};

export default vwId7;
