import type { Metadata } from "next";
import Image from "next/image";

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
  Globe,
  Layers3,
  BarChart3,
  CheckCircle2,
  ShoppingCart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Website Designing & Development | Atria Web Solutions",
  description:
    "Modern, responsive and high-performance websites designed and developed around your business goals.",
};

/* ==========================================================================
   FEATURES
   ========================================================================== */

const features = [
  {
    icon: Layout,
    title: "Custom Website Development",
    description:
      "Tailor-made websites designed around your brand, audience, business model and specific digital goals.",
  },
  {
    icon: Smartphone,
    title: "Responsive Web Design",
    description:
      "Every experience is carefully developed to work smoothly across desktops, tablets and mobile devices.",
  },
  {
    icon: Gauge,
    title: "Performance Focused",
    description:
      "Fast-loading interfaces, optimized assets and efficient development practices create a smoother experience.",
  },
  {
    icon: Search,
    title: "SEO Ready",
    description:
      "Clean page structures, semantic markup, metadata and technical foundations help search engines understand your website.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description:
      "Modern development practices help create stable, maintainable and dependable digital platforms.",
  },
  {
    icon: Code2,
    title: "Scalable Architecture",
    description:
      "Flexible architectures allow your website to evolve as your business, content and functionality grow.",
  },
];

/* ==========================================================================
   TYPES OF WEBSITES
   ========================================================================== */

const solutions = [
  {
    icon: Globe,
    title: "Business Websites",
    description:
      "Professional websites that establish credibility, explain your services and turn visitors into potential customers.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Websites",
    description:
      "Conversion-focused online stores designed around product discovery, customer experience and business growth.",
  },
  {
    icon: Layers3,
    title: "Web Applications",
    description:
      "Interactive platforms and custom web applications built around specific workflows, users and business requirements.",
  },
  {
    icon: BarChart3,
    title: "Business Platforms",
    description:
      "Scalable digital platforms that bring together content, customers, processes and business functionality.",
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
      "We understand your business, audience, goals, competitors and technical requirements.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "We define the website structure, user journeys, technology stack and development roadmap.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create a polished visual experience focused on usability, clarity, branding and conversion.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Our team turns the approved design into a responsive, optimized and production-ready website.",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "We test responsiveness, functionality, performance and important user journeys before launch.",
  },
  {
    number: "06",
    title: "Launch",
    description:
      "After final optimization and checks, your website is prepared for production and launch.",
  },
];

/* ==========================================================================
   TECHNOLOGIES
   ========================================================================== */

const technologies = [
  {
    name: "Next.js",
    lightImage: "/images/technologies/next.png",
    darkImage: "/images/technologies/dark/nextjs-dark.png",
    description: "High-performance React framework",
  },
  {
    name: "React",
    lightImage: "/images/technologies/react.png",
    darkImage: "/images/technologies/dark/react-dark.png",
    description: "Modern interactive interfaces",
  },
  {
    name: "TypeScript",
    lightImage: "/images/technologies/typescript.png",
    darkImage: "/images/technologies/dark/typescript-dark.png",
    description: "Reliable typed development",
  },
  {
    name: "Laravel",
    lightImage: "/images/technologies/laravel.png",
    darkImage: "/images/technologies/dark/laravel-dark.png",
    description: "Powerful backend applications",
  },
  {
    name: "PHP",
    lightImage: "/images/technologies/php.png",
    darkImage: "/images/technologies/dark/php-dark.png",
    description: "Flexible server-side development",
  },
  {
    name: "Tailwind CSS",
    lightImage: "/images/technologies/tailwind.png",
    darkImage: "/images/technologies/dark/tailwind-dark.png",
    description: "Fast modern UI development",
  },
  {
    name: "MySQL",
    lightImage: "/images/technologies/mysql.png",
    darkImage: "/images/technologies/dark/mysql-dark.png",
    description: "Reliable relational databases",
  },
  {
    name: "Node.js",
    lightImage: "/images/technologies/nodejs.png",
    darkImage: "/images/technologies/dark/nodejs-dark.png",
    description: "Scalable server-side applications",
  },
];

/* ==========================================================================
   DEVELOPMENT BENEFITS
   ========================================================================== */

const benefits = [
  "Mobile-first responsive development",
  "SEO-friendly technical structure",
  "Optimized loading performance",
  "Clean and maintainable code",
  "Secure development practices",
  "Scalable architecture",
  "Cross-browser compatibility",
  "Analytics and conversion ready",
];

/* ==========================================================================
   PAGE
   ========================================================================== */

