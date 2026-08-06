"use client";

import type { ComponentProps, ReactNode } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type ButtonProps = Omit<ComponentProps<typeof motion.button>, "children"> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

const variantClasses = {
  primary: "bg-brand text-white shadow-sm hover:bg-brand-dark",
  secondary: "border border-line bg-white text-ink shadow-sm hover:border-slate-300 hover:bg-slate-50",
  ghost: "text-ink hover:bg-slate-100",
};

const sizeClasses = {
  sm: "min-h-9 px-3 text-sm",
  md: "min-h-11 px-4 text-sm",
  lg: "min-h-12 px-5 text-base",
};

export function Button({
  children,
  className,
  disabled,
  size = "md",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      whileHover={disabled ? undefined : { scale: 1.015 }}
      whileTap={disabled ? undefined : { scale: 0.985 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
