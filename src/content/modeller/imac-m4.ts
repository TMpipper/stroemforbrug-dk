import type { ModelData } from "@/lib/models";

const imacM4: ModelData = {
  slug: "imac-m4",
  parent: "computer",
  brand: "Apple",
  name: "iMac M4",
  released: "2024-10",
  synonyms: ["imac 2024", "imac 24 m4", "imac m4 watt", "imac 24 tommer", "imac m4 fire porte", "apple imac m4"],
  title: "iMac M4 strømforbrug (2026) → watt med skærm og pris",
  description:
    "iMac M4 fra 2024 med 24\" skærm: Apples watt-tal ved 230 V, kWh om året med skærmen regnet med, dvale og hvad den eksterne strømforsyning bruger.",
  intro:
    "Tallet ser højt ud ved siden af en Mac mini, men her er skærmen med — og den står for langt det meste af forbruget.",
  content: `<h2>Hvor mange watt bruger en iMac M4?</h2>
<p>Apples miljørapport for iMac fra oktober 2024 oplyser forbruget ved 230 volt: 20,9 W tændt i tomgang med skærmen tændt, 0,59 W i dvale og 0,29 W slukket. Tallet gælder både modellen med to porte og modellen med fire porte, som deler samme tabel. Skærmens lysstyrke er under målingen sat til det niveau, ENERGY STAR-programmet foreskriver, automatisk lysstyrke er slået fra, og maskinen er forbundet til wifi.</p>
<p>Godt 20 W lyder af meget, når en MacBook Air bruger under 5 W i tomgang. Forskellen er skærmen. iMac har et 24" panel med 4,5K-opløsning, og et så stort panel skal oplyses hele vejen. M4-chippen bruger i tomgang kun nogle få watt, så langt det meste af de 20,9 W går til lyset bag skærmen. Det betyder også, at lysstyrken er den knap, der flytter forbruget mest: skruer du ned, falder forbruget mærkbart, og skruer du op til fuld lysstyrke, stiger det tilsvarende.</p>

<h2>Hvad koster en iMac M4 om året?</h2>
<p>Siden regner alle stationære computere med samme profil: otte timer tændt om dagen og dvale resten af døgnet, alle årets dage. For iMac M4 giver det omkring 64 kWh om året, svarende til {{kr 64}} ved månedens marginalpris. De otte timers tomgang står for godt 60 kWh, og dvale for knap 3,5 kWh.</p>
<p>Hvis iMac'en er familiens fælles computer og står tændt fra morgen til aften, bliver tallet større. Tolv timer om dagen i tomgang giver alene omkring 92 kWh om året, altså {{kr 92}}. Lader du skærmen slukke efter få minutters inaktivitet, mens selve maskinen fortsat er tændt, sparer du det meste af forskellen, fordi det er skærmen, der bruger strømmen.</p>

<h2>Den eksterne strømforsyning</h2>
<p>iMac får strøm fra en 143 W-strømforsyning, der står på gulvet eller bag bordet, og som tilsluttes med et magnetisk kabel. Apple har målt den til at omsætte 91,9 % af strømmen fra stikkontakten ved 230 V, og når iMac'en ikke er tilsluttet, bruger den 0,12 W, hvilket er omkring 1 kWh om året. De 143 W er også loftet for, hvad hele iMac'en kan trække under tung last. En time med det maksimale bliver omkring 0,16 kWh fra stikket, eller {{oere 0,16}} — men det er et loft, de færreste rammer ved hverdagsbrug.</p>

<h2>iMac M4 eller Mac mini med skærm?</h2>
<p>En <a href="/computer/mac-mini-m4/">Mac mini M4</a> bruger 4,01 W i tomgang ifølge Apple, men uden skærm. Lægger du en 24–27" skærm til, ender du typisk i samme leje som iMac'en eller højere, afhængigt af skærmens størrelse, lysstyrke og alder. En ældre skærm med lysstofrør bag panelet kan bruge mere end hele iMac'en. Valget mellem de to handler derfor sjældent om strøm, men om, hvorvidt du vil have alt i ét eller selv vælge skærm. Se også siden om <a href="/skaerm/">skærmes strømforbrug</a>, hvis du vil sammenligne.</p>
<p>Sammenlignet med en <a href="/laptop/macbook-air-m4/">MacBook Air M4</a> bruger iMac M4 fem til seks gange så meget i tomgang. Til gengæld har den en skærm med mere end dobbelt så stort areal, og den behøver ingen ekstra skærm for at være behagelig at arbejde ved hele dagen.</p>

<h2>Dvale, slukket og natten</h2>
<p>I dvale bruger iMac M4 0,59 W, og slukket 0,29 W. Med seksten timer om dagen er forskellen under 2 kWh om året, så det betyder lidt, om du slukker den om aftenen eller lader den sove. Fordelen ved dvale er, at den kan hente opdateringer og vågne på et øjeblik. Slukker du på stikkontakten, sparer du også strømforsyningens tomgangsforbrug, men det er så småt, at det kun giver mening, hvis du alligevel bruger en stikdåse med kontakt til hele skrivebordet. Læs mere om <a href="/standby/">standby-forbrug</a>.</p>

<h2>Sådan bruger din iMac mindre</h2>
<p>Lad automatisk lysstyrke være slået til, så skærmen ikke lyser for fuldt i et mørkt rum, og sæt skærmen til at slukke efter fem til ti minutter uden aktivitet. Brug dvale frem for pauseskærm; en pauseskærm holder skærmen tændt og bruger næsten det samme som tomgang. Og har du en printer, højttalere eller en ekstern disk ved siden af, så tjek deres standby: de står ofte tændt hele døgnet, også når iMac'en sover. Vil du regne på dine egne timer, så brug <a href="/beregner/">beregneren</a> med watt-tallene ovenfor.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger en iMac M4?",
      answer: "Ifølge Apples målinger ved 230 V bruger iMac M4 20,9 W tændt i tomgang med skærmen tændt, 0,59 W i dvale og 0,29 W slukket. Skærmen står for langt det meste af tomgangsforbruget.",
    },
    {
      question: "Hvor meget strøm bruger iMac M4 om året?",
      answer: "Med otte timer tændt om dagen og dvale resten af døgnet bruger den omkring 64 kWh om året, svarende til {{kr 64}} ved månedens elpris.",
    },
    {
      question: "Bruger iMac M4 mere strøm end en Mac mini?",
      answer: "Ja, men skærmen er med i iMac'ens tal. Mac mini M4 bruger 4,01 W uden skærm; med en ekstern skærm ved siden af ender du typisk i samme leje som iMac'en.",
    },
    {
      question: "Hvor meget bruger iMac M4's strømforsyning?",
      answer: "Den medfølgende 143 W-strømforsyning omsætter 91,9 % af strømmen ved 230 V og bruger 0,12 W, når iMac'en ikke er tilsluttet — omkring 1 kWh om året, svarende til {{kr 1}}.",
    },
    {
      question: "Er der forskel på iMac M4 med to og fire porte?",
      answer: "Ikke i Apples målinger. Begge versioner deler samme forbrugstabel: 20,9 W i tomgang, 0,59 W i dvale og 0,29 W slukket.",
    },
  ],
  sources: [
    { name: "Apple — iMac Product Environmental Report, oktober 2024", url: "https://www.apple.com/environment/pdf/products/desktops/iMac_PER_Oct2024.pdf" },
    { name: "Apple Support — iMac (24-inch, 2024, Two ports), tekniske specifikationer", url: "https://support.apple.com/en-gb/121556" },
    { name: "Apple Support — iMac (24-inch, 2024, Four ports), tekniske specifikationer", url: "https://support.apple.com/en-gb/121557" },
  ],
  variants: [{ name: "24\" M4", watts: { off: 0.29, sleep: 0.59, idle: 20.9 }, source: 0 }],
  publishDate: "2026-11-25",
  updated: "2026-11-22",
};

export default imacM4;
