import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/electronicdisplays/${reg}`;

const samsungViewfinityS8: ModelData = {
  slug: "samsung-viewfinity-s8",
  parent: "skaerm",
  brand: "Samsung",
  name: "Samsung ViewFinity S8",
  released: "2026-06",
  synonyms: [
    "samsung viewfinity s8 strømforbrug",
    "viewfinity s8 watt",
    "samsung s80uh strømforbrug",
    "samsung s80ud watt",
    "ls27h804uauxen strømforbrug",
    "samsung 4k skærm strømforbrug",
    "viewfinity s8 5k watt",
  ],
  title: "Samsung ViewFinity S8 strømforbrug (2026) → watt i 4K og 5K",
  description:
    "Samsung ViewFinity S8 i 27 og 32 tommer med 4K og 5K: watt i SDR og HDR fra EU-energimærket for S80H, S80UH, S80HF og S80UD, kWh om året og USB-C.",
  intro:
    "Den nye 27\" ViewFinity S8 S80H bruger 21 W i standardbilledet, 4 W mindre end forgængeren S80D. Udgaverne med USB-C bruger 26 W som 27\" og 32,4–33 W som 32\".",
  content: `<h2>Hvor mange watt bruger Samsung ViewFinity S8?</h2>
<p>ViewFinity S8 er Samsungs skærme til arbejde med høj opløsning: 4K (3840 × 2160 pixel) i 27" og 32" og fra 2026 også en 27" med 5K (5120 × 2880). Samsung skriver generationen sidst i navnet: S80D er fra 2024 og S80H fra 2026. Et U i navnet, som i S80UH og S80UD, betyder en udgave med USB-C, så skærmen kan forsyne en bærbar med strøm og billede i ét kabel, og S80HF er 5K-udgaven. I EU's produktdatabase EPREL står skærmene under Samsungs modelkoder, for eksempel S27H804UAU for 27" S80UH.</p>
<p>I standardbilledet (SDR) bruger 27" S80H 21 W og 27" S80UH 26 W. Standby er 0,5 W og slukket 0,3 W. Med seks timer tændt om dagen og standby resten af døgnet bruger 27" S80H omkring 49 kWh om året, svarende til {{kr 49}}, og 27" S80UH omkring 60 kWh, svarende til {{kr 60}}.</p>
<table>
<thead><tr><th>Model</th><th>Størrelse og opløsning</th><th>SDR</th><th>HDR</th><th>Klasse</th></tr></thead>
<tbody>
<tr><td>S80H (S27H804EAU, 2026)</td><td>27", 4K</td><td>21 W</td><td>39 W</td><td>E</td></tr>
<tr><td>S80UH (S27H804UAU, 2026)</td><td>27", 4K, USB-C</td><td>26 W</td><td>42 W</td><td>F</td></tr>
<tr><td>S80HF (S27H804EFA, 2026)</td><td>27", 5K</td><td>26 W</td><td>49 W</td><td>F</td></tr>
<tr><td>S80H (S32H804EAU, 2026)</td><td>32", 4K</td><td>30 W</td><td>60 W</td><td>F</td></tr>
<tr><td>S80UH (S32H804UAU, 2026)</td><td>32", 4K, USB-C</td><td>32,4 W</td><td>61 W</td><td>F</td></tr>
<tr><td>S80D (S27D800EAU, 2024)</td><td>27", 4K</td><td>25 W</td><td>39 W</td><td>F</td></tr>
<tr><td>S80UD (S27D800UAU, 2024)</td><td>27", 4K, USB-C</td><td>25 W</td><td>41 W</td><td>F</td></tr>
<tr><td>S80D (S32D800EAU, 2024)</td><td>32", 4K</td><td>31 W</td><td>57 W</td><td>F</td></tr>
<tr><td>S80UD (S32D800UAU, 2024)</td><td>32", 4K, USB-C</td><td>33 W</td><td>58 W</td><td>G</td></tr>
</tbody>
</table>

