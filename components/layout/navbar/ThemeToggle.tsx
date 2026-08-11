"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="
          h-12
          w-[86px]

          rounded-full

          border
          border-[var(--border)]

          bg-[var(--card)]

          backdrop-blur-xl
        "
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle Theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        group
        relative

        flex
        h-12
        w-[86px]
        items-center

        rounded-full

        border
        border-[var(--border)]

        bg-[var(--card)]/80

        p-1

        backdrop-blur-2xl

        transition-all
        duration-300

        hover:border-red-500/40
        hover:bg-[var(--card-hover)]
      "
    >
      {/* Background Icons */}

      <div className="absolute inset-0 flex items-center justify-between px-3 pointer-events-none">
        <Moon
          size={16}
          className={`transition-opacity duration-300 ${
            isDark
              ? "opacity-0"
              : "opacity-100 text-[var(--muted)]"
          }`}
        />

        <Sun
          size={16}
          className={`transition-opacity duration-300 ${
            isDark
              ? "opacity-100 text-[var(--muted)]"
              : "opacity-0"
          }`}
        />
      </div>

      {/* Sliding Thumb */}

      <motion.div
        transition={{
          type: "spring",
          stiffness: 450,
          damping: 28,
        }}
        animate={{
          x: isDark ? 40 : 0,
        }}
        className="
          absolute

          flex
          h-10
          w-10
          items-center
          justify-center

          rounded-full

          bg-gradient-to-br
          from-red-500
          via-red-500
          to-red-600

          shadow-[0_10px_25px_rgba(229,57,53,.28)]
          dark:shadow-[0_0_25px_rgba(239,68,68,.45)]
        "
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isDark ? "moon" : "sun"}
            initial={{
              opacity: 0,
              rotate: -90,
              scale: 0.6,
            }}
            animate={{
              opacity: 1,
              rotate: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              rotate: 90,
              scale: 0.6,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            {isDark ? (
              <Moon size={18} className="text-white" />
            ) : (
              <Sun size={18} className="text-white" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </button>
  );
}