export default function WebsiteDevelopmentPage() {
  return (
    <>
      {/* ====================================================================
          HERO
          ==================================================================== */}

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
        {/* Section heading */}
        <Container>
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
              Modern Technology. Built for Growth.
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
              We work with modern, reliable technologies to build fast, scalable
              and maintainable websites and digital platforms tailored to your
              business needs.
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
                <div
                  key={`technology-first-${technology.name}`}
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
              ))}
            </div>

            {/* Exact duplicate for seamless loop */}
            <div
              aria-hidden="true"
              className="flex shrink-0 items-center gap-4 sm:gap-5 lg:gap-6"
            >
              {technologies.map((technology) => (
                <div
                  key={`technology-second-${technology.name}`}
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

              sm:h-[74px]
              sm:gap-3.5
              sm:px-6

              lg:h-[78px]
              lg:px-7

              dark:border-white/10
              dark:bg-[#111111]
              dark:shadow-[0_4px_16px_rgba(0,0,0,0.18)]
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
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ====================================================================
          FEATURES — WHAT WE BUILD
          ==================================================================== */}

      <section className="bg-[var(--background)] py-24 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
              What We Build
            </span>

            <h2 className="mt-7 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
              More Than Just a Website
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              Your website is often the first interaction customers have with
              your business. We combine design, technology and strategy to
              create experiences that are built for real business outcomes.
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

      {/* ====================================================================
          TYPES OF SOLUTIONS
          ==================================================================== */}

      <section className="bg-[var(--card)] py-24 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-32">
              <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
                Digital Solutions
              </span>

              <h2 className="mt-7 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
                Built Around What Your Business Needs
              </h2>

              <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
                From a focused business website to a complex web platform, we
                choose the right architecture and technology for the job.
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
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 transition-colors duration-300 group-hover:bg-red-500">
                      <Icon
                        size={25}
                        className="text-red-500 transition-colors duration-300 group-hover:text-white"
                      />
                    </div>

                    <h3 className="mt-7 text-xl font-bold text-[var(--foreground)]">
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
          PROCESS
          ==================================================================== */}

      <section className="bg-[var(--background)] py-24 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
              Our Process
            </span>

            <h2 className="mt-7 text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
              From Idea to Launch
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              A structured process keeps your project focused, transparent and
              moving forward from the first conversation to launch.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {process.map((step) => (
              <div
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
                <span className="text-5xl font-black text-red-500/15 transition-colors duration-300 group-hover:text-red-500/25">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-[var(--foreground)]">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-[var(--muted)]">
                  {step.description}
                </p>

                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-red-500/5 blur-2xl transition-opacity duration-300 group-hover:bg-red-500/10" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ====================================================================
          DEVELOPMENT BENEFITS
          ==================================================================== */}

      <section className="bg-[var(--card)] py-24 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
                Development Standards
              </span>

              <h2 className="mt-7 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
                Designed for Today.
                <span className="block text-red-500">Ready for Tomorrow.</span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
                We don't just focus on how a website looks. Our development
                process considers performance, usability, maintainability,
                discoverability and future growth.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-[var(--border)]
                    bg-[var(--background)]
                    px-5
                    py-4
                  "
                >
                  <CheckCircle2 size={19} className="shrink-0 text-red-500" />

                  <span className="text-sm font-medium text-[var(--foreground)]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ====================================================================
          TECHNOLOGIES
          ==================================================================== */}

      <section className="bg-[var(--background)] py-24 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
              Technologies
            </span>

            <h2 className="mt-7 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
              Built With Modern Technology
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              We select technologies based on your project's requirements,
              performance goals, scalability and long-term maintainability.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-5">
            {technologies.map((technology) => (
              <article
                key={technology.name}
                className="
                  group
                  rounded-[24px]
                  border
                  border-[var(--border)]
                  bg-[var(--card)]
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
                    bg-[var(--background)]
                    p-3
                    transition-all
                    duration-300
                    group-hover:border-red-500/20
                    group-hover:bg-red-500/5
                  "
                >
                  <Image
                    src={technology.lightImage}
                    alt={`${technology.name} logo`}
                    width={48}
                    height={48}
                    className="h-10 w-10 object-contain dark:hidden"
                  />

                  <Image
                    src={technology.darkImage}
                    alt=""
                    width={48}
                    height={48}
                    className="hidden h-10 w-10 object-contain dark:block"
                  />
                </div>

                <h3 className="mt-5 text-base font-bold text-[var(--foreground)] sm:text-lg">
                  {technology.name}
                </h3>

                <p className="mt-2 text-xs leading-5 text-[var(--muted)] sm:text-sm">
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

      <CallToAction />

      <Footer />
    </>
  );
}
