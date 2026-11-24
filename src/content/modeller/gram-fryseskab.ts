import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/refrigeratingappliances2019/${reg}`;
const gram = (m: string) => `https://www.gram.dk/fritstaende-fryseskabe-${m}`;

const gramFryseskab: ModelData = {
  slug: "gram-fryseskab",
  parent: "fryser",
  brand: "Gram",
  name: "Gram fryseskab (FS)",
  released: "2026-01",
  synonyms: [
    "gram fryseskab strømforbrug",
    "gram fryser strømforbrug",
    "gram fs 610854",
    "gram fs 771254",
    "gram fs 771454",
    "gram fs 781864 n",
    "gram fs 881865 n",
    "gram fryseskab no frost",
  ],
  title: "Gram fryseskab strømforbrug (2026) → kWh om året pr. model",
  description:
    "Gram fryseskab fra 79 til 283 liter: energimærkets kWh om året for fem danske FS-modeller med og uden NoFrost, pris om året og forbruget pr. liter.",
  intro:
    "De fem Gram-fryseskabe bruger 162–235 kWh om året. Det store FS 881865 N på 283 liter bruger mindre end det mindre FS 781864 N på 242 liter, fordi det er en energiklasse bedre.",
  content: `<h2>Hvor meget strøm bruger et Gram fryseskab?</h2>
<p>Gram har en serie fritstående fryseskabe, der hedder FS, fra et lille skab under bordpladen til et højt skab med NoFrost. Siden dækker fem modeller fra Grams danske hjemmeside, og hver har sit eget energimærke i EU's produktdatabase EPREL, målt ved 25 °C i rummet og −18 °C i fryseren.</p>
<table>
<thead><tr><th>Model</th><th>Højde</th><th>Liter</th><th>Afrimning</th><th>Energiklasse</th><th>kWh om året</th></tr></thead>
<tbody>
<tr><td>FS 610854</td><td>84 cm</td><td>79 l</td><td>Manuel</td><td>E</td><td>162</td></tr>
<tr><td>FS 771254</td><td>122,5 cm</td><td>127 l</td><td>Manuel</td><td>E</td><td>177</td></tr>
<tr><td>FS 771454</td><td>144 cm</td><td>155 l</td><td>Manuel</td><td>E</td><td>186</td></tr>
<tr><td>FS 781864 N</td><td>186 cm</td><td>242 l</td><td>NoFrost</td><td>E</td><td>235</td></tr>
<tr><td>FS 881865 N</td><td>186 cm</td><td>283 l</td><td>NoFrost</td><td>D</td><td>199</td></tr>
</tbody>
</table>
<p>Ved månedens elpris koster det lille FS 610854 {{kr 162}} om året, FS 771254 {{kr 177}} og FS 771454 {{kr 186}}. De høje NoFrost-skabe koster {{kr 235}} for FS 781864 N og {{kr 199}} for FS 881865 N.</p>

<h2>Det lille skab er dyrt pr. liter</h2>
<p>Et fryseskab bruger en stor del af strømmen på at holde kulden inde gennem væggene og døren, og det har selv et lille skab. Derfor stiger forbruget langt langsommere end pladsen. FS 610854 på 79 liter bruger omkring 2,05 kWh om året pr. liter, FS 771454 på 155 liter omkring 1,20 kWh og FS 881865 N på 283 liter omkring 0,70 kWh. Det store skab har altså 3,6 gange så meget plads som det lille, men bruger kun 37 kWh mere om året, svarende til {{kr 37}}.</p>
<p>Har du to små frysere, eller overvejer du at købe en ekstra, er ét større skab næsten altid billigere at have kørende. To FS 610854 bruger tilsammen 324 kWh om året for 158 liter; ét FS 881865 N bruger 199 kWh for 283 liter.</p>

<h2>NoFrost og energiklasse D</h2>
<p>De to høje skabe har NoFrost, så de ikke skal afrimes. Gram har registreret dem forskelligt: FS 781864 N på 242 liter i klasse E med 235 kWh om året og FS 881865 N på 283 liter i klasse D med 199 kWh. Det større skab bruger 36 kWh mindre om året, svarende til {{kr 36}}, og har 41 liter mere. Står du mellem de to, taler både plads og forbrug for FS 881865 N; det er dog 5 cm dybere.</p>
<p>De tre mindre skabe skal afrimes i hånden. Is på væggene isolerer og får fryseren til at arbejde mere, så afrim, når laget bliver tykkere end et par millimeter.</p>

<h2>Gram mod andre fryseskabe</h2>
<p>FS 881865 N bruger det samme som <a href="/fryser/gorenje-fn619/">Gorenje FN619</a> (FN619DAW6) i klasse D: 199 kWh om året for 280 liter. <a href="/fryser/samsung-rz70h/">Samsung RZ70H</a> på 323 liter bruger 210 kWh i klasse D, og <a href="/fryser/bosch-gsn58/">Bosch GSN58</a> (GSN58AWDP) på 366 liter 222 kWh. De store skabe giver mere plads for omtrent samme strøm.</p>
<p>En kummefryser som <a href="/kummefryser/gram-fb-3297/">Gram FB 3297</a> på 297 liter bruger 231 kWh om året i klasse E, altså mere end FS 881865 N med næsten samme plads. FS 771254 passer i mål til Grams køleskab <a href="/koeleskab/gram-ks-771254/">KS 771254</a> (begge 122,5 cm høje og 54,5 cm brede); står de side om side, bruger de tilsammen 275 kWh om året, svarende til {{kr 275}}.</p>

<h2>Placering og gode råd</h2>
<p>Gram har oplyst til EPREL, at alle fem er bygget til rum mellem 10 og 38 °C. Står fryseren i en uopvarmet garage eller et udhus, der bliver koldere end 10 °C om vinteren, er det uden for det oplyste. Et køligt rum inden for grænserne giver derimod et lavere forbrug end energimærket, et varmt bryggers et højere.</p>
<ul>
<li>Hold −18 °C; hver grad koldere koster ekstra uden at gøre maden bedre.</li>
<li>Fyld fryseren, men lad luften kunne cirkulere, og lad varm mad køle af først.</li>
<li>Afrim de manuelle modeller jævnligt, og tjek, at tætningslisten slutter tæt.</li>
<li>Giv skabet luft bagtil og over, så kompressoren kan komme af med varmen.</li>
</ul>
<p>En fryser kører hele døgnet, så den kan ikke flyttes til billige timer. Se flere modeller på siden om <a href="/fryser/">frysere og deres strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger et Gram fryseskab?",
      answer:
        "Ifølge energimærket 162–235 kWh om året for de fem FS-modeller på siden: 162 kWh for FS 610854 (79 liter), 177–186 kWh for FS 771254 og FS 771454 og 199–235 kWh for de høje NoFrost-skabe.",
    },
    {
      question: "Hvad koster Gram FS 881865 N om året i strøm?",
      answer: "FS 881865 N bruger 199 kWh om året i energiklasse D, svarende til {{kr 199}} ved månedens elpris.",
    },
    {
      question: "Bruger Gram FS 781864 N mere strøm end FS 881865 N?",
      answer: "Ja. FS 781864 N bruger 235 kWh om året i klasse E, FS 881865 N 199 kWh i klasse D, selv om det har 41 liter mere.",
    },
    {
      question: "Kan et Gram fryseskab stå i en garage?",
      answer: "Kun hvis temperaturen holder sig mellem 10 og 38 °C. Det er det område, Gram har oplyst til EPREL for alle fem modeller.",
    },
    {
      question: "Er et lille fryseskab billigere i drift?",
      answer:
        "Pr. år lidt, pr. liter slet ikke. FS 610854 på 79 liter bruger 162 kWh, FS 881865 N på 283 liter 199 kWh — kun 37 kWh mere for 3,6 gange så meget plads.",
    },
  ],
  sources: [
    { name: "EPREL — Gram FS 610854, EU's energimærke", url: eprel("2389105") },
    { name: "EPREL — Gram FS 771254, EU's energimærke", url: eprel("2389106") },
    { name: "EPREL — Gram FS 771454, EU's energimærke", url: eprel("2389107") },
    { name: "EPREL — Gram FS 781864 N, EU's energimærke", url: eprel("2362710") },
    { name: "EPREL — Gram FS 881865 N, EU's energimærke", url: eprel("2362716") },
    { name: "Gram — fritstående fryseskabe, dansk sortiment", url: "https://www.gram.dk/frysere/fritstaende-fryseskabe" },
    { name: "Gram — FS 781864 N, dansk produktside", url: gram("fs-781864-n") },
    { name: "Gram — FS 881865 N, dansk produktside", url: gram("fs-881865-n") },
  ],
  variants: [
    { name: "79 l, 84 cm (FS 610854)", watts: {}, annualKwh: 162, energyClass: "E", source: 0 },
    { name: "127 l, 122,5 cm (FS 771254)", watts: {}, annualKwh: 177, energyClass: "E", source: 1 },
    { name: "155 l, 144 cm (FS 771454)", watts: {}, annualKwh: 186, energyClass: "E", source: 2 },
    { name: "242 l, NoFrost (FS 781864 N)", watts: {}, annualKwh: 235, energyClass: "E", source: 3 },
    { name: "283 l, NoFrost, klasse D (FS 881865 N)", watts: {}, annualKwh: 199, energyClass: "D", source: 4 },
  ],
  publishDate: "2027-01-02",
  updated: "2026-11-24",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærket måler årsforbruget ved 25 °C i rummet med lukket dør og −18 °C i fryseren. Kilderne står nederst på siden.",
};

export default gramFryseskab;
