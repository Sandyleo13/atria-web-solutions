"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const stats = [
  {
    value: "50+",
    label: "Projects Delivered",
  },
  {
    value: "100+",
    label: "Happy Clients",
  },
  {
    value: "5+",
    label: "Years Experience",
  },
];

export default function AboutContent() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -40,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      className="max-w-xl"
    >
      {/* Eyebrow */}

      <span
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
          dark:text-red-500
        "
      >
        About Atria
      </span>

      {/* Heading */}

      <h1
        className="
          mt-8

          text-5xl
          font-bold
          leading-tight

          text-[var(--foreground)]

          lg:text-7xl
        "
      >
        Building Digital
        <br />
        Products That
        <br />
        Businesses Trust.
      </h1>

      {/* Description */}

      <p
        className="
          mt-8

          text-lg
          leading-8

          text-[var(--muted)]
        "
      >
        We help startups, businesses and growing brands build
        scalable web applications, digital platforms and user
        experiences that drive measurable growth and lasting impact.
      </p>

      {/* CTA */}

      <Link
        href="/contact"
        className="
          group

          mt-10
          inline-flex

          items-center
          gap-3

          rounded-xl

          bg-red-600

          px-7
          py-4

          font-semibold
          text-white

          transition-all
          duration-300

          hover:-translate-y-1
          hover:bg-red-700
          hover:shadow-[0_18px_35px_rgba(239,68,68,.28)]
        "
      >
        Let's Work Together

        <ArrowRight
          size={18}
          className="
            transition-transform
            duration-300

            group-hover:translate-x-1
          "
        />
      </Link>

      {/* Stats */}

      <div
        className="
          mt-16

          grid
          grid-cols-3

          gap-5
        "
      >
        {stats.map((item) => (
          <div
            key={item.label}
            className="
              rounded-2xl

              border
              border-gray-200
              dark:border-white/10

              bg-white
              dark:bg-white/[0.03]

              p-5

              backdrop-blur-xl

              shadow-[0_12px_30px_rgba(17,24,39,.05)]
              dark:shadow-none

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-red-500/40
              hover:shadow-[0_18px_35px_rgba(239,68,68,.12)]
            "
          >
            <h3
              className="
                text-3xl
                font-bold

                text-[var(--foreground)]
              "
            >
              {item.value}
            </h3>

            <p
              className="
                mt-2

                text-sm

                text-[var(--muted)]
              "
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}