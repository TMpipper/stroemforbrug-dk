import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/electronicdisplays/${reg}`;

const lgOledG6: ModelData = {
  slug: "lg-oled-g6",
  parent: "tv",
  brand: "LG",
  name: "LG OLED G6",
  released: "2026-03",
  synonyms: ["lg g6", "lg oled g6 65", "lg oled g6 55", "lg g64", "oled65g64lw", "oled55g64lw", "lg oled evo g6", "lg g6 97"],
  title: "LG OLED G6 strømforbrug (2026) → watt i SDR og HDR",
  description:
    "LG OLED G6 fra 55 til 97 tommer: watt i SDR og HDR fra EU's energimærke, kWh om året med fem timers tv om dagen, og hvorfor G6 bruger mindre end C6.",
  intro:
    "LG's dyreste OLED-serie bruger mindre strøm end den billigere C6 i 55\" og 65\" i standardbilledet — men mere, når HDR-indhold får skærmen til at lyse op.",
  content: `<h2>Hvor mange watt bruger LG OLED G6?</h2>
<p>G6 er LG's OLED-serie over C6, med højere lysstyrke og et tyndt design, der er lavet til at hænge fladt på væggen. De danske udgaver har modelkoder, der slutter på G64LW, og hver størrelse har sit eget energimærke i EU's produktdatabase EPREL. I standardbilledet (SDR) bruger G6 63,9 W som 55", 77,4 W som 65", 92,7 W som 77" og 98,1 W som 83". Den største, 97", trækker 184 W.</p>
<p>Standby er 0,5 W og netværksstandby 2 W i alle størrelser. Energiklassen i SDR er E for 55", 65" og 77", D for 83" og F for 97". Med fem timers tv om dagen og standby resten af døgnet bruger 65" omkring 145 kWh om året, svarende til {{kr 145}}.</p>

<h2>Bedre end C6 i SDR</h2>
<p>Man skulle tro, at den lysstærke G6 brugte mere end den billigere <a href="/tv/lg-oled-c6/">LG OLED C6</a>, men i standardbilledet er det omvendt i de mest solgte størrelser. 55" G6 bruger 63,9 W mod 75,6 W for 55" C6, og 65" G6 77,4 W mod 84,6 W. Med vores profil sparer G6 omkring 21 kWh om året i 55" og 13 kWh i 65", svarende til {{kr 21}} og {{kr 13}}.</p>
<p>I de store størrelser vender det. 77" G6 bruger 92,7 W mod 87,3 W for C6, og 83" 98,1 W mod 89 W. Forskellen er omkring 10 og 17 kWh om året. Vælger du mellem de to serier i 77" eller større, taler strømmen altså en smule for C6; i 55" og 65" for G6.</p>

<h2>HDR: her bruger G6 mere</h2>
<p>G6 er bygget til at lyse kraftigt, og det ses i energimærkets HDR-tal. Her bruger skærmen omkring tre gange så meget som i SDR i størrelserne fra 55" til 83":</p>
<table>
<thead><tr><th>Størrelse</th><th>SDR</th><th>HDR</th><th>C6 i HDR</th></tr></thead>
<tbody>
<tr><td>55" (OLED55G64LW)</td><td>63,9 W</td><td>182 W</td><td>190 W</td></tr>
<tr><td>65" (OLED65G64LW)</td><td>77,4 W</td><td>262 W</td><td>232 W</td></tr>
<tr><td>77" (OLED77G64LW)</td><td>92,7 W</td><td>334 W</td><td>260 W</td></tr>
<tr><td>83" (OLED83G64LW)</td><td>98,1 W</td><td>345 W</td><td>292 W</td></tr>
<tr><td>97" (OLED97G64LW)</td><td>184 W</td><td>350 W</td><td>–</td></tr>
</tbody>
</table>
<p>En film på to timer i HDR på 65" G6 bruger omkring 0,52 kWh, svarende til {{kr 0,52}}, mod 0,15 kWh i SDR. Ser du mest film og serier i HDR eller Dolby Vision, kan G6's forbrug ende højere end C6's i alle størrelser undtagen 55". 97" er et særtilfælde: den bruger mest i SDR, men HDR-tallet er under det dobbelte af SDR-tallet og kun lidt over 83"-modellens.</p>

<h2>G6 mod sidste års G5</h2>
<p>Forgængeren LG OLED G5 brugte ifølge EPREL 63,9 W som 55" (OLED55G54LW) og 84,6 W som 65" (OLED65G54LW) i SDR. 55" er altså uændret, mens 65" G6 bruger 7,2 W mindre — omkring 13 kWh om året. I HDR går det den anden vej: 65" G5 brugte 222 W, G6 bruger 262 W, og 55" er gået fra 171 til 182 W. Den nye årgang lyser kraftigere i HDR, og det koster strøm.</p>

