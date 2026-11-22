import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/refrigeratingappliances2019/${reg}`;

const boschKge36: ModelData = {
  slug: "bosch-kge36",
  parent: "koeleskab",
  brand: "Bosch",
  name: "Bosch KGE36 køle-/fryseskab",
  released: "2020-04",
  synonyms: [
    "bosch kge36awca",
    "bosch kge36alca",
    "bosch kge36aica",
    "bosch kge36 strømforbrug",
    "bosch køle fryseskab strømforbrug",
    "bosch serie 6 køle-/fryseskab",
    "siemens kg36eaica",
    "bosch 186 cm køleskab med fryser",
  ],
  title: "Bosch KGE36 strømforbrug (2026) → køle-/fryseskab i kWh",
  description:
    "Bosch KGE36 køle-/fryseskab på 308 liter: energimærkets 149 kWh om året, pris om året og døgnet, og hvad den manuelle afrimning af fryseren betyder.",
  intro:
    "Alle udgaver af KGE36 har de samme tal på energimærket, uanset farve og front — og Siemens' KG36EAICA er bygget på samme platform med samme forbrug.",
  content: `<h2>Hvor meget strøm bruger Bosch KGE36?</h2>
<p>Bosch KGE36 er et fritstående kombineret køle-/fryseskab, 186 cm højt, 60 cm bredt og 65 cm dybt. Ifølge EU's produktdatabase EPREL rummer det 214 liter køl og 94 liter frost, i alt 308 liter. Energiklassen er C, og årsforbruget er 149 kWh. Det svarer til 0,41 kWh i døgnet, eller {{kr 149}} om året ved månedens elpris.</p>
<p>KGE36 findes i flere udgaver — KGE36AWCA, KGE36ALCA, KGE36AICA og KGE36EWCP blandt andre — og de har alle samme rumfang, samme energiklasse og samme 149 kWh i EPREL. Forskellen er front og udstyr, ikke forbrug. Siemens sælger det samme skab som KG36EAICA og KG36EALCA, også med 149 kWh. Står du og vælger mellem dem, kan du se bort fra strømmen.</p>

<h2>Klasse C i et kombiskab</h2>
<p>Klasse C er god for et kombineret skab med fryser. Energiklassen regnes ud fra et energieffektivitetsindeks, som tager højde for rumfanget og for, at frost kræver mere energi end køl. KGE36 har et indeks på 64 ifølge EPREL; klasse C dækker indeks over 51 og op til 64, så skabet ligger lige på grænsen til D. Til sammenligning har <a href="/koeleskab/gram-ks-771254/">Gram KS 771254</a>, som er et rent køleskab uden fryser, indeks 100 og klasse E — men bruger færre kWh, fordi det ikke skal fryse noget.</p>
<p>Det er en vigtig pointe ved energimærket: klassen fortæller, hvor effektivt et skab er i forhold til sin størrelse og type, mens kWh-tallet fortæller, hvad du betaler. Vil du sammenligne to skabe, så kig på kWh.</p>

<h2>Fryseren skal afrimes</h2>
<p>EPREL oplyser, at køledelen afrimer automatisk, mens frysedelen skal afrimes manuelt. KGE36 er altså ikke et NoFrost-skab. Det har betydning for strømmen: et lag is på fryserens vægge isolerer og får kompressoren til at arbejde mere. Afrim fryseren, når laget er omkring en halv centimeter tykt — typisk en eller to gange om året.</p>
<p>Fryseren har fire stjerner og holder −18 °C. Det er det, energimærket er målt med; stiller du den koldere, bruger den mere. Skabet har en hurtigindfrysningsfunktion, som er nyttig, når du lægger meget ind på én gang. Husk at slå den fra igen, hvis den ikke slår fra af sig selv.</p>

<h2>Hvor skabet står, betyder noget</h2>
<p>Energimærkets tal er målt med lukket dør og standardindstillingen. KGE36 er bygget til klimaklasserne SN til T, altså rum mellem 10 og 43 °C. Det kan derfor stå i et uopvarmet bryggers eller en kold kælder, så længe temperaturen ikke falder under 10 °C. I et køligt rum bruger skabet typisk mindre end mærket, i et varmt køkken ved siden af ovnen mere.</p>
<p>Giv skabet luft. Varmen, kompressoren fjerner fra skabet, skal ud bagved og over toppen, og et skab, der er bygget tæt ind mellem køkkenelementer uden ventilation, arbejder mere. Støj er der ikke meget af: 38 dB ifølge EPREL, støjklasse C.</p>

