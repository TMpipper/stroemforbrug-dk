import type { ApplianceData } from "@/lib/types";

/**
 * El-tandbørste — intet EU-energimærke. Tal: Bolius (el-tandbørste, der står på lader hele tiden: 1,2 Wh i timen,
 * 11 kWh om året; fuld opladning 8-15 timer), Tænk (måler opladning + laderen uden tandbørste, antager to gange
 * dagligt og laderen altid i stikket), Philips' eco passport for tandbørster (IEC 62301, 2 × 2 min om dagen,
 * 17 opladninger om året), Philips ProtectiveClean 5100 (14 dages brug pr. opladning, Li-ion).
 * Energi pr. opladning (ca. 15 Wh) er vores skøn ud fra Bolius' 1,2 W × 12 timer.
 */
const elTandboerste: ApplianceData = {
  slug: "el-tandboerste",
  meta: {
    category: "pleje",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: true,
    motif: "batteri",
    synonyms: ["el-tandbørste", "eltandbørste", "elektrisk tandbørste", "oral-b", "sonicare", "tandbørste oplader", "sonisk tandbørste", "eltandboerste"],
  },
  name: "El-tandbørste",
  article: "en",
  title: "El-tandbørste strømforbrug (2026) → oplader, kWh og pris",
  description:
    "En el-tandbørste, der står i laderen hele året, bruger ca. 11 kWh. Lades den kun efter behov, er det under 1 kWh. Se Bolius, Tænk og Philips om forbruget.",
  heading: "Strømforbrug for en el-tandbørste: kWh og pris",
  quickAnswer:
    "Bolius regner med, at en el-tandbørste, der står på laderen hele tiden, bruger 1,2 watt-timer i timen — cirka 11 kWh om året, svarende til {{kr 11}}. Lader du den kun op, når batteriet er ved at være tomt, og tager laderen ud bagefter, bliver det efter vores skøn under 0,5 kWh om året, eller {{kr 0,5}}.",
  kwhRange: [0.2, 25],
  typicalKwh: 11,
  wattage: 1.2,
  standbyWatts: 1.2,
  energyLabels: [],
  models: [],
  seasonalProfile: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  content: `<h2>Det er laderen, ikke børstningen, der bruger strømmen</h2>
<p>En elektrisk tandbørste har en lille motor og et batteri, der kun skal levere strøm i fire minutter om dagen. Selve børstningen er derfor et meget lille forbrug. Det, der gør forskellen, er laderen: mange el-tandbørster lades induktivt, altså uden metalkontakter, gennem en spole i laderen og en spole i håndtaget. Den slags lader taber energi, og mange står i stikkontakten døgnet rundt med tandbørsten på.</p>
<p>Bolius har regnet på netop den situation. En el-tandbørste, der står på laderen hele tiden, bruger ifølge Bolius 1,2 watt-timer i timen, og det giver et årsforbrug på 11 kWh. Det svarer til {{kr 11}} om året ved månedens elpris — ikke meget for én tandbørste, men en husstand med fire tandbørster i hver sin lader bruger lige så meget som en lille fryser på et par måneder.</p>

<h2>Forbruget side om side</h2>
<table>
<thead><tr><th>Sådan lades tandbørsten</th><th>kWh om året</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>Står på laderen hele året (Bolius: 1,2 Wh i timen)</td><td>ca. 11</td><td>{{kr 11}}</td></tr>
<tr><td>Lades hver 14. dag, laderen tages ud bagefter (vores skøn)</td><td>ca. 0,4</td><td>{{kr 0,4}}</td></tr>
<tr><td>Fire tandbørster, der alle står på laderen</td><td>ca. 44</td><td>{{kr 44}}</td></tr>
</tbody>
</table>
<p>Vores skøn for opladning efter behov bygger på Bolius' tal og på, hvor længe tandbørsten kører på en opladning. Bolius skriver, med henvisning til forbrugsguiden.dk, at en fuld opladning typisk tager 8-15 timer. Med 1,2 W i 12 timer bliver det omkring 15 watt-timer pr. opladning. Philips oplyser, at en ProtectiveClean 5100 kører 14 dage fra fuld til tom, og så er det cirka 26 opladninger om året — omkring 0,4 kWh.</p>

<h2>Hvordan måler producenterne og Tænk?</h2>
<p>Philips oplyser i sit eco passport for tandbørster, at energiforbruget er målt efter standarden IEC 62301 og bygger på to gange to minutters børstning om dagen i det almindelige program og 17 opladninger om året. Det er altså et regnestykke for en tandbørste, der lades efter behov — ikke for en, der står i laderen hele året.</p>
<p>Forbrugerrådet Tænk regner anderledes i sine test af el-tandbørster. Tænk måler strømforbruget, mens tandbørsten lader, og laderens forbrug, når den sidder i stikkontakten uden at lade. Ud fra de to tal beregner Tænk et årsforbrug for en tandbørste, der bruges to gange om dagen året rundt, med laderen altid i stikket. Den antagelse ligger tættere på, hvordan de fleste har deres tandbørste stående.</p>
<p>Forskellen mellem de to måder at regne på er hele pointen: tandbørsten selv bruger meget lidt, mens laderens forbrug døgnet rundt kan være det meste af året.</p>

<h2>Skal tandbørsten stå i laderen?</h2>
<p>Nyere el-tandbørster har lithium-ion-batterier, og Bolius skriver, at tandbørsten ikke behøver at stå på laderen hele tiden. Philips' ProtectiveClean 5100 kører to uger på en opladning, og mange andre modeller kan klare sig lige så længe. Der er ikke noget i vejen for at lade dem stå, men så bruger laderen strøm hele tiden.</p>
<p>Er du i tvivl om, hvad din model har det bedst med, så følg producentens anvisning — nogle ældre tandbørster har batterier, der ikke holder så længe. Står din tandbørste på laderen hele året, er Bolius' 11 kWh en realistisk regning for den. Vil du vide, hvad din egen lader bruger, kan du låne en elmåler og måle den med og uden tandbørste i et døgn.</p>

<h2>Hvornår skal tandbørsten lades?</h2>
<p>Opladningen er let at flytte, og det betyder ikke noget for tandbørsten, hvornår den lader. Sætter du den til opladning om aftenen og tager laderen ud om morgenen, ligger det meste af opladningen i nattetimerne, hvor strømmen ofte er billigst. I kroner er forskellen meget lille for én tandbørste — under en krone om året — men det er en god vane, der også gælder for <a href="/mobil-opladning/">mobilen</a>, <a href="/smartwatch/">smartwatchet</a> og <a href="/barbermaskine/">barbermaskinen</a>. Oversigten over dagens timepriser længere oppe viser de billige timer.</p>

<h2>Hvad bestemmer forbruget?</h2>
<ul>
<li><strong>Tiden i laderen</strong> — en lader, der sidder i stikket hele året, bruger strøm hele året.</li>
<li><strong>Batteriets størrelse og alder</strong> — et stort, nyt batteri skal lades sjældnere end et lille eller slidt.</li>
<li><strong>Laderens effektivitet</strong> — induktive ladere taber mere end en lader med kabel.</li>
<li><strong>Antal tandbørster</strong> — hver tandbørste har normalt sin egen lader.</li>
<li><strong>Ekstraudstyr</strong> — rejseetuier med indbygget lader, UV-rensere og ladeglas bruger også strøm.</li>
</ul>

<h2>Sådan bruger din el-tandbørste mindst muligt</h2>
<ol>
<li><strong>Lad den, når batteriet er ved at være tomt</strong>, i stedet for hver dag.</li>
<li><strong>Tag laderen ud af stikket</strong> mellem opladningerne — det er laderen, der bruger strømmen.</li>
<li><strong>Del en lader</strong>, hvis husstandens tandbørster passer på den samme.</li>
<li><strong>Lad om natten</strong>, hvis du alligevel lader.</li>
<li><strong>Tjek dine andre ladere</strong> — læs mere på siden om <a href="/standby/">standby</a>.</li>
</ol>
<p>En el-tandbørste er en lille post på elregningen. Men den er et godt eksempel på, at et apparat, der kun bruges i fire minutter om dagen, kan bruge strøm hele døgnet — og at det er laderen, ikke apparatet, du skal tage ud af stikket.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en el-tandbørste om året?",
      answer:
        "Bolius regner med cirka 11 kWh om året for en el-tandbørste, der står på laderen hele tiden, svarende til {{kr 11}}. Lader du kun efter behov og tager laderen ud, er det efter vores skøn under 0,5 kWh.",
    },
    {
      question: "Hvad koster det at oplade en el-tandbørste?",
      answer:
        "Efter vores skøn bruger en fuld opladning omkring 15 watt-timer, svarende til {{oere 0,015}}. Med en opladning hver 14. dag bliver det cirka 0,4 kWh om året, eller {{kr 0,4}}.",
    },
    {
      question: "Bruger laderen strøm, når tandbørsten er fuldt opladet?",
      answer:
        "Ja. Bolius regner med 1,2 watt-timer i timen for en tandbørste på laderen. Tænk måler også laderens forbrug, når den sidder i stikket uden at lade.",
    },
    {
      question: "Skal en el-tandbørste stå i laderen hele tiden?",
      answer:
        "Ifølge Bolius ikke. Nyere modeller med lithium-ion-batteri holder længe — Philips oplyser 14 dage for ProtectiveClean 5100. Følg producentens anvisning for din model.",
    },
    {
      question: "Hvor lang tid tager det at lade en el-tandbørste?",
      answer:
        "Bolius skriver med henvisning til forbrugsguiden.dk, at en fuld opladning typisk tager 8-15 timer. Det passer godt med en opladning om natten.",
    },
  ],
  relatedSlugs: ["barbermaskine", "mobil-opladning", "smartwatch", "traadloes-oplader", "glattejern"],
  sources: [
    { name: "Bolius — 5 ting, der ikke bruger ret meget strøm (el-tandbørste på lader: 1,2 Wh i timen, 11 kWh om året)", url: "https://www.bolius.dk/5-ting-der-ikke-bruger-ret-meget-stroem-98310" },
    { name: "Forbrugerrådet Tænk — test af elektriske tandbørster (sådan måles energiforbruget)", url: "https://taenk.dk/test/elektriske-tandboerster" },
    { name: "Philips — eco passport for tandbørster (IEC 62301, 2 × 2 min om dagen, 17 opladninger om året)", url: "https://www.documents.philips.com/assets/20201025/16562d2c3d894abab85aac5f00473707.pdf" },
    { name: "Philips — Sonicare ProtectiveClean 5100 (14 dages brug pr. opladning)", url: "https://www.philips.co.uk/c-p/HX6851_53/sonicare-protectiveclean-5100-sonic-electric-toothbrush" },
  ],
  calculatorConfig: {
    title: "Beregn el-tandbørstens strømforbrug",
    options: [
      { label: "Står på laderen hele året (Bolius: ca. 11 kWh)", kwhPerUse: 11 },
      { label: "Lades hver 14. dag, laderen tages ud (vores skøn: ca. 0,4 kWh)", kwhPerUse: 0.4 },
    ],
    usageLabel: "El-tandbørster i husstanden",
    usageUnit: "tandbørster",
    usageMin: 1,
    usageMax: 6,
    usageDefault: 1,
    usageStep: 1,
    per: "år",
    perYear: 1,
  },
  publishDate: "2026-12-19",
  updated: "2026-11-23",
};

export default elTandboerste;
