import type { ApplianceData } from "@/lib/types";

/**
 * Elplæneklipper — med ledning eller batteri. Intet EU-energimærke (kun støjmærkning).
 * Tal: Bosch EasyRotak 32-225 (1.200 W), Bosch AdvancedRotak 44-750 (1.800 W), Bosch AdvancedRotak 36V-44-750
 * (36 V 4 Ah, ladetid 3,1 t, 80 % på 96 min, plæne op til 750 m²), Einhell GE-CM 36/33 Li (2 × 18 V: 2 × 4 Ah ≈ 400 m²),
 * Gardena PowerMax 37/36V (2 × 72 Wh, plæner op til 500 m²), Tænk (Einhell GE-CM 18/30 Li: 14 min på 3 Ah).
 * Klippetid pr. gang og opladningstab (ca. 15 %) er vores skøn. Beregneren: klipninger pr. år × kWh pr. klipning.
 */
const elplaeneklipper: ApplianceData = {
  slug: "elplaeneklipper",
  meta: {
    category: "have",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: true,
    motif: "robotklipper",
    synonyms: ["elplæneklipper", "el-plæneklipper", "elektrisk plæneklipper", "plæneklipper med ledning", "batteriplæneklipper", "batteridrevet plæneklipper", "akku plæneklipper", "plæneklipper 36 v"],
  },
  name: "Elplæneklipper",
  article: "en",
  title: "Elplæneklipper strømforbrug (2026) → ledning og batteri",
  description:
    "Se hvor meget strøm en elplæneklipper bruger pr. klipning og pr. sæson: ledningsklipper på 1.200-1.800 W mod batteriklipper på 36 V, og hvad det koster.",
  heading: "Strømforbrug for en elplæneklipper: kWh, pris pr. klipning og billigste tidspunkt",
  quickAnswer:
    "En plæneklipper med ledning på 1.200 W bruger omkring 0,6 kWh på en halv times klipning, svarende til {{kr 0,6}} ved {{pris_kwh}}. Med 25 klipninger om året bliver det cirka 15 kWh, eller {{kr 15}} for hele sæsonen. En batteriklipper på 36 V bruger kun omkring 0,17 kWh pr. fuld opladning, så sæsonen koster under {{kr 5}}.",
  kwhRange: [1, 60],
  typicalKwh: 15,
  wattage: 1200,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [0, 0, 0.3, 1.3, 2.0, 1.9, 1.6, 1.6, 1.6, 1.2, 0.5, 0],
  content: `<h2>Ledning eller batteri: to meget forskellige forbrug</h2>
<p>En elplæneklipper findes i to udgaver, og de bruger strøm på hver sin måde. Klipperen med ledning trækker strøm direkte fra stikkontakten, så længe motoren kører, og effekten står på typeskiltet. Bosch sælger for eksempel EasyRotak 32-225 med en motor på 1.200 W og AdvancedRotak 44-750 med 1.800 W. Batteriklipperen bruger kun strøm, når batteriet lades op, og forbruget er bestemt af batteriets størrelse i watt-timer.</p>
<p>Forskellen er stor. En klipper på 1.200 W, der kører en halv time, bruger op til 0,6 kWh. Et batteri på 36 V og 4 Ah rummer 144 Wh, og med et opladningstab på omkring 15 procent, som er vores skøn, bruger en fuld opladning cirka 0,17 kWh fra stikkontakten. Batteriklipperen bruger altså omkring en fjerdedel af strømmen til det samme stykke græs — fordi motoren er mere effektiv og klippeskiven lettere, og fordi batteriklipperen kun kører, når den skal.</p>

<h2>Strøm og pris pr. klipning</h2>
<table>
<thead><tr><th>Klipper</th><th>kWh pr. klipning (ca.)</th><th>Pris pr. klipning</th><th>25 klipninger om året</th></tr></thead>
<tbody>
<tr><td>Batteriklipper 18 V, lille plæne (ca. 150 m²)</td><td>0,08</td><td>{{kr 0,08}}</td><td>{{kr 2}}</td></tr>
<tr><td>Batteriklipper 36 V, 4 Ah (ca. 400 m²)</td><td>0,17</td><td>{{kr 0,17}}</td><td>{{kr 4,25}}</td></tr>
<tr><td>Ledningsklipper 1.200 W, 30 minutter</td><td>0,6</td><td>{{kr 0,6}}</td><td>{{kr 15}}</td></tr>
<tr><td>Ledningsklipper 1.800 W, 45 minutter</td><td>1,35</td><td>{{kr 1,35}}</td><td>{{kr 33,75}}</td></tr>
</tbody>
</table>
<p>Ledningsklipperens tal er regnet med fuld effekt hele tiden og er derfor en øvre grænse. I kort, tørt græs arbejder motoren mindre hårdt, og forbruget falder. Tiden pr. klipning er vores skøn for en almindelig villahave. Batteritallene er vores omregning af batteriets watt-timer plus tabet i opladeren.</p>

<h2>Hvor stor en plæne klarer et batteri?</h2>
<p>Producenterne oplyser, hvor mange kvadratmeter en opladning rækker til, og det er den nemmeste vej til at regne forbruget pr. m². Einhell skriver om sin GE-CM 36/33 Li, der kører på to 18 V-batterier, at to batterier på 4 Ah klarer omkring 400 m², to på 2,5 Ah omkring 250 m² og to på 8 Ah omkring 800 m². Det svarer til knap 0,4 Wh pr. m² fra batteriet. Gardena oplyser, at PowerMax 37/36V med to batterier på 72 Wh er beregnet til plæner på op til 500 m².</p>
<p>Bosch oplyser for AdvancedRotak 36V-44-750 med et 4 Ah-batteri, at klipperen passer til plæner på op til 750 m², at en fuld opladning tager 3,1 timer, og at batteriet er 80 procent opladet efter 96 minutter. Er plænen større end det, et batteri rækker til, skal du enten have et ekstra batteri eller holde pause og lade op.</p>
<p>Tallene holder kun, når græsset er tørt og ikke for højt. Tænk har testet Einhell GE-CM 18/30 Li, en lille klipper på 18 V, og målte en batteritid på 14 minutter med et 3 Ah-batteri — nok til de mindste haver. Vådt og langt græs kan let halvere arealet pr. opladning.</p>

<h2>Hvad bestemmer forbruget?</h2>
<ul>
<li><strong>Græssets højde</strong> — har græsset fået lov at gro i to uger, skal motoren arbejde hårdere. Klip hellere ofte og lidt ad gangen.</li>
<li><strong>Fugt</strong> — vådt græs klæber til skjoldet og klippeskiven og øger modstanden. Vent, til duggen er væk.</li>
<li><strong>Opsamling eller mulching</strong> — en fyldt opsamler giver dårligere luftstrøm, og motoren skal bruge mere kraft for at blæse græsset op.</li>
<li><strong>Skarp kniv</strong> — en sløv kniv river græsset over i stedet for at skære det og koster både strøm og et pænt resultat. Slib eller udskift den hver sæson.</li>
<li><strong>Klippebredde</strong> — en bredere klipper skal bruge mere effekt, men bliver hurtigere færdig. For en stor plæne betyder den kortere tid mere end den højere effekt.</li>
<li><strong>Kulde</strong> — et koldt batteri leverer mindre. Opbevar batterierne frostfrit om vinteren.</li>
</ul>

<h2>Hvornår skal du lade batteriet?</h2>
<p>En ledningsklipper bruger strøm præcis når du klipper, og det sker typisk i dagtimerne. Midt på dagen er elprisen ofte lavere end om aftenen, særligt på solrige dage, så her er der sjældent noget at hente ved at flytte arbejdet. Undgå blot at klippe mellem kl. 17 og 21, hvor nettariffen er højest — det er også et tidspunkt, hvor naboerne sætter pris på ro.</p>
<p>Batteriet er lettere at flytte. Sæt det i opladeren om natten eller i en billig time midt på dagen, og brug det næste dag. Oversigten over dagens timepriser længere oppe på siden viser, hvornår opladningen koster mindst. I kroner er forskellen dog lille: en hel opladning koster under {{kr 0,2}}, og det vigtigste er at passe på batteriet. Lad det ikke stå fuldt opladet i varmen, og opbevar det halvt opladet over vinteren.</p>

<h2>Elplæneklipper, robotplæneklipper eller benzin?</h2>
<p>En <a href="/robotplaeneklipper/">robotplæneklipper</a> kører næsten hver dag, men bruger så lidt strøm pr. tur, at den over en sæson ofte havner i samme størrelse som en ledningsklipper. Den klipper små stykker ad gangen og har et lille batteri, så den aldrig trækker meget fra nettet på én gang. Til gengæld står ladestationen tændt hele sæsonen.</p>
<p>En benzinklipper bruger ingen strøm, men den har en lille forbrændingsmotor, der skal have brændstof, olie og service. Til en almindelig villahave er en elplæneklipper billigere at drive, og den er lettere, mere stille og starter med det samme.</p>
<p>Tænk har testet over hundrede plæneklippere med benzin, ledning, batteri og håndkraft, og testerne måler blandt andet energiforbruget. Tænk peger på, at batteri og oplader ofte koster omkring 1.000 kroner ekstra ved købet, hvis de ikke følger med klipperen — en udgift, der fylder langt mere end strømmen.</p>

<h2>Et batteri til hele haven</h2>
<p>Mange producenter bygger deres haveredskaber på samme batteriplatform, så batteriet fra plæneklipperen også passer i <a href="/haekkeklipper/">hækkeklipperen</a>, <a href="/loevblaeser/">løvblæseren</a> og græstrimmeren. Det gør ikke det enkelte redskab mere sparsomt, men du betaler kun for batterier og oplader én gang. Når du vælger klipper, er det derfor værd at se på, hvilke andre redskaber du har eller vil købe. Strømmen til at lade et batteri, du bruger i flere redskaber, er stadig så lille, at den knap kan ses på elregningen.</p>

<h2>Sådan måler du din egen klipper</h2>
<p>Har du en ledningsklipper, kan du sætte en stikmåler til udendørs brug mellem forlængerledningen og stikkontakten. Klip hele plænen, og læs kWh-tallet af bagefter. Med en batteriklipper sætter du stikmåleren foran opladeren og lader batteriet op fra det niveau, det har efter en klipning. Del kWh-tallet med plænens areal, så har du dit eget tal pr. m².</p>
<p>Brug en forlængerledning, der er beregnet til udendørs brug og har et tilstrækkeligt tværsnit. En lang, tynd ledning taber spænding, så motoren får mindre kraft, og ledningen bliver varm. Rul den helt ud, også når du kun skal bruge en del af længden.</p>

<h2>Sådan holder du forbruget nede</h2>
<ol>
<li>Klip ofte, så du kun tager den øverste tredjedel af græsset.</li>
<li>Klip, når græsset er tørt.</li>
<li>Hold kniven skarp og skjoldet rent for græsrester.</li>
<li>Vælg mulching frem for opsamling, hvis klipperen kan begge dele — græsset bliver liggende som gødning.</li>
<li>Lad batteriet i de billige timer, og opbevar det frostfrit.</li>
</ol>
<p>Brug beregneren ovenfor til at se, hvad netop din klipper og din plæne koster over en sæson.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en elplæneklipper med ledning?",
      answer:
        "Lige så meget som motorens effekt, mens den kører: en klipper på 1.200 W bruger op til 1,2 kWh i timen. En halv times klipning bruger omkring 0,6 kWh og koster {{kr 0,6}}.",
    },
    {
      question: "Hvad koster det at lade en batteriplæneklipper?",
      answer:
        "Et batteri på 36 V og 4 Ah rummer 144 Wh og bruger omkring 0,17 kWh fra stikkontakten pr. fuld opladning. Det koster cirka {{kr 0,17}} ved {{pris_kwh}}.",
    },
    {
      question: "Hvad koster en elplæneklipper i strøm om året?",
      answer:
        "Med 25 klipninger på en halv time med en ledningsklipper på 1.200 W bliver det cirka 15 kWh, eller {{kr 15}}. En batteriklipper bruger typisk under 5 kWh på en sæson.",
    },
    {
      question: "Hvor mange m² kan man klippe på en opladning?",
      answer:
        "Det afhænger af batteriet. Einhell oplyser omkring 400 m² for to 18 V-batterier på 4 Ah og 800 m² for to på 8 Ah. Vådt eller langt græs giver mindre.",
    },
    {
      question: "Bruger en batteriklipper mindre strøm end en med ledning?",
      answer:
        "Ja, typisk omkring en fjerdedel til samme plæne. Men begge dele er små beløb: selv en ledningsklipper koster sjældent mere end {{kr 35}} om året.",
    },
    {
      question: "Hvornår er det billigst at lade batteriet til plæneklipperen?",
      answer:
        "I dagens billige timer, ofte om natten eller midt på dagen. Forskellen er dog kun få øre pr. opladning, fordi en fuld opladning bruger under 0,2 kWh.",
    },
  ],
  relatedSlugs: ["robotplaeneklipper", "haekkeklipper", "loevblaeser", "dykpumpe", "terrassevarmer"],
  sources: [
    { name: "Bosch — EasyRotak 32-225 (motoreffekt 1.200 W)", url: "https://www.bosch-diy.com/sg/en/p/easyrotak-32-225-06008a6372" },
    { name: "Bosch — AdvancedRotak 44-750 (motoreffekt 1.800 W)", url: "https://www.bosch-diy.com/gb/en/p/advancedrotak-44-750-06008b9j70" },
    { name: "Bosch — AdvancedRotak 36V-44-750 (batteri, ladetid, plænestørrelse)", url: "https://www.bosch-diy.com/ie/en/p/advancedrotak-36v-44-750-06008b9g00" },
    { name: "Einhell — GE-CM 36/33 Li (areal pr. batteristørrelse)", url: "https://www.einhell.de/en/p/3413210/" },
    { name: "Gardena — PowerMax 37/36V P4A Set", url: "https://www.gardena.com/int/products/lawn-care/lawn-mower/battery-lawnmower-powermax-37-36v-p4a-set/970586401" },
    { name: "Tænk — Test af plæneklippere", url: "https://taenk.dk/test/plaeneklippere/plaeneklippere-bedst-test" },
    { name: "Tænk — Einhell GE-CM 18/30 Li (batterilevetid)", url: "https://taenk.dk/test/plaeneklippere/einhell-ge-cm-1830-li" },
  ],
  calculatorConfig: {
    title: "Beregn plæneklipperens strømforbrug",
    options: [
      { label: "Batteriklipper 18 V, lille plæne (ca. 0,08 kWh)", kwhPerUse: 0.08 },
      { label: "Batteriklipper 36 V, 4 Ah (ca. 0,17 kWh)", kwhPerUse: 0.17 },
      { label: "Ledningsklipper 1.200 W, 30 min (ca. 0,6 kWh)", kwhPerUse: 0.6 },
      { label: "Ledningsklipper 1.800 W, 45 min (ca. 1,35 kWh)", kwhPerUse: 1.35 },
    ],
    usageLabel: "Klipninger pr. år",
    usageUnit: "klipninger/år",
    usageMin: 5,
    usageMax: 60,
    usageDefault: 25,
    usageStep: 1,
    per: "klipning",
    perYear: 1,
  },
  publishDate: "2026-12-14",
  updated: "2026-11-22",
};

export default elplaeneklipper;
