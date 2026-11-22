import type { ApplianceData } from "@/lib/types";

/**
 * Svejser (svejseapparat til hobby: MMA-inverter og MIG/MAG på 230 V). Intet EU-energimærke.
 * Tal: ESAB Rogue ES 150i/180i/180i PRO/200i PRO factsheet XA00211320 (6,9/8,7/6/6,9 kVA; ES 180i 170 A ved 20 %,
 * 75 A ved 100 %; ES 180i PRO 180 A ved 25 %, 90 A ved 100 %; Energy Save Mode 50 W), Lincoln Speedtec 200C manual
 * IM3049 (6,2 kVA ved 25 % intermittens, I1max 27 A, cos φ 0,99, B 16 A / B 25 A ved maks. strøm, intermittens = andel
 * af en 10-minutters cyklus, generator mindst 30 % større end optagen effekt), Einhell TC-IW 150 (16 A sikring).
 * kWh pr. svejsetime ved lavere strøm er vores skøn; øvre grænse = kVA × cos φ × intermittens.
 */
const svejser: ApplianceData = {
  slug: "svejser",
  meta: {
    category: "vaerksted",
    usage: "per-hour",
    hasEuLabel: false,
    shiftable: false,
    synonyms: ["svejser", "svejseapparat", "svejsemaskine", "inverter svejser", "mig svejser", "mag svejser", "elektrodesvejser", "mma svejser", "tig svejser", "co2 svejser"],
  },
  name: "Svejser",
  article: "en",
  title: "Svejser strømforbrug (2026) → kVA, intermittens og kWh",
  description:
    "Se hvor meget strøm et svejseapparat bruger: inverter og MIG/MAG på 230 V, kVA og intermittens forklaret, og hvad en time ved svejsebordet koster i strøm.",
  heading: "Strømforbrug for en svejser: watt, pris i timen og dyreste timer",
  quickAnswer:
    "En hobbysvejser på 230 V trækker op til 6-9 kVA, men kun mens lysbuen brænder. Ved fuld strøm og 25 procent intermittens bliver det højst omkring 1,5 kWh i timen, svarende til {{kr 1,5}} ved {{pris_kwh}}. Ved almindeligt hobbyarbejde med lavere strøm er det efter vores skøn nærmere 1 kWh pr. time ved svejsebordet, så 15 timer om året koster cirka {{kr 15}}.",
  kwhRange: [1, 300],
  typicalKwh: 15,
  wattage: 6000,
  standbyWatts: 50,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.2, 1.2, 1.2, 1.1, 0.9, 0.8, 0.6, 0.7, 0.9, 1.1, 1.1, 1.2],
  content: `<h2>Høj effekt i korte stød</h2>
<p>Et svejseapparat laver strømmen fra stikkontakten om til en lav spænding og en meget høj strøm, der smelter metallet i lysbuen. Det kræver meget effekt — men kun mens du svejser. Mellem svejsningerne skal du banke slagge af, skifte elektrode, flytte emnet og tjekke resultatet, og i den tid bruger apparatet næsten ingenting.</p>
<p>Svejsere angiver ofte deres optagne effekt i kVA, som er strøm gange spænding. ESAB oplyser 6 kVA for Rogue ES 180i PRO og 8,7 kVA for Rogue ES 180i, og Lincoln oplyser 6,2 kVA ved 25 procent intermittens for MIG/MAG-svejseren Speedtec 200C. Moderne invertere har en effektfaktor tæt på 1 — Lincoln oplyser 0,99 — så kVA og kW er næsten det samme. Et apparat på 6,2 kVA trækker altså godt 6 kW, når det svejser med fuld strøm.</p>

<h2>Intermittens: hvor stor en del af tiden apparatet må svejse</h2>
<p>Intermittensen, også kaldet duty cycle, er den andel af en 10-minutters periode, hvor apparatet må svejse ved en bestemt strøm, før det skal have en pause for at køle af. Lincoln forklarer det med et eksempel: ved 60 procent kan du svejse i seks minutter og skal så holde pause i fire. Jo lavere strøm, desto højere intermittens. ESAB oplyser for Rogue ES 180i 170 A ved 20 procent, 97 A ved 60 procent og 75 A ved 100 procent. For Speedtec 200C oplyser Lincoln 200 A ved 25 procent og 110 A ved 100 procent i MIG-svejsning.</p>
<p>Intermittensen er nyttig, når man regner strømforbrug. Ved fuld strøm og 25 procent kan apparatet højst svejse et kvarter i timen, og så bruger et apparat på 6 kW højst omkring 1,5 kWh i timen. Det er den øvre grænse for en hobbysvejser.</p>

<h2>Watt og pris pr. svejsetime</h2>
<table>
<thead><tr><th>Svejsning</th><th>kWh pr. time ved bordet</th><th>Pris pr. time</th><th>15 timer om året</th></tr></thead>
<tbody>
<tr><td>Lille MMA-inverter, tynde elektroder (vores skøn)</td><td>0,5</td><td>{{kr 0,5}}</td><td>{{kr 7,5}}</td></tr>
<tr><td>MIG/MAG ved mellem strøm (vores skøn)</td><td>1</td><td>{{kr 1}}</td><td>{{kr 15}}</td></tr>
<tr><td>Fuld strøm ved 25 % intermittens (ca. 6 kW)</td><td>1,5</td><td>{{kr 1,5}}</td><td>{{kr 22,5}}</td></tr>
</tbody>
</table>
<p>De to første rækker er vores skøn for almindeligt hobbyarbejde, hvor du svejser med lavere strøm end apparatets maksimum og bruger det meste af tiden på at forberede og efterbehandle. Den sidste række er regnet ud fra Lincolns og ESABs oplysninger om optagen effekt og intermittens.</p>

<h2>Sikring og stikkontakt</h2>
<p>Den høje effekt betyder, at en svejser stiller krav til installationen. Einhell skriver, at deres lille inverter TC-IW 150 skal have en sikring på 16 ampere. Lincoln skriver i manualen til Speedtec 200C, at apparatet skal have en B 16 A-sikring, og at du skal bruge et stik til mere end 16 ampere og en B 25 A-sikring, hvis du vil svejse med maksimal strøm — her trækker apparatet op til 27 ampere.</p>
<p>Har dit værksted eller din garage kun en almindelig gruppe på 10 ampere, vil sikringen slå fra, når du skruer op for strømmen. En elinstallatør kan lægge en særskilt gruppe ind. Brug ikke en lang, tynd forlængerledning; den taber spænding, så lysbuen bliver ustabil, og ledningen bliver varm.</p>
<p>Skal du svejse på en generator, skriver Lincoln, at generatoren skal have en effekt, der er mindst 30 procent større end svejserens optagne effekt.</p>

<h2>Tomgang og ventilator</h2>
<p>Når du ikke svejser, bruger apparatet kun lidt strøm til styring og ventilator. ESAB oplyser et forbrug på 50 W i energisparetilstand (Energy Save Mode) for Rogue-serien. Lader du svejseren stå tændt en hel eftermiddag, er det altså få hundrede watt-timer — men det er stadig en god vane at slukke på hovedafbryderen, når du holder pause.</p>
<p>På mange apparater kører ventilatoren videre efter svejsningen for at køle apparatet. Sluk ikke for strømmen, mens den kører efter en lang svejsning ved høj strøm; lad den køle færdig.</p>

<h2>Hvornår bruger svejseren strøm?</h2>
<p>Svejsning følger arbejdet, ikke elprisen, og forbruget kan ikke flyttes til natten. Vil du spare, er det de dyreste timer fra kl. 17 til 21, hvor nettariffen er højest, du kan undgå, hvis du har et større projekt. Boksen længere oppe på siden viser, hvordan prisen fordeler sig over dagen i dag. For de fleste hobbysvejsere er forskellen få kroner om året — og så er det vigtigere, at du svejser, når du er udhvilet og har lys nok.</p>

<h2>MMA, MIG/MAG og TIG</h2>
<ul>
<li><strong>MMA (elektrodesvejsning)</strong> er det enkleste: en elektrode i en tang og et stelkabel. Små invertere til MMA er lette og bruger relativt lidt strøm, men du skal skifte elektrode ofte.</li>
<li><strong>MIG/MAG</strong> fører en tråd frem gennem pistolen sammen med en beskyttelsesgas. Det giver længere, sammenhængende svejsninger, så lysbuen brænder en større del af tiden — og forbruget pr. time bliver højere.</li>
<li><strong>TIG</strong> bruges til tynde plader og rustfrit stål. Strømmen er ofte lavere, og arbejdet går langsommere, så forbruget pr. time er efter vores vurdering typisk lavere end ved MIG/MAG.</li>
</ul>
<p>Svejseren deler værksted med andet elværktøj som <a href="/vinkelsliber/">vinkelsliberen</a>, der bruges til at forberede og slibe svejsningerne, og <a href="/kompressor/">kompressoren</a>. Kør dem ikke på samme gruppe på samme tid, hvis gruppen er lille.</p>

<h2>Sådan holder du forbruget nede</h2>
<ol>
<li>Brug den laveste strøm, der giver en god svejsning.</li>
<li>Forbered emnerne godt, så du svejser rigtigt første gang.</li>
<li>Sluk apparatet, når du holder pause, efter ventilatoren er stoppet.</li>
<li>Brug korte, kraftige kabler og en god stelforbindelse.</li>
<li>Få en særskilt gruppe, hvis sikringen ofte slår fra.</li>
</ol>
<p>Brug beregneren ovenfor til at se, hvad dine svejsetimer koster over et år.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en svejser?",
      answer:
        "En hobbysvejser på 230 V trækker typisk 6-9 kVA ved fuld strøm. ESAB oplyser 6 kVA for Rogue ES 180i PRO og Lincoln 6,2 kVA ved 25 procent intermittens for Speedtec 200C. Pr. time ved bordet er det højst omkring 1,5 kWh.",
    },
    {
      question: "Hvad koster det at svejse en time?",
      answer:
        "Ved fuld strøm og 25 procent intermittens højst omkring 1,5 kWh, svarende til {{kr 1,5}}. Ved almindeligt hobbyarbejde med lavere strøm er det efter vores skøn 0,5-1 kWh, eller {{kr 0,5}}-{{kr 1}}.",
    },
    {
      question: "Hvad betyder intermittens på en svejser?",
      answer:
        "Den andel af en 10-minutters periode, hvor apparatet må svejse ved en bestemt strøm. Ved 60 procent kan du svejse i seks minutter og skal holde pause i fire, forklarer Lincoln.",
    },
    {
      question: "Hvilken sikring skal en svejser have?",
      answer:
        "Små invertere kræver typisk 16 ampere. Lincoln skriver, at Speedtec 200C skal have en B 16 A-sikring og en B 25 A-sikring med et større stik, hvis du vil svejse med maksimal strøm.",
    },
    {
      question: "Bruger en svejser strøm, når den står tændt?",
      answer:
        "Lidt til styring og ventilator. ESAB oplyser 50 W i energisparetilstand for Rogue-serien. Sluk på hovedafbryderen, når du holder længere pause.",
    },
  ],
  relatedSlugs: ["vinkelsliber", "kompressor", "kaedesav", "3d-printer", "varmeblaeser"],
  sources: [
    { name: "ESAB — Rogue ES 150i/180i/180i PRO/200i PRO factsheet (kVA, intermittens, energisparetilstand)", url: "https://cdn.engweld.co.uk/uploads/downloads/products/6433-13933-en-ww-factsheet-main-01-1587567545.pdf" },
    { name: "Lincoln Electric — Speedtec 200C, brugsanvisning IM3049", url: "https://ch-delivery.lincolnelectric.com/api/public/content/6f56692fbd0e40c697386f969f2d0b6d" },
    { name: "Einhell — TC-IW 150 (sikring)", url: "https://www.einhell.ro/en/p/1544170-tc-iw-150/" },
  ],
  calculatorConfig: {
    title: "Beregn svejserens strømforbrug",
    options: [
      { label: "Lille MMA-inverter, tynde elektroder (ca. 0,5 kWh/time)", kwhPerUse: 0.5 },
      { label: "MIG/MAG ved mellem strøm (ca. 1 kWh/time)", kwhPerUse: 1 },
      { label: "Fuld strøm ved 25 % intermittens (ca. 1,5 kWh/time)", kwhPerUse: 1.5 },
    ],
    usageLabel: "Svejsetimer pr. år",
    usageUnit: "timer/år",
    usageMin: 1,
    usageMax: 200,
    usageDefault: 15,
    usageStep: 1,
    per: "time",
    perYear: 1,
  },
  publishDate: "2026-12-16",
  updated: "2026-11-22",
};

export default svejser;
