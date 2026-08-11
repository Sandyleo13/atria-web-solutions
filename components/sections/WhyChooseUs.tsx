"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";

const features = [
  "Business-first Strategy",
  "Modern & Scalable Technologies",
  "Performance Optimized Solutions",
  "SEO Friendly Development",
  "Long-term Technical Support",
  "Transparent Communication",
];

export function WhyChooseUs() {
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  // Dark → 1.png
  // Light → 2.jpg
  const imageSrc = isDark
    ? "/images/home/1.png"
    : "/images/home/2.jpg";

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
          eyebrow="Why Choose Atria"
          title="Building Digital Products That Drive Business Growth"
          description="We combine strategy, technology and creativity to deliver scalable digital experiences that help brands stand out."
        />

        <div className="mt-20 grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className="
                text-4xl
                font-bold
                leading-tight
                text-[var(--foreground)]
              "
            >
              More than a development team.
            </h3>

            <p
              className="
                mt-6
                text-lg
                leading-8
                text-[var(--muted)]
              "
            >
              We partner with businesses to design, build and scale
              digital products that deliver measurable results.
            </p>

            {/* Features */}

            <div className="mt-10 space-y-5">
              {features.map((feature) => (
                <motion.div
                  key={feature}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-4"
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center

                      rounded-xl

                      bg-red-50
                      dark:bg-red-500/10

                      text-red-600
                      dark:text-red-500

                      transition-all
                      duration-300
                    "
                  >
                    <CheckCircle2 size={20} />
                  </div>

                  <span
                    className="
                      text-lg
                      text-[var(--foreground)]
                    "
                  >
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}

            <Link
              href="/about"
              className="
                group

                mt-12

                inline-flex
                items-center
                gap-3

                rounded-2xl

                bg-red-600

                px-7
                py-4

                font-semibold
                text-white

                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-red-700
                hover:shadow-[0_15px_35px_rgba(239,68,68,.25)]
              "
            >
              Learn More

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              />
            </Link>
          </motion.div>

          {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Image Glow */}

            <div
              className="
                absolute
                inset-0

                rounded-[40px]

                bg-red-600/15

                blur-3xl

                dark:bg-red-600/20
              "
            />

            {/* Image Container */}

            <div
              className="
                group

                relative
                overflow-hidden

                rounded-[32px]

                border
                border-gray-200
                dark:border-white/10

                bg-white
                dark:bg-white/5

                shadow-[0_18px_40px_rgba(17,24,39,.08)]
                dark:shadow-none

                backdrop-blur-xl
              "
            >
              <Image
                key={imageSrc}
                src={imageSrc}
                alt="Atria Web Solutions Team"
                width={1200}
                height={900}
                priority={false}
                className="
                  h-full
                  w-full

                  object-cover

                  transition-transform
                  duration-700

                  group-hover:scale-105
                "
              />

              {/* Subtle image overlay */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-black/10
                  via-transparent
                  to-transparent

                  opacity-0
                  transition-opacity
                  duration-500

                  group-hover:opacity-100
                "
              />
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}