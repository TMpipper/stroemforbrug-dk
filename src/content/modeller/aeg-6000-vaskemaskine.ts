import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/washingmachines2019/${reg}`;

const aeg6000Vaskemaskine: ModelData = {
  slug: "aeg-6000-vaskemaskine",
  parent: "vaskemaskine",
  brand: "AEG",
  name: "AEG 6000 ProSense vaskemaskine",
  released: "2022-08",
  synonyms: [
    "aeg 6000 vaskemaskine",
    "aeg 6000 prosense",
    "aeg prosense vaskemaskine",
    "aeg lr624p14a",
    "aeg lr624p14q",
    "aeg lr624px4q",
    "aeg lr624p94p",
    "aeg vaskemaskine 10 kg",
  ],
  title: "AEG 6000 vaskemaskine strømforbrug (2026) → kWh pr. vask",
  description:
    "AEG 6000 ProSense vaskemaskine på 9, 10 og 10,5 kg: energimærkets kWh pr. vask på eco 40-60 for LR624P14A og søskende, pris om året og AEG 6000 mod 7000.",
  intro:
    "AEG 6000-maskinerne bruger 0,49–0,52 kWh pr. vask alt efter tromlens størrelse — samme niveau som de dyrere 8000-modeller, men over en AEG 7000 på 9 kg.",
  content: `<h2>Hvor meget strøm bruger en AEG 6000 vaskemaskine?</h2>
<p>AEG 6000 ProSense er AEG's serie under 7000 og 8000, og siden tager udgangspunkt i LR624P14A på 10 kg fra 2022. I EU's produktdatabase EPREL har den energiklasse A og bruger 51 kWh pr. 100 vaske på eco 40-60-programmet, altså 0,51 kWh pr. vask. Den opdaterede LR624P14Q fra 2025 har samme tal. AEG har siden registreret to nye 6000-modeller i EPREL: LR624PX4Q på 10,5 kg fra marts 2026 med 52 kWh og LR624P94P på 9 kg fra november 2026 med 49 kWh.</p>
<p>Med fem vaske om ugen bliver det omkring 133 kWh om året for 10 kg-modellerne, 135 kWh for 10,5 kg og 127 kWh for 9 kg, svarende til {{kr 133}}, {{kr 135}} og {{kr 127}} ved månedens elpris.</p>
<table>
<thead><tr><th>Model</th><th>Fra</th><th>Kapacitet</th><th>kWh pr. 100 vaske</th><th>Eco 40-60, fuld</th><th>Vand pr. vask</th><th>Støj</th></tr></thead>
<tbody>
<tr><td>LR624P14A</td><td>2022</td><td>10 kg</td><td>51</td><td>3:50</td><td>53 l</td><td>76 dB</td></tr>
<tr><td>LR624P14Q</td><td>2025</td><td>10 kg</td><td>51</td><td>3:50</td><td>52 l</td><td>75 dB</td></tr>
<tr><td>LR624PX4Q</td><td>2026</td><td>10,5 kg</td><td>52</td><td>3:59</td><td>52 l</td><td>76 dB</td></tr>
<tr><td>LR624P94P</td><td>2026</td><td>9 kg</td><td>49</td><td>3:40</td><td>50 l</td><td>76 dB</td></tr>
</tbody>
</table>

<h2>ProSense: vægten styrer programmet</h2>
<p>ProSense er ifølge AEG navnet for, at maskinen vejer tøjet og tilpasser tid, vand og energi til mængden. Det betyder noget i hverdagen, fordi de fleste vaske ikke er fulde. Energimærket tager allerede højde for det: tallet er et vægtet gennemsnit af fuld, halv og kvart fyldning. På LR624P14A tager eco 40-60 3 timer og 50 minutter med 10 kg, 2 timer og 55 minutter med halv fyldning og 2 timer og 35 minutter med kvart fyldning ifølge EPREL.</p>
<p>Alle fire centrifugerer i klasse B med omkring 53,5 % restfugt og ligger i støjklasse B med 75–76 dB under centrifugeringen. De bruger 0,5 W slukket og i standby og 4 W under udskudt start. Ingen af dem har et netværksstandby oplyst i EPREL.</p>

<h2>AEG 6000 mod 7000 og 8000</h2>
<p>Serienummeret siger ikke meget om strømmen. 10,5 kg-modellen LR624PX4Q bruger 52 kWh pr. 100 vaske, det samme som 10,5 kg-modellerne i både <a href="/vaskemaskine/aeg-7000-vaskemaskine/">AEG 7000</a> og <a href="/vaskemaskine/aeg-8000-vaskemaskine/">AEG 8000</a>. 9 kg-modellen LR624P94P bruger 49 kWh ligesom 8000-serien på 9 kg. Undtagelsen er 7000-modellen LR734E94EQ på 9 kg, der bruger 39 kWh — 10 kWh mindre pr. 100 vaske end LR624P94P og omkring 26 kWh mindre om året med fem vaske om ugen, svarende til {{kr 26}}.</p>
<p>Det, du betaler for i de højere serier, er især udstyr: damp (ProSteam) i 7000 og automatisk dosering i dele af 8000. Ser du kun på strømregningen, er 6000 ikke dyrere i drift end en 8000 med samme tromle.</p>

