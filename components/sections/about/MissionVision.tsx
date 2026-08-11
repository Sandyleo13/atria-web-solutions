"use client";

import { motion } from "framer-motion";
import { Target, Rocket } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";

const cards = [
  {
    title: "Our Mission",
    icon: Target,
    description:
      "To empower startups, businesses and enterprises with scalable digital products that combine innovation, performance and exceptional user experiences.",
  },
  {
    title: "Our Vision",
    icon: Rocket,
    description:
      "To become one of India's most trusted digital product studios, delivering world-class solutions that help businesses thrive in the digital era.",
  },
];

export default function MissionVision() {
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
            top-24

            h-80
            w-[720px]

            -translate-x-1/2

            rounded-full

            bg-red-500/8
            dark:bg-red-600/10

            blur-[180px]
          "
        />
      </div>

      <Container className="relative z-10">

        <SectionHeader
          eyebrow="Our Purpose"
          title="Driven By Purpose. Powered By Innovation."
          description="Everything we build is guided by a clear mission to help businesses embrace digital transformation through thoughtful design and reliable technology."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="
                  group
                  relative
                  overflow-hidden

                  rounded-[32px]

                  border
                  border-gray-200
                  dark:border-white/10

                  bg-white
                  dark:bg-white/[0.04]

                  p-10

                  backdrop-blur-2xl

                  shadow-[0_18px_40px_rgba(17,24,39,.06)]
                  dark:shadow-none

                  transition-all
                  duration-300

                  hover:border-red-500/40
                  hover:bg-red-50
                  dark:hover:bg-red-500/5

                  hover:shadow-[0_20px_45px_rgba(239,68,68,.12)]
                "
              >
                {/* Glow */}

                <div
                  className="
                    absolute
                    right-[-80px]
                    top-[-80px]

                    h-48
                    w-48

                    rounded-full

                    bg-red-500/8
                    dark:bg-red-600/10

                    blur-[90px]

                    opacity-0
                    group-hover:opacity-100

                    transition-opacity
                    duration-500
                  "
                />

                <div className="relative z-10">

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center

                      rounded-2xl

                      bg-gradient-to-br
                      from-red-500
                      to-red-700

                      shadow-[0_12px_30px_rgba(239,68,68,.25)]

                      transition-transform
                      duration-300

                      group-hover:scale-110
                      group-hover:rotate-6
                    "
                  >
                    <Icon
                      size={30}
                      className="text-white"
                    />
                  </div>

                  <h3
                    className="
                      mt-8

                      text-3xl
                      font-bold

                      text-[var(--foreground)]
                    "
                  >
                    {card.title}
                  </h3>

                  <p
                    className="
                      mt-6

                      text-lg
                      leading-8

                      text-[var(--muted)]
                    "
                  >
                    {card.description}
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