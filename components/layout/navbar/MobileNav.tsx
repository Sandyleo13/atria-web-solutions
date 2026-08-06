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
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] transition hover:border-[var(--primary)] lg:hidden"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="
              absolute
              left-0
              top-[110%]
              w-full
              rounded-3xl
              border
              border-[var(--border)]
              bg-[var(--card)]
              p-6
              shadow-[var(--shadow-lg)]
              backdrop-blur-xl
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
                    rounded-xl
                    px-4
                    py-3
                    text-[15px]
                    font-medium
                    text-[var(--foreground)]
                    transition
                    hover:bg-[var(--primary-soft)]
                    hover:text-[var(--primary)]
                  "
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-[var(--border)] pt-5">
              <ThemeToggle />

              <CTAButton />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}