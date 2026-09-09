import { Container } from "@/components/layout/Container";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export default function HeroSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[var(--background)]
        contain-layout
      "
    >
      {/* Background */}
      <HeroBackground />

      <Container className="relative z-10 max-w-[1440px]">
        <div
          className="
            grid
            min-h-[100svh]
            items-center
            gap-8
            pt-28
            pb-12

            sm:gap-10
            sm:pt-32
            sm:pb-16

            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-2
            lg:pt-28

            xl:grid-cols-[0.82fr_1.18fr]
            xl:gap-6

            2xl:grid-cols-[0.8fr_1.2fr]
            2xl:gap-8
          "
        >
          {/* Content */}
          <div
            className="
              relative
              z-30
              max-w-[620px]
              lg:pr-6
              xl:pr-10
              2xl:pr-12
            "
          >
            <HeroContent />
          </div>

          {/* Visual */}
          <div
            className="
              relative
              flex
              min-w-0
              items-center
              justify-end

              lg:translate-x-4
              xl:translate-x-8
              2xl:translate-x-12
            "
          >
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}