import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  BarChart3,
  Bell,
  CheckCircle2,
  Cloud,
  Database,
  Globe,
  Layers3,
  Palette,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  TabletSmartphone,
  Users,
  Zap,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import MobileAppHero from "@/components/services/MobileAppHero";

export const metadata: Metadata = {
  title: "Mobile App Development | Atria Web Solutions",
  description:
    "Custom mobile application development for iOS and Android, focused on performance, usability, scalability and great digital experiences.",
};

/* ==========================================================================
   WHAT WE BUILD
   ========================================================================== */

const services = [
  {
    icon: Smartphone,
    title: "Custom Mobile Apps",
    description:
      "Purpose-built mobile applications designed around your users, workflows, business model and product goals.",
  },
  {
    icon: Palette,
    title: "Mobile UI / UX Design",
    description:
      "Clean, intuitive and engaging interfaces designed specifically for mobile users, touch interactions and smaller screens.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Fast and responsive applications engineered for smooth interactions, efficient loading and reliable performance.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Applications",
    description:
      "Security-conscious development practices designed to protect users, application functionality and important data.",
  },
  {
    icon: Layers3,
    title: "Scalable Architecture",
    description:
      "Flexible application foundations that can grow with your users, features, integrations and business requirements.",
  },
  {
    icon: Rocket,
    title: "App Launch Support",
    description:
      "From testing and optimization to release preparation, we help move your application confidently toward launch.",
  },
];

/* ==========================================================================
   TYPES OF MOBILE SOLUTIONS
   ========================================================================== */

const solutions = [
  {
    icon: Smartphone,
    title: "Consumer Mobile Apps",
    description:
      "Engaging mobile experiences built for customers, communities and audiences who interact with your business through their phones.",
  },
  {
    icon: Users,
    title: "Business Mobile Apps",
    description:
      "Custom applications that help teams manage customers, workflows, operations and business processes from anywhere.",
  },
  {
    icon: Globe,
    title: "On-Demand Apps",
    description:
      "Mobile platforms that connect customers, service providers and businesses through streamlined digital experiences.",
  },
  {
    icon: TabletSmartphone,
    title: "Cross-Platform Apps",
    description:
      "Efficient mobile applications designed to deliver consistent experiences across iOS, Android and different screen sizes.",
  },
];

/* ==========================================================================
   WHY ATRIA
   ========================================================================== */

const reasons = [
  "User-focused mobile experiences",
  "Performance-first development",
  "Intuitive touch-friendly interfaces",
  "Cross-platform development expertise",
  "Secure application foundations",
  "Scalable backend integrations",
];

/* ==========================================================================
   PROCESS
   ========================================================================== */

const process = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your users, business requirements, product goals, features and the problem your application needs to solve.",
  },
  {
    number: "02",
    title: "UX & Planning",
    description:
      "We map user journeys, define the application structure, prioritize features and create a clear development roadmap.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We transform your product idea into a polished mobile interface designed around usability and consistency.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Our team builds the application with a focus on quality, performance, security, integrations and scalability.",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "We test functionality, responsiveness, performance and important user journeys across supported mobile devices.",
  },
  {
    number: "06",
    title: "Launch",
    description:
      "After final optimization and quality checks, we prepare your application for deployment and release.",
  },
];

/* ==========================================================================
   MOBILE DEVELOPMENT STANDARDS
   ========================================================================== */

const standards = [
  {
    icon: Smartphone,
    title: "Mobile-First Experience",
    description:
      "Interfaces are designed around real mobile usage patterns, touch interactions and simple navigation.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description:
      "Efficient application architecture and optimized assets help deliver fast interactions and smoother experiences.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description:
      "Authentication, permissions, data handling and secure communication are considered throughout development.",
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description:
      "Connect your application with cloud services for authentication, storage, notifications and other mobile functionality.",
  },
  {
    icon: Server,
    title: "API Integration",
    description:
      "Connect mobile applications with REST APIs, business systems, payment platforms and external services.",
  },
  {
    icon: Database,
    title: "Reliable Data",
    description:
      "Structured data communication helps your application work reliably with backend systems and services.",
  },
  {
    icon: Bell,
    title: "Push Notifications",
    description:
      "Keep users informed with useful notifications, reminders, updates and important application events.",
  },
  {
    icon: BarChart3,
    title: "Analytics Ready",
    description:
      "Track meaningful application usage, engagement and conversion data to understand how users interact with your product.",
  },
];

/* ==========================================================================
   MOBILE TECHNOLOGY STACK
   ========================================================================== */

