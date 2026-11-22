import type { ModelData } from "@/lib/models";

const macbookAirM5: ModelData = {
  slug: "macbook-air-m5",
  parent: "laptop",
  brand: "Apple",
  name: "MacBook Air M5",
  released: "2026-03",
  synonyms: ["macbook air 2026", "macbook air m5 13", "macbook air m5 15", "mba m5", "macbook air m5 oplader", "macbook air 15 m5"],
  title: "MacBook Air M5 strømforbrug (2026) → watt og opladning",
  description:
    "MacBook Air M5 i 13 og 15 tommer: Apples målte watt ved 230 V, kWh om året, prisen for én fuld opladning, og hvorfor opladeren ikke følger med.",
  intro:
    "En fuld opladning bruger mindre strøm end at koge en liter vand i elkedlen — og i dvale bruger M5 mindre end både M3 og M4 ifølge Apples egne målinger.",
  content: `<h2>Hvor mange watt bruger en MacBook Air M5?</h2>
<p>Apples miljørapport for MacBook Air M5 fra marts 2026 oplyser forbruget i tre tilstande, målt ved 230 volt som i en dansk stikkontakt. Den 13" model trækker 3,69 W, når den står tændt i tomgang med skærmen tændt, og den 15" model 4,31 W. I dvale med låget lukket ligger de på 0,24 W og 0,25 W, og helt slukket på 0,11 W og 0,12 W. Målingerne følger ENERGY STAR-metoden: skærmens lysstyrke er låst på et fast niveau, automatisk lysstyrke er slået fra, maskinen er på wifi, og batteriet er fuldt opladet, så der ikke går strøm til opladning under målingen.</p>
<p>Tallene beskriver en maskine, der venter på dig. Så snart du arbejder, stiger forbruget. Mails, dokumenter og browsing ligger kun lidt over tomgang, mens videoredigering, spil og store eksporter får M5-chippen til at trække langt mere. Fordi MacBook Air ikke har nogen blæser, skruer chippen selv ned for farten, når kabinettet bliver varmt. Det giver et naturligt loft over, hvor meget strøm den kan omsætte over længere tid, og det er grunden til, at en Air aldrig kommer i nærheden af en stationær maskine under tung last.</p>

<h2>Opladeren følger ikke med i Danmark</h2>
<p>MacBook Air M5 sælges i Danmark uden strømforsyning. I æsken ligger kun kablet fra USB-C til MagSafe 3. Apple har målt med sin 40 W Dynamic Power Adapter, som kan levere op til 60 W, når maskinen beder om det, og det er den oplader, tallene for tab og tomgangsforbrug i tabellen hører til. Ved 230 V omsatte den 91,1 % af strømmen fra stikkontakten til strøm i maskinen, og uden noget tilsluttet brugte den 0,03 W. Det er bedre end de 30 og 35 W-opladere, der fulgte med M4-generationen, og som lå på 86,8–88,8 % og 0,08–0,09 W.</p>
<p>Lader du med en oplader, du har i forvejen, gælder Apples tal ikke nødvendigvis. En god USB-C-oplader fra en kendt producent med USB Power Delivery ligger typisk tæt på, mens billige opladere uden mærke kan have større tab og bruge mærkbart mere, mens de sidder i stikket uden at lade. Apple oplyser, at 13" kræver mindst 30 W og 15" mindst 35 W for at lade, og at hurtigopladning kræver 70 W eller mere. En større oplader bruger ikke mere strøm i sig selv; den kan blot levere mere, når maskinen har brug for det.</p>

<h2>Hvad koster det at oplade en MacBook Air M5?</h2>
<p>Batteriet rummer 53,8 Wh i 13" og 66,5 Wh i 15" ifølge Apples tekniske specifikationer. Med opladerens tab regnet med trækker en opladning fra tomt til fuldt omkring 0,059 kWh fra stikkontakten for 13" og 0,073 kWh for 15". Det svarer til {{oere 0,059}} og {{oere 0,073}} ved månedens elpris. Lader du helt op hver eneste dag i et år, bliver det omkring 22 og 27 kWh, altså {{kr 22-27}} om året.</p>
<p>Så meget lader de færreste. Bruger du maskinen ved skrivebordet med opladeren tilsluttet, går strømmen direkte til maskinen, og batteriet står stille. macOS kan desuden holde batteriet på 80 % med optimeret opladning. Det flytter ikke mange kWh, men det skåner batteriet, og et batteri, der holder et par år længere, er den største miljøgevinst ved en bærbar.</p>

<h2>Årsforbruget ligger under 12 kWh</h2>
<p>Tabellen øverst regner med samme faste profil for alle bærbare på siden: seks timer tændt om dagen og dvale resten af døgnet, alle årets dage. Med den ender 13" på knap 10 kWh om året og 15" på lidt over 11 kWh. Dvale står kun for en lille del af det. Atten timer dagligt ved 0,24 W bliver omkring 1,6 kWh på et år — under {{kr 1,6}}.</p>
<p>Det betyder, at skærmen er den største enkeltpost ved almindeligt arbejde. Skruer du lysstyrken et par trin ned, sparer du mere, end valget mellem 13 og 15 tommer gør. Bruger du en ekstern skærm, flytter forbruget derhen: en stor skærm bruger ofte flere gange så meget som selve maskinen, og den er værd at sætte på dvale med resten. Læs mere om <a href="/skaerm/">skærmens strømforbrug</a>.</p>

<h2>MacBook Air M5 sammenlignet med M4</h2>
<p>Apples egne tal viser, at M5 ikke bruger mindre i tomgang end M4. Den 13" M4 målte 3,63 W og M5 3,69 W, og for 15" er tallene 4,37 W og 4,31 W. Forskellen er under en tiendedel watt og forsvinder i målingens usikkerhed. Det giver mening: ved let arbejde er det skærmen, ikke chippen, der bruger strømmen, og skærmene er de samme. Gevinsten ligger andre steder. Dvaleforbruget er faldet fra 0,29 W til 0,24–0,25 W, slukket fra 0,16 W til 0,11–0,12 W, og opladeren taber mindre. Se tallene for <a href="/laptop/macbook-air-m4/">MacBook Air M4</a> og for den større <a href="/laptop/macbook-pro-m5/">MacBook Pro M5</a>, der har samme chip, men en lysere skærm og blæser.</p>
<p>Står du med en ældre Intel-MacBook eller en stationær computer, er springet langt større. Men strømmen tjener aldrig en ny maskine hjem alene: med et årsforbrug omkring 10 kWh er der simpelthen ikke ret meget at spare.</p>

<h2>Gode vaner med en MacBook Air M5</h2>
<p>Luk låget i stedet for at slukke, hvis du bruger maskinen hver dag. Dvale koster næsten ingenting og sparer dig for opstarten. Slukker du den over en længere ferie, falder forbruget fra 0,24 W til 0,11 W. Tag gerne gamle opladere uden mærke ud af stikkontakterne; Apples egen 40 W-oplader bruger så lidt uden last, at den ikke er værd at tænke på. Vil du regne på dit eget mønster, kan du bruge <a href="/beregner/">beregneren</a> med watt-tallene ovenfor, og siden om <a href="/laptop/">bærbare computeres strømforbrug</a> sammenligner typerne generelt.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger en MacBook Air M5?",
      answer: "Ifølge Apples målinger ved 230 V bruger 13\" 3,69 W og 15\" 4,31 W tændt i tomgang med skærmen tændt. I dvale bruger de 0,24 W og 0,25 W, og slukket 0,11 W og 0,12 W. Under tung last trækker den mere, men begrænses af opladeren og af, at den ikke har blæser.",
    },
    {
      question: "Følger der en oplader med MacBook Air M5 i Danmark?",
      answer: "Nej. I Danmark ligger kun USB-C til MagSafe 3-kablet i æsken. Apple har målt med sin 40 W Dynamic Power Adapter (op til 60 W), som omsætter 91,1 % af strømmen ved 230 V og bruger 0,03 W uden last. 13\" kræver mindst 30 W og 15\" mindst 35 W for at lade.",
    },
    {
      question: "Hvad koster det at oplade en MacBook Air M5?",
      answer: "En fuld opladning trækker omkring 0,059 kWh fra stikket for 13\" og 0,073 kWh for 15\" med Apples oplader. Det koster ca. {{oere 0,059}} og {{oere 0,073}} ved månedens elpris.",
    },
    {
      question: "Hvor meget strøm bruger MacBook Air M5 om året?",
      answer: "Med seks timers brug om dagen og dvale resten af døgnet bruger 13\" knap 10 kWh og 15\" lidt over 11 kWh om året. Det svarer til {{kr 10-11}} om året.",
    },
    {
      question: "Bruger MacBook Air M5 mindre strøm end M4?",
      answer: "I tomgang er de næsten ens: 3,69 W mod 3,63 W for 13\" og 4,31 W mod 4,37 W for 15\". M5 bruger lidt mindre i dvale og slukket, og Apples oplader taber mindre. Over et år er forskellen under 1 kWh, under {{kr 1}}.",
    },
  ],
  sources: [
    { name: "Apple — MacBook Air (M5) Product Environmental Report, marts 2026", url: "https://www.apple.com/environment/pdf/products/notebooks/MacBook_Air_M5_PER_Mar2026.pdf" },
    { name: "Apple Support — MacBook Air (13\", M5), tekniske specifikationer", url: "https://support.apple.com/da-dk/126320" },
    { name: "Apple Support — MacBook Air (15\", M5), tekniske specifikationer", url: "https://support.apple.com/da-dk/126321" },
  ],
  variants: [
    { name: "13\" M5", watts: { off: 0.11, sleep: 0.24, idle: 3.69 }, adapterNoLoadW: 0.03, adapterEfficiency: 0.911, adapterW: 40, batteryWh: 53.8, source: 0 },
    { name: "15\" M5", watts: { off: 0.12, sleep: 0.25, idle: 4.31 }, adapterNoLoadW: 0.03, adapterEfficiency: 0.911, adapterW: 40, batteryWh: 66.5, source: 0 },
  ],
  publishDate: "2026-11-23",
  updated: "2026-11-22",
};

export default macbookAirM5;
