import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/electronicdisplays/${reg}`;

const hisenseU7s: ModelData = {
  slug: "hisense-u7s",
  parent: "tv",
  brand: "Hisense",
  name: "Hisense U7S",
  released: "2026-01",
  synonyms: [
    "hisense u7s strømforbrug",
    "hisense u7q strømforbrug",
    "hisense u7 watt",
    "65u7s watt",
    "75u7s strømforbrug",
    "hisense tv strømforbrug",
    "hisense 100 tommer strømforbrug",
  ],
  title: "Hisense U7S strømforbrug (2026) → watt fra 50 til 100 tommer",
  description:
    "Hisense U7S fra 2026 og U7Q fra 2025 i 50 til 100 tommer: watt i SDR og HDR fra EU-energimærket, kWh om året og hvorfor 75 tommer er blevet billigere i drift.",
  intro:
    "75\" U7S bruger 85 W, kun 1 W mere end 65\" og 22 W mindre end 75\" U7Q fra 2025. 100\" er den store undtagelse med 190 W.",
  content: `<h2>Hvor mange watt bruger Hisense U7S?</h2>
<p>U7S er Hisenses LCD-tv i mellemklassen for 2026 og efterfølgeren til U7Q fra 2025. Det findes i seks størrelser fra 50" til 100" og står i EU's produktdatabase EPREL fra årsskiftet 2025/2026. Udgaver med »TUK« eller »E« sidst i navnet har de samme tal i EPREL. Pro-udgaverne er en anden model og står ikke på siden.</p>
<p>I standardbilledet (SDR) bruger U7S 54 W som 50", 64 W som 55", 84 W som 65", 85 W som 75", 103 W som 85" og 190 W som 100". Standby er 0,5 W og netværksstandby 2 W. Med fem timers tv om dagen og standby resten af døgnet bruger 65" omkring 157 kWh om året, svarende til {{kr 157}}, og 75" omkring 159 kWh, svarende til {{kr 159}}.</p>
<table>
<thead><tr><th>Størrelse</th><th>SDR</th><th>HDR</th><th>Klasse (SDR)</th></tr></thead>
<tbody>
<tr><td>50" (50U7S)</td><td>54 W</td><td>110 W</td><td>E</td></tr>
<tr><td>55" (55U7S)</td><td>64 W</td><td>130 W</td><td>E</td></tr>
<tr><td>65" (65U7S)</td><td>84 W</td><td>160 W</td><td>E</td></tr>
<tr><td>75" (75U7S)</td><td>85 W</td><td>155 W</td><td>D</td></tr>
<tr><td>85" (85U7S)</td><td>103 W</td><td>260 W</td><td>D</td></tr>
<tr><td>100" (100U7S)</td><td>190 W</td><td>350 W</td><td>F</td></tr>
</tbody>
</table>

<h2>75 tommer for samme strøm som 65</h2>
<p>Ligesom hos flere andre producenter i 2026 bruger den store 75" næsten det samme som 65": 85 mod 84 W. Det giver 75" energiklasse D. I HDR bruger 75" endda mindre end 65", 155 mod 160 W. Overvejer du de to størrelser, koster den store skærm altså kun omkring 2 kWh mere om året med vores profil.</p>
<p>100" er en anden sag. Med 190 W i standardbilledet bruger den over dobbelt så meget som 75" og omkring 350 kWh om året, svarende til {{kr 350}}. I HDR stiger den til 350 W.</p>

<p>I den lille ende bruger 50" U7S 54 W, præcis det samme som 50" LG QNED85. Det giver omkring 102 kWh om året med vores profil, svarende til {{kr 102}}.</p>

<h2>U7S mod U7Q fra 2025</h2>
<p>Den største forbedring ligger i 75". U7Q brugte 107 W i den størrelse og lå i klasse E; U7S bruger 85 W og ligger i D. Det er omkring 40 kWh mindre om året med vores profil, svarende til {{kr 40}}. Som 55" og 65" er SDR-tallet uændret, 64 og 84 W.</p>
<p>I HDR er billedet blandet. 65" er gået fra 180 til 160 W, mens 55" er gået fra 110 til 130 W. Ser du meget HDR, er 65" U7S altså bedre end sin forgænger, 55" en anelse dårligere.</p>

<h2>HDR fordobler forbruget</h2>
<p>I energimærkets HDR-måling bruger U7S 82–152 % mere end i standardbilledet. 85" går fra 103 til 260 W, 65" fra 84 til 160 W. En film på to timer i HDR på 65" bruger omkring 0,32 kWh, svarende til {{kr 0,32}}. Et LCD-tv skal skrue baggrundslyset kraftigt op for at vise HDR, og det kan ses på målingen.</p>

