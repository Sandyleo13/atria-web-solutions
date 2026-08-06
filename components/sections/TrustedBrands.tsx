"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { brands } from "@/data/home";

export function TrustedBrands() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-[#070707] py-20">
      {/* Background Glow */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-40 w-[700px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[140px]" />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}

        <SectionHeader
          eyebrow="Trusted By"
          title="Companies We've Worked With"
          description="We're proud to collaborate with startups, growing businesses and enterprises to build modern digital products."
        />

        {/* Brands */}

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
                border-white/10
                bg-white/[0.03]
                px-6
                py-7
                text-center
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-red-500/40
                hover:bg-red-500/5
                hover:shadow-[0_0_35px_rgba(239,68,68,.15)]
              "
            >
              <span
                className="
                  text-lg
                  font-bold
                  tracking-wide
                  text-gray-400
                  transition-colors
                  duration-300
                  group-hover:text-white
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