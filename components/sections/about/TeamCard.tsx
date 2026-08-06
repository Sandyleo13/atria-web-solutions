"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
}

export default function TeamCard({
  name,
  role,
  image,
}: TeamCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#111111]
        transition-all
        duration-300
        hover:border-red-500/40
        hover:shadow-[0_20px_50px_rgba(229,57,53,.18)]
      "
    >
      {/* Image */}

      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/60
            via-black/10
            to-transparent
          "
        />
      </div>

      {/* Content */}

      <div className="p-6">
        <h3
          className="
            text-xl
            font-bold
            text-white
            transition-colors
            duration-300
            group-hover:text-red-500
          "
        >
          {name}
        </h3>

        <p className="mt-2 text-sm tracking-wide text-gray-400">
          {role}
        </p>
      </div>
    </motion.div>
  );
}