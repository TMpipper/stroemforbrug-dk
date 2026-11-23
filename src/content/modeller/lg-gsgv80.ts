import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/refrigeratingappliances2019/${reg}`;

const lgGsgv80: ModelData = {
  slug: "lg-gsgv80",
  parent: "koeleskab",
  brand: "LG",
  name: "LG GSGV80 amerikanerkøleskab",
  released: "2023-07",
  synonyms: [
    "lg gsgv80",
    "lg gsgv80epll",
    "lg gsgv80epld",
    "lg gsgv80pyll",
    "lg gsgv80pyld",
    "lg amerikanerkøleskab",
    "lg side by side køleskab",
    "lg instaview amerikanerkøleskab",
  ],
  title: "LG GSGV80 amerikanerkøleskab strømforbrug (2026) → kWh",
  description:
    "LG GSGV80 amerikanerkøleskab på 635 liter: energimærkets kWh om året for EPLL, EPLD, PYLL og PYLD i klasse D og E, pris om året og mod Samsung RS70F.",
  intro:
    "Alle GSGV80-udgaver er det samme side by side-skab på 635 liter; energimærket deler dem i to: 280 kWh om året i klasse D og 350 kWh i klasse E.",
  content: `<h2>Hvor meget strøm bruger LG GSGV80?</h2>
<p>LG GSGV80 er et amerikanerkøleskab med køl og frys side om side, 179 cm højt, 91,3 cm bredt og 73,5 cm dybt. Det samlede rumfang er 635 liter: 416 liter køl og 190 liter firestjernet frys, plus to mindre rum med andre temperaturer. Skabet findes i flere udgaver, og i EU's produktdatabase EPREL har hver sit energimærke. GSGV80EPLL og GSGV80PYLL har energiklasse E og bruger 350 kWh om året. GSGV80EPLD og GSGV80PYLD har energiklasse D og bruger 280 kWh om året.</p>
<p>350 kWh om året er omkring 0,96 kWh i døgnet, svarende til {{kr 350}} om året ved månedens elpris. D-udgaven bruger 70 kWh mindre, svarende til {{kr 70}} om året — over ti år 700 kWh for det samme skab.</p>
<table>
<thead><tr><th>Model</th><th>Klasse</th><th>kWh om året</th><th>Energiindeks</th><th>Støj</th></tr></thead>
<tbody>
<tr><td>GSGV80EPLL</td><td>E</td><td>350</td><td>100</td><td>36 dB</td></tr>
<tr><td>GSGV80PYLL</td><td>E</td><td>350</td><td>100</td><td>36 dB</td></tr>
<tr><td>GSGV80EPLD</td><td>D</td><td>280</td><td>80</td><td>35 dB</td></tr>
<tr><td>GSGV80PYLD</td><td>D</td><td>280</td><td>80</td><td>35 dB</td></tr>
</tbody>
</table>

<h2>LL eller LD: tjek de sidste bogstaver</h2>
<p>Udgaverne ser ens ud, men slutbogstaverne afslører klassen: modellerne på LL har klasse E, modellerne på LD klasse D. Begge er registreret i EPREL i 2023 med samme mål og indretning. D-udgaven er også lidt mere stille med 35 dB i støjklasse B mod 36 dB i klasse C. Står du i en butik med to næsten ens skabe, er de sidste to bogstaver det, der afgør den årlige regning.</p>
<p>LG har oplyst klimaklasse T til EPREL, altså rum mellem 16 og 43 °C. Skabet hører hjemme i et opvarmet køkken, ikke i en kold garage eller et uopvarmet bryggers.</p>

<h2>Amerikanerkøleskab koster mere end et kombiskab</h2>
<p>Et amerikanerkøleskab bruger typisk mere strøm end et almindeligt køle-/fryseskab, fordi det er større og har mere fryseplads. GSGV80 i klasse E bruger omkring 55 kWh om året pr. 100 liter. <a href="/koeleskab/bosch-kge36/">Bosch KGE36</a> på 308 liter bruger 149 kWh i klasse C, omkring 48 kWh pr. 100 liter. To KGE36 ved siden af hinanden giver 616 liter for 298 kWh om året, 52 kWh mindre end GSGV80EPLL og 18 kWh mere end GSGV80EPLD.</p>
<p>Ser du på andre amerikanerkøleskabe, ligger GSGV80 tæt på <a href="/koeleskab/samsung-rs70f/">Samsung RS70F</a>. RS70F65KEF på 640 liter bruger 349 kWh i klasse E, og RS70F65KDF bruger 279 kWh i klasse D — næsten de samme tal som LG's to klasser. RS70F findes dog også i klasse B: RS70F66KBF på 634 liter bruger 180 kWh, 100 kWh mindre om året end GSGV80's D-udgave, svarende til {{kr 100}}.</p>

