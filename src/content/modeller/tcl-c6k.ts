import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/electronicdisplays/${reg}`;

const tclC6k: ModelData = {
  slug: "tcl-c6k",
  parent: "tv",
  brand: "TCL",
  name: "TCL C6K",
  released: "2025-03",
  synonyms: ["tcl c6k", "tcl c6k strømforbrug", "55c6k", "65c6k", "tcl c6k 75", "tcl c6k pro", "tcl c6k watt", "tcl qd-mini led forbrug"],
  title: "TCL C6K strømforbrug (2026) → watt fra 50 til 98 tommer",
  description:
    "TCL C6K QD-Mini LED fra 50 til 98 tommer: watt i SDR og HDR fra EU's energimærke, kWh om året, de nyere Pro-udgaver og sammenligning med TCL C8L.",
  intro:
    "Som 55\" bruger TCL C6K 64–70 W i standardbilledet og som 65\" 85–95 W. De nyere udgaver med Pro-navnet i EU-databasen bruger 6–10 W mindre.",
  content: `<h2>Hvor mange watt bruger TCL C6K?</h2>
<p>C6K er TCL's mellemklasse-tv med Mini LED-baggrundslys og quantum dots, som TCL kalder QD-Mini LED. Det findes fra 50 til 98 tommer. I EU's produktdatabase EPREL er tv'erne registreret med et suffiks efter modelnavnet. Vi bruger X7-udgaverne, som er de nyeste og har lavere tal end de første registreringer.</p>
<p>I standardbilledet (SDR) bruger C6K 54 W som 50", 70 W som 55", 95 W som 65" og 155 W som 98". Standby er 0,5 W i alle størrelser og netværksstandby 2 W. Med fem timers tv om dagen og standby resten af døgnet bruger 55" omkring 131 kWh om året, svarende til {{kr 131}}, og 65" omkring 177 kWh, svarende til {{kr 177}}.</p>
<table>
<thead><tr><th>Størrelse</th><th>SDR</th><th>HDR</th><th>Klasse (SDR)</th></tr></thead>
<tbody>
<tr><td>50" (50C6K)</td><td>54 W</td><td>103 W</td><td>E</td></tr>
<tr><td>55" (55C6K)</td><td>70 W</td><td>150 W</td><td>F</td></tr>
<tr><td>55" (55C6K Pro)</td><td>64 W</td><td>150 W</td><td>E</td></tr>
<tr><td>65" (65C6K)</td><td>95 W</td><td>196 W</td><td>F</td></tr>
<tr><td>65" (65C6K Pro)</td><td>85 W</td><td>300 W</td><td>E</td></tr>
<tr><td>75" (75C6K Pro)</td><td>107 W</td><td>238 W</td><td>E</td></tr>
<tr><td>85" (85C6K Pro)</td><td>103 W</td><td>390 W</td><td>D</td></tr>
<tr><td>98" (98C6K)</td><td>155 W</td><td>290 W</td><td>E</td></tr>
</tbody>
</table>

<h2>C6K og C6K Pro: to sæt tal i EU-databasen</h2>
<p>I maj 2026 registrerede TCL en ny række udgaver i EPREL med navnet C6K Pro i 55, 65, 75 og 85 tommer. TCL's danske produktside nævner ikke Pro-navnet, så vi kan ikke sige præcist, hvad der adskiller dem. I standardbilledet bruger Pro-udgaverne mindre: 64 W mod 70 W som 55" og 85 W mod 95 W som 65". Det er 11–18 kWh mindre om året med vores profil.</p>
<p>De første registreringer fra januar 2025, med suffikset X1, har højere tal for de store størrelser: 126 W for 75" og 155 W for 85". 55" og 65" står med de samme tal som X7. Står der et andet modelnummer på dit tv, kan du slå det op i EPREL via QR-koden på energimærket.</p>
<p>Bemærk også 85" Pro, der med 103 W bruger lidt mindre end 75" Pro med 107 W. Det er sjældent, men det står sådan på energimærket, og 85" har derfor den bedste energiklasse i serien, D.</p>

<h2>HDR: op til fire gange så meget</h2>
<p>Mini LED-tv kan skrue baggrundslyset meget højt op i HDR, og det koster strøm. I energimærkets HDR-måling bruger C6K 103–390 W, fra knap to til næsten fire gange SDR-tallet. 65" C6K går fra 95 til 196 W, og 65" C6K Pro fra 85 til 300 W. Pro-udgaven er altså billigst i SDR og dyrest i HDR.</p>
<p>En film på to timer i HDR på 65" C6K bruger omkring 0,4 kWh, svarende til {{kr 0,39}}, og på 65" C6K Pro omkring 0,6 kWh, svarende til {{kr 0,6}}. Ser du mest flow-tv, nyheder og sport i SDR, er forskellen lille. Streamer du meget i HDR og Dolby Vision, betyder HDR-tallet mere end SDR-tallet.</p>

<h2>C6K mod C8L, QN90F og OLED</h2>
<p>Den dyrere <a href="/tv/tcl-c8l/">TCL C8L</a> er mere sparsom i standardbilledet. Som 55" bruger den 64 W ligesom 55" C6K Pro, men som 65" kun 67 W mod 85–95 W for C6K. Det er 33–51 kWh mindre om året. I HDR trækker C8L til gengæld mere, 300 W som 65".</p>
<p><a href="/tv/samsung-qn90f/">Samsung QN90F</a> ligger med 76 W som 55" og 89 W som 65" på niveau med C6K. Mod OLED som <a href="/tv/lg-oled-c6/">LG OLED C6</a> med 75,6 W som 55" og 84,6 W som 65" er 55" C6K en anelse mere sparsom, mens 65" C6K uden Pro bruger 10 W mere end C6.</p>

