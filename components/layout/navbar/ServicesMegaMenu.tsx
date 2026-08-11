"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  Code2,
  ShoppingCart,
  BarChart3,
  Smartphone,
  Palette,
  Mail,
  UserRoundCheck,
  Globe2,
  MonitorSmartphone,
  Database,
  Rocket,
  Headphones,
  ArrowRight,
} from "lucide-react";

import { useProjectModal } from "@/hooks/useProjectModal";

const services = [
  {
    title: "Web Development",
    href: "/services/web-development",
    icon: Code2,
    eyebrow: "WEB DEVELOPMENT",
    heading: "Powerful Websites for Modern Businesses",
    description:
      "We build fast, secure and scalable websites that deliver exceptional user experiences.",
    image: "/images/services/web-development.webp",

    features: [
      {
        icon: Globe2,
        title: "Custom Website Development",
        description:
          "Tailor-made websites designed to match your business goals.",
      },
      {
        icon: MonitorSmartphone,
        title: "Responsive Web Design",
        description: "Pixel-perfect designs that look great on every device.",
      },
      {
        icon: Database,
        title: "CMS Development",
        description: "WordPress, Webflow, Laravel & custom CMS solutions.",
      },
      {
        icon: Rocket,
        title: "Website Maintenance",
        description: "Ongoing support to keep your website fast and secure.",
      },
    ],
  },

  {
    title: "E-Commerce Solutions",
    href: "/services/ecommerce",
    icon: ShoppingCart,
    eyebrow: "E-COMMERCE",
    heading: "Online Stores Built to Convert",
    description:
      "Create a powerful online store with a smooth shopping experience and scalable architecture.",
    image: "/images/services/ecommerce.webp",

    features: [
      {
        icon: ShoppingCart,
        title: "Custom E-Commerce",
        description:
          "Conversion-focused online stores built around your business.",
      },
      {
        icon: Globe2,
        title: "Payment Integration",
        description:
          "Secure payment gateways and streamlined checkout experiences.",
      },
      {
        icon: Database,
        title: "Product Management",
        description:
          "Flexible product, inventory and order management systems.",
      },
      {
        icon: Rocket,
        title: "Store Optimization",
        description: "Improve speed, usability and conversion performance.",
      },
    ],
  },

  {
    title: "SEO & Digital Marketing",
    href: "/services/seo-digital-marketing",
    icon: BarChart3,
    eyebrow: "SEO & DIGITAL MARKETING",
    heading: "Grow Your Visibility Online",
    description:
      "Data-driven digital marketing strategies designed to increase visibility, traffic and leads.",
    image: "/images/services/seo.webp",

    features: [
      {
        icon: BarChart3,
        title: "SEO Optimization",
        description:
          "Improve search visibility and attract relevant organic traffic.",
      },
      {
        icon: Globe2,
        title: "Local SEO",
        description: "Help local customers discover your business online.",
      },
      {
        icon: BarChart3,
        title: "Analytics & Reporting",
        description: "Track performance with meaningful insights and reports.",
      },
      {
        icon: Rocket,
        title: "Growth Strategy",
        description:
          "Long-term strategies focused on measurable business growth.",
      },
    ],
  },

  {
    title: "Mobile App Development",
    href: "/services/mobile-app-development",
    icon: Smartphone,
    eyebrow: "MOBILE APP DEVELOPMENT",
    heading: "Mobile Experiences That Users Love",
    description:
      "Build intuitive and reliable mobile applications designed for modern users.",
    image: "/images/services/mobile.webp",

    features: [
      {
        icon: Smartphone,
        title: "Custom Applications",
        description: "Mobile apps tailored to your business requirements.",
      },
      {
        icon: MonitorSmartphone,
        title: "Responsive Experiences",
        description: "Consistent experiences across different screen sizes.",
      },
      {
        icon: Database,
        title: "API Integration",
        description: "Connect your application with powerful backend systems.",
      },
      {
        icon: Rocket,
        title: "App Optimization",
        description: "Fast, stable and performance-focused applications.",
      },
    ],
  },

  {
    title: "Branding & Design",
    href: "/services/branding-design",
    icon: Palette,
    eyebrow: "BRANDING & DESIGN",
    heading: "Build a Brand People Remember",
    description:
      "Create a distinctive visual identity that communicates your brand clearly.",
    image: "/images/services/branding.webp",

    features: [
      {
        icon: Palette,
        title: "Brand Identity",
        description: "Create a consistent and memorable visual identity.",
      },
      {
        icon: MonitorSmartphone,
        title: "UI / UX Design",
        description:
          "User-focused interfaces designed for clarity and conversion.",
      },
      {
        icon: Globe2,
        title: "Website Design",
        description: "Modern interfaces aligned with your brand identity.",
      },
      {
        icon: Rocket,
        title: "Design Systems",
        description: "Reusable components for consistent digital experiences.",
      },
    ],
  },

  {
    title: "Email Marketing",
    href: "/services/email-marketing",
    icon: Mail,
    eyebrow: "EMAIL MARKETING",
    heading: "Turn Conversations Into Customers",
    description:
      "Reach your audience with targeted campaigns and effective communication strategies.",
    image: "/images/services/email.webp",

    features: [
      {
        icon: Mail,
        title: "Campaign Management",
        description: "Plan and manage effective email campaigns.",
      },
      {
        icon: UserRoundCheck,
        title: "Audience Segmentation",
        description: "Deliver relevant content to the right audience.",
      },
      {
        icon: BarChart3,
        title: "Performance Tracking",
        description: "Measure opens, clicks and campaign performance.",
      },
      {
        icon: Rocket,
        title: "Automation",
        description:
          "Build automated journeys that save time and improve results.",
      },
    ],
  },

  {
    title: "Online Reputation Management",
    href: "/services/online-reputation-management",
    icon: UserRoundCheck,
    eyebrow: "ONLINE REPUTATION",
    heading: "Build Trust Around Your Brand",
    description:
      "Protect and strengthen your online presence through proactive reputation management.",
    image: "/images/services/reputation.webp",

    features: [
      {
        icon: UserRoundCheck,
        title: "Review Management",
        description: "Monitor and manage customer reviews across platforms.",
      },
      {
        icon: Globe2,
        title: "Online Presence",
        description: "Build a consistent and trustworthy digital presence.",
      },
      {
        icon: BarChart3,
        title: "Reputation Monitoring",
        description: "Track what customers are saying about your brand.",
      },
      {
        icon: Rocket,
        title: "Brand Growth",
        description:
          "Turn positive customer experiences into stronger brand trust.",
      },
    ],
  },
];

