import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/electronicdisplays/${reg}`;

const tclC8l: ModelData = {
  slug: "tcl-c8l",
  parent: "tv",
  brand: "TCL",
  name: "TCL C8L",
  released: "2026-06",
  synonyms: ["tcl c8l", "tcl c8l 65", "tcl c8l 98", "65c8l", "55c8l", "tcl mini led strømforbrug", "tcl c8l hdr watt"],
  title: "TCL C8L strømforbrug (2026) → watt fra 55 til 98 tommer",
  description:
    "TCL C8L Mini LED fra 55 til 98 tommer: watt i SDR og HDR fra EU's energimærke, kWh om året, og hvorfor HDR-tallet er fire-fem gange standardbilledets.",
  intro:
    "I standardbilledet bruger 65\" C8L mindst af alle 65\"-tv på vores modelsider, 67 W — men i HDR trækker den fire-fem gange så meget, op til 520 W for 98\".",
  content: `<h2>Hvor mange watt bruger TCL C8L?</h2>
<p>C8L er TCL's Mini LED-tv for 2026, som TCL kalder SQD-Mini LED, og det findes i fem størrelser fra 55 til 98 tommer. På TCL's danske side hedder størrelserne blot 55C8L, 65C8L og så videre; i EU's produktdatabase EPREL er de registreret med et ekstra suffiks, og alle de udgaver, vi har fundet, har de samme tal. I standardbilledet (SDR) bruger C8L 64 W som 55", 67 W som 65", 85 W som 75", 123 W som 85" og 124 W som 98". Standby er 0,5 W og netværksstandby 2 W.</p>
<p>Energiklassen i SDR er D for 65", 75" og 98" og E for 55" og 85". Med fem timers tv om dagen og standby resten af døgnet bruger 65" omkring 126 kWh om året, svarende til {{kr 126}}, og 98" omkring 230 kWh — {{kr 230}} om året.</p>

<h2>Lavt forbrug i SDR, også i de store størrelser</h2>
<p>I standardbilledet er C8L bemærkelsesværdigt sparsom. 65" C8L bruger 67 W mod 84,6 W for 65" <a href="/tv/lg-oled-c6/">LG OLED C6</a> og 85 W for <a href="/tv/samsung-s90h/">Samsung S90H</a>. Med vores profil er det omkring 32 kWh mindre om året end C6, svarende til {{kr 32}}. Mod den lysstærke <a href="/tv/lg-oled-g6/">LG OLED G6</a> med 77,4 W er forskellen omkring 19 kWh.</p>
<p>Fra 55" til 65" stiger forbruget kun 3 W. Det store spring kommer fra 75" til 85", hvor det vokser med 38 W. Til gengæld bruger 98" kun 1 W mere end 85", selv om skærmarealet er en tredjedel større. Overvejer du en meget stor skærm, er 98" altså ikke dyrere i drift end 85" i standardbilledet.</p>

<h2>HDR: her skiller C8L sig ud</h2>
<p>Mini LED-tv har et baggrundslys, der kan skrues meget højt op i HDR, og C8L udnytter det. Energimærkets HDR-tal er fire til fem gange SDR-tallet:</p>
<table>
<thead><tr><th>Størrelse</th><th>SDR</th><th>HDR</th><th>Klasse (SDR)</th></tr></thead>
<tbody>
<tr><td>55" (55C8L)</td><td>64 W</td><td>250 W</td><td>E</td></tr>
<tr><td>65" (65C8L)</td><td>67 W</td><td>300 W</td><td>D</td></tr>
<tr><td>75" (75C8L)</td><td>85 W</td><td>400 W</td><td>D</td></tr>
<tr><td>85" (85C8L)</td><td>123 W</td><td>500 W</td><td>E</td></tr>
<tr><td>98" (98C8L)</td><td>124 W</td><td>520 W</td><td>D</td></tr>
</tbody>
</table>
<p>Det er den største forskel mellem SDR og HDR blandt de tv, vi har modelsider om. En film på to timer i HDR på 65" C8L bruger omkring 0,6 kWh, svarende til {{kr 0,6}}, og på 98" over 1 kWh — {{kr 1,04}}. Ser du alt i HDR fem timer om dagen, ender en 65" på omkring 551 kWh om året i stedet for 126 kWh. Til sammenligning bruger 65" LG OLED C6 232 W i HDR og Samsung S90H 198 W.</p>
<p>Om C8L i praksis er billigere eller dyrere i drift end et OLED-tv, afhænger derfor af, hvad du ser. Almindeligt flow-tv, nyheder og sport i SDR er billigt på C8L; streaming i HDR og Dolby Vision med høj lysstyrke er dyrt.</p>

