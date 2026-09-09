import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Mail,
  Megaphone,
  MousePointerClick,
  Repeat,
  Send,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import EmailMarketingHero from "@/components/services/EmailMarketingHero";

export const metadata: Metadata = {
  title: "Email Marketing | Atria Web Solutions",
  description:
    "Strategic email marketing campaigns, automation and lifecycle journeys designed to engage audiences, nurture leads and drive business growth.",
};

/* ==========================================================================
   EMAIL MARKETING ASSETS
   ========================================================================== */

const emailAssets = {
  campaignStrategy: {
    light: "/images/email/light/campaign-strategy.png",
    dark: "/images/email/dark/campaign-strategy.png",
  },
  emailAutomation: {
    light: "/images/email/light/email-automation.png",
    dark: "/images/email/dark/email-automation.png",
  },
  newsletterMarketing: {
    light: "/images/email/light/newsletter-marketing.png",
    dark: "/images/email/dark/newsletter-marketing.png",
  },
  leadNurturing: {
    light: "/images/email/light/lead-nurturing.png",
    dark: "/images/email/dark/lead-nurturing.png",
  },
  customerRetention: {
    light: "/images/email/light/customer-retention.png",
    dark: "/images/email/dark/customer-retention.png",
  },
  promotionalCampaigns: {
    light: "/images/email/light/promotional-campaigns.png",
    dark: "/images/email/dark/promotional-campaigns.png",
  },
  audienceSegmentation: {
    light: "/images/email/light/audience-segmentation.png",
    dark: "/images/email/dark/audience-segmentation.png",
  },
  personalization: {
    light: "/images/email/light/personalization.png",
    dark: "/images/email/dark/personalization.png",
  },
  emailAnalytics: {
    light: "/images/email/light/email-analytics.png",
    dark: "/images/email/dark/email-analytics.png",
  },
  conversionOptimization: {
    light: "/images/email/light/conversion-optimization.png",
    dark: "/images/email/dark/conversion-optimization.png",
  },
};

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
   MARQUEE
   ========================================================================== */

const marqueeItems = [
  {
    name: "Campaign Strategy",
    asset: emailAssets.campaignStrategy,
  },
  {
    name: "Email Automation",
    asset: emailAssets.emailAutomation,
  },
  {
    name: "Newsletter Marketing",
    asset: emailAssets.newsletterMarketing,
  },
  {
    name: "Lead Nurturing",
    asset: emailAssets.leadNurturing,
  },
  {
    name: "Customer Retention",
    asset: emailAssets.customerRetention,
  },
  {
    name: "Promotional Campaigns",
    asset: emailAssets.promotionalCampaigns,
  },
  {
    name: "Audience Segmentation",
    asset: emailAssets.audienceSegmentation,
  },
  {
    name: "Personalization",
    asset: emailAssets.personalization,
  },
  {
    name: "Email Analytics",
    asset: emailAssets.emailAnalytics,
  },
  {
    name: "Conversion Optimization",
    asset: emailAssets.conversionOptimization,
  },
];

/* ==========================================================================
   SERVICES
   ========================================================================== */

const services = [
  {
    asset: emailAssets.campaignStrategy,
    icon: Send,
    title: "Campaign Management",
    description:
      "Plan, create and manage targeted email campaigns around your business goals, audience and customer journey.",
  },
  {
    asset: emailAssets.conversionOptimization,
    icon: MousePointerClick,
    title: "Conversion-Focused Emails",
    description:
      "Create compelling email experiences with focused messaging, persuasive content and clear calls to action.",
  },
  {
    asset: emailAssets.emailAutomation,
    icon: Repeat,
    title: "Email Automation",
    description:
      "Build automated communication journeys that keep your audience engaged at important moments without constant manual work.",
  },
  {
    asset: emailAssets.leadNurturing,
    icon: Users,
    title: "Lead Nurturing",
    description:
      "Guide prospects from initial interest toward stronger buying intent through relevant and timely communication.",
  },
  {
    asset: emailAssets.promotionalCampaigns,
    icon: Megaphone,
    title: "Promotional Campaigns",
    description:
      "Promote launches, offers, events, products and important business updates directly to your audience.",
  },
  {
    asset: emailAssets.emailAnalytics,
    icon: BarChart3,
    title: "Performance Tracking",
    description:
      "Measure campaign engagement and identify opportunities to improve messaging, timing, audiences and conversions.",
  },
];

/* ==========================================================================
   SOLUTIONS
   ========================================================================== */

