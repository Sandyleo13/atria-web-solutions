import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
  LineChart,
  MousePointerClick,
  MapPin,
  PenTool,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import SeoMarketingHero from "@/components/services/SeoMarketingHero";

export const metadata: Metadata = {
  title: "SEO & Digital Marketing | Atria Web Solutions",
  description:
    "Improve your online visibility, attract qualified traffic and grow your business with SEO, content and digital marketing solutions.",
};

/* ==========================================================================
   WHAT WE DO
   ========================================================================== */

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    description:
      "Improve your organic visibility through technical SEO, on-page optimization, content strategy and continuous search-focused improvements.",
  },
  {
    icon: FileSearch,
    title: "Keyword & Content Strategy",
    description:
      "Identify valuable search opportunities and create useful content around the questions, needs and intent of your target audience.",
  },
  {
    icon: Globe,
    title: "Local SEO",
    description:
      "Strengthen your visibility in local search so customers in your target locations can discover your business, services and important information.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Build a consistent social presence with content and campaigns designed to increase awareness, engagement and meaningful audience interactions.",
  },
  {
    icon: Megaphone,
    title: "Digital Campaigns",
    description:
      "Plan focused digital campaigns around launches, promotions, services and business objectives with clearly defined audiences and outcomes.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Turn website, search and campaign data into useful insights that show what is working, where opportunities exist and what should happen next.",
  },
];

/* ==========================================================================
   DIGITAL GROWTH SOLUTIONS
   ========================================================================== */

const solutions = [
  {
    icon: Target,
    title: "Organic Growth",
    description:
      "Build a stronger search presence through technical improvements, useful content, keyword targeting and continuous optimization.",
  },
  {
    icon: Users,
    title: "Audience Growth",
    description:
      "Reach the people most relevant to your business through content, social channels and targeted digital campaigns.",
  },
  {
    icon: TrendingUp,
    title: "Lead Generation",
    description:
      "Create digital journeys that move visitors from discovery to engagement and give potential customers clear reasons to take action.",
  },
  {
    icon: Zap,
    title: "Conversion Optimization",
    description:
      "Improve important pages and customer journeys so existing traffic has a stronger opportunity to become enquiries, leads or customers.",
  },
];

/* ==========================================================================
   WHY ATRIA
   ========================================================================== */

const reasons = [
  "Strategies aligned with your business objectives",
  "Technical and content-focused SEO",
  "Search intent and keyword research",
  "Local visibility and audience targeting",
  "Conversion-focused digital experiences",
  "Clear analytics and performance reporting",
];

/* ==========================================================================
   PROCESS
   ========================================================================== */

const process = [
  {
    number: "01",
    title: "Audit",
    description:
      "We review your website, search visibility, content, competitors, analytics and existing digital channels.",
  },
  {
    number: "02",
    title: "Research",
    description:
      "We study your audience, search behaviour, keywords, competitors and the opportunities that matter to your business.",
  },
  {
    number: "03",
    title: "Strategy",
    description:
      "We create a practical growth roadmap covering SEO, content, campaigns, social channels and measurable objectives.",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "We improve technical SEO, content, landing pages, local presence and other important digital touchpoints.",
  },
  {
    number: "05",
    title: "Promote",
    description:
      "We use relevant content and digital channels to increase reach, engagement and qualified traffic.",
  },
  {
    number: "06",
    title: "Measure",
    description:
      "We track performance, study the results and continuously refine the strategy around what the data tells us.",
  },
];

/* ==========================================================================
   MARKETING STANDARDS
   ========================================================================== */

