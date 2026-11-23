import type { ApplianceData } from "@/lib/types";

/**
 * Krøllejern — intet EU-energimærke. Tal: Tescom NTIR1650 (kombineret krølle-/glattejern, 70 W ved 220-240 V,
 * slukker selv efter ca. 30 min. og kan forlænges 30 min.), Remington S5500/S5520 (38/56 W) som sammenligning.
 * kWh pr. gang = effekt × tid er en øvre grænse (termostaten), vores skøn.
 */
const kroellejern: ApplianceData = {
  slug: "kroellejern",
  meta: {
    category: "pleje",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: false,
    synonyms: ["krøllejern", "krøllestav", "curling iron", "curling wand", "krølletang", "bølgejern", "automatisk krøllejern", "kroellejern"],
  },
  name: "Krøllejern",
  article: "et",
  title: "Krøllejern strømforbrug (2026) → watt og pris pr. krølning",
  description:
    "Et krøllejern bruger typisk 30-80 W, så et kvarter koster få øre i strøm. Se Tescoms tal, forskellen på krøllestav og varmluft og hvornår jernet slukker selv.",
  heading: "Strømforbrug for et krøllejern: kWh og pris pr. gang",
  quickAnswer:
    "Et krøllejern eller en krøllestav har typisk en effekt på 30-80 W. Tescom oplyser 70 W for sit kombinerede krølle- og glattejern NTIR1650. Et kvarter på 70 W bruger højst 0,0175 kWh, svarende til {{oere 0,0175}}. Tre gange om ugen i et år bliver cirka 2,7 kWh, eller {{kr 2,7}}.",
  kwhRange: [0.3, 15],
  typicalKwh: 2.7,
  wattage: 70,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  content: `<h2>Et metalrør med et varmelegeme indeni</h2>
<p>Et krøllejern er i princippet et varmt metalrør — ofte med en keramisk eller titaniumbelagt overflade — som håret vikles om, til varmen har givet det form. Det kan have en klemme, der holder håret fast, eller være en ren stav, hvor du selv holder lokken. Uanset typen sidder der et lille varmelegeme inde i røret og en termostat, der holder temperaturen på det trin, du har valgt. Fordi røret er lille og ikke skal varme en luftstrøm op, er effekten beskeden: typisk 30-80 W.</p>
<p>Den japanske producent Tescom oplyser i manualen til NTIR1650, et kombineret jern, der kan både krølle og glatte, en effekt på 70 W ved 220-240 volt. Til sammenligning har Remingtons glattejern S5500 og S5520 38 og 56 W. Effekten er altså på niveau med en almindelig pære fra før LED — og langt fra de 1.200-2.200 W, en hårtørrer bruger.</p>

<h2>Hvad koster en krølning?</h2>
<p>Strømmen pr. gang er effekten gange den tid, jernet er tændt. Det gælder mens jernet varmer op; bagefter slår termostaten varmen til og fra, og forbruget bliver lavere. Tallene her er derfor et loft.</p>
<table>
<thead><tr><th>Krøllejern og tid</th><th>kWh pr. gang (højst)</th><th>Pris pr. gang</th><th>3 gange om ugen i et år</th></tr></thead>
<tbody>
<tr><td>Krøllestav på ca. 40 W, 15 min (vores skøn)</td><td>0,01</td><td>{{oere 0,01}}</td><td>{{kr 1,6}}</td></tr>
<tr><td>Krøllejern på 70 W (Tescom NTIR1650), 15 min</td><td>0,0175</td><td>{{oere 0,0175}}</td><td>{{kr 2,7}}</td></tr>
<tr><td>Krøllejern på 70 W, 30 min til sikkerhedsslukningen</td><td>0,035</td><td>{{oere 0,035}}</td><td>{{kr 5,5}}</td></tr>
</tbody>
</table>
<p>Langt hår tager længere tid at krølle end kort, fordi der er flere lokker, men forskellen i strøm er stadig få watt-timer. Over et helt år med krøller tre gange om ugen bruger et krøllejern på 70 W under 3 kWh — omtrent det samme, som et køleskab bruger på en uge.</p>

<h2>Krøllejern, krøllestav og varmluft</h2>
<p>Der findes tre slags værktøj til krøller, og de bruger strøm på hver sin måde:</p>
<ul>
<li><strong>Krøllejern med klemme</strong> — et varmt rør med en fjederklemme. Lille varmelegeme, få titals watt.</li>
<li><strong>Krøllestav uden klemme</strong> — samme princip, ofte konisk. Effekten ligger i samme område som krøllejernet.</li>
<li><strong>Varmluftsbørste og luftstyler</strong> — blæser varm luft gennem en børste eller rundt om en stav. Den skal varme en luftstrøm op hele tiden og ligner derfor en <a href="/haartoerrere/">hårtørrer</a> mere end et krøllejern, både i watt og i kWh.</li>
</ul>
<p>Har du både et krøllejern og en luftstyler, er det altså luftstyleren, der bestemmer forbruget. Et krøllejern på 70 W i et kvarter bruger det samme som en hårtørrer på 1.800 W i cirka et halvt minut.</p>

<h2>Opvarmning og ventetid</h2>
<p>Krøllejern bruger mest strøm i de første minutter, hvor røret skal op på 150-200 grader eller mere. Det samme gælder for et <a href="/glattejern/">glattejern</a>. Bagefter skal jernet kun erstatte den varme, der forsvinder til luften og til håret. Lader du jernet ligge tændt, mens du lægger make-up eller finder tøj frem, bruger det strøm til at holde sig varmt uden at blive brugt. Det er ikke mange watt-timer, men det er den eneste del af forbruget, du kan gøre noget ved.</p>
<p>Temperaturen påvirker også forbruget lidt. Et rør på 210 grader taber mere varme end et på 170 grader, og termostaten holder varmen tændt længere. Forskellen i kroner er lille, så vælg temperaturen efter håret: fint hår krøller ved lavere varme end tykt.</p>

<h2>Når jernet slukker af sig selv</h2>
<p>Tescom skriver i manualen til NTIR1650, at jernet slukker automatisk cirka 30 minutter efter, at det er tændt. Ti sekunder før blinker temperaturlyset, og jernet giver en lyd, og trykker du på knappen, kører det 30 minutter mere. Det er en sikkerhedsfunktion, men den sætter også et loft over forbruget, hvis jernet bliver glemt: højst 0,035 kWh, svarende til {{oere 0,035}}. Remington oplyser cirka en time for sine glattejern. Har du et ældre krøllejern uden automatisk slukning, og glemmer du det en hel dag, bliver det til en halv kWh eller mere — og et varmt jern på et badeværelse er først og fremmest en brandrisiko.</p>
<p>Lad altid jernet køle af på en varmefast flade, og tag stikket ud, når du er færdig. Så bruger det heller ikke strøm i ventetilstand.</p>

<h2>Hvornår bruges krøllejernet?</h2>
<p>Krøllejernet bruges, når du skal ud — om morgenen eller før en aften i byen — og forbruget kan ikke flyttes til billigere timer. Det er heller ikke nødvendigt: en krølning koster nogle få øre, og forskellen mellem en billig og en dyr time er endnu mindre. Oversigten over dagens timepriser længere oppe på siden er mere nyttig for vaskemaskinen og opvaskeren, hvor en kWh pr. gang kan flyttes til natten.</p>

<h2>Sådan holder du forbruget nede</h2>
<ol>
<li><strong>Tænd jernet, når du er klar</strong> — det er varmt på kort tid.</li>
<li><strong>Brug den laveste temperatur, der giver krøller</strong> i dit hår.</li>
<li><strong>Krøl tørt hår</strong> — vand skal fordampe og køler røret.</li>
<li><strong>Vælg et jern med automatisk slukning</strong>, hvis dit nuværende ikke har det.</li>
<li><strong>Brug krøllejernet frem for varmluft</strong>, hvis begge giver det resultat, du vil have.</li>
<li><strong>Tag stikket ud</strong>, når jernet har kølet af.</li>
</ol>
<p>Brug beregneren øverst på siden til at se, hvad dit eget forbrug koster ved månedens elpris. Et krøllejern er en af de allermindste poster på elregningen — badeværelsets store forbrug er det varme vand og hårtørreren.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger et krøllejern?",
      answer:
        "Typisk 30-80 W. Tescom oplyser 70 W for sit kombinerede krølle- og glattejern NTIR1650 ved 220-240 V. Effekten gælder under opvarmningen; bagefter skruer termostaten ned.",
    },
    {
      question: "Hvad koster det at krølle håret?",
      answer:
        "Et kvarter med et krøllejern på 70 W bruger højst 0,0175 kWh, svarende til {{oere 0,0175}}. Tre gange om ugen i et år bliver cirka 2,7 kWh, eller {{kr 2,7}}.",
    },
    {
      question: "Bruger en luftstyler mere strøm end et krøllejern?",
      answer:
        "Ja. En luftstyler eller varmluftsbørste blæser varm luft og ligner en hårtørrer i forbrug. Et krøllejern varmer kun et lille rør og bruger få titals watt.",
    },
    {
      question: "Slukker et krøllejern af sig selv?",
      answer:
        "Mange nye gør. Tescom NTIR1650 slukker efter cirka 30 minutter og kan forlænges med 30 minutter mere. Glemmer du det, bruger det højst 0,035 kWh, svarende til {{oere 0,035}}.",
    },
  ],
  relatedSlugs: ["glattejern", "haartoerrere", "barbermaskine", "el-tandboerste"],
  sources: [
    { name: "Tescom — manual til NTIR1650 (70 W ved 220-240 V, automatisk slukning efter ca. 30 min.)", url: "https://www.tescom-japan.co.jp/cms/wp-content/uploads/2019/07/NTIR1650_En.pdf" },
    { name: "Remington — manual til glattejern S5500 og S5520 (38 W og 56 W)", url: "https://www.remingtonlatam.com/wp-content/uploads/manuals/Manual-ESP-Remington-S5520.pdf" },
  ],
  calculatorConfig: {
    title: "Beregn krøllejernets strømforbrug",
    options: [
      { label: "Krøllestav på ca. 40 W, 15 min (vores skøn)", kwhPerUse: 0.01 },
      { label: "Krøllejern på 70 W (fx Tescom NTIR1650), 15 min", kwhPerUse: 0.0175 },
      { label: "Krøllejern på 70 W, 30 min til sikkerhedsslukningen", kwhPerUse: 0.035 },
    ],
    usageLabel: "Gange pr. uge",
    usageUnit: "gange/uge",
    usageMin: 1,
    usageMax: 14,
    usageDefault: 3,
    usageStep: 1,
    per: "gang",
    perYear: 52,
  },
  publishDate: "2026-12-18",
  updated: "2026-11-23",
};

export default kroellejern;
