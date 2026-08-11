"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { HERO_IMAGES } from "./constants";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background Image */}
      {/*
<motion.div
  className="absolute inset-0"
  animate={{
    scale: [1, 1.05, 1],
  }}
  transition={{
    duration: 30,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <Image
    src={HERO_IMAGES.background}
    alt=""
    fill
    priority
    className="object-cover object-center opacity-20 dark:opacity-25"
  />
</motion.div>
*/}

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
          w-1/2

          bg-gradient-to-r

          from-[var(--background)]
          via-[var(--background)]/90
          to-transparent
        "
      />

      {/* Bottom Fade */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-52

          bg-gradient-to-t

          from-[var(--background)]
          to-transparent
        "
      />

      {/* Animated Glow */}
      <motion.div
        animate={{
          opacity: [0.3, 0.55, 0.3],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[12%]
          top-1/2

          h-[700px]
          w-[700px]

          -translate-y-1/2

          rounded-full

         bg-red-500/20
dark:bg-red-500/35

blur-[180px]
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
