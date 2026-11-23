import type { ApplianceData } from "@/lib/types";

/**
 * Solarie (hjemmesolarie og ansigtssolarie) — intet EU-energimærke. Tal: Philips HB 853/863 (hjemmesolarie med
 * HPA 400 Cleo-højtrykslamper, slukker selv efter 30 min., højst 26 timer pr. år pr. kropsside, lamperne skal køle
 * ca. 3 min., 13 eller 16 A sikring), Lamptech (HPA 400 er en 400 W-metalhalogenlampe), Lov om solarier § 1 og § 5
 * (offentligt tilgængelige solarier, 0,3 W/m²), Kræftens Bekæmpelse (fraråder kosmetisk brug).
 * Antal lamper (fire i helkropssolariet, én i ansigtssolariet) og effekten i alt er vores skøn.
 */
const solarie: ApplianceData = {
  slug: "solarie",
  meta: {
    category: "pleje",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: false,
    synonyms: ["solarie", "solarium", "hjemmesolarie", "ansigtssolarie", "ansigtssolarium", "solcenter", "sollampe", "højsol", "uv-lampe"],
  },
  name: "Solarie",
  article: "et",
  title: "Solarie strømforbrug (2026) → hjemmesolarie og ansigtssol",
  description:
    "Et hjemmesolarie med højtrykslamper bruger omkring 0,5 kWh på 20 minutter. Se watt pr. lampe, kWh pr. session og år, og hvad Kræftens Bekæmpelse siger.",
  heading: "Strømforbrug for et solarie: kWh og pris pr. session",
  quickAnswer:
    "Et hjemmesolarie med højtrykslamper bruger omkring 400 W pr. lampe. Med fire lamper er det cirka 1,6 kW, og en session på 20 minutter bruger efter vores skøn 0,53 kWh, svarende til {{kr 0,53}}. Et ansigtssolarie med én lampe bruger cirka 0,1 kWh på et kvarter. Kræftens Bekæmpelse fraråder al kosmetisk brug af solarium.",
  kwhRange: [1, 60],
  typicalKwh: 16,
  wattage: 1600,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.4, 1.4, 1.3, 1.1, 0.9, 0.6, 0.5, 0.5, 0.8, 1.0, 1.2, 1.3],
  content: `<h2>Lamper, der laver uv-lys — og en del varme</h2>
<p>Et solarie består af en række lamper eller lysrør, der udsender ultraviolet lys, mest uv-a og lidt uv-b, plus reflektorer, filtre og ventilatorer til at køle lamperne. Hjemmesolarier og ansigtssolarier bruger ofte højtrykslamper, hvor en lille lampe giver meget lys. Philips' hjemmesolarie HB 853/863 bruger for eksempel lamper af typen HPA 400 Cleo, og det britiske lampearkiv Lamptech beskriver HPA 400 som en solarielampe bygget på en almindelig 400 W metalhalogenlampe.</p>
<p>Strømforbruget følger derfor antallet af lamper. En lampe på 400 W bruger 0,4 kWh i timen, og ventilatorerne bruger lidt oveni. Et helkropssolarie til hjemmet har flere lamper fordelt over kroppen, mens et ansigtssolarie typisk har én. Vi har ikke fundet producentens samlede effekt for HB 853, så vores regneeksempel bruger fire lamper á 400 W, cirka 1,6 kW, til et helkropssolarie.</p>

<h2>Strøm og pris pr. session</h2>
<table>
<thead><tr><th>Solarie og sessionslængde (vores skøn)</th><th>Effekt</th><th>kWh pr. session</th><th>Pris pr. session</th></tr></thead>
<tbody>
<tr><td>Ansigtssolarie, én lampe, 15 min</td><td>ca. 400 W</td><td>0,1</td><td>{{kr 0,1}}</td></tr>
<tr><td>Helkropssolarie, fire lamper, 20 min</td><td>ca. 1,6 kW</td><td>0,53</td><td>{{kr 0,53}}</td></tr>
<tr><td>Helkropssolarie, 30 min til sikkerhedsslukningen</td><td>ca. 1,6 kW</td><td>0,8</td><td>{{kr 0,8}}</td></tr>
</tbody>
</table>
<p>En session i et hjemmesolarie bruger altså omtrent det samme som at koge vand i en elkedel fem-seks gange. Det er ikke det, der gør et solarie dyrt — prisen på selve solariet og på nye lamper er langt større end strømmen.</p>

<h2>Hvor mange sessioner om året?</h2>
<p>Philips skriver i manualen til HB 853/863, at solariet højst må bruges 26 timer om året, det vil sige 1.560 minutter, for hver side af kroppen. Producentens eksempel er et forløb på ti dage med en første session på 10 minutter og ni sessioner på 25 minutter, og ifølge manualen kan man have seks sådanne forløb om året. Det er producentens anvisning for netop det solarie og ikke en anbefaling fra os; Kræftens Bekæmpelse fraråder, som nævnt nedenfor, al kosmetisk brug.</p>
<table>
<thead><tr><th>Brug af helkropssolariet (ca. 1,6 kW)</th><th>kWh om året</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>30 sessioner á 20 min</td><td>ca. 16</td><td>{{kr 16}}</td></tr>
<tr><td>Producentens loft: 26 timer om året</td><td>ca. 42</td><td>{{kr 42}}</td></tr>
</tbody>
</table>
<p>Selv ved producentens maksimum bruger et hjemmesolarie under 50 kWh om året. Det er mindre end en fryser, men solariet bruger det på få timer i stedet for jævnt over året. Et ansigtssolarie med én lampe ligger på en fjerdedel eller mindre.</p>

<h2>Sikkerhedsslukning og afkøling</h2>
<p>Ifølge manualen slukker HB 853/863 automatisk efter 30 minutter, så solariet ikke bliver ved, hvis man falder i søvn. Det sætter et loft over forbruget pr. gang. Manualen nævner også, at lamperne skal køle af i cirka tre minutter, før de kan tænde igen, og at solariet slukker, hvis ventilationen er blokeret — for eksempel af et håndklæde over en åbning. Overophedning er altså noget, solariet selv beskytter sig mod, men det kræver frit luftflow omkring lamperne.</p>
<p>Et helkropssolarie trækker en del strøm, mens det kører. Philips skriver, at det skal sidde på en almindelig sikring på 13 eller 16 ampere, og at en for lang forlængerledning kan give problemer. Sæt det helst direkte i en stikkontakt, og lad være med at køre det samtidig med andre store apparater på samme gruppe.</p>

<h2>Hvad siger loven og Kræftens Bekæmpelse?</h2>
<p>Lov om solarier gælder for offentligt tilgængelige solarier, der stilles til rådighed til kosmetisk brug — altså solcentre, ikke det solarie, du har derhjemme. Loven siger blandt andet, at den effektive udstråling ikke må overstige 0,3 W pr. m², vægtet efter, hvor meget lyset giver rødme i huden, og at solariet skal være mærket med sin uv-type. Har du et hjemmesolarie, gælder kravet altså ikke direkte, men tallet er en nyttig målestok, når du læser producentens oplysninger.</p>
<p>Kræftens Bekæmpelse fraråder al kosmetisk brug af solarium, fordi uv-strålingen øger risikoen for kræft i huden og for tidlig ældning af huden. Vælger man alligevel at bruge et solarie, anbefaler Kræftens Bekæmpelse altid at bruge beskyttelsesbriller. Følg altid leverandørens anvisning for dit solarie.</p>

<h2>Hvornår på døgnet bruges solariet?</h2>
<p>Et solarie bruges, når du har tid, og en session kan i princippet lægges i en billig time. Forskellen mellem en dyr og en billig time er dog få øre pr. session, fordi forbruget er en halv kWh. Det er vigtigere at holde sessionerne korte og få end at vælge tidspunktet. Oversigten over dagens timepriser højere oppe viser, hvornår strømmen er dyrest, typisk mellem kl. 17 og 21.</p>
<p>Til sammenligning bruger en <a href="/infraroed-sauna/">infrarød sauna</a> og en almindelig <a href="/sauna/">sauna</a> meget mere strøm pr. gang, fordi de skal varme et helt rum op. En <a href="/massagestol/">massagestol</a> bruger langt mindre.</p>

<h2>Sådan holder du forbruget nede</h2>
<ol>
<li><strong>Hold sessionerne korte</strong> og følg producentens skema — det er både strøm og hud, der tæller.</li>
<li><strong>Brug kun de lamper, du har brug for</strong> — Philips HB 853/863 har for eksempel en kontakt til hver lampesektion.</li>
<li><strong>Hold ventilationen fri</strong>, så solariet ikke slukker på overophedning og skal startes igen.</li>
<li><strong>Skift lamperne efter producentens anvisning</strong> — slidte lamper giver mindre lys for den samme strøm.</li>
<li><strong>Tag stikket ud</strong>, når solariet ikke bruges, og pak det væk.</li>
</ol>
<p>Brug beregneren øverst på siden til at se, hvad dine egne sessioner koster ved månedens elpris. Tallene er vores skøn ud fra lampernes effekt; tjek typeskiltet på dit eget solarie for den præcise effekt.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger et hjemmesolarie?",
      answer:
        "Højtrykslamper til solarier bruger omkring 400 W stykket. Med fire lamper er det cirka 1,6 kW, og 20 minutter bruger efter vores skøn 0,53 kWh, svarende til {{kr 0,53}}.",
    },
    {
      question: "Hvad koster et ansigtssolarie i strøm?",
      answer:
        "Et ansigtssolarie med én lampe på 400 W bruger cirka 0,1 kWh på et kvarter, svarende til {{kr 0,1}}. Det er vores skøn; tjek typeskiltet for din model.",
    },
    {
      question: "Hvor meget bruger et solarie om året?",
      answer:
        "Med 30 sessioner á 20 minutter i et helkropssolarie på 1,6 kW er det cirka 16 kWh, svarende til {{kr 16}}. Philips angiver for HB 853/863 højst 26 timers brug om året, som efter vores skøn er cirka 42 kWh.",
    },
    {
      question: "Gælder solarieloven for et hjemmesolarie?",
      answer:
        "Nej. Lov om solarier gælder for offentligt tilgængelige solarier til kosmetisk brug. Den kræver blandt andet, at den effektive udstråling højst er 0,3 W pr. m².",
    },
    {
      question: "Er det sundt at bruge solarie?",
      answer:
        "Kræftens Bekæmpelse fraråder al kosmetisk brug af solarium, fordi uv-strålingen øger risikoen for kræft i huden. Bruger man det alligevel, anbefaler de beskyttelsesbriller. Følg altid leverandørens anvisning.",
    },
  ],
  relatedSlugs: ["infraroed-sauna", "sauna", "massagestol", "haartoerrere", "spabad"],
  sources: [
    { name: "Philips — brugsanvisning til hjemmesolarie HB 853/863 (HPA 400 Cleo, 30 min. slukning, højst 26 timer om året)", url: "https://www.documents.philips.com/assets/20201021/de87ca5c8a8845dfaedeac5b0002961b.pdf" },
    { name: "Lamptech — Philips Cleo HPA 400S (solarielampe bygget på en 400 W metalhalogenlampe)", url: "https://lamptech.co.uk/Spec%20Sheets/D%20MHS%20Philips%20HPA400S.htm" },
    { name: "Lov om solarier (lov nr. 718 af 2014), § 1 og § 5", url: "https://www.retsinformation.dk/eli/lta/2014/718" },
    { name: "Kræftens Bekæmpelse — faktaark om solarium", url: "https://mediebibliotek.cancer.dk/m/9678704f06672bc/original/solarium.pdf" },
  ],
  calculatorConfig: {
    title: "Beregn solariets strømforbrug",
    options: [
      { label: "Ansigtssolarie, én lampe på ca. 400 W, 15 min (vores skøn)", kwhPerUse: 0.1 },
      { label: "Helkropssolarie, ca. 1,6 kW, 20 min (vores skøn)", kwhPerUse: 0.53 },
      { label: "Helkropssolarie, ca. 1,6 kW, 30 min (vores skøn)", kwhPerUse: 0.8 },
    ],
    usageLabel: "Sessioner pr. år",
    usageUnit: "sessioner/år",
    usageMin: 1,
    usageMax: 100,
    usageDefault: 30,
    usageStep: 1,
    per: "session",
    perYear: 1,
  },
  publishDate: "2026-12-20",
  updated: "2026-11-23",
};

export default solarie;