const technologies = [
  {
    name: "React Native",
    description: "Cross-platform mobile development",
    image: "/images/mobile-app-development/light/react-native.png",
    darkImage: "/images/mobile-app-development/dark/react-native.png",
  },
  {
    name: "Flutter",
    description: "Cross-platform app development",
    image: "/images/mobile-app-development/light/flutter.png",
    darkImage: "/images/mobile-app-development/dark/flutter.png",
  },
  {
    name: "Expo",
    description: "Modern React Native workflow",
    image: "/images/mobile-app-development/light/expo.png",
    darkImage: "/images/mobile-app-development/dark/expo.png",
  },
  {
    name: "Kotlin",
    description: "Native Android development",
    image: "/images/mobile-app-development/light/kotlin.png",
    darkImage: "/images/mobile-app-development/dark/kotlin.png",
  },
  {
    name: "Swift",
    description: "Native iOS development",
    image: "/images/mobile-app-development/light/swift.png",
    darkImage: "/images/mobile-app-development/dark/swift.png",
  },
  {
    name: "Firebase",
    description: "Mobile backend and cloud services",
    image: "/images/mobile-app-development/light/firebase.png",
    darkImage: "/images/mobile-app-development/dark/firebase.png",
  },
  {
    name: "Node.js",
    description: "Scalable application backend",
    image: "/images/mobile-app-development/light/nodejs.png",
    darkImage: "/images/mobile-app-development/dark/nodejs.png",
  },
  {
    name: "REST APIs",
    description: "Mobile and backend integration",
    image: "/images/mobile-app-development/light/rest-apis.png",
    darkImage: "/images/mobile-app-development/dark/rest-apis.png",
  },
];

/* ==========================================================================
   PAGE
   ========================================================================== */

export default function MobileAppDevelopmentPage() {
  return (
    <>
      {/* ====================================================================
          HERO
          ==================================================================== */}

      <MobileAppHero />

      {/* ====================================================================
          MOBILE TECHNOLOGY MARQUEE
          ==================================================================== */}

      <section
        aria-label="Mobile development technologies"
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
        {/* Left fade */}
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

        {/* Right fade */}
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
              (technology, index) => {
                return (
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
                        sm:h-10
                        sm:w-10
                      "
                    >
                      {/* Light logo */}
                      <Image
                        src={technology.image}
                        alt=""
                        width={22}
                        height={22}
                        sizes="22px"
                        className="
                          h-5
                          w-5
                          object-contain
                          dark:hidden
                        "
                      />

                      {/* Dark logo */}
                      <Image
                        src={technology.darkImage}
                        alt=""
                        width={22}
                        height={22}
                        sizes="22px"
                        className="
                          hidden
                          h-5
                          w-5
                          object-contain
                          dark:block
                        "
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

                    <span
                      className="
                        h-1.5
                        w-1.5
                        shrink-0
                        rounded-full
                        bg-red-500
                      "
                    />
                  </div>
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* ====================================================================
          WHAT WE BUILD
          ==================================================================== */}

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
              More Than Just a Mobile App
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              A successful mobile product needs more than attractive
              screens. We combine product thinking, mobile UX and
              engineering to create applications that are useful,
              reliable and ready to grow.
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
          TYPES OF MOBILE SOLUTIONS
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
                Mobile Solutions
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
                Built Around What Your App Needs to Do
              </h2>

              <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
                From customer-facing products to internal business
                applications, we design the experience and technology
                around the people who will actually use it.
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
                Built Around Your Users.
                <span className="block text-red-500">
                  Ready for Growth.
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
                A successful application is more than a collection of
                features. We focus on creating mobile experiences that
                are intuitive, reliable, secure and capable of evolving
                with your business.
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
                text-[var(--foreground)]
                sm:text-5xl
              "
            >
              From Idea to App Store
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              A clear and collaborative process keeps your application
              moving from the first idea through design, development,
              testing and launch.
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
          MOBILE DEVELOPMENT STANDARDS
          ==================================================================== */}

      <section className="bg-[var(--background)] py-24 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
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
                Mobile Development
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
                Designed for Mobile.
                <span className="block text-red-500">
                  Engineered to Scale.
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
                We consider the complete mobile experience — from
                touch interactions and performance to APIs, security,
                notifications and the infrastructure supporting your
                application.
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
          TECHNOLOGIES
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
              Mobile Technology Stack
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
              Built With the Right Mobile Technology
            </h2>

            <p
              className="
                mt-6
                text-lg
                leading-8
                text-[var(--muted)]
              "
            >
              We select the right mobile technologies based on your
              application's platform, performance requirements,
              functionality, integrations and long-term growth.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-5">
            {technologies.map((technology) => {
              return (
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
                      transition-all
                      duration-300
                      group-hover:border-red-500/20
                      group-hover:bg-red-500/5
                    "
                  >
                    {/* Light logo */}
                    <Image
                      src={technology.image}
                      alt={`${technology.name} logo`}
                      width={44}
                      height={44}
                      sizes="44px"
                      className="
                        h-11
                        w-11
                        object-contain
                        transition-transform
                        duration-300
                        group-hover:scale-110
                        dark:hidden
                      "
                    />

                    {/* Dark logo */}
                    <Image
                      src={technology.darkImage}
                      alt={`${technology.name} logo`}
                      width={44}
                      height={44}
                      sizes="44px"
                      className="
                        hidden
                        h-11
                        w-11
                        object-contain
                        transition-transform
                        duration-300
                        group-hover:scale-110
                        dark:block
                      "
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
              );
            })}
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
                Have an app idea?
              </h2>

              <p className="mt-2 text-sm text-white/80 sm:text-base">
                Let's turn your idea into a mobile product people love
                to use.
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