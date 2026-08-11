"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import FadeSection from "@/components/animations/FadeSection";

export default function AboutCTA() {
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

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="
            absolute
            left-1/2
            top-1/2

            h-[520px]
            w-[520px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-red-500/8
            dark:bg-red-600/10

            blur-[160px]
          "
        />
      </div>

      <Container>
        <FadeSection>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              relative
              overflow-hidden

              rounded-[40px]

              border
              border-gray-200
              dark:border-white/10

              bg-white
              dark:bg-[#111111]

              px-8
              py-20

              text-center

              backdrop-blur-2xl

              shadow-[0_22px_55px_rgba(17,24,39,.08)]
              dark:shadow-none

              lg:px-20
            "
          >
            {/* Decorative Glow */}

            <div
              className="
                absolute
                -right-24
                -top-24

                h-60
                w-60

                rounded-full

                bg-red-500/8
                dark:bg-red-600/10

                blur-[120px]
              "
            />

            <div className="relative z-10">

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
                Ready to Start?
              </span>

              <h2
                className="
                  mt-8

                  text-5xl
                  font-bold
                  leading-tight

                  text-[var(--foreground)]

                  lg:text-6xl
                "
              >
                Let's Build Something
                <br />
                Exceptional Together.
              </h2>

              <p
                className="
                  mx-auto
                  mt-8

                  max-w-2xl

                  text-lg
                  leading-8

                  text-[var(--muted)]
                "
              >
                Whether you're launching a new business, redesigning your
                website or building a custom digital solution, our team is
                ready to turn your ideas into reality.
              </p>

              <div className="mt-12 flex justify-center">
                <Link
                  href="/contact"
                  className="
                    inline-flex
                    items-center
                    justify-center

                    rounded-full

                    bg-red-600

                    px-8
                    py-4

                    text-base
                    font-semibold

                    text-white

                    transition-all
                    duration-300

                    hover:scale-105
                    hover:bg-red-700

                    hover:shadow-[0_15px_35px_rgba(229,57,53,.30)]
                  "
                >
                  Start Your Project
                </Link>
              </div>

            </div>

          </motion.div>
        </FadeSection>
      </Container>
    </section>
  );
}