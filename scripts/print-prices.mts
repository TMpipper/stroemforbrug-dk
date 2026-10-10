/** Udviklerhjælp: udskriv byggets priser. `npm run prices` */
import "./lib/env.mjs";
const { getPrices } = await import("../src/lib/prices");
const p = await getPrices();
const r2 = (n: number) => n.toFixed(2);
console.log(`måned ${p.marginal.month} · aftaler fra ${p.generatedAt}`);
for (const r of ["DK1", "DK2"] as const) {
  const m = p.marginal[r === "DK1" ? "dk1" : "dk2"];
  const d = p.deals[r];
  console.log(`${r}: marginal ${r2(m.krPerKwh)} kr./kWh (grundlag ${r2(m.baseKrPerKwh)}; spot ${m.parts.spotOre.toFixed(1)} + net ${m.parts.gridOre.toFixed(1)} + afgifter ${m.parts.chargesOre.toFixed(1)} + tillæg ${m.parts.markupOre.toFixed(1)} øre ex moms, ${m.markupOffers} aftaler)`);
  console.log(`     billigst: ${d.cheapest ? `${d.cheapest.supplierName} ${d.cheapest.productName} — ${d.cheapest.allInKr} kr./år all-in, marginal ${r2(d.cheapest.marginalKrPerKwh)}, go: ${d.cheapest.goSlug}` : "ingen"}`);
  console.log(`     typisk: ${d.typical ? `${d.typical.allInKr} kr./år (${r2(d.typical.allInKrPerKwh)} kr./kWh) over ${d.typical.offers} aftaler / ${d.typical.suppliers} selskaber` : "ingen"} · ${d.areaLabel}${d.regionRepresentative ? " (repræsentativt)" : ""}`);
  console.log(`     omfang: ${d.scope}`);
}
console.log(`dk-gennemsnit ${r2(p.marginal.dk)} kr./kWh`);
console.log(`grundlag: ${p.marginal.basis}`);
