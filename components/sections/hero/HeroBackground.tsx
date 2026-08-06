"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { HERO_IMAGES } from "./constants";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Background Image */}
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
          className="object-cover object-center opacity-25"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Top Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#070707]" />

      {/* Left Gradient */}
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#050505] via-[#080808]/90 to-transparent" />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#050505] to-transparent" />

      {/* Animated Glow */}
      <motion.div
        animate={{
          opacity: [0.35, 0.65, 0.35],
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
          bg-red-600/20
          blur-[140px]
        "
      />

      {/* Hero Glow Image */}
      <motion.div
        animate={{
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[10%]
          top-1/2
          h-[700px]
          w-[700px]
          -translate-y-1/2
        "
      >
        <Image
          src={HERO_IMAGES.glow}
          alt=""
          fill
          className="object-contain opacity-80"
        />
      </motion.div>

      {/* Radial Vignette */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,.65)_100%)]
        "
      />
    </div>
  );
}