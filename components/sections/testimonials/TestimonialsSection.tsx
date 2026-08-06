"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { testimonials } from "@/data/home";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";

import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const previous = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const next = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#070707] py-28"
    >
      {/* Background Glow */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[180px]" />
      </div>

      <Container className="relative z-10">

        <SectionHeader
          eyebrow="Testimonials"
          title="Trusted By Businesses That Expect More"
          description="Our clients value long-term partnerships, transparent communication and solutions built to perform."
        />

        <div className="mt-20">

          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[current].id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.45 }}
            >
              <TestimonialCard
                testimonial={testimonials[current]}
              />
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Navigation */}

        <div className="mt-12 flex items-center justify-center gap-4">

          <button
            onClick={previous}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center

              rounded-full

              border
              border-white/10

              bg-white/5

              text-white

              transition-all

              hover:border-red-500/40
              hover:bg-red-500/10
            "
          >
            <ChevronLeft size={20} />
          </button>

          {/* Indicators */}

          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all ${
                  current === index
                    ? "w-8 bg-red-500"
                    : "w-2 bg-white/20"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center

              rounded-full

              border
              border-white/10

              bg-white/5

              text-white

              transition-all

              hover:border-red-500/40
              hover:bg-red-500/10
            "
          >
            <ChevronRight size={20} />
          </button>

        </div>

      </Container>
    </section>
  );
}