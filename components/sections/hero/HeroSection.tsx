"use client";

import { Container } from "@/components/layout/Container";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black">
      <HeroBackground />

      <Container className="relative z-10">
        <div
          className="
            grid
            min-h-screen
            items-center

            gap-16

            pt-32
            pb-16

            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-10
            lg:pt-36
            lg:pb-20

            xl:gap-16
            xl:pt-40
          "
        >
          {/* Left Side */}

          <HeroContent />

          {/* Right Side */}

          <div className="relative flex items-center justify-center">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}