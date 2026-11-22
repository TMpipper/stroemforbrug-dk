import type { ApplianceData } from "@/lib/types";

const infraroedtVarmepanel: ApplianceData = {
  slug: "infraroedt-varmepanel",
  meta: {
    category: "varme",
    usage: "heating",
    hasEuLabel: false,
    shiftable: false,
    motif: "radiator",
    synonyms: [
      "infrarødt varmepanel",
      "infrarød varme",
      "infrarød radiator",
      "ir-panel",
      "ir-varmepanel",
      "infrarødt panel",
      "varmepanel med spejl",
      "infrarød varmeplade",
    ],
  },
  name: "Varmepanel (infrarødt)",
  article: "et",
  title: "Infrarødt varmepanel strømforbrug (2026) → Watt, m² og kWh",
  description:
    "Et infrarødt varmepanel på 500 W varmer ca. 9-12 m² og bruger 0,5 kWh i timen, når det er tændt. Se forbruget for en vinter og sammenlignet med en elradiator.",
  heading: "Strømforbrug for et infrarødt varmepanel: kWh om året, pris pr. måned og billige timer",
  quickAnswer:
    "Et infrarødt varmepanel bruger lige så mange kWh i timen, som det har kilowatt, når det er tændt: et panel på 500 W bruger 0,5 kWh i timen og koster {{kr 0,5}} i timen ved {{pris_kwh}}. Med termostat og seks timer om dagen i fyringssæsonen bliver det efter vores beregning ca. 320 kWh om året, svarende til {{kr 320}}. Strålevarmen gør ikke strømmen billigere — det er rummet, temperaturen og timerne, der bestemmer regningen.",
  kwhRange: [80, 1500],
  typicalKwh: 320,
  wattage: 500,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [2.05, 1.8, 1.45, 0.8, 0.25, 0.05, 0, 0.05, 0.35, 1.1, 1.85, 2.25],
  content: `<h2>Strålevarme i stedet for varm luft</h2>
<p>Et infrarødt varmepanel er en tynd plade, typisk hvid, i glas eller som et spejl, der sender varmen ud som infrarød stråling. Bolius beskriver forskellen sådan: hvor en almindelig radiator varmer luften i rummet, varmer et infrarødt panel de flader, strålerne rammer — vægge, møbler, gulv og dig selv. Varmen føles som sol på huden. Til gengæld har panelerne en begrænset rækkevidde: ifølge Bolius typisk 3-4 meter, hvorefter strålingen mister sin intensitet, og nogle materialer kan strålerne hverken varme eller trænge igennem.</p>
<p>Det betyder, at placeringen afgør meget. Et panel i loftet over et skrivebord eller på væggen over for sofaen giver mest, mens et panel bag en reol mest varmer reolen. Bagsiden er behandlet, så varmen ikke sendes ind i væggen, og Bolius anbefaler at følge producentens anvisning for, hvor højt og hvor tæt på andre ting panelet må sidde.</p>

<h2>Watt og rumstørrelse</h2>
<p>Strømforbruget er enkelt: al strømmen bliver til varme, præcis som i en <a href="/elradiator/">elradiator</a>. Et panel på 500 W bruger 0,5 kWh i hver time, det er tændt. Den britiske producent Herschel angiver for sine spejlpaneler, hvor stort et rum hver størrelse kan varme, med det forbehold, at tallene forudsætter et middel til godt isoleret rum med 2,40 meter til loftet:</p>
<table>
<thead><tr><th>Panel (Herschel Inspire Mirror)</th><th>Rum</th><th>kWh i timen (tændt)</th><th>Pris i timen</th></tr></thead>
<tbody>
<tr><td>350 W, 60 × 60 cm</td><td>6-8 m²</td><td>0,35</td><td>{{kr 0,35}}</td></tr>
<tr><td>500 W, 60 × 85 cm</td><td>9-12 m²</td><td>0,5</td><td>{{kr 0,5}}</td></tr>
<tr><td>700 W, 60 × 120 cm</td><td>13-15 m²</td><td>0,7</td><td>{{kr 0,7}}</td></tr>
</tbody>
</table>
<p>Det svarer til omkring 45-55 W pr. m² i et rum, der i forvejen er nogenlunde tæt. I et koldt rum med store vinduer skal der mere til, og så kører termostaten oftere.</p>

<h2>Hvad bruger et panel på en vinter?</h2>
<p>Med en termostat er panelet kun tændt en del af tiden. Hvor stor en del afhænger af rummet, og det kan kun en måling vise. Vi regner som udgangspunkt med, at termostaten holder panelet tændt halvdelen af den tid, du bruger rummet, og med fyringssæsonen fra oktober til april. Regnestykket er vores eget skøn:</p>
<table>
<thead><tr><th>Brug (fyringssæson, termostat ca. halvdelen af tiden)</th><th>kWh om året</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>350 W i et soveværelse, 4 timer om dagen</td><td>ca. 150</td><td>{{kr 150}}</td></tr>
<tr><td>500 W på et hjemmekontor, 6 timer om dagen</td><td>ca. 320</td><td>{{kr 320}}</td></tr>
<tr><td>700 W i en stue, 8 timer om dagen</td><td>ca. 590</td><td>{{kr 590}}</td></tr>
<tr><td>700 W på fuld effekt i et koldt rum, 8 timer om dagen</td><td>ca. 1.190</td><td>{{kr 1190}}</td></tr>
</tbody>
</table>
<p>Den sidste række er grunden til, at et infrarødt panel ikke er et billigt hovedvarmeanlæg. Bolius skriver, at panelerne kan være et supplement til den eksisterende opvarmning, men ikke bør stå alene, og at opvarmning med elradiatorer — som panelerne svarer til i forbrug pr. kWh varme — er den dyreste måde at varme et hus op på.</p>

<h2>Sparer infrarød varme strøm?</h2>
<p>Sælgere af infrarøde paneler fremhæver ofte, at strålevarmen giver mere komfort for den samme strøm. Det har en kerne af sandhed: når vægge og møbler er varme, kan du føle dig lun ved en lidt lavere lufttemperatur, og en lavere temperatur giver et mindre varmetab. Men panelet laver ikke mere varme af en kWh end en elradiator eller en <a href="/olieradiator/">olieradiator</a>. Én kWh strøm bliver til én kWh varme.</p>
<p>Bolius' energirådgiver er da heller ikke overbevist om, at man kan spare meget. Panelerne beskrives som en effektiv og velfungerende varmekilde, men de er dyre at købe, og med termostater og styring bliver tilbagebetalingstiden meget, meget lang sammenlignet med helt almindelige elpaneler. Rådet er at bruge dem som supplement til særlige steder i huset, for eksempel badeværelset, hvor et panel med spejl både varmer og holder spejlet fri for dug. Skal et helt hus varmes op med el, er en <a href="/varmepumpe/">varmepumpe</a> en anden klasse, fordi den henter flere kWh varme ud af luften for hver kWh strøm.</p>

<h2>Krav til styring — og hvorfor der ikke er et energimærke</h2>
<p>Infrarøde paneler er elektriske lokale rumvarmere. De har ikke et EU-energimærke: forordning 2015/1186 om energimærkning af lokale rumvarmere gælder udtrykkeligt ikke for elektriske varmere. Til gengæld skal de overholde EU's ecodesignkrav i forordning 2015/1188. Siden 2018 skal en fast monteret elvarmer over 250 W have en sæsoneffektivitet på mindst 38 procent, og det tal nås kun med elektronisk styring: termostat, ugeprogram, registrering af åbne vinduer og lignende.</p>
<p>Kravet siger ikke noget om, hvor meget varme panelet giver pr. kWh — det er altid det samme — men om, hvor godt det undgår at varme, når ingen har brug for det. Vælg derfor et panel med en termostat, der måler i rummet, og helst et ugeprogram, så det ikke kører i tomme timer.</p>

<h2>Hvornår bruger panelet strømmen?</h2>
<p>Et infrarødt panel lagrer ingen varme. Det er netop pointen: strålevarmen mærkes, kort efter panelet tænder, og forsvinder, når det slukker. Det gør det godt til rum, der kun bruges en del af dagen, men det betyder også, at strømmen bruges, når du er i rummet — ofte om aftenen, hvor timeprisen er højest. Du kan ikke varme op om natten og bruge varmen senere. Det realistiske greb er at lade termostaten eller en timer starte panelet kort før, du skal bruge rummet, i stedet for at lade det stå tændt hele dagen. Sammenlign med <a href="/gulvvarme/">gulvvarmen</a>, hvor et tungt betongulv kan gemme varme i nogle timer. Skal du kun holde frosten væk fra rør eller tagrender, er et <a href="/varmekabel/">varmekabel</a> en helt anden og langt mindre post end et panel, der varmer et rum.</p>

<h2>Sådan holder du forbruget nede</h2>
<ul>
<li><strong>Brug det som supplement</strong> — til et rum eller en zone, ikke som husets eneste varme.</li>
<li><strong>Placér det rigtigt</strong> — inden for 3-4 meter af der, hvor du sidder, og med frit udsyn til dig.</li>
<li><strong>Vælg den rigtige størrelse</strong> — et for stort panel varmer hurtigt, men det er rummets varmetab, der bestemmer forbruget.</li>
<li><strong>Termostat og ugeprogram</strong> — sluk i de timer, rummet står tomt.</li>
<li><strong>Sænk temperaturen en grad</strong> — med strålevarme føles en lidt lavere lufttemperatur ofte lige så behagelig.</li>
<li><strong>Tænk på sikkerheden</strong> — Bolius anbefaler en egentlig børnesikring, hvis små børn kan røre ved panelet, og en sikker installation.</li>
</ul>`,
  faqs: [
    { question: "Hvor meget strøm bruger et infrarødt varmepanel i timen?", answer: "Lige så meget som dets effekt, når det er tændt: 0,35 kWh for et panel på 350 W og 0,7 kWh for et på 700 W. Det koster {{kr 0,35}}-{{kr 0,7}} i timen ved {{pris_kwh}}. Termostaten slukker det, når rummet er varmt." },
    { question: "Er infrarød varme billigere end en elradiator?", answer: "Ikke pr. kWh varme — begge omsætter én kWh strøm til én kWh varme. Strålevarmen kan gøre en lidt lavere lufttemperatur behagelig, men Bolius' rådgiver er ikke overbevist om, at man sparer meget, og tilbagebetalingstiden er lang." },
    { question: "Hvor stort et rum kan et infrarødt panel varme?", answer: "Herschel angiver 6-8 m² for 350 W, 9-12 m² for 500 W og 13-15 m² for 700 W i et middel til godt isoleret rum. Bolius skriver, at strålerne typisk rækker 3-4 meter." },
    { question: "Hvad koster et infrarødt panel om vinteren?", answer: "Et panel på 500 W, der bruges seks timer om dagen i fyringssæsonen med termostaten tændt halvdelen af tiden, bruger efter vores beregning ca. 320 kWh, svarende til {{kr 320}}." },
    { question: "Har infrarøde varmepaneler et energimærke?", answer: "Nej. EU's energimærke for lokale rumvarmere gælder ikke elektriske varmere. Panelerne skal dog have en styring, der lever op til ecodesignkravet om mindst 38 procent sæsoneffektivitet." },
  ],
  relatedSlugs: ["elradiator", "olieradiator", "varmepumpe", "varmekabel", "gulvvarme"],
  sources: [
    { name: "Bolius — Infrarøde varmepaneler", url: "https://www.bolius.dk/infraroede-varmepaneler-99072" },
    { name: "Bolius — Infrarøde radiatorer", url: "https://www.bolius.dk/infraroede-radiatorer-2374" },
    { name: "Bolius — Opvarmning med elradiator", url: "https://www.bolius.dk/opvarmning-med-elradiator-17060" },
    { name: "Herschel Infrared — Inspire Mirror (effekt og rumstørrelse)", url: "https://www.herschel-infrared.co.uk/product/inspire-mirror/" },
    { name: "Forordning (EU) 2015/1188, bilag II — krav til lokale rumvarmere", url: "https://www.legislation.gov.uk/eur/2015/1188/annex/II" },
    { name: "Forordning (EU) 2015/1186, artikel 1 — energimærkning af lokale rumvarmere", url: "https://www.legislation.gov.uk/eur/2015/1186/article/1" },
  ],
  calculatorConfig: {
    title: "Beregn varmepanelets strømforbrug",
    options: [
      { label: "350 W (6-8 m²), termostat ca. halvdelen af tiden", kwhPerUse: 0.175 },
      { label: "500 W (9-12 m²), termostat ca. halvdelen af tiden", kwhPerUse: 0.25 },
      { label: "700 W (13-15 m²), termostat ca. halvdelen af tiden", kwhPerUse: 0.35 },
      { label: "700 W på fuld effekt (koldt rum)", kwhPerUse: 0.7 },
    ],
    usageLabel: "Timer i brug pr. dag (fyringssæsonen, ca. 212 dage)",
    usageUnit: "timer/dag",
    usageMin: 1,
    usageMax: 24,
    usageDefault: 6,
    usageStep: 0.5,
    per: "time",
    perYear: 212,
  },
  publishDate: "2026-12-07",
  updated: "2026-11-22",
};

export default infraroedtVarmepanel;
