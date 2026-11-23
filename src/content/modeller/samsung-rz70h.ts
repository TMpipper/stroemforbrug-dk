import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/refrigeratingappliances2019/${reg}`;

const samsungRz70h: ModelData = {
  slug: "samsung-rz70h",
  parent: "fryser",
  brand: "Samsung",
  name: "Samsung RZ70H fryseskab",
  released: "2026-03",
  synonyms: [
    "samsung rz70h",
    "samsung rz70h32kdv",
    "samsung rz70h32kdvef",
    "samsung rz70h32kdf",
    "samsung rz70h32kev",
    "samsung serie 70 fryser",
    "samsung fryseskab 323 liter",
    "samsung opretstående fryser",
  ],
  title: "Samsung RZ70H fryseskab strømforbrug (2026) → kWh og pris",
  description:
    "Samsung RZ70H fryseskab på 323 liter: energimærkets kWh om året i klasse D og E, pris om året og i døgnet, og hvorfor skabet ikke hører til i en kold garage.",
  intro:
    "Alle RZ70H32-udgaver er det samme 186 cm høje skab på 323 liter; energimærket deler dem i to: 210 kWh om året i klasse D og 263 kWh i klasse E.",
  content: `<h2>Hvor meget strøm bruger Samsung RZ70H?</h2>
<p>Samsung RZ70H er et opretstående fryseskab på 323 liter, 185,8 cm højt, 59,5 cm bredt og 64,4 cm dybt. Det kom på markedet i marts 2026 og findes i flere udgaver, som hver har sit eget energimærke i EU's produktdatabase EPREL. RZ70H32KDV og RZ70H32KDF har energiklasse D og bruger 210 kWh om året. RZ70H32KEV har energiklasse E og bruger 263 kWh om året. Skabet er det samme; det er klassen, der skiller dem.</p>
<p>210 kWh om året er omkring 0,58 kWh i døgnet, svarende til {{kr 210}} om året ved månedens elpris. E-udgaven bruger 53 kWh mere, svarende til {{kr 53}} om året — over ti års levetid er det mere end 500 kWh.</p>
<table>
<thead><tr><th>Model</th><th>Rumfang</th><th>Klasse</th><th>kWh om året</th><th>Energiindeks</th><th>Støj</th></tr></thead>
<tbody>
<tr><td>RZ70H32KDV</td><td>323 l</td><td>D</td><td>210</td><td>80</td><td>36 dB</td></tr>
<tr><td>RZ70H32KDF</td><td>323 l</td><td>D</td><td>210</td><td>80</td><td>36 dB</td></tr>
<tr><td>RZ70H32KEV</td><td>323 l</td><td>E</td><td>263</td><td>100</td><td>36 dB</td></tr>
</tbody>
</table>

<h2>Læs bogstavet i modelnummeret</h2>
<p>Ligesom hos flere andre producenter står energiklassen i Samsungs modelnummer: det næstsidste bogstav er D eller E. RZ70H32KDV er altså klasse D, RZ70H32KEV klasse E. Står du med to næsten ens skabe, er det dét bogstav, der afgør strømregningen. Energieffektivitetsindekset i EPREL er 80 for D-udgaverne og 100 for E-udgaven.</p>
<p>I EPREL er rummet registreret med variabel temperatur, ikke som et rent firestjernet frostrum. Det betyder, at skabet kan stilles til andet end frost. Energimærkets årstal er det tal, Samsung har oplyst for skabet som helhed, målt ved 25 °C i rummet.</p>

<h2>Ikke til garagen</h2>
<p>Samsung har oplyst klimaklasse ST til EPREL, altså rum mellem 16 og 38 °C. Det er et skab til et opvarmet køkken, bryggers eller kælderrum, ikke til en uopvarmet garage eller et udhus, hvor temperaturen om vinteren falder under 16 °C. I et for koldt rum kan en kompressor stå stille for længe, og så holder fryseren ikke temperaturen. Skal fryseren stå køligere, så vælg en model med klimaklasse SN, der dækker rum ned til 10 °C. Kummefryseren <a href="/kummefryser/gram-fb-3297/">Gram FB 3297</a> er et eksempel — men heller ikke den er oplyst til en garage under 10 °C.</p>