<h2>2026-udgaven uden USB-C bruger mindre</h2>
<p>Den nye S80H uden USB-C er den sparsomme af udgaverne her. Som 27" bruger den 21 W mod 25 W for S80D fra 2024, og den får derfor energiklasse E, mens alle de andre står i F eller G. Med vores profil er forskellen omkring 9 kWh om året, svarende til {{kr 9}}. Som 32" er forskellen mindre: 30 W mod 31 W.</p>
<p>Med USB-C er billedet et andet. 27" S80UH fra 2026 bruger 26 W og dermed 1 W mere end S80UD fra 2024. Har du brug for USB-C-tilslutningen, er der altså ingen strøm at spare ved at vælge den nye årgang.</p>

<h2>USB-C-udgaverne og den bærbare</h2>
<p>U-udgaverne bruger 5 W mere end S80H som 27" og 2,4 W mere som 32". Forskellen hænger sandsynligvis sammen med den ekstra elektronik til USB-C; Samsung forklarer det ikke. Den strøm, skærmen sender videre til en bærbar, tæller ikke med i energimærkets tal for skærmen, men den kommer fra samme stikkontakt. Oplader du for eksempel en <a href="/laptop/macbook-air-m4/">MacBook Air M4</a> via skærmen, ligger dens forbrug oveni.</p>
<p>Til gengæld slipper du for en separat oplader på skrivebordet, og en oplader, der står i stikket uden at lade, bruger også lidt. Forskellen mellem de to løsninger er lille; vælg den, der passer til dit skrivebord.</p>

<h2>5K koster ikke ekstra</h2>
<p>5K-udgaven S80HF har næsten dobbelt så mange pixel som 4K, men bruger de samme 26 W som 27" S80UH i standardbilledet. I HDR bruger den mere, 49 mod 42 W. Til billedbehandling og tekst, hvor den høje opløsning gør en forskel, koster 5K altså ikke mere strøm end en 4K-skærm med USB-C.</p>
<p>Går du op til 32", bruger skærmen 30–33 W. Med vores profil er det 69–76 kWh om året, svarende til {{kr 69-76}}. I HDR stiger forbruget til 57–61 W på 32", omkring det dobbelte.</p>

<h2>ViewFinity S8 mod andre skærme på siden</h2>
<p>Dells 4K-kontorskærm P2725QE, der står på siden om <a href="/skaerm/dell-p2725h/">Dell P2725H</a>, bruger 25,5 W, på niveau med S80UH og S80D. En 27" Full HD-skærm som P2725H bruger 15,8 W, så 4K koster 5–10 W ekstra i samme størrelse. Gamingskærmen <a href="/skaerm/samsung-odyssey-g5/">Samsung Odyssey G5</a> G50F bruger 21 W som 27" med 2560 × 1440 pixel, det samme som S80H med 4K.</p>

