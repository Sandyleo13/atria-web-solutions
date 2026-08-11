"use client";

import { motion } from "framer-motion";
import {
  Code2,
  MonitorSmartphone,
  Palette,
  Rocket,
} from "lucide-react";

const cards = [
  {
    title: "Web Development",
    icon: Code2,
    color: "from-red-500 to-red-700",
    className: "left-0 top-14",
    delay: 0,
  },
  {
    title: "UI / UX Design",
    icon: Palette,
    color: "from-pink-500 to-red-500",
    className: "right-0 top-0",
    delay: 0.2,
  },
  {
    title: "Digital Growth",
    icon: Rocket,
    color: "from-red-500 to-orange-500",
    className: "left-10 bottom-8",
    delay: 0.4,
  },
  {
    title: "Modern Apps",
    icon: MonitorSmartphone,
    color: "from-orange-500 to-red-600",
    className: "right-8 bottom-16",
    delay: 0.6,
  },
];

export default function AboutVisual() {
  return (
    <div className="relative h-[620px] w-full max-w-[620px]">

      {/* Center Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2

          h-80
          w-80

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-red-500/10
          dark:bg-red-600/20

          blur-[140px]
        "
      />

      {/* Center Card */}

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        className="
          absolute
          left-1/2
          top-1/2

          z-20

          flex
          h-60
          w-60

          -translate-x-1/2
          -translate-y-1/2

          flex-col
          items-center
          justify-center

          rounded-[36px]

          border
          border-gray-200
          dark:border-white/10

          bg-white
          dark:bg-white/[0.04]

          backdrop-blur-3xl

          shadow-[0_18px_40px_rgba(17,24,39,.08)]
          dark:shadow-[0_0_70px_rgba(0,0,0,.45)]

          transition-all
          duration-300
        "
      >
        <h2 className="text-5xl font-bold text-[var(--foreground)]">
          ATRIA
        </h2>

        <p className="mt-3 text-sm uppercase tracking-[0.45em] text-red-600 dark:text-red-400">
          WEB SOLUTIONS
        </p>
      </motion.div>

      {/* Floating Cards */}

      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: [0, -12, 0],
            }}
            transition={{
              opacity: {
                duration: 0.6,
                delay: card.delay,
              },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: card.delay,
              },
            }}
            whileHover={{
              y: -8,
              scale: 1.05,
            }}
            className={`
              absolute
              ${card.className}

              rounded-3xl

              border
              border-gray-200
              dark:border-white/10

              bg-white
              dark:bg-white/[0.04]

              p-5

              backdrop-blur-2xl

              shadow-[0_12px_30px_rgba(17,24,39,.06)]
              dark:shadow-[0_20px_50px_rgba(0,0,0,.35)]

              transition-all
              duration-300
            `}
          >
            <div
              className={`
                flex
                h-14
                w-14
                items-center
                justify-center

                rounded-2xl

                bg-gradient-to-br
                ${card.color}
              `}
            >
              <Icon
                size={26}
                className="text-white"
              />
            </div>

            <p
              className="
                mt-4

                text-sm
                font-semibold

                text-[var(--foreground)]
              "
            >
              {card.title}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}