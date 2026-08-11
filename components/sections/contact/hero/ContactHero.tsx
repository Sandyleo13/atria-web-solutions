"use client";

import { Container } from "@/components/layout/Container";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export default function ContactHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#fafafa]
      "
    >
      <HeroBackground />

      <Container className="relative z-10">
        <div
          className="
            grid
            min-h-[calc(100vh-80px)]
            items-center

            gap-16

            px-0
            pt-28
            pb-16

            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-10
            lg:pt-32
            lg:pb-20

            xl:gap-20
            xl:pt-36
          "
        >
          {/* Left — Content */}

          <HeroContent />

          {/* Right — Visual */}

          <div
            className="
              relative
              flex
              min-h-[500px]
              items-center
              justify-center

              lg:min-h-[560px]
            "
          >
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}