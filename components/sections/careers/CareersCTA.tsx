"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import { Container } from "@/components/layout/Container";

export default function CareersCTA() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[var(--background)]
        py-20
        transition-colors
        duration-500
      "
    >
      {/* Subtle Background Accent */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-120px]
          top-1/2
          h-[350px]
          w-[350px]
          -translate-y-1/2
          rounded-full
          bg-red-500/[0.04]
          blur-[120px]
        "
      />

      <Container className="relative z-10">
        <div
          className="
            relative
            overflow-hidden
            rounded-[28px]

            border
            border-gray-200
            dark:border-white/10

            bg-white
            dark:bg-[#111111]

            px-7
            py-8

            shadow-[0_15px_50px_rgba(15,23,42,.06)]
            dark:shadow-none

            lg:px-10
            lg:py-9
          "
        >
          {/* Red Accent */}

          <div
            className="
              absolute
              left-0
              top-0
              h-full
              w-1
              bg-gradient-to-b
              from-red-500
              via-red-500
              to-red-300
            "
          />

          <div
            className="
              flex
              flex-col
              gap-8

              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            {/* Left Content */}

            <div className="max-w-2xl">
              <span
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-red-500/20
                  bg-red-500/10
                  px-3
                  py-1.5
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-red-600
                  dark:text-red-400
                "
              >
                Open Invitation
              </span>

              <h2
                className="
                  mt-5
                  text-3xl
                  font-bold
                  tracking-tight
                  text-gray-900
                  dark:text-white

                  lg:text-4xl
                "
              >
                Maybe your next role
                <span className="text-red-500"> starts here.</span>
              </h2>

              <p
                className="
                  mt-4
                  max-w-xl
                  text-base
                  leading-7
                  text-gray-600
                  dark:text-gray-400
                "
              >
                Don't see a position that fits? We'd still love to hear from
                talented people who want to build, learn and grow with Atria.
              </p>
            </div>

            {/* Right Actions */}

            <div
              className="
                flex
                flex-col
                gap-3

                sm:flex-row
                lg:flex-col
                xl:flex-row
              "
            >
              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2

                  rounded-full

                  bg-red-500

                  px-6
                  py-3.5

                  text-sm
                  font-semibold
                  text-white

                  shadow-[0_8px_25px_rgba(239,68,68,.18)]

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-red-600
                  hover:shadow-[0_12px_30px_rgba(239,68,68,.25)]
                "
              >
                Send Your Resume

                <ArrowRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              <a
                href="mailto:careers@atriawebsolutions.com"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2

                  rounded-full

                  border
                  border-gray-200
                  dark:border-white/10

                  bg-gray-50
                  dark:bg-white/[0.03]

                  px-5
                  py-3.5

                  text-sm
                  font-medium

                  text-gray-700
                  dark:text-gray-300

                  transition-all
                  duration-300

                  hover:border-red-500/30
                  hover:bg-red-500/5
                  hover:text-red-600
                  dark:hover:text-red-400
                "
              >
                <Mail size={16} />

                careers@atriawebsolutions.com
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}