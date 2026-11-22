import type { ApplianceData } from "@/lib/types";

const pillefyr: ApplianceData = {
  slug: "pillefyr",
  meta: {
    category: "varme",
    usage: "heating",
    hasEuLabel: false,
    shiftable: false,
    motif: "radiator",
    synonyms: ["pillefyr", "træpillefyr", "pillekedel", "biobrændselsfyr", "stokerfyr", "pillefyr strømforbrug", "pillefyr elforbrug"],
  },
  name: "Pillefyr",
  article: "et",
  title: "Pillefyr strømforbrug (2026) → Snegl, blæser og tænding",
  description: "Et moderne pillefyr bruger typisk 200-350 kWh strøm om året til snegl, blæser, tænding og styring. Se hvor strømmen går hen, og hvordan du får den ned.",
  heading: "Strømforbrug for et pillefyr: kWh om året, pris pr. måned og billige timer",
  quickAnswer:
    "Et moderne pillefyr bruger strøm til snegl, blæser, elektrisk tænding og styring — ifølge vores beregning ud fra producentdata typisk 200-350 kWh om året. 300 kWh svarer til {{kr 300}} ved {{pris_kwh}} eller omkring {{kr 300 /md}} om måneden i gennemsnit. Selve varmen kommer fra træpillerne; strømmen er et tillæg, og cirkulationspumpen kommer oven i.",
  kwhRange: [150, 750],
  typicalKwh: 300,
  wattage: 50,
  standbyWatts: 7,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.55, 1.45, 1.25, 0.95, 0.6, 0.45, 0.4, 0.4, 0.55, 0.95, 1.3, 1.55],
  content: `<h2>Pillefyret varmer med træ, men kører på strøm</h2>
<p>Et pillefyr brænder træpiller og laver varme til radiatorer, gulvvarme og varmt brugsvand. Varmen kommer fra pillerne — Bolius regner med, at et parcelhus bruger omkring 5 tons om året, og at et kilo træpiller giver 4-4,5 kWh varme i et fyr med en virkningsgrad på 80-90 procent. Men fyret kan ikke køre uden strøm. En snegl fører pillerne fra magasinet ind i brændkammeret, en blæser giver forbrændingsluft, et varmelegeme eller en glødetænder sætter ild til pillerne, og en styring holder øje med det hele. Mange fyr har desuden et sugeanlæg, der henter piller fra et stort lager, og en motor, der renser varmeveksleren.</p>
<p>Det er dette strømforbrug, siden her handler om — ikke prisen på pillerne. Bolius anbefaler netop at spørge til strømforbruget, når du køber pillefyr, fordi det kan variere meget mellem modeller.</p>

<h2>Hvor går strømmen hen?</h2>
<p>Den østrigske producent ÖkoFEN oplyser i sine tekniske datablade, hvor meget hver del af fyret bruger. Tallene herunder er fra deres Pellematic og Pellematic Condens, som er typiske moderne pillefyr til parcelhuse.</p>
<table>
<thead><tr><th>Del</th><th>Effekt, når den kører</th><th>Hvornår den kører</th></tr></thead>
<tbody>
<tr><td>Hele fyret på fuld effekt</td><td>24-120 W</td><td>Når der er brug for meget varme</td></tr>
<tr><td>Hele fyret på 30 procent effekt</td><td>15-36 W</td><td>Det meste af fyringssæsonen</td></tr>
<tr><td>Standby (styring)</td><td>ca. 7 W</td><td>Hele året, når fyret ikke brænder</td></tr>
<tr><td>Elektrisk tænding</td><td>250 W</td><td>Nogle minutter ved hver opstart</td></tr>
<tr><td>Sugeturbine til pillelageret</td><td>1.400 W</td><td>Få minutter, når magasinet fyldes</td></tr>
</tbody>
</table>
<p>Tallene viser, at det ikke er de store effekter, der afgør årsforbruget. Tændingen og sugeturbinen trækker meget, men kun kort. Det er de mange timer på lav effekt og i standby, der løber op. Forskellen mellem de to modelserier — 15-20 W mod 27-36 W på lav effekt — viser også, at nyere, modulerende fyr kan nøjes med markant mindre.</p>

<h2>Hvad bruger et pillefyr om året?</h2>
<p>Der findes ingen fælles måling af pillefyrs årlige elforbrug, så vi har regnet det ud fra producentens tal og et typisk parcelhus. Regnestykket er et skøn, ikke en måling:</p>
<table>
<thead><tr><th>Post (moderne fyr, ca. 20.000 kWh varme om året)</th><th>kWh om året (skøn)</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>Drift på lav til mellem effekt, ca. 3.500 timer à 30-60 W</td><td>105-210</td><td>{{kr 105-210}}</td></tr>
<tr><td>Standby resten af året, ca. 5.000 timer à 7 W</td><td>35</td><td>{{kr 35}}</td></tr>
<tr><td>Tænding, ca. 1.000 opstarter à 6 minutter</td><td>25</td><td>{{kr 25}}</td></tr>
<tr><td>Sugeanlæg, ca. 10 minutter om dagen</td><td>85</td><td>{{kr 85}}</td></tr>
<tr><td>I alt</td><td>ca. 250-355</td><td>{{kr 250-355}}</td></tr>
</tbody>
</table>
<p>Har fyret ikke et sugeanlæg, men et magasin, du selv fylder, falder forbruget. Ældre fyr uden modulering, med en blæser, der kører på fuld kraft, og med en tænding, der bruges ofte, kan ligge væsentligt højere; der findes ikke et målt tal for dem, så beregnerens valg for et ældre fyr er vores eget skøn — mål gerne selv med en stikmåler. Beregneren lader dig vælge mellem et moderne og et ældre fyr og justere antallet af dage, fyret er i drift.</p>

<h2>Cirkulationspumpen kommer oven i</h2>
<p>Tallene ovenfor gælder selve fyret. Varmen skal også pumpes rundt i huset, og det gør en <a href="/cirkulationspumpe/">cirkulationspumpe</a>. En gammel pumpe kan bruge mere strøm end hele pillefyret — Bolius regner med omkring 480 kWh om året for en pumpe fra før 1995 — så har du et ældre anlæg, er pumpen ofte det første sted at lede efter en besparelse. Nogle pillefyr har pumpen bygget ind, og så står den med i fyrets datablad.</p>

<h2>Energimærket på pillefyr</h2>
<p>Pillefyr har et EU-energimærke, men det handler om, hvor godt fyret udnytter pillerne til varme, ikke om strømforbruget. Klassen beregnes ud fra fyrets årsvirkningsgrad, hvor strømforbruget indgår som en mindre korrektion. Det betyder, at to fyr i samme energiklasse kan have forskelligt elforbrug. Når du sammenligner fyr, så kig efter tallene for elforbrug på fuld og lav effekt og i standby i det tekniske datablad — de står hos de fleste producenter. Derfor viser vi ingen energimærke-tabel med kWh strøm på denne side.</p>

<h2>Kan strømmen flyttes til billige timer?</h2>
<p>Kun lidt. Fyret skal levere varme, når huset har brug for den, og strømforbruget følger varmen. Har du en varmtvandsbeholder eller en akkumuleringstank, kan fyret dog køre i længere perioder og holde pause imellem, hvilket giver færre opstarter med elektrisk tænding. Sugeanlægget kan på nogle fyr sættes til at fylde magasinet på bestemte tidspunkter — har dit fyr den mulighed, så læg det uden for kl. 17-21, hvor nettariffen er højere. Gevinsten er få kroner om året, men det er gratis at gøre.</p>

<h2>Sådan måler du dit eget fyr</h2>
<p>Pillefyret er som regel fast tilsluttet, så du kan ikke sætte en stikmåler på det. Der er to andre veje. Mange moderne fyr viser selv driftstimer og antal opstarter i menuen — gang driftstimerne med fyrets effekt på lav last fra databladet, og læg standby og tændinger til. Eller brug elmåleren: aflæs den en nat, hvor resten af huset er stille, først med fyret tændt og så i en time med fyret slukket på kontakten. Forskellen er fyrets forbrug i den time.</p>
<p>Gør det helst både en kold vinternat og en mild dag i foråret, så du ser, hvordan forbruget følger varmebehovet. Har du timeafregnet strøm og adgang til dine måledata, kan du også se døgnforbruget hos dit netselskab, men her er fyret blandet sammen med alt andet i huset.</p>

<h2>Pillefyr eller varmepumpe?</h2>
<p>Mange, der har pillefyr, overvejer en <a href="/varmepumpe/">varmepumpe</a>. Regnestykket er helt anderledes: en varmepumpe bruger strøm til at lave al varmen, typisk flere tusinde kWh om året, mens pillefyret bruger træpiller til varmen og kun et par hundrede kWh strøm. Sammenligningen skal derfor tage både pillepris og strømpris med, og den afhænger meget af huset. Det, siden her kan bidrage med, er pillefyrets strømtillæg: det er en mindre post, men ikke ingenting.</p>

<h2>Om sommeren: standby eller slukket</h2>
<p>Mange pillefyr laver også det varme brugsvand, og så skal de køre hele året. Om sommeren er varmebehovet lille, og fyret starter og stopper ofte for at holde beholderen varm. Det giver mange tændinger i forhold til den varme, der leveres, og standby-forbruget løber hele tiden. Har du solvarme eller en elpatron i beholderen, kan det være en løsning at slukke fyret helt fra juni til august. En elpatron bruger dog langt mere strøm end fyret — den laver al varmen med el — så det regnestykke går kun op, hvis du har solvarme, eller hvis det varme vand kan laves på en anden billig måde. Sæsonprofilen på siden her viser et lavt forbrug om sommeren, fordi fyret i et typisk hus kun laver varmt vand i de måneder.</p>

<h2>Sådan holder du fyrets strømforbrug nede</h2>
<ul>
<li><strong>Få fyret indstillet</strong> af en servicetekniker, så det modulerer ned i stedet for at starte og stoppe ofte.</li>
<li><strong>Undgå mange opstarter</strong> — hver tænding koster strøm. En akkumuleringstank kan hjælpe.</li>
<li><strong>Rens fyret</strong> efter producentens anvisning; et snavset fyr kører længere for samme varme.</li>
<li><strong>Sluk om sommeren</strong>, hvis det varme vand kan laves på anden måde, og fyret ikke behøver stå på standby.</li>
<li><strong>Tjek cirkulationspumpen</strong> — den kan være en større post end fyret.</li>
<li><strong>Spørg til elforbruget</strong>, når du køber nyt fyr.</li>
</ul>`,
  faqs: [
    { question: "Hvor meget strøm bruger et pillefyr?", answer: "Et moderne pillefyr bruger efter vores beregning ud fra producentdata typisk 200-350 kWh om året til snegl, blæser, tænding og styring. 300 kWh koster {{kr 300}} ved {{pris_kwh}}." },
    { question: "Hvor mange watt bruger et pillefyr, når det kører?", answer: "ÖkoFEN oplyser 15-36 W ved 30 procent effekt og 24-120 W ved fuld effekt afhængigt af model. En time på 50 W koster {{oere 0,05}}." },
    { question: "Bruger pillefyret strøm, når det ikke brænder?", answer: "Ja, styringen bruger omkring 7 W på standby. Hele året giver det omkring 60 kWh, svarende til {{kr 60}}, hvis fyret aldrig slukkes helt." },
    { question: "Hvor meget strøm bruger tændingen?", answer: "Den elektriske tænding trækker omkring 250 W, men kun nogle minutter pr. opstart. Med 1.000 opstarter om året giver det cirka 25 kWh, svarende til {{kr 25}}." },
    { question: "Er cirkulationspumpen med i pillefyrets strømforbrug?", answer: "Normalt ikke. Cirkulationspumpen kommer oven i, og en gammel pumpe kan bruge omkring 480 kWh om året, svarende til {{kr 480}} — mere end selve fyret." },
    { question: "Viser energimærket på et pillefyr strømforbruget?", answer: "Nej, energimærket viser først og fremmest, hvor godt fyret udnytter pillerne til varme. Elforbruget står i producentens tekniske datablad." },
  ],
  relatedSlugs: ["cirkulationspumpe", "varmepumpe", "varmtvandsbeholder", "olieradiator", "jordvarme"],
  sources: [
    { name: "ÖkoFEN — tekniske data, Pellematic Condens", url: "https://oekofen.com/assets/download/Englisch/Pellematic_Condens/Technische_Daten/TD_Condens_en_aktuell.pdf" },
    { name: "ÖkoFEN — tekniske data, Pellematic", url: "https://www.oekofen.com/assets/download/Englisch/Pelletskessel/Technische_Daten/TD_Pellematic_en_aktuell.pdf" },
    { name: "Bolius — Pillefyr", url: "https://www.bolius.dk/pillefyr-18510" },
  ],
  calculatorConfig: {
    title: "Beregn pillefyrets strømforbrug",
    options: [
      { label: "Moderne fyr, magasin uden sugeanlæg (ca. 0,6 kWh/døgn)", kwhPerUse: 0.6 },
      { label: "Moderne fyr med sugeanlæg (ca. 0,85 kWh/døgn)", kwhPerUse: 0.85 },
      { label: "Ældre fyr uden modulering (ca. 1,5 kWh/døgn)", kwhPerUse: 1.5 },
      { label: "Ældre fyr, mange opstarter (ca. 2 kWh/døgn)", kwhPerUse: 2.0 },
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

export default pillefyr;
