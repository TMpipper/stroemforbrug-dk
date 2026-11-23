import type { ApplianceData } from "@/lib/types";

/**
 * Hønsehus om vinteren — varmeplade under vandet, lys til æglægning, varmepanel og varmelampe. Intet EU-energimærke.
 * Tal: Kerbl varmeplade til drikketrug 15 W (Ø25 cm) og 22 W (Ø30 cm), 24 V; Kerbl infrarød hårdglaslampe 150/250 W;
 * Cozy Coop varmepanel ca. 200 W (My Pet Chicken); lys ca. 14 timer (University of Minnesota Extension) eller 14-16 timer
 * (UNH Extension); UMN: ekstra varme under 35 °F, UNH: frarådes pga. brandfare; Bolius: høns klarer kulde og frost,
 * drikkevandet fryser, varmeplade, træk er skidt, vinterpausen i æglægningen gør hønsene godt; Mattilsynet: isoleret og om
 * nødvendigt opvarmet hus, kunstigt lys nogle timer. LED-pæren på 9 W og de 90 vinterdøgn er vores skøn; at varmepladen står
 * tændt hele døgnet, er vores antagelse (ingen termostat oplyst).
 */
const hoensehus: ApplianceData = {
  slug: "hoensehus",
  meta: {
    category: "hobby",
    usage: "heating",
    hasEuLabel: false,
    shiftable: false,
    motif: "hus",
    synonyms: ["hønsehus", "hoensehus", "hønsehus om vinteren", "varme i hønsehus", "varmeplade til vand høns", "drikkevarmer høns", "varmelampe høns", "lys i hønsehus", "høns om vinteren", "hønsegård"],
  },
  name: "Hønsehus",
  article: "et",
  title: "Hønsehus strømforbrug (2026) → vandvarmer, lys og varmelampe",
  description:
    "Se hvad et hønsehus bruger om vinteren: varmeplade under vandet, lys til æglægning og varmelampe. kWh pr. døgn og pr. vinter, og hvornår varme giver mening.",
  heading: "Strømforbrug for et hønsehus: kWh om året, pris pr. måned og billige timer",
  quickAnswer:
    "Et hønsehus bruger normalt kun strøm om vinteren. En varmeplade på 22 W, der holder drikkevandet fri for is, og en LED-pære til ekstra lys bruger tilsammen cirka 0,6 kWh i døgnet, eller omkring 53 kWh på en vinter på 90 døgn, svarende til {{kr 53}} ved {{pris_kwh}}. En varmelampe på 250 W bruger 6 kWh i døgnet, så det er lampen, der kan gøre regningen stor.",
  kwhRange: [10, 1100],
  typicalKwh: 53,
  wattage: 22,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [14, 13, 10, 3, 0, 0, 0, 0, 0, 3, 8, 12],
  content: `<h2>Høns klarer kulden — vandet gør ikke</h2>
<p>Et hønsehus med en flok hobbyhøns bruger ingen strøm om sommeren. Om vinteren er der tre ting, der kan trække strøm: en varmeplade, der holder drikkevandet frit for is, lys, der forlænger dagen, og varme til selve huset. De tre ligger meget langt fra hinanden i forbrug, og kun den første er efter de kilder, vi har læst, en reel nødvendighed for de fleste.</p>
<p>Bolius skriver, at høns klarer kulde og endda hård frost fint, men at drikkevandet fryser til is, og at hønsene så kan dehydrere. Rådet er at stille vandet på en varmeplade. Bolius peger også på, at høns tåler træk dårligt, så et tørt hus uden træk er vigtigere end et varmt. Den norske fødevaremyndighed Mattilsynet beskriver kravet som et isoleret og om nødvendigt opvarmet hus om vinteren.</p>

<h2>Varmepladen under vandet</h2>
<p>En varmeplade til drikketrug er en flad, rund plade, som vandbeholderen står på. Kerbl sælger to størrelser, der kører på 24 V via en transformer: 15 W med en diameter på 25 cm og 22 W med en diameter på 30 cm. Vi har ikke kunnet se, at pladerne har en termostat, så vi regner med, at pladen står tændt hele døgnet, når den er sat i.</p>
<table>
<thead><tr><th>Varmeplade</th><th>Effekt</th><th>kWh i døgnet</th><th>Pris i døgnet</th><th>90 vinterdøgn</th></tr></thead>
<tbody>
<tr><td>Kerbl, Ø25 cm</td><td>15 W</td><td>0,36</td><td>{{kr 0,36}}</td><td>{{kr 32,4}}</td></tr>
<tr><td>Kerbl, Ø30 cm</td><td>22 W</td><td>0,53</td><td>{{kr 0,53}}</td><td>{{kr 47,5}}</td></tr>
</tbody>
</table>
<p>De 90 døgn svarer omtrent til december, januar og februar og er vores skøn for, hvor længe pladen står i. DMI's normal for 1991-2020 er 67,7 frostdøgn om året på landsplan, med flest i januar og februar. Sætter du pladen på en ur-kontakt eller en frosttermostat, så den kun kører i frostperioder, bliver forbruget mindre. Brug altid stik og ledninger beregnet til udendørs brug og stalde.</p>

<h2>Lys til æglægningen</h2>
<p>Høns lægger æg efter dagslængden. University of Minnesota Extension skriver, at høns skal have omkring 14 timers lys om dagen for at blive ved med at lægge, og at det ekstra lys bør tændes om morgenen før solopgang, så hønsene selv kan finde på pinden, når det bliver mørkt. University of New Hampshire Extension nævner 14-16 timer. I december er der kun omkring 7 timers dagslys i Danmark, så lyset skal forlænge dagen med op mod 7 timer.</p>
<table>
<thead><tr><th>Lys i hønsehuset</th><th>Timer om dagen</th><th>kWh i døgnet</th><th>90 vinterdøgn</th></tr></thead>
<tbody>
<tr><td>LED-pære 9 W</td><td>7</td><td>0,063</td><td>{{kr 5,7}}</td></tr>
<tr><td>Glødepære 60 W</td><td>7</td><td>0,42</td><td>{{kr 37,8}}</td></tr>
</tbody>
</table>
<p>Pæretallene er vores eksempler. Med en <a href="/led-paere/">LED-pære</a> er lyset en lille post. UNH Extension gør desuden opmærksom på, at LED-pærer afgiver mindre varme, hvilket også mindsker brandrisikoen. Du behøver dog ikke lys. Bolius skriver, at en vinterpause i æglægningen gør hønsene godt, så mange vælger bevidst at lade dem holde fri, til dagene bliver længere i februar og marts.</p>

<h2>Varmelampe og varmepanel: den store post</h2>
<p>Hvis hønsehuset skal varmes op, stiger forbruget voldsomt. Kerbl sælger infrarøde hårdglaslamper på 150 og 250 W, og det amerikanske varmepanel Cozy Coop bruger ifølge forhandleren My Pet Chicken omkring 200 W, lidt mindre end en typisk infrarød varmelampe på 250 W.</p>
<table>
<thead><tr><th>Varme i hønsehuset</th><th>Effekt</th><th>kWh i døgnet</th><th>Pris i døgnet</th><th>90 vinterdøgn</th></tr></thead>
<tbody>
<tr><td>Varmepanel, tændt halvdelen af døgnet</td><td>200 W</td><td>2,4</td><td>{{kr 2,4}}</td><td>{{kr 216}}</td></tr>
<tr><td>Varmelampe døgnet rundt</td><td>150 W</td><td>3,6</td><td>{{kr 3,6}}</td><td>{{kr 324}}</td></tr>
<tr><td>Varmelampe døgnet rundt</td><td>250 W</td><td>6</td><td>{{kr 6}}</td><td>{{kr 540}}</td></tr>
</tbody>
</table>
<p>En varmelampe døgnet rundt bruger altså mere end ti gange så meget som varmepladen og lyset tilsammen. Om varmen overhovedet er en god idé, er eksperterne ikke enige om. University of Minnesota Extension anbefaler ekstra varme, når temperaturen i hønsehuset kommer under 35 grader Fahrenheit, cirka 1,7 grader, og i så fald en lampe med beskyttelsesgitter, der ikke hænger i ledningen, og ingen forlængerledninger. University of New Hampshire Extension fraråder helt ekstra varme, fordi risikoen for brand i et hus med tørt strøelse er for stor. My Pet Chicken anbefaler heller ikke varmelamper af samme grund og skriver, at panelets overflade bliver 68-74 grader mod over 230 grader for en varmelampe.</p>

<h2>Bruger hønsehuset strøm i de dyre timer?</h2>
<p>Varmepladen bruger lige meget strøm i alle døgnets timer, også i spidstimerne om eftermiddagen og aftenen, hvor nettariffen er højest. Forbruget pr. time er så lille, at det næsten ingen forskel gør. Lyset ligger om morgenen før solopgang, typisk fra kl. 5 eller 6, hvor timeprisen ofte er lavere end om aftenen. Vil du forlænge dagen, er morgenen derfor både det bedste for hønsene og et fornuftigt tidspunkt for elregningen.</p>
<p>Det er kun varmelampen, der for alvor mærker forskel på billige og dyre timer, og den kan du ikke flytte: hvis hønsene har brug for varme, er det om natten og i de koldeste døgn. Det er også en grund til at overveje, om varmen er nødvendig. En flok på fem-seks høns, der sidder tæt på pinden i et tørt og trækfrit hus, holder hinanden varme.</p>

<h2>Sådan holder du vinterregningen nede</h2>
<ul>
<li><strong>Prioritér et tørt, trækfrit hus</strong> — det er ifølge Bolius vigtigere for hønsene end varme.</li>
<li><strong>Brug en varmeplade under vandet</strong> i stedet for en lampe; 15-22 W mod 150-250 W.</li>
<li><strong>Sæt pladen på ur eller frosttermostat</strong>, så den kun kører, når der er frost.</li>
<li><strong>Vælg LED til lyset</strong> og tænd det om morgenen, ikke om aftenen.</li>
<li><strong>Overvej vinterpausen</strong> — uden ekstra lys holder hønsene fri fra æglægningen og har det godt med det.</li>
<li><strong>Mål forbruget</strong> med en stikmåler, hvis du er i tvivl om, hvad pladen eller lampen trækker.</li>
</ul>
<p>Klækker du selv kyllinger, kan du se, hvad udrugningen og kyllingevarmen bruger, på siden om <a href="/rugemaskine/">rugemaskine</a>. Og står hønsehuset tæt på et drivhus, så sammenlign med prisen på at holde <a href="/drivhusvarme/">drivhuset frostfrit</a>: det er de samme frostnætter, der driver begge regninger.</p>`,
  faqs: [
    { question: "Hvad koster det at holde hønsenes vand frostfrit?", answer: "En varmeplade på 22 W bruger 0,53 kWh i døgnet, svarende til {{kr 0,53}} ved {{pris_kwh}}. På 90 vinterdøgn er det cirka 47 kWh eller {{kr 47,5}}." },
    { question: "Skal der varme i et hønsehus om vinteren?", answer: "Bolius skriver, at høns klarer kulde og hård frost fint, men at vandet ikke må fryse. University of New Hampshire Extension fraråder ekstra varme på grund af brandfaren, mens University of Minnesota Extension anbefaler det under cirka 1,7 grader." },
    { question: "Hvad bruger en varmelampe i hønsehuset?", answer: "En varmelampe på 250 W bruger 6 kWh i døgnet, svarende til {{kr 6}}. På en vinter på 90 døgn bliver det 540 kWh eller {{kr 540}}." },
    { question: "Hvor mange timers lys skal høns have for at lægge æg om vinteren?", answer: "University of Minnesota Extension nævner omkring 14 timer, University of New Hampshire Extension 14-16 timer. En LED-pære på 9 W i 7 timer bruger 0,063 kWh i døgnet." },
    { question: "Er det skadeligt, at hønsene holder pause med æglægningen om vinteren?", answer: "Nej. Bolius skriver, at en vinterpause gør hønsene godt. Uden ekstra lys sparer du både strømmen og hønsenes kræfter." },
  ],
  relatedSlugs: ["rugemaskine", "drivhusvarme", "led-paere", "terrarie"],
  sources: [
    { name: "Kerbl — varmeplade til drikketrug til fjerkræ", url: "https://www.kerbl.com/en/product/heating-plate-4809" },
    { name: "Kerbl — Heating Plate Superior 2.0", url: "https://www.kerbl.com/en/product/heating-plate-superior-2-0-1078130" },
    { name: "Kerbl — infrarød hårdglaslampe", url: "https://www.kerbl.com/en/product/kerbl-infrared-hard-glass-lamp-10067" },
    { name: "My Pet Chicken — Cozy Coop varmepanel", url: "https://www.mypetchicken.com/products/cozy-coop-heater" },
    { name: "University of Minnesota Extension — Caring for chickens in cold weather", url: "https://extension.umn.edu/agriculture/animals-and-livestock/poultry/caring-for-chickens-in-cold-weather" },
    { name: "University of New Hampshire Extension — How should I take care of backyard chickens in the winter", url: "https://extension.unh.edu/blog/2024/02/how-should-i-take-care-backyard-chickens-winter" },
    { name: "Bolius — Høns i haven", url: "https://www.bolius.dk/hoens-i-haven-15101" },
    { name: "Bolius — Hønsehus i haven: alt hvad du skal vide", url: "https://www.bolius.dk/hoensehus-i-haven-alt-hvad-du-skal-vide-29300" },
    { name: "Mattilsynet — Krav til uteområdet for høner", url: "https://mattilsynet.no/dyr/kjaeledyr/fugl-som-hobby/krav-til-uteomradet-for-honer" },
    { name: "DMI — Danmarks Klima 2024 (DMI Rapport 25-01)", url: "https://www.dmi.dk/fileadmin/Rapporter/2025/DMIRap25-01.pdf" },
  ],
  calculatorConfig: {
    title: "Beregn hønsehusets strømforbrug om vinteren",
    options: [
      { label: "Varmeplade 15 W under vandet", kwhPerUse: 0.36 },
      { label: "Varmeplade 22 W + LED-lys 9 W i 7 timer", kwhPerUse: 0.59 },
      { label: "Varmepanel 200 W halvdelen af døgnet + varmeplade 22 W", kwhPerUse: 2.93 },
      { label: "Varmelampe 150 W døgnet rundt", kwhPerUse: 3.6 },
      { label: "Varmelampe 250 W døgnet rundt", kwhPerUse: 6 },
    ],
    usageLabel: "Vinterdøgn med strøm i hønsehuset pr. år",
    usageUnit: "døgn/år",
    usageMin: 1,
    usageMax: 180,
    usageDefault: 90,
    usageStep: 1,
    per: "døgn",
    perYear: 1,
  },
  publishDate: "2026-12-22",
  updated: "2026-11-23",
};

export default hoensehus;
