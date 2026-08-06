"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HERO_IMAGES } from "./constants";

export default function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Floating Glow */}
      <motion.div
        animate={{
          opacity: [0.45, 0.8, 0.45],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          h-[520px]
          w-[520px]
          rounded-full
        "
      >
        <Image
          src={HERO_IMAGES.glow}
          alt=""
          fill
          priority
          className="object-contain"
        />
      </motion.div>

      {/* Floating Debris */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          inset-0
          scale-110
        "
      >
        <Image
          src={HERO_IMAGES.debris}
          alt=""
          fill
          priority
          className="object-contain opacity-80"
        />
      </motion.div>

      {/* Ground */}
      <motion.div
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
    absolute
    bottom-2
    z-10
    h-[220px]
    w-[520px]
    lg:h-[280px]
    lg:w-[700px]
  "
      >
        <Image
          src={HERO_IMAGES.ground}
          alt=""
          fill
          priority
          className="object-contain"
        />
      </motion.div>

      {/* Hero A */}
      <motion.div
        animate={{
          y: [0, -18, 0],
          rotate: [0, 1.5, 0, -1.5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          z-20
          h-[500px]
          w-[500px]
          lg:h-[640px]
          lg:w-[640px]
        "
      >
        <Image
          src={HERO_IMAGES.hero}
          alt="Atria Web Solutions"
          fill
          priority
          className="object-contain drop-shadow-[0_0_80px_rgba(220,38,38,.45)]"
        />
      </motion.div>

      {/* Floating Glass Card */}
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-10
          right-4
          z-30

          rounded-3xl
          border
          border-white/10

          bg-white/5

          px-6
          py-5

          backdrop-blur-xl

          shadow-2xl
        "
      >
        <p className="text-xs uppercase tracking-[0.25em] text-red-400">
          Delivered
        </p>

        <h3 className="mt-2 text-4xl font-bold text-white">50+</h3>

        <p className="mt-1 text-sm text-gray-400">Successful Projects</p>
      </motion.div>
    </div>
  );
}