<h2>U7S mod LG, Samsung, TCL og Sony</h2>
<p>I standardbilledet er U7S næsten en tvilling til <a href="/tv/lg-qned85/">LG QNED85</a>, der bruger 84,6 W både som 65" og 75". Mod 75" <a href="/tv/samsung-crystal-uhd/">Samsung U8000H</a> med 129 W sparer 75" U7S omkring 80 kWh om året, svarende til {{kr 80}}. 75" <a href="/tv/tcl-c6k/">TCL C6K Pro</a> bruger 107 W, det samme som den gamle U7Q.</p>
<p><a href="/tv/sony-bravia-7-ii/">Sony Bravia 7 II</a> bruger mindre end U7S i alle størrelser fra 55" og op, for eksempel 67 W som 75". Som 50" er U7S en anelse bedre, 54 mod 59 W. Mod U7S er det omkring 33 kWh om året for 75".</p>

<h2>Sådan holder du forbruget nede</h2>
<ul>
<li>Brug standard- eller eco-billedet og lad lyssensoren styre lysstyrken.</li>
<li>Slå netværksstandby fra, hvis du ikke tænder tv'et fra mobilen; det sparer op til 10 kWh om året.</li>
<li>Sluk boks, soundbar og konsol sammen med tv'et; se mere om <a href="/standby/">standbyforbrug</a>.</li>
</ul>
<p>Se flere modeller på siden om <a href="/tv/">tv'ers strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger Hisense U7S?",
      answer:
        "Ifølge EU's energimærke 54 W som 50\", 64 W som 55\", 84 W som 65\", 85 W som 75\", 103 W som 85\" og 190 W som 100\" i standardbilledet. Standby er 0,5 W.",
    },
    {
      question: "Hvad koster det at have et 65\" Hisense U7S tændt?",
      answer:
        "Med fem timers tv om dagen bruger 65\" omkring 157 kWh om året, svarende til {{kr 157}} ved månedens elpris på {{pris_kwh}}.",
    },
    {
      question: "Bruger U7S mindre strøm end U7Q?",
      answer:
        "Som 75\" ja: 85 W mod 107 W, omkring 40 kWh mindre om året. Som 55\" og 65\" er forbruget i standardbilledet det samme.",
    },
    {
      question: "Hvad bruger 100\" Hisense U7S?",
      answer: "190 W i standardbilledet og 350 W i HDR. Med fem timers tv om dagen er det omkring 350 kWh om året, svarende til {{kr 350}}.",
    },
    {
      question: "Hvad bruger Hisense U7S i HDR?",
      answer: "110–350 W afhængigt af størrelse ifølge energimærkets HDR-måling, 82–152 % mere end i standardbilledet.",
    },
  ],
  sources: [
    { name: "EPREL — Hisense 50U7S, EU's energimærke", url: eprel("2549114") },
    { name: "EPREL — Hisense 55U7S, EU's energimærke", url: eprel("2528373") },
    { name: "EPREL — Hisense 65U7S, EU's energimærke", url: eprel("2523350") },
    { name: "EPREL — Hisense 75U7S, EU's energimærke", url: eprel("2549500") },
    { name: "EPREL — Hisense 85U7S, EU's energimærke", url: eprel("2546042") },
    { name: "EPREL — Hisense 100U7S, EU's energimærke", url: eprel("2567252") },
    { name: "EPREL — Hisense 55U7Q (2025), EU's energimærke", url: eprel("2216366") },
    { name: "EPREL — Hisense 65U7Q (2025), EU's energimærke", url: eprel("2221406") },
    { name: "EPREL — Hisense 75U7Q (2025), EU's energimærke", url: eprel("2210518") },
  ],
  variants: [
    { name: "50\" U7S (50U7S)", watts: { standby: 0.5, on: 54 }, energyClass: "E", source: 0 },
    { name: "55\" U7S (55U7S)", watts: { standby: 0.5, on: 64 }, energyClass: "E", source: 1 },
    { name: "65\" U7S (65U7S)", watts: { standby: 0.5, on: 84 }, energyClass: "E", source: 2 },
    { name: "75\" U7S (75U7S)", watts: { standby: 0.5, on: 85 }, energyClass: "D", source: 3 },
    { name: "85\" U7S (85U7S)", watts: { standby: 0.5, on: 103 }, energyClass: "D", source: 4 },
    { name: "100\" U7S (100U7S)", watts: { standby: 0.5, on: 190 }, energyClass: "F", source: 5 },
    { name: "55\" U7Q 2025 (55U7Q)", watts: { standby: 0.5, on: 64 }, energyClass: "E", source: 6 },
    { name: "65\" U7Q 2025 (65U7Q)", watts: { standby: 0.5, on: 84 }, energyClass: "E", source: 7 },
    { name: "75\" U7Q 2025 (75U7Q)", watts: { standby: 0.5, on: 107 }, energyClass: "E", source: 8 },
  ],
  publishDate: "2026-12-22",
  updated: "2026-11-23",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Tallene er Hisenses egne oplysninger til EU's energimærke: forbruget i standardbilledet (SDR) i den billedindstilling, tv'et leveres med, og standby. Pro-udgaverne af U7S og U7Q er andre modeller med andre tal. Kilderne står nederst på siden.",
};

export default hisenseU7s;
