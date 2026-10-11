/**
 * Energi — skift, regning, måler, døgn, Danmarkskort, graf, kraftværk, sol, vindmølle, gasflamme,
 * batteri, stik. Hvert motiv er et <g> i boksen 0 0 200 200: flader uden konturer, bløde hjørner,
 * én navy masse, én grøn/blå handlingsform, højst ét varmt strejf. Ingen tekst, ingen tal.
 */
import type { MotifComponent } from "../types";

/** Lynbolten — logoets geometri (brand/Logo.tsx, 64-boksen), her blot som form, aldrig i logoets grønne. */
export const BOLT = "M34.7 8.7 10.7 40.7h18.6l-2.7 21.3 24-32H32l2.7-21.3z";

export const skift: MotifComponent = ({ p }) => (
  <g>
    <rect x="14" y="30" width="72" height="56" rx="14" fill={p.steel} />
    <rect x="26" y="46" width="44" height="8" rx="4" fill={p.paper} />
    <rect x="26" y="62" width="28" height="8" rx="4" fill={p.paper} />
    <rect x="114" y="30" width="72" height="56" rx="14" fill={p.green} />
    <rect x="126" y="46" width="44" height="8" rx="4" fill={p.paper} />
    <rect x="126" y="62" width="28" height="8" rx="4" fill={p.paper} />
    <path d="M88 52h12l-7-11h12l14 17-14 17H93l7-11H88z" fill={p.ink} />
    <rect x="24" y="112" width="152" height="62" rx="31" fill={p.mintDeep} />
    <circle cx="145" cy="143" r="25" fill={p.ink} />
    <g transform="translate(131 129) scale(0.44)"><path d={BOLT} fill={p.paper} /></g>
  </g>
);

export const regning: MotifComponent = ({ p }) => (
  <g>
    <rect x="58" y="32" width="100" height="146" rx="12" fill={p.mintDeep} />
    <rect x="46" y="22" width="100" height="146" rx="12" fill={p.paper} />
    <rect x="62" y="40" width="42" height="10" rx="5" fill={p.ink} />
    <rect x="62" y="64" width="68" height="7" rx="3.5" fill={p.steel} />
    <rect x="62" y="80" width="56" height="7" rx="3.5" fill={p.steel} />
    <rect x="62" y="96" width="64" height="7" rx="3.5" fill={p.steel} />
    <rect x="62" y="112" width="48" height="7" rx="3.5" fill={p.steel} />
    <rect x="62" y="136" width="68" height="18" rx="9" fill={p.green} />
    <g transform="translate(116 36) scale(0.3)"><path d={BOLT} fill={p.blue} /></g>
  </g>
);

export const maaler: MotifComponent = ({ p }) => (
  <g>
    <rect x="36" y="40" width="128" height="120" rx="16" fill={p.ink} />
    <rect x="54" y="60" width="92" height="38" rx="8" fill={p.paper} />
    <rect x="64" y="70" width="12" height="18" rx="3" fill={p.steel} />
    <rect x="82" y="70" width="12" height="18" rx="3" fill={p.steel} />
    <rect x="100" y="70" width="12" height="18" rx="3" fill={p.steel} />
    <rect x="118" y="70" width="12" height="18" rx="3" fill={p.green} />
    <circle cx="70" cy="128" r="14" fill={p.mintDeep} />
    <circle cx="70" cy="128" r="5" fill={p.green} />
    <rect x="96" y="120" width="52" height="8" rx="4" fill={p.steel} />
    <rect x="96" y="134" width="36" height="8" rx="4" fill={p.steel} />
    <rect x="60" y="160" width="20" height="14" rx="4" fill={p.steel} />
    <rect x="120" y="160" width="20" height="14" rx="4" fill={p.steel} />
  </g>
);

export const doegn: MotifComponent = ({ p }) => {
  const heights = [58, 50, 44, 40, 46, 64, 84, 90, 82, 70, 60, 54, 48, 44, 52, 66, 86, 100, 96, 84, 72, 64, 58, 56];
  const low = new Set([3, 2, 13]);
  return (
    <g>
      <circle cx="40" cy="38" r="14" fill={p.peach} />
      <path d="M150 26a16 16 0 1 0 14 24 13 13 0 0 1-14-24z" fill={p.paper} />
      {heights.map((h, i) => (
        <rect key={i} x={26 + i * 6.3} y={162 - h} width="4.6" height={h} rx="2.3" fill={low.has(i) ? p.green : i >= 16 && i <= 19 ? p.ink : p.blue} />
      ))}
      <rect x="22" y="166" width="156" height="6" rx="3" fill={p.mintDeep} />
    </g>
  );
};

export const dkkort: MotifComponent = ({ p }) => (
  <g>
    {/* Jylland (DK1): Skagen som spids, en rolig vestkyst, Djursland og fjordene mod øst */}
    <path d="M78 14l16 16-4 16 12 14-4 18 12 14-10 18 6 18-4 18-4 24-14 8H60l-18-6-4-20 4-28-4-30 6-30 8-24 14-20z" fill={p.blue} />
    {/* Fyn (DK1) */}
    <ellipse cx="122" cy="146" rx="16" ry="13" fill={p.blue} />
    {/* Sjælland (DK2) */}
    <path d="M152 100c16-8 32-2 38 14 6 14 0 30-12 38-12 8-28 6-36-6-10-14-6-34 10-46z" fill={p.green} />
    {/* Lolland-Falster og Bornholm (DK2) */}
    <ellipse cx="158" cy="168" rx="18" ry="6" fill={p.green} />
    <circle cx="190" cy="96" r="6" fill={p.green} />
  </g>
);

