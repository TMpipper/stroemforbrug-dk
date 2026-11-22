import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/dishwashers2019/${reg}`;

const siemensIq500: ModelData = {
  slug: "siemens-iq500",
  parent: "opvaskemaskine",
  brand: "Siemens",
  name: "Siemens iQ500 opvaskemaskine",
  released: "2024-04",
  synonyms: ["siemens iq500", "siemens opvaskemaskine", "siemens zeolith", "siemens iq500 integrerbar", "sx75zx17ce", "sn65zx16ce", "sn45zw08ce", "siemens opvasker"],
  title: "Siemens iQ500 opvaskemaskine strømforbrug (2026) → kWh",
  description:
    "Siemens iQ500 opvaskemaskine med Zeolith: energimærkets kWh pr. opvask på eco-programmet, pris om året, iQ300 til sammenligning og billigste tidspunkt.",
  intro:
    "Seriens navn siger ikke alt: en iQ300 med energiklasse A bruger mindre end iQ500, mens en anden iQ300 bruger langt mere.",
  content: `<h2>Hvor meget strøm bruger Siemens iQ500?</h2>
<p>De tre Siemens iQ500-opvaskemaskiner på siden er registreret i EU's produktdatabase EPREL med det samme forbrug: 65 kWh pr. 100 opvaske på eco-programmet, altså 0,65 kWh pr. opvask, og energiklasse B. Alle tre tager 14 kuverter. Med seks opvaske om ugen bliver det omkring 203 kWh om året, svarende til {{kr 203}}.</p>
<p>Forskellen mellem modellerne er installationen, ikke forbruget. SX75ZX17CE er fuldt integrerbar i XXL-højde til nicher på 86,5–92,5 cm med varioHinge, en justerbar låge til høje køkkenfronter. SN65ZX16CE er fuldt integrerbar i normal højde og viser programstatus og resttid på gulvet med timeLight. SN45ZW08CE er til underbygning med hvid front. Alle tre bruger 9 liter vand pr. eco-opvask, programmet tager 3 timer og 35 minutter, og støjen er 40 dB.</p>

<h2>Zeolith: bedre tørring, ikke lavere klasse</h2>
<p>Alle tre har Siemens' Zeolith-tørring. Zeolith er et mineral, der optager fugt og afgiver varme, og ifølge Siemens giver det dobbelt så gode tørreresultater på plast som en tilsvarende Siemens-maskine uden. Det er en fordel, hvis plastbokse og -skåle plejer at komme våde ud.</p>
<p>Men Zeolith betyder ikke automatisk den laveste strømregning. De tre iQ500-modeller har energiklasse B, og der findes maskiner med klasse A, der bruger mindre. Vælger du for tørringens skyld, er iQ500 et godt valg; vælger du kun for strømmens skyld, så sammenlign energimærkerne.</p>

<h2>iQ500 mod iQ300: serienavnet afgør ikke forbruget</h2>
<p>Siemens' iQ300-serie er den billigere, men forbruget varierer meget inden for den. SN63EX22CE er en fuldt integrerbar iQ300 med 14 kuverter og energiklasse A: 54 kWh pr. 100 opvaske, altså omkring 34 kWh mindre om året end iQ500 med seks opvaske om ugen, svarende til {{kr 34}}. SN43HW01VS er en iQ300 til underbygning med 13 kuverter og energiklasse E: 94 kWh pr. 100 opvaske, eller omkring 90 kWh mere om året end iQ500 — {{kr 90}} mere hvert år.</p>
<p>Til gengæld tager SN63EX22CE's eco-program 4 timer og 30 minutter mod 3:35 for iQ500. En lavere energiklasse købes ofte med et længere program, fordi maskinen så kan bruge lavere temperatur.</p>

<h2>Eco-programmet og de andre programmer</h2>
<p>Energimærket måler kun eco-programmet, som er beregnet til normalt snavset service. Det kører ved lav temperatur i lang tid, og det er opvarmningen af vandet, der koster strøm: SX75ZX17CE er tilsluttet med 2.400 W. Intensive programmer ved 70 °C bruger derfor mere, og de korte hurtigprogrammer ofte også, fordi de skal varme vandet op hurtigere. EU's regler kræver, at brugsanvisningen oplyser vejledende forbrug for de vigtigste programmer, så slå tallene op dér. Brug eco som standard og de varme programmer, når der er brug for dem.</p>

