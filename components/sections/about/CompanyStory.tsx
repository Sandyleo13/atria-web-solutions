"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
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
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

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

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-20
            h-80
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-red-500/8
            dark:bg-red-600/10
            blur-[180px]
          "
        />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}

        <SectionHeader
          eyebrow="Our Story"
          title="Building Digital Experiences That Make an Impact"
          description="Atria Web Solutions was founded with one mission—to help businesses grow through modern design, scalable development and long-term digital partnerships."
        />

        <div className="mt-20 grid items-center gap-20 lg:grid-cols-2">

          {/* =========================================
              LEFT — IMAGE
          ========================================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Image Glow */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-[36px]
                bg-red-500/10
                blur-3xl
                dark:bg-red-600/15
              "
            />

            {/* Image Container */}

            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-gray-200
                dark:border-white/10
                bg-white
                dark:bg-white/5
                backdrop-blur-xl
                shadow-[0_18px_40px_rgba(17,24,39,.06)]
                dark:shadow-none
                transition-all
                duration-500
              "
            >
              <Image
                src={
                  isDark
                    ? "/images/about/about-page-dark.png"
                    : "/images/about/about-page-light.png"
                }
                alt="Atria Web Solutions Team"
                width={1600}
                height={1200}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="
                  h-auto
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
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
                ease: "easeInOut",
              }}
              className="
                absolute
                -bottom-8
                left-8
                rounded-2xl
                border
                border-gray-200
                dark:border-white/10
                bg-white/95
                dark:bg-black/80
                px-6
                py-4
                backdrop-blur-xl
                shadow-[0_18px_35px_rgba(17,24,39,.08)]
                dark:shadow-none
              "
            >
              <p className="text-3xl font-bold text-[var(--foreground)]">
                400+
              </p>

              <p className="mt-1 text-sm text-[var(--muted)]">
                Successful Projects
              </p>
            </motion.div>
          </motion.div>

          {/* =========================================
              RIGHT — CONTENT
          ========================================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3
              className="
                text-4xl
                font-bold
                leading-tight
                text-[var(--foreground)]
              "
            >
              More Than Just
              <span className="text-red-500">
                {" "}
                Another Agency.
              </span>
            </h3>

            <p
              className="
                mt-8
                text-lg
                leading-8
                text-[var(--muted)]
              "
            >
              We believe every business deserves a digital presence
              that not only looks exceptional but also delivers
              measurable results. Our team blends strategy,
              creativity and engineering to create products that
              customers love and businesses trust.
            </p>

            {/* Benefits */}

            <ul className="mt-10 space-y-4">
              {[
                "Client-first approach",
                "Modern scalable technologies",
                "Performance-driven development",
                "Long-term partnerships",
              ].map((item) => (
                <li
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                    text-[var(--foreground)]
                  "
                >
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-red-500"
                  />

                  {item}
                </li>
              ))}
            </ul>

            {/* Feature Cards */}

            <div className="mt-14 grid gap-5 sm:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    whileHover={{
                      y: -6,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="
                      group
                      rounded-2xl
                      border
                      border-gray-200
                      dark:border-white/10
                      bg-white
                      dark:bg-white/[0.03]
                      p-5
                      backdrop-blur-xl
                      shadow-[0_12px_28px_rgba(17,24,39,.05)]
                      dark:shadow-none
                      transition-all
                      duration-300
                      hover:border-red-500/40
                      hover:bg-red-50
                      dark:hover:bg-red-500/5
                    "
                  >
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        bg-red-50
                        dark:bg-red-500/10
                        text-red-500
                        transition-all
                        duration-300
                        group-hover:bg-red-500
                        group-hover:text-white
                      "
                    >
                      <Icon size={24} />
                    </div>

                    <h4
                      className="
                        mt-5
                        font-semibold
                        text-[var(--foreground)]
                      "
                    >
                      {feature.title}
                    </h4>

                    <p
                      className="
                        mt-3
                        text-sm
                        leading-6
                        text-[var(--muted)]
                      "
                    >
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
