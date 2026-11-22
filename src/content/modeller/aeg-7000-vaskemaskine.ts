import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/washingmachines2019/${reg}`;

const aeg7000Vaskemaskine: ModelData = {
  slug: "aeg-7000-vaskemaskine",
  parent: "vaskemaskine",
  brand: "AEG",
  name: "AEG 7000 vaskemaskine",
  released: "2022-07",
  synonyms: [
    "aeg 7000 vaskemaskine",
    "aeg prosteam vaskemaskine",
    "aeg 7000 prosteam",
    "lr734ex4e",
    "lr732g86w",
    "lr734e96e",
    "aeg vaskemaskine strømforbrug",
    "aeg 7000 kwh pr vask",
  ],
  title: "AEG 7000 vaskemaskine strømforbrug (2026) → kWh og pris",
  description:
    "AEG 7000-vaskemaskiner fra 8 til 10,5 kg: energimærkets kWh pr. vask på eco 40-60, pris om året, og hvorfor den største ikke er den dyreste pr. kg.",
  intro:
    "Den nyeste 9 kg-udgave bruger 39 kWh pr. 100 vaske, den ældre 49 kWh — samme kapacitet, en femtedel mindre strøm.",
  content: `<h2>Hvor meget strøm bruger en AEG 7000 vaskemaskine?</h2>
<p>AEG's 7000-serie er fritstående vaskemaskiner, hvis modelnumre begynder med LR7; LR734EX4E hedder fx 7000 ProSteam. Hver model har sit eget energimærke i EU's produktdatabase EPREL. De fire modeller på siden har alle energiklasse A, men forbruget på eco 40-60-programmet spænder fra 39 til 52 kWh pr. 100 vaske, altså 0,39–0,52 kWh pr. vask. Med fem vaske om ugen bliver det 101–135 kWh om året, svarende til {{kr 101-135}}.</p>
<p>LR734EX4E på 10,5 kg bruger 52 kWh pr. 100 vaske, og LR732G86W på 8 kg 42 kWh. Fra august 2026 findes også LR734E94EQ på 9 kg med 39 kWh — den mest sparsomme af de fire.</p>

<h2>Modellerne side om side</h2>
<table>
<thead><tr><th>Model</th><th>Kapacitet</th><th>kWh pr. 100 vaske</th><th>Centrifugering</th><th>Restfugt</th><th>Vand pr. vask</th><th>Program (fuld)</th></tr></thead>
<tbody>
<tr><td>LR732G86W</td><td>8 kg</td><td>42</td><td>1.600 o/min, klasse A</td><td>44,9 %</td><td>42 l</td><td>3:35</td></tr>
<tr><td>LR734E96E</td><td>9 kg</td><td>49</td><td>1.551 o/min, klasse B</td><td>52,8 %</td><td>46 l</td><td>3:40</td></tr>
<tr><td>LR734E94EQ</td><td>9 kg</td><td>39</td><td>1.351 o/min, klasse B</td><td>53,9 %</td><td>45 l</td><td>3:48</td></tr>
<tr><td>LR734EX4E</td><td>10,5 kg</td><td>52</td><td>1.351 o/min, klasse B</td><td>53,9 %</td><td>49 l</td><td>3:59</td></tr>
</tbody>
</table>
<p>LR734EX4E bruger mest pr. vask, men vasker også mest tøj. Pr. kg kapacitet er den på niveau med 8 kg-modellen: omkring 0,05 kWh pr. kg for begge. Har I meget vasketøj, kan den store tromle spare jer for vaske. Vasker I mest små maskiner, er en mindre model bedre — energimærket er et gennemsnit af fuld, halv og kvart fyldning, så en stor maskine, der altid kører halvfyldt, bruger mere pr. kg tøj.</p>
<p>De to 9 kg-modeller er det tydeligste eksempel på, at det betaler sig at sammenligne modelnumre: LR734E94EQ bruger 10 kWh mindre pr. 100 vaske end LR734E96E. Med fem vaske om ugen er det 26 kWh om året, svarende til {{kr 26}}.</p>

<h2>Lav temperatur, lang tid</h2>
<p>Eco 40-60 vasker tøj, der normalt tåler 40 eller 60 grader, men vandet bliver sjældent så varmt. EPREL oplyser den højeste temperatur ved fuld fyldning: 31 °C i LR732G86W, 35 °C i de to 9 kg-modeller og 38 °C i LR734EX4E. Programmet tager i stedet tid — 3 timer og 35 minutter til knap 4 timer — og vasker rent ved lavere temperatur. Det er opvarmningen af vandet, der koster strøm, og det er derfor, eco 40-60 er det billigste program at bruge til hverdagsvasken.</p>
<p>Varmere programmer bruger mere, og det står ikke på energimærket. Brugsanvisningen skal efter EU's regler oplyse vejledende forbrug for de vigtigste programmer, så slå tallene op dér, hvis du ofte vasker ved 60 grader eller mere.</p>

