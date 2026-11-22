import type { ApplianceData } from "@/lib/types";

/**
 * Slush ice-maskine — Galaxus målte en Ninja SLUSHi med strømmåler: 130–160 W under frysning (top 200 W), klar efter ca. 35 min.,
 * 0,08 kWh i alt, derefter ca. 40 W i holdetilstand (efterprøvet på Galaxus' side 22. nov. 2026; målt på 1,5 liter milkshake).
 * Databladet (testberichte.de): 800 W, 1,9 l, 15–60 min., holder kold op til 12 timer; den amerikanske udgave er mærket 200 W.
 * Andre kompressormaskiner 75–220 W og 25–50 min. (testundtipps.de, producentdata). Holdetid og små maskiner er vores skøn.
 * Beregneren: kWh pr. portion, antal pr. måned × 12. Intet EU-energimærke.
 */
const slushIceMaskine: ApplianceData = {
  slug: "slush-ice-maskine",
  meta: {
    category: "koekken",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: false,
    motif: "koeleskab",
    synonyms: ["slush ice maskine", "slushice maskine", "slushmaskine", "slush maskine", "slushie maskine", "ninja slushi", "slushi", "slush ice", "frozen drink maker", "granita maskine"],
  },
  name: "Slush ice-maskine",
  title: "Slush ice-maskine strømforbrug (2026) → kWh pr. portion",
  description:
    "Se hvor meget strøm en slush ice-maskine bruger pr. portion og i holdetilstand, hvad en sommer med slush koster, og hvordan den klarer sig mod blenderen.",
  heading: "Strømforbrug for en slush ice-maskine: kWh, pris pr. gang og dyreste timer",
  quickAnswer:
    "En slush ice-maskine til hjemmet bruger typisk 0,07–0,1 kWh på at fryse en portion på knap 2 liter, og omkring 40 W i timen, mens den holder slushen kold bagefter. En portion med to timers holdetid koster cirka {{kr 0,16}} ved månedens elpris. Med fire portioner om måneden bliver det omkring 8 kWh om året, eller {{kr 8}}.",
  kwhRange: [1, 40],
  typicalKwh: 8,
  wattage: 200,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [0.3, 0.3, 0.5, 0.8, 1.2, 1.8, 2.2, 2.0, 1.1, 0.7, 0.5, 0.6],
  content: `<h2>En slushmaskine er et lille køleskab med røreværk</h2>
<p>En slush ice-maskine har en lille kompressor, som køler en metalcylinder midt i beholderen, og en snegl, der hele tiden skraber de iskrystaller af, der dannes på cylinderen. Det er samme princip som i et køleskab, bare på et meget mindre rum, og det er derfor, maskinerne med kompressor kan lave slush uden isterninger og uden at fryse noget på forhånd. En af de mest kendte modeller er Ninja SLUSHi med en beholder på 1,9 liter, og der findes en del billigere maskiner med kompressor i samme størrelse.</p>
<p>Forbruget er lavt. Det schweiziske netvarehus Galaxus har målt en Ninja SLUSHi med en strømmåler i stikket: under frysningen trak den 130–160 W med en top på omkring 200 W, slushen var klar efter cirka 35 minutter, og måleren viste 0,08 kWh i alt for 1,5 liter milkshake. Det svarer til {{kr 0,08}} ved månedens elpris for en hel beholder. Når slushen er færdig, skifter maskinen til at holde den kold, og så faldt effekten til omkring 40 W.</p>
<p>Laver du slush fire gange om måneden og lader maskinen holde den kold i et par timer hver gang, bliver det omkring 8 kWh om året, eller {{kr 8}}. Det meste ligger om sommeren.</p>

<h2>Forbrug pr. portion og med holdetid</h2>
<p>Holdetiden er det, der kan få forbruget til at vokse. Producenten oplyser, at maskinen kan holde slushen kold i op til 12 timer. Tabellen viser, hvad det betyder. Den målte portion er fra Galaxus' måling; holdetiden er lagt til med de målte 40 W, og den lille maskine er vores skøn ud fra mærkeeffekt og frysetid.</p>
<table>
<thead><tr><th>Brug</th><th>Tid</th><th>kWh pr. gang</th><th>Pris pr. gang</th></tr></thead>
<tbody>
<tr><td>Lille kompressormaskine, 1–1,5 liter (75–135 W)</td><td>25–50 min.</td><td>0,07 kWh</td><td>{{kr 0,07}}</td></tr>
<tr><td>1,5 liter milkshake, frosset (målt)</td><td>Ca. 35 min.</td><td>0,08 kWh</td><td>{{kr 0,08}}</td></tr>
<tr><td>Én portion + 2 timers holdetid</td><td>Ca. 2½ time</td><td>0,16 kWh</td><td>{{kr 0,16}}</td></tr>
<tr><td>Én portion + 6 timers holdetid (havefest)</td><td>Ca. 6½ time</td><td>0,32 kWh</td><td>{{kr 0,32}}</td></tr>
<tr><td>Én portion + 12 timers holdetid</td><td>Ca. 12½ time</td><td>0,56 kWh</td><td>{{kr 0,56}}</td></tr>
</tbody>
</table>
<p>Selv en hel dag med slush i maskinen er altså en lille udgift i strøm. Ingredienserne – saft, sirup, sodavand eller frugt – koster langt mere end strømmen pr. glas.</p>

<h2>200 eller 800 W – hvad står der egentlig på maskinen?</h2>
<p>Effekten på slushmaskiner er forvirrende. Den amerikanske udgave af Ninja SLUSHi er mærket 200 W, mens det europæiske datablad for FS301EU angiver 800 W. Den målte effekt under frysning lå på 130–160 W. Forklaringen er formentlig, at det europæiske tal er en maksimal belastning, fx ved opstart eller når sneglen skal arbejde i tyk slush, og ikke det, maskinen bruger til daglig. Billigere maskiner med kompressor er mærket 75–220 W ifølge producenternes data, og de tager typisk 25–50 minutter om en portion.</p>
<p>Uanset mærket er det tiden, der afgør forbruget. En maskine, der bruger lidt færre watt, men skal køre dobbelt så længe, ender samme sted. Det bedste mål er derfor kWh pr. portion, og det oplyser producenterne sjældent.</p>

<h2>Slushmaskine mod blender med isterninger</h2>
<p>Den gamle måde at lave slush på er at knuse isterninger i en <a href="/blender/">blender</a> med saft. Selve blenderen bruger meget lidt, men isterningerne er lavet i fryseren, og det koster også strøm. At fryse en kilo vand kræver omkring 0,1 kWh varme, der skal pumpes ud, og med en almindelig <a href="/fryser/">fryser</a> er det vores skøn, at det koster 0,05–0,07 kWh strøm pr. kilo is. En kande slush i blenderen ender derfor tæt på det samme som en portion i slushmaskinen. Forskellen er mere konsistensen og bekvemmeligheden end strømmen.</p>
<p>Fysikken forklarer også, hvorfor slushmaskinens måling er så lav: at køle 1,5 liter fra køleskabstemperatur ned under frysepunktet og fryse en del af den kræver omkring 0,1 kWh varme, og kompressoren flytter mere varme, end den selv bruger i strøm.</p>

<h2>Hvornår på døgnet laves slushen?</h2>
<p>Slush laves, når solen skinner og nogen er tørstige, og det kan sjældent flyttes. Det passer dog godt med elpriserne: på solrige sommerdage er strømmen ofte billig midt på dagen og først på eftermiddagen, når solcellerne leverer meget. Det dyre er at lade maskinen holde slushen kold ind i aftenens timer, når prisen typisk stiger. Sluk den, når glassene er fyldt, og hæld resten på en kande i fryseren. Boksen længere oppe på siden viser, hvilke timer der er dyrest i dag.</p>

<h2>Bruger slushmaskinen strøm, når den ikke kører?</h2>
<p>Når slushen er færdig, holder maskinen den kold, indtil du slukker. Det er ikke standby, men drift, og det er derfor holdetiden står i tabellen. Slukket må den ifølge EU's regler for husholdningsapparater bruge under én watt, og da en slushmaskine typisk står i skabet det meste af året, er det enkleste at tage stikket ud.</p>
<p>En slushmaskine med kompressor skal stå oprejst i nogle timer, hvis den har ligget ned under transport, så olien kan løbe tilbage i kompressoren. Det gælder generelt for apparater med kompressor, også køleskabe – tjek brugsanvisningen for den præcise tid.</p>

<h2>Sådan holder du forbruget nede</h2>
<ol>
<li><strong>Brug kolde ingredienser</strong> – saft fra <a href="/koeleskab/">køleskabet</a> i stedet for fra skabet giver kortere frysetid og mindre strøm.</li>
<li><strong>Sluk, når glassene er fyldt</strong> – holdetid i mange timer er det, der løfter forbruget.</li>
<li><strong>Fyld beholderen</strong> – to små portioner koster mere end én fuld.</li>
<li><strong>Giv maskinen luft</strong> – kompressoren skal kunne komme af med varmen, så stil den ikke op ad en væg eller i direkte sol.</li>
<li><strong>Lad sukkeret være</strong> som i opskriften – for lidt sukker giver en hård is, som sneglen skal arbejde mere med.</li>
</ol>
<p>Frisk saft til slushen kan laves i en <a href="/juicer/">juicer</a>, som også bruger meget lidt strøm pr. glas.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en slush ice-maskine?",
      answer:
        "En portion på 1,5 liter (milkshake) blev målt til 0,08 kWh på cirka 35 minutter, svarende til {{kr 0,08}} ved månedens elpris. Holder maskinen slushen kold bagefter, bruger den omkring 40 W i timen oveni.",
    },
    {
      question: "Hvor mange watt bruger en Ninja SLUSHi?",
      answer:
        "Det europæiske datablad angiver 800 W og den amerikanske udgave 200 W, men under frysning blev den målt til 130–160 W med en top på omkring 200 W. I holdetilstand faldt den til cirka 40 W.",
    },
    {
      question: "Hvad koster det at have slushmaskinen tændt hele dagen?",
      answer:
        "En portion plus 12 timers holdetid er omkring 0,56 kWh, eller {{kr 0,56}} ved månedens elpris. Det er holdetiden, der fylder mest, så sluk maskinen, når den ikke skal bruges.",
    },
    {
      question: "Er en slushmaskine dyrere i strøm end en blender med is?",
      answer:
        "Ikke nævneværdigt. Isterningerne fra fryseren koster også strøm – efter vores skøn 0,05–0,07 kWh pr. kilo is – så en kande slush ender tæt på det samme som en portion i maskinen.",
    },
    {
      question: "Hvad koster en slush ice-maskine om året i strøm?",
      answer:
        "Med fire portioner om måneden og to timers holdetid hver gang bruger den omkring 8 kWh om året, hvilket koster cirka {{kr 8}} ved månedens elpris. Det meste falder om sommeren.",
    },
  ],
  relatedSlugs: ["blender", "juicer", "koeleskab", "fryser", "koeleboks"],
  sources: [
    { name: "Galaxus — Ninja Slushi: worth the hype? (måling med strømmåler)", url: "https://www.galaxus.de/en/page/ninja-slushi-worth-the-hype-38770" },
    { name: "testberichte.de — Ninja SLUSHi FS301EU, datablad og testoversigt", url: "https://www.testberichte.de/p/ninja-tests/slushi-fs301eu-testbericht.html" },
    { name: "testundtipps.de — Slush-Eismaschine, ratgeber med producentdata", url: "https://testundtipps.de/kueche-lifestyle/kuechengeraete/eismaschine/slusheismaschine" },
  ],
  calculatorConfig: {
    title: "Slush ice-maskine forbrugsberegner",
    options: [
      { label: "Lille kompressormaskine, én portion", kwhPerUse: 0.07 },
      { label: "Én portion uden holdetid", kwhPerUse: 0.08 },
      { label: "Én portion + 2 timers holdetid", kwhPerUse: 0.16 },
      { label: "Én portion + 6 timers holdetid", kwhPerUse: 0.32 },
    ],
    usageLabel: "Antal portioner pr. måned",
    usageUnit: "pr. måned",
    usageMin: 1,
    usageMax: 20,
    usageDefault: 4,
    usageStep: 1,
    per: "gang",
    perYear: 12,
  },
  publishDate: "2026-11-30",
  updated: "2026-11-22",
};

export default slushIceMaskine;
