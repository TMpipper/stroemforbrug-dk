import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/electronicdisplays/${reg}`;

const lgOledC6: ModelData = {
  slug: "lg-oled-c6",
  parent: "tv",
  brand: "LG",
  name: "LG OLED C6",
  released: "2026-03",
  synonyms: ["lg c6", "lg oled c6 55", "lg oled c6 65", "lg oled c6 77", "lg c64", "oled55c64la", "oled65c64la", "lg oled 2026"],
  title: "LG OLED C6 strømforbrug (2026) → watt og pris pr. størrelse",
  description:
    "LG OLED C6 fra 42 til 83 tommer: watt i SDR og HDR fra EU's energimærke, kWh om året med fem timers tv om dagen, og hvad standby og HDR koster.",
  intro:
    "Den store overraskelse er de største skærme: 77\" og 83\" bruger kun lidt mere end 65\", fordi LG har sænket forbruget kraftigt på de store paneler i 2026-årgangen.",
  content: `<h2>Hvor mange watt bruger LG OLED C6?</h2>
<p>Alle tv solgt i EU skal registreres i EU's produktdatabase EPREL med de tal, der står på energimærket. For LG OLED C6 i de danske udgaver (modelkoderne slutter på C64LA) oplyser LG et forbrug i standardbilledet (SDR) fra 51 W for 48" til 89 W for 83". Det er målt i den billedindstilling, tv'et leveres med, mens det viser en fastlagt testvideo. Standby er 0,5 W for alle størrelser, og netværksstandby, hvor tv'et kan vækkes fra telefonen eller via netværket, er 2 W.</p>
<p>Energiklassen går fra D for 77" og 83" over E for 48" og 65" til F for 55" og G for 42". Det lyder dårligt, men EU's skala blev gjort strengere i 2021, og næsten alle store tv ligger i dag mellem D og G. Klassen tager højde for skærmens areal, så en stor skærm kan få en bedre klasse end en lille, selv om den bruger flere watt.</p>

<h2>Størrelsen betyder mindre, end man tror</h2>
<p>Det mest bemærkelsesværdige ved C6 er, hvor tæt de store størrelser ligger. 65" bruger 84,6 W, 77" bruger 87,3 W og 83" bruger 89 W i SDR. Fra 65" til 83" vokser skærmarealet med over 60 %, men forbruget stiger kun 4,4 W. Med fem timers tv om dagen er forskellen mellem 65" og 83" omkring 8 kWh om året, svarende til {{kr 8}}.</p>
<p>I den lille ende er 48" faktisk en anelse mere sparsom end 42": 51 W mod 52 W. Vælger du mellem de to, kan du altså tage den største uden at betale mere for strømmen. Spranget fra 48" til 55" er det største i serien, knap 25 W, og koster omkring 45 kWh om året med vores profil — {{kr 45}}.</p>

<h2>HDR og høj lysstyrke trækker langt mere</h2>
<p>Energimærket har også et tal for HDR, altså film og serier med højt dynamikområde, hvor skærmen må lyse meget kraftigere i de lyse partier. Her bruger C6 langt mere end i SDR:</p>
<table>
<thead><tr><th>Størrelse</th><th>SDR</th><th>HDR</th></tr></thead>
<tbody>
<tr><td>42" (OLED42C64LA)</td><td>52 W</td><td>95 W</td></tr>
<tr><td>48" (OLED48C64LA)</td><td>51 W</td><td>78 W</td></tr>
<tr><td>55" (OLED55C64LA)</td><td>75,6 W</td><td>190 W</td></tr>
<tr><td>65" (OLED65C64LA)</td><td>84,6 W</td><td>232 W</td></tr>
<tr><td>77" (OLED77C64LA)</td><td>87,3 W</td><td>260 W</td></tr>
<tr><td>83" (OLED83C64LA)</td><td>89 W</td><td>292 W</td></tr>
</tbody>
</table>
<p>En film på to timer i HDR på 65" trækker derfor omkring 0,46 kWh, mens den samme film i SDR bruger 0,17 kWh. Det er {{kr 0,46}} mod {{kr 0,17}} — småpenge pr. film, men ser du mest streaming i HDR eller Dolby Vision, kan årsforbruget ende på det dobbelte eller mere af tallet i tabellen ovenfor. Det samme gælder, hvis du skruer op for lysstyrken eller vælger et levende billedformat: OLED-skærmen bruger strøm efter, hvor meget den lyser, så mørke film koster mindre end lyse sportsudsendelser.</p>

<h2>Standby: 0,5 eller 2 W?</h2>
<p>Står C6 på almindelig standby, bruger den 0,5 W — omkring 3,5 kWh om året med 19 timers standby i døgnet. Slår du funktioner til, der holder tv'et klar på netværket, fx hurtig opstart eller at kunne tænde det fra telefonen eller en højttaler, står det i netværksstandby med 2 W. Det giver knap 14 kWh om året, altså 10 kWh mere, svarende til {{kr 10}}. Det er ikke meget, men det er en gratis besparelse, hvis du ikke bruger funktionerne. Læs mere om <a href="/standby/">standby-forbrug i hjemmet</a>.</p>

