import type { ModelData } from "@/lib/models";

const macbookAirM3: ModelData = {
  slug: "macbook-air-m3",
  parent: "laptop",
  brand: "Apple",
  name: "MacBook Air M3",
  released: "2024-03",
  synonyms: ["macbook air 2024", "macbook air m3 13", "macbook air m3 15", "mba m3", "brugt macbook air m3", "macbook air 13 m3"],
  title: "MacBook Air M3 strømforbrug (2026) → 13 og 15 tommer",
  description:
    "MacBook Air M3 fra 2024 i 13 og 15 tommer: Apples målte watt ved 230 V, kWh om året, pris pr. opladning, og hvad et slidt batteri betyder.",
  intro:
    "Efter Apples egne målinger har M3 det laveste tomgangsforbrug af de tre seneste MacBook Air-generationer — en brugt M3 er også et sparsomt valg.",
  content: `<h2>Hvor mange watt bruger en MacBook Air M3?</h2>
<p>MacBook Air med M3 kom i marts 2024 i to størrelser, og Apples miljørapport oplyser forbruget for begge, målt ved 230 volt. Den 13" model bruger 3,13 W tændt i tomgang med skærmen tændt, den 15" model 4,00 W. I dvale ligger de på 0,28 W og 0,29 W, og helt slukket på 0,15 W. Målingen følger ENERGY STAR-programmets metode med fast lysstyrke, automatisk lysstyrke slået fra, wifi tilsluttet og et fuldt opladet batteri.</p>
<p>Det lave tomgangstal for 13" er ikke en tastefejl. Apples egne rapporter giver M3 et lavere tal end både M4 (3,63 W) og M5 (3,69 W). Man skal dog ikke læse for meget ind i det: målingerne er lavet i forskellige år, med forskellige versioner af macOS og under en målemetode, der løbende justeres. Forskellen på en halv watt svarer til omkring 1 kWh om året med seks timers daglig brug, og det er ikke noget, du kan mærke på elregningen. Konklusionen er snarere, at de tre generationer er lige gode, når det gælder strøm.</p>

<h2>Hvad bestemmer forbruget i praksis?</h2>
<p>Ved almindeligt arbejde er skærmen den største forbruger. 15"-modellens større panel er det, der koster knap 0,9 W ekstra i tomgang — chippen er den samme. Under tung last, fx når du eksporterer video, stiger forbruget, men MacBook Air har ingen blæser. M3-chippen skruer derfor ned for farten, når den bliver varm, og forbruget fra stikket kan aldrig overstige, hvad opladeren leverer.</p>
<p>Til 13" fulgte der en 30 W-oplader med basismodellen og en 35 W-oplader med to porte til de dyrere konfigurationer med 10-kernet grafik og 512 GB lager; 15" fik altid 35 W-opladeren. Apple har målt 13" med 30 W-opladeren, som omsætter 88,8 % af strømmen fra stikkontakten ved 230 V, og 15" med 35 W-opladeren, som omsætter 86,8 %. Uden noget tilsluttet bruger de 0,08 W og 0,09 W.</p>

<h2>Hvad koster det at oplade en MacBook Air M3?</h2>
<p>Ifølge Apples specifikationer har 13" et batteri på 52,6 Wh og 15" et på 66,5 Wh. Med opladerens tab regnet med trækker en fuld opladning omkring 0,059 kWh fra stikket for 13" og 0,077 kWh for 15". Det svarer til {{oere 0,059}} og {{oere 0,077}} ved månedens elpris. Selv en fuld opladning hver dag i et helt år lander på 22–28 kWh, eller {{kr 22-28}}.</p>
<p>Køber du en brugt M3, er batteriet sandsynligvis slidt en smule. Et batteri med 90 % kapacitet rummer mindre energi, så hver opladning koster lidt mindre, men du skal lade oftere, og over et år udligner det sig næsten. Batteriets tilstand ser du under Batteri i Systemindstillinger. Det, der virkelig betyder noget, er, om batteriet holder en arbejdsdag — ikke prisen for at lade det.</p>

<h2>Årsforbruget med vores profil</h2>
<p>Siden regner alle bærbare med samme brugsprofil: seks timer tændt og dvale resten af døgnet, hver dag. Med den bruger 13" M3 knap 9 kWh om året og 15" knap 11 kWh — svarende til {{kr 9-11}} om året. Af det står dvale for omkring 1,8–1,9 kWh, fordi maskinen tilbringer tre fjerdedele af døgnet med låget lukket. Hvis du slukker helt om natten i stedet, sparer du en brøkdel af en kWh, men mister den øjeblikkelige opstart.</p>

<h2>M3 mod M4 og M5</h2>
<p>For strømforbruget er der ingen grund til at skifte en velfungerende M3 ud. Apples tal for <a href="/laptop/macbook-air-m4/">MacBook Air M4</a> og <a href="/laptop/macbook-air-m5/">MacBook Air M5</a> ligger i samme leje i tomgang, og de nyere modeller vinder kun lidt i dvale og på opladerens effektivitet. Den 15" M3 bruger 4,00 W mod 4,37 W for M4 og 4,31 W for M5. Bemærk også, at M5 i Danmark sælges uden oplader, mens M3 kom med én i æsken — har du en M3, har du altså allerede en målt og effektiv oplader.</p>
<p>Står du derimod og skal vælge mellem en brugt M3 og en ældre Intel-model, er forskellen stor. En Intel-MacBook med blæser bruger mærkbart mere i tomgang, bliver varm under selv let arbejde og holder kortere på batteriet.</p>

<h2>Tre råd til en MacBook Air M3</h2>
<p>Hold lysstyrken nede, når du kan; det er den største enkelte post ved let arbejde. Lad optimeret batteriopladning være slået til, så batteriet ikke står på 100 % hele dagen ved skrivebordet. Og tag gamle, uidentificerede opladere ud af stikkontakterne — Apples egne bruger mindre end 1 kWh om året uden last, men det gælder ikke alle. Læs mere om <a href="/standby/">standby-forbrug</a>, eller sammenlign med andre typer på siden om <a href="/laptop/">bærbare computeres strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger en MacBook Air M3?",
      answer: "Ifølge Apples målinger ved 230 V bruger 13\" 3,13 W og 15\" 4,00 W tændt i tomgang med skærmen tændt. I dvale bruger de 0,28 W og 0,29 W, og slukket 0,15 W.",
    },
    {
      question: "Hvad koster det at oplade en MacBook Air M3?",
      answer: "En fuld opladning trækker omkring 0,059 kWh fra stikket for 13\" og 0,077 kWh for 15\", når opladerens tab er medregnet. Det koster ca. {{oere 0,059}} og {{oere 0,077}} ved månedens elpris.",
    },
    {
      question: "Hvor meget strøm bruger MacBook Air M3 om året?",
      answer: "Med seks timers brug om dagen og dvale resten af døgnet bruger 13\" knap 9 kWh og 15\" knap 11 kWh om året, svarende til {{kr 9-11}}.",
    },
    {
      question: "Bruger MacBook Air M3 mere strøm end M4?",
      answer: "Nej. Apples egne tal giver M3 et lidt lavere tomgangsforbrug: 3,13 W mod 3,63 W for 13\". Forskellen er omkring 1 kWh om året, under {{kr 1,1}}, og ligger inden for, hvad forskellige målinger kan svinge.",
    },
    {
      question: "Hvilken oplader følger med MacBook Air M3?",
      answer: "13\" basismodellen fik en 30 W-oplader, de dyrere 13\" konfigurationer og alle 15\" en 35 W-oplader med to porte. Ved 230 V omsætter de 88,8 % og 86,8 % af strømmen og bruger 0,08–0,09 W uden last.",
    },
  ],
  sources: [
    { name: "Apple — MacBook Air with M3 chip Product Environmental Report, marts 2024", url: "https://www.apple.com/environment/pdf/products/notebooks/M3_MacBook_Air_PER_March2024.pdf" },
    { name: "Apple Support — MacBook Air (13-inch, M3, 2024), tekniske specifikationer", url: "https://support.apple.com/en-gb/118551" },
    { name: "Apple Support — MacBook Air (15-inch, M3, 2024), tekniske specifikationer", url: "https://support.apple.com/en-gb/118552" },
  ],
  variants: [
    { name: "13\" M3", watts: { off: 0.15, sleep: 0.28, idle: 3.13 }, adapterNoLoadW: 0.08, adapterEfficiency: 0.888, adapterW: 30, batteryWh: 52.6, source: 0 },
    { name: "15\" M3", watts: { off: 0.15, sleep: 0.29, idle: 4.0 }, adapterNoLoadW: 0.09, adapterEfficiency: 0.868, adapterW: 35, batteryWh: 66.5, source: 0 },
  ],
  publishDate: "2026-11-24",
  updated: "2026-11-22",
};

export default macbookAirM3;
