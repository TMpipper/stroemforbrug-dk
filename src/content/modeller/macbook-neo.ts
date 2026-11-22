import type { ModelData } from "@/lib/models";

const macbookNeo: ModelData = {
  slug: "macbook-neo",
  parent: "laptop",
  brand: "Apple",
  name: "MacBook Neo",
  released: "2026-03",
  synonyms: ["macbook neo a18 pro", "macbook neo 13", "billig macbook", "macbook neo 2026", "macbook neo oplader", "macbook neo batteri"],
  title: "MacBook Neo strømforbrug (2026) → watt, opladning og pris",
  description:
    "MacBook Neo med A18 Pro: Apples egne watt-tal ved 230 V, kWh om året, hvad en fuld opladning koster, og hvorfor den bruger mindre end MacBook Air.",
  intro:
    "Den bruger mindst af alle de Mac'er, vi har Apples tal for: under 3 W i tomgang og omkring 7 kWh om året med daglig brug.",
  content: `<h2>Hvor mange watt bruger MacBook Neo?</h2>
<p>MacBook Neo kom i marts 2026 som Apples billigste bærbare, bygget på A18 Pro-chippen fra iPhone. Apples miljørapport for maskinen oplyser forbruget målt ved 230 volt, som i en dansk stikkontakt: 2,77 W tændt i tomgang med skærmen tændt, 0,16 W i dvale og 0,13 W slukket. Tallene gælder både 256 GB- og 512 GB-udgaven.</p>
<p>Målingen følger ENERGY STAR-programmets metode: batteriet er fuldt opladet, skærmens lysstyrke er låst på et fastlagt niveau, automatisk lysstyrke er slået fra, og maskinen er på wifi. Ifølge Apple bruger MacBook Neo mindst 60 % mindre energi end ENERGY STAR-kravet.</p>
<p>Tomgang er et gulv. Skriver du, læser nyheder eller sidder i et videomøde, ligger forbruget lidt højere, og under tung last kan maskinen trække mere — men den er bygget til at lade med en oplader på 20 W, som Apple oplyser som minimum, og har ingen blæser.</p>

<h2>Hvad koster MacBook Neo om året?</h2>
<p>Vi regner alle bærbare med den samme profil: seks timer tændt om dagen og dvale resten af døgnet, alle årets dage. For MacBook Neo bliver det omkring 7 kWh om året, svarende til {{kr 7}}. Den største del, omkring 6 kWh, er de seks timer i tomgang; dvalen står for omkring 1 kWh.</p>
<p>Til sammenligning bruger en 13" <a href="/laptop/macbook-air-m4/">MacBook Air M4</a> 3,63 W i tomgang og omkring 10 kWh om året med samme profil. MacBook Neo sparer altså knap 3 kWh om året i forhold til Air — omkring {{kr 3}}. Det er ikke et argument for at vælge den ene frem for den anden, men det viser, at Neo med sin mindre chip og skærm er den mest strømøkonomiske af de Mac'er, vi har Apples tal for.</p>

<h2>Hvad koster det at oplade MacBook Neo?</h2>
<p>Batteriet rummer 36,5 Wh ifølge Apples tekniske specifikationer, mindre end MacBook Air's 53,8 Wh. Apple har målt forbruget med sin 20 W USB-C-oplader, som omsætter 87,8 % af strømmen fra stikkontakten til strøm i maskinen ved 230 V. En fuld opladning fra tomt til fuldt trækker derfor omkring 0,042 kWh fra stikket og koster {{oere 0,042}} ved månedens elpris.</p>
<p>Lader du helt op hver eneste dag i et år, bliver det omkring 15 kWh, svarende til {{kr 15}}. I praksis lader de fleste ikke fra nul, og macOS kan holde batteriet under fuld opladning med optimeret opladning, som skåner batteriet. Et batteri, der holder længere, er den største miljøgevinst ved en bærbar.</p>

<h2>Ingen oplader i æsken i Danmark</h2>
<p>I Danmark følger der kun et USB-C-kabel med; strømforsyningen sælges separat. Apple oplyser, at maskinen kræver mindst 20 W for at lade, og at den kan lade fra en USB-C-strømforsyning eller en anden USB PD-kilde. En oplader, du allerede har til telefonen eller en tablet, kan altså ofte bruges, hvis den leverer mindst 20 W. Læs mere om <a href="/mobil-opladning/">opladning af telefon og tablet</a>.</p>
<p>Apples egen 20 W-oplader bruger 0,04 W, når den sidder i stikkontakten uden maskinen — omkring 0,35 kWh om året. Det er så lidt, at det ikke er værd at tænke på. Ældre opladere af ukendt mærke kan bruge mere; dem kan du læse om på siden om <a href="/standby/">standby-forbrug</a>.</p>

<h2>MacBook Neo sammenlignet med andre Mac'er</h2>
<p>Ser man på tomgangstallet, ligger Neo under alle de andre Mac-bærbare på siden: 13" MacBook Air M4 bruger 3,63 W og 13" <a href="/laptop/macbook-air-m5/">MacBook Air M5</a> 3,69 W ifølge Apple. Forskellen skyldes især den mindre skærm og chippen. Neo har en 13" Liquid Retina-skærm med LED-baggrundsbelysning og 500 nits lysstyrke, og den er den største forbruger ved let arbejde: skruer du ned for lysstyrken, falder forbruget mere end ved noget andet, du kan gøre.</p>
<p>Til tungere arbejde som videoredigering eller spil har MacBook Air og MacBook Pro mere kraft, og de trækker mere under last. Til mail, browser, dokumenter og streaming er Neo nok — og den laveste strømregning blandt Apples nuværende bærbare.</p>

<h2>Gode råd</h2>
<ul>
<li>Lad automatisk lysstyrke være slået til, og skru ned for skærmen indendørs.</li>
<li>Luk låget i stedet for at lade maskinen stå tændt: dvale bruger 0,16 W mod 2,77 W i tomgang.</li>
<li>Brug en oplader på mindst 20 W med USB PD; en svagere oplader lader for langsomt eller slet ikke.</li>
</ul>
<p>Vil du regne på din egen brug, kan du bruge <a href="/beregner/">beregneren</a> med maskinens watt-tal. Siden om <a href="/laptop/">bærbare computeres strømforbrug</a> sammenligner typerne generelt.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger MacBook Neo?",
      answer: "Ifølge Apples egne målinger ved 230 V bruger MacBook Neo 2,77 W tændt i tomgang med skærmen tændt, 0,16 W i dvale og 0,13 W slukket.",
    },
    {
      question: "Hvad koster det at oplade MacBook Neo?",
      answer: "Batteriet er på 36,5 Wh. Med opladerens tab trækker en fuld opladning omkring 0,042 kWh fra stikket, svarende til {{oere 0,042}} ved månedens elpris.",
    },
    {
      question: "Hvor meget strøm bruger MacBook Neo om året?",
      answer: "Med seks timers brug om dagen og dvale resten af døgnet omkring 7 kWh om året, svarende til {{kr 7}}.",
    },
    {
      question: "Følger der en oplader med MacBook Neo?",
      answer: "Nej, i Danmark følger der kun et USB-C-kabel med. Apple oplyser, at den kræver mindst 20 W for at lade, og har målt forbruget med sin 20 W USB-C-oplader.",
    },
    {
      question: "Bruger MacBook Neo mindre strøm end MacBook Air?",
      answer: "Ja. MacBook Neo bruger 2,77 W i tomgang mod 3,63 W for 13\" MacBook Air M4 ifølge Apple. Over et år med seks timers brug om dagen er forskellen knap 3 kWh, svarende til {{kr 3}}.",
    },
  ],
  sources: [
    { name: "Apple — MacBook Neo Product Environmental Report, marts 2026", url: "https://www.apple.com/environment/pdf/products/notebooks/MacBook_Neo_PER_Mar2026.pdf" },
    { name: "Apple — MacBook Neo, tekniske specifikationer (Danmark)", url: "https://www.apple.com/dk/macbook-neo/specs/" },
  ],
  variants: [
    { name: "13\" A18 Pro", watts: { off: 0.13, sleep: 0.16, idle: 2.77 }, adapterNoLoadW: 0.04, adapterEfficiency: 0.878, adapterW: 20, batteryWh: 36.5, source: 0 },
  ],
  publishDate: "2026-11-24",
  updated: "2026-11-22",
};

export default macbookNeo;
