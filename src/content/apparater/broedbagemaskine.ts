import type { ApplianceData } from "@/lib/types";

/**
 * Brødbagemaskine — Which? (2008, gengivet af Real Bread Campaign): 0,36 kWh pr. brød for både hvede- og fuldkornsbrød på
 * standardprogrammet, 3 t 18 min. (hvede) og 3 t 54 min. (fuldkorn). Which?'s nyere test (energimåler på hver kørsel) regner
 * 5,55–13,31 pund om året for to brød á 1 kg om ugen ved 26,32 pence/kWh → 21–51 kWh/år = 0,2–0,49 kWh pr. brød (vores omregning).
 * Panasonic SD-YR2550: 505–550 W, timer op til 13 timer, tre brødstørrelser. Ovnen: Øko-Test (schweizisk måling) 1,15 kWh for
 * den første time ved 200 °C. Hurtigprogram og varmhold er vores skøn. Beregneren: kWh pr. brød, antal pr. uge × 52.
 */
const broedbagemaskine: ApplianceData = {
  slug: "broedbagemaskine",
  meta: {
    category: "koekken",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: true,
    motif: "ovn",
    synonyms: ["brødbagemaskine", "broedbagemaskine", "bagemaskine", "brødmaskine", "brød bagemaskine", "bread maker", "panasonic brødbagemaskine", "bage brød", "brødbager"],
  },
  name: "Brødbagemaskine",
  article: "en",
  title: "Brødbagemaskine strømforbrug (2026) → kWh pr. brød vs. ovn",
  description:
    "Se hvor meget strøm en brødbagemaskine bruger pr. brød, hvad timeren og varmholdet betyder, og hvornår den slår ovnen – målt i kWh og pris pr. brød.",
  heading: "Strømforbrug for en brødbagemaskine: kWh, pris pr. gang og billigste tidspunkt",
  quickAnswer:
    "En brødbagemaskine bruger typisk 0,2–0,5 kWh pr. brød, og et almindeligt hvedebrød på standardprogrammet ligger omkring 0,36 kWh. Det koster cirka {{kr 0,36}} ved månedens elpris. Bager du to brød om ugen, bliver det omkring 37 kWh om året, eller {{kr 37}} – og med timeren kan bagningen lægges i nattens billige timer.",
  kwhRange: [5, 100],
  typicalKwh: 37,
  wattage: 550,
  standbyWatts: 0.5,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.08, 1.05, 1.02, 0.98, 0.95, 0.9, 0.88, 0.9, 0.98, 1.05, 1.08, 1.13],
  content: `<h2>Hvad bruger en brødbagemaskine pr. brød?</h2>
<p>En brødbagemaskine ælter, lader dejen hæve og bager brødet i den samme lille form. Det tager typisk tre til fire timer på standardprogrammet, men det meste af tiden bruger maskinen næsten ingen strøm. Motoren ælter i korte perioder, og under hævningen holder varmeelementet kun dejen lun. Det er først i den sidste time, når brødet bages, at elementet kører for alvor.</p>
<p>Den britiske forbrugerorganisation Which? har målt forbruget med en energimåler på hver kørsel. I deres test fra 2008 brugte maskinerne i gennemsnit 0,36 kWh pr. brød, både for hvedebrød og fuldkornsbrød på standardprogrammet. Et hvedebrød tog i gennemsnit 3 timer og 18 minutter, et fuldkornsbrød 3 timer og 54 minutter. Ét brød koster altså cirka {{kr 0,36}} ved månedens elpris.</p>
<p>I den nyere test regner Which? årets elregning for to brød á 1 kg om ugen og finder, at forskellen mellem maskinerne er ret lille. Omregner man deres beløb til kWh, ligger maskinerne på 21–51 kWh om året, svarende til 0,2–0,49 kWh pr. brød. Det passer godt med den gamle måling og er grundlaget for tallene på denne side.</p>

<h2>Forbrug efter program og brødstørrelse</h2>
<p>Programmet betyder mere end mærkeeffekten. En Panasonic SD-YR2550, som er en af de mest solgte maskiner, er mærket 505–550 W, men den trækker kun fuld effekt i bageperioden. Et hurtigprogram springer en del af hævningen over, så maskinen kører kortere tid. Et stort fuldkornsbrød har brug for længere bagetid og en lidt højere temperatur.</p>
<table>
<thead><tr><th>Program og brød</th><th>kWh pr. brød</th><th>Pris pr. brød</th><th>kWh om året ved 2 brød om ugen</th></tr></thead>
<tbody>
<tr><td>Hurtigprogram, mindre brød (vores skøn)</td><td>0,25 kWh</td><td>{{kr 0,25}}</td><td>26 kWh</td></tr>
<tr><td>Standardprogram, hvedebrød (målt)</td><td>0,36 kWh</td><td>{{kr 0,36}}</td><td>37 kWh</td></tr>
<tr><td>Standard + en times varmhold (vores skøn)</td><td>0,42 kWh</td><td>{{kr 0,42}}</td><td>44 kWh</td></tr>
<tr><td>Stort fuldkornsbrød, langt program (vores skøn)</td><td>0,45 kWh</td><td>{{kr 0,45}}</td><td>47 kWh</td></tr>
</tbody>
</table>
<p>Hurtigprogrammet, varmholdet og det store fuldkornsbrød er vores skøn ud fra målingerne og programtiderne. De ligger alle inden for det spænd på 0,2–0,49 kWh, som Which?'s årstal giver.</p>

<h2>Brødbagemaskine eller ovn?</h2>
<p>Til et enkelt brød vinder brødbagemaskinen klart. Den varmer en form på størrelse med brødet, mens en <a href="/ovn/">ovn</a> skal varme et rum på 60–70 liter op. En schweizisk måling, som Øko-Test har gengivet, viser, at en almindelig ovn bruger omkring 1,15 kWh den første time ved 200 grader. Det er godt tre gange så meget som et helt brød i maskinen. Den britiske Energy Saving Trust har tidligere regnet med 1,6 kWh for at bage et brød i en elovn.</p>
<p>Regnestykket vender, når du bager meget på én gang. Tre-fire brød eller en hel plade boller i ovnen deler den samme opvarmning, og så bliver forbruget pr. brød nogenlunde det samme som i maskinen. Bager du kun et enkelt brød eller en lille portion, er en <a href="/miniovn/">miniovn</a> et andet bud, men den skal stadig have dejen ælt og hævet på forhånd.</p>

<h2>Timeren: bag brødet i de billige timer</h2>
<p>Næsten alle brødbagemaskiner har en timer. Panasonics model kan udskyde starten i op til 13 timer, og flere af de maskiner, Which? har testet, kan udskyde i op til 15 timer. Det betyder, at du kan fylde maskinen om aftenen og få et nybagt brød til morgenmaden. Bageperioden, som er den del, der bruger mest strøm, ligger i programmets sidste time. Skal brødet være klar klokken 7, bager maskinen altså tidligt om morgenen – før morgenens prisspids.</p>
<p>Forskellen på et brød i nattens timer og et brød bagt i aftenens dyreste timer er få øre pr. brød, men det er gratis at gøre. Boksen længere oppe på siden viser, hvilke timer der er billigst i dag. Which? anbefaler, at køkkenet er mindst 21 grader, når timeren bruges, så dejen ikke bliver for kold, mens den venter.</p>

<h2>Varmhold og standby</h2>
<p>Når brødet er færdigt, slår mange maskiner over på varmhold i op til en time, så skorpen ikke bliver blød af dampen. Det er en lille ekstra udgift: efter vores skøn 0,05–0,06 kWh, fordi elementet kun skal holde formen varm. Which? anbefaler at tage brødet ud med det samme, og det er både bedst for brødet og for forbruget.</p>
<p>En brødbagemaskine med display bruger lidt strøm, når den står i stikket. EU's regler for standby i husholdningsapparater (forordning 2023/826, gældende fra maj 2025) siger højst 0,5 W i ren standby og 0,8 W, hvis displayet viser noget. I værste fald er det 4–7 kWh om året. Står maskinen gemt væk i et skab mellem brugene, så tag stikket ud.</p>

<h2>Hvad koster et hjemmebagt brød i strøm?</h2>
<p>Strømmen er den mindste del af et hjemmebagt brød. Ved månedens elpris koster bagningen cirka {{kr 0,36}}, og med to brød om ugen bliver det {{kr 37}} om året. Mel, gær og de andre ingredienser koster flere gange mere end strømmen, så brødbagemaskinen skal ikke købes for at spare strøm, men for bekvemmelighedens skyld. Til gengæld er den et af de sparsommeste valg, hvis du alligevel vil bage et enkelt brød ad gangen.</p>
<p>Bruger du maskinen til andet end brød, ændrer billedet sig lidt. Programmet til dej uden bagning bruger kun en brøkdel af strømmen, fordi elementet næsten ikke kører. Marmelade- og kageprogrammer ligger efter vores skøn på samme niveau som et hurtigprogram.</p>

<h2>Sådan sparer du strøm med brødbagemaskinen</h2>
<ol>
<li><strong>Brug timeren</strong> til at lægge bagningen i nattens eller formiddagens billige timer.</li>
<li><strong>Tag brødet ud med det samme</strong>, så varmholdet ikke kører en hel time.</li>
<li><strong>Vælg den rigtige størrelse</strong> – et XL-brød, der halvdelen ender i skraldespanden, er spild af både mel og strøm.</li>
<li><strong>Brug dejprogrammet</strong> og bag i ovnen, når du laver flere brød eller boller på én gang.</li>
<li><strong>Træk stikket</strong>, hvis maskinen står længe ubrugt med tændt display.</li>
</ol>
<p>Skal brødet ristes dagen efter, bruger en <a href="/broedrister/">brødrister</a> kun en lille smule strøm pr. skive. Laver du gryderetter og ris i en anden maskine på køkkenbordet, kan du sammenligne med vores side om <a href="/multikoger/">multikogeren</a>.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en brødbagemaskine pr. brød?",
      answer:
        "Typisk 0,2–0,5 kWh. Which? målte i gennemsnit 0,36 kWh for et brød på standardprogrammet, hvilket koster cirka {{kr 0,36}} ved månedens elpris.",
    },
    {
      question: "Er det billigere at bage brød i en brødbagemaskine end i ovnen?",
      answer:
        "Ja, til et enkelt brød. En ovn bruger omkring 1,15 kWh den første time ved 200 grader, mens et helt brød i maskinen bruger cirka 0,36 kWh. Bager du mange brød på én gang, bliver forskellen pr. brød lille.",
    },
    {
      question: "Hvor mange watt bruger en brødbagemaskine?",
      answer:
        "De fleste er mærket 450–650 W, fx 505–550 W for Panasonic SD-YR2550. Maskinen trækker kun fuld effekt, mens brødet bages, og meget lidt under æltning og hævning.",
    },
    {
      question: "Kan jeg bruge timeren til at bage i de billige timer?",
      answer:
        "Ja. De fleste maskiner kan udskyde starten i 13–15 timer, så brødet bages om natten og er klar til morgenmaden. Bageperioden, der bruger mest strøm, ligger så før morgenens prisspids.",
    },
    {
      question: "Hvad koster en brødbagemaskine i strøm om året?",
      answer:
        "Med to brød om ugen bruger den omkring 37 kWh om året, hvilket koster cirka {{kr 37}} ved månedens elpris.",
    },
  ],
  relatedSlugs: ["ovn", "miniovn", "broedrister", "multikoger", "airfryer"],
  sources: [
    { name: "Real Bread Campaign (Sustain) — Bread machines: Which?-målinger 2008 og Energy Saving Trust", url: "https://www.sustainweb.org/realbread/bread_machines/" },
    { name: "Which? — Bread maker features explained (årlig elregning, varmhold, timer)", url: "https://www.which.co.uk/reviews/bread-makers/article/bread-maker-features-explained" },
    { name: "Panasonic — SD-YR2550, specifikationer (505–550 W, timer 13 timer)", url: "https://www.panasonic.com/uk/consumer/home-appliances/breadmakers/sd-yr2550.specs.html" },
    { name: "Øko-Test — Stromverbrauch: Wie viel kosten Kaffeekochen, Pizzabacken & Co", url: "https://www.oekotest.de/freizeit-technik/Stromverbrauch-Wie-viel-Cent-kosten-eigentlich-Kaffeekochen-Pizzabacken-Co-_11247_1.html" },
    { name: "EUR-Lex — Forordning (EU) 2023/826 om standby og slukket tilstand", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R0826" },
  ],
  calculatorConfig: {
    title: "Brødbagemaskine forbrugsberegner",
    options: [
      { label: "Hurtigprogram, mindre brød", kwhPerUse: 0.25 },
      { label: "Standardprogram, hvedebrød", kwhPerUse: 0.36 },
      { label: "Standard + 1 time varmhold", kwhPerUse: 0.42 },
      { label: "Stort fuldkornsbrød", kwhPerUse: 0.45 },
    ],
    usageLabel: "Antal brød pr. uge",
    usageUnit: "pr. uge",
    usageMin: 1,
    usageMax: 7,
    usageDefault: 2,
    usageStep: 1,
    per: "brød",
    perYear: 52,
  },
  publishDate: "2026-12-03",
  updated: "2026-11-22",
};

export default broedbagemaskine;
