import type { Metadata } from "next";
import Image from "next/image";
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
  TrendingUp,
  Globe2,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import ReputationManagementHero from "@/components/services/ReputationManagementHero";

export const metadata: Metadata = {
  title: "Online Reputation Management | Atria Web Solutions",
  description:
    "Build, protect and strengthen your online reputation with strategic monitoring, review management, sentiment tracking and brand reputation solutions.",
};

const reputationAssets = {
  reputationMonitoring: {
    light: "/images/online/light/reputation-monitoring.png",
    dark: "/images/online/dark/reputation-monitoring.png",
  },
  reviewManagement: {
    light: "/images/online/light/review-management.png",
    dark: "/images/online/dark/review-management.png",
  },
  brandProtection: {
    light: "/images/online/light/brand-protection.png",
    dark: "/images/online/dark/brand-protection.png",
  },
  sentimentTracking: {
    light: "/images/online/light/sentiment-tracking.png",
    dark: "/images/online/dark/sentiment-tracking.png",
  },
  reviewResponse: {
    light: "/images/online/light/review-response.png",
    dark: "/images/online/dark/review-response.png",
  },
  trustBuilding: {
    light: "/images/online/light/trust-building.png",
    dark: "/images/online/dark/trust-building.png",
  },
  brandMentions: {
    light: "/images/online/light/brand-mentions.png",
    dark: "/images/online/dark/brand-mentions.png",
  },
  customerFeedback: {
    light: "/images/online/light/customer-feedback.png",
    dark: "/images/online/dark/customer-feedback.png",
  },
  reputationStrategy: {
    light: "/images/online/light/reputation-strategy.png",
    dark: "/images/online/dark/reputation-strategy.png",
  },
  onlinePresence: {
    light: "/images/online/light/online-presence.png",
    dark: "/images/online/dark/online-presence.png",
  },
};

type ReputationAsset = {
  light: string;
  dark: string;
};

function ThemeImage({
  asset,
  alt,
  width,
  height,
  className = "",
}: {
  asset: ReputationAsset;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <>
      <Image
        src={asset.light}
        alt={alt}
        width={width}
        height={height}
        sizes={`${width}px`}
        className={`${className} dark:hidden`}
      />
      <Image
        src={asset.dark}
        alt={alt}
        width={width}
        height={height}
        sizes={`${width}px`}
        className={`hidden ${className} dark:block`}
      />
    </>
  );
}

const marqueeItems = [
  { name: "Reputation Monitoring", asset: reputationAssets.reputationMonitoring },
  { name: "Review Management", asset: reputationAssets.reviewManagement },
  { name: "Brand Protection", asset: reputationAssets.brandProtection },
  { name: "Sentiment Tracking", asset: reputationAssets.sentimentTracking },
  { name: "Review Response", asset: reputationAssets.reviewResponse },
  { name: "Trust Building", asset: reputationAssets.trustBuilding },
  { name: "Brand Mentions", asset: reputationAssets.brandMentions },
  { name: "Customer Feedback", asset: reputationAssets.customerFeedback },
  { name: "Reputation Strategy", asset: reputationAssets.reputationStrategy },
  { name: "Online Presence", asset: reputationAssets.onlinePresence },
];

const services = [
  {
    icon: Search,
    title: "Reputation Monitoring",
    asset: reputationAssets.reputationMonitoring,
    description:
      "Track reviews, conversations, mentions and digital signals that can influence how customers perceive your business.",
  },
  {
    icon: Star,
    title: "Review Management",
    asset: reputationAssets.reviewManagement,
    description:
      "Create a consistent approach to monitoring customer reviews, identifying patterns and responding professionally.",
  },
  {
    icon: MessageCircle,
    title: "Response Strategy",
    asset: reputationAssets.reviewResponse,
    description:
      "Develop thoughtful responses that acknowledge customer concerns while protecting your brand voice and credibility.",
  },
  {
    icon: BarChart3,
    title: "Sentiment Tracking",
    asset: reputationAssets.sentimentTracking,
    description:
      "Understand how people are talking about your brand and identify changes in positive, negative or neutral sentiment.",
  },
  {
    icon: ShieldCheck,
    title: "Brand Protection",
    asset: reputationAssets.brandProtection,
    description:
      "Identify potential reputation risks early and create practical strategies to protect your digital presence.",
  },
  {
    icon: BadgeCheck,
    title: "Trust Building",
    asset: reputationAssets.trustBuilding,
    description:
      "Strengthen credibility by creating a consistent, transparent and trustworthy experience across digital touchpoints.",
  },
];