export default function ServicesMegaMenu() {
  const [activeIndex, setActiveIndex] = useState(0);

  const { openModal } = useProjectModal();

  const activeService = services[activeIndex];
  const ActiveIcon = activeService.icon;

  return (
    <div
      className="
        fixed
        left-1/2
        top-[120px]
        z-[100]
        w-[calc(100vw-48px)]
        max-w-[1170px]
        -translate-x-1/2

        overflow-hidden
        rounded-[28px]

        border
        border-gray-200

        bg-white

        shadow-[0_30px_80px_rgba(0,0,0,.16)]

        dark:border-white/10
        dark:bg-[#090909]
        dark:shadow-[0_30px_80px_rgba(0,0,0,.5)]
      "
    >
      {/* Arrow */}

      <div
        className="
          absolute
          -top-[10px]
          left-[43%]

          h-5
          w-5

          rotate-45

          border-l
          border-t
          border-gray-200

          bg-white

          dark:border-white/10
          dark:bg-[#090909]
        "
      />

      {/* Main Content */}

      <div className="grid grid-cols-[300px_1fr]">
        {/* LEFT SIDE */}

        <div
          className="
            border-r
            border-gray-200
            p-7

            dark:border-white/10
          "
        >
          {/* Heading */}

          <div>
            <span
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-red-500
              "
            >
              All Services
            </span>

            <div className="mt-4 h-[2px] w-12 bg-red-500" />
          </div>

          {/* Services */}

          <div className="mt-7 space-y-1">
            {services.map((service, index) => {
              const Icon = service.icon;
              const active = index === activeIndex;

              return (
                <Link
                  key={service.title}
                  href={service.href}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  className={`
                    group
                    flex
                    w-full
                    items-center
                    gap-4
                    rounded-xl
                    px-4
                    py-3.5
                    text-left
                    transition-all
                    duration-200

                    ${
                      active
                        ? "bg-red-500/10 text-red-500"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5"
                    }
                  `}
                >
                  <Icon
                    size={21}
                    className={`
                      shrink-0
                      transition-colors

                      ${active ? "text-red-500" : "text-red-500/80"}
                    `}
                  />

                  <span className="flex-1 text-sm font-semibold">
                    {service.title}
                  </span>

                  <ArrowRight
                    size={16}
                    className={`
                      transition-all
                      duration-200

                      ${
                        active
                          ? "translate-x-0 opacity-100 text-red-500"
                          : "-translate-x-2 opacity-0"
                      }
                    `}
                  />
                </Link>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="relative min-h-[470px] p-9">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.title}
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -8,
              }}
              transition={{
                duration: 0.2,
              }}
              className="h-full"
            >
              {/* Top Content */}

              <div className="grid grid-cols-1 gap-7 xl:grid-cols-[1fr_260px]">
                {/* Heading */}

                <div>
                  <div className="flex items-center gap-4">
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-xl
                        bg-red-500/10
                      "
                    >
                      <ActiveIcon size={27} className="text-red-500" />
                    </div>

                    <span
                      className="
                        text-sm
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-red-500
                      "
                    >
                      {activeService.eyebrow}
                    </span>
                  </div>

                  <h3
                    className="
                      mt-6
                      max-w-xl
                      text-3xl
                      font-bold
                      leading-tight
                      text-gray-900
                      dark:text-white
                    "
                  >
                    {activeService.heading}
                  </h3>

                  <div className="mt-5 h-[2px] w-14 bg-red-500" />

                  <p
                    className="
                      mt-6
                      max-w-xl
                      text-base
                      leading-7
                      text-gray-500
                      dark:text-gray-400
                    "
                  >
                    {activeService.description}
                  </p>
                </div>

                {/* Service Image */}

                <div
                  className="
                    relative
                    h-[180px]
                    overflow-hidden
                    rounded-2xl

                    border
                    border-gray-200

                    bg-gray-100

                    dark:border-white/10
                    dark:bg-white/[0.03]
                  "
                >
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    fill
                    sizes="260px"
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      hover:scale-105
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/40
                      via-transparent
                      to-transparent
                    "
                  />
                </div>
              </div>

              {/* Feature Grid */}

              <div
                className="
                  mt-9
                  grid
                  grid-cols-1
                  gap-x-8
                  gap-y-7

                  xl:grid-cols-2
                "
              >
                {activeService.features.map((feature) => {
                  const FeatureIcon = feature.icon;

                  return (
                    <div key={feature.title} className="group flex gap-4">
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl

                          border
                          border-gray-200

                          bg-gray-50

                          dark:border-white/10
                          dark:bg-white/[0.04]
                        "
                      >
                        <FeatureIcon size={21} className="text-red-500" />
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-3">
                          <h4
                            className="
                              text-sm
                              font-bold
                              text-gray-900
                              dark:text-white
                            "
                          >
                            {feature.title}
                          </h4>

                          <ArrowRight
                            size={16}
                            className="
                              shrink-0
                              text-red-500
                              transition-transform
                              group-hover:translate-x-1
                            "
                          />
                        </div>

                        <p
                          className="
                            mt-2
                            text-sm
                            leading-6
                            text-gray-500
                            dark:text-gray-400
                          "
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom CTA */}

      <div
        className="
          flex
          items-center
          justify-between

          border-t
          border-gray-200

          px-9
          py-5

          dark:border-white/10
        "
      >
        {/* CTA Content */}

        <div className="flex items-center gap-4">
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              bg-red-500/10
            "
          >
            <Headphones size={23} className="text-red-500" />
          </div>

          <div>
            <h4
              className="
                font-bold
                text-gray-900
                dark:text-white
              "
            >
              Have a Project in Mind?
            </h4>

            <p
              className="
                mt-1
                text-sm
                text-gray-500
                dark:text-gray-400
              "
            >
              Let's build something amazing together.
            </p>
          </div>
        </div>

        {/* CTA Button */}

        <button
          type="button"
          onClick={openModal}
          className="
            inline-flex
            items-center
            gap-3

            rounded-xl

            border
            border-red-500

            px-7
            py-3.5

            font-semibold

            text-gray-900

            transition-all
            duration-300

            hover:bg-red-500
            hover:text-white

            dark:text-white
          "
        >
          Let's Talk
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
