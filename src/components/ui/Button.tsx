"use client";

import { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-neon-cyan text-cyber-black font-semibold hover:shadow-neon-cyan",
  secondary:
    "bg-neon-magenta text-white font-semibold hover:shadow-neon-magenta",
  ghost: "bg-transparent text-neon-cyan hover:bg-neon-cyan/10",
  outline:
    "border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 hover:shadow-neon-cyan",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "font-display uppercase tracking-wider",
          "rounded-sm transition-all duration-300",
          "focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:ring-offset-2 focus:ring-offset-cyber-black",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
