import type { ApplianceData } from "@/lib/types";

const varmekabel: ApplianceData = {
  slug: "varmekabel",
  meta: {
    category: "varme",
    usage: "per-hour",
    hasEuLabel: false,
    shiftable: false,
    motif: "radiator",
    synonyms: [
      "varmekabel",
      "frostsikring",
      "frostsikring af vandrør",
      "varmekabel til vandrør",
      "varmekabel til tagrende",
      "tagrendevarme",
      "selvregulerende varmekabel",
      "rørvarmekabel",
      "devi varmekabel",
    ],
  },
  name: "Varmekabel",
  article: "et",
  title: "Varmekabel strømforbrug (2026) → Frostsikring af rør og tag",
  description:
    "Et varmekabel bruger 6-33 W pr. meter på et vandrør og 20-30 W pr. meter i en tagrende. Se kWh pr. vinter, hvad termostaten sparer, og hvor strømmen går hen.",
  heading: "Strømforbrug for et varmekabel: watt, pris i timen og dyreste timer",
  quickAnswer:
    "Et varmekabel bruger sin effekt pr. meter gange længden: 10 meter rørkabel på 10 W pr. meter bruger 0,1 kWh i timen, og en tagrende med nedløbsrør på 540 W bruger 0,54 kWh i timen, svarende til {{kr 0,54}} ved {{pris_kwh}}. Med en styring, der kun tænder ved frost og fugt, kørte tagrendekablet i DEVI's måling fra Salzburg godt 500 timer på en vinter — ca. 300 kWh eller {{kr 300}}. Med en simpel termometerstyring kan det blive fire-fem gange så meget.",
  kwhRange: [20, 2500],
  typicalKwh: 300,
  wattage: 540,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [3.0, 2.8, 1.5, 0.3, 0, 0, 0, 0, 0, 0.4, 1.5, 2.5],
  content: `<h2>Et kabel, der holder frosten ude</h2>
<p>Et varmekabel er en elektrisk ledning, der bliver varm, når der går strøm igennem den. Udendørs og i kolde rum bruges det til to ting: at holde vandrør frostfri, så de ikke sprænger, og at holde tagrender og nedløbsrør fri for is, så smeltevandet kan løbe væk i stedet for at fryse til istapper og skader. Den samme teknik bruges i el-gulvvarme, men det er en anden anvendelse med andre tal; den finder du på siden om <a href="/gulvvarme/">gulvvarme</a>.</p>
<p>DEVI, der blev grundlagt i København i 1942 og siden 2003 har været en del af Danfoss, laver varmekabler til netop de opgaver, og firmaets applikationsmanualer for frostsikring af rør og for is- og snesmeltning på tage er grundlaget for tallene på denne side. Forbruget afhænger af tre ting: hvor mange watt kablet har pr. meter, hvor mange meter der ligger, og — vigtigst — hvor mange timer det er tændt.</p>

<h2>To slags kabler: konstant effekt og selvbegrænsende</h2>
<p>Et kabel med konstant effekt, også kaldet serieresistivt, giver de samme watt pr. meter, uanset hvor koldt det er. DEVI's rørkabler af den type findes med 6 eller 10 W pr. meter, og manualen skriver, at et konstant-watt-kabel på et rør højst må give 10 W pr. meter. Et selvbegrænsende kabel skruer selv ned, når det bliver varmere, og op, når det bliver koldere. DEVI's selvbegrænsende rørkabler er opgivet til 10, 25 eller 33 W pr. meter ved 10 grader.</p>
<table>
<thead><tr><th>Kabel (DEVI)</th><th>Effekt pr. meter</th><th>10 meter i en time</th><th>Pris i timen for 10 meter</th></tr></thead>
<tbody>
<tr><td>DEVIflex 6T, konstant effekt</td><td>6 W</td><td>0,06 kWh</td><td>{{kr 0,06}}</td></tr>
<tr><td>DEVIflex 10T / DEVIpipeguard 10</td><td>10 W</td><td>0,1 kWh</td><td>{{kr 0,1}}</td></tr>
<tr><td>DEVIpipeguard 25, selvbegrænsende</td><td>25 W ved 10 grader</td><td>0,25 kWh</td><td>{{kr 0,25}}</td></tr>
<tr><td>DEVIpipeguard 33, selvbegrænsende</td><td>33 W ved 10 grader</td><td>0,33 kWh</td><td>{{kr 0,33}}</td></tr>
</tbody>
</table>
<p>Selvbegrænsende betyder ikke selvslukkende. DEVI skriver, at en termostat er nødvendig til kabler med konstant effekt og stærkt anbefales til selvbegrænsende kabler for at forhindre energiforbrug i de perioder, hvor der ikke er frost. Et selvbegrænsende kabel uden styring trækker strøm hele vinteren, også på en mild dag.</p>

<h2>Isoleringen bestemmer, hvor mange watt røret kræver</h2>
<p>Kablet skal erstatte det varmetab, røret har gennem isoleringen. DEVI's manual har en tabel over varmetabet pr. meter rør, regnet med en sikkerhedsfaktor på 1,3. For et almindeligt vandrør på ¾ tomme (DN 20) og 25 graders forskel mellem rør og omgivelser ser det sådan ud:</p>
<table>
<thead><tr><th>Isolering på røret</th><th>Varmetab pr. meter</th><th>10 meter rør i et døgn</th><th>Pris pr. døgn</th></tr></thead>
<tbody>
<tr><td>10 mm</td><td>14,7 W</td><td>3,5 kWh</td><td>{{kr 3,5}}</td></tr>
<tr><td>20 mm</td><td>9,0 W</td><td>2,2 kWh</td><td>{{kr 2,2}}</td></tr>
<tr><td>30 mm</td><td>7,0 W</td><td>1,7 kWh</td><td>{{kr 1,7}}</td></tr>
<tr><td>50 mm</td><td>5,3 W</td><td>1,3 kWh</td><td>{{kr 1,3}}</td></tr>
</tbody>
</table>
<p>Kolonnen med døgnet er vores beregning for et døgn, hvor kablet skal dække hele tabet. Tabellen viser, at tyk isolering kan næsten halvere den effekt, kablet skal levere. DEVI anbefaler desuden aluminiumstape under kablet, så varmen fordeles rundt om røret, og at termostatens føler sidder direkte på røret under isoleringen.</p>

<h2>Tagrender: det er styringen, der afgør regningen</h2>
<p>I tagrender og nedløbsrør skal der mere effekt til. DEVI anbefaler kabler på 20-30 W pr. meter, og en tagrende langs et koldt tag kræver normalt 30-40 W pr. meter, et varmt tag 40-50 W — så der lægges ofte to eller tre kabelstrenge. Manualens eget eksempel er en tagrende på 5 meter med 3 meter nedløbsrør og 1 meter ekstra ned i frostfri dybde, med to strenge på 30 W pr. meter: 540 W. Lægges der også kabel på 3,5 m² tagflade, kommer der 1.050 W oveni, i alt 1.590 W.</p>
<p>Hvor mange timer kablet kører, afhænger af styringen. DEVI har målt det i Salzburg i vinteren 2005/06 med tre forskellige styringer. Vi har regnet timerne om til kWh for manualens tagrende på 540 W:</p>
<table>
<thead><tr><th>Styring (DEVI's måling, Salzburg)</th><th>Driftstimer</th><th>kWh ved 540 W</th><th>Pris pr. vinter</th></tr></thead>
<tbody>
<tr><td>Temperatur under +3 grader og fugt (DEVIreg 850)</td><td>535</td><td>ca. 290</td><td>{{kr 290}}</td></tr>
<tr><td>Temperatur mellem +3 og -7 grader (DEVIreg 316)</td><td>2.309</td><td>ca. 1.250</td><td>{{kr 1250}}</td></tr>
<tr><td>Temperatur under +3 grader (DEVIreg 330)</td><td>2.737</td><td>ca. 1.480</td><td>{{kr 1480}}</td></tr>
</tbody>
</table>
<p>Forskellen er stor, fordi en styring med fugtføler slukker på de mange dage med tør frost, hvor der ikke er sne eller is at smelte. DEVI skriver selv, at fugtstyringen kan spare op til 75 procent af driftsudgiften i forhold til en ren temperaturstyring. Et dansk klima er ikke det samme som Salzburgs, så brug tallene som størrelsesorden; mønsteret — at fugtføleren skærer de fleste timer væk — gælder overalt.</p>

<h2>Hvad bruger et varmekabel på en vinter?</h2>
<p>Beregneren tager udgangspunkt i manualens tagrende på 540 W og godt 500 driftstimer, altså en styring med fugtføler. For et frostsikret vandrør er forbruget mindre: 10 meter kabel på 10 W pr. meter, der står tændt i 1.000 timer, bruger 100 kWh, svarende til {{kr 100}}. Hvor mange timer et rørkabel kører, afhænger af, hvor koldt det er, der hvor røret ligger — i et uopvarmet krybekælder kan det være mange, i et skur, der kun fryser i de koldeste uger, få. Vores sæsonprofil lægger forbruget fra november til marts.</p>
<p>Kablet kører, når det er koldt, og kolde vinteraftener er ofte nogle af årets dyreste timer. Strømmen kan ikke flyttes — et vandrør skal holdes frostfrit, også kl. 18 — men en god styring sørger for, at kablet ikke kører i timer, hvor der intet er at beskytte.</p>

<h2>Sådan holder du varmekablets forbrug nede</h2>
<ul>
<li><strong>Altid en termostat</strong> — også på selvbegrænsende kabler, med føleren på røret under isoleringen.</li>
<li><strong>Fugtføler på tagrenden</strong> — den slukker på tørre frostdage; DEVI angiver op til 75 procent besparelse mod ren temperaturstyring.</li>
<li><strong>Tyk isolering</strong> — 30 mm i stedet for 10 mm halverer omtrent det varmetab, kablet skal dække.</li>
<li><strong>Sluk om foråret</strong> — et kabel, der står tændt hen over sommeren uden styring, bruger strøm til ingen nytte.</li>
<li><strong>Tjek installationen</strong> — et kabel, der skal fast tilsluttes, kræver en autoriseret elinstallatør, og effekten skal passe til røret eller tagrenden.</li>
</ul>
<p>Overvejer du varmekabler eller varmefolie som rumvarme, er det en anden sag; et <a href="/infraroedt-varmepanel/">infrarødt varmepanel</a> eller el-gulvvarme bruger langt flere kWh end en frostsikring, fordi de skal varme et helt rum op.</p>`,
  faqs: [
    { question: "Hvor meget strøm bruger et varmekabel til vandrør?", answer: "Typisk 6-10 W pr. meter for et kabel med konstant effekt og 10-33 W for et selvbegrænsende ved 10 grader. 10 meter på 10 W bruger 0,1 kWh i timen, svarende til {{kr 0,1}}. Med termostat kører det kun ved frost." },
    { question: "Hvad koster det at have varmekabel i tagrenden?", answer: "Det afhænger mest af styringen. DEVI's eksempel på 540 W kørte 535 timer med fugtføler og 2.737 timer med ren temperaturstyring i deres måling — ca. 290 kWh mod ca. 1.480 kWh, svarende til {{kr 290}} mod {{kr 1480}}." },
    { question: "Skal et selvregulerende varmekabel have termostat?", answer: "DEVI anbefaler det stærkt. Kablet skruer selv ned, når det er varmt, men slukker ikke, så uden styring bruger det strøm hele vinteren." },
    { question: "Hvor mange watt pr. meter skal et varmekabel i tagrenden have?", answer: "DEVI anbefaler kabler på 20-30 W pr. meter og normalt 30-40 W pr. meter tagrende ved et koldt tag, 40-50 W ved et varmt tag. Det giver ofte to eller tre strenge." },
    { question: "Hvor meget hjælper isolering på et frostsikret rør?", answer: "Meget. Ifølge DEVI's tabel taber et ¾-tommes rør 14,7 W pr. meter med 10 mm isolering og 7,0 W med 30 mm ved 25 graders forskel. Tykkere isolering betyder færre watt og færre kWh." },
  ],
  relatedSlugs: ["gulvvarme", "infraroedt-varmepanel", "cirkulationspumpe", "affugter"],
  sources: [
    { name: "DEVI (Danfoss) — Applikationsmanual: Frostsikring og temperaturvedligeholdelse af rør", url: "https://assets.danfoss.com/documents/189077/AB213486470193da-DK0105.pdf" },
    { name: "DEVI (Danfoss) — Applikationsmanual: Is- og snesmeltningssystem til tage", url: "https://assets.danfoss.com/documents/184259/AB212486469815da-DK0101.pdf" },
  ],
  calculatorConfig: {
    title: "Beregn varmekablets strømforbrug",
    options: [
      { label: "10 m rørkabel, 10 W pr. meter (100 W)", kwhPerUse: 0.1 },
      { label: "20 m rørkabel, 10 W pr. meter (200 W)", kwhPerUse: 0.2 },
      { label: "Tagrende og nedløbsrør, DEVI's eksempel (540 W)", kwhPerUse: 0.54 },
      { label: "Tagrende, nedløbsrør og tagflade, DEVI's eksempel (1.590 W)", kwhPerUse: 1.59 },
    ],
    usageLabel: "Driftstimer pr. vinter",
    usageUnit: "timer/vinter",
    usageMin: 50,
    usageMax: 3000,
    usageDefault: 550,
    usageStep: 50,
    per: "time",
    perYear: 1,
  },
  publishDate: "2026-12-07",
  updated: "2026-11-22",
};

export default varmekabel;
