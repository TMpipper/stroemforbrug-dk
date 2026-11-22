import type { ModelData } from "@/lib/models";

const bmwIx1: ModelData = {
  slug: "bmw-ix1",
  parent: "elbil",
  brand: "BMW",
  name: "BMW iX1",
  released: "2022-10",
  synonyms: [
    "bmw ix1 forbrug",
    "bmw ix1 strømforbrug",
    "ix1 edrive20 forbrug",
    "ix1 xdrive30 kwh pr 100 km",
    "bmw ix1 rækkevidde vinter",
    "bmw ix1 forbrug pr km",
  ],
  title: "BMW iX1 strømforbrug (2026) → eDrive20 og xDrive30 i kWh",
  description:
    "BMW iX1 eDrive20 og xDrive30: BMWs officielle WLTP-forbrug fra 15,5 til 18,1 kWh pr. 100 km, kWh om året, pris pr. 100 km og en fuld opladning.",
  intro:
    "Forhjulstrukne iX1 eDrive20 bruger 15,5–17,1 kWh pr. 100 km efter WLTP, firehjulstrukne xDrive30 17,0–18,1 kWh. Spændet afhænger af fælge og udstyr.",
  content: `<h2>Hvad bruger en BMW iX1 pr. 100 km?</h2>
<p>BMW iX1 er den eldrevne udgave af BMWs mindste SUV, X1. Den findes i Danmark i to versioner med samme batteri: eDrive20 med én motor på 150 kW (204 hk) og forhjulstræk, og xDrive30 med to motorer på i alt 230 kW (313 hk) og firehjulstræk. BMWs danske side med tekniske data opgiver forbruget som et spænd for hver version: 15,5–17,1 kWh pr. 100 km for eDrive20 og 17,0–18,1 kWh for xDrive30.</p>
<p>Spændet skyldes udstyret. Den laveste værdi gælder bilen med de mindste fælge og det letteste udstyr, den højeste bilen med store fælge og mere udstyr. Det konkrete tal for en bestemt bil står på dens registreringsattest. WLTP-tallet er målt som strøm fra stikkontakten, så ladetabet er regnet med.</p>
<p>Med 15.000 km om året bruger eDrive20 mellem 2.325 og 2.565 kWh, svarende til {{kr 2325-2565}} ved månedens elpris. xDrive30 bruger 2.550–2.715 kWh, svarende til {{kr 2550-2715}}. 100 km koster {{kr 15,5-17,1}} i eDrive20 og {{kr 17-18,1}} i xDrive30, ladet hjemme.</p>

<h2>eDrive20 eller xDrive30: hvad koster firehjulstrækket?</h2>
<p>Den ekstra motor koster strøm. Sammenligner man de to versioner med samme udstyrsniveau, bruger xDrive30 omkring 1–1,5 kWh mere pr. 100 km. Over 15.000 km er det 150–225 kWh om året, svarende til {{kr 150-225}}. Til gengæld er xDrive30 langt stærkere og trækker i alle fire hjul, hvilket kan være værd at betale for på glatte vinterveje.</p>
<p>EU's registreringsdata for 2025 viser samme billede. De 2.315 iX1 med 150 kW-motoren, der blev indregistreret i Danmark det år, lå i gennemsnit på 16,0 kWh pr. 100 km. De 609 firehjulstrukne, registreret med 225 kW, lå på 17,4 kWh. De fleste danske eDrive20 ligger altså i den lave halvdel af BMWs spænd.</p>
<p>Rækkevidden følger forbruget: eDrive20 kører 430–473 km efter WLTP, xDrive30 417–439 km. Kører du mest i by og på landevej, og bor du ikke et sted med meget sne, er eDrive20 den mest økonomiske i drift.</p>

<h2>Hvad koster det at lade en BMW iX1?</h2>
<p>Batteriet er på 64,8 kWh ifølge BMW. En fuld opladning koster {{kr 64,8}} ved månedens elpris på {{pris_kwh}} og lidt mere målt fra stikket, fordi der tabes strøm undervejs. Hjemme på en <a href="/ladestander/">ladeboks</a> lader iX1 med op til 11 kW, og BMW opgiver omkring 6,5 timer fra tomt til fuldt. En nat er altså nok.</p>
<p>På lynlader tager iX1 op til 130 kW, og BMW opgiver 29 minutter fra 10 til 80 %. Det er ikke hurtigt efter nutidens standard, men tilstrækkeligt til en kaffepause på langtur. Strøm fra en offentlig lynlader koster typisk væsentligt mere pr. kWh end strøm hjemme, og prisen afhænger af operatør og abonnement. Lader du hjemme om natten, hvor elprisen oftest er lavest, holder du udgiften nede. Se <a href="/hvad-koster-det-at-lade-en-elbil/">hvad det koster at lade en elbil</a> for et overblik.</p>

<h2>BMW iX1 mod andre kompakte el-SUV'er</h2>
<p>iX1 er ikke den mest sparsomme i sin klasse. <a href="/elbil/skoda-elroq/">Škoda Elroq</a> ligger på 15,1–15,9 kWh pr. 100 km, og <a href="/elbil/toyota-bz4x/">Toyota bZ4X</a> på 13,9–14,5 kWh. Mod den forhjulstrukne bZ4X med det store batteri bruger iX1 eDrive20 1,6–3,2 kWh mere pr. 100 km, svarende til 240–480 kWh om året.</p>
<p>Mod de tyske konkurrenter er afstanden mindre. <a href="/elbil/audi-q4-e-tron/">Audi Q4 e-tron</a> som SUV ligger på 15,7–16,6 kWh, og <a href="/elbil/vw-id-4/">VW ID.4</a> på 15,9–16,8 kWh. En iX1 eDrive20 med små fælge er på niveau med dem, mens en fuldt udstyret xDrive30 er blandt de mere strømkrævende kompakte SUV'er på vores sider.</p>

<h2>Vinter, motorvej og gode vaner</h2>
<p>I frost og ved høj fart stiger forbruget typisk 15–30 % over WLTP. En eDrive20 på 16,0 kWh kommer så op på 18,4–20,8 kWh pr. 100 km, og rækkevidden falder fra omkring 450 km til 320–380 km. Kører du langt på motorvej om vinteren, så planlæg efter den lave ende.</p>
<ul>
<li>Forvarm bilen, mens den sidder i laderen, så kabinevarmen tages fra nettet.</li>
<li>Brug sæde- og rattvarme frem for høj kabinetemperatur.</li>
<li>Vælg mindre fælge, hvis du kan; fælgstørrelsen forklarer meget af forskellen mellem bunden og toppen af WLTP-spændet for hver version.</li>
<li>Hold 110–120 km/t frem for 130 km/t på langtur, og tjek dæktrykket, når det bliver koldt.</li>
</ul>
<p>Du kan sammenligne iX1 med de øvrige modeller på siden om <a href="/elbil/">elbilers strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvad er BMW iX1's forbrug pr. km?",
      answer:
        "Ifølge BMW bruger iX1 eDrive20 15,5–17,1 kWh pr. 100 km og xDrive30 17,0–18,1 kWh efter WLTP. Det er 0,155–0,181 kWh pr. km, målt fra stikkontakten.",
    },
    {
      question: "Hvad koster det at lade en BMW iX1?",
      answer:
        "Batteriet er på 64,8 kWh, så en fuld opladning koster {{kr 64,8}} ved månedens elpris på {{pris_kwh}} plus lidt ladetab. 100 km koster {{kr 15,5-17,1}} i eDrive20 ved hjemmeladning.",
    },
    {
      question: "Bruger xDrive30 meget mere strøm end eDrive20?",
      answer:
        "Omkring 1–1,5 kWh mere pr. 100 km med samme udstyr. Med 15.000 km om året er det 150–225 kWh, svarende til {{kr 150-225}}.",
    },
    {
      question: "Hvor langt kører en BMW iX1 om vinteren?",
      answer:
        "Regn med 15–30 % under WLTP-rækkevidden i frost og på motorvej. En eDrive20 med omkring 450 km efter WLTP kører typisk 320–380 km.",
    },
    {
      question: "Hvor hurtigt lader BMW iX1?",
      answer:
        "Op til 11 kW hjemme, omkring 6,5 timer fra tomt til fuldt, og op til 130 kW på lynlader, hvor 10–80 % tager 29 minutter ifølge BMW.",
    },
  ],
  sources: [
    {
      name: "BMW Danmark — BMW iX1, tekniske data (arkiveret kopi, 17. november 2025)",
      url: "https://web.archive.org/web/20251117040322/https://www.bmw.dk/da/alle-modeller/i-series/ix1/bmw-ix1-technische-daten.html",
    },
    {
      name: "EEA — CO2-emissioner fra nye personbiler 2025 (danske registreringer, WLTP Wh/km)",
      url: "https://www.eea.europa.eu/en/datahub/datahubitem-view/fa8b1229-3db6-495d-b18e-9c9b3267c02b",
    },
  ],
  variants: [
    { name: "eDrive20, laveste WLTP", watts: {}, whPerKm: 155, source: 0 },
    { name: "eDrive20, højeste WLTP", watts: {}, whPerKm: 171, source: 0 },
    { name: "xDrive30, laveste WLTP", watts: {}, whPerKm: 170, source: 0 },
    { name: "xDrive30, højeste WLTP", watts: {}, whPerKm: 181, source: 0 },
  ],
  publishDate: "2026-12-08",
  updated: "2026-11-22",
  measuredBy: "efter WLTP-normen (BMWs officielle tal, målt fra stikkontakten)",
  figuresNote:
    "WLTP er EU's fælles testcyklus for bilers forbrug; tallet er målt som strøm fra stikkontakten, så ladetabet er med. BMW opgiver et spænd for hver version, så vi viser både laveste og højeste værdi. Tallene er fra BMWs danske side med tekniske data — en arkiveret kopi fra november 2025, fordi siden ikke kunne hentes direkte — med EU's registreringsdata (EEA) som krydstjek. Kilderne står nederst på siden.",
};

export default bmwIx1;
