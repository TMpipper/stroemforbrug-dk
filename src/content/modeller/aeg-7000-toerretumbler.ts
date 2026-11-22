import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/tumbledryers20232534/${reg}`;

const aeg7000Toerretumbler: ModelData = {
  slug: "aeg-7000-toerretumbler",
  parent: "varmepumpe-toerretumbler",
  brand: "AEG",
  name: "AEG 7000 tørretumbler",
  released: "2025-03",
  synonyms: [
    "aeg 7000 tørretumbler",
    "aeg tørretumbler strømforbrug",
    "aeg varmepumpe tørretumbler",
    "tr724p84p",
    "tr734e95e",
    "tr702k84l",
    "tr724p85p",
    "aeg 7000 serie tørretumbler kwh",
  ],
  title: "AEG 7000 tørretumbler strømforbrug (2026) → kWh og pris",
  description:
    "AEG 7000 varmepumpetørretumblere i 8 og 9 kg: energimærkets kWh pr. tørring, pris om året, og hvorfor forbruget spænder fra klasse C til E i samme serie.",
  intro:
    "Inden for AEG's 7000-serie bruger den mest strømkrævende tumbler en fjerdedel mere end den mest sparsomme — og den største på 9 kg er blandt de mest sparsomme.",
  content: `<h2>Hvor meget strøm bruger en AEG 7000 tørretumbler?</h2>
<p>AEG's 7000-serie er varmepumpetørretumblere, og hver model har sit eget energimærke i EU's produktdatabase EPREL. Siden 2025 bruger tørretumblere et nyt EU-energimærke, hvor forbruget står i kWh pr. 100 tørringer på eco-programmet til skabstørt bomuld, vægtet mellem fuld og halv fyldning. For de fire 7000-modeller på siden spænder det fra 102 til 128 kWh pr. 100 tørringer, altså 1,02–1,28 kWh pr. tørring.</p>
<p>Med tre tørringer om ugen bliver det 159–200 kWh om året, svarende til {{kr 159-200}}. En kondens- eller aftrækstumbler uden varmepumpe varmer luften med et elektrisk varmelegeme og bruger markant mere; læs mere om <a href="/toerretumbler/">tumblere uden varmepumpe</a>.</p>

<h2>Fra klasse E til C i samme serie</h2>
<table>
<thead><tr><th>Model</th><th>Kapacitet</th><th>kWh pr. 100 tørringer</th><th>Klasse</th><th>Program, fuld fyldning</th><th>Kondensering</th></tr></thead>
<tbody>
<tr><td>TR702K84L</td><td>8 kg</td><td>128</td><td>E</td><td>2:58</td><td>81 %</td></tr>
<tr><td>TR724P84P</td><td>8 kg</td><td>119</td><td>D</td><td>2:49</td><td>82 %</td></tr>
<tr><td>TR724P85P</td><td>8 kg</td><td>102</td><td>C</td><td>2:59</td><td>85 %</td></tr>
<tr><td>TR734E95E</td><td>9 kg</td><td>103</td><td>C</td><td>3:39</td><td>91 %</td></tr>
</tbody>
</table>
<p>Den ældste af de fire, TR702K84L, som AEG registrerede i 2023, bruger 26 kWh mere pr. 100 tørringer end den nyeste, TR724P85P fra juli 2026. Med tre tørringer om ugen er det omkring 41 kWh om året, svarende til {{kr 41}}. Over en tørretumblers levetid på ti år eller mere bliver det til en mærkbar sum. Det er værd at bemærke, at TR724P84P og TR724P85P har næsten samme modelnummer, men forskellig energiklasse: den nyere udgave bruger 17 kWh mindre pr. 100 tørringer.</p>

<h2>9 kg uden merforbrug</h2>
<p>Den største model, TR734E95E på 9 kg, bruger 103 kWh pr. 100 tørringer — næsten det samme som den mest sparsomme 8 kg-model og mindre end de to andre. Pr. kg tøj er den altså den mest sparsomme af de fire. Prisen er tiden: eco-programmet tager 3 timer og 39 minutter ved fuld fyldning mod knap 3 timer for 8 kg-modellerne. TR734E95E har også den bedste kondenseringsevne på 91 %, så mindre fugt slipper ud i rummet, og den er den mest stille med 64 dB.</p>
<p>Har I meget vasketøj, er 9 kg-modellen derfor et godt valg for strømmen: én fuld tørring i stedet for to halve sparer både tid og kWh. Energimærkets tal er et gennemsnit af fuld og halv fyldning; en halv fyldning tager 1 time og 38 minutter til 2 timer og 10 minutter, afhængigt af modellen.</p>

