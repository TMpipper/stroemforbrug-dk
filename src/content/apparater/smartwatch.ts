import type { ApplianceData } from "@/lib/types";

const smartwatch: ApplianceData = {
  slug: "smartwatch",
  meta: {
    category: "it",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: true,
    motif: "batteri",
    synonyms: ["smartwatch", "smart ur", "apple watch", "pixel watch", "fitbit", "aktivitetsur", "fitnessarmbånd", "sportsur", "opladning af ur"],
  },
  name: "Smartwatch",
  article: "et",
  title: "Smartwatch strømforbrug (2026) → Apple Watch, Pixel, Fitbit",
  description: "Et smartwatch bruger 1-2 kWh om året, og meget går til laderen, mens uret ligger fuldt opladet. Se Googles og Apples tal og prisen pr. opladning.",
  heading: "Strømforbrug for et smartwatch: kWh og pris",
  quickAnswer:
    "Google opgiver et årsforbrug på 2 kWh for Pixel Watch 4 (45 mm) og 1 kWh for Pixel Watch 3 (41 mm) og Fitbit Charge 6. Det svarer til {{kr 2}} og {{kr 1}} om året. En daglig opladning af et stort smartwatch koster dermed efter vores skøn {{oere 0,0055}}. En stor del af forbruget er laderen, der holder batteriet fuldt, mens uret ligger i den.",
  kwhRange: [0.5, 5],
  typicalKwh: 2,
  wattage: 3,
  standbyWatts: 0.23,
  energyLabels: [],
  models: [],
  seasonalProfile: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  content: `<h2>Hvor meget strøm bruger et smartwatch?</h2>
<p>Et smartwatch har et meget lille batteri, så selve opladningen er et af de mindste forbrug i hjemmet. Producenterne oplyser sjældent batteriets størrelse i watt-timer, men Google opgiver i sine miljørapporter et samlet årsforbrug for hvert ur, og både Google og Apple oplyser, hvad laderen bruger, når uret er fuldt opladet eller slet ikke ligger i den.</p>
<table>
<thead><tr><th>Ur</th><th>Årsforbrug (producentens skøn)</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>Google Pixel Watch 4 (45 mm)</td><td>2 kWh</td><td>{{kr 2}}</td></tr>
<tr><td>Google Pixel Watch 3 (41 mm)</td><td>1 kWh</td><td>{{kr 1}}</td></tr>
<tr><td>Fitbit Charge 6</td><td>1 kWh</td><td>{{kr 1}}</td></tr>
</tbody>
</table>
<p>Google bygger årstallene på, hvordan tidligere generationer af urene i gennemsnit er blevet ladet. Tallene dækker både opladningen og den strøm, laderen bruger, mens uret ligger i den.</p>

<h2>Laderen bruger mere end uret</h2>
<p>Google måler også, hvad uret og laderen bruger, når uret ligger i laderen med fuldt batteri — en tilstand, Google kalder batterivedligehold. Ved 230 volt er det 0,23 watt for Pixel Watch 4 (45 mm), 0,17 watt for Pixel Watch 3 (41 mm) og 0,14 watt for Fitbit Charge 6. Det ser ikke ud af meget, men 0,23 watt i alle årets 8.760 timer er cirka 2 kWh — altså omtrent hele Googles årstal. Vores læsning er, at en stor del af et smartwatchs årsforbrug ikke går til batteriet, men til at holde det fuldt, mens uret ligger på laderen.</p>
<table>
<thead><tr><th>Ur i laderen med fuldt batteri</th><th>Watt ved 230 V</th><th>kWh om året, hvis det ligger der hele tiden</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>Pixel Watch 4 (45 mm)</td><td>0,23 W</td><td>2 kWh</td><td>{{kr 2}}</td></tr>
<tr><td>Pixel Watch 3 (41 mm)</td><td>0,17 W</td><td>1,5 kWh</td><td>{{kr 1,5}}</td></tr>
<tr><td>Fitbit Charge 6</td><td>0,14 W</td><td>1,2 kWh</td><td>{{kr 1,2}}</td></tr>
</tbody>
</table>
<p>Apple oplyser for Apple Watch Series 10, at deres 20-watts USB-C-lader med urets ladekabel bruger 0,24 watt ved 230 volt, når uret ikke ligger i den, og at laderen har en gennemsnitlig effektivitet på 87,8 %. En lader, der sidder i stikkontakten hele året uden ur, bruger altså også omkring 2 kWh.</p>

<h2>Hvad koster en opladning?</h2>
<p>Deler vi Googles årstal for Pixel Watch 4 ud på en opladning om dagen, bliver det cirka 0,0055 kWh pr. opladning — en lille brøkdel af en øre. Det er vores skøn, og det indeholder også laderens forbrug resten af døgnet. Mindre ure, der lades sjældnere, ligger lavere pr. år.</p>
<table>
<thead><tr><th>Opladninger</th><th>kWh om året (vores skøn)</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>Stort ur, hver dag</td><td>2 kWh</td><td>{{kr 2}}</td></tr>
<tr><td>Stort ur, hver anden dag</td><td>1 kWh</td><td>{{kr 1}}</td></tr>
<tr><td>Mindre ur, hver dag</td><td>1 kWh</td><td>{{kr 1}}</td></tr>
</tbody>
</table>
<p>Til sammenligning bruger et VR-headset som Meta Quest 3 omtrent fire gange så meget pr. opladning, og en <a href="/mobil-opladning/">mobiltelefon</a> bruger også mere over et år. Lader du uret på en <a href="/traadloes-oplader/">trådløs oplader</a> sammen med telefonen, er det opladerens tab og standby, der bestemmer forbruget.</p>

<p>Sportsure med lang batteritid lades sjældnere end et smartwatch med stor, lys skærm og bruger derfor endnu mindre over et år. Til gengæld kan GPS under lange træningspas tømme batteriet hurtigere, så opladningerne følger, hvor meget du træner.</p>

<h2>Lad uret i de billige timer</h2>
<p>Opladning er nemt at flytte, og de fleste lader uret om natten, hvor strømmen ofte er billigst. Forskellen i kroner er meget lille for et ur, men vanen er god for de større ting, der lades op i hjemmet. Mange ure har desuden en funktion, der stopper opladningen ved 80 % og fylder op lige før, du plejer at tage uret på. Det skåner batteriet og flytter en del af opladningen til de sene nattetimer. Oversigten over dagens timer længere oppe viser, hvornår prisen er lavest.</p>
<p>Bruger du <a href="/vr-briller/">VR-briller</a> eller andre ting med batteri, gælder det samme: læg dem til opladning om aftenen, og tag laderen ud af stikket, når de er fulde.</p>

<h2>Hvad bestemmer, hvor meget strøm dit smartwatch bruger?</h2>
<ul>
<li><strong>Tiden i laderen</strong> — et ur, der ligger i laderen med fuldt batteri, bruger strøm hele tiden.</li>
<li><strong>Batteriets størrelse</strong> — store ure bruger mere pr. opladning end små armbånd.</li>
<li><strong>Funktioner</strong> — skærm, der altid er tændt, GPS og mobilnetværk tømmer batteriet hurtigere.</li>
<li><strong>Laderen</strong> — en effektiv lader taber mindre og bruger mindre uden ur.</li>
<li><strong>Hvor ofte du lader</strong> — mange lader hver nat af vane, også når batteriet er halvt fuldt.</li>
</ul>

<h2>Sådan sparer du strøm på dit smartwatch</h2>
<ol>
<li><strong>Tag uret af laderen</strong>, når det er fuldt, i stedet for at lade det ligge i timevis.</li>
<li><strong>Tag laderen ud af stikket</strong>, når den ikke bruges.</li>
<li><strong>Slå skærm, der altid er tændt, fra</strong>, hvis du ikke har brug for den — så kan uret gå længere mellem opladningerne.</li>
<li><strong>Brug optimeret opladning</strong>, så uret ikke står på 100 % hele natten.</li>
<li><strong>Brug en kabellader</strong> frem for en trådløs plade, hvis begge kan bruges.</li>
</ol>
<p>Et smartwatch er en af de mindste poster på elregningen. Vil du finde de store, er det apparaterne med varme og motorer, du skal kigge efter.</p>`,
  faqs: [
    { question: "Hvor meget strøm bruger et smartwatch om året?", answer: "Google opgiver 2 kWh om året for Pixel Watch 4 (45 mm) og 1 kWh for Pixel Watch 3 (41 mm) og Fitbit Charge 6. Det svarer til {{kr 2}} og {{kr 1}}." },
    { question: "Hvad koster det at oplade et Apple Watch?", answer: "Apple oplyser ikke et årsforbrug, men urets batteri er lille. Med Googles tal for et ur i samme størrelse som udgangspunkt koster en daglig opladning efter vores skøn {{oere 0,0055}}." },
    { question: "Bruger laderen strøm, når uret ikke ligger i den?", answer: "Ja, lidt. Apple oplyser 0,24 W ved 230 V for laderen til Apple Watch Series 10 uden ur. Hele året er det cirka 2 kWh, svarende til {{kr 2}}." },
    { question: "Er det dyrt at lade uret hver nat?", answer: "Nej. Selv daglig opladning af et stort ur er cirka 2 kWh om året, svarende til {{kr 2}}. Det meste af det er laderens forbrug, mens uret ligger fuldt opladet." },
  ],
  relatedSlugs: ["mobil-opladning", "traadloes-oplader", "ipad", "vr-briller", "laptop", "router"],
  sources: [
    { name: "Google — Pixel Watch 4 (45 mm) Product Environmental Report", url: "https://www.gstatic.com/gumdrop/sustainability/google-pixel-watch-4-45mm-product-environmental-report.pdf" },
    { name: "Google — Pixel Watch 3 (41 mm) Product Environmental Report", url: "https://www.gstatic.com/gumdrop/sustainability/google-pixel-watch-3-41mm-product-environmental-report.pdf" },
    { name: "Google — Fitbit Charge 6 Product Environmental Report", url: "https://www.gstatic.com/gumdrop/sustainability/fitbit-charge-6-product-enviromental-report.pdf" },
    { name: "Apple — Apple Watch Series 10 Product Environmental Report (laderens forbrug uden ur og effektivitet)", url: "https://www.apple.com/environment/pdf/products/watch/Apple_Watch_Series_10_PER_Sept2024.pdf" },
  ],
  calculatorConfig: {
    title: "Beregn dit smartwatchs strømforbrug",
    options: [
      { label: "Stort smartwatch (ud fra Pixel Watch 4: 2 kWh/år)", kwhPerUse: 0.0055 },
      { label: "Mindre smartwatch eller armbånd (ud fra Pixel Watch 3: 1 kWh/år)", kwhPerUse: 0.0027 },
    ],
    usageLabel: "Opladninger pr. uge",
    usageUnit: "gange/uge",
    usageMin: 1,
    usageMax: 14,
    usageDefault: 7,
    usageStep: 1,
    per: "opladning",
    perYear: 52,
  },
  publishDate: "2026-12-13",
  updated: "2026-11-22",
};

export default smartwatch;