<h2>Sådan holder du forbruget nede</h2>
<ul>
<li>Skru ned for lysstyrken; til kontorarbejde er 120–200 nit nok de fleste steder.</li>
<li>Slå HDR fra i styresystemet, når du ikke arbejder med HDR-billeder eller video.</li>
<li>Lad computeren slukke skærmen efter få minutter uden brug.</li>
<li>Sluk på stikkontakten i weekender og ferier; se mere om <a href="/standby/">standbyforbrug</a>.</li>
</ul>
<p>Se flere skærme på siden om <a href="/skaerm/">skærmes strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger Samsung ViewFinity S8?",
      answer:
        "21–26 W som 27\" og 30–33 W som 32\" i standardbilledet ifølge EU's energimærke, afhængigt af årgang og om udgaven har USB-C. Standby er 0,5 W.",
    },
    {
      question: "Hvad koster det at bruge en 27\" ViewFinity S8 om året?",
      answer:
        "Med seks timer tændt om dagen bruger 27\" S80H omkring 49 kWh om året, svarende til {{kr 49}}. S80UH med USB-C bruger omkring 60 kWh, regnet ved {{pris_kwh}}.",
    },
    {
      question: "Bruger udgaven med USB-C mere strøm?",
      answer:
        "Ja. 27\" S80UH bruger 26 W mod 21 W for S80H. Strømmen, skærmen sender videre til en bærbar, kommer oveni.",
    },
    {
      question: "Hvad bruger 5K-udgaven S80HF?",
      answer:
        "26 W i standardbilledet og 49 W i HDR ifølge EU's energimærke. Det er omkring 60 kWh om året med seks timer om dagen.",
    },
  ],
  sources: [
    { name: "EPREL — Samsung S27H804EAU (ViewFinity S8 S80H), EU's energimærke", url: eprel("2653111") },
    { name: "EPREL — Samsung S27H804UAU (ViewFinity S8 S80UH), EU's energimærke", url: eprel("2653114") },
    { name: "EPREL — Samsung S27H804EFA (ViewFinity S8 S80HF 5K), EU's energimærke", url: eprel("2666700") },
    { name: "EPREL — Samsung S32H804EAU (ViewFinity S8 S80H), EU's energimærke", url: eprel("2653112") },
    { name: "EPREL — Samsung S32H804UAU (ViewFinity S8 S80UH), EU's energimærke", url: eprel("2653116") },
    { name: "EPREL — Samsung S27D800EAU (ViewFinity S8 S80D), EU's energimærke", url: eprel("1963592") },
    { name: "EPREL — Samsung S27D800UAU (ViewFinity S8 S80UD), EU's energimærke", url: eprel("1963525") },
    { name: "EPREL — Samsung S32D800EAU (ViewFinity S8 S80D), EU's energimærke", url: eprel("1963596") },
    { name: "EPREL — Samsung S32D800UAU (ViewFinity S8 S80UD), EU's energimærke", url: eprel("1963526") },
    { name: "Samsung — ViewFinity S8 S80UH (LS27H804UAUXEN), produktside", url: "https://www.samsung.com/nl/monitors/high-resolution/viewfinity-s8-s80uh-27-inch-4k-uhd-usb-c-ls27h804uauxen/" },
  ],
  variants: [
    { name: "S80H 27\" 4K (S27H804EAU)", watts: { off: 0.3, standby: 0.5, on: 21 }, energyClass: "E", source: 0 },
    { name: "S80UH 27\" 4K USB-C (S27H804UAU)", watts: { off: 0.3, standby: 0.5, on: 26 }, energyClass: "F", source: 1 },
    { name: "S80HF 27\" 5K (S27H804EFA)", watts: { off: 0.3, standby: 0.5, on: 26 }, energyClass: "F", source: 2 },
    { name: "S80H 32\" 4K (S32H804EAU)", watts: { off: 0.3, standby: 0.5, on: 30 }, energyClass: "F", source: 3 },
    { name: "S80UH 32\" 4K USB-C (S32H804UAU)", watts: { off: 0.3, standby: 0.5, on: 32.4 }, energyClass: "F", source: 4 },
    { name: "S80D 27\" 4K 2024 (S27D800EAU)", watts: { off: 0.3, standby: 0.5, on: 25 }, energyClass: "F", source: 5 },
    { name: "S80UD 27\" 4K USB-C 2024 (S27D800UAU)", watts: { off: 0.3, standby: 0.5, on: 25 }, energyClass: "F", source: 6 },
    { name: "S80D 32\" 4K 2024 (S32D800EAU)", watts: { off: 0.3, standby: 0.5, on: 31 }, energyClass: "F", source: 7 },
    { name: "S80UD 32\" 4K USB-C 2024 (S32D800UAU)", watts: { off: 0.3, standby: 0.5, on: 33 }, energyClass: "G", source: 8 },
  ],
  publishDate: "2027-01-02",
  updated: "2026-11-24",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Tallene er Samsungs egne oplysninger til EU's energimærke: forbruget i standardbilledet (SDR) i den billedindstilling, skærmen leveres med, standby og slukket. Strøm, som USB-C-udgaverne sender videre til en bærbar, er ikke med. HDR-tallene står i teksten. Kilderne står nederst på siden.",
};

export default samsungViewfinityS8;
