import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  Compass,
  FileText,
  Layers3,
  Megaphone,
  Rocket,
  Sparkles,
  Target,
  Type,
  Users,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import BrandingDesignHero from "@/components/services/BrandingDesignHero";

export const metadata: Metadata = {
  title: "Branding & Design | Atria Web Solutions",
  description:
    "Build a memorable brand identity with strategic branding, visual design and creative systems from Atria Web Solutions.",
};

/* ==========================================================================
   BRANDING ASSETS
   ========================================================================== */

const brandingAssets = {
  brandIdentity: {
    light: "/images/branding/light/brand-identity.png",
    dark: "/images/branding/dark/brand-identity.png",
  },
  logoDesign: {
    light: "/images/branding/light/logo-design.png",
    dark: "/images/branding/dark/logo-design.png",
  },
  typography: {
    light: "/images/branding/light/typography.png",
    dark: "/images/branding/dark/typography.png",
  },
  colorSystems: {
    light: "/images/branding/light/color-systems.png",
    dark: "/images/branding/dark/color-systems.png",
  },
  packaging: {
    light: "/images/branding/light/packaging.png",
    dark: "/images/branding/dark/packaging.png",
  },
  socialMedia: {
    light: "/images/branding/light/social-media.png",
    dark: "/images/branding/dark/social-media.png",
  },
  marketingDesign: {
    light: "/images/branding/light/marketing-design.png",
    dark: "/images/branding/dark/marketing-design.png",
  },
  creativeDirection: {
    light: "/images/branding/light/creative-direction.png",
    dark: "/images/branding/dark/creative-direction.png",
  },
  brandStrategy: {
    light: "/images/branding/light/brand-strategy.png",
    dark: "/images/branding/dark/brand-strategy.png",
  },
  campaignDesign: {
    light: "/images/branding/light/campaign-design.png",
    dark: "/images/branding/dark/campaign-design.png",
  },
};

/* ==========================================================================
   BRANDING SERVICES
   ========================================================================== */

const services = [
  {
    asset: brandingAssets.brandIdentity,
    title: "Brand Identity",
    description:
      "Create a distinctive visual identity that communicates who you are, what you stand for and how you want customers to perceive your business.",
  },
  {
    asset: brandingAssets.logoDesign,
    title: "Logo Design",
    description:
      "Memorable logo systems designed to represent your brand clearly across digital platforms, print materials and real-world applications.",
  },
  {
    asset: brandingAssets.typography,
    title: "Typography & Visual Language",
    description:
      "Build a recognizable visual personality through carefully selected typography, colors, layouts and supporting design elements.",
  },
  {
    asset: brandingAssets.brandStrategy,
    title: "Brand Guidelines",
    description:
      "Clear and practical brand guidelines that help your team maintain consistency across every customer touchpoint.",
  },
  {
    asset: brandingAssets.marketingDesign,
    title: "Marketing Design",
    description:
      "Creative assets for campaigns, social media, presentations, advertising, promotional materials and other important brand interactions.",
  },
  {
    asset: brandingAssets.creativeDirection,
    title: "Creative Direction",
    description:
      "A cohesive creative direction that keeps your visual communication consistent, relevant and aligned with your business goals.",
  },
];

/* ==========================================================================
   BRANDING SOLUTIONS
   ========================================================================== */

const solutions = [
  {
    asset: brandingAssets.brandStrategy,
    icon: Target,
    title: "Brand Strategy",
    description:
      "Define your positioning, audience, personality and visual direction before turning strategy into creative work.",
  },
  {
    asset: brandingAssets.colorSystems,
    icon: Sparkles,
    title: "Visual Identity",
    description:
      "Develop the colors, typography, imagery and visual elements that make your brand recognizable.",
  },
  {
    asset: brandingAssets.campaignDesign,
    icon: Megaphone,
    title: "Campaign Design",
    description:
      "Create campaign visuals that translate your brand identity into communication people can notice and remember.",
  },
  {
    asset: brandingAssets.socialMedia,
    icon: Users,
    title: "Social Media Branding",
    description:
      "Build a consistent social presence with templates and creative systems designed for everyday content.",
  },
];

/* ==========================================================================
   BRAND STRATEGY POINTS
   ========================================================================== */

const strategyPoints = [
  "Clear brand positioning",
  "Audience-focused visual direction",
  "Distinctive brand personality",
  "Consistent customer experience",
  "Flexible design system",
  "Scalable visual language",
];

