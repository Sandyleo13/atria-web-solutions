"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";

const categories = [
  "Web Development",
  "UI / UX",
  "Next.js",
  "React",
  "Laravel",
  "Node.js",
  "SEO",
  "Business",
  "Technology",
  "Case Studies",
];

export default function Categories() {
  return (
    <section
      className="
        relative
        overflow-hidden

        py-28

        bg-[var(--background)]

        transition-colors
        duration-500
      "
    >
      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            left-1/2
            top-16

            h-[600px]
            w-[600px]

            -translate-x-1/2

            rounded-full

            bg-red-500/8
            dark:bg-red-600/10

            blur-[180px]
          "
        />
      </div>

      <Container className="relative z-10">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span
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
            Explore Topics
          </span>

          <h2
            className="
              mt-8

              text-5xl
              font-bold

              text-[var(--foreground)]

              lg:text-6xl
            "
          >
            Browse by Category
          </h2>

          <p
            className="
              mt-8

              text-lg
              leading-8

              text-[var(--muted)]
            "
          >
            Find articles that match your interests, whether you're
            looking for development tutorials, design inspiration or
            business advice.
          </p>

        </div>

        {/* Categories */}

        <div className="mt-20 flex flex-wrap justify-center gap-5">

          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.05,
              }}
              whileHover={{
                y: -5,
                scale: 1.05,
              }}
              className="
                rounded-full

                border
                border-gray-200
                dark:border-white/10

                bg-white
                dark:bg-[#111111]

                px-6
                py-4

                font-medium

                text-[var(--foreground)]

                shadow-[0_8px_30px_rgba(17,24,39,.05)]
                dark:shadow-none

                transition-all
                duration-300

                hover:border-red-500/40
                hover:bg-red-500/10
                hover:text-red-500
                hover:shadow-[0_10px_35px_rgba(229,57,53,.18)]
              "
            >
              {category}
            </motion.button>
          ))}

        </div>

      </Container>
    </section>
  );
}