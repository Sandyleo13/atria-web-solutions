import type { Metadata } from "next";

import ServiceHero from "@/components/services/ServiceHero";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { CallToAction } from "@/components/sections/CallToAction";

import {
  Code2,
  Layout,
  Smartphone,
  Gauge,
  Search,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Website Designing & Development | Atria Web Solutions",
  description:
    "Modern, responsive and high-performance websites designed and developed around your business goals.",
};

const features = [
  {
    icon: Layout,
    title: "Custom Website Development",
    description:
      "Tailor-made websites designed around your brand, audience and business objectives.",
  },
  {
    icon: Smartphone,
    title: "Responsive Web Design",
    description:
      "Experiences that look and work beautifully across desktops, tablets and mobile devices.",
  },
  {
    icon: Gauge,
    title: "Performance Focused",
    description:
      "Fast-loading websites optimized for usability, performance and better user experiences.",
  },
  {
    icon: Search,
    title: "SEO Ready",
    description:
      "Clean structures and technical foundations that make your website easier for search engines to understand.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description:
      "Modern development practices focused on stability, security and long-term maintainability.",
  },
  {
    icon: Code2,
    title: "Scalable Architecture",
    description:
      "Flexible solutions that can evolve as your business, content and functionality grow.",
  },
];

const process = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your business, audience, goals and technical requirements.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "We define the structure, user journeys, technology and development roadmap.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create a polished visual experience focused on usability and conversion.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Our team turns the approved design into a fast and responsive website.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "After testing and optimization, your website is prepared for launch.",
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Laravel",
  "PHP",
  "Tailwind CSS",
  "MySQL",
  "Node.js",
];

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Website Designing & Development"
        title="Websites Built to"
        highlight="Grow Your Business."
        description="We design and develop modern, responsive and high-performance websites that help businesses build credibility, engage their audience and grow online."
        points={[
          "Custom designs built around your business",
          "Responsive across every screen",
          "Performance and SEO focused",
        ]}
      />

      {/* Features */}

      <section className="bg-[var(--background)] py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
              What We Build
            </span>

            <h2 className="mt-7 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
              More Than Just a Website
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              Every website we build is designed to support your business,
              your users and your long-term goals.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="
                    rounded-[28px]
                    border
                    border-[var(--border)]
                    bg-[var(--card)]
                    p-7
                    shadow-[var(--shadow-md)]
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-red-500/30
                    hover:shadow-[var(--shadow-lg)]
                  "
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10">
                    <Icon size={25} className="text-red-500" />
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-[var(--foreground)]">
                    {feature.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[var(--muted)]">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Process */}

      <section className="bg-[var(--card)] py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
              Our Process
            </span>

            <h2 className="mt-7 text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
              From Idea to Launch
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              A clear and collaborative process keeps your project moving
              from the first conversation to the final launch.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {process.map((step) => (
              <div
                key={step.number}
                className="
                  relative
                  rounded-[26px]
                  border
                  border-[var(--border)]
                  bg-[var(--background)]
                  p-6
                "
              >
                <span className="text-4xl font-black text-red-500/20">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-[var(--foreground)]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Technologies */}

      <section className="bg-[var(--background)] py-24">
        <Container>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
                Technologies
              </span>

              <h2 className="mt-7 text-4xl font-bold text-[var(--foreground)]">
                Built With Modern Technology
              </h2>

              <p className="mt-5 leading-8 text-[var(--muted)]">
                We choose technologies based on your project's goals,
                performance requirements and long-term scalability.
              </p>
            </div>

            <div className="flex max-w-xl flex-wrap gap-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-full
                    border
                    border-[var(--border)]
                    bg-[var(--card)]
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-[var(--foreground)]
                  "
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CallToAction />

      <Footer />
    </>
  );
}