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
        transition={{ duration: .6 }}
        className="
          text-xs
          font-semibold
          uppercase
          tracking-[0.35em]
          text-red-500
        "
      >
        We Design. We Develop. We Deliver.
      </motion.p>

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .15, duration: .7 }}
        className="
          mt-8
          text-5xl
          font-black
          uppercase
          leading-[0.92]
          tracking-tight

          sm:text-6xl

          xl:text-7xl
        "
      >
        <span className="block text-white">
          Building
        </span>

        <span className="block text-white">
          Powerful
        </span>

        <span className="block bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
          Digital
        </span>

        <span className="block bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
          Solutions
        </span>
      </motion.h1>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .3, duration: .7 }}
        className="
          mt-8
          max-w-xl
          text-lg
          leading-8
          text-gray-400
        "
      >
        We combine creativity, technology and strategy to deliver
        powerful digital experiences that help businesses grow,
        engage customers and build lasting brands.
      </motion.p>

      {/* Buttons */}

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .45, duration: .7 }}
        className="mt-10 flex flex-wrap gap-4"
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

            transition-all

            hover:scale-105
            hover:bg-red-500
          "
        >
          Our Services

          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
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
            border-red-500/50

            bg-white/5

            px-7
            py-4

            font-semibold
            text-white

            backdrop-blur

            transition-all

            hover:border-red-500
            hover:bg-red-500/10
          "
        >
          View Portfolio

          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </motion.div>

      {/* Stats */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .65 }}
        className="mt-16 w-full"
      >
        <HeroStats />
      </motion.div>

    </div>
  );
}