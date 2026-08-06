"use client";

import { Container } from "@/components/layout/Container";

import AboutBackground from "./AboutBackground";
import AboutContent from "./AboutContent";
import AboutVisual from "./AboutVisual";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <AboutBackground />

      <Container className="relative z-10">
        <div
          className="
            grid
            min-h-[calc(100vh-96px)]
            items-center
            gap-12

            py-16

            lg:grid-cols-[1fr_1fr]
            lg:gap-10
            lg:py-0
          "
        >
          {/* Left */}

          <AboutContent />

          {/* Right */}

          <div className="relative flex items-center justify-center">
            <AboutVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}