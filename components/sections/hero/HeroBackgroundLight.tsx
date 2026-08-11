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

          [background-size:48px_48px]
          sm:[background-size:60px_60px]
          md:[background-size:72px_72px]
        "
      />

      {/* Left Reading Area */}

      <div
        className="
          absolute
          inset-y-0
          left-0

          w-full

          bg-gradient-to-r
          from-[#F8FAFC]
          via-[#F8FAFC]/95
          to-transparent

          sm:w-[75%]
          md:w-[65%]
          lg:w-[58%]
        "
      />

      {/* Main Glow Behind Hero */}

      <motion.div
        animate={{
          opacity: [0.08, 0.15, 0.08],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          right-[-180px]
          top-1/2

          h-[500px]
          w-[500px]

          -translate-y-1/2

          rounded-full

          bg-[radial-gradient(circle,rgba(239,68,68,.28)_0%,rgba(239,68,68,.10)_35%,transparent_75%)]

          blur-[100px]

          sm:right-[-150px]
          sm:h-[600px]
          sm:w-[600px]
          sm:blur-[120px]

          md:right-[-8%]
          md:h-[700px]
          md:w-[700px]
          md:blur-[130px]

          lg:right-[-6%]
          lg:h-[850px]
          lg:w-[850px]
          lg:blur-[140px]
        "
      />

      {/* Secondary Glow */}

      <motion.div
        animate={{
          opacity: [0.04, 0.09, 0.04],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          right-[-40px]
          top-[25%]

          h-[180px]
          w-[180px]

          rounded-full

          bg-red-500/15

          blur-[80px]

          sm:right-[5%]
          sm:h-[220px]
          sm:w-[220px]

          md:right-[18%]
          md:top-[30%]
          md:h-[250px]
          md:w-[250px]

          lg:right-[22%]
          lg:h-[280px]
          lg:w-[280px]
          lg:blur-[100px]
        "
      />

      {/* Soft Top Gradient */}

      <div
        className="
          absolute
          inset-x-0
          top-0

          h-40

          bg-gradient-to-b
          from-white/70
          to-transparent

          sm:h-52
          md:h-64
        "
      />

      {/* Bottom Fade */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0

          h-40

          bg-gradient-to-t
          from-[#F8FAFC]
          to-transparent

          sm:h-48
          md:h-56
        "
      />

      {/* Very Soft Vignette */}

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,transparent_45%,rgba(15,23,42,.025)_100%)]
          sm:bg-[radial-gradient(circle_at_center,transparent_50%,rgba(15,23,42,.03)_100%)]
        "
      />

    </div>
  );
}