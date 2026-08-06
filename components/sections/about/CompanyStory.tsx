"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Lightbulb,
  Rocket,
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";

const features = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We combine creativity and technology to build modern digital experiences.",
  },
  {
    icon: Rocket,
    title: "Growth Focused",
    description:
      "Every project is designed with business growth, performance and scalability in mind.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Delivery",
    description:
      "Transparent communication and quality execution from discovery to deployment.",
  },
];

export default function CompanyStory() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-28">
      <Container>

        <SectionHeader
          eyebrow="Our Story"
          title="Building Digital Experiences That Make an Impact"
          description="Atria Web Solutions was founded with one mission—to help businesses grow through modern design, scalable development and long-term digital partnerships."
        />

        <div className="mt-20 grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">

              <Image
                src="/images/about/company-story.png"
                alt="Atria Web Solutions Team"
                width={1600}
                height={1200}
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

            </div>

            {/* Floating Badge */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
                absolute
                -bottom-8
                left-8

                rounded-2xl

                border
                border-white/10

                bg-black/80

                px-6
                py-4

                backdrop-blur-xl
              "
            >
              <p className="text-3xl font-bold text-white">
                50+
              </p>

              <p className="mt-1 text-sm text-gray-400">
                Successful Projects
              </p>
            </motion.div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >
            <h3 className="text-4xl font-bold text-white">
              More Than Just
              <span className="text-red-500"> Another Agency.</span>
            </h3>

            <p className="mt-8 text-lg leading-8 text-gray-400">
              We believe every business deserves a digital presence
              that not only looks exceptional but also delivers
              measurable results. Our team blends strategy,
              creativity and engineering to create products that
              customers love and businesses trust.
            </p>

            <ul className="mt-10 space-y-4">
              {[
                "Client-first approach",
                "Modern scalable technologies",
                "Performance-driven development",
                "Long-term partnerships",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-white"
                >
                  <CheckCircle2
                    size={20}
                    className="text-red-500"
                  />

                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-14 grid gap-5 sm:grid-cols-3">

              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="
                      rounded-2xl

                      border
                      border-white/10

                      bg-white/[0.03]

                      p-5

                      backdrop-blur-xl

                      transition-all
                      duration-300

                      hover:border-red-500/30
                      hover:bg-red-500/5
                    "
                  >
                    <Icon
                      className="text-red-500"
                      size={26}
                    />

                    <h4 className="mt-5 font-semibold text-white">
                      {feature.title}
                    </h4>

                    <p className="mt-3 text-sm leading-6 text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                );
              })}

            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}