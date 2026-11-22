import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/electronicdisplays/${reg}`;

const lgOledB6: ModelData = {
  slug: "lg-oled-b6",
  parent: "tv",
  brand: "LG",
  name: "LG OLED B6",
  released: "2026-02",
  synonyms: ["lg oled b6", "lg b6 strømforbrug", "oled55b6", "oled65b6", "lg oled b6 watt", "lg b6 65 tommer forbrug", "lg oled b6 vs c6"],
  title: "LG OLED B6 strømforbrug (2026) → watt fra 48 til 83 tommer",
  description:
    "LG OLED B6 fra 48 til 83 tommer: watt i SDR og HDR fra EU's energimærke, kWh om året og hvorfor C6 bruger mindre end B6 i de store størrelser.",
  intro:
    "65\" LG OLED B6 bruger 90 W i standardbilledet og 55\" 74,7 W. I de store størrelser bruger B6 mærkbart mere end den dyrere C6.",
  content: `<h2>Hvor mange watt bruger LG OLED B6?</h2>
<p>B6 er LG's billigste OLED-tv for 2026 og findes i fem størrelser fra 48 til 83 tommer. I EU's produktdatabase EPREL er B6 registreret under flere suffikser, blandt andet B62LA og B65LA. Alle de udgaver, vi har fundet, har de samme tal, så vi bruger B62LA.</p>
<p>I standardbilledet (SDR) bruger B6 62,1 W som 48", 74,7 W som 55", 90 W som 65", 111 W som 77" og 116 W som 83". Standby er 0,5 W og netværksstandby 2 W. Med fem timers tv om dagen og standby resten af døgnet bruger 65" omkring 168 kWh om året, svarende til {{kr 168}}, og 55" omkring 140 kWh, svarende til {{kr 140}}.</p>
<table>
<thead><tr><th>Størrelse</th><th>SDR</th><th>HDR</th><th>Klasse (SDR)</th></tr></thead>
<tbody>
<tr><td>48" (OLED48B6)</td><td>62,1 W</td><td>106 W</td><td>G</td></tr>
<tr><td>55" (OLED55B6)</td><td>74,7 W</td><td>122 W</td><td>F</td></tr>
<tr><td>65" (OLED65B6)</td><td>90 W</td><td>153 W</td><td>F</td></tr>
<tr><td>77" (OLED77B6)</td><td>111 W</td><td>216 W</td><td>E</td></tr>
<tr><td>83" (OLED83B6)</td><td>116 W</td><td>220 W</td><td>E</td></tr>
</tbody>
</table>

<h2>B6 mod C6: den billige bruger mere</h2>
<p>Man skulle tro, at den billigere OLED også var den mest sparsomme, men det er omvendt. <a href="/tv/lg-oled-c6/">LG OLED C6</a> er ifølge energimærket den mest sparsomme af de to, og i de store størrelser er forskellen markant. Som 77" bruger C6 87,3 W mod 111 W for B6, og som 83" 89 W mod 116 W. Det er 43–49 kWh mere om året for B6, svarende til {{kr 43-49}}.</p>
<p>Som 55" er de næsten ens: B6 bruger 74,7 W og C6 75,6 W. Som 65" bruger B6 90 W mod 84,6 W for C6, omkring 10 kWh mere om året. Som 48" er forskellen igen stor, 62,1 W mod 51 W. Køber du 55", betyder valget mellem B6 og C6 intet for elregningen. Køber du 77" eller 83", vil C6 typisk spare strøm i hele tv'ets levetid.</p>

<h2>B6 mod sidste års B5</h2>
<p>B6 bruger lidt mindre end forgængeren B5 fra 2025 i alle størrelser. 55" går fra 77 til 74,7 W, 65" fra 91,8 til 90 W og 83" fra 129 til 116 W. Den største gevinst er i 83", omkring 24 kWh om året. For 77" og 83" er energiklassen samtidig steget fra F til E. Har du allerede en B5, er der dog ingen grund til at skifte for strømmens skyld; forskellen er få kroner om måneden.</p>

