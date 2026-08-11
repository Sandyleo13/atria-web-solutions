"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">
      {/* Eyebrow */}

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

          text-red-600
          dark:text-red-400
        "
      >
        Contact Us
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

          sm:text-6xl
          lg:text-7xl
        "
      >
        Let's Build
        <br />

        <span className="text-red-500">
          Something Great
        </span>

        <br />

        Together.
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

          text-base
          leading-7

          text-[var(--muted)]

          sm:text-lg
          sm:leading-8
        "
      >
        Whether you're planning a new website, building a web application
        or looking to grow your business online, we'd love to hear about
        your ideas.
      </motion.p>

      {/* Buttons */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.45,
          duration: 0.6,
        }}
        className="
          mt-10

          flex
          flex-col
          gap-3

          sm:flex-row
          sm:flex-wrap
          sm:gap-4
        "
      >
        {/* Primary */}

        <Link
          href="#contact-form"
          className="
            inline-flex
            items-center
            justify-center
            gap-2

            rounded-full

            bg-red-500

            px-7
            py-4

            font-semibold
            text-white

            shadow-[0_10px_30px_rgba(239,68,68,.18)]

            transition-all
            duration-300

            hover:-translate-y-0.5
            hover:bg-red-600
            hover:shadow-[0_14px_35px_rgba(239,68,68,.25)]
          "
        >
          Start Your Project

          <ArrowRight size={18} />
        </Link>

        {/* Secondary */}

        <Link
          href="/portfolio"
          className="
            inline-flex
            items-center
            justify-center
            gap-2

            rounded-full

            border
            border-[var(--border)]

            bg-[var(--card)]

            px-7
            py-4

            font-semibold

            text-[var(--foreground)]

            shadow-[var(--shadow-sm)]

            transition-all
            duration-300

            hover:-translate-y-0.5
            hover:border-red-500/30
            hover:bg-red-500/10
            hover:text-red-500
          "
        >
          View Our Work
        </Link>
      </motion.div>

      {/* Trust Stats */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.6,
        }}
        className="
          mt-12

          grid
          grid-cols-1
          gap-3

          sm:mt-14
          sm:grid-cols-3
          sm:gap-4
        "
      >
        {[
          ["24h", "Response Time"],
          ["Free", "Consultation"],
          ["100%", "Transparent"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="
              rounded-2xl

              border
              border-[var(--border)]

              bg-[var(--card)]

              p-4

              shadow-[var(--shadow-sm)]

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-red-500/20

              sm:p-5
            "
          >
            <h3
              className="
                text-2xl
                font-bold

                text-[var(--foreground)]

                sm:text-3xl
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