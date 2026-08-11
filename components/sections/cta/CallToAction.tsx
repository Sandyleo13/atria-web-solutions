"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";

export default function CallToAction() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[var(--background)]
        py-16
        sm:py-20
      "
    >
      {/* Subtle background glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-72
          w-72
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-red-500/10
          blur-[120px]
        "
      />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            relative
            overflow-hidden
            rounded-[28px]

            border
            border-gray-200
            dark:border-white/10

            bg-white
            dark:bg-white/[0.03]

            px-7
            py-9

            sm:px-10
            sm:py-10

            shadow-[0_15px_40px_rgba(17,24,39,.06)]
            dark:shadow-[0_0_50px_rgba(0,0,0,.25)]
          "
        >
          {/* Decorative glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20

              h-48
              w-48

              rounded-full
              bg-red-500/10
              blur-[80px]
            "
          />

          <div
            className="
              relative
              z-10

              flex
              flex-col
              items-start
              justify-between
              gap-7

              lg:flex-row
              lg:items-center
            "
          >
            {/* Content */}

            <div className="max-w-2xl">
              <div
                className="
                  inline-flex
                  items-center
                  rounded-full

                  border
                  border-red-200
                  dark:border-red-500/20

                  bg-red-50
                  dark:bg-red-500/5

                  px-4
                  py-1.5

                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.24em]

                  text-red-600
                  dark:text-red-400
                "
              >
                Let's Build Together
              </div>

              <h2
                className="
                  mt-4

                  text-2xl
                  font-bold
                  tracking-tight

                  text-[var(--foreground)]

                  sm:text-3xl
                "
              >
                Have an idea? Let's make it happen.
              </h2>

              <p
                className="
                  mt-3
                  max-w-xl

                  text-sm
                  leading-6

                  text-[var(--muted)]

                  sm:text-base
                "
              >
                Tell us what you're building and we'll help turn your idea
                into a modern digital experience.
              </p>
            </div>

            {/* Buttons */}

            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                href="/contact"
                className="
                  group

                  inline-flex
                  items-center
                  gap-2

                  rounded-xl

                  bg-red-600

                  px-5
                  py-3

                  text-sm
                  font-semibold
                  text-white

                  shadow-lg
                  shadow-red-500/20

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:bg-red-500
                  hover:shadow-red-500/30
                "
              >
                Start a Project

                <ArrowRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              <Link
                href="mailto:hello@atriawebsolutions.com"
                className="
                  inline-flex
                  items-center
                  gap-2

                  rounded-xl

                  border
                  border-[var(--border)]

                  bg-[var(--card)]

                  px-5
                  py-3

                  text-sm
                  font-semibold

                  text-[var(--foreground)]

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-red-500
                  hover:text-red-500
                "
              >
                <Mail size={17} />

                Email Us
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}