<h2>Hvad koster LG OLED G6 om året?</h2>
<p>Tabellen øverst regner med fem timers tv om dagen i SDR og standby resten af døgnet. Det giver omkring 120 kWh om året for 55", 145 kWh for 65", 173 kWh for 77" og 183 kWh for 83", svarende til {{kr 120}}, {{kr 145}}, {{kr 173}} og {{kr 183}}. 97" ender på omkring 339 kWh — næsten det dobbelte af 83".</p>
<p>Tv'et bruges mest om aftenen, hvor elprisen og nettariffen typisk er højest. Det er svært at flytte, men det er værd at vide, at hver kWh i de timer koster mere end gennemsnittet; se <a href="/elpriser/">dagens timepriser</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Brug energisparetilstand eller automatisk lysstyrke, der tilpasser billedet efter lyset i rummet.</li>
<li>Slå netværksstandby fra, hvis du ikke tænder tv'et fra telefonen: det sparer omkring 10 kWh om året, svarende til {{kr 10}}.</li>
<li>Skru ned for HDR-lysstyrken, hvis billedet er rigeligt i et mørkt rum.</li>
<li>Har du en soundbar eller konsol tilsluttet, så tjek også dens standby.</li>
</ul>
<p>Siden om <a href="/tv/">tv'ets strømforbrug</a> sammenligner tv-typer og størrelser, og <a href="/standby/">standby-siden</a> viser, hvad apparater bruger, når de ikke er i brug.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger LG OLED G6 65\"?",
      answer: "Ifølge energimærket bruger OLED65G64LW 77,4 W i standardbilledet (SDR) og 262 W i HDR. Standby er 0,5 W og netværksstandby 2 W. Energiklassen er E.",
    },
    {
      question: "Bruger LG G6 mindre strøm end LG C6?",
      answer: "I SDR i 55\" og 65\" ja: 63,9 og 77,4 W mod 75,6 og 84,6 W for C6. I 77\" og 83\" bruger G6 lidt mere. I HDR bruger G6 mere i alle størrelser undtagen 55\".",
    },
    {
      question: "Hvad koster LG OLED G6 om året i strøm?",
      answer: "Med fem timers tv om dagen i SDR og standby resten af døgnet bruger 55\" omkring 120 kWh og 65\" omkring 145 kWh om året. Det svarer til {{kr 120}} og {{kr 145}} ved månedens elpris.",
    },
    {
      question: "Hvor meget bruger LG OLED G6 i HDR?",
      answer: "Fra 182 W for 55\" til 350 W for 97\" ifølge energimærket. En film på to timer i HDR på 65\" bruger omkring 0,52 kWh, svarende til {{kr 0,52}}.",
    },
    {
      question: "Hvor meget bruger 97\" LG OLED G6?",
      answer: "184 W i SDR og 350 W i HDR ifølge energimærket, energiklasse F. Med fem timers tv om dagen bliver det omkring 339 kWh om året, svarende til {{kr 339}}.",
    },
  ],
  sources: [
    { name: "EPREL — LG OLED55G64LW, EU's energimærke", url: eprel("2591530") },
    { name: "EPREL — LG OLED65G64LW, EU's energimærke", url: eprel("2591639") },
    { name: "EPREL — LG OLED77G64LW, EU's energimærke", url: eprel("2591510") },
    { name: "EPREL — LG OLED83G64LW, EU's energimærke", url: eprel("2596400") },
    { name: "EPREL — LG OLED97G64LW, EU's energimærke", url: eprel("2569150") },
    { name: "EPREL — LG OLED55G54LW (G5, 2025), EU's energimærke", url: eprel("2244677") },
    { name: "EPREL — LG OLED65G54LW (G5, 2025), EU's energimærke", url: eprel("2244908") },
  ],
  variants: [
    { name: "55\" (OLED55G64LW)", watts: { standby: 0.5, on: 63.9 }, energyClass: "E", source: 0 },
    { name: "65\" (OLED65G64LW)", watts: { standby: 0.5, on: 77.4 }, energyClass: "E", source: 1 },
    { name: "77\" (OLED77G64LW)", watts: { standby: 0.5, on: 92.7 }, energyClass: "E", source: 2 },
    { name: "83\" (OLED83G64LW)", watts: { standby: 0.5, on: 98.1 }, energyClass: "D", source: 3 },
    { name: "97\" (OLED97G64LW)", watts: { standby: 0.5, on: 184 }, energyClass: "F", source: 4 },
  ],
  publishDate: "2026-11-28",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Tallene er LG's egne oplysninger til EU's energimærke: forbruget i standardbilledet (SDR) i den billedindstilling, tv'et leveres med, og standby. Kilderne står nederst på siden.",
};

export default lgOledG6;
