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
          border-white/10

          bg-white/5

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
        border-white/10

        bg-white/[0.04]

        p-1

        backdrop-blur-2xl

        transition-all
        duration-300

        hover:border-red-500/25
        hover:bg-white/[0.06]
      "
    >
      {/* Sliding Thumb */}

      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 450,
          damping: 28,
        }}
        animate={{
          x: isDark ? 38 : 0,
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
          via-red-600
          to-red-700

          shadow-[0_0_25px_rgba(239,68,68,.45)]
        "
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isDark ? "moon" : "sun"}
            initial={{
              opacity: 0,
              rotate: -90,
              scale: .6,
            }}
            animate={{
              opacity: 1,
              rotate: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              rotate: 90,
              scale: .6,
            }}
            transition={{
              duration: .25,
            }}
          >
            {isDark ? (
              <Moon
                size={18}
                className="text-white"
              />
            ) : (
              <Sun
                size={18}
                className="text-white"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Background Icons */}

      <div
        className="
          relative
          z-10

          flex
          w-full
          items-center
          justify-between

          px-[11px]
        "
      >
        <Moon
          size={16}
          className={`transition-colors duration-300 ${
            isDark
              ? "text-transparent"
              : "text-gray-500"
          }`}
        />

        <Sun
          size={16}
          className={`transition-colors duration-300 ${
            isDark
              ? "text-gray-500"
              : "text-transparent"
          }`}
        />
      </div>
    </button>
  );
}