const solutions = [
  {
    icon: Star,
    title: "Review & Rating Management",
    asset: reputationAssets.reviewManagement,
    description:
      "Monitor customer reviews and ratings across relevant platforms while building a consistent process for handling feedback.",
  },
  {
    icon: Globe2,
    title: "Brand Mention Monitoring",
    asset: reputationAssets.brandMentions,
    description:
      "Keep track of conversations and mentions that can shape public perception of your company, products or services.",
  },
  {
    icon: MessageCircle,
    title: "Customer Response Strategy",
    asset: reputationAssets.reviewResponse,
    description:
      "Create professional response frameworks for positive feedback, concerns, complaints and sensitive situations.",
  },
  {
    icon: ShieldCheck,
    title: "Reputation Protection",
    asset: reputationAssets.brandProtection,
    description:
      "Identify potential risks early and develop practical approaches for protecting brand trust during challenging situations.",
  },
];

const reputationSignals = [
  {
    icon: Star,
    title: "Reviews",
    text: "What customers are saying",
    asset: reputationAssets.reviewManagement,
  },
  {
    icon: MessageCircle,
    title: "Conversations",
    text: "How people discuss your brand",
    asset: reputationAssets.brandMentions,
  },
  {
    icon: Search,
    title: "Search Presence",
    text: "What people discover online",
    asset: reputationAssets.onlinePresence,
  },
  {
    icon: BarChart3,
    title: "Sentiment",
    text: "How perception is changing",
    asset: reputationAssets.sentimentTracking,
  },
];

const process = [
  {
    number: "01",
    title: "Audit",
    description:
      "We assess your existing digital presence, reviews, mentions, search visibility and reputation signals.",
  },
  {
    number: "02",
    title: "Monitor",
    description:
      "We identify relevant conversations, feedback and reputation changes that deserve attention.",
  },
  {
    number: "03",
    title: "Analyze",
    description:
      "We look for recurring themes, customer sentiment and potential risks that can affect brand perception.",
  },
  {
    number: "04",
    title: "Respond",
    description:
      "We help create thoughtful responses that align with your brand voice, customer expectations and situation.",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "We identify opportunities to improve customer experience and address recurring reputation issues.",
  },
  {
    number: "06",
    title: "Strengthen",
    description:
      "We continuously build trust through consistent communication, monitoring and reputation-focused strategy.",
  },
];

const standards = [
  "Consistent brand voice",
  "Professional review responses",
  "Fast issue identification",
  "Customer-focused communication",
  "Ongoing reputation monitoring",
  "Sentiment awareness",
  "Clear reporting",
  "Proactive risk management",
];

const deliverables = [
  "Online reputation audit",
  "Review monitoring",
  "Review response strategy",
  "Brand mention monitoring",
  "Sentiment analysis",
  "Reputation reporting",
  "Customer feedback insights",
  "Crisis response planning",
  "Reputation risk assessment",
  "Trust-building strategy",
  "Brand response guidelines",
  "Ongoing reputation support",
];

