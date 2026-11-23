import type { ModelData } from "@/lib/models";

const nintendoSwitch2: ModelData = {
  slug: "nintendo-switch-2",
  parent: "nintendo-switch",
  brand: "Nintendo",
  name: "Nintendo Switch 2",
  released: "2025-06",
  synonyms: [
    "switch 2 strømforbrug",
    "nintendo switch 2 watt",
    "switch 2 forbrug",
    "switch 2 dvale strømforbrug",
    "switch 2 sleep mode watt",
    "nintendo switch 2 kwh om året",
    "switch 2 dock strømforbrug",
  ],
  title: "Nintendo Switch 2 strømforbrug (2026) → watt i dock og dvale",
  description:
    "Nintendo Switch 2 i docken: Nintendos egne watt for spil, hovedmenu og dvale, kWh og pris om året, og hvorfor kablet net i dvale koster mere end spillet.",
  intro:
    "Spillet koster næsten ingenting på Switch 2. Den store post er dvale med kablet netværk holdt aktivt: så bruger konsollen ti gange så meget i dvale og tre gange så meget strøm om året.",
  content: `<h2>Hvor mange watt bruger en Switch 2?</h2>
<p>Nintendo skriver selv strømforbruget i Switch 2's specifikationer, målt i tv-tilstand med konsollen i docken. Under spil bruger Switch 2 19 W, målt med Mario Kart World. I hovedmenuen (HOME-menuen) bruger den 8 W. I dvale med Wi-Fi bruger den 0,5 W, og slukket også 0,5 W. Holder du den kablede netværksforbindelse aktiv i dvale, stiger dvaleforbruget til 5 W.</p>
<table>
<thead><tr><th>Tilstand (i docken)</th><th>Watt</th><th>Pris i timen</th></tr></thead>
<tbody>
<tr><td>Spil (Mario Kart World)</td><td>19 W</td><td>{{oere 0,019}}</td></tr>
<tr><td>Hovedmenu</td><td>8 W</td><td>{{oere 0,008}}</td></tr>
<tr><td>Dvale med kablet net holdt aktivt</td><td>5 W</td><td>{{oere 0,005}}</td></tr>
<tr><td>Dvale (Wi-Fi) eller slukket</td><td>0,5 W</td><td>under en øre</td></tr>
</tbody>
</table>
<p>Andre spil kan ligge lidt over eller under Mario Kart World, men selv et tungt spil på Switch 2 bruger en brøkdel af en stor konsol. Til sammenligning bruger en <a href="/playstation/ps5-slim/">PS5 Slim</a> 216,8 W under spil ifølge Sony — mere end elleve gange så meget.</p>

<h2>Hvad koster en Switch 2 om året?</h2>
<p>Tabellen øverst regner med to timers spil om dagen i docken og dvale resten af døgnet, alle årets dage. Det giver omkring 17,9 kWh om året, svarende til {{kr 17,9}}. Spillet står for 13,9 kWh, dvalen for 4 kWh. Hver ekstra time om dagen koster omkring 7 kWh om året, svarende til {{kr 7}}.</p>
<p>Nintendo opgiver selv et anslået årsforbrug på 14 kWh med to timers spil om dagen og Wi-Fi i dvale. Nintendos tal er lavere end vores, fordi vi regner alle døgnets øvrige 22 timer som dvale ved 0,5 W. Forskellen er under 4 kWh om året, og begge tal er små.</p>
<p>Husk tv'et. Konsollen bruger 19 W, men skærmen kommer oveni: en 55-tommer <a href="/tv/lg-oled-c6/">LG OLED C6</a> bruger 75,6 W i standardbilledet. Sofaspillet koster altså mest på grund af tv'et — spil i hånden bruger kun den strøm, det tager at lade batteriet op igen.</p>

<h2>Dvale med kablet net: den skjulte post</h2>
<p>Switch 2's dock har et netværksstik, og i systemindstillingerne kan du vælge at holde den kablede forbindelse aktiv i dvale, så konsollen kan hente opdateringer og spil i baggrunden. Det koster. Dvaleforbruget stiger fra 0,5 til 5 W, og med 22 timers dvale i døgnet bliver det omkring 36 kWh ekstra om året, svarende til {{kr 36}}. Hele årsforbruget stiger dermed til omkring 54 kWh — tre gange så meget som med Wi-Fi i dvale. Nintendo opgiver selv 50 kWh om året med kablet net holdt aktivt.</p>
<p>Med andre ord: på et år koster dvale med kablet net mere end alt spillet. Vil du have hurtige opdateringer, kan du i stedet sætte konsollen til at hente dem, mens du spiller, eller lade den være forbundet via Wi-Fi i dvale.</p>

<h2>Switch 2 mod den første Switch og OLED-modellen</h2>
<p>Switch 2 bruger mere end de gamle modeller. Ifølge Nintendo bruger den første Switch 7 W i docken og OLED-modellen 6 W, begge omkring 4 W i hånden. Med samme profil — to timers spil om dagen og dvale resten — bruger den første Switch omkring 7,5 kWh om året mod 17,9 kWh for Switch 2. Forskellen er omkring 10 kWh om året, svarende til {{kr 10}}. Det er prisen for den større skærm, den hurtigere chip og billedet i op til 4K på tv'et.</p>
<p>Også dvalen med kablet net er dyrere på Switch 2: 5 W mod 2,2 W for OLED-modellen. Se alle modellerne side om side på siden om <a href="/nintendo-switch/">Nintendo Switch og strømforbrug</a>, og sammenlign med <a href="/xbox/">Xbox</a> og <a href="/playstation/">PlayStation</a>, hvis du overvejer en større konsol.</p>

<h2>Gode råd til et lavere forbrug</h2>
<ul>
<li>Slå »hold kablet forbindelse aktiv i dvale« fra, hvis du ikke har brug for opdateringer om natten — det er konsollens største strømpost.</li>
<li>Lad konsollen gå i dvale af sig selv: hovedmenuen bruger 8 W, så en konsol, der står tændt på menuen hele aftenen, koster mere end et kort spil.</li>
<li>Spil i hånden, når tv'et ikke er nødvendigt — så slipper du for tv'ets forbrug.</li>
<li>Lad batteriet op, mens konsollen er i dvale: Nintendo opgiver omkring 3 timer til en fuld opladning.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor mange watt bruger en Nintendo Switch 2?",
      answer: "Ifølge Nintendo bruger Switch 2 19 W under spil i docken, 8 W i hovedmenuen og 0,5 W i dvale eller slukket. Med kablet net holdt aktivt i dvale bruger den 5 W.",
    },
    {
      question: "Hvad koster det at spille Switch 2 i en time?",
      answer: "En times spil i docken bruger 0,019 kWh, svarende til {{oere 0,019}} ved månedens elpris på {{pris_kwh}}. Tv'et kommer oveni.",
    },
    {
      question: "Hvad bruger en Switch 2 om året?",
      answer: "Med to timers spil om dagen og dvale resten af døgnet omkring 17,9 kWh, svarende til {{kr 17,9}}. Nintendo anslår selv 14 kWh.",
    },
    {
      question: "Hvad koster dvale med kablet net på Switch 2?",
      answer: "Dvalen stiger fra 0,5 til 5 W. Med 22 timers dvale i døgnet er det omkring 36 kWh ekstra om året, svarende til {{kr 36}}.",
    },
    {
      question: "Bruger Switch 2 mere strøm end den første Switch?",
      answer: "Ja. Switch 2 bruger 19 W i docken mod 7 W for den første Switch og 6 W for OLED-modellen ifølge Nintendo — omkring 10 kWh mere om året ved to timers spil om dagen.",
    },
  ],
  sources: [
    {
      name: "Nintendo — Nintendo Switch 2, specifikationer (strømforbrug i tv-tilstand, dvale, årsforbrug, batteri)",
      url: "https://www.nintendo.com/en-gb/Hardware/Nintendo-Switch-2/Nintendo-Switch-2-Specifications-2785627.html",
    },
    {
      name: "Nintendo — Nintendo Switch (OLED-model), specifikationer og strømforbrug",
      url: "https://www.nintendo.com/my/hardware/switch/modal/specs/body_oled.html",
    },
    {
      name: "Nintendo — Nintendo Switch, specifikationer og strømforbrug",
      url: "https://nintendo.com/sg/hardware/switch/modal/specs/body.html?width=960",
    },
  ],
  variants: [{ name: "Switch 2 i docken", watts: { on: 19, sleep: 0.5 }, source: 0 }],
  publishDate: "2026-12-17",
  updated: "2026-11-23",
  measuredBy: "ifølge Nintendos egne oplysninger",
  figuresNote:
    "Nintendos egne tal: »I brug« er spil i tv-tilstand i docken, målt med Mario Kart World, og »Dvale« er dvale med Wi-Fi (samme 0,5 W som slukket). Dvale med kablet net holdt aktivt bruger 5 W. Kilderne står nederst på siden.",
};

export default nintendoSwitch2;
