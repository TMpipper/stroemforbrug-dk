import type { ApplianceData } from "@/lib/types";

/**
 * Løbebånd — intet EU-energimærke. Tal (Decathlons produktsider, målt med en bruger på 90 kg eller 75 kg):
 * T520B (motor 1,2 hk / 895 W, gennemsnit 450 W ved 8 km/t, 90 kg), T900 (1,5 hk konstant / 1.305 W, gennemsnit 370 W
 * ved 8 km/t, 90 kg), Challenge Run (2 hk, op til 22 km/t, 630-680 W ved 10 km/t, 90 kg), T540C (820 W ved 16 km/t,
 * 75 kg). test.de (11 løbebånd testet i december 2025: 7 klassiske, 3 walking pads, ét 2-i-1).
 * kWh pr. km er vores regning ud fra tallene; brugstiden pr. uge er vores skøn.
 */
const loebebaand: ApplianceData = {
  slug: "loebebaand",
  meta: {
    category: "pleje",
    usage: "per-hour",
    hasEuLabel: false,
    shiftable: false,
    synonyms: ["løbebånd", "løbebånd til hjemmet", "foldbart løbebånd", "treadmill", "motionsbånd", "elektrisk løbebånd", "kondimaskine", "loebebaand"],
  },
  name: "Løbebånd",
  article: "et",
  title: "Løbebånd strømforbrug (2026) → watt ved 8, 10 og 16 km/t",
  description:
    "Et løbebånd bruger 370-820 W, mens du løber, alt efter fart og vægt. Se Decathlons målte tal ved 8, 10 og 16 km/t, kWh pr. time og pr. km og prisen pr. tur.",
  heading: "Strømforbrug for et løbebånd: watt og pris i timen",
  quickAnswer:
    "Et løbebånd bruger langt mindre end motorens mærkeeffekt. Decathlon oplyser et gennemsnit på 450 W for T520B ved 8 km/t med en bruger på 90 kg, og 820 W for T540C ved 16 km/t med 75 kg. En times gang eller let løb bruger altså cirka 0,45 kWh, svarende til {{kr 0,45}}. To timer om ugen hele året bliver omkring 47 kWh, eller {{kr 47}}.",
  kwhRange: [10, 200],
  typicalKwh: 50,
  wattage: 450,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.3, 1.2, 1.1, 0.9, 0.8, 0.7, 0.7, 0.8, 0.9, 1.1, 1.2, 1.3],
  content: `<h2>Motorens hestekræfter er ikke forbruget</h2>
<p>Løbebånd sælges med en motoreffekt i hestekræfter — 1,2, 1,5 eller 2 hk — og den kan få forbruget til at lyde højt. Men motoreffekten er det, motoren kan levere, ikke det, den bruger, mens du løber. Decathlon oplyser for flere af sine løbebånd både motoreffekten og det målte gennemsnitlige forbrug, og forskellen er stor. T520B har en motor på 1,2 hk, svarende til 895 W, men bruger i gennemsnit 450 W ved 8 km/t med en bruger på 90 kg. T900 har en motor på 1,5 hk i konstant drift, 1.305 W, og bruger i gennemsnit 370 W under de samme forhold.</p>
<p>Det samme mønster ses på de større modeller. Challenge Run har en motor på 2 hk og kan køre op til 22 km/t, men ved 10 km/t med en bruger på 90 kg oplyser Decathlon 630-680 W — under halvdelen af, hvad motoren kan yde. T540C er målt med en lettere bruger på 75 kg ved 16 km/t og bruger 820 W. Et stort løbebånd koster altså ikke nødvendigvis mere i strøm end et lille, hvis du løber i samme tempo.</p>
<p>Forbruget afhænger altså af, hvor hurtigt båndet kører, og hvor meget det skal bære. Motoren skal trække båndet under dig og løfte det, hvis du har stigning på, og en tungere løber giver mere friktion mellem bånd og løbeplade.</p>

<h2>Watt og kWh ved forskellige farter</h2>
<table>
<thead><tr><th>Løbebånd (Decathlon) og fart</th><th>Gennemsnitlig effekt</th><th>kWh pr. time</th><th>Pris pr. time</th><th>kWh pr. km (vores regning)</th></tr></thead>
<tbody>
<tr><td>T900, 8 km/t, bruger på 90 kg</td><td>370 W</td><td>0,37</td><td>{{kr 0,37}}</td><td>ca. 0,046</td></tr>
<tr><td>T520B, 8 km/t, bruger på 90 kg</td><td>450 W</td><td>0,45</td><td>{{kr 0,45}}</td><td>ca. 0,056</td></tr>
<tr><td>Challenge Run, 10 km/t, bruger på 90 kg</td><td>630-680 W</td><td>ca. 0,65</td><td>{{kr 0,65}}</td><td>ca. 0,065</td></tr>
<tr><td>T540C, 16 km/t, bruger på 75 kg</td><td>820 W</td><td>0,82</td><td>{{kr 0,82}}</td><td>ca. 0,051</td></tr>
</tbody>
</table>
<p>Den sidste kolonne er interessant: pr. kilometer bruger løbebåndene omtrent det samme, cirka 0,05-0,065 kWh, uanset farten. Det er fordi en hurtigere tur også er en kortere tur. En 10 kilometer lang løbetur koster derfor cirka det samme i strøm, om du løber den på en time eller på 40 minutter — omkring en halv kWh, svarende til {{kr 0,5}}.</p>

<h2>Hvad bruger et løbebånd om året?</h2>
<p>Årsforbruget afhænger af, hvor meget du træner. Vores regneeksempler bruger et løbebånd, der i gennemsnit bruger 450 W.</p>
<table>
<thead><tr><th>Træning (vores skøn)</th><th>Timer om året</th><th>kWh om året</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>1 time om ugen</td><td>52</td><td>ca. 23</td><td>{{kr 23}}</td></tr>
<tr><td>2 timer om ugen</td><td>104</td><td>ca. 47</td><td>{{kr 47}}</td></tr>
<tr><td>4 timer om ugen</td><td>208</td><td>ca. 94</td><td>{{kr 94}}</td></tr>
</tbody>
</table>
<p>De fleste bruger løbebåndet mest om vinteren, når det er mørkt og glat udenfor, og mindre om sommeren. Det er derfor, sæsonfordelingen på siden er højest i vintermånederne.</p>

<h2>Stigning, vægt og opstart</h2>
<p>Stigning gør træningen hårdere og kræver mere af motoren, fordi den skal løfte dig op ad bakken for hvert skridt. Decathlon oplyser ikke målinger med stigning, så vi kan ikke sætte tal på forskellen. Vægten tæller også: Decathlons målinger er lavet med en bruger på 90 kg på de fleste modeller og 75 kg på T540C. En lettere løber vil typisk bruge lidt mindre end tallene i tabellen, en tungere lidt mere.</p>
<p>Når båndet starter, og når du sætter farten op, trækker motoren kortvarigt mere end gennemsnittet. Det er en af grundene til, at motoren er dimensioneret til langt mere, end den bruger til daglig. Følg producentens anvisning om tilslutning og forlængerledninger.</p>

<h2>Løbebånd eller gåbånd?</h2>
<p>Et <a href="/gaabaand/">gåbånd</a>, også kaldet walking pad, er et fladt bånd uden håndtag til at gå på under skrivebordet. Det kører langsommere end et løbebånd, og den tyske forbrugerorganisation Stiftung Warentest, der i december 2025 testede 11 bånd — syv klassiske løbebånd, tre walking pads og et 2-i-1 — skriver, at walking pads typisk kun når op på 6 km/t og ikke har håndtag og nødstop. Et gåbånd bruger derfor mindre i timen end et løbebånd, men kører ofte flere timer om ugen, fordi man går på det, mens man arbejder.</p>

<h2>Standby og display</h2>
<p>De fleste løbebånd har en hovedafbryder ved stikket og et display, der tænder, når du sætter sikkerhedsnøglen i. Når afbryderen er slukket, bruger båndet ingenting. Står det med afbryderen tændt, kan displayet og elektronikken bruge lidt strøm døgnet rundt. Vi har ikke fundet standbyforbruget oplyst på Decathlons produktsider, så vi har ikke sat et tal på det. Sluk på hovedafbryderen efter træningen, og tag stikket ud, hvis du ikke skal bruge båndet i en periode.</p>

<h2>Hvornår bruger løbebåndet strøm?</h2>
<p>Løbebåndet bruger strøm, når du træner, og mange træner om morgenen eller efter arbejde — de sidste timer ligger ofte i den dyre periode om aftenen. Forskellen pr. tur er få øre, så vælg tidspunktet efter, hvornår du har lyst til at løbe. Oversigten over dagens timepriser højere oppe viser, hvornår strømmen er billigst.</p>
<p>Efter turen er det oplagt at sammenligne med restitutionen: en <a href="/massagestol/">massagestol</a> bruger omkring 0,04 kWh på et kvarter, en brøkdel af løbeturen.</p>

<h2>Sådan holder du forbruget nede</h2>
<ol>
<li><strong>Hold båndet smurt og spændt</strong> efter producentens anvisning — friktion koster strøm og slider på motoren.</li>
<li><strong>Sluk på hovedafbryderen</strong> efter træningen.</li>
<li><strong>Løb ude, når vejret er til det</strong> — så bruger du slet ingen strøm.</li>
</ol>`,
  faqs: [
    {
      question: "Hvor mange watt bruger et løbebånd?",
      answer:
        "Decathlon oplyser 370-450 W i gennemsnit ved 8 km/t med en bruger på 90 kg, 630-680 W ved 10 km/t og 820 W ved 16 km/t med 75 kg. Motorens mærkeeffekt er højere, men bruges kun kortvarigt.",
    },
    {
      question: "Hvad koster en time på løbebåndet?",
      answer:
        "Med et gennemsnit på 450 W bruger en time 0,45 kWh, svarende til {{kr 0,45}}. Ved 16 km/t er det omkring 0,82 kWh, eller {{kr 0,82}}.",
    },
    {
      question: "Hvad koster en løbetur på 10 km i strøm?",
      answer:
        "Efter vores regning bruger løbebåndene 0,05-0,065 kWh pr. km, så 10 km er omkring en halv kWh, svarende til {{kr 0,5}}, uanset farten.",
    },
    {
      question: "Bruger et løbebånd strøm, når det er slukket?",
      answer:
        "Ikke når hovedafbryderen er slukket. Står den tændt, kan displayet bruge lidt strøm døgnet rundt. Sluk efter træningen.",
    },
    {
      question: "Bruger et gåbånd mindre end et løbebånd?",
      answer:
        "Ja, i timen. Et gåbånd kører langsommere — typisk højst 6 km/t ifølge Stiftung Warentest — men bruges ofte flere timer om ugen under skrivebordet.",
    },
  ],
  relatedSlugs: ["gaabaand", "massagestol", "elcykel", "ventilator", "skaerm"],
  sources: [
    { name: "Decathlon — løbebånd T520B (motor 1,2 hk / 895 W, gennemsnit 450 W ved 8 km/t, 90 kg)", url: "https://www.decathlon.com.gr/en/p/160872-25756-treadmill-t520b.html" },
    { name: "Decathlon — løbebånd T900 (1,5 hk / 1.305 W, gennemsnit 370 W ved 8 km/t, 90 kg)", url: "https://www.decathlon.co.ke/p/161031-35204-t900a-treadmill.html" },
    { name: "Decathlon — foldbart løbebånd Challenge Run (630-680 W ved 10 km/t, 90 kg)", url: "https://www.decathlon.com.gr/en/p/328606-378473-folding-treadmill-22-km-h-challenge-run-with-decathlon-warranty.html" },
    { name: "Decathlon — løbebånd T540C (820 W ved 16 km/t, 75 kg)", url: "https://support.decathlon.co.uk/t540c" },
    { name: "Stiftung Warentest — test af løbebånd og walking pads (december 2025)", url: "https://www.test.de/presse/pressemitteilungen/Laufbaender-Mehr-Bewegung-zu-Hause-6266763-0/" },
  ],
  calculatorConfig: {
    title: "Beregn løbebåndets strømforbrug",
    options: [
      { label: "8 km/t, ca. 370 W (Decathlon T900, 90 kg)", kwhPerUse: 0.37 },
      { label: "8 km/t, ca. 450 W (Decathlon T520B, 90 kg)", kwhPerUse: 0.45 },
      { label: "10 km/t, ca. 650 W (Decathlon Challenge Run, 90 kg)", kwhPerUse: 0.65 },
      { label: "16 km/t, ca. 820 W (Decathlon T540C, 75 kg)", kwhPerUse: 0.82 },
    ],
    usageLabel: "Timer pr. uge",
    usageUnit: "timer/uge",
    usageMin: 0.5,
    usageMax: 10,
    usageDefault: 2,
    usageStep: 0.5,
    per: "time",
    perYear: 52,
  },
  publishDate: "2026-12-22",
  updated: "2026-11-23",
};

export default loebebaand;
