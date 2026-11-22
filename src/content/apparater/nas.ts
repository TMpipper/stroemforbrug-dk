import type { ApplianceData } from "@/lib/types";

const nas: ApplianceData = {
  slug: "nas",
  meta: {
    category: "it",
    usage: "always-on",
    hasEuLabel: false,
    shiftable: false,
    motif: "computer",
    synonyms: ["nas", "netværksdrev", "netværkslager", "synology", "qnap", "hjemmeserver", "backup-server", "nas dvale", "harddisk dvale"],
  },
  name: "Netværksdrev",
  article: "et",
  title: "NAS strømforbrug (2026) → Synology 2- og 4-bay i kWh og watt",
  description: "Et NAS med to diske bruger 6-17 watt og kører hele døgnet, så det løber op til 50-150 kWh om året. Se Synologys tal, hvad dvale sparer, og prisen pr. år.",
  heading: "Strømforbrug for et netværksdrev (NAS): kWh og pris",
  quickAnswer:
    "Et NAS med to diskpladser, fx Synology DS225+, bruger ifølge Synology knap 17 watt, når diskene arbejder, og omkring 6 watt, når de sover. Kører det hele døgnet med 8 timers aktivitet, er det cirka 85 kWh om året, svarende til {{kr 85}}. En model med fire diske bruger omtrent det dobbelte, og diske, der aldrig får lov at sove, kan fordoble regningen.",
  kwhRange: [30, 350],
  typicalKwh: 85,
  wattage: 17,
  standbyWatts: 6,
  energyLabels: [],
  models: [],
  seasonalProfile: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  content: `<h2>Hvor mange watt bruger et NAS?</h2>
<p>Et NAS — et netværksdrev — er en lille computer med plads til harddiske, som står tændt hele døgnet og gemmer familiens billeder, backup og film. Netop fordi det aldrig slukker, er det de mange timer, der gør forbruget, ikke de enkelte watt. Synology, som er det mest udbredte mærke i private hjem, oplyser to tal for hver model: forbruget, når diskene arbejder (»access«), og når de er gået i dvale.</p>
<table>
<thead><tr><th>Model</th><th>Diskene arbejder</th><th>Diskene i dvale</th><th>Pris i døgnet, hele tiden i arbejde</th></tr></thead>
<tbody>
<tr><td>Synology DS223j (2 diske, begyndermodel)</td><td>16,31 W</td><td>4 W</td><td>{{oere 0,39}}</td></tr>
<tr><td>Synology DS225+ (2 diske)</td><td>16,98 W</td><td>6,08 W</td><td>{{oere 0,41}}</td></tr>
<tr><td>Synology DS925+ (4 diske)</td><td>37,91 W</td><td>12,33 W</td><td>{{oere 0,91}}</td></tr>
</tbody>
</table>
<p>Tallene er Synologys egne og afhænger af, hvilke diske der sidder i. Ældre eller større diske kan trække lidt mere, og SSD'er trækker mindre. Strømforsyningen er dimensioneret til mere, end boksen bruger i drift — 60 W til de små modeller og 100-120 W til fire-diskmodellen — men det er kun et loft, ikke forbruget.</p>

<h2>Hvad koster et NAS om året?</h2>
<p>Hvor meget dit NAS bruger over et år, afhænger mest af, hvor mange timer diskene arbejder, og hvor mange timer de får lov at sove. Et NAS, der kun bruges til backup om natten og lidt billedvisning, kan have sovende diske det meste af døgnet. Et NAS, der kører mediaserver, overvågning eller downloads, holder diskene i gang hele tiden. Tabellen bygger på Synologys tal; fordelingen af timer er vores skøn.</p>
<table>
<thead><tr><th>Brug</th><th>kWh i døgnet</th><th>kWh om året</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>2 diske, 4 timer i arbejde og 20 i dvale</td><td>0,19 kWh</td><td>69 kWh</td><td>{{kr 69}}</td></tr>
<tr><td>2 diske, 8 timer i arbejde og 16 i dvale</td><td>0,23 kWh</td><td>85 kWh</td><td>{{kr 85}}</td></tr>
<tr><td>2 diske, i arbejde hele døgnet</td><td>0,41 kWh</td><td>149 kWh</td><td>{{kr 149}}</td></tr>
<tr><td>4 diske, 8 timer i arbejde og 16 i dvale</td><td>0,50 kWh</td><td>183 kWh</td><td>{{kr 183}}</td></tr>
<tr><td>4 diske, i arbejde hele døgnet</td><td>0,91 kWh</td><td>332 kWh</td><td>{{kr 332}}</td></tr>
</tbody>
</table>
<p>Et NAS med to diske i dvale det meste af tiden bruger altså omtrent det samme som en <a href="/router/">router</a>, mens en fire-diskmodel, der aldrig hviler, bruger fire til fem gange så meget.</p>

<h2>Dvale: den vigtigste indstilling</h2>
<p>Harddiske bruger strøm på at holde skiverne i rotation. Når diskene går i dvale, stopper de, og forbruget falder med to tredjedele på Synologys modeller. Dvale er som regel slået til fra fabrikken, men en lang række funktioner holder diskene vågne: indeksering af billeder, en mediaserver, der scanner efter nye film, overvågningskameraer, der optager konstant, eller en app på telefonen, der tjekker for nye filer hvert minut.</p>
<p>Står dit NAS og arbejder hele døgnet, er det værd at se i loggen, hvad der vækker diskene. Forskellen mellem »altid i arbejde« og »sover 16 timer« er cirka 64 kWh om året på en to-diskmodel, svarende til {{kr 64}}, og over dobbelt så meget på en fire-diskmodel.</p>

<p>Indstillingen for dvale findes i NAS'ets kontrolpanel under hardware og strøm, hvor du som regel også kan vælge ventetiden og en tidsplan for tænd og sluk. Har du en ekstern disk tilsluttet med USB, har den ofte sin egen dvaleindstilling, som skal slås til for sig.</p>

<h2>NAS til kameraer, film og backup</h2>
<p>Bruger du dit NAS som optager til <a href="/overvaagningskamera/">overvågningskameraer</a>, skriver det til disken hele tiden, og så får diskene aldrig lov at sove. Det er en af de mest almindelige grunde til, at et NAS ender i den dyre ende af tabellen. Kameraerne bruger desuden selv strøm, og en optager med fire kameraer kan let bruge mere end selve NAS'et.</p>
<p>Som mediaserver er billedet et andet: diskene arbejder kun, mens der ses film, og omkodning af video belaster processoren i den tid. Til ren backup kan du planlægge, at kopieringen sker på et fast tidspunkt om natten, så diskene sover resten af døgnet. Har du en <a href="/printer/">printer</a> eller andet udstyr, der også står tændt hele tiden, er det de samme principper: lad det sove, når det ikke bruges.</p>

<h2>Hvad bestemmer, hvor meget strøm dit NAS bruger?</h2>
<ul>
<li><strong>Antal diske</strong> — hver harddisk lægger nogle watt til, så fire diske bruger omtrent dobbelt så meget som to.</li>
<li><strong>Harddisk eller SSD</strong> — SSD'er har ingen roterende skiver og bruger mindre, især i hvile.</li>
<li><strong>Dvale</strong> — sovende diske skærer to tredjedele af forbruget væk.</li>
<li><strong>Opgaver</strong> — optagelse fra kameraer, downloads og omkodning holder boksen i gang.</li>
<li><strong>Alder</strong> — ældre bokse og diske er ofte mindre effektive end nye.</li>
</ul>

<h2>Sådan sparer du strøm på dit NAS</h2>
<ol>
<li><strong>Slå dvale til</strong> for diskene, fx efter 10-20 minutter uden aktivitet.</li>
<li><strong>Find det, der vækker diskene</strong>, i loggen, og slå unødvendig indeksering fra.</li>
<li><strong>Planlæg backup og opdateringer</strong> til et fast tidspunkt, så diskene ikke vågner hele dagen.</li>
<li><strong>Brug tidsplan for tænd og sluk</strong>, hvis du ikke har brug for adgang om natten — mange NAS kan slukke og starte automatisk.</li>
<li><strong>Vælg færre og større diske</strong>, når du udskifter, frem for mange små.</li>
</ol>
<p>Læs også guiden om <a href="/standby/">standby</a>, hvis du vil finde andre apparater, der kører hele døgnet uden at blive brugt.</p>`,
  faqs: [
    { question: "Hvor mange watt bruger et Synology NAS?", answer: "En to-diskmodel som DS225+ bruger knap 17 W, når diskene arbejder, og 6 W i dvale. Fire-diskmodellen DS925+ bruger knap 38 W og 12 W, ifølge Synology." },
    { question: "Hvad koster et NAS om året?", answer: "En to-diskmodel med 8 timers aktivitet om dagen bruger cirka 85 kWh om året, svarende til {{kr 85}}. Med diskene i gang hele døgnet er det cirka 149 kWh eller {{kr 149}}." },
    { question: "Sparer det strøm at lade diskene gå i dvale?", answer: "Ja. På Synologys modeller falder forbruget med omkring to tredjedele. På en to-diskmodel er forskellen cirka 64 kWh om året, svarende til {{kr 64}}." },
    { question: "Bruger et NAS mere strøm end en router?", answer: "Et NAS med sovende diske ligger tæt på en router. En model med fire diske, der arbejder hele tiden, bruger flere gange så meget: cirka 332 kWh om året, svarende til {{kr 332}}." },
    { question: "Kan jeg slukke mit NAS om natten?", answer: "Mange NAS har en tidsplan for tænd og sluk. Slukker det i 8 timer, sparer en to-diskmodel i dvale cirka 18 kWh om året, svarende til {{kr 18}}." },
  ],
  relatedSlugs: ["router", "computer", "printer", "overvaagningskamera", "laptop", "skaerm"],
  sources: [
    { name: "Synology — DS225+ specifikationer (strømforbrug i drift og dvale)", url: "https://www.synology.com/en-global/products/DS225+#specs" },
    { name: "Synology — DS925+ specifikationer (strømforbrug i drift og dvale)", url: "https://www.synology.com/en-global/products/DS925+#specs" },
    { name: "Synology — DS223j specifikationer (strømforbrug i drift og dvale)", url: "https://www.synology.com/en-global/products/DS223j#specs" },
  ],
  calculatorConfig: {
    title: "Beregn dit NAS' strømforbrug",
    options: [
      { label: "2 diske, mest i dvale (4 t i arbejde)", kwhPerUse: 0.19 },
      { label: "2 diske, 8 t i arbejde og 16 t i dvale", kwhPerUse: 0.23 },
      { label: "2 diske, i arbejde hele døgnet", kwhPerUse: 0.41 },
      { label: "4 diske, 8 t i arbejde og 16 t i dvale", kwhPerUse: 0.5 },
      { label: "4 diske, i arbejde hele døgnet", kwhPerUse: 0.91 },
    ],
    usageLabel: "Dage tændt pr. år",
    usageUnit: "dage/år",
    usageMin: 30,
    usageMax: 365,
    usageDefault: 365,
    usageStep: 5,
    per: "døgn",
    perYear: 1,
  },
  publishDate: "2026-12-10",
  updated: "2026-11-22",
};

export default nas;
