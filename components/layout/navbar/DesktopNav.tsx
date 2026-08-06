"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { NAVIGATION } from "@/data/navigation";
import ThemeToggle from "./ThemeToggle";
import CTAButton from "./CTAButton";
import { cn } from "@/lib/utils";

export default function DesktopNav() {
  const pathname = usePathname();

  const [servicesOpen, setServicesOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Navigation */}

      <nav className="hidden lg:flex items-center gap-12 xl:gap-14">
        {NAVIGATION.map((item) => (
          <div
            key={item.href}
            className="relative"
            onMouseEnter={() => item.children && setServicesOpen(true)}
            onMouseLeave={() => item.children && setServicesOpen(false)}
          >
            {item.children ? (
              <>
                <button
                  className="
                    group
                    flex
                    items-center
                    gap-2

                    text-[15px]
                    font-medium
                    tracking-wide

                    text-gray-300

                    transition-all
                    duration-300

                    hover:text-white
                  "
                >
                  {item.title}

                  <ChevronDown
                    size={16}
                    className={cn(
                      "transition-all duration-300 group-hover:text-red-500",
                      servicesOpen && "rotate-180 text-red-500"
                    )}
                  />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 16, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 16, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      className="
                        absolute
                        left-1/2
                        top-full

                        mt-7
                        w-80

                        -translate-x-1/2

                        overflow-hidden

                        rounded-3xl

                        border
                        border-white/10

                        bg-[#101010ee]

                        p-3

                        backdrop-blur-3xl

                        shadow-[0_20px_60px_rgba(0,0,0,.45)]
                      "
                    >
                      {item.children.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="
                            block

                            rounded-2xl

                            px-5
                            py-4

                            text-sm
                            text-gray-300

                            transition-all
                            duration-300

                            hover:bg-red-500/10
                            hover:text-white
                            hover:translate-x-1
                          "
                        >
                          {service.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <Link
                href={item.href}
                className={cn(
                  "group relative py-2 text-[15px] font-medium tracking-wide transition-all duration-300",

                  isActive(item.href)
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                )}
              >
                {item.title}

                {/* Active Line */}

                {isActive(item.href) && (
                  <motion.span
                    layoutId="navbar-active"
                    className="
                      absolute

                      -bottom-[10px]
                      left-0

                      h-[3px]
                      w-full

                      rounded-full

                      bg-gradient-to-r
                      from-red-600
                      via-red-500
                      to-red-400

                      shadow-[0_0_12px_rgba(239,68,68,.8)]
                    "
                  />
                )}

                {/* Hover Line */}

                {!isActive(item.href) && (
                  <span
                    className="
                      absolute

                      -bottom-[10px]
                      left-0

                      h-[2px]
                      w-0

                      rounded-full

                      bg-red-500

                      transition-all
                      duration-300

                      group-hover:w-full
                    "
                  />
                )}
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* Right Side */}

      <div className="hidden items-center gap-5 lg:flex">
        <ThemeToggle />

        <CTAButton />
      </div>
    </>
  );
}