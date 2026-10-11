"use client";

/**
 * Selskabets logo — partnerens egen fil eller feedets spejlede PNG — i en hvid boks med
 * tynd kant. Mangler logoet, eller fejler det, står initialerne i stedet, så en række
 * aldrig får et tomt hul. `muted` toner logoet gråt: bruges på selskaber, vi fraråder, så
 * rækken ikke ligner en anbefaling.
 *
 * `unoptimized`: feedets logoer ligger på et andet domæne, og next.config.ts kender kun
 * de få hosts, sitet selv bruger. Logoerne er små PNG'er, som CDN'en allerede har.
 */
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

interface Props {
  name: string;
  logoUrl?: string | null;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  /** Kvadratisk boks (standard) eller bred boks til logovægge. */
  shape?: "square" | "wide";
  muted?: boolean;
}

const SIZE = { xs: 28, sm: 36, md: 44, lg: 56, xl: 72 } as const;

export function initialsOf(name: string): string {
  const words = name.replace(/[^\p{L}\p{N} ]/gu, " ").trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "?";
  if (words.length === 1) return words[0]!.slice(0, 2).toUpperCase();
  return (words[0]![0]! + words[1]![0]!).toUpperCase();
}

export default function CompanyLogo({ name, logoUrl, size = "md", className, shape = "square", muted }: Props) {
  const [failed, setFailed] = useState(false);
  const px = SIZE[size];
  const w = shape === "wide" ? Math.round(px * 2.4) : px;
  const box = cn(
    "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-surface ring-1 ring-border",
    muted && "grayscale",
    className,
  );
  if (!logoUrl || failed) {
    return (
      <span
        className={cn(box, "bg-brand-50 font-heading font-semibold text-brand-700")}
        style={{ width: w, height: px, fontSize: Math.round(px * 0.34) }}
        aria-label={name}
        role="img"
      >
        {initialsOf(name)}
      </span>
    );
  }
  return (
    <span className={box} style={{ width: w, height: px }}>
      <Image
        src={logoUrl}
        alt={`${name} logo`}
        fill
        sizes={`${Math.max(w, 128)}px`}
        unoptimized
        className="object-contain p-1.5"
        onError={() => setFailed(true)}
      />
    </span>
  );
}
