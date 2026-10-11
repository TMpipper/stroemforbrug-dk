/**
 * Apparater — vaskemaskine, køleskab, ovn, elkedel, tv, computer, lampe, robotplæneklipper, 3D-printer.
 */
import type { MotifComponent } from "../types";

export const vaskemaskine: MotifComponent = ({ p }) => (
  <g>
    <rect x="36" y="24" width="128" height="152" rx="14" fill={p.paper} />
    <rect x="36" y="24" width="128" height="30" rx="14" fill={p.ink} />
    <rect x="36" y="44" width="128" height="10" fill={p.ink} />
    <circle cx="140" cy="39" r="6" fill={p.green} />
    <rect x="52" y="34" width="36" height="10" rx="5" fill={p.steel} />
    <circle cx="100" cy="116" r="44" fill={p.ink} />
    <circle cx="100" cy="116" r="32" fill={p.mintDeep} />
    <path d="M70 124c10-10 20 6 30 0s20-10 30 0v8a30 30 0 0 1-60 0z" fill={p.blue} />
  </g>
);

export const koeleskab: MotifComponent = ({ p }) => (
  <g>
    <rect x="50" y="16" width="100" height="168" rx="14" fill={p.ink} />
    <rect x="58" y="24" width="84" height="54" rx="8" fill={p.paper} />
    <rect x="58" y="86" width="84" height="90" rx="8" fill={p.paper} />
    <rect x="126" y="38" width="8" height="26" rx="4" fill={p.green} />
    <rect x="126" y="100" width="8" height="44" rx="4" fill={p.green} />
    <rect x="68" y="112" width="32" height="8" rx="4" fill={p.mintDeep} />
    <rect x="68" y="128" width="44" height="8" rx="4" fill={p.mintDeep} />
    <rect x="68" y="144" width="24" height="8" rx="4" fill={p.mintDeep} />
    <circle cx="80" cy="50" r="9" fill={p.steel} />
  </g>
);

export const ovn: MotifComponent = ({ p }) => (
  <g>
    <rect x="30" y="40" width="140" height="130" rx="14" fill={p.steel} />
    <rect x="30" y="40" width="140" height="30" rx="14" fill={p.paper} />
    <rect x="30" y="60" width="140" height="10" fill={p.paper} />
    <circle cx="52" cy="56" r="7" fill={p.ink} />
    <circle cx="74" cy="56" r="7" fill={p.ink} />
    <circle cx="148" cy="56" r="7" fill={p.green} />
    <rect x="48" y="84" width="104" height="70" rx="10" fill={p.ink} />
    <rect x="60" y="96" width="80" height="46" rx="6" fill={p.peach} />
    <rect x="72" y="118" width="56" height="12" rx="6" fill={p.plum} />
    <rect x="60" y="76" width="80" height="6" rx="3" fill={p.ink} />
  </g>
);

export const elkedel: MotifComponent = ({ p }) => (
  <g>
    <path d="M62 62h76l-8 92H70z" fill={p.ink} />
    <path d="M64 74l-28 12 8 22 22-10z" fill={p.ink} />
    <path d="M136 82c24 2 34 26 24 48-4 8-12 12-18 8" fill="none" stroke={p.ink} strokeWidth="11" strokeLinecap="round" />
    <rect x="72" y="50" width="56" height="14" rx="7" fill={p.steel} />
    <rect x="52" y="154" width="96" height="14" rx="7" fill={p.steel} />
    <rect x="68" y="168" width="64" height="10" rx="5" fill={p.steel} />
    <rect x="78" y="100" width="12" height="40" rx="5" fill={p.mintDeep} />
    <circle cx="124" cy="140" r="5" fill={p.green} />
    <path d="M90 40c6-8 6-12 0-20M110 40c6-8 6-12 0-20" fill="none" stroke={p.steel} strokeWidth="6" strokeLinecap="round" />
  </g>
);

