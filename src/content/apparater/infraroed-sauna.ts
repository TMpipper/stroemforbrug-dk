import type { ApplianceData } from "@/lib/types";

const infraroedSauna: ApplianceData = {
  slug: "infraroed-sauna",
  meta: {
    category: "poolSpa",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: false,
    motif: "sauna",
    synonyms: [
      "infrarød sauna",
      "ir-sauna",
      "infrarød saunakabine",
      "infrarød kabine",
      "fuldspektrum sauna",
      "infrarød sauna til hjemmet",
      "infrarød sauna strømforbrug",
      "varmekabine",
    ],
  },
  name: "Sauna (infrarød)",
  article: "en",
  title: "Infrarød sauna strømforbrug (2026) → kWh pr. gang og watt",
  description:
    "En infrarød sauna til to har 1,8-2 kW varmeelementer og bruger efter vores skøn 1,5 kWh pr. gang. Se forbruget pr. uge og år, og hvad der skiller den ud.",
  heading: "Strømforbrug for en infrarød sauna: kWh, pris pr. gang og dyreste timer",
  quickAnswer:
    "En infrarød sauna til to personer har typisk 1,8-2 kW varmeelementer — Harvias Onni Sienna Duo har 1.860 W og Sanotechniks Malmö 2 har 2.000 W. Et saunabad med kort opvarmning og en termostat, der skruer ned undervejs, bruger efter vores skøn ca. 1,5 kWh, svarende til {{kr 1,5}} ved {{pris_kwh}}. To gange om ugen hele året giver ca. 160 kWh, eller {{kr 160}}.",
  kwhRange: [40, 700],
  typicalKwh: 160,
  wattage: 1860,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.4, 1.3, 1.15, 1.0, 0.8, 0.65, 0.6, 0.65, 0.85, 1.05, 1.2, 1.35],
  content: `<h2>Varme, der rammer kroppen frem for luften</h2>
<p>En traditionel finsk sauna har et saunaaggregat med sten, der varmer hele kabinens luft op. En infrarød sauna har i stedet varmeelementer i væggene, der sender infrarød stråling ud — den samme type varme som fra et <a href="/infraroedt-varmepanel/">infrarødt varmepanel</a>. Strålingen varmer først og fremmest kroppen og kabinens flader, og luften bliver ikke nær så varm. Den finske producent Harvia angiver for sin infrarøde kabine Onni Sienna Duo et temperaturområde på 20-70 grader og skriver, at den ikke kræver forvarmning.</p>
<p>Det er netop det, der adskiller strømforbruget fra den traditionelle sauna. Et saunaaggregat skal varme kabinen og stenene op, før du går ind, mens den infrarøde kabine kan tages i brug efter kort tid. Har du en traditionel sauna, så se siden om <a href="/sauna/">saunaen</a>.</p>

<h2>Watt: elementerne til fuld effekt</h2>
<p>Effekten står på typeskiltet og i produktbeskrivelsen, og den er summen af alle elementer. To eksempler på kabiner til to personer:</p>
<table>
<thead><tr><th>Infrarød sauna</th><th>Elementer</th><th>Samlet effekt</th><th>Pris for en time på fuld effekt</th></tr></thead>
<tbody>
<tr><td>Harvia Onni Sienna Duo</td><td>2 × 350 W fuldspektrum, 2 × 380 W og 2 × 200 W kulfiber</td><td>1.860 W</td><td>ca. {{kr 1,9}}</td></tr>
<tr><td>Sanotechnik Malmö 2 (Bauhaus)</td><td>6 fuldspektrum og 1 kulfiber</td><td>2.000 W</td><td>{{kr 2}}</td></tr>
</tbody>
</table>
<p>Begge kabiner kører på almindelige 230 V. Bauhaus skriver om Malmö 2, at den leveres usamlet, og at den skal tilsluttes af en autoriseret elinstallatør. Elementerne er enten kulfiberpaneler, der giver en jævn, mild varme over en stor flade, eller fuldspektrumelementer, der stråler kraftigere; mange kabiner blander de to typer.</p>

<h2>Hvad bruger et saunabad?</h2>
<p>Forbruget afhænger af, hvor længe kabinen er tændt, og hvor meget termostaten skruer ned, når den indstillede temperatur er nået. Producenterne opgiver ikke et forbrug pr. gang, så tallene herunder er vores eget skøn ud fra kabinernes effekt: omkring et kvarters opvarmning og et bad på 30-45 minutter.</p>
<table>
<thead><tr><th>Saunabad (vores skøn)</th><th>kWh pr. gang</th><th>Pris pr. gang</th></tr></thead>
<tbody>
<tr><td>Kabine til én person, ca. 1,2 kW, kort bad</td><td>ca. 1,0</td><td>{{kr 1}}</td></tr>
<tr><td>Kabine til to, ca. 1,9 kW, termostaten skruer ned undervejs</td><td>ca. 1,5</td><td>{{kr 1,5}}</td></tr>
<tr><td>Kabine til to, ca. 1,9 kW, fuld effekt en time</td><td>ca. 1,9</td><td>{{kr 1,9}}</td></tr>
<tr><td>Større kabine til tre-fire, langt bad</td><td>ca. 2,6</td><td>{{kr 2,6}}</td></tr>
</tbody>
</table>
<p>Sådan regner du dit eget bad ud: tag den samlede effekt fra typeskiltet, gang med antallet af timer, kabinen er tændt, inklusive opvarmningen, og gang med den andel af tiden, elementerne faktisk er tændt. En kabine på 1.860 W, der står tændt i en time, og hvor termostaten holder elementerne tændt 80 procent af tiden, bruger 1.860 W × 1 time × 0,8 = ca. 1,5 kWh. Andelen er det tal, du ikke kender på forhånd; en stikmåler kan ikke bruges, hvis kabinen er fast tilsluttet, men elmåleren kan aflæses før og efter et bad, mens resten af huset er stille.</p>
<p>Den store usikkerhed er, hvor stor en del af tiden elementerne er tændt. Står kabinen et koldt sted, i en kælder eller et udhus om vinteren, skal elementerne arbejde mere for at nå temperaturen. Står den i et opvarmet rum, når den hurtigt frem og kan skrue ned.</p>

<h2>Forbruget over en uge og et år</h2>
<p>Med et typisk bad på 1,5 kWh bliver det:</p>
<table>
<thead><tr><th>Brug</th><th>kWh om året</th><th>Pris om året</th><th>Pris om måneden</th></tr></thead>
<tbody>
<tr><td>1 gang om ugen</td><td>78</td><td>{{kr 78}}</td><td>{{kr 78 /md}}</td></tr>
<tr><td>2 gange om ugen</td><td>156</td><td>{{kr 156}}</td><td>{{kr 156 /md}}</td></tr>
<tr><td>4 gange om ugen</td><td>312</td><td>{{kr 312}}</td><td>{{kr 312 /md}}</td></tr>
<tr><td>Hver dag</td><td>546</td><td>{{kr 546}}</td><td>{{kr 546 /md}}</td></tr>
</tbody>
</table>
<p>Vores sæsonprofil lægger lidt mere af forbruget i vintermånederne, fordi de fleste bruger saunaen oftere, når det er koldt, og fordi kabinen skal arbejde mere i et koldt rum.</p>

<h2>Intet energimærke</h2>
<p>Infrarøde saunaer har ikke et EU-energimærke. Forordning 2015/1186 om energimærkning af lokale rumvarmere nævner udtrykkeligt saunaovne som undtaget, og en infrarød kabine er heller ikke omfattet af andre energimærker. Den eneste måde at sammenligne forbruget på er derfor effekten på typeskiltet — og hvor godt kabinen er isoleret, hvilket producenterne sjældent oplyser i tal.</p>

<h2>Hvornår på dagen?</h2>
<p>De fleste går i sauna om aftenen, og det er ofte døgnets dyreste timer. Et bad på 1,5 kWh i en dyr time koster mere end det samme bad midt på dagen eller sent på aftenen, men forskellen pr. gang er lille i kroner. Oversigten over dagens timer ovenfor viser, hvilke timer der er dyrest i dag. Kan du flytte saunabadet en time eller to væk fra dagens dyreste vindue, sparer du lidt — men en sauna er ikke et apparat, der kan køre, mens du sover.</p>

<h2>Sådan holder du forbruget nede</h2>
<ul>
<li><strong>Kort opvarmning</strong> — infrarød varme mærkes hurtigt, så tænd kort før, du skal bruge den.</li>
<li><strong>Brug termostaten</strong> — en lidt lavere temperatur betyder, at elementerne slukker oftere.</li>
<li><strong>Placér kabinen i et opvarmet rum</strong>, ikke i et koldt udhus.</li>
<li><strong>Luk døren</strong> mellem badene, og sluk kabinen, når I er færdige.</li>
<li><strong>Brug timeren</strong>, så kabinen ikke står tændt, hvis den bliver glemt.</li>
</ul>
<p>Overvejer du et <a href="/spabad/">spabad</a> i stedet, er forbruget helt anderledes, fordi vandet skal holdes varmt døgnet rundt.</p>`,
  faqs: [
    { question: "Hvor meget strøm bruger en infrarød sauna?", answer: "En kabine til to personer har typisk 1,8-2 kW. Et bad med kort opvarmning bruger efter vores skøn ca. 1,5 kWh, svarende til {{kr 1,5}} ved {{pris_kwh}}." },
    { question: "Bruger en infrarød sauna mindre strøm end en traditionel sauna?", answer: "Ofte, fordi kabinen ikke skal forvarme luft og sten, før du går ind. Harvia skriver om Onni Sienna Duo, at den ikke kræver forvarmning, og at temperaturen ligger på 20-70 grader." },
    { question: "Hvad koster en infrarød sauna om året?", answer: "To gange om ugen giver ca. 156 kWh om året, svarende til {{kr 156}}. Bruger du den hver dag, bliver det ca. 546 kWh, eller {{kr 546}}." },
    { question: "Skal en infrarød sauna have særlig strøm?", answer: "De fleste kabiner til en-to personer kører på 230 V. Bauhaus skriver om Sanotechnik Malmö 2 på 2.000 W, at den skal tilsluttes af en autoriseret elinstallatør." },
    { question: "Har infrarøde saunaer et energimærke?", answer: "Nej. EU's energimærkning af lokale rumvarmere undtager saunaovne, og der findes ikke et andet energimærke for infrarøde kabiner. Sammenlign effekten på typeskiltet." },
  ],
  relatedSlugs: ["sauna", "infraroedt-varmepanel", "spabad", "vildmarksbad"],
  sources: [
    { name: "Harvia — Onni Sienna Duo infrarød kabine (produktdata)", url: "https://shop.harvia.com/en-de/product/SGN1310MT/onni-sienna-duo" },
    { name: "Bauhaus — Sanotechnik sauna Malmö 2, infrarød", url: "https://www.bauhaus.dk/sanotechnik-sauna-malmo-2-inde-infrarod-1-3-m" },
    { name: "Forordning (EU) 2015/1186, artikel 1 — energimærkning af lokale rumvarmere", url: "https://www.legislation.gov.uk/eur/2015/1186/article/1" },
  ],
  calculatorConfig: {
    title: "Beregn den infrarøde saunas strømforbrug",
    options: [
      { label: "Kabine til én, kort bad (ca. 1,0 kWh)", kwhPerUse: 1.0 },
      { label: "Kabine til to, termostat skruer ned (ca. 1,5 kWh)", kwhPerUse: 1.5 },
      { label: "Kabine til to, fuld effekt en time (ca. 1,9 kWh)", kwhPerUse: 1.9 },
      { label: "Kabine til tre-fire, langt bad (ca. 2,6 kWh)", kwhPerUse: 2.6 },
    ],
    usageLabel: "Saunabade pr. uge",
    usageUnit: "gange/uge",
    usageMin: 1,
    usageMax: 14,
    usageDefault: 2,
    usageStep: 1,
    per: "gang",
    perYear: 52,
  },
  publishDate: "2026-12-09",
  updated: "2026-11-22",
};

export default infraroedSauna;
