import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/electronicdisplays/${reg}`;

const samsungS90h: ModelData = {
  slug: "samsung-s90h",
  parent: "tv",
  brand: "Samsung",
  name: "Samsung S90H",
  released: "2026-05",
  synonyms: ["samsung s90h", "samsung oled s90h", "tq65s90hae", "tq55s90hae", "tq77s90hat", "samsung s90h 65", "samsung oled 2026 strømforbrug"],
  title: "Samsung S90H strømforbrug (2026) → watt fra 42 til 83 tommer",
  description:
    "Samsung S90H OLED i seks størrelser: watt i SDR og HDR fra EU's energimærke, kWh om året med fem timers tv om dagen, og springet til 77 tommer.",
  intro:
    "Op til 65\" ligger S90H på niveau med LG OLED C6, men de store størrelser trækker markant mere: 77\" bruger 112 W mod 85 W for 65\".",
  content: `<h2>Hvor mange watt bruger Samsung S90H?</h2>
<p>S90H er Samsungs OLED-serie i mellemklassen for 2026, og den findes i seks størrelser fra 42 til 83 tommer. Hver størrelse har sit eget energimærke i EU's produktdatabase EPREL, og de danske udgaver har modelkoder, der begynder med TQ. I standardbilledet (SDR), altså i den billedindstilling tv'et leveres med, bruger S90H 52 W som 42", 62 W som 48", 76 W som 55" og 85 W som 65". De to største trækker 112 W (77") og 128 W (83").</p>
<p>Standby er 0,5 W for alle størrelser og netværksstandby 2 W. Energiklassen i SDR er E for 65" og 77", F for 55" og 83" og G for de to mindste. Klassen tager højde for skærmens areal, så det er ikke den mindste skærm, der får den bedste klasse.</p>

<h2>Springet fra 65" til 77"</h2>
<p>Inden for S90H er forbruget ikke jævnt fordelt over størrelserne. Fra 55" til 65" stiger det kun 9 W, men fra 65" til 77" hele 27 W. Med fem timers tv om dagen og standby resten af døgnet bruger 65" omkring 159 kWh om året og 77" omkring 208 kWh — knap 50 kWh mere, svarende til {{kr 49}} om året. 83" ender på omkring 237 kWh.</p>
<p>Her adskiller S90H sig fra <a href="/tv/lg-oled-c6/">LG OLED C6</a>, hvor de store størrelser næsten ikke bruger mere end 65". I 65" er de to praktisk talt ens: 85 W for S90H mod 84,6 W for C6. Men en 77" C6 bruger 87,3 W og en 83" C6 89 W. Står du mellem de to i 77", er forskellen omkring 45 kWh om året, svarende til {{kr 45}}, og i 83" omkring 71 kWh — {{kr 71}} om året.</p>

<h2>HDR: to til tre gange så meget</h2>
<p>Energimærket har også et tal for HDR, hvor skærmen må lyse langt kraftigere i de lyse partier. S90H bruger her mellem to og tre gange så meget som i SDR:</p>
<table>
<thead><tr><th>Størrelse</th><th>SDR</th><th>HDR</th><th>Klasse (SDR)</th></tr></thead>
<tbody>
<tr><td>42" (TQ42S90HAE)</td><td>52 W</td><td>99 W</td><td>G</td></tr>
<tr><td>48" (TQ48S90HAE)</td><td>62 W</td><td>132 W</td><td>G</td></tr>
<tr><td>55" (TQ55S90HAE)</td><td>76 W</td><td>192 W</td><td>F</td></tr>
<tr><td>65" (TQ65S90HAE)</td><td>85 W</td><td>198 W</td><td>E</td></tr>
<tr><td>77" (TQ77S90HAT)</td><td>112 W</td><td>327 W</td><td>E</td></tr>
<tr><td>83" (TQ83S90HAE)</td><td>128 W</td><td>372 W</td><td>F</td></tr>
</tbody>
</table>
<p>Bemærk, at 55" og 65" ligger tæt i HDR med 192 og 198 W, mens 77" springer til 327 W. En film på to timer i HDR på 65" bruger omkring 0,4 kWh, svarende til {{kr 0,4}}, mod 0,17 kWh i SDR. Det er småpenge pr. film, men ser du mest streaming i HDR, kan årsforbruget blive dobbelt så højt som i tabellen øverst.</p>

<h2>S90H mod sidste års S90F</h2>
<p>Forgængeren S90F fra 2025 brugte 89 W i SDR som 65" (TQ65S90FAT) og 204 W i HDR ifølge EPREL. S90H i samme størrelse bruger 85 W og 198 W, og energiklassen er gået fra F til E. Med vores profil sparer den nye model omkring 7 kWh om året i 65" — {{kr 7}}. Det er ikke en grund til at skifte et velfungerende tv ud, men det viser, at panelerne bliver en smule mere effektive fra år til år.</p>

