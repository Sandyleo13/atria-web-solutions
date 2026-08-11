"use client";

import { motion } from "framer-motion";
import { Rocket, Users, Star, Headphones } from "lucide-react";

const stats = [
  {
    icon: Rocket,
    value: "150+",
    label: "Projects Delivered",
  },
  {
    icon: Users,
    value: "100+",
    label: "Happy Clients",
  },
  {
    icon: Star,
    value: "5+",
    label: "Years Experience",
  },
  {
    icon: Headphones,
    value: "24/7",
    label: "Support",
  },
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.7 + index * 0.1,
              duration: 0.5,
            }}
            className="
              group
              relative
              min-h-[145px]

              rounded-2xl

              border
              border-[var(--border)]

              bg-[var(--card)]/90
              dark:bg-white/[0.04]

              p-5

              backdrop-blur-xl

              shadow-[var(--shadow-md)]

              transition-all
              duration-300

              hover:-translate-y-1.5
              hover:border-red-500/40
              hover:shadow-[var(--shadow-lg)]
            "
          >
            {/* Icon */}
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-xl

                bg-red-500/10
                dark:bg-red-500/15

                transition-all
                duration-300

                group-hover:bg-red-500
                group-hover:scale-105
              "
            >
              <Icon
                size={19}
                strokeWidth={2}
                className="
                  text-red-500

                  transition-colors
                  duration-300

                  group-hover:text-white
                "
              />
            </div>

            {/* Value */}
            <h3
              className="
                mt-4

                text-2xl
                font-black
                tracking-tight

                text-[var(--foreground)]
              "
            >
              {item.value}
            </h3>

            {/* Label */}
            <p
              className="
                mt-1

                max-w-[120px]

                text-xs
                font-medium
                leading-5

                text-[var(--muted)]
              "
            >
              {item.label}
            </p>

            {/* Subtle bottom accent */}
            <span
              className="
                absolute
                bottom-0
                left-5

                h-[2px]
                w-0

                rounded-full

                bg-red-500

                transition-all
                duration-300

                group-hover:w-8
              "
            />
          </motion.div>
        );
      })}
    </div>
  );
}