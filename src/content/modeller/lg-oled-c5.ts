import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/electronicdisplays/${reg}`;

const lgOledC5: ModelData = {
  slug: "lg-oled-c5",
  parent: "tv",
  brand: "LG",
  name: "LG OLED C5",
  released: "2025-01",
  synonyms: ["lg c5", "lg oled c5 55", "lg oled c5 65", "lg oled c5 77", "lg oled c5 48", "lg c54", "oled55c54la", "oled65c54la"],
  title: "LG OLED C5 strømforbrug (2026) → watt, kWh og HDR-forbrug",
  description:
    "LG OLED C5 i alle seks størrelser: energimærkets watt i SDR og HDR, kWh og pris om året, og hvor meget mere de store skærme bruger end C6.",
  intro:
    "Til og med 65\" ligger C5 tæt på efterfølgeren C6, men i 77\" og 83\" bruger den markant mere — 83\" næsten 100 kWh mere om året med samme brug.",
  content: `<h2>Hvor mange watt bruger LG OLED C5?</h2>
<p>LG har registreret C5 i EU's produktdatabase EPREL i seks størrelser fra 42" til 83". I de nordiske udgaver, hvis modelkoder slutter på C54LA, bruger den fra 52 W (42") til 144 W (83") i standardbilledet (SDR), målt i den billedindstilling, tv'et leveres med. Standby er 0,5 W i alle størrelser, og netværksstandby — når tv'et kan vækkes fra telefonen eller netværket — er 2 W.</p>
<p>Energiklassen er G for 42" og 48" og F for resten. Klassen regnes ud fra forbruget i forhold til skærmens areal, og EU's skala fra 2021 er så stram, at næsten ingen store tv når over D. Klassen siger derfor mere om, hvordan C5 klarer sig mod andre tv af samme størrelse, end om hvad den koster at have tændt.</p>

<h2>Store skærme: her adskiller C5 sig</h2>
<p>Op til 55" stiger forbruget jævnt med skærmen, men herefter tager det fart: 65" bruger 95,4 W, 77" 125 W og 83" 144 W. Med fem timers tv om dagen og standby resten af døgnet bliver det omkring 178 kWh om året for 65", 232 kWh for 77" og 266 kWh for 83", svarende til {{kr 178}}, {{kr 232}} og {{kr 266}}.</p>
<p>Her er forskellen til efterfølgeren størst. Ifølge energimærket bruger <a href="/tv/lg-oled-c6/">LG OLED C6</a> 87,3 W i 77" og 89 W i 83". Står du og vælger mellem en C5 og en C6 i de store størrelser, sparer C6 omkring 69 kWh om året i 77" og 100 kWh i 83" med vores profil — {{kr 69}} og {{kr 100}} om året, hvert år tv'et er i brug. I 55" er forskellen kun 1,8 W (77,4 mod 75,6 W), og i 42" er tallene ens.</p>

<h2>HDR: op til 385 W på den største</h2>
<p>Energimærket oplyser også forbruget i HDR, hvor skærmen må lyse langt kraftigere i de lyse partier. For C5 er HDR-tallene:</p>
<table>
<thead><tr><th>Størrelse</th><th>SDR</th><th>HDR</th></tr></thead>
<tbody>
<tr><td>42" (OLED42C54LA)</td><td>52 W</td><td>91 W</td></tr>
<tr><td>48" (OLED48C54LA)</td><td>63,9 W</td><td>115 W</td></tr>
<tr><td>55" (OLED55C54LA)</td><td>77,4 W</td><td>191 W</td></tr>
<tr><td>65" (OLED65C54LA)</td><td>95,4 W</td><td>234 W</td></tr>
<tr><td>77" (OLED77C54LA)</td><td>125 W</td><td>326 W</td></tr>
<tr><td>83" (OLED83C54LA)</td><td>144 W</td><td>385 W</td></tr>
</tbody>
</table>
<p>En film på to timer i HDR på 83" bruger altså omkring 0,77 kWh, svarende til {{kr 0,77}}, mod 0,29 kWh i SDR. Ser du mest streaming i HDR eller Dolby Vision, kan årsforbruget blive to til tre gange så højt som tallet i tabellen øverst. Lysstyrken er den største enkeltfaktor: et levende billedformat og maksimal lysstyrke i en lys stue koster mere end filmtilstand i et mørkt rum, fordi en OLED-skærm bruger strøm efter, hvor meget hver pixel lyser.</p>

<h2>Modelkoden betyder noget</h2>
<p>LG sælger C5 under mange modelkoder i Europa, og de er ikke alle ens. De nordiske C54LA og flere andre koder har de samme tal, men fx OLED55C59LB er registreret med 83,7 W i SDR og energiklasse G mod 77,4 W og F for OLED55C54LA. Det er 6,3 W mere, eller omkring 11 kWh om året med fem timers daglig brug. Køber du en C5 med en anden kode end C54LA, kan du slå den op i EPREL og se dens egne tal.</p>

