import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/refrigeratingappliances2019/${reg}`;

const gorenjeNrk418: ModelData = {
  slug: "gorenje-nrk418",
  parent: "koeleskab",
  brand: "Gorenje",
  name: "Gorenje NRK418 køle-/fryseskab",
  released: "2024-10",
  synonyms: [
    "gorenje nrk418",
    "gorenje nrk418ecw4",
    "gorenje nrk418ecs4",
    "gorenje nrk418dcw4",
    "gorenje nrk418eew4",
    "gorenje nrki418ep1",
    "gorenje køle-fryseskab 55 cm",
    "gorenje kombiskab",
  ],
  title: "Gorenje NRK418 strømforbrug (2026) → kWh om året og pris",
  description:
    "Gorenje NRK418 køle-/fryseskab i 55 cm bredde: energimærkets kWh om året for ECW4, DCW4, EEW4, DEW4 og den integrerede NRKI418EP1, og hvad klassen betyder.",
  intro:
    "NRK418 findes i flere generationer med samme størrelse, men energimærket spænder fra 172 til 226 kWh om året — bogstavet efter 418 afslører klassen.",
  content: `<h2>Hvor meget strøm bruger Gorenje NRK418?</h2>
<p>Gorenje NRK418 er et fritstående køle-/fryseskab med fryseren i bunden, 55 cm bredt og omkring 180 cm højt. Navnet dækker flere udgaver, og i EU's produktdatabase EPREL har hver sit energimærke. Den hvide NRK418ECW4 og den grå NRK418ECS4 fra 2021 har energiklasse E og bruger 226 kWh om året. NRK418DCW4 fra 2024 har samme rumfang på 256 liter, men klasse D og 184 kWh om året. Den nyere generation med 255 liter findes som NRK418EEW4 i klasse E med 215 kWh og som NRK418DEW4 fra 2026 i klasse D med 172 kWh.</p>
<p>226 kWh om året er omkring 0,62 kWh i døgnet, svarende til {{kr 226}} om året ved månedens elpris. Skabet med klasse D og 184 kWh koster {{kr 184}}, og forskellen på samme størrelse skab er 42 kWh om året, svarende til {{kr 42}}.</p>
<table>
<thead><tr><th>Model</th><th>Fra</th><th>Køl / frys</th><th>Klasse</th><th>kWh om året</th><th>Støj</th></tr></thead>
<tbody>
<tr><td>NRK418ECW4 (hvid)</td><td>2021</td><td>171 / 85 l</td><td>E</td><td>226</td><td>37 dB</td></tr>
<tr><td>NRK418ECS4 (grå)</td><td>2021</td><td>171 / 85 l</td><td>E</td><td>226</td><td>37 dB</td></tr>
<tr><td>NRK418DCW4</td><td>2024</td><td>171 / 85 l</td><td>D</td><td>184</td><td>36 dB</td></tr>
<tr><td>NRK418EEW4</td><td>2023</td><td>188 / 67 l</td><td>E</td><td>215</td><td>38 dB</td></tr>
<tr><td>NRK418DEW4</td><td>2026</td><td>188 / 67 l</td><td>D</td><td>172</td><td>36 dB</td></tr>
<tr><td>NRKI418EP1 (integreret)</td><td>2022</td><td>183 / 63 l</td><td>E</td><td>217</td><td>38 dB</td></tr>
</tbody>
</table>

<h2>D eller E: det bogstav, der betyder noget</h2>
<p>Gorenje har bygget energiklassen ind i modelnummeret: bogstavet lige efter 418 er klassen. Det er den hurtigste vej til at se, hvad skabet bruger, når to udgaver står side om side og ligner hinanden. Mellem E og D sparer du 42–43 kWh om året i begge generationer. Over ti år, som et køleskab let holder, er det over 400 kWh. Klasse D har også et energieffektivitetsindeks på 80 mod 98–100 for E-udgaverne i EPREL.</p>
<p>D-udgaverne er desuden oplyst til klimaklasse T, altså rum op til 43 °C, mens E-udgaverne er oplyst til 10–38 °C. Det betyder noget, hvis skabet skal stå i et varmt bryggers eller et køkken med sol om eftermiddagen.</p>

<h2>To generationer: mere køl, mindre frys</h2>
<p>De to generationer har næsten samme samlede rumfang, men fordeler det forskelligt. ECW4, ECS4 og DCW4 har 171 liter køl og 85 liter frys og er 182,4 cm høje. EEW4 og DEW4 har 188 liter køl og 67 liter frys og er 179,7 cm høje. Fryser du meget, passer den ældre fordeling bedre; handler du ind flere gange om ugen og fryser mindre, giver den nye mere hyldeplads til friske varer.</p>
<p>Den integrerede NRKI418EP1 er bygget til et køkkenskab, er 54 cm bred og bruger 217 kWh om året i klasse E. Den er oplyst til rum på 16–38 °C, så den hører til i et opvarmet køkken.</p>

