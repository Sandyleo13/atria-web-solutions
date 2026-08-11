"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {/* Eyebrow */}

      <span
        className="
          inline-flex
          items-center
          rounded-full

          border
          border-red-500/20

          bg-red-50
          dark:bg-red-500/10

          px-4
          py-2

          text-xs
          font-semibold
          uppercase
          tracking-[0.35em]

          text-red-600
          dark:text-red-500

          transition-colors
          duration-300
        "
      >
        {eyebrow}
      </span>

      {/* Title */}

      <h2
        className="
          mt-6

          text-4xl
          font-bold
          leading-tight

          text-gray-900
          dark:text-white

          lg:text-5xl

          transition-colors
          duration-300
        "
      >
        {title}
      </h2>

      {/* Description */}

      {description && (
        <p
          className="
            mx-auto

            mt-6

            max-w-2xl

            text-lg
            leading-8

            text-gray-600
            dark:text-gray-400

            transition-colors
            duration-300
          "
        >
          {description}
        </p>
      )}

      {/* Divider */}

      <div
        className={cn(
          "mt-8 h-px w-28 bg-gradient-to-r from-transparent via-red-500 to-transparent",
          align === "center" ? "mx-auto" : "mx-0"
        )}
      />
    </motion.div>
  );
}