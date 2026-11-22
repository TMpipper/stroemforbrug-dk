import type { ApplianceData } from "@/lib/types";

/**
 * Slow cooker — Tænk målte 0,372 kWh for en kylling på 4 timer (nov. 2022, mod 0,79 kWh i ovnen); mærkeeffekter
 * 93–320 W for rene slow cookere og 630–1.200 W for multicookere (testundtipps.de, okt. 2026). Intet EU-energimærke.
 */
const slowCooker: ApplianceData = {
  slug: "slow-cooker",
  meta: {
    category: "koekken",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: true,
    motif: "ovn",
    synonyms: ["slow cooker", "slowcooker", "langtidskoger", "crockpot", "crock-pot", "multicooker", "langtidsstegning"],
  },
  name: "Slow cooker",
  title: "Slow cooker strømforbrug (2026) → kWh pr. gang vs. ovn",
  description:
    "Se hvor meget strøm en slow cooker bruger pr. gang på LOW og HIGH, hvad den koster mod ovn og gryde, og hvornår på døgnet det er billigst at lade den simre.",
  heading: "Strømforbrug for en slow cooker: kWh, pris pr. gang og billigste tidspunkt",
  quickAnswer:
    "En slow cooker bruger typisk 0,4–1,3 kWh pr. gang, afhængigt af størrelse og om den kører 4 timer på HIGH eller 8 timer på LOW. En almindelig ret på 8 timer koster omkring {{kr 0,8}} ved månedens elpris. Forbrugerrådet Tænk målte, at en kylling i slow cooker brugte under halvdelen af strømmen i ovnen.",
  kwhRange: [15, 150],
  typicalKwh: 42,
  wattage: 200,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.5, 1.4, 1.2, 0.9, 0.6, 0.4, 0.35, 0.4, 0.8, 1.2, 1.5, 1.75],
  content: `<h2>Hvor meget strøm bruger en slow cooker?</h2>
<p>En slow cooker er en keramisk gryde i et varmeelement med lav effekt. Hvor en ovn trækker flere tusinde watt, ligger en ren slow cooker på 93–320 W ifølge en gennemgang af femten modeller fra det tyske testsite testundtipps.de. Den kører længe, men så svagt, at det samlede forbrug alligevel er lavt. En typisk ret på 8 timer på LOW i en slow cooker på 3,5 liter bruger omkring 0,8 kWh, svarende til {{kr 0,8}} ved månedens elpris.</p>
<p>Forbrugerrådet Tænk målte i 2022, hvor meget strøm det kræver at tilberede en hel kylling i seks forskellige apparater. Slow cookeren brugte 0,372 kWh på 4 timer – mindre end halvdelen af ovnens 0,79 kWh og næsten det samme som trykkogeren. Det svarer til {{kr 0,37}} for kyllingen i slow cooker mod {{kr 0,79}} i ovnen.</p>
<p>Laver du én slow cooker-ret om ugen, bliver det omkring 42 kWh om året, eller {{kr 42}}. Det er mindre end mange andre køkkenapparater, og meget af forbruget erstatter ovnen eller kogepladen, som ellers ville have brugt mere.</p>

<h2>Forbrug på LOW, HIGH og keep warm</h2>
<p>De fleste slow cookere har tre trin: LOW, HIGH og keep warm (hold varm). På mange modeller er forskellen mellem LOW og HIGH ikke, hvor varm maden bliver til sidst – den ender omkring kogepunktet i begge tilfælde – men hvor hurtigt den når derop. LOW tager typisk 2–2,5 gange så lang tid som HIGH. Producenterne oplyser sjældent effekten for hvert trin, så det præcise forbrug pr. trin er svært at få bekræftet. Tænks måling på 4 timer svarer til et gennemsnit på omkring 93 W, altså klart under mærkeeffekten, fordi elementet ikke kører fuldt hele tiden.</p>
<table>
<thead><tr><th>Brug</th><th>Typisk tid</th><th>kWh pr. gang</th><th>Pris pr. gang</th></tr></thead>
<tbody>
<tr><td>HIGH, lille gryde (som Tænks kylling)</td><td>4 timer</td><td>0,4 kWh</td><td>{{kr 0,4}}</td></tr>
<tr><td>LOW, 3,5 liter</td><td>8 timer</td><td>0,8 kWh</td><td>{{kr 0,8}}</td></tr>
<tr><td>LOW, stor gryde på 6 liter</td><td>8–10 timer</td><td>1,3 kWh</td><td>{{kr 1,3}}</td></tr>
<tr><td>Multicooker med brunefunktion</td><td>Brunes 15 min. + 6 timer</td><td>1,0 kWh</td><td>{{kr 1}}</td></tr>
<tr><td>Keep warm bagefter</td><td>2 timer</td><td>0,1–0,2 kWh</td><td>{{kr 0,1-0,2}}</td></tr>
</tbody>
</table>
<p>Det øverste loft er let at regne: mærkeeffekten gange tiden. En slow cooker på 200 W kan højst bruge 1,6 kWh på 8 timer, og en på 320 W højst 2,56 kWh. Testundtipps.de regner netop sådan og kalder det en øvre grænse, fordi termostaten slår fra en del af tiden. I praksis ligger forbruget lavere, som Tænks måling viser.</p>

<h2>Slow cooker mod ovn, gryde og trykkoger</h2>
<p>Tænks kyllingemåling er en af de få danske målinger, hvor de samme råvarer er tilberedt i flere apparater. Den giver et godt billede af, hvor slow cookeren ligger:</p>
<table>
<thead><tr><th>Apparat</th><th>Tid</th><th>Målt forbrug</th><th>Pris</th></tr></thead>
<tbody>
<tr><td>Ovn (forvarmet til 200 grader)</td><td>1 time</td><td>0,79 kWh</td><td>{{kr 0,79}}</td></tr>
<tr><td>Airfryer</td><td>40 minutter</td><td>0,64 kWh</td><td>{{kr 0,64}}</td></tr>
<tr><td>Pande (brunet og simret)</td><td>51 minutter</td><td>0,50 kWh</td><td>{{kr 0,5}}</td></tr>
<tr><td>Trykkoger</td><td>33 minutter</td><td>0,38 kWh</td><td>{{kr 0,38}}</td></tr>
<tr><td>Slow cooker</td><td>4 timer</td><td>0,37 kWh</td><td>{{kr 0,37}}</td></tr>
<tr><td>Mikroovn (i stegepose)</td><td>19 minutter</td><td>0,29 kWh</td><td>{{kr 0,29}}</td></tr>
</tbody>
</table>
<p>Tænk understreger, at målingerne gælder de konkrete apparater og ikke kan overføres direkte til alle andre. Men mønstret er tydeligt: en <a href="/ovn/">ovn</a> skal varme et stort, tomt rum og meget metal op, før maden overhovedet begynder at blive varm. Slow cookeren varmer kun gryden og maden, og keramikken holder godt på varmen.</p>
<p>Til en gryderet, der ellers skulle simre i tre timer på komfuret, er forskellen mindre. En kogeplade på laveste trin bruger heller ikke ret meget, og på <a href="/induktion/">induktion</a> går næsten al energien direkte i gryden. Fordelen ved slow cookeren er her mest, at den kan passe sig selv.</p>

<h2>Hvornår på døgnet er det billigst at bruge slow cookeren?</h2>
<p>Slow cookeren er et af de få køkkenapparater, der kan flyttes væk fra aftenens dyre timer. En ovn bruges typisk kl. 17–19, når elprisen er højest. En slow cooker sættes over om morgenen eller formiddagen, og så foregår det meste af forbruget midt på dagen, hvor strømmen ofte er billigere – især på solrige dage og i weekender. Når du kommer hjem, er maden klar, og ovnen kan blive slukket.</p>
<p>Det giver to besparelser på én gang: slow cookeren bruger mindre strøm end ovnen, og den bruger den på et billigere tidspunkt. Du kan også lade retten simre om natten, hvor prisen ofte er lav, og så køle den ned og varme den op til aftensmaden. Boksen længere oppe på siden viser dagens billigste timer.</p>
<p>Mange slow cookere har et ur, der skifter til keep warm, når tiden er gået. Det er praktisk, hvis du først kommer hjem et par timer efter, at retten er færdig, og keep warm bruger kun en lille del af selve tilberedningen.</p>

<h2>Standby: bruger slow cookeren strøm, når den er slukket?</h2>
<p>En enkel slow cooker med drejeknap bruger ingen strøm, når knappen står på slukket. Modeller med digitalt display og ur har et lille standbyforbrug, som EU's standbyregler holder under én watt for apparater uden netværk. Det er under 9 kWh om året, men da en slow cooker typisk står i skabet mellem brug, er det nemmeste at tage stikket ud. Så er standbyforbruget nul.</p>

<h2>Hvad betyder størrelsen?</h2>
<p>Slow cookere findes fra omkring 1,5 til 8 liter. En stor gryde har typisk en kraftigere varmelegeme, og den bruger mere strøm pr. gang. Pr. portion er den dog ofte sparsommere, fordi varmetabet gennem gryden ikke vokser i takt med indholdet. Laver du mad til fire og fryser resten ned, kan én stor ret være billigere end to små.</p>
<p>Fyld gryden mellem halvt og to tredjedele op, som producenterne typisk anbefaler. En næsten tom gryde bruger næsten lige så meget strøm som en fuld, og en overfyldt gryde tager længere tid om at nå temperaturen.</p>

<h2>Multicookere: når slow cookeren også kan brune og trykkoge</h2>
<p>Multicookere med brunefunktion, trykkoger og slow cook-program har et langt kraftigere element – testundtipps.de fandt 630–1.200 W på de modeller, de gennemgik. Brunefunktionen kører kun kort, så den samlede ret bruger ikke nødvendigvis meget mere end i en ren slow cooker – regn med omkring 1 kWh for en ret, der brunes og derefter simrer i seks timer. Til gengæld sparer du en pande på kogepladen og en ekstra gryde til opvasken.</p>

<h2>Sådan holder du slow cookerens forbrug nede</h2>
<ol>
<li><strong>Lad låget være på</strong> – hver gang du løfter det, slipper varmen ud, og retten skal bruge længere tid.</li>
<li><strong>Vælg LOW, når du har tiden</strong> – det giver mørt kød og koster ikke mere end HIGH.</li>
<li><strong>Brug den i stedet for ovnen</strong> – gryderetter, pulled pork og supper er billigere i slow cookeren.</li>
<li><strong>Start den om morgenen eller formiddagen</strong> – så foregår forbruget uden for aftenens dyre timer.</li>
<li><strong>Lav store portioner</strong> – pr. portion er en fuld gryde den mest økonomiske af de muligheder, gryden giver.</li>
<li><strong>Undgå timevis på keep warm</strong> – brug uret, så retten er færdig tæt på spisetid.</li>
</ol>
<p>Til hurtig opvarmning af rester er en <a href="/mikroovn/">mikroovn</a> stadig den mest sparsomme af apparaterne i Tænks måling. En <a href="/airfryer/">airfryer</a> er et godt alternativ, når maden skal være sprød.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en slow cooker på 8 timer?",
      answer:
        "En slow cooker på 3,5 liter bruger typisk omkring 0,8 kWh på 8 timer på LOW, hvilket koster cirka {{kr 0,8}} ved månedens elpris. Loftet er mærkeeffekten gange tiden, fx højst 1,6 kWh for en model på 200 W.",
    },
    {
      question: "Er slow cooker billigere end ovnen?",
      answer:
        "Ja, i Tænks måling brugte en kylling i slow cooker 0,37 kWh mod 0,79 kWh i ovnen. Det svarer til {{kr 0,37}} mod {{kr 0,79}} ved månedens elpris – og slow cookeren kan køre i billigere timer.",
    },
    {
      question: "Hvor mange watt bruger en slow cooker?",
      answer:
        "Rene slow cookere har en mærkeeffekt på omkring 93–320 W. Multicookere med brunefunktion ligger på 630–1.200 W. Det faktiske gennemsnit er lavere end mærkeeffekten, fordi termostaten slår fra en del af tiden.",
    },
    {
      question: "Bruger slow cookeren mere strøm på LOW end på HIGH?",
      answer:
        "Ikke nødvendigvis. LOW tager 2–2,5 gange så lang tid som HIGH, men med lavere effekt. Det samlede forbrug ligger tæt på hinanden, typisk 0,4–1 kWh pr. ret, eller {{kr 0,4-1}}.",
    },
    {
      question: "Hvornår er det billigst at bruge slow cookeren?",
      answer:
        "Sæt den over om morgenen eller formiddagen. Så foregår forbruget midt på dagen eller om natten, hvor strømmen ofte er billigere, i stedet for aftenens dyre timer, hvor ovnen ellers ville køre.",
    },
    {
      question: "Hvad koster en slow cooker i strøm om året?",
      answer:
        "Med én ret om ugen bruger en slow cooker omkring 42 kWh om året, hvilket koster cirka {{kr 42}} ved månedens elpris. To retter om ugen om vinteren og ingen om sommeren giver omtrent det samme.",
    },
  ],
  relatedSlugs: ["ovn", "airfryer", "emhaette", "espressomaskine", "induktion"],
  sources: [
    { name: "Forbrugerrådet Tænk — Så meget strøm bruger du på at tilberede en kylling (2022)", url: "https://taenk.dk/forbrugerliv/mad-og-indkoeb/saa-meget-stroem-bruger-du-paa-tilberede-en-kylling" },
    { name: "testundtipps.de — Slow Cooker Stromverbrauch (okt. 2026)", url: "https://testundtipps.de/kueche-lifestyle/kuechengeraete/slow-cooker/slow-cooker-stromverbrauch" },
  ],
  calculatorConfig: {
    title: "Slow cooker forbrugsberegner",
    options: [
      { label: "HIGH i 4 timer, lille gryde", kwhPerUse: 0.4 },
      { label: "LOW i 8 timer, 3,5 liter", kwhPerUse: 0.8 },
      { label: "Multicooker med brunefunktion", kwhPerUse: 1.0 },
      { label: "LOW i 8–10 timer, stor gryde på 6 liter", kwhPerUse: 1.3 },
    ],
    usageLabel: "Antal retter pr. uge",
    usageUnit: "pr. uge",
    usageMin: 1,
    usageMax: 7,
    usageDefault: 1,
    usageStep: 1,
    per: "gang",
    perYear: 52,
  },
  publishDate: "2026-11-26",
  updated: "2026-11-22",
};

export default slowCooker;
