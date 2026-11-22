import type { ApplianceData } from "@/lib/types";

const cirkulationspumpe: ApplianceData = {
  slug: "cirkulationspumpe",
  meta: {
    category: "varme",
    usage: "always-on",
    hasEuLabel: false,
    shiftable: false,
    motif: "radiator",
    synonyms: ["cirkulationspumpe", "varmepumpe til radiatorer", "radiatorpumpe", "pumpe til centralvarme", "grundfos alpha", "cirkulationspumpe strømforbrug", "udskiftning af cirkulationspumpe"],
  },
  name: "Cirkulationspumpe",
  article: "en",
  title: "Cirkulationspumpe strømforbrug (2026) → Gammel mod ny pumpe",
  description: "En gammel cirkulationspumpe bruger omkring 480 kWh om året, en ny ned til ca. 120 kWh. Se forbruget i døgnet, og hvornår en ny pumpe betaler sig.",
  heading: "Strømforbrug for en cirkulationspumpe: kWh i døgnet og pris om året",
  quickAnswer:
    "En ældre cirkulationspumpe fra før 1995 bruger typisk omkring 55 watt døgnet rundt, hvilket ifølge Bolius giver cirka 480 kWh om året eller {{kr 480}} ved {{pris_kwh}}. En ny, automatisk styret pumpe kan komme ned på cirka 120 kWh, svarende til {{kr 120}}. Udskiftningen sparer derfor omkring 300-350 kWh om året.",
  kwhRange: [40, 750],
  typicalKwh: 350,
  wattage: 40,
  standbyWatts: 0.8,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.25, 1.2, 1.15, 1.05, 0.85, 0.7, 0.65, 0.65, 0.8, 1.05, 1.25, 1.3],
  content: `<h2>Den usynlige strømsluger i fyrrummet</h2>
<p>Har dit hus centralvarme med radiatorer eller vandbåren gulvvarme, sidder der en cirkulationspumpe, der sender det varme vand rundt i rørene. Den sidder typisk ved fyret, ved fjernvarmeunitten eller ved <a href="/varmepumpe/">varmepumpen</a>, og de fleste lægger aldrig mærke til den. Men den kører ofte døgnet rundt, også om sommeren, og derfor kan selv en pumpe på få ti watt give et af de største enkeltforbrug i et hus uden elvarme.</p>
<p>Bolius har cirkulationspumpen med på listen over de ti store strømslugere i hjemmet. En pumpe fra før 1995 bruger typisk 55 watt, og når den kører hele året, giver det omkring 482 kWh. Grundfos, der producerer mange af de pumper, der sidder i danske huse, skriver, at cirkulationspumpen kan stå for op til 10 procent af en husstands elforbrug, og at en gammel pumpe kan bruge fire til seks gange så meget strøm som en ny.</p>
<table>
<thead><tr><th>Pumpe</th><th>Watt (ca.)</th><th>kWh i døgnet</th><th>kWh om året</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>Ny pumpe, automatisk styring</td><td>ca. 8</td><td>0,19</td><td>ca. 70</td><td>{{kr 70}}</td></tr>
<tr><td>Ny pumpe på fast kurve</td><td>ca. 14-20</td><td>0,34-0,48</td><td>ca. 120-175</td><td>{{kr 120-175}}</td></tr>
<tr><td>Ældre pumpe, laveste trin</td><td>ca. 40</td><td>0,96</td><td>ca. 350</td><td>{{kr 350}}</td></tr>
<tr><td>Pumpe fra før 1995 (Bolius)</td><td>55</td><td>1,32</td><td>ca. 480</td><td>{{kr 480}}</td></tr>
<tr><td>Ældre pumpe, højeste trin</td><td>ca. 85</td><td>2,04</td><td>ca. 745</td><td>{{kr 745}}</td></tr>
</tbody>
</table>
<p>Rækkerne med en ny pumpe på automatisk styring og en ældre pumpe på højeste trin er vores egne eksempler ud fra typiske effekter; Bolius' tal for en pumpe fra før 1995 og for en ny pumpe (ned til cirka 120 kWh om året) er de målte holdepunkter. Kilderne er ikke helt enige om, hvor stor forskellen er: Bolius skriver op til fire-fem gange, Grundfos fire til seks gange. Det afhænger af, hvilken gammel pumpe der sammenlignes med, og hvordan den nye er indstillet.</p>

<h2>Hvorfor nye pumper bruger så meget mindre</h2>
<p>En gammel pumpe har en almindelig motor med tre faste trin. Den kører med samme omdrejningstal, uanset om radiatorerne er åbne eller lukkede, og Grundfos skriver, at mange gamle pumper kører konstant ved fuld effekt. En ny pumpe har en motor med permanente magneter og elektronisk styring, der skruer ned, når termostaterne på radiatorerne lukker, og som kan nøjes med få watt, når der ikke er brug for varme.</p>
<p>EU har siden 2013 stillet krav til cirkulationspumper gennem forordning 641/2009. Pumper, der sælges i dag, skal have et energieffektivitetsindeks (EEI) på højst 0,23, og forordningen angiver, at de mest effektive pumper på markedet ligger på 0,20 eller derunder. Grundfos oplyser for eksempel, at deres ALPHA-pumper ligger på 0,15-0,20, og at sommertilstanden bruger under 0,8 watt. Kravene betyder, at der ikke længere sælges pumper af den gamle type, så har du en pumpe uden display eller med en drejeknap med tre trin, er den sandsynligvis fra før 2013.</p>

<h2>Hvornår betaler en ny pumpe sig?</h2>
<p>Bolius skriver, at du kan spare 300-350 kWh om året ved at skifte en gammel pumpe ud med en ny, og at det betaler sig, hvis din nuværende pumpe bruger 50 watt eller mere på laveste trin. Grundfos angiver en typisk tilbagebetalingstid på tre til fem år. Ved 325 kWh om året svarer besparelsen til {{kr 325}} om året ved månedens elpris.</p>
<p>Prisen for at skifte pumpen afhænger af, om du selv må gøre det — det kræver normalt en VVS-installatør, fordi pumpen sidder på husets varmekreds — og af, hvilken model der passer. Udskiftning koster typisk en pumpe plus en times arbejde. Brug besparelsen pr. år til at regne ud, hvor mange år det tager, før den nye pumpe har tjent sig hjem; Grundfos anbefaler at tjekke pumper, der er 10-15 år gamle.</p>
<table>
<thead><tr><th>Skift fra</th><th>Til ny pumpe (ca. 120 kWh)</th><th>Besparelse pr. år</th><th>Besparelse på 10 år</th></tr></thead>
<tbody>
<tr><td>Ældre pumpe på laveste trin (ca. 350 kWh)</td><td>120 kWh</td><td>{{kr 230}}</td><td>{{kr 2300}}</td></tr>
<tr><td>Pumpe fra før 1995 (ca. 480 kWh)</td><td>120 kWh</td><td>{{kr 360}}</td><td>{{kr 3600}}</td></tr>
<tr><td>Ældre pumpe på højeste trin (ca. 745 kWh)</td><td>120 kWh</td><td>{{kr 625}}</td><td>{{kr 6250}}</td></tr>
</tbody>
</table>

<h2>Kan du slukke pumpen om sommeren?</h2>
<p>Ja, i mange huse. Når der ikke er brug for varme, er der heller ikke brug for, at pumpen sender vand rundt i radiatorerne. Bolius skriver, at du med en gammel pumpe sparer penge ved at slukke den, også hvis den kun er slukket en tredjedel af døgnet. Har du et oliefyr, gasfyr eller <a href="/pillefyr/">pillefyr</a>, der også laver varmt brugsvand, skal du dog sikre dig, at det varme vand ikke er afhængigt af den samme pumpe. Spørg din VVS-installatør, hvis du er i tvivl.</p>
<p>Nye pumper har ofte en sommertilstand eller en automatik, der selv skruer ned. Lader du pumpen køre om sommeren, bør den mindst stå på laveste trin. Tænd den igen, før fyringssæsonen starter, og kør den et par minutter en gang om måneden hen over sommeren, så den ikke sætter sig fast.</p>
<p>Vores sæsonprofil viser et lavere forbrug om sommeren, fordi vi regner med, at en del pumper skruer ned eller slukkes. Kører din pumpe på samme trin hele året, er forbruget det samme hver måned. Beregneren lader dig vælge, hvor mange dage om året pumpen kører.</p>

<h2>Sådan finder du ud af, hvad din pumpe bruger</h2>
<p>Kig på pumpens typeskilt. Der står effekten i watt for hvert trin, typisk som tre tal, eller et interval for en ny, styret pumpe. Sammenhold det med det trin, pumpen står på — det er ofte markeret med en drejeknap eller en lille kontakt på pumpens side. Gang watt med 24 og del med 1.000, så har du kWh i døgnet. Gang med det antal dage, pumpen kører, for at få årsforbruget.</p>
<p>Står der intet typeskilt, eller er det ulæseligt, er alderen et godt fingerpeg: en pumpe uden elektronik og display er typisk af den gamle type. Et lille måleapparat kan ikke sættes på en pumpe, der er fast tilsluttet, men en aflæsning af elmåleren om natten, før og efter at pumpen er slukket i en time, kan vise forskellen.</p>

<h2>Varmeanlæg og strømforbrug</h2>
<p>Cirkulationspumpen er kun én del af varmeanlæggets strømforbrug. Et <a href="/pillefyr/">pillefyr</a> bruger strøm til snegl, blæser og tænding; et gasfyr til blæser og styring; og en jordvarme- eller luft-til-vand-varmepumpe bruger strøm til kompressoren, som er langt det største forbrug. Har du en varmepumpe, er cirkulationspumpen ofte bygget ind i anlægget, og dens forbrug indgår i varmepumpens samlede tal. Har du <a href="/gulvvarme/">vandbåren gulvvarme</a>, kan der sidde en ekstra pumpe i gulvvarmens fordelerskab.</p>

<h2>Sådan sparer du strøm på cirkulationspumpen</h2>
<ul>
<li><strong>Skift en gammel pumpe</strong> — bruger den 50 watt eller mere på laveste trin, betaler det sig ifølge Bolius.</li>
<li><strong>Vælg laveste trin</strong>, der stadig giver varme i alle radiatorer.</li>
<li><strong>Sluk om sommeren</strong>, hvis pumpen ikke også bruges til det varme brugsvand.</li>
<li><strong>Brug automatikken</strong> på en ny pumpe frem for en fast kurve.</li>
<li><strong>Få anlægget indreguleret</strong> — et anlæg, der er i balance, kan nøjes med et lavere pumpetrin.</li>
</ul>`,
  faqs: [
    { question: "Hvor meget strøm bruger en cirkulationspumpe?", answer: "En ældre pumpe fra før 1995 bruger typisk 55 watt, hvilket giver cirka 480 kWh om året eller {{kr 480}} ved {{pris_kwh}}. En ny pumpe kan komme ned på cirka 120 kWh, svarende til {{kr 120}}." },
    { question: "Hvad sparer jeg ved at skifte cirkulationspumpen?", answer: "Bolius angiver 300-350 kWh om året, svarende til {{kr 300-350}}. Grundfos angiver en typisk tilbagebetalingstid på tre til fem år." },
    { question: "Kan jeg slukke cirkulationspumpen om sommeren?", answer: "Ofte ja, hvis pumpen ikke også bruges til det varme brugsvand. Bolius skriver, at det sparer penge med en gammel pumpe, også hvis den kun slukkes en tredjedel af døgnet. Kør den kort en gang om måneden, så den ikke sætter sig fast." },
    { question: "Hvordan ved jeg, om min cirkulationspumpe er gammel?", answer: "Har den en drejeknap med tre trin og intet display, er den sandsynligvis af den gamle type. EU's krav fra 2013 betyder, at nye pumper har elektronisk styring." },
    { question: "Hvor mange kWh bruger en cirkulationspumpe i døgnet?", answer: "En gammel pumpe på 55 watt bruger 1,32 kWh i døgnet, svarende til {{kr 1,32}}. En ny pumpe på automatisk styring bruger ofte under 0,2 kWh, svarende til under {{kr 0,2}}." },
  ],
  relatedSlugs: ["pillefyr", "varmepumpe", "gulvvarme", "olieradiator", "spabad"],
  sources: [
    { name: "Bolius — Her er 10 store strømslugere i dit hjem", url: "https://www.bolius.dk/her-er-10-store-stroemslugere-i-dit-hjem-672" },
    { name: "Bolius — Kan vi spare på elregningen ved at slukke cirkulationspumpen?", url: "https://www.bolius.dk/kan-vi-spare-paa-elregningen-ved-at-slukke-cirkulationspumpen-98514" },
    { name: "Grundfos — Den grønne to-do for husejere (2025)", url: "https://www.grundfos.com/content/dam/local/da-dk/activity-assets/dbs-den-groenne-to-do/brochures/Grundfos_Den-Groenne-To-Do_husejere_2025.pdf" },
    { name: "Forordning (EF) nr. 641/2009, bilag I — krav til cirkulationspumper", url: "https://www.legislation.gov.uk/eur/2009/641/annex/I" },
  ],
  calculatorConfig: {
    title: "Beregn cirkulationspumpens strømforbrug",
    options: [
      { label: "Ny pumpe, automatisk styring (ca. 8 W)", kwhPerUse: 0.19 },
      { label: "Ny pumpe på fast kurve (ca. 20 W)", kwhPerUse: 0.48 },
      { label: "Ældre pumpe, laveste trin (ca. 40 W)", kwhPerUse: 0.96 },
      { label: "Pumpe fra før 1995 (ca. 55 W)", kwhPerUse: 1.32 },
      { label: "Ældre pumpe, højeste trin (ca. 85 W)", kwhPerUse: 2.04 },
    ],
    usageLabel: "Dage i drift pr. år",
    usageUnit: "dage/år",
    usageMin: 120,
    usageMax: 365,
    usageDefault: 365,
    usageStep: 5,
    per: "døgn",
    perYear: 1,
  },
  publishDate: "2026-11-28",
  updated: "2026-11-22",
};

export default cirkulationspumpe;
