import type { ModelData } from "@/lib/models";

const macbookProProledXdr: ModelData = {
  slug: "macbook-pro-proled-xdr",
  parent: "laptop",
  brand: "Apple",
  name: "MacBook Pro PROLED XDR",
  released: "2026-10",
  synonyms: ["macbook pro oled", "macbook pro proled", "macbook pro proled xdr 16", "macbook pro proled xdr 14", "macbook pro oled 2026", "macbook pro 14 oled"],
  title: "MacBook Pro PROLED XDR strømforbrug (2026) → watt og pris",
  description:
    "MacBook Pro med PROLED XDR-skærm i 14 og 16 tommer: Apples watt ved 230 V, kWh om året, pris pr. opladning og hvad OLED gør ved forbruget.",
  intro:
    "Den nye OLED-skærm gør især den store model mere sparsom: 16\" PROLED bruger næsten 2 W mindre i tomgang end 16\" MacBook Pro M5 med den hidtidige skærm.",
  content: `<h2>Hvor mange watt bruger MacBook Pro med PROLED XDR?</h2>
<p>MacBook Pro med PROLED XDR-skærm kom i oktober 2026 i 14" og 16" med M5 Pro eller M5 Max. Apples miljørapport oplyser forbruget for begge størrelser målt ved 230 volt. Den 14" model bruger 4,16 W tændt i tomgang med skærmen tændt, 0,37 W i dvale og 0,16 W slukket. Den 16" bruger 5,30 W i tomgang, 0,39 W i dvale og 0,15 W slukket. Ligesom for de tidligere M5 Pro- og M5 Max-modeller har Apple én tabel pr. skærmstørrelse, der dækker begge chips.</p>
<p>Målingen følger ENERGY STAR-metoden: batteriet er fuldt opladet, skærmens lysstyrke er låst på et fast niveau, automatisk lysstyrke er slået fra, og maskinen er på wifi. Apple oplyser, at 16" bruger 55 % mindre energi end ENERGY STAR-kravet.</p>

<h2>Hvorfor OLED sparer strøm — og hvornår den ikke gør</h2>
<p>På en almindelig LCD-skærm sidder der lyskilder bag panelet, som skal lyse, uanset hvad skærmen viser. På en OLED-skærm lyser hver enkelt pixel selv, og en sort pixel er slukket. Derfor afhænger forbruget af, hvad du ser på. Mørke flader, mørk tilstand i macOS og film med mørke scener koster mindre, mens et hvidt dokument på fuld skærm kræver, at næsten alle pixels lyser.</p>
<p>Apples tal viser effekten tydeligst på den store skærm. Den 16" MacBook Pro med M5 Pro eller M5 Max og den hidtidige skærm målte 7,18 W i tomgang; 16" PROLED måler 5,30 W, altså næsten 2 W mindre med samme chips. For 14" er forskellen mindre: 4,52 W mod 4,16 W. Over et år med seks timers daglig brug svarer det til omkring 4 kWh for 16" og under 1 kWh for 14". Husk, at målingen er lavet med ENERGY STAR-metodens fastlagte skærmindhold; arbejder du mest i lyse programmer, kan forskellen være mindre.</p>

<h2>Dvale bruger lidt mere</h2>
<p>Ét sted går tallene den anden vej. Den 14" PROLED bruger 0,37 W i dvale mod 0,31 W for 14" med den hidtidige skærm, mens 16" ligger nogenlunde ens med 0,39 W mod 0,41 W. Over et år med atten timers dvale om dagen er merforbruget for 14" omkring 0,4 kWh — mindre end besparelsen i tomgang, så samlet ender 14" PROLED stadig lidt under 14" med M5 Pro eller M5 Max og den hidtidige skærm i vores profil.</p>

<h2>Opladeren og hvad en opladning koster</h2>
<p>Der følger ingen strømforsyning med i Danmark; i æsken ligger kun kablet fra USB-C til MagSafe 3. Apple har målt 14" med en 70 W-oplader, der omsætter 90,8 % af strømmen ved 230 V og bruger 0,06 W uden last, og 16" med en 140 W-oplader, der omsætter 91,3 % og bruger 0,13 W uden last. Apple anbefaler mindst 70 W for 14" og mindst 94 W for 16", og 140 W eller mere for at hurtigoplade 16".</p>
<p>Batteriet rummer 72,6 Wh i 14" og 100 Wh i 16" ifølge Apples specifikationer. En fuld opladning trækker derfor omkring 0,080 kWh fra stikket for 14" og 0,110 kWh for 16". Det koster {{oere 0,08}} og {{oere 0,11}} ved månedens elpris. Selv en fuld opladning hver dag i et år bliver kun 29–40 kWh, svarende til {{kr 29-40}}.</p>

<h2>Årsforbruget og tung last</h2>
<p>Med vores faste profil for bærbare — seks timer tændt og dvale resten af døgnet — bruger 14" PROLED godt 11,5 kWh om året og 16" godt 14 kWh. Af de 16" MacBook Pro-modeller på siden — M4 Pro, M4 Max, M5 Pro/M5 Max og PROLED — har PROLED det laveste årsforbrug med Apples egne tal.</p>
<p>Under last er det chippen, der bestemmer, og her er M5 Pro og M5 Max de samme som i de tidligere modeller. Loftet er opladerens effekt, og en time med 16" kørende for fuldt på 140 W-opladeren bliver højst omkring 0,15 kWh fra stikket — {{oere 0,15}}.</p>

<h2>PROLED, M5 eller M6?</h2>
<p>Står du og vælger, er strømforbruget ikke det, der skiller. Den 14" <a href="/laptop/macbook-pro-m6/">MacBook Pro M6</a> bruger 4,07 W i tomgang, 14" PROLED 4,16 W, og den 14" fra <a href="/laptop/macbook-pro-m5/">MacBook Pro M5</a>-familien med M5 Pro eller M5 Max 4,52 W. Forskellen mellem dem er under 1,5 kWh om året. For 16" er PROLED klart den mest sparsomme af de to 16" modeller med M5 Pro og M5 Max, men også her taler vi om nogle få kWh om året.</p>
<p>Vil du holde forbruget nede, så brug mørk tilstand, lad automatisk lysstyrke være slået til, og luk låget, når du går fra maskinen. Siden om <a href="/laptop/">bærbare computeres strømforbrug</a> sammenligner med andre typer, og <a href="/skaerm/">skærmsiden</a> forklarer, hvad en ekstern skærm lægger til.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger MacBook Pro med PROLED XDR?",
      answer: "Ifølge Apples målinger ved 230 V bruger 14\" 4,16 W og 16\" 5,30 W tændt i tomgang med skærmen tændt. I dvale bruger de 0,37 W og 0,39 W, og slukket 0,16 W og 0,15 W. Tallene gælder både M5 Pro og M5 Max.",
    },
    {
      question: "Bruger en OLED-skærm mindre strøm?",
      answer: "Ofte, men det afhænger af indholdet. Apple har målt 16\" PROLED til 5,30 W i tomgang mod 7,18 W for 16\" MacBook Pro M5 med den hidtidige skærm. Mørke flader sparer mest; hvide dokumenter på fuld skærm sparer mindre.",
    },
    {
      question: "Hvad koster det at oplade en MacBook Pro PROLED XDR?",
      answer: "En fuld opladning trækker omkring 0,080 kWh for 14\" og 0,110 kWh for 16\", når opladerens tab er medregnet. Det koster ca. {{oere 0,08}} og {{oere 0,11}} ved månedens elpris.",
    },
    {
      question: "Hvor meget strøm bruger MacBook Pro PROLED XDR om året?",
      answer: "Med seks timers brug om dagen og dvale resten af døgnet bruger 14\" godt 11,5 kWh og 16\" godt 14 kWh om året, svarende til {{kr 11,5-14}}.",
    },
    {
      question: "Følger der en oplader med i Danmark?",
      answer: "Nej. Apple anbefaler mindst 70 W til 14\" og 94 W til 16\". Apples egne målinger er lavet med 70 W- og 140 W-opladerne, der omsætter 90,8 % og 91,3 % af strømmen ved 230 V.",
    },
  ],
  sources: [
    { name: "Apple — MacBook Pro with PROLED XDR Display Product Environmental Report, oktober 2026", url: "https://www.apple.com/environment/pdf/products/notebooks/MacBook_Pro_with_PROLED_XDR_Display_PER_Oct2026.pdf" },
    { name: "Apple Support — MacBook Pro (14\" PROLED XDR, M5 Pro eller M5 Max), tekniske specifikationer", url: "https://support.apple.com/da-dk/148301" },
    { name: "Apple Support — MacBook Pro (16\" PROLED XDR, M5 Pro eller M5 Max), tekniske specifikationer", url: "https://support.apple.com/da-dk/148302" },
  ],
  variants: [
    { name: "14\" M5 Pro/Max", watts: { off: 0.16, sleep: 0.37, idle: 4.16 }, adapterNoLoadW: 0.06, adapterEfficiency: 0.908, adapterW: 70, batteryWh: 72.6, source: 0 },
    { name: "16\" M5 Pro/Max", watts: { off: 0.15, sleep: 0.39, idle: 5.3 }, adapterNoLoadW: 0.13, adapterEfficiency: 0.913, adapterW: 140, batteryWh: 100, source: 0 },
  ],
  publishDate: "2026-11-26",
  updated: "2026-11-22",
};

export default macbookProProledXdr;