<h2>Centrifugering og tørretumbler</h2>
<p>LR732G86W centrifugerer med 1.600 omdrejninger og har centrifugeringsklasse A: tøjet kommer ud med 44,9 % restfugt mod 52,8–53,9 % for de andre tre. Bruger du <a href="/varmepumpe-toerretumbler/">tørretumbler</a>, er det en reel fordel, fordi tumbleren skal fjerne mindre vand og kører kortere tid. Har du allerede en af de andre, så vælg den højeste centrifugering, tøjet tåler, før det skal i tumbleren.</p>

<h2>AEG 7000 sammenlignet med Bosch og Miele</h2>
<p>Den 9 kg <a href="/vaskemaskine/bosch-serie-6/">Bosch Serie 6</a> (WGG244ZTSN) bruger 49 kWh pr. 100 vaske — det samme som AEG LR734E96E, men 10 kWh mere end den nye LR734E94EQ. <a href="/vaskemaskine/miele-w1/">Miele W1</a> spænder fra 29 til 43 kWh, så Mieles mest sparsomme model bruger mindre end alle fire AEG-modeller. Forskellene er små i kroner om året, men de løber op over en vaskemaskines levetid på ti år eller mere.</p>

<h2>Hvornår er det billigst at vaske?</h2>
<p>Vasken er et af de nemmeste apparater at flytte til billige timer. Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21. Alle fire modeller har udskudt start, og ventetiden koster næsten intet: 4 W ifølge EPREL, altså omkring 0,03 kWh på otte timer. Slukket bruger de 0,5 W. LR734E94EQ kan kobles på nettet og bruger 2 W i netværksforbundet standby. Se <a href="/elpriser/">dagens timepriser</a>, og læs, <a href="/vaskemaskine/">hvornår vaskemaskinen er billigst at bruge</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Brug eco 40-60 til hverdagsvasken; det er det program, mærkets tal gælder for.</li>
<li>Fyld maskinen, men ikke over kapaciteten.</li>
<li>Flyt vasken væk fra kl. 17–21 med udskudt start.</li>
<li>Sammenlign modelnumre: inden for 7000-serien er forskellen op til 13 kWh pr. 100 vaske.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger AEG LR734EX4E pr. vask?",
      answer: "0,52 kWh pr. vask på eco 40-60-programmet ifølge energimærket (52 kWh pr. 100 vaske). Det svarer til {{kr 0,52}} pr. vask ved månedens elpris.",
    },
    {
      question: "Hvad koster en AEG 7000 vaskemaskine om året?",
      answer: "Med fem vaske om ugen bruger den 101–135 kWh om året afhængigt af modellen, svarende til {{kr 101-135}} ved månedens elpris.",
    },
    {
      question: "Hvilken AEG 7000 vaskemaskine bruger mindst strøm?",
      answer: "Af de fire modeller på siden bruger LR734E94EQ på 9 kg mindst: 39 kWh pr. 100 vaske. Den ældre LR734E96E med samme kapacitet bruger 49 kWh.",
    },
    {
      question: "Hvorfor tager AEG's eco-program næsten fire timer?",
      answer: "Fordi det vasker ved lav temperatur — 31–38 °C ved fuld fyldning ifølge EPREL — og bruger tiden i stedet for varmen. Det er opvarmningen af vandet, der koster strøm.",
    },
    {
      question: "Hvornår er det billigst at vaske?",
      answer: "Typisk om natten og uden for kl. 17–21, hvor nettariffen er højest. Med udskudt start kan du fylde maskinen om aftenen; ventetiden bruger kun 4 W.",
    },
  ],
  sources: [
    { name: "EPREL — AEG LR732G86W (8 kg), EU's energimærke", url: eprel("1189619") },
    { name: "EPREL — AEG LR734E96E (9 kg), EU's energimærke", url: eprel("1541224") },
    { name: "EPREL — AEG LR734E94EQ (9 kg, 2026), EU's energimærke", url: eprel("2714856") },
    { name: "EPREL — AEG LR734EX4E (10,5 kg), EU's energimærke", url: eprel("2004740") },
    { name: "EPREL — Bosch WGG244ZTSN (Serie 6, 9 kg), EU's energimærke", url: eprel("1705908") },
  ],
  variants: [
    { name: "8 kg (LR732G86W)", watts: { off: 0.5 }, kwhPer100Cycles: 42, energyClass: "A", source: 0 },
    { name: "9 kg (LR734E96E)", watts: { off: 0.5 }, kwhPer100Cycles: 49, energyClass: "A", source: 1 },
    { name: "9 kg (LR734E94EQ)", watts: { off: 0.5 }, kwhPer100Cycles: 39, energyClass: "A", source: 2 },
    { name: "10,5 kg (LR734EX4E)", watts: { off: 0.5 }, kwhPer100Cycles: 52, energyClass: "A", source: 3 },
  ],
  publishDate: "2026-12-02",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærket måler forbruget på eco 40-60-programmet som et vægtet gennemsnit af fuld, halv og kvart fyldning; slukket er effekten i watt. Kilderne står nederst på siden.",
};

export default aeg7000Vaskemaskine;
