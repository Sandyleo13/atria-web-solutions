"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

import { NAVIGATION } from "@/data/navigation";
import ThemeToggle from "./ThemeToggle";
import CTAButton from "./CTAButton";
import ServicesMegaMenu from "./ServicesMegaMenu";
import { cn } from "@/lib/utils";

export default function DesktopNav() {
  const pathname = usePathname();

  const [servicesOpen, setServicesOpen] = useState(false);

  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const openServices = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }

    setServicesOpen(true);
  };

  const closeServices = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }

    closeTimeout.current = setTimeout(() => {
      setServicesOpen(false);
    }, 250);
  };

  return (
    <>
      {/* Navigation */}
      <nav className="hidden items-center gap-10 lg:flex xl:gap-12">
        {NAVIGATION.map((item) => (
          <div
            key={item.href}
            className="relative"
            onMouseEnter={() => {
              if (item.children) {
                openServices();
              }
            }}
            onMouseLeave={() => {
              if (item.children) {
                closeServices();
              }
            }}
          >
            {item.children ? (
              <>
                {/* Services Button */}
                <button
                  type="button"
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-[15px]
                    font-medium
                    tracking-wide
                    text-[var(--muted)]
                    transition-all
                    duration-300
                    hover:text-[var(--foreground)]
                  "
                >
                  {item.title}

                  <ChevronDown
                    size={16}
                    className={cn(
                      "transition-all duration-300 group-hover:text-red-500",
                      servicesOpen && "rotate-180 text-red-500",
                    )}
                  />

                  {/* Active / Hover Line */}
                  {servicesOpen && (
                    <motion.span
                      layoutId="services-active-line"
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
                </button>

                {/* Mega Menu */}
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                        scale: 0.98,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: 10,
                        scale: 0.98,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeOut",
                      }}
                      onMouseEnter={openServices}
                      onMouseLeave={closeServices}
                      className="
                        fixed
                        left-0
                        right-0
                        top-[110px]
                        z-[100]
                      "
                    >
                      <ServicesMegaMenu />
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <Link
                href={item.href}
                className="
                  group
                  relative
                  flex
                  items-center
                  gap-2
                  text-[15px]
                  font-medium
                  tracking-wide
                  text-[var(--muted)]
                  transition-all
                  duration-300
                  hover:text-[var(--foreground)]
                "
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
      <div className="hidden items-center gap-4 lg:flex xl:gap-5">
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Phone Number */}
        <a
          href="tel:+918766039459"
          aria-label="Call Atria Web Solutions"
          className="
            flex
            shrink-0
            items-center
            gap-2
            rounded-full
            border
            border-[var(--border)]
            bg-[var(--background)]
            px-4
            py-2.5
            text-sm
            font-semibold
            text-[var(--foreground)]
            transition-all
            duration-300
            hover:border-red-500/40
            hover:bg-red-500/10
            hover:text-red-500
            xl:px-5
          "
        >
          <Phone
            size={16}
            strokeWidth={2}
            className="shrink-0"
          />

          <span className="whitespace-nowrap">
            +91 8766039459
          </span>
        </a>

        {/* CTA */}
        <CTAButton />
      </div>
    </>
  );
}