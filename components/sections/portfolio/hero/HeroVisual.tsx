"use client";

import { useState } from "react";
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
  },
  {
    title: "Web Application",
    icon: Layers3,
    color: "from-red-500/90 to-red-400",
  },
  {
    title: "Responsive Design",
    icon: Smartphone,
    color: "from-orange-500 to-red-500",
  },
];

export default function HeroVisual() {
  const [order, setOrder] = useState([0, 1, 2]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCardClick = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    setTimeout(() => {
      setOrder((current) => {
        const [first, ...rest] = current;

        // Move first card to the back
        return [...rest, first];
      });

      setIsAnimating(false);
    }, 450);
  };

  return (
    <div className="relative flex h-[650px] w-full items-center justify-center">
      {/* Background Glow */}

      <motion.div
        animate={{
          opacity: [0.25, 0.45, 0.25],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          h-[500px]
          w-[500px]
          rounded-full
          bg-red-500/10
          blur-[150px]
          dark:bg-red-600/15
        "
      />

      {/* Card Deck */}

      <div className="relative h-[470px] w-[340px]">
        {order.map((cardIndex, position) => {
          const card = cards[cardIndex];
          const Icon = card.icon;

          /*
            position 0 = FRONT
            position 1 = MIDDLE
            position 2 = BACK
          */

          const isFront = position === 0;

          const cardStyles = [
            {
              x: 0,
              y: 0,
              rotate: -2,
              scale: 1,
              opacity: 1,
              zIndex: 30,
            },
            {
              x: 45,
              y: -20,
              rotate: 5,
              scale: 0.94,
              opacity: 0.9,
              zIndex: 20,
            },
            {
              x: -40,
              y: 35,
              rotate: -8,
              scale: 0.88,
              opacity: 0.75,
              zIndex: 10,
            },
          ][position];

          return (
            <motion.div
              key={cardIndex}
              initial={{
                opacity: 0,
                scale: 0.85,
                y: 60,
              }}
              animate={
                isAnimating && isFront
                  ? {
                      x: 420,
                      y: -80,
                      rotate: 18,
                      scale: 0.85,
                      opacity: 0,
                    }
                  : {
                      x: cardStyles.x,
                      y: cardStyles.y,
                      rotate: cardStyles.rotate,
                      scale: cardStyles.scale,
                      opacity: cardStyles.opacity,
                    }
              }
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={isFront ? handleCardClick : undefined}
              whileHover={
                isFront && !isAnimating
                  ? {
                      y: -12,
                      scale: 1.03,
                      rotate: 0,
                    }
                  : undefined
              }
              className={`
                absolute
                left-1/2
                top-1/2
                w-[310px]
                -translate-x-1/2
                -translate-y-1/2

                overflow-hidden
                rounded-[30px]

                border
                border-gray-200
                dark:border-white/10

                bg-white
                dark:bg-[#111111]

                shadow-[0_20px_45px_rgba(17,24,39,.08)]
                dark:shadow-[0_25px_60px_rgba(0,0,0,.45)]

                ${
                  isFront
                    ? "cursor-pointer"
                    : "pointer-events-none"
                }

                transition-shadow
                duration-300

                ${
                  isFront
                    ? "hover:border-red-500/40 hover:shadow-[0_25px_60px_rgba(229,57,53,.20)]"
                    : ""
                }
              `}
              style={{
                zIndex: cardStyles.zIndex,
              }}
            >
              {/* Thumbnail */}

              <div
                className={`
                  flex
                  h-[200px]
                  items-center
                  justify-center
                  bg-gradient-to-br
                  ${card.color}
                `}
              >
                <Icon
                  size={70}
                  className="text-white"
                />
              </div>

              {/* Content */}

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3
                    className="
                      text-xl
                      font-bold
                      text-[var(--foreground)]
                    "
                  >
                    {card.title}
                  </h3>

                  <ArrowUpRight
                    size={20}
                    className="text-red-500"
                  />
                </div>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-7
                    text-[var(--muted)]
                  "
                >
                  Premium UI/UX with modern development,
                  responsive layouts and optimized performance.
                </p>

                {/* Click hint only on front card */}

                {isFront && (
                  <div
                    className="
                      mt-5
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-red-500
                    "
                  >
                    Click to explore
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}