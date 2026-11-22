import type { ModelData } from "@/lib/models";

const macMiniM4: ModelData = {
  slug: "mac-mini-m4",
  parent: "computer",
  brand: "Apple",
  name: "Mac mini M4",
  released: "2024-10",
  synonyms: ["mac mini 2024", "mac mini m4 pro", "mac mini m4 watt", "mac mini som server", "mac mini hjemmeserver", "apple mac mini m4"],
  title: "Mac mini M4 strømforbrug (2026) → watt, kWh og pris",
  description:
    "Mac mini M4 og M4 Pro fra 2024: Apples watt-tal ved 230 V, kWh om året, hvad det koster at lade den køre døgnet rundt, og hvad skærmen lægger til.",
  intro:
    "Den lille kasse bruger i tomgang omtrent som en lille LED-pære — det er skærmen ved siden af, der bestemmer, hvad skrivebordet koster i strøm.",
  content: `<h2>Hvor mange watt bruger en Mac mini M4?</h2>
<p>Apples miljørapport for Mac mini fra oktober 2024 oplyser forbruget målt ved 230 volt: 4,01 W tændt i tomgang, 0,51 W i dvale og 0,11 W slukket. Tallene dækker både M4 og M4 Pro. Rapporten har én fælles tabel for Mac mini og oplyser, at produktvurderingerne bygger på en amerikansk konfiguration med M4 Pro; Apple skelner altså ikke mellem chipsene, når det gælder forbruget. I tomgang er Mac mini med ethernet tilsluttet og har indlæst macOS. Dvale er den tilstand, maskinen selv går i efter ti minutter, med vågn-ved-netværksadgang slået til.</p>
<p>Fire watt er meget lidt for en stationær computer. En ældre tårn-pc bruger typisk mange gange så meget i tomgang, og en <a href="/gaming-pc/">gaming-pc</a> kan trække flere hundrede watt under spil. Forklaringen er, at Apples M4-chip samler processor, grafik og hukommelse på én chip, der er bygget til bærbare, og at strømforsyningen sidder inde i kabinettet uden en separat adapter.</p>

<h2>Skærmen er ikke regnet med</h2>
<p>Mac mini leveres uden skærm, tastatur og mus, og Apples tal gælder kun selve maskinen. Det er vigtigt at have med, når du sammenligner med en <a href="/computer/imac-m4/">iMac M4</a>, hvor skærmen er bygget ind og indgår i målingen. En ekstern skærm bruger typisk flere gange så meget som en Mac mini i tomgang, og en stor skærm med høj lysstyrke kan gøre forskellen mellem et skrivebord på 15 kWh og et på 50 kWh om året. Vil du kende hele skrivebordets forbrug, så læg skærmens tal til — se <a href="/skaerm/">skærmens strømforbrug</a>.</p>
<p>Tastatur og mus lades via USB og bruger så lidt, at de ikke flytter noget. Højttalere og eksterne harddiske kan derimod stå tændt døgnet rundt, også når Mac'en sover, og det er værd at tjekke, om de har deres egen standby.</p>

<h2>Hvad koster en Mac mini M4 om året?</h2>
<p>Vores faste profil for stationære computere er otte timer tændt om dagen og dvale resten af døgnet, alle årets dage. Med Apples tal bliver det omkring 15 kWh om året, svarende til {{kr 15}} ved månedens marginalpris. Af det står de otte timers tomgang for knap 12 kWh og dvale for omkring 3 kWh.</p>
<p>Tunge opgaver trækker mere end tomgang. Apple oplyser, at strømforsyningen kan levere op til 155 W kontinuerligt, og det er loftet for, hvad M4 Pro-modellen kan bruge under fuld belastning. En time med den maksimale effekt er 0,155 kWh, altså {{oere 0,155}}. I praksis rammer selv tunge programmer sjældent loftet i længere tid, og til kontorarbejde ligger forbruget tæt på tomgangstallet.</p>

<h2>Mac mini som hjemmeserver: døgnet rundt</h2>
<p>Mange bruger en Mac mini som mediecenter, backupserver eller til hjemmeautomatisering, hvor den aldrig slukker. Står den tændt i tomgang 24 timer i døgnet, bliver det omkring 35 kWh om året — {{kr 35}} ved månedens elpris. Det er i samme størrelsesorden som en <a href="/router/">router</a>, der også står tændt hele året. Kan den nøjes med at sove og vågne ved netværksadgang, falder det til omkring 4,5 kWh om året ved 0,51 W.</p>
<p>Strømforsyningen er effektiv: Apple har målt den til 92,6 % ved 230 V, så meget lidt går tabt som varme. Slukket bruger Mac mini 0,11 W, hvilket svarer til under 1 kWh om året. Det er sjældent umagen værd at slukke helt på stikkontakten, medmindre du er væk i længere tid. Læs mere om <a href="/standby/">standby i hjemmet</a>.</p>

<h2>Mac mini M4 sammenlignet med en bærbar</h2>
<p>Et overraskende resultat af Apples tal er, at en Mac mini i tomgang bruger omtrent det samme som en <a href="/laptop/macbook-air-m4/">MacBook Air M4</a> med skærmen tændt. Bærbaren har dog sin skærm med i tallet. Lægger du en ekstern skærm til Mac mini, bruger skrivebordsløsningen derfor mere end bærbaren, til gengæld får du en større skærm og flere porte. Har du allerede en god skærm, er Mac mini en meget strømøkonomisk måde at få en stationær computer på.</p>

<h2>Gode vaner med en Mac mini</h2>
<p>Lad dvale stå på standardindstillingen, så maskinen sover efter ti minutter uden aktivitet, og sæt skærmen til at slukke endnu tidligere. Har du eksterne harddiske til backup, så overvej at lade dem gå i dvale, når de ikke bruges. Og bruger du den som server, så slå unødige baggrundsopgaver fra, så den faktisk kan nå ned i tomgang. Vil du regne på dit eget mønster, kan du bruge <a href="/beregner/">beregneren</a>, og siden om <a href="/computer/">stationære computeres strømforbrug</a> sammenligner typerne.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger en Mac mini M4?",
      answer: "Ifølge Apples målinger ved 230 V bruger Mac mini M4 4,01 W tændt i tomgang, 0,51 W i dvale og 0,11 W slukket. Tallene gælder både M4 og M4 Pro. Under fuld belastning kan den trække op til 155 W.",
    },
    {
      question: "Hvad koster det at have en Mac mini M4 tændt døgnet rundt?",
      answer: "I tomgang 24 timer i døgnet bruger den omkring 35 kWh om året, svarende til {{kr 35}} ved månedens elpris. Sover den det meste af tiden, er det langt mindre.",
    },
    {
      question: "Hvor meget strøm bruger Mac mini M4 om året?",
      answer: "Med otte timer tændt om dagen og dvale resten af døgnet bruger den omkring 15 kWh om året, svarende til {{kr 15}}. Skærmen er ikke regnet med.",
    },
    {
      question: "Bruger Mac mini M4 Pro mere strøm end M4?",
      answer: "Apple oplyser ét fælles tal for Mac mini, så i tomgang er de ens ifølge Apples måling. Under tung last kan M4 Pro trække mere, fordi den har flere kerner, men loftet er strømforsyningens 155 W.",
    },
    {
      question: "Er skærmen med i Mac minis strømforbrug?",
      answer: "Nej. Mac mini leveres uden skærm, og Apples tal gælder kun maskinen. En ekstern skærm bruger typisk flere gange så meget i tomgang og bør regnes med for sig.",
    },
  ],
  sources: [
    { name: "Apple — Mac mini Product Environmental Report, oktober 2024", url: "https://www.apple.com/environment/pdf/products/desktops/Mac_mini_PER_Oct2024.pdf" },
    { name: "Apple Support — Mac mini (2024), tekniske specifikationer", url: "https://support.apple.com/en-gb/121555" },
  ],
  variants: [{ name: "M4 og M4 Pro", watts: { off: 0.11, sleep: 0.51, idle: 4.01 }, source: 0 }],
  publishDate: "2026-11-25",
  updated: "2026-11-22",
};

export default macMiniM4;
