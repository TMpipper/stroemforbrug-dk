import type { ModelData } from "@/lib/models";

const macStudio: ModelData = {
  slug: "mac-studio",
  parent: "computer",
  brand: "Apple",
  name: "Mac Studio",
  released: "2026-08",
  synonyms: ["mac studio 2026", "mac studio m5 max", "mac studio m5 ultra", "mac studio 2025", "mac studio m4 max", "mac studio m3 ultra"],
  title: "Mac Studio strømforbrug (2026) → M5 Ultra, M4 Max og pris",
  description:
    "Mac Studio med M5 Max eller M5 Ultra (2026) og M4 Max eller M3 Ultra (2025): Apples watt ved 230 V, kWh om året, dvale og hvad fuld last koster.",
  intro:
    "Selv den kraftigste Mac Studio bruger kun 5–7 W i tomgang — men strømforsyningen er bygget til op til 480 W, når den arbejder for fuldt.",
  content: `<h2>Hvor mange watt bruger en Mac Studio?</h2>
<p>Apple har udgivet en miljørapport for hver af de to seneste Mac Studio-generationer, og begge oplyser forbruget målt ved 230 volt. Mac Studio fra august 2026 findes med M5 Max eller M5 Ultra, og rapporten har én fælles tabel for begge: 5,4 W tændt i tomgang, 1,3 W i dvale og 0,25 W slukket. Mac Studio fra marts 2025 blev målt chip for chip. Med M4 Max bruger den 5,4 W i tomgang, 1,2 W i dvale og 0,24 W slukket; med M3 Ultra 6,9 W, 0,9 W og 0,32 W.</p>
<p>At 2026-modellen ikke skiller M5 Max og M5 Ultra ad, betyder, at vi ikke kan sige, om Ultra bruger mere i tomgang end Max. I 2025 brugte M3 Ultra 1,5 W mere end M4 Max i tomgang, fordi Ultra-chippen i praksis er to chips forbundet til én og har mere hukommelse at holde i gang. Det officielle tal for 2026 er det samme for begge, og vi viser det som én række.</p>

<h2>Fra tomgang til fuld last</h2>
<p>Mac Studio er bygget til tunge opgaver som videoredigering i høj opløsning, 3D-rendering og maskinlæring, og under den slags arbejde stiger forbruget voldsomt i forhold til tomgang. Apple oplyser, at strømforsyningen kan levere op til 480 W kontinuerligt i både 2025- og 2026-modellen. Det er loftet for, hvad Ultra-modellerne kan trække under fuld belastning. En time ved det loft er 0,48 kWh, altså {{oere 0,48}} ved månedens elpris. En hel arbejdsdag på otte timer for fuld kraft — et ekstremt scenarie — bliver knap 4 kWh, svarende til {{kr 3,84}}.</p>
<p>Til almindeligt arbejde ved skrivebordet ligger forbruget derimod tæt på tomgangstallet. Det er derfor, vi regner årsforbruget med Apples tomgangstal: Mac Studio er en maskine, der bruger lidt, når den venter, og meget, når den arbejder — og den venter som regel det meste af tiden.</p>

<h2>Dvale fylder mere end på de mindre Macs</h2>
<p>Det, der skiller Mac Studio ud, er dvalen. Med 1,2–1,3 W bruger M4 Max- og M5-modellerne næsten dobbelt så meget i dvale som en <a href="/computer/mac-mini-m6/">Mac mini M6</a>, der ligger på 0,7 W. Med vores faste profil — otte timer tændt og dvale resten af døgnet — står dvale for omkring 7–7,6 kWh af årsforbruget, altså næsten en tredjedel. Samlet bruger 2026-modellen omkring 23 kWh om året, M4 Max knap 23 kWh og M3 Ultra godt 25 kWh, svarende til {{kr 23-25}} om året.</p>
<p>Står maskinen ubrugt i længere tid, kan det derfor betale sig at slukke den. Slukket bruger den 0,24–0,32 W, og forskellen til dvale er omkring 1 W. Over seksten timer om dagen i et år er det omkring 6 kWh for M4 Max og M5, svarende til {{kr 6}}. Bruger du den til natlige renderinger eller backup, er dvale stadig det praktiske valg.</p>

<h2>Effektiv strømforsyning, ingen skærm</h2>
<p>Strømforsyningen sidder inde i kabinettet, og Apple har målt den til at omsætte 94,9 % af strømmen fra stikkontakten ved 230 V i begge generationer. Det er den højeste værdi blandt de stationære Macs på denne side, og den betyder, at meget lidt går tabt som varme, selv under tung last.</p>
<p>Mac Studio leveres uden skærm, så Apples tal gælder kun maskinen. Bruger du en stor professionel skærm eller to, vil de typisk bruge mere strøm end Mac Studio selv ved almindeligt arbejde. Læs mere om <a href="/skaerm/">skærmes strømforbrug</a>, hvis du vil regne hele arbejdspladsen med.</p>

<h2>Mac Studio sammenlignet med andre computere</h2>
<p>I tomgang er Mac Studio overraskende tæt på de små Macs. Den bruger 5,4 W mod 3,0 W for Mac mini M6, og den er langt under en <a href="/computer/imac-m6/">iMac M6</a>, der har skærmen indbygget og bruger 19,8 W. Sammenlignet med en stationær <a href="/gaming-pc/">gaming-pc</a> med kraftigt grafikkort er Mac Studio meget sparsom i tomgang. Skal du vælge mellem Mac mini og Mac Studio, er det ydelsen, du betaler for; strømforbruget i hverdagen er nogenlunde det samme.</p>

<h2>Gode vaner med en Mac Studio</h2>
<p>Lad skærmene gå i dvale efter få minutter, og sæt Mac Studio til at sove, når den ikke arbejder. Kører du lange renderinger, så planlæg dem samlet frem for at lade maskinen stå og vente i timevis imellem. Har du eksterne diske og lydudstyr tilsluttet, så tjek deres standby, for de står ofte tændt døgnet rundt. Vil du regne på dine egne timer, så brug <a href="/beregner/">beregneren</a> med watt-tallene ovenfor, og se siden om <a href="/computer/">stationære computeres strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger en Mac Studio?",
      answer: "Ifølge Apples målinger ved 230 V bruger Mac Studio med M5 Max eller M5 Ultra (2026) 5,4 W i tomgang, 1,3 W i dvale og 0,25 W slukket. 2025-modellen bruger 5,4 W med M4 Max og 6,9 W med M3 Ultra i tomgang. Under fuld last kan den trække op til 480 W.",
    },
    {
      question: "Hvor meget strøm bruger Mac Studio om året?",
      answer: "Med otte timer tændt om dagen og dvale resten af døgnet bruger den omkring 23–25 kWh om året, afhængigt af model, svarende til {{kr 23-25}}.",
    },
    {
      question: "Hvad koster en time med Mac Studio under fuld last?",
      answer: "Strømforsyningen kan levere op til 480 W. En time ved det loft er 0,48 kWh, svarende til {{oere 0,48}} ved månedens elpris. De fleste opgaver ligger langt under loftet.",
    },
    {
      question: "Bruger Mac Studio M5 Ultra mere strøm end M5 Max?",
      answer: "Apple oplyser ét fælles tal for M5 Max og M5 Ultra, så i tomgang er de ens ifølge Apples måling. I 2025-generationen brugte M3 Ultra 6,9 W mod 5,4 W for M4 Max i tomgang.",
    },
    {
      question: "Hvorfor bruger Mac Studio så meget i dvale?",
      answer: "Apple har målt 1,2–1,3 W i dvale for M4 Max og M5, næsten dobbelt så meget som Mac mini M6. Over et år med seksten timers dvale om dagen bliver det omkring 7–7,6 kWh, svarende til {{kr 7-7,6}}.",
    },
  ],
  sources: [
    { name: "Apple — Mac Studio Product Environmental Report, august 2026", url: "https://www.apple.com/environment/pdf/products/desktops/Mac_Studio_PER_Aug2026.pdf" },
    { name: "Apple — Mac Studio Product Environmental Report, marts 2025", url: "https://www.apple.com/environment/pdf/products/desktops/Mac_Studio_PER_March2025.pdf" },
    { name: "Apple Support — Mac Studio (M5 Max or M5 Ultra), tekniske specifikationer", url: "https://support.apple.com/en-gb/128107" },
    { name: "Apple Support — Mac Studio (2025), tekniske specifikationer", url: "https://support.apple.com/en-gb/122211" },
  ],
  variants: [
    { name: "M5 Max/Ultra (2026)", watts: { off: 0.25, sleep: 1.3, idle: 5.4 }, source: 0 },
    { name: "M4 Max (2025)", watts: { off: 0.24, sleep: 1.2, idle: 5.4 }, source: 1 },
    { name: "M3 Ultra (2025)", watts: { off: 0.32, sleep: 0.9, idle: 6.9 }, source: 1 },
  ],
  publishDate: "2026-11-28",
  updated: "2026-11-22",
};

export default macStudio;
