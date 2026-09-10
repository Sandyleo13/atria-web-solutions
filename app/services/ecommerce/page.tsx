import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CreditCard,
  Globe,
  Layers3,
  Package,
  Search,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Store,
  Truck,
  Users,
  Zap,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { CallToAction } from "@/components/sections/CallToAction";
import EcommerceHero from "@/components/services/EcommerceHero";

export const metadata: Metadata = {
  title: "E-Commerce Solutions | Atria Web Solutions",
  description:
    "Build fast, secure and conversion-focused e-commerce websites designed to attract customers, simplify shopping and grow online sales.",
};

/* ==========================================================================
   E-COMMERCE IMAGES
   ========================================================================== */

const ecommerceImages = {
  ecommerceSolutions: {
    light: "/images/ecommerce/light%20images/ecommerce-solutions.png",
    dark: "/images/ecommerce/Dark/ecommerce-solutions.png",
  },
  builtToSell: {
    light: "/images/ecommerce/light%20images/built-to-sell.png",
    dark: "/images/ecommerce/Dark/built-to-sell.png",
  },
  storefront: {
    light: "/images/ecommerce/light%20images/storefront.png",
    dark: "/images/ecommerce/Dark/storefront.png",
  },
  checkout: {
    light: "/images/ecommerce/light%20images/checkout.png",
    dark: "/images/ecommerce/Dark/checkout.png",
  },
  storeManagement: {
  light: "/images/ecommerce/light%20images/store-management.png",
  dark: "/images/ecommerce/Dark/store-management.png",
},
  analytics: {
    light: "/images/ecommerce/light%20images/analytics.png",
    dark: "/images/ecommerce/Dark/analytics.png",
  },
};

/* ==========================================================================
   FEATURES
   ========================================================================== */

const features = [
  {
    icon: ShoppingBag,
    title: "Custom Online Stores",
    description:
      "We build branded e-commerce experiences around your products, customers, business model and growth goals instead of forcing your business into a generic template.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Shopping",
    description:
      "Customers shop from every type of device. We create responsive storefronts that make browsing, product discovery and checkout effortless on mobile, tablet and desktop.",
  },
  {
    icon: CreditCard,
    title: "Secure Checkout",
    description:
      "We design streamlined checkout experiences that reduce unnecessary steps, build trust and make it easier for customers to complete their purchases.",
  },
  {
    icon: Package,
    title: "Products & Inventory",
    description:
      "Flexible product, category, pricing, inventory and order structures make it easier for your team to manage a growing online catalogue.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Track important customer and store activity so your business can understand what is working and make better decisions using real data.",
  },
  {
    icon: Zap,
    title: "Performance Focused",
    description:
      "Fast storefronts, optimized images and efficient architecture create smoother shopping experiences while supporting search visibility and conversions.",
  },
];

/* ==========================================================================
   E-COMMERCE SOLUTIONS
   ========================================================================== */

const solutions = [
  {
    icon: Store,
    title: "D2C Online Stores",
    description:
      "Build a direct-to-consumer storefront that gives your brand complete control over product presentation, customer experience and online sales.",
  },
  {
    icon: Globe,
    title: "Multi-Category Stores",
    description:
      "Organize large product catalogues with intuitive categories, search, filters and shopping journeys designed to help customers find what they need.",
  },
  {
    icon: Users,
    title: "B2B E-Commerce",
    description:
      "Create professional purchasing platforms for businesses with customer-specific pricing, product structures and scalable workflows.",
  },
  {
    icon: Layers3,
    title: "Custom Commerce Platforms",
    description:
      "When standard storefronts aren't enough, we develop custom commerce experiences around your unique processes and business requirements.",
  },
];

/* ==========================================================================
   PROCESS
   ========================================================================== */

const process = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your products, customers, competitors, business model and long-term e-commerce goals.",
  },
  {
    number: "02",
    title: "Store Strategy",
    description:
      "We define your catalogue structure, shopping journey, features, integrations and technology requirements.",
  },
  {
    number: "03",
    title: "UX & UI Design",
    description:
      "We design a polished storefront focused on product discovery, usability, trust and conversion.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Your store is developed with responsive interfaces, business functionality and required integrations.",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "We test shopping flows, checkout, responsiveness, browser compatibility, performance and important customer journeys.",
  },
  {
    number: "06",
    title: "Launch",
    description:
      "After final optimization and quality checks, your store is prepared for production and launch.",
  },
];