<h2>Er 10 kg for meget?</h2>
<p>En 10 kg-maskine bruger lidt mere pr. vask end en 9 kg, men mindre pr. kg tøj: LR624P14A bruger 5,1 kWh pr. 100 vaske pr. kg, LR624P94P 5,4 kWh. Gevinsten kommer kun, hvis tromlen bliver fyldt. Er I to i husstanden og vasker små portioner, er 9 kg rigeligt. Vasker du sengetøj, dyner og håndklæder til en familie, giver 10 kg færre vaske. Læs mere om, <a href="/vaskemaskine/">hvad en vask koster</a> ved forskellige temperaturer — et 60-graders program bruger typisk omkring det dobbelte af eco 40-60.</p>

<p>Tromlens størrelse betyder også noget for små portioner. En tromle, der kun er en fjerdedel fuld, bruger mere energi pr. kg, fordi vand og varme fordeles på mindre tøj. Til sportstøj eller et par skjorter er et kort, koldt program ofte nok, mens eco 40-60 er til de store, blandede vaske af bomuld, som energimærket er målt på.</p>

<h2>Hvornår er det billigst at vaske?</h2>
<p>En vaskemaskine er nem at flytte til billige timer. Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21. Fyld maskinen om aftenen, og brug udskudt start, så den kører om natten. Otte timers ventetid på 4 W er omkring 0,03 kWh. Se <a href="/elpriser/">dagens timepriser</a>, og læs om <a href="/vaskemaskine/">det billigste tidspunkt at vaske</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Brug eco 40-60 som standard; ProSense justerer selv efter mængden.</li>
<li>Vælg tromlestørrelse efter husstanden, ikke efter serienummeret.</li>
<li>Centrifugér ved højeste omdrejningstal, hvis tøjet skal i tørretumbleren.</li>
<li>Start om natten med udskudt start, uden for kl. 17–21.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger AEG LR624P14A?",
      answer:
        "Ifølge energimærket 51 kWh pr. 100 vaske på eco 40-60, altså 0,51 kWh pr. vask, energiklasse A og 10 kg. Det svarer til {{oere 0,51}} pr. vask og {{kr 133}} om året med fem vaske om ugen.",
    },
    {
      question: "Hvad koster en AEG 6000 vaskemaskine om året i strøm?",
      answer: "Med fem vaske om ugen omkring 127 kWh for 9 kg, 133 kWh for 10 kg og 135 kWh for 10,5 kg, svarende til {{kr 127}}, {{kr 133}} og {{kr 135}} ved månedens elpris.",
    },
    {
      question: "Er der forskel på LR624P14A og LR624P14Q?",
      answer: "Ikke i forbruget: begge har 10 kg og 51 kWh pr. 100 vaske. LR624P14Q fra 2025 bruger 52 liter vand pr. eco-vask mod 53 liter og er 1 dB mere stille ifølge EPREL.",
    },
    {
      question: "Bruger AEG 6000 mere strøm end AEG 7000?",
      answer: "Med samme tromle ofte ikke: 10,5 kg bruger 52 kWh pr. 100 vaske i begge serier. Men 7000-modellen LR734E94EQ på 9 kg bruger 39 kWh mod 49 kWh for 6000-modellen LR624P94P.",
    },
    {
      question: "Hvornår er det billigst at vaske?",
      answer: "Typisk om natten og uden for kl. 17–21, hvor nettariffen er højest. Brug udskudt start; ventetiden bruger 4 W.",
    },
  ],
  sources: [
    { name: "EPREL — AEG LR624P14A (914915719), EU's energimærke", url: eprel("1256181") },
    { name: "EPREL — AEG LR624P14Q (914915154), EU's energimærke", url: eprel("2295790") },
    { name: "EPREL — AEG LR624PX4Q (914915606), EU's energimærke", url: eprel("2451464") },
    { name: "EPREL — AEG LR624P94P (914915792), EU's energimærke", url: eprel("2863898") },
    { name: "EPREL — AEG LR734E94EQ (7000), EU's energimærke", url: eprel("2714856") },
  ],
  variants: [
    { name: "10 kg (LR624P14A)", watts: { off: 0.5, standby: 0.5 }, kwhPer100Cycles: 51, energyClass: "A", source: 0 },
    { name: "10 kg, 2025 (LR624P14Q)", watts: { off: 0.5, standby: 0.5 }, kwhPer100Cycles: 51, energyClass: "A", source: 1 },
    { name: "10,5 kg (LR624PX4Q)", watts: { off: 0.5, standby: 0.5 }, kwhPer100Cycles: 52, energyClass: "A", source: 2 },
    { name: "9 kg (LR624P94P)", watts: { off: 0.5, standby: 0.5 }, kwhPer100Cycles: 49, energyClass: "A", source: 3 },
  ],
  publishDate: "2026-12-27",
  updated: "2026-11-23",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærket måler forbruget på eco 40-60-programmet, vægtet mellem fuld, halv og kvart fyldning; slukket og standby er effekten i watt. Kilderne står nederst på siden.",
};

export default aeg6000Vaskemaskine;
