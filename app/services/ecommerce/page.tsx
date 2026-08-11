import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CreditCard,
  LayoutDashboard,
  Package,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Zap,
} from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import EcommerceHero from "@/components/services/EcommerceHero";

export const metadata: Metadata = {
  title: "E-Commerce Solutions | Atria Web Solutions",
  description:
    "Build fast, secure and conversion-focused e-commerce websites that help your business sell online and grow.",
};

const features = [
  {
    icon: ShoppingBag,
    title: "Custom Online Stores",
    description:
      "Beautiful storefronts designed around your products, customers and business goals.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Shopping",
    description:
      "Responsive shopping experiences that feel smooth and intuitive on every device.",
  },
  {
    icon: CreditCard,
    title: "Secure Checkout",
    description:
      "Streamlined purchasing experiences designed to reduce friction and build customer trust.",
  },
  {
    icon: Package,
    title: "Product Management",
    description:
      "Flexible product, category, inventory and pricing structures that make your store easier to manage.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Track customer behaviour, sales performance and important store metrics.",
  },
  {
    icon: Zap,
    title: "Performance Focused",
    description:
      "Fast-loading storefronts built to improve usability, search visibility and conversions.",
  },
];

const process = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your products, customers, competitors and e-commerce goals.",
  },
  {
    number: "02",
    title: "Store Strategy",
    description:
      "We plan the store structure, customer journey, features and technology.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create a clean shopping experience focused on trust, usability and conversion.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Your store is developed, integrated and tested across devices and browsers.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "After final testing and optimization, your store is prepared to go live.",
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Laravel",
  "PHP",
  "MySQL",
  "Node.js",
  "Tailwind CSS",
];

const reasons = [
  "Conversion-focused user experiences",
  "Responsive across mobile, tablet and desktop",
  "Secure and scalable architecture",
  "Performance and SEO considerations from the start",
];

export default function EcommercePage() {
  return (
    <>
      <EcommerceHero />

      {/* What We Build */}
      <section
        id="ecommerce-features"
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
              More Than Just an Online Store
            </h2>

            <p className="mt-5 leading-8 text-[var(--muted)]">
              Your e-commerce website should do more than display products.
              It should create confidence, remove friction and help turn
              visitors into customers.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
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
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {feature.description}
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
                Built to Sell
              </span>

              <h2 className="mt-7 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
                Every Detail Has a Purpose.
              </h2>

              <p className="mt-5 leading-8 text-[var(--muted)]">
                From the first product view to the final checkout, we focus
                on creating an experience that is simple, trustworthy and
                designed around your customers.
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
                Discuss Your Store
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
              From Product Idea to First Sale
            </h2>

            <p className="mt-5 leading-8 text-[var(--muted)]">
              A clear process keeps your store moving from strategy to launch
              without unnecessary complexity.
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

      {/* Technologies */}
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
                We choose technologies based on your store's requirements,
                performance goals and long-term scalability.
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
                Ready to build your online store?
              </h2>

              <p className="mt-1 text-sm text-white/80">
                Let's create an e-commerce experience your customers will love.
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