<h2>C8L mod sidste års C8K</h2>
<p>Forgængeren C8K fra 2025 brugte ifølge EPREL 67 W i SDR og 290 W i HDR som 65" (65C8KX7). C8L har samme SDR-tal og 10 W mere i HDR. Forbruget i standardbilledet er altså uændret fra årgang til årgang, mens toplysstyrken i HDR er steget en smule.</p>

<h2>Standby og indstillinger</h2>
<p>På almindelig standby bruger C8L 0,5 W. Med netværksstandby, hvor tv'et kan vækkes fra telefonen eller et andet apparat, bruger det 2 W, og det giver omkring 10 kWh mere om året med 19 timers standby i døgnet, svarende til {{kr 10}}. Læs mere om <a href="/standby/">standby-forbrug i hjemmet</a>.</p>
<ul>
<li>Lad den automatiske lysstyrke være slået til; den dæmper baggrundslyset i et mørkt rum.</li>
<li>Skru ned for HDR-lysstyrken eller vælg en filmtilstand frem for den mest levende.</li>
<li>Slå netværksstandby fra, hvis du ikke bruger funktionerne.</li>
</ul>
<p>Siden om <a href="/tv/">tv'ets strømforbrug</a> sammenligner tv-typer og størrelser generelt.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger TCL C8L 65\"?",
      answer: "Ifølge energimærket bruger 65\" C8L 67 W i standardbilledet (SDR) og 300 W i HDR. Standby er 0,5 W og netværksstandby 2 W. Energiklassen i SDR er D.",
    },
    {
      question: "Hvad koster TCL C8L om året i strøm?",
      answer: "Med fem timers tv om dagen i SDR og standby resten af døgnet bruger 55\" omkring 120 kWh, 65\" omkring 126 kWh og 98\" omkring 230 kWh om året. 65\" svarer til {{kr 126}} ved månedens elpris.",
    },
    {
      question: "Hvor meget bruger TCL C8L i HDR?",
      answer: "Fra 250 W for 55\" til 520 W for 98\" ifølge energimærket — fire til fem gange så meget som i SDR. En film på to timer i HDR på 65\" bruger omkring 0,6 kWh, svarende til {{kr 0,6}}.",
    },
    {
      question: "Bruger TCL C8L mindre strøm end et OLED-tv?",
      answer: "I standardbilledet ja: 65\" C8L bruger 67 W mod 84,6 W for LG OLED C6 og 85 W for Samsung S90H. I HDR er det omvendt: C8L bruger 300 W mod 232 og 198 W.",
    },
    {
      question: "Bruger 98\" TCL C8L meget mere end 85\"?",
      answer: "Nej. I SDR bruger 98\" 124 W og 85\" 123 W ifølge energimærket. I HDR er tallene 520 og 500 W.",
    },
  ],
  sources: [
    { name: "EPREL — TCL 55C8LX7, EU's energimærke", url: eprel("2662305") },
    { name: "EPREL — TCL 65C8LX7, EU's energimærke", url: eprel("2662306") },
    { name: "EPREL — TCL 75C8LX7, EU's energimærke", url: eprel("2662307") },
    { name: "EPREL — TCL 85C8LX7, EU's energimærke", url: eprel("2662308") },
    { name: "EPREL — TCL 98C8LX7, EU's energimærke", url: eprel("2662309") },
    { name: "TCL Danmark — C8L SQD-Mini LED TV, produktside", url: "https://www.tcl.com/dk/da/tvs/c8l" },
    { name: "EPREL — TCL 65C8KX7 (C8K, 2025), EU's energimærke", url: eprel("2271111") },
  ],
  variants: [
    { name: "55\" (55C8L)", watts: { standby: 0.5, on: 64 }, energyClass: "E", source: 0 },
    { name: "65\" (65C8L)", watts: { standby: 0.5, on: 67 }, energyClass: "D", source: 1 },
    { name: "75\" (75C8L)", watts: { standby: 0.5, on: 85 }, energyClass: "D", source: 2 },
    { name: "85\" (85C8L)", watts: { standby: 0.5, on: 123 }, energyClass: "E", source: 3 },
    { name: "98\" (98C8L)", watts: { standby: 0.5, on: 124 }, energyClass: "D", source: 4 },
  ],
  publishDate: "2026-12-01",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Tallene er TCL's egne oplysninger til EU's energimærke: forbruget i standardbilledet (SDR) i den billedindstilling, tv'et leveres med, og standby. Kilderne står nederst på siden.",
};

export default tclC8l;
