import type { ModelData } from "@/lib/models";

const macMiniM6: ModelData = {
  slug: "mac-mini-m6",
  parent: "computer",
  brand: "Apple",
  name: "Mac mini M6",
  released: "2026-08",
  synonyms: ["mac mini 2026", "mac mini m5 pro", "mac mini m6 watt", "ny mac mini", "mac mini m6 server", "apple mac mini m6"],
  title: "Mac mini M6 strømforbrug (2026) → dvale, tomgang og pris",
  description:
    "Mac mini med M6 eller M5 Pro fra august 2026: Apples watt ved 230 V, kWh om året, døgndrift som server, og hvorfor dvale fylder mere end før.",
  intro:
    "Den nye Mac mini bruger en fjerdedel mindre i tomgang end M4-modellen, men mere i dvale — og hvor meget du sparer, afhænger af, hvor længe den sover.",
  content: `<h2>Hvor mange watt bruger en Mac mini M6?</h2>
<p>Mac mini fra august 2026 findes med to chips, M6 og M5 Pro, og Apples miljørapport har én fælles forbrugstabel for begge, målt ved 230 volt. Tændt i tomgang bruger den 3,0 W, i dvale 0,7 W og helt slukket 0,19 W. Apple skelner altså ikke mellem chipsene, når det gælder forbruget, og vi viser derfor én række. I tomgang er Mac mini tilsluttet ethernet og har indlæst macOS; dvale er tilstanden, den selv går i efter ti minutter, med vågn-ved-netværksadgang slået til.</p>
<p>Bemærk, at Apple i den nye rapport afrunder til én decimal for tomgang og dvale, hvor M4-rapporten fra 2024 angav to. Det gør små forskelle sværere at læse, men ændrer ikke billedet. Apple oplyser, at Mac mini bruger 70 % mindre energi end ENERGY STAR-kravet for en computer af den type.</p>

<h2>Lavere tomgang, højere dvale</h2>
<p>Sammenlignet med <a href="/computer/mac-mini-m4/">Mac mini M4</a> er tomgangen faldet fra 4,01 W til 3,0 W, altså omkring en fjerdedel. Dvale er til gengæld steget fra 0,51 W til 0,7 W, og slukket fra 0,11 W til 0,19 W. Hvad det betyder for dig, afhænger af, hvordan maskinen bruges. Står den mest tændt, vinder M6 klart. Sover den det meste af døgnet, æder det højere dvaleforbrug en del af gevinsten.</p>
<p>Med vores faste profil for stationære computere — otte timer tændt og dvale resten af døgnet — bruger Mac mini M6 knap 13 kWh om året mod knap 15 kWh for M4. Af de 13 kWh står tomgangen for knap 9 kWh og dvale for godt 4 kWh, så dvale fylder næsten en tredjedel af årsforbruget. Det svarer i alt til {{kr 13}} om året ved månedens marginalpris.</p>

<h2>Døgndrift: Mac mini som server</h2>
<p>Bruger du Mac mini som hjemmeserver, mediecenter eller til hjemmeautomatisering, hvor den aldrig sover, er M6 den mest sparsomme af de to generationer. I tomgang 24 timer i døgnet bliver det omkring 26 kWh om året, svarende til {{kr 26}}, mod omkring 35 kWh for M4. Får den lov at sove og vågne ved netværksadgang, ligger den på omkring 6 kWh om året ved 0,7 W.</p>
<p>Strømforsyningen sidder inde i kabinettet, og Apple har målt den til at omsætte 94,5 % af strømmen fra stikkontakten ved 230 V — mere end de 92,6 % i M4-modellen. Den kan levere op til 155 W kontinuerligt ifølge Apples specifikationer, og det er loftet for, hvad M5 Pro-modellen kan bruge under fuld belastning. En time ved det loft er 0,155 kWh, altså {{oere 0,155}}; til kontorarbejde ligger forbruget langt nærmere tomgangstallet.</p>

<h2>Skærmen er ikke med</h2>
<p>Som altid med Mac mini gælder tallene kun maskinen. En ekstern skærm bruger typisk flere gange så meget som Mac minien i tomgang, og den er derfor det vigtigste sted at spare. Sæt skærmen til at slukke efter få minutter, og vælg en skærm med lav effekt, hvis du skal købe ny. Sammenligner du med en <a href="/computer/imac-m6/">iMac M6</a>, så husk, at iMac'ens tal indeholder dens 24" skærm. Læs mere om <a href="/skaerm/">skærmes strømforbrug</a>.</p>

<h2>Slukke eller sove?</h2>
<p>Med 0,7 W i dvale og 0,19 W slukket er forskellen godt 0,5 W. Sover Mac mini seksten timer i døgnet, kan du spare omkring 3 kWh om året ved at slukke den i stedet, svarende til {{kr 3}}. Det er ikke meget, men det er mere end for M4, hvor forskellen var omkring 2 kWh. Ulempen er, at maskinen ikke kan hente opdateringer, tage backup eller vågne over netværket, når den er slukket. Bruger du den som server, giver dvale mest mening; bruger du den kun om aftenen, kan det godt betale sig at slukke.</p>

<h2>Gode vaner med en Mac mini M6</h2>
<p>Lad dvale stå på standardindstillingen, så den sover efter ti minutter uden aktivitet, og lad skærmen slukke endnu tidligere. Har du eksterne diske eller en dockingstation tilsluttet, så tjek, om de bruger strøm, mens maskinen sover — det gør de ofte. Vil du regne på dine egne timer, så brug <a href="/beregner/">beregneren</a> med watt-tallene ovenfor, og se siden om <a href="/standby/">standby-forbrug</a> for de ting, der står tændt rundt om den.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger en Mac mini M6?",
      answer: "Ifølge Apples målinger ved 230 V bruger Mac mini M6 3,0 W tændt i tomgang, 0,7 W i dvale og 0,19 W slukket. Tallene gælder både M6 og M5 Pro. Under fuld belastning kan den trække op til 155 W.",
    },
    {
      question: "Bruger Mac mini M6 mindre strøm end M4?",
      answer: "I tomgang ja: 3,0 W mod 4,01 W. I dvale bruger M6 mere: 0,7 W mod 0,51 W. Med otte timer tændt om dagen bruger M6 knap 13 kWh og M4 knap 15 kWh om året — en forskel på omkring {{kr 1,8}}.",
    },
    {
      question: "Hvad koster det at have en Mac mini M6 tændt døgnet rundt?",
      answer: "I tomgang 24 timer i døgnet bruger den omkring 26 kWh om året, svarende til {{kr 26}} ved månedens elpris.",
    },
    {
      question: "Bruger Mac mini M5 Pro mere strøm end M6?",
      answer: "Apple oplyser ét fælles tal for begge chips, så i tomgang er de ens ifølge Apples måling. Under tung last kan M5 Pro trække mere, men loftet er strømforsyningens 155 W.",
    },
    {
      question: "Skal jeg slukke Mac mini M6 om natten?",
      answer: "Det sparer omkring 3 kWh om året i forhold til dvale, svarende til {{kr 3}}. Bruger du den som server eller til backup om natten, er dvale det bedste valg.",
    },
  ],
  sources: [
    { name: "Apple — Mac mini Product Environmental Report, august 2026", url: "https://www.apple.com/environment/pdf/products/desktops/Mac_mini_PER_Aug2026.pdf" },
    { name: "Apple Support — Mac mini (M6 or M5 Pro), tekniske specifikationer", url: "https://support.apple.com/en-gb/128108" },
  ],
  variants: [{ name: "M6 og M5 Pro", watts: { off: 0.19, sleep: 0.7, idle: 3.0 }, source: 0 }],
  publishDate: "2026-11-27",
  updated: "2026-11-22",
};

export default macMiniM6;