<h2>Standby og netværksstandby</h2>
<p>På almindelig standby bruger S90H 0,5 W, omkring 3,5 kWh om året med 19 timers standby i døgnet. Slår du funktioner til, der holder tv'et på netværket, så det kan tændes fra telefonen, en højttaler eller et andet apparat, bruger det 2 W. Det giver omkring 10 kWh mere om året, svarende til {{kr 10}}. Læs mere om <a href="/standby/">standby-forbrug i hjemmet</a>.</p>

<h2>Sådan holder du forbruget nede</h2>
<ul>
<li>Brug tv'ets energisparefunktion eller automatisk lysstyrke, som dæmper billedet i et mørkt rum.</li>
<li>Vælg størrelse med omtanke: på S90H er 65" den sidste størrelse, før forbruget stiger kraftigt.</li>
<li>Slå netværksstandby fra, hvis du ikke tænder tv'et via netværket.</li>
<li>Undgå de mest levende billedtilstande til hverdag; de øger lysstyrken og dermed forbruget.</li>
</ul>
<p>Vil du regne på dine egne timer, kan du bruge <a href="/beregner/">beregneren</a> med tallene ovenfor. Siden om <a href="/tv/">tv'ets strømforbrug</a> sammenligner typer og størrelser generelt.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger Samsung S90H 65\"?",
      answer: "Ifølge energimærket bruger TQ65S90HAE 85 W i standardbilledet (SDR) og 198 W i HDR. Standby er 0,5 W og netværksstandby 2 W. Energiklassen i SDR er E.",
    },
    {
      question: "Hvad koster Samsung S90H om året i strøm?",
      answer: "Med fem timers tv om dagen i SDR og standby resten af døgnet bruger 55\" omkring 142 kWh og 65\" omkring 159 kWh om året. Det svarer til {{kr 142}} og {{kr 159}} ved månedens elpris.",
    },
    {
      question: "Bruger Samsung S90H mere strøm end LG OLED C6?",
      answer: "I 65\" er de næsten ens: 85 W mod 84,6 W i SDR. I 77\" og 83\" bruger S90H markant mere, 112 og 128 W mod 87,3 og 89 W for C6. I 77\" er forskellen omkring 45 kWh om året, svarende til {{kr 45}}.",
    },
    {
      question: "Hvor meget bruger Samsung S90H i HDR?",
      answer: "Fra 99 W for 42\" til 372 W for 83\" ifølge energimærket. 65\" bruger 198 W i HDR mod 85 W i SDR, så en film på to timer i HDR koster omkring {{kr 0,4}}.",
    },
    {
      question: "Hvor meget bruger Samsung S90H på standby?",
      answer: "0,5 W på almindelig standby og 2 W i netværksstandby. Netværksstandby 19 timer i døgnet giver omkring 10 kWh mere om året, svarende til {{kr 10}}.",
    },
  ],
  sources: [
    { name: "EPREL — Samsung TQ42S90HAE, EU's energimærke", url: eprel("2571522") },
    { name: "EPREL — Samsung TQ48S90HAE, EU's energimærke", url: eprel("2571535") },
    { name: "EPREL — Samsung TQ55S90HAE, EU's energimærke", url: eprel("2571567") },
    { name: "EPREL — Samsung TQ65S90HAE, EU's energimærke", url: eprel("2571589") },
    { name: "EPREL — Samsung TQ77S90HAT, EU's energimærke", url: eprel("2571609") },
    { name: "EPREL — Samsung TQ83S90HAE, EU's energimærke", url: eprel("2571616") },
    { name: "EPREL — Samsung TQ65S90FAT (S90F, 2025), EU's energimærke", url: eprel("2205098") },
  ],
  variants: [
    { name: "42\" (TQ42S90HAE)", watts: { standby: 0.5, on: 52 }, energyClass: "G", source: 0 },
    { name: "48\" (TQ48S90HAE)", watts: { standby: 0.5, on: 62 }, energyClass: "G", source: 1 },
    { name: "55\" (TQ55S90HAE)", watts: { standby: 0.5, on: 76 }, energyClass: "F", source: 2 },
    { name: "65\" (TQ65S90HAE)", watts: { standby: 0.5, on: 85 }, energyClass: "E", source: 3 },
    { name: "77\" (TQ77S90HAT)", watts: { standby: 0.5, on: 112 }, energyClass: "E", source: 4 },
    { name: "83\" (TQ83S90HAE)", watts: { standby: 0.5, on: 128 }, energyClass: "F", source: 5 },
  ],
  publishDate: "2026-11-27",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Tallene er Samsungs egne oplysninger til EU's energimærke: forbruget i standardbilledet (SDR) i den billedindstilling, tv'et leveres med, og standby. Kilderne står nederst på siden.",
};

export default samsungS90h;
