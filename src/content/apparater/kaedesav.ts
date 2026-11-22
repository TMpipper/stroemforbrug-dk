import type { ApplianceData } from "@/lib/types";

/**
 * Kædesav på el — med ledning eller batteri. Intet EU-energimærke.
 * Tal: Bosch UniversalChain 40 (1.800 W, 40 cm), Makita UC4041A (1.800 W), Einhell GE-EC 2240 (2.200 W),
 * Stihl AP 300 S (281 Wh) og Stihls køretidstabel (MSA 220 + AP 300 S: 37 min; MSA 70 + AK 20: 40 min / 160 snit;
 * AK 30 S: 45 min / 210 snit), Husqvarna 240i (40-B140: 36 V, 4 Ah, 144 Wh), Makita DUC353 (2 × 18 V).
 * kWh i timen for batterisaven = Wh ÷ køretid + ca. 15 % opladningstab (vores omregning). Timer pr. år: vores skøn.
 */
const kaedesav: ApplianceData = {
  slug: "kaedesav",
  meta: {
    category: "have",
    usage: "per-hour",
    hasEuLabel: false,
    shiftable: false,
    synonyms: ["kædesav", "kaedesav", "elkædesav", "el-kædesav", "batteri kædesav", "motorsav el", "kædesav med ledning", "akku kædesav", "brændesav"],
  },
  name: "Kædesav",
  article: "en",
  title: "Kædesav strømforbrug (2026) → el og batteri i timen",
  description:
    "Se hvor meget strøm en elkædesav bruger i timen og pr. opladning: ledningssave på 1.800-2.200 W mod batterisave på 36 V, og hvad en vinter med brænde koster.",
  heading: "Strømforbrug for en kædesav: watt, pris i timen og dyreste timer",
  quickAnswer:
    "En kædesav med ledning på 1.800 W bruger op til 1,8 kWh i timen, svarende til {{kr 1,8}} ved {{pris_kwh}}. Saver du fem timer om året, bliver det cirka 9 kWh, eller {{kr 9}}. En batterisav som Stihl MSA 220 bruger efter vores omregning omkring 0,5 kWh i timen, og en fuld opladning af et batteri på 281 Wh koster cirka {{kr 0,32}}.",
  kwhRange: [0.5, 60],
  typicalKwh: 9,
  wattage: 1800,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.6, 1.8, 1.6, 1.2, 0.6, 0.3, 0.3, 0.4, 0.6, 1.0, 1.3, 1.3],
  content: `<h2>En stærk motor i korte stød</h2>
<p>En kædesav på el har en kraftig motor, fordi kæden skal skære gennem træ med høj fart. Bosch oplyser 1.800 W for UniversalChain 40 med et sværd på 40 cm, Makita 1.800 W for UC4041A og Einhell 2.200 W for GE-EC 2240. Det er samme størrelse som en <a href="/hoejtryksrenser/">højtryksrenser</a> eller en kraftig elkedel, men en kædesav kører sjældent ret længe ad gangen. Mellem snittene står den i tomgang eller er slukket, mens du flytter dig eller lægger stammen til rette.</p>
<p>Regnet med fuld effekt bruger en sav på 1.800 W altså 1,8 kWh i timen. Det er en øvre grænse. I tomgang og ved lette snit trækker motoren mindre, og den tid, du rent faktisk skærer, er kun en del af den tid, du står i skoven eller ved brændestablen.</p>

<h2>Watt og pris i timen</h2>
<table>
<thead><tr><th>Kædesav</th><th>kWh i timen (ca.)</th><th>Pris i timen</th><th>5 timer om året</th></tr></thead>
<tbody>
<tr><td>Batteri 36 V (Stihl MSA 220 med AP 300 S)</td><td>0,52</td><td>{{kr 0,52}}</td><td>{{kr 2,6}}</td></tr>
<tr><td>Ledning 1.800 W (Bosch, Makita)</td><td>1,8</td><td>{{kr 1,8}}</td><td>{{kr 9}}</td></tr>
<tr><td>Ledning 2.200 W (Einhell GE-EC 2240)</td><td>2,2</td><td>{{kr 2,2}}</td><td>{{kr 11}}</td></tr>
</tbody>
</table>
<p>Batterisavens tal er vores omregning af Stihls egne oplysninger: batteriet AP 300 S rummer 281 Wh, og Stihl oplyser en køretid på 37 minutter med MSA 220. Det giver omkring 0,46 kWh i timen fra batteriet og cirka 0,52 kWh fra stikkontakten, når opladerens tab er regnet med.</p>

<h2>Strøm pr. opladning</h2>
<p>Med en batterisav er det opladningen, der bruger strøm. Hvor meget, afhænger af batteriet. Stihls AP 300 S har 281 Wh, Husqvarna oplyser 144 Wh for batteriet 40-B140 til 240i (36 V og 4 Ah), og Makitas DUC353 kører på to 18 V-batterier på én gang. Med to batterier på 5 Ah, der hver rummer 90 Wh, har den altså 180 Wh at arbejde med.</p>
<table>
<thead><tr><th>Batteri</th><th>Wh i batteriet</th><th>kWh fra stikkontakten (ca.)</th><th>Pris pr. opladning</th></tr></thead>
<tbody>
<tr><td>Husqvarna 40-B140 (36 V, 4 Ah)</td><td>144</td><td>0,17</td><td>{{kr 0,17}}</td></tr>
<tr><td>To Makita-batterier på 5 Ah (2 × 18 V)</td><td>180</td><td>0,21</td><td>{{kr 0,21}}</td></tr>
<tr><td>Stihl AP 300 S</td><td>281</td><td>0,32</td><td>{{kr 0,32}}</td></tr>
</tbody>
</table>
<p>Stihl oplyser også, hvor mange snit en opladning rækker til for den lille MSA 70: 40 minutter og 160 snit med batteriet AK 20, og 45 minutter og 210 snit med AK 30 S. Snittene er målt i Stihls eget testtræ, så de egner sig mest til at sammenligne batterierne med hinanden.</p>

<h2>Hvad bestemmer forbruget?</h2>
<ul>
<li><strong>En skarp kæde</strong> — den vigtigste enkeltting. En sløv kæde skal presses gennem træet, tager længere tid og belaster motoren. Fil kæden jævnligt, eller få den slebet.</li>
<li><strong>Kædeolie</strong> — en kæde uden olie giver friktion, varme og slid. Fyld olie på, hver gang du lader batteriet eller tanker op på kaffe.</li>
<li><strong>Træets hårdhed og tykkelse</strong> — tør eg og bøg kræver mere end frisk birk og gran. Tykke stammer tager længere tid pr. snit.</li>
<li><strong>Sværdets længde</strong> — et langt sværd kan tage tykkere stammer, men giver mere modstand. Til brænde og haveaffald er 30-40 cm ofte nok.</li>
<li><strong>Tomgang</strong> — en ledningssav kører ikke i tomgang som en benzinsav; slip gashåndtaget, så stopper kæden og motoren.</li>
</ul>

<h2>Hvornår bruger kædesaven strøm?</h2>
<p>Kædesaven bruges, når du har tid og lys — oftest i weekenden om vinteren og det tidlige forår, hvor der skal fældes og skæres brænde. En ledningssav bruger strømmen mens du saver, så den kan ikke flyttes; du kan højst undgå tiden fra kl. 17 til 21, hvor nettariffen er højest, og det er alligevel mørkt på det tidspunkt det meste af vinteren. Boksen længere oppe på siden viser dagens timepriser.</p>
<p>Batteriets opladning kan derimod flyttes. Sæt batteriet i opladeren om natten eller i en billig time, så er det klar næste morgen. Batterier til kædesave er store og dyre, så det er klogt at lade dem op indendørs og opbevare dem frostfrit. Et koldt batteri leverer mindre og giver kortere køretid.</p>

<h2>El eller benzin?</h2>
<p>En elkædesav bruger meget lidt energi sammenlignet med en benzinsav, og strømmen til et års brændehugning er få kroner. Den starter med det samme, er mere stille og udleder ingen udstødning der, hvor du står. Til gengæld har en ledningssav en ledning, der skal holdes væk fra kæden, og den passer bedst tæt på huset. En batterisav er fri af ledningen, men har en begrænset køretid pr. batteri. Til store mængder brænde eller fældning langt fra huset foretrækker mange stadig benzin — men til haveaffald, beskæring og lidt brænde er elsaven rigeligt.</p>
<p>Brug altid en fejlstrømsafbryder, når du saver med ledning udendørs, og brug en forlængerledning til udendørs brug med et passende tværsnit. En sav på 1.800-2.200 W trækker omkring 8-10 ampere.</p>

<h2>Kædesaven og havens andre redskaber</h2>
<p>Har du allerede en batteriplatform til <a href="/haekkeklipper/">hækkeklipperen</a> eller <a href="/elplaeneklipper/">plæneklipperen</a>, passer batterierne ofte også i en kædesav fra samme producent. Det giver ingen besparelse på strømmen, men sparer udgiften til ekstra batterier og opladere. Strømmen er under alle omstændigheder den mindste post — kæde, sværd, olie og batterier koster langt mere over savens levetid.</p>

<h2>Sådan holder du forbruget nede</h2>
<ol>
<li>Hold kæden skarp og godt smurt.</li>
<li>Brug et sværd, der passer til opgaven.</li>
<li>Slip håndtaget mellem snittene.</li>
<li>Lad batterierne i de billige timer og opbevar dem frostfrit.</li>
<li>Lad træet ligge til tørre efter kløvning — ikke før. Frisk træ er lettere at save end tørt.</li>
</ol>
<p>Brug beregneren ovenfor til at se, hvad dine timer med kædesaven koster.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger en elkædesav?",
      answer:
        "Ledningssave til hjemmet ligger typisk på 1.800-2.200 W. Bosch og Makita oplyser 1.800 W for UniversalChain 40 og UC4041A, Einhell 2.200 W for GE-EC 2240. En time ved fuld effekt bruger 1,8-2,2 kWh.",
    },
    {
      question: "Hvad koster det at lade en batterikædesav?",
      answer:
        "Et batteri på 281 Wh som Stihl AP 300 S bruger omkring 0,32 kWh fra stikkontakten og koster cirka {{kr 0,32}}. Et batteri på 144 Wh koster omkring {{kr 0,17}}.",
    },
    {
      question: "Hvor længe holder batteriet i en kædesav?",
      answer:
        "Stihl oplyser 37 minutter for MSA 220 med AP 300 S, og 40 minutter eller 160 snit for den lille MSA 70 med AK 20. Hårdt træ og en sløv kæde giver kortere køretid.",
    },
    {
      question: "Hvad koster en elkædesav i strøm om året?",
      answer:
        "Med fem timer om året bruger en ledningssav på 1.800 W omkring 9 kWh, svarende til {{kr 9}}. En batterisav bruger typisk under 3 kWh på samme tid.",
    },
    {
      question: "Kan jeg flytte kædesavens forbrug til billige timer?",
      answer:
        "Ledningssaven bruger strøm, mens du saver, så nej. Batteriet kan du derimod lade om natten eller i en billig time, så det er klar næste dag.",
    },
  ],
  relatedSlugs: ["haekkeklipper", "elplaeneklipper", "hoejtryksrenser", "vinkelsliber", "loevblaeser"],
  sources: [
    { name: "Bosch — UniversalChain 40 (motoreffekt)", url: "https://www.bosch-diy.com/no/no/p/universalchain-40-06008b8402" },
    { name: "Makita — UC4041A", url: "https://www.makita.co.nz/products/model/UC4041A" },
    { name: "Einhell — GE-EC 2240", url: "https://www.einhell.de/en/p/4501740-ge-ec-2240" },
    { name: "Stihl — AP 300 S (batterikapacitet)", url: "https://stihl.com.fj/en/p/batteries-chargers-ap-300-s-battery-164012" },
    { name: "Stihl — Battery working times", url: "https://www.stihl.co.uk/en/support/faq/battery-working-times" },
    { name: "Husqvarna — 240i med batteri og oplader", url: "https://www.husqvarna.com/in/chainsaws/240i-with-battery-and-charger/" },
    { name: "Makita — DUC353 (2 × 18 V)", url: "https://www.makita.co.nz/products/model/DUC353Z" },
    { name: "Makita — BL1850B (90 Wh)", url: "https://www.makita.co.nz/products/model/BL1850B" },
  ],
  calculatorConfig: {
    title: "Beregn kædesavens strømforbrug",
    options: [
      { label: "Batteri 36 V (ca. 0,52 kWh/time)", kwhPerUse: 0.52 },
      { label: "Ledning 1.800 W", kwhPerUse: 1.8 },
      { label: "Ledning 2.200 W", kwhPerUse: 2.2 },
    ],
    usageLabel: "Timer pr. år",
    usageUnit: "timer/år",
    usageMin: 1,
    usageMax: 40,
    usageDefault: 5,
    usageStep: 1,
    per: "time",
    perYear: 1,
  },
  publishDate: "2026-12-15",
  updated: "2026-11-22",
};

export default kaedesav;
