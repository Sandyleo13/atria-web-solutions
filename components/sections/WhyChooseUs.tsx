"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] py-28"
    >
      {/* Background Glow */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-20 h-80 w-[700px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[180px]" />
      </div>

      <Container className="relative z-10">

        <SectionHeader
          eyebrow="Why Choose Atria"
          title="Building Digital Products That Drive Business Growth"
          description="We combine strategy, technology and creativity to deliver scalable digital experiences that help brands stand out."
        />

        <div className="mt-20 grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >

            <h3 className="text-4xl font-bold leading-tight text-white">
              More than a development team.
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              We partner with businesses to design, build and scale
              digital products that deliver measurable results.
            </p>

            <div className="mt-10 space-y-5">

              {features.map((feature) => (

                <motion.div
                  key={feature}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                    <CheckCircle2 size={20} />
                  </div>

                  <span className="text-lg text-gray-300">
                    {feature}
                  </span>

                </motion.div>

              ))}

            </div>

            <Link
              href="/about"
              className="
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
                hover:bg-red-700
              "
            >
              Learn More
              <ArrowRight size={18} />
            </Link>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="relative"
          >

            {/* Glow */}

            <div className="absolute inset-0 rounded-[40px] bg-red-600/15 blur-3xl" />

            {/* Image */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
              "
            >
              <Image
                src="/images/home/why-choose-us.png"
                alt="Atria Web Solutions Team"
                width={1200}
                height={900}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />
            </div>

          </motion.div>

        </div>

      </Container>
    </section>
  );
}