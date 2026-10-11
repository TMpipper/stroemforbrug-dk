/**
 * Bolig og varme — hus, by, nat, varmepumpe, radiator, sauna, elbil, app. Samme regler som energi.tsx.
 */
import type { MotifComponent } from "../types";
import { BOLT } from "./energi";

export const hus: MotifComponent = ({ p }) => (
  <g>
    <path d="M100 28l74 62H26z" fill={p.ink} />
    <rect x="44" y="86" width="112" height="86" rx="6" fill={p.paper} />
    <rect x="44" y="86" width="112" height="10" fill={p.mintDeep} />
    <rect x="60" y="106" width="26" height="24" rx="5" fill={p.mintDeep} />
    <rect x="114" y="106" width="26" height="24" rx="5" fill={p.mintDeep} />
    <rect x="86" y="128" width="28" height="44" rx="6" fill={p.green} />
    <g transform="translate(88 44) scale(0.36)"><path d={BOLT} fill={p.paper} /></g>
    <rect x="22" y="172" width="156" height="8" rx="4" fill={p.mint} />
  </g>
);

export const by: MotifComponent = ({ p }) => (
  <g>
    <rect x="24" y="96" width="30" height="80" rx="4" fill={p.blue} />
    <rect x="60" y="56" width="36" height="120" rx="4" fill={p.ink} />
    <rect x="102" y="80" width="28" height="96" rx="4" fill={p.blue} />
    <rect x="136" y="40" width="40" height="136" rx="4" fill={p.ink} />
    {[0, 1, 2].map((i) => (
      <rect key={`a${i}`} x="68" y={70 + i * 24} width="20" height="10" rx="3" fill={p.paper} />
    ))}
    {[0, 1, 2, 3].map((i) => (
      <rect key={`b${i}`} x="146" y={54 + i * 24} width="20" height="10" rx="3" fill={p.paper} />
    ))}
    <rect x="30" y="110" width="18" height="8" rx="3" fill={p.paper} />
    <rect x="108" y="94" width="16" height="8" rx="3" fill={p.paper} />
    <rect x="88" y="150" width="10" height="26" rx="3" fill={p.green} />
    <rect x="16" y="176" width="168" height="8" rx="4" fill={p.mint} />
  </g>
);

export const nat: MotifComponent = ({ p }) => (
  <g>
    <path d="M136 28a34 34 0 1 0 32 46 28 28 0 0 1-32-46z" fill={p.paper} />
    <circle cx="48" cy="46" r="4" fill={p.paper} />
    <circle cx="74" cy="30" r="3" fill={p.paper} />
    <circle cx="30" cy="80" r="3" fill={p.paper} />
    <path d="M86 92l46 40H40z" fill={p.ink} />
    <rect x="52" y="130" width="68" height="46" rx="5" fill={p.ink} />
    <rect x="78" y="146" width="16" height="30" rx="4" fill={p.green} />
    <rect x="60" y="140" width="12" height="12" rx="3" fill={p.peach} />
    <rect x="20" y="176" width="160" height="8" rx="4" fill={p.mintDeep} />
  </g>
);

export const varmepumpe: MotifComponent = ({ p }) => (
  <g>
    <rect x="30" y="62" width="140" height="96" rx="14" fill={p.steel} />
    <circle cx="82" cy="110" r="36" fill={p.ink} />
    {[0, 90, 180, 270].map((a) => (
      <ellipse key={a} cx="82" cy="88" rx="9" ry="16" fill={p.paper} transform={`rotate(${a} 82 110)`} />
    ))}
    <circle cx="82" cy="110" r="7" fill={p.green} />
    <rect x="132" y="82" width="24" height="8" rx="4" fill={p.paper} />
    <rect x="132" y="98" width="24" height="8" rx="4" fill={p.paper} />
    <rect x="132" y="114" width="24" height="8" rx="4" fill={p.paper} />
    <rect x="132" y="130" width="24" height="8" rx="4" fill={p.green} />
    <rect x="46" y="158" width="16" height="14" rx="4" fill={p.ink} />
    <rect x="138" y="158" width="16" height="14" rx="4" fill={p.ink} />
    <path d="M60 46c6-8 6-12 0-20M82 46c6-8 6-12 0-20M104 46c6-8 6-12 0-20" fill="none" stroke={p.peach} strokeWidth="6" strokeLinecap="round" />
  </g>
);

