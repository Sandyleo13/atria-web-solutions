import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileSearch,
  Globe,
  Megaphone,
  Search,
  Share2,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import SeoMarketingHero from "@/components/services/SeoMarketingHero";

export const metadata: Metadata = {
  title: "SEO & Digital Marketing | Atria Web Solutions",
  description:
    "Improve your online visibility, attract qualified traffic and grow your business with SEO and digital marketing solutions.",
};

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    description:
      "Technical and content-focused SEO strategies designed to improve your visibility across search engines.",
  },
  {
    icon: FileSearch,
    title: "Keyword Strategy",
    description:
      "Research the searches that matter to your business and build content around real customer intent.",
  },
  {
    icon: Globe,
    title: "Local SEO",
    description:
      "Improve your visibility in local search and help nearby customers discover your business.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Build a consistent social presence that connects your brand with the people who matter.",
  },
  {
    icon: Megaphone,
    title: "Digital Campaigns",
    description:
      "Plan and execute focused campaigns designed around awareness, traffic and conversions.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Track meaningful performance metrics so decisions are based on data rather than assumptions.",
  },
];

const process = [
  {
    number: "01",
    title: "Audit",
    description:
      "We evaluate your current website, search visibility, content and digital presence.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We identify opportunities and create a practical roadmap around your business goals.",
  },
  {
    number: "03",
    title: "Optimize",
    description:
      "We improve technical SEO, content, pages and other important digital touchpoints.",
  },
  {
    number: "04",
    title: "Promote",
    description:
      "We use relevant content and digital channels to increase reach and engagement.",
  },
  {
    number: "05",
    title: "Measure",
    description:
      "We monitor performance and use the results to continuously improve the strategy.",
  },
];

const technologies = [
  "Google Analytics",
  "Google Search Console",
  "Google Business Profile",
  "SEMrush",
  "Ahrefs",
  "Next.js",
  "React",
  "WordPress",
];

const reasons = [
  "Strategies aligned with your business goals",
  "Technical and content-focused SEO",
  "Clear performance tracking and reporting",
  "Focused on sustainable long-term growth",
];

export default function SeoDigitalMarketingPage() {
  return (
    <>
      <SeoMarketingHero />

      {/* Services */}
      <section
        id="seo-services"
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
              What We Do
            </span>

            <h2 className="mt-7 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
              Digital Growth That Has a Purpose
            </h2>

            <p className="mt-5 leading-8 text-[var(--muted)]">
              Visibility is only the beginning. We focus on bringing the right
              people to your business and creating opportunities for them to
              take action.
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
                    border
                    border-[var(--border)]
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

      {/* Why Atria */}
      <section className="bg-[var(--card)] py-24 sm:py-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
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
                Why Atria
              </span>

              <h2 className="mt-7 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
                Growth You Can Actually Measure.
              </h2>

              <p className="mt-5 leading-8 text-[var(--muted)]">
                We don't believe in chasing vanity metrics. Our approach
                focuses on meaningful visibility, qualified traffic and
                measurable business outcomes.
              </p>

              <Link
                href="/contact"
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-red-500
                  px-7 py-3.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-red-600
                "
              >
                Grow Your Business
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="
                    rounded-2xl
                    border
                    border-[var(--border)]
                    bg-[var(--background)]
                    p-6
                  "
                >
                  <CheckCircle2
                    size={21}
                    className="text-red-500"
                  />

                  <p className="mt-5 leading-7 text-[var(--foreground)]">
                    {reason}
                  </p>
                </div>
              ))}
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
              From Visibility to Growth
            </h2>

            <p className="mt-5 leading-8 text-[var(--muted)]">
              A structured approach helps us understand where you are, identify
              opportunities and keep improving over time.
            </p>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-5">
            {process.map((step) => (
              <article
                key={step.number}
                className="
                  rounded-2xl
                  border
                  border-[var(--border)]
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

      {/* Technologies / Tools */}
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
                Tools & Technology
              </span>

              <h2 className="mt-6 text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
                Decisions Backed by Data
              </h2>

              <p className="mt-4 leading-7 text-[var(--muted)]">
                We use a combination of analytics, search tools and modern web
                technologies to understand performance and identify growth
                opportunities.
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
                    bg-[var(--background)]
                    px-4 py-2
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
                Ready to grow your online presence?
              </h2>

              <p className="mt-1 text-sm text-white/80">
                Let's build a digital strategy around your goals.
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