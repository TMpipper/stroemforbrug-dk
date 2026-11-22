import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/electronicdisplays/${reg}`;

const samsungS95h: ModelData = {
  slug: "samsung-s95h",
  parent: "tv",
  brand: "Samsung",
  name: "Samsung S95H",
  released: "2026-05",
  synonyms: ["samsung s95h", "samsung oled s95h", "tq65s95hft", "tq55s95hft", "tq77s95hft", "samsung s95h 65", "samsung s95h hdr watt"],
  title: "Samsung S95H strømforbrug (2026) → watt, HDR og kWh",
  description:
    "Samsung S95H OLED i 48, 55, 65 og 77 tommer: watt i SDR og HDR fra EU's energimærke, kWh om året, og hvad topmodellen koster ekstra mod S90H.",
  intro:
    "Samsungs dyreste OLED er også den mest strømkrævende i HDR: 77\" må trække 423 W — over tre gange så meget som i standardbilledet.",
  content: `<h2>Hvor mange watt bruger Samsung S95H?</h2>
<p>S95H er toppen af Samsungs OLED-program for 2026 og findes i fire størrelser. De danske udgaver har modelkoder, der begynder med TQ, og hver størrelse er registreret i EU's produktdatabase EPREL med tallene fra energimærket. I standardbilledet (SDR) bruger S95H 61 W som 48", 84 W som 55", 99 W som 65" og 127 W som 77". Standby er 0,5 W og netværksstandby 2 W.</p>
<p>Energiklassen i SDR er F for 48", 65" og 77" og G for 55". Med fem timers tv om dagen og standby resten af døgnet bruger 65" omkring 184 kWh om året, svarende til {{kr 184}}, og 77" omkring 235 kWh — {{kr 235}} om året.</p>

<h2>Hvad koster topmodellen ekstra mod S90H?</h2>
<p>Den billigere <a href="/tv/samsung-s90h/">Samsung S90H</a> bruger mindre i alle de størrelser, hvor begge findes, undtagen den mindste. I 55" er det 76 W mod 84 W for S95H, i 65" 85 W mod 99 W og i 77" 112 W mod 127 W. Med vores profil er merforbruget omkring 15 kWh om året i 55", 26 kWh i 65" og 27 kWh i 77" — i 65" svarende til {{kr 26}} om året. I 48" er det omvendt: S95H bruger 61 W og S90H 62 W.</p>
<p>Sammenlignet med <a href="/tv/lg-oled-g6/">LG OLED G6</a>, der også er en lysstærk topmodel, er forskellen større. 65" G6 bruger 77,4 W i SDR, 65" S95H 99 W. Det er omkring 39 kWh om året med fem timers tv om dagen, svarende til {{kr 39}}. I 55" er forskellen næsten lige så stor, fordi G6 kun bruger 63,9 W.</p>

<h2>HDR: tre gange så meget som SDR</h2>
<p>S95H er lavet til at lyse kraftigt i HDR, og energimærkets HDR-tal viser, hvad det koster:</p>
<table>
<thead><tr><th>Størrelse</th><th>SDR</th><th>HDR</th><th>Klasse (SDR)</th></tr></thead>
<tbody>
<tr><td>48" (TQ48S95HAE)</td><td>61 W</td><td>104 W</td><td>F</td></tr>
<tr><td>55" (TQ55S95HFT)</td><td>84 W</td><td>256 W</td><td>G</td></tr>
<tr><td>65" (TQ65S95HFT)</td><td>99 W</td><td>315 W</td><td>F</td></tr>
<tr><td>77" (TQ77S95HFT)</td><td>127 W</td><td>423 W</td><td>F</td></tr>
</tbody>
</table>
<p>Fra 55" og op bruger S95H omkring tre gange så meget i HDR som i SDR. En film på to timer i HDR på 65" trækker omkring 0,63 kWh, svarende til {{kr 0,63}}, og på 77" omkring 0,85 kWh — {{kr 0,85}}. Ser du alt i HDR, ender et 77" S95H på omkring 775 kWh om året med fem timers tv om dagen. 48" skiller sig ud: her er HDR-tallet kun 104 W.</p>
<p>OLED-skærme bruger strøm efter, hvor meget de lyser. Mørke film og serier koster mindre end lyse sportsudsendelser og naturprogrammer, og den automatiske lysstyrke kan dæmpe forbruget, når rummet er mørkt.</p>

