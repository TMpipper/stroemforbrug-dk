import type { ModelData } from "@/lib/models";
import macbookAirM4 from "./macbook-air-m4";
import macbookAirM5 from "./macbook-air-m5";
import macbookProM5 from "./macbook-pro-m5";
import macbookAirM3 from "./macbook-air-m3";
import macbookProM4 from "./macbook-pro-m4";
import macMiniM4 from "./mac-mini-m4";
import imacM4 from "./imac-m4";
import macbookProM6 from "./macbook-pro-m6";
import macbookProProledXdr from "./macbook-pro-proled-xdr";
import macMiniM6 from "./mac-mini-m6";
import imacM6 from "./imac-m6";
import macStudio from "./mac-studio";
import lgOledC6 from "./lg-oled-c6";
import lgOledC5 from "./lg-oled-c5";
import samsungTheFrame from "./samsung-the-frame";
import ps5Slim from "./ps5-slim";
import ps5Pro from "./ps5-pro";
import macbookNeo from "./macbook-neo";
import boschSerie6 from "./bosch-serie-6";
import mieleW1 from "./miele-w1";
import siemensIq500 from "./siemens-iq500";
import teslaModelY from "./tesla-model-y";
import skodaElroq from "./skoda-elroq";
import toyotaBz4x from "./toyota-bz4x";
import skodaEnyaq from "./skoda-enyaq";
import vwId4 from "./vw-id-4";
import teslaModel3 from "./tesla-model-3";
import audiQ4Etron from "./audi-q4-e-tron";
import samsungS90h from "./samsung-s90h";
import boschSerie6Opvaskemaskine from "./bosch-serie-6-opvaskemaskine";
import vwId3 from "./vw-id-3";
import lgOledG6 from "./lg-oled-g6";
import aeg7000Toerretumbler from "./aeg-7000-toerretumbler";
import vwIdBuzz from "./vw-id-buzz";
import samsungS95h from "./samsung-s95h";
import mieleT1 from "./miele-t1";
import xpengG6 from "./xpeng-g6";
import samsungS85f from "./samsung-s85f";
import boschSerie8VaskeToerre from "./bosch-serie-8-vaske-toerre";
import renault5 from "./renault-5";
import tclC8l from "./tcl-c8l";
import boschSerie8Toerretumbler from "./bosch-serie-8-toerretumbler";
import gramKs771254 from "./gram-ks-771254";
import boschKge36 from "./bosch-kge36";
import samsungRs70f from "./samsung-rs70f";
import boschGsn58 from "./bosch-gsn58";
import gramFb3297 from "./gram-fb-3297";
import aeg7000Vaskemaskine from "./aeg-7000-vaskemaskine";
import siemensIq700VaskeToerre from "./siemens-iq700-vaske-toerre";
import boschSerie6Toerretumbler from "./bosch-serie-6-toerretumbler";
import samsungDv90dg from "./samsung-dv90dg";
import ipadA16 from "./ipad-a16";
import ipadAirM4 from "./ipad-air-m4";
import ipadProM5 from "./ipad-pro-m5";
import ipadMini from "./ipad-mini";
import samsungQn90f from "./samsung-qn90f";
import citroenEC3 from "./citroen-e-c3";
import tclC6k from "./tcl-c6k";
import aocQ27g4 from "./aoc-q27g4";
import bmwIx1 from "./bmw-ix1";
import sonyBravia7Ii from "./sony-bravia-7-ii";
import samsungOdysseyOledG6 from "./samsung-odyssey-oled-g6";
import vwId7 from "./vw-id-7";
import lgOledB6 from "./lg-oled-b6";
import asusXg27aqdmg from "./asus-xg27aqdmg";
import volvoEx40 from "./volvo-ex40";
import lenovoIdeapadSlim3 from "./lenovo-ideapad-slim-3";
import kiaEv3 from "./kia-ev3";
import mercedesCla from "./mercedes-cla";
import siemensIq300Opvaskemaskine from "./siemens-iq300-opvaskemaskine";
import aeg9000Toerretumbler from "./aeg-9000-toerretumbler";
import boschKsv36 from "./bosch-ksv36";
import boschSerie4Opvaskemaskine from "./bosch-serie-4-opvaskemaskine";
import aeg8000Toerretumbler from "./aeg-8000-toerretumbler";
import aeg8000Vaskemaskine from "./aeg-8000-vaskemaskine";
import boschSerie8Opvaskemaskine from "./bosch-serie-8-opvaskemaskine";
import siemensIq500Toerretumbler from "./siemens-iq500-toerretumbler";
import gorenjeFn619 from "./gorenje-fn619";
import mieleG5000 from "./miele-g-5000";
import mieleTq1000 from "./miele-tq-1000";
import boschKir81 from "./bosch-kir81";
import boschSerie2Opvaskemaskine from "./bosch-serie-2-opvaskemaskine";
import lgDualInverterToerretumbler from "./lg-dual-inverter-toerretumbler";

/**
 * Modelsiderne (ejeren 22. nov. 2026): én fil pr. modelfamilie (`export default`), side på /<parent>/<slug>/.
 * Kun officielle tal i filerne; årsforbrug og pris regnes i src/lib/models.ts. Tjek: npx tsx scripts/check-model.mts <slug>.
 */
export const MODELS_ALL: ModelData[] = [
  macbookAirM4,
  macbookAirM5,
  macbookProM5,
  macbookAirM3,
  macbookProM4,
  macMiniM4,
  imacM4,
  macbookProM6,
  macbookProProledXdr,
  macMiniM6,
  imacM6,
  macStudio,
  lgOledC6,
  lgOledC5,
  samsungTheFrame,
  ps5Slim,
  ps5Pro,
  macbookNeo,
  boschSerie6,
  mieleW1,
  siemensIq500,
  teslaModelY,
  skodaElroq,
  toyotaBz4x,
  skodaEnyaq,
  vwId4,
  teslaModel3,
  audiQ4Etron,
  samsungS90h,
  boschSerie6Opvaskemaskine,
  vwId3,
  lgOledG6,
  aeg7000Toerretumbler,
  vwIdBuzz,
  samsungS95h,
  mieleT1,
  xpengG6,
  samsungS85f,
  boschSerie8VaskeToerre,
  renault5,
  tclC8l,
  boschSerie8Toerretumbler,
  gramKs771254,
  boschKge36,
  samsungRs70f,
  boschGsn58,
  gramFb3297,
  aeg7000Vaskemaskine,
  siemensIq700VaskeToerre,
  boschSerie6Toerretumbler,
  samsungDv90dg,
  ipadA16,
  ipadAirM4,
  ipadProM5,
  ipadMini,
  samsungQn90f,
  citroenEC3,
  tclC6k,
  aocQ27g4,
  bmwIx1,
  sonyBravia7Ii,
  samsungOdysseyOledG6,
  vwId7,
  lgOledB6,
  asusXg27aqdmg,
  volvoEx40,
  lenovoIdeapadSlim3,
  kiaEv3,
  mercedesCla,
  siemensIq300Opvaskemaskine,
  aeg9000Toerretumbler,
  boschKsv36,
  boschSerie4Opvaskemaskine,
  aeg8000Toerretumbler,
  aeg8000Vaskemaskine,
  boschSerie8Opvaskemaskine,
  siemensIq500Toerretumbler,
  gorenjeFn619,
  mieleG5000,
  mieleTq1000,
  boschKir81,
  boschSerie2Opvaskemaskine,
  lgDualInverterToerretumbler,
];
