import type { ModelData } from "@/lib/models";

const ps5Pro: ModelData = {
  slug: "ps5-pro",
  parent: "playstation",
  brand: "Sony",
  name: "PS5 Pro",
  released: "2024-11",
  synonyms: ["playstation 5 pro", "ps5 pro watt", "cfi-7021", "cfi-71", "ps5 pro hvilemodus", "ps5 pro standby", "ps5 pro rest mode"],
  title: "PS5 Pro strømforbrug (2026) → watt, hvilemodus og pris",
  description:
    "PS5 Pro i den første udgave og den reviderede: Sonys watt under spil, i menuen, med 4K Blu-ray og i hvilemodus, og hvad den koster om året.",
  intro:
    "Mere grafikkraft koster ikke mere strøm: ifølge Sony bruger PS5 Pro det samme under spil som en almindelig PS5 Slim.",
  content: `<h2>Hvor mange watt bruger en PS5 Pro?</h2>
<p>Sony offentliggør forbruget for hver PlayStation-model efter EU's økodesignkrav. Den første PS5 Pro (CFI-7021) bruger i gennemsnit 215,2 W under spil med tre PS5-spil og billede i HD, og 216,1 W i 4K. Den reviderede udgave CFI-71 bruger 215,7 W i HD og 217,2 W i 4K. I hjemmemenuen er tallene 43,6 W og 43,4 W, og i hvilemodus i standardindstillingen 0,3 W for begge.</p>
<p>PS5 Pro har intet indbygget diskdrev, men kan få det samme påmonterbare drev som PS5 Slim. Med drevet monteret bruger CFI-7021 48,9 W under afspilning af en almindelig Blu-ray og 57,2 W med en 4K Blu-ray. For CFI-71 med drev er tallet 59,1 W for 4K Blu-ray, og 219,2 W under spil.</p>

<h2>Pro mod Slim: samme forbrug, mere grafik</h2>
<p>Det overraskende ved PS5 Pro er, at den ikke bruger mere end den almindelige model. PS5 Slim med diskdrev (CFI-2016) bruger 216,8 W under spil i Sonys måling, PS5 Pro 215,2 W. Over et år med to timers spil om dagen er forskellen omkring 1 kWh — intet, der kan mærkes på regningen. Pro-modellens ekstra grafikkraft bliver brugt på bedre billede og højere billedhastighed, ikke på flere watt fra stikkontakten.</p>
<p>Et forbehold: Sony måler med de spil, der var aktuelle ved testen. CFI-7021 er målt med Marvel's Spider-Man 2, Helldivers 2 og Call of Duty: Black Ops 6, mens CFI-71 og den nye almindelige PS5 (CFI-21) er målt med Death Stranding 2, Demon's Souls og Call of Duty: Black Ops 7. Sonys tabel viser i øvrigt de samme tal for CFI-71 som for CFI-21. Sammenligningen er derfor ikke laboratorierent, men billedet er klart: Pro og Slim ligger i samme leje. Se tallene for <a href="/playstation/ps5-slim/">PS5 Slim</a>.</p>

<h2>Hvilemodus og indstillingerne, der koster</h2>
<p>I hvilemodus kan PS5 Pro holde funktioner kørende, og det ændrer forbruget mere end noget andet, når den ikke er i brug:</p>
<table>
<thead><tr><th>Hvile</th><th>CFI-7021</th><th>CFI-71</th></tr></thead>
<tbody>
<tr><td>Standard (lavt forbrug)</td><td>0,3 W</td><td>0,30 W</td></tr>
<tr><td>Strøm til USB-porte</td><td>3,4 W</td><td>4,65 W</td></tr>
<tr><td>Forbliv forbundet til internettet</td><td>1,0 W</td><td>0,84 W</td></tr>
<tr><td>Alle funktioner slået til</td><td>3,6 W</td><td>4,71 W</td></tr>
</tbody>
</table>
<p>Med 22 timers hvile i døgnet koster standardindstillingen omkring 2,4 kWh om året. Med alle funktioner slået til bliver det omkring 29 kWh for CFI-7021 og 38 kWh for CFI-71, altså 26–35 kWh mere, svarende til {{kr 26-35}} om året. Det er især strømmen til USB-portene, der koster. Lad controlleren lade, når den trænger, og slå USB-strøm i hvile fra bagefter.</p>
<p>Sony har som standard sat PS5 til at gå i hvile efter 20 minutters inaktivitet og efter 4 timer under filmafspilning. Lader du den ofte stå i menuen, er det værd at beholde den korte tid: menuen alene bruger over 43 W.</p>

<h2>Hvad koster en PS5 Pro om året?</h2>
<p>Med to timers spil om dagen og hvile i standardindstillingen resten af døgnet bruger begge udgaver omkring 160 kWh om året, svarende til {{kr 160}}. Hver ekstra spiltime om dagen lægger omkring 79 kWh til, eller {{kr 79}} om året. En spiltime koster omkring {{kr 0,22}}.</p>
<p>Spiller du på et stort tv i HDR, kommer skærmen oveni og kan næsten fordoble forbruget ved sofaen: en 65" <a href="/tv/lg-oled-c5/">LG OLED C5</a> bruger 95,4 W i SDR og 234 W i HDR ifølge energimærket. PS5 Pro er bygget til netop 4K og HDR, så for mange vil tv'et være den største ekstra post.</p>

<h2>Gode råd til PS5 Pro-ejere</h2>
<ul>
<li>Behold hvilemodus i standardindstillingen, og slå kun USB-strøm til, når controllerne skal lades.</li>
<li>Brug tv'ets energibesparende billedindstilling til film og serier, og gem den fulde HDR-lysstyrke til spil.</li>
<li>Streamer du film, så brug tv'ets egen app, hvis den findes: konsollen bruger 43–59 W i menuen og under filmafspilning, oveni tv'et.</li>
<li>Planlæg store downloads, mens du spiller, frem for at holde internetforbindelsen åben i hvile hele døgnet.</li>
</ul>
<p>Siden om <a href="/playstation/">PlayStation og strømforbrug</a> sammenligner konsollerne generelt, og om <a href="/standby/">standby-forbrug</a> kan du læse, hvad resten af hjemmets apparater bruger, når de ikke er i brug.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger en PS5 Pro?",
      answer: "Ifølge Sony bruger PS5 Pro (CFI-7021) 215,2 W under spil i HD og 216,1 W i 4K, 43,6 W i menuen og 0,3 W i hvilemodus. Den reviderede CFI-71 bruger 215,7 W under spil.",
    },
    {
      question: "Bruger PS5 Pro mere strøm end PS5 Slim?",
      answer: "Nej. Sony måler PS5 Pro til 215,2 W under spil og PS5 Slim med diskdrev til 216,8 W. Over et år med to timers spil om dagen er forskellen omkring 1 kWh.",
    },
    {
      question: "Hvad koster PS5 Pro om året i strøm?",
      answer: "Med to timers spil om dagen og hvile i standardindstillingen resten af døgnet omkring 160 kWh om året, svarende til {{kr 160}} ved månedens elpris.",
    },
    {
      question: "Hvor meget bruger PS5 Pro i hvilemodus?",
      answer: "0,3 W i standardindstillingen. Med strøm til USB-porte 3,4 W og med alle funktioner 3,6 W (CFI-7021). For CFI-71 er tallet med alle funktioner 4,71 W.",
    },
    {
      question: "Hvad bruger PS5 Pro med 4K Blu-ray?",
      answer: "Med det påmonterbare diskdrev bruger CFI-7021 57,2 W under afspilning af 4K Blu-ray og 48,9 W med en almindelig Blu-ray ifølge Sony.",
    },
  ],
  sources: [{ name: "Sony Interactive Entertainment — PlayStation, økodesign og strømforbrug pr. model", url: "https://www.playstation.com/da-dk/legal/ecodesign/" }],
  variants: [
    { name: "CFI-7021 (2024)", watts: { standby: 0.3, on: 215.2 }, source: 0 },
    { name: "CFI-71 (revideret)", watts: { standby: 0.3, on: 215.7 }, source: 0 },
  ],
  publishDate: "2026-11-25",
  updated: "2026-11-22",
  measuredBy: "ifølge Sonys egne oplysninger efter EU's økodesignkrav",
  figuresNote:
    "Sonys egne målinger: »I brug« er gennemsnittet af tre PS5-spil med billede i HD, »Standby« er hvilemodus i standardindstillingen. Kilderne står nederst på siden.",
};

export default ps5Pro;