<h2>S95H mod sidste års S95F</h2>
<p>Forgængeren S95F fra 2025 havde ifølge EPREL præcis de samme tal i 55" (TQ55S95FAT): 84 W i SDR og 256 W i HDR. I 65" (TQ65S95FAT) brugte S95F 100 W i SDR og 315 W i HDR, altså kun 1 W mere i SDR end S95H. Har du et S95F, sparer du derfor ingen strøm ved at skifte til den nye årgang.</p>

<h2>Standby</h2>
<p>På almindelig standby bruger S95H 0,5 W. Hvis tv'et holdes klar på netværket, så det kan tændes fra telefonen eller andre apparater, bruger det 2 W. Med 19 timers standby i døgnet er forskellen omkring 10 kWh om året, svarende til {{kr 10}}. Læs mere om <a href="/standby/">standby-forbrug i hjemmet</a>.</p>

<h2>Sådan får du et lavere forbrug</h2>
<ul>
<li>Brug energisparetilstanden eller automatisk lysstyrke, især om aftenen i et mørkt rum.</li>
<li>Overvej, om du har brug for topmodellens lysstyrke: i 65" bruger S90H 14 W mindre i SDR og 117 W mindre i HDR.</li>
<li>Slå netværksstandby fra, hvis du ikke bruger funktionerne.</li>
<li>Sæt et sluk-ur, hvis tv'et ofte står tændt uden at blive set.</li>
</ul>
<p>Siden om <a href="/tv/">tv'ets strømforbrug</a> sammenligner tv-typer og størrelser, og med <a href="/beregner/">beregneren</a> kan du regne på dine egne timer.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger Samsung S95H 65\"?",
      answer: "Ifølge energimærket bruger TQ65S95HFT 99 W i standardbilledet (SDR) og 315 W i HDR. Standby er 0,5 W og netværksstandby 2 W. Energiklassen i SDR er F.",
    },
    {
      question: "Hvad koster Samsung S95H om året i strøm?",
      answer: "Med fem timers tv om dagen i SDR og standby resten af døgnet bruger 55\" omkring 157 kWh, 65\" omkring 184 kWh og 77\" omkring 235 kWh om året. 65\" svarer til {{kr 184}} ved månedens elpris.",
    },
    {
      question: "Bruger S95H mere strøm end S90H?",
      answer: "Ja, fra 55\" og op. I 65\" bruger S95H 99 W mod 85 W for S90H i SDR og 315 W mod 198 W i HDR. Med fem timers tv om dagen i SDR er det omkring 26 kWh mere om året, svarende til {{kr 26}}.",
    },
    {
      question: "Hvor meget bruger Samsung S95H i HDR?",
      answer: "104 W for 48\", 256 W for 55\", 315 W for 65\" og 423 W for 77\" ifølge energimærket. En film på to timer i HDR på 77\" bruger omkring 0,85 kWh, svarende til {{kr 0,85}}.",
    },
    {
      question: "Bruger S95H mindre end S95F?",
      answer: "Næsten ikke. I 55\" er tallene ens, 84 W i SDR og 256 W i HDR. I 65\" bruger S95H 99 W mod 100 W for S95F i SDR, og HDR-tallet er det samme, 315 W.",
    },
  ],
  sources: [
    { name: "EPREL — Samsung TQ48S95HAE, EU's energimærke", url: eprel("2571538") },
    { name: "EPREL — Samsung TQ55S95HFT, EU's energimærke", url: eprel("2600782") },
    { name: "EPREL — Samsung TQ65S95HFT, EU's energimærke", url: eprel("2600783") },
    { name: "EPREL — Samsung TQ77S95HFT, EU's energimærke", url: eprel("2600784") },
    { name: "EPREL — Samsung TQ55S95FAT (S95F, 2025), EU's energimærke", url: eprel("2205151") },
    { name: "EPREL — Samsung TQ65S95FAT (S95F, 2025), EU's energimærke", url: eprel("2205150") },
  ],
  variants: [
    { name: "48\" (TQ48S95HAE)", watts: { standby: 0.5, on: 61 }, energyClass: "F", source: 0 },
    { name: "55\" (TQ55S95HFT)", watts: { standby: 0.5, on: 84 }, energyClass: "G", source: 1 },
    { name: "65\" (TQ65S95HFT)", watts: { standby: 0.5, on: 99 }, energyClass: "F", source: 2 },
    { name: "77\" (TQ77S95HFT)", watts: { standby: 0.5, on: 127 }, energyClass: "F", source: 3 },
  ],
  publishDate: "2026-11-29",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Tallene er Samsungs egne oplysninger til EU's energimærke: forbruget i standardbilledet (SDR) i den billedindstilling, tv'et leveres med, og standby. Kilderne står nederst på siden.",
};

export default samsungS95h;
