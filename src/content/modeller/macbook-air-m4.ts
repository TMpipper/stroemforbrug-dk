import type { ModelData } from "@/lib/models";

const macbookAirM4: ModelData = {
  slug: "macbook-air-m4",
  parent: "laptop",
  brand: "Apple",
  name: "MacBook Air M4",
  released: "2025-03",
  synonyms: ["macbook air 2025", "macbook air m4 13", "macbook air m4 15", "mba m4", "macbook air 13 tommer", "macbook air 15 tommer"],
  title: "MacBook Air M4 strømforbrug (2026) → watt, kWh og pris",
  description:
    "MacBook Air M4 i 13 og 15 tommer: Apples egne watt-tal ved 230 V, kWh om året, hvad én fuld opladning koster, og hvor lidt den bruger på dvale.",
  intro:
    "Selv med daglig brug hele året er det en af de billigste ting i hjemmet at have tændt — et køleskab bruger typisk tyve gange så meget.",
  content: `<h2>Hvor mange watt bruger en MacBook Air M4?</h2>
<p>Apple oplyser selv, hvad maskinen trækker fra stikkontakten i hver tilstand, målt ved 230 volt som i en dansk stikkontakt. Den 13" model bruger 3,63 W, når den står tændt i tomgang med skærmen tændt, og den 15" model 4,37 W — forskellen er næsten udelukkende den større skærm. I dvale med låget lukket bruger begge 0,29 W, og helt slukket 0,16 W. Tallene er målt efter ENERGY STAR-programmets metode, hvor skærmens lysstyrke er låst, og automatisk lysstyrke er slået fra.</p>
<p>Tomgangstallet er et gulv, ikke et loft. Skriver du mails, læser nyheder eller sidder i et videomøde, ligger forbruget lidt over tomgang. Eksporterer du video, spiller eller kompilerer kode, stiger det, men aldrig over hvad opladeren kan levere: 30 W eller 35 W for 13" og 35 W for 15". Fordi M4-chippen ikke har nogen blæser og skruer ned for farten, når den bliver varm, holder MacBook Air sig også under tung last langt fra en stationær gaming-pc.</p>

<h2>Hvad koster en MacBook Air M4 om året i strøm?</h2>
<p>Tabellen ovenfor regner med en fast profil, som er den samme for alle bærbare på siden: seks timer tændt om dagen og dvale resten af døgnet, alle årets dage. Det er mere, end de fleste bruger en privat bærbar, men mindre end en kontorarbejdsdag med overarbejde. Resultatet er under 12 kWh om året for begge størrelser. Til sammenligning bruger et typisk køleskab omkring 200 kWh om året, og en ældre stationær computer med skærm let 150–300 kWh.</p>
<p>Prisen er regnet med månedens marginalpris, altså hvad én kWh ekstra koster dig inklusive nettarif, afgifter og moms, men uden abonnement. Fordi tallene er så små, betyder det mere for regningen, om du lader opladeren sidde i stikket, og hvor lysstærk skærmen er, end hvilken model du vælger.</p>

<h2>Hvad koster det at oplade en MacBook Air M4?</h2>
<p>Batteriet rummer 53,8 Wh i 13" og 66,5 Wh i 15". Ingen oplader er tabsfri: Apples egen måling viser, at 13"-modellens oplader omsætter 88,8 % af strømmen fra stikkontakten til strøm i batteriet ved 230 V, og 15"-modellens 86,8 %. En fuld opladning fra tomt til fuldt trækker derfor omkring 0,06 kWh fra stikket for 13" og knap 0,08 kWh for 15" — en udgift i øre, ikke i kroner. Selv hvis du lader helt op hver eneste dag, bliver det i størrelsesordenen {{kr 22-28}} om året.</p>
<p>I praksis lader de fleste ikke fra nul. macOS kan holde batteriet på 80 % med optimeret opladning, hvilket skåner batteriet og flytter den sidste del af opladningen til et tidspunkt, hvor maskinen alligevel står tilsluttet. Det ændrer ikke meget på regningen, men det forlænger batteriets levetid — og et batteri, der holder længere, er den største miljøgevinst ved en bærbar.</p>

<h2>Opladeren i stikket: standby, der aldrig slukker</h2>
<p>En oplader, der sidder i væggen uden at være tilsluttet maskinen, bruger stadig lidt: Apple har målt 0,08 W for den medfølgende 30 W-oplader og 0,09 W for den 35 W med to porte. Over et år er det mindre end 1 kWh. Det er langt under, hvad ældre opladere bruger, og ikke en grund til at hive stikket ud hver aften — men har du en skuffe med gamle, uidentificerede opladere i stikdåser, kan de bruge mere, og de er værd at fjerne. Læs mere om <a href="/standby/">standby-forbrug i hjemmet</a>.</p>

<h2>13 eller 15 tommer — hvad betyder størrelsen for forbruget?</h2>
<p>Den største skærm koster omkring 0,7 W mere i tomgang, og det større batteri tager længere tid at fylde. Over et år løber forskellen op i et par kWh — under en tier i strøm. Vælg derfor størrelsen efter, hvad du har brug for; forbruget er ikke et argument. Det samme gælder ved valget mellem M4 og den nyere M5: Apples tal for M5 ligger i samme leje, fordi skærmen er den største forbruger ved let arbejde.</p>

<h2>MacBook Air M4 sammenlignet med andre computere</h2>
<p>En bærbar med Apples egne chips er blandt de mest strømøkonomiske computere, man kan købe. En stationær <a href="/gaming-pc/">gaming-pc</a> kan trække flere hundrede watt under spil, og en almindelig <a href="/computer/">stationær computer</a> med ekstern skærm bruger typisk mange gange så meget som en MacBook Air ved samme arbejde. Overvejer du at skifte en gammel stationær ud, er strømbesparelsen reel, men den tjener aldrig maskinen hjem alene — regn hellere med, at du får en stille maskine, der kan arbejde fra batteri en hel dag.</p>
<p>Vil du regne på din egen brug, kan du bruge <a href="/beregner/">beregneren</a> med maskinens watt-tal og dine egne timer. Siden om <a href="/laptop/">bærbare computeres strømforbrug</a> sammenligner typerne generelt.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger en MacBook Air M4?",
      answer: "Ifølge Apples egne målinger ved 230 V bruger 13\"-modellen 3,63 W tændt i tomgang med skærmen tændt og 15\"-modellen 4,37 W. I dvale bruger begge 0,29 W og slukket 0,16 W. Under tung last kan den trække op til opladerens effekt: 30 W eller 35 W.",
    },
    {
      question: "Hvad koster det at oplade en MacBook Air M4?",
      answer: "En fuld opladning trækker omkring 0,06 kWh fra stikket for 13\" og 0,08 kWh for 15\", når opladerens tab er medregnet. Det koster ca. {{oere 0,06}} for 13\" og {{oere 0,08}} for 15\" ved månedens elpris.",
    },
    {
      question: "Hvor meget strøm bruger en MacBook Air M4 om året?",
      answer: "Med seks timers brug om dagen og dvale resten af døgnet bruger 13\" omkring 10 kWh og 15\" omkring 11–12 kWh om året. Det svarer til {{kr 10-12}} om året.",
    },
    {
      question: "Bruger MacBook Air M4 strøm, når den er slukket?",
      answer: "Ja, men meget lidt: 0,16 W slukket og 0,29 W i dvale ifølge Apple. Lader du den stå i dvale et helt år, bliver det omkring 2,5 kWh, svarende til {{kr 2,5}}.",
    },
    {
      question: "Skal jeg tage opladeren ud af stikket?",
      answer: "Det gør næppe en mærkbar forskel. Apples 30 W-oplader bruger 0,08 W uden last — under 1 kWh om året, svarende til {{kr 0,7}}. Gamle opladere af ukendt mærke kan bruge mere og er værd at fjerne.",
    },
  ],
  sources: [
    { name: "Apple — MacBook Air (M4) Product Environmental Report, marts 2025", url: "https://www.apple.com/environment/pdf/products/notebooks/M4_MacBook_Air_PER_March2025.pdf" },
    { name: "Apple Support — MacBook Air (13-inch, M4, 2025), tekniske specifikationer", url: "https://support.apple.com/en-gb/122209" },
    { name: "Apple Support — MacBook Air (15-inch, M4, 2025), tekniske specifikationer", url: "https://support.apple.com/en-gb/122210" },
  ],
  variants: [
    { name: "13\" M4", watts: { off: 0.16, sleep: 0.29, idle: 3.63 }, adapterNoLoadW: 0.08, adapterEfficiency: 0.888, adapterW: 30, batteryWh: 53.8, source: 0 },
    { name: "15\" M4", watts: { off: 0.16, sleep: 0.29, idle: 4.37 }, adapterNoLoadW: 0.09, adapterEfficiency: 0.868, adapterW: 35, batteryWh: 66.5, source: 0 },
  ],
  publishDate: "2026-11-22",
  updated: "2026-11-22",
};

export default macbookAirM4;
