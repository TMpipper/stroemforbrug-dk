import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/electronicdisplays/${reg}`;

const samsungQn90f: ModelData = {
  slug: "samsung-qn90f",
  parent: "tv",
  brand: "Samsung",
  name: "Samsung QN90F Neo QLED",
  released: "2025-04",
  synonyms: [
    "samsung qn90f",
    "samsung neo qled qn90f",
    "tq55qn90fat",
    "tq65qn90fat",
    "tq75qn90fat",
    "samsung qn90f 65 strømforbrug",
    "samsung mini led tv strømforbrug",
    "samsung qn90f 115 tommer",
  ],
  title: "Samsung QN90F Neo QLED strømforbrug (2026) → watt og pris",
  description:
    "Samsung QN90F Neo QLED fra 43 til 115 tommer: watt i SDR og HDR fra EU's energimærke, kWh om året med fem timers tv om dagen, og hvad størrelsen koster.",
  intro:
    "Op til 85 tommer følger forbruget størrelsen jævnt, men 115 tommer trækker 228 W — tre gange så meget som 55 tommer.",
  content: `<h2>Hvor mange watt bruger Samsung QN90F?</h2>
<p>Samsung QN90F er Samsungs Neo QLED-tv fra 2025, et LCD-tv med mini-LED-baggrundslys, og hver størrelse har sit eget energimærke i EU's produktdatabase EPREL. I standardbilledet (SDR) bruger den 50 W i 43 tommer, 76 W i 55 tommer og 89 W i 65 tommer. Den største, på 115 tommer, bruger 228 W. Standby er 0,5 W og netværksstandby 2 W for alle størrelser.</p>
<p>Med fem timers tv om dagen og standby resten af døgnet bruger 55 tommer omkring 142 kWh og 65 tommer omkring 166 kWh om året, svarende til {{kr 142}} og {{kr 166}}. 43 tommer klarer sig med 95 kWh, mens 115 tommer bruger omkring 420 kWh — mere end et amerikanerkøleskab.</p>

<h2>Størrelserne side om side</h2>
<table>
<thead><tr><th>Størrelse</th><th>SDR</th><th>Klasse SDR</th><th>HDR</th><th>kWh om året</th></tr></thead>
<tbody>
<tr><td>43" (TQ43QN90FAT)</td><td>50 W</td><td>F</td><td>102 W</td><td>95</td></tr>
<tr><td>50" (TQ50QN90FAT)</td><td>60 W</td><td>F</td><td>124 W</td><td>113</td></tr>
<tr><td>55" (TQ55QN90FAT)</td><td>76 W</td><td>F</td><td>209 W</td><td>142</td></tr>
<tr><td>65" (TQ65QN90FAT)</td><td>89 W</td><td>F</td><td>231 W</td><td>166</td></tr>
<tr><td>75" (TQ75QN90FAT)</td><td>101 W</td><td>E</td><td>253 W</td><td>188</td></tr>
<tr><td>85" (TQ85QN90FAT)</td><td>122 W</td><td>E</td><td>326 W</td><td>226</td></tr>
<tr><td>98" (TQ98QN90FAT)</td><td>152 W</td><td>E</td><td>317 W</td><td>281</td></tr>
<tr><td>115" (TQ115QN90FT)</td><td>228 W</td><td>G</td><td>702 W</td><td>420</td></tr>
</tbody>
</table>
<p>Energiklassen bliver bedre med størrelsen fra 75 tommer, fordi klassen regnes i forhold til skærmens areal: et stort tv må bruge flere watt for samme klasse. Det betyder ikke, at det store tv er billigere at have — kun at det er effektivt for sin størrelse. 115 tommer har klasse G og bruger over dobbelt så meget som 75 tommer. Vælg størrelse efter rummet og afstanden til sofaen; hvert trin op koster 10–30 W mere i SDR op til 98 tommer, og springet fra 98 til 115 tommer 76 W.</p>

<h2>HDR koster to til tre gange så meget</h2>
<p>Energimærket måler også forbruget i HDR, hvor skærmen lyser langt kraftigere i de lyse partier. Her har alle størrelser energiklasse G. 55 tommer bruger 209 W i HDR mod 76 W i SDR, og 115 tommer 702 W. En film på to timer i HDR på 65 tommer bruger omkring 0,46 kWh, svarende til {{kr 0,46}}, mod 0,18 kWh i SDR. Ser du meget HDR fra streamingtjenester eller spil, ligger dit årsforbrug altså en god del over tallene i tabellen.</p>
<p>Også lysstyrken i SDR betyder meget. Energimærket er målt i den billedindstilling, tv'et leveres med. Vælger du et lysere billede eller slår energisparefunktionen fra, stiger forbruget. Automatisk lysstyrke, som dæmper skærmen, når rummet er mørkt, sænker det.</p>

<h2>QN90F mod OLED-tv</h2>
<p>I 55 tommer bruger QN90F 76 W — præcis det samme som Samsungs OLED-tv <a href="/tv/samsung-s90h/">S90H</a> og næsten det samme som <a href="/tv/lg-oled-c6/">LG OLED C6</a> på 75,6 W. Mini-LED og OLED er altså nogenlunde lige sparsomme i SDR i den størrelse. I 65 tommer bruger QN90F 89 W mod 84,6 W for LG C6 og 85 W for Samsung S90H. I HDR bruger QN90F mere: 209 W i 55 tommer mod 190 W for LG C6 og 192 W for S90H, og i 65 tommer 231 W — som LG C6 med 232 W, men mere end S90H med 198 W. TCL's mini-LED-tv C8L bruger 64 W i 55 tommer i SDR.</p>
<p>Det er små forskelle i kroner om året. Over et tv's levetid på 8–10 år kan 10 W ved fem timers brug om dagen blive til 150–180 kWh.</p>

