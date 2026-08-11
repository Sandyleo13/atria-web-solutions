"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Rocket,
  Users,
  LifeBuoy,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";

const reasons = [
  {
    title: "Complete Transparency",
    icon: ShieldCheck,
    description:
      "Clear communication, regular updates and honest project timelines.",
  },
  {
    title: "Scalable Solutions",
    icon: Rocket,
    description:
      "Products built with modern technologies that grow alongside your business.",
  },
  {
    title: "Client Partnership",
    icon: Users,
    description:
      "We don't just deliver projects—we build long-term relationships with our clients.",
  },
  {
    title: "Reliable Support",
    icon: LifeBuoy,
    description:
      "From launch to future improvements, we're here whenever you need us.",
  },
];

export default function WhyChooseAtria() {
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
          eyebrow="Why Choose Us"
          title="More Than a Development Partner"
          description="We combine strategy, creativity and engineering to deliver digital solutions that create measurable business value."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="
                  group

                  rounded-3xl

                  border
                  border-gray-200
                  dark:border-white/10

                  bg-white
                  dark:bg-white/[0.04]

                  p-8

                  backdrop-blur-xl

                  shadow-[0_16px_40px_rgba(17,24,39,.06)]
                  dark:shadow-none

                  transition-all
                  duration-300

                  hover:border-red-500/40
                  hover:bg-red-50
                  dark:hover:bg-red-500/5

                  hover:shadow-[0_22px_45px_rgba(239,68,68,.12)]
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center

                    rounded-2xl

                    bg-gradient-to-br
                    from-red-500
                    to-red-700

                    shadow-[0_10px_25px_rgba(239,68,68,.25)]

                    transition-transform
                    duration-300

                    group-hover:scale-110
                    group-hover:rotate-6
                  "
                >
                  <Icon
                    className="text-white"
                    size={26}
                  />
                </div>

                <h3
                  className="
                    mt-6

                    text-2xl
                    font-bold

                    text-[var(--foreground)]
                  "
                >
                  {reason.title}
                </h3>

                <p
                  className="
                    mt-4

                    leading-7

                    text-[var(--muted)]
                  "
                >
                  {reason.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}