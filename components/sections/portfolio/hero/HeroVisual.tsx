"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Layers3,
  ArrowUpRight,
} from "lucide-react";

const cards = [
  {
    title: "Business Website",
    icon: Globe,
    color: "from-red-500 to-red-700",
    rotate: -8,
    x: -40,
    y: 40,
  },
  {
    title: "Web Application",
    icon: Layers3,
    color: "from-white/20 to-white/5",
    rotate: 5,
    x: 50,
    y: -20,
  },
  {
    title: "Responsive Design",
    icon: Smartphone,
    color: "from-red-600 to-red-500",
    rotate: -2,
    x: 0,
    y: 0,
  },
];

export default function HeroVisual() {
  return (
    <div className="relative flex h-[650px] items-center justify-center">
      {/* Background Glow */}

      <div className="absolute h-[420px] w-[420px] rounded-full bg-red-500/10 blur-[120px]" />

      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: card.y,
              x: card.x,
              rotate: card.rotate,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            whileHover={{
              y: card.y - 12,
              scale: 1.03,
              rotate: 0,
            }}
            className="
              absolute
              w-[310px]
              overflow-hidden
              rounded-[30px]
              border
              border-white/10
              bg-[#121212]
              shadow-[0_25px_60px_rgba(0,0,0,.45)]
            "
          >
            {/* Thumbnail */}

            <div
              className={`
                h-[200px]
                bg-gradient-to-br
                ${card.color}
                flex
                items-center
                justify-center
              `}
            >
              <Icon
                size={70}
                className="text-white/90"
              />
            </div>

            {/* Content */}

            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">
                  {card.title}
                </h3>

                <ArrowUpRight
                  size={20}
                  className="text-red-500"
                />
              </div>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                Premium UI/UX with modern development,
                responsive layouts and optimized performance.
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}