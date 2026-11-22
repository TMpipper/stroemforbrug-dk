import type { ModelData } from "@/lib/models";

const macbookProM5: ModelData = {
  slug: "macbook-pro-m5",
  parent: "laptop",
  brand: "Apple",
  name: "MacBook Pro M5",
  released: "2025-10",
  synonyms: ["macbook pro 2026", "macbook pro m5 14", "macbook pro m5 pro", "macbook pro m5 max", "mbp m5", "macbook pro 16 m5 max", "macbook pro 2025"],
  title: "MacBook Pro M5 strømforbrug (2026) → 14 og 16 tommer",
  description:
    "MacBook Pro M5, M5 Pro og M5 Max i 14 og 16 tommer: Apples watt ved 230 V, kWh om året, pris pr. opladning og hvad tung last koster i timen.",
  intro:
    "Selv den store 16\" model med M5 Max bruger under 20 kWh om året med daglig brug — forskellen mellem modellerne handler mest om skærmstørrelse.",
  content: `<h2>Hvor mange watt bruger en MacBook Pro M5?</h2>
<p>MacBook Pro med M5-chippen kom i to omgange. Den 14" model med almindelig M5 kom i oktober 2025, og i marts 2026 fulgte 14" og 16" med M5 Pro eller M5 Max. Apple har udgivet en miljørapport for hver lancering, og i begge står forbruget målt ved 230 volt. Den 14" M5 bruger 3,92 W tændt i tomgang med skærmen tændt, 0,29 W i dvale og 0,15 W slukket. Den 14" med M5 Pro eller M5 Max bruger 4,52 W i tomgang og 0,31 W i dvale, og den 16" bruger 7,18 W i tomgang og 0,41 W i dvale.</p>
<p>Bemærk, at Apple ikke skiller M5 Pro og M5 Max ad. Rapporten har én tabel pr. skærmstørrelse, der dækker begge chips, så tallet gælder, uanset hvilken af dem du vælger. I tomgang er det heller ikke chippen, der bestemmer forbruget: det er skærmen. Den 16" skærm er både større og har flere lyskilder bag panelet, og det er hovedårsagen til, at 16" bruger over halvanden gang så meget som 14" i tomgang.</p>

<h2>Når den arbejder: op til opladerens effekt</h2>
<p>Tomgangstallet er et gulv. MacBook Pro har blæser, og M5 Pro og M5 Max er bygget til at holde høj ydelse i lang tid, så under videoeksport, 3D-arbejde, kompilering og spil stiger forbruget markant. Loftet sættes af, hvad strømforsyningen kan levere: Apple har målt 14" med en 70 W-oplader og 16" med en 140 W-oplader. En time med 16" kørende for fuld kraft fra stikket trækker derfor højst omkring 0,15 kWh, når opladerens tab er regnet med — det er {{oere 0,15}} ved månedens elpris. Selv otte timer i træk med tung last bliver omkring 1,2 kWh, altså {{kr 1,2}}.</p>
<p>Til almindeligt kontorarbejde ligger forbruget langt nærmere tomgang. Det er derfor, vi regner årsforbruget med Apples tomgangstal og en fast profil på seks timer om dagen. Med den ender 14" M5 på godt 10 kWh om året, 14" M5 Pro og M5 Max på knap 12 kWh og 16" på godt 18 kWh.</p>

<h2>Opladeren medfølger ikke i Danmark</h2>
<p>Alle MacBook Pro med M5 sælges i Danmark uden strømforsyning; i æsken ligger kun kablet fra USB-C til MagSafe 3. Tallene for opladerens effektivitet og tomgang i tabellen hører til de opladere, Apple har målt med: 70 W til 14" og 140 W til 16". Begge omsætter 91,3 % af strømmen fra stikkontakten ved 230 V. Uden noget tilsluttet bruger 70 W-opladeren 0,09 W og 140 W-opladeren 0,13 W — et år i stikkontakten er under 1,2 kWh.</p>
<p>Apple oplyser mindst 60 W for at lade 14" M5, mindst 70 W for 14" M5 Pro og M5 Max og mindst 140 W for 16". Har du en ældre oplader liggende, kan den sagtens bruges, men en svagere oplader kan ikke følge med under tung last, og så tærer maskinen på batteriet, mens den er tilsluttet.</p>

<h2>Hvad koster det at oplade en MacBook Pro M5?</h2>
<p>Ifølge Apples specifikationer rummer batteriet 72,4 Wh i begge 14" modeller og 99,6 Wh i 16". Med opladerens tab regnet med trækker en opladning fra tomt til fuldt omkring 0,079 kWh for 14" og 0,109 kWh for 16". Det koster {{oere 0,079}} og {{oere 0,109}} ved månedens elpris. Lader du 16" helt op hver dag i et år, bliver det omkring 40 kWh, svarende til {{kr 40}} — og det er et loft, ikke en typisk brug.</p>

<h2>M5 sammenlignet med M4-generationen</h2>
<p>Apples tal for de to generationer ligger tæt. Den 14" M4 målte 4,03 W i tomgang, M5 3,92 W. For 16" målte M4 Pro 6,58 W og M4 Max 7,59 W, og M5 Pro og M5 Max ligger med 7,18 W imellem dem. Den tydeligste forbedring er 16"-opladeren, der er gået fra 87,8 % til 91,3 % effektivitet ved 230 V, så en fuld opladning taber mindre undervejs. I praksis er forskellen mellem generationerne under 1 kWh om året for 14".</p>
<p>Sammenlignet med den lettere <a href="/laptop/macbook-air-m5/">MacBook Air M5</a> bruger 14" MacBook Pro M5 omtrent det samme i tomgang, men Pro'en kan trække langt mere under last, fordi den har blæser og ikke skruer ned for farten. Har du mest brug for mail og browser, er Air'en det mest sparsomme valg; har du brug for vedvarende kraft, koster Pro'en kun lidt mere i strøm. Se også <a href="/laptop/macbook-air-m4/">MacBook Air M4</a>, hvis du overvejer en ældre model.</p>

<h2>Sådan holder du forbruget nede</h2>
<p>Skærmens lysstyrke er den største enkeltpost ved let arbejde. XDR-skærmen kan lyse langt kraftigere end ENERGY STAR-målingens faste niveau, og fuld lysstyrke med HDR-indhold koster mærkbart flere watt. Lad automatisk lysstyrke være slået til, og luk låget, når du går fra maskinen. Bruger du ekstern skærm, er det den, der trækker mest; den bør gå i dvale sammen med maskinen. Læs mere om <a href="/skaerm/">skærmes strømforbrug</a>, eller regn på dit eget mønster med <a href="/beregner/">beregneren</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger en MacBook Pro M5?",
      answer: "Ifølge Apples målinger ved 230 V bruger 14\" M5 3,92 W tændt i tomgang, 14\" M5 Pro/M5 Max 4,52 W og 16\" M5 Pro/M5 Max 7,18 W. I dvale bruger de 0,29–0,41 W. Under tung last kan de trække op til opladerens effekt: 70 W for 14\" og 140 W for 16\".",
    },
    {
      question: "Bruger M5 Max mere strøm end M5 Pro?",
      answer: "Apple oplyser ét fælles tal for M5 Pro og M5 Max pr. skærmstørrelse, så i tomgang bruger de det samme ifølge Apples måling. Under tung last kan M5 Max trække mere, fordi den har flere grafikkerner, men loftet er stadig opladerens effekt.",
    },
    {
      question: "Hvad koster det at oplade en MacBook Pro M5?",
      answer: "En fuld opladning trækker omkring 0,079 kWh for 14\" og 0,109 kWh for 16\", når opladerens tab er medregnet. Det koster ca. {{oere 0,079}} og {{oere 0,109}} ved månedens elpris.",
    },
    {
      question: "Hvor meget strøm bruger MacBook Pro M5 om året?",
      answer: "Med seks timers brug om dagen og dvale resten af døgnet bruger 14\" M5 godt 10 kWh, 14\" M5 Pro/M5 Max knap 12 kWh og 16\" godt 18 kWh om året — svarende til {{kr 10-18}} om året.",
    },
    {
      question: "Følger der en oplader med MacBook Pro M5?",
      answer: "Ikke i Danmark. Kun USB-C til MagSafe 3-kablet ligger i æsken. Apple har målt med 70 W-opladeren til 14\" og 140 W-opladeren til 16\", der begge omsætter 91,3 % af strømmen ved 230 V.",
    },
  ],
  sources: [
    { name: "Apple — MacBook Pro 14-inch (M5) Product Environmental Report, oktober 2025", url: "https://www.apple.com/environment/pdf/products/notebooks/MacBook_Pro_14-inch_M5_PER_Oct2025.pdf" },
    { name: "Apple — MacBook Pro (M5 Pro or M5 Max) Product Environmental Report, marts 2026", url: "https://www.apple.com/environment/pdf/products/notebooks/MacBook_Pro_M5_Pro_or_M5_Max_PER_Mar2026.pdf" },
    { name: "Apple Support — MacBook Pro (14\", M5), tekniske specifikationer", url: "https://support.apple.com/da-dk/125405" },
    { name: "Apple Support — MacBook Pro (14\", M5 Pro eller M5 Max), tekniske specifikationer", url: "https://support.apple.com/da-dk/126318" },
    { name: "Apple Support — MacBook Pro (16\", M5 Pro eller M5 Max), tekniske specifikationer", url: "https://support.apple.com/da-dk/126319" },
  ],
  variants: [
    { name: "14\" M5", watts: { off: 0.15, sleep: 0.29, idle: 3.92 }, adapterNoLoadW: 0.09, adapterEfficiency: 0.913, adapterW: 70, batteryWh: 72.4, source: 0 },
    { name: "14\" M5 Pro/Max", watts: { off: 0.15, sleep: 0.31, idle: 4.52 }, adapterNoLoadW: 0.09, adapterEfficiency: 0.913, adapterW: 70, batteryWh: 72.4, source: 1 },
    { name: "16\" M5 Pro/Max", watts: { off: 0.22, sleep: 0.41, idle: 7.18 }, adapterNoLoadW: 0.13, adapterEfficiency: 0.913, adapterW: 140, batteryWh: 99.6, source: 1 },
  ],
  publishDate: "2026-11-23",
  updated: "2026-11-22",
};

export default macbookProM5;
