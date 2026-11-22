import type { ApplianceData } from "@/lib/types";

/**
 * Luftfugter — intet EU-energimærke. Fysik: at fordampe 1 liter vand fra 15 °C kræver ca. 0,73 kWh
 * (0,10 kWh til opvarmning + 0,63 kWh fordampningsvarme), så en dampfugter bruger mindst det pr. liter.
 * Ultralyd og fordampning forstøver/fordamper uden at koge. Stiftung Warentest (sep. 2025): strøm + vand under 14 euro/år
 * for alle testede (ultralyd/fordampning); Philips HU4803 (fordampning, 220 ml/t, 25 m²).
 * Beregneren: fyringssæsonen, ca. 150 dage.
 */
const luftfugter: ApplianceData = {
  slug: "luftfugter",
  meta: {
    category: "klima",
    usage: "per-hour",
    hasEuLabel: false,
    shiftable: false,
    synonyms: ["luftfugter", "luftbefugter", "luftfugtere", "humidifier", "ultralydsluftfugter", "dampluftfugter", "fordampningsluftfugter"],
  },
  name: "Luftfugter",
  title: "Luftfugter strømforbrug (2026) → ultralyd, damp og watt",
  description:
    "Se hvor meget strøm en luftfugter bruger: ultralyd, fordampning og damp har vidt forskelligt forbrug. Se watt, kWh pr. liter vand og pris for en vinter.",
  heading: "Strømforbrug for en luftfugter: watt, pris i timen og dyreste timer",
  quickAnswer:
    "En luftfugter med ultralyd eller fordampning bruger typisk 10–30 W, mens en dampfugter, der koger vandet, bruger 150–500 W. Med 8 timer om dagen i fyringssæsonen bruger en ultralydsfugter omkring 30 kWh, svarende til {{kr 30}} om året ved månedens elpris. En dampfugter bruger mindst 0,7 kWh for hver liter vand, den fordamper.",
  kwhRange: [5, 600],
  typicalKwh: 30,
  wattage: 25,
  standbyWatts: 0.5,
  energyLabels: [],
  models: [],
  seasonalProfile: [2.3, 2.0, 1.4, 0.4, 0, 0, 0, 0, 0.2, 1.0, 2.0, 2.7],
  content: `<h2>Hvor meget strøm bruger en luftfugter?</h2>
<p>Hvor meget strøm en luftfugter bruger, afhænger næsten udelukkende af, hvordan den får vand op i luften. Der er tre principper, og forskellen i forbrug mellem dem er en faktor 10–20. En luftfugter med ultralyd ryster vandet til en fin tåge med en lille membran. En fordampningsfugter blæser luft gennem et vådt filter. Begge bruger få titals watt. En dampfugter koger derimod vandet, og det kræver lige så meget energi som at koge vand i en elkedel – hver time.</p>
<p>Den tyske forbrugerorganisation Stiftung Warentest testede i 2025 en række ultralyds- og fordampningsfugtere og fandt, at strøm og vand tilsammen kostede under 14 euro om året for alle de testede modeller. Det er de fugtere, de fleste danskere køber. En ultralydsfugter på 25 W, der kører 8 timer om dagen i fyringssæsonen, bruger omkring 30 kWh om året, svarende til {{kr 30}} ved månedens elpris.</p>

<h2>Ultralyd, fordampning og damp: forbruget side om side</h2>
<table>
<thead><tr><th>Type</th><th>Typisk effekt</th><th>Pris i timen</th><th>Pris for en vinter (8 t × 150 dage)</th></tr></thead>
<tbody>
<tr><td>Fordampning (vådt filter + ventilator)</td><td>5–20 W</td><td>{{kr 0,005-0,02}}</td><td>{{kr 6-24}}</td></tr>
<tr><td>Ultralyd (kold tåge)</td><td>20–35 W</td><td>{{kr 0,02-0,035}}</td><td>{{kr 24-42}}</td></tr>
<tr><td>Ultralyd med varm tåge</td><td>80–150 W</td><td>{{kr 0,08-0,15}}</td><td>{{kr 96-180}}</td></tr>
<tr><td>Damp (koger vandet)</td><td>150–500 W</td><td>{{kr 0,15-0,5}}</td><td>{{kr 180-600}}</td></tr>
</tbody>
</table>
<p>Tabellen viser typiske spænd for hver type. Den enkelte model kan ligge uden for, så tjek effekten på typeskiltet. Fordampningsfugtere som Philips' 2000-serie afgiver op til 220 ml vand i timen til et rum på 25 m², og ventilatoren er det eneste, der bruger strøm. Ultralydsmodeller ligger typisk på 20–35 W.</p>

<h2>Hvorfor bruger en dampfugter så meget strøm?</h2>
<p>Det er ren fysik. For at fordampe en liter vand skal det først varmes fra hanens 10–15 grader op til 100 grader, og derefter skal det koge væk. Opvarmningen kræver omkring 0,1 kWh pr. liter, og selve fordampningen kræver yderligere 0,63 kWh. Tilsammen er det cirka 0,73 kWh pr. liter – uanset hvor smart dampfugteren er. Afgiver den 0,4 liter i timen, bruger den altså mindst 0,3 kWh i timen, svarende til {{kr 0,3}}.</p>
<p>Ultralyds- og fordampningsfugtere slipper for at koge vandet, men energien til fordampningen forsvinder ikke: tågen fordamper i rummet og tager varmen fra luften. Om vinteren skal radiatorerne eller varmepumpen levere den varme. Det er stadig billigere, fordi en varmepumpe leverer varmen langt mere effektivt end et kogeelement, og fordi fjernvarme ofte er billigere end strøm – men det er værd at vide, at luftfugtning aldrig er helt gratis.</p>
<p>Til gengæld har dampfugteren én fordel: den koger vandet og spreder derfor ikke bakterier. Stiftung Warentest fandt, at nogle af de testede ultralyds- og fordampningsmodeller kunne afgive bakterier til rumluften. Ultralydsfugtere spreder desuden kalk som hvidt støv, hvis du bruger hårdt vandværksvand – noget, der er almindeligt i store dele af Danmark.</p>

<h2>Har du brug for en luftfugter?</h2>
<p>I danske boliger er problemet langt oftere for meget fugt end for lidt. Luftfugtigheden indendørs bør ligge omkring 40–60 procent. Om vinteren kan den falde under 30 procent i et godt opvarmet hus med mekanisk ventilation, fordi den kolde udeluft indeholder meget lidt vand. Det kan give tørre øjne, statisk elektricitet og tør hud. Om sommeren er det sjældent nødvendigt at fugte.</p>
<p>Køb et hygrometer, før du køber en luftfugter, og mål et par uger. Er luften kun tør i kortere perioder, kan du fugte gratis ved at tørre tøj indendørs, lade badeværelsesdøren stå åben efter badet eller have planter. Er luftfugtigheden høj, skal du i stedet bruge en <a href="/affugter/">affugter</a> – for høj fugt giver skimmelsvamp, og det er et langt større problem end tør luft.</p>
<p>Har du et <a href="/ventilationsanlaeg/">ventilationsanlæg</a>, kan det ofte skrues lidt ned om vinteren, så det ikke tørrer luften så meget ud. Nogle anlæg har en roterende varmeveksler, der også genvinder fugt.</p>

<h2>Hvor mange timer kører luftfugteren om året?</h2>
<p>Luftfugteren bruges næsten kun i fyringssæsonen fra oktober til april, når den kolde udeluft gør indeluften tør. Beregneren regner med omkring 150 dage om året, og det er tallet, der gør forskellen mellem typerne så tydelig. En ultralydsfugter på 25 W, der kører 8 timer i 150 dage, bruger 30 kWh. En dampfugter på 300 W bruger med samme brug 360 kWh, svarende til {{kr 360}} – tolv gange så meget, og omtrent det samme som et ekstra køleskab og en fryser tilsammen. Kører dampfugteren døgnet rundt i et stort rum, kan den let passere 1.000 kWh i løbet af en vinter. Det er grunden til, at typen betyder mere for elregningen end mærket og prisen på selve apparatet.</p>
<p>Tæl også de dage med, hvor du ikke behøver den. Er luften over 40 procent det meste af vinteren, er en luftfugter overflødig, og så er den billigste kWh den, du ikke bruger.</p>

<h2>Hygrostat: den vigtigste funktion for forbruget</h2>
<p>En luftfugter med indbygget hygrostat stopper, når luftfugtigheden når det niveau, du har valgt. Uden hygrostat kører den, til tanken er tom – og så kan rummet blive så fugtigt, at der dannes kondens på vinduerne. Det koster strøm og kan give fugtskader. Philips' fordampningsfugter slukker selv, når den når målet, eller når der ikke er mere vand. Vælg en model med hygrostat, og sæt den til 40–50 procent.</p>

<h2>Hvornår på døgnet bruger luftfugteren strøm?</h2>
<p>De fleste bruger luftfugteren om natten i soveværelset eller om aftenen i stuen. For ultralyds- og fordampningsfugtere er forbruget så lille, at tidspunktet næsten ikke betyder noget: selv i døgnets dyreste timer koster en time kun få øre. For en dampfugter er det anderledes – her svarer en aften i de dyre timer fra kl. 17 til 21 til at koge flere liter vand. Kan du lade en dampfugter køre om natten og slukke den om aftenen, ligger forbruget i billigere timer.</p>

<h2>Standby og vedligehold</h2>
<p>På standby bruger en luftfugter typisk under 0,5 W, svarende til under 5 kWh om året. Det betyder lidt. Vedligeholdet betyder mere: Stiftung Warentest fandt, at reservedele, filtre og hygiejnemidler kunne løfte de samlede driftsudgifter til mellem cirka 13 og 247 euro om året, altså langt mere end strømmen. Rens tanken jævnligt efter producentens anvisning, og skift filtret på en fordampningsfugter, når det er kalket til – et tilstoppet filter fugter dårligere for den samme strøm.</p>

<h2>Sådan holder du luftfugterens forbrug nede</h2>
<ol>
<li><strong>Mål først</strong> – brug et hygrometer, så du kun fugter, når luften faktisk er tør.</li>
<li><strong>Vælg ultralyd eller fordampning</strong> – de bruger en tiendedel eller mindre af en dampfugters strøm.</li>
<li><strong>Brug hygrostaten</strong> – 40–50 procent er nok.</li>
<li><strong>Fugt kun det rum, du bruger</strong> – luk døren til soveværelset.</li>
<li><strong>Undgå varm tåge</strong>, medmindre du har en god grund – varmeelementet mangedobler forbruget.</li>
<li><strong>Rens tank og filter</strong> – både for hygiejnen og effektiviteten.</li>
</ol>
<p>En luftfugter er en lille post på elregningen ved siden af en <a href="/varmeblaeser/">varmeblæser</a> eller en <a href="/luftrenser/">luftrenser</a>, der kører døgnet rundt på højeste trin.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger en luftfugter?",
      answer:
        "En ultralydsfugter bruger typisk 20–35 W, og en fordampningsfugter 5–20 W. En dampfugter, der koger vandet, bruger 150–500 W. Ultralyd med varm tåge ligger imellem, typisk 80–150 W.",
    },
    {
      question: "Hvad koster det at have en luftfugter kørende hele natten?",
      answer:
        "En ultralydsfugter på 25 W bruger 0,2 kWh på 8 timer, svarende til {{kr 0,2}}. En dampfugter på 300 W bruger 2,4 kWh på 8 timer, svarende til {{kr 2,4}}.",
    },
    {
      question: "Hvorfor bruger en dampfugter så meget strøm?",
      answer:
        "Den skal koge vandet. At fordampe en liter vand kræver omkring 0,73 kWh, uanset model. Afgiver den 0,4 liter i timen, bruger den mindst 0,3 kWh i timen, svarende til {{kr 0,3}}.",
    },
    {
      question: "Bruger en luftfugter meget strøm om året?",
      answer:
        "En ultralydsfugter, der kører 8 timer om dagen i fyringssæsonen, bruger omkring 30 kWh om året, svarende til {{kr 30}}. Stiftung Warentest fandt, at strøm og vand kostede under 14 euro om året for alle de testede ultralyds- og fordampningsmodeller.",
    },
    {
      question: "Har luftfugtere et energimærke?",
      answer:
        "Nej, der findes ikke et EU-energimærke for luftfugtere. Se på effekten i watt og på, om fugteren har hygrostat, der stopper den, når luften er fugtig nok.",
    },
    {
      question: "Hvilken luftfugtighed skal der være i huset?",
      answer:
        "Omkring 40–60 procent. I danske boliger er for høj fugt oftere et problem end for lav, så mål med et hygrometer, før du køber en luftfugter. Er fugtigheden høj, har du brug for en affugter i stedet.",
    },
  ],
  relatedSlugs: ["affugter", "luftrenser", "ventilationsanlaeg", "varmeblaeser"],
  sources: [
    { name: "Stiftung Warentest — Luftbefeuchter im Test (sep. 2025)", url: "https://www.test.de/Luftbefeuchter-im-Test-4957429-0/" },
    { name: "Philips — Series 2000 luftfugter HU4803 (fordampning, 220 ml/t)", url: "https://www.philips.com.au/c-p/HU4803_70/air-humidifier" },
  ],
  calculatorConfig: {
    title: "Luftfugter forbrugsberegner",
    options: [
      { label: "Fordampning med vådt filter (ca. 10 W)", kwhPerUse: 0.01 },
      { label: "Ultralyd, kold tåge (ca. 25 W)", kwhPerUse: 0.025 },
      { label: "Ultralyd med varm tåge (ca. 100 W)", kwhPerUse: 0.1 },
      { label: "Damp, koger vandet (ca. 300 W)", kwhPerUse: 0.3 },
    ],
    usageLabel: "Timer i drift pr. dag i fyringssæsonen (ca. 150 dage)",
    usageUnit: "timer pr. dag",
    usageMin: 1,
    usageMax: 24,
    usageDefault: 8,
    usageStep: 1,
    per: "time",
    perYear: 150,
  },
  publishDate: "2026-11-26",
  updated: "2026-11-22",
};

export default luftfugter;
