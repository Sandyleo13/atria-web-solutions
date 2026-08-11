"use client";

import { motion } from "framer-motion";

export default function HeroBackgroundLight() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Base Background */}

      <div className="absolute inset-0 bg-[#F8FAFC]" />

      {/* Subtle Grid */}

      <div
        className="
          absolute
          inset-0

          opacity-[0.02]

          [background-image:
            linear-gradient(to_right,rgba(15,23,42,.12)_1px,transparent_1px),
            linear-gradient(to_bottom,rgba(15,23,42,.12)_1px,transparent_1px)
          ]

          [background-size:72px_72px]
        "
      />

      {/* Left Reading Area */}

      <div
        className="
          absolute
          inset-y-0
          left-0

          w-[58%]

          bg-gradient-to-r
          from-[#F8FAFC]
          via-[#F8FAFC]
          via-60%
          to-transparent
        "
      />

      {/* Main Glow Behind Hero */}

      <motion.div
        animate={{
          opacity: [0.10, 0.18, 0.10],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          right-[-6%]
          top-1/2

          h-[850px]
          w-[850px]

          -translate-y-1/2

          rounded-full

          bg-[radial-gradient(circle,rgba(239,68,68,.35)_0%,rgba(239,68,68,.12)_35%,transparent_75%)]

          blur-[140px]
        "
      />

      {/* Secondary Glow */}

      <motion.div
        animate={{
          opacity: [0.05, 0.10, 0.05],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          right-[22%]
          top-[30%]

          h-[280px]
          w-[280px]

          rounded-full

          bg-red-500/20

          blur-[100px]
        "
      />

      {/* Soft Top Gradient */}

      <div
        className="
          absolute
          inset-x-0
          top-0

          h-64

          bg-gradient-to-b
          from-white/70
          to-transparent
        "
      />

      {/* Bottom Fade */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0

          h-56

          bg-gradient-to-t
          from-[#F8FAFC]
          to-transparent
        "
      />

      {/* Very Soft Vignette */}

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,transparent_55%,rgba(15,23,42,.03)_100%)]
        "
      />
    </div>
  );
}