/* ==========================================================================
   TECHNOLOGIES
   ========================================================================== */

const technologies = [
  {
    name: "Algolia",
    lightImage: "/images/ecommerce/technologies/Algolia.png",
    darkImage: "/images/ecommerce/technologies/dark/algolia.png",
  },
  {
    name: "BigCommerce",
    lightImage: "/images/ecommerce/technologies/bigcommerce.png",
    darkImage: "/images/ecommerce/technologies/dark/bigcommerce.png",
  },
  {
    name: "Cloudflare",
    lightImage: "/images/ecommerce/technologies/cloudflare.png",
    darkImage: "/images/ecommerce/technologies/dark/cloudflare.png",
  },
  {
    name: "Firebase",
    lightImage: "/images/ecommerce/technologies/firebase.png",
    darkImage: "/images/ecommerce/technologies/dark/firebase.png",
  },
  {
    name: "Magento",
    lightImage: "/images/ecommerce/technologies/magneto.png",
    darkImage: "/images/ecommerce/technologies/dark/magneto.png",
  },
  {
    name: "MySQL",
    lightImage: "/images/ecommerce/technologies/mysql.png",
    darkImage: "/images/ecommerce/technologies/dark/mysql.png",
  },
  {
    name: "Razorpay",
    lightImage: "/images/ecommerce/technologies/rzorpay.png",
    darkImage: "/images/ecommerce/technologies/dark/razorpay.png",
  },
  {
    name: "SendGrid",
    lightImage: "/images/ecommerce/technologies/sendgrid.png",
    darkImage: "/images/ecommerce/technologies/dark/sendgrid.png",
  },
  {
    name: "Shopify",
    lightImage: "/images/ecommerce/technologies/shopify.png",
    darkImage: "/images/ecommerce/technologies/dark/shopify.png",
  },
  {
    name: "WooCommerce",
    lightImage: "/images/ecommerce/technologies/woocommerce.png",
    darkImage: "/images/ecommerce/technologies/dark/woocommerce.png",
  },
];

/* ==========================================================================
   DEVELOPMENT STANDARDS
   ========================================================================== */

const standards = [
  {
    icon: Search,
    title: "SEO Ready",
    description:
      "Search-friendly structures help your products and categories become easier for search engines to understand.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Architecture",
    description:
      "Modern development practices help protect important customer, order and business data.",
  },
  {
    icon: Truck,
    title: "Commerce Integrations",
    description:
      "Build around the payment, shipping, analytics and business tools your store depends on.",
  },
  {
    icon: Sparkles,
    title: "Conversion Focused",
    description:
      "Every major interaction is considered with customer confidence, usability and purchasing decisions in mind.",
  },
];

/* ==========================================================================
   TECHNOLOGY LOGO
   ========================================================================== */

function TechnologyLogo({
  technology,
}: {
  technology: (typeof technologies)[number];
}) {
  return (
    <div
      className="
        flex
        h-10
        w-10
        shrink-0
        items-center
        justify-center
        rounded-xl
        border
        border-[var(--border)]
        bg-[var(--card)]
        p-2
        sm:h-11
        sm:w-11
      "
    >
      <Image
        src={technology.lightImage}
        alt=""
        width={32}
        height={32}
        sizes="32px"
        className="h-7 w-7 object-contain dark:hidden"
      />

      <Image
        src={technology.darkImage}
        alt=""
        width={32}
        height={32}
        sizes="32px"
        className="hidden h-7 w-7 object-contain dark:block"
      />
    </div>
  );
}

/* ==========================================================================
   TECHNOLOGY ITEM
   ========================================================================== */

