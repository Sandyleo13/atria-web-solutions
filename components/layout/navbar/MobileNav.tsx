"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { NAVIGATION } from "@/data/navigation";
import ThemeToggle from "./ThemeToggle";
import CTAButton from "./CTAButton";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle */}

      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          h-11
          w-11
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
              y: -20,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -20,
              scale: 0.98,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              absolute
              left-0
              top-[110%]

              w-full

              overflow-hidden

              rounded-3xl

              border
              border-[var(--border)]

              bg-[var(--card)]/95

              p-6

              shadow-[var(--shadow-lg)]

              backdrop-blur-3xl

              lg:hidden
            "
          >
            <div className="flex flex-col gap-2">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="
                    rounded-2xl

                    px-5
                    py-4

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
              ))}
            </div>

            <div
              className="
                mt-6

                flex
                items-center
                justify-between

                border-t
                border-[var(--border)]

                pt-5
              "
            >
              <ThemeToggle />

              <CTAButton />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}