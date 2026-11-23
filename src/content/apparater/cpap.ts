import type { ApplianceData } from "@/lib/types";

/**
 * CPAP / søvnapnøapparat — intet EU-energimærke. Tal: ResMed AirSense 11 brugsanvisning (65 W strømforsyning,
 * typisk forbrug 56,1 W, højst 73,2 W, vandkammer 380 ml, varmeplade højst 68 °C), ResMed AirMini (højst 27 W,
 * gennemsnitlig strøm under 0,83 A), Philips DreamStation 2 (vandkammer 325 ml, 80 W strømforsyning krævet til
 * befugtning, batteri understøtter ikke befugtning), Medistrom Pilot-24 Lite (95 Wh; befugter og varmeslange
 * nedsætter driftstiden betydeligt). Forbrug uden befugter (ca. 15 W) og med befugter uden varmeslange er vores skøn.
 * Fordampningsenergien (ca. 0,7 kWh pr. liter) er fysik, som på luftfugter-siden.
 */
const cpap: ApplianceData = {
  slug: "cpap",
  meta: {
    category: "pleje",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: false,
    synonyms: ["cpap", "cpap-maskine", "cpap-apparat", "søvnapnø", "søvnapnøapparat", "apap", "bipap", "resmed airsense", "dreamstation", "befugter cpap"],
  },
  name: "CPAP-maskine",
  article: "en",
  title: "CPAP strømforbrug (2026) → med og uden befugter pr. nat",
  description:
    "En CPAP-maskine med befugter og varmeslange bruger ca. 0,45 kWh pr. nat ifølge ResMeds typiske tal. Uden befugter er det langt mindre. Se kWh pr. nat og år.",
  heading: "Strømforbrug for en CPAP-maskine: kWh og pris pr. nat",
  quickAnswer:
    "ResMed oplyser et typisk forbrug på 56,1 W for AirSense 11. Otte timer er 0,45 kWh, svarende til {{kr 0,45}} pr. nat, og hver nat i et år bliver cirka 164 kWh, eller {{kr 164}}. Det meste af strømmen går til at varme vandet i befugteren og slangen. Uden befugtning bruger blæseren efter vores skøn omkring 15 W, cirka 0,12 kWh pr. nat.",
  kwhRange: [20, 220],
  typicalKwh: 160,
  wattage: 56,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.15, 1.1, 1.05, 1, 0.95, 0.9, 0.85, 0.85, 0.95, 1, 1.1, 1.1],
  content: `<h2>En blæser og en befugter</h2>
<p>En CPAP-maskine — et apparat mod søvnapnø — er grundlæggende en lille, præcis blæser, der holder et let overtryk i luftvejene hele natten gennem en slange og en maske. Blæseren alene bruger ikke meget strøm. Men de fleste bruger maskinen med en opvarmet befugter: et lille vandkammer på en varmeplade, der fugter luften, og ofte en opvarmet slange, der holder fugten fra at fortætte på vejen til masken. Det er varmen, der bestemmer strømforbruget.</p>
<p>ResMed oplyser i brugsanvisningen til AirSense 11 en strømforsyning på 65 W, et typisk forbrug på 56,1 W og et højeste forbrug på 73,2 W. Vandkammeret rummer højst 380 ml, og varmepladen bliver højst 68 grader. Philips oplyser for DreamStation 2, at vandkammeret rummer 325 ml ved det anbefalede vandniveau, og at befugtningen kræver en strømforsyning på 80 W. Til sammenligning har ResMeds lille rejse-CPAP AirMini ifølge ResMed et højeste forbrug på 27 W.</p>

<h2>Strøm og pris pr. nat</h2>
<table>
<thead><tr><th>Brug, 8 timer pr. nat</th><th>Effekt</th><th>kWh pr. nat</th><th>Pris pr. nat</th><th>Hver nat i et år</th></tr></thead>
<tbody>
<tr><td>Befugter og varmeslange (ResMed AirSense 11, typisk)</td><td>56,1 W</td><td>0,45</td><td>{{kr 0,45}}</td><td>{{kr 164}}</td></tr>
<tr><td>Befugter, uden varmeslange (vores skøn)</td><td>ca. 35 W</td><td>0,28</td><td>{{kr 0,28}}</td><td>{{kr 102}}</td></tr>
<tr><td>Uden befugtning (vores skøn)</td><td>ca. 15 W</td><td>0,12</td><td>{{kr 0,12}}</td><td>{{kr 44}}</td></tr>
</tbody>
</table>
<p>ResMeds typiske tal er det, der står i brugsanvisningen; producenten oplyser ikke, ved hvilket tryk og hvilke indstillinger det er målt. Vores to skøn for brug uden varmeslange og helt uden befugtning bygger på, at blæseren alene er en lille del af forbruget — ResMeds AirMini, der er bygget til rejser, bruger højst 27 W — og på batteriproducenten Medistroms råd om at slå befugter og varmeslange fra, når maskinen kører på batteri, fordi de nedsætter driftstiden betydeligt.</p>

<h2>Hvorfor varme koster mere end luft</h2>
<p>Det kræver energi at få vand til at fordampe. At varme en liter vand fra stuetemperatur til fordampning og fordampe den kræver omkring 0,7 kWh — den samme fysik, som gør en dampbaseret <a href="/luftfugter/">luftfugter</a> til en stor strømforbruger. En CPAP-befugter fordamper langt mindre end en liter på en nat; vandkammeret i AirSense 11 rummer højst 380 ml. Fordamper der omkring en kvart liter, svarer det til knap 0,2 kWh — og det passer godt med forskellen mellem en maskine med og uden befugtning i tabellen.</p>
<p>Derfor stiger forbruget også om vinteren. Et koldt soveværelse betyder, at befugteren og slangen skal arbejde mere for at holde luften varm og fugtig. Om sommeren, med et varmt soveværelse, bruger de mindre. Hvor meget fugt du har brug for, er en indstilling, som du skal aftale med din behandler — det handler om komfort i næse og hals, ikke om elregningen.</p>

<h2>Batteri og strømsvigt</h2>
<p>Maskinen er bygget til at køre på stikkontakten. På rejser og i sommerhuse uden strøm bruger nogle et batteri, og her betyder befugteren meget. Philips skriver i brugsanvisningen til DreamStation 2, at befugtningen slås fra, hvis maskinen kører på et batteri, der ikke understøtter den. Medistrom, der laver batterier til CPAP-maskiner, oplyser 95 Wh for sine Pilot-24 Lite og Pilot-12 Lite og skriver, at befugter og varmeslange nedsætter driftstiden betydeligt. Med ResMeds typiske 56,1 W ville et batteri på 95 Wh holde knap to timer; uden befugtning holder det en hel nat eller mere.</p>
<p>Ved strømsvigt starter ResMeds maskine automatisk igen, når strømmen kommer tilbage. Hvad du skal gøre, hvis strømmen er væk i længere tid, er et spørgsmål til din behandler og leverandør. Følg lægens og leverandørens anvisning.</p>

<h2>Hvornår bruger CPAP-maskinen strøm?</h2>
<p>Maskinen kører, når du sover, og det kan ikke flyttes. Den gode nyhed er, at nattetimerne ofte er døgnets billigste: nettariffen er lav, og elprisen er typisk lavere end om aftenen. Maskinen bruger altså sin strøm i nogle af de billigere timer helt af sig selv. Oversigten over dagens timepriser højere oppe viser, hvad strømmen koster time for time i nat.</p>
<p>Mange maskiner varmer vandet op et stykke tid, før du tager masken på, og AirSense 11 viser, når befugteren varmer op eller køler af. Det er få minutters ekstra forbrug og ingen grund til bekymring.</p>

<h2>CPAP-maskinen ved siden af andre apparater</h2>
<p>Med cirka 160 kWh om året for en maskine med befugter og varmeslange hver nat bruger en CPAP-maskine omtrent det samme som et lille køleskab. Uden befugtning er det på niveau med en router. Har du både en CPAP-maskine og en <a href="/iltkoncentrator/">iltkoncentrator</a>, er det iltkoncentratoren, der bruger mest: den kører med flere hundrede watt i mange timer i døgnet. Står der en luftfugter eller en <a href="/luftrenser/">luftrenser</a> i soveværelset, kører den også om natten, men en ultralydsfugter bruger langt mindre end CPAP-befugteren.</p>

<h2>Hvad bestemmer forbruget?</h2>
<ul>
<li><strong>Befugteren</strong> — varmepladen er den største post. Indstillingen aftales med din behandler.</li>
<li><strong>Den opvarmede slange</strong> — holder luften varm hele vejen til masken og bruger strøm hele natten.</li>
<li><strong>Soveværelsets temperatur</strong> — jo koldere rummet er, desto mere skal befugter og slange varme.</li>
<li><strong>Trykket</strong> — et højere ordineret tryk kræver lidt mere af blæseren.</li>
<li><strong>Utætheder ved masken</strong> — blæseren skal arbejde mere for at holde trykket.</li>
<li><strong>Antal timer</strong> — maskinen bruger strøm, så længe du sover med den.</li>
</ul>
<p>Ingen af disse indstillinger bør du ændre for at spare strøm. Brug maskinen, som din behandler har aftalt med dig, og følg lægens og leverandørens anvisning. Det, du selv kan gøre, er at tage stikket ud til maskinen, når du er på ferie uden den, og at holde masken tæt, så blæseren ikke arbejder forgæves. Læs også om små apparaters forbrug i stikkontakten på siden om <a href="/standby/">standby</a>.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en CPAP-maskine pr. nat?",
      answer:
        "ResMed oplyser et typisk forbrug på 56,1 W for AirSense 11. Otte timer er 0,45 kWh, svarende til {{kr 0,45}}. Uden befugtning er det efter vores skøn omkring 0,12 kWh.",
    },
    {
      question: "Hvad koster en CPAP-maskine i strøm om året?",
      answer:
        "Med befugter og varmeslange hver nat i otte timer bliver det cirka 164 kWh, svarende til {{kr 164}}. Uden befugtning er det efter vores skøn cirka 44 kWh.",
    },
    {
      question: "Hvorfor bruger befugteren så meget strøm?",
      answer:
        "Den varmer vand, der fordamper. At fordampe en liter vand kræver omkring 0,7 kWh. Vandkammeret i AirSense 11 rummer højst 380 ml, og en opvarmet slange bruger også strøm hele natten.",
    },
    {
      question: "Kan en CPAP-maskine køre på batteri?",
      answer:
        "Ja, med et batteri beregnet til maskinen. Medistrom oplyser 95 Wh for sine CPAP-batterier og skriver, at befugter og varmeslange nedsætter driftstiden betydeligt. Philips slår befugtningen fra på batterier, der ikke understøtter den.",
    },
    {
      question: "Skal jeg slå befugteren fra for at spare strøm?",
      answer:
        "Nej, ikke uden at aftale det med din behandler. Befugtningen er en del af behandlingen og handler om komfort i næse og hals. Følg lægens og leverandørens anvisning.",
    },
  ],
  relatedSlugs: ["iltkoncentrator", "luftfugter", "luftrenser", "router", "massagestol"],
  sources: [
    { name: "ResMed — brugsanvisning til AirSense 11 (65 W, typisk 56,1 W, højst 73,2 W, vandkammer 380 ml)", url: "https://nihstrokenet.uc.edu/docs/default-source/default-document-library/airsense11_user-guide-english.pdf" },
    { name: "ResMed — hvor meget strøm bruger AirMini? (højst 27 W)", url: "https://ap.resmed.com/knowledge/how-much-power-does-the-airmini-machine-draw" },
    { name: "Philips — brugsanvisning til DreamStation 2 (vandkammer 325 ml, 80 W strømforsyning til befugtning)", url: "https://www.documents.philips.com/assets/Instruction%20for%20Use/20211202/7e52e95bb1a343a4a223adf201582311.pdf" },
    { name: "Medistrom — brugsanvisning til Pilot-12 Lite og Pilot-24 Lite (95 Wh, befugter nedsætter driftstiden)", url: "https://cdn.shopify.com/s/files/1/2790/7304/files/ManualPilotLite_vNOV.2018.pdf" },
  ],
  calculatorConfig: {
    title: "Beregn CPAP-maskinens strømforbrug",
    options: [
      { label: "Befugter og varmeslange (ResMed AirSense 11: typisk 56,1 W), 8 timer", kwhPerUse: 0.45 },
      { label: "Befugter uden varmeslange (vores skøn: ca. 35 W), 8 timer", kwhPerUse: 0.28 },
      { label: "Uden befugtning (vores skøn: ca. 15 W), 8 timer", kwhPerUse: 0.12 },
    ],
    usageLabel: "Nætter pr. uge",
    usageUnit: "nætter/uge",
    usageMin: 1,
    usageMax: 7,
    usageDefault: 7,
    usageStep: 1,
    per: "nat",
    perYear: 52,
  },
  publishDate: "2026-12-21",
  updated: "2026-11-23",
};

export default cpap;