export const radiator: MotifComponent = ({ p }) => (
  <g>
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <rect key={i} x={34 + i * 22} y="60" width="16" height="104" rx="8" fill={p.ink} />
    ))}
    <rect x="28" y="70" width="144" height="10" rx="5" fill={p.paper} />
    <rect x="28" y="146" width="144" height="10" rx="5" fill={p.paper} />
    <circle cx="172" cy="56" r="9" fill={p.green} />
    <path d="M56 40c6-8 6-12 0-20M96 40c6-8 6-12 0-20M136 40c6-8 6-12 0-20" fill="none" stroke={p.peach} strokeWidth="6" strokeLinecap="round" />
    <rect x="44" y="164" width="12" height="14" rx="4" fill={p.steel} />
    <rect x="144" y="164" width="12" height="14" rx="4" fill={p.steel} />
  </g>
);

export const sauna: MotifComponent = ({ p }) => (
  <g>
    <rect x="24" y="40" width="152" height="18" rx="6" fill={p.peach} />
    <rect x="24" y="66" width="152" height="18" rx="6" fill={p.peach} />
    <rect x="24" y="92" width="152" height="18" rx="6" fill={p.peach} />
    <rect x="30" y="118" width="80" height="14" rx="6" fill={p.plum} />
    <rect x="40" y="132" width="10" height="36" rx="4" fill={p.plum} />
    <rect x="90" y="132" width="10" height="36" rx="4" fill={p.plum} />
    <rect x="124" y="118" width="48" height="50" rx="10" fill={p.ink} />
    <circle cx="138" cy="130" r="6" fill={p.steel} />
    <circle cx="156" cy="128" r="7" fill={p.steel} />
    <circle cx="146" cy="142" r="6" fill={p.steel} />
    <rect x="130" y="154" width="36" height="6" rx="3" fill={p.green} />
    <path d="M136 112c5-8 5-12 0-20M158 112c5-8 5-12 0-20" fill="none" stroke={p.paper} strokeWidth="5" strokeLinecap="round" />
  </g>
);

export const elbil: MotifComponent = ({ p }) => (
  <g>
    <path d="M30 128c0-12 6-18 16-20l16-28c4-6 10-10 18-10h40c8 0 14 4 18 10l16 28c10 2 16 8 16 20v18H30z" fill={p.ink} />
    <path d="M66 100l12-20h40l12 20z" fill={p.paper} />
    <rect x="30" y="146" width="140" height="10" rx="5" fill={p.ink} />
    <circle cx="62" cy="152" r="16" fill={p.ink} />
    <circle cx="62" cy="152" r="8" fill={p.steel} />
    <circle cx="138" cy="152" r="16" fill={p.ink} />
    <circle cx="138" cy="152" r="8" fill={p.steel} />
    <rect x="150" y="56" width="24" height="54" rx="6" fill={p.green} />
    <rect x="156" y="64" width="12" height="14" rx="3" fill={p.paper} />
    <path d="M150 100c-12 0-16 10-16 18v8" fill="none" stroke={p.green} strokeWidth="6" strokeLinecap="round" />
    <g transform="translate(86 104) scale(0.3)"><path d={BOLT} fill={p.green} /></g>
  </g>
);

export const app: MotifComponent = ({ p }) => (
  <g>
    <rect x="58" y="18" width="84" height="164" rx="18" fill={p.ink} />
    <rect x="66" y="34" width="68" height="132" rx="10" fill={p.mint} />
    <rect x="86" y="24" width="28" height="5" rx="2.5" fill={p.steel} />
    <rect x="74" y="46" width="34" height="8" rx="4" fill={p.ink} />
    <rect x="74" y="60" width="52" height="6" rx="3" fill={p.steel} />
    {[34, 22, 44, 56, 30, 24].map((h, i) => (
      <rect key={i} x={74 + i * 9} y={140 - h} width="6" height={h} rx="3" fill={i === 1 || i === 5 ? p.green : p.blue} />
    ))}
    <rect x="74" y="148" width="52" height="10" rx="5" fill={p.green} />
  </g>
);