<h2>NRK418 mod andre kombiskabe</h2>
<p>55 cm bredde er smallere end de fleste kombiskabe, og det koster lidt i effektivitet pr. liter. ECW4 bruger omkring 88 kWh om året pr. 100 liter. <a href="/koeleskab/bosch-kge36/">Bosch KGE36</a> er 60 cm bred, har 308 liter og bruger 149 kWh om året i klasse C — 77 kWh mindre end ECW4 for 52 liter mere. Er pladsen der, er et 60 cm-skab i en bedre klasse den sikreste vej til en lavere regning.</p>
<p>Har du brug for meget fryseplads, kan et rent køleskab og et separat fryseskab være et alternativ; se fx <a href="/fryser/bosch-gsn58/">Bosch GSN58</a>. Det koster mere i strøm samlet, men giver langt mere frys.</p>

<h2>Hvornår er det billigst?</h2>
<p>Et køle-/fryseskab kører hele døgnet og kan ikke flyttes til billige timer, så prisen pr. år er energimærkets kWh gange din gennemsnitlige elpris. Det, du kan påvirke, er hvor meget kompressoren arbejder: hold dørene lukkede, lad mad køle af, før den sættes ind, og giv skabet luft bagved. Energimærket er målt ved 25 °C i rummet; et køkken på 20–22 °C giver lidt mindre. Se <a href="/koeleskab/">hvad køleskabe bruger generelt</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Vælg en D-udgave (DCW4 eller DEW4) frem for E, når du køber nyt.</li>
<li>Stil køl på 4–5 °C og frys på −18 °C — koldere koster mere.</li>
<li>Afrim fryseren, hvis der sætter sig is; is isolerer og får kompressoren til at køre længere.</li>
<li>Placér skabet væk fra komfur, opvaskemaskine og direkte sol.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger Gorenje NRK418ECW4?",
      answer: "226 kWh om året i energiklasse E ifølge EPREL, svarende til {{kr 226}} om året ved månedens elpris. Skabet har 171 liter køl og 85 liter frys.",
    },
    {
      question: "Hvad er forskellen på NRK418ECW4 og NRK418DCW4?",
      answer: "Samme størrelse og indretning, men DCW4 har energiklasse D og 184 kWh om året mod 226 kWh for ECW4 — 42 kWh mindre, svarende til {{kr 42}} om året.",
    },
    {
      question: "Hvor bredt er Gorenje NRK418?",
      answer: "55 cm ifølge EPREL. Højden er 182,4 cm for ECW4, ECS4 og DCW4 og 179,7 cm for EEW4 og DEW4.",
    },
    {
      question: "Hvilken NRK418 bruger mindst strøm?",
      answer: "Af udgaverne på siden NRK418DEW4 fra 2026 med 172 kWh om året i klasse D ifølge EPREL.",
    },
    {
      question: "Kan Gorenje NRK418 stå i et uopvarmet rum?",
      answer: "Alle fritstående udgaver er oplyst til rum ned til 10 °C. E-udgaverne tåler op til 38 °C, D-udgaverne op til 43 °C.",
    },
  ],
  sources: [
    { name: "EPREL — Gorenje NRK418ECW4, EU's energimærke", url: eprel("738737") },
    { name: "EPREL — Gorenje NRK418ECS4, EU's energimærke", url: eprel("738736") },
    { name: "EPREL — Gorenje NRK418DCW4, EU's energimærke", url: eprel("2168842") },
    { name: "EPREL — Gorenje NRK418EEW4, EU's energimærke", url: eprel("1735454") },
    { name: "EPREL — Gorenje NRK418DEW4, EU's energimærke", url: eprel("2751705") },
    { name: "EPREL — Gorenje NRKI418EP1, EU's energimærke", url: eprel("1394683") },
    { name: "EPREL — Bosch KGE36AWCA, EU's energimærke", url: eprel("260377") },
  ],
  variants: [
    { name: "256 l, hvid (NRK418ECW4)", watts: {}, annualKwh: 226, energyClass: "E", source: 0 },
    { name: "256 l, grå (NRK418ECS4)", watts: {}, annualKwh: 226, energyClass: "E", source: 1 },
    { name: "256 l, klasse D (NRK418DCW4)", watts: {}, annualKwh: 184, energyClass: "D", source: 2 },
    { name: "255 l (NRK418EEW4)", watts: {}, annualKwh: 215, energyClass: "E", source: 3 },
    { name: "255 l, klasse D (NRK418DEW4)", watts: {}, annualKwh: 172, energyClass: "D", source: 4 },
    { name: "246 l, integreret (NRKI418EP1)", watts: {}, annualKwh: 217, energyClass: "E", source: 5 },
  ],
  publishDate: "2026-12-23",
  updated: "2026-11-23",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærkets årsforbrug i kWh, som Gorenje har oplyst til EU-databasen EPREL: målt ved 25 °C i rummet med lukkede døre og termostaten på standard. Kilderne står nederst på siden.",
};

export default gorenjeNrk418;
