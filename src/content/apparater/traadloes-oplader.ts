import type { ApplianceData } from "@/lib/types";

const traadloesOplader: ApplianceData = {
  slug: "traadloes-oplader",
  meta: {
    category: "it",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: true,
    motif: "batteri",
    synonyms: ["trådløs oplader", "traadloes oplader", "trådløs opladning", "qi-oplader", "qi2", "magsafe", "ladeplade", "wireless charger", "oplader standby"],
  },
  name: "Oplader (trådløs)",
  article: "en",
  title: "Trådløs oplader strømforbrug (2026) → tab, standby og kabel",
  description: "Trådløs opladning bruger en fjerdedel mere strøm end kabel og næsten det dobbelte, hvis telefonen ligger skævt. Se målte tal, standby og pris pr. opladning.",
  heading: "Strømforbrug for en trådløs oplader: kWh og pris",
  quickAnswer:
    "I iFixits måling brugte en fuld opladning af en iPhone 15 Pro 18,25 Wh med kabel og 23,33 Wh på Apples MagSafe-oplader — knap en fjerdedel mere. Med telefonen liggende natten over og laderens standby resten af døgnet nåede MagSafe 34,13 Wh i døgnet, cirka 12 kWh om året, svarende til {{kr 12}}. En billig ladeplade med telefonen lagt skævt brugte over 21 kWh om året.",
  kwhRange: [3, 25],
  typicalKwh: 12,
  wattage: 15,
  standbyWatts: 0.2,
  energyLabels: [],
  models: [],
  seasonalProfile: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  content: `<h2>Hvor meget strøm bruger en trådløs oplader?</h2>
<p>En trådløs oplader overfører strøm med et magnetfelt mellem en spole i laderen og en spole i telefonen. Det er bekvemt — du lægger bare telefonen på pladen — men en del af strømmen bliver til varme undervejs. Hvor meget, afhænger af, hvor præcist spolerne ligger over hinanden, og af, hvordan laderen styrer strømmen. Reparationsfirmaet iFixit målte strømmen fra stikkontakten, mens en iPhone 15 Pro med et batteri på 12,7 Wh blev ladet fra 0 til 100 % med kabel og på tre trådløse ladere.</p>
<table>
<thead><tr><th>Oplader</th><th>Fra stikkontakten, 0-100 %</th><th>Pris pr. opladning</th></tr></thead>
<tbody>
<tr><td>USB-C-kabel</td><td>18,25 Wh</td><td>{{oere 0,018}}</td></tr>
<tr><td>Apple MagSafe (15 W)</td><td>23,33 Wh</td><td>{{oere 0,023}}</td></tr>
<tr><td>Amazon Basics (15 W), telefonen lagt skævt</td><td>33,93 Wh</td><td>{{oere 0,034}}</td></tr>
</tbody>
</table>
<p>Selv kablet tabte strøm: 18,25 Wh fra stikkontakten for at fylde et batteri på 12,7 Wh. MagSafe brugte 24,4 % mere end kablet, og den billige plade med telefonen lagt skævt næsten det dobbelte. iFixit understreger selv, at målingerne ikke er lavet under laboratorieforhold.</p>

<h2>Natten på laderen og standby</h2>
<p>De fleste lægger telefonen på laderen om aftenen og tager den først i morgen. Så er det ikke kun selve opladningen, der tæller. Efter at telefonen var fuld, blev MagSafe-laderen ved med at trække 1,5 watt i næsten fem timer, og resten af døgnet, uden telefon, brugte den omkring 0,2 watt. Teslas trådløse ladestation trak hele 1,4 watt uden noget på. iFixit regnede et helt døgn ud for hver lader med syv timers søvn:</p>
<table>
<thead><tr><th>Oplader, et helt døgn</th><th>Wh i døgnet</th><th>kWh om året</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>USB-C-kabel</td><td>23,6 Wh</td><td>8,6 kWh</td><td>{{kr 8,6}}</td></tr>
<tr><td>Apple MagSafe</td><td>34,13 Wh</td><td>12,4 kWh</td><td>{{kr 12,4}}</td></tr>
<tr><td>Amazon Basics, telefonen lagt skævt</td><td>57,93 Wh</td><td>21,2 kWh</td><td>{{kr 21,2}}</td></tr>
</tbody>
</table>
<p>Forskellen mellem kabel og den dårligste trådløse lader er altså cirka 12-13 kWh om året for én telefon. Det er ikke mange kroner, men i et hjem med flere telefoner, ure og hovedtelefoner på hver sin plade løber det op.</p>

<h2>Hvorfor placeringen betyder så meget</h2>
<p>Spolen i laderen og spolen i telefonen skal ligge lige over hinanden. Ligger telefonen skævt, når en mindre del af magnetfeltet frem, og laderen skal sende mere for at levere det samme. Det er derfor, iFixit målte så stor forskel på den billige plade med telefonen lagt skævt. MagSafe og den nyere Qi2-standard bruger magneter til at holde telefonen centreret, så spolerne altid ligger rigtigt. Har du en flad ladeplade, kan det betale sig at lægge telefonen præcist, og et tykt cover eller en kortholder bagpå øger afstanden og tabet.</p>
<p>Varmen er også et tegn på tabet. En telefon, der bliver varm på laderen, taber energi, og høj varme slider desuden på batteriet. Mange telefoner sænker selv ladehastigheden, når de bliver for varme.</p>

<h2>Trådløs opladning af ur, hovedtelefoner og andet</h2>
<p>Den samme fysik gælder for et <a href="/smartwatch/">smartwatch</a>, trådløse hovedtelefoner og andet, der lades på en plade. For små ting er forbruget så lille, at det er laderens standby, der fylder mest over et år. En lader, der står i stikkontakten døgnet rundt uden at lade noget, bruger omkring 0,2 watt i iFixits målinger — knap 2 kWh om året, svarende til {{kr 1,75}}. For <a href="/mobil-opladning/">mobilopladning</a> generelt er det opladningsvanerne, der betyder mest.</p>

<p>Ladestationer med plads til telefon, ur og hovedtelefoner på én gang er populære på natbordet. De har flere spoler og ofte en større strømforsyning, og deres tab og standby afhænger af, hvor godt de er bygget. Vi har ikke fundet uafhængige målinger af dem, men principperne er de samme: jo bedre telefonen ligger centreret, og jo kortere tid laderen står tændt uden at lade, jo mindre bruger den.</p>

<h2>Lad i de billige timer</h2>
<p>Opladning er et af de nemmeste forbrug at flytte. Lægger du telefonen på laderen om natten, falder opladningen ofte i de timer, hvor strømmen er billigst. Mange telefoner har desuden optimeret opladning, der holder batteriet på 80 % og fylder op lige før, du plejer at stå op. Oversigten over dagens timer længere oppe viser, hvornår prisen er lavest i dag.</p>

<h2>Hvad bestemmer, hvor meget strøm din trådløse oplader bruger?</h2>
<ul>
<li><strong>Placeringen</strong> — en skæv telefon kan næsten fordoble forbruget.</li>
<li><strong>Laderens kvalitet</strong> — magnetisk centrering (MagSafe, Qi2) giver mindre tab.</li>
<li><strong>Tiden på laderen</strong> — en fuld telefon på laderen trækker stadig strøm.</li>
<li><strong>Standby</strong> — en lader i stikkontakten uden telefon bruger lidt hele tiden.</li>
<li><strong>Cover og varme</strong> — afstand og varme øger tabet.</li>
</ul>

<h2>Sådan sparer du strøm ved trådløs opladning</h2>
<ol>
<li><strong>Brug kabel</strong>, når du har det ved hånden — det taber mindst.</li>
<li><strong>Vælg en magnetisk lader</strong> (MagSafe eller Qi2), så telefonen altid ligger rigtigt.</li>
<li><strong>Tag coveret af</strong>, hvis det er tykt eller har en kortholder.</li>
<li><strong>Tag telefonen af</strong>, når den er fuld, i stedet for at lade den ligge i timevis — MagSafe trak 1,5 watt i næsten fem timer efter fuld opladning i iFixits måling.</li>
<li><strong>Sluk laderen på stikdåsen</strong>, når den ikke bruges i længere tid.</li>
</ol>`,
  faqs: [
    { question: "Bruger trådløs opladning mere strøm end kabel?", answer: "Ja. I iFixits måling brugte en fuld opladning af en iPhone 15 Pro 18,25 Wh med kabel og 23,33 Wh på MagSafe — 24,4 % mere. En billig plade med telefonen lagt skævt brugte 33,93 Wh." },
    { question: "Hvad koster en trådløs oplader om året?", answer: "Med telefonen på laderen natten over målte iFixit 34,13 Wh i døgnet på MagSafe, cirka 12,4 kWh om året eller {{kr 12,4}}. Med kabel er det cirka 8,6 kWh, svarende til {{kr 8,6}}." },
    { question: "Bruger en trådløs oplader strøm uden telefon?", answer: "Ja, typisk omkring 0,2 W i iFixits målinger, knap 2 kWh om året. Teslas trådløse ladestation trak 1,4 W uden noget på." },
    { question: "Hvad koster én trådløs opladning af en telefon?", answer: "En fuld opladning af en iPhone 15 Pro på MagSafe brugte 23,33 Wh og koster {{oere 0,023}} ved {{pris_kwh}}." },
    { question: "Er MagSafe og Qi2 bedre end en almindelig ladeplade?", answer: "De holder telefonen centreret med magneter, så tabet bliver mindre. I iFixits måling brugte MagSafe 12,4 kWh om året mod 21,2 kWh for en billig plade med telefonen lagt skævt." },
  ],
  relatedSlugs: ["mobil-opladning", "smartwatch", "ipad", "laptop", "router", "ladestander"],
  sources: [
    { name: "iFixit — Wireless Charging: Trading Efficiency for Convenience (målinger af kabel, MagSafe og trådløse plader)", url: "https://www.ifixit.com/News/94409/wireless-charging-trading-efficiency-for-convenience" },
  ],
  calculatorConfig: {
    title: "Beregn din trådløse opladers strømforbrug",
    options: [
      { label: "Kabel, til sammenligning (18,25 Wh pr. opladning)", kwhPerUse: 0.018 },
      { label: "MagSafe, kun selve opladningen (23,33 Wh)", kwhPerUse: 0.023 },
      { label: "MagSafe natten over inkl. standby (34,13 Wh pr. døgn)", kwhPerUse: 0.034 },
      { label: "Billig plade, skævt lagt, natten over inkl. standby (57,93 Wh)", kwhPerUse: 0.058 },
    ],
    usageLabel: "Opladninger pr. uge",
    usageUnit: "gange/uge",
    usageMin: 1,
    usageMax: 21,
    usageDefault: 7,
    usageStep: 1,
    per: "opladning",
    perYear: 52,
  },
  publishDate: "2026-12-13",
  updated: "2026-11-22",
};

export default traadloesOplader;
