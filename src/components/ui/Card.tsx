"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "cyan" | "magenta" | "yellow";
  hover?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const glowColors = {
  cyan: "hover:shadow-neon-cyan hover:border-neon-cyan/50",
  magenta: "hover:shadow-neon-magenta hover:border-neon-magenta/50",
  yellow: "hover:shadow-neon-yellow hover:border-neon-yellow/50",
};

export function Card({
  children,
  className,
  glowColor = "cyan",
  hover = true,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        "relative bg-cyber-gray/50 backdrop-blur-sm",
        "border border-cyber-gray-light rounded-sm",
        "transition-all duration-300",
        hover && glowColors[glowColor],
        onClick && "cursor-pointer",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
