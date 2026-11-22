import type { ApplianceData } from "@/lib/types";

/**
 * Espressomaskine — vinklen er opvarmning, kedeltype og standby (kaffemaskine-siden dækker filter/kapsel pr. kop).
 * Tal: Topten.eu (EN 60661-målinger pr. model), Kaffeemacher (0,42 vs. 0,18 kWh pr. dag i et 2×2-cappuccino-scenarie;
 * La Marzocco GS3 0,6 kWh første time), Topten-policy (EU's auto-sluk 30 min., intet EU-energimærke).
 * Beregneren: kWh pr. »tænding« (opvarmning + 1–2 drikke), antal tændinger pr. dag × 365.
 */
const espressomaskine: ApplianceData = {
  slug: "espressomaskine",
  meta: {
    category: "koekken",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: false,
    motif: "elkedel",
    synonyms: ["espressomaskine", "espresso maskine", "fuldautomatisk kaffemaskine", "fuldautomat", "portafilter", "dobbeltkedel", "bønnemaskine", "sage barista", "delonghi magnifica"],
  },
  name: "Espressomaskine",
  title: "Espressomaskine strømforbrug (2026) → opvarmning og standby",
  description:
    "Se hvor meget strøm en espressomaskine bruger pr. opvarmning, om året og på standby – fuldautomat, portafilter med termoblok, enkeltkedel og dobbeltkedel.",
  heading: "Strømforbrug for en espressomaskine: kWh, pris pr. gang og dyreste timer",
  quickAnswer:
    "En espressomaskine bruger typisk 0,05–0,2 kWh, hver gang den tændes og laver et par kopper, og 45–150 kWh om året. Det meste går til at varme kedlen op og holde den varm, ikke til selve kaffen. En fuldautomat, der tændes tre gange om dagen, bruger omkring 110 kWh om året, eller {{kr 110}} ved månedens elpris, mens en dobbeltkedel, der står tændt hele formiddagen, kan bruge flere gange så meget.",
  kwhRange: [40, 450],
  typicalKwh: 110,
  wattage: 1450,
  standbyWatts: 0.5,
  energyLabels: [],
  models: [
    { brand: "Sage", model: "the Barista Pro", kwh: 44.5 },
    { brand: "Sage", model: "the Bambino Plus", kwh: 51.2 },
    { brand: "De'Longhi", model: "Dinamica ECAM350.75.SB", kwh: 57 },
    { brand: "De'Longhi", model: "Magnifica S ECAM 22.110.SB", kwh: 59 },
    { brand: "Siemens", model: "EQ.6 plus s300", kwh: 65 },
  ],
  seasonalProfile: [1.02, 1.0, 1.0, 1.0, 0.98, 0.97, 0.95, 0.97, 1.0, 1.02, 1.03, 1.06],
  content: `<h2>Hvor meget strøm bruger en espressomaskine?</h2>
<p>En espressomaskine skal have vand op på omkring 90–95 grader under tryk, og til mælkeskum skal der damp på over 100 grader. Selve kaffen kræver ikke meget energi – en espresso er kun 25–40 ml vand. Det, der koster strøm, er at varme maskinens metal og kedel op og at holde den varm, mens den venter på næste kop. Derfor er det ikke antallet af kopper, men hvor mange gange maskinen tændes, og hvor længe den står klar, der afgør forbruget.</p>
<p>For en typisk fuldautomat eller en portafiltermaskine med termoblok går der 0,05–0,1 kWh til en opvarmning med et par kopper. En klassisk portafiltermaskine med én kedel bruger omkring det dobbelte. En stor dobbeltkedelmaskine kan bruge over en halv kWh i den første time. Tændes en fuldautomat tre gange om dagen, bliver det omkring 110 kWh om året, eller {{kr 110}} ved månedens elpris.</p>
<p>Laver du almindelig filterkaffe eller bruger kapsler, er det siden om <a href="/kaffemaskine/">kaffemaskinens strømforbrug</a>, du skal kigge på. Her handler det om espressomaskiner: fuldautomater, portafiltermaskiner og de kedeltyper, der gør forskellen.</p>

<h2>Forbrug efter maskintype</h2>
<p>Den schweiziske organisation Topten måler kaffemaskiners energiforbrug efter den europæiske standard EN 60661 og offentliggør årsforbruget for de mest effektive modeller. Her ligger de bedste fuldautomater og termoblokmaskiner på 45–67 kWh om året. Den tyske kaffeforhandler Kaffeemacher har målt en række portafiltermaskiner i et scenarie med to cappuccino om morgenen og to om eftermiddagen: de sparsomme maskiner brugte 0,18 kWh om dagen (omkring 65 kWh om året), mens de mere krævende brugte 0,42 kWh om dagen (omkring 150 kWh om året).</p>
<table>
<thead><tr><th>Maskintype</th><th>Opvarmning til klar</th><th>kWh pr. tænding med 1–2 drikke</th><th>Pris pr. tænding</th><th>kWh om året ved 2 tændinger om dagen</th></tr></thead>
<tbody>
<tr><td>Portafilter med termoblok/termojet</td><td>Få minutter</td><td>0,06 kWh</td><td>{{kr 0,06}}</td><td>44 kWh</td></tr>
<tr><td>Fuldautomat (bønne til kop)</td><td>1–2 minutter</td><td>0,10 kWh</td><td>{{kr 0,1}}</td><td>73 kWh</td></tr>
<tr><td>Portafilter med én kedel</td><td>10–20 minutter</td><td>0,21 kWh</td><td>{{kr 0,21}}</td><td>153 kWh</td></tr>
<tr><td>Dobbeltkedel, tændt en time</td><td>Op til 40 minutter</td><td>0,6 kWh</td><td>{{kr 0,6}}</td><td>438 kWh</td></tr>
</tbody>
</table>
<p>Tallene for termoblok og fuldautomat ligger tæt på Toptens målinger, enkeltkedlen svarer til Kaffeemachers krævende maskiner, og dobbeltkedlen bygger på Kaffeemachers måling af en La Marzocco GS3 med en kedel på 1,5 liter til kaffe og 3,5 liter til damp, som brugte 0,6 kWh i den første time. Det er et spænd på en faktor ti mellem typerne, selv om de laver den samme kop kaffe.</p>

<h2>Kedlen er det, der bestemmer forbruget</h2>
<p><strong>Termoblok og termojet</strong> varmer vandet, mens det løber igennem. Der er næsten intet varmt vand at holde på, så maskinen er klar på kort tid og bruger kun strøm, mens du laver kaffe. Det er derfor de mest sparsomme af de fire typer.</p>
<p><strong>Fuldautomater</strong> bruger som regel også et gennemløbselement og varmer kun bryggeenheden op. Til gengæld skyller de ofte med varmt vand, når de tændes og slukkes. Det koster lidt, men ikke meget.</p>
<p><strong>Enkeltkedel</strong> betyder, at der står en metalkedel med vand, der skal varmes op og holdes varm. Skal du skumme mælk, skal kedlen op på damptemperatur bagefter, og det tager flere minutter og ekstra energi.</p>
<p><strong>Dobbeltkedel</strong> har både en kaffekedel og en dampkedel, ofte med flere liter vand og en tung messingbryggegruppe. Det giver en stabil temperatur og hurtig damp – og det højeste forbrug. Kaffeemacher skriver, at en dobbeltkedelmaskine kan være op til 40 minutter om at blive klar, og hele den tid går strømmen til at varme metal og vand op. Mange dobbeltkedelmaskiner kan slukke dampkedlen, hvis du kun drikker espresso, og Kaffeemacher måler netop forbruget med og uden damp, fordi forskellen er stor.</p>

<h2>Standby og auto-sluk: EU's 30-minutters-regel</h2>
<p>Der findes ikke noget EU-energimærke for kaffemaskiner, men EU's standbyregler kræver, at husholdningsespressomaskiner selv slukker eller går i standby senest 30 minutter efter sidste kop, eller 30 minutter efter at varmeelementet er tændt. Kravet stod første gang i forordning 801/2013 og er videreført i den nuværende standbyforordning 2023/826. Topten anbefaler et standbyforbrug på højst 0,5 W, og de fleste nyere maskiner ligger på eller under det – det giver højst 4–5 kWh om året.</p>
<p>Problemet er, at mange maskiner lader dig ændre slukketiden til flere timer. Topten påpeger, at så er besparelsen væk igen. En enkeltkedelmaskine, der står klar hele formiddagen, holder kedlen varm time efter time, og det kan let blive 0,1 kWh i timen eller mere. Står maskinen tændt fem timer om dagen, svarer det til over 180 kWh om året ekstra, eller {{kr 180}}. Det er den største enkeltpost for mange hjemmebaristaer – større end kaffen selv.</p>
<p>Smarte stikkontakter med ugeprogram er populære hos ejere af dobbeltkedelmaskiner: maskinen tændes automatisk 30–40 minutter før du står op, og slukkes igen efter morgenkaffen. Det giver en varm maskine uden at den står og varmer hele natten.</p>

<h2>Kværn, mælkesystem og skylleprogrammer</h2>
<p>Ud over kedlen har en espressomaskine nogle mindre forbrugere. Kværnen i en fuldautomat eller en separat kaffekværn kører kun nogle sekunder pr. kop, og selv en kraftig motor bruger derfor kun en lille brøkdel af en kWh om året – den kan du se bort fra. Mælkesystemet i en fuldautomat bruger damp eller et separat varmeelement, og her gælder det samme som for kedlen: det er opvarmningen, der koster. Automatiske skylleprogrammer bruger varmt vand, hver gang maskinen tændes og slukkes. Det er få procent af forbruget, men på en maskine, der tændes og slukkes mange gange om dagen, løber det op. Kan du vælge at skylle kun ved slukning, er det et lille, men gratis valg.</p>

<h2>Hvornår på døgnet bruger espressomaskinen strøm?</h2>
<p>Espressomaskinen bruges, når du drikker kaffe, og for de fleste er det om morgenen. Kl. 7–9 er en af døgnets to pristoppe, fordi hele landet står op samtidig. Det kan du ikke rigtig flytte, men forskellen pr. kop er lille: selv for en dobbeltkedel er en dyr morgentime kun nogle få øre dyrere pr. drik end en billig time. Det, der flytter regningen, er at undgå, at maskinen står og holder sig varm i timevis.</p>

<h2>Sådan sparer du strøm på espressomaskinen</h2>
<ol>
<li><strong>Behold auto-sluk på fabriksindstillingen</strong> – eller kortere. Det er den nemmeste besparelse på alle typer.</li>
<li><strong>Saml kopperne</strong> – to cappuccino på én opvarmning bruger langt mindre end to opvarmninger.</li>
<li><strong>Sluk dampkedlen</strong>, hvis maskinen kan, og du kun drikker espresso.</li>
<li><strong>Brug en timer</strong> til dobbeltkedelmaskiner, så de ikke står tændt hele dagen.</li>
<li><strong>Afkalk efter anvisningen</strong> – kalk på varmeelementet gør opvarmningen langsommere.</li>
<li><strong>Vælg termoblok eller fuldautomat</strong>, hvis du laver en kop ad gangen og ikke har brug for en tung bryggegruppe.</li>
<li><strong>Skum mælken på en anden måde</strong> – en elektrisk mælkeskummer bruger mindre end at varme en stor dampkedel op for én latte.</li>
</ol>
<p>Varmt vand til te eller kakao er billigere i en <a href="/elkedel/">elkedel</a> end fra espressomaskinens varmtvandsdyse, fordi kedlen ikke skal varme en tung maskine op. Har du en <a href="/quooker/">kogende vand-hane</a>, er den et alternativ til det varme vand – men den holder selv vand varmt døgnet rundt.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en espressomaskine pr. kop?",
      answer:
        "Det afhænger mest af, hvor mange kopper du laver pr. opvarmning. En fuldautomat bruger omkring 0,1 kWh pr. tænding med 1–2 drikke, svarende til {{kr 0,1}}. En enkeltkedelmaskine bruger omkring 0,2 kWh, og en dobbeltkedel op til 0,6 kWh i den første time.",
    },
    {
      question: "Hvor mange kWh bruger en espressomaskine om året?",
      answer:
        "Typisk 45–150 kWh. De mest effektive fuldautomater og termoblokmaskiner bruger 45–67 kWh om året i Toptens målinger, mens en enkeltkedelmaskine let når 150 kWh. En fuldautomat, der tændes tre gange om dagen, koster omkring {{kr 110}} om året.",
    },
    {
      question: "Bruger en dobbeltkedelmaskine meget strøm?",
      answer:
        "Ja, især hvis den står tændt længe. En La Marzocco GS3 brugte 0,6 kWh i den første time i Kaffeemachers måling, svarende til {{kr 0,6}}. Står den tændt hele formiddagen, kan det blive flere kWh om dagen.",
    },
    {
      question: "Skal espressomaskinen slukke af sig selv?",
      answer:
        "Ja. EU's standbyregler kræver, at husholdningsespressomaskiner slukker eller går i standby senest 30 minutter efter sidste kop. Ændrer du indstillingen til flere timer, forsvinder besparelsen.",
    },
    {
      question: "Hvor meget bruger en espressomaskine på standby?",
      answer:
        "De fleste nyere maskiner bruger 0–0,5 W på standby, altså højst 4–5 kWh om året, svarende til {{kr 4,4}}. Det er opvarmningen og ventetiden, der koster, ikke standby.",
    },
    {
      question: "Er en fuldautomat billigere i drift end en portafiltermaskine?",
      answer:
        "Det kommer an på kedlen. En fuldautomat bruger typisk mindre end en portafiltermaskine med kedel, men en portafiltermaskine med termoblok, som Sage Bambino Plus på 51 kWh om året, er lige så sparsom.",
    },
  ],
  relatedSlugs: ["kaffemaskine", "elkedel", "slow-cooker", "vinkoeleskab", "quooker"],
  sources: [
    { name: "Topten.eu — Coffee machines (årsforbrug pr. model, EN 60661)", url: "https://www.topten.eu/private/products/coffee_machines" },
    { name: "Topten.eu — Household coffee machines: recommendations for policy design (maj 2022)", url: "https://storage.topten.eu/source/files/Policy%20recommendations/Policy_recommendations_Household_coffee_machines.pdf" },
    { name: "Kaffeemacher — Espresso and environmental awareness: the impact of energy consumption", url: "https://kaffeemacher.de/en/blogs/kaffeewissen/espresso-and-environmental-awareness-the-impact-of-energy-consumption" },
  ],
  calculatorConfig: {
    title: "Espressomaskine forbrugsberegner",
    options: [
      { label: "Portafilter med termoblok/termojet", kwhPerUse: 0.06 },
      { label: "Fuldautomat (bønne til kop)", kwhPerUse: 0.1 },
      { label: "Portafilter med én kedel", kwhPerUse: 0.21 },
      { label: "Dobbeltkedel, tændt en time", kwhPerUse: 0.6 },
    ],
    usageLabel: "Antal gange maskinen tændes pr. dag",
    usageUnit: "gange pr. dag",
    usageMin: 1,
    usageMax: 8,
    usageDefault: 2,
    usageStep: 1,
    per: "tænding",
    perYear: 365,
  },
  publishDate: "2026-11-24",
  updated: "2026-11-22",
};

export default espressomaskine;