const solutions = [
  {
    asset: emailAssets.newsletterMarketing,
    icon: Mail,
    title: "Welcome & Onboarding",
    description:
      "Turn new subscribers into engaged audiences with thoughtful welcome sequences that introduce your brand and value.",
  },
  {
    asset: emailAssets.leadNurturing,
    icon: Users,
    title: "Lead Nurturing",
    description:
      "Keep potential customers engaged with educational, relevant and timely communication throughout the decision-making journey.",
  },
  {
    asset: emailAssets.promotionalCampaigns,
    icon: Megaphone,
    title: "Promotional & Sales",
    description:
      "Create focused campaigns for launches, offers, seasonal promotions, events and sales opportunities.",
  },
  {
    asset: emailAssets.customerRetention,
    icon: Repeat,
    title: "Retention & Re-Engagement",
    description:
      "Reconnect with inactive subscribers and build stronger long-term relationships with existing customers.",
  },
];

/* ==========================================================================
   CUSTOMER JOURNEY
   ========================================================================== */

const journey = [
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
    icon: Target,
    title: "Customer",
    text: "Conversion journey",
  },
  {
    icon: Repeat,
    title: "Returning",
    text: "Retention & loyalty",
  },
];

/* ==========================================================================
   PROCESS
   ========================================================================== */

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, audience, goals, existing database and current email marketing setup.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "We define campaign themes, messaging, customer journeys, content direction and measurable objectives.",
  },
  {
    number: "03",
    title: "Segment",
    description:
      "We identify meaningful audience groups so your communication can be more relevant and personalized.",
  },
  {
    number: "04",
    title: "Create",
    description:
      "Our team develops the email content, structure, design, calls to action and automated sequences.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "Campaigns are reviewed, tested and delivered to the appropriate audience at the right time.",
  },
  {
    number: "06",
    title: "Optimize",
    description:
      "We study performance and use campaign insights to continuously improve future communication.",
  },
];

/* ==========================================================================
   STANDARDS
   ========================================================================== */

const standards = [
  "Responsive email experiences",
  "Clear and focused calls to action",
  "Audience segmentation",
  "Personalized messaging",
  "Consistent brand communication",
  "Structured customer journeys",
  "Performance measurement",
  "Continuous optimization",
];

/* ==========================================================================
   DELIVERABLES
   ========================================================================== */

const deliverables = [
  "Email marketing strategy",
  "Campaign planning",
  "Newsletter design",
  "Promotional campaigns",
  "Welcome sequences",
  "Lead nurturing flows",
  "Automated customer journeys",
  "Retention campaigns",
  "Audience segmentation",
  "Campaign reporting",
  "Performance optimization",
  "Email content direction",
];

/* ==========================================================================
   PAGE
   ========================================================================== */

