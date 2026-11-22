import type { ModelData } from "@/lib/models";

const imacM6: ModelData = {
  slug: "imac-m6",
  parent: "computer",
  brand: "Apple",
  name: "iMac M6",
  released: "2026-10",
  synonyms: ["imac 2026", "imac 24 m6", "imac m6 watt", "ny imac", "imac m6 fire porte", "apple imac m6"],
  title: "iMac M6 strømforbrug (2026) → 24 tommer, watt og pris",
  description:
    "iMac M6 fra oktober 2026: Apples watt-tal ved 230 V med den indbyggede 24-tommer skærm, kWh om året, dvale, og hvor meget den sparer i forhold til M4.",
  intro:
    "Det meste af forbruget går stadig til den store skærm, men M6-generationen har fået tomgangen godt 1 W ned i forhold til iMac M4.",
  content: `<h2>Hvor mange watt bruger en iMac M6?</h2>
<p>iMac med M6-chippen kom i oktober 2026, og Apples miljørapport oplyser forbruget målt ved 230 volt: 19,8 W tændt i tomgang med skærmen tændt, 0,5 W i dvale og 0,29 W slukket. Versionen med to porte og versionen med fire porte deler samme tabel, så tallene gælder dem begge. Under målingen er skærmens lysstyrke sat til ENERGY STAR-programmets niveau, automatisk lysstyrke er slået fra, og iMac'en er forbundet til wifi. Apple oplyser, at den bruger 50 % mindre energi end ENERGY STAR-kravet for en computer af den type.</p>
<p>Knap 20 W i tomgang er meget for en Mac, men tallet indeholder den indbyggede 24" skærm. Chippen bruger kun en lille del af det, når der ikke sker noget; resten går til at oplyse et stort panel. Det er derfor, lysstyrken er den knap, der flytter forbruget mest. Lader du automatisk lysstyrke være slået til, skruer iMac'en selv ned i et mørkt rum, og forbruget følger med.</p>

<h2>iMac M6 mod iMac M4</h2>
<p>Den forrige <a href="/computer/imac-m4/">iMac M4</a> fra 2024 målte 20,9 W i tomgang og 0,59 W i dvale. M6 er nede på 19,8 W og 0,5 W, mens slukket er uændret på 0,29 W. Det er en forbedring på godt 5 % i tomgang. Med vores faste profil for stationære computere, otte timer tændt og dvale resten af døgnet, bliver det omkring 61 kWh om året for M6 mod 64 kWh for M4 — en forskel på godt 3 kWh, svarende til {{kr 3,7}} om året.</p>
<p>Strømforsyningen er den samme. Begge generationer bruger en ekstern 143 W-strømforsyning, som Apple har målt til at omsætte 91,9 % af strømmen ved 230 V og til at bruge 0,12 W, når iMac'en ikke er tilsluttet. Forbedringen kommer altså fra selve maskinen — chip og skærm — og ikke fra opladeren.</p>

<h2>Hvad koster en iMac M6 om året?</h2>
<p>De omkring 61 kWh om året svarer til {{kr 61}} ved månedens marginalpris. Af det står de otte timers tomgang for knap 58 kWh og dvale for knap 3 kWh. Står iMac'en tændt fra morgen til aften som familiens fælles computer, stiger tallet: tolv timer i tomgang om dagen bliver alene omkring 87 kWh om året, altså {{kr 87}}.</p>
<p>Under tung last kan iMac M6 trække mere, men aldrig mere end strømforsyningens 143 W. En time ved det loft bliver omkring 0,16 kWh fra stikket, eller {{oere 0,16}}. De fleste hverdagsopgaver ligger langt nærmere tomgangstallet end loftet.</p>

<h2>Alt i ét eller Mac mini med skærm?</h2>
<p>En <a href="/computer/mac-mini-m6/">Mac mini M6</a> bruger 3,0 W i tomgang ifølge Apple, men uden skærm. Med en ekstern skærm på 24–27 tommer ender du typisk i samme leje som iMac'en, og en ældre eller meget lysstærk skærm kan bruge mere end hele iMac'en. Strøm er derfor sjældent det, der afgør valget; det er snarere, om du vil have alt i ét kabinet eller selv vælge skærm. Siden om <a href="/skaerm/">skærmes strømforbrug</a> hjælper, hvis du vil regne på en bestemt skærm.</p>

<h2>Dvale, slukket og standby rundt om</h2>
<p>I dvale bruger iMac M6 0,5 W og slukket 0,29 W. Med seksten timer om dagen er forskellen omkring 1,2 kWh om året, så det betyder næsten intet, om du slukker den om aftenen eller lader den sove. Dvale har den fordel, at maskinen kan hente opdateringer og vågne med det samme. Det, der ofte bruger mere, er tingene ved siden af: printer, højttalere, en ekstern disk eller en dockingstation, der står tændt hele døgnet. Læs mere om <a href="/standby/">standby-forbrug i hjemmet</a>.</p>

<h2>Sådan holder du forbruget nede</h2>
<p>Lad skærmen slukke efter fem til ti minutter uden aktivitet, og brug dvale i stedet for pauseskærm; en pauseskærm holder panelet tændt og bruger næsten det samme som tomgang. Brug automatisk lysstyrke, og skru ned, hvis du arbejder i et mørkt rum. Og tag et kig på, hvad der ellers sidder i stikdåsen bag skrivebordet. Vil du regne på dine egne timer, så brug <a href="/beregner/">beregneren</a>, og se siden om <a href="/computer/">stationære computere</a> for en sammenligning med andre typer.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger en iMac M6?",
      answer: "Ifølge Apples målinger ved 230 V bruger iMac M6 19,8 W tændt i tomgang med skærmen tændt, 0,5 W i dvale og 0,29 W slukket. Den indbyggede 24\" skærm står for det meste af tomgangsforbruget.",
    },
    {
      question: "Hvor meget strøm bruger iMac M6 om året?",
      answer: "Med otte timer tændt om dagen og dvale resten af døgnet bruger den omkring 61 kWh om året, svarende til {{kr 61}} ved månedens elpris.",
    },
    {
      question: "Bruger iMac M6 mindre strøm end iMac M4?",
      answer: "Lidt. Apple har målt M6 til 19,8 W i tomgang mod 20,9 W for M4, og 0,5 W mod 0,59 W i dvale. Over et år med vores profil er forskellen godt 3 kWh, svarende til {{kr 3,7}}.",
    },
    {
      question: "Er der forskel på iMac M6 med to og fire porte?",
      answer: "Ikke i Apples målinger. Begge versioner deler samme forbrugstabel ved 230 V.",
    },
    {
      question: "Hvor meget bruger iMac M6's strømforsyning uden last?",
      answer: "Den medfølgende 143 W-strømforsyning bruger 0,12 W, når iMac'en ikke er tilsluttet — omkring 1 kWh om året, svarende til {{kr 1}}. Ved 230 V omsætter den 91,9 % af strømmen.",
    },
  ],
  sources: [
    { name: "Apple — iMac Product Environmental Report, oktober 2026", url: "https://www.apple.com/environment/pdf/products/desktops/iMac_PER_Oct2026.pdf" },
    { name: "Apple Support — iMac (24-inch, M6, Two ports), tekniske specifikationer", url: "https://support.apple.com/en-gb/148298" },
    { name: "Apple Support — iMac (24-inch, M6, Four ports), tekniske specifikationer", url: "https://support.apple.com/en-gb/148299" },
  ],
  variants: [{ name: "24\" M6", watts: { off: 0.29, sleep: 0.5, idle: 19.8 }, source: 0 }],
  publishDate: "2026-11-27",
  updated: "2026-11-22",
};

export default imacM6;
