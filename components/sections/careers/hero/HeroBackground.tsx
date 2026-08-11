"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      {/* Base */}

      <div className="absolute inset-0 bg-[var(--background)] transition-colors duration-500" />

      {/* Main Animated Glow */}

      <motion.div
        animate={{
          opacity: [0.25, 0.45, 0.25],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          right-[-10%]
          top-[-10%]

          h-[650px]
          w-[650px]

          rounded-full

          bg-red-500/8
          dark:bg-red-600/12

          blur-[170px]
        "
      />

      {/* Bottom Glow */}

      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          left-[-10%]
          bottom-[-10%]

          h-[500px]
          w-[500px]

          rounded-full

          bg-red-500/6
          dark:bg-red-500/10

          blur-[170px]
        "
      />

      {/* Grid */}

      <div
        className="
          absolute
          inset-0

          opacity-[0.03]
          dark:opacity-[0.045]

          [background-image:linear-gradient(rgba(17,24,39,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(17,24,39,.08)_1px,transparent_1px)]
          dark:[background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)]

          [background-size:70px_70px]
        "
      />

      {/* Soft Vignette */}

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,transparent_45%,rgba(255,255,255,.25)_100%)]

          dark:bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,.35)_100%)]
        "
      />
    </>
  );
}