function TechnologyItem({
  technology,
}: {
  technology: {
    name: string;
    lightImage: string;
    darkImage: string;
  };
}) {
  return (
    <div
      className="
        flex
        h-[68px]
        shrink-0
        items-center
        gap-3
        rounded-2xl
        border
        border-slate-200
        bg-white
        px-5
        shadow-[0_4px_16px_rgba(15,23,42,0.06)]
        transition-all
        duration-300

        hover:-translate-y-0.5
        hover:border-slate-300
        hover:shadow-[0_8px_22px_rgba(15,23,42,0.09)]

        sm:h-[74px]
        sm:gap-3.5
        sm:px-6

        lg:h-[78px]
        lg:px-7

        dark:border-white/10
        dark:bg-[#111111]
        dark:shadow-[0_4px_16px_rgba(0,0,0,0.18)]

        dark:hover:border-white/15
        dark:hover:shadow-[0_8px_22px_rgba(0,0,0,0.28)]
      "
    >
      {/* Logo */}
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          border
          border-slate-200
          bg-slate-50
          p-2

          sm:h-11
          sm:w-11

          dark:border-white/10
          dark:bg-white/5
        "
      >
        <Image
          src={technology.lightImage}
          alt=""
          width={32}
          height={32}
          sizes="32px"
          className="
            h-7
            w-7
            object-contain
            dark:hidden
          "
        />

        <Image
          src={technology.darkImage}
          alt=""
          width={32}
          height={32}
          sizes="32px"
          className="
            hidden
            h-7
            w-7
            object-contain
            dark:block
          "
        />
      </div>

      {/* Technology name */}
      <span
        className="
          whitespace-nowrap
          text-sm
          font-bold
          tracking-[-0.01em]
          text-slate-800

          sm:text-[15px]

          dark:text-white
        "
      >
        {technology.name}
      </span>

      {/* Red separator */}
      <span
        aria-hidden="true"
        className="
          h-1.5
          w-1.5
          shrink-0
          rounded-full
          bg-red-500
          shadow-[0_0_8px_rgba(239,68,68,.65)]
        "
      />
    </div>
  );
}

/* ==========================================================================
   THEME-AWARE IMAGE
   ========================================================================== */

function ThemeImage({
  light,
  dark,
  alt,
  sizes,
  className = "",
}: {
  light: string;
  dark: string;
  alt: string;
  sizes: string;
  className?: string;
}) {
  return (
    <>
      <Image
        src={light}
        alt={alt}
        fill
        sizes={sizes}
        className={`${className} dark:hidden`}
      />

      <Image
        src={dark}
        alt={alt}
        fill
        sizes={sizes}
        className={`${className} hidden dark:block`}
      />
    </>
  );
}

/* ==========================================================================
   PAGE
   ========================================================================== */

export default function EcommercePage() {
  return (
    <>
      {/* ====================================================================
          HERO
          ==================================================================== */}

      <EcommerceHero />

      {/* ====================================================================
    TECHNOLOGIES WE WORK WITH
    ==================================================================== */}

<section
  aria-label="Technologies we work with"
  className="
    relative
    overflow-hidden
    bg-[var(--background)]
    py-14
    sm:py-16
    lg:py-20
  "
>
  <Container>
    {/* Section heading */}
    <div
      className="
        mx-auto
        mb-10
        max-w-3xl
        text-center
        sm:mb-12
        lg:mb-14
      "
    >
      <p
        className="
          text-[11px]
          font-bold
          uppercase
          tracking-[0.32em]
          text-[var(--foreground)]
          sm:text-xs
        "
      >
        Technologies We Work With
      </p>

      <h2
        className="
          mt-4
          text-3xl
          font-bold
          tracking-tight
          text-[var(--foreground)]
          sm:text-4xl
        "
      >
        Modern Technology. Built for Commerce.
      </h2>

      <p
        className="
          mx-auto
          mt-3
          max-w-2xl
          text-sm
          leading-6
          text-[var(--muted)]
          sm:text-[15px]
          sm:leading-7
        "
      >
        We combine commerce platforms, search, cloud infrastructure,
        payments, analytics and modern development technologies to
        create fast, secure and scalable e-commerce experiences.
      </p>
    </div>
  </Container>

  {/* Technology marquee */}
  <div className="group relative w-full overflow-hidden bg-transparent">
    <div
      className="
        atria-service-marquee-track
        flex
        w-max
        items-center
        gap-4
        group-hover:[animation-play-state:paused]
        sm:gap-5
        lg:gap-6
      "
    >
      {/* First set */}
      <div className="flex shrink-0 items-center gap-4 sm:gap-5 lg:gap-6">
        {technologies.map((technology) => (
          <TechnologyItem
            key={`first-${technology.name}`}
            technology={technology}
          />
        ))}
      </div>

      {/* Exact duplicate for seamless loop */}
      <div
        aria-hidden="true"
        className="flex shrink-0 items-center gap-4 sm:gap-5 lg:gap-6"
      >
        {technologies.map((technology) => (
          <TechnologyItem
            key={`second-${technology.name}`}
            technology={technology}
          />
        ))}
      </div>
    </div>
  </div>
</section>

      {/* ====================================================================
          WHAT WE BUILD
          ==================================================================== */}

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
                border
                border-red-500/20
                bg-red-500/10
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-red-500
              "
            >
              What We Build
            </span>

            <h2
              className="
                mt-7
                text-4xl
                font-bold
                tracking-tight
                text-[var(--foreground)]
                sm:text-5xl
              "
            >
              More Than Just an Online Store
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              A successful e-commerce experience brings together strong
              design, smooth shopping journeys, reliable technology and
              business-focused functionality.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="
                    group
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
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-red-500/10
                      text-red-500
                      transition-all
                      duration-300
                      group-hover:bg-red-500
                      group-hover:text-white
                    "
                  >
                    <Icon size={25} />
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

      {/* ====================================================================
          E-COMMERCE SOLUTIONS + VISUAL
          ==================================================================== */}

      <section className="bg-[var(--card)] py-24 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <span
                className="
                  inline-flex
                  rounded-full
                  border
                  border-red-500/20
                  bg-red-500/10
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-red-500
                "
              >
                E-Commerce Solutions
              </span>

              <h2
                className="
                  mt-7
                  text-4xl
                  font-bold
                  tracking-tight
                  text-[var(--foreground)]
                  sm:text-5xl
                "
              >
                Built Around How You Sell.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
                Whether you are launching your first online store or building
                a larger digital commerce platform, we create experiences
                around your products, customers and business model.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {solutions.map((solution) => {
                  const Icon = solution.icon;

                  return (
                    <article
                      key={solution.title}
                      className="
                        group
                        rounded-2xl
                        border
                        border-[var(--border)]
                        bg-[var(--background)]
                        p-5
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-red-500/30
                      "
                    >
                      <div
                        className="
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-xl
                          bg-red-500/10
                          text-red-500
                          transition-all
                          duration-300
                          group-hover:bg-red-500
                          group-hover:text-white
                        "
                      >
                        <Icon size={20} />
                      </div>

                      <h3 className="mt-5 text-base font-bold text-[var(--foreground)]">
                        {solution.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                        {solution.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>

            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-[var(--border)]
                bg-[var(--background)]
                p-2
                shadow-[var(--shadow-lg)]
              "
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[26px]">
                <ThemeImage
                  light={ecommerceImages.ecommerceSolutions.light}
                  dark={ecommerceImages.ecommerceSolutions.dark}
                  alt="E-commerce website design and shopping experience"
                  sizes="(max-width: 1023px) 100vw, 55vw"
                  className="object-cover"
                />
              </div>

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/75
                  px-5
                  py-4
                  text-white
                  shadow-2xl
                  backdrop-blur-xl
                  sm:bottom-8
                  sm:left-8
                "
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-red-400">
                  Commerce Experience
                </p>

                <p className="mt-1 text-sm font-semibold sm:text-base">
                  Designed to turn browsing into buying.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ====================================================================
          BUILT TO SELL
          ==================================================================== */}

      <section className="bg-[var(--background)] py-24 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-[var(--border)]
                bg-[var(--card)]
                p-2
                shadow-[var(--shadow-md)]
              "
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[26px]">
                <ThemeImage
                  light={ecommerceImages.builtToSell.light}
                  dark={ecommerceImages.builtToSell.dark}
                  alt="Modern e-commerce storefront"
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <span
                className="
                  inline-flex
                  rounded-full
                  border
                  border-red-500/20
                  bg-red-500/10
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-red-500
                "
              >
                Built to Sell
              </span>

              <h2
                className="
                  mt-7
                  text-4xl
                  font-bold
                  tracking-tight
                  text-[var(--foreground)]
                  sm:text-5xl
                "
              >
                Every Detail Has a Purpose.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
                From the first product impression to the final checkout,
                every part of your store should make the customer journey
                clearer, faster and more trustworthy.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Clear product discovery and navigation",
                  "Mobile-first shopping experience",
                  "Fast and focused product pages",
                  "Simple and trustworthy checkout journeys",
                  "Flexible catalogue and inventory structures",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-1 shrink-0 text-red-500"
                    />

                    <span className="leading-7 text-[var(--foreground)]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="
                  mt-9
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-red-500
                  px-7
                  py-3.5
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
          </div>
        </Container>
      </section>

      {/* ====================================================================
          DEVELOPMENT STANDARDS
          ==================================================================== */}

      <section className="bg-[var(--card)] py-24 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <span
                className="
                  inline-flex
                  rounded-full
                  border
                  border-red-500/20
                  bg-red-500/10
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-red-500
                "
              >
                E-Commerce Standards
              </span>

              <h2
                className="
                  mt-7
                  text-4xl
                  font-bold
                  tracking-tight
                  text-[var(--foreground)]
                  sm:text-5xl
                "
              >
                Designed for Customers.
                <span className="block text-red-500">
                  Built for Growth.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
                A store needs more than attractive product pages. We consider
                performance, discoverability, security, usability and the
                operational needs behind your online business.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {standards.map((standard) => {
                const Icon = standard.icon;

                return (
                  <article
                    key={standard.title}
                    className="
                      group
                      rounded-[26px]
                      border
                      border-[var(--border)]
                      bg-[var(--background)]
                      p-6
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-red-500/30
                      hover:shadow-[var(--shadow-md)]
                    "
                  >
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        bg-red-500/10
                        text-red-500
                        transition-all
                        duration-300
                        group-hover:bg-red-500
                        group-hover:text-white
                      "
                    >
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-[var(--foreground)]">
                      {standard.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                      {standard.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ====================================================================
          PROCESS
          ==================================================================== */}

      <section className="bg-[var(--background)] py-24 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span
              className="
                inline-flex
                rounded-full
                border
                border-red-500/20
                bg-red-500/10
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-red-500
              "
            >
              Our Process
            </span>

            <h2
              className="
                mt-7
                text-4xl
                font-bold
                tracking-tight
                text-[var(--foreground)]
                sm:text-5xl
              "
            >
              From Product Idea to First Sale
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              A structured process keeps your store focused, practical and
              ready for growth from strategy through launch.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {process.map((step) => (
              <article
                key={step.number}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-[var(--border)]
                  bg-[var(--card)]
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-red-500/30
                  hover:shadow-[var(--shadow-md)]
                "
              >
                <span
                  className="
                    text-5xl
                    font-black
                    text-red-500/15
                    transition-colors
                    duration-300
                    group-hover:text-red-500/25
                  "
                >
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-[var(--foreground)]">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-[var(--muted)]">
                  {step.description}
                </p>

                <div
                  className="
                    absolute
                    right-0
                    top-0
                    h-24
                    w-24
                    rounded-full
                    bg-red-500/5
                    blur-2xl
                    transition-opacity
                    duration-300
                    group-hover:bg-red-500/10
                  "
                />
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ====================================================================
          E-COMMERCE VISUAL SHOWCASE
          ==================================================================== */}

      <section className="bg-[var(--card)] py-24 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span
              className="
                inline-flex
                rounded-full
                border
                border-red-500/20
                bg-red-500/10
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-red-500
              "
            >
              Commerce Experience
            </span>

            <h2
              className="
                mt-7
                text-4xl
                font-bold
                tracking-tight
                text-[var(--foreground)]
                sm:text-5xl
              "
            >
              Every Part of the Store Matters.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              From storefront presentation and mobile shopping to checkout,
              analytics and business management, we think about the complete
              commerce experience.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                light: ecommerceImages.storefront.light,
                dark: ecommerceImages.storefront.dark,
                title: "Storefronts",
              },
              {
                light: ecommerceImages.checkout.light,
                dark: ecommerceImages.checkout.dark,
                title: "Checkout",
              },
              {
  light: ecommerceImages.storeManagement.light,
  dark: ecommerceImages.storeManagement.dark,
  title: "Store Management",
},
              {
                light: ecommerceImages.analytics.light,
                dark: ecommerceImages.analytics.dark,
                title: "Analytics",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="
                  group
                  overflow-hidden
                  rounded-[26px]
                  border
                  border-[var(--border)]
                  bg-[var(--background)]
                  shadow-[var(--shadow-md)]
                "
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ThemeImage
                    light={item.light}
                    dark={item.dark}
                    alt={item.title}
                    sizes="
                      (max-width: 767px) 100vw,
                      (max-width: 1023px) 50vw,
                      25vw
                    "
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold text-[var(--foreground)]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-[var(--muted)]">
                    Designed around your customers and business.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ====================================================================
          CTA
          ==================================================================== */}

      <CallToAction />

      <Footer />
    </>
  );
}