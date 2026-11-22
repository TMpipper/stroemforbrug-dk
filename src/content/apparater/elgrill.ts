import type { ApplianceData } from "@/lib/types";

/**
 * Elgrill / bordgrill — Stiftung Warentest (april 2025): ni el-stand- og bordgrills på 1.700–3.000 W, forvarmet på højeste trin i
 * højst 20 min., forbruget midlet over to hele grillomgange (tallene bag betalingsmur). Weber: Lumin er klar til middel varme på
 * 3–5 min., til høj varme på 5–8 min. og når over 315 °C på ca. 15 min. Forbrug pr. grillaften er vores skøn: forvarmning ved
 * fuld effekt + grilltid med termostaten tændt ca. halvdelen af tiden. Raclette (1.200 W) og plancha (1.500 W) er skøn.
 * Beregneren: kWh pr. grillaften, antal grillaftener pr. år × 1. Intet EU-energimærke.
 */
const elgrill: ApplianceData = {
  slug: "elgrill",
  meta: {
    category: "koekken",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: false,
    motif: "ovn",
    synonyms: ["elgrill", "el-grill", "elektrisk grill", "bordgrill", "elektrisk bordgrill", "weber lumin", "weber q elektrisk", "plancha", "raclette", "teppanyaki", "altangrill", "terrassegrill"],
  },
  name: "Elgrill",
  title: "Elgrill og bordgrill strømforbrug (2026) → kWh pr. aften",
  description:
    "Se hvor meget strøm en elgrill eller bordgrill bruger pr. grillaften, hvad forvarmningen koster, og hvordan låget, vejret og grillens størrelse påvirker det.",
  heading: "Strømforbrug for en elgrill: kWh, pris pr. gang og dyreste timer",
  quickAnswer:
    "En elgrill på 2.000–2.200 W bruger efter vores skøn omkring 1 kWh på en almindelig grillaften med 10 minutters forvarmning og en halv times grill. Det koster cirka {{kr 1}} ved månedens elpris. En lille bordgrill bruger mindre, mens en stor grill med låget åbent i en time kan nå 1,5 kWh eller mere. Med 30 grillaftener om året bliver det omkring 30 kWh, eller {{kr 30}}.",
  kwhRange: [5, 150],
  typicalKwh: 30,
  wattage: 2200,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [0.3, 0.3, 0.4, 0.7, 1.2, 1.8, 2.1, 1.9, 1.2, 0.6, 0.5, 1.0],
  content: `<h2>Elgrillen: høj effekt i kort tid</h2>
<p>En elgrill har et varmelegeme under eller i selve grillristen og trækker typisk 1.700–3.000 W, når den varmer op. Det er de grænser, Stiftung Warentest satte for de ni el-stand- og bordgrills, de testede i 2025. Den høje effekt er nødvendig for at nå de 250–300 grader, der skal til for at give kødet stegeskorpe, og den gør elgrillen til et af de kraftigste apparater i køkkenet, når den kører fuldt. Men den kører kun fuldt i opvarmningen. Når risten er varm, slår termostaten til og fra, og det gennemsnitlige forbrug falder til omkring det halve.</p>
<p>Producenterne oplyser ikke forbruget pr. grillaften, og testenes måletal ligger bag betalingsmur. Vores skøn for en elgrill på 2.200 W med låg er derfor regnet sådan: 10 minutters forvarmning ved fuld effekt er omkring 0,37 kWh, og en halv times grill med elementet tændt halvdelen af tiden er omkring 0,55 kWh. I alt cirka 1 kWh, eller {{kr 1}} ved månedens elpris. Griller du 30 gange om året, bliver det omkring 30 kWh, eller {{kr 30}}.</p>

<h2>Forbrug pr. grillaften</h2>
<p>Alle tal i tabellen er vores skøn ud fra effekt og tid. De giver et realistisk niveau, men den enkelte grill kan ligge en del over eller under.</p>
<table>
<thead><tr><th>Grill og brug</th><th>Tid</th><th>kWh pr. gang</th><th>Pris pr. gang</th></tr></thead>
<tbody>
<tr><td>Lille bordgrill eller plancha, ca. 1.500 W</td><td>45 min.</td><td>0,7 kWh</td><td>{{kr 0,7}}</td></tr>
<tr><td>Elgrill med låg, 2.200 W, pølser og bøffer</td><td>10 + 30 min.</td><td>1,0 kWh</td><td>{{kr 1}}</td></tr>
<tr><td>Raclette- eller bordgrill til seks-otte personer, ca. 1.200 W</td><td>1½ time</td><td>1,1 kWh</td><td>{{kr 1,1}}</td></tr>
<tr><td>Stor elgrill, 2.200–3.000 W, låget meget åbent</td><td>1 time</td><td>1,6 kWh</td><td>{{kr 1,6}}</td></tr>
<tr><td>Kun forvarmning til høj varme, 2.200 W</td><td>10–15 min.</td><td>0,4–0,55 kWh</td><td>{{kr 0,4-0,55}}</td></tr>
</tbody>
</table>
<p>Den nederste række viser, hvor meget forvarmningen fylder. Weber oplyser, at deres elgrill Lumin er klar til middel varme på 3–5 minutter og til høj varme på 5–8 minutter, og at den når over 315 grader på cirka et kvarter. Kører du altid et kvarter på fuld effekt, før maden kommer på, er det op mod halvdelen af aftenens forbrug.</p>

<h2>Låget og vejret betyder mere end watt</h2>
<p>En elgrill står ofte udenfor på en terrasse eller en altan, og så afhænger forbruget af vejret. En kold aften med vind trækker varmen ud af risten, og termostaten må holde elementet tændt længere. Låget er det vigtigste værktøj: med låget lukket holder grillen på varmen som en lille ovn, og elementet slår oftere fra. Står låget åbent hele tiden, nærmer forbruget sig mærkeeffekten gange tiden – for en grill på 2.200 W altså over 2 kWh i timen.</p>
<p>Grillens størrelse spiller også ind. En stor rist til ti bøffer skal varmes op, selv om der kun ligger fire. Til to personer er en lille bordgrill eller en <a href="/sandwichgrill/">kontaktgrill</a> mere sparsom end en stor elgrill på terrassen.</p>

<h2>Elgrill mod ovn, pande og airfryer</h2>
<p>Inde i køkkenet er alternativet til elgrillen ovnens grillelement eller en grillpande. Øko-Test har målt, at en effektiv <a href="/ovn/">ovn</a> bruger omkring 1,15 kWh på den første time ved 200 grader, og ovnen skal også forvarmes, så til en grillaften er elgrillen og ovnen i samme størrelse. En grillpande på induktion er ofte mere sparsom, fordi varmen går direkte i panden, men den kan kun tage få stykker ad gangen. Til kyllingelår og grøntsager i mindre portioner er en <a href="/airfryer/">airfryer</a> et sparsomt alternativ.</p>
<p>Sammenlignet med en gasgrill afhænger regnestykket helt af prisen på gasflasken og elprisen den dag, du griller. Elgrillen har den fordel, at den kan bruges på mange altaner, hvor ejendommens regler forbyder gas og kul, og at den ikke skal have en flaske skiftet.</p>

<h2>Raclette, plancha og bordgrill til julefrokosten</h2>
<p>Bordgrills og raclettegrills kører længere end en elgrill, men med lavere effekt. En raclette til seks-otte personer står typisk tændt i halvanden til to timer, mens gæsterne selv steger. Det giver et forbrug omkring 1 kWh pr. aften efter vores skøn – i samme størrelse som en grillaften udenfor. Det er derfor, sæsonkurven for elgrill har en lille top i december.</p>

<h2>Hvornår på døgnet bruges elgrillen?</h2>
<p>Grillaftenen ligger der, hvor den ligger: ved aftensmaden, som er de timer, hvor elprisen typisk er højest. Det kan ikke flyttes ret meget, men det er værd at vide, at det er forvarmningen og et åbent låg, der koster. Om sommeren, hvor der griller mest, er prisen ofte lavere tidligt på aftenen end i vinterhalvåret, og har du <a href="/solceller/">solceller</a>, kan en tidlig grillaften bruge noget af dagens produktion. Boksen længere oppe på siden viser, hvilke timer der er dyrest i dag.</p>

<h2>Sådan holder du forbruget nede</h2>
<ol>
<li><strong>Forvarm kun så længe, som det kræves</strong> – 5–8 minutter rækker til høj varme på mange modeller.</li>
<li><strong>Grill med låget lukket</strong>, så termostaten kan slå elementet fra.</li>
<li><strong>Stil grillen i læ</strong> – vind trækker varmen ud af risten.</li>
<li><strong>Hav alt klar</strong>, før grillen tændes: marineret kød, grøntsager og tænger.</li>
<li><strong>Sluk efter den sidste bøf</strong> og brug eftervarmen til at brænde risten ren.</li>
<li><strong>Vælg en lille grill til få personer</strong> – en stor rist bruger strøm på pladser, der står tomme.</li>
</ol>
<p>Kødet kan også tilberedes færdigt i <a href="/sous-vide/">sous vide</a> og kun bruneres kort på grillen. Så står grillen tændt i få minutter i stedet for en halv time.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en elgrill?",
      answer:
        "En elgrill på 2.000–2.200 W bruger efter vores skøn omkring 1 kWh på en grillaften med 10 minutters forvarmning og en halv times grill. Det koster cirka {{kr 1}} ved månedens elpris.",
    },
    {
      question: "Hvor mange watt bruger en elgrill?",
      answer:
        "Typisk 1.700–3.000 W, som Stiftung Warentest fandt i sin test af ni el-stand- og bordgrills. Den fulde effekt bruges kun under opvarmningen; bagefter slår termostaten til og fra.",
    },
    {
      question: "Hvad koster det at forvarme en elgrill?",
      answer:
        "10–15 minutter på fuld effekt på en grill på 2.200 W er omkring 0,4–0,55 kWh, eller {{kr 0,4-0,55}}. Mange elgrills er klar til høj varme på 5–8 minutter, så lang forvarmning er spildt.",
    },
    {
      question: "Hvor meget strøm bruger en raclette eller bordgrill?",
      answer:
        "En raclette til seks-otte personer bruger efter vores skøn omkring 1 kWh på en aften på halvanden time, eller {{kr 1,1}} ved månedens elpris.",
    },
    {
      question: "Hvad bruger en elgrill om året?",
      answer:
        "Med 30 grillaftener om året og omkring 1 kWh pr. gang bliver det cirka 30 kWh, eller {{kr 30}} ved månedens elpris. Det meste falder i juni–august.",
    },
  ],
  relatedSlugs: ["sandwichgrill", "ovn", "airfryer", "sous-vide", "terrassevarmer"],
  sources: [
    { name: "Stiftung Warentest — Elektrogrills im Test (april 2025, ni grills på 1.700–3.000 W)", url: "https://www.test.de/news/Elektrogrills-im-Test-der-Stiftung-Warentest-E-Grills-halten-mit-Gas-und-Kohle-mit-zumindest-beim-Preis-6299740-0/" },
    { name: "Øko-Test — Stromverbrauch: Wie viel kosten Kaffeekochen, Pizzabacken & Co (ovn ved 200 °C)", url: "https://www.oekotest.de/freizeit-technik/Stromverbrauch-Wie-viel-Cent-kosten-eigentlich-Kaffeekochen-Pizzabacken-Co-_11247_1.html" },
    { name: "Weber — Lumin Compact Electric Grill (opvarmningstider og temperatur)", url: "https://weber.com/IE/en/electric-barbecues/lumin/lumin-compact-electric-grill" },
  ],
  calculatorConfig: {
    title: "Elgrill forbrugsberegner",
    options: [
      { label: "Lille bordgrill eller plancha, 45 min.", kwhPerUse: 0.7 },
      { label: "Elgrill med låg, 10 min. forvarmning + 30 min.", kwhPerUse: 1.0 },
      { label: "Raclette til seks-otte personer, 1½ time", kwhPerUse: 1.1 },
      { label: "Stor elgrill, 1 time med låget åbent", kwhPerUse: 1.6 },
    ],
    usageLabel: "Antal grillaftener pr. år",
    usageUnit: "pr. år",
    usageMin: 1,
    usageMax: 100,
    usageDefault: 30,
    usageStep: 1,
    per: "grillaften",
    perYear: 1,
  },
  publishDate: "2026-12-01",
  updated: "2026-11-22",
};

export default elgrill;
