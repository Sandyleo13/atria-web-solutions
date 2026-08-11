"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { NAVIGATION } from "@/data/navigation";
import ThemeToggle from "./ThemeToggle";
import CTAButton from "./CTAButton";

const serviceLinks = [
  {
    title: "Web Development",
    href: "/services/web-development",
  },
  {
    title: "E-Commerce Solutions",
    href: "/services/ecommerce",
  },
  {
    title: "SEO & Digital Marketing",
    href: "/services/seo-digital-marketing",
  },
  {
    title: "Mobile App Development",
    href: "/services/mobile-app-development",
  },
  {
    title: "Branding & Design",
    href: "/services/branding-design",
  },
  {
    title: "Email Marketing",
    href: "/services/email-marketing",
  },
  {
    title: "Online Reputation Management",
    href: "/services/online-reputation-management",
  },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle */}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center

          rounded-xl

          border
          border-[var(--border)]

          bg-[var(--card)]

          text-[var(--foreground)]

          shadow-sm

          transition-all
          duration-300

          hover:border-red-500
          hover:bg-[var(--card-hover)]
          hover:shadow-md

          lg:hidden
        "
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Menu */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -15,
              scale: 0.98,
            }}
            transition={{
              duration: 0.22,
              ease: "easeOut",
            }}
            className="
  absolute
  left-0
  right-0
  top-full
  z-[100]

  mt-3

  w-full

  max-h-[calc(100vh-130px)]

  overflow-y-auto
  overscroll-contain

  rounded-3xl

  border
  border-[var(--border)]

  bg-[var(--card)]/95

  p-4
  sm:p-6

  shadow-[var(--shadow-lg)]

  backdrop-blur-3xl

  lg:hidden
"
          >
            <nav className="flex flex-col gap-1">
              {NAVIGATION.map((item) => {
                const isServices = item.title === "Services";

                /* SERVICES DROPDOWN */

                if (isServices) {
                  return (
                    <div key={item.href}>
                      <button
                        type="button"
                        onClick={() => setServicesOpen((prev) => !prev)}
                        className="
                          flex
                          w-full
                          items-center
                          justify-between

                          rounded-2xl

                          px-4
                          py-3.5

                          text-left
                          text-[15px]
                          font-medium

                          text-[var(--foreground)]

                          transition-all
                          duration-300

                          hover:bg-[var(--primary-soft)]
                          hover:text-[var(--primary)]
                        "
                      >
                        <span>{item.title}</span>

                        <ChevronDown
                          size={18}
                          className={`
                            transition-transform
                            duration-300

                            ${servicesOpen ? "rotate-180 text-red-500" : ""}
                          `}
                        />
                      </button>

                      {/* Service Subpages */}

                      <AnimatePresence initial={false}>
                        {servicesOpen && (
                          <motion.div
                            initial={{
                              height: 0,
                              opacity: 0,
                            }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                            }}
                            transition={{
                              duration: 0.25,
                            }}
                            className="overflow-hidden"
                          >
                            <div className="ml-3 mt-1 space-y-1 border-l border-red-500/20 pl-3">
                              {serviceLinks.map((service) => (
                                <Link
                                  key={service.href}
                                  href={service.href}
                                  onClick={() => setOpen(false)}
                                  className="
                                      block

                                      rounded-xl

                                      px-4
                                      py-3

                                      text-sm

                                      text-[var(--muted)]

                                      transition-all
                                      duration-300

                                      hover:bg-red-500/10
                                      hover:text-red-500
                                      hover:translate-x-1
                                    "
                                >
                                  {service.title}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                /* NORMAL NAVIGATION */

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="
                      rounded-2xl

                      px-4
                      py-3.5

                      text-[15px]
                      font-medium

                      text-[var(--foreground)]

                      transition-all
                      duration-300

                      hover:bg-[var(--primary-soft)]
                      hover:text-[var(--primary)]
                      hover:translate-x-1
                    "
                  >
                    {item.title}
                  </Link>
                );
              })}
            </nav>

            {/* Bottom Actions */}

            <div
              className="
                mt-4

                flex
                flex-col
                gap-4

                border-t
                border-[var(--border)]

                pt-4

                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <ThemeToggle />

              <div onClick={() => setOpen(false)} className="w-full sm:w-auto">
                <CTAButton />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
