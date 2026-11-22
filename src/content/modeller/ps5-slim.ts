import type { ModelData } from "@/lib/models";

const ps5Slim: ModelData = {
  slug: "ps5-slim",
  parent: "playstation",
  brand: "Sony",
  name: "PS5 Slim",
  released: "2023-11",
  synonyms: ["playstation 5 slim", "ps5 slim digital", "ps5 slim disc", "ps5 digital edition", "cfi-2016", "ps5 standby", "ps5 rest mode", "ps5 hvilemodus"],
  title: "PS5 Slim strømforbrug (2026) → watt i spil og hvilemodus",
  description:
    "PS5 Slim med og uden diskdrev: Sonys watt under spil, i menuen og i hvilemodus, kWh og pris om året, og hvilke hvileindstillinger der koster.",
  intro:
    "Spillet er den store post. Hvilemodus koster næsten ingenting — medmindre du slår opladning af controllere og internetforbindelse til, så bliver den over ti gange dyrere.",
  content: `<h2>Hvor mange watt bruger en PS5 Slim?</h2>
<p>Sony offentliggør selv forbruget for hver PS5-model efter EU's økodesignkrav. For PS5 Slim med diskdrev (CFI-2016) er gennemsnittet af tre PS5-spil 216,8 W, når konsollen sender til tv'et i HD, og 217,7 W i 4K. Digital Edition uden diskdrev bruger 214,3 W. Den nyere udgave CFI-21 bruger 215,7 W i HD. Forskellen mellem modellerne er altså under 3 W — det er spillet, ikke modellen, der bestemmer forbruget.</p>
<p>I hjemmemenuen bruger CFI-2016 46,4 W, og CFI-21 43,4 W. Afspilning af en almindelig Blu-ray-film koster 50,5 W på CFI-2016, en 4K Blu-ray 80,4 W og streaming 56,3 W. Selv når du "bare" ser film på konsollen, trækker den altså mere end de fleste tv.</p>

<h2>Hvilemodus: 0,3 W eller næsten 5 W</h2>
<p>Hvilemodus (rest mode) er PS5'ens standby. I standardindstillingen, som Sony kalder lavt strømforbrug, bruger PS5 Slim 0,31 W (CFI-2016) og 0,30 W (CFI-21). Men konsollen kan holde funktioner kørende i hvile:</p>
<table>
<thead><tr><th>Hvile</th><th>CFI-2016</th><th>CFI-21</th></tr></thead>
<tbody>
<tr><td>Standard (lavt forbrug)</td><td>0,31 W</td><td>0,30 W</td></tr>
<tr><td>Strøm til USB-porte</td><td>3,6 W</td><td>4,65 W</td></tr>
<tr><td>Forbliv forbundet til internettet</td><td>1,2 W</td><td>0,84 W</td></tr>
<tr><td>Alle funktioner slået til</td><td>3,8 W</td><td>4,71 W</td></tr>
</tbody>
</table>
<p>Med 22 timers hvile i døgnet bruger standardindstillingen omkring 2,5 kWh om året. Med alle funktioner slået til bliver det omkring 31 kWh for CFI-2016 og 38 kWh for CFI-21 — altså 28–35 kWh mere, svarende til {{kr 28-35}} om året. USB-strømmen til opladning af controllere er den dyre del. Oplad hellere controlleren i et par timer, når den er ved at løbe tør, end at lade USB-portene stå tændt hele døgnet.</p>
<p>Indstillingerne ligger under strømbesparelse i PS5'ens systemindstillinger. Samme sted vælger du, hvor længe konsollen skal være inaktiv, før den går i hvile. Sony sætter det som standard til 20 minutter og til 4 timer under afspilning af film.</p>

<h2>Hvad koster en PS5 Slim om året?</h2>
<p>Tabellen øverst regner med to timers spil om dagen og hvile i standardindstillingen resten af døgnet, alle årets dage. Det giver omkring 159–161 kWh om året for alle tre udgaver, svarende til {{kr 159-161}}. Hele forskellen ligger i spilletiden: hver ekstra time om dagen koster omkring 79 kWh om året, svarende til {{kr 79}}. En time i menuen eller med en streamingtjeneste koster en femtedel til en fjerdedel af en spiltime.</p>
<p>Husk tv'et. En PS5 alene trækker over 200 W, men skærmen kommer oveni: en 55" <a href="/tv/lg-oled-c6/">LG OLED C6</a> bruger 75,6 W i SDR og 190 W i HDR, som mange PS5-spil bruger. Spil i HDR kan derfor næsten fordoble forbruget ved sofaen.</p>

<h2>PS5 Slim mod den første PS5</h2>
<p>Sonys tal for den oprindelige PS5 med diskdrev (CFI-1216A) er 209,8 W under spil og 0,38 W i hvile, og den endnu ældre CFI-1116A 199,0 W. På papiret bruger PS5 Slim altså lidt mere under spil. Men Sony måler med de spil, der var aktuelle, da modellen blev testet: den første PS5 med bl.a. Gran Turismo 7 og Horizon Forbidden West, PS5 Slim med God of War Ragnarök, Hogwarts Legacy og Marvel's Spider-Man 2. Tunge nye spil trækker mere, så tallene kan ikke sammenlignes direkte. I hvile er Slim en anelse bedre, og i 4K Blu-ray-afspilning bruger den nye CFI-21 med påmonteret diskdrev kun 59,1 W mod 80,4 W for CFI-2016.</p>

<h2>Gode råd til et lavere forbrug</h2>
<ul>
<li>Lad hvilemodus stå på standard, og slå strøm til USB-porte fra, når controllerne er ladet op.</li>
<li>Lad konsollen gå i hvile af sig selv, og sæt tiden ned, hvis den ofte bliver stående i menuen: menuen alene bruger over 40 W.</li>
<li>Se film og serier på tv'ets egen app frem for konsollen, hvis tv'et kan: tv'et er tændt alligevel, og konsollen bruger 50–80 W ekstra.</li>
<li>Download store opdateringer, mens du spiller, i stedet for at holde internetforbindelsen åben i hvile hele døgnet.</li>
</ul>
<p>Mere om konsoller generelt finder du på siden om <a href="/playstation/">PlayStation og strømforbrug</a>, og hvis du overvejer en anden maskine, så se <a href="/xbox/">Xbox</a> eller en <a href="/gaming-pc/">gaming-pc</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger en PS5 Slim?",
      answer: "Ifølge Sony bruger PS5 Slim med diskdrev (CFI-2016) 216,8 W under spil, 46,4 W i menuen og 0,31 W i hvilemodus. Digital Edition bruger 214,3 W under spil.",
    },
    {
      question: "Hvad koster det at spille PS5 i en time?",
      answer: "En time med spil bruger omkring 0,22 kWh, svarende til {{kr 0,22}} ved månedens elpris. Tv'et kommer oveni.",
    },
    {
      question: "Hvor meget bruger PS5 Slim i hvilemodus?",
      answer: "0,31 W i standardindstillingen. Med strøm til USB-porte slået til 3,6 W, og med alle funktioner 3,8 W (CFI-2016). Hvile med alle funktioner hele døgnet koster omkring {{kr 28}} mere om året end standardindstillingen.",
    },
    {
      question: "Hvad bruger PS5 Slim om året?",
      answer: "Med to timers spil om dagen og hvile resten af døgnet omkring 159–161 kWh om året, svarende til {{kr 159-161}}.",
    },
    {
      question: "Bruger PS5 Slim mindre strøm end den gamle PS5?",
      answer: "Ikke under spil ifølge Sonys tal: 216,8 W mod 209,8 W for CFI-1216A. Men Sony har målt med nyere og tungere spil på Slim, så tallene kan ikke sammenlignes direkte. I hvile bruger Slim 0,31 W mod 0,38 W.",
    },
  ],
  sources: [{ name: "Sony Interactive Entertainment — PlayStation, økodesign og strømforbrug pr. model", url: "https://www.playstation.com/da-dk/legal/ecodesign/" }],
  variants: [
    { name: "Disc (CFI-2016)", watts: { standby: 0.31, on: 216.8 }, source: 0 },
    { name: "Digital (CFI-2016)", watts: { standby: 0.31, on: 214.3 }, source: 0 },
    { name: "Digital (CFI-21)", watts: { standby: 0.3, on: 215.7 }, source: 0 },
  ],
  publishDate: "2026-11-24",
  updated: "2026-11-22",
  measuredBy: "ifølge Sonys egne oplysninger efter EU's økodesignkrav",
  figuresNote:
    "Sonys egne målinger: »I brug« er gennemsnittet af tre PS5-spil med billede i HD, »Standby« er hvilemodus i standardindstillingen. Kilderne står nederst på siden.",
};

export default ps5Slim;
