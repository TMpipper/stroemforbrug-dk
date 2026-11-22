import type { ModelData } from "@/lib/models";

const macbookProM4: ModelData = {
  slug: "macbook-pro-m4",
  parent: "laptop",
  brand: "Apple",
  name: "MacBook Pro M4",
  released: "2024-10",
  synonyms: ["macbook pro 2024", "mbp m4", "macbook pro 14 m4", "macbook pro m4 pro", "macbook pro 16 m4 max", "macbook pro m4 max"],
  title: "MacBook Pro M4 strømforbrug (2026) → M4, Pro og Max målt",
  description:
    "MacBook Pro fra 2024 med M4, M4 Pro og M4 Max i 14 og 16 tommer: Apples watt ved 230 V, kWh om året og hvad en fuld opladning koster.",
  intro:
    "Fra den mindste 14\" M4 til den største 16\" M4 Max er spændet i årsforbrug næsten en fordobling — men selv den store bruger under en tiendedel af, hvad et typisk køleskab bruger.",
  content: `<h2>Hvor mange watt bruger en MacBook Pro M4?</h2>
<p>MacBook Pro-familien fra oktober 2024 findes med tre chips og to skærmstørrelser, og Apple har udgivet en miljørapport for hver størrelse med forbruget målt ved 230 volt. Den 14" med M4 bruger 4,03 W tændt i tomgang med skærmen tændt, den 14" med M4 Pro 4,19 W. Den 16" med M4 Pro bruger 6,58 W, og den 16" med M4 Max 7,59 W. I dvale ligger de mellem 0,26 W og 0,43 W, og helt slukket på 0,16 W for 14" og 0,25 W for 16".</p>
<p>Én kombination mangler: 14" med M4 Max. Apple nævner den i rapportens CO₂-afsnit, men har ikke offentliggjort en separat forbrugstabel for den, så vi viser den ikke her i stedet for at gætte.</p>

<h2>Skærmen og chippen: hvad koster hvad?</h2>
<p>Forskellen mellem 14" M4 og 14" M4 Pro er kun 0,16 W i tomgang. Det viser, at chippen fylder lidt, når maskinen ikke laver noget. Spranget op til 16" er langt større — omkring 2,4 W — og det skyldes næsten udelukkende den større skærm med flere lyskilder bag panelet. Mellem 16" M4 Pro og 16" M4 Max er der godt 1 W, fordi M4 Max har en større chip med flere grafikkerner og mere hukommelse, der skal holdes i gang.</p>
<p>Under last er billedet et andet. M4 Pro og især M4 Max kan trække mange gange tomgangsforbruget, når de eksporterer video eller renderer 3D, og MacBook Pro har blæser, så den kan holde farten længe. Loftet er opladerens effekt: Apple har målt 14" med 70 W-opladeren og 16" med 140 W-opladeren. En time med 16" for fuld kraft koster derfor højst omkring 0,16 kWh fra stikket — {{oere 0,16}} ved månedens elpris.</p>

<h2>Hvilken oplader fulgte med?</h2>
<p>14" med M4 og 14" med 12-kernet M4 Pro fik en 70 W-oplader i æsken; 14" med 14-kernet M4 Pro eller M4 Max fik en 96 W-oplader. Alle 16" fik 140 W. Apples målinger af tab og tomgang er lavet med 70 W- og 140 W-opladerne, og det er dem, tabellen viser. 70 W-opladeren omsætter 91,3 % af strømmen fra stikkontakten ved 230 V og bruger 0,09 W uden last. 140 W-opladeren omsætter 87,8 % og bruger 0,05 W uden last. Har du en 96 W-oplader, har Apple ikke målt den i denne rapport.</p>

<h2>Hvad koster det at oplade en MacBook Pro M4?</h2>
<p>Batteriet er på 72,4 Wh i alle 14"-modeller og 99,6 Wh i 16", ifølge Apples specifikationer. En fuld opladning fra tomt til fuldt trækker omkring 0,079 kWh fra stikket for 14" og 0,113 kWh for 16", fordi 140 W-opladeren taber lidt mere undervejs. Det svarer til {{oere 0,079}} og {{oere 0,113}} ved månedens elpris. Lader du 16" helt op hver dag i et år, bliver det knap 42 kWh, svarende til {{kr 42}} — men med opladeren tilsluttet ved skrivebordet lader du sjældent fra bunden.</p>

<h2>Årsforbruget for hver variant</h2>
<p>Med vores faste profil for bærbare — seks timer tændt og dvale resten af døgnet — bruger 14" M4 godt 10 kWh om året og 14" M4 Pro godt 11 kWh. Den 16" M4 Pro lander på omkring 17 kWh og 16" M4 Max på knap 20 kWh. Det svarer til {{kr 10-20}} om året. Dvale fylder mest på 16", hvor 0,41–0,43 W i atten timer dagligt bliver 2,7–2,8 kWh om året.</p>
<p>Står du og vælger mellem 14" og 16", er strømmen altså ikke et argument af betydning. Forskellen på 6–9 kWh om året svarer til {{kr 6-9}}; vælg størrelsen efter skærmplads og vægt.</p>

<h2>M4 mod M5: hvad har ændret sig?</h2>
<p>Efterfølgeren <a href="/laptop/macbook-pro-m5/">MacBook Pro M5</a> ligger i samme leje. Den 14" M5 bruger 3,92 W i tomgang mod 4,03 W for M4, og 16" med M5 Pro eller M5 Max bruger 7,18 W, altså mellem M4 Pro og M4 Max. Den største forskel er opladeren: 140 W-opladeren, som Apple har målt med M5, omsætter 91,3 % mod 87,8 % for den, der fulgte med M4. Til gengæld følger der i Danmark ingen oplader med M5, mens M4 kom med én i æsken.</p>
<p>Overvejer du i stedet en lettere maskine, bruger <a href="/laptop/macbook-air-m4/">MacBook Air M4</a> 3,63–4,37 W i tomgang, altså omtrent som 14" MacBook Pro M4. Forskellen viser sig først under vedvarende last, hvor Air'en skruer ned for farten, og Pro'en holder den.</p>

<h2>Sådan bruger en MacBook Pro M4 mindst</h2>
<p>Hold skærmens lysstyrke på et behageligt niveau; XDR-skærmen kan lyse langt kraftigere end målingens faste niveau, og HDR-indhold på fuld lysstyrke koster flere watt. Luk låget frem for at lade den stå tændt, og lad en ekstern skærm gå i dvale med maskinen — den bruger typisk mere end selve MacBook'en. Siden om <a href="/laptop/">bærbare computeres strømforbrug</a> sammenligner med andre typer, og <a href="/beregner/">beregneren</a> regner på dine egne timer.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger en MacBook Pro M4?",
      answer: "Ifølge Apples målinger ved 230 V bruger 14\" M4 4,03 W, 14\" M4 Pro 4,19 W, 16\" M4 Pro 6,58 W og 16\" M4 Max 7,59 W tændt i tomgang. I dvale bruger de 0,26–0,43 W. Under tung last kan de trække op til opladerens effekt.",
    },
    {
      question: "Hvor meget strøm bruger MacBook Pro M4 om året?",
      answer: "Med seks timers brug om dagen og dvale resten af døgnet bruger 14\" godt 10–11 kWh og 16\" omkring 17–20 kWh om året. Det svarer til {{kr 10-20}} om året.",
    },
    {
      question: "Hvad koster det at oplade en MacBook Pro M4?",
      answer: "En fuld opladning trækker omkring 0,079 kWh for 14\" og 0,113 kWh for 16\", når opladerens tab er medregnet. Det koster ca. {{oere 0,079}} og {{oere 0,113}} ved månedens elpris.",
    },
    {
      question: "Bruger M4 Max mere strøm end M4 Pro?",
      answer: "I 16\" ja, men ikke meget: 7,59 W mod 6,58 W i tomgang ifølge Apple. Det er omkring 2 kWh mere om året, svarende til {{kr 2,3}}. Under tung last kan M4 Max trække mere, men aldrig over de 140 W, opladeren leverer.",
    },
    {
      question: "Hvorfor står 14\" M4 Max ikke i tabellen?",
      answer: "Apple har ikke offentliggjort en separat forbrugstabel ved 230 V for 14\" med M4 Max. Vi viser kun officielle tal og gætter ikke.",
    },
  ],
  sources: [
    { name: "Apple — MacBook Pro 14-inch Product Environmental Report, oktober 2024", url: "https://www.apple.com/environment/pdf/products/notebooks/MacBook_Pro_14-inch_PER_Oct2024.pdf" },
    { name: "Apple — MacBook Pro 16-inch Product Environmental Report, oktober 2024", url: "https://www.apple.com/environment/pdf/products/notebooks/MacBook_Pro_16-inch_PER_Oct2024.pdf" },
    { name: "Apple Support — MacBook Pro (14-inch, M4, 2024), tekniske specifikationer", url: "https://support.apple.com/en-gb/121552" },
    { name: "Apple Support — MacBook Pro (14-inch, M4 Pro or M4 Max, 2024), tekniske specifikationer", url: "https://support.apple.com/en-gb/121553" },
    { name: "Apple Support — MacBook Pro (16-inch, 2024), tekniske specifikationer", url: "https://support.apple.com/en-gb/121554" },
  ],
  variants: [
    { name: "14\" M4", watts: { off: 0.16, sleep: 0.26, idle: 4.03 }, adapterNoLoadW: 0.09, adapterEfficiency: 0.913, adapterW: 70, batteryWh: 72.4, source: 0 },
    { name: "14\" M4 Pro", watts: { off: 0.16, sleep: 0.3, idle: 4.19 }, adapterNoLoadW: 0.09, adapterEfficiency: 0.913, adapterW: 70, batteryWh: 72.4, source: 0 },
    { name: "16\" M4 Pro", watts: { off: 0.25, sleep: 0.41, idle: 6.58 }, adapterNoLoadW: 0.05, adapterEfficiency: 0.878, adapterW: 140, batteryWh: 99.6, source: 1 },
    { name: "16\" M4 Max", watts: { off: 0.25, sleep: 0.43, idle: 7.59 }, adapterNoLoadW: 0.05, adapterEfficiency: 0.878, adapterW: 140, batteryWh: 99.6, source: 1 },
  ],
  publishDate: "2026-11-24",
  updated: "2026-11-22",
};

export default macbookProM4;
