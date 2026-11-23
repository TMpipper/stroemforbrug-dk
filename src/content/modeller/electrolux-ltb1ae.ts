import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/refrigeratingappliances2019/${reg}`;

const electroluxLtb1ae: ModelData = {
  slug: "electrolux-ltb1ae",
  parent: "koeleskab",
  brand: "Electrolux",
  name: "Electrolux LTB1AE køle-/fryseskab",
  released: "2023-09",
  synonyms: [
    "electrolux ltb1ae24w0",
    "electrolux ltb1ae28w0",
    "electrolux ltb1ae24u0",
    "electrolux ltb1ae",
    "electrolux køle-fryseskab 143 cm",
    "electrolux serie 500 køle-fryseskab",
    "lille køle-fryseskab electrolux",
  ],
  title: "Electrolux LTB1AE strømforbrug (2026) → kWh om året og pris",
  description:
    "Electrolux LTB1AE24W0 og LTB1AE28W0 køle-/fryseskab på 206 og 244 liter: energimærkets kWh om året i klasse E, pris om året og døgnet, og hvad højden betyder.",
  intro:
    "Det lave LTB1AE24W0 og det høje LTB1AE28W0 bruger næsten det samme om året — 177 og 178 kWh — så den høje model giver 38 liter mere køl næsten gratis.",
  content: `<h2>Hvor meget strøm bruger Electrolux LTB1AE?</h2>
<p>Electrolux LTB1AE er et lille fritstående køle-/fryseskab, 55 cm bredt og 54,7 cm dybt, i to højder. I EU's produktdatabase EPREL har LTB1AE24W0 fra 2023 energiklasse E og et årsforbrug på 177 kWh for 206 liter: 165,5 liter køl og 41,5 liter frys. Skabet er 143,4 cm højt. Den ældre LTB1AE24U0 fra 2020 har nøjagtig samme mærke. LTB1AE28W0 er 161 cm højt, har 202,8 liter køl og samme fryser på 41,5 liter, og bruger 178 kWh om året, også i klasse E.</p>
<p>177 kWh om året er omkring 0,48 kWh i døgnet, svarende til {{kr 177}} om året ved månedens elpris. Den høje udgave koster stort set det samme: {{kr 178}}.</p>
<table>
<thead><tr><th>Model</th><th>Fra</th><th>Højde</th><th>Køl / frys</th><th>Klasse</th><th>kWh om året</th><th>Støj</th></tr></thead>
<tbody>
<tr><td>LTB1AE24W0</td><td>2023</td><td>143,4 cm</td><td>165,5 / 41,5 l</td><td>E</td><td>177</td><td>39 dB</td></tr>
<tr><td>LTB1AE24U0</td><td>2020</td><td>143,4 cm</td><td>165,5 / 41,5 l</td><td>E</td><td>177</td><td>39 dB</td></tr>
<tr><td>LTB1AE28W0</td><td>2023</td><td>161 cm</td><td>202,8 / 41,5 l</td><td>E</td><td>178</td><td>40 dB</td></tr>
</tbody>
</table>

<h2>Det høje skab er billigere pr. liter</h2>
<p>Energimærket er ikke en fast pris pr. liter. Den ekstra højde på LTB1AE28W0 giver 38 liter mere køl for 1 kWh mere om året. Pr. 100 liter bruger den lave model omkring 86 kWh om året og den høje omkring 73 kWh. Har du plads til 161 cm, er den høje model det bedste køb af de to set med strømregningens øjne — så længe du faktisk bruger den ekstra plads.</p>
<p>Fryseren er lille i begge: 41,5 liter rækker til is, et par poser grøntsager og lidt kød. Fryser du meget, skal du se på et skab med større frys eller et separat fryseskab, og så skal begge apparater regnes med i forbruget.</p>

<h2>Klasse E i et lille skab</h2>
<p>Små skabe har svært ved at få en god energiklasse, fordi mærket regnes ud fra forbruget i forhold til rumfanget. Begge udgaver har energieffektivitetsindeks 100 i EPREL, midt i klasse E. Til sammenligning har <a href="/koeleskab/bosch-kge36/">Bosch KGE36</a> på 308 liter klasse C og bruger 149 kWh om året — 28 kWh mindre end LTB1AE24W0 for 102 liter mere. Er pladsen der, er et 60 cm bredt skab i en bedre klasse både større og billigere i drift.</p>
<p>Mellem de 55 cm brede kombiskabe ligger LTB1AE lavere end <a href="/koeleskab/gorenje-nrk418/">Gorenje NRK418</a> i E-udgaven, som bruger 226 kWh om året for 256 liter, men højere end NRK418's D-udgave fra 2026 med 172 kWh for 255 liter. Den sammenligning viser, at en nyere model i klasse D kan give mere plads for samme eller mindre strøm.</p>

