"use client";

import { Container } from "@/components/layout/Container";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)]">
      <HeroBackground />

      <Container className="relative z-10 max-w-[1440px]">
        <div
          className="
            grid
            min-h-screen
            items-center

            pt-32
            pb-16

            gap-12

            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-4

            xl:grid-cols-[0.82fr_1.18fr]
            xl:gap-8

            2xl:grid-cols-[0.8fr_1.2fr]
            2xl:gap-10
          "
        >
          {/* Left */}

          <div
            className="
              relative
              z-30

              max-w-[620px]

              lg:pr-8
              xl:pr-14
            "
          >
            <HeroContent />
          </div>

          {/* Right */}

          <div
            className="
              relative

              flex
              items-center
              justify-end

              overflow-visible

              lg:translate-x-8
              xl:translate-x-14
              2xl:translate-x-20
            "
          >
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}