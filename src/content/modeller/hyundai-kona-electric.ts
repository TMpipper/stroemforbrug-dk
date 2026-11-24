import type { ModelData } from "@/lib/models";

const hyundaiKonaElectric: ModelData = {
  slug: "hyundai-kona-electric",
  parent: "elbil",
  brand: "Hyundai",
  name: "Hyundai Kona Electric",
  released: "2023-09",
  synonyms: [
    "hyundai kona electric forbrug",
    "kona electric strømforbrug",
    "kona elbil forbrug",
    "kona electric kwh pr 100 km",
    "kona electric 65 kwh forbrug",
    "kona n line forbrug",
    "kona electric rækkevidde vinter",
  ],
  title: "Hyundai Kona Electric strømforbrug (2026) → kWh pr. 100 km",
  description:
    "Hyundai Kona Electric med 48,4 og 65,4 kWh batteri: officielt WLTP-forbrug fra Hyundais danske prisliste, kWh om året, pris pr. 100 km og vinterrækkevidde.",
  intro:
    "Kona Electric bruger 14,6–14,9 kWh pr. 100 km efter WLTP i alle versioner undtagen N Line, der bruger 16,8 kWh. Det store batteri koster næsten intet ekstra i forbrug.",
  content: `<h2>Hvad bruger en Hyundai Kona Electric pr. 100 km?</h2>
<p>Hyundais danske prisliste for Kona Electric (revideret 9. november 2026) opgiver forbruget for hvert batteri og hvert udstyr. Standard Range med 48,4 kWh-batteri og 156 hk bruger 146 Wh pr. km i alle tre udstyr (Essential, Advanced og Ultimate). Long Range med 65,4 kWh og 217 hk bruger 147 Wh/km som Essential, 148 Wh/km som Advanced og 149 Wh/km som Ultimate, mens N Line bruger 168 Wh/km. Det svarer til 14,6–16,8 kWh pr. 100 km. WLTP er målt som strøm fra stikkontakten, så ladetabet er med.</p>
<p>Med 15.000 km om året bruger en Kona Electric Standard Range omkring 2.190 kWh, svarende til {{kr 2190}} ved månedens elpris. Long Range bruger 2.205–2.235 kWh ({{kr 2205-2235}}) og N Line omkring 2.520 kWh ({{kr 2520}}). 100 km koster {{kr 14,6-16,8}} ladet hjemme.</p>
<p>EU's registreringsdata for 2025 viser de danske Kona-elbiler på 146–168 Wh/km efter WLTP, samme spænd som prislisten.</p>

<h2>Standard Range, Long Range eller N Line?</h2>
<p>Batteriet betyder næsten intet for forbruget: Long Range Essential bruger 0,1 kWh mere pr. 100 km end Standard Range, omkring 15 kWh om året. Til gengæld stiger rækkevidden efter WLTP fra 377 til 514 km, og motoren går fra 156 til 217 hk. Udstyret flytter lidt mere: Ultimate bruger 0,2 kWh mere pr. 100 km end Essential med samme batteri, omkring 30 kWh om året. Hyundai opgiver også, at Ultimate på 19-tommers fælge kører 472 km mod 508 km på standardhjulene.</p>
<p>N Line skiller sig ud. Med samme batteri og motor som de andre Long Range-versioner bruger den 1,9 kWh mere pr. 100 km end Ultimate. Med 15.000 km om året er det omkring 285 kWh ekstra, svarende til {{kr 285}}, og rækkevidden falder til 444 km. Vil du have den sparsomme Kona med lang rækkevidde, er det Long Range i Essential, Advanced eller Ultimate.</p>

<h2>Kona Electric mod andre små el-SUV'er</h2>
<p>Kona Electric ligger blandt de sparsomme kompakte elbiler på siden. <a href="/elbil/kia-ev3/">Kia EV3</a> bruger 14,9–15,8 kWh pr. 100 km, så en Kona Long Range Essential er 0,2 kWh mere sparsom end en EV3 Long Range Access. <a href="/elbil/renault-5/">Renault 5</a> bruger 14,5–14,9 kWh og <a href="/elbil/toyota-urban-cruiser/">Toyota Urban Cruiser</a> 14,9–16,6 kWh, altså samme niveau som Kona.</p>
<p>Mod Hyundais egen og større <a href="/elbil/hyundai-ioniq-5/">Ioniq 5</a> sparer Kona Long Range Essential 1,3 kWh pr. 100 km i forhold til Ioniq 5 Long Range med baghjulstræk. Med 15.000 km om året er det omkring 195 kWh, svarende til {{kr 195}}. Forskellen er størrelse og vægt: Kona er en kompakt SUV, Ioniq 5 en mellemklassebil.</p>

<h2>Hvad koster det at lade en Kona Electric?</h2>
<p>En opladning fra 10 til 80 % fylder omkring 34 kWh på 48,4 kWh-batteriet og 46 kWh på 65,4 kWh-batteriet, svarende til {{kr 34}} og {{kr 46}} ved månedens elpris på {{pris_kwh}}, plus lidt ladetab. Hyundai opgiver en indbygget lader på op til 11 kW og en fuld opladning fra 0 til 100 % på omkring 5 timer med det lille batteri og 6,5 timer med det store. En nat på en <a href="/ladestander/">ladeboks</a> rækker.</p>
<p>På lynlader tager 10–80 % omkring 41 minutter for begge batterier under optimale forhold, og omkring 1 time til 1 time og 15 minutter på en 50 kW-lader. Kona Electric lader altså ikke så hurtigt som de større Hyundai-modeller, og offentlig lynladning koster typisk væsentligt mere pr. kWh end strøm hjemme. Bilen er bedst egnet til at blive ladet hjemme om natten. Se <a href="/hvad-koster-det-at-lade-en-elbil/">hvad det koster at lade en elbil</a>.</p>

<h2>Vinter, motorvej og gode vaner</h2>
<p>I frost og ved høj fart stiger forbruget typisk 15–30 % over WLTP. For en Kona Long Range Essential betyder det 16,9–19,1 kWh pr. 100 km og en rækkevidde på omkring 395–445 km. Standard Range kommer ned på omkring 290–330 km og N Line på omkring 340–385 km. Hyundai skriver selv, at vejforhold, kørestil, udetemperatur og komfortudstyr som sædevarme og klimaanlæg påvirker rækkevidden.</p>
<ul>
<li>Forvarm kabinen, mens bilen sidder i laderen, så varmen kommer fra nettet og ikke fra batteriet.</li>
<li>Brug sæde- og rattvarme frem for høj kabinetemperatur på korte ture.</li>
<li>Hold 110–120 km/t på langtur — luftmodstanden vokser hurtigt med farten.</li>
<li>Vælg standardfælgene, hvis rækkevidden betyder mest.</li>
</ul>
<p>Se flere modeller på siden om <a href="/elbil/">elbilers strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvad er Hyundai Kona Electrics forbrug pr. km?",
      answer:
        "Ifølge Hyundais danske prisliste 146–168 Wh pr. km efter WLTP: 146 Wh/km med 48,4 kWh, 147–149 Wh/km med 65,4 kWh og 168 Wh/km for N Line.",
    },
    {
      question: "Hvad koster det at køre 100 km i en Kona Electric?",
      answer: "100 km koster {{kr 14,6}} til {{kr 16,8}} ladet hjemme ved månedens elpris på {{pris_kwh}}, afhængigt af batteri og udstyr.",
    },
    {
      question: "Bruger Kona Electric med det store batteri mere strøm?",
      answer:
        "Kun en anelse: 14,7–14,9 kWh pr. 100 km med 65,4 kWh mod 14,6 kWh med 48,4 kWh. Til gengæld kører det store batteri 508–514 km mod 377 km efter WLTP.",
    },
    {
      question: "Hvor langt kører en Kona Electric om vinteren?",
      answer:
        "Regn med 15–30 % under WLTP i frost og på motorvej. Long Range kører typisk 395–445 km, Standard Range 290–330 km.",
    },
    {
      question: "Hvor hurtigt lader en Hyundai Kona Electric?",
      answer:
        "Omkring 41 minutter fra 10 til 80 % på lynlader under optimale forhold. Hjemme med op til 11 kW tager en fuld opladning omkring 5 timer med det lille batteri og 6,5 timer med det store.",
    },
  ],
  sources: [
    {
      name: "Hyundai Danmark — Kona Electric, priser og specifikationer (revideret 9. november 2026) med forbrug, rækkevidde og ladetider",
      url: "https://katalog.hyundai.dk/NicChristiansenGruppen/Hyundai/Specifikationer/kona-electric/",
    },
    {
      name: "EEA — CO2-emissioner fra nye personbiler 2025 (danske registreringer, WLTP Wh/km)",
      url: "https://www.eea.europa.eu/en/datahub/datahubitem-view/fa8b1229-3db6-495d-b18e-9c9b3267c02b",
    },
  ],
  variants: [
    { name: "Standard Range 48,4 kWh, 156 hk", watts: {}, whPerKm: 146, source: 0 },
    { name: "Long Range 65,4 kWh, Essential", watts: {}, whPerKm: 147, source: 0 },
    { name: "Long Range 65,4 kWh, Advanced", watts: {}, whPerKm: 148, source: 0 },
    { name: "Long Range 65,4 kWh, Ultimate", watts: {}, whPerKm: 149, source: 0 },
    { name: "Long Range 65,4 kWh, N Line", watts: {}, whPerKm: 168, source: 0 },
  ],
  publishDate: "2027-01-01",
  updated: "2026-11-24",
  measuredBy: "efter WLTP-normen (Hyundais officielle tal, målt fra stikkontakten)",
  figuresNote:
    "WLTP er EU's fælles testcyklus for bilers forbrug; tallet er målt som strøm fra stikkontakten, så ladetabet er med. Tallene er fra Hyundais danske prisliste (revideret 9. november 2026) med EU's registreringsdata (EEA) som krydstjek. Kilderne står nederst på siden.",
};

export default hyundaiKonaElectric;