<p>Står fryseren i et kælderrum på 16–18 °C, arbejder den mindre end ved mærkets 25 °C, og forbruget lander typisk lidt under tallet på mærket. Står den derimod ved siden af en tørretumbler eller i et bryggers med fyr, kan den komme over. Mål gerne temperaturen i rummet en vinterdag og en sommerdag, før du vælger plads; et billigt termometer er nok. Lad også et par centimeter luft være på siderne og bagved, så skabet kan komme af med varmen.</p>

<h2>RZ70H mod andre fryseskabe</h2>
<p>Pr. liter ligger RZ70H i D-udgaven tæt på de store fryseskabe på siden. Den bruger omkring 65 kWh om året pr. 100 liter. <a href="/fryser/bosch-gsn58/">Bosch GSN58</a> på 366 liter bruger 222 kWh i klasse D og 178 kWh i klasse C — C-udgaven er altså 32 kWh billigere om året end RZ70H's D-udgave med 43 liter mere plads. <a href="/fryser/gorenje-fn619/">Gorenje FN619</a> på 280 liter bruger 199 kWh i klasse D.</p>
<p>Samsung sælger også et køleskab i samme serie, RR70H39FDT på 387 liter, som i EPREL har klasse D og 97 kWh om året. Stilles de to side om side, bliver det omkring 307 kWh om året for over 700 liter køl og frost, svarende til {{kr 307}}.</p>

<h2>Hvornår er det billigst?</h2>
<p>En fryser kører hele døgnet og kan ikke flyttes til billige timer, så årsprisen er mærkets kWh gange din gennemsnitlige elpris. Det, du kan styre, er hvor meget kompressoren arbejder. Hold døren lukket, og fyld skabet: en fuld fryser holder kulden bedre end en tom, fordi de frosne varer virker som kuldelager. Sæt aldrig varm mad direkte ind, og giv skabet luft omkring siderne og bagved. Se <a href="/fryser/">hvad frysere bruger generelt</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Vælg en D-udgave (RZ70H32KD…) frem for E, når du køber nyt.</li>
<li>Stil fryseren på −18 °C; hver grad koldere koster ekstra.</li>
<li>Placér skabet i et rum mellem 16 og 38 °C.</li>
<li>Tjek dørpakningen med et stykke papir: kan det trækkes ud uden modstand, slipper kulden ud.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger Samsung RZ70H32KDV?",
      answer: "210 kWh om året i energiklasse D ifølge EPREL, omkring 0,58 kWh i døgnet. Det svarer til {{kr 210}} om året ved månedens elpris.",
    },
    {
      question: "Hvad er forskellen på RZ70H32KDV og RZ70H32KEV?",
      answer: "Samme skab på 323 liter, men KDV har klasse D og 210 kWh om året, mens KEV har klasse E og 263 kWh. Forskellen er 53 kWh om året, svarende til {{kr 53}}.",
    },
    {
      question: "Kan Samsung RZ70H stå i en garage?",
      answer: "Kun hvis temperaturen holder sig mellem 16 og 38 °C. Det er klimaklasse ST, som Samsung har oplyst til EPREL, så en uopvarmet garage om vinteren er for kold.",
    },
    {
      question: "Hvor stort er Samsung RZ70H?",
      answer: "323 liter, 185,8 cm højt, 59,5 cm bredt og 64,4 cm dybt ifølge EPREL.",
    },
  ],
  sources: [
    { name: "EPREL — Samsung RZ70H32KDV, EU's energimærke", url: eprel("2571067") },
    { name: "EPREL — Samsung RZ70H32KDF, EU's energimærke", url: eprel("2571064") },
    { name: "EPREL — Samsung RZ70H32KEV, EU's energimærke", url: eprel("2571070") },
    { name: "EPREL — Samsung RR70H39FDT, EU's energimærke", url: eprel("2571105") },
    { name: "EPREL — Bosch GSN58AWCP, EU's energimærke", url: eprel("1808314") },
  ],
  variants: [
    { name: "323 l, klasse D (RZ70H32KDV)", watts: {}, annualKwh: 210, energyClass: "D", source: 0 },
    { name: "323 l, klasse D (RZ70H32KDF)", watts: {}, annualKwh: 210, energyClass: "D", source: 1 },
    { name: "323 l, klasse E (RZ70H32KEV)", watts: {}, annualKwh: 263, energyClass: "E", source: 2 },
  ],
  publishDate: "2026-12-24",
  updated: "2026-11-23",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærkets årsforbrug i kWh, som Samsung har oplyst til EU-databasen EPREL: målt ved 25 °C i rummet med lukket dør. Kilderne står nederst på siden.",
};

export default samsungRz70h;
