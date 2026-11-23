import type { ModelData } from "@/lib/models";

const fordExplorer: ModelData = {
  slug: "ford-explorer",
  parent: "elbil",
  brand: "Ford",
  name: "Ford Explorer (el)",
  released: "2024-06",
  synonyms: [
    "ford explorer forbrug",
    "ford explorer elbil strømforbrug",
    "ford explorer ev forbrug",
    "explorer extended range forbrug",
    "ford explorer awd forbrug",
    "ford explorer kwh pr 100 km",
    "ford explorer rækkevidde vinter",
  ],
  title: "Ford Explorer strømforbrug (2026) → alle versioner i kWh",
  description:
    "Den elektriske Ford Explorer med 58, 77 og 79 kWh: Fords officielle WLTP-forbrug for alle udstyrsvarianter, kWh om året, pris pr. 100 km og ladetider.",
  intro:
    "Ford Explorer bruger 14,6–17,3 kWh pr. 100 km efter Fords danske prisliste. Den baghjulstrukne Select med det store batteri bruger mindst og kører længst: 602 km efter WLTP.",
  content: `<h2>Hvad bruger en elektrisk Ford Explorer pr. 100 km?</h2>
<p>Den elektriske Explorer er Fords kompakte el-SUV, bygget på samme elbilplatform som VW ID.4 og Škoda Enyaq. Fords danske prisliste fra 28. september 2026 opgiver forbruget for hver af de otte kombinationer af batteri og udstyr. Standard Rækkevidde med 58 kWh (netto) og 190 hk bruger 15,4 kWh pr. 100 km som Style og 16,2 kWh som Premium. Udvidet Rækkevidde med 79 kWh og 286 hk og baghjulstræk bruger 14,6 kWh som Select, 15,3 som Collection og 15,5 som Premium. Den firehjulstrukne med 77 kWh og 340 hk bruger 16,3, 17,1 og 17,3 kWh. WLTP-tallet er målt som strøm fra stikkontakten, så ladetabet er med.</p>
<p>Med 15.000 km om året bruger den baghjulstrukne Select med det store batteri omkring 2.190 kWh, svarende til {{kr 2190}} ved månedens elpris. Style med det lille batteri bruger omkring 2.310 kWh, svarende til {{kr 2310}}, og den firehjulstrukne Premium omkring 2.595 kWh, svarende til {{kr 2595}}. 100 km koster {{kr 14,6-17,3}} ladet hjemme.</p>
<p>EU's registreringsdata for 2025 bekræfter niveauet. De 1.322 danske Explorer med 210 kW-motoren lå på 13,9–15,6 kWh pr. 100 km med et gennemsnit på 14,8 kWh, og de 312 firehjulstrukne på 15,7–17,3 kWh med et gennemsnit på 16,6 kWh.</p>

<h2>Lille batteri, stort batteri eller firehjulstræk?</h2>
<p>Det overraskende i Explorer er, at det store batteri bruger mindre end det lille. Select med Udvidet Rækkevidde bruger 14,6 kWh pr. 100 km, mens Style med Standard Rækkevidde bruger 15,4 kWh. Den store udgave har en anden og kraftigere motor (210 kW mod 140 kW), og alligevel stiger rækkevidden fra 444 til 602 km efter WLTP. Forskellen er omkring 120 kWh om året, svarende til {{kr 120}}.</p>
<p>Udstyret koster også. Fra Select på 19-tommer-fælge til Premium på 20 tommer stiger forbruget 0,9 kWh pr. 100 km med baghjulstræk, og rækkevidden falder fra 602 til 573 km. Det er omkring 135 kWh om året. Firehjulstrækket koster yderligere: den firehjulstrukne Select bruger 1,7 kWh mere end den baghjulstrukne, omkring 255 kWh om året eller {{kr 255}}. Til gengæld må den trække 2.200 kg mod 2.000 kg.</p>
<table>
<thead><tr><th>Version</th><th>Batteri (netto)</th><th>Forbrug</th><th>Rækkevidde</th></tr></thead>
<tbody>
<tr><td>Style, baghjul, Standard Rækkevidde</td><td>58 kWh</td><td>15,4 kWh/100 km</td><td>444 km</td></tr>
<tr><td>Premium, baghjul, Standard Rækkevidde</td><td>58 kWh</td><td>16,2 kWh/100 km</td><td>417 km</td></tr>
<tr><td>Select, baghjul, Udvidet Rækkevidde</td><td>79 kWh</td><td>14,6 kWh/100 km</td><td>602 km</td></tr>
<tr><td>Premium, baghjul, Udvidet Rækkevidde</td><td>79 kWh</td><td>15,5 kWh/100 km</td><td>573 km</td></tr>
<tr><td>Select, firehjulstræk</td><td>77 kWh</td><td>16,3 kWh/100 km</td><td>553 km</td></tr>
<tr><td>Premium, firehjulstræk</td><td>77 kWh</td><td>17,3 kWh/100 km</td><td>519 km</td></tr>
</tbody>
</table>

<h2>Hvad koster det at lade en Explorer?</h2>
<p>En fuld opladning af det store batteri koster {{kr 79}} ved månedens elpris på {{pris_kwh}}, det lille {{kr 58}} — lidt mere målt fra stikket, fordi der tabes strøm undervejs. Alle versioner lader med 11 kW hjemme, og Ford opgiver 6 timer og 30 minutter fra 0 til 100 % for det lille batteri og 8–8,5 timer for de store. En nat på en <a href="/ladestander/">ladeboks</a> er altså nok.</p>
<p>På lynlader tager det lille batteri op til 105 kW og de store 183–185 kW. Ford opgiver 26–29 minutter fra 10 til 80 %. Hjemmestrøm er typisk væsentligt billigere pr. kWh end offentlig lynladning, hvis pris afhænger af operatør og abonnement. Planlæg ladningen til natten, hvor elprisen oftest er lavest. Se <a href="/hvad-koster-det-at-lade-en-elbil/">hvad det koster at lade en elbil</a>.</p>

<h2>Explorer mod ID.4, Enyaq og Elroq</h2>
<p>Explorer deler teknik med <a href="/elbil/vw-id-4/">VW ID.4</a> og <a href="/elbil/skoda-enyaq/">Škoda Enyaq</a>. ID.4 bruger 15,9–16,8 kWh pr. 100 km og Enyaq 15,0–15,6 kWh. Mod ID.4 sparer den baghjulstrukne Explorer Select 1,3–2,2 kWh pr. 100 km, omkring 195–330 kWh om året, svarende til {{kr 195-330}}.</p>
<p><a href="/elbil/skoda-elroq/">Škoda Elroq</a>, som også er bygget på samme platform, ligger på 15,1–15,9 kWh, og <a href="/elbil/vw-id-3/">VW ID.3</a> på 14,0–14,4 kWh. Den firehjulstrukne Explorer med 16,3–17,3 kWh ligger lidt over <a href="/elbil/audi-q4-e-tron/">Audi Q4 e-tron</a> på 15,3–16,6 kWh.</p>

<h2>Vinter, motorvej og gode vaner</h2>
<p>Kulde og høj fart løfter typisk forbruget 15–30 % over WLTP. For den baghjulstrukne Select med det store batteri betyder det 16,8–19,0 kWh pr. 100 km og en rækkevidde på omkring 465–525 km. Standard Rækkevidde kommer ned på 340–385 km, og den firehjulstrukne Select på 425–480 km. Ford skriver selv i prislisten, at især høj hastighed og lave temperaturer reducerer rækkevidden.</p>
<ul>
<li>Forvarm kabinen og batteriet, mens bilen sidder i laderen.</li>
<li>Brug sæde- og rattvarme, som alle versioner har, frem for høj kabinetemperatur.</li>
<li>Hold 110–120 km/t på langtur, og tjek dæktrykket, når det bliver koldt.</li>
</ul>
<p>Se flere modeller på siden om <a href="/elbil/">elbilers strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvad er den elektriske Ford Explorers forbrug pr. km?",
      answer:
        "Ifølge Fords danske prisliste bruger Explorer 146–173 Wh pr. km efter WLTP, svarende til 14,6–17,3 kWh pr. 100 km, målt fra stikkontakten.",
    },
    {
      question: "Hvilken Ford Explorer bruger mindst strøm?",
      answer: "Den baghjulstrukne Select med Udvidet Rækkevidde (79 kWh) med 14,6 kWh pr. 100 km og 602 km rækkevidde efter WLTP. Den bruger mindre end versionen med det lille batteri.",
    },
    {
      question: "Hvad koster det at lade en Ford Explorer?",
      answer: "En fuld opladning koster {{kr 79}} for det store batteri og {{kr 58}} for det lille ved månedens elpris på {{pris_kwh}} plus lidt ladetab. 100 km koster {{kr 14,6-17,3}}.",
    },
    {
      question: "Hvor langt kører en Ford Explorer om vinteren?",
      answer:
        "Regn med 15–30 % under WLTP i frost og på motorvej. Den baghjulstrukne med det store batteri kører typisk 465–525 km, Standard Rækkevidde 340–385 km.",
    },
    {
      question: "Hvor hurtigt lader en Ford Explorer?",
      answer: "Ford opgiver 26–29 minutter fra 10 til 80 % på lynlader, med op til 105 kW for det lille batteri og 183–185 kW for de store. Hjemme lader den med 11 kW.",
    },
  ],
  sources: [
    {
      name: "Ford Danmark — Explorer, vejledende prisliste 28. september 2026 med forbrug, rækkevidde og ladetider (modelår 2027.25)",
      url: "https://katalog.ford.dk/prislister/personbiler/explorer/",
    },
    { name: "Ford Danmark — Explorer, modelside", url: "https://www.ford.dk/modeller/explorer" },
    {
      name: "EEA — CO2-emissioner fra nye personbiler 2025 (danske registreringer, WLTP Wh/km)",
      url: "https://www.eea.europa.eu/en/datahub/datahubitem-view/fa8b1229-3db6-495d-b18e-9c9b3267c02b",
    },
  ],
  variants: [
    { name: "Standard Rækkevidde 58 kWh, Style", watts: {}, whPerKm: 154, source: 0 },
    { name: "Standard Rækkevidde 58 kWh, Premium", watts: {}, whPerKm: 162, source: 0 },
    { name: "Udvidet Rækkevidde 79 kWh, Select", watts: {}, whPerKm: 146, source: 0 },
    { name: "Udvidet Rækkevidde 79 kWh, Collection", watts: {}, whPerKm: 153, source: 0 },
    { name: "Udvidet Rækkevidde 79 kWh, Premium", watts: {}, whPerKm: 155, source: 0 },
    { name: "Firehjulstræk 77 kWh, Select", watts: {}, whPerKm: 163, source: 0 },
    { name: "Firehjulstræk 77 kWh, Collection", watts: {}, whPerKm: 171, source: 0 },
    { name: "Firehjulstræk 77 kWh, Premium", watts: {}, whPerKm: 173, source: 0 },
  ],
  publishDate: "2026-12-20",
  updated: "2026-11-23",
  measuredBy: "efter WLTP-normen (Fords officielle tal, målt fra stikkontakten)",
  figuresNote:
    "WLTP er EU's fælles testcyklus for bilers forbrug; tallet er målt som strøm fra stikkontakten, så ladetabet er med. Tallene er fra Fords danske prisliste for modelår 2027.25 med EU's registreringsdata (EEA) som krydstjek. Kilderne står nederst på siden.",
};

export default fordExplorer;
