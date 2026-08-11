"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";

const process = [
  {
    number: "01",
    title: "Application",
    description:
      "Submit your application and tell us about your experience and passion.",
  },
  {
    number: "02",
    title: "Initial Discussion",
    description:
      "A friendly conversation to understand your goals and introduce Atria.",
  },
  {
    number: "03",
    title: "Technical Round",
    description:
      "Showcase your skills through a practical discussion or technical assessment.",
  },
  {
    number: "04",
    title: "Welcome Aboard",
    description:
      "If we're a great match, we'll send your offer and begin your onboarding journey.",
  },
];

export default function HiringProcess() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[var(--background)]
        py-28
        transition-colors
        duration-500
      "
    >
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-red-500/[0.035]
          blur-[150px]
        "
      />

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
            Hiring Process
          </span>

          <h2
            className="
              mt-8
              text-5xl
              font-bold
              leading-tight
              text-gray-900
              dark:text-white
              lg:text-6xl
            "
          >
            Our Recruitment Journey
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-gray-600
              dark:text-gray-400
            "
          >
            We keep our hiring process simple, transparent and focused on
            finding the right fit for both you and our team.
          </p>

          <div
            className="
              mx-auto
              mt-10
              h-px
              w-28
              bg-gradient-to-r
              from-transparent
              via-red-500
              to-transparent
            "
          />
        </div>

        {/* Process */}

        <div className="mt-20 grid gap-8 lg:grid-cols-4">
          {process.map((step, index) => (
            <motion.div
              key={step.number}
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                relative
                overflow-visible
                rounded-[28px]

                border
                border-gray-200
                dark:border-white/10

                bg-white
                dark:bg-[#111111]

                p-8

                shadow-[0_15px_45px_rgba(15,23,42,.06)]
                dark:shadow-none

                transition-all
                duration-300

                hover:border-red-500/30
                hover:shadow-[0_20px_60px_rgba(229,57,53,.12)]
              "
            >
              {/* Connecting Line */}

              {index < process.length - 1 && (
                <div
                  className="
                    absolute
                    right-[-32px]
                    top-12
                    z-20
                    hidden
                    h-px
                    w-8
                    bg-red-500/25
                    lg:block
                  "
                >
                  <div
                    className="
                      absolute
                      right-0
                      top-1/2
                      h-2
                      w-2
                      -translate-y-1/2
                      rounded-full
                      bg-red-500
                    "
                  />
                </div>
              )}

              {/* Number */}

              <div className="flex items-start justify-between">
                <span
                  className="
                    text-5xl
                    font-black
                    tracking-tight
                    text-red-500/15
                    transition-colors
                    duration-300
                    group-hover:text-red-500/25
                  "
                >
                  {step.number}
                </span>

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-red-500/15
                    bg-red-500/5
                    text-sm
                    font-semibold
                    text-red-600
                    dark:text-red-400
                  "
                >
                  {index + 1}
                </div>
              </div>

              {/* Content */}

              <h3
                className="
                  mt-6
                  text-2xl
                  font-bold
                  text-gray-900
                  transition-colors
                  duration-300
                  group-hover:text-red-600
                  dark:text-white
                  dark:group-hover:text-red-400
                "
              >
                {step.title}
              </h3>

              <p
                className="
                  mt-5
                  leading-8
                  text-gray-600
                  dark:text-gray-400
                "
              >
                {step.description}
              </p>

              {/* Bottom Accent */}

              <div
                className="
                  absolute
                  bottom-0
                  left-8
                  right-8
                  h-px
                  origin-left
                  scale-x-0
                  bg-gradient-to-r
                  from-red-500
                  to-transparent
                  transition-transform
                  duration-500
                  group-hover:scale-x-100
                "
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}