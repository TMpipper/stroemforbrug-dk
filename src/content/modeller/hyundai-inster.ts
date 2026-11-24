import type { ModelData } from "@/lib/models";

const hyundaiInster: ModelData = {
  slug: "hyundai-inster",
  parent: "elbil",
  brand: "Hyundai",
  name: "Hyundai Inster",
  released: "2024-12",
  synonyms: [
    "hyundai inster forbrug",
    "inster strømforbrug",
    "inster kwh pr 100 km",
    "inster 49 kwh forbrug",
    "inster cross forbrug",
    "hyundai inster rækkevidde vinter",
    "inster elbil pr km",
  ],
  title: "Hyundai Inster strømforbrug (2026) → 42 og 49 kWh batteri",
  description:
    "Hyundai Inster med 42 og 49 kWh batteri: officielt WLTP-forbrug fra Hyundais danske prisliste, kWh om året, pris pr. 100 km og rækkevidde om vinteren.",
  intro:
    "Inster bruger 14,3 kWh pr. 100 km efter WLTP med det lille batteri og 14,9–15,1 kWh med det store. Den lille bybil bruger dermed omtrent det samme som flere større kompaktbiler.",
  content: `<h2>Hvad bruger en Hyundai Inster pr. 100 km?</h2>
<p>Inster er Hyundais mindste elbil, en kort bybil på under 3,9 meter med fire eller fem sæder. Hyundais danske prisliste (revideret 9. november 2026) opgiver forbruget for hver version. Standard Range med 42 kWh-batteri og 97 hk bruger 143 Wh pr. km. Long Range med 49 kWh og 115 hk bruger 149 Wh/km som Essential og Advanced, både med fire og fem sæder, og 151 Wh/km som Cross med 17-tommers alufælge og XRT-eksteriørkit. Det svarer til 14,3–15,1 kWh pr. 100 km. WLTP er målt som strøm fra stikkontakten, så ladetabet er med.</p>
<p>Med 15.000 km om året bruger Inster Standard Range omkring 2.145 kWh, svarende til {{kr 2145}} ved månedens elpris. Long Range bruger omkring 2.235 kWh ({{kr 2235}}) og Cross omkring 2.265 kWh ({{kr 2265}}). 100 km koster {{kr 14,3-15,1}} ladet hjemme.</p>

<h2>Lille eller stort batteri?</h2>
<p>Det store batteri koster 0,6 kWh ekstra pr. 100 km, fordi motoren er stærkere og bilen lidt tungere. Med 15.000 km om året er det omkring 90 kWh, svarende til {{kr 90}}. Til gengæld stiger rækkevidden efter WLTP fra 327 til 370 km, og 0–100 km/t går på 10,6 sekunder mod 11,7. Kører du mest i byen og har en ladeboks, rækker det lille batteri. Kører du jævnligt langt, er de 43 km ekstra rækkevidde mere værd end de få kWh.</p>
<p>Cross og 17-tommers fælge koster lidt rækkevidde: Hyundai opgiver 360 km for Cross og for Advanced på 17-tommers fælge mod 370 km på standardhjulene. Prislisten skriver selv, at rækkevidden er beregnet på 15-tommers stålfælge.</p>

<h2>Inster mod andre små elbiler</h2>
<p>Den lille størrelse giver ikke et markant lavere forbrug. <a href="/elbil/hyundai-kona-electric/">Hyundai Kona Electric</a>, en klasse større, bruger 14,6–14,9 kWh pr. 100 km i de almindelige versioner, altså det samme som Inster Long Range. <a href="/elbil/renault-5/">Renault 5</a> bruger 14,5–14,9 kWh, og den større <a href="/elbil/vw-id-3/">VW ID.3</a> er faktisk mere sparsom med 14,0–14,4 kWh pr. 100 km. Mod en Inster Long Range sparer ID.3 omkring 0,5–0,9 kWh pr. 100 km, eller 75–135 kWh om året.</p>
<p>Mod <a href="/elbil/citroen-e-c3/">Citroën ë-C3</a> Comfort Range på 16,8 kWh pr. 100 km sparer Inster Long Range 1,9 kWh pr. 100 km. Med 15.000 km om året er det omkring 285 kWh, svarende til {{kr 285}}. Inster er altså ikke den lille bil med det lille forbrug, men den ligger i den sparsomme ende af små elbiler.</p>

<h2>Hvad koster det at lade en Inster?</h2>
<p>En opladning fra 10 til 80 % fylder omkring 29 kWh på 42 kWh-batteriet og 34 kWh på 49 kWh-batteriet, svarende til {{kr 29}} og {{kr 34}} ved månedens elpris på {{pris_kwh}}, plus lidt ladetab. Hyundai opgiver en indbygget lader på op til 11 kW og en fuld opladning fra 0 til 100 % på omkring 4 timer med det lille batteri og 4 timer og 35 minutter med det store. På en <a href="/ladestander/">ladeboks</a> er bilen fuld længe før morgen.</p>
<p>På en lynlader på 120–350 kW tager 10–80 % omkring 30 minutter under optimale forhold, og på en 50 kW-lader omkring 1 time. Offentlig lynladning koster typisk væsentligt mere pr. kWh end strøm hjemme, og prisen afhænger af operatør og abonnement. Med et lille batteri er hjemmeladning om natten den billige løsning. Se <a href="/hvad-koster-det-at-lade-en-elbil/">hvad det koster at lade en elbil</a>.</p>

<h2>Vinter, motorvej og gode vaner</h2>
<p>I frost og ved høj fart stiger forbruget typisk 15–30 % over WLTP. For en Inster Long Range betyder det 17,1–19,4 kWh pr. 100 km og en rækkevidde på omkring 285–320 km. Standard Range kommer ned på omkring 250–285 km. Hyundai skriver selv, at vejforhold, kørestil, udetemperatur og komfortudstyr som sædevarme og klimaanlæg påvirker rækkevidden. Topfarten er 140 km/t med det lille batteri og 150 km/t med det store, så Inster er først og fremmest bygget til by og landevej.</p>
<ul>
<li>Forvarm kabinen, mens bilen sidder i laderen, så varmen kommer fra nettet og ikke fra batteriet.</li>
<li>Brug sæde- og rattvarme frem for høj kabinetemperatur på korte ture.</li>
<li>Hold farten nede på motorvejen: en høj, kort bil har stor luftmodstand i forhold til størrelsen.</li>
<li>Vælg standardhjulene, hvis rækkevidden betyder mest.</li>
</ul>
<p>Se flere modeller på siden om <a href="/elbil/">elbilers strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvad er Hyundai Insters forbrug pr. km?",
      answer:
        "Ifølge Hyundais danske prisliste 143–151 Wh pr. km efter WLTP: 143 Wh/km med 42 kWh, 149 Wh/km med 49 kWh og 151 Wh/km for Cross.",
    },
    {
      question: "Hvad koster det at køre 100 km i en Inster?",
      answer: "100 km koster {{kr 14,3}} til {{kr 15,1}} ladet hjemme ved månedens elpris på {{pris_kwh}}, afhængigt af batteri og udstyr.",
    },
    {
      question: "Hvor langt kører en Hyundai Inster på en opladning?",
      answer:
        "Efter WLTP 327 km med 42 kWh og 360–370 km med 49 kWh. Om vinteren og på motorvej typisk 250–285 km og 285–320 km.",
    },
    {
      question: "Bruger Inster mindre strøm end større elbiler?",
      answer:
        "Ikke nødvendigvis. Inster Long Range bruger 14,9 kWh pr. 100 km, det samme som Kona Electric, mens VW ID.3 bruger 14,0–14,4 kWh efter WLTP.",
    },
    {
      question: "Hvor hurtigt lader en Hyundai Inster?",
      answer:
        "Omkring 30 minutter fra 10 til 80 % på lynlader under optimale forhold. Hjemme med op til 11 kW tager en fuld opladning omkring 4 timer til 4 timer og 35 minutter.",
    },
  ],
  sources: [
    {
      name: "Hyundai Danmark — Inster, priser og specifikationer (revideret 9. november 2026) med forbrug, rækkevidde og ladetider",
      url: "https://katalog.hyundai.dk/NicChristiansenGruppen/Hyundai/Specifikationer/inster/",
    },
    {
      name: "EEA — CO2-emissioner fra nye personbiler 2025 (danske registreringer, WLTP Wh/km)",
      url: "https://www.eea.europa.eu/en/datahub/datahubitem-view/fa8b1229-3db6-495d-b18e-9c9b3267c02b",
    },
  ],
  variants: [
    { name: "Standard Range 42 kWh, 97 hk", watts: {}, whPerKm: 143, source: 0 },
    { name: "Long Range 49 kWh, 115 hk (Essential, Advanced)", watts: {}, whPerKm: 149, source: 0 },
    { name: "Long Range 49 kWh, 115 hk, Cross", watts: {}, whPerKm: 151, source: 0 },
  ],
  publishDate: "2027-01-02",
  updated: "2026-11-24",
  measuredBy: "efter WLTP-normen (Hyundais officielle tal, målt fra stikkontakten)",
  figuresNote:
    "WLTP er EU's fælles testcyklus for bilers forbrug; tallet er målt som strøm fra stikkontakten, så ladetabet er med. Tallene er fra Hyundais danske prisliste (revideret 9. november 2026). EU's registreringsdata (EEA) for 2025 viser 143–188 Wh/km for de danske Inster. Kilderne står nederst på siden.",
};

export default hyundaiInster;
