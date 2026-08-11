"use client";

import { motion } from "framer-motion";

export default function AboutBackground() {
  return (
    <>
      {/* Base Background */}

      <div
        className="
          absolute
          inset-0

          bg-[var(--background)]

          transition-colors
          duration-500
        "
      />

      {/* Main Glow */}

      <motion.div
        animate={{
          opacity: [0.35, 0.55, 0.35],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-20

          h-[650px]
          w-[650px]

          -translate-x-1/2

          rounded-full

          bg-red-500/8
          dark:bg-red-600/15

          blur-[180px]
        "
      />

      {/* Left Glow */}

      <div
        className="
          absolute
          left-[-150px]
          top-1/3

          h-[350px]
          w-[350px]

          rounded-full

          bg-red-500/6
          dark:bg-red-500/10

          blur-[140px]
        "
      />

      {/* Right Glow */}

      <div
        className="
          absolute
          right-[-150px]
          bottom-20

          h-[400px]
          w-[400px]

          rounded-full

          bg-red-600/6
          dark:bg-red-700/10

          blur-[150px]
        "
      />

      {/* Grid */}

      <div
        className="
          absolute
          inset-0

          opacity-[0.035]
          dark:opacity-[0.03]

          [background-image:linear-gradient(rgba(17,24,39,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(17,24,39,.08)_1px,transparent_1px)]

          dark:[background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)]

          [background-size:44px_44px]
        "
      />

      {/* Vignette */}

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,.08)_65%,var(--background)_100%)]

          dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,.15)_60%,var(--background)_100%)]
        "
      />
    </>
  );
}