<h2>Centrifugér godt, før tøjet kommer i tumbleren</h2>
<p>Det vigtigste for tumblerens forbrug sker i vaskemaskinen. Jo mere vand centrifugeringen fjerner, jo mindre skal tumbleren fjerne, og jo kortere tid kører den. Centrifugeringsklasse A betyder under 45 % restfugt i tøjet og klasse B 45–54 %; på <a href="/vaskemaskine/miele-w1/">Miele W1</a> er det 44,9 % mod 53,9 % ifølge EPREL. Vælg den højeste centrifugering, tøjet kan tåle, før det skal i tumbleren.</p>
<p>Rens også fnugfilteret efter hver tørring og kondensatoren efter AEG's anvisning. Et tilstoppet filter forlænger tørretiden og øger forbruget.</p>

<h2>Hvornår er det billigst at tørre tøj?</h2>
<p>En tørretumbler er let at flytte til billige timer, fordi tøjet kan vente i tromlen. Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21. Alle fire modeller har udskudt start, og ventetiden koster næsten intet: 4 W ifølge EPREL, eller omkring 0,03 kWh på otte timer. Slukket bruger TR724P84P og TR724P85P 0,13 W og de to andre 0,5 W. Se <a href="/elpriser/">dagens timepriser</a>, og læs, <a href="/varmepumpe-toerretumbler/">hvornår tørretumbleren er billigst at bruge</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Brug eco-programmet til bomuld; det er det, energimærket er målt på.</li>
<li>Fyld tumbleren, men ikke over den angivne kapacitet.</li>
<li>Tør let tøj og bomuld hver for sig, så tumbleren ikke kører længe for de tykkeste stykker.</li>
<li>Sammenlign modelnumrene: i 7000-serien er forskellen op til 26 kWh pr. 100 tørringer.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en AEG 7000 tørretumbler pr. tørring?",
      answer:
        "Fra 1,02 kWh (TR724P85P) til 1,28 kWh (TR702K84L) pr. tørring på eco-programmet ifølge energimærket. 9 kg-modellen TR734E95E bruger 1,03 kWh. Det svarer til {{kr 1,02}}–{{kr 1,28}} pr. tørring.",
    },
    {
      question: "Hvad koster en AEG 7000 tørretumbler om året?",
      answer: "Med tre tørringer om ugen bruger den 159–200 kWh om året afhængigt af modellen, svarende til {{kr 159-200}} ved månedens elpris.",
    },
    {
      question: "Hvilken AEG 7000 tørretumbler bruger mindst strøm?",
      answer:
        "Af de fire på siden har TR724P85P (8 kg) og TR734E95E (9 kg) energiklasse C med 102 og 103 kWh pr. 100 tørringer. TR702K84L med klasse E bruger 128 kWh.",
    },
    {
      question: "Er TR724P84P og TR724P85P den samme tumbler?",
      answer:
        "Nej. Begge er 8 kg-varmepumpetumblere, men TR724P84P har energiklasse D og 119 kWh pr. 100 tørringer, mens den nyere TR724P85P har klasse C og 102 kWh ifølge EPREL.",
    },
    {
      question: "Hvornår er det billigst at bruge tørretumbleren?",
      answer: "Typisk om natten og uden for kl. 17–21, hvor nettariffen er højest. Brug udskudt start; ventetiden bruger kun 4 W.",
    },
  ],
  sources: [
    { name: "EPREL — AEG TR702K84L (916099659), EU's energimærke", url: eprel("2162348") },
    { name: "EPREL — AEG TR724P84P (916900347), EU's energimærke", url: eprel("2271846") },
    { name: "EPREL — AEG TR724P85P (916900905), EU's energimærke", url: eprel("2713120") },
    { name: "EPREL — AEG TR734E95E (916900036), EU's energimærke", url: eprel("2197488") },
  ],
  variants: [
    { name: "8 kg (TR702K84L)", watts: { off: 0.5 }, kwhPer100Cycles: 128, energyClass: "E", source: 0 },
    { name: "8 kg (TR724P84P)", watts: { off: 0.13 }, kwhPer100Cycles: 119, energyClass: "D", source: 1 },
    { name: "8 kg (TR724P85P)", watts: { off: 0.13 }, kwhPer100Cycles: 102, energyClass: "C", source: 2 },
    { name: "9 kg (TR734E95E)", watts: { off: 0.5 }, kwhPer100Cycles: 103, energyClass: "C", source: 3 },
  ],
  publishDate: "2026-11-28",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Det nye energimærke for tørretumblere (fra 2025) måler forbruget på eco-programmet til skabstørt bomuld, vægtet mellem fuld og halv fyldning; slukket er effekten i watt. Kilderne står nederst på siden.",
};

export default aeg7000Toerretumbler;
