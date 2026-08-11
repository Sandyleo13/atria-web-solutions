"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Laptop,
  Users,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/layout/Container";

const benefits = [
  {
    icon: GraduationCap,
    title: "Growth & Learning",
    description:
      "Learn continuously through real client projects, mentorship and hands-on experience with modern technologies.",
  },
  {
    icon: Laptop,
    title: "Modern Technologies",
    description:
      "Work with Next.js, Laravel, React, TypeScript and the latest tools to build high-quality digital products.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "We believe the best products are built through teamwork, open communication and shared ideas.",
  },
  {
    icon: Sparkles,
    title: "Meaningful Impact",
    description:
      "Every project you contribute to helps businesses grow and creates real value for our clients.",
  },
];

export default function WhyJoin() {
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
          top-0
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-red-500/[0.04]
          blur-[140px]
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
            Why Join Atria
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
            More Than Just a Job
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
            At Atria, you'll work on meaningful projects, collaborate with
            talented people and continue growing your technical and creative
            skills every day.
          </p>

          {/* Divider */}

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

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]

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
                {/* Card Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-red-500/[0.06]
                    blur-[70px]
                    transition-opacity
                    duration-300
                    group-hover:bg-red-500/[0.10]
                  "
                />

                <div className="relative z-10">
                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-red-500/10
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    <Icon
                      size={28}
                      className="text-red-600 dark:text-red-500"
                    />
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      mt-8
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
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      mt-5
                      leading-8
                      text-gray-600
                      dark:text-gray-400
                    "
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}