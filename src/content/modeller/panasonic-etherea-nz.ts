import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/airconditioners/${reg}`;
const panasonic = (m: string) => `https://aircon.panasonic.eu/DK_da/model/${m}/`;

const panasonicEthereaNz: ModelData = {
  slug: "panasonic-etherea-nz",
  parent: "varmepumpe",
  group: "luft-til-luft",
  brand: "Panasonic",
  name: "Panasonic Etherea NZ",
  released: "2022-09",
  synonyms: [
    "panasonic etherea strømforbrug",
    "panasonic nz25yke strømforbrug",
    "panasonic nz35yke",
    "panasonic nz50yke",
    "panasonic etherea nz25",
    "cs-nz25yke",
    "panasonic etherea varmepumpe",
    "panasonic varmepumpe kwh om året",
  ],
  title: "Panasonic Etherea NZ strømforbrug (2026) → kWh og pris",
  description:
    "Panasonic Etherea NZ25YKE, NZ35YKE og NZ50YKE luft-til-luft varmepumpe: energimærkets kWh om året til varme, SCOP i koldt klima og pris om året.",
  intro:
    "NZ25YKE bruger færre kWh end Panasonics HZ25ZKE på mærket, men det er fordi den regnes til et mindre varmebehov; pr. kWh strøm giver HZ mest varme af de to serier.",
  content: `<h2>Hvor meget strøm bruger Panasonic Etherea NZ?</h2>
<p>Etherea NZ er Panasonics vægmodel i Etherea-serien, ét trin under den nordiske Flagship-serie HZ. Siden dækker de tre størrelser NZ25YKE, NZ35YKE og NZ50YKE med indedel CS-NZ…YKE og udedel CU-NZ…YKE, som Panasonic har registreret i EU's produktdatabase EPREL. Panasonic har senere registreret indedelene som CS-NZ…YKE-1 med de samme tal.</p>
<table>
<thead><tr><th>Model</th><th>Varmelast (Pdesignh)</th><th>SCOP gennemsnit</th><th>kWh om året</th><th>Klasse</th><th>SCOP koldt klima</th><th>kWh koldt klima</th></tr></thead>
<tbody>
<tr><td>NZ25YKE</td><td>2,8 kW</td><td>5,0</td><td>784</td><td>A++</td><td>3,9 (4,0 kW)</td><td>2.152</td></tr>
<tr><td>NZ35YKE</td><td>3,6 kW</td><td>5,0</td><td>1.008</td><td>A++</td><td>3,9 (5,0 kW)</td><td>2.693</td></tr>
<tr><td>NZ50YKE</td><td>4,4 kW</td><td>4,8</td><td>1.283</td><td>A++</td><td>3,9 (5,7 kW)</td><td>3.069</td></tr>
</tbody>
</table>
<p>Ved månedens elpris koster energimærkets årsforbrug {{kr 784}} for NZ25YKE, {{kr 1008}} for NZ35YKE og {{kr 1283}} for NZ50YKE. Tallene gælder opvarmning; køling har sit eget mærke.</p>

<h2>Etherea NZ mod HZ Flagship</h2>
<p>På mærket ser NZ25YKE sparsom ud: 784 kWh om året mod 845 kWh for <a href="/varmepumpe/panasonic-hz/">Panasonic HZ25ZKE</a>. Men NZ25YKE er regnet til en varmelast på 2,8 kW og HZ25ZKE til 3,2 kW. EU-mærket regner med 1.400 timer ved fuld last i det gennemsnitlige klima, så NZ25YKE forudsættes at levere omkring 3.920 kWh varme og HZ25ZKE 4.480 kWh. Pr. kWh strøm giver HZ25ZKE 5,3 kWh varme og NZ25YKE 5,0.</p>
<p>Regnet på samme varmebehov på 3.920 kWh ville HZ25ZKE bruge omkring 740 kWh, altså godt 40 kWh mindre end NZ25YKE. Forskellen vokser i frost: I EU's kolde klima har HZ SCOP 4,3 og NZ 3,9. Forskellen mellem serierne er altså lille i en mild vinter og større i frost. Skal pumpen være husets vigtigste varmekilde om vinteren, giver HZ mest varme for strømmen af de to Panasonic-serier; er den et supplement, betyder forskellen mindre.</p>

<h2>Tre størrelser, næsten samme virkningsgrad</h2>
<p>NZ25YKE og NZ35YKE har begge SCOP 5,0, og NZ50YKE har 4,8. Den store udgave taber altså kun lidt, og i det kolde klima har alle tre SCOP 3,9. Det gør serien let at dimensionere: vælg efter rummets størrelse og husets varmetab, ikke efter tallet på mærket. En for lille pumpe kører ved fuld last hele vinteren og giver dårligere komfort; en passende stor pumpe kan køre roligt ved dellast, hvor den typisk arbejder mest effektivt.</p>
<p>Tallet for koldt klima er dimensioneret ved −22 °C med 2.100 timer ved fuld last, så det er ikke en dansk vinter. Danmark ligger tættere på det gennemsnitlige klima, men i en lang frostperiode trækker både større varmebehov og lavere SCOP forbruget op.</p>

<h2>Hvad du selv kommer til at bruge</h2>
<p>Energimærket forudsætter, at pumpen dækker et bestemt varmebehov. Hænger NZ35YKE i stuen som supplement til fjernvarme eller radiatorer, leverer den måske halvdelen af mærkets varme eller mindre, og så bruger den også tilsvarende mindre. Er den eneste varmekilde i et sommerhus, der holdes frostfrit om vinteren og varmt i weekenderne, afhænger forbruget mest af, hvor mange dage huset er i brug. I et ældre hus med stort varmetab og ét åbent rum kan pumpen ende over mærkets tal.</p>
<p>Placeringen tæller også. Hænger indedelen, så luften kan nå gangen og de nærmeste rum, og står udedelen frit uden at suge sin egen kolde luft ind igen, holder pumpen en bedre virkningsgrad i praksis, og afrimningen om vinteren går lettere. Etherea er også bygget til køling, og bruger du den om sommeren, kommer køleforbruget oveni. Læs mere om typen på siden om <a href="/varmepumpe/luft-til-luft/">luft-til-luft varmepumper</a>.</p>

<h2>Brug de billige timer</h2>
<p>Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21. Med en varmepumpe kan du forvarme: hæv temperaturen en grad i de billige timer om natten og midt på dagen, og lad den falde lidt i spidsbelastningen. Huset holder på varmen i vægge og gulve, og du mærker sjældent forskellen. Er pumpen koblet på wifi, kan et ugeprogram i Panasonics app gøre det automatisk. Hvordan varmepumper generelt bruger strøm, står på <a href="/varmepumpe/">varmepumpens strømforbrug</a>, og dagens timepriser på <a href="/elpriser/">elpriser i dag</a>.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger Panasonic Etherea NZ25YKE?",
      answer:
        "784 kWh om året til opvarmning ifølge energimærket i EU's gennemsnitlige klima, med SCOP 5,0 og energiklasse A++. Det svarer til {{kr 784}} om året ved månedens elpris.",
    },
    {
      question: "Er Etherea NZ eller HZ Flagship mest effektiv?",
      answer:
        "Af de to Panasonic-serier giver HZ Flagship mest varme pr. kWh: SCOP 5,3 mod 5,0 for NZ i gennemsnitligt klima og 4,3 mod 3,9 i koldt klima. NZ25YKE bruger færre kWh på mærket, fordi den regnes til 2,8 kW varmelast mod 3,2 kW.",
    },
    {
      question: "Hvor meget bruger Etherea NZ i koldt klima?",
      answer:
        "I EU's kolde referenceklima (−22 °C) bruger NZ25YKE 2.152 kWh, NZ35YKE 2.693 kWh og NZ50YKE 3.069 kWh om året, alle med SCOP 3,9.",
    },
    {
      question: "Er NZ25YKE-1 det samme som NZ25YKE?",
      answer:
        "Indedelen CS-NZ25YKE-1 har sin egen registrering i EPREL, men samme SCOP, samme energiklasse og samme årsforbrug som CS-NZ25YKE med udedelen CU-NZ25YKE.",
    },
  ],
  sources: [
    { name: "EPREL — Panasonic CS-NZ25YKE / CU-NZ25YKE, EU's energimærke", url: eprel("1451346") },
    { name: "EPREL — Panasonic CS-NZ35YKE / CU-NZ35YKE, EU's energimærke", url: eprel("1451347") },
    { name: "EPREL — Panasonic CS-NZ50YKE / CU-NZ50YKE, EU's energimærke", url: eprel("1451348") },
    { name: "EPREL — Panasonic CS-NZ25YKE-1 / CU-NZ25YKE, EU's energimærke", url: eprel("2172255") },
    { name: "Panasonic — NZ25YKE, dansk produktside", url: panasonic("cs-nz25yke-cu-nz25yke") },
  ],
  variants: [
    { name: "NZ25YKE, 2,8 kW", watts: {}, annualKwh: 784, energyClass: "A++", source: 0 },
    { name: "NZ35YKE, 3,6 kW", watts: {}, annualKwh: 1008, energyClass: "A++", source: 1 },
    { name: "NZ50YKE, 4,4 kW", watts: {}, annualKwh: 1283, energyClass: "A++", source: 2 },
  ],
  publishDate: "2027-01-05",
  updated: "2026-11-26",
  measuredBy: "til opvarmning ifølge EU's energimærke i gennemsnitligt klima (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærkets årsforbrug til opvarmning i EU's gennemsnitlige klima ved pumpens dimensionerende varmelast (Pdesignh), som producenten har registreret i EPREL. Kilderne står nederst på siden.",
};

export default panasonicEthereaNz;
