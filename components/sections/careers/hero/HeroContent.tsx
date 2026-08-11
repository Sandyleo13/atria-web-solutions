"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div className="relative z-30 w-full max-w-2xl">
      {/* Badge */}

      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          inline-flex
          items-center
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
          text-red-600
          dark:text-red-500
        "
      >
        Careers
      </motion.span>

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.15,
          duration: 0.6,
        }}
        className="
          mt-8
          max-w-2xl
          text-5xl
          font-black
          leading-[1.05]
          tracking-[-0.05em]
          text-gray-900
          dark:text-white

          sm:text-6xl
          lg:text-7xl
        "
      >
        Build the Future
        <br />

        <span className="text-red-600 dark:text-red-500">
          With Atria.
        </span>
      </motion.h1>

      {/* Description */}

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
          text-gray-600
          dark:text-gray-400
        "
      >
        Join a growing team that's passionate about creating
        exceptional digital products, solving real-world problems,
        and continuously learning together.
      </motion.p>

      {/* Buttons */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.45,
          duration: 0.6,
        }}
        className="relative z-30 mt-10 flex flex-wrap gap-4"
      >
        {/* Primary */}

        <Link
          href="#positions"
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-red-600
            px-7
            py-4
            font-semibold
            text-white
            shadow-[0_12px_30px_rgba(229,57,53,.20)]
            transition-all
            duration-300

            hover:scale-105
            hover:bg-red-700
          "
        >
          View Open Positions
          <ArrowRight size={18} />
        </Link>

        {/* Secondary */}

        <Link
          href="/about"
          className="
            inline-flex
            items-center
            gap-2
            rounded-full

            border
            border-gray-300
            dark:border-white/15

            bg-white
            dark:bg-white/[0.04]

            px-7
            py-4

            font-semibold

            text-gray-900
            dark:text-white

            shadow-sm
            dark:shadow-none

            transition-all
            duration-300

            hover:border-red-500/40
            hover:bg-red-500/10
            hover:text-red-600
            dark:hover:text-red-400
          "
        >
          Learn About Us
        </Link>
      </motion.div>

      {/* Stats */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.6,
        }}
        className="
          relative
          z-30
          mt-14
          grid
          grid-cols-1
          gap-4
          sm:grid-cols-3
        "
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
              border-gray-200
              dark:border-white/10

              bg-white
              dark:bg-[#111111]

              p-5

              shadow-[0_10px_30px_rgba(17,24,39,.06)]
              dark:shadow-none

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-red-500/30
            "
          >
            <h3
              className="
                text-3xl
                font-bold
                text-gray-900
                dark:text-white
              "
            >
              {value}
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-gray-500
                dark:text-gray-400
              "
            >
              {label}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}