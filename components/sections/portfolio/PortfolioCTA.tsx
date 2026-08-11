"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";

export default function PortfolioCTA() {
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
            top-1/2

            h-[500px]
            w-[500px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-red-500/8
            dark:bg-red-600/12

            blur-[160px]
          "
        />
      </div>

      <Container className="relative z-10">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mx-auto
            max-w-4xl

            rounded-[36px]

            border
            border-gray-200
            dark:border-white/10

            bg-white
            dark:bg-white/[0.03]

            p-12

            text-center

            backdrop-blur-xl

            shadow-[0_20px_60px_rgba(17,24,39,.08)]
            dark:shadow-[0_20px_60px_rgba(0,0,0,.35)]
          "
        >
          {/* Eyebrow */}

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
            Let's Build Together
          </span>

          {/* Heading */}

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
            Ready to Start
            <br />
            Your Next Project?
          </h2>

          {/* Description */}

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
            Whether you need a business website, web application,
            e-commerce platform or custom software,
            we're ready to bring your vision to life.
          </p>

          {/* CTA */}

          <Link
            href="/contact"
            className="
              mt-12

              inline-flex
              items-center
              gap-3

              rounded-full

              bg-red-600

              px-8
              py-4

              font-semibold

              text-white

              transition-all
              duration-300

              hover:scale-105
              hover:bg-red-700

              hover:shadow-[0_15px_35px_rgba(229,57,53,.28)]
            "
          >
            Start Your Project

            <ArrowRight size={20} />
          </Link>

        </motion.div>

      </Container>
    </section>
  );
}