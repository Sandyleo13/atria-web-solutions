"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/common/FadeIn";
import { services } from "@/data/services";
import { SectionHeader } from "@/components/common/SectionHeader";

export function ServicesSection() {
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

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-20

            h-72
            w-[700px]

            -translate-x-1/2

            rounded-full

            bg-red-500/8
            dark:bg-red-600/10

            blur-[160px]
          "
        />
      </div>

      <Container className="relative z-10">
        <SectionHeader
          eyebrow="What We Do"
          title="Services That Scale Businesses"
          description="We craft modern digital experiences through web development, mobile applications, UI/UX design and digital marketing."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <FadeIn key={service.title} delay={index * 0.08}>
                <motion.div
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden

                    rounded-3xl

                    border
                    border-gray-200
                    dark:border-white/10

                    bg-white
                    dark:bg-white/[0.03]

                    p-8

                    backdrop-blur-xl

                    shadow-[0_12px_30px_rgba(17,24,39,.05)]
                    dark:shadow-none

                    transition-all
                    duration-300

                    hover:border-red-500/40
                    hover:bg-red-50
                    dark:hover:bg-red-500/[0.04]

                    hover:shadow-[0_20px_45px_rgba(239,68,68,.12)]
                  "
                >
                  {/* Hover Glow */}

                  <div
                    className="
                      absolute
                      -right-10
                      -top-10

                      h-44
                      w-44

                      rounded-full

                      bg-red-500/10

                      blur-3xl

                      opacity-0

                      transition-opacity
                      duration-500

                      group-hover:opacity-100
                    "
                  />

                  {/* Icon */}

                  <div
                    className="
                      relative
                      z-10

                      flex
                      h-16
                      w-16
                      items-center
                      justify-center

                      rounded-2xl

                      bg-red-50
                      dark:bg-red-500/10

                      text-red-600
                      dark:text-red-500

                      transition-all
                      duration-300

                      group-hover:scale-110
                      group-hover:rotate-6
                    "
                  >
                    <Icon size={30} />
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      relative
                      z-10

                      mt-8

                      text-2xl
                      font-bold

                      text-[var(--foreground)]
                    "
                  >
                    {service.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      relative
                      z-10

                      mt-5

                      leading-8

                      text-[var(--muted)]
                    "
                  >
                    {service.description}
                  </p>

                  {/* Learn More */}

                  <Link
                    href={`/services/${service.slug}`}
                    className="
                      relative
                      z-10

                      mt-10

                      inline-flex
                      items-center
                      gap-2

                      font-semibold

                      text-red-600
                      dark:text-red-500

                      transition-all
                      duration-300

                      group-hover:gap-4
                    "
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </Link>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}