<h2>HDR og spil</h2>
<p>I energimærkets HDR-måling bruger B6 106–220 W, omkring 1,6–2 gange SDR-tallet. 65" går fra 90 til 153 W. Til sammenligning bruger 65" C6 232 W i HDR, så her er B6 faktisk den sparsomme. En film på to timer i HDR på 65" B6 bruger omkring 0,3 kWh, svarende til {{kr 0,31}}.</p>
<p>Til gaming gælder det samme som for andre OLED-tv. Forbruget afhænger mest af, hvor lyst billedet er. Mørke spil bruger mindre end lyse, og en spilleindstilling med høj lysstyrke kan løfte forbruget mod HDR-tallet.</p>
<p>Bruger du 48" B6 som skærm ved computeren mange timer om dagen, ser regnestykket anderledes ud. Otte timer dagligt ved 62,1 W og standby resten af døgnet giver omkring 184 kWh om året, svarende til {{kr 184}}. Det er mere end en 65" B6 med vores almindelige tv-profil. Til den brug er en 27"-skærm langt billigere i drift; se <a href="/skaerm/">skærmes strømforbrug</a>.</p>

<h2>Sådan holder du forbruget nede</h2>
<ul>
<li>Behold den energibesparende indstilling eller brug lyssensoren; det er dem, energimærket er målt med.</li>
<li>Slå netværksstandby fra, hvis du ikke tænder tv'et via mobilen. Så bruger det 0,5 W i stedet for 2 W, omkring 10 kWh mindre om året.</li>
<li>Sluk soundbar og spillekonsol sammen med tv'et; se mere om <a href="/standby/">standbyforbrug</a>.</li>
</ul>
<p>Sammenlign med de lysere OLED-modeller <a href="/tv/lg-oled-g6/">LG OLED G6</a> og <a href="/tv/samsung-s90h/">Samsung S90H</a>, eller se alle modeller på siden om <a href="/tv/">tv'ers strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger LG OLED B6?",
      answer:
        "Ifølge EU's energimærke bruger B6 62,1 W som 48\", 74,7 W som 55\", 90 W som 65\", 111 W som 77\" og 116 W som 83\" i standardbilledet. Standby er 0,5 W.",
    },
    {
      question: "Hvad koster det at have en 65\" LG OLED B6 tændt?",
      answer:
        "Med fem timers tv om dagen bruger 65\" B6 omkring 168 kWh om året, svarende til {{kr 168}} ved månedens elpris på {{pris_kwh}}.",
    },
    {
      question: "Bruger LG OLED B6 mindre strøm end C6?",
      answer:
        "Kun som 55\", hvor de er næsten ens. Som 65\" bruger B6 5 W mere og som 77\" og 83\" 24–27 W mere end C6 i standardbilledet. I HDR bruger B6 derimod mindre.",
    },
    {
      question: "Hvad bruger LG OLED B6 i HDR?",
      answer:
        "106–220 W afhængigt af størrelse ifølge energimærket. 65\" bruger 153 W i HDR mod 90 W i standardbilledet.",
    },
    {
      question: "Hvilken energiklasse har LG OLED B6?",
      answer: "G for 48\", F for 55\" og 65\" og E for 77\" og 83\" i standardbilledet.",
    },
  ],
  sources: [
    { name: "EPREL — LG OLED48B62LA, EU's energimærke", url: eprel("2618272") },
    { name: "EPREL — LG OLED55B62LA, EU's energimærke", url: eprel("2618923") },
    { name: "EPREL — LG OLED65B62LA, EU's energimærke", url: eprel("2618943") },
    { name: "EPREL — LG OLED77B62LA, EU's energimærke", url: eprel("2619006") },
    { name: "EPREL — LG OLED83B62LA, EU's energimærke", url: eprel("2616432") },
    { name: "EPREL — LG OLED55B53LA (B5, 2025), EU's energimærke", url: eprel("2213068") },
    { name: "EPREL — LG OLED65B53LA (B5, 2025), EU's energimærke", url: eprel("2229745") },
    { name: "EPREL — LG OLED83B53LA (B5, 2025), EU's energimærke", url: eprel("2247993") },
  ],
  variants: [
    { name: "48\" (OLED48B6)", watts: { standby: 0.5, on: 62.1 }, energyClass: "G", source: 0 },
    { name: "55\" (OLED55B6)", watts: { standby: 0.5, on: 74.7 }, energyClass: "F", source: 1 },
    { name: "65\" (OLED65B6)", watts: { standby: 0.5, on: 90 }, energyClass: "F", source: 2 },
    { name: "77\" (OLED77B6)", watts: { standby: 0.5, on: 111 }, energyClass: "E", source: 3 },
    { name: "83\" (OLED83B6)", watts: { standby: 0.5, on: 116 }, energyClass: "E", source: 4 },
  ],
  publishDate: "2026-12-09",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Tallene er LG's egne oplysninger til EU's energimærke: forbruget i standardbilledet (SDR) i den billedindstilling, tv'et leveres med, og standby. Kilderne står nederst på siden.",
};

export default lgOledB6;
