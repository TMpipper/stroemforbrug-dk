import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/refrigeratingappliances2019/${reg}`;

const gramFb3297: ModelData = {
  slug: "gram-fb-3297",
  parent: "kummefryser",
  brand: "Gram",
  name: "Gram FB 3297 kummefryser",
  released: "2025-10",
  synonyms: [
    "gram fb 3297",
    "gram fb3297-95",
    "gram kummefryser 297 liter",
    "gram kummefryser strømforbrug",
    "gram fb 3420",
    "gram fb 3198",
    "gram fb 3097",
    "kummefryser strømforbrug",
  ],
  title: "Gram FB 3297 kummefryser strømforbrug (2026) → kWh og pris",
  description:
    "Gram FB 3297 kummefryser og søskende fra 97 til 420 liter: energimærkets kWh om året, pris om året, og hvad den nye udgave sparer mod den gamle.",
  intro:
    "FB 3297-95 selv bruger 231 kWh om året; spændet dækker fire størrelser i samme serie, fra 97 liter (FB 3097-95) til 420 liter (FB 3420-95).",
  content: `<h2>Hvor meget strøm bruger Gram FB 3297?</h2>
<p>Gram FB 3297-95 er en kummefryser på 297 liter, 111 cm bred, 63 cm dyb og 85 cm høj. I EU's produktdatabase EPREL har den energiklasse E og et årsforbrug på 231 kWh. Det svarer til 0,63 kWh i døgnet, eller {{kr 231}} om året ved månedens elpris. Den kom på markedet i oktober 2025 og afløser FB 3297-90/1 fra 2022, som har klasse F og 289 kWh om året. Den nye udgave bruger altså 58 kWh mindre om året i samme størrelse, svarende til {{kr 58}}.</p>
<p>Serien findes i fire størrelser med samme energiklasse og samme energieffektivitetsindeks på 100: FB 3097-95 på 97 liter, FB 3198-95 på 198 liter, FB 3297-95 på 297 liter og FB 3420-95 på 420 liter, som kom i januar 2026.</p>

<h2>Fire størrelser side om side</h2>
<table>
<thead><tr><th>Model</th><th>Rumfang</th><th>Bredde</th><th>kWh om året</th><th>kWh pr. 100 liter</th><th>Støj</th></tr></thead>
<tbody>
<tr><td>FB 3097-95</td><td>97 l</td><td>54,6 cm</td><td>168</td><td>173</td><td>38 dB</td></tr>
<tr><td>FB 3198-95</td><td>198 l</td><td>89,1 cm</td><td>200</td><td>101</td><td>37 dB</td></tr>
<tr><td>FB 3297-95</td><td>297 l</td><td>111,4 cm</td><td>231</td><td>78</td><td>37 dB</td></tr>
<tr><td>FB 3420-95</td><td>420 l</td><td>144,8 cm</td><td>269</td><td>64</td><td>40 dB</td></tr>
</tbody>
</table>
<p>Den store kummefryser på 420 liter har over fire gange så meget plads som den lille, men bruger kun 101 kWh mere om året. Pr. liter er den lille derfor langt den dyreste. Har I brug for 200 liter frost, er det bedre at købe én FB 3198-95 end to små; har I en lille FB 3097-95 og overvejer en ekstra, er en større i stedet billigere at have kørende.</p>

<h2>Kummefryser i garage og kælder</h2>
<p>Energimærket er målt med lukket låg og −18 °C. Kummefrysere står ofte i et bryggers, en kælder eller en garage, og her betyder rummets temperatur meget. Jo køligere rummet er, jo mindre varme skal fryseren fjerne, og jo mindre bruger den. Alle fire i serien er ifølge EPREL bygget til klimaklasserne SN, N, ST og T, altså rum mellem 10 og 43 °C. En uisoleret garage, der om vinteren bliver koldere end 10 °C, ligger uden for det, Gram har oplyst. Ved meget lave temperaturer kan termostaten i nogle frysere holde for længe pause, så tjek brugsanvisningen, før du stiller den i en kold garage.</p>
<p>Om sommeren er det modsat: en garage med solen på taget kan blive varm, og så bruger fryseren mere end mærket. En kælder er ofte det bedste sted — kølig og jævn temperatur hele året.</p>

