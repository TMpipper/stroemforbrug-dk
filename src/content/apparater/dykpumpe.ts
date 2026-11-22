import type { ApplianceData } from "@/lib/types";

/**
 * Dykpumpe — dræn-/spildevandspumpe til kælder og pumpebrønd, og pumpe til regnvandstank. Intet EU-energimærke.
 * Tal: Kärcher SP 9.500 Dirt (280 W, 9.500 l/t, 6 m løftehøjde), Gardena Dirty Water Pump 9000 (300 W, 9.000 l/t),
 * Gardena Dirty Water Pump 20000 Aquasensor (750 W, 20.000 l/t), Grundfos Unilift KP 250 A1 (P1 480 W, 3,11 l/s) og
 * Unilift AP12.40.04.A1 (P1 0,7 kW, 3,89 l/s) — Grundfos-tal fra forhandleren Lenntechs kopi af Grundfos' produktdata.
 * Bolius: drænbrøndens pumpe kører med mellemrum; en spildevandsbrønd tømmes på 10-15 min; tjek to gange om året.
 * Timer pr. år og kWh pr. m³ er vores skøn/omregning (fuld flow ved lav løftehøjde = nedre grænse).
 */
const dykpumpe: ApplianceData = {
  slug: "dykpumpe",
  meta: {
    category: "have",
    usage: "per-hour",
    hasEuLabel: false,
    shiftable: false,
    synonyms: ["dykpumpe", "drænpumpe", "kælderpumpe", "pumpebrønd", "spildevandspumpe", "regnvandspumpe", "dykpumpe til regnvand", "grundfos unilift", "kloakpumpe"],
  },
  name: "Dykpumpe",
  article: "en",
  title: "Dykpumpe strømforbrug (2026) → watt, kælder og regnvand",
  description:
    "Se hvor meget strøm en dykpumpe bruger i timen og pr. m³ vand: drænpumpe i kælder og pumpebrønd, regnvandspumpe og spildevandspumpe på 280-750 W.",
  heading: "Strømforbrug for en dykpumpe: watt, pris i timen og dyreste timer",
  quickAnswer:
    "En dykpumpe til hus og have bruger typisk 280-750 W, mens den kører. En pumpe på 480 W koster omkring {{kr 0,48}} i timen ved {{pris_kwh}}, og 50 driftstimer om året bliver cirka 24 kWh, eller {{kr 24}}. Pr. kubikmeter vand er det ofte under 0,1 kWh, så det er antallet af timer, der afgør regningen.",
  kwhRange: [1, 1000],
  typicalKwh: 24,
  wattage: 480,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.4, 1.2, 1.0, 0.8, 0.9, 1.0, 1.0, 1.0, 0.9, 1.0, 1.3, 1.5],
  content: `<h2>Tre slags dykpumper i et hus</h2>
<p>En dykpumpe står nede i vandet og skubber det op og væk gennem en slange eller et rør. I private hjem bruges den typisk til tre ting: at tømme en pumpebrønd med drænvand eller spildevand fra en kælder, at pumpe vand ud efter en oversvømmelse, og at hente vand op fra en regnvandstank til haven. De tre bruger meget forskellige mængder strøm — ikke fordi pumperne er så forskellige, men fordi de kører i meget forskelligt antal timer.</p>
<p>Effekten står på typeskiltet. Kärcher oplyser 280 W for SP 9.500 Dirt, der kan flytte 9.500 liter i timen, og Gardena 300 W for Dirty Water Pump 9000 med 9.000 liter i timen. Til en fast pumpebrønd bruges ofte kraftigere pumper: Grundfos' Unilift KP 250 har en optagen effekt på 480 W, og Unilift AP12 på 0,7 kW. Gardenas største model til snavset vand, Dirty Water Pump 20000 Aquasensor, har en motor på 750 W og flytter op til 20.000 liter i timen.</p>

<h2>Watt og pris i timen</h2>
<table>
<thead><tr><th>Pumpe</th><th>Vand (maks.)</th><th>kWh i timen</th><th>Pris i timen</th><th>50 timer om året</th></tr></thead>
<tbody>
<tr><td>Kärcher SP 9.500 Dirt (280 W)</td><td>9.500 l/t</td><td>0,28</td><td>{{kr 0,28}}</td><td>{{kr 14}}</td></tr>
<tr><td>Grundfos Unilift KP 250 (480 W)</td><td>ca. 11.200 l/t</td><td>0,48</td><td>{{kr 0,48}}</td><td>{{kr 24}}</td></tr>
<tr><td>Grundfos Unilift AP12 (0,7 kW)</td><td>ca. 14.000 l/t</td><td>0,7</td><td>{{kr 0,7}}</td><td>{{kr 35}}</td></tr>
<tr><td>Gardena 20000 Aquasensor (750 W)</td><td>20.000 l/t</td><td>0,75</td><td>{{kr 0,75}}</td><td>{{kr 37,5}}</td></tr>
</tbody>
</table>
<p>Grundfos opgiver vandmængden i liter pr. sekund; vi har regnet om til liter i timen. Vandmængden er det maksimum, pumpen kan levere, når den ikke skal løfte vandet ret højt. Jo højere vandet skal op, og jo længere slangen er, desto mindre vand flytter pumpen pr. time.</p>

<h2>Strøm pr. kubikmeter vand</h2>
<p>For en dykpumpe giver det mening at regne i kubikmeter. Kärchers pumpe på 280 W, der flytter 9.500 liter i timen, bruger efter vores omregning omkring 0,03 kWh pr. m³ ved fuld vandmængde. I praksis, hvor vandet skal et par meter op og gennem en slange, kan det let blive to-tre gange så meget, men det er stadig under 0,1 kWh pr. m³. Et regnskyl på 10 mm over et tag på 100 m² giver 1.000 liter — altså én kubikmeter, som en dykpumpe kan flytte for under {{kr 0,1}}.</p>
<p>Det betyder, at selv en oversvømmet kælder med 5 m³ vand er billig at tømme i strøm. Det, der koster, er skaderne og den tid, det tager — ikke pumpens forbrug.</p>

<h2>Pumpebrønden: kører med mellemrum hele året</h2>
<p>En fast pumpebrønd ved en kælder har en svømmer eller en niveauføler, der starter pumpen, når vandet når en vis højde, og stopper den igen, når brønden er tom. Bolius skriver, at en pumpebrønd til drænvand normalt ikke rummer så meget vand, og at pumpen derfor kører med mellemrum. Om en brønd til spildevand skriver Bolius, at det bør tage 10-15 minutter at pumpe den tom.</p>
<p>Hvor mange timer pumpen kører på et år, afhænger helt af grundvandet, regnen og hvor meget vand drænet samler. En pumpebrønd i et tørt område kan nøjes med få driftstimer, mens en brønd i lavtliggende jord med højt grundvand kan starte mange gange i døgnet om vinteren. Beregnerens 50 timer er vores skøn for en almindelig drænbrønd; vil du kende dit eget tal, kan en stikmåler eller en timetæller på pumpens stik vise det. Pludselig flere driftstimer er i øvrigt et tegn på, at noget er galt — for eksempel en utæt kontraventil, der lader vandet løbe tilbage.</p>
<p>Bolius anbefaler at tjekke og rengøre pumpebrønden cirka to gange om året. En svømmer, der hænger fast, kan få pumpen til at køre uden vand, hvilket både bruger strøm og slider pumpen.</p>

<h2>Regnvandspumpe til haven</h2>
<p>Bruger du en dykpumpe til at vande med regnvand fra en tank, kører den kun, mens du vander. En sommer med to-tre vandinger om ugen af en halv time giver måske 20-30 timer — vores eksempel. Med en pumpe på 300 W bliver det 6-9 kWh, eller {{kr 6}}-{{kr 9}} for hele sommeren.</p>
<p>Her kan du faktisk vælge tidspunktet, i hvert fald hvis du har en automatisk vanding: det er bedre for planterne at vande tidligt om morgenen, og det er sjældent døgnets dyreste tid. Undgå tiden fra kl. 17 til 21, hvor nettariffen er højest. For drænpumper og spildevandspumper kan forbruget ikke flyttes; de kører, når vandet kommer. Boksen længere oppe på siden viser dagens timepriser.</p>

<h2>Hvad bestemmer forbruget?</h2>
<ul>
<li><strong>Løftehøjden</strong> — jo højere vandet skal op, desto mindre vand flytter pumpen pr. kWh. Kärcher og Gardena oplyser for eksempel 6 meter som største løftehøjde for deres modeller på 280 og 300 W.</li>
<li><strong>Slangen</strong> — en lang, tynd slange giver modstand. Brug den diameter, pumpen er beregnet til.</li>
<li><strong>Snavs</strong> — en pumpe til snavset vand kan tage partikler, men et tilstoppet indløb giver mindre vand og længere driftstid.</li>
<li><strong>Svømmerens indstilling</strong> — en svømmer, der starter og stopper meget tæt, giver mange korte starter. Lidt større afstand mellem start og stop giver færre og længere kørsler.</li>
<li><strong>Kontraventilen</strong> — løber vandet tilbage i brønden, skal pumpen flytte det samme vand flere gange.</li>
</ul>

<h2>Dykpumpen i husets samlede forbrug</h2>
<p>For de fleste er dykpumpen en lille post. Den bruger langt mindre end en <a href="/affugter/">affugter</a>, der står i en fugtig kælder hele året, og den er kun en brøkdel af en <a href="/poolpumpe/">poolpumpe</a>, der kører mange timer i døgnet hele sommeren. Men har du en pumpebrønd i vandlidende jord, kan den køre så meget, at den kan ses på regningen — og så er det værd at se på drænet, kontraventilen og svømmeren, ikke kun pumpen.</p>

<h2>Sådan holder du forbruget nede</h2>
<ol>
<li>Tjek og rens pumpebrønden et par gange om året.</li>
<li>Sørg for, at kontraventilen lukker, så vandet ikke løber tilbage.</li>
<li>Brug en slange med den rigtige diameter, og hold den så kort som muligt.</li>
<li>Vand haven tidligt om morgenen i stedet for om aftenen.</li>
<li>Hold øje med driftstiden — flere timer end normalt kan være et tegn på en fejl.</li>
</ol>
<p>Brug beregneren ovenfor til at se, hvad din pumpe koster med det antal timer, den kører.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger en dykpumpe?",
      answer:
        "Typisk 280-750 W. Kärcher oplyser 280 W for SP 9.500 Dirt, Grundfos 480 W for Unilift KP 250 og Gardena 750 W for Dirty Water Pump 20000 Aquasensor. En pumpe på 480 W koster {{kr 0,48}} i timen.",
    },
    {
      question: "Hvad koster det at pumpe en kubikmeter vand?",
      answer:
        "Efter vores omregning bruger en lille dykpumpe omkring 0,03 kWh pr. m³ ved fuld vandmængde, og sjældent over 0,1 kWh pr. m³ i praksis. En kubikmeter koster derfor under {{kr 0,1}}.",
    },
    {
      question: "Hvor meget strøm bruger en pumpebrønd om året?",
      answer:
        "Det afhænger af, hvor mange timer pumpen kører. Med 50 driftstimer og en pumpe på 480 W bliver det cirka 24 kWh, eller {{kr 24}}. I vandlidende jord kan det blive mange gange mere.",
    },
    {
      question: "Hvor længe kører pumpen i en pumpebrønd?",
      answer:
        "Bolius skriver, at en drænbrønds pumpe kører med mellemrum, og at det bør tage 10-15 minutter at tømme en spildevandsbrønd. Hvor ofte den starter, afhænger af grundvand og regn.",
    },
    {
      question: "Kan jeg flytte dykpumpens forbrug til billige timer?",
      answer:
        "En drænpumpe kører, når vandet kommer, så den kan ikke flyttes. En regnvandspumpe til vanding kan du derimod sætte til at køre tidligt om morgenen i stedet for om aftenen.",
    },
  ],
  relatedSlugs: ["affugter", "poolpumpe", "hoejtryksrenser", "elplaeneklipper", "kompressor"],
  sources: [
    { name: "Kärcher — SP 9.500 Dirt (effekt, vandmængde, løftehøjde)", url: "https://www.karcher.com/gb/en/home-garden/drainage-pumps/sp-9-500-dirt-16458010.html" },
    { name: "Gardena — Dirty Water Pump 9000", url: "https://gardena.com/int/products/pumps/drainage-pumps/dirty-water-pump-9000/970485901.html" },
    { name: "Gardena — Dirty Water Pump 20000 Aquasensor", url: "https://www.gardena.com/int/products/pumps/drainage-pumps/dirty-water-pump-20000-aquasensor/970486101.html" },
    { name: "Grundfos Unilift KP 250 A1 (produktdata via Lenntech)", url: "https://www.lenntech.com/products/grundfos/unilift-kp/012h1600.htm" },
    { name: "Grundfos Unilift AP12.40.04.A1 (produktdata via Lenntech)", url: "https://www.lenntech.com/products/grundfos/unilift-ap/unilift-ap12/96011018.htm" },
    { name: "Bolius — Hvad er en pumpebrønd?", url: "https://www.bolius.dk/hvad-er-en-pumpebroend-18879" },
    { name: "Bolius — Tjek og rens din pumpebrønd", url: "https://www.bolius.dk/tjek-og-rens-din-pumpebroend-98745" },
  ],
  calculatorConfig: {
    title: "Beregn dykpumpens strømforbrug",
    options: [
      { label: "Lille dræn- eller regnvandspumpe (280-300 W)", kwhPerUse: 0.28 },
      { label: "Pumpebrønd, Unilift KP-klassen (480 W)", kwhPerUse: 0.48 },
      { label: "Kraftig pumpebrønd (0,7 kW)", kwhPerUse: 0.7 },
      { label: "Stor pumpe til snavset vand (750 W)", kwhPerUse: 0.75 },
    ],
    usageLabel: "Driftstimer pr. år",
    usageUnit: "timer/år",
    usageMin: 1,
    usageMax: 1000,
    usageDefault: 50,
    usageStep: 1,
    per: "time",
    perYear: 1,
  },
  publishDate: "2026-12-15",
  updated: "2026-11-22",
};

export default dykpumpe;
