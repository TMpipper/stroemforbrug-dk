import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/tumbledryers20232534/${reg}`;
const sheet = (m: string) => `https://media3.bsh-group.com/Documents/specsheet/da-DK/${m}.pdf`;

const boschSerie6Toerretumbler: ModelData = {
  slug: "bosch-serie-6-toerretumbler",
  parent: "varmepumpe-toerretumbler",
  brand: "Bosch",
  name: "Bosch Serie 6 tørretumbler",
  released: "2025-03",
  synonyms: [
    "bosch serie 6 tørretumbler",
    "bosch varmepumpe tørretumbler strømforbrug",
    "bosch wqg2450isn",
    "bosch wqg2420wsn",
    "bosch wqg2320lsn",
    "bosch wqg245dxsn",
    "bosch kondenstørretumbler med varmepumpe",
    "bosch serie 6 tørretumbler kwh",
  ],
  title: "Bosch Serie 6 tørretumbler strømforbrug (2026) → kWh og pris",
  description:
    "Bosch Serie 6 varmepumpetørretumblere i 8 og 9 kg: energimærkets kWh pr. tørring, pris om året, og hvad selvrensende kondensator og klasse C betyder.",
  intro:
    "Den antracitgrå WQG245DXSN er den eneste af de fire i klasse C — den bruger 18 kWh mindre pr. 100 tørringer end de to andre 9 kg-modeller.",
  content: `<h2>Hvor meget strøm bruger en Bosch Serie 6 tørretumbler?</h2>
<p>Bosch' Serie 6 tørretumblere er kondenstørretumblere med varmepumpe, og hver model har sit eget energimærke i EU's produktdatabase EPREL. Siden 2025 bruger tørretumblere et nyt EU-energimærke, hvor forbruget står i kWh pr. 100 tørringer på eco-programmet til skabstørt bomuld, vægtet mellem fuld og halv fyldning. For de fire Serie 6-modeller på siden spænder det fra 110 til 128 kWh pr. 100 tørringer, altså 1,10–1,28 kWh pr. tørring.</p>
<p>Med tre tørringer om ugen bliver det 172–200 kWh om året, svarende til {{kr 172-200}}. Alle fire har samme mål — 84,2 cm høje, 59,8 cm brede og 61,3 cm dybe ifølge Bosch' danske datablade — og bruger kølemidlet R290.</p>

<h2>Modellerne side om side</h2>
<table>
<thead><tr><th>Model</th><th>Kapacitet</th><th>kWh pr. 100 tørringer</th><th>Klasse</th><th>Program, fuld</th><th>Kondensering</th><th>Støj</th></tr></thead>
<tbody>
<tr><td>WQG2320LSN</td><td>8 kg</td><td>119</td><td>D</td><td>3:25</td><td>83 %</td><td>62 dB</td></tr>
<tr><td>WQG2420WSN</td><td>9 kg</td><td>128</td><td>D</td><td>3:50</td><td>83 %</td><td>62 dB</td></tr>
<tr><td>WQG2450ISN</td><td>9 kg</td><td>128</td><td>D</td><td>2:54</td><td>91 %</td><td>62 dB</td></tr>
<tr><td>WQG245DXSN</td><td>9 kg</td><td>110</td><td>C</td><td>3:15</td><td>88 %</td><td>61 dB</td></tr>
</tbody>
</table>
<p>WQG2450ISN og WQG2420WSN på 9 kg bruger det samme, men er forskellige på andre punkter. WQG2450ISN har selvrensende kondensator og er hurtigst: 2 timer og 54 minutter for en fuld eco-tørring mod 3 timer og 50 minutter for WQG2420WSN. Den kondenserer også 91 % af fugten mod 83 %, så mindre damp slipper ud i rummet. WQG245DXSN i antracitgrå har ligeledes selvrensende kondensator og er den mest sparsomme af de fire: 18 kWh mindre pr. 100 tørringer end de to andre 9 kg-modeller. Med tre tørringer om ugen er det omkring 28 kWh om året, svarende til {{kr 28}}.</p>
<p>8 kg-modellen WQG2320LSN bruger 119 kWh pr. 100 tørringer. Pr. kg tøj er den ikke mere sparsom end 9 kg-modellerne, og har I meget vasketøj, sparer en 9 kg-model jer for tørringer.</p>

<h2>Serie 6 mod Bosch Serie 8 og de andre mærker</h2>
<p><a href="/varmepumpe-toerretumbler/bosch-serie-8-toerretumbler/">Bosch Serie 8</a> (WQB246DSSN og søskende) bruger 92 kWh pr. 100 tørringer i klasse B. Det er 36 kWh mindre end Serie 6-modellerne på 9 kg i klasse D, og med tre tørringer om ugen omkring 56 kWh om året, svarende til {{kr 56}}. Over en tørretumblers levetid på ti år eller mere bliver forskellen til en mærkbar sum, som er værd at regne med, når du sammenligner prisen på maskinerne.</p>
<p><a href="/varmepumpe-toerretumbler/aeg-7000-toerretumbler/">AEG 7000</a> spænder fra 102 til 128 kWh pr. 100 tørringer, og Miele T1 fra 95 til 107. Serie 6 i klasse D ligger altså i den tunge ende af varmepumpetumblerne, mens WQG245DXSN i klasse C er på niveau med de mest sparsomme AEG-modeller. En gammel tumbler uden varmepumpe bruger typisk langt mere end nogen af dem.</p>
<p>Den ældre WQG245EASN fra 2022, som også er en Serie 6, har energiklasse E med 144 kWh pr. 100 tørringer. Står du med den på tilbud, så regn med 16–34 kWh mere pr. 100 tørringer end de nyere modeller.</p>

<h2>Centrifugér godt, og rens filteret</h2>
<p>Det vigtigste for tumblerens forbrug sker i vaskemaskinen. Jo mere vand centrifugeringen fjerner, jo mindre skal tumbleren fjerne, og jo kortere tid kører den. Vælg den højeste centrifugering, tøjet tåler; en vaskemaskine i centrifugeringsklasse A efterlader under 45 % restfugt, klasse B 45–54 %.</p>
<p>Rens fnugfilteret efter hver tørring. På WQG2450ISN og WQG245DXSN rengør kondensatoren sig selv ifølge Bosch' datablade; på de to andre nævner databladene det ikke, så følg brugsanvisningens råd om rengøring — en tilstoppet kondensator forlænger tørretiden. Alle fire har en fugtsensor (AutoDry), der stopper programmet, når tøjet er tørt — vælg skabstørt frem for ekstra tørt, når du kan.</p>

<h2>Hvornår er det billigst at tørre tøj?</h2>
<p>En tørretumbler er let at flytte til billige timer, fordi tøjet kan vente i tromlen. Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21. Alle fire modeller har udskudt start, og ventetiden koster næsten intet: 4 W ifølge EPREL. Slukket bruger WQG2450ISN og WQG245DXSN 0,3 W og de to andre 0,5 W. Se <a href="/elpriser/">dagens timepriser</a>, og læs, <a href="/varmepumpe-toerretumbler/">hvornår tørretumbleren er billigst at bruge</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Brug eco-programmet til bomuld; det er det, energimærket er målt på.</li>
<li>Vælg WQG245DXSN, hvis du vil have den mest sparsomme Serie 6.</li>
<li>Fyld tumbleren, men ikke over 8 eller 9 kg.</li>
<li>Flyt tørringen væk fra kl. 17–21 med udskudt start.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger Bosch WQG2450ISN pr. tørring?",
      answer: "1,28 kWh pr. tørring på eco-programmet ifølge energimærket (128 kWh pr. 100 tørringer, klasse D). Det svarer til {{kr 1,28}} pr. tørring ved månedens elpris.",
    },
    {
      question: "Hvad koster en Bosch Serie 6 tørretumbler om året?",
      answer: "Med tre tørringer om ugen bruger den 172–200 kWh om året afhængigt af modellen, svarende til {{kr 172-200}} ved månedens elpris.",
    },
    {
      question: "Hvilken Bosch Serie 6 tørretumbler bruger mindst strøm?",
      answer: "Af de fire modeller på siden bruger WQG245DXSN mindst: 110 kWh pr. 100 tørringer i klasse C. De to andre 9 kg-modeller bruger 128 kWh.",
    },
    {
      question: "Hvad er forskellen på Bosch WQG2450ISN og WQG2420WSN?",
      answer: "Ikke forbruget: begge bruger 128 kWh pr. 100 tørringer. WQG2450ISN har selvrensende kondensator, kondenserer 91 % af fugten mod 83 % og er hurtigere: 2:54 mod 3:50 for en fuld eco-tørring.",
    },
    {
      question: "Bruger Bosch Serie 6 mere end Serie 8?",
      answer: "Ja. Serie 8 bruger 92 kWh pr. 100 tørringer i klasse B, Serie 6 110–128 kWh. Med tre tørringer om ugen sparer Serie 8 op til omkring 56 kWh om året.",
    },
  ],
  sources: [
    { name: "EPREL — Bosch WQG2320LSN (8 kg), EU's energimærke", url: eprel("2142082") },
    { name: "EPREL — Bosch WQG2420WSN (9 kg), EU's energimærke", url: eprel("2401823") },
    { name: "EPREL — Bosch WQG2450ISN (9 kg), EU's energimærke", url: eprel("2207568") },
    { name: "EPREL — Bosch WQG245DXSN (9 kg), EU's energimærke", url: eprel("2223884") },
    { name: "Bosch — WQG2450ISN, produktdatablad (dansk)", url: sheet("WQG2450ISN") },
    { name: "Bosch — WQG2420WSN, produktdatablad (dansk)", url: sheet("WQG2420WSN") },
    { name: "Bosch — WQG245DXSN, produktdatablad (dansk)", url: sheet("WQG245DXSN") },
    { name: "EPREL — Bosch WQG245EASN (Serie 6, 2022), EU's energimærke", url: eprel("2114901") },
  ],
  variants: [
    { name: "8 kg (WQG2320LSN)", watts: { off: 0.5 }, kwhPer100Cycles: 119, energyClass: "D", source: 0 },
    { name: "9 kg (WQG2420WSN)", watts: { off: 0.5 }, kwhPer100Cycles: 128, energyClass: "D", source: 1 },
    { name: "9 kg (WQG2450ISN)", watts: { off: 0.3 }, kwhPer100Cycles: 128, energyClass: "D", source: 2 },
    { name: "9 kg, antracitgrå (WQG245DXSN)", watts: { off: 0.3 }, kwhPer100Cycles: 110, energyClass: "C", source: 3 },
  ],
  publishDate: "2026-12-03",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Det nye energimærke for tørretumblere (fra 2025) måler forbruget på eco-programmet til skabstørt bomuld, vægtet mellem fuld og halv fyldning; slukket er effekten i watt. Kilderne står nederst på siden.",
};

export default boschSerie6Toerretumbler;
