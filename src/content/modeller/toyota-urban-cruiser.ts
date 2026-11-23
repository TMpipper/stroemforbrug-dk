import type { ModelData } from "@/lib/models";

const toyotaUrbanCruiser: ModelData = {
  slug: "toyota-urban-cruiser",
  parent: "elbil",
  brand: "Toyota",
  name: "Toyota Urban Cruiser",
  released: "2025-11",
  synonyms: [
    "toyota urban cruiser forbrug",
    "urban cruiser strømforbrug",
    "toyota urban cruiser elbil",
    "urban cruiser kwh pr 100 km",
    "urban cruiser 61 kwh forbrug",
    "urban cruiser awd forbrug",
    "toyota urban cruiser rækkevidde vinter",
  ],
  title: "Toyota Urban Cruiser strømforbrug (2026) → 49 og 61 kWh",
  description:
    "Toyota Urban Cruiser med 49 og 61 kWh batteri: Toyotas officielle WLTP-forbrug for forhjuls- og firehjulstræk, kWh om året og pris pr. 100 km.",
  intro:
    "Forhjulstrukne Urban Cruiser bruger 14,9–15,1 kWh pr. 100 km efter WLTP, firehjulstrukne 16,6 kWh. Det store batteri koster næsten intet ekstra forbrug, men giver 82 km mere rækkevidde.",
  content: `<h2>Hvad bruger en Toyota Urban Cruiser pr. 100 km?</h2>
<p>Urban Cruiser er Toyotas mindste el-SUV, en kompakt bil, som Toyota har udviklet sammen med Suzuki. Toyotas danske modelside opgiver forbruget som 149–166 Wh pr. km for hele modellen og rækkevidden for hver af de tre drivlinjer. Toyotas tekniske data for Europa deler forbruget op: 49 kWh-batteriet med forhjulstræk og 144 hk bruger 149 Wh/km, 61 kWh-batteriet med forhjulstræk og 174 hk 151 Wh/km, og 61 kWh med firehjulstræk og 184 hk 166 Wh/km. Det svarer til 14,9, 15,1 og 16,6 kWh pr. 100 km. WLTP-tallet er målt som strøm fra stikkontakten, så ladetabet er med.</p>
<p>Med 15.000 km om året bruger den lille Urban Cruiser omkring 2.235 kWh, svarende til {{kr 2235}} ved månedens elpris. Den forhjulstrukne med 61 kWh bruger omkring 2.265 kWh, svarende til {{kr 2265}}, og den firehjulstrukne omkring 2.490 kWh, svarende til {{kr 2490}}. 100 km koster {{kr 14,9-16,6}} ladet hjemme.</p>
<p>EU's registreringsdata for 2025 rummer kun de første 11 danske Urban Cruiser, men tallene passer: de forhjulstrukne lå på 151 Wh/km og de firehjulstrukne på 166 Wh/km.</p>

<h2>Lille eller stort batteri, forhjuls- eller firehjulstræk?</h2>
<p>Batteriet betyder næsten intet for forbruget. Det store batteri koster kun 0,2 kWh ekstra pr. 100 km, omkring 30 kWh om året, svarende til {{kr 30}}. Til gengæld stiger rækkevidden efter WLTP fra 344 til 426 km, og det store batteri lader hurtigere på lynlader. Kører du ofte længere ture, er det store batteri den mærkbare forskel.</p>
<p>Firehjulstrækket koster mere. Den ekstra elmotor på bagakslen løfter forbruget fra 15,1 til 16,6 kWh pr. 100 km, og rækkevidden falder fra 426 til 395 km. Med 15.000 km om året er det omkring 225 kWh ekstra, svarende til {{kr 225}}. Firehjulstræk giver bedre vejgreb på glat føre og en hurtigere bil (0–100 km/t på 7,4 sekunder mod 8,7), men har du ikke brug for det, er forhjulstræk den sparsomme vej.</p>
<p>Urban Cruiser deler drivlinje med Suzuki e Vitara, og de officielle tal er de samme: 149, 151 og 166 Wh/km for de tre versioner.</p>

<h2>Hvad koster det at lade en Urban Cruiser?</h2>
<p>Toyota opgiver batterierne som 49 og 61 kWh. Ifølge Toyotas tekniske data kan der bruges 60 kWh af det store batteri. En opladning fra 10 til 80 % fylder derfor omkring 42 kWh på det store batteri og koster omkring {{kr 42}} ved månedens elpris på {{pris_kwh}}, plus lidt ladetab. Toyotas tekniske data nævner en indbygget lader på 11 kW, så en nat på en <a href="/ladestander/">ladeboks</a> fylder batteriet helt op.</p>
<p>På lynlader er Urban Cruiser ikke blandt de hurtige. Toyota opgiver 10–80 % på omkring 45 minutter ved 25 °C med højst 53 kW for 49 kWh-versionen og 67 kW for 61 kWh-versionen. Ved lave temperaturer tager det længere. Offentlig lynladning koster typisk væsentligt mere pr. kWh end strøm hjemme, og prisen afhænger af operatør og abonnement. Bilen er altså bedst egnet til at blive ladet hjemme om natten, hvor elprisen oftest er lavest. Se <a href="/hvad-koster-det-at-lade-en-elbil/">hvad det koster at lade en elbil</a>.</p>

<h2>Urban Cruiser mod andre små elbiler</h2>
<p>Den forhjulstrukne Urban Cruiser ligger på niveau med de sparsomme små SUV'er. <a href="/elbil/kia-ev3/">Kia EV3</a> bruger 14,9–15,8 kWh pr. 100 km og <a href="/elbil/skoda-elroq/">Škoda Elroq</a> 15,1–15,9 kWh. Den mindre <a href="/elbil/renault-5/">Renault 5</a> bruger 14,5–14,9 kWh, så den sparer kun lidt, selv om den er en klasse mindre.</p>
<p>Mod <a href="/elbil/citroen-e-c3/">Citroën ë-C3</a> på 16,8–17,3 kWh sparer en forhjulstrukket Urban Cruiser 61 kWh 1,7–2,2 kWh pr. 100 km, omkring 255–330 kWh om året, svarende til {{kr 255-330}}. Toyotas egen og større <a href="/elbil/toyota-bz4x/">bZ4X</a> er faktisk mere sparsom med 13,9–14,5 kWh, og forskellen til den forhjulstrukne Urban Cruiser 61 kWh er 0,6–1,2 kWh pr. 100 km, omkring 90–180 kWh om året.</p>

<h2>Vinter, motorvej og gode vaner</h2>
<p>I frost og ved høj fart stiger forbruget typisk 15–30 % over WLTP. For den forhjulstrukne med 61 kWh betyder det 17,4–19,6 kWh pr. 100 km og en rækkevidde på omkring 330–370 km. Den lille med 49 kWh kommer ned på 265–300 km og den firehjulstrukne på 305–345 km. Toyota skriver selv, at især høj hastighed og lave temperaturer reducerer rækkevidden, og at klimaanlægget ikke er med i forbrugstallene.</p>
<ul>
<li>Forvarm kabinen og batteriet, mens bilen sidder i laderen, så varmen kommer fra nettet og ikke fra batteriet.</li>
<li>Brug sæde- og rattvarme frem for høj kabinetemperatur på korte ture.</li>
<li>Hold 110–120 km/t på langtur: på motorvejen er luftmodstanden den store post for en høj, kort SUV.</li>
<li>Tjek dæktrykket, når det bliver koldt — lavt tryk koster både rækkevidde og vejgreb.</li>
</ul>
<p>Se flere modeller på siden om <a href="/elbil/">elbilers strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvad er Toyota Urban Cruisers forbrug pr. km?",
      answer:
        "Ifølge Toyota bruger Urban Cruiser 149–166 Wh pr. km efter WLTP: 149 Wh/km med 49 kWh-batteriet, 151 Wh/km med 61 kWh og forhjulstræk og 166 Wh/km med firehjulstræk.",
    },
    {
      question: "Bruger Urban Cruiser med 61 kWh mere strøm end 49 kWh?",
      answer:
        "Kun en anelse: 15,1 mod 14,9 kWh pr. 100 km. Til gengæld kører det store batteri 426 km mod 344 km efter WLTP.",
    },
    {
      question: "Hvad koster det at køre 100 km i en Urban Cruiser?",
      answer: "100 km koster {{kr 14,9}} til {{kr 16,6}} ladet hjemme ved månedens elpris på {{pris_kwh}}, afhængigt af batteri og træk.",
    },
    {
      question: "Hvor langt kører en Urban Cruiser om vinteren?",
      answer:
        "Regn med 15–30 % under WLTP i frost og på motorvej. Den forhjulstrukne med 61 kWh kører typisk 330–370 km, den lille med 49 kWh 265–300 km.",
    },
    {
      question: "Hvor hurtigt lader en Toyota Urban Cruiser?",
      answer:
        "Toyota opgiver 10–80 % på omkring 45 minutter på lynlader ved 25 °C, med højst 53 kW for 49 kWh og 67 kW for 61 kWh. Hjemme lader den med op til 11 kW.",
    },
  ],
  sources: [
    {
      name: "Toyota Danmark — Urban Cruiser, modelside med elforbrug, rækkevidde pr. drivlinje og ladetider",
      url: "https://www.toyota.dk/nye-biler/urban-cruiser",
    },
    {
      name: "Toyota Central Europe — Urban Cruiser, tekniske data (forbrug pr. drivlinje, batteri)",
      url: "https://www.toyotanews.eu/images/PDF/Technicke_udaje_Urban_Cruiser_final_pdf.pdf",
    },
    {
      name: "Toyota Finland — Urban Cruiser, prisliste april 2026 (nettokapacitet, forbrug, 11 kW lader)",
      url: "https://www.toyota.fi/content/dam/toyota/nmsc/finland/hinnastot/Toyota-Urban-Cruiser-hinnasto-08042026-v2.pdf",
    },
    {
      name: "EEA — CO2-emissioner fra nye personbiler 2025 (danske registreringer, WLTP Wh/km)",
      url: "https://www.eea.europa.eu/en/datahub/datahubitem-view/fa8b1229-3db6-495d-b18e-9c9b3267c02b",
    },
  ],
  variants: [
    { name: "49 kWh, forhjulstræk (144 hk)", watts: {}, whPerKm: 149, source: 1 },
    { name: "61 kWh, forhjulstræk (174 hk)", watts: {}, whPerKm: 151, source: 1 },
    { name: "61 kWh, firehjulstræk (184 hk)", watts: {}, whPerKm: 166, source: 1 },
  ],
  publishDate: "2026-12-17",
  updated: "2026-11-23",
  measuredBy: "efter WLTP-normen (Toyotas officielle tal, målt fra stikkontakten)",
  figuresNote:
    "WLTP er EU's fælles testcyklus for bilers forbrug; tallet er målt som strøm fra stikkontakten, så ladetabet er med. Toyotas danske side opgiver 149–166 Wh/km for modellen; tallet pr. drivlinje er fra Toyotas tekniske data for Europa, med EU's registreringsdata (EEA) som krydstjek. Kilderne står nederst på siden.",
};

export default toyotaUrbanCruiser;
