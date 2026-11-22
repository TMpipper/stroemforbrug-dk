import type { ModelData } from "@/lib/models";

const macbookProM6: ModelData = {
  slug: "macbook-pro-m6",
  parent: "laptop",
  brand: "Apple",
  name: "MacBook Pro M6",
  released: "2026-10",
  synonyms: ["macbook pro m6 14", "mbp m6", "macbook pro 14 2026", "macbook pro m6 oplader", "ny macbook pro m6", "macbook pro oktober 2026"],
  title: "MacBook Pro M6 strømforbrug (2026) → tomgang og ladning",
  description:
    "MacBook Pro 14 tommer med M6 fra oktober 2026: Apples watt ved 230 V, kWh om året, pris pr. opladning, og hvordan den står mod M5 og M4.",
  intro:
    "Den nyeste chip gør ikke tomgangen billigere — M6 ligger på linje med M4 og M5 — men opladeren, Apple har målt med, bruger mindre, når den bare sidder i stikket.",
  content: `<h2>Hvor mange watt bruger en MacBook Pro M6?</h2>
<p>MacBook Pro 14" med M6 kom i oktober 2026, og Apples miljørapport oplyser forbruget målt ved 230 volt. Tændt i tomgang med skærmen tændt bruger den 4,07 W, i dvale 0,29 W og helt slukket 0,17 W. Målingen er lavet efter ENERGY STAR-programmets metode med fuldt opladet batteri, fast lysstyrke uden automatisk justering og wifi tilsluttet. Apple oplyser, at maskinen bruger 55 % mindre energi end ENERGY STAR-kravet for en computer af den type.</p>
<p>M6 findes indtil videre kun som 14". Der er ingen 16" med M6 og ingen M6 Pro eller M6 Max i rapporten, så tallene her gælder alene den 14" model. Har du brug for den store skærm, er det <a href="/laptop/macbook-pro-m5/">MacBook Pro M5</a> med M5 Pro eller M5 Max, du skal se på.</p>

<h2>Hvad tallet betyder i hverdagen</h2>
<p>Fire watt i tomgang er det, maskinen bruger, mens den står klar med skærmen tændt og intet laver. Skriver du, læser eller sidder i videomøder, ligger forbruget lidt over. Ved tungere opgaver som videoeksport eller kompilering kan M6 trække langt mere, og MacBook Pro har blæser, så den kan holde høj fart i lang tid. Loftet er, hvad strømforsyningen kan levere. Apple har målt med en 70 W-oplader, og en time med maskinen kørende for fuldt på den bliver højst omkring 0,077 kWh fra stikket, når opladerens tab er regnet med — {{oere 0,077}} ved månedens elpris.</p>
<p>Med vores faste profil for bærbare, seks timer tændt og dvale resten af døgnet, ender MacBook Pro M6 på knap 11 kWh om året. Dvale står for godt 1,9 kWh af det, fordi maskinen tilbringer tre fjerdedele af døgnet med låget lukket.</p>

<h2>Opladeren sælges separat</h2>
<p>I Danmark ligger der ingen strømforsyning i æsken; kun kablet fra USB-C til MagSafe 3. Apple anbefaler mindst 60 W for at lade og 96 W eller mere for hurtigopladning. Tabellens tal for tab og tomgang gælder den 70 W-oplader, Apple har målt med: den omsætter 90,8 % af strømmen fra stikkontakten ved 230 V og bruger 0,06 W uden last. Det er lidt mindre effektivt under opladning end den 70 W-oplader, Apple målte med M5 (91,3 %), men den bruger en tredjedel mindre, når den sidder i stikket uden at lade: 0,06 W mod 0,09 W.</p>
<p>Genbruger du en oplader fra en tidligere Mac, er det helt fint, så længe den kan levere nok. En svagere oplader end anbefalet lader langsommere og kan ikke følge med under tung last, så maskinen tærer på batteriet, mens den er tilsluttet. Opladere af ukendt mærke kan have større tab end Apples, og så gælder tallene i tabellen ikke.</p>

<h2>Hvad koster det at oplade en MacBook Pro M6?</h2>
<p>Batteriet rummer 72,4 Wh ifølge Apples specifikationer, det samme som i de 14" modeller med M4 og M5. Med opladerens tab regnet med trækker en fuld opladning omkring 0,080 kWh fra stikket. Det koster {{oere 0,08}} ved månedens elpris. Lader du helt op hver eneste dag i et år, bliver det omkring 29 kWh, svarende til {{kr 29}} — et loft, få kommer i nærheden af, fordi de fleste lader fra halvt og ofte arbejder med opladeren tilsluttet.</p>

<h2>M6 mod M5 og M4: tre generationer på samme skærm</h2>
<p>Fordi den 14" skærm og batteriet er de samme, er de tre generationer lette at sammenligne. Apple har målt 14" M4 til 4,03 W i tomgang, 14" M5 til 3,92 W og 14" M6 til 4,07 W. Dvale er 0,26 W, 0,29 W og 0,29 W. Forskellene er så små, at de ligger inden for, hvad to målinger af samme maskine kan svinge, og over et år er der mindre end en halv kWh imellem dem. Det understreger, at det er skærmen, ikke chippen, der bestemmer forbruget ved let arbejde. Se tallene for <a href="/laptop/macbook-pro-m4/">MacBook Pro M4</a> og for den nye <a href="/laptop/macbook-pro-proled-xdr/">MacBook Pro med PROLED XDR-skærm</a>, der kom samtidig.</p>
<p>Det, M6 kan, er at blive hurtigere færdig. En opgave, der tager kortere tid under fuld last, bruger ofte færre kWh i alt, selv om effekten undervejs er den samme. Det er dog små mængder strøm, og det bør ikke afgøre, om du skifter en velfungerende M4 eller M5 ud.</p>

<h2>Tre måder at holde forbruget nede</h2>
<p>Skru ned for lysstyrken, når du arbejder indendørs; XDR-skærmen kan lyse langt kraftigere end målingens niveau. Luk låget, når du går fra maskinen, i stedet for at lade den stå med skærmen tændt. Og sørg for, at en ekstern skærm går i dvale samtidig, for den bruger typisk mere end selve MacBook'en. Vil du regne på dine egne timer, så brug <a href="/beregner/">beregneren</a>, og se siden om <a href="/laptop/">bærbare computeres strømforbrug</a> for en sammenligning med andre typer.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger en MacBook Pro M6?",
      answer: "Ifølge Apples målinger ved 230 V bruger MacBook Pro 14\" M6 4,07 W tændt i tomgang med skærmen tændt, 0,29 W i dvale og 0,17 W slukket. Under tung last kan den trække op til opladerens effekt.",
    },
    {
      question: "Hvad koster det at oplade en MacBook Pro M6?",
      answer: "En fuld opladning af det 72,4 Wh store batteri trækker omkring 0,080 kWh fra stikket, når opladerens tab er medregnet. Det koster ca. {{oere 0,08}} ved månedens elpris.",
    },
    {
      question: "Hvor meget strøm bruger MacBook Pro M6 om året?",
      answer: "Med seks timers brug om dagen og dvale resten af døgnet bruger den knap 11 kWh om året, svarende til {{kr 11}}.",
    },
    {
      question: "Bruger M6 mindre strøm end M5?",
      answer: "Ikke i tomgang. Apple har målt 14\" M6 til 4,07 W og 14\" M5 til 3,92 W. Forskellen er omkring en tredjedel kWh om året, under {{kr 0,4}}, og ligger inden for, hvad målinger kan svinge.",
    },
    {
      question: "Følger der en oplader med MacBook Pro M6?",
      answer: "Ikke i Danmark. Apple anbefaler mindst 60 W og 96 W til hurtigopladning. Den 70 W-oplader, Apple har målt med, omsætter 90,8 % af strømmen ved 230 V og bruger 0,06 W uden last.",
    },
  ],
  sources: [
    { name: "Apple — MacBook Pro 14-inch (M6) Product Environmental Report, oktober 2026", url: "https://www.apple.com/environment/pdf/products/notebooks/MacBook_Pro_14-inch_M6_PER_Oct2026.pdf" },
    { name: "Apple Support — MacBook Pro (14\", M6), tekniske specifikationer", url: "https://support.apple.com/da-dk/148300" },
  ],
  variants: [
    { name: "14\" M6", watts: { off: 0.17, sleep: 0.29, idle: 4.07 }, adapterNoLoadW: 0.06, adapterEfficiency: 0.908, adapterW: 70, batteryWh: 72.4, source: 0 },
  ],
  publishDate: "2026-11-26",
  updated: "2026-11-22",
};

export default macbookProM6;
