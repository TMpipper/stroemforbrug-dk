import type { ApplianceData } from "@/lib/types";

const poolpumpe: ApplianceData = {
  slug: "poolpumpe",
  meta: {
    category: "poolSpa",
    usage: "per-hour",
    hasEuLabel: false,
    shiftable: true,
    synonyms: [
      "poolpumpe",
      "filterpumpe",
      "sandfilterpumpe",
      "pumpe til pool",
      "cirkulationspumpe pool",
      "poolpumpe med timer",
      "variabel hastighed poolpumpe",
      "filteranlæg pool",
    ],
  },
  name: "Poolpumpe",
  article: "en",
  title: "Poolpumpe strømforbrug (2026) → Watt, timer og filtrering",
  description:
    "En poolpumpe på 450 W bruger 0,45 kWh i timen og ca. 540 kWh på en sæson med 8 timer om dagen. Se hvordan timer, hastighed og timeprisen ændrer regningen.",
  heading: "Strømforbrug for en poolpumpe: watt, pris i timen og billigste tidspunkt",
  quickAnswer:
    "En poolpumpe bruger sin effekt i hver time, den kører: en sandfilterpumpe på 450 W bruger 0,45 kWh i timen, svarende til {{kr 0,45}} ved {{pris_kwh}}. Med 8 timer om dagen i en sæson på 150 dage bliver det efter vores beregning ca. 540 kWh, eller {{kr 540}}. Filtreringen kan lægges i dagens billige timer, og en pumpe med variabel hastighed kan ifølge det amerikanske forskningslaboratorium PNNL skære 50-90 procent af forbruget.",
  kwhRange: [100, 3000],
  typicalKwh: 540,
  wattage: 450,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [0, 0, 0, 0.4, 2.2, 2.35, 2.35, 2.35, 2.0, 0.35, 0, 0],
  content: `<h2>Hvad laver poolpumpen?</h2>
<p>Poolpumpen er poolens hjerte. Den suger vandet ud gennem skimmeren og bundafløbet, presser det gennem et sand- eller patronfilter og sender det rent tilbage i bassinet. Uden cirkulation bliver vandet hurtigt grumset, og klor eller andre midler fordeles dårligt. Pumpen sender også vandet gennem en eventuel varmer, så den skal køre, når en <a href="/poolvarmepumpe/">poolvarmepumpe</a> skal arbejde.</p>
<p>Til fritstående haveopools sælges ofte et samlet sandfilteranlæg med pumpe og timer. Swim & Funs anlæg på 450 W, som blandt andet Bauhaus forhandler, har en kapacitet på 8.000 liter i timen og er beregnet til pools på op til 33.000 liter, og det har en indbygget timer. Større nedgravede pools har typisk en kraftigere pumpe, der står fast monteret i et teknikrum eller en pumpebrønd.</p>

<h2>Watt og pris i timen</h2>
<p>Al pumpens strøm bruges, mens den kører, og forbruget i timen er det samme som effekten. Tabellen viser fire størrelser:</p>
<table>
<thead><tr><th>Pumpe</th><th>kWh i timen</th><th>Pris i timen</th><th>8 timer om dagen</th></tr></thead>
<tbody>
<tr><td>Lille pumpe, 250 W (vores eksempel)</td><td>0,25</td><td>{{kr 0,25}}</td><td>{{kr 2}}</td></tr>
<tr><td>Sandfilteranlæg, 450 W (Swim & Fun)</td><td>0,45</td><td>{{kr 0,45}}</td><td>{{kr 3,6}}</td></tr>
<tr><td>Variabel hastighed på 30 procent lavere omdrejninger (PNNL)</td><td>0,59</td><td>{{kr 0,59}}</td><td>{{kr 4,7}}</td></tr>
<tr><td>Nedgravet pool, 1,5 hk på én hastighed (PNNL)</td><td>ca. 2,0</td><td>{{kr 2}}</td><td>{{kr 16}}</td></tr>
</tbody>
</table>
<p>De to nederste rækker er fra det amerikanske energilaboratorium Pacific Northwest National Laboratory, der har regnet på en almindelig pumpe på 1,5 hestekræfter. Ved fuld hastighed, 3.450 omdrejninger i minuttet, bruger den omkring 2.000 W. Sænkes hastigheden med 30 procent til 2.400 omdrejninger, falder effekten til 593 W. Det er pumpens fysik: effekten falder meget hurtigere end vandmængden, når pumpen går langsommere.</p>

<h2>Hvor mange timer skal pumpen køre?</h2>
<p>Det afhænger af poolens størrelse og pumpens kapacitet. Med Swim & Funs anlæg på 8.000 liter i timen tager det godt fire timer at sende alt vandet i en pool på 33.000 liter gennem filteret én gang; 8 timer om dagen giver efter vores beregning to omgange. PNNL skriver, at pumper med én hastighed typisk kører mindst 5-6 timer om dagen, og at nogle ejere lader dem køre døgnet rundt.</p>
<table>
<thead><tr><th>Pumpe på 450 W</th><th>kWh pr. døgn</th><th>kWh pr. sæson (150 dage)</th><th>Pris pr. sæson</th></tr></thead>
<tbody>
<tr><td>4 timer om dagen</td><td>1,8</td><td>270</td><td>{{kr 270}}</td></tr>
<tr><td>8 timer om dagen</td><td>3,6</td><td>540</td><td>{{kr 540}}</td></tr>
<tr><td>12 timer om dagen</td><td>5,4</td><td>810</td><td>{{kr 810}}</td></tr>
<tr><td>Døgnet rundt</td><td>10,8</td><td>1.620</td><td>{{kr 1620}}</td></tr>
</tbody>
</table>
<p>Sæsonen på 150 dage, fra maj til september, er vores skøn. Den sidste række viser, hvorfor timeren betyder så meget: en pumpe, der aldrig slukker, bruger tre gange så meget som en, der kører otte timer.</p>

<h2>Variabel hastighed: lavere omdrejninger, flere timer</h2>
<p>En pumpe med variabel hastighed kan køre langsomt det meste af tiden og kun skrue op, når der skal returskylles, støvsuges eller varmes. Ifølge PNNL bruger den 50-90 procent mindre energi end en pumpe med én hastighed, og de lejlighedsvise opgaver, der kræver fuld fart, står typisk for omkring 10 procent af driftstiden. Pumpen kører ofte flere timer end en almindelig pumpe, men med så lav effekt, at døgnets forbrug falder.</p>
<p>Regnestykket kan ses i tabellen ovenfor: en pumpe på 2.000 W i 6 timer bruger 12 kWh, mens den samme pumpe på 593 W i 10 timer flytter mere vand og bruger knap 6 kWh. Det er især relevant for større, nedgravede pools; til en fritstående pool er pumpen i forvejen lille.</p>

<h2>Læg filtreringen i de billige timer</h2>
<p>Det er ligegyldigt for vandet, om det filtreres kl. 3 eller kl. 18, så længe det sker hver dag. Med pumpens indbyggede timer eller en smart stikkontakt kan filtreringen lægges, hvor strømmen er billigst. Oversigten over dagens timepriser ovenfor viser det billigste og det dyreste vindue i dag. Del gerne døgnets timer i to blokke — én om natten og én midt på dagen — så vandet cirkulerer, også når poolen bruges, og så klor fordeles jævnt.</p>
<p>Har du en varmepumpe på poolen, skal poolpumpen køre, når varmepumpen kører. Så giver det mening at styre dem sammen og vælge de timer, der passer til begge.</p>
<p>Sådan regner du din egen pumpe ud: find effekten på typeskiltet eller i manualen, gang med timerne pr. dag og med antallet af dage i sæsonen. En pumpe på 450 W i 6 timer i 120 dage bruger 0,45 × 6 × 120 = 324 kWh, svarende til {{kr 324}}. Har pumpen flere hastigheder, så regn hver hastighed for sig med dens egen effekt og de timer, den kører. Er du i tvivl om effekten, kan en stikmåler vise den direkte, når pumpen sidder i en almindelig stikkontakt.</p>

<h2>Sådan sænker du poolpumpens forbrug</h2>
<ul>
<li><strong>Brug timeren</strong> — find det antal timer, der holder vandet klart, og ikke flere.</li>
<li><strong>Rens filteret</strong> — et tilstoppet filter giver modstand, så pumpen arbejder hårdere for den samme vandmængde.</li>
<li><strong>Hold skimmerkurven ren</strong> — blade og græs i kurven har samme effekt som et snavset filter.</li>
<li><strong>Overdæk poolen</strong> — mindre snavs i vandet betyder færre filtertimer.</li>
<li><strong>Vælg den rigtige størrelse</strong> — en for stor pumpe på én hastighed bruger mere strøm, end poolen kræver.</li>
<li><strong>Overvej variabel hastighed</strong> ved en større nedgravet pool.</li>
</ul>
<p>Et <a href="/vildmarksbad/">vildmarksbad</a> eller et spabad har også en pumpe, men vandmængden er langt mindre, og det er opvarmningen, der dominerer. På siden om <a href="/pool/">poolen</a> finder du forbruget for hele anlægget.</p>`,
  faqs: [
    { question: "Hvor meget strøm bruger en poolpumpe?", answer: "Lige så meget som dens effekt i hver time: et sandfilteranlæg på 450 W bruger 0,45 kWh i timen, svarende til {{kr 0,45}} ved {{pris_kwh}}. Med 8 timer om dagen i 150 dage bliver det ca. 540 kWh, svarende til {{kr 540}}." },
    { question: "Hvor mange timer om dagen skal poolpumpen køre?", answer: "Nok til at vandet bliver filtreret mindst én gang. Swim & Funs anlæg på 8.000 liter i timen skal bruge godt fire timer til en pool på 33.000 liter. PNNL skriver, at pumper med én hastighed typisk kører mindst 5-6 timer." },
    { question: "Kan jeg lade poolpumpen køre om natten?", answer: "Ja. Vandet er ligeglad med tidspunktet, så filtreringen kan lægges i dagens billige timer med pumpens timer eller en smart stikkontakt. Del gerne timerne i to blokke." },
    { question: "Sparer en poolpumpe med variabel hastighed strøm?", answer: "Ifølge PNNL 50-90 procent. En pumpe på 1,5 hk falder fra ca. 2.000 W til 593 W, når hastigheden sænkes med 30 procent." },
    { question: "Hvad koster det at lade poolpumpen køre døgnet rundt?", answer: "For en pumpe på 450 W er det 10,8 kWh i døgnet, svarende til {{kr 10,8}}, og ca. 1.620 kWh på en sæson på 150 dage — tre gange så meget som med 8 timer om dagen." },
  ],
  relatedSlugs: ["pool", "poolvarmepumpe", "vildmarksbad", "spabad", "cirkulationspumpe"],
  sources: [
    { name: "Bauhaus — Pumpe Swim & Fun med timer, 450 W", url: "https://www.bauhaus.se/pump-swim-fun-med-timer-450w" },
    { name: "Pacific Northwest National Laboratory (Building America Solution Center) — Variable-Speed Pool Pumps", url: "https://basc.pnnl.gov/resource-guides/variable-speed-pool-pumps" },
  ],
  calculatorConfig: {
    title: "Beregn poolpumpens strømforbrug",
    options: [
      { label: "Lille pumpe, 250 W", kwhPerUse: 0.25 },
      { label: "Sandfilteranlæg, 450 W", kwhPerUse: 0.45 },
      { label: "Variabel hastighed, ca. 600 W", kwhPerUse: 0.6 },
      { label: "Nedgravet pool, ca. 2.000 W", kwhPerUse: 2.0 },
    ],
    usageLabel: "Timer pr. dag (sæson på ca. 150 dage)",
    usageUnit: "timer/dag",
    usageMin: 1,
    usageMax: 24,
    usageDefault: 8,
    usageStep: 1,
    per: "time",
    perYear: 150,
  },
  publishDate: "2026-12-08",
  updated: "2026-11-22",
};

export default poolpumpe;
