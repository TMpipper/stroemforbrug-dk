import type { ModelData } from "@/lib/models";

const cupraTavascan: ModelData = {
  slug: "cupra-tavascan",
  parent: "elbil",
  brand: "Cupra",
  name: "Cupra Tavascan",
  released: "2024-10",
  synonyms: [
    "cupra tavascan forbrug",
    "tavascan strømforbrug",
    "cupra tavascan kwh pr 100 km",
    "tavascan endurance forbrug",
    "tavascan vz forbrug",
    "cupra tavascan rækkevidde vinter",
    "tavascan 77 kwh forbrug",
  ],
  title: "Cupra Tavascan strømforbrug (2026) → 58 og 77 kWh batteri",
  description:
    "Cupra Tavascan med 58 og 77 kWh batteri: officielt WLTP-forbrug for alle fem danske varianter, kWh om året, pris pr. 100 km og hvad vinter og motorvej koster.",
  intro:
    "Tavascan med det lille batteri bruger 15,5–15,6 kWh pr. 100 km efter WLTP, med det store 16,1–17,1 kWh. Forskellen mellem den sparsomme og den firehjulstrukne VZ er 1,6 kWh pr. 100 km.",
  content: `<h2>Hvad bruger en Cupra Tavascan pr. 100 km?</h2>
<p>Tavascan er Cupras el-SUV med coupéform, og Cupras danske prisliste opgiver forbruget for hver af de fem varianter, der sælges i Danmark. Med 58 kWh-batteriet (netto) og 190 hk bruger den 155 Wh pr. km, og i Plus-udstyret 156 Wh/km. Med 77 kWh-batteriet og 286 hk bruger Endurance 161 Wh/km og Adrenaline 166 Wh/km, mens den firehjulstrukne VZ Adrenaline med 340 hk bruger 171 Wh/km. Det svarer til 15,5–17,1 kWh pr. 100 km. WLTP-tallet er målt som strøm fra stikkontakten, så ladetabet er med.</p>
<p>Med 15.000 km om året bliver det omkring 2.325 kWh for den sparsomme 58 kWh-version, svarende til {{kr 2325}} ved månedens elpris. Endurance bruger omkring 2.415 kWh ({{kr 2415}}), Adrenaline 2.490 kWh ({{kr 2490}}) og VZ Adrenaline 2.565 kWh ({{kr 2565}}). Ladet hjemme koster 100 km altså {{kr 15,5-17,1}}.</p>
<p>EU's registreringsdata for 2025 bekræfter niveauet: de danske Tavascan lå på 152–168 Wh/km efter WLTP, afhængigt af version og udstyr.</p>

<h2>Lille eller stort batteri, Endurance eller VZ?</h2>
<p>Det store batteri koster lidt mere strøm, fordi bilen er tungere og har en stærkere motor. Endurance bruger 0,6 kWh mere pr. 100 km end 58 kWh-versionen, omkring 90 kWh om året, svarende til {{kr 90}}. Til gengæld stiger rækkevidden efter WLTP fra 439 til 542 km, og ladeeffekten på lynlader fra 105 til 135 kW.</p>
<p>Adrenaline har samme batteri og motor som Endurance, men bruger 0,5 kWh mere pr. 100 km. Rækkevidden falder fra 542 til 532 km. Forskellen ligger i udstyret, ikke i drivlinjen, og den koster omkring 75 kWh om året. VZ Adrenaline med motor på begge aksler ligger 1,0 kWh over Endurance pr. 100 km, omkring 150 kWh om året, svarende til {{kr 150}}. Har du ikke brug for firehjulstræk eller 340 hk, er Endurance den sparsomme vej til lang rækkevidde.</p>

<h2>Tavascan mod andre el-SUV'er</h2>
<p>Tavascan deler elbilplatform med VW ID.4 og Škoda Enyaq, og forbruget ligger tæt på. <a href="/elbil/skoda-enyaq/">Škoda Enyaq</a> bruger 15,0–15,6 kWh pr. 100 km efter WLTP, så en Enyaq 85 sparer omkring 0,8 kWh pr. 100 km i forhold til en Tavascan Endurance, eller omkring 120 kWh om året, svarende til {{kr 120}}. <a href="/elbil/vw-id-4/">VW ID.4</a> ligger på 15,9–16,8 kWh og dermed på højde med Tavascan, og <a href="/elbil/audi-q4-e-tron/">Audi Q4 e-tron</a> bruger 15,3–16,6 kWh.</p>
<p>Den lavere, coupéformede karrosseri giver altså ikke Tavascan et lavere forbrug end søstermodellerne. Forskellen på 100–250 kWh om året betyder dog mindre end, hvor og hvornår du lader bilen.</p>

<h2>Hvad koster det at lade en Tavascan?</h2>
<p>Cupra opgiver batterierne som 58 og 77 kWh netto (61 og 82 kWh brutto). En opladning fra 10 til 80 % fylder derfor omkring 41 kWh på det lille batteri og omkring 54 kWh på det store, svarende til {{kr 41}} og {{kr 54}} ved månedens elpris på {{pris_kwh}}, plus lidt ladetab. Begge versioner lader med op til 11 kW hjemme, og ifølge prislisten tager en fuld opladning fra 0 til 100 % omkring 6 timer med det lille batteri og 8 timer med det store. En nat på en <a href="/ladestander/">ladeboks</a> er altså nok.</p>
<p>På lynlader tager 10–80 % omkring 26 minutter for 58 kWh-versionen og 28–29 minutter for 77 kWh-versionen under gode forhold. Offentlig lynladning koster typisk væsentligt mere pr. kWh end strøm hjemme, og prisen afhænger af operatør og abonnement. Lader du hjemme om natten, hvor elprisen oftest er lavest, holder du kilometerprisen nede. Se <a href="/hvad-koster-det-at-lade-en-elbil/">hvad det koster at lade en elbil</a>.</p>

<h2>Vinter, motorvej og gode vaner</h2>
<p>I frost og ved høj fart stiger forbruget typisk 15–30 % over WLTP. For en Tavascan Endurance betyder det omkring 18,5–20,9 kWh pr. 100 km og en rækkevidde på omkring 415–470 km. 58 kWh-versionen kommer ned på omkring 340–380 km. Cupra skriver selv i prislisten, at især høj hastighed og lave temperaturer reducerer rækkevidden.</p>
<ul>
<li>Forvarm kabinen og batteriet, mens bilen sidder i laderen, så varmen kommer fra nettet og ikke fra batteriet.</li>
<li>Brug sæde- og rattvarme frem for høj kabinetemperatur på korte ture.</li>
<li>Hold 110–120 km/t på langtur: på motorvejen er luftmodstanden den store post.</li>
<li>Tjek dæktrykket, når det bliver koldt — lavt tryk koster både rækkevidde og vejgreb.</li>
</ul>
<p>Se flere modeller på siden om <a href="/elbil/">elbilers strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvad er Cupra Tavascans forbrug pr. km?",
      answer:
        "Ifølge Cupras danske prisliste 155–171 Wh pr. km efter WLTP: 155–156 Wh/km med 58 kWh-batteriet, 161–166 Wh/km med 77 kWh og baghjulstræk og 171 Wh/km for den firehjulstrukne VZ Adrenaline.",
    },
    {
      question: "Hvad koster det at køre 100 km i en Tavascan?",
      answer: "100 km koster {{kr 15,5}} til {{kr 17,1}} ladet hjemme ved månedens elpris på {{pris_kwh}}, afhængigt af batteri og variant.",
    },
    {
      question: "Bruger Tavascan VZ meget mere strøm end Endurance?",
      answer:
        "VZ Adrenaline bruger 17,1 kWh pr. 100 km mod 16,1 kWh for Endurance. Med 15.000 km om året er det omkring 150 kWh ekstra, svarende til {{kr 150}}.",
    },
    {
      question: "Hvor langt kører en Tavascan om vinteren?",
      answer:
        "Regn med 15–30 % under WLTP i frost og på motorvej. En Endurance kører typisk 415–470 km, 58 kWh-versionen 340–380 km.",
    },
    {
      question: "Hvor hurtigt lader en Cupra Tavascan?",
      answer:
        "Hjemme med op til 11 kW: omkring 6 timer fra 0 til 100 % med 58 kWh og 8 timer med 77 kWh. På lynlader 10–80 % på omkring 26–29 minutter ifølge Cupra.",
    },
  ],
  sources: [
    {
      name: "Cupra Danmark — Tavascan, prisliste med forbrug, rækkevidde, batteri og ladetider pr. variant",
      url: "https://www.cupra.dk/prisliste/tavascan/",
    },
    {
      name: "EEA — CO2-emissioner fra nye personbiler 2025 (danske registreringer, WLTP Wh/km)",
      url: "https://www.eea.europa.eu/en/datahub/datahubitem-view/fa8b1229-3db6-495d-b18e-9c9b3267c02b",
    },
  ],
  variants: [
    { name: "58 kWh, 190 hk", watts: {}, whPerKm: 155, source: 0 },
    { name: "58 kWh, 190 hk, Plus", watts: {}, whPerKm: 156, source: 0 },
    { name: "77 kWh, 286 hk, Endurance", watts: {}, whPerKm: 161, source: 0 },
    { name: "77 kWh, 286 hk, Adrenaline", watts: {}, whPerKm: 166, source: 0 },
    { name: "77 kWh, 340 hk firehjulstræk, VZ Adrenaline", watts: {}, whPerKm: 171, source: 0 },
  ],
  publishDate: "2026-12-29",
  updated: "2026-11-24",
  measuredBy: "efter WLTP-normen (Cupras officielle tal, målt fra stikkontakten)",
  figuresNote:
    "WLTP er EU's fælles testcyklus for bilers forbrug; tallet er målt som strøm fra stikkontakten, så ladetabet er med. Tallene er fra Cupras danske prisliste med EU's registreringsdata (EEA) som krydstjek. Kilderne står nederst på siden.",
};

export default cupraTavascan;
