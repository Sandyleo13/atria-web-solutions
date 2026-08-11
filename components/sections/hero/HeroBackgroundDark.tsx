"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Theme Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-white/80
          dark:bg-black/75

          transition-colors
          duration-500
        "
      />

      {/* Top Gradient */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-b
          from-white/10
          via-white/40
          to-[var(--background)]

          dark:from-black/20
          dark:via-black/40
          dark:to-[var(--background)]
        "
      />

      {/* Left Gradient */}

      <div
        className="
          absolute
          inset-y-0
          left-0

          hidden
          w-1/2

          bg-gradient-to-r
          from-[var(--background)]
          via-[var(--background)]/90
          to-transparent

          md:block
        "
      />

      {/* Mobile Left Gradient */}

      <div
        className="
          absolute
          inset-y-0
          left-0
          w-full

          bg-gradient-to-r
          from-[var(--background)]/95
          via-[var(--background)]/70
          to-transparent

          md:hidden
        "
      />

      {/* Bottom Fade */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0

          h-32
          sm:h-40
          md:h-52

          bg-gradient-to-t
          from-[var(--background)]
          to-transparent
        "
      />

      {/* Animated Glow */}

      <motion.div
        animate={{
          opacity: [0.25, 0.45, 0.25],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          right-[-120px]
          top-1/2

          h-[420px]
          w-[420px]

          -translate-y-1/2

          rounded-full

          bg-red-500/15
          dark:bg-red-500/25

          blur-[120px]

          sm:right-[-100px]
          sm:h-[520px]
          sm:w-[520px]
          sm:blur-[140px]

          md:right-[5%]
          md:h-[600px]
          md:w-[600px]
          md:blur-[160px]

          lg:right-[12%]
          lg:h-[700px]
          lg:w-[700px]
          lg:blur-[180px]
        "
      />

      {/* Vignette */}

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,transparent_20%,rgba(255,255,255,.35)_100%)]

          dark:bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,.65)_100%)]
        "
      />
    </div>
  );
}