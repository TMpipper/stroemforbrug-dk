import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/washingmachines2019/${reg}`;

const boschSerie6: ModelData = {
  slug: "bosch-serie-6",
  parent: "vaskemaskine",
  brand: "Bosch",
  name: "Bosch Serie 6 vaskemaskine",
  released: "2024-01",
  synonyms: ["bosch serie 6", "bosch vaskemaskine", "bosch serie 6 9 kg", "bosch serie 6 10 kg", "bosch serie 6 11 kg", "wgg244ztsn", "wgg254fvsn", "wgk264zlsn", "bosch i-dos"],
  title: "Bosch Serie 6 vaskemaskine strømforbrug (2026) → kWh og pris",
  description:
    "Bosch Serie 6 vaskemaskine i 9, 10 og 11 kg: energimærkets kWh pr. vask på eco 40-60, kWh og pris om året, og hvornår på døgnet vasken er billigst.",
  intro:
    "Den største af de tre, 11 kg, bruger mindst pr. vask. Forskellen mellem modellerne er dog lille — det er programvalget og tidspunktet, der flytter regningen.",
  content: `<h2>Hvor meget strøm bruger Bosch Serie 6?</h2>
<p>Alle vaskemaskiner solgt i EU har et energimærke, og tallene står i EU's produktdatabase EPREL. For de tre Bosch Serie 6-modeller på siden oplyser Bosch 49 kWh pr. 100 vaske for 9 kg (WGG244ZTSN), 51 kWh for 10 kg (WGG254FVSN) og 47 kWh for 11 kg (WGK264ZLSN). Det svarer til 0,47–0,51 kWh pr. vask. Alle tre har energiklasse A, den bedste på skalaen.</p>
<p>Tallet er målt på eco 40-60-programmet, som er det program, energimærket bygger på. Det er et vægtet gennemsnit af fuld, halv og kvart fyldning, og programmet er lavet til at vaske almindeligt snavset bomuldstøj, der kan tåle 40 eller 60 grader. Med fem vaske om ugen bruger Serie 6 mellem 122 og 133 kWh om året, svarende til {{kr 122-133}}.</p>

<h2>9, 10 eller 11 kg — hvad er forskellen?</h2>
<p>Det er ikke den mindste maskine, der bruger mindst. 11 kg-modellen bruger 0,47 kWh pr. vask, 9 kg-modellen 0,49 kWh og 10 kg-modellen 0,51 kWh. Over et år med fem vaske om ugen er forskellen mellem den mest og den mindst sparsomme omkring 10 kWh, svarende til {{kr 10}}. Vælg derfor størrelse efter, hvor meget vasketøj I har, ikke efter strømmen.</p>
<p>Der er større forskel på detaljerne. 11 kg-modellen bruger 47 liter vand pr. eco-vask mod 50 liter for de to andre. Eco-programmet tager 3 timer og 48 minutter på 9 kg, 3:50 på 10 kg og 3:59 på 11 kg ved fuld fyldning. 10 kg-modellen har i-DOS, der doserer vaskemidlet automatisk, og 11 kg-modellen kan kobles på wifi via Home Connect — derfor har den et netværksstandby på 2 W, som de andre ikke har.</p>

<h2>Eco-programmet er langt, fordi det er billigt</h2>
<p>Mange undrer sig over, at eco 40-60 tager næsten fire timer. Forklaringen står i EPREL: ved fuld fyldning når 9 kg-modellens eco-program højst 38 °C, ved halv fyldning 27 °C og ved kvart fyldning 22 °C. Maskinen vasker rent ved lavere temperatur ved at bruge længere tid, og det er opvarmningen af vandet, der koster strøm. Maskinen er tilsluttet med 2.300 W, og varmelegemet er den store forbruger i en vask.</p>
<p>Derfor koster varmere programmer mere. Energimærket oplyser ikke forbruget for 60- eller 90-graders programmer, men EU's regler kræver, at brugsanvisningen viser vejledende tal for de vigtigste programmer. Slå dem op, hvis du vasker meget varmt — og brug eco 40-60 til det meste af det tøj, der normalt vaskes ved 40 eller 60 grader.</p>

<h2>Hvornår på døgnet er det billigst at vaske?</h2>
<p>En vaskemaskine er et af de apparater, der er nemmest at flytte i tid. Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21. Ofte er nætterne og nogle formiddage og middagstimer billigst. Alle tre Serie 6-modeller har forskudt sluttid, så du kan fylde maskinen om aftenen og lade den blive færdig om morgenen.</p>
<p>At vente koster næsten ingenting: under forskudt start bruger 9 kg-modellen 0,6 W og de to andre 4 W ifølge EPREL. Otte timers ventetid er altså højst 0,03 kWh. Se <a href="/elpriser/">dagens timepriser</a>, og læs, <a href="/vaskemaskine/">hvornår vaskemaskinen er billigst at bruge</a>.</p>