const standards = [
  {
    icon: Search,
    title: "Technical SEO",
    description:
      "Strong technical foundations help search engines crawl, understand and index your website effectively.",
  },
  {
    icon: Target,
    title: "Search Intent",
    description:
      "We focus on understanding what people actually want when they search rather than targeting keywords without context.",
  },
  {
    icon: PenTool,
    title: "Useful Content",
    description:
      "Content should answer real questions, demonstrate value and give your audience a reason to engage with your business.",
  },
  {
    icon: MapPin,
    title: "Local Visibility",
    description:
      "For location-based businesses, we strengthen the digital signals that help nearby customers discover you.",
  },
  {
    icon: Zap,
    title: "Website Performance",
    description:
      "Fast and accessible websites provide a stronger experience for users and a better foundation for digital growth.",
  },
  {
    icon: MousePointerClick,
    title: "Conversion Paths",
    description:
      "Traffic only matters when visitors have clear and compelling paths toward enquiries, purchases or other actions.",
  },
  {
    icon: LineChart,
    title: "Performance Tracking",
    description:
      "Important metrics help us understand progress, identify opportunities and make better marketing decisions.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Optimization",
    description:
      "Digital growth is ongoing, so strategies evolve based on search changes, audience behaviour and performance data.",
  },
];

/* ==========================================================================
   TOOLS & TECHNOLOGY
   ========================================================================== */

const technologies = [
  {
    name: "Google Analytics",
    image: "/images/SEO/light/google-analytics.png",
    darkImage: "/images/SEO/dark/google-analytics.png",
    description: "Website performance & audience insights",
  },
  {
    name: "Google Search Console",
    image: "/images/SEO/light/google-search-console.png",
    darkImage: "/images/SEO/dark/google-search-console.png",
    description: "Search visibility & technical monitoring",
  },
  {
    name: "Google Business Profile",
    image: "/images/SEO/light/google-business-profile.png",
    darkImage: "/images/SEO/dark/google-business-profile.png",
    description: "Local search presence & discovery",
  },
  {
    name: "SEMrush",
    image: "/images/SEO/light/semrush.png",
    darkImage: "/images/SEO/dark/semrush.png",
    description: "SEO research & competitive analysis",
  },
  {
    name: "Ahrefs",
    image: "/images/SEO/light/ahrefs.png",
    darkImage: "/images/SEO/dark/ahrefs.png",
    description: "Backlinks, keywords & search research",
  },
  {
    name: "Next.js",
    image: "/images/SEO/light/nextjs.png",
    darkImage: "/images/SEO/dark/nextjs.png",
    description: "High-performance web experiences",
  },
  {
    name: "React",
    image: "/images/SEO/light/react.png",
    darkImage: "/images/SEO/dark/react.png",
    description: "Modern interactive interfaces",
  },
  {
    name: "WordPress",
    image: "/images/SEO/light/wordpress.png",
    darkImage: "/images/SEO/dark/wordpress.png",
    description: "Flexible content management",
  },
];
/* ==========================================================================
   PAGE
   ========================================================================== */

