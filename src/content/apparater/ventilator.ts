import type { ApplianceData } from "@/lib/types";

/**
 * Ventilator — intet EU-energimærke; økodesignforordning 206/2012 kræver effekt (W) og serviceværdi (m³/min pr. W)
 * oplyst for komfortventilatorer ≤ 125 W. Tænks test af 22 ventilatorer (15. juni 2026): 1,3–39,6 W på laveste
 * hastighed, 11–49,7 W på højeste; mobil aircondition 589–1.797 W til sammenligning.
 * Beregneren: ca. 60 dage om året med brug (maj–september).
 */
const ventilator: ApplianceData = {
  slug: "ventilator",
  meta: {
    category: "klima",
    usage: "per-hour",
    hasEuLabel: false,
    shiftable: false,
    synonyms: ["ventilator", "bordventilator", "gulvventilator", "standerventilator", "tårnventilator", "loftventilator", "blæser", "fan"],
  },
  name: "Ventilator",
  title: "Ventilator strømforbrug (2026) → watt og kWh pr. sommer",
  description:
    "Se hvor meget strøm en ventilator bruger i timen og over en sommer: bord-, gulv-, tårn- og loftventilatorer, laveste og højeste hastighed, og standby.",
  heading: "Strømforbrug for en ventilator: watt, pris i timen og dyreste timer",
  quickAnswer:
    "En ventilator bruger typisk 11–50 W på højeste hastighed og 1–40 W på laveste, viser Forbrugerrådet Tænks test af 22 ventilatorer fra 2026. En gulvventilator på 40 W koster omkring {{kr 0,04}} i timen ved månedens elpris. Over en sommer med 6 timer om dagen på 60 dage bliver det cirka {{kr 14}}.",
  kwhRange: [2, 60],
  typicalKwh: 14,
  wattage: 40,
  standbyWatts: 0.5,
  energyLabels: [],
  models: [],
  seasonalProfile: [0, 0, 0, 0.1, 0.5, 2.5, 4.0, 3.5, 1.2, 0.2, 0, 0],
  content: `<h2>Hvor meget strøm bruger en ventilator?</h2>
<p>En ventilator er en elmotor og en propel – intet andet. Den køler ikke luften, men flytter den, og den luftstrøm over huden får dig til at føle dig flere grader køligere. Derfor bruger den meget lidt strøm. Forbrugerrådet Tænk testede i 2026 22 bord-, gulv- og tårnventilatorer og målte et forbrug på 1,3–39,6 W på laveste hastighed og 11–49,7 W på højeste.</p>
<p>Med månedens elpris koster en time med en gulvventilator på 40 W omkring {{kr 0,04}}. Kører den hele natten i otte timer, er det {{kr 0,32}}. Over en sommer, hvor ventilatoren bruges seks timer om dagen på omkring 60 dage, bliver det cirka 14 kWh, svarende til {{kr 14}} for hele sommeren. Det er den sommer, beregneren ovenfor regner med.</p>
<p>Tænk sammenligner selv med en mobil aircondition, der bruger 589–1.797 W i deres tidligere test. En time med den mest effektive ventilator koster altså en lille brøkdel af en time med en mobil aircondition.</p>

<h2>Forbrug efter ventilatortype</h2>
<table>
<thead><tr><th>Type</th><th>Typisk effekt</th><th>Pris i timen</th><th>Pris for en sommer (6 t × 60 dage)</th></tr></thead>
<tbody>
<tr><td>USB- eller clipventilator</td><td>2–5 W</td><td>{{kr 0,002-0,005}}</td><td>{{kr 0,7-1,8}}</td></tr>
<tr><td>Bordventilator</td><td>15–35 W</td><td>{{kr 0,015-0,035}}</td><td>{{kr 5,4-12,6}}</td></tr>
<tr><td>Gulv- eller standerventilator</td><td>30–50 W</td><td>{{kr 0,03-0,05}}</td><td>{{kr 10,8-18}}</td></tr>
<tr><td>Tårnventilator</td><td>25–45 W</td><td>{{kr 0,025-0,045}}</td><td>{{kr 9-16,2}}</td></tr>
<tr><td>Loftventilator med DC-motor</td><td>5–35 W</td><td>{{kr 0,005-0,035}}</td><td>{{kr 1,8-12,6}}</td></tr>
</tbody>
</table>
<p>Effekten afhænger mest af hastigheden og motortypen. Tænks spænd på laveste hastighed – fra 1,3 til 39,6 W – viser, at nogle billige ventilatorer næsten ikke sparer noget ved at skrue ned, mens de bedste kører for få watt. Tænk fandt, at de billigste ventilatorer klarede sig dårligst: de støjede mere, blæste mindre behageligt og brugte mere strøm.</p>

<h2>AC- eller DC-motor: hvad betyder det?</h2>
<p>Mange nyere ventilatorer har en DC-motor (jævnstrømsmotor) med elektronisk styring. Den kan køre meget langsomt med lavt forbrug og har ofte 10 eller flere hastigheder. En klassisk ventilator med AC-motor (vekselstrømsmotor) har typisk tre trin, og forskellen i forbrug mellem laveste og højeste trin er mindre, fordi motoren reguleres mere groft.</p>
<p>Til en ventilator, der skal køre hele natten i soveværelset på laveste trin, er en DC-model den mest sparsomme af de to motortyper. Tænk fremhæver netop, at de bedste ventilatorer har et lavt forbrug på både laveste og højeste hastighed – det er især DC-modellerne, der kan det.</p>

<h2>Serviceværdien: luft pr. watt</h2>
<p>Ventilatorer har ikke et EU-energimærke, men EU's økodesignforordning 206/2012 kræver, at producenten oplyser effekten i watt, den maksimale luftmængde i m³ pr. minut og serviceværdien – luftmængden delt med effekten, i (m³/min)/W. Jo højere serviceværdi, jo mere luft får du for strømmen. Tallene skal stå i den tekniske dokumentation og på producentens hjemmeside.</p>
<p>Serviceværdien er det, du skal sammenligne, hvis du vil have en sparsom ventilator. En ventilator med høj effekt er ikke nødvendigvis god – den kan bare være ineffektiv – og en ventilator med lav effekt kan være svag. Det er luften pr. watt, der tæller.</p>

<h2>Ventilator, mobil aircondition eller split-anlæg?</h2>
<table>
<thead><tr><th>Løsning</th><th>Typisk effekt</th><th>Pris i timen</th><th>Køler luften?</th></tr></thead>
<tbody>
<tr><td>Gulvventilator</td><td>40 W</td><td>{{kr 0,04}}</td><td>Nej, kun luftbevægelse</td></tr>
<tr><td>Fast split-aircondition, 3,5 kW</td><td>300–700 W</td><td>{{kr 0,3-0,7}}</td><td>Ja</td></tr>
<tr><td>Mobil aircondition, 3,5 kW</td><td>1.000–1.500 W</td><td>{{kr 1-1,5}}</td><td>Ja, men mindre effektivt</td></tr>
</tbody>
</table>
<p>Ventilatoren er klart den billigste af de tre løsninger i drift, men den sænker ikke temperaturen. Er soveværelset 27 grader, bliver det stadig 27 grader – det føles bare bedre. Tænk skriver netop, at en gulv- eller bordventilator kan være en forholdsvis billig løsning til et varmt soveværelse. Skal rummet faktisk køles ned, kræver det en <a href="/aircondition/">aircondition</a>, og her er et fast anlæg langt mere sparsomt end en <a href="/mobil-aircondition/">mobil aircondition</a>.</p>
<p>En ventilator kan også gøre en aircondition billigere: med en ventilator, der fordeler den kølede luft, kan du sætte airconditionen en grad eller to højere og stadig have det lige så behageligt.</p>

<h2>Hvornår på døgnet bruger ventilatoren strøm?</h2>
<p>En ventilator bruges, når det er varmt, og mange lader den køre om natten. Forbruget er så lille, at tidspunktet næsten ikke betyder noget for regningen: selv i døgnets dyreste timer kl. 17–21 koster en time med en gulvventilator kun en lille brøkdel af en krone – ved månedens gennemsnitspris er det {{kr 0,04}}. Det er antallet af timer og hastigheden, der flytter forbruget, ikke hvornår du tænder.</p>
<p>Brug timeren, hvis ventilatoren har en. Mange har brug for den, mens de falder i søvn, men ikke resten af natten, når temperaturen falder.</p>

<h2>Hvad bestemmer, hvor meget strøm ventilatoren bruger?</h2>
<p>Fire ting afgør forbruget. Den første er hastigheden: luftmængden stiger nogenlunde lineært med omdrejningerne, men effekten stiger langt hurtigere, så det sidste trin koster uforholdsmæssigt meget. Den anden er motortypen, hvor DC-motorer kan køre langsomt med få watt. Den tredje er bladenes størrelse og form – store, langsomme blade flytter mere luft pr. watt end små, hurtige, og det er derfor loftventilatorer kan være så sparsomme. Den fjerde er ekstraudstyr: oscillering, lys, ionisator og display bruger lidt strøm hver især. Oscilleringen trækker en lille ekstra motor, men den kan til gengæld gøre, at en lavere hastighed føles lige så behagelig, fordi luften rammer dig i pust frem for konstant. Tårnventilatorer har ofte en tværstrømsrulle i stedet for propelblade; de er smalle og stille, men flytter typisk mindre luft pr. watt end en god gulvventilator.</p>

<h2>Standby og loftventilatorer</h2>
<p>Ventilatorer med fjernbetjening og display bruger lidt strøm på standby. EU's krav siden 2014 er højst 0,5 W i slukket tilstand og 1 W med display. Står en ventilator i stikket hele året, bliver det 4–9 kWh – det kan være mere end ventilatorens forbrug om sommeren, hvis du bruger den lidt. Tag stikket ud, når sommeren er forbi.</p>
<p>Loftventilatorer bruges også om vinteren i nogle hjem til at fordele varmen fra brændeovnen eller varmepumpen. Her kører de på laveste trin og bruger få watt, men mange timer. En loftventilator på 10 W, der kører 10 timer om dagen hele vinteren, bruger omkring 18 kWh, svarende til {{kr 18}}.</p>

<h2>Sådan holder du ventilatorens forbrug nede</h2>
<ol>
<li><strong>Vælg en DC-model</strong> til natbrug – den kører stille og sparsomt på lave trin.</li>
<li><strong>Brug laveste trin, der er behageligt</strong> – forskellen mellem laveste og højeste trin kan være en faktor ti.</li>
<li><strong>Brug timeren</strong> – sluk, når du er faldet i søvn.</li>
<li><strong>Placer den rigtigt</strong> – ved et åbent vindue om aftenen kan den trække kølig luft ind.</li>
<li><strong>Træk for om dagen</strong> – mindre sol ind betyder kortere tid med ventilatoren.</li>
<li><strong>Tag stikket ud om vinteren</strong> – så er standbyforbruget nul.</li>
</ol>
<p>Er det tør eller dårlig luft, der er problemet, og ikke varmen, kan en <a href="/luftrenser/">luftrenser</a> være det rigtige valg i stedet – den bruger også få watt. Og om vinteren, når du har brug for det modsatte, er en <a href="/varmeblaeser/">varmeblæser</a> mange gange dyrere i drift end en ventilator.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger en ventilator?",
      answer:
        "Tænks test af 22 ventilatorer fra 2026 målte 1,3–39,6 W på laveste hastighed og 11–49,7 W på højeste. En typisk gulvventilator bruger omkring 40 W, og en USB-ventilator 2–5 W.",
    },
    {
      question: "Hvad koster det at have en ventilator kørende hele natten?",
      answer:
        "En gulvventilator på 40 W bruger 0,32 kWh på otte timer, svarende til {{kr 0,32}} ved månedens elpris. På laveste trin er det ofte under det halve.",
    },
    {
      question: "Bruger en ventilator meget strøm?",
      answer:
        "Nej. Over en sommer med seks timer om dagen på 60 dage bruger en gulvventilator omkring 14 kWh, svarende til {{kr 14}}. Det er en lille brøkdel af en mobil aircondition, som bruger 589–1.797 W.",
    },
    {
      question: "Er en ventilator billigere end aircondition?",
      answer:
        "Ja, meget. En ventilator på 40 W koster {{kr 0,04}} i timen, mens en mobil aircondition koster {{kr 1-1,5}} og en fast aircondition {{kr 0,3-0,7}}. Men ventilatoren sænker ikke temperaturen.",
    },
    {
      question: "Bruger en ventilator strøm på standby?",
      answer:
        "Ventilatorer med fjernbetjening bruger højst 0,5–1 W på standby efter EU's krav, altså 4–9 kWh om året, svarende til {{kr 4-9}}. Tag stikket ud om vinteren.",
    },
    {
      question: "Hvad er serviceværdien på en ventilator?",
      answer:
        "Serviceværdien er luftmængden i m³ pr. minut delt med effekten i watt. EU kræver, at producenten oplyser den. Jo højere serviceværdi, jo mere luft får du for strømmen.",
    },
  ],
  relatedSlugs: ["aircondition", "mobil-aircondition", "luftrenser", "terrassevarmer", "varmeblaeser"],
  sources: [
    { name: "Forbrugerrådet Tænk — Ventilatorer: bedst i test (15. juni 2026)", url: "https://taenk.dk/test/ventilatorer/ventilatorer-Bedst-i-test" },
    { name: "Forordning (EU) nr. 206/2012, bilag I — krav til komfortventilatorer", url: "https://www.legislation.gov.uk/eur/2012/206/annex/I/adopted" },
  ],
  calculatorConfig: {
    title: "Ventilator forbrugsberegner",
    options: [
      { label: "USB- eller clipventilator (ca. 4 W)", kwhPerUse: 0.004 },
      { label: "Laveste trin, DC-ventilator (ca. 10 W)", kwhPerUse: 0.01 },
      { label: "Bordventilator (ca. 25 W)", kwhPerUse: 0.025 },
      { label: "Gulv- eller tårnventilator (ca. 40 W)", kwhPerUse: 0.04 },
    ],
    usageLabel: "Timer i brug pr. dag (ca. 60 varme dage om året)",
    usageUnit: "timer pr. dag",
    usageMin: 1,
    usageMax: 24,
    usageDefault: 6,
    usageStep: 1,
    per: "time",
    perYear: 60,
  },
  publishDate: "2026-11-26",
  updated: "2026-11-22",
};

export default ventilator;
