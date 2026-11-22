import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/electronicdisplays/${reg}`;

const samsungS85f: ModelData = {
  slug: "samsung-s85f",
  parent: "tv",
  brand: "Samsung",
  name: "Samsung S85F",
  released: "2025-04",
  synonyms: ["samsung s85f", "samsung oled s85f", "tq55s85fau", "tq65s85fae", "tq77s85fae", "samsung s85h", "samsung s85f 65 watt"],
  title: "Samsung S85F strømforbrug (2026) → watt, HDR og S85H",
  description:
    "Samsung S85F OLED fra 2025 i 55 til 83 tommer: watt i SDR og HDR fra EU's energimærke, kWh om året, og hvor meget den nye S85H fra 2026 sparer.",
  intro:
    "S85F er indgangsmodellen i Samsungs OLED-program fra 2025 og har et usædvanligt lavt HDR-forbrug — men den nye S85H fra 2026 bruger 8–21 W mindre i standardbilledet.",
  content: `<h2>Hvor mange watt bruger Samsung S85F?</h2>
<p>S85F er indgangen til Samsungs OLED-tv i 2025-årgangen, og den sælges stadig, mens efterfølgeren S85H kommer på markedet. De danske udgaver har modelkoder, der begynder med TQ, og hver størrelse har sit eget energimærke i EU's produktdatabase EPREL. I standardbilledet (SDR) bruger S85F 83 W som 55", 98 W som 65", 122 W som 77" og 146 W som 83". Standby er 0,5 W og netværksstandby 2 W.</p>
<p>Energiklassen i SDR er G for 55" og F for de tre store størrelser. Med fem timers tv om dagen og standby resten af døgnet bruger 55" omkring 155 kWh om året og 65" omkring 182 kWh, svarende til {{kr 155}} og {{kr 182}}. 83" ender på omkring 270 kWh — {{kr 270}} om året.</p>

<h2>HDR koster mindre end hos søskendemodellerne</h2>
<p>Det særlige ved S85F er HDR-tallet. Hvor de fleste OLED-tv bruger to til tre gange så meget i HDR som i SDR, ligger S85F langt lavere:</p>
<table>
<thead><tr><th>Størrelse</th><th>SDR</th><th>HDR</th><th>Klasse (SDR)</th></tr></thead>
<tbody>
<tr><td>55" (TQ55S85FAU)</td><td>83 W</td><td>100 W</td><td>G</td></tr>
<tr><td>65" (TQ65S85FAE)</td><td>98 W</td><td>164 W</td><td>F</td></tr>
<tr><td>77" (TQ77S85FAE)</td><td>122 W</td><td>233 W</td><td>F</td></tr>
<tr><td>83" (TQ83S85FAE)</td><td>146 W</td><td>239 W</td><td>F</td></tr>
</tbody>
</table>
<p>55" S85F bruger kun 100 W i HDR, 20 % mere end i SDR. Til sammenligning bruger 65" <a href="/tv/samsung-s90h/">Samsung S90H</a> 85 W i SDR, men 198 W i HDR. Ser du meget HDR-indhold, kan S85F altså ende med et lavere årsforbrug end den dyrere S90H, selv om den bruger mere i standardbilledet. En film på to timer i HDR på 65" S85F trækker omkring 0,33 kWh, svarende til {{kr 0,33}}, mod 0,4 kWh på S90H.</p>

<h2>S85F mod den nye S85H</h2>
<p>EPREL har allerede energimærkerne for 2026-afløseren S85H, som også findes i 48". S85H bruger mindre i alle størrelser i SDR:</p>
<table>
<thead><tr><th>Størrelse</th><th>S85F (2025)</th><th>S85H (2026)</th><th>S85H i HDR</th></tr></thead>
<tbody>
<tr><td>48" (TQ48S85HAE)</td><td>–</td><td>62 W</td><td>106 W</td></tr>
<tr><td>55" (TQ55S85HAE)</td><td>83 W</td><td>75 W</td><td>122 W</td></tr>
<tr><td>65" (TQ65S85HAE)</td><td>98 W</td><td>90 W</td><td>161 W</td></tr>
<tr><td>77" (TQ77S85HAE)</td><td>122 W</td><td>111 W</td><td>228 W</td></tr>
<tr><td>83" (TQ83S85HAE)</td><td>146 W</td><td>125 W</td><td>240 W</td></tr>
</tbody>
</table>
<p>Med fem timers tv om dagen sparer S85H omkring 15 kWh om året i 55" og 65", 20 kWh i 77" og 38 kWh i 83" — i 83" svarende til {{kr 38}} om året. I HDR er de to næsten ens fra 65" og op, mens 55" S85H bruger mere end S85F. Over et tv's levetid på 8–10 år er besparelsen på de største størrelser mærkbar, men den er ikke stor nok til at være hele grunden til at vælge den nyere model.</p>