<h2>Hvornår er det billigst?</h2>
<p>Et køle-/fryseskab kører døgnet rundt, så du kan ikke flytte forbruget til billige timer. Prisen om året er mærkets kWh gange din gennemsnitlige elpris. Det, du selv kan påvirke, er temperaturen, hvor tit døren åbnes, og at fryseren holdes fri for is. Se <a href="/koeleskab/">køleskabes strømforbrug generelt</a>, eller læs om <a href="/fryser/">fryseskabe</a>, hvis du overvejer et separat fryseskab i stedet for et kombiskab.</p>
<p>Et kombiskab som KGE36 er typisk mere sparsomt end et køleskab og et fryseskab hver for sig med samme samlede rumfang, fordi der kun er én kompressor, én elektronik og ét sæt isolering. Har du i dag et gammelt køleskab og en gammel fryser, kan ét nyt kombiskab skære mærkbart i forbruget — forudsat at 94 liter frost er nok til husstanden.</p>

<h2>Gode råd</h2>
<ul>
<li>Hold 4 °C i køl og −18 °C i frost.</li>
<li>Afrim fryseren, før isen bliver tyk.</li>
<li>Lad mad køle af, før den sættes ind.</li>
<li>Vælg udgave efter front og pris — forbruget er det samme i hele KGE36-familien.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger Bosch KGE36AWCA om året?",
      answer: "149 kWh om året ifølge energimærket i EU's database EPREL, energiklasse C. Det svarer til {{kr 149}} om året ved månedens elpris, eller omkring 0,41 kWh i døgnet.",
    },
    {
      question: "Er der forskel på KGE36AWCA, KGE36ALCA og KGE36AICA?",
      answer: "Ikke i forbruget. Alle har 308 liter, energiklasse C og 149 kWh om året i EPREL. Forskellen er front og udstyr.",
    },
    {
      question: "Er Bosch KGE36 NoFrost?",
      answer: "Nej. Køledelen afrimer automatisk, men frysedelen skal afrimes manuelt ifølge EPREL. Afrim, når islaget er omkring en halv centimeter, så fryseren ikke bruger mere strøm end nødvendigt.",
    },
    {
      question: "Hvor stor er fryseren i Bosch KGE36?",
      answer: "94 liter med fire stjerner og −18 °C. Køledelen er 214 liter, i alt 308 liter.",
    },
    {
      question: "Er Siemens KG36EAICA det samme skab?",
      answer: "Siemens KG36EAICA har samme rumfang, samme energiklasse og samme 149 kWh om året i EPREL som Bosch KGE36. De to mærker deler platform.",
    },
  ],
  sources: [
    { name: "EPREL — Bosch KGE36AWCA, EU's energimærke", url: eprel("260377") },
    { name: "EPREL — Bosch KGE36ALCA, EU's energimærke", url: eprel("260425") },
    { name: "EPREL — Bosch KGE36AICA, EU's energimærke", url: eprel("260375") },
    { name: "EPREL — Bosch KGE36EWCP, EU's energimærke", url: eprel("260453") },
    { name: "EPREL — Siemens KG36EAICA, EU's energimærke", url: eprel("260265") },
  ],
  variants: [
    { name: "308 l (KGE36AWCA)", watts: {}, annualKwh: 149, energyClass: "C", source: 0 },
    { name: "308 l (KGE36ALCA)", watts: {}, annualKwh: 149, energyClass: "C", source: 1 },
    { name: "308 l (KGE36AICA)", watts: {}, annualKwh: 149, energyClass: "C", source: 2 },
    { name: "308 l (KGE36EWCP)", watts: {}, annualKwh: 149, energyClass: "C", source: 3 },
  ],
  publishDate: "2026-12-03",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærkets årsforbrug i kWh, som Bosch har oplyst til EU-databasen EPREL: målt med lukket dør, 4 °C i køl og −18 °C i frost. Kilderne står nederst på siden.",
};

export default boschKge36;
