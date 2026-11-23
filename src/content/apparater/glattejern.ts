import type { ApplianceData } from "@/lib/types";

/**
 * Glattejern — intet EU-energimærke. Tal: Remington S5500 38 W og S5520 56 W (producentens manual, sikkerhedsslukning
 * efter ca. en time), Philips 5000-serien BHS510 (opvarmning 30 sek., slukker selv efter 30 min.).
 * kWh pr. gang = mærkeeffekt × tid er en øvre grænse: termostaten skruer ned, når pladerne er varme (vores skøn).
 */
const glattejern: ApplianceData = {
  slug: "glattejern",
  meta: {
    category: "pleje",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: false,
    synonyms: ["glattejern", "fladjern", "hair straightener", "glattejern med damp", "ghd", "keramisk glattejern", "glattebørste", "hårglatter"],
  },
  name: "Glattejern",
  article: "et",
  title: "Glattejern strømforbrug (2026) → watt, kWh og pris pr. gang",
  description:
    "Et glattejern har typisk 35-80 W og bruger omkring 0,01 kWh på et kvarter. Se Remingtons og Philips tal, prisen pr. gang og hvad sikkerhedsslukningen betyder.",
  heading: "Strømforbrug for et glattejern: kWh og pris pr. gang",
  quickAnswer:
    "Et glattejern har en lille varmelegeme-effekt på typisk 35-80 W. Remington oplyser 38 W for S5500 og 56 W for S5520. Et kvarter med et glattejern på 56 W bruger højst 0,014 kWh, svarende til {{oere 0,014}}. Bruger du det fem gange om ugen, bliver det cirka 3,6 kWh om året, eller {{kr 3,6}}.",
  kwhRange: [0.5, 20],
  typicalKwh: 3.6,
  wattage: 56,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  content: `<h2>Et lille varmelegeme, der skal holde en høj temperatur</h2>
<p>Et glattejern består af to plader af keramik, titanium eller metal med et varmelegeme bag hver plade. Pladerne skal op på 150-230 grader, før håret kan formes, men fordi de er små og tynde, kræver det ikke meget effekt. Hvor en hårtørrer skal varme en stor luftstrøm op hele tiden, skal glattejernet kun holde to små plader varme. Derfor ligger effekten på typeskiltet typisk mellem 35 og 80 W — en brøkdel af en hårtørrers 1.200-2.200 W.</p>
<p>Remington oplyser i manualen til sine glattejern 38 W for S5500 og 56 W for S5520. Begge kan nå 230 grader, når de sidder i en stikkontakt med 220-240 volt. Philips oplyser for sit glattejern i 5000-serien (BHS510), at det er klar efter 30 sekunder, og at det har 12 temperaturtrin fra 120 til 230 grader.</p>

<h2>Strøm og pris pr. gang</h2>
<p>Regnestykket er enkelt: effekten i watt gange tiden. Et glattejern på 56 W, der er tændt et kvarter, bruger 14 watt-timer, eller 0,014 kWh. Det er et loft, for når pladerne har nået den valgte temperatur, slår termostaten varmen fra og til, og så bruger jernet mindre end mærkeeffekten. Hvor meget mindre, afhænger af temperaturen og af, hvor tykt og vådt håret er.</p>
<table>
<thead><tr><th>Glattejern (effekt og tid)</th><th>kWh pr. gang (højst)</th><th>Pris pr. gang</th><th>5 gange om ugen i et år</th></tr></thead>
<tbody>
<tr><td>Remington S5500 (38 W), 15 min</td><td>0,0095</td><td>{{oere 0,0095}}</td><td>{{kr 2,5}}</td></tr>
<tr><td>Remington S5520 (56 W), 15 min</td><td>0,014</td><td>{{oere 0,014}}</td><td>{{kr 3,6}}</td></tr>
<tr><td>Bredt glattejern eller dampjern, ca. 80 W, 20 min (vores skøn)</td><td>0,027</td><td>{{oere 0,027}}</td><td>{{kr 7}}</td></tr>
</tbody>
</table>
<p>Selv med daglig brug og et kraftigt jern bliver årsforbruget under 10 kWh. Til sammenligning bruger en <a href="/haartoerrere/">hårtørrer</a> på 1.800 W omkring 0,3 kWh på ti minutter — mere end tyve gange så meget som et kvarter med glattejernet. Tørrer du håret med føntørrer først og glatter det bagefter, er det altså hårtørreren, der står for næsten hele strømmen.</p>

<h2>Opvarmningen er det, der koster</h2>
<p>De første minutter bruger glattejernet sin fulde effekt, fordi pladerne skal fra stuetemperatur til over 200 grader. Moderne jern er hurtige: Philips oplyser 30 sekunder for BHS510. Efter opvarmningen skal jernet kun dække varmetabet fra pladerne og den varme, håret trækker ud af dem. Det er derfor, vores tal i tabellen er en øvre grænse.</p>
<p>Det betyder også, at det ikke sparer noget at tænde jernet i god tid. Et glattejern, der ligger og venter i ti minutter, mens du gør dig klar, bruger strøm uden at gøre noget. Tænd det, når du er klar til at bruge det — det er varmt, inden du har redt håret igennem.</p>

<h2>Temperaturen betyder mere for håret end for elregningen</h2>
<p>Et glattejern, der står på 230 grader, taber lidt mere varme end et på 180 grader, og termostaten holder varmen tændt en større del af tiden. Forskellen i strøm er dog nogle få watt-timer. For de fleste er det vigtigere, at lavere varme er skånsom mod håret. Philips og Remington lader dig vælge temperaturen i trin, så du kan bruge den laveste, der virker på dit hår. Tykt og krøllet hår kræver typisk mere varme end fint hår, og vådt hår bør tørres først — både for hårets skyld og fordi vandet skal fordampe, hvilket trækker energi ud af pladerne.</p>
<p>Et glattejern med damp har en lille vandtank, og vandet skal varmes op og fordampe. Det tager ekstra energi, men tanken er lille, så forskellen pr. gang er stadig lille. Vi har ikke fundet producenttal for dampjernenes effekt og regner derfor med 80 W som vores skøn.</p>

<h2>Sikkerhedsslukningen er også en strømsparer</h2>
<p>Det klassiske spørgsmål med et glattejern er ikke, hvad det koster at bruge, men om man har husket at slukke det. Næsten alle nye glattejern slukker selv. Remington skriver i manualen, at S5500 og S5520 slukker efter cirka en time. Philips oplyser, at BHS510 slukker efter 30 minutter. Glemmer du et jern på 56 W, og det slukker efter en time, har det brugt 0,056 kWh, svarende til {{oere 0,056}}. Det er ikke pengene, men varmen, der er grunden til funktionen: pladerne er stadig over 200 grader, og jernet skal ligge på en varmefast overflade.</p>
<p>Et gammelt glattejern uden automatisk slukning kan derimod stå tændt hele dagen. Otte timer med et jern på 56 W er 0,45 kWh, og så er det langt fra brandrisikoen, der er den mindste bekymring. Har du et glattejern uden sikkerhedsslukning, er det værd at skifte det ud.</p>

<h2>Bruger et glattejern strøm, når det er slukket?</h2>
<p>Et slukket glattejern bruger næsten ingenting. Philips oplyser for BHS510 et forbrug i slukket tilstand på under 0,5 W, så længe stikket sidder i. Selv hvis stikket sad i hele året, ville det højst blive 4,4 kWh, svarende til {{kr 4,4}} — men i praksis tager de fleste stikket ud, når jernet er pakket væk, og så er forbruget nul. Hvis du vil være helt sikker, så tag stikket ud efter brug — det er alligevel det, producenterne anbefaler, når jernet skal køle af og pakkes væk. Læs mere om små apparater i stikkontakten på siden om <a href="/standby/">standby</a>.</p>

<h2>Hvornår på dagen bruges glattejernet?</h2>
<p>Glattejernet bruges, når du gør dig klar — om morgenen før arbejde eller om aftenen før byen. Det kan ikke flyttes til billigere timer, og det er heller ikke nødvendigt: forbruget pr. gang er så lille, at forskellen mellem en billig og en dyr time er et par øre. Oversigten over dagens timepriser højere oppe på siden viser, hvornår strømmen er dyrest, men for glattejernet er det mest af interesse som en sammenligning med de store apparater i hjemmet.</p>

<h2>Glattejern, krøllejern og hårtørrer side om side</h2>
<p>Glattejernet og <a href="/kroellejern/">krøllejernet</a> er bygget på samme måde: et lille varmelegeme, en termostat og en metaloverflade, der holder varmen. Begge bruger få titals watt. Hårtørreren og varmluftsbørsterne er en helt anden størrelse, fordi de varmer luft, der blæser forbi og forsvinder. Vil du holde forbruget nede i badeværelset, er det derfor hårtørringen og den varme bruser, du skal kigge på — ikke glattejernet. Læs mere om <a href="/haartoerrere/">hårtørrerens forbrug</a>.</p>

<h2>Sådan bruger dit glattejern mindst muligt</h2>
<ol>
<li><strong>Tænd det først, når du er klar</strong> — nye jern er varme på et halvt minut.</li>
<li><strong>Brug den laveste temperatur, der virker</strong> — det skåner håret og sparer lidt varme.</li>
<li><strong>Glat kun tørt hår</strong> — vand skal fordampe og trækker energi ud af pladerne.</li>
<li><strong>Vælg et jern med automatisk slukning</strong> — både for sikkerheden og for strømmen.</li>
<li><strong>Tag stikket ud efter brug</strong>, og lad jernet køle af på en varmefast overflade.</li>
</ol>
<p>Brug beregneren øverst på siden, hvis du vil se, hvad dit eget forbrug koster med månedens elpris. Uanset hvordan du regner, er et glattejern en af de mindste poster på elregningen.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger et glattejern?",
      answer:
        "Typisk 35-80 W. Remington oplyser 38 W for S5500 og 56 W for S5520. Effekten gælder, mens pladerne varmes op; når de er varme, skruer termostaten ned.",
    },
    {
      question: "Hvad koster det at bruge et glattejern?",
      answer:
        "Et kvarter med et glattejern på 56 W bruger højst 0,014 kWh, svarende til {{oere 0,014}}. Fem gange om ugen i et år bliver det cirka 3,6 kWh, eller {{kr 3,6}}.",
    },
    {
      question: "Bruger et glattejern mere strøm end en hårtørrer?",
      answer:
        "Nej, langt mindre. En hårtørrer på 1.800 W bruger omkring 0,3 kWh på ti minutter. Et glattejern på 56 W bruger 0,014 kWh på et kvarter.",
    },
    {
      question: "Hvad sker der, hvis jeg glemmer at slukke glattejernet?",
      answer:
        "De fleste nye jern slukker selv. Remington oplyser cirka en time for S5500 og S5520, Philips 30 minutter for BHS510. En time med 56 W koster {{oere 0,056}}, men pladerne er varme, så læg jernet på en varmefast overflade.",
    },
    {
      question: "Bruger et glattejern strøm, når det er slukket?",
      answer:
        "Næsten ingenting. Philips oplyser under 0,5 W i slukket tilstand for BHS510, så længe stikket sidder i. Tag stikket ud efter brug, så er forbruget nul.",
    },
  ],
  relatedSlugs: ["kroellejern", "haartoerrere", "barbermaskine", "el-tandboerste", "strygejern"],
  sources: [
    { name: "Remington — manual til S5500 og S5520 (38 W og 56 W, sikkerhedsslukning efter ca. en time)", url: "https://www.remingtonlatam.com/wp-content/uploads/manuals/Manual-ESP-Remington-S5520.pdf" },
    { name: "Philips — glattejern i 5000-serien BHS510 (opvarmning 30 sek., 120-230 °C, slukker efter 30 min., under 0,5 W slukket)", url: "https://www.philips.co.uk/c-p/BHS510_00/5000-series-straightener" },
  ],
  calculatorConfig: {
    title: "Beregn glattejernets strømforbrug",
    options: [
      { label: "Glattejern på ca. 40 W (fx Remington S5500: 38 W), 15 min", kwhPerUse: 0.0095 },
      { label: "Glattejern på ca. 55 W (fx Remington S5520: 56 W), 15 min", kwhPerUse: 0.014 },
      { label: "Bredt glattejern eller dampjern, ca. 80 W, 20 min (vores skøn)", kwhPerUse: 0.027 },
    ],
    usageLabel: "Gange pr. uge",
    usageUnit: "gange/uge",
    usageMin: 1,
    usageMax: 14,
    usageDefault: 5,
    usageStep: 1,
    per: "gang",
    perYear: 52,
  },
  publishDate: "2026-12-18",
  updated: "2026-11-23",
};

export default glattejern;
