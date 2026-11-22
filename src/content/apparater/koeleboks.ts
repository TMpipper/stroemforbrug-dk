import type { ApplianceData } from "@/lib/types";

/**
 * Køleboks — mobile køleapparater er undtaget fra 2019/2016, men en køleboks, der sælges med AC/DC-adapter, er det ikke
 * og bærer derfor et energimærke. EPREL-tallene er målt som »pantry«-rum ved 17 °C og siger ikke meget om en køleboks
 * på 4 °C i en varm bil, så energyLabels/models står tomme; mærketallene står i en tabel i teksten med den forklaring.
 * Tal: Dometic CFX3 45 (1,03 Ah/t ved 12 V, 32 °C ude/4 °C inde ≈ 0,3 kWh/døgn; 52 W ved 230 V),
 * Dometic TropiCool TCX 21 (46 W ved 12 V, 64 W ved 230 V, køler op til 27 °C under omgivelserne).
 */
const koeleboks: ApplianceData = {
  slug: "koeleboks",
  meta: {
    category: "koelFrys",
    usage: "always-on",
    hasEuLabel: true,
    motif: "koeleskab",
    synonyms: ["køleboks", "elektrisk køleboks", "køleboks 12V", "kompressorkøleboks", "termoelektrisk køleboks", "campingkøleskab", "bilkøleboks", "dometic køleboks"],
  },
  name: "Køleboks",
  title: "Køleboks strømforbrug (2026) → 12 V, kompressor og kWh",
  description:
    "Se hvor meget strøm en elektrisk køleboks bruger i døgnet: termoelektrisk mod kompressor, 12 V i bilen mod 230 V i stikket, og hvad en sommer koster.",
  heading: "Strømforbrug for en køleboks: kWh i døgnet og pris om året",
  quickAnswer:
    "En termoelektrisk køleboks bruger typisk 1,1–1,5 kWh i døgnet, fordi den kører uafbrudt, mens en kompressorkøleboks klarer sig med omkring 0,3 kWh. Et døgn med en termoelektrisk boks i stikket koster cirka {{kr 1,5}} ved månedens elpris. Tyve dage i brug om sommeren bliver omkring 22 kWh, eller {{kr 22}}.",
  kwhRange: [3, 120],
  typicalKwh: 22,
  wattage: 46,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [0, 0, 0.1, 0.4, 1.2, 2.6, 4.0, 2.8, 0.7, 0.2, 0, 0],
  content: `<h2>Hvor meget strøm bruger en køleboks?</h2>
<p>Elektriske kølebokse findes i to helt forskellige udgaver, og forskellen i strømforbrug er en faktor tre til fem. Den billige termoelektriske køleboks bruger et Peltier-element, som flytter varme, når der løber strøm igennem det. Det har ingen termostat i de enkle modeller og kører derfor hele tiden. Kompressorkølebokse virker som et lille køleskab med kompressor og kølemiddel, har termostat og slår fra, når boksen er kold nok.</p>
<p>Dometics termoelektriske TropiCool TCX 21 bruger 46 W ved 12 V i bilen og 64 W ved 230 V i stikket. Kører den hele døgnet, er det 1,1 kWh på 12 V og 1,5 kWh på 230 V, svarende til {{kr 1,5}} for et døgn i stikket. Dometics kompressorkøleboks CFX3 45 bruger efter producentens måling 1,03 ampere-timer i timen ved 12 V, når det er 32 grader udenfor og 4 grader inde i boksen. Det er omkring 0,3 kWh i døgnet, svarende til {{kr 0,3}}.</p>
<p>Fordi de fleste kun bruger køleboksen på ferie, i sommerhuset eller til festivaler, er årsforbruget lavt. Med 20 dage om året bliver det omkring 22 kWh for en termoelektrisk boks, eller {{kr 22}}, og omkring 6 kWh for en kompressorboks, eller {{kr 6}}.</p>

<h2>Termoelektrisk eller kompressor: forbruget i døgnet</h2>
<table>
<thead><tr><th>Type</th><th>Effekt</th><th>kWh i døgnet</th><th>Pris pr. døgn</th><th>Pris for 20 dage</th></tr></thead>
<tbody>
<tr><td>Kompressorkøleboks, 12 V (som CFX3 45)</td><td>Ca. 45 W, når den kører</td><td>0,3 kWh</td><td>{{kr 0,3}}</td><td>{{kr 6}}</td></tr>
<tr><td>Termoelektrisk, 12 V (som TCX 21)</td><td>46 W konstant</td><td>1,1 kWh</td><td>{{kr 1,1}}</td><td>{{kr 22}}</td></tr>
<tr><td>Termoelektrisk, 230 V (som TCX 21)</td><td>64 W konstant</td><td>1,5 kWh</td><td>{{kr 1,5}}</td><td>{{kr 30}}</td></tr>
</tbody>
</table>
<p>Den termoelektriske boks bruger mere strøm ved 230 V end ved 12 V – for TCX 21 er det 64 mod 46 W – blandt andet fordi strømmen først skal gennem en adapter. Kompressorboksen bruger mest, når den skal køle ned første gang, og når det er varmt omkring den. Står den i skyggen og åbnes sjældent, kan forbruget være lavere end producentens tal, som er målt ved 32 grader.</p>
<p>Den termoelektriske boks har også en grænse for, hvor kold den kan blive. Dometic oplyser, at TCX 21 køler op til 27 grader under omgivelsernes temperatur. Står den i en bil, der er 35 grader varm, bliver indholdet altså kun omkring 8 grader. En kompressorboks kan holde 4 grader – eller fryse – uanset temperaturen udenfor.</p>

<h2>Energimærket på kølebokse</h2>
<p>EU's energimærke for køleapparater (forordning 2019/2016) gælder ikke for mobile køleapparater, der kun kører på batteri eller 12 V. Men forordningen siger udtrykkeligt, at en køleboks, der sælges med en AC/DC-adapter til stikkontakten, ikke regnes som mobil. Derfor har de fleste kølebokse med 230 V-ledning et energimærke i EU's produktdatabase EPREL.</p>
<p>Mærkets kWh-tal skal dog læses med forsigtighed. Kølebokse er typisk registreret med et rum af typen »pantry«, som testes ved 17 grader – ikke de 4 grader, du vil have til mælk og kød. Dometics registreringer viser for eksempel:</p>
<table>
<thead><tr><th>Model (EPREL)</th><th>Type</th><th>Klasse</th><th>kWh om året ved 17 grader</th></tr></thead>
<tbody>
<tr><td>Dometic CFX 28</td><td>Kompressor</td><td>B</td><td>34 kWh</td></tr>
<tr><td>Dometic CFX3 45</td><td>Kompressor</td><td>C</td><td>41 kWh</td></tr>
<tr><td>Dometic CFX3 75DZ</td><td>Kompressor, to rum</td><td>D</td><td>52 kWh</td></tr>
<tr><td>Dometic TropiCool TC21</td><td>Termoelektrisk</td><td>E</td><td>66 kWh</td></tr>
</tbody>
</table>
<p>Årstallene forudsætter, at boksen står tændt hele året ved stuetemperatur og kun skal holde 17 grader. Det svarer ikke til, hvordan en køleboks bruges, så siden viser ikke mærketallene som en almindelig energimærketabel. Klassen er stadig nyttig til at sammenligne to kølebokse: en kompressorboks i klasse B eller C bruger klart mindre end en termoelektrisk i klasse E.</p>

<h2>12 V i bilen: hvad betyder det for batteriet?</h2>
<p>I bilen kommer strømmen fra bilens batteri og dynamo – du betaler den ikke over elregningen, men den koster brændstof eller rækkevidde i en elbil. En termoelektrisk boks på 46 W trækker knap 4 ampere fra et 12 V-batteri. Slukker du motoren, kan den tømme startbatteriet på en nat, og derfor har mange modeller en lavspændingsbeskyttelse, der slukker boksen, før batteriet bliver for fladt. Hos kompressorbokse kan beskyttelsen ofte indstilles.</p>
<p>I en <a href="/elbil/">elbil</a> er forbruget lille i forhold til kørslen: 1,1 kWh i døgnet svarer til nogle få kilometers rækkevidde. Sæt boksen til et stik i sommerhuset eller på campingpladsen, når du kan, så bilen ikke skal levere strømmen.</p>

<h2>Standby og strøm, når boksen står i skuret</h2>
<p>En køleboks har ingen egentlig standby. Enkle termoelektriske modeller har kun en afbryder eller ingen, og så kører de, så længe stikket sidder i. Kompressorbokse med display og app bruger en smule, når de er slukket på knappen, men det er få watt-timer i døgnet. Tag stikket ud, når boksen står i skuret resten af året, og lad låget stå på klem, så der ikke dannes mug. Så er forbruget nul i de mange måneder, hvor boksen ikke bruges – og det er netop derfor, at årsforbruget i beregneren regnes i dage i brug og ikke i et helt år.</p>
<p>En ældre termoelektrisk boks, der står og summer i carporten hele sommeren uden at blive brugt, er til gengæld en af de skjulte strømslugere, der let bliver glemt. Tjek den, når du gennemgår husets <a href="/standby/">standbyforbrug</a>.</p>

<h2>Hvornår på døgnet bruger køleboksen strøm?</h2>
<p>En køleboks kører hele døgnet, når den er i brug, så der er ikke noget tidspunkt at flytte forbruget til. Forbruget er størst om eftermiddagen, når det er varmest omkring boksen, og hver gang du åbner låget. Det, du kan gøre, er at køle maden ned i køleskabet derhjemme, før den kommer i boksen. Så skal boksen kun holde temperaturen og ikke køle varme varer ned, og det er netop nedkølingen, der koster mest.</p>

<h2>Køleboks eller ekstra køleskab?</h2>
<p>Nogle bruger en køleboks som ekstra køleskab til drikkevarer i carporten hele sommeren. Det er dyrt med en termoelektrisk model: 90 dage i stikket bliver 135 kWh, eller {{kr 135}}. Et lille <a href="/koeleskab/">køleskab</a> eller et <a href="/vinkoeleskab/">vinkøleskab</a> med kompressor bruger omkring det samme på et helt år. Har du brug for ekstra køleplads i længere tid, er et rigtigt køleskab eller en kompressorkøleboks det billigste valg af de typer, siden sammenligner. Har du derimod brug for at fryse, kan kun kompressorbokse det – her er en lille <a href="/fryser/">fryser</a> et alternativ derhjemme.</p>

<h2>Sådan sparer du strøm med køleboksen</h2>
<ol>
<li><strong>Køl ned på forhånd</strong> – læg kolde varer og fryseelementer i, så boksen ikke skal starte fra stuetemperatur.</li>
<li><strong>Stil den i skyggen</strong> – hver grad varmere omkring boksen koster ekstra, især for den termoelektriske.</li>
<li><strong>Åbn låget sjældent</strong> – kold luft falder ud, hver gang du åbner.</li>
<li><strong>Fyld den op</strong> – en fuld boks holder bedre på kulden end en tom.</li>
<li><strong>Sluk den termoelektriske om natten</strong> i et køligt sommerhus, hvis indholdet kan tåle det.</li>
<li><strong>Vælg kompressor</strong>, hvis du bruger boksen mange dage om året – den bruger en tredjedel eller mindre.</li>
<li><strong>Hold ventilationen fri</strong> – begge typer skal af med varmen gennem gitteret på siden.</li>
</ol>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en køleboks i døgnet?",
      answer:
        "En termoelektrisk køleboks bruger 1,1 kWh i døgnet ved 12 V og omkring 1,5 kWh ved 230 V, fordi den kører uafbrudt. En kompressorkøleboks bruger omkring 0,3 kWh. Et døgn i stikket koster {{kr 0,3-1,5}} ved månedens elpris.",
    },
    {
      question: "Hvor mange watt bruger en 12 V-køleboks?",
      answer:
        "En termoelektrisk 12 V-køleboks som Dometic TCX 21 bruger 46 W hele tiden. En kompressorkøleboks bruger omkring 45 W, når kompressoren kører, men slår fra, når boksen er kold nok.",
    },
    {
      question: "Kan en køleboks tømme bilens batteri?",
      answer:
        "Ja. En termoelektrisk boks trækker knap 4 ampere og kan tømme et startbatteri på en nat. Mange modeller har lavspændingsbeskyttelse, der slukker boksen, før batteriet bliver for fladt.",
    },
    {
      question: "Har kølebokse et energimærke?",
      answer:
        "Kølebokse, der sælges med adapter til 230 V, har et EU-energimærke. Men mærkets kWh-tal er målt ved 17 grader, ikke 4, så brug klassen til at sammenligne modeller og ikke til at regne årsforbruget.",
    },
    {
      question: "Hvad koster det at have en køleboks tændt hele sommeren?",
      answer:
        "90 dage med en termoelektrisk boks i stikket bliver omkring 135 kWh, eller {{kr 135}}. En kompressorkøleboks bruger omkring 27 kWh på samme tid, eller {{kr 27}}.",
    },
    {
      question: "Hvor kold bliver en termoelektrisk køleboks?",
      answer:
        "Den køler typisk 20–27 grader under omgivelserne. Dometic oplyser op til 27 grader for TCX 21. I en varm bil bliver indholdet derfor ikke køleskabskoldt – det kræver en kompressorkøleboks.",
    },
  ],
  relatedSlugs: ["koeleskab", "vinkoeleskab", "fryser", "terrassevarmer", "elbil"],
  sources: [
    { name: "Dometic — CFX3 45 kompressorkøleboks (specifikationer)", url: "https://www.dometic.com/en/product/dometic-cfx3-45-9620009573" },
    { name: "Dometic — TropiCool TCX 21 termoelektrisk køleboks (specifikationer)", url: "https://www.dometic.com/en/product/dometic-tropicool-tcx-21-9600013320" },
    { name: "Forordning (EU) 2019/2016, artikel 1–2 — anvendelsesområde og mobile køleapparater", url: "https://www.legislation.gov.uk/eur/2019/2016/article/2" },
    { name: "EPREL — EU's produktdatabase, fx Dometic CFX3 45", url: "https://eprel.ec.europa.eu/screen/product/refrigeratingappliances2019/402153" },
  ],
  calculatorConfig: {
    title: "Køleboks forbrugsberegner",
    options: [
      { label: "Kompressorkøleboks, 12 V", kwhPerUse: 0.3 },
      { label: "Termoelektrisk, 12 V i bilen", kwhPerUse: 1.1 },
      { label: "Termoelektrisk, 230 V i stikket", kwhPerUse: 1.5 },
    ],
    usageLabel: "Dage i brug om året",
    usageUnit: "dage",
    usageMin: 1,
    usageMax: 120,
    usageDefault: 20,
    usageStep: 1,
    per: "døgn",
    perYear: 1,
  },
  publishDate: "2026-11-27",
  updated: "2026-11-22",
};

export default koeleboks;
