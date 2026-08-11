"use client";

import { Container } from "@/components/layout/Container";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export default function CareersHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[var(--background)]
        transition-colors
        duration-500
      "
    >
      <HeroBackground />

      <Container className="relative z-10">
        <div
          className="
            grid
            min-h-[calc(100vh-96px)]
            items-center
            gap-12

            px-0
            pt-32
            pb-16

            lg:grid-cols-[1fr_0.9fr]
            lg:gap-8
            lg:pt-36
            lg:pb-20

            xl:grid-cols-[1fr_1fr]
            xl:gap-12
          "
        >
          {/* LEFT */}

          <div className="relative z-30">
            <HeroContent />
          </div>

          {/* RIGHT */}

          <div
            className="
              relative
              z-10
              flex
              min-h-[520px]
              items-center
              justify-center

              lg:min-h-[600px]
            "
          >
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}