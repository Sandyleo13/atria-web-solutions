import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  FileText,
  Layers3,
  Palette,
  PenTool,
  Rocket,
  Sparkles,
  Type,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import BrandingDesignHero from "@/components/services/BrandingDesignHero";

export const metadata: Metadata = {
  title: "Branding & Design | Atria Web Solutions",
  description:
    "Build a memorable brand identity with strategic branding, visual design and creative systems from Atria Web Solutions.",
};

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description:
      "Create a distinctive visual identity that communicates who you are and what your business stands for.",
  },
  {
    icon: PenTool,
    title: "Logo Design",
    description:
      "Memorable logo concepts designed to represent your brand clearly across digital and physical touchpoints.",
  },
  {
    icon: Type,
    title: "Typography & Visual Language",
    description:
      "Thoughtful type, color and visual systems that give your brand a consistent and recognizable personality.",
  },
  {
    icon: FileText,
    title: "Brand Guidelines",
    description:
      "Clear guidelines that help your team maintain consistency as your brand grows across different platforms.",
  },
  {
    icon: Layers3,
    title: "Marketing Design",
    description:
      "Creative assets for campaigns, social media, presentations and other important customer touchpoints.",
  },
  {
    icon: Sparkles,
    title: "Creative Direction",
    description:
      "A strategic creative approach that keeps your brand visually strong, relevant and aligned with your goals.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, audience, competitors and the position you want your brand to own.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We define the creative direction, personality and visual principles that will guide the identity.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We explore concepts and transform the selected direction into a cohesive visual identity.",
  },
  {
    number: "04",
    title: "Refine",
    description:
      "We collaborate with you to refine the details and make sure every element feels right.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "Your finished identity is organized and prepared for consistent use across your brand ecosystem.",
  },
];

const deliverables = [
  "Logo & logo variations",
  "Color palette",
  "Typography system",
  "Brand guidelines",
  "Social media assets",
  "Marketing creatives",
];

export default function BrandingDesignPage() {
  return (
    <>
      <BrandingDesignHero />

      {/* What We Build */}
      <section
        id="branding-services"
        className="bg-[var(--background)] py-24 sm:py-28"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span
              className="
                inline-flex
                rounded-full
                border border-red-500/20
                bg-red-500/10
                px-4 py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-red-500
              "
            >
              What We Create
            </span>

            <h2 className="mt-7 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
              More Than Just a Logo
            </h2>

            <p className="mt-5 leading-8 text-[var(--muted)]">
              A strong brand is a complete visual experience. We build the
              pieces that make your business recognizable, consistent and
              memorable.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="
                    rounded-2xl
                    border border-[var(--border)]
                    bg-[var(--card)]
                    p-7
                    shadow-[var(--shadow-md)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-red-500/20
                    hover:shadow-[var(--shadow-lg)]
                  "
                >
                  <span className="grid size-12 place-items-center rounded-xl bg-red-500/10 text-red-500">
                    <Icon size={22} />
                  </span>

                  <h3 className="mt-6 text-lg font-bold text-[var(--foreground)]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Brand Strategy */}
      <section className="bg-[var(--card)] py-24 sm:py-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr]">
            {/* Left */}
            <div>
              <span
                className="
                  inline-flex
                  rounded-full
                  border border-red-500/20
                  bg-red-500/10
                  px-4 py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-red-500
                "
              >
                Brand Strategy
              </span>

              <h2 className="mt-7 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
                Make Your Brand
                <br />
                <span className="text-red-500">
                  Impossible to Ignore.
                </span>
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-[var(--muted)]">
                We combine strategy and creativity to create brands that are
                not only visually appealing but also meaningful to the people
                they are built for.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Clear brand positioning",
                  "Audience-focused visual direction",
                  "Consistent brand experience",
                  "Flexible design system for future growth",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={20}
                      className="shrink-0 text-red-500"
                    />

                    <span className="text-sm text-[var(--foreground)]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="relative">
              <div
                className="
                  rounded-[30px]
                  border border-[var(--border)]
                  bg-[var(--background)]
                  p-8
                  shadow-[var(--shadow-md)]
                "
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
                      Brand Framework
                    </p>

                    <h3 className="mt-3 text-2xl font-bold text-[var(--foreground)]">
                      One Identity.
                      <br />
                      Many Touchpoints.
                    </h3>
                  </div>

                  <Compass
                    size={32}
                    className="text-red-500"
                  />
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Website",
                    "Social Media",
                    "Marketing",
                    "Packaging",
                    "Presentations",
                    "Digital Products",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="
                        rounded-2xl
                        border border-[var(--border)]
                        bg-[var(--card)]
                        p-5
                      "
                    >
                      <span className="text-xs font-bold text-red-500">
                        0{index + 1}
                      </span>

                      <p className="mt-3 text-sm font-semibold text-[var(--foreground)]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-[var(--background)] py-24 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span
              className="
                inline-flex
                rounded-full
                border border-red-500/20
                bg-red-500/10
                px-4 py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-red-500
              "
            >
              Our Process
            </span>

            <h2 className="mt-7 text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
              From Concept to Identity
            </h2>

            <p className="mt-5 leading-8 text-[var(--muted)]">
              A collaborative process that turns your business story into a
              visual identity people can recognize and remember.
            </p>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-5">
            {process.map((step) => (
              <article
                key={step.number}
                className="
                  rounded-2xl
                  border border-[var(--border)]
                  bg-[var(--card)]
                  p-6
                "
              >
                <span className="text-4xl font-black text-red-500/20">
                  {step.number}
                </span>

                <h3 className="mt-5 text-lg font-bold text-[var(--foreground)]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Deliverables */}
      <section className="bg-[var(--card)] py-20">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <span
                className="
                  inline-flex
                  rounded-full
                  border border-red-500/20
                  bg-red-500/10
                  px-4 py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-red-500
                "
              >
                Deliverables
              </span>

              <h2 className="mt-6 text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
                Everything You Need to Build Your Brand
              </h2>

              <p className="mt-4 leading-7 text-[var(--muted)]">
                From your core identity to everyday marketing assets, we
                create a flexible system that keeps your brand consistent.
              </p>
            </div>

            <div className="flex max-w-xl flex-wrap gap-3">
              {deliverables.map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    border border-[var(--border)]
                    bg-[var(--background)]
                    px-4 py-2
                    text-sm
                    font-medium
                    text-[var(--foreground)]
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[var(--background)] py-10">
        <Container>
          <div
            className="
              flex
              flex-col
              gap-6
              rounded-2xl
              bg-red-500
              p-7
              text-white
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:p-8
            "
          >
            <div>
              <h2 className="text-xl font-bold">
                Ready to build a memorable brand?
              </h2>

              <p className="mt-1 text-sm text-white/80">
                Let's turn your vision into a brand people remember.
              </p>
            </div>

            <Link
              href="/contact"
              className="
                inline-flex
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-white
                px-5 py-3
                text-sm
                font-semibold
                text-red-500
                transition
                hover:bg-white/90
              "
            >
              Start Your Project
              <ArrowRight size={16} />
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}