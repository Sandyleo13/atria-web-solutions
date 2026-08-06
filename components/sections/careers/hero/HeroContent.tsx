"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          inline-flex
          rounded-full
          border
          border-red-500/20
          bg-red-500/10
          px-4
          py-2
          text-xs
          font-semibold
          uppercase
          tracking-[0.35em]
          text-red-500
        "
      >
        Careers
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.15,
          duration: 0.6,
        }}
        className="
          mt-8
          text-5xl
          font-black
          leading-[1.05]
          tracking-[-0.05em]
          text-white
          lg:text-7xl
        "
      >
        Build the Future
        <br />

        <span className="text-red-500">
          With Atria.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.6,
        }}
        className="
          mt-8
          max-w-xl
          text-lg
          leading-8
          text-gray-400
        "
      >
        Join a growing team that's passionate about creating
        exceptional digital products, solving real-world problems,
        and continuously learning together.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.45,
          duration: 0.6,
        }}
        className="mt-10 flex flex-wrap gap-4"
      >
        <Link
          href="#positions"
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-red-500
            px-7
            py-4
            font-semibold
            text-white
            transition-all
            duration-300
            hover:bg-red-600
            hover:scale-105
          "
        >
          View Open Positions

          <ArrowRight size={18} />
        </Link>

        <Link
          href="/about"
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/15
            bg-white/[0.04]
            px-7
            py-4
            font-semibold
            text-white
            transition-all
            duration-300
            hover:border-red-500/30
            hover:bg-red-500/10
          "
        >
          Learn About Us
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.6,
        }}
        className="mt-14 grid grid-cols-3 gap-4"
      >
        {[
          ["Real", "Client Projects"],
          ["Modern", "Technologies"],
          ["Growth", "Focused"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              p-5
            "
          >
            <h3 className="text-3xl font-bold text-white">
              {value}
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              {label}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}