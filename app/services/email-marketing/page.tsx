import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  Mail,
  Megaphone,
  MousePointerClick,
  Repeat,
  Send,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import EmailMarketingHero from "@/components/services/EmailMarketingHero";

export const metadata: Metadata = {
  title: "Email Marketing | Atria Web Solutions",
  description:
    "Strategic email marketing campaigns, automation and lifecycle journeys designed to engage audiences and drive business growth.",
};

const services = [
  {
    icon: Send,
    title: "Campaign Management",
    description:
      "Plan, create and manage targeted email campaigns built around your business goals and audience.",
  },
  {
    icon: MousePointerClick,
    title: "Conversion-Focused Emails",
    description:
      "Create compelling email experiences with messaging and calls-to-action designed to encourage action.",
  },
  {
    icon: Repeat,
    title: "Email Automation",
    description:
      "Build automated journeys that engage subscribers at the right moments without constant manual effort.",
  },
  {
    icon: Users,
    title: "Lead Nurturing",
    description:
      "Turn new prospects into stronger opportunities through useful, relevant and timely communication.",
  },
  {
    icon: Megaphone,
    title: "Promotional Campaigns",
    description:
      "Promote launches, offers, events and important business updates directly to your audience.",
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    description:
      "Measure engagement and campaign performance to continuously improve your email strategy.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your business, audience, goals and existing email ecosystem.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define campaign themes, audience segments, messaging and the customer journey.",
  },
  {
    number: "03",
    title: "Create",
    description:
      "Our team develops the content, design and structure for each campaign or automated journey.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Campaigns are tested and delivered to the right audience at the right time.",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "We review performance and use insights to make future campaigns more effective.",
  },
];

const deliverables = [
  "Email campaign strategy",
  "Newsletter design",
  "Promotional campaigns",
  "Welcome sequences",
  "Lead nurturing flows",
  "Automated journeys",
  "Campaign reporting",
  "Performance optimization",
];

export default function EmailMarketingPage() {
  return (
    <>
      <EmailMarketingHero />

      {/* Services */}
      <section
        id="email-services"
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
              Email That Works Beyond the Send Button
            </h2>

            <p className="mt-5 leading-8 text-[var(--muted)]">
              From individual campaigns to complete lifecycle journeys, we
              create email systems designed to build relationships and drive
              meaningful business results.
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

      {/* Strategy */}
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
                Smarter Communication
              </span>

              <h2 className="mt-7 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
                Don't Just Send Emails.
                <br />
                <span className="text-red-500">
                  Build Relationships.
                </span>
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-[var(--muted)]">
                Your audience doesn't need more noise in their inbox. They
                need useful communication that arrives at the right moment.
                That's where a thoughtful email strategy makes the difference.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Audience segmentation",
                  "Personalized messaging",
                  "Automated customer journeys",
                  "Conversion-focused campaigns",
                  "Continuous performance improvement",
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

            {/* Right visual */}
            <div
              className="
                relative
                rounded-[30px]
                border border-[var(--border)]
                bg-[var(--background)]
                p-7
                shadow-[var(--shadow-md)]
              "
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
                    Customer Journey
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-[var(--foreground)]">
                    From Subscriber
                    <br />
                    to Customer
                  </h3>
                </div>

                <Target size={30} className="text-red-500" />
              </div>

              <div className="mt-8 space-y-3">
                {[
                  {
                    icon: Users,
                    title: "New Subscriber",
                    text: "Welcome & introduce",
                  },
                  {
                    icon: Mail,
                    title: "Engaged",
                    text: "Useful content",
                  },
                  {
                    icon: Sparkles,
                    title: "Interested",
                    text: "Relevant offer",
                  },
                  {
                    icon: Repeat,
                    title: "Returning",
                    text: "Retention journey",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title}>
                      <div
                        className="
                          flex
                          items-center
                          gap-4
                          rounded-2xl
                          border border-[var(--border)]
                          bg-[var(--card)]
                          p-4
                        "
                      >
                        <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-red-500/10">
                          <Icon size={18} className="text-red-500" />
                        </div>

                        <div className="flex-1">
                          <p className="text-sm font-semibold text-[var(--foreground)]">
                            {item.title}
                          </p>

                          <p className="mt-0.5 text-xs text-[var(--muted)]">
                            {item.text}
                          </p>
                        </div>

                        <span className="text-xs font-bold text-red-500">
                          0{index + 1}
                        </span>
                      </div>

                      {index < 3 && (
                        <div className="ml-9 h-3 w-px bg-red-500/30" />
                      )}
                    </div>
                  );
                })}
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
              From Strategy to Send
            </h2>

            <p className="mt-5 leading-8 text-[var(--muted)]">
              A structured approach that keeps your email marketing focused,
              relevant and measurable.
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
                Everything Your Email Strategy Needs
              </h2>

              <p className="mt-4 leading-7 text-[var(--muted)]">
                Build a repeatable communication system that supports your
                audience from their first interaction to long-term retention.
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
                Ready to make your emails work harder?
              </h2>

              <p className="mt-1 text-sm text-white/80">
                Let's create campaigns your audience actually wants to open.
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
              Start Your Campaign
              <ArrowRight size={16} />
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}