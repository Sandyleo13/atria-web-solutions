"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div>
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
        Insights & Resources
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

          text-5xl
          font-black
          leading-[1.05]
          tracking-[-0.05em]

          text-[var(--foreground)]

          lg:text-7xl
        "
      >
        Ideas That
        <br />

        <span className="text-red-500">
          Drive Digital
        </span>

        <br />

        Growth.
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

          text-[var(--muted)]
        "
      >
        Explore expert insights, development tips,
        UI/UX inspiration and digital strategies
        to help your business grow online.
      </motion.p>

      {/* Buttons */}

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
          href="#articles"
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

            transition-all
            duration-300

            hover:scale-105
            hover:bg-red-700

            hover:shadow-[0_15px_35px_rgba(229,57,53,.25)]
          "
        >
          Explore Articles

          <ArrowRight size={18} />
        </Link>

        <Link
          href="/contact"
          className="
            inline-flex
            items-center
            gap-2

            rounded-full

            border
            border-gray-200
            dark:border-white/15

            bg-white
            dark:bg-white/[0.04]

            px-7
            py-4

            font-semibold

            text-[var(--foreground)]

            shadow-[0_10px_30px_rgba(17,24,39,.05)]
            dark:shadow-none

            transition-all
            duration-300

            hover:border-red-500/40
            hover:bg-red-50
            dark:hover:bg-red-500/10
          "
        >
          Contact Us
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
        className="mt-14 grid grid-cols-3 gap-4"
      >
        {[
          ["50+", "Articles"],
          ["10+", "Categories"],
          ["5 min", "Average Read"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="
              rounded-2xl

              border
              border-gray-200
              dark:border-white/10

              bg-white
              dark:bg-white/[0.03]

              p-5

              shadow-[0_12px_28px_rgba(17,24,39,.05)]
              dark:shadow-none

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-red-500/40
            "
          >
            <h3
              className="
                text-3xl
                font-bold

                text-[var(--foreground)]
              "
            >
              {value}
            </h3>

            <p
              className="
                mt-2
                text-sm

                text-[var(--muted)]
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