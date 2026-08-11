import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Gauge,
  Layers3,
  Lock,
  Palette,
  Rocket,
  Smartphone,
  TabletSmartphone,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import MobileAppHero from "@/components/services/MobileAppHero";

export const metadata: Metadata = {
  title: "Mobile App Development | Atria Web Solutions",
  description:
    "Custom mobile application development focused on performance, usability, scalability and great digital experiences.",
};

const services = [
  {
    icon: Smartphone,
    title: "Custom Mobile Apps",
    description:
      "Purpose-built mobile applications designed around your users, workflows and business objectives.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description:
      "Clean and intuitive interfaces that make your application easy and enjoyable to use.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Fast, responsive applications optimized for smooth interactions and reliable performance.",
  },
  {
    icon: Lock,
    title: "Secure Applications",
    description:
      "Security-conscious development practices that help protect your application and user data.",
  },
  {
    icon: Layers3,
    title: "Scalable Architecture",
    description:
      "Flexible application foundations that can evolve as your users, features and business grow.",
  },
  {
    icon: Rocket,
    title: "App Launch Support",
    description:
      "From testing and optimization to deployment preparation, we help get your application ready.",
  },
];

const process = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your users, business requirements, features and the problem your application needs to solve.",
  },
  {
    number: "02",
    title: "UX & Planning",
    description:
      "We map user journeys, define the application structure and create a clear development roadmap.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We transform the product idea into a polished interface designed around usability and consistency.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Our team builds the application with a focus on quality, performance, security and scalability.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "After testing and optimization, we prepare the application for release and future improvements.",
  },
];

const technologies = [
  "React Native",
  "Flutter",
  "React",
  "Next.js",
  "Node.js",
  "Laravel",
  "PHP",
  "MySQL",
];

const reasons = [
  "User-focused product experiences",
  "Performance-first development",
  "Scalable technical architecture",
  "Ongoing support after launch",
];

export default function MobileAppDevelopmentPage() {
  return (
    <>
      <MobileAppHero />

      {/* What We Build */}
      <section
        id="mobile-app-services"
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
              What We Build
            </span>

            <h2 className="mt-7 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
              More Than Just a Mobile App
            </h2>

            <p className="mt-5 leading-8 text-[var(--muted)]">
              Every application we build is designed to support your users,
              your business and your long-term product goals.
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
                Built Around Your Users.
              </h2>

              <p className="mt-5 leading-8 text-[var(--muted)]">
                A successful application is more than a collection of
                features. We focus on creating experiences that are intuitive,
                reliable and capable of growing with your business.
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
                Build Your App
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
              From Idea to App Store
            </h2>

            <p className="mt-5 leading-8 text-[var(--muted)]">
              A clear and collaborative process keeps your application moving
              from the first idea to a launch-ready product.
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

      {/* Technology */}
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
                Technologies
              </span>

              <h2 className="mt-6 text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
                Built With Modern Technology
              </h2>

              <p className="mt-4 leading-7 text-[var(--muted)]">
                We select technologies based on your application's
                requirements, performance needs and long-term scalability.
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
                Have an app idea?
              </h2>

              <p className="mt-1 text-sm text-white/80">
                Let's turn your idea into a product people love to use.
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