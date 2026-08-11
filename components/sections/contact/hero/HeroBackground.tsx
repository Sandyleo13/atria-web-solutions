"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      {/* Base Background */}

      <div
        className="
          absolute
          inset-0

          bg-[#fafafa]
          dark:bg-[#090909]

          transition-colors
          duration-500
        "
      />

      {/* Main Red Glow */}

      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
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

          h-[500px]
          w-[500px]

          -translate-x-1/2

          rounded-full

          bg-red-500/[0.07]
          dark:bg-red-600/[0.12]

          blur-[140px]

          sm:h-[600px]
          sm:w-[600px]

          lg:h-[650px]
          lg:w-[650px]

          lg:blur-[150px]
        "
      />

      {/* Left Accent */}

      <div
        className="
          absolute

          left-[-180px]
          top-1/3

          h-[350px]
          w-[350px]

          rounded-full

          bg-red-500/[0.04]
          dark:bg-red-600/[0.08]

          blur-[130px]

          sm:h-[400px]
          sm:w-[400px]

          lg:blur-[140px]
        "
      />

      {/* Right Accent */}

      <div
        className="
          absolute

          right-[-180px]
          bottom-[-100px]

          h-[350px]
          w-[350px]

          rounded-full

          bg-red-500/[0.04]
          dark:bg-red-600/[0.08]

          blur-[130px]

          sm:h-[400px]
          sm:w-[400px]

          lg:h-[450px]
          lg:w-[450px]

          lg:blur-[150px]
        "
      />

      {/* Subtle Grid */}

      <div
        className="
          absolute
          inset-0

          opacity-[0.025]
          dark:opacity-[0.035]

          [background-image:linear-gradient(rgba(15,23,42,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.12)_1px,transparent_1px)]

          dark:[background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]

          [background-size:70px_70px]
        "
      />

      {/* Soft Vignette */}

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,transparent_0%,rgba(248,250,252,.3)_70%,#fafafa_100%)]

          dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,.2)_65%,#090909_100%)]

          transition-colors
          duration-500
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
          from-[#fafafa]
          to-transparent

          dark:from-[#090909]
          dark:to-transparent
        "
      />
    </>
  );
}