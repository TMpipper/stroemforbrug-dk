import type { ApplianceData } from "@/lib/types";

/**
 * Massagestol — intet EU-energimærke. Tal: Panasonic EP-MAF1 (120 V, 3,0 A mærkestrøm, ca. 0,3 W slukket på
 * betjeningen, varmelegeme 17 W, programmer på ca. 15 min., slukker efter ca. 3 min. uden betjening, højst 30 min.
 * massage om dagen), Panasonic EP-MAC3 (220 V-udgaven: mærkeeffekt 80 W, automatisk program ca. 15 min.).
 * Gennemsnitlig effekt under massage (ca. 100-150 W) er vores skøn.
 */
const massagestol: ApplianceData = {
  slug: "massagestol",
  meta: {
    category: "pleje",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: false,
    synonyms: ["massagestol", "massage stol", "massagelænestol", "elektrisk massagestol", "massagesofa", "zero gravity massagestol", "shiatsu massagestol", "massagepude"],
  },
  name: "Massagestol",
  article: "en",
  title: "Massagestol strømforbrug (2026) → watt, standby og pris",
  description:
    "En massagestol bruger typisk 80-360 W under et program på et kvarter og 0,3 W slukket. Se Panasonics tal, kWh pr. massage, pr. år og hvad varmen lægger til.",
  heading: "Strømforbrug for en massagestol: kWh og pris pr. massage",
  quickAnswer:
    "Panasonic oplyser en mærkeeffekt på 80 W for 220 V-udgaven af EP-MAC3, og de større stole er mærket til mere. Et program varer omkring et kvarter, så en massage bruger efter vores skøn 0,025-0,0375 kWh, svarende til {{oere 0,025-0,0375}}. Fem massager om ugen bliver cirka 10 kWh om året, eller {{kr 10}}, plus lidt standby.",
  kwhRange: [1, 40],
  typicalKwh: 10,
  wattage: 150,
  standbyWatts: 0.3,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.1, 1.1, 1, 1, 0.9, 0.9, 0.9, 0.9, 1, 1, 1.1, 1.1],
  content: `<h2>Motorer, luftpuder og varme</h2>
<p>En massagestol er et møbel fyldt med små elmotorer. En motor flytter rullerne op og ned ad ryggen, andre laver ælte- og bankebevægelserne, en luftpumpe fylder puder i sæde, arme og ben, og en motor lægger stolen tilbage. Mange stole har også et varmelegeme i ryggen. Ingen af delene kører på fuld kraft hele tiden — programmet skifter mellem dem — så det gennemsnitlige forbrug under en massage er lavere end det, der står på typeskiltet.</p>
<p>Panasonic oplyser mærkeeffekten i sine brugsanvisninger. For EP-MAC3 er det 80 W i 220 V-udgaven. Den større EP-MAF1 er mærket til 3,0 ampere ved 120 volt, svarende til højst omkring 360 W, når alt kører på én gang, og varmelegemet i stolen bruger ifølge Panasonic 17 W. Vi har ikke fundet målinger af det gennemsnitlige forbrug under et helt program, så vi regner med 100-150 W som vores skøn.</p>

<h2>Hvad koster en massage?</h2>
<p>Panasonic skriver, at de automatiske programmer i både EP-MAC3 og EP-MAF1 varer cirka 15 minutter. Et kvarter er altså den naturlige enhed for en massagestol.</p>
<table>
<thead><tr><th>Massage (vores skøn)</th><th>Gennemsnitlig effekt</th><th>kWh pr. gang</th><th>Pris pr. gang</th></tr></thead>
<tbody>
<tr><td>Program på 15 min, uden varme</td><td>ca. 100 W</td><td>0,025</td><td>{{oere 0,025}}</td></tr>
<tr><td>Program på 15 min, med varme og luftpuder</td><td>ca. 150 W</td><td>0,0375</td><td>{{oere 0,0375}}</td></tr>
<tr><td>To programmer i træk, 30 min med varme</td><td>ca. 150 W</td><td>0,075</td><td>{{oere 0,075}}</td></tr>
</tbody>
</table>
<p>Med fem massager om ugen på et kvarter med varme bliver det cirka 10 kWh om året, svarende til {{kr 10}}. Det er omtrent det samme, som et køleskab bruger på to-tre uger. Selv en flittig bruger, der tager en massage hver dag, kommer sjældent over 15 kWh om året.</p>

<h2>Standby: stolen, der altid er tilsluttet</h2>
<p>En massagestol står i stuen med stikket i, og betjeningen er klar, når du sætter dig. Panasonic oplyser for EP-MAF1, at stolen bruger cirka 0,3 W, når den er slukket på betjeningen. I alle årets 8.760 timer er det 2,6 kWh, svarende til {{kr 2,6}}. Det er omkring en fjerdedel af det, stolen bruger på massagerne, så standby betyder noget, men det er ikke stort. Stolen slukker desuden selv: Panasonic skriver, at den slukker, hvis der ikke startes en massage eller trykkes på en knap i cirka tre minutter.</p>
<p>Har din stol en hovedafbryder, eller sidder den på en stikdåse med kontakt, kan du fjerne standbyforbruget helt. Læs mere om de små forbrug døgnet rundt på siden om <a href="/standby/">standby</a>.</p>

<h2>Varmefunktionen</h2>
<p>Mange stole har varme i ryggen eller ved fødderne. Varmelegemet i Panasonics EP-MAF1 bruger 17 W, når det er tændt — ikke meget. Et kvarter med varme lægger derfor kun nogle få watt-timer til massagen. Panasonic skriver i manualen, at varmefunktionen ikke bør bruges i lang tid, og at man ikke bør bruge den uafbrudt efter 15 minutters massage, fordi man kan få forbrændinger ved forholdsvis lave temperaturer, når den samme hud er i kontakt med varmen længe. Følg producentens anvisning for din stol.</p>

<h2>Hvor længe ad gangen?</h2>
<p>Panasonic skriver i brugsanvisningerne, at man ikke bør massere mere end 30 minutter om dagen, og at de enkelte dele af kroppen ikke bør masseres for længe ad gangen. For strømmen betyder det, at en massagestol bruges i korte stykker og aldrig når op på de forbrug, der kendetegner apparater, der kører i timevis. Følg leverandørens anvisning — og lægens, hvis du er i behandling.</p>

<h2>Massagestolen ved siden af andre apparater til velvære</h2>
<p>En massagestol er en lille post sammenlignet med de andre ting, man køber for at slappe af derhjemme. En <a href="/infraroed-sauna/">infrarød sauna</a> bruger mere strøm på én session end massagestolen på en måned, og et <a href="/solarie/">solarie</a> bruger omtrent lige så meget på én session som stolen på tre uger med fem massager om ugen. Et <a href="/loebebaand/">løbebånd</a> bruger flere gange så meget pr. time, fordi motoren skal bære din vægt.</p>
<p>Massagepuder og fodmassagere, der lægges på en stol eller sofa, har mindre motorer og typisk en lille adapter. De bruger mindre end en stor stol. Sidder adapteren i stikket hele tiden, er det også her standbyforbruget, der er værd at holde øje med.</p>

<h2>Hvornår bruges massagestolen?</h2>
<p>De fleste tager en massage om aftenen efter arbejde — netop de timer, hvor strømmen er dyrest. For en massagestol er det ligegyldigt i kroner: et kvarter koster nogle få øre, uanset tidspunktet. Oversigten over dagens timepriser viser, hvornår strømmen er dyrest, men brug stolen, når det passer dig.</p>

<h2>Sådan holder du forbruget nede</h2>
<ol>
<li><strong>Vælg korte programmer</strong> — de automatiske programmer på et kvarter er nok for de fleste.</li>
<li><strong>Brug varmen, når du har brug for den</strong>, og følg producentens anvisning.</li>
<li><strong>Sluk på hovedafbryderen</strong> eller en stikdåse med kontakt, hvis stolen har standby.</li>
<li><strong>Hold afstand til væggen</strong> — Panasonic skriver 15 cm bag ryglænet for EP-MAC3, så stolen kan lægges tilbage frit.</li>
<li><strong>Vedligehold stolen</strong> efter brugsanvisningen, så motorer og ruller kører let.</li>
</ol>
<p>Brug beregneren øverst på siden, hvis du vil se, hvad dine egne massager koster ved månedens elpris.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger en massagestol?",
      answer:
        "Panasonic oplyser 80 W for 220 V-udgaven af EP-MAC3, mens den større EP-MAF1 er mærket til 3,0 A ved 120 V, svarende til højst omkring 360 W. Under et program er det gennemsnitlige forbrug efter vores skøn 100-150 W.",
    },
    {
      question: "Hvad koster en massage i en massagestol?",
      answer:
        "Et program på et kvarter bruger efter vores skøn 0,025-0,0375 kWh, svarende til {{oere 0,025-0,0375}}. Fem massager om ugen bliver cirka 10 kWh om året, eller {{kr 10}}.",
    },
    {
      question: "Bruger en massagestol strøm, når den er slukket?",
      answer:
        "Lidt. Panasonic oplyser cirka 0,3 W for EP-MAF1, når den er slukket på betjeningen. Hele året er det 2,6 kWh, svarende til {{kr 2,6}}.",
    },
    {
      question: "Hvor meget bruger varmen i en massagestol?",
      answer:
        "Varmelegemet i Panasonics EP-MAF1 bruger 17 W. I et kvarter er det cirka 0,004 kWh. Panasonic fraråder at bruge varmen uafbrudt i lang tid.",
    },
    {
      question: "Hvor længe må man sidde i en massagestol?",
      answer:
        "Panasonic skriver i brugsanvisningerne, at man ikke bør massere mere end 30 minutter om dagen. Følg leverandørens anvisning for din stol.",
    },
  ],
  relatedSlugs: ["solarie", "loebebaand", "infraroed-sauna", "gaabaand", "ventilator"],
  sources: [
    { name: "Panasonic — brugsanvisning til EP-MAF1 (3,0 A ved 120 V, ca. 0,3 W slukket, varme 17 W, programmer på ca. 15 min.)", url: "https://help.na.panasonic.com/wp-content/uploads/2023/02/EPMAF1_P9310MAF1201_ENG_FRE_CHI.pdf" },
    { name: "Panasonic — brugsanvisning til EP-MAC3 (80 W i 220 V-udgaven, højst 30 min. massage om dagen)", url: "https://help.na.panasonic.com/wp-content/uploads/2024/10/EPMAC3_ENG_FRE.pdf" },
  ],
  calculatorConfig: {
    title: "Beregn massagestolens strømforbrug",
    options: [
      { label: "Program på 15 min uden varme (vores skøn: ca. 100 W)", kwhPerUse: 0.025 },
      { label: "Program på 15 min med varme og luftpuder (vores skøn: ca. 150 W)", kwhPerUse: 0.0375 },
      { label: "30 min med varme (vores skøn: ca. 150 W)", kwhPerUse: 0.075 },
    ],
    usageLabel: "Massager pr. uge",
    usageUnit: "gange/uge",
    usageMin: 1,
    usageMax: 14,
    usageDefault: 5,
    usageStep: 1,
    per: "massage",
    perYear: 52,
  },
  publishDate: "2026-12-20",
  updated: "2026-11-23",
};

export default massagestol;
