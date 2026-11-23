import type { ApplianceData } from "@/lib/types";
import aircondition from "./aircondition";
import emhaette from "./emhaette";
import olieradiator from "./olieradiator";
import vinkoeleskab from "./vinkoeleskab";
import espressomaskine from "./espressomaskine";
import mobilAircondition from "./mobil-aircondition";
import skaerm from "./skaerm";
import varmepumpeToerretumbler from "./varmepumpe-toerretumbler";
import haandklaedetoerrer from "./haandklaedetoerrer";
import spabad from "./spabad";
import terrassevarmer from "./terrassevarmer";
import xbox from "./xbox";
import luftfugter from "./luftfugter";
import luftrenser from "./luftrenser";
import slowCooker from "./slow-cooker";
import ventilator from "./ventilator";
import elLoebehjul from "./el-loebehjul";
import elcykel from "./elcykel";
import ipad from "./ipad";
import koeleboks from "./koeleboks";
import cirkulationspumpe from "./cirkulationspumpe";
import lysstofroer from "./lysstofroer";
import pillefyr from "./pillefyr";
import ventilationsanlaeg from "./ventilationsanlaeg";
import vaskemaskineMedToerretumbler from "./vaskemaskine-med-toerretumbler";
import riskoger from "./riskoger";
import sousVide from "./sous-vide";
import slushIceMaskine from "./slush-ice-maskine";
import dehydrator from "./dehydrator";
import vaffeljern from "./vaffeljern";
import sandwichgrill from "./sandwichgrill";
import elgrill from "./elgrill";
import blender from "./blender";
import koekkenmaskine from "./koekkenmaskine";
import juicer from "./juicer";
import broedbagemaskine from "./broedbagemaskine";
import multikoger from "./multikoger";
import maelkeskummer from "./maelkeskummer";
import isterningmaskine from "./isterningmaskine";
import miniovn from "./miniovn";
import dampovn from "./dampovn";
import pyrolyseovn from "./pyrolyseovn";
import kogeplade from "./kogeplade";
import fadoelsanlaeg from "./fadoelsanlaeg";
import vandkoeler from "./vandkoeler";
import gennemstroemningsvandvarmer from "./gennemstroemningsvandvarmer";
import elpatron from "./elpatron";
import infraroedtVarmepanel from "./infraroedt-varmepanel";
import varmekabel from "./varmekabel";
import oliefyr from "./oliefyr";
import gasfyr from "./gasfyr";
import fjernvarmeunit from "./fjernvarmeunit";
import poolvarmepumpe from "./poolvarmepumpe";
import poolpumpe from "./poolpumpe";
import infraroedSauna from "./infraroed-sauna";
import vildmarksbad from "./vildmarksbad";
import husbatteri from "./husbatteri";
import nintendoSwitch from "./nintendo-switch";
import vrBriller from "./vr-briller";
import nas from "./nas";
import printer from "./printer";
import treDprinter from "./3d-printer";
import projektor from "./projektor";
import soundbar from "./soundbar";
import tvBoks from "./tv-boks";
import overvaagningskamera from "./overvaagningskamera";
import videodoerklokke from "./videodoerklokke";
import smartwatch from "./smartwatch";
import traadloesOplader from "./traadloes-oplader";
import elplaeneklipper from "./elplaeneklipper";
import haekkeklipper from "./haekkeklipper";
import loevblaeser from "./loevblaeser";
import hoejtryksrenser from "./hoejtryksrenser";
import dykpumpe from "./dykpumpe";
import kaedesav from "./kaedesav";
import kompressor from "./kompressor";
import svejser from "./svejser";
import vinkelsliber from "./vinkelsliber";
import motorvarmer from "./motorvarmer";
import campingvogn from "./campingvogn";
import elScooter from "./el-scooter";
import glattejern from "./glattejern";
import varmetaeppe from "./varmetaeppe";
import plejeseng from "./plejeseng";
import kroellejern from "./kroellejern";
import elTandboerste from "./el-tandboerste";
import trappelift from "./trappelift";
import babyalarm from "./babyalarm";
import barbermaskine from "./barbermaskine";
import solarie from "./solarie";
import flaskevarmer from "./flaskevarmer";
import sterilisator from "./sterilisator";
import massagestol from "./massagestol";
import cpap from "./cpap";
import iltkoncentrator from "./iltkoncentrator";
import terrarie from "./terrarie";
import rugemaskine from "./rugemaskine";
import loebebaand from "./loebebaand";
import gaabaand from "./gaabaand";
import drivhusvarme from "./drivhusvarme";
import hoensehus from "./hoensehus";

/**
 * Nye apparater fra 22. nov. 2026: én fil pr. apparat (src/content/apparater/<slug>.ts, `export default`),
 * så bølgerne kan skrives parallelt uden flettekonflikter. Rækkefølgen her er udgivelsesrækkefølgen.
 * Hver fil bærer `meta`, `calculatorConfig.per/perYear` og en `publishDate` (drypudgivelse, dansk dag).
 * Tjek en fil med `npx tsx scripts/check-appliance.mts <slug>` før den kommer på listen.
 */
export const APPLIANCES_NEW: ApplianceData[] = [
  aircondition,
  emhaette,
  olieradiator,
  vinkoeleskab,
  espressomaskine,
  mobilAircondition,
  skaerm,
  varmepumpeToerretumbler,
  haandklaedetoerrer,
  spabad,
  terrassevarmer,
  xbox,
  luftfugter,
  luftrenser,
  slowCooker,
  ventilator,
  elLoebehjul,
  elcykel,
  ipad,
  koeleboks,
  cirkulationspumpe,
  lysstofroer,
  pillefyr,
  ventilationsanlaeg,
  vaskemaskineMedToerretumbler,
  riskoger,
  sousVide,
  slushIceMaskine,
  dehydrator,
  vaffeljern,
  sandwichgrill,
  elgrill,
  blender,
  koekkenmaskine,
  juicer,
  broedbagemaskine,
  multikoger,
  maelkeskummer,
  isterningmaskine,
  miniovn,
  dampovn,
  pyrolyseovn,
  kogeplade,
  fadoelsanlaeg,
  vandkoeler,
  gennemstroemningsvandvarmer,
  elpatron,
  infraroedtVarmepanel,
  varmekabel,
  oliefyr,
  gasfyr,
  fjernvarmeunit,
  poolvarmepumpe,
  poolpumpe,
  infraroedSauna,
  vildmarksbad,
  husbatteri,
  nintendoSwitch,
  vrBriller,
  nas,
  printer,
  treDprinter,
  projektor,
  soundbar,
  tvBoks,
  overvaagningskamera,
  videodoerklokke,
  smartwatch,
  traadloesOplader,
  elplaeneklipper,
  haekkeklipper,
  loevblaeser,
  hoejtryksrenser,
  dykpumpe,
  kaedesav,
  kompressor,
  svejser,
  vinkelsliber,
  motorvarmer,
  campingvogn,
  elScooter,
  glattejern,
  varmetaeppe,
  plejeseng,
  kroellejern,
  elTandboerste,
  trappelift,
  babyalarm,
  barbermaskine,
  solarie,
  flaskevarmer,
  sterilisator,
  massagestol,
  cpap,
  iltkoncentrator,
  terrarie,
  rugemaskine,
  loebebaand,
  gaabaand,
  drivhusvarme,
  hoensehus,
];
