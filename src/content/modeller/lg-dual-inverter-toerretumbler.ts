import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/tumbledryers20232534/${reg}`;
const lg = (m: string) => `https://www.lg.com/dk/vaskemaskine-torretumblere/torretumblere/${m}/`;

const lgDualInverterToerretumbler: ModelData = {
  slug: "lg-dual-inverter-toerretumbler",
  parent: "varmepumpe-toerretumbler",
  brand: "LG",
  name: "LG DUAL Inverter tørretumbler",
  released: "2025-12",
  synonyms: [
    "lg tørretumbler",
    "lg tørretumbler strømforbrug",
    "lg dual inverter heat pump",
    "rh80v9av7n",
    "rh80v5av0n",
    "rh90v5av7n",
    "rhx5008tlb",
    "lg varmepumpe tørretumbler",
  ],
  title: "LG DUAL Inverter tørretumbler strømforbrug (2026) → kWh",
  description:
    "LG DUAL Inverter varmepumpetørretumblere på 8 og 9 kg: energimærkets kWh pr. tørring fra klasse D til B, pris om året, programtid og billigste tidspunkt.",
  intro:
    "To LG-tumblere på 8 kg med samme programtid og samme kondensering — men V9-modellen bruger 17 % mindre strøm pr. tørring end V5-modellen.",
  content: `<h2>Hvor meget strøm bruger en LG tørretumbler?</h2>
<p>LG sælger sine varmepumpetørretumblere i Danmark under navnet DUAL Inverter Heat Pump, fx RH80V9AV7N og RH90V5AV7N. De fire modeller på siden har hver sit energimærke i EU's produktdatabase EPREL. På eco-programmet til skabstørt bomuld, vægtet mellem fuld og halv fyldning, bruger de 85–124 kWh pr. 100 tørringer, altså 0,85–1,24 kWh pr. tørring.</p>
<p>Med tre tørringer om ugen bliver det 133–193 kWh om året, svarende til {{kr 133-193}}.</p>
<table>
<thead><tr><th>Model</th><th>Kapacitet</th><th>Klasse</th><th>kWh pr. 100 tørringer</th><th>Program, fuld</th><th>Halv fyldning</th><th>kWh om året</th></tr></thead>
<tbody>
<tr><td>RH80V5AV0N</td><td>8 kg</td><td>D</td><td>116</td><td>3:01</td><td>1:50</td><td>181</td></tr>
<tr><td>RH90V5AV7N</td><td>9 kg</td><td>D</td><td>124</td><td>3:32</td><td>1:55</td><td>193</td></tr>
<tr><td>RH80V9AV7N</td><td>8 kg</td><td>C</td><td>96</td><td>3:01</td><td>1:50</td><td>150</td></tr>
<tr><td>RHX5008TLB</td><td>8 kg</td><td>B</td><td>85</td><td>4:13</td><td>2:32</td><td>133</td></tr>
</tbody>
</table>

<h2>V5 eller V9: samme tid, forskelligt forbrug</h2>
<p>Modelnummeret fortæller meget hos LG. RH80V5AV0N og RH80V9AV7N tager begge 8 kg, har begge et eco-program på 3 timer og 1 minut ved fuld fyldning og 91 % kondensering ifølge EPREL. Alligevel bruger V9-modellen 20 kWh mindre pr. 100 tørringer. Med tre tørringer om ugen er det omkring 31 kWh om året, svarende til {{kr 31}} hvert år — uden at du venter længere på tøjet.</p>
<p>9 kg-modellen RH90V5AV7N bruger 124 kWh og tager en halv time længere end 8 kg-modellerne. Pr. kg tøj er den på niveau med RH80V5AV0N, omkring 0,14 kWh. Har I meget vasketøj, er en 9 kg-tumbler stadig et godt valg, men vælger du mellem V5 og V9, er det V9's lavere klasse, der flytter mest på regningen.</p>

<h2>RHX5008TLB: klasse B mod længere tid</h2>
<p>RHX5008TLB kom i EPREL i december 2025 med klasse B og 85 kWh pr. 100 tørringer. Mod RH80V5AV0N er det 31 kWh mindre pr. 100 tørringer, omkring 48 kWh om året, svarende til {{kr 48}}. Prisen er tiden: eco-programmet tager 4 timer og 13 minutter ved fuld fyldning, over en time mere end de andre 8 kg-modeller. Den er til gengæld lidt mere stille med 62 dB mod 64 dB. Alle fire LG-modeller bruger R290 som kølemiddel i varmepumpen og har kondenseringsklasse B med 91 %.</p>
<p>Det gamle energimærke for tørretumblere brugte klasser som A++ og A+++, og dem kan du stadig møde på ældre produktsider og i annoncer. Det nye mærke fra 2025 går fra A til G og er målt på en ny måde, så en tumbler med A+++ på det gamle mærke kan godt have C på det nye. Sammenlign derfor kun tumblere på samme mærke.</p>

<h2>LG mod andre 8 kg-tumblere</h2>
<p>RH80V9AV7N med 96 kWh ligger tæt på <a href="/varmepumpe-toerretumbler/miele-t1/">Miele T1</a> på 8 kg med 95 kWh og <a href="/varmepumpe-toerretumbler/aeg-8000-toerretumbler/">AEG 8000</a>-modellen TR844P85P med 97 kWh. RHX5008TLB med 85 kWh bruger 16–19 kWh mindre om året end de tre med tre tørringer om ugen. Til 9 kg-klassen har Samsungs <a href="/varmepumpe-toerretumbler/samsung-dv90dg/">DV90DG6845LE</a> klasse A og 79 kWh — 45 kWh pr. 100 tørringer mindre end RH90V5AV7N, omkring 70 kWh om året.</p>

<h2>Hvornår er det billigst at tørre tøj?</h2>
<p>Tøjet kan vente i tromlen, så tumbleren er nem at flytte til billige timer. Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21. Alle fire LG-modeller har udskudt start, og ventetiden bruger 4 W ifølge EPREL, omkring 0,03 kWh på otte timer. Slukket bruger de 0,18–0,5 W og i netværksforbundet standby 2 W, hvis de er koblet på wifi via ThinQ. Se <a href="/elpriser/">dagens timepriser</a>, og læs, <a href="/varmepumpe-toerretumbler/">hvornår tørretumbleren er billigst at bruge</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Se efter V9 frem for V5 i modelnummeret, hvis du vælger mellem de to 8 kg-modeller.</li>
<li>Sammenlign kun energiklasser på det nye mærke fra 2025 (A–G).</li>
<li>Centrifugér godt i vaskemaskinen, og rens fnugfilteret efter hver tørring.</li>
<li>Start om aftenen med udskudt start, så tørringen ligger uden for kl. 17–21.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en LG tørretumbler?",
      answer:
        "Ifølge energimærket 1,16 kWh pr. tørring for RH80V5AV0N, 1,24 kWh for RH90V5AV7N, 0,96 kWh for RH80V9AV7N og 0,85 kWh for RHX5008TLB på eco-programmet. Det svarer til {{kr 0,85}}–{{kr 1,24}} pr. tørring.",
    },
    {
      question: "Hvad koster en LG tørretumbler om året i strøm?",
      answer: "Med tre tørringer om ugen 133–193 kWh om året afhængigt af modellen, svarende til {{kr 133-193}} ved månedens elpris.",
    },
    {
      question: "Hvilken energiklasse har LG RH80V9AV7N?",
      answer:
        "Energiklasse C på det nye energimærke fra 2025 med 96 kWh pr. 100 tørringer og 91 % kondensering ifølge EPREL. Ældre klasser som A+++ er fra det gamle mærke og kan ikke sammenlignes.",
    },
    {
      question: "Hvad er forskellen på LG RH80V5AV0N og RH80V9AV7N?",
      answer:
        "Begge tager 8 kg og har samme programtid, men RH80V5AV0N har klasse D og 116 kWh pr. 100 tørringer, RH80V9AV7N klasse C og 96 kWh. Forskellen er omkring 31 kWh om året med tre tørringer om ugen.",
    },
    {
      question: "Hvornår er det billigst at bruge tørretumbleren?",
      answer: "Typisk om natten og uden for kl. 17–21, hvor nettariffen er højest. Brug udskudt start; ventetiden bruger kun 4 W.",
    },
  ],
  sources: [
    { name: "EPREL — LG RH80V5AV0N, EU's energimærke", url: eprel("2194878") },
    { name: "EPREL — LG RH90V5AV7N, EU's energimærke", url: eprel("2194896") },
    { name: "EPREL — LG RH80V9AV7N, EU's energimærke", url: eprel("2194839") },
    { name: "EPREL — LG RHX5008TLB, EU's energimærke", url: eprel("2525914") },
    { name: "LG — RH80V9AV7N, dansk produktside", url: lg("rh80v9av7n") },
    { name: "LG — RH90V5AV7N, dansk produktside", url: lg("rh90v5av7n") },
    { name: "EPREL — Samsung DV90DG6845LE, EU's energimærke", url: "https://eprel.ec.europa.eu/screen/product/tumbledryers20232534/2195726" },
  ],
  variants: [
    { name: "8 kg, V5 (RH80V5AV0N)", watts: { off: 0.18 }, kwhPer100Cycles: 116, energyClass: "D", source: 0 },
    { name: "9 kg, V5 (RH90V5AV7N)", watts: { off: 0.18 }, kwhPer100Cycles: 124, energyClass: "D", source: 1 },
    { name: "8 kg, V9 (RH80V9AV7N)", watts: { off: 0.18 }, kwhPer100Cycles: 96, energyClass: "C", source: 2 },
    { name: "8 kg (RHX5008TLB)", watts: { off: 0.5 }, kwhPer100Cycles: 85, energyClass: "B", source: 3 },
  ],
  publishDate: "2026-12-16",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Det nye energimærke for tørretumblere (fra 2025) måler forbruget på eco-programmet til skabstørt bomuld, vægtet mellem fuld og halv fyldning; slukket er effekten i watt. Kilderne står nederst på siden.",
};

export default lgDualInverterToerretumbler;