export default function EmailMarketingPage() {
  return (
    <>
      {/* ====================================================================
          HERO
          ==================================================================== */}

      <EmailMarketingHero />

      {/* ====================================================================
          EMAIL MARKETING MARQUEE
          ==================================================================== */}

      <section
        aria-label="Email marketing capabilities"
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
          WHAT WE DO
          ==================================================================== */}

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
              Email That Works Beyond the Send Button
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              We create email marketing systems that do more than fill
              inboxes. From individual campaigns to automated lifecycle
              journeys, every communication is designed to build relationships
              and support measurable business growth.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
                  <div className="flex items-center justify-between">
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
                      "
                    >
                      <ThemeImage
                        light={service.asset.light}
                        dark={service.asset.dark}
                        alt=""
                        width={52}
                        height={52}
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

                    <span
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-red-500/5
                        text-red-500/60
                        transition-colors
                        group-hover:bg-red-500
                        group-hover:text-white
                      "
                    >
                      <Icon size={19} />
                    </span>
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
          SOLUTIONS
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
              Email Marketing Solutions
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
              Communication for Every Stage of the Customer Journey
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              Your audience needs different communication at different stages.
              We build email campaigns and journeys around those moments.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2">
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
                  <div className="flex items-start gap-5">
                    <div
                      className="
                        flex
                        h-16
                        w-16
                        shrink-0
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
                        width={52}
                        height={52}
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

                    <div className="min-w-0">
                      <div className="flex items-center gap-3">
                        <h3
                          className="
                            text-xl
                            font-bold
                            text-[var(--foreground)]
                          "
                        >
                          {solution.title}
                        </h3>

                        <Icon
                          size={18}
                          className="
                            shrink-0
                            text-red-500/50
                            transition-colors
                            group-hover:text-red-500
                          "
                        />
                      </div>

                      <p className="mt-3 leading-7 text-[var(--muted)]">
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
                Don&apos;t Just Send Emails.
                <br />
                <span className="text-red-500">Build Relationships.</span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
                Your audience doesn&apos;t need more noise in their inbox.
                They need useful communication that arrives at the right
                moment. We combine strategy, creative thinking, automation and
                performance insights to make every campaign more purposeful.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Audience segmentation",
                  "Personalized messaging",
                  "Automated journeys",
                  "Conversion-focused campaigns",
                  "Consistent brand voice",
                  "Continuous optimization",
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

            <div
              className="
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-[var(--border)]
                bg-[var(--card)]
                p-7
                shadow-[var(--shadow-md)]
              "
            >
              <div className="absolute -right-20 -top-20 size-48 rounded-full bg-red-500/10 blur-3xl" />

              <div className="relative flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
                    Email Strategy
                  </p>

                  <h3
                    className="
                      mt-3
                      text-2xl
                      font-bold
                      text-[var(--foreground)]
                    "
                  >
                    The Right Message.
                    <br />
                    The Right Moment.
                  </h3>
                </div>

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-2xl
                    bg-red-500/10
                  "
                >
                  <ThemeImage
                    light={emailAssets.personalization.light}
                    dark={emailAssets.personalization.dark}
                    alt=""
                    width={40}
                    height={40}
                    className="h-9 w-9 object-contain"
                  />
                </div>
              </div>

              <div className="relative mt-8 space-y-3">
                {[
                  {
                    title: "Audience",
                    text: "Understand who you are communicating with",
                  },
                  {
                    title: "Message",
                    text: "Deliver content that is relevant and useful",
                  },
                  {
                    title: "Timing",
                    text: "Reach people when communication matters",
                  },
                  {
                    title: "Action",
                    text: "Guide subscribers toward the next step",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-2xl
                      border
                      border-[var(--border)]
                      bg-[var(--background)]
                      p-4
                    "
                  >
                    <div
                      className="
                        grid
                        size-10
                        shrink-0
                        place-items-center
                        rounded-xl
                        bg-red-500/10
                        text-sm
                        font-bold
                        text-red-500
                      "
                    >
                      0{index + 1}
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-[var(--foreground)]">
                        {item.title}
                      </p>

                      <p className="mt-0.5 text-xs leading-5 text-[var(--muted)]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ====================================================================
          CUSTOMER JOURNEY
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
              Customer Journey
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
              Turn Subscribers Into Long-Term Customers
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              A strong email strategy connects individual campaigns into a
              meaningful journey instead of treating every send as a separate
              message.
            </p>
          </div>

          <div className="relative mt-16">
            <div
              className="
                absolute
                left-[10%]
                right-[10%]
                top-8
                hidden
                h-px
                bg-red-500/20
                lg:block
              "
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {journey.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="
                      relative
                      rounded-2xl
                      border
                      border-[var(--border)]
                      bg-[var(--background)]
                      p-6
                      text-center
                    "
                  >
                    <div
                      className="
                        relative
                        mx-auto
                        grid
                        size-16
                        place-items-center
                        rounded-2xl
                        border
                        border-red-500/20
                        bg-red-500/10
                        text-red-500
                      "
                    >
                      <Icon size={24} />
                    </div>

                    <span
                      className="
                        mt-5
                        block
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-red-500
                      "
                    >
                      Step 0{index + 1}
                    </span>

                    <h3
                      className="
                        mt-2
                        text-base
                        font-bold
                        text-[var(--foreground)]
                      "
                    >
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-[var(--muted)]">
                      {item.text}
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
              From Strategy to Send
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              A structured workflow keeps your email marketing focused,
              relevant, consistent and measurable.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {process.map((step) => (
              <article
                key={step.number}
                className="
                  group
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
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ====================================================================
          STANDARDS
          ==================================================================== */}

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
                Our Standards
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
                Built for Better Email Experiences
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
                Every campaign should look professional, communicate clearly
                and support a measurable business objective. We keep these
                principles at the center of our email marketing work.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {standards.map((item, index) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-[var(--border)]
                    bg-[var(--background)]
                    p-5
                  "
                >
                  <span
                    className="
                      grid
                      size-9
                      shrink-0
                      place-items-center
                      rounded-lg
                      bg-red-500/10
                      text-xs
                      font-bold
                      text-red-500
                    "
                  >
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

      {/* ====================================================================
          DELIVERABLES
          ==================================================================== */}

      <section className="bg-[var(--background)] py-24 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
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
                Deliverables
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
                Everything Your Email Strategy Needs
              </h2>

              <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
                From campaign planning and creative direction to automated
                journeys and performance reporting, we help create a
                repeatable communication system for your business.
              </p>

              <Link
                href="/contact"
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-red-500
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-red-600
                "
              >
                Discuss Your Strategy
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {deliverables.map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-[var(--border)]
                    bg-[var(--card)]
                    px-5
                    py-4
                  "
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
              p-8
              text-white
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:p-10
            "
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-white/15
                  "
                >
                  <Mail size={20} />
                </span>

                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
                  Email Marketing
                </p>
              </div>

              <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
                Ready to Make Your Emails Work Harder?
              </h2>

              <p className="mt-2 text-sm leading-6 text-white/80">
                Let&apos;s create campaigns and customer journeys your audience
                actually wants to open, read and act on.
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
                py-3.5
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