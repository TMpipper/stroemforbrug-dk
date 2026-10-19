// Fælles komponent fra el-feed (examples/site/components/app-promo/) — ret den dér, ikke her.
import { encodeQr, qrPath } from "./qr";

/** QR-kode som inline SVG, regnet ved build. Mørke moduler i promoens blæk på hvid flade, fire modulers stillezone. */
export default function AppQr({ value, label, className = "" }: { value: string; label: string; className?: string }) {
  const { d, viewBox } = qrPath(encodeQr(value));
  return (
    <svg viewBox={viewBox} role="img" aria-label={label} className={className} shapeRendering="crispEdges" data-qr={value}>
      <rect width="100%" height="100%" fill="#FFFFFF" />
      <path d={d} fill="var(--ap-ink, #0B2A4A)" />
    </svg>
  );
}