<h2>S85F mod LG OLED C5</h2>
<p>Den nærmeste konkurrent fra samme år er <a href="/tv/lg-oled-c5/">LG OLED C5</a>, og de to ligger tæt i SDR. 55" C5 bruger 77,4 W mod 83 W for S85F, 65" 95,4 W mod 98 W, mens 77" og 83" næsten er ens med 125 og 144 W for C5 mod 122 og 146 W for S85F. Forskellen er højst omkring 10 kWh om året. Vælg mellem dem efter billede og pris; strømregningen afgør det ikke.</p>

<h2>Standby og gode vaner</h2>
<p>På standby bruger S85F 0,5 W, og med netværksstandby slået til 2 W — omkring 10 kWh mere om året med 19 timers standby i døgnet, svarende til {{kr 10}}. Slå netværksfunktionerne fra, hvis du ikke tænder tv'et fra telefonen. Læs mere om <a href="/standby/">standby-forbrug i hjemmet</a>.</p>
<ul>
<li>Brug tv'ets energisparefunktion og automatisk lysstyrke.</li>
<li>Vælg 65" frem for 77", hvis afstanden til sofaen tillader det: det sparer omkring 44 kWh om året med S85F.</li>
<li>Undgå de mest levende billedtilstande til hverdag.</li>
</ul>
<p>Siden om <a href="/tv/">tv'ets strømforbrug</a> sammenligner typer og størrelser generelt, og <a href="/beregner/">beregneren</a> regner på dine egne timer.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger Samsung S85F 65\"?",
      answer: "Ifølge energimærket bruger TQ65S85FAE 98 W i standardbilledet (SDR) og 164 W i HDR. Standby er 0,5 W og netværksstandby 2 W. Energiklassen i SDR er F.",
    },
    {
      question: "Hvad koster Samsung S85F om året i strøm?",
      answer: "Med fem timers tv om dagen i SDR og standby resten af døgnet bruger 55\" omkring 155 kWh og 65\" omkring 182 kWh om året. Det svarer til {{kr 155}} og {{kr 182}} ved månedens elpris.",
    },
    {
      question: "Bruger Samsung S85H mindre strøm end S85F?",
      answer: "Ja, i standardbilledet. 55\" S85H bruger 75 W mod 83 W, 65\" 90 W mod 98 W og 83\" 125 W mod 146 W ifølge energimærkerne. I 83\" er det omkring 38 kWh mindre om året, svarende til {{kr 38}}.",
    },
    {
      question: "Hvor meget bruger Samsung S85F i HDR?",
      answer: "100 W for 55\", 164 W for 65\", 233 W for 77\" og 239 W for 83\" ifølge energimærket. Det er lavere end Samsung S90H, hvor 65\" bruger 198 W i HDR.",
    },
    {
      question: "Hvor meget bruger Samsung S85F på standby?",
      answer: "0,5 W på almindelig standby og 2 W i netværksstandby. Netværksstandby 19 timer i døgnet giver omkring 10 kWh mere om året, svarende til {{kr 10}}.",
    },
  ],
  sources: [
    { name: "EPREL — Samsung TQ55S85FAU, EU's energimærke", url: eprel("2280655") },
    { name: "EPREL — Samsung TQ65S85FAE, EU's energimærke", url: eprel("2205082") },
    { name: "EPREL — Samsung TQ77S85FAE, EU's energimærke", url: eprel("2205081") },
    { name: "EPREL — Samsung TQ83S85FAE, EU's energimærke", url: eprel("2205080") },
    { name: "EPREL — Samsung TQ48S85HAE (S85H, 2026), EU's energimærke", url: eprel("2571534") },
    { name: "EPREL — Samsung TQ55S85HAE (S85H, 2026), EU's energimærke", url: eprel("2571566") },
    { name: "EPREL — Samsung TQ65S85HAE (S85H, 2026), EU's energimærke", url: eprel("2571588") },
    { name: "EPREL — Samsung TQ77S85HAE (S85H, 2026), EU's energimærke", url: eprel("2571608") },
    { name: "EPREL — Samsung TQ83S85HAE (S85H, 2026), EU's energimærke", url: eprel("2571615") },
  ],
  variants: [
    { name: "55\" (TQ55S85FAU)", watts: { standby: 0.5, on: 83 }, energyClass: "G", source: 0 },
    { name: "65\" (TQ65S85FAE)", watts: { standby: 0.5, on: 98 }, energyClass: "F", source: 1 },
    { name: "77\" (TQ77S85FAE)", watts: { standby: 0.5, on: 122 }, energyClass: "F", source: 2 },
    { name: "83\" (TQ83S85FAE)", watts: { standby: 0.5, on: 146 }, energyClass: "F", source: 3 },
  ],
  publishDate: "2026-11-30",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Tallene er Samsungs egne oplysninger til EU's energimærke: forbruget i standardbilledet (SDR) i den billedindstilling, tv'et leveres med, og standby. Kilderne står nederst på siden.",
};

export default samsungS85f;
