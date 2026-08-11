import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  Eye,
  MessageCircle,
  Search,
  ShieldCheck,
  Star,
  Target,
  Users,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import ReputationManagementHero from "@/components/services/ReputationManagementHero";

export const metadata: Metadata = {
  title: "Online Reputation Management | Atria Web Solutions",
  description:
    "Build, protect and strengthen your online reputation with strategic monitoring, review management and brand reputation solutions.",
};

const services = [
  {
    icon: Search,
    title: "Reputation Monitoring",
    description:
      "Keep track of conversations, reviews and mentions that can influence how people perceive your brand.",
  },
  {
    icon: Star,
    title: "Review Management",
    description:
      "Build a consistent process for monitoring customer reviews and responding to feedback professionally.",
  },
  {
    icon: MessageCircle,
    title: "Response Strategy",
    description:
      "Develop thoughtful responses that acknowledge customer concerns while protecting your brand voice.",
  },
  {
    icon: BarChart3,
    title: "Sentiment Tracking",
    description:
      "Understand whether conversations around your brand are becoming more positive, negative or neutral.",
  },
  {
    icon: ShieldCheck,
    title: "Brand Protection",
    description:
      "Identify reputation risks early and create practical strategies to protect your digital presence.",
  },
  {
    icon: BadgeCheck,
    title: "Trust Building",
    description:
      "Strengthen credibility by creating a consistent and trustworthy experience across digital touchpoints.",
  },
];

const process = [
  {
    number: "01",
    title: "Audit",
    description:
      "We assess your existing digital presence, reviews, mentions and reputation signals.",
  },
  {
    number: "02",
    title: "Monitor",
    description:
      "We identify relevant conversations and reputation changes that deserve attention.",
  },
  {
    number: "03",
    title: "Respond",
    description:
      "We help create thoughtful responses that align with your brand and situation.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "We identify recurring issues and opportunities to improve customer perception.",
  },
  {
    number: "05",
    title: "Strengthen",
    description:
      "We continuously build trust through consistent communication and reputation management.",
  },
];

const deliverables = [
  "Online reputation audit",
  "Review monitoring",
  "Review response strategy",
  "Brand mention monitoring",
  "Sentiment analysis",
  "Reputation reporting",
  "Crisis response planning",
  "Trust-building strategy",
];

export default function ReputationManagementPage() {
  return (
    <>
      <ReputationManagementHero />

      {/* Services */}
      <section
        id="reputation-services"
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
              Your Reputation Is Part of Your Brand
            </h2>

            <p className="mt-5 leading-8 text-[var(--muted)]">
              We help businesses understand what people are saying online,
              respond strategically and create a stronger foundation of trust.
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

      {/* Reputation Strategy */}
      <section className="bg-[var(--card)] py-24 sm:py-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
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
                Build Trust
              </span>

              <h2 className="mt-7 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
                People Search Before
                <br />
                <span className="text-red-500">
                  They Choose.
                </span>
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-[var(--muted)]">
                Reviews, search results, social conversations and customer
                feedback all contribute to the first impression people form
                about your business.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Understand your current reputation",
                  "Identify reputation risks early",
                  "Respond to feedback professionally",
                  "Improve customer trust",
                  "Create a consistent digital presence",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
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

            {/* Right Visual */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border border-[var(--border)]
                bg-[var(--background)]
                p-7
                shadow-[var(--shadow-md)]
              "
            >
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-red-500/10 blur-[90px]" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
                      Reputation Overview
                    </p>

                    <h3 className="mt-3 text-2xl font-bold text-[var(--foreground)]">
                      Brand Health
                    </h3>
                  </div>

                  <div className="grid size-12 place-items-center rounded-2xl bg-red-500/10">
                    <ShieldCheck
                      size={23}
                      className="text-red-500"
                    />
                  </div>
                </div>

                {/* Score */}
                <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs text-[var(--muted)]">
                        Reputation Score
                      </p>

                      <p className="mt-2 text-5xl font-black text-[var(--foreground)]">
                        92
                      </p>
                    </div>

                    <span className="rounded-full bg-red-500/10 px-3 py-1.5 text-xs font-semibold text-red-500">
                      Strong
                    </span>
                  </div>

                  <div className="mt-6 h-3 overflow-hidden rounded-full bg-[var(--foreground)]/10">
                    <div className="h-full w-[92%] rounded-full bg-red-500" />
                  </div>
                </div>

                {/* Metrics */}
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {[
                    {
                      icon: Star,
                      value: "4.8",
                      label: "Reviews",
                    },
                    {
                      icon: MessageCircle,
                      value: "+32%",
                      label: "Sentiment",
                    },
                    {
                      icon: Eye,
                      value: "24/7",
                      label: "Monitoring",
                    },
                  ].map((metric) => {
                    const Icon = metric.icon;

                    return (
                      <div
                        key={metric.label}
                        className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4"
                      >
                        <Icon
                          size={18}
                          className="text-red-500"
                        />

                        <p className="mt-4 text-xl font-bold text-[var(--foreground)]">
                          {metric.value}
                        </p>

                        <p className="mt-1 text-xs text-[var(--muted)]">
                          {metric.label}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4">
                  <div className="grid size-10 place-items-center rounded-xl bg-red-500/10">
                    <BadgeCheck
                      size={19}
                      className="text-red-500"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[var(--foreground)]">
                      Reputation signals monitored
                    </p>

                    <p className="mt-1 text-xs text-[var(--muted)]">
                      Reviews, mentions & customer sentiment
                    </p>
                  </div>
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
              Protect. Improve. Strengthen.
            </h2>

            <p className="mt-5 leading-8 text-[var(--muted)]">
              Reputation management works best as an ongoing process rather
              than a one-time fix.
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
                What You Get
              </span>

              <h2 className="mt-6 text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
                A Stronger Digital Reputation
              </h2>

              <p className="mt-4 leading-7 text-[var(--muted)]">
                Practical reputation management built around your business,
                audience and long-term goals.
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
                Ready to strengthen your online reputation?
              </h2>

              <p className="mt-1 text-sm text-white/80">
                Let's build a digital presence your customers can trust.
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
              Protect Your Brand
              <ArrowRight size={16} />
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}