export default function SeoDigitalMarketingPage() {
  return (
    <>
      {/* ====================================================================
          HERO
          ==================================================================== */}

      <SeoMarketingHero />

      {/* ====================================================================
          MARKETING MARQUEE
          ==================================================================== */}

      <section
        aria-label="Digital marketing tools and technologies"
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
            {[...technologies, ...technologies].map(
              (technology, index) => (
                <div
                  key={`${technology.name}-${index}`}
                  aria-hidden={index >= technologies.length}
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
                    sm:gap-3.5
                    sm:px-5
                    sm:py-3
                  "
                >
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[var(--border)]
                      bg-[var(--card)]
                      p-1.5
                      sm:h-10
                      sm:w-10
                    "
                  >
                    <Image
                      src={
                        technology.darkImage
                          ? technology.image
                          : technology.image
                      }
                      alt=""
                      width={32}
                      height={32}
                      className="h-7 w-7 object-contain dark:hidden"
                    />

                    <Image
                      src={
                        technology.darkImage || technology.image
                      }
                      alt=""
                      width={32}
                      height={32}
                      className="hidden h-7 w-7 object-contain dark:block"
                    />
                  </div>

                  <span
                    className="
                      whitespace-nowrap
                      text-sm
                      font-semibold
                      text-[var(--foreground)]
                      sm:text-[15px]
                    "
                  >
                    {technology.name}
                  </span>

                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ====================================================================
          WHAT WE DO
          ==================================================================== */}

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
              Digital Growth That Has a Purpose
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              Getting noticed is only the first step. We combine SEO,
              content, social media, digital campaigns and analytics to
              help your business attract the right audience and turn
              attention into meaningful action.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
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
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-red-500/10
                      transition-colors
                      duration-300
                      group-hover:bg-red-500
                    "
                  >
                    <Icon
                      size={25}
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
              );
            })}
          </div>
        </Container>
      </section>

      {/* ====================================================================
          DIGITAL GROWTH SOLUTIONS
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
                Digital Growth
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
                Built Around How Your Customers Find You
              </h2>

              <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
                Every business has different audiences, markets and growth
                opportunities. We build digital strategies around your
                customers, your competition and the channels that can make
                the biggest difference.
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
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-red-500/10
                        transition-colors
                        duration-300
                        group-hover:bg-red-500
                      "
                    >
                      <Icon
                        size={25}
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
          WHY ATRIA
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
                Why Atria
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
                Strategy First.
                <span className="block text-red-500">
                  Growth That Can Be Measured.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
                We don't believe digital marketing should be a collection
                of disconnected activities. Every recommendation starts
                with your business objectives and is connected to a
                measurable outcome.
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
                Build Your Growth Strategy
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
                    bg-[var(--card)]
                    p-6
                  "
                >
                  <CheckCircle2
                    size={21}
                    className="text-red-500"
                  />

                  <p
                    className="
                      mt-5
                      leading-7
                      text-[var(--foreground)]
                    "
                  >
                    {reason}
                  </p>
                </div>
              ))}
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
              From Audit to Continuous Growth
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              A structured process gives us a clear understanding of where
              your business stands, where the opportunities are and which
              actions can create the strongest long-term impact.
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
          MARKETING STANDARDS
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
                What We Focus On
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
                Built for Sustainable
                <span className="block text-red-500">
                  Digital Growth.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
                Good marketing is not about chasing every new trend. We
                focus on the foundations that continue to matter: useful
                content, technical quality, search visibility, strong
                customer journeys and reliable measurement.
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

                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
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
          TOOLS & TECHNOLOGY
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
              Tools & Technology
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
              The Tools Behind the Strategy
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              We use proven analytics, search and web technologies to
              understand your performance, identify opportunities and
              make better decisions over time.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-5">
            {technologies.map((technology) => (
              <article
                key={technology.name}
                className="
                  group
                  rounded-[24px]
                  border
                  border-[var(--border)]
                  bg-[var(--background)]
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-red-500/30
                  hover:shadow-[var(--shadow-md)]
                  sm:p-6
                "
              >
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[var(--border)]
                    bg-[var(--card)]
                    p-3
                    transition-all
                    duration-300
                    group-hover:border-red-500/20
                    group-hover:bg-red-500/5
                  "
                >
                  <Image
                    src={technology.image}
                    alt={`${technology.name} logo`}
                    width={48}
                    height={48}
                    className="h-10 w-10 object-contain dark:hidden"
                  />

                  <Image
                    src={technology.darkImage || technology.image}
                    alt=""
                    width={48}
                    height={48}
                    className="hidden h-10 w-10 object-contain dark:block"
                  />
                </div>

                <h3
                  className="
                    mt-5
                    text-base
                    font-bold
                    text-[var(--foreground)]
                    sm:text-lg
                  "
                >
                  {technology.name}
                </h3>

                <p
                  className="
                    mt-2
                    text-xs
                    leading-5
                    text-[var(--muted)]
                    sm:text-sm
                  "
                >
                  {technology.description}
                </p>
              </article>
            ))}
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
                Ready to grow your online presence?
              </h2>

              <p className="mt-2 text-sm text-white/80 sm:text-base">
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