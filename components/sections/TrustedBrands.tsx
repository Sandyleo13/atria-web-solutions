"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { brands } from "@/data/home";

export function TrustedBrands() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-24

        bg-[#FAFAFA]
        dark:bg-[#050505]

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
            top-0

            h-44
            w-[720px]

            -translate-x-1/2

            rounded-full

            bg-red-500/8
            dark:bg-red-600/12

            blur-[160px]
          "
        />
      </div>

      <Container className="relative z-10">
        <SectionHeader
          eyebrow="Trusted By"
          title="Companies We've Worked With"
          description="We're proud to collaborate with startups, growing businesses and enterprises to build modern digital products."
        />

        <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              className="
                group

                rounded-2xl

                border
                border-gray-200
                dark:border-white/10

                bg-white
                dark:bg-white/[0.03]

                px-6
                py-7

                text-center

                backdrop-blur-xl

                shadow-[0_10px_30px_rgba(17,24,39,.05)]
                dark:shadow-none

                transition-all
                duration-300

                hover:border-red-500/40
                hover:bg-red-50
                dark:hover:bg-red-500/5

                hover:shadow-[0_20px_40px_rgba(239,68,68,.12)]
              "
            >
              <span
                className="
                  text-lg
                  font-bold
                  tracking-wide

                  text-gray-700
                  dark:text-[var(--muted)]

                  transition-colors
                  duration-300

                  group-hover:text-red-600
                  dark:group-hover:text-[var(--foreground)]
                "
              >
                {brand}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}