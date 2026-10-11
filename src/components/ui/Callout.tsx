// Callout — blød, tonet infoboks til status (info/success/warning/danger).
// Erstatter alle hard-codede bg-emerald-50 / bg-amber-50 / bg-red-50 blokke.
import type { ComponentType, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type CalloutStatus = "info" | "success" | "warning" | "danger" | "neutral";

type LucideIcon = ComponentType<{ size?: number | string; className?: string; "aria-hidden"?: boolean }>;

interface CalloutProps {
  status?: CalloutStatus;
  size?: "sm" | "md";
  icon?: LucideIcon;
  title?: ReactNode;
  children?: ReactNode;
  className?: string;
  as?: "div" | "section" | "p";
}

const STATUS: Record<CalloutStatus, { box: string; icon: string }> = {
  info:    { box: "bg-brand-50 text-ink",              icon: "text-brand-600" },
  success: { box: "bg-success-soft text-success-ink",  icon: "text-success" },
  warning: { box: "bg-warning-soft text-warning-ink",  icon: "text-warning" },
  danger:  { box: "bg-danger-soft text-danger-ink",    icon: "text-danger" },
  neutral: { box: "bg-bg text-ink-body",                icon: "text-ink-muted" },
};

export default function Callout({ status = "info", size = "md", icon: Icon, title, children, className, as: Tag = "div" }: CalloutProps) {
  const s = STATUS[status];
  return (
    <Tag
      role={status === "danger" ? "alert" : undefined}
      className={cn(
        "flex gap-3",
        size === "sm" ? "rounded-input px-3 py-2 text-sm" : "rounded-card p-4 text-sm sm:p-5",
        s.box,
        className,
      )}
    >
      {Icon && <Icon size={size === "sm" ? 16 : 20} className={cn("mt-0.5 shrink-0", s.icon)} aria-hidden />}
      <div className="min-w-0 flex-1">
        {title && <p className="font-semibold">{title}</p>}
        {children && <div className={title ? "mt-1" : undefined}>{children}</div>}
      </div>
    </Tag>
  );
}
