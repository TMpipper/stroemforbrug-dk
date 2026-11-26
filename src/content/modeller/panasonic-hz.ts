import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/airconditioners/${reg}`;
const panasonic = (m: string) => `https://aircon.panasonic.eu/DK_da/model/${m}/`;

const panasonicHz: ModelData = {
  slug: "panasonic-hz",
  parent: "varmepumpe",
  group: "luft-til-luft",
  brand: "Panasonic",
  name: "Panasonic HZ Flagship",
  released: "2023-08",
  synonyms: [
    "panasonic hz25zke strømforbrug",
    "panasonic hz35zke strømforbrug",
    "panasonic hz flagship",
    "panasonic hz25zke",
    "panasonic hz35zke",
    "panasonic hz25zke-h",
    "panasonic nordic varmepumpe",
    "panasonic luft til luft varmepumpe strømforbrug",
  ],
  title: "Panasonic HZ Flagship strømforbrug (2026) → kWh og pris",
  description:
    "Panasonic HZ25ZKE og HZ35ZKE luft-til-luft varmepumpe: energimærkets kWh om året til varme, SCOP i gennemsnitligt og koldt klima og pris om året.",
  intro:
    "Begge størrelser har SCOP 5,3 og energiklasse A+++ til varme; HZ35ZKE bruger mere, fordi mærket regner den til et større varmebehov, ikke fordi den er mindre effektiv.",
  content: `<h2>Hvor meget strøm bruger Panasonic HZ Flagship?</h2>
<p>HZ er Panasonics nordiske vægmodel i Flagship-serien, bygget til at varme ved lave udetemperaturer. Siden dækker de to størrelser HZ25ZKE og HZ35ZKE med indedel CS-HZ…ZKE og udedel CU-HZ…ZKE, som Panasonic har registreret i EU's produktdatabase EPREL. Den grafitgrå indedel (CS-HZ25ZKE-H og CS-HZ35ZKE-H) har sin egen registrering, men nøjagtig de samme tal som den hvide.</p>
<table>
<thead><tr><th>Model</th><th>Varmelast (Pdesignh)</th><th>SCOP gennemsnit</th><th>kWh om året</th><th>Klasse</th><th>SCOP koldt klima</th><th>kWh koldt klima</th></tr></thead>
<tbody>
<tr><td>HZ25ZKE</td><td>3,2 kW</td><td>5,3</td><td>845</td><td>A+++</td><td>4,3 (4,6 kW)</td><td>2.246</td></tr>
<tr><td>HZ35ZKE</td><td>4,0 kW</td><td>5,3</td><td>1.057</td><td>A+++</td><td>4,3 (5,5 kW)</td><td>2.685</td></tr>
</tbody>
</table>
<p>Ved månedens elpris koster energimærkets årsforbrug {{kr 845}} for HZ25ZKE og {{kr 1057}} for HZ35ZKE. Tallene gælder kun opvarmning; køling om sommeren har sit eget mærke og kommer oveni, hvis du bruger den.</p>

<h2>Hvad energimærkets 845 kWh forudsætter</h2>
<p>EU-mærket for luft-til-luft varmepumper regner med et hus, hvor pumpen skal levere sin dimensionerende varmelast, Pdesignh, ved −10 °C i et gennemsnitligt europæisk klima. Over sæsonen svarer det til 1.400 timer ved fuld last. For HZ25ZKE er det 3,2 kW × 1.400 timer, altså omkring 4.480 kWh varme om året, som pumpen leverer med en SCOP på 5,3: for hver kWh strøm kommer der 5,3 kWh varme ud. HZ35ZKE regnes til 4,0 kW og dermed 5.600 kWh varme, og derfor bliver årsforbruget 1.057 kWh, selv om virkningsgraden er den samme.</p>
<p>Det betyder, at dit eget forbrug afhænger mere af huset end af modellen. Står pumpen i et lille, velisoleret hus med åben stue, leverer den måske langt mindre varme end mærkets forudsætning og bruger tilsvarende mindre. I et ældre hus med store vinduer og mange rum, hvor varmen skal fordeles, arbejder den hårdere og ved dårligere forhold.</p>

<h2>Danske vintre og tallet for koldt klima</h2>
<p>Panasonic har også registreret HZ i EU's koldere referenceklima, hvor dimensioneringen sker ved −22 °C. Her er varmelasten større (4,6 og 5,5 kW), sæsonen længere, og SCOP falder til 4,3. Derfor står der 2.246 og 2.685 kWh om året. Det tal er ikke en dansk vinter, men det viser, hvor godt pumpen holder sin virkningsgrad i frost: et fald fra 5,3 til 4,3 er lille for en luft-til-luft varmepumpe. Danmark ligger tættere på mærkets gennemsnitlige klima, men en lang frostperiode trækker forbruget op, fordi pumpen både skal levere mere varme og gør det med lavere virkningsgrad.</p>
<p>Til sammenligning har <a href="/varmepumpe/mitsubishi-hero/">Mitsubishi Electric Hero 2.0</a> samme varmelast på 3,2 kW i sin mindste størrelse og bruger 861 kWh i gennemsnitligt klima og 2.466 kWh i koldt klima. HZ25ZKE bruger altså 16 kWh mindre i det gennemsnitlige klima og 220 kWh mindre i det kolde ifølge de to mærker.</p>

<h2>Supplement eller hovedvarme</h2>
<p>En luft-til-luft varmepumpe blæser varmen ud i ét rum og kan sjældent varme et helt hus med lukkede døre. De fleste bruger den som supplement til oliefyr, elradiatorer, fjernvarme eller brændeovn, og så leverer den kun en del af husets varme. Dit årsforbrug bliver i så fald lavere end energimærkets tal, mens de andre varmekilder dækker resten. Står HZ som eneste varmekilde i et sommerhus eller et helårshus med åben planløsning, kan forbruget komme tæt på mærket eller over det, især hvis temperaturen holdes højt i hele huset.</p>
<p>Vælg størrelse efter rummet og varmetabet, ikke efter forbruget på mærket. HZ35ZKE er ikke dyrere i drift pr. kWh varme end HZ25ZKE — den kan bare levere mere. Læs mere om typen på siden om <a href="/varmepumpe/luft-til-luft/">luft-til-luft varmepumper</a>.</p>

<h2>Kør varmepumpen i de billige timer</h2>
<p>En varmepumpe kan ikke slukkes i de dyre timer uden at huset bliver koldt, men den kan forskydes lidt. Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21. Hæver du indetemperaturen en grad eller to i de billigere timer om natten og midt på dagen og sænker den lidt i spidsbelastningen, flytter du en del af forbruget uden at mærke det i stuen. Det virker bedst i et hus med tunge vægge og gulve, der holder på varmen. Er pumpen koblet på wifi, kan et ugeprogram i Panasonics app klare det for dig. Dagens timepriser står på siden om <a href="/elpriser/">elpriser i dag</a>, og hvordan varmepumper generelt bruger strøm, står på siden om <a href="/varmepumpe/">varmepumpens strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger Panasonic HZ25ZKE?",
      answer:
        "845 kWh om året til opvarmning ifølge energimærket i EU's gennemsnitlige klima, med SCOP 5,3 og energiklasse A+++. Det svarer til {{kr 845}} om året ved månedens elpris. I EU's kolde klima er tallet 2.246 kWh med SCOP 4,3.",
    },
    {
      question: "Bruger HZ35ZKE mere strøm end HZ25ZKE?",
      answer:
        "På mærket ja: 1.057 mod 845 kWh om året. Men begge har SCOP 5,3 — HZ35ZKE regnes til en varmelast på 4,0 kW i stedet for 3,2 kW og leverer derfor mere varme for strømmen.",
    },
    {
      question: "Har den grafitgrå HZ25ZKE-H et andet forbrug?",
      answer:
        "Nej. CS-HZ25ZKE-H og CS-HZ35ZKE-H har egne registreringer i EPREL, men samme SCOP, samme energiklasse og samme årsforbrug som de hvide indedele.",
    },
    {
      question: "Hvor meget bruger Panasonic HZ i en kold vinter?",
      answer:
        "EU's kolde referenceklima (dimensioneret ved −22 °C) giver 2.246 kWh for HZ25ZKE og 2.685 kWh for HZ35ZKE om året med SCOP 4,3. Danmark ligger tættere på det gennemsnitlige klima, men lange frostperioder trækker forbruget op.",
    },
    {
      question: "Kan Panasonic HZ varme et helt hus?",
      answer:
        "Kun hvis huset er lille eller har åben planløsning. Som regel er en luft-til-luft varmepumpe et supplement, og så bliver dit forbrug lavere end energimærkets tal, fordi andre varmekilder dækker en del af varmen.",
    },
  ],
  sources: [
    { name: "EPREL — Panasonic CS-HZ25ZKE / CU-HZ25ZKE, EU's energimærke", url: eprel("1908928") },
    { name: "EPREL — Panasonic CS-HZ35ZKE / CU-HZ35ZKE, EU's energimærke", url: eprel("1908934") },
    { name: "EPREL — Panasonic CS-HZ25ZKE-H / CU-HZ25ZKE, EU's energimærke", url: eprel("1908931") },
    { name: "EPREL — Panasonic CS-HZ35ZKE-H / CU-HZ35ZKE, EU's energimærke", url: eprel("1908932") },
    { name: "Panasonic — HZ25ZKE, dansk produktside", url: panasonic("cs-hz25zke-cu-hz25zke") },
    { name: "Panasonic — HZ35ZKE, dansk produktside", url: panasonic("cs-hz35zke-cu-hz35zke") },
  ],
  variants: [
    { name: "HZ25ZKE, 3,2 kW", watts: {}, annualKwh: 845, energyClass: "A+++", source: 0 },
    { name: "HZ35ZKE, 4,0 kW", watts: {}, annualKwh: 1057, energyClass: "A+++", source: 1 },
  ],
  publishDate: "2027-01-03",
  updated: "2026-11-26",
  measuredBy: "til opvarmning ifølge EU's energimærke i gennemsnitligt klima (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærkets årsforbrug til opvarmning i EU's gennemsnitlige klima ved pumpens dimensionerende varmelast (Pdesignh), som producenten har registreret i EPREL. Kilderne står nederst på siden.",
};

export default panasonicHz;
