"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className,
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -6,
              scale: 1.01,
            }
          : undefined
      }
      transition={{
        duration: 0.25,
      }}
      className={cn(
        `
        relative
        overflow-hidden

        rounded-[28px]

        border
        border-white/10

        bg-white/[0.04]

        backdrop-blur-2xl

        shadow-[0_15px_45px_rgba(0,0,0,.35)]

        transition-all
        duration-300

        hover:border-red-500/30
        `,
        className
      )}
    >
      {/* Glow */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          opacity-0

          transition-opacity
          duration-300

          group-hover:opacity-100
        "
      >
        <div
          className="
            absolute
            -right-24
            -top-24

            h-48
            w-48

            rounded-full

            bg-red-600/10

            blur-[80px]
          "
        />
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}