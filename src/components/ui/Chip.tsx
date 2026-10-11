"use client";

/** Pilleformet til/fra-knap til filtre. Tilstanden står i aria-pressed, så den kan læses op. */
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ChipProps {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md";
}

export default function Chip({ children, active = false, onClick, className, size = "md" }: ChipProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-pill border font-medium transition-colors duration-150",
        size === "sm" ? "min-h-9 px-3 text-sm" : "min-h-10 px-3.5 text-sm",
        active
          ? "border-brand bg-brand text-white"
          : "border-border bg-surface text-ink-body hover:border-brand-500 hover:text-brand",
        className,
      )}
    >
      {children}
    </button>
  );
}
