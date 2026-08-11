"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { testimonials } from "@/data/home";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";

import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const previous = () => {
    setDirection(-1);

    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const next = () => {
    setDirection(1);

    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  /*
   * ==========================================
   * AUTOMATIC TESTIMONIAL SCROLL
   * ==========================================
   */

  useEffect(() => {
    if (isPaused || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setDirection(1);

      setCurrent((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  /*
   * ==========================================
   * SLIDE ANIMATION
   * ==========================================
   */

  const variants = {
    enter: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
    }),

    center: {
      opacity: 1,
      x: 0,
    },

    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -100 : 100,
    }),
  };

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
      {/* =====================================
          BACKGROUND GLOW
      ====================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-0

            h-[600px]
            w-[600px]

            -translate-x-1/2

            rounded-full

            bg-red-600/10

            blur-[180px]
          "
        />
      </div>

      <Container className="relative z-10">

        {/* =====================================
            SECTION HEADER
        ====================================== */}

        <SectionHeader
          eyebrow="Testimonials"
          title="Trusted By Businesses That Expect More"
          description="Our clients value long-term partnerships, transparent communication and solutions built to perform."
        />

        {/* =====================================
            TESTIMONIAL SLIDER
        ====================================== */}

        <div
          className="
            relative
            mt-20
            overflow-hidden
          "
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence
            mode="wait"
            custom={direction}
          >
            <motion.div
              key={testimonials[current].id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <TestimonialCard
                testimonial={testimonials[current]}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* =====================================
            NAVIGATION
        ====================================== */}

        <div className="mt-12 flex items-center justify-center gap-5">

          {/* Previous */}

          <button
            type="button"
            onClick={previous}
            aria-label="Previous testimonial"
            className="
              group

              flex
              h-12
              w-12
              items-center
              justify-center

              rounded-full

              border
              border-[var(--border)]

              bg-[var(--card)]

              text-[var(--foreground)]

              shadow-sm

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-red-500
              hover:bg-red-500
              hover:text-white
              hover:shadow-[0_10px_25px_rgba(239,68,68,.20)]
            "
          >
            <ChevronLeft
              size={20}
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            />
          </button>

          {/* Indicators */}

          <div className="flex items-center gap-2.5">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`
                  h-2
                  rounded-full

                  transition-all
                  duration-500

                  ${
                    current === index
                      ? "w-8 bg-red-500"
                      : "w-2 bg-gray-300 hover:bg-red-300 dark:bg-white/20 dark:hover:bg-red-500/50"
                  }
                `}
              />
            ))}
          </div>

          {/* Next */}

          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="
              group

              flex
              h-12
              w-12
              items-center
              justify-center

              rounded-full

              border
              border-[var(--border)]

              bg-[var(--card)]

              text-[var(--foreground)]

              shadow-sm

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-red-500
              hover:bg-red-500
              hover:text-white
              hover:shadow-[0_10px_25px_rgba(239,68,68,.20)]
            "
          >
            <ChevronRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </button>

        </div>
      </Container>
    </section>
  );
}