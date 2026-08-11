"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      {/* Base Background */}

      <div className="absolute inset-0 bg-[#fafafa]" />

      {/* Main Red Glow */}

      <motion.div
        animate={{
          opacity: [0.35, 0.5, 0.35],
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
          top-[-120px]

          h-[650px]
          w-[650px]

          -translate-x-1/2

          rounded-full

          bg-red-500/[0.08]

          blur-[150px]
        "
      />

      {/* Left Accent */}

      <div
        className="
          absolute
          left-[-180px]
          top-1/3

          h-[400px]
          w-[400px]

          rounded-full

          bg-red-500/[0.05]

          blur-[140px]
        "
      />

      {/* Right Accent */}

      <div
        className="
          absolute
          right-[-180px]
          bottom-[-100px]

          h-[450px]
          w-[450px]

          rounded-full

          bg-red-500/[0.05]

          blur-[150px]
        "
      />

      {/* Subtle Grid */}

      <div
        className="
          absolute
          inset-0

          opacity-[0.035]

          [background-image:linear-gradient(rgba(15,23,42,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.12)_1px,transparent_1px)]

          [background-size:70px_70px]
        "
      />

      {/* Soft Vignette */}

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,transparent_0%,rgba(248,250,252,.35)_70%,#fafafa_100%)]
        "
      />
    </>
  );
}