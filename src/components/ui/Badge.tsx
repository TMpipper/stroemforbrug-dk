// ============================================
// Badge — pill-formet label
// Spec: docs/elselskaber-design-plan.md §4 + §3.1
//
// Brug:
//   default → ink-100 baggrund, ink-700 tekst (neutrale tags, fx "Variabel")
//   brand   → brand-100 baggrund, brand-700 tekst (positive markører, fx "Grøn")
//   amber   → amber baggrund, ink-900 tekst ("Billigst i dag", "Opdateret i dag")
//   coral   → coral baggrund, hvid tekst (advarsler, "Frarådes")
//
// Reglen fra planen: amber er den ENESTE accent vi bruger til at trække
// øjet. Brug den sparsomt — typisk kun "Billigst" og "Opdateret".
// ============================================

import type { ComponentType, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type BadgeVariant = "default" | "brand" | "amber" | "coral" | "success" | "warning" | "danger" | "accent";
export type BadgeSize = "sm" | "md";

type LucideIcon = ComponentType<{ size?: number | string; className?: string; "aria-hidden"?: boolean }>;

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  /** Lucide-react ikon vist til venstre for tekst. */
  icon?: LucideIcon;
  className?: string;
  /** Blød variant: tonet baggrund + mørk tekst (kun for success/warning/danger/brand). */
  soft?: boolean;
}

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  default: "bg-border text-ink-body",
  brand: "bg-brand-100 text-brand-700",
  amber: "bg-amber text-ink",
  coral: "bg-coral text-white",
  success: "bg-success text-white",
  warning: "bg-warning text-white",
  danger: "bg-danger text-white",
  accent: "bg-accent text-on-accent",
};

const SOFT_CLASSES: Partial<Record<BadgeVariant, string>> = {
  success: "bg-success-soft text-success-ink",
  warning: "bg-warning-soft text-warning-ink",
  danger: "bg-danger-soft text-danger-ink",
  brand: "bg-brand-50 text-brand-700",
  accent: "bg-accent-soft text-success-ink",
};

const SIZE_CLASSES: Record<BadgeSize, string> = {
  sm: "text-xs px-2.5 py-1 gap-1",
  md: "text-sm px-3 py-1.5 gap-1.5",
};

const ICON_SIZE: Record<BadgeSize, number> = {
  sm: 12,
  md: 14,
};

export default function Badge({
  children,
  variant = "default",
  size = "sm",
  icon: Icon,
  className,
  soft,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center",
        "font-semibold",
        "rounded-pill",
        "leading-none",
        "whitespace-nowrap",
        (soft && SOFT_CLASSES[variant]) || VARIANT_CLASSES[variant],
        SIZE_CLASSES[size],
        className,
      )}
    >
      {Icon && <Icon size={ICON_SIZE[size]} aria-hidden />}
      <span>{children}</span>
    </span>
  );
}
