import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/washingmachines2019/${reg}`;
const aeg = (m: string) => `https://www.aeg.dk/laundry/laundry/washing-machines/front-loader-washing-machine/${m}/`;

const aeg8000Vaskemaskine: ModelData = {
  slug: "aeg-8000-vaskemaskine",
  parent: "vaskemaskine",
  brand: "AEG",
  name: "AEG 8000 PowerCare vaskemaskine",
  released: "2024-05",
  synonyms: [
    "aeg 8000 vaskemaskine",
    "aeg 8000 powercare",
    "aeg powercare autodose",
    "lr844px6q",
    "lr833w96w",
    "lr844px6p",
    "lr834f96w",
    "aeg vaskemaskine 10,5 kg",
  ],
  title: "AEG 8000 vaskemaskine strømforbrug (2026) → kWh pr. vask",
  description:
    "AEG 8000 PowerCare vaskemaskine på 9 og 10,5 kg: energimærkets kWh pr. vask på eco 40-60, pris om året, AutoDose og wifi og billigste tidspunkt.",
  intro:
    "Alle fire AEG 8000-maskiner på siden har energiklasse A, og den store 10,5 kg-model bruger mindre pr. kg tøj end 9 kg-modellerne — men en AEG 7000 kan bruge mindre end begge.",
  content: `<h2>Hvor meget strøm bruger en AEG 8000 vaskemaskine?</h2>
<p>AEG sælger 8000-serien i Danmark som 8000 PowerCare, og de fire maskiner på siden har hver sit energimærke i EU's produktdatabase EPREL. De to 9 kg-modeller, LR833W96W og LR834F96W, bruger 49 kWh pr. 100 vaske på eco 40-60-programmet, altså 0,49 kWh pr. vask. De to 10,5 kg-modeller, LR844PX6Q med AutoDose og LR844PX6P, bruger 52 kWh, altså 0,52 kWh pr. vask. Alle fire har energiklasse A.</p>
<p>Med fem vaske om ugen bliver det omkring 127 kWh om året for 9 kg-modellerne og 135 kWh for 10,5 kg-modellerne, svarende til {{kr 127}} og {{kr 135}}.</p>
<table>
<thead><tr><th>Model</th><th>Kapacitet</th><th>kWh pr. 100 vaske</th><th>Eco 40-60, fuld</th><th>Vand pr. vask</th><th>Netværksstandby</th></tr></thead>
<tbody>
<tr><td>LR833W96W</td><td>9 kg</td><td>49</td><td>3:48</td><td>46 l</td><td>2 W</td></tr>
<tr><td>LR834F96W</td><td>9 kg</td><td>49</td><td>3:48</td><td>46 l</td><td>ikke oplyst</td></tr>
<tr><td>LR844PX6Q (AutoDose)</td><td>10,5 kg</td><td>52</td><td>3:59</td><td>47 l</td><td>2 W</td></tr>
<tr><td>LR844PX6P</td><td>10,5 kg</td><td>52</td><td>3:59</td><td>47 l</td><td>ikke oplyst</td></tr>
</tbody>
</table>

<h2>10,5 kg: mere tøj for næsten samme strøm</h2>
<p>10,5 kg-modellerne bruger kun 0,03 kWh mere pr. vask end 9 kg-modellerne, men tager 1,5 kg mere tøj. Pr. kg tøj bruger de omkring 9 % mindre. Det betyder kun noget, hvis maskinen bliver fyldt: vasker du altid små portioner, er den store tromle spildt. Energimærket er et gennemsnit af fuld, halv og kvart fyldning, og ved kvart fyldning tager eco 40-60 2 timer og 35 minutter på alle fire ifølge EPREL.</p>
<p>LR844PX6Q har AutoDose, der ifølge AEG's danske produktside doserer vaskemidlet selv. Det sparer ikke strøm direkte, men for meget vaskemiddel kan kræve ekstra skyl. Alle fire centrifugerer i klasse A, altså med under 45 % restfugt i tøjet, hvilket betyder kortere tid i en tørretumbler bagefter.</p>

<h2>AEG 8000 mod 7000 og andre 9 kg-maskiner</h2>
<p>Højere serienummer betyder ikke lavere forbrug. I <a href="/vaskemaskine/aeg-7000-vaskemaskine/">AEG 7000</a> bruger 9 kg-modellen LR734E94EQ fra 2026 39 kWh pr. 100 vaske, altså 10 kWh mindre end 8000-modellerne på 9 kg. Med fem vaske om ugen er det omkring 26 kWh om året, svarende til {{kr 26}}. 8000-serien har til gengæld udstyr som AutoDose på LR844PX6Q.</p>
<p><a href="/vaskemaskine/bosch-serie-6/">Bosch Serie 6</a>-modellen WGG244ZTSN på 9 kg har samme 49 kWh som AEG's 9 kg-modeller. De mest sparsomme maskiner på vores sider ligger hos <a href="/vaskemaskine/miele-w1/">Miele W1</a>, hvor WWE380 på 8 kg bruger 29 kWh pr. 100 vaske — omkring 52 kWh mindre om året end LR833W96W.</p>

<h2>Varmt vand koster mest</h2>
<p>Næsten al strømmen i en vask går til at varme vandet op. Energimærkets eco 40-60-program vasker normalt snavset bomuld ved lav temperatur i lang tid; et 60-graders bomuldsprogram bruger typisk omkring det dobbelte, og et 30-graders mindre. Brug eco 40-60 som standardprogram og de varme programmer til håndklæder og sengetøj, når der er brug for det. Læs, <a href="/vaskemaskine/">hvad en vask koster</a> ved forskellige temperaturer.</p>
<p>I standby og slukket bruger maskinerne 0,5 W. LR833W96W og LR844PX6Q bruger 2 W i netværksforbundet standby, når de er koblet på wifi. Under udskudt start bruger alle fire 4 W.</p>

<h2>Hvornår er det billigst at vaske?</h2>
<p>En vaskemaskine er nem at flytte til billige timer. Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21. Fyld maskinen om aftenen, og lad den starte om natten eller tidligt om morgenen, så tøjet er færdigt, når du står op. Ventetiden bruger kun 4 W, omkring 0,03 kWh på otte timer. Se <a href="/elpriser/">dagens timepriser</a>, og læs, <a href="/vaskemaskine/">hvornår vaskemaskinen er billigst at bruge</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Brug eco 40-60 som standard; det er det, energimærket er målt på.</li>
<li>Fyld tromlen — en fuld 10,5 kg-vask er billigere pr. kg end to halve.</li>
<li>Centrifugér ved højeste omdrejningstal, hvis tøjet skal i tørretumbleren.</li>
<li>Start med udskudt start, så vasken kører uden for kl. 17–21.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en AEG 8000 vaskemaskine?",
      answer:
        "Ifølge energimærket 0,49 kWh pr. vask på eco 40-60 for 9 kg-modellerne LR833W96W og LR834F96W og 0,52 kWh for 10,5 kg-modellerne LR844PX6Q og LR844PX6P. Det svarer til {{oere 0,49}} og {{oere 0,52}} pr. vask.",
    },
    {
      question: "Hvad koster en AEG 8000 vaskemaskine om året i strøm?",
      answer: "Med fem vaske om ugen omkring 127 kWh om året for 9 kg og 135 kWh for 10,5 kg, svarende til {{kr 127}} og {{kr 135}} ved månedens elpris.",
    },
    {
      question: "Hvilken energiklasse har AEG LR844PX6Q?",
      answer: "Energiklasse A med 52 kWh pr. 100 vaske, 10,5 kg og 47 liter vand pr. eco 40-60-vask ifølge EPREL.",
    },
    {
      question: "Bruger AEG 8000 mindre strøm end AEG 7000?",
      answer:
        "Ikke nødvendigvis. 7000-modellen LR734E94EQ på 9 kg bruger 39 kWh pr. 100 vaske mod 49 kWh for 8000-modellerne på 9 kg, omkring 26 kWh mindre om året med fem vaske om ugen.",
    },
    {
      question: "Hvornår er det billigst at vaske?",
      answer: "Typisk om natten og uden for kl. 17–21, hvor nettariffen er højest. Brug udskudt start; ventetiden bruger kun 4 W.",
    },
  ],
  sources: [
    { name: "EPREL — AEG LR833W96W (914501813), EU's energimærke", url: eprel("1576336") },
    { name: "EPREL — AEG LR834F96W (914501809), EU's energimærke", url: eprel("1189596") },
    { name: "EPREL — AEG LR844PX6Q (914501127), EU's energimærke", url: eprel("1996959") },
    { name: "EPREL — AEG LR844PX6P (914501816), EU's energimærke", url: eprel("1996958") },
    { name: "AEG — 8000 PowerCare Autodose 10,5 kg LR844PX6Q (dansk produktside)", url: aeg("lr844px6q") },
    { name: "AEG — 8000 PowerCare 9 kg LR833W96W (dansk produktside)", url: aeg("lr833w96w") },
    { name: "EPREL — AEG LR734E94EQ (7000), EU's energimærke", url: eprel("2714856") },
    { name: "EPREL — Miele WWE380 (W1), EU's energimærke", url: eprel("2060681") },
  ],
  variants: [
    { name: "9 kg (LR833W96W)", watts: { off: 0.5 }, kwhPer100Cycles: 49, energyClass: "A", source: 0 },
    { name: "9 kg, 2022 (LR834F96W)", watts: { off: 0.5 }, kwhPer100Cycles: 49, energyClass: "A", source: 1 },
    { name: "10,5 kg, AutoDose (LR844PX6Q)", watts: { off: 0.5 }, kwhPer100Cycles: 52, energyClass: "A", source: 2 },
    { name: "10,5 kg (LR844PX6P)", watts: { off: 0.5 }, kwhPer100Cycles: 52, energyClass: "A", source: 3 },
  ],
  publishDate: "2026-12-13",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærket måler forbruget på eco 40-60-programmet, vægtet mellem fuld, halv og kvart fyldning; slukket er effekten i watt. Kilderne står nederst på siden.",
};

export default aeg8000Vaskemaskine;
