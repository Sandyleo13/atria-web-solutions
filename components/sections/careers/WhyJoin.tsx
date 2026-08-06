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
    <section className="bg-[#080808] py-28">
      <Container>
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
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
              text-red-500
            "
          >
            Why Join Atria
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white lg:text-6xl">
            More Than Just a Job
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            At Atria, you'll work on meaningful projects, collaborate with
            talented people and continue growing your technical and creative
            skills every day.
          </p>
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
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  rounded-[30px]
                  border
                  border-white/10
                  bg-[#111111]
                  p-8
                  transition-all
                  duration-300

                  hover:border-red-500/30
                  hover:shadow-[0_20px_60px_rgba(229,57,53,.18)]
                "
              >
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-red-500/10
                  "
                >
                  <Icon
                    size={28}
                    className="text-red-500"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}