<h2>Afrimning og låg</h2>
<p>En kummefryser har ingen NoFrost: EPREL oplyser manuel afrimning for alle fire. Is på væggene isolerer og får kompressoren til at arbejde mere, så afrim, når laget er omkring en halv centimeter. Fordelen ved en kummefryser er låget: kold luft er tung og bliver i kummen, når du åbner, mens den falder ud af et fryseskab. Tjek også, at tætningslisten slutter tæt hele vejen rundt — en utæt liste giver mere is og højere forbrug.</p>
<p>Sammenlignet med et fryseskab er en kummefryser ikke automatisk mere sparsom. Et <a href="/fryser/bosch-gsn58/">Bosch GSN58</a> på 366 liter med NoFrost bruger 178–278 kWh om året afhængigt af udgaven, altså på niveau med FB 3297-95 på 297 liter eller lavere for den nyeste udgave. Vælg typen efter plads og vaner, og sammenlign kWh-tallet på mærket.</p>

<h2>Hvornår er det billigst?</h2>
<p>En kummefryser kører hele døgnet, og du kan ikke selv flytte forbruget til billige timer. Prisen om året er mærkets kWh gange din gennemsnitlige elpris. FB 3198-95, FB 3297-95 og FB 3420-95 har hurtigindfrysning; den skal kun bruges, når du lægger meget ufrossen mad i på én gang. Læs mere om <a href="/kummefryser/">kummefryseres strømforbrug</a>, eller se <a href="/fryser/">fryseskabe</a> til sammenligning.</p>

<h2>Gode råd</h2>
<ul>
<li>Udskift en ældre kummefryser: alene skiftet fra FB 3297-90/1 til FB 3297-95 sparer 58 kWh om året.</li>
<li>Stil den køligt, men ikke under 10 °C.</li>
<li>Afrim, før isen bliver tyk.</li>
<li>Hold −18 °C og luk låget hurtigt.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger Gram FB 3297-95?",
      answer: "231 kWh om året ifølge energimærket i EU's database EPREL, energiklasse E. Det svarer til {{kr 231}} om året eller omkring 0,63 kWh i døgnet.",
    },
    {
      question: "Hvor meget sparer den nye Gram FB 3297-95 mod den gamle?",
      answer: "58 kWh om året. Den tidligere FB 3297-90/1 har klasse F og 289 kWh om året, den nye FB 3297-95 klasse E og 231 kWh. Det svarer til {{kr 58}} om året.",
    },
    {
      question: "Kan en Gram kummefryser stå i garagen?",
      answer: "Ja, hvis garagen holder sig mellem 10 og 43 °C. Gram har oplyst klimaklasserne SN, N, ST og T til EPREL. Bliver der koldere om vinteren, ligger det uden for det oplyste.",
    },
    {
      question: "Hvor meget bruger den store Gram FB 3420-95?",
      answer: "269 kWh om året for 420 liter, energiklasse E. Det svarer til {{kr 269}} om året.",
    },
    {
      question: "Skal en Gram kummefryser afrimes?",
      answer: "Ja. EPREL oplyser manuel afrimning for alle fire størrelser. Afrim, når islaget er omkring en halv centimeter.",
    },
  ],
  sources: [
    { name: "EPREL — Gram FB 3097-95, EU's energimærke", url: eprel("2464833") },
    { name: "EPREL — Gram FB 3198-95, EU's energimærke", url: eprel("2464834") },
    { name: "EPREL — Gram FB 3297-95, EU's energimærke", url: eprel("2464835") },
    { name: "EPREL — Gram FB 3420-95, EU's energimærke", url: eprel("2464836") },
    { name: "EPREL — Gram FB 3297-90/1 (forgængeren), EU's energimærke", url: eprel("729465") },
  ],
  variants: [
    { name: "97 l (FB 3097-95)", watts: {}, annualKwh: 168, energyClass: "E", source: 0 },
    { name: "198 l (FB 3198-95)", watts: {}, annualKwh: 200, energyClass: "E", source: 1 },
    { name: "297 l (FB 3297-95)", watts: {}, annualKwh: 231, energyClass: "E", source: 2 },
    { name: "420 l (FB 3420-95)", watts: {}, annualKwh: 269, energyClass: "E", source: 3 },
  ],
  publishDate: "2026-12-06",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærkets årsforbrug i kWh, som Gram har oplyst til EU-databasen EPREL for hver størrelse: målt med lukket låg og −18 °C. Kilderne står nederst på siden.",
};

export default gramFb3297;
