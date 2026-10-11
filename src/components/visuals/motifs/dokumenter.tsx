/**
 * Penge og dokumenter — mønter, kalender, kontrakt, skjold, megafon, lommeregner, stjerne.
 */
import type { MotifComponent } from "../types";
import { BOLT } from "./energi";

export const moenter: MotifComponent = ({ p }) => (
  <g>
    {[0, 1, 2, 3].map((i) => (
      <g key={i}>
        <rect x="32" y={122 - i * 20} width="84" height="18" fill={p.peach} />
        <ellipse cx="74" cy={140 - i * 20} rx="42" ry="9" fill={p.plum} opacity="0.35" />
        <ellipse cx="74" cy={122 - i * 20} rx="42" ry="9" fill={p.peach} />
      </g>
    ))}
    <ellipse cx="74" cy="62" rx="42" ry="9" fill={p.paper} />
    <ellipse cx="74" cy="62" rx="26" ry="5" fill={p.peach} />
    <circle cx="146" cy="110" r="36" fill={p.green} />
    <circle cx="146" cy="110" r="27" fill={p.paper} />
    <circle cx="146" cy="110" r="22" fill={p.green} />
    <g transform="translate(130 92) scale(0.5)"><path d={BOLT} fill={p.paper} /></g>
    <rect x="24" y="160" width="156" height="8" rx="4" fill={p.mint} />
  </g>
);

export const kalender: MotifComponent = ({ p }) => (
  <g>
    <rect x="34" y="40" width="132" height="130" rx="14" fill={p.paper} />
    <rect x="34" y="40" width="132" height="36" rx="14" fill={p.ink} />
    <rect x="34" y="62" width="132" height="14" fill={p.ink} />
    <rect x="62" y="26" width="10" height="28" rx="5" fill={p.steel} />
    <rect x="128" y="26" width="10" height="28" rx="5" fill={p.steel} />
    {[0, 1, 2].map((r) =>
      [0, 1, 2, 3].map((c) => (
        <rect key={`${r}${c}`} x={50 + c * 28} y={90 + r * 24} width="18" height="14" rx="4" fill={r === 1 && c === 2 ? p.green : p.mintDeep} />
      )),
    )}
    <path d="M112 120l5 5 9-10" fill="none" stroke={p.paper} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
  </g>
);

export const kontrakt: MotifComponent = ({ p }) => (
  <g>
    <rect x="48" y="22" width="104" height="156" rx="12" fill={p.paper} />
    <rect x="64" y="42" width="48" height="10" rx="5" fill={p.ink} />
    <rect x="64" y="64" width="72" height="7" rx="3.5" fill={p.steel} />
    <rect x="64" y="80" width="60" height="7" rx="3.5" fill={p.steel} />
    <rect x="64" y="96" width="68" height="7" rx="3.5" fill={p.steel} />
    <path d="M62 150c10-18 18-20 20-8 2 10 8 10 14-2 4-8 10-8 12 2 2 8 10 8 22-4" fill="none" stroke={p.plum} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="130" cy="128" r="16" fill={p.green} />
    <path d="M122 128l6 6 11-12" fill="none" stroke={p.paper} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </g>
);

export const skjold: MotifComponent = ({ p }) => (
  <g>
    <path d="M100 22l62 22v52c0 40-26 68-62 84-36-16-62-44-62-84V44z" fill={p.ink} />
    <path d="M100 42l44 16v40c0 30-18 50-44 62-26-12-44-32-44-62V58z" fill={p.mintDeep} />
    <rect x="93" y="70" width="14" height="46" rx="7" fill={p.ink} />
    <circle cx="100" cy="132" r="8" fill={p.green} />
  </g>
);

export const megafon: MotifComponent = ({ p }) => (
  <g>
    <path d="M40 84h26l64-40v112l-64-40H40z" fill={p.ink} />
    <rect x="26" y="84" width="22" height="32" rx="8" fill={p.ink} />
    <rect x="46" y="116" width="22" height="40" rx="8" fill={p.steel} />
    <path d="M150 74c14 8 14 44 0 52M164 58c22 16 22 68 0 84" fill="none" stroke={p.green} strokeWidth="8" strokeLinecap="round" />
    <path d="M66 84l64-40v112l-64-40z" fill={p.blue} />
  </g>
);

export const lommeregner: MotifComponent = ({ p }) => (
  <g>
    <rect x="46" y="20" width="108" height="160" rx="14" fill={p.ink} />
    <rect x="60" y="34" width="80" height="34" rx="8" fill={p.mint} />
    <rect x="98" y="46" width="32" height="10" rx="5" fill={p.ink} />
    {[0, 1, 2].map((r) =>
      [0, 1, 2].map((c) => (
        <rect key={`${r}${c}`} x={60 + c * 28} y={80 + r * 26} width="22" height="18" rx="6" fill={p.steel} />
      )),
    )}
    <rect x="60" y="158" width="50" height="14" rx="6" fill={p.steel} />
    <rect x="116" y="132" width="24" height="40" rx="6" fill={p.green} />
  </g>
);

export const stjerner: MotifComponent = ({ p }) => (
  <g>
    <path d="M40 40h120a12 12 0 0 1 12 12v84a12 12 0 0 1-12 12H88l-26 24v-24H40a12 12 0 0 1-12-12V52a12 12 0 0 1 12-12z" fill={p.paper} />
    <rect x="46" y="58" width="56" height="9" rx="4.5" fill={p.ink} />
    <rect x="46" y="78" width="80" height="7" rx="3.5" fill={p.steel} />
    <rect x="46" y="94" width="66" height="7" rx="3.5" fill={p.steel} />
    <rect x="46" y="110" width="74" height="7" rx="3.5" fill={p.steel} />
    <path d="M148 86l8 16 18 3-13 12 3 18-16-9-16 9 3-18-13-12 18-3z" fill={p.green} />
  </g>
);
