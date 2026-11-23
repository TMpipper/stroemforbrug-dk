import type { ModelData } from "@/lib/models";

const mercedesEqa: ModelData = {
  slug: "mercedes-eqa",
  parent: "elbil",
  brand: "Mercedes-Benz",
  name: "Mercedes EQA",
  released: "2021-03",
  synonyms: [
    "mercedes eqa forbrug",
    "mercedes eqa strømforbrug",
    "eqa 250+ forbrug",
    "eqa 350 4matic forbrug",
    "mercedes eqa kwh pr 100 km",
    "mercedes eqa rækkevidde vinter",
    "eqa forbrug pr km",
  ],
  title: "Mercedes EQA strømforbrug (2026) → EQA 250+ og 350 i kWh",
  description:
    "Mercedes EQA 250+ og EQA 350 4MATIC: det officielle WLTP-forbrug på 14,6 og 17,1 kWh pr. 100 km, kWh om året, ladetider og pris pr. 100 km.",
  intro:
    "EQA 250+ med forhjulstræk bruger 14,6 kWh pr. 100 km efter WLTP, den firehjulstrukne EQA 350 4MATIC 17,1 kWh. Forskellen er omkring 375 kWh om året.",
  content: `<h2>Hvad bruger en Mercedes EQA pr. 100 km?</h2>
<p>EQA er Mercedes' kompakte el-SUV, bygget på samme grundkonstruktion som benzin- og diesel-GLA. Mercedes' danske side med tekniske data opgiver to versioner med samme batteri på 70 kWh nyttig kapacitet. EQA 250+ har forhjulstræk og 140 kW (190 hk) og bruger 14,6 kWh pr. 100 km efter WLTP med en rækkevidde på 553 km. EQA 350 4MATIC har to motorer, firehjulstræk og 215 kW (292 hk) og bruger 17,1 kWh pr. 100 km med en rækkevidde på 471 km. WLTP-tallet er målt som strøm fra stikkontakten, så ladetabet er med.</p>
<p>Med 15.000 km om året bruger EQA 250+ omkring 2.190 kWh, svarende til {{kr 2190}} ved månedens elpris. EQA 350 4MATIC bruger omkring 2.565 kWh, svarende til {{kr 2565}}. 100 km koster {{kr 14,6}} i EQA 250+ og {{kr 17,1}} i EQA 350, ladet hjemme.</p>
<p>EU's registreringsdata for 2025 bekræfter tallene. De 2.942 danske EQA med 140 kW-motoren lå mellem 14,6 og 17,8 kWh pr. 100 km, men med et gennemsnit på 14,8 kWh — langt de fleste er altså solgt tæt på Mercedes' tal. De 90 firehjulstrukne EQA 350 lå på 17,4 kWh i gennemsnit.</p>

<h2>EQA 250+ eller EQA 350 4MATIC?</h2>
<p>Valget af version er den store forskel i en EQA. Den ekstra motor og den højere ydelse i EQA 350 koster 2,5 kWh pr. 100 km. Med 15.000 km om året er det omkring 375 kWh, svarende til {{kr 375}}, og rækkevidden falder 82 km efter WLTP. Til gengæld får du firehjulstræk, 0–100 km/t på 6,0 sekunder mod 8,6 og en højere anhængervægt (op til 1.800 kg med bremse mod 1.500 kg).</p>
<p>Plusset i navnet EQA 250+ betyder, at den har det store batteri. Den har kun én motor og slipper for vægten og friktionen fra bagmotoren i 350'eren. Trækker du ikke trailer og kører mest på tørre veje, er 250+ det sparsomme valg.</p>
<p>Udstyr og fælge flytter også forbruget lidt. Mercedes' side viser ét tal pr. version, men EU-dataene viser, at enkelte EQA 250+ med meget udstyr er registreret med op til 17,8 kWh pr. 100 km. Det konkrete tal for en bestemt bil står på dens registreringsattest.</p>

<h2>Hvad koster det at lade en EQA?</h2>
<p>En fuld opladning af det 70 kWh store batteri koster {{kr 70}} ved månedens elpris på {{pris_kwh}}, lidt mere målt fra stikket, fordi der tabes strøm undervejs. Mercedes opgiver 7 timer og 15 minutter fra 0 til 100 % med 11 kW, så en nat på en <a href="/ladestander/">ladeboks</a> fylder batteriet helt op.</p>
<p>På lynlader tager EQA højst 100 kW, og Mercedes opgiver 35 minutter fra 10 til 80 %. Det er langsommere end nyere elbiler, men rigeligt til en pause på en langtur. En opladning fra 10 til 80 % fylder omkring 49 kWh, og offentlig lynladning koster typisk væsentligt mere pr. kWh end strøm hjemme. Sæt ladningen til de sene nattetimer, hvor elprisen oftest er lavest. Se <a href="/hvad-koster-det-at-lade-en-elbil/">hvad det koster at lade en elbil</a>.</p>

<h2>EQA mod CLA, iX1 og de andre kompakte SUV'er</h2>
<p>Mercedes' egen <a href="/elbil/mercedes-cla/">CLA</a> på ny elbilplatform viser, hvor meget teknikken har flyttet sig. CLA 250+ bruger 12,6 kWh pr. 100 km, 2,0 kWh mindre end EQA 250+. Det er omkring 300 kWh om året, svarende til {{kr 300}} — men CLA er en lav sedan, ikke en SUV.</p>
<p>Blandt de kompakte SUV'er klarer EQA 250+ sig fint. <a href="/elbil/bmw-ix1/">BMW iX1</a> eDrive20 bruger 15,5–17,1 kWh pr. 100 km, <a href="/elbil/audi-q4-e-tron/">Audi Q4 e-tron</a> 15,3–16,6 kWh og <a href="/elbil/volvo-ex40/">Volvo EX40</a> 16,7–18,1 kWh. Mod iX1 eDrive20 sparer EQA 250+ mindst 0,9 kWh pr. 100 km, omkring 135 kWh om året. EQA 350 4MATIC med 17,1 kWh ligger på niveau med iX1 xDrive30 og EX40.</p>

<h2>Vinter, motorvej og gode vaner</h2>
<p>Om vinteren og på motorvej skal du typisk lægge 15–30 % til WLTP-tallet. For EQA 250+ betyder det 16,8–19,0 kWh pr. 100 km og en rækkevidde på omkring 425–480 km. EQA 350 4MATIC kommer op på 19,7–22,2 kWh og ned på 360–410 km.</p>
<ul>
<li>Forvarm kabinen og batteriet via appen, mens bilen sidder i laderen.</li>
<li>Brug sæde- og rattvarme frem for høj kabinetemperatur.</li>
<li>Hold 110–120 km/t på langtur: en SUV med høj front mærker luftmodstanden.</li>
<li>Tjek dæktrykket, når det bliver koldt — lavt tryk koster rækkevidde.</li>
</ul>
<p>Se flere modeller på siden om <a href="/elbil/">elbilers strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvad er Mercedes EQA's forbrug pr. km?",
      answer:
        "Ifølge Mercedes' danske tekniske data bruger EQA 250+ 146 Wh pr. km og EQA 350 4MATIC 171 Wh pr. km efter WLTP, svarende til 14,6 og 17,1 kWh pr. 100 km.",
    },
    {
      question: "Hvor stort er batteriet i en Mercedes EQA?",
      answer: "Begge versioner har 70 kWh nyttig kapacitet. En fuld opladning koster {{kr 70}} ved månedens elpris på {{pris_kwh}} plus lidt ladetab.",
    },
    {
      question: "Hvad koster det at køre 100 km i en EQA?",
      answer: "100 km koster {{kr 14,6}} i EQA 250+ og {{kr 17,1}} i EQA 350 4MATIC, ladet hjemme ved månedens elpris.",
    },
    {
      question: "Hvor langt kører en EQA om vinteren?",
      answer:
        "Regn med 15–30 % under WLTP i frost og på motorvej. EQA 250+ kører typisk 425–480 km og EQA 350 4MATIC 360–410 km.",
    },
    {
      question: "Hvor hurtigt lader en Mercedes EQA?",
      answer:
        "Med op til 100 kW på lynlader tager 10–80 % omkring 35 minutter ifølge Mercedes. Hjemme med 11 kW tager 0–100 % 7 timer og 15 minutter.",
    },
  ],
  sources: [
    {
      name: "Mercedes-Benz Danmark — EQA, oversigt og tekniske data (arkiveret kopi, 21. april 2026)",
      url: "https://web.archive.org/web/20260421202143/https://www.mercedes-benz.dk/passengercars/models/suv/eqa/overview.html",
    },
    {
      name: "EEA — CO2-emissioner fra nye personbiler 2025 (danske registreringer, WLTP Wh/km)",
      url: "https://www.eea.europa.eu/en/datahub/datahubitem-view/fa8b1229-3db6-495d-b18e-9c9b3267c02b",
    },
  ],
  variants: [
    { name: "EQA 250+ (70 kWh)", watts: {}, whPerKm: 146, source: 0 },
    { name: "EQA 350 4MATIC (70 kWh)", watts: {}, whPerKm: 171, source: 0 },
  ],
  publishDate: "2026-12-18",
  updated: "2026-11-23",
  measuredBy: "efter WLTP-normen (Mercedes' officielle tal, målt fra stikkontakten)",
  figuresNote:
    "WLTP er EU's fælles testcyklus for bilers forbrug; tallet er målt som strøm fra stikkontakten, så ladetabet er med. Mercedes' danske side kunne ikke hentes direkte, så tallene er fra en arkiveret kopi af siden (21. april 2026), med EU's registreringsdata (EEA) som krydstjek. Kilderne står nederst på siden.",
};

export default mercedesEqa;
