"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

const articles = [
  {
    title: "Modern Website Trends",
    category: "Web Development",
    read: "5 min read",
  },
  {
    title: "UI/UX Best Practices",
    category: "Design",
    read: "8 min read",
  },
  {
    title: "SEO Strategies for 2026",
    category: "Marketing",
    read: "6 min read",
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

        // Move the front card to the back
        return [...rest, first];
      });

      setIsAnimating(false);
    }, 450);
  };

  return (
    <div className="relative flex h-[650px] w-full items-center justify-center">

      {/* Animated Glow */}

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
          dark:bg-red-600/15
          blur-[150px]
        "
      />

      {/* Card Deck */}

      <div className="relative h-[470px] w-[350px]">

        {order.map((articleIndex, position) => {
          const article = articles[articleIndex];

          const isFront = position === 0;

          /*
            FRONT
            MIDDLE
            BACK
          */

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
              x: 50,
              y: -20,
              rotate: 6,
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
              key={articleIndex}

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

              onClick={
                isFront
                  ? handleCardClick
                  : undefined
              }

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

                w-[320px]

                -translate-x-1/2
                -translate-y-1/2

                rounded-[28px]

                border
                border-gray-200
                dark:border-white/10

                bg-white
                dark:bg-[#111111]

                p-6

                shadow-[0_20px_45px_rgba(17,24,39,.08)]
                dark:shadow-[0_25px_60px_rgba(0,0,0,.45)]

                transition-shadow
                duration-300

                ${
                  isFront
                    ? `
                      cursor-pointer
                      hover:border-red-500/40
                      hover:shadow-[0_25px_60px_rgba(229,57,53,.20)]
                    `
                    : `
                      pointer-events-none
                    `
                }
              `}

              style={{
                zIndex: cardStyles.zIndex,
              }}
            >

              {/* Category */}

              <span
                className="
                  inline-flex
                  items-center

                  rounded-full

                  border
                  border-red-500/20

                  bg-red-500/10

                  px-3
                  py-1

                  text-xs
                  font-semibold

                  text-red-600
                  dark:text-red-400
                "
              >
                {article.category}
              </span>

              {/* Title */}

              <h3
                className="
                  mt-5

                  text-2xl
                  font-bold
                  leading-tight

                  text-[var(--foreground)]
                "
              >
                {article.title}
              </h3>

              {/* Meta */}

              <div
                className="
                  mt-6

                  flex
                  items-center
                  justify-between

                  text-sm

                  text-[var(--muted)]
                "
              >
                <div className="flex items-center gap-2">
                  <Calendar size={15} />
                  <span>Aug 2026</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock3 size={15} />
                  <span>{article.read}</span>
                </div>
              </div>

              {/* Footer */}

              <div className="mt-8 flex items-center justify-between">

                <span
                  className="
                    font-semibold
                    text-[var(--foreground)]

                    transition-colors
                    duration-300

                    group-hover:text-red-500
                  "
                >
                  Read Article
                </span>

                <ArrowUpRight
                  size={20}
                  className="
                    text-red-500

                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />

              </div>

              {/* Click Hint */}

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

            </motion.div>
          );
        })}

      </div>
    </div>
  );
}