<h2>C5 sammenlignet med C4</h2>
<p>Mod forgængeren C4 (C44LA) er forbedringen beskeden: 55" gik fra 81 W til 77,4 W, 65" fra 97,2 W til 95,4 W, 77" fra 126 W til 125 W og 83" fra 150 W til 144 W. 42" er uændret med 52 W. Den store forbedring kom først med C6, især i de største størrelser.</p>

<h2>Sådan holder du forbruget nede</h2>
<ul>
<li>Brug tv'ets energibesparende indstilling eller automatisk lysstyrke, så skærmen dæmpes i et mørkt rum.</li>
<li>Slå netværksstandby fra, hvis du ikke tænder tv'et fra telefonen: 2 W i stedet for 0,5 W i 19 timer om dagen er omkring 10 kWh om året.</li>
<li>Lad ikke tv'et køre som baggrundslyd — en skærm, ingen ser på, bruger det samme som en, alle ser på.</li>
</ul>
<p>Tv'et bruges mest om aftenen, hvor elprisen typisk er højest. Det er svært at flytte, men andre apparater kan flyttes, så aftenen bliver billigere. Siden om <a href="/tv/">tv'ets strømforbrug</a> sammenligner typer og størrelser, og i <a href="/beregner/">beregneren</a> kan du regne med dine egne timer.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger LG OLED C5 55\"?",
      answer: "Ifølge energimærket bruger OLED55C54LA 77,4 W i standardbilledet (SDR) og 191 W i HDR. Standby er 0,5 W og netværksstandby 2 W. Energiklassen er F.",
    },
    {
      question: "Hvad koster LG OLED C5 om året i strøm?",
      answer: "Med fem timers tv om dagen i SDR og standby resten af døgnet bruger 55\" omkring 145 kWh og 65\" omkring 178 kWh om året. Det svarer til {{kr 145}} og {{kr 178}} ved månedens elpris.",
    },
    {
      question: "Bruger LG OLED C5 mere strøm end C6?",
      answer: "I de store størrelser, ja. 77\" C5 bruger 125 W mod 87,3 W for C6, og 83\" 144 W mod 89 W. I 55\" er forskellen kun 1,8 W, og 42\" er ens med 52 W.",
    },
    {
      question: "Hvor meget bruger LG OLED C5 i HDR?",
      answer: "Fra 91 W for 42\" til 385 W for 83\" ifølge energimærket. 65\" bruger 234 W i HDR mod 95,4 W i SDR. En film på to timer i HDR på 65\" koster omkring {{kr 0,47}}.",
    },
    {
      question: "Har alle LG OLED C5-modeller samme forbrug?",
      answer: "Nej. Den nordiske OLED55C54LA er registreret med 77,4 W, men fx OLED55C59LB med 83,7 W. Tjek modelkoden på dit tv i EU-databasen EPREL.",
    },
  ],
  sources: [
    { name: "EPREL — LG OLED42C54LA, EU's energimærke", url: eprel("2224457") },
    { name: "EPREL — LG OLED48C54LA, EU's energimærke", url: eprel("2229754") },
    { name: "EPREL — LG OLED55C54LA, EU's energimærke", url: eprel("2221785") },
    { name: "EPREL — LG OLED65C54LA, EU's energimærke", url: eprel("2224422") },
    { name: "EPREL — LG OLED77C54LA, EU's energimærke", url: eprel("2224431") },
    { name: "EPREL — LG OLED83C54LA, EU's energimærke", url: eprel("2230298") },
    { name: "EPREL — LG OLED55C59LB, EU's energimærke", url: eprel("2230047") },
    { name: "EPREL — LG OLED55C44LA (C4), EU's energimærke", url: eprel("1864591") },
    { name: "EPREL — LG OLED65C44LA (C4), EU's energimærke", url: eprel("1868601") },
    { name: "EPREL — LG OLED77C44LA (C4), EU's energimærke", url: eprel("1865060") },
    { name: "EPREL — LG OLED83C44LA (C4), EU's energimærke", url: eprel("1876036") },
  ],
  variants: [
    { name: "42\" (OLED42C54LA)", watts: { standby: 0.5, on: 52 }, energyClass: "G", source: 0 },
    { name: "48\" (OLED48C54LA)", watts: { standby: 0.5, on: 63.9 }, energyClass: "G", source: 1 },
    { name: "55\" (OLED55C54LA)", watts: { standby: 0.5, on: 77.4 }, energyClass: "F", source: 2 },
    { name: "65\" (OLED65C54LA)", watts: { standby: 0.5, on: 95.4 }, energyClass: "F", source: 3 },
    { name: "77\" (OLED77C54LA)", watts: { standby: 0.5, on: 125 }, energyClass: "F", source: 4 },
    { name: "83\" (OLED83C54LA)", watts: { standby: 0.5, on: 144 }, energyClass: "F", source: 5 },
  ],
  publishDate: "2026-11-25",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Tallene er LGs egne oplysninger til EU's energimærke: forbruget i standardbilledet (SDR) i den billedindstilling, tv'et leveres med, og standby. Kilderne står nederst på siden.",
};

export default lgOledC5;
