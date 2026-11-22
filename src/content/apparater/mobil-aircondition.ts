import type { ApplianceData } from "@/lib/types";

/**
 * Mobil aircondition (single duct, én slange). Energimærke efter forordning 626/2011 i kWh pr. time ved fuld last.
 * Mærke- og modeltabellen omregner kWh/time til et år med 120 timer (3 timer × 40 varme dage) — samme antagelse
 * som beregneren. EPREL-udtræk 22. nov. 2026: 700 single duct-modeller, 94 % i klasse A, median 1,3 kWh/time.
 */
const mobilAircondition: ApplianceData = {
  slug: "mobil-aircondition",
  meta: {
    category: "klima",
    usage: "per-hour",
    hasEuLabel: true,
    shiftable: false,
    synonyms: ["mobil aircondition", "mobil airconditioner", "transportabel aircondition", "portable aircondition", "aircondition med slange", "mobilt klimaanlæg", "air cooler"],
  },
  name: "Mobil aircondition",
  title: "Mobil aircondition strømforbrug (2026) → kWh i timen",
  description:
    "Se hvor meget strøm en mobil aircondition bruger i timen og pr. sommer, hvorfor den bruger mere end et split-anlæg, og hvordan du får mere kulde ud af den.",
  heading: "Strømforbrug for en mobil aircondition: watt, pris i timen og dyreste timer",
  quickAnswer:
    "En mobil aircondition bruger typisk 0,9–1,6 kWh i timen, når den køler for fuld kraft, og de fleste modeller på 3,5 kW ligger omkring 1,3 kWh. Det koster cirka {{kr 1,3}} i timen ved månedens elpris. Over en dansk sommer med 3 timer om dagen på 40 varme dage bliver det omkring {{kr 156}}.",
  kwhRange: [40, 400],
  typicalKwh: 156,
  wattage: 1300,
  standbyWatts: 1,
  energyLabels: [
    { class: "A+++", kwhPerYear: 102 },
    { class: "A++", kwhPerYear: 117 },
    { class: "A+", kwhPerYear: 135 },
    { class: "A", kwhPerYear: 162 },
  ],
  models: [
    { brand: "AEG", model: "AXP26U558HW (2,6 kW, 0,9 kWh/t)", kwh: 108, energyClass: "A+" },
    { brand: "TCL", model: "P12P6SW2KP (3,5 kW, 1,0 kWh/t)", kwh: 120, energyClass: "A++" },
    { brand: "Hisense", model: "APC12QC (3,5 kW, 1,3 kWh/t)", kwh: 156, energyClass: "A" },
    { brand: "Meaco", model: "MeacoCool 16.000 BTU (4,6 kW, 1,7 kWh/t)", kwh: 204, energyClass: "A" },
  ],
  seasonalProfile: [0, 0, 0, 0, 0.3, 2.6, 4.2, 3.6, 1.2, 0.1, 0, 0],
  content: `<h2>Hvor meget strøm bruger en mobil aircondition?</h2>
<p>En mobil aircondition er et helt køleanlæg i én kasse på hjul: kompressor, fordamper og kondensator står sammen inde i rummet, og den varme luft blæses ud gennem en slange i vinduet. Det gør den nem at sætte op, men det koster strøm. Når den køler for fuld kraft, bruger en typisk model på 3,5 kW omkring 1,3 kWh i timen. Det er medianen for de godt 700 mobile modeller med én slange, vi har trukket ud af EU's produktdatabase EPREL.</p>
<p>Ved månedens elpris koster en times køling derfor omkring {{kr 1,3}}, og en eftermiddag med tre timer koster cirka {{kr 3,9}}. Forbrugerrådet Tænk målte i deres test, at de modeller, der kølede bedst, brugte omkring 1 kWh i timen. Tænks oversigt over køleløsninger angiver mobile aircondition-anlæg til 589–1.797 W – spændet viser, at størrelsen betyder meget.</p>
<p>Over en hel dansk sommer afhænger regningen helt af, hvor meget du bruger den. Med tre timer om dagen på omkring 40 varme dage bliver det 156 kWh, eller {{kr 156}}. Bruger du den hver nat i soveværelset i juli, kan det hurtigt blive det dobbelte.</p>

<h2>Forbrug i timen efter størrelse og energiklasse</h2>
<p>Mobile aircondition-anlæg har et EU-energimærke efter forordning 626/2011, men det viser forbruget pr. time (kWh/60 min.) og ikke pr. år. Klassen afgøres af virkningsgraden EER: hvor mange kW kulde, anlægget leverer, pr. kW strøm. Næsten alle mobile modeller på markedet ligger i klasse A med en EER omkring 2,6 – i EPREL-udtrækket står 94 procent i A, og under 3 procent når A++ eller A+++.</p>
<table>
<thead><tr><th>Model og størrelse</th><th>kWh i timen</th><th>Pris i timen</th><th>Pris for 3 timer</th></tr></thead>
<tbody>
<tr><td>Lille, 2,0–2,6 kW (klasse A)</td><td>0,8–1,0 kWh</td><td>{{kr 0,8-1}}</td><td>{{kr 2,4-3}}</td></tr>
<tr><td>Standard, 3,5 kW (klasse A)</td><td>1,3–1,4 kWh</td><td>{{kr 1,3-1,4}}</td><td>{{kr 3,9-4,2}}</td></tr>
<tr><td>Standard, 3,5 kW (klasse A++)</td><td>1,0 kWh</td><td>{{kr 1}}</td><td>{{kr 3}}</td></tr>
<tr><td>Stor, 4,0–4,7 kW (klasse A)</td><td>1,5–1,7 kWh</td><td>{{kr 1,5-1,7}}</td><td>{{kr 4,5-5,1}}</td></tr>
</tbody>
</table>
<p>Tallene er målt ved fuld last under standardbetingelser. I praksis slår kompressoren fra, når rummet når den temperatur, du har valgt, så det reelle gennemsnit kan være lidt lavere i et lille rum. I et stort rum med sol på vinduerne kører den til gengæld næsten uafbrudt.</p>
<p>Energimærke-tabellen længere nede på siden omregner mærkets timetal til et år med 120 timers brug – tre timer på 40 dage – for en model på 3,5 kW ved hver klasses grænse. Modeltabellen bruger samme 120 timer.</p>

<h2>Hvorfor bruger en mobil aircondition så meget strøm?</h2>
<p>Der er to grunde. Den første er, at kondensatoren – den varme side af køleanlægget – står inde i rummet og skal af med varmen gennem en slange. Det giver en dårligere virkningsgrad end et split-anlæg, hvor udedelen kan afgive varmen frit udenfor. Et fast split-anlæg har en sæsonvirkningsgrad (SEER) på 6–9, mens den mobile model har en EER omkring 2,6.</p>
<p>Den anden grund er slangen. En mobil aircondition med én slange suger luft fra rummet og blæser den ud gennem vinduet. Den luft skal erstattes, og den kommer ind udefra gennem utætheder og døråbninger – og en varm sommerdag er den luft varm. Anlægget køler altså delvis sin egen erstatningsluft. Det er også derfor, Tænk anbefaler at vælge en model efter rummets rumfang i kubikmeter, ikke efter de kvadratmeter, producenterne skriver, så anlægget ikke skal arbejde hårdere end nødvendigt.</p>
<p>Der findes også mobile modeller med to slanger (double duct), hvor den ene henter luft udefra til kondensatoren, og den anden blæser den ud igen. Så suger anlægget ikke den kølede luft ud af rummet, og der trækkes ikke varm erstatningsluft ind. De har samme energiskala som modellerne med én slange, men er sjældne i danske butikker. Står du og vælger mellem to ellers ens modeller, er den med to slanger den, der får mest kulde ud af hver kWh.</p>
<p>En såkaldt air cooler eller luftkøler uden slange er noget helt andet: den er en ventilator, der blæser luft gennem et vådt filter. Den bruger lidt strøm, men den køler kun et par grader og gør luften fugtigere – i et dansk sommerhus med høj luftfugtighed hjælper den ikke ret meget.</p>

<h2>Mobil aircondition, split-anlæg eller ventilator?</h2>
<table>
<thead><tr><th>Løsning</th><th>Typisk kWh i timen</th><th>Pris i timen</th><th>Pris for en sommer (120 timer)</th></tr></thead>
<tbody>
<tr><td>Mobil aircondition, 3,5 kW</td><td>1,3 kWh</td><td>{{kr 1,3}}</td><td>{{kr 156}}</td></tr>
<tr><td>Fast split-aircondition, 3,5 kW</td><td>0,5 kWh</td><td>{{kr 0,5}}</td><td>{{kr 60}}</td></tr>
<tr><td>Ventilator</td><td>0,01–0,05 kWh</td><td>{{kr 0,01-0,05}}</td><td>{{kr 1,2-6}}</td></tr>
</tbody>
</table>
<p>En <a href="/aircondition/">fast aircondition</a> bruger omkring en tredjedel af strømmen til samme køling, men den koster mere at købe og skal installeres af en autoriseret installatør. Tænk anbefaler en luft-til-luft-varmepumpe, hvis du har brug for køling ofte eller i flere rum, og til gengæld kan den også varme huset om vinteren. Den mobile model giver mest mening, hvis du kun har brug for at køle ét lille eller mellemstort rum i korte perioder, eller hvis du bor til leje og ikke må sætte en udedel op.</p>
<p>Er det nok, at det føles køligere, er en <a href="/ventilator/">ventilator</a> langt den billigste løsning af de tre: den bruger 11–50 W, men sænker ikke temperaturen.</p>

<h2>Hvornår på døgnet bruger den strøm?</h2>
<p>En mobil aircondition bruges, når det er varmt, og det er typisk fra sidst på formiddagen til aften. Midt på dagen er strømmen om sommeren ofte billig, fordi solcellerne producerer meget, mens timerne fra kl. 17 til 21 er typisk døgnets dyreste. Køler du soveværelset om aftenen, rammer du altså de dyre timer.</p>
<p>Det kan betale sig at køle rummet ned tidligere på eftermiddagen, mens strømmen er billigere, og lukke døren. Rummet holder på kulden et stykke tid, især hvis gardinerne er trukket for. Se dagens billige og dyre timer i boksen længere oppe på siden.</p>

<h2>Standby og affugtning</h2>
<p>På standby bruger en mobil aircondition typisk under 1 W, som er EU's krav for apparater med display. Det er under 9 kWh om året, men da anlægget kun bruges om sommeren, er det nemmest at tage stikket ud resten af året.</p>
<p>Mange modeller har også en affugtertilstand. Her kører kompressoren uden at blæse varm luft ud, og forbruget er lavere end ved køling. Har du brug for at affugte hele året, er en egentlig <a href="/affugter/">affugter</a> dog mere sparsom.</p>

<h2>Sådan får du mere kulde for strømmen</h2>
<ol>
<li><strong>Tæt vinduet omkring slangen</strong> – brug det medfølgende vinduesstykke eller en tætningsdug, så varm luft ikke strømmer ind igen.</li>
<li><strong>Hold slangen kort og lige</strong> – en lang, bugtet slange bliver varm og afgiver varme tilbage til rummet.</li>
<li><strong>Luk døren</strong> – køl kun det rum, du er i.</li>
<li><strong>Træk for</strong> – sol gennem et vindue er en stor varmekilde. Udvendig afskærmning virker bedst.</li>
<li><strong>Vælg den rigtige størrelse</strong> – en for lille model kører konstant uden at nå temperaturen.</li>
<li><strong>Brug natten</strong> – luft ud, når det er køligst om morgenen, og tænd først, når rummet bliver varmt.</li>
</ol>
<p>Brug samtidig gerne en <a href="/luftrenser/">luftrenser</a> eller ventilator med omtanke: en ventilator ved siden af en mobil aircondition fordeler den kolde luft, så du kan sætte temperaturen en grad eller to højere.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en mobil aircondition i timen?",
      answer:
        "En typisk mobil aircondition på 3,5 kW bruger omkring 1,3 kWh i timen ved fuld køling, hvilket koster cirka {{kr 1,3}} ved månedens elpris. Små modeller bruger 0,8–1 kWh, og store op til 1,7 kWh i timen.",
    },
    {
      question: "Hvad koster det at have en mobil aircondition kørende om natten?",
      answer:
        "Otte timer med en standardmodel bruger op til omkring 10 kWh, hvis den kører hele tiden, hvilket koster op til {{kr 10,4}}. Når rummet er kølet ned, slår kompressoren fra og til, så det reelle forbrug er ofte lavere.",
    },
    {
      question: "Er en mobil aircondition dyrere i drift end en fast?",
      answer:
        "Ja. En mobil aircondition bruger typisk 2–3 gange så meget strøm som et fast split-anlæg til samme køling: omkring {{kr 1,3}} i timen mod {{kr 0,5}} for et split-anlæg på 3,5 kW.",
    },
    {
      question: "Hvilket energimærke har mobile aircondition-anlæg?",
      answer:
        "Næsten alle er i klasse A med en EER omkring 2,6. I EU's produktdatabase står 94 procent af de mobile modeller med én slange i A. Mærket viser forbruget i kWh pr. time, ikke pr. år.",
    },
    {
      question: "Bruger en mobil aircondition strøm på standby?",
      answer:
        "Lidt, typisk under 1 W. Det er under 9 kWh om året, svarende til {{kr 9}}. Tag stikket ud, når sommeren er forbi.",
    },
    {
      question: "Hvad er billigst: mobil aircondition eller ventilator?",
      answer:
        "Ventilatoren. Den bruger 11–50 W og koster {{kr 0,01-0,05}} i timen, men den sænker ikke temperaturen – den får kun luften til at føles køligere. Skal rummet faktisk køles ned, kræver det en aircondition.",
    },
  ],
  relatedSlugs: ["aircondition", "ventilator", "luftrenser", "affugter"],
  sources: [
    { name: "Forbrugerrådet Tænk — Mobil aircondition er en klimagris", url: "https://taenk.dk/test/mobile-airconditioner/mobil-aircondition-er-en-klimagris" },
    { name: "Forbrugerrådet Tænk — Ventilatorer: bedst i test (sammenligning med mobil aircondition)", url: "https://taenk.dk/test/ventilatorer/ventilatorer-Bedst-i-test" },
    { name: "Forordning (EU) nr. 626/2011, bilag II — energiklasser for single duct-anlæg (EER)", url: "https://www.legislation.gov.uk/eur/2011/626/annex/II/adopted" },
    { name: "EPREL — EU's produktdatabase, fx Hisense APC12QC", url: "https://eprel.ec.europa.eu/screen/product/airconditioners/1618885" },
  ],
  calculatorConfig: {
    title: "Mobil aircondition forbrugsberegner",
    options: [
      { label: "Lille, 2,0–2,6 kW", kwhPerUse: 0.9 },
      { label: "Standard 3,5 kW, klasse A++", kwhPerUse: 1.0 },
      { label: "Standard 3,5 kW, klasse A", kwhPerUse: 1.3 },
      { label: "Stor, 4,0–4,7 kW", kwhPerUse: 1.6 },
    ],
    usageLabel: "Timer med køling pr. varm dag (ca. 40 dage om året)",
    usageUnit: "timer pr. dag",
    usageMin: 0.5,
    usageMax: 16,
    usageDefault: 3,
    usageStep: 0.5,
    per: "time",
    perYear: 40,
  },
  publishDate: "2026-11-24",
  updated: "2026-11-22",
};

export default mobilAircondition;