<h2>Standby: 0,5 eller 2 W</h2>
<p>Almindelig standby er 0,5 W, men står netværksstandby til — så tv'et kan tændes fra telefonen eller en højttaler — bruger det 2 W. 19 timer i døgnet giver det omkring 10 kWh mere om året, svarende til {{kr 10}}. Bruger du ikke funktionen, så slå den fra i indstillingerne. Læs mere om <a href="/standby/">standby-forbrug i hjemmet</a> og om <a href="/tv/">tv'ers strømforbrug generelt</a>.</p>

<h2>Gode råd til et lavere forbrug</h2>
<ul>
<li>Brug automatisk lysstyrke eller energisparefunktionen.</li>
<li>Slå netværksstandby fra, hvis du ikke bruger den.</li>
<li>Vælg en størrelse, der passer til rummet; 115 tommer bruger tre gange så meget som 55.</li>
<li>Sæt et sluk-ur, hvis tv'et ofte kører, uden at nogen ser det.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor mange watt bruger Samsung QN90F 65 tommer?",
      answer: "Ifølge energimærket bruger TQ65QN90FAT 89 W i standardbilledet (SDR) og 231 W i HDR. Standby er 0,5 W og netværksstandby 2 W. Energiklassen er F.",
    },
    {
      question: "Hvad koster Samsung QN90F om året i strøm?",
      answer: "Med fem timers tv om dagen i SDR og standby resten af døgnet bruger 55 tommer omkring 142 kWh og 65 tommer omkring 166 kWh om året. Det svarer til {{kr 142}} og {{kr 166}} ved månedens elpris.",
    },
    {
      question: "Hvor meget bruger Samsung QN90F 115 tommer?",
      answer: "228 W i SDR og 702 W i HDR ifølge energimærket, klasse G. Med fem timers tv om dagen bliver det omkring 420 kWh om året, svarende til {{kr 420}}.",
    },
    {
      question: "Bruger Samsung QN90F mere strøm end et OLED-tv?",
      answer: "Ikke i 55 tommer: QN90F bruger 76 W i SDR, det samme som Samsung S90H OLED og næsten det samme som LG OLED C6 på 75,6 W. I 65 tommer bruger QN90F lidt mere, 89 W mod 84,6–85 W.",
    },
    {
      question: "Hvor meget bruger Samsung QN90F på standby?",
      answer: "0,5 W på almindelig standby og 2 W i netværksstandby. Netværksstandby 19 timer i døgnet giver omkring 10 kWh mere om året, svarende til {{kr 10}}.",
    },
  ],
  sources: [
    { name: "EPREL — Samsung TQ43QN90FAT, EU's energimærke", url: eprel("2205012") },
    { name: "EPREL — Samsung TQ50QN90FAT, EU's energimærke", url: eprel("2205009") },
    { name: "EPREL — Samsung TQ55QN90FAT, EU's energimærke", url: eprel("2205006") },
    { name: "EPREL — Samsung TQ65QN90FAT, EU's energimærke", url: eprel("2205003") },
    { name: "EPREL — Samsung TQ75QN90FAT, EU's energimærke", url: eprel("2205000") },
    { name: "EPREL — Samsung TQ85QN90FAT, EU's energimærke", url: eprel("2204997") },
    { name: "EPREL — Samsung TQ98QN90FAT, EU's energimærke", url: eprel("2204994") },
    { name: "EPREL — Samsung TQ115QN90FT, EU's energimærke", url: eprel("2205013") },
  ],
  variants: [
    { name: "43\" (TQ43QN90FAT)", watts: { standby: 0.5, on: 50 }, energyClass: "F", source: 0 },
    { name: "50\" (TQ50QN90FAT)", watts: { standby: 0.5, on: 60 }, energyClass: "F", source: 1 },
    { name: "55\" (TQ55QN90FAT)", watts: { standby: 0.5, on: 76 }, energyClass: "F", source: 2 },
    { name: "65\" (TQ65QN90FAT)", watts: { standby: 0.5, on: 89 }, energyClass: "F", source: 3 },
    { name: "75\" (TQ75QN90FAT)", watts: { standby: 0.5, on: 101 }, energyClass: "E", source: 4 },
    { name: "85\" (TQ85QN90FAT)", watts: { standby: 0.5, on: 122 }, energyClass: "E", source: 5 },
    { name: "98\" (TQ98QN90FAT)", watts: { standby: 0.5, on: 152 }, energyClass: "E", source: 6 },
    { name: "115\" (TQ115QN90FT)", watts: { standby: 0.5, on: 228 }, energyClass: "G", source: 7 },
  ],
  publishDate: "2026-12-06",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Tallene er Samsungs egne oplysninger til EU's energimærke: forbruget i standardbilledet (SDR) i den billedindstilling, tv'et leveres med, og standby. Kilderne står nederst på siden.",
};

export default samsungQn90f;
