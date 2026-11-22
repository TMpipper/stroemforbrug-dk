import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/refrigeratingappliances2019/${reg}`;
const sheet = (m: string) => `https://media3.bsh-group.com/Documents/specsheet/da-DK/${m}.pdf`;

const boschKsv36: ModelData = {
  slug: "bosch-ksv36",
  parent: "koeleskab",
  brand: "Bosch",
  name: "Bosch KSV36 køleskab",
  released: "2023-05",
  synonyms: [
    "bosch ksv36",
    "bosch ksv36vldp",
    "bosch ksv36fwdp",
    "bosch ksv36aidp",
    "bosch ksv36vwep",
    "bosch køleskab uden fryser",
    "bosch serie 4 køleskab",
    "bosch 186 cm køleskab",
  ],
  title: "Bosch KSV36 køleskab strømforbrug (2026) → kWh og pris",
  description:
    "Bosch KSV36 køleskab på 346 liter i Serie 4 og 6: energimærkets kWh om året i klasse D og E, pris om året og døgnet, og forbruget med en fryser ved siden af.",
  intro:
    "Alle KSV36-udgaver er det samme 186 cm høje skab på 346 liter; energimærket deler dem i to: 93 kWh om året i klasse D og 116 kWh i klasse E.",
  content: `<h2>Hvor meget strøm bruger Bosch KSV36?</h2>
<p>Bosch KSV36 er et fritstående køleskab uden fryser på 346 liter, 186 cm højt og 60 cm bredt. Det findes i flere udgaver i Serie 4 og Serie 6 ifølge Bosch' danske datablade, og hver udgave har sit eget energimærke i EU's produktdatabase EPREL. KSV36VLDP med front i rustfrit stål-look, KSV36FWDP i hvid og KSV36AIDP i børstet stål (Serie 6) har energiklasse D og bruger 93 kWh om året. Den ældre hvide KSV36VWEP fra 2020 har energiklasse E og bruger 116 kWh.</p>
<p>93 kWh om året er omkring 0,25 kWh i døgnet, svarende til {{kr 93}} om året ved månedens elpris. E-udgaven bruger 23 kWh mere, svarende til {{kr 23}} om året.</p>
<table>
<thead><tr><th>Model</th><th>Serie</th><th>Front</th><th>Klasse</th><th>kWh om året</th></tr></thead>
<tbody>
<tr><td>KSV36VLDP</td><td>Serie 4</td><td>Rustfrit stål-look</td><td>D</td><td>93</td></tr>
<tr><td>KSV36FWDP</td><td>Serie 4</td><td>Hvid</td><td>D</td><td>93</td></tr>
<tr><td>KSV36AIDP</td><td>Serie 6</td><td>Børstet stål</td><td>D</td><td>93</td></tr>
<tr><td>KSV36VWEP (2020)</td><td>Serie 4</td><td>Hvid</td><td>E</td><td>116</td></tr>
</tbody>
</table>

<h2>Serie 4 eller Serie 6 betyder ikke noget for strømmen</h2>
<p>KSV36AIDP i Serie 6 har samme energimærke som de to Serie 4-udgaver med klasse D: 93 kWh om året, samme energieffektivitetsindeks på 80 og samme 39 dB. Ifølge databladene er det udstyret, der skiller dem ad, fx display og antallet af justerbare hylder, ikke kølingen. Det sidste bogstav i modelnummeret er den hurtigste vej til at se energiklassen: D-udgaverne ender på DP, E-udgaven på EP.</p>
<p>Står du med en KSV36VWEP fra 2020, er der omkring 23 kWh om året at hente ved at skifte til en D-udgave. Det tjener sjældent et nyt køleskab hjem alene; skift, når det gamle alligevel skal ud.</p>

<h2>Stort skab, lavt forbrug pr. liter</h2>
<p>Et køleskab uden fryser er billigt i drift, fordi det kun skal holde 4 °C. KSV36 bruger omkring 27 kWh pr. 100 liter om året. <a href="/koeleskab/gram-ks-771254/">Gram KS 771754</a> er 38 liter mindre og bruger 111 kWh om året i klasse E — 18 kWh mere end KSV36-udgaverne med klasse D. Et kombiskab som <a href="/koeleskab/bosch-kge36/">Bosch KGE36</a> bruger 149 kWh om året, men har fryser med i de 308 liter.</p>
<p>Skal du også fryse, skal begge apparater regnes med. Bosch sælger et sidemonteringssæt til KSV36, så det kan stå side om side med et fryseskab. Med <a href="/fryser/bosch-gsn58/">Bosch GSN58AWCP</a> på 366 liter og 178 kWh om året bliver de to tilsammen omkring 271 kWh om året for over 700 liter køl og frost, svarende til {{kr 271}}.</p>

<h2>Hvad energimærket forudsætter</h2>
<p>Energimærkets tal er målt med lukket dør og termostaten på standard, ved 25 °C i rummet. I et køkken på 20–22 °C bruger skabet typisk lidt mindre, i et varmt bryggers mere. Bosch har oplyst klimaklasserne SN og T til EPREL, altså rum mellem 10 og 43 °C. Skabet afrimer automatisk, men tjek, at afløbet bag på væggen ikke stopper til.</p>
<p>Termostaten betyder noget. 4–5 °C er nok til mælk, kød og rester; et termometer på midterhylden viser, om skabet holder det. Hver grad koldere får kompressoren til at arbejde mere.</p>

<h2>Hvornår er det billigst?</h2>
<p>Et køleskab kører hele døgnet, så det kan ikke flyttes til billige timer. Det koster derfor det samme, uanset om du har timepris; regnestykket er mærkets kWh gange din gennemsnitlige pris. Det, du kan styre, er hvor meget det arbejder: hold døren lukket, lad varm mad køle af først, og giv skabet luft bagved, så varmen kan slippe væk. Se <a href="/koeleskab/">hvad køleskabe bruger generelt</a>, og brug <a href="/beregner/">beregneren</a> til et ældre skab.</p>

<h2>Gode råd</h2>
<ul>
<li>Vælg en D-udgave (modelnummer på DP) frem for den ældre E-udgave.</li>
<li>Stil termostaten på 4–5 °C, ikke koldere.</li>
<li>Placér skabet væk fra komfur, ovn og direkte sol.</li>
<li>Sluk et ekstra køleskab, der kun står til drikkevarer.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger Bosch KSV36 om året?",
      answer:
        "93 kWh om året for KSV36VLDP, KSV36FWDP og KSV36AIDP med energiklasse D og 116 kWh for den ældre KSV36VWEP med klasse E ifølge EPREL. 93 kWh svarer til {{kr 93}} om året ved månedens elpris.",
    },
    {
      question: "Hvilken energiklasse har Bosch KSV36VLDP?",
      answer: "Energiklasse D på skalaen fra A til G med 93 kWh om året og 346 liter ifølge EPREL.",
    },
    {
      question: "Har Bosch KSV36 fryser?",
      answer: "Nej, KSV36 er et rent køleskab på 346 liter. Bosch sælger et sidemonteringssæt, så det kan stå ved siden af et fryseskab.",
    },
    {
      question: "Bruger Serie 6-udgaven KSV36AIDP mindre strøm end Serie 4?",
      answer: "Nej. KSV36AIDP (Serie 6) og KSV36VLDP (Serie 4) har samme energimærke: klasse D og 93 kWh om året.",
    },
    {
      question: "Kan Bosch KSV36 stå i en garage?",
      answer: "Kun hvis temperaturen holder sig mellem 10 og 43 °C. Det er de klimaklasser (SN til T), Bosch har oplyst til EPREL.",
    },
  ],
  sources: [
    { name: "EPREL — Bosch KSV36VLDP, EU's energimærke", url: eprel("274338") },
    { name: "EPREL — Bosch KSV36FWDP, EU's energimærke", url: eprel("1335292") },
    { name: "EPREL — Bosch KSV36AIDP, EU's energimærke", url: eprel("274383") },
    { name: "EPREL — Bosch KSV36VWEP, EU's energimærke", url: eprel("260913") },
    { name: "Bosch — KSV36VLDP, produktdatablad (dansk)", url: sheet("KSV36VLDP") },
    { name: "Bosch — KSV36FWDP, produktdatablad (dansk)", url: sheet("KSV36FWDP") },
    { name: "Bosch — KSV36AIDP, produktdatablad (dansk)", url: sheet("KSV36AIDP") },
    { name: "Bosch — KSV36VWEP, produktdatablad (dansk)", url: sheet("KSV36VWEP") },
    { name: "EPREL — Bosch GSN58AWCP, EU's energimærke", url: eprel("1808314") },
  ],
  variants: [
    { name: "346 l, Serie 4 (KSV36VLDP)", watts: {}, annualKwh: 93, energyClass: "D", source: 0 },
    { name: "346 l, Serie 4, hvid (KSV36FWDP)", watts: {}, annualKwh: 93, energyClass: "D", source: 1 },
    { name: "346 l, Serie 6 (KSV36AIDP)", watts: {}, annualKwh: 93, energyClass: "D", source: 2 },
    { name: "346 l, 2020 (KSV36VWEP)", watts: {}, annualKwh: 116, energyClass: "E", source: 3 },
  ],
  publishDate: "2026-12-12",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærkets årsforbrug i kWh, som Bosch har oplyst til EU-databasen EPREL: målt med lukket dør og termostaten på standard. Kilderne står nederst på siden.",
};

export default boschKsv36;