<h2>Sådan holder du forbruget nede</h2>
<p>Billedindstillingen betyder mere end størrelsen. Energimærket er målt i den indstilling, tv'et leveres med. Skifter du til en levende eller lys indstilling, kan forbruget stige betydeligt.</p>
<ul>
<li>Brug lyssensoren, så baggrundslyset skrues ned, når stuen er mørk.</li>
<li>Slå hurtig opstart og »vågn via netværk« fra, hvis du ikke bruger dem; så bruger tv'et 0,5 W i stedet for 2 W i standby.</li>
<li>Sluk for soundbar og spillekonsol sammen med tv'et — de har ofte et højere <a href="/standby/">standbyforbrug</a> end selve tv'et.</li>
</ul>
<p>Se flere modeller på siden om <a href="/tv/">tv'ers strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger TCL C6K?",
      answer:
        "Ifølge EU's energimærke bruger C6K 54 W som 50\", 70 W som 55\", 95 W som 65\" og 155 W som 98\" i standardbilledet. Udgaverne med Pro-navnet bruger 64 W som 55\", 85 W som 65\", 107 W som 75\" og 103 W som 85\".",
    },
    {
      question: "Hvad koster det at have en 65\" TCL C6K tændt?",
      answer:
        "Med fem timers tv om dagen bruger 65\" C6K omkring 177 kWh om året, svarende til {{kr 177}} ved månedens elpris på {{pris_kwh}}. 65\" C6K Pro bruger omkring 159 kWh, svarende til {{kr 159}}.",
    },
    {
      question: "Hvad bruger TCL C6K i HDR?",
      answer:
        "103–390 W afhængigt af størrelse ifølge energimærket. 65\" bruger 196 W og 65\" Pro 300 W i HDR mod 95 og 85 W i standardbilledet.",
    },
    {
      question: "Hvad er forskellen på C6K og C6K Pro?",
      answer:
        "TCL's danske side nævner ikke Pro-navnet. I EU-databasen er Pro-udgaverne registreret fra maj 2026 og bruger 6–10 W mindre i standardbilledet end de første C6K, men mere i HDR som 65\".",
    },
    {
      question: "Hvad bruger TCL C6K i standby?",
      answer:
        "0,5 W i alle størrelser og 2 W i netværksstandby, hvor tv'et kan vækkes via netværket. Det er omkring 3,5–14 kWh om året.",
    },
  ],
  sources: [
    { name: "EPREL — TCL 50C6KX7, EU's energimærke", url: eprel("2506488") },
    { name: "EPREL — TCL 55C6KX7, EU's energimærke", url: eprel("2271094") },
    { name: "EPREL — TCL 55C6K ProX7, EU's energimærke", url: eprel("2686527") },
    { name: "EPREL — TCL 65C6KX7, EU's energimærke", url: eprel("2271104") },
    { name: "EPREL — TCL 65C6K ProX7, EU's energimærke", url: eprel("2686528") },
    { name: "EPREL — TCL 75C6K ProX7, EU's energimærke", url: eprel("2686529") },
    { name: "EPREL — TCL 85C6K ProX7, EU's energimærke", url: eprel("2686530") },
    { name: "EPREL — TCL 98C6KX7, EU's energimærke", url: eprel("2204591") },
    { name: "EPREL — TCL 75C6KX1 (første registrering), EU's energimærke", url: eprel("2179762") },
    { name: "EPREL — TCL 85C6KX1 (første registrering), EU's energimærke", url: eprel("2179752") },
    { name: "TCL Danmark — C6K QD-Mini LED, produktside", url: "https://www.tcl.com/dk/da/tvs/55c6k" },
  ],
  variants: [
    { name: "50\" (50C6K)", watts: { standby: 0.5, on: 54 }, energyClass: "E", source: 0 },
    { name: "55\" (55C6K)", watts: { standby: 0.5, on: 70 }, energyClass: "F", source: 1 },
    { name: "55\" (55C6K Pro)", watts: { standby: 0.5, on: 64 }, energyClass: "E", source: 2 },
    { name: "65\" (65C6K)", watts: { standby: 0.5, on: 95 }, energyClass: "F", source: 3 },
    { name: "65\" (65C6K Pro)", watts: { standby: 0.5, on: 85 }, energyClass: "E", source: 4 },
    { name: "75\" (75C6K Pro)", watts: { standby: 0.5, on: 107 }, energyClass: "E", source: 5 },
    { name: "85\" (85C6K Pro)", watts: { standby: 0.5, on: 103 }, energyClass: "D", source: 6 },
    { name: "98\" (98C6K)", watts: { standby: 0.5, on: 155 }, energyClass: "E", source: 7 },
  ],
  publishDate: "2026-12-07",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Tallene er TCL's egne oplysninger til EU's energimærke: forbruget i standardbilledet (SDR) i den billedindstilling, tv'et leveres med, og standby. Vi viser de nyeste registreringer (X7). Kilderne står nederst på siden.",
};

export default tclC6k;
