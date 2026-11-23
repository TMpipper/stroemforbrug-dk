import type { ApplianceData } from "@/lib/types";

/**
 * Gåbånd (walking pad, gåbånd til under skrivebordet) — intet EU-energimærke. Tal: WalkingPad R3 JustWalk WP440F4
 * (brugsanvisning: 1-6 km/t i trin på 0,5, højst 120 kg, mærkeeffekt 735 W, »No-load stop« i appen), Which?
 * (de fleste walking pads når højst 8 km/t; testet januar 2026), Stiftung Warentest (walking pads op til 6 km/t,
 * uden håndtag og nødstop). Gennemsnitlig effekt ved gang (ca. 150-300 W) er vores skøn ud fra Decathlons målte
 * løbebåndstal (ca. 0,05 kWh pr. km) — ingen producent har oplyst målt forbrug for et gåbånd.
 */
const gaabaand: ApplianceData = {
  slug: "gaabaand",
  meta: {
    category: "pleje",
    usage: "per-hour",
    hasEuLabel: false,
    shiftable: false,
    synonyms: ["gåbånd", "walking pad", "walkingpad", "gåbånd til skrivebord", "løbebånd under skrivebord", "under desk treadmill", "gåmaskine", "gaabaand"],
  },
  name: "Gåbånd",
  article: "et",
  title: "Gåbånd strømforbrug (2026) → walking pad under skrivebordet",
  description:
    "Et gåbånd under skrivebordet har en motor på op til 735 W, men bruger efter vores skøn 150-300 W ved gang. Se kWh pr. time, pr. uge og pr. år.",
  heading: "Strømforbrug for et gåbånd: watt og pris i timen",
  quickAnswer:
    "Et gåbånd eller en walking pad har en motor på flere hundrede watt — WalkingPad R3 er mærket til 735 W — men ved almindelig gang på 3-4 km/t bruger den efter vores skøn omkring 150-200 W. En time på 4 km/t bruger cirka 0,2 kWh, svarende til {{kr 0,2}}. Fem timer om ugen hele året bliver omkring 52 kWh, eller {{kr 52}}.",
  kwhRange: [10, 150],
  typicalKwh: 52,
  wattage: 200,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.2, 1.15, 1.1, 1, 0.9, 0.8, 0.75, 0.8, 1, 1.05, 1.1, 1.15],
  content: `<h2>Et fladt bånd til langsom gang</h2>
<p>Et gåbånd, eller en walking pad, er et lavt og fladt bånd uden håndtag, der kan skubbes ind under et hæve-sænkebord. Det er bygget til at gå på, mens man arbejder, læser eller ser fjernsyn — ikke til at løbe på. Brugsanvisningen til WalkingPad R3 JustWalk viser, hvordan den slags bånd typisk er skruet sammen: farten kan indstilles fra 1 til 6 km/t i trin på en halv kilometer, brugeren må højst veje 120 kg, og motoren har en mærkeeffekt på 735 W.</p>
<p>Den britiske forbrugerorganisation Which?, der testede walking pads i januar 2026, skriver, at de fleste når højst 8 km/t, og at flere af dem kun går op til 6 km/t. Stiftung Warentest skriver i en test fra december 2025, at walking pads typisk når op til 6 km/t og mangler håndtag og nødstop, fordi de er bygget til gang og ikke til løb.</p>

<h2>Mærkeeffekten er ikke forbruget</h2>
<p>De 735 W på typeskiltet er det, motoren kan levere, når den starter, eller når en tung bruger sætter farten op. Ved roligt tempo bruger den langt mindre. Vi har ikke fundet en producent, der oplyser det målte forbrug for et gåbånd, så vores tal bygger på Decathlons målinger af løbebånd. De viser, at et <a href="/loebebaand/">løbebånd</a> bruger omkring 0,05 kWh pr. kilometer med en bruger på 90 kg, uanset om farten er 8 eller 16 km/t. Overført til gang giver det:</p>
<table>
<thead><tr><th>Fart (vores skøn)</th><th>Effekt</th><th>kWh pr. time</th><th>Pris pr. time</th></tr></thead>
<tbody>
<tr><td>3 km/t, roligt tempo ved skrivebordet</td><td>ca. 150 W</td><td>0,15</td><td>{{kr 0,15}}</td></tr>
<tr><td>4 km/t, almindelig gang</td><td>ca. 200 W</td><td>0,2</td><td>{{kr 0,2}}</td></tr>
<tr><td>6 km/t, rask gang (båndets maksimum)</td><td>ca. 300 W</td><td>0,3</td><td>{{kr 0,3}}</td></tr>
</tbody>
</table>
<p>Ved meget lav fart betyder båndets egen friktion relativt mere, så tallene for 3 km/t kan være lidt i underkanten. Er du let, bruger båndet mindre; er du tung, bruger det mere. Tallene er et skøn og bør læses som et niveau, ikke som en måling af din model.</p>

<h2>Timerne under skrivebordet</h2>
<p>Et gåbånd bruger mindre i timen end et løbebånd, men det bliver ofte brugt mange flere timer. Går du en time om dagen i arbejdsugen, er det fem timer om ugen; går du hele formiddagen, er det mere.</p>
<table>
<thead><tr><th>Brug ved 4 km/t, ca. 200 W (vores skøn)</th><th>Timer om året</th><th>kWh om året</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>1 time hver arbejdsdag</td><td>260</td><td>ca. 52</td><td>{{kr 52}}</td></tr>
<tr><td>2 timer hver arbejdsdag</td><td>520</td><td>ca. 104</td><td>{{kr 104}}</td></tr>
<tr><td>3 timer om ugen</td><td>156</td><td>ca. 31</td><td>{{kr 31}}</td></tr>
</tbody>
</table>
<p>Til sammenligning bruger den <a href="/laptop/">bærbare computer</a>, du arbejder på, typisk et par titals watt, og en ekstra <a href="/skaerm/">skærm</a> nogenlunde det samme. Gåbåndet er altså den største strømforbruger ved skrivebordet, mens det kører — men det er stadig en lille post på husstandens regning.</p>

<h2>Når båndet kører uden dig</h2>
<p>Et gåbånd under skrivebordet kører let videre, når du træder af for at tage telefonen eller hente kaffe. Båndet bruger mindre uden last, men det bruger stadig strøm. Brugsanvisningen til WalkingPad R3 beskriver en indstilling i appen, »No-load stop«, der stopper båndet, når ingen går på det. Har dit bånd en sådan funktion, er det en god idé at slå den til.</p>
<p>Sluk på hovedafbryderen, når du er færdig for dagen, og tag stikket ud, hvis båndet skal stå i en periode. Mange gåbånd har en fjernbetjening eller en app-forbindelse, og så kan elektronikken bruge lidt strøm, så længe stikket sidder i. Vi har ikke fundet målte tal for standbyforbruget.</p>

<h2>Gåbånd eller gåtur?</h2>
<p>En gåtur udenfor bruger ingen strøm, og den er altid billigere end båndet. Gåbåndet giver mening på de dage, hvor vejret er dårligt, eller hvor arbejdet holder dig ved skrivebordet i mange timer. Her er det værd at vide, at en times gang på båndet ved 4 km/t efter vores skøn koster {{kr 0,2}} — omtrent det samme som en times arbejde ved en stationær computer med skærm. Vælger du båndet i stedet for at sidde stille, er det altså ikke elregningen, der bør holde dig tilbage. Vil du helt undgå forbruget, kan du lægge mødetelefonen i lommen og gå en tur rundt om blokken i stedet.</p>

<h2>Sikkerhed og vedligehold</h2>
<p>Fordi et gåbånd ikke har håndtag og ofte ikke har nødstop, er det bygget til langsom gang. Følg producentens anvisning om fart, vægt og placering, og brug ikke båndet til løb, hvis det ikke er beregnet til det. Et bånd, der er smurt og spændt efter anvisningen, kører lettere og belaster motoren mindre — både for strømmens og for båndets skyld.</p>

<h2>Hvornår bruger gåbåndet strøm?</h2>
<p>Gåbåndet bruges i arbejdstiden, typisk om formiddagen og eftermiddagen. Det er sjældent de dyreste timer på døgnet, som oftest ligger fra sidst på eftermiddagen til om aftenen, men forbruget kan ikke flyttes — det følger dit arbejde. Oversigten over dagens timepriser højere oppe viser, hvordan prisen svinger.</p>

<h2>Sådan holder du forbruget nede</h2>
<ol>
<li><strong>Gå i et roligt tempo</strong> — ved skrivebordet er 3-4 km/t nok for de fleste.</li>
<li><strong>Slå automatisk stop til</strong>, hvis båndet har det, så det ikke kører uden dig.</li>
<li><strong>Sluk på hovedafbryderen</strong>, når du er færdig.</li>
<li><strong>Vedligehold båndet</strong> efter producentens anvisning, så friktionen holdes nede.</li>
</ol>`,
  faqs: [
    {
      question: "Hvor mange watt bruger et gåbånd?",
      answer:
        "Motoren er ofte mærket til flere hundrede watt — WalkingPad R3 til 735 W — men ved gang på 3-4 km/t bruger den efter vores skøn omkring 150-200 W.",
    },
    {
      question: "Hvad koster en time på et gåbånd?",
      answer:
        "Ved 4 km/t bruger en time efter vores skøn cirka 0,2 kWh, svarende til {{kr 0,2}}. Ved 6 km/t er det omkring 0,3 kWh, eller {{kr 0,3}}.",
    },
    {
      question: "Hvad koster et gåbånd om året?",
      answer:
        "En time hver arbejdsdag ved 4 km/t bliver efter vores skøn cirka 52 kWh om året, svarende til {{kr 52}}. To timer om dagen er det dobbelte.",
    },
    {
      question: "Hvor hurtigt kan en walking pad køre?",
      answer:
        "WalkingPad R3 går fra 1 til 6 km/t. Which? skriver, at de fleste walking pads når højst 8 km/t, og Stiftung Warentest, at de typisk når op til 6 km/t.",
    },
    {
      question: "Bruger et gåbånd strøm, når ingen går på det?",
      answer:
        "Ja, hvis båndet kører videre. WalkingPad R3 har en indstilling, »No-load stop«, der stopper båndet uden last. Sluk på hovedafbryderen, når du er færdig.",
    },
  ],
  relatedSlugs: ["loebebaand", "laptop", "skaerm", "massagestol", "ventilator"],
  sources: [
    { name: "WalkingPad — brugsanvisning til R3 JustWalk WP440F4 (1-6 km/t, højst 120 kg, 735 W, No-load stop)", url: "https://manuals.plus/m/c03563defcf6add85f362d579410ac77b6f5ebcf4f391051cf85d86ea297da44" },
    { name: "Which? — walking pads og løbebånd til under skrivebordet (testet januar 2026)", url: "https://www.which.co.uk/reviews/treadmills/article/best-walking-pads-and-under-desk-treadmills-aBRuS2F2n9V2" },
    { name: "Stiftung Warentest — test af løbebånd og walking pads (december 2025)", url: "https://www.test.de/presse/pressemitteilungen/Laufbaender-Mehr-Bewegung-zu-Hause-6266763-0/" },
    { name: "Decathlon — løbebånd T900 (gennemsnit 370 W ved 8 km/t, 90 kg), grundlaget for vores skøn", url: "https://www.decathlon.co.ke/p/161031-35204-t900a-treadmill.html" },
  ],
  calculatorConfig: {
    title: "Beregn gåbåndets strømforbrug",
    options: [
      { label: "3 km/t, roligt tempo (vores skøn: ca. 150 W)", kwhPerUse: 0.15 },
      { label: "4 km/t, almindelig gang (vores skøn: ca. 200 W)", kwhPerUse: 0.2 },
      { label: "6 km/t, rask gang (vores skøn: ca. 300 W)", kwhPerUse: 0.3 },
    ],
    usageLabel: "Timer pr. uge",
    usageUnit: "timer/uge",
    usageMin: 0.5,
    usageMax: 30,
    usageDefault: 5,
    usageStep: 0.5,
    per: "time",
    perYear: 52,
  },
  publishDate: "2026-12-22",
  updated: "2026-11-23",
};

export default gaabaand;