<h2>Hvornår er det billigst at tage opvasken?</h2>
<p>Opvaskemaskinen er et af de apparater, der er nemmest at flytte i tid. Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21 — præcis når mange starter maskinen efter aftensmaden. Alle tre iQ500-modeller har tidsforvalg på 1–24 timer, så du kan fylde maskinen om aftenen og lade den køre om natten.</p>
<p>Ventetiden er næsten gratis: under forsinket start bruger maskinerne 4 W ifølge EPREL, altså 0,03 kWh på otte timer. Se <a href="/elpriser/">dagens timepriser</a>, og læs, <a href="/opvaskemaskine/">hvornår opvaskemaskinen er billigst at bruge</a>.</p>

<h2>Standby og wifi</h2>
<p>I almindelig standby bruger iQ500 0,5 W og i netværksforbundet standby 2 W, når den er koblet på wifi og kan styres fra telefonen. Står den i netværksstandby hele året, er det omkring 17 kWh, mod omkring 4 kWh på almindelig standby. Har du ikke brug for app-styringen, er det en lille, men gratis besparelse at lade den være offline. Læs mere om <a href="/standby/">standby-forbrug i hjemmet</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Kør eco-programmet som standard og kun med fuld maskine.</li>
<li>Skyl ikke service under varmt vand før opvasken — maskinen klarer madrester, og varmt vand fra hanen koster også energi.</li>
<li>Start maskinen med tidsforvalg, så den kører uden for kl. 17–21.</li>
<li>Sammenlign energimærket på de præcise modelnumre, ikke kun serien.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en Siemens iQ500 opvaskemaskine?",
      answer: "Ifølge energimærket 0,65 kWh pr. opvask på eco-programmet (65 kWh pr. 100 opvaske) for SX75ZX17CE, SN65ZX16CE og SN45ZW08CE. Det svarer til {{oere 0,65}} pr. opvask.",
    },
    {
      question: "Hvad koster en Siemens iQ500 opvaskemaskine om året?",
      answer: "Med seks opvaske om ugen omkring 203 kWh om året, svarende til {{kr 203}} ved månedens elpris.",
    },
    {
      question: "Hvilken energiklasse har Siemens iQ500?",
      answer: "De tre iQ500-modeller på siden har energiklasse B. Til sammenligning har iQ300-modellen SN63EX22CE klasse A og SN43HW01VS klasse E.",
    },
    {
      question: "Sparer Zeolith strøm?",
      answer: "Zeolith giver ifølge Siemens dobbelt så gode tørreresultater på plast, men iQ500-modellerne med Zeolith har energiklasse B. Der findes maskiner med klasse A, der bruger mindre strøm pr. opvask.",
    },
    {
      question: "Hvornår er det billigst at køre opvaskemaskinen?",
      answer: "Typisk om natten og uden for kl. 17–21, hvor nettariffen er højest. Brug tidsforvalget på 1–24 timer; ventetiden bruger kun 4 W.",
    },
  ],
  sources: [
    { name: "EPREL — Siemens SX75ZX17CE (iQ500), EU's energimærke", url: eprel("2318273") },
    { name: "EPREL — Siemens SN65ZX16CE (iQ500), EU's energimærke", url: eprel("2075234") },
    { name: "EPREL — Siemens SN45ZW08CE (iQ500), EU's energimærke", url: eprel("1821586") },
    { name: "Siemens — SX75ZX17CE, produktdatablad (dansk)", url: "https://media3.bsh-group.com/Documents/specsheet/da-DK/SX75ZX17CE.pdf" },
    { name: "Siemens — SN65ZX16CE, produktdatablad (dansk)", url: "https://media3.bsh-group.com/Documents/specsheet/da-DK/SN65ZX16CE.pdf" },
    { name: "Siemens — SN45ZW08CE, produktdatablad (dansk)", url: "https://media3.bsh-group.com/Documents/specsheet/da-DK/SN45ZW08CE.pdf" },
    { name: "EPREL — Siemens SN63EX22CE (iQ300), EU's energimærke", url: eprel("1956205") },
    { name: "EPREL — Siemens SN43HW01VS (iQ300), EU's energimærke", url: eprel("1872212") },
  ],
  variants: [
    { name: "14 kuverter, XXL integrerbar (SX75ZX17CE)", watts: { standby: 0.5 }, kwhPer100Cycles: 65, energyClass: "B", source: 0 },
    { name: "14 kuverter, integrerbar (SN65ZX16CE)", watts: { standby: 0.5 }, kwhPer100Cycles: 65, energyClass: "B", source: 1 },
    { name: "14 kuverter, underbygning (SN45ZW08CE)", watts: { standby: 0.5 }, kwhPer100Cycles: 65, energyClass: "B", source: 2 },
  ],
  publishDate: "2026-11-26",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærket måler forbruget på eco-programmet (Eco 50 °C) med 14 kuverter; standby er effekten i watt. Kilderne står nederst på siden.",
};

export default siemensIq500;
