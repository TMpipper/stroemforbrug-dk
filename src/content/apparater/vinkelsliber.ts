import type { ApplianceData } from "@/lib/types";

/**
 * Vinkelsliber (125 mm) + opladning af batterier til elværktøj. Intet EU-energimærke.
 * Tal: Makita 9558HN (840 W), Bosch GWS 12-125 (1.200 W optaget, 690 W afgivet), Makita GA5040C (1.400 W).
 * Batterier: Makita BL1830B (54 Wh, 22 min på DC18RC), BL1840B (72 Wh, 36 min), BL1850B (90 Wh, 45 min), DC18RC (240 W
 * optaget); Bosch GAL 18V-40 (2/4/5 Ah: 24/48/60 min til 80 %, 35/65/70 min til 100 %); Milwaukee M12-18FC
 * (M18 2/4/5 Ah: 26/52/59 min). Opladningstab ca. 15 % og timer pr. år er vores skøn.
 */
const vinkelsliber: ApplianceData = {
  slug: "vinkelsliber",
  meta: {
    category: "vaerksted",
    usage: "per-hour",
    hasEuLabel: false,
    shiftable: false,
    synonyms: ["vinkelsliber", "vinkelsliber 125 mm", "flex", "rondelsliber", "batteri vinkelsliber", "elværktøj", "batterioplader værktøj", "opladning af værktøjsbatteri", "18v batteri"],
  },
  name: "Vinkelsliber",
  article: "en",
  title: "Vinkelsliber strømforbrug (2026) → watt og værktøjsbatterier",
  description:
    "Se hvor meget strøm en vinkelsliber bruger i timen, og hvad det koster at lade batterierne til dit elværktøj: 18 V på 2-5 Ah, ladetider og opladerens effekt.",
  heading: "Strømforbrug for en vinkelsliber: watt, pris i timen og dyreste timer",
  quickAnswer:
    "En vinkelsliber på 125 mm har typisk en motor på 840-1.400 W og bruger højst 1,2 kWh i timen ved 1.200 W, svarende til {{kr 1,2}} ved {{pris_kwh}}. Ti timer om året bliver cirka 12 kWh, eller {{kr 12}}. At lade et 18 V-batteri på 5 Ah til elværktøj bruger kun omkring 0,1 kWh og koster cirka {{kr 0,1}}.",
  kwhRange: [0.5, 100],
  typicalKwh: 12,
  wattage: 1200,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.1, 1.0, 1.2, 1.3, 1.1, 0.9, 0.8, 0.8, 1.0, 1.0, 0.9, 0.9],
  content: `<h2>Værkstedets alsidige maskine</h2>
<p>En vinkelsliber — ofte bare kaldt en flex — skærer, sliber og børster metal, sten og fliser med en skive, der drejer meget hurtigt. Den almindelige størrelse til hjemmet tager skiver på 125 mm, og motorerne ligger typisk mellem 800 og 1.400 W. Makita oplyser 840 W for 9558HN og 1.400 W for GA5040C. Bosch oplyser for GWS 12-125, at den optager 1.200 W og afgiver 690 W på akslen. Forskellen er det, der går tabt som varme i motoren og gearet — og det er den optagne effekt, der står på elregningen.</p>
<p>En vinkelsliber bruger sin fulde effekt, når skiven arbejder i materialet. Kører den i luften mellem to snit, trækker den mindre. En time med en model på 1.200 W bruger derfor højst 1,2 kWh, og i praksis mindre, fordi du sjældent skærer en hel time i træk.</p>

<h2>Watt og pris i timen</h2>
<table>
<thead><tr><th>Vinkelsliber (125 mm)</th><th>kWh i timen</th><th>Pris i timen</th><th>10 timer om året</th></tr></thead>
<tbody>
<tr><td>Let model, 840 W (Makita 9558HN)</td><td>0,84</td><td>{{kr 0,84}}</td><td>{{kr 8,4}}</td></tr>
<tr><td>Mellem, 1.200 W (Bosch GWS 12-125)</td><td>1,2</td><td>{{kr 1,2}}</td><td>{{kr 12}}</td></tr>
<tr><td>Kraftig, 1.400 W (Makita GA5040C)</td><td>1,4</td><td>{{kr 1,4}}</td><td>{{kr 14}}</td></tr>
</tbody>
</table>
<p>Tallene er regnet med fuld effekt hele tiden og er en øvre grænse. Timerne pr. år er vores eksempel for en hobbybruger, der skærer fliser, renser rust og afgrater lidt metal i løbet af året.</p>

<h2>Opladning af batterier til elværktøj</h2>
<p>Mange har skiftet ledningsværktøjet ud med batteriværktøj, og så er det opladningen, der bruger strømmen. Kapaciteten står i watt-timer på batteriet eller kan regnes ud som spænding gange ampere-timer. Makita oplyser 54 Wh for BL1830B på 3 Ah, 72 Wh for BL1840B på 4 Ah og 90 Wh for BL1850B på 5 Ah. Et 18 V-batteri på 2 Ah rummer tilsvarende 36 Wh.</p>
<table>
<thead><tr><th>18 V-batteri</th><th>Wh i batteriet</th><th>kWh fra stikkontakten (ca.)</th><th>Pris pr. opladning</th></tr></thead>
<tbody>
<tr><td>2 Ah</td><td>36</td><td>0,04</td><td>{{kr 0,04}}</td></tr>
<tr><td>3 Ah (Makita BL1830B)</td><td>54</td><td>0,06</td><td>{{kr 0,06}}</td></tr>
<tr><td>4 Ah (Makita BL1840B)</td><td>72</td><td>0,08</td><td>{{kr 0,08}}</td></tr>
<tr><td>5 Ah (Makita BL1850B)</td><td>90</td><td>0,1</td><td>{{kr 0,1}}</td></tr>
</tbody>
</table>
<p>Vi har lagt omkring 15 procent til for tabet i opladeren. Selv hvis du lader to store batterier hver dag i en hel arbejdsuge, bliver det ikke til mere end 1 kWh.</p>

<h2>Opladeren: høj effekt, kort tid</h2>
<p>Hurtigladere har en ret høj effekt, men de kører kun kort. Makita oplyser, at hurtigladeren DC18RC optager 240 W, og at den lader BL1830B på 22 minutter, BL1840B på 36 minutter og BL1850B på 45 minutter. Bosch oplyser for GAL 18V-40, at et 4 Ah-batteri er 80 procent opladet efter 48 minutter og fuldt opladet efter 65 minutter. Milwaukee oplyser for M12-18FC, at M18-batterier på 2, 4 og 5 Ah lades på 26, 52 og 59 minutter.</p>
<p>Opladerens effekt og ladetiden giver en øvre grænse: 240 W i 45 minutter er 0,18 kWh. Det rigtige forbrug er lavere, fordi opladeren skruer ned for strømmen, når batteriet nærmer sig fuldt, og fordi batteriet kun rummer 90 Wh. Det er derfor, vi regner med batteriets kapacitet plus tabet frem for opladerens maksimale effekt.</p>

<h2>Hvornår skal du lade og bruge værktøjet?</h2>
<p>Vinkelsliberen med ledning bruger strøm, mens du arbejder, og det kan ikke flyttes til natten. Undgå gerne de dyreste timer fra kl. 17 til 21, hvor nettariffen er højest, hvis du har et større projekt. Boksen længere oppe på siden viser dagens timepriser.</p>
<p>Batterierne er en anden sag. Dem kan du lade, når strømmen er billig — om natten eller midt på dagen — så de er klar, når du skal bruge dem. I kroner betyder det næsten intet, fordi en opladning koster få øre. Det vigtigste er at passe på batterierne: lad dem ikke ligge i en kold bil eller et frostkoldt skur, og lad et varmt batteri køle af, før du sætter det i opladeren.</p>

<h2>Hvad bestemmer forbruget?</h2>
<ul>
<li><strong>Skiven</strong> — en ny, skarp skære- eller slibeskive arbejder hurtigere end en slidt. Brug den rigtige skive til materialet.</li>
<li><strong>Trykket</strong> — at presse hårdt gør ikke arbejdet hurtigere; det bremser motoren og øger forbruget. Lad skiven gøre arbejdet.</li>
<li><strong>Materialet</strong> — at skære i beton og natursten kræver mere end at afgrate tynd plade.</li>
<li><strong>Tomgang</strong> — slip kontakten mellem snittene.</li>
</ul>

<h2>Værkstedets samlede forbrug</h2>
<p>For de fleste er værkstedets elværktøj en lille post på elregningen. De store forbrugere i et hobbyværksted er dem, der kører længe eller med høj effekt: en <a href="/kompressor/">kompressor</a> til sandblæsning, en <a href="/svejser/">svejser</a> ved fuld strøm eller en <a href="/varmeblaeser/">varmeblæser</a>, der holder værkstedet varmt om vinteren. Varmen er ofte den største post: en varmeblæser på 2.000 W bruger lige så meget på en time som vinkelsliberen på over halvanden time med fuld belastning — og den kører langt længere.</p>
<p>Har du mange batteriværktøjer, kan opladerne stå i stikkontakten hele tiden. En oplader, der ikke lader, bruger meget lidt, men det er stadig en god vane at tage den ud eller slukke på en stikdåse med kontakt, når værkstedet lukkes.</p>

<h2>Sådan holder du forbruget nede</h2>
<ol>
<li>Brug den rigtige skive, og skift den, når den er slidt.</li>
<li>Lad skiven arbejde i stedet for at presse.</li>
<li>Slip kontakten mellem snittene.</li>
<li>Lad batterierne i de billige timer, og opbevar dem frostfrit.</li>
<li>Sluk opladerne, når værkstedet lukkes.</li>
</ol>
<p>Brug beregneren ovenfor til at se, hvad din vinkelsliber bruger over et år.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger en vinkelsliber?",
      answer:
        "En vinkelsliber på 125 mm har typisk 840-1.400 W. Makita oplyser 840 W for 9558HN og 1.400 W for GA5040C, og Bosch 1.200 W for GWS 12-125. En time ved fuld effekt bruger 0,84-1,4 kWh.",
    },
    {
      question: "Hvad koster det at lade et batteri til elværktøj?",
      answer:
        "Et 18 V-batteri på 5 Ah rummer 90 Wh og bruger omkring 0,1 kWh fra stikkontakten. En fuld opladning koster cirka {{kr 0,1}} ved {{pris_kwh}}. Et 2 Ah-batteri koster omkring {{kr 0,04}}.",
    },
    {
      question: "Hvor lang tid tager det at lade et 18 V-batteri?",
      answer:
        "Med Makitas hurtiglader DC18RC 22-45 minutter for 3-5 Ah. Bosch oplyser 65 minutter for et 4 Ah-batteri med GAL 18V-40, og Milwaukee 26-59 minutter for M18-batterier på 2-5 Ah med M12-18FC.",
    },
    {
      question: "Hvor meget strøm bruger en batterioplader til værktøj?",
      answer:
        "Makitas hurtiglader DC18RC optager 240 W, mens den lader. Men den lader kun i kort tid, så en fuld opladning af et 5 Ah-batteri bruger omkring 0,1 kWh.",
    },
    {
      question: "Hvad koster en vinkelsliber i strøm om året?",
      answer:
        "Med ti timer om året bruger en model på 1.200 W højst omkring 12 kWh, svarende til {{kr 12}}.",
    },
  ],
  relatedSlugs: ["svejser", "kompressor", "kaedesav", "elcykel", "varmeblaeser"],
  sources: [
    { name: "Makita — 9558HN (840 W)", url: "https://www.makita.co.nz/products/model/9558HN" },
    { name: "Makita — GA5040C (1.400 W)", url: "https://www.makita.co.nz/products/model/GA5040C" },
    { name: "Bosch Professional — GWS 12-125", url: "https://bosch-professional.com/ge/en/products/gws-12-125-06013A6101" },
    { name: "Makita — BL1830B (54 Wh)", url: "https://www.makita.co.nz/products/model/BL1830B" },
    { name: "Makita — BL1840B (72 Wh)", url: "https://www.makita.co.nz/products/model/BL1840B" },
    { name: "Makita — BL1850B (90 Wh)", url: "https://www.makita.co.nz/products/model/BL1850B" },
    { name: "Makita — DC18RC hurtiglader", url: "https://www.makita.co.nz/products/model/DC18RC" },
    { name: "Bosch Professional — GAL 18V-40", url: "https://www.bosch-professional.com/gb/en/products/gal-18v-40-1600A019RK" },
    { name: "Milwaukee — M12-18 FC", url: "https://www.milwaukeetool.eu/m12-m18-fast-charger/m12-18-fc-eu" },
  ],
  calculatorConfig: {
    title: "Beregn vinkelsliberens strømforbrug",
    options: [
      { label: "Let model (840 W)", kwhPerUse: 0.84 },
      { label: "Mellem (1.200 W)", kwhPerUse: 1.2 },
      { label: "Kraftig (1.400 W)", kwhPerUse: 1.4 },
    ],
    usageLabel: "Timer pr. år",
    usageUnit: "timer/år",
    usageMin: 1,
    usageMax: 200,
    usageDefault: 10,
    usageStep: 1,
    per: "time",
    perYear: 1,
  },
  publishDate: "2026-12-16",
  updated: "2026-11-22",
};

export default vinkelsliber;
