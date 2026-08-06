"use client";

import { Container } from "@/components/layout/Container";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export default function CareersHero() {
  return (
    <section className="relative overflow-hidden bg-[#050505]">
      <HeroBackground />

      <Container className="relative z-10">
        <div
          className="
            grid
            min-h-screen
            items-center

            gap-20

            pt-32
            pb-20

            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-10
            lg:pt-36
            lg:pb-24

            xl:gap-20
            xl:pt-40
          "
        >
          <HeroContent />

          <div className="relative flex items-center justify-center">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}