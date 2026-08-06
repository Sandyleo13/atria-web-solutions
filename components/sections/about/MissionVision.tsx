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
    <section className="relative overflow-hidden bg-[#080808] py-28">
      <Container>
        <SectionHeader
          eyebrow="Our Purpose"
          title="Driven by Vision. Built with Purpose."
          description="Everything we build is guided by clear goals, long-term partnerships and a passion for creating meaningful digital experiences."
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
                }}
                className="
                  group
                  relative
                  overflow-hidden

                  rounded-[32px]

                  border
                  border-white/10

                  bg-white/[0.04]

                  p-10

                  backdrop-blur-2xl

                  transition-all
                  duration-300

                  hover:border-red-500/30
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

                    bg-red-600/10

                    blur-[90px]
                  "
                />

                <div
                  className="
                    relative
                    z-10
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

                      bg-gradient-to-br
                      from-red-500
                      to-red-700

                      shadow-[0_0_30px_rgba(239,68,68,.35)]
                    "
                  >
                    <Icon
                      size={30}
                      className="text-white"
                    />
                  </div>

                  <h3 className="mt-8 text-3xl font-bold text-white">
                    {card.title}
                  </h3>

                  <p className="mt-6 text-lg leading-8 text-gray-400">
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