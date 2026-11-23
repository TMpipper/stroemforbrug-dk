import type { ApplianceData } from "@/lib/types";

/**
 * Iltkoncentrator (stationær, til hjemmet) — intet EU-energimærke. Tal: Philips EverFlo (gennemsnitligt forbrug 350 W),
 * Invacare Perfecto2 EU-datablad (230 V 50 Hz, 280 W ved højst 3 l/min, højst 300 W ved 0,5-5 l/min).
 * Brugstid: Aalborg Universitetshospital (ilt mindst 16 timer i døgnet, evt. hele døgnet).
 * Refusion: Aalborg UH-patientinformation FKLT21-115 og MEDA12-101 (Region Nordjylland refunderer den ekstra eludgift til
 * NemKonto; leverandøren aflæser timetælleren og indberetter til regionen), Lindes patientinformation (refusion til
 * NemKonto efter aflæsning ca. hvert kvartal). Vi skriver ikke, at reglen gælder i andre regioner.
 */
const iltkoncentrator: ApplianceData = {
  slug: "iltkoncentrator",
  meta: {
    category: "pleje",
    usage: "per-hour",
    hasEuLabel: false,
    shiftable: false,
    synonyms: ["iltkoncentrator", "iltapparat", "ilt i hjemmet", "iltmaskine", "oxygen concentrator", "hjemmeilt", "iltbehandling", "everflo", "perfecto2"],
  },
  name: "Iltkoncentrator",
  article: "en",
  title: "Iltkoncentrator strømforbrug (2026) → watt, døgn og refusion",
  description:
    "En iltkoncentrator til hjemmet bruger 280-350 W og kører ofte 16 timer i døgnet. Se kWh pr. døgn og år, Philips og Invacares tal og refusionen af eludgiften.",
  heading: "Strømforbrug for en iltkoncentrator: watt og pris i timen",
  quickAnswer:
    "En stationær iltkoncentrator bruger 280-350 W. Invacare oplyser 280 W for Perfecto2 ved op til 3 liter ilt i minuttet, og Philips oplyser et gennemsnitligt forbrug på 350 W for EverFlo. Med 280 W i 16 timer i døgnet bliver det 4,5 kWh om dagen og cirka 1.635 kWh om året, svarende til {{kr 1.635}}. I Region Nordjylland refunderer regionen den ekstra eludgift.",
  kwhRange: [500, 3100],
  typicalKwh: 1635,
  wattage: 280,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  content: `<h2>En kompressor, der kører i mange timer</h2>
<p>En iltkoncentrator laver ilt af almindelig luft. En kompressor suger luft ind og presser den gennem to beholdere med et filtermateriale, der holder kvælstoffet tilbage, så luften, der kommer ud, har et højt iltindhold. Beholderne skiftes til at arbejde og blive renset, og det er kompressoren, der bruger næsten al strømmen. Den kører, så længe du får ilt.</p>
<p>Producenterne oplyser forbruget i deres datablade. Invacare skriver for Perfecto2 til det europæiske marked, at den kører på 230 volt og bruger 280 W ved et flow på op til 3 liter i minuttet og højst 300 W i hele området fra en halv til fem liter. Philips oplyser et gennemsnitligt forbrug på 350 W for EverFlo. Det er en effekt på niveau med en lille elradiator — men den står tændt i mange timer hver dag.</p>

<h2>Timer i døgnet gør forskellen</h2>
<p>Det er brugstiden, der gør en iltkoncentrator til en af de store poster på elregningen. Aalborg Universitetshospital skriver i sin patientinformation om iltbehandling i eget hjem, at ilten skal bruges mindst 16 timer i døgnet og eventuelt hele døgnet. Hvor mange timer du skal bruge den, bestemmer lægen — følg lægens og leverandørens anvisning.</p>
<table>
<thead><tr><th>Iltkoncentrator og brugstid</th><th>kWh pr. døgn</th><th>kWh om året</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>280 W (Invacare Perfecto2, op til 3 l/min), 16 timer</td><td>4,5</td><td>ca. 1.635</td><td>{{kr 1.635}}</td></tr>
<tr><td>280 W, hele døgnet</td><td>6,7</td><td>ca. 2.453</td><td>{{kr 2.453}}</td></tr>
<tr><td>350 W (Philips EverFlo, gennemsnit), 16 timer</td><td>5,6</td><td>ca. 2.044</td><td>{{kr 2.044}}</td></tr>
<tr><td>350 W, hele døgnet</td><td>8,4</td><td>ca. 3.066</td><td>{{kr 3.066}}</td></tr>
</tbody>
</table>
<p>En iltkoncentrator, der kører 16 timer i døgnet, bruger altså over 1.600 kWh om året — mere end mange af husets andre apparater tilsammen. Det er grunden til, at elregningen kan stige mærkbart, når man får ilt i hjemmet.</p>

<h2>Refusion af eludgiften</h2>
<p>Den ekstra elregning skal man ikke nødvendigvis selv betale. Aalborg Universitetshospital skriver i to patientinformationer om ilt i hjemmet, at Region Nordjylland refunderer den ekstra udgift til strøm, og at pengene udbetales til din NemKonto. Iltleverandøren aflæser apparatets timetæller fire gange om året og indberetter tallet til regionen, som afregner efter en fast takst. Leverandøren Linde skriver i sin patientinformation, at hospitalet refunderer elforbruget til NemKonto senest den 15. i måneden efter aflæsningen, som sker cirka hvert kvartal.</p>
<p>Hvordan refusionen er ordnet, hvis du bor i en anden region, har vi ikke fundet en officiel beskrivelse af. Spørg den afdeling, der har ordineret ilten, eller din iltleverandør, om du har ret til refusion, og hvordan den beregnes.</p>

<h2>Flowet og strømforbruget</h2>
<p>Lægen ordinerer, hvor mange liter ilt i minuttet du skal have. Invacares datablad viser, at forbruget kun stiger lidt med flowet: 280 W ved op til 3 liter og højst 300 W ved 5 liter. Kompressoren kører altså næsten lige hårdt, uanset om flowet er lavt eller højt. Invacare skriver også, at strømstyringen i Perfecto2 sparer 20 W. Flowet er ikke noget, du skal skrue på for at spare strøm — det er en del af behandlingen.</p>
<p>Den største forskel mellem modellerne er kompressorens størrelse og effektivitet. Et nyere apparat kan bruge mindre end et ældre ved samme flow, men det er leverandøren og regionen, der vælger apparatet. Bærbare iltkoncentratorer med batteri, som bruges uden for hjemmet, er mindre og bruger mindre strøm, men giver også mindre ilt.</p>

<h2>Varme, støj og placering</h2>
<p>Næsten al strømmen, en iltkoncentrator bruger, bliver til varme i rummet — 280-350 W, hele tiden, mens den kører. Om vinteren er varmen ikke spildt, fordi den hjælper med at varme boligen, men om sommeren kan rummet blive varmt. Invacare oplyser et lydniveau på under 37 dB for Perfecto2, så apparatet er hørbart, men ikke højt.</p>
<p>Følg leverandørens anvisning om placering: apparatet skal have luft omkring sig, og filtrene skal holdes rene. Et tilstoppet filter kan få kompressoren til at arbejde hårdere. Brug ikke en <a href="/varmeblaeser/">varmeblæser</a> eller et andet varmeapparat tæt på iltkoncentratoren eller slangerne.</p>

<h2>Hvornår bruger iltkoncentratoren strøm?</h2>
<p>Iltkoncentratoren kører, når du har brug for ilt, og forbruget kan ikke flyttes. Med 16 timer eller mere i døgnet dækker den både billige og dyre timer, og dagens timepriser højere oppe på siden viser, hvordan prisen svinger. Fordi apparatet kører så mange timer, er det elaftalens pris pr. kWh, der betyder mest for regningen — ikke tidspunktet.</p>

<h2>Iltkoncentratoren ved siden af andre apparater</h2>
<p>En iltkoncentrator er i en anden klasse end de fleste andre apparater i hjemmet. Selv en <a href="/cpap/">CPAP-maskine</a> med befugter og varmeslange bruger omkring en tiendedel af en iltkoncentrator, der kører 16 timer i døgnet. En <a href="/luftrenser/">luftrenser</a> på lavt trin bruger endnu mindre. Iltkoncentratoren ligger i samme størrelse som de apparater, der varmer eller lader i mange timer.</p>
<p>Det betyder, at det er værd at have styr på refusionen, og at det giver mening at holde øje med elaftalen, hvis du selv betaler en del af regningen. Spørg leverandøren, hvis du er i tvivl om, hvad timetælleren viser.</p>

<h2>Hvad bestemmer forbruget?</h2>
<ul>
<li><strong>Timer i døgnet</strong> — den vigtigste faktor. Lægen bestemmer, hvor længe du skal have ilt.</li>
<li><strong>Apparatets model</strong> — 280-350 W i de to datablade, vi har fundet.</li>
<li><strong>Flowet</strong> — betyder lidt: Invacare oplyser 280 W op til 3 l/min og højst 300 W.</li>
<li><strong>Filtrene</strong> — rene filtre lader kompressoren arbejde let. Følg leverandørens anvisning.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor mange watt bruger en iltkoncentrator?",
      answer:
        "En stationær iltkoncentrator til hjemmet bruger 280-350 W. Invacare oplyser 280 W for Perfecto2 ved op til 3 l/min, og Philips oplyser et gennemsnitligt forbrug på 350 W for EverFlo.",
    },
    {
      question: "Hvad koster det at have en iltkoncentrator kørende?",
      answer:
        "Med 280 W i 16 timer i døgnet bruger den 4,5 kWh om dagen, svarende til {{kr 4,48}}, og cirka 1.635 kWh om året, eller {{kr 1.635}}. Hele døgnet er det cirka 2.453 kWh.",
    },
    {
      question: "Får man refunderet strømmen til en iltkoncentrator?",
      answer:
        "I Region Nordjylland refunderer regionen den ekstra eludgift til din NemKonto ifølge Aalborg Universitetshospital. Leverandøren aflæser timetælleren fire gange om året. Spørg din afdeling eller leverandør, hvis du bor i en anden region.",
    },
    {
      question: "Bruger iltkoncentratoren mere strøm ved højere flow?",
      answer:
        "Kun lidt. Invacare oplyser 280 W ved op til 3 l/min og højst 300 W ved 0,5-5 l/min for Perfecto2. Flowet er en del af behandlingen — følg lægens anvisning.",
    },
    {
      question: "Hvor mange timer om dagen kører en iltkoncentrator?",
      answer:
        "Aalborg Universitetshospital skriver, at ilten skal bruges mindst 16 timer i døgnet og eventuelt hele døgnet. Lægen bestemmer brugstiden.",
    },
  ],
  relatedSlugs: ["cpap", "luftrenser", "varmeblaeser", "plejeseng", "elradiator"],
  sources: [
    { name: "Philips — EverFlo, specifikationer (gennemsnitligt forbrug 350 W)", url: "https://www.philips.com.au/healthcare/product/HC0044000/everflo-home-oxygen-system/specifications" },
    { name: "Invacare — Perfecto2, EU-datablad (230 V, 280 W ved højst 3 l/min, højst 300 W)", url: "https://www.invacare.eu.com/sites/eu/files/csv_migration/product_docs/sales_docs/DSAL002680_4P_Perfecto_EU.pdf" },
    { name: "Aalborg Universitetshospital — Iltbehandling i eget hjem ved lungesygdom (mindst 16 timer, refusion af el)", url: "https://aalborguh.rn.dk/-/media/SXI/FKLT21-115-Iltbehandling-i-eget-hjem-ved-lungesygdom/FKLT21-115-pdf.pdf" },
    { name: "Aalborg Universitetshospital — Iltbehandling i hjemmet (Region Nordjylland refunderer elforbruget)", url: "https://aalborguh.rn.dk/-/media/SXI/MEDA12-101-Iltbehandling-i-hjemmet/MEDA12-101-pdf.pdf" },
    { name: "Linde — Iltbehandling til patienter i eget hjem (refusion af el til NemKonto)", url: "https://static.prd.echannel.linde.com/wcsstore/DK_REN_Industrial_Gas_Store/pdf/Iltbehandling-til-patienter-i-eget-hjem_tcm574-677717.pdf" },
  ],
  calculatorConfig: {
    title: "Beregn iltkoncentratorens strømforbrug",
    options: [
      { label: "280 W (fx Invacare Perfecto2 ved op til 3 l/min)", kwhPerUse: 0.28 },
      { label: "350 W (fx Philips EverFlo, gennemsnit)", kwhPerUse: 0.35 },
    ],
    usageLabel: "Timer pr. døgn",
    usageUnit: "timer/døgn",
    usageMin: 1,
    usageMax: 24,
    usageDefault: 16,
    usageStep: 1,
    per: "time",
    perYear: 365,
  },
  publishDate: "2026-12-21",
  updated: "2026-11-23",
};

export default iltkoncentrator;