export const tv: MotifComponent = ({ p }) => (
  <g>
    <rect x="22" y="38" width="156" height="104" rx="12" fill={p.ink} />
    <rect x="32" y="48" width="136" height="84" rx="6" fill={p.blue} />
    <path d="M32 132c30-30 50-10 74-30 24-20 40-10 62-30v60z" fill={p.mintDeep} />
    <circle cx="140" cy="72" r="12" fill={p.peach} />
    <rect x="86" y="142" width="28" height="12" rx="4" fill={p.steel} />
    <rect x="56" y="154" width="88" height="8" rx="4" fill={p.steel} />
    <rect x="60" y="170" width="80" height="12" rx="6" fill={p.ink} />
    <circle cx="74" cy="176" r="3" fill={p.green} />
    <circle cx="86" cy="176" r="3" fill={p.paper} />
  </g>
);

export const computer: MotifComponent = ({ p }) => (
  <g>
    <rect x="22" y="44" width="124" height="84" rx="10" fill={p.ink} />
    <rect x="32" y="54" width="104" height="64" rx="5" fill={p.mint} />
    <rect x="12" y="128" width="144" height="12" rx="6" fill={p.steel} />
    <rect x="44" y="68" width="60" height="8" rx="4" fill={p.ink} />
    <rect x="44" y="84" width="80" height="6" rx="3" fill={p.steel} />
    <rect x="44" y="96" width="50" height="6" rx="3" fill={p.steel} />
    <rect x="134" y="92" width="48" height="84" rx="10" fill={p.ink} />
    <rect x="140" y="102" width="36" height="60" rx="5" fill={p.green} />
    <rect x="150" y="166" width="16" height="4" rx="2" fill={p.steel} />
  </g>
);

export const lampe: MotifComponent = ({ p }) => (
  <g>
    <circle cx="100" cy="86" r="50" fill={p.paper} />
    <path d="M78 122h44v12a22 22 0 0 1-44 0z" fill={p.paper} />
    <circle cx="100" cy="86" r="36" fill={p.mintDeep} />
    <path d="M86 108c0-22 10-30 14-40 4 10 14 18 14 40" fill="none" stroke={p.green} strokeWidth="7" strokeLinecap="round" />
    <rect x="78" y="134" width="44" height="14" rx="5" fill={p.ink} />
    <rect x="82" y="150" width="36" height="10" rx="4" fill={p.steel} />
    <rect x="86" y="162" width="28" height="10" rx="4" fill={p.ink} />
    <rect x="92" y="174" width="16" height="8" rx="4" fill={p.steel} />
    {[-50, -25, 25, 50].map((a) => (
      <rect key={a} x="97" y="18" width="6" height="14" rx="3" fill={p.peach} transform={`rotate(${a} 100 86)`} />
    ))}
  </g>
);

export const robotklipper: MotifComponent = ({ p }) => (
  <g>
    <ellipse cx="100" cy="166" rx="86" ry="14" fill={p.green} />
    {[30, 54, 150, 174].map((x) => (
      <path key={x} d={`M${x} 160c-2-8 0-14 4-18 2 6 2 12 0 18`} fill={p.green} />
    ))}
    <path d="M40 150c0-30 26-50 60-50s60 20 60 50z" fill={p.ink} />
    <rect x="40" y="140" width="120" height="14" rx="7" fill={p.ink} />
    <path d="M66 112c10-8 24-12 34-12v18H60z" fill={p.paper} />
    <rect x="112" y="118" width="30" height="8" rx="4" fill={p.green} />
    <circle cx="66" cy="152" r="10" fill={p.steel} />
    <circle cx="134" cy="152" r="10" fill={p.steel} />
  </g>
);

export const printer3d: MotifComponent = ({ p }) => (
  <g>
    <rect x="30" y="28" width="140" height="18" rx="6" fill={p.ink} />
    <rect x="30" y="28" width="14" height="150" rx="5" fill={p.ink} />
    <rect x="156" y="28" width="14" height="150" rx="5" fill={p.ink} />
    <rect x="44" y="164" width="112" height="14" rx="5" fill={p.steel} />
    <rect x="86" y="46" width="28" height="18" rx="5" fill={p.blue} />
    <path d="M94 64h12l-6 12z" fill={p.blue} />
    <rect x="70" y="150" width="60" height="14" rx="4" fill={p.green} />
    <rect x="76" y="136" width="48" height="14" rx="4" fill={p.green} />
    <rect x="82" y="122" width="36" height="14" rx="4" fill={p.green} />
    <rect x="94" y="80" width="12" height="40" rx="5" fill={p.mintDeep} />
  </g>
);