<h2>Serie 6 mod Serie 8 og den nye 2026-udgave</h2>
<p>Bosch' dyrere Serie 8 bruger mindre. Fx er 11 kg-modellen WGB266ABSN registreret med 42 kWh pr. 100 vaske mod 47 kWh for 11 kg i Serie 6 — omkring 13 kWh mindre om året med fem vaske om ugen, svarende til {{kr 13}}. Serie 8-modellen centrifugerer også hårdere (1.600 omdrejninger, centrifugeringsklasse A) og efterlader 44,9 % restfugt mod omkring 51–53 % i Serie 6. Det betyder mest, hvis du tørretumbler bagefter, fordi tumbleren så har mindre vand at fjerne.</p>
<p>Den nye 9 kg-udgave WGG244FASN fra 2026 er registreret med præcis de samme 49 kWh pr. 100 vaske som WGG244ZTSN. Der er altså ikke noget at hente i forbrug ved at vente på den nyeste model.</p>

<h2>Gode råd</h2>
<ul>
<li>Vask fulde maskiner frem for mange små vaske.</li>
<li>Brug eco 40-60 som standard og gem 60 og 90 grader til håndklæder, sengetøj og stærkt snavset tøj.</li>
<li>Flyt vasken væk fra kl. 17–21 med forskudt sluttid.</li>
<li>Centrifugér med fuld hastighed, hvis du bruger <a href="/varmepumpe-toerretumbler/">tørretumbler</a> bagefter.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en Bosch Serie 6 vaskemaskine pr. vask?",
      answer: "Ifølge energimærket 0,49 kWh pr. vask for 9 kg (WGG244ZTSN), 0,51 kWh for 10 kg (WGG254FVSN) og 0,47 kWh for 11 kg (WGK264ZLSN) på eco 40-60-programmet. Det svarer til {{oere 0,49}} for 9 kg.",
    },
    {
      question: "Hvad koster en Bosch Serie 6 vaskemaskine om året?",
      answer: "Med fem vaske om ugen på eco 40-60 bruger den 122–133 kWh om året afhængigt af modellen, svarende til {{kr 122-133}} ved månedens elpris.",
    },
    {
      question: "Hvilken energiklasse har Bosch Serie 6?",
      answer: "Alle tre modeller på siden har energiklasse A, den bedste på EU's skala fra A til G.",
    },
    {
      question: "Hvorfor tager eco-programmet så lang tid?",
      answer: "Fordi maskinen vasker ved lavere temperatur og bruger tiden i stedet: på 9 kg-modellen når eco 40-60 højst 38 °C ved fuld fyldning. Opvarmningen af vandet er det, der koster strøm. Programmet tager 3 timer og 48 minutter.",
    },
    {
      question: "Hvornår er det billigst at vaske?",
      answer: "Typisk om natten og uden for kl. 17–21, hvor nettariffen er højest. Brug forskudt sluttid: ventetiden bruger kun 0,6–4 W.",
    },
  ],
  sources: [
    { name: "EPREL — Bosch WGG244ZTSN (Serie 6, 9 kg), EU's energimærke", url: eprel("1705908") },
    { name: "EPREL — Bosch WGG254FVSN (Serie 6, 10 kg), EU's energimærke", url: eprel("2064023") },
    { name: "EPREL — Bosch WGK264ZLSN (Serie 6, 11 kg), EU's energimærke", url: eprel("2365311") },
    { name: "Bosch — WGG244ZTSN, produktdatablad (dansk)", url: "https://media3.bsh-group.com/Documents/specsheet/da-DK/WGG244ZTSN.pdf" },
    { name: "EPREL — Bosch WGB266ABSN (Serie 8, 11 kg), EU's energimærke", url: eprel("2660788") },
    { name: "EPREL — Bosch WGG244FASN (Serie 6, 9 kg, 2026), EU's energimærke", url: eprel("2643850") },
  ],
  variants: [
    { name: "9 kg (WGG244ZTSN)", watts: { off: 0.15, standby: 0.5 }, kwhPer100Cycles: 49, energyClass: "A", source: 0 },
    { name: "10 kg (WGG254FVSN)", watts: { off: 0.5, standby: 0.5 }, kwhPer100Cycles: 51, energyClass: "A", source: 1 },
    { name: "11 kg (WGK264ZLSN)", watts: { off: 0.5, standby: 0.5 }, kwhPer100Cycles: 47, energyClass: "A", source: 2 },
  ],
  publishDate: "2026-11-25",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærket måler forbruget på eco 40-60-programmet som et vægtet gennemsnit af fuld, halv og kvart fyldning; slukket og standby er effekten i watt. Kilderne står nederst på siden.",
};

export default boschSerie6;
