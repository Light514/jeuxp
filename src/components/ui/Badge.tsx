"use client";

import { cn } from "@/lib/utils/cn";

type BadgeVariant = "default" | "outline" | "cyan" | "magenta" | "yellow";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  default: "bg-cyber-gray-light text-white",
  outline: "border border-neon-cyan/50 text-neon-cyan bg-transparent",
  cyan: "bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30",
  magenta: "bg-neon-magenta/20 text-neon-magenta border border-neon-magenta/30",
  yellow: "bg-neon-yellow/20 text-neon-yellow border border-neon-yellow/30",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-sm text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
