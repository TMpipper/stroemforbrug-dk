import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import LastUpdated from "./LastUpdated";

interface EditorBylineProps {
  variant: "hero" | "article";
  /** YYYY-MM-DD */
  lastUpdated: string;
  /** Hvid tekst — til byernes fotohero med navy overlægning. */
  dark?: boolean;
}

/** Forfatter og opdateringsdato. `hero` har billedet med; `article` er linjen alene. */
export default function EditorByline({ variant, lastUpdated, dark = false }: EditorBylineProps) {
  const href = `${SITE_CONFIG.editorSlug}/`.replace(/\/\/$/, "/");
  return (
    <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-sm ${variant === "hero" ? "mt-5" : ""}`}>
      {variant === "hero" && (
        <Image
          src={SITE_CONFIG.editorImage}
          alt=""
          width={32}
          height={32}
          className={`h-8 w-8 rounded-pill object-cover ring-2 ${dark ? "ring-white/30" : "ring-surface"}`}
        />
      )}
      <Link href={href} className={dark ? "font-medium text-white hover:text-white/80" : "font-medium text-ink hover:text-brand-600"}>
        {SITE_CONFIG.editorName}
      </Link>
      <span className={dark ? "text-white/70" : "text-ink-muted"}>{SITE_CONFIG.editorRole}</span>
      <LastUpdated date={lastUpdated} inverted={dark} />
    </div>
  );
}
