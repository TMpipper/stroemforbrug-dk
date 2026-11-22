import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/refrigeratingappliances2019/${reg}`;
const sheet = (m: string) => `https://media3.bsh-group.com/Documents/specsheet/da-DK/${m}.pdf`;

const boschKir81: ModelData = {
  slug: "bosch-kir81",
  parent: "koeleskab",
  brand: "Bosch",
  name: "Bosch KIR81 integrerbart køleskab",
  released: "2026-01",
  synonyms: [
    "bosch kir81",
    "bosch kir81adc0",
    "bosch kir81add0",
    "bosch kir81vfe0",
    "bosch kir81nse0",
    "bosch integrerbart køleskab",
    "integrerbart køleskab 178 cm strømforbrug",
    "siemens ki81radc0",
  ],
  title: "Bosch KIR81 køleskab strømforbrug (2026) → kWh og klasse",
  description:
    "Bosch KIR81 integrerbart køleskab på 310 liter: energimærkets kWh om året i klasse C, D og E, pris om året og døgnet, og hvad nichen betyder for forbruget.",
  intro:
    "Fire udgaver af samme indbyggede køleskab på 310 liter — den nyeste fra 2026 bruger 73 kWh om året, de ældste E-udgaver 114 kWh.",
  content: `<h2>Hvor meget strøm bruger Bosch KIR81?</h2>
<p>Bosch KIR81 er et integrerbart køleskab uden fryser, 177,2 cm højt ifølge EPREL, og det er bygget ind bag en låge, der matcher køkkenet. Alle fire udgaver på siden har 310 liter, men de har hver sit energimærke i EU's produktdatabase EPREL. Den nyeste, KIR81ADC0 fra januar 2026, har energiklasse C og bruger 73 kWh om året. KIR81ADD0 fra 2023 har klasse D og 91 kWh. KIR81VFE0 og KIR81NSE0 har klasse E og 114 kWh.</p>
<p>73 kWh om året er omkring 0,2 kWh i døgnet, svarende til {{kr 73}} om året ved månedens elpris. E-udgaverne bruger 41 kWh mere, svarende til {{kr 41}} om året.</p>
<table>
<thead><tr><th>Model</th><th>Hængsel</th><th>Klasse</th><th>kWh om året</th><th>Støj</th><th>På markedet</th></tr></thead>
<tbody>
<tr><td>KIR81ADC0 (Serie 6)</td><td>Fladhængsel, soft close</td><td>C</td><td>73</td><td>34 dB</td><td>2026</td></tr>
<tr><td>KIR81ADD0 (Serie 6)</td><td>Fladhængsel, soft close</td><td>D</td><td>91</td><td>34 dB</td><td>2023</td></tr>
<tr><td>KIR81VFE0</td><td>Fladhængsel</td><td>E</td><td>114</td><td>35 dB</td><td>2023</td></tr>
<tr><td>KIR81NSE0</td><td>Glidende hængsel</td><td>E</td><td>114</td><td>35 dB</td><td>2023</td></tr>
</tbody>
</table>

<h2>Samme skab, tre energiklasser</h2>
<p>Udefra er det svært at se forskel, når lågen er monteret. Det er modelnummerets sidste bogstaver, der viser klassen: C-udgaven ender på DC0, D-udgaven på DD0 og E-udgaverne på E0. KIR81ADC0 og KIR81ADD0 er begge Serie 6 med VitaFresh XXL-skuffe ifølge Bosch' danske datablade, men den nye bruger 18 kWh mindre om året, svarende til {{kr 18}}. Energieffektivitetsindekset er faldet fra 80 til 64.</p>
<p>KIR81NSE0 har glidende hængsel, hvor køkkenlågen hænger på skabets egne hængsler og trækker køleskabsdøren med på en skinne, mens de andre har fladhængsel, hvor køkkenlågen sidder fast på køleskabsdøren. Hængslet påvirker ikke energimærket, men en låge, der sidder skævt eller ikke lukker helt, gør. Tjek tætningslisten, når skabet er bygget ind.</p>
<p>Skifter du et ældre indbygget køleskab ud, så tjek målene først. De fire udgaver er alle 177,2 cm høje og 54,8 cm dybe ifølge EPREL, men bredden er 55,8 cm for KIR81ADC0 og KIR81ADD0 og 54,1 cm for KIR81VFE0 og KIR81NSE0.</p>

<h2>Integrerbar mod fritstående</h2>
<p>Et indbygget køleskab skal passe i en standardniche og skille sig af med varmen gennem ventilationsåbninger i sokkel og overskab. Alligevel bruger KIR81ADC0 mindre end det fritstående <a href="/koeleskab/bosch-ksv36/">Bosch KSV36</a> med 93 kWh om året — men KSV36 rummer 346 liter, altså 36 liter mere. Pr. 100 liter bruger KIR81ADC0 omkring 24 kWh om året mod 27 kWh for KSV36 med klasse D.</p>
<p>Siemens' integrerbare KI81RADC0 fra samme koncern har præcis samme tal: 310 liter, klasse C og 73 kWh om året. Vælger du mellem Bosch og Siemens, er det altså ikke strømmen, der skiller dem ad. Til sammenligning bruger et kombiskab med fryser som <a href="/koeleskab/bosch-kge36/">Bosch KGE36</a> 149 kWh om året.</p>

<h2>Nichen og ventilationen</h2>
<p>Energimærket er målt ved 25 °C i rummet med lukket dør. Ved indbygning skal luften kunne strømme ind forneden og ud foroven; en lukket sokkel eller et overskab uden ventilationsrist får kompressoren til at køre mere. Følg Bosch' monteringsvejledning for åbningerne. Bosch har oplyst klimaklasserne SN og ST til EPREL, altså rum mellem 10 og 38 °C. Stil termostaten på 4–5 °C; hver grad koldere koster mere.</p>

<h2>Hvornår er det billigst?</h2>
<p>Et køleskab kører hele døgnet og kan ikke flyttes til billige timer. Det koster derfor det samme, uanset om du har timepris; regnestykket er mærkets kWh gange din gennemsnitlige pris. Det, du kan påvirke, er, hvor meget det arbejder: hold lågen lukket, lad varm mad køle af, før den sættes ind, og sørg for fri ventilation. Se <a href="/koeleskab/">hvad køleskabe bruger generelt</a>, og brug <a href="/beregner/">beregneren</a> til et ældre skab.</p>

<h2>Gode råd</h2>
<ul>
<li>Skal du skifte et indbygget skab, så vælg den nyeste C-udgave — nichen er den samme.</li>
<li>Hold ventilationsåbningerne i sokkel og overskab fri.</li>
<li>Tjek, at køkkenlågen lukker tæt, når skabet er bygget ind.</li>
<li>Stil termostaten på 4–5 °C.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger Bosch KIR81 om året?",
      answer:
        "73 kWh om året for KIR81ADC0 (klasse C), 91 kWh for KIR81ADD0 (klasse D) og 114 kWh for KIR81VFE0 og KIR81NSE0 (klasse E) ifølge EPREL. 73 kWh svarer til {{kr 73}} om året ved månedens elpris.",
    },
    {
      question: "Hvad er forskellen på KIR81ADC0 og KIR81ADD0?",
      answer: "Begge er Serie 6 på 310 liter med fladhængsel og soft close, men KIR81ADC0 har klasse C og 73 kWh om året, KIR81ADD0 klasse D og 91 kWh.",
    },
    {
      question: "Har Bosch KIR81 fryser?",
      answer: "Nej, KIR81 er et rent køleskab på 310 liter uden fryseboks. Skal du fryse, kommer et fryseskab oveni forbruget.",
    },
    {
      question: "Bruger et integrerbart køleskab mere strøm end et fritstående?",
      answer:
        "Ikke nødvendigvis. KIR81ADC0 bruger 73 kWh om året med 310 liter, mens det fritstående Bosch KSV36 med klasse D bruger 93 kWh med 346 liter. Ventilationen i nichen skal dog være i orden.",
    },
  ],
  sources: [
    { name: "EPREL — Bosch KIR81ADC0, EU's energimærke", url: eprel("2432947") },
    { name: "EPREL — Bosch KIR81ADD0, EU's energimærke", url: eprel("1251953") },
    { name: "EPREL — Bosch KIR81VFE0, EU's energimærke", url: eprel("1321615") },
    { name: "EPREL — Bosch KIR81NSE0, EU's energimærke", url: eprel("1098169") },
    { name: "Bosch — KIR81ADC0, produktdatablad (dansk)", url: sheet("KIR81ADC0") },
    { name: "Bosch — KIR81ADD0, produktdatablad (dansk)", url: sheet("KIR81ADD0") },
    { name: "Bosch — KIR81VFE0, produktdatablad (dansk)", url: sheet("KIR81VFE0") },
    { name: "Bosch — KIR81NSE0, produktdatablad (dansk)", url: sheet("KIR81NSE0") },
    { name: "EPREL — Siemens KI81RADC0, EU's energimærke", url: eprel("2296229") },
  ],
  variants: [
    { name: "310 l, klasse C (KIR81ADC0)", watts: {}, annualKwh: 73, energyClass: "C", source: 0 },
    { name: "310 l, klasse D (KIR81ADD0)", watts: {}, annualKwh: 91, energyClass: "D", source: 1 },
    { name: "310 l, fladhængsel (KIR81VFE0)", watts: {}, annualKwh: 114, energyClass: "E", source: 2 },
    { name: "310 l, glidende hængsel (KIR81NSE0)", watts: {}, annualKwh: 114, energyClass: "E", source: 3 },
  ],
  publishDate: "2026-12-15",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærkets årsforbrug i kWh, som Bosch har oplyst til EU-databasen EPREL: målt med lukket dør og termostaten på standard. Kilderne står nederst på siden.",
};

export default boschKir81;