export const graf: MotifComponent = ({ p }) => (
  <g>
    <rect x="28" y="28" width="6" height="140" rx="3" fill={p.ink} />
    <rect x="28" y="162" width="146" height="6" rx="3" fill={p.ink} />
    <path d="M40 130c20-6 30-40 48-44 16-4 24 30 44 24 16-4 22-40 38-56v96H40z" fill={p.mint} />
    <path d="M40 130c20-6 30-40 48-44 16-4 24 30 44 24 16-4 22-40 38-56" fill="none" stroke={p.blue} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="170" cy="54" r="11" fill={p.green} />
    <circle cx="170" cy="54" r="4.5" fill={p.paper} />
  </g>
);

export const kraftvaerk: MotifComponent = ({ p }) => (
  <g>
    <path d="M38 176V96l20-10v90zM64 176V84l20-8v100z" fill={p.steel} />
    <rect x="94" y="110" width="76" height="66" rx="10" fill={p.ink} />
    <rect x="144" y="56" width="14" height="60" rx="4" fill={p.ink} />
    <ellipse cx="151" cy="48" rx="20" ry="10" fill={p.mintDeep} />
    <ellipse cx="166" cy="34" rx="14" ry="8" fill={p.mint} />
    <rect x="106" y="124" width="16" height="16" rx="4" fill={p.paper} />
    <rect x="130" y="124" width="16" height="16" rx="4" fill={p.paper} />
    <rect x="106" y="148" width="40" height="16" rx="4" fill={p.green} />
    <rect x="24" y="176" width="152" height="6" rx="3" fill={p.mintDeep} />
  </g>
);

export const sol: MotifComponent = ({ p }) => (
  <g>
    <circle cx="146" cy="52" r="22" fill={p.peach} />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
      <rect key={a} x="143" y="14" width="6" height="12" rx="3" fill={p.peach} transform={`rotate(${a} 146 52)`} />
    ))}
    <path d="M38 150l22-52h96l22 52z" fill={p.ink} />
    <path d="M70 108l-8 20h26l6-20zM100 108l-4 20h26l2-20zM130 108l0 20h26l-6-20z" fill={p.blue} />
    <path d="M60 134l-5 12h30l4-12zM97 134l-2 12h30l0-12zM133 134l2 12h30l-4-12z" fill={p.blue} />
    <rect x="104" y="150" width="10" height="26" rx="4" fill={p.steel} />
    <rect x="70" y="174" width="76" height="8" rx="4" fill={p.steel} />
  </g>
);

export const vindmoelle: MotifComponent = ({ p }) => (
  <g>
    <ellipse cx="100" cy="182" rx="84" ry="14" fill={p.mint} />
    <path d="M94 78h12l8 100H86z" fill={p.steel} />
    {[0, 120, 240].map((a) => (
      <path key={a} d="M100 78c-6-22-8-48-2-66 10 18 12 44 6 66z" fill={p.ink} transform={`rotate(${a} 100 78)`} />
    ))}
    <circle cx="100" cy="78" r="10" fill={p.green} />
    <circle cx="100" cy="78" r="4" fill={p.paper} />
  </g>
);

export const gasflamme: MotifComponent = ({ p }) => (
  <g>
    <path d="M100 20c14 30 44 46 44 86a44 44 0 0 1-88 0c0-22 10-32 18-46 4 14 10 20 16 22-4-24 2-44 10-62z" fill={p.blue} />
    <path d="M100 82c10 16 22 26 22 44a22 22 0 0 1-44 0c0-12 6-18 10-28 2 8 6 12 10 12-2-12 0-20 2-28z" fill={p.peach} />
    <rect x="52" y="160" width="96" height="14" rx="7" fill={p.ink} />
    <rect x="70" y="174" width="60" height="8" rx="4" fill={p.steel} />
  </g>
);

export const batteri: MotifComponent = ({ p }) => (
  <g>
    <rect x="30" y="62" width="130" height="76" rx="16" fill={p.ink} />
    <rect x="160" y="84" width="14" height="32" rx="5" fill={p.ink} />
    <rect x="44" y="76" width="26" height="48" rx="7" fill={p.green} />
    <rect x="78" y="76" width="26" height="48" rx="7" fill={p.green} />
    <rect x="112" y="76" width="26" height="48" rx="7" fill={p.mintDeep} />
    <g transform="translate(84 92) scale(0.26)"><path d={BOLT} fill={p.paper} /></g>
  </g>
);

export const stik: MotifComponent = ({ p }) => (
  <g>
    <circle cx="70" cy="96" r="44" fill={p.paper} />
    <circle cx="70" cy="96" r="34" fill={p.mintDeep} />
    <rect x="52" y="86" width="10" height="20" rx="5" fill={p.ink} />
    <rect x="78" y="86" width="10" height="20" rx="5" fill={p.ink} />
    <rect x="126" y="70" width="40" height="52" rx="12" fill={p.green} />
    <rect x="118" y="86" width="12" height="7" rx="3.5" fill={p.ink} />
    <rect x="118" y="100" width="12" height="7" rx="3.5" fill={p.ink} />
    <path d="M160 96h14c12 0 14 20 2 30-16 14-30 24-30 44" fill="none" stroke={p.ink} strokeWidth="8" strokeLinecap="round" />
  </g>
);
