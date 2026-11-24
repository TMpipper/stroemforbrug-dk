import type { ModelData } from "@/lib/models";

const hyundaiIoniq5: ModelData = {
  slug: "hyundai-ioniq-5",
  parent: "elbil",
  brand: "Hyundai",
  name: "Hyundai Ioniq 5",
  released: "2024-06",
  synonyms: [
    "hyundai ioniq 5 forbrug",
    "ioniq 5 strømforbrug",
    "ioniq 5 kwh pr 100 km",
    "ioniq 5 84 kwh forbrug",
    "ioniq 5 4wd forbrug",
    "ioniq 5 n line forbrug",
    "ioniq 5 rækkevidde vinter",
  ],
  title: "Hyundai Ioniq 5 strømforbrug (2026) → 63 og 84 kWh batteri",
  description:
    "Hyundai Ioniq 5 med 63 og 84 kWh batteri: officielt WLTP-forbrug for baghjuls- og firehjulstræk og N Line, kWh om året, pris pr. 100 km og vinterrækkevidde.",
  intro:
    "Ioniq 5 med baghjulstræk bruger 15,6–16,0 kWh pr. 100 km efter WLTP, med firehjulstræk 16,8–18,1 kWh. N Line-udstyret koster mere strøm end batteristørrelsen.",
  content: `<h2>Hvad bruger en Hyundai Ioniq 5 pr. 100 km?</h2>
<p>Hyundais danske prisliste for Ioniq 5 (revideret 9. november 2026) opgiver forbruget for hver drivlinje og hvert udstyr. Standard Range med 63 kWh-batteri og 170 hk bruger 156 Wh pr. km. Long Range med 84 kWh og 229 hk bruger 160 Wh/km i Essential, Advanced og Ultimate, men 172 Wh/km i N Line og N Line+. Long Range Performance med firehjulstræk og 325 hk bruger 168 Wh/km som Ultimate og 181 Wh/km som N Line+. Det svarer til 15,6–18,1 kWh pr. 100 km. Tallene gælder bilen på standardhjulene, som rækkevidden er beregnet på; WLTP er målt fra stikkontakten, så ladetabet er med.</p>
<p>Med 15.000 km om året bruger en Ioniq 5 Standard Range omkring 2.340 kWh, svarende til {{kr 2340}} ved månedens elpris. Long Range med baghjulstræk bruger omkring 2.400 kWh ({{kr 2400}}), firehjulstrukket Ultimate omkring 2.520 kWh ({{kr 2520}}) og firehjulstrukket N Line+ omkring 2.715 kWh ({{kr 2715}}). 100 km koster {{kr 15,6-18,1}} ladet hjemme.</p>

<h2>Batteri, træk eller udstyr — hvad koster mest?</h2>
<p>Det store batteri koster næsten intet: Long Range bruger 0,4 kWh mere pr. 100 km end Standard Range, omkring 60 kWh om året, svarende til {{kr 60}}. Til gengæld stiger rækkevidden efter WLTP fra 440 til 570 km. Kører du langt, er Long Range den oplagte version.</p>
<p>Firehjulstrækket koster 0,8 kWh ekstra pr. 100 km i Ultimate-udstyret, omkring 120 kWh om året. N Line er dyrere i drift: med samme batteri og motor bruger N Line 1,2 kWh mere pr. 100 km end Ultimate med baghjulstræk, omkring 180 kWh om året ({{kr 180}}), og N Line+ med firehjulstræk ligger 2,1 kWh over Long Range med baghjulstræk, omkring 315 kWh om året, svarende til {{kr 315}}. Hyundai skriver i prislisten, at rækkevidden er regnet på 19-tommers fælge, og at større fælge kan påvirke den; prislisten opgiver selv 530 km for Long Range med baghjulstræk på 20-tommers fælge mod 570 km.</p>

<h2>Ioniq 5 mod andre el-SUV'er</h2>
<p>En Ioniq 5 Long Range med baghjulstræk bruger det samme som <a href="/elbil/vw-id-4/">VW ID.4</a> Pro, der også ligger på 15,9 kWh pr. 100 km, og lidt mere end <a href="/elbil/skoda-enyaq/">Škoda Enyaq</a> 85 med 15,3 kWh. Forskellen til Enyaq er 0,7 kWh pr. 100 km, omkring 105 kWh om året, svarende til {{kr 105}}. <a href="/elbil/cupra-tavascan/">Cupra Tavascan</a> Endurance ligger på 16,1 kWh og dermed på niveau med Ioniq 5.</p>
<p><a href="/elbil/tesla-model-y/">Tesla Model Y</a> er mere sparsom: Premium Long Range RWD bruger 14,2 kWh pr. 100 km, 1,8 kWh mindre end en Ioniq 5 Long Range med baghjulstræk. Med 15.000 km om året er det omkring 270 kWh, svarende til {{kr 270}}. Det er stadig små beløb set mod forskellen på at lade hjemme og på lynlader.</p>

<h2>Hvad koster det at lade en Ioniq 5?</h2>
<p>En opladning fra 10 til 80 % fylder omkring 44 kWh på 63 kWh-batteriet og 59 kWh på 84 kWh-batteriet, svarende til {{kr 44}} og {{kr 59}} ved månedens elpris på {{pris_kwh}}, plus lidt ladetab. Hyundai opgiver en indbygget lader på op til 11 kW og en fuld opladning fra 0 til 100 % på omkring 6 timer med det lille batteri og 7,5 timer med det store. En nat på en <a href="/ladestander/">ladeboks</a> rækker altså.</p>
<p>På en lynlader på op til 350 kW tager 10–80 % omkring 18 minutter for alle versioner under optimale forhold, og på en 50 kW-lader omkring 1 time til 1 time og 15 minutter. Lynladning er praktisk på langtur, men offentlig ladning koster typisk væsentligt mere pr. kWh end strøm hjemme, og prisen afhænger af operatør og abonnement. Se <a href="/hvad-koster-det-at-lade-en-elbil/">hvad det koster at lade en elbil</a>.</p>

<h2>Vinter, motorvej og gode vaner</h2>
<p>I frost og ved høj fart stiger forbruget typisk 15–30 % over WLTP. For en Long Range med baghjulstræk betyder det 18,4–20,8 kWh pr. 100 km og en rækkevidde på omkring 440–495 km. Standard Range kommer ned på omkring 340–385 km, og firehjulstrukket N Line+ på omkring 380–430 km. Hyundai skriver selv, at vejforhold, kørestil, udetemperatur og komfortudstyr som sædevarme og klimaanlæg påvirker rækkevidden.</p>
<ul>
<li>Brug forvarmningen af kabinen, mens bilen sidder i laderen; prislisten nævner batterivarmer og forkonditionering til lynladning.</li>
<li>Sæde- og rattvarme bruger mindre end høj kabinetemperatur på korte ture.</li>
<li>Hold 110–120 km/t på langtur: Ioniq 5 er en høj bil, og luftmodstanden vokser hurtigt med farten.</li>
<li>Vælg standardfælgene, hvis rækkevidden betyder mest.</li>
</ul>
<p>Se flere modeller på siden om <a href="/elbil/">elbilers strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvad er Hyundai Ioniq 5s forbrug pr. km?",
      answer:
        "Ifølge Hyundais danske prisliste 156–181 Wh pr. km efter WLTP: 156 Wh/km med 63 kWh, 160 Wh/km med 84 kWh og baghjulstræk, 168 Wh/km med firehjulstræk og 172–181 Wh/km for N Line-versionerne.",
    },
    {
      question: "Hvad koster det at køre 100 km i en Ioniq 5?",
      answer: "100 km koster {{kr 15,6}} til {{kr 18,1}} ladet hjemme ved månedens elpris på {{pris_kwh}}, afhængigt af batteri, træk og udstyr.",
    },
    {
      question: "Bruger Ioniq 5 N Line mere strøm?",
      answer:
        "Ja. N Line med baghjulstræk bruger 17,2 kWh pr. 100 km mod 16,0 kWh for de andre Long Range-versioner med baghjulstræk. Med 15.000 km om året er det omkring 180 kWh ekstra, svarende til {{kr 180}}.",
    },
    {
      question: "Hvor langt kører en Ioniq 5 om vinteren?",
      answer:
        "Regn med 15–30 % under WLTP i frost og på motorvej. En Long Range med baghjulstræk kører typisk 440–495 km, Standard Range 340–385 km.",
    },
    {
      question: "Hvor hurtigt lader en Hyundai Ioniq 5?",
      answer:
        "Omkring 18 minutter fra 10 til 80 % på en lynlader på op til 350 kW under optimale forhold. Hjemme med op til 11 kW tager en fuld opladning omkring 6 timer med 63 kWh og 7,5 timer med 84 kWh.",
    },
  ],
  sources: [
    {
      name: "Hyundai Danmark — Ioniq 5, priser og specifikationer (revideret 9. november 2026) med forbrug, rækkevidde og ladetider",
      url: "https://katalog.hyundai.dk/NicChristiansenGruppen/Hyundai/Specifikationer/ioniq-5-my2025/",
    },
    {
      name: "EEA — CO2-emissioner fra nye personbiler 2025 (danske registreringer, WLTP Wh/km)",
      url: "https://www.eea.europa.eu/en/datahub/datahubitem-view/fa8b1229-3db6-495d-b18e-9c9b3267c02b",
    },
  ],
  variants: [
    { name: "Standard Range 63 kWh, baghjulstræk", watts: {}, whPerKm: 156, source: 0 },
    { name: "Long Range 84 kWh, baghjulstræk (Essential, Advanced, Ultimate)", watts: {}, whPerKm: 160, source: 0 },
    { name: "Long Range 84 kWh, baghjulstræk, N Line og N Line+", watts: {}, whPerKm: 172, source: 0 },
    { name: "Long Range Performance 4WD, Ultimate", watts: {}, whPerKm: 168, source: 0 },
    { name: "Long Range Performance 4WD, N Line+", watts: {}, whPerKm: 181, source: 0 },
  ],
  publishDate: "2026-12-30",
  updated: "2026-11-24",
  measuredBy: "efter WLTP-normen (Hyundais officielle tal, målt fra stikkontakten)",
  figuresNote:
    "WLTP er EU's fælles testcyklus for bilers forbrug; tallet er målt som strøm fra stikkontakten, så ladetabet er med. Tallene er fra Hyundais danske prisliste (revideret 9. november 2026) med EU's registreringsdata (EEA) som krydstjek. Kilderne står nederst på siden.",
};

export default hyundaiIoniq5;