/* ==========================================================================
   PROCESS
   ========================================================================== */

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, audience, competitors, market and the position you want your brand to own.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We define the creative direction, personality, positioning and visual principles that guide the identity.",
  },
  {
    number: "03",
    title: "Concept",
    description:
      "We explore visual concepts and creative directions that translate your business story into a strong identity.",
  },
  {
    number: "04",
    title: "Design",
    description:
      "We develop the selected direction into a cohesive logo, visual system and supporting brand elements.",
  },
  {
    number: "05",
    title: "Refine",
    description:
      "We collaborate with you to refine the details and ensure every important element feels consistent and intentional.",
  },
  {
    number: "06",
    title: "Launch",
    description:
      "Your finished identity is organized into practical assets and systems ready for consistent everyday use.",
  },
];

/* ==========================================================================
   BRAND STANDARDS
   ========================================================================== */

const standards = [
  {
    icon: BadgeCheck,
    title: "Consistent Identity",
    description:
      "Every visual element works together to create a recognizable and professional brand experience.",
  },
  {
    icon: Sparkles,
    title: "Distinctive Visuals",
    description:
      "Colors, shapes, imagery and graphic elements are developed to give your brand its own personality.",
  },
  {
    icon: Type,
    title: "Typography System",
    description:
      "A considered typography system creates hierarchy, readability and consistency across communication.",
  },
  {
    icon: Layers3,
    title: "Flexible Design System",
    description:
      "Your identity is built to work across websites, social media, presentations, advertising and print.",
  },
  {
    icon: FileText,
    title: "Practical Guidelines",
    description:
      "Clear documentation makes it easier for your team and partners to use the brand correctly.",
  },
  {
    icon: Rocket,
    title: "Ready to Scale",
    description:
      "The visual system is designed to support new campaigns, products, services and future business growth.",
  },
  {
    icon: BarChart3,
    title: "Business Focused",
    description:
      "Creative decisions are connected to your audience, market position and wider business objectives.",
  },
  {
    icon: BadgeCheck,
    title: "Memorable Experience",
    description:
      "We create visual experiences designed to make your business easier to recognize and remember.",
  },
];

/* ==========================================================================
   DELIVERABLES
   ========================================================================== */

const deliverables = [
  "Primary logo",
  "Logo variations",
  "Color palette",
  "Typography system",
  "Brand guidelines",
  "Social media templates",
  "Marketing creatives",
  "Presentation assets",
  "Advertising creatives",
  "Digital brand assets",
];

/* ==========================================================================
   CREATIVE AREAS
   ========================================================================== */

const creativeAreas = [
  "Logo & Identity",
  "Social Media",
  "Marketing",
  "Advertising",
  "Packaging",
  "Presentations",
  "Digital Products",
  "Print Materials",
];

/* ==========================================================================
   MARQUEE
   ========================================================================== */

const marqueeItems = [
  {
    name: "Brand Identity",
    asset: brandingAssets.brandIdentity,
  },
  {
    name: "Logo Design",
    asset: brandingAssets.logoDesign,
  },
  {
    name: "Visual Identity",
    asset: brandingAssets.colorSystems,
  },
  {
    name: "Typography",
    asset: brandingAssets.typography,
  },
  {
    name: "Color Systems",
    asset: brandingAssets.colorSystems,
  },
  {
    name: "Brand Guidelines",
    asset: brandingAssets.brandStrategy,
  },
  {
    name: "Packaging Design",
    asset: brandingAssets.packaging,
  },
  {
    name: "Social Media Design",
    asset: brandingAssets.socialMedia,
  },
  {
    name: "Marketing Design",
    asset: brandingAssets.marketingDesign,
  },
  {
    name: "Creative Direction",
    asset: brandingAssets.creativeDirection,
  },
];

/* ==========================================================================
   THEME IMAGE
   ========================================================================== */

function ThemeImage({
  light,
  dark,
  alt,
  width,
  height,
  className = "",
}: {
  light: string;
  dark: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <>
      <Image
        src={light}
        alt={alt}
        width={width}
        height={height}
        sizes={`${width}px`}
        className={`${className} dark:hidden`}
      />

      <Image
        src={dark}
        alt={alt}
        width={width}
        height={height}
        sizes={`${width}px`}
        className={`${className} hidden dark:block`}
      />
    </>
  );
}

/* ==========================================================================
   PAGE
   ========================================================================== */