<h2>Hvad koster LG OLED C6 om året?</h2>
<p>Tabellen øverst regner med fem timers tv om dagen i standardbilledet og standby resten af døgnet. Det giver fra omkring 97 kWh om året for 48" til 166 kWh for 83", svarende til {{kr 97}} og {{kr 166}}. Et tv er altså en mærkbar, men ikke stor post på elregningen, og forskellen mellem 55" og 83" er mindre end forskellen mellem at se i SDR og HDR på den samme skærm.</p>
<p>Tv'et bruges mest om aftenen mellem 17 og 21, hvor elprisen og nettariffen typisk er højest. Det er svært at flytte tv-kiggeri, men det er værd at vide, at en kWh i de timer koster mere end gennemsnittet. Se <a href="/elpriser/">timepriserne for i dag</a>.</p>

<h2>Gode råd til et lavere forbrug</h2>
<ul>
<li>Brug tv'ets energibesparende indstilling eller automatisk lysstyrke, som dæmper skærmen i et mørkt rum.</li>
<li>Slå netværksstandby fra, hvis du ikke tænder tv'et fra telefonen eller en højttaler.</li>
<li>Sæt et sluk-ur, hvis tv'et ofte kører, uden at nogen ser det.</li>
<li>Har du en spillekonsol tilsluttet, så husk, at den bruger strøm oveni — en PS5 trækker over 200 W under spil.</li>
</ul>
<p>Vil du regne på dine egne timer, kan du bruge <a href="/beregner/">beregneren</a> med tallene fra tabellen. Siden om <a href="/tv/">tv'ets strømforbrug</a> sammenligner typer og størrelser generelt.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger LG OLED C6 65\"?",
      answer: "Ifølge energimærket bruger OLED65C64LA 84,6 W i standardbilledet (SDR) og 232 W i HDR. Standby er 0,5 W og netværksstandby 2 W. Energiklassen er E.",
    },
    {
      question: "Hvad koster LG OLED C6 om året i strøm?",
      answer: "Med fem timers tv om dagen i SDR og standby resten af døgnet bruger 55\" omkring 141 kWh og 65\" omkring 158 kWh om året. Det svarer til {{kr 141}} og {{kr 158}} ved månedens elpris.",
    },
    {
      question: "Bruger 77\" og 83\" meget mere strøm end 65\"?",
      answer: "Nej. I SDR bruger 77\" 87,3 W og 83\" 89 W mod 84,6 W for 65\". Over et år med fem timers tv om dagen er forskellen mellem 65\" og 83\" omkring 8 kWh, svarende til {{kr 8}}.",
    },
    {
      question: "Hvor meget mere bruger LG OLED C6 i HDR?",
      answer: "To til tre gange så meget. 55\" bruger 75,6 W i SDR og 190 W i HDR, 65\" 84,6 W og 232 W. En film på to timer i HDR på 65\" koster omkring {{kr 0,46}}.",
    },
    {
      question: "Hvor meget bruger LG OLED C6 på standby?",
      answer: "0,5 W på almindelig standby og 2 W i netværksstandby, hvor tv'et kan tændes via netværket. Netværksstandby 19 timer i døgnet giver omkring 10 kWh mere om året, svarende til {{kr 10}}.",
    },
  ],
  sources: [
    { name: "EPREL — LG OLED42C64LA, EU's energimærke", url: eprel("2618205") },
    { name: "EPREL — LG OLED48C64LA, EU's energimærke", url: eprel("2618778") },
    { name: "EPREL — LG OLED55C64LA, EU's energimærke", url: eprel("2591476") },
    { name: "EPREL — LG OLED65C64LA, EU's energimærke", url: eprel("2581725") },
    { name: "EPREL — LG OLED77C64LA, EU's energimærke", url: eprel("2591326") },
    { name: "EPREL — LG OLED83C64LA, EU's energimærke", url: eprel("2616427") },
  ],
  variants: [
    { name: "42\" (OLED42C64LA)", watts: { standby: 0.5, on: 52 }, energyClass: "G", source: 0 },
    { name: "48\" (OLED48C64LA)", watts: { standby: 0.5, on: 51 }, energyClass: "E", source: 1 },
    { name: "55\" (OLED55C64LA)", watts: { standby: 0.5, on: 75.6 }, energyClass: "F", source: 2 },
    { name: "65\" (OLED65C64LA)", watts: { standby: 0.5, on: 84.6 }, energyClass: "E", source: 3 },
    { name: "77\" (OLED77C64LA)", watts: { standby: 0.5, on: 87.3 }, energyClass: "D", source: 4 },
    { name: "83\" (OLED83C64LA)", watts: { standby: 0.5, on: 89 }, energyClass: "D", source: 5 },
  ],
  publishDate: "2026-11-24",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Tallene er LGs egne oplysninger til EU's energimærke: forbruget i standardbilledet (SDR) i den billedindstilling, tv'et leveres med, og standby. Kilderne står nederst på siden.",
};

export default lgOledC6;
