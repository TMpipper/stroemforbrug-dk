import type { ApplianceData } from "@/lib/types";

const gennemstroemningsvandvarmer: ApplianceData = {
  slug: "gennemstroemningsvandvarmer",
  meta: {
    category: "varmtVand",
    usage: "per-use",
    hasEuLabel: true,
    shiftable: false,
    synonyms: [
      "gennemstrømningsvandvarmer",
      "gennemstrømsvandvarmer",
      "gennemstrømningsvandvarmer 3-faset",
      "elektronisk vandvarmer",
      "instant vandvarmer",
      "momentan vandvarmer",
      "durchlauferhitzer",
      "vandvarmer uden beholder",
    ],
  },
  name: "Gennemstrømningsvandvarmer",
  article: "en",
  title: "Gennemstrømningsvandvarmer strømforbrug (2026) → kWh pr. bad",
  description:
    "Et brusebad på 6½ minut med sparebruser kræver ca. 1,7 kWh fra en gennemstrømningsvandvarmer. Se kW, flow, tilslutning og forbruget for hele husstanden.",
  heading: "Strømforbrug for en gennemstrømningsvandvarmer: kWh, pris pr. brusebad og dyreste timer",
  quickAnswer:
    "En gennemstrømningsvandvarmer bruger kun strøm, mens det varme vand løber. Et brusebad på 6½ minut med en sparebruser på 8 liter i minuttet kræver efter vores beregning ca. 1,7 kWh, svarende til {{kr 1,7}} ved {{pris_kwh}}. To bade om dagen giver ca. 1.250 kWh om året eller {{kr 1250}} — uden det varmetab, en beholder har døgnet rundt.",
  kwhRange: [300, 4000],
  typicalKwh: 1250,
  wattage: 18000,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.12, 1.12, 1.08, 1.0, 0.94, 0.88, 0.86, 0.86, 0.9, 0.98, 1.1, 1.16],
  content: `<h2>Varmt vand på sekundet — og en stor effekt imens</h2>
<p>En gennemstrømningsvandvarmer har ingen beholder. Koldt vand løber gennem et varmelegeme, der tænder i samme øjeblik, du åbner for den varme hane, og slukker, når du lukker igen. Det er derfor, apparatet kan være så lille: det skal ikke gemme vand, kun varme det, mens det passerer. Prisen for det er effekten. For at nå at varme vandet på de få sekunder, det er inde i apparatet, skal der bruges mange kilowatt på én gang.</p>
<p>Stiebel Eltron oplyser i sit tekniske datablad for DHB-E-serien, at modellen til et badeværelse kan indstilles til 18, 21 eller 24 kW, og at den kræver 400 V på tre faser med en sikring på 32-35 A. Til en køkkenvask findes en mindre model på 11 eller 13,5 kW. Til sammenligning har en almindelig elkedel cirka 2 kW. En gennemstrømningsvandvarmer, der leverer et brusebad, trækker altså lige så meget som ti elkedler på én gang — men kun i de minutter, bruseren kører.</p>
<table>
<thead><tr><th>Model (Stiebel Eltron DHB-E)</th><th>Effekt</th><th>Liter i minuttet ved 28 graders opvarmning</th><th>Sikring</th></tr></thead>
<tbody>
<tr><td>11/13 LCD (køkkenvask)</td><td>11 eller 13,5 kW</td><td>5,6 eller 6,9 l</td><td>20 A</td></tr>
<tr><td>18 LCD 25A</td><td>18 kW</td><td>9,2 l</td><td>25 A</td></tr>
<tr><td>18/21/24 LCD (bad)</td><td>18, 21 eller 24 kW</td><td>9,2, 10,7 eller 12,3 l</td><td>32-35 A</td></tr>
<tr><td>27 LCD</td><td>27 kW</td><td>13,8 l</td><td>40 A</td></tr>
</tbody>
</table>
<p>De 28 grader i tabellen er producentens standardbetingelse: koldt vand på 10 grader varmet op til 38 grader, hvilket svarer til et brusebad. Kolonnen viser, hvorfor effekten skal være høj. Vil du have mere vand pr. minut ved samme temperatur, skal der flere kilowatt til.</p>

<h2>Sådan regner vi kWh pr. brusebad</h2>
<p>Det kræver 1,163 Wh at varme én liter vand én grad. Ganger du med antal liter og antal grader, har du energien. Bolius regner med 8 liter i minuttet for en sparebruser og cirka 12 liter for en almindelig bruser, og en YouGov-måling for Bolius fra december 2023 viste, at danskerne i gennemsnit står 6 minutter og 38 sekunder under bruseren. Med koldt vand på 10 grader og bruservand på 38 grader giver det denne tabel — vores beregning, ikke en måling:</p>
<table>
<thead><tr><th>Brusebad</th><th>Liter varmt vand</th><th>kWh pr. bad</th><th>Pris pr. bad</th></tr></thead>
<tbody>
<tr><td>4 minutter, sparebruser (8 l/min)</td><td>32 l</td><td>1,0</td><td>{{kr 1}}</td></tr>
<tr><td>6½ minut, sparebruser</td><td>53 l</td><td>1,7</td><td>{{kr 1,7}}</td></tr>
<tr><td>10 minutter, sparebruser</td><td>80 l</td><td>2,6</td><td>{{kr 2,6}}</td></tr>
<tr><td>6½ minut, almindelig bruser (12 l/min)</td><td>79 l</td><td>2,6</td><td>{{kr 2,6}}</td></tr>
<tr><td>8 minutter, almindelig bruser</td><td>96 l</td><td>3,1</td><td>{{kr 3,1}}</td></tr>
</tbody>
</table>
<p>En gennemstrømningsvandvarmer omsætter næsten al strømmen til varme i vandet, så tallene ligger tæt på det, du betaler. Om vinteren er det kolde vand fra ledningen koldere end om sommeren, og så skal der lidt flere grader til; derfor ligger vores sæsonprofil en smule højere i januar end i juli. Bolius regner i øvrigt med 15 liter i minuttet som gennemsnit for en ældre bruser. Det kan en vandvarmer på 24 kW ikke levere ved 38 grader — enten bliver vandet koldere, eller også begrænser apparatet mængden.</p>

<h2>Hvad bruger husstanden om året?</h2>
<p>Årsforbruget følger antallet af bade og deres længde. Køkkenvask og håndvask lægger lidt oveni, men det er korte tapninger, og en stor del af dem er med koldt eller lunkent vand. Tabellen er vores eksempel med et bad om dagen pr. person.</p>
<table>
<thead><tr><th>Husstand</th><th>Bruser</th><th>kWh om året</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>1 person, 6½ minut</td><td>Sparebruser</td><td>ca. 620</td><td>{{kr 620}}</td></tr>
<tr><td>2 personer, 6½ minut</td><td>Sparebruser</td><td>ca. 1.240</td><td>{{kr 1240}}</td></tr>
<tr><td>4 personer, 6½ minut</td><td>Sparebruser</td><td>ca. 2.480</td><td>{{kr 2480}}</td></tr>
<tr><td>4 personer, 6½ minut</td><td>Almindelig bruser</td><td>ca. 3.800</td><td>{{kr 3800}}</td></tr>
</tbody>
</table>
<p>Den sidste række viser, at bruserhovedet betyder mere end apparatet. Skiftet fra en almindelig bruser til en sparebruser fjerner omkring en tredjedel af energien, uanset om vandet varmes i en gennemstrømningsvandvarmer, en beholder eller af fjernvarmen.</p>

<h2>Gennemstrømning eller beholder?</h2>
<p>En <a href="/varmtvandsbeholder/">varmtvandsbeholder</a> holder vandet varmt døgnet rundt og taber hele tiden lidt varme til rummet. Bolius' beregner regner, med henvisning til Viegand Maagøe, med et varmetab på 30 procent af energiforbruget i en varmtvandsbeholder — og bruger selv 15 procent på årsbasis, fordi en del af tabet om vinteren varmer huset op. Det tab har en gennemstrømningsvandvarmer ikke. Til gengæld kan den kun levere det, effekten rækker til, og to bruserbade på samme tid kan blive for meget.</p>
<p>Bolius' råd er, at valget afhænger af forbruget: har du brug for meget varmt vand hurtigt, er beholderen bedre; er behovet mindre, og vil du undgå at opbevare varmt vand, er gennemstrømningsvandvarmeren den mere energibesparende løsning. Den er derfor udbredt i lejligheder, sommerhuse og anneks, og som ekstra vandvarmer ved en køkkenvask langt fra beholderen, så du slipper for at tappe koldt vand ud af et langt rør, før det varme kommer.</p>
<p>Har du en beholder med en <a href="/elpatron/">elpatron</a>, kan den varmes op i de billige timer og bruges senere. Det kan en gennemstrømningsvandvarmer ikke: den bruger strømmen, i samme øjeblik du bruger vandet.</p>

<h2>Energimærket på en gennemstrømningsvandvarmer</h2>
<p>Vandvarmere har et EU-energimærke efter forordning 812/2013. Mærket bygger på et standardiseret tappeprogram, en såkaldt belastningsprofil, og en gennemstrømningsvandvarmer til et bad er typisk målt i profil S. Den svarer ifølge forordningen til 2,1 kWh varmt vand om dagen — mindre end en familie bruger. Klasse A i profil S kræver en energieffektivitet på 38-55 procent, beregnet på forordningens egen måde.</p>
<p>Stiebel Eltrons DHB-E 18/21/24 LCD er målt i profil S med klasse A, en effektivitet på 39 procent og et årligt elforbrug på 476 kWh. Det tal gælder for mærkets lille standardforbrug. Din egen husstand kan bruge to eller tre gange så meget, fordi det er antallet af bade, der bestemmer forbruget. Brug derfor mærket til at sammenligne modeller, og tabellerne ovenfor til at regne dit eget forbrug.</p>

<h2>Tilslutning, hovedsikring og timepris</h2>
<p>En model på 18-24 kW skal have en fast installation på tre faser, og det skal en autoriseret elinstallatør stå for. Det er også en god idé at få tjekket, om husets hovedsikring kan klare effekten oveni komfur, vaskemaskine og eventuelt en elbil, der lader samtidig. Den lille model til køkkenvasken kræver mindre, men stadig mere end en almindelig stikkontakt.</p>
<p>Fordi vandvarmeren kun kører, mens du bruger vandet, er der ingen strøm at flytte. Det, der kan spares på timeprisen, er at undgå de dyreste timer, når du kan. Et morgenbad før kl. 17 er typisk billigere end et aftenbad i kogespidsen, hvor nettariffen er højest. Oversigten over dagens timepriser ovenfor viser forskellen pr. bad i dag.</p>

<h2>Sådan holder du forbruget nede</h2>
<ul>
<li><strong>Sparebruser</strong> — 8 liter i minuttet i stedet for 12 eller 15 er den største enkelte besparelse.</li>
<li><strong>Kortere bad</strong> — hvert minut med sparebruser koster ca. 0,26 kWh, svarende til {{kr 0,26}}.</li>
<li><strong>Indstil temperaturen</strong> — en elektronisk model kan sættes til præcis den temperatur, du bruger, så du ikke blander koldt vand i varmt.</li>
<li><strong>Afkalk</strong> — kalk på varmelegemet og i perlatoren mindsker flowet og kan give ujævn temperatur.</li>
<li><strong>Placér den tæt på tappestedet</strong> — jo kortere rør, desto mindre vand løber ud, før det er varmt.</li>
</ul>`,
  faqs: [
    { question: "Hvor mange kWh bruger en gennemstrømningsvandvarmer pr. brusebad?", answer: "Ca. 1,7 kWh for et bad på 6½ minut med sparebruser, efter vores beregning med 8 liter i minuttet varmet fra 10 til 38 grader. Det koster {{kr 1,7}} ved {{pris_kwh}}. Med en almindelig bruser er det ca. 2,6 kWh." },
    { question: "Hvor mange kW har en gennemstrømningsvandvarmer?", answer: "Til et bad typisk 18-24 kW på 400 V og tre faser; Stiebel Eltrons DHB-E kan indstilles til 18, 21 eller 24 kW. Til en køkkenvask findes modeller på 11-13,5 kW." },
    { question: "Er en gennemstrømningsvandvarmer billigere end en varmtvandsbeholder?", answer: "Den har intet varmetab fra en beholder, som Bolius' beregner sætter til 15-30 procent af energien. Til gengæld kan den ikke varmes op i de billige timer. For et lille til mellemstort forbrug bruger den typisk mindst strøm." },
    { question: "Hvad bruger en familie på fire om året?", answer: "Med et bad på 6½ minut pr. person om dagen og sparebruser ca. 2.480 kWh, svarende til {{kr 2480}}. Med almindelig bruser kan det nå ca. 3.800 kWh." },
    { question: "Bruger en gennemstrømningsvandvarmer strøm, når den ikke er i brug?", answer: "Næsten intet. Varmelegemet tænder først, når vandet løber, så der er ingen beholder at holde varm. Elektronikken i en model med display bruger meget lidt." },
  ],
  relatedSlugs: ["varmtvandsbeholder", "elpatron", "quooker", "varmepumpe"],
  sources: [
    { name: "Stiebel Eltron — Technisches Datenblatt DHB-E 11/13, 18, 18/21/24 og 27 LCD", url: "https://www.stiebel-eltron.de/de/fachkunden/produkte/236743.techdata.pdf" },
    { name: "Stiebel Eltron — Produktdatenblatt DHB-E 18/21/24 LCD (forordning 812/2013)", url: "https://erps.stiebel-eltron.de/eht/de/236745_de.pdf" },
    { name: "Bolius — Hvad koster det at tage et brusebad?", url: "https://www.bolius.dk/hvad-koster-det-at-tage-et-brusebad-94339" },
    { name: "Bolius — Gennemstrømningsvandvarmer eller varmtvandsbeholder?", url: "https://www.bolius.dk/gennemstroemningsvandvarmer-eller-varmtvandsbeholder-99914" },
    { name: "Bolius — Varmtvandsforbrug", url: "https://www.bolius.dk/varmtvandsforbrug-2866" },
    { name: "Forordning (EU) nr. 812/2013, bilag II — energiklasser for vandvarmere", url: "https://www.legislation.gov.uk/eur/2013/812/annex/II" },
    { name: "Forordning (EU) nr. 812/2013, bilag VII — belastningsprofiler", url: "https://www.legislation.gov.uk/eur/2013/812/annex/VII" },
  ],
  calculatorConfig: {
    title: "Beregn gennemstrømningsvandvarmerens strømforbrug",
    options: [
      { label: "4 minutter med sparebruser (ca. 1,0 kWh)", kwhPerUse: 1.0 },
      { label: "6½ minut med sparebruser (ca. 1,7 kWh)", kwhPerUse: 1.7 },
      { label: "6½ minut med almindelig bruser (ca. 2,6 kWh)", kwhPerUse: 2.6 },
      { label: "8 minutter med almindelig bruser (ca. 3,1 kWh)", kwhPerUse: 3.1 },
    ],
    usageLabel: "Brusebade pr. dag i husstanden",
    usageUnit: "bade/dag",
    usageMin: 1,
    usageMax: 8,
    usageDefault: 2,
    usageStep: 1,
    per: "brusebad",
    perYear: 365,
  },
  publishDate: "2026-12-06",
  updated: "2026-11-22",
};

export default gennemstroemningsvandvarmer;