export default function BrandingDesignPage() {
  return (
    <>
      {/* ====================================================================
          HERO
          ==================================================================== */}

      <BrandingDesignHero />

      {/* ====================================================================
          BRANDING MARQUEE
          ==================================================================== */}

      <section
        aria-label="Branding and design capabilities"
        className="
          relative
          overflow-hidden
          border-y
          border-[var(--border)]
          bg-[var(--card)]
          py-5
          sm:py-6
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-10
            w-16
            bg-gradient-to-r
            from-[var(--card)]
            to-transparent
            sm:w-28
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-y-0
            right-0
            z-10
            w-16
            bg-gradient-to-l
            from-[var(--card)]
            to-transparent
            sm:w-28
          "
        />

        <div className="atria-service-marquee">
          <div className="atria-service-marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                aria-hidden={index >= marqueeItems.length}
                className="
                  flex
                  shrink-0
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[var(--border)]
                  bg-[var(--background)]
                  px-4
                  py-2.5
                  shadow-[var(--shadow-md)]
                  sm:px-5
                  sm:py-3
                "
              >
                <span
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-xl
                    bg-red-500/10
                    sm:h-9
                    sm:w-9
                  "
                >
                  <ThemeImage
                    light={item.asset.light}
                    dark={item.asset.dark}
                    alt=""
                    width={32}
                    height={32}
                    className="h-7 w-7 object-contain sm:h-8 sm:w-8"
                  />
                </span>

                <span
                  className="
                    whitespace-nowrap
                    text-sm
                    font-semibold
                    text-[var(--foreground)]
                    sm:text-[15px]
                  "
                >
                  {item.name}
                </span>

                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          WHAT WE CREATE
          ==================================================================== */}

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
              More Than Just a Logo
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              A strong brand is a complete visual experience. We create the
              strategy, identity and creative systems that make your business
              recognizable, consistent and memorable.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
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
                    h-16
                    w-16
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-2xl
                    bg-red-500/10
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                >
                  <ThemeImage
                    light={service.asset.light}
                    dark={service.asset.dark}
                    alt=""
                    width={56}
                    height={56}
                    className="
                      h-12
                      w-12
                      object-contain
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />
                </div>

                <h3
                  className="
                    mt-7
                    text-xl
                    font-bold
                    text-[var(--foreground)]
                  "
                >
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-[var(--muted)]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ====================================================================
          BRANDING SOLUTIONS
          ==================================================================== */}

      <section className="bg-[var(--card)] py-24 sm:py-28">
        <Container>
          <div
            className="
              grid
              gap-14
              lg:grid-cols-[0.8fr_1.2fr]
              lg:items-start
            "
          >
            <div className="lg:sticky lg:top-32">
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
                Brand Solutions
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
                Build a Brand That Works Everywhere
              </h2>

              <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
                Your brand should feel consistent whether someone sees it on
                your website, social media, packaging, advertising or
                presentation.
              </p>

              <div className="mt-8 h-px w-24 bg-red-500" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {solutions.map((solution) => {
                const Icon = solution.icon;

                return (
                  <article
                    key={solution.title}
                    className="
                      group
                      rounded-[28px]
                      border
                      border-[var(--border)]
                      bg-[var(--background)]
                      p-7
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-red-500/30
                      hover:shadow-[var(--shadow-md)]
                    "
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div
                        className="
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          overflow-hidden
                          rounded-2xl
                          bg-red-500/10
                        "
                      >
                        <ThemeImage
                          light={solution.asset.light}
                          dark={solution.asset.dark}
                          alt=""
                          width={48}
                          height={48}
                          className="
                            h-11
                            w-11
                            object-contain
                            transition-transform
                            duration-300
                            group-hover:scale-110
                          "
                        />
                      </div>

                      <Icon
                        size={20}
                        className="
                          text-red-500/50
                          transition-colors
                          duration-300
                          group-hover:text-red-500
                        "
                      />
                    </div>

                    <h3
                      className="
                        mt-7
                        text-xl
                        font-bold
                        text-[var(--foreground)]
                      "
                    >
                      {solution.title}
                    </h3>

                    <p className="mt-4 leading-7 text-[var(--muted)]">
                      {solution.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ====================================================================
          BRAND STRATEGY
          ==================================================================== */}

      <section className="bg-[var(--background)] py-24 sm:py-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
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
                Make Your Brand
                <span className="block text-red-500">
                  Impossible to Ignore.
                </span>
              </h2>

              <p
                className="
                  mt-6
                  max-w-xl
                  text-lg
                  leading-8
                  text-[var(--muted)]
                "
              >
                We combine strategic thinking with creativity to create brands
                that are not only visually appealing, but meaningful to the
                people they are built for.
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
                Build Your Brand
                <ArrowRight size={17} />
              </Link>
            </div>

            <div
              className="
                rounded-[30px]
                border
                border-[var(--border)]
                bg-[var(--card)]
                p-7
                shadow-[var(--shadow-md)]
                sm:p-8
              "
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-red-500
                    "
                  >
                    Brand Framework
                  </p>

                  <h3
                    className="
                      mt-3
                      text-2xl
                      font-bold
                      text-[var(--foreground)]
                      sm:text-3xl
                    "
                  >
                    One Identity.
                    <br />
                    Many Touchpoints.
                  </h3>
                </div>

                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-xl
                    bg-red-500/10
                  "
                >
                  <ThemeImage
                    light={brandingAssets.brandStrategy.light}
                    dark={brandingAssets.brandStrategy.dark}
                    alt=""
                    width={40}
                    height={40}
                    className="h-9 w-9 object-contain"
                  />
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {strategyPoints.map((item, index) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-2xl
                      border
                      border-[var(--border)]
                      bg-[var(--background)]
                      p-4
                    "
                  >
                    <span
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-red-500/10
                        text-xs
                        font-bold
                        text-red-500
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p
                      className="
                        text-sm
                        font-semibold
                        text-[var(--foreground)]
                      "
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="
                  mt-5
                  rounded-2xl
                  border
                  border-red-500/10
                  bg-red-500/5
                  p-5
                "
              >
                <p className="text-sm leading-6 text-[var(--muted)]">
                  Every touchpoint should feel like the same brand — from the
                  first impression to the everyday customer experience.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ====================================================================
          PROCESS
          ==================================================================== */}

      <section className="bg-[var(--card)] py-24 sm:py-28">
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

            <h2
              className="
                mt-7
                text-4xl
                font-bold
                text-[var(--foreground)]
                sm:text-5xl
              "
            >
              From Concept to Identity
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              A structured creative process turns your business story into a
              visual identity people can recognize, understand and remember.
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
                  bg-[var(--background)]
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

                <h3
                  className="
                    mt-5
                    text-xl
                    font-bold
                    text-[var(--foreground)]
                  "
                >
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
                    transition-all
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
          BRAND STANDARDS
          ==================================================================== */}

      <section className="bg-[var(--background)] py-24 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
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
                Brand Standards
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
                Designed for Today.
                <span className="block text-red-500">
                  Ready for Tomorrow.
                </span>
              </h2>

              <p
                className="
                  mt-6
                  max-w-xl
                  text-lg
                  leading-8
                  text-[var(--muted)]
                "
              >
                A good identity should not become difficult to use as your
                business grows. We build flexible visual systems that can
                support new campaigns, products, platforms and audiences.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {standards.map((standard) => {
                const Icon = standard.icon;

                return (
                  <article
                    key={standard.title}
                    className="
                      group
                      rounded-[24px]
                      border
                      border-[var(--border)]
                      bg-[var(--card)]
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
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        bg-red-500/10
                        transition-colors
                        duration-300
                        group-hover:bg-red-500
                      "
                    >
                      <Icon
                        size={20}
                        className="
                          text-red-500
                          transition-colors
                          duration-300
                          group-hover:text-white
                        "
                      />
                    </div>

                    <h3
                      className="
                        mt-5
                        text-lg
                        font-bold
                        text-[var(--foreground)]
                      "
                    >
                      {standard.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        text-sm
                        leading-6
                        text-[var(--muted)]
                      "
                    >
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
          DELIVERABLES
          ==================================================================== */}

      <section className="bg-[var(--card)] py-24 sm:py-28">
        <Container>
          <div
            className="
              flex
              flex-col
              gap-10
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
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

              <h2
                className="
                  mt-6
                  text-3xl
                  font-bold
                  text-[var(--foreground)]
                  sm:text-4xl
                "
              >
                Everything You Need to Build Your Brand
              </h2>

              <p className="mt-5 leading-7 text-[var(--muted)]">
                From your core identity to everyday marketing assets, we
                create a practical visual system that keeps your brand
                consistent wherever it appears.
              </p>
            </div>

            <div className="grid w-full max-w-xl gap-3 sm:grid-cols-2">
              {deliverables.map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-[var(--border)]
                    bg-[var(--background)]
                    px-4
                    py-4
                  "
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-red-500"
                  />

                  <span
                    className="
                      text-sm
                      font-medium
                      text-[var(--foreground)]
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ====================================================================
          CTA
          ==================================================================== */}

      <section className="bg-[var(--background)] py-10">
        <Container>
          <div
            className="
              flex
              flex-col
              gap-6
              rounded-[28px]
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
              <h2 className="text-xl font-bold sm:text-2xl">
                Ready to build a memorable brand?
              </h2>

              <p className="mt-2 text-sm text-white/80 sm:text-base">
                Let's turn your vision into a brand people recognize and
                remember.
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
                px-6
                py-3
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