<h2>Hvad energimærket forudsætter</h2>
<p>Energimærkets årstal er målt ved 25 °C i rummet med lukkede døre og termostaten på standard. I praksis åbnes et amerikanerkøleskab mange gange om dagen, og hver gang slipper kold luft ud. Et køkken på 20–22 °C trækker forbruget lidt ned, et varmt køkken med sol op. Skabet har brug for luft omkring sig til at komme af med varmen; står det trykket ind i et skabsarrangement uden luft bagved, arbejder kompressoren mere.</p>

<p>Med 190 liter frys erstatter et amerikanerkøleskab for mange en separat fryser. Har du i forvejen en kummefryser i kælderen, kan det betale sig at regne de to løsninger sammen: et mindre kombiskab plus fryseren kan bruge mere eller mindre end ét stort skab, alt efter klasserne. Læg mærkernes kWh sammen, og sammenlign med det skab, du overvejer. Overvej også, om du har brug for så meget køl — 416 liter er meget for en lille husstand, og tomme hylder skal også holdes kolde.</p>

<h2>Hvornår er det billigst?</h2>
<p>Køleskabet kører hele døgnet og kan ikke flyttes til billige timer, så prisen er mærkets kWh gange din gennemsnitlige elpris. Det, du kan styre, er hvor meget det arbejder: hold dørene lukket, lad varm mad køle af først, og hold øje med temperaturen. Se <a href="/koeleskab/">hvad køleskabe bruger generelt</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Vælg en LD-udgave (klasse D) frem for LL (klasse E).</li>
<li>Stil køl på 4–5 °C og frys på −18 °C.</li>
<li>Giv skabet de afstande til væg og skabe, LG angiver i brugsanvisningen.</li>
<li>Rengør bagsiden eller bundristen for støv en gang om året.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger LG GSGV80EPLL?",
      answer: "350 kWh om året i energiklasse E ifølge EPREL, omkring 0,96 kWh i døgnet. Det svarer til {{kr 350}} om året ved månedens elpris.",
    },
    {
      question: "Hvad er forskellen på GSGV80EPLL og GSGV80EPLD?",
      answer: "Samme skab på 635 liter, men EPLD har energiklasse D og 280 kWh om året, mens EPLL har klasse E og 350 kWh. Forskellen er 70 kWh om året, svarende til {{kr 70}}.",
    },
    {
      question: "Hvor stort er LG GSGV80?",
      answer: "635 liter i alt med 416 liter køl og 190 liter frys, 179 cm højt, 91,3 cm bredt og 73,5 cm dybt ifølge EPREL.",
    },
    {
      question: "Bruger LG GSGV80 mere strøm end Samsung RS70F?",
      answer:
        "I samme klasse næsten det samme: 350 mod 349 kWh i klasse E og 280 mod 279 kWh i klasse D. RS70F findes også i klasse B med 180 kWh om året.",
    },
    {
      question: "Kan LG GSGV80 stå i en garage?",
      answer: "Kun hvis temperaturen holder sig mellem 16 og 43 °C. Det er klimaklasse T, som LG har oplyst til EPREL.",
    },
  ],
  sources: [
    { name: "EPREL — LG GSGV80EPLL, EU's energimærke", url: eprel("1621201") },
    { name: "EPREL — LG GSGV80PYLL, EU's energimærke", url: eprel("1621198") },
    { name: "EPREL — LG GSGV80EPLD, EU's energimærke", url: eprel("1562722") },
    { name: "EPREL — LG GSGV80PYLD, EU's energimærke", url: eprel("1562723") },
    { name: "EPREL — Samsung RS70F66KBF, EU's energimærke", url: eprel("2244093") },
    { name: "EPREL — Bosch KGE36AWCA, EU's energimærke", url: eprel("260377") },
  ],
  variants: [
    { name: "635 l, klasse E (GSGV80EPLL)", watts: {}, annualKwh: 350, energyClass: "E", source: 0 },
    { name: "635 l, klasse E (GSGV80PYLL)", watts: {}, annualKwh: 350, energyClass: "E", source: 1 },
    { name: "635 l, klasse D (GSGV80EPLD)", watts: {}, annualKwh: 280, energyClass: "D", source: 2 },
    { name: "635 l, klasse D (GSGV80PYLD)", watts: {}, annualKwh: 280, energyClass: "D", source: 3 },
  ],
  publishDate: "2026-12-25",
  updated: "2026-11-23",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærkets årsforbrug i kWh, som LG har oplyst til EU-databasen EPREL: målt ved 25 °C i rummet med lukkede døre og termostaten på standard. Kilderne står nederst på siden.",
};

export default lgGsgv80;
