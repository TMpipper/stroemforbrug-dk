export const SITE_CONFIG = {
  name: "Strømforbrug.dk",
  url: "https://stroemforbrug.dk",
  locale: "da_DK",
  description:
    "Alt om strømforbrug i Danmark. Se hvor meget strøm dine apparater bruger, beregn din årlige udgift og få tips til at spare på strømmen.",
  lastUpdated: "2026-09-15",
  editorName: "Mathias Clausen",
  editorRole: "Redaktør & Energirådgiver",
  editorCredential:
    "Specialist i dansk husholdningens energiforbrug. Analyserer strømforbrug og hjælper familier med at spare på strømmen.",
  editorImage: "/images/mathias-clausen.jpg",
  company: {
    legalName: "Elpriser.dk ApS",
    cvr: "43489984",
    address: "Hestehave 15, 6400 Sønderborg, Danmark",
    phone: "+45 22 41 05 57",
    email: "hej@stroemforbrug.dk",
    linkedin: "https://www.linkedin.com/company/mondomedia/",
    website: "https://mondomedia.dk/",
  },
};

// Single source of truth for electricity price used in all calculations.
// Computed from market data in pricing.ts — never type a price here.
export {
  EL_PRICE_KR_PER_KWH as ELECTRICITY_PRICE_KR_PER_KWH,
  TYPICAL_ALL_IN_KR_PER_KWH,
  PRICE_LABEL,
  PRICE_DEFINITION,
  MARKET,
} from "./pricing";

export const CHEAP_PROVIDER_NAME = "Altid Energi";