<p>Står du med et ældre skab af samme størrelse, så find det gamle energimærke frem, eller mål forbruget med en stikkontaktmåler i en uge. Et 15–20 år gammelt køle-/fryseskab bruger ofte mere end et nyt i klasse E, især hvis dørpakningerne er slidte. Skift dog ikke et skab, der virker, alene for strømmens skyld, før du har regnet besparelsen ud; brug <a href="/beregner/">beregneren</a> til at sætte tal på dit eget forbrug.</p>

<h2>Hvor skabet kan stå</h2>
<p>Electrolux har oplyst klimaklasserne N, SN og ST til EPREL, altså rum mellem 10 og 38 °C. Det dækker et køkken, et bryggers og et køligt kælderrum, men ikke et sted, hvor temperaturen om sommeren kommer over 38 °C, og ikke en garage, der fryser om vinteren. Energimærket er målt ved 25 °C; et køligere rum giver lidt mindre forbrug.</p>

<h2>Hvornår er det billigst?</h2>
<p>Et køle-/fryseskab kører hele døgnet og kan ikke flyttes til billige timer, så årsprisen er mærkets kWh gange din gennemsnitlige elpris. Det, du kan styre, er hvor meget kompressoren arbejder: luk døren hurtigt, lad varm mad køle af, og hold øje med is i fryseren — et tykt lag is isolerer og får kompressoren til at køre længere. Se <a href="/koeleskab/">hvad køleskabe bruger generelt</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Vælg LTB1AE28W0, hvis der er plads i højden — mere køl for samme strøm.</li>
<li>Stil køl på 4–5 °C og frys på −18 °C.</li>
<li>Afrim fryseren, når isen bliver tykkere end et par millimeter.</li>
<li>Giv skabet luft bagved og ovenover, så varmen kan slippe væk.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger Electrolux LTB1AE24W0?",
      answer: "177 kWh om året i energiklasse E ifølge EPREL, omkring 0,48 kWh i døgnet. Det svarer til {{kr 177}} om året ved månedens elpris.",
    },
    {
      question: "Hvor stort er Electrolux LTB1AE24W0?",
      answer: "206 liter i alt med 165,5 liter køl og 41,5 liter frys. Skabet er 143,4 cm højt, 55 cm bredt og 54,7 cm dybt ifølge EPREL.",
    },
    {
      question: "Bruger LTB1AE28W0 mere strøm end LTB1AE24W0?",
      answer: "Kun 1 kWh mere om året: 178 mod 177 kWh, begge i klasse E. Til gengæld har LTB1AE28W0 38 liter mere køl.",
    },
    {
      question: "Kan Electrolux LTB1AE stå i en kold kælder?",
      answer: "Ja, ned til 10 °C. Electrolux har oplyst klimaklasserne N, SN og ST til EPREL, altså rum mellem 10 og 38 °C.",
    },
  ],
  sources: [
    { name: "EPREL — Electrolux LTB1AE24W0, EU's energimærke", url: eprel("1637157") },
    { name: "EPREL — Electrolux LTB1AE24U0, EU's energimærke", url: eprel("398199") },
    { name: "EPREL — Electrolux LTB1AE28W0, EU's energimærke", url: eprel("1637155") },
    { name: "EPREL — Bosch KGE36AWCA, EU's energimærke", url: eprel("260377") },
    { name: "EPREL — Gorenje NRK418ECW4, EU's energimærke", url: eprel("738737") },
  ],
  variants: [
    { name: "206 l, 143 cm (LTB1AE24W0)", watts: {}, annualKwh: 177, energyClass: "E", source: 0 },
    { name: "206 l, 2020 (LTB1AE24U0)", watts: {}, annualKwh: 177, energyClass: "E", source: 1 },
    { name: "244 l, 161 cm (LTB1AE28W0)", watts: {}, annualKwh: 178, energyClass: "E", source: 2 },
  ],
  publishDate: "2026-12-26",
  updated: "2026-11-23",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærkets årsforbrug i kWh, som Electrolux har oplyst til EU-databasen EPREL: målt ved 25 °C i rummet med lukkede døre og termostaten på standard. Kilderne står nederst på siden.",
};

export default electroluxLtb1ae;