export default function ReputationManagementPage() {
  return (
    <>
      <ReputationManagementHero />

      {/* Capability Marquee */}
      <section className="border-y border-[var(--border)] bg-[var(--card)] py-5">
        <Container>
          <div className="atria-service-marquee">
            <div className="atria-service-marquee-track">
              {[...marqueeItems, ...marqueeItems].map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="mx-1.5 inline-flex shrink-0 items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--background)] px-5 py-3 text-sm font-medium text-[var(--foreground)]"
                >
                  <ThemeImage
                    asset={item.asset}
                    alt=""
                    width={22}
                    height={22}
                    className="h-5 w-5 object-contain"
                  />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* What We Do */}
      <section
        id="reputation-services"
        className="bg-[var(--background)] py-24 sm:py-28"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
              What We Do
            </span>

            <h2 className="mt-7 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
              Your Reputation Is Part of Your Brand
            </h2>

            <p className="mt-5 leading-8 text-[var(--muted)]">
              We help businesses understand what people are saying online,
              respond strategically and create a stronger foundation of trust.
              Every review, mention and customer interaction can influence the
              decision to choose your business.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 shadow-[var(--shadow-md)] transition-all duration-300 hover:-translate-y-1 hover:border-red-500/20 hover:shadow-[var(--shadow-lg)]"
                >
                  <div className="flex items-center gap-4">
                    <span className="grid size-12 place-items-center rounded-xl bg-red-500/10">
                      <ThemeImage
                        asset={service.asset}
                        alt=""
                        width={30}
                        height={30}
                        className="h-7 w-7 object-contain"
                      />
                    </span>

                    <h3 className="text-lg font-bold text-[var(--foreground)]">
                      {service.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Reputation Solutions */}
      <section className="bg-[var(--card)] py-24 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
              Reputation Solutions
            </span>

            <h2 className="mt-7 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
              Build Trust Across Every Digital Touchpoint
            </h2>

            <p className="mt-5 leading-8 text-[var(--muted)]">
              Your reputation is shaped by more than reviews. We look at the
              broader digital experience and help create a consistent,
              trustworthy presence.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <article
                  key={solution.title}
                  className="group rounded-3xl border border-[var(--border)] bg-[var(--background)] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/20"
                >
                  <div className="flex items-start gap-5">
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-red-500/10">
                      <ThemeImage
                        asset={solution.asset}
                        alt=""
                        width={30}
                        height={30}
                        className="h-7 w-7 object-contain"
                      />
                    </span>

                    <div>
                      <h3 className="text-xl font-bold text-[var(--foreground)]">
                        {solution.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Reputation Strategy */}
      <section className="bg-[var(--background)] py-24 sm:py-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
                Build Trust
              </span>

              <h2 className="mt-7 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
                People Search Before
                <br />
                <span className="text-red-500">They Choose.</span>
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-[var(--muted)]">
                Reviews, search results, social conversations and customer
                feedback all contribute to the first impression people form
                about your business. A strong reputation strategy helps you
                understand these signals and respond with intention.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Understand your current reputation",
                  "Identify reputation risks early",
                  "Respond to feedback professionally",
                  "Improve customer trust",
                  "Create a consistent digital presence",
                  "Turn feedback into insights",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-red-500"
                    />

                    <span className="text-sm text-[var(--foreground)]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reputation Dashboard */}
            <div className="relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--card)] p-7 shadow-[var(--shadow-md)]">
              <div className="absolute -right-20 -top-20 size-56 rounded-full bg-red-500/10 blur-[90px]" />

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
                    <ThemeImage
                      asset={reputationAssets.reputationStrategy}
                      alt=""
                      width={30}
                      height={30}
                      className="h-7 w-7 object-contain"
                    />
                  </div>
                </div>

                {/* Score */}
                <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6">
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
                      icon: TrendingUp,
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
                        className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-4"
                      >
                        <Icon size={18} className="text-red-500" />

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

                <div className="mt-4 flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-4">
                  <div className="grid size-10 place-items-center rounded-xl bg-red-500/10">
                    <BadgeCheck size={19} className="text-red-500" />
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

      {/* Reputation Signals */}
      <section className="bg-[var(--card)] py-24 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
              What We Monitor
            </span>

            <h2 className="mt-7 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
              Understand the Signals Behind Your Reputation
            </h2>

            <p className="mt-5 leading-8 text-[var(--muted)]">
              Reputation is built from many small signals. Looking at them
              together gives your business a clearer picture of customer
              perception.
            </p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reputationSignals.map((signal) => {
              const Icon = signal.icon;

              return (
                <article
                  key={signal.title}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-red-500/20"
                >
                  <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-red-500/10">
                    <ThemeImage
                      asset={signal.asset}
                      alt=""
                      width={34}
                      height={34}
                      className="h-8 w-8 object-contain"
                    />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-[var(--foreground)]">
                    {signal.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    {signal.text}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-[var(--background)] py-24 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
              Our Process
            </span>

            <h2 className="mt-7 text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
              Protect. Improve. Strengthen.
            </h2>

            <p className="mt-5 leading-8 text-[var(--muted)]">
              Reputation management works best as an ongoing process rather
              than a one-time fix. We continuously learn from feedback and
              adapt the strategy around your business.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {process.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/20"
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
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Standards */}
      <section className="bg-[var(--card)] py-24 sm:py-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
                Our Standards
              </span>

              <h2 className="mt-7 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
                Reputation Management Built Around Trust
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-[var(--muted)]">
                Protecting your reputation is not about hiding negative
                feedback. It is about understanding customers, communicating
                responsibly and building a stronger experience over time.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {standards.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-red-500/10 text-xs font-bold text-red-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm font-medium text-[var(--foreground)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Deliverables */}
      <section className="bg-[var(--background)] py-24 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
                What You Get
              </span>

              <h2 className="mt-7 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
                A Stronger Digital Reputation
              </h2>

              <p className="mt-5 leading-8 text-[var(--muted)]">
                Practical reputation management built around your business,
                audience and long-term goals. We help turn reputation signals
                into actionable insights and stronger customer trust.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-red-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
              >
                Discuss Your Reputation
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {deliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 py-4"
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-red-500"
                  />

                  <span className="text-sm font-medium text-[var(--foreground)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[var(--background)] py-10">
        <Container>
          <div className="flex flex-col gap-6 rounded-3xl bg-red-500 p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-white/15">
                  <ShieldCheck size={20} />
                </span>

                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
                  Reputation Management
                </p>
              </div>

              <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
                Ready to Strengthen Your Online Reputation?
              </h2>

              <p className="mt-2 text-sm leading-6 text-white/80">
                Let&apos;s build a digital presence your customers can trust
                and your business can grow with confidence.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-red-500 transition hover:bg-white/90"
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