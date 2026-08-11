"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="relative z-20 flex flex-col items-start">
      {/* Badge */}

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          inline-flex
          items-center

          rounded-full

          border
          border-red-200
          dark:border-red-500/15

          bg-red-50
          dark:bg-red-500/5

          px-5
          py-2

          text-xs
          font-semibold
          uppercase
          tracking-[0.28em]

          text-red-600
          dark:text-red-400
        "
      >
        We Design. We Develop. We Deliver.
      </motion.p>

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7 }}
        className="
    mt-8
    text-6xl
    font-black
    uppercase
    leading-[0.88]
    tracking-[-0.05em]

    sm:text-7xl
    xl:text-[88px]
  "
      >
        <span className="block text-[var(--foreground)]">Building</span>

        <span className="block text-[var(--foreground)]">Powerful</span>
        <span className="block bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
          Digital
        </span>

        <span className="block bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
          Solutions
        </span>
      </motion.h1>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="
          mt-10
          max-w-lg

          text-lg
          leading-8

          text-[var(--muted)]
        "
      >
        We combine creativity, technology and strategy to deliver powerful
        digital experiences that help businesses grow, engage customers and
        build lasting brands.
      </motion.p>

      {/* Buttons */}

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.7 }}
        className="mt-12 flex flex-wrap gap-5"
      >
        <Link
          href="/services"
          className="
            group

            inline-flex
            items-center
            gap-2

            rounded-xl

            bg-red-600

            px-7
            py-4

            font-semibold
            text-white

            shadow-lg
            shadow-red-500/20

            transition-all
            duration-300

            hover:-translate-y-1
            hover:bg-red-500
            hover:shadow-red-500/40
          "
        >
          Our Services
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

        <Link
          href="/portfolio"
          className="
            group

            inline-flex
            items-center
            gap-2

            rounded-xl

            border
            border-[var(--border)]

            bg-[var(--card)]

            px-7
            py-4

            font-semibold

            text-[var(--foreground)]

            shadow-sm

            transition-all
            duration-300

            hover:-translate-y-1
            hover:border-red-500
            hover:bg-red-500/10
          "
        >
          View Portfolio
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </motion.div>

      {/* Stats */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65 }}
        className="mt-20 w-full"
      >
        <HeroStats />
      </motion.div>
    </div>
  );
}
