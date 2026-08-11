"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
} from "lucide-react";

const cards = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@atriawebsolutions.com",
    subtitle: "Reply within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 98765 43210",
    subtitle: "Mon - Sat | 10 AM - 7 PM",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Mumbai, India",
    subtitle: "Remote & On-site Meetings",
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

        return [...rest, first];
      });

      setIsAnimating(false);
    }, 450);
  };

  return (
    <div
      className="
        relative
        flex
        h-[520px]
        w-full
        items-center
        justify-center

        sm:h-[560px]
        lg:h-[600px]
      "
    >
      {/* Background Glow */}

      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute

          h-[300px]
          w-[300px]

          rounded-full

          bg-red-500/10
          dark:bg-red-600/15

          blur-[110px]

          sm:h-[380px]
          sm:w-[380px]

          lg:h-[420px]
          lg:w-[420px]

          lg:blur-[130px]
        "
      />

      {/* Card Deck */}

      <div
        className="
          relative

          h-[400px]
          w-[300px]

          sm:h-[430px]
          sm:w-[340px]

          lg:w-[350px]
        "
      >
        {order.map((cardIndex, position) => {
          const card = cards[cardIndex];
          const Icon = card.icon;

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
              y: -18,
              rotate: 6,
              scale: 0.94,
              opacity: 0.9,
              zIndex: 20,
            },
            {
              x: -35,
              y: 30,
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
                      x: 380,
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

                w-[290px]

                -translate-x-1/2
                -translate-y-1/2

                rounded-[28px]

                border
                border-[var(--border)]

                bg-[var(--card)]

                p-6

                shadow-[var(--shadow-lg)]

                backdrop-blur-xl

                transition-all
                duration-300

                sm:w-[320px]
                sm:rounded-[30px]
                sm:p-7

                ${
                  isFront
                    ? `
                      cursor-pointer

                      hover:border-red-500/40

                      hover:shadow-[0_30px_80px_rgba(239,68,68,.16)]

                      dark:hover:shadow-[0_30px_80px_rgba(239,68,68,.10)]
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
              {/* Icon */}

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center

                  rounded-2xl

                  border
                  border-red-500/15

                  bg-red-500/10

                  transition-colors
                  duration-300
                "
              >
                <Icon
                  size={26}
                  className="text-red-500"
                />
              </div>

              {/* Title */}

              <h3
                className="
                  mt-6

                  text-2xl
                  font-bold

                  text-[var(--foreground)]
                "
              >
                {card.title}
              </h3>

              {/* Value */}

              <p
                className="
                  mt-4

                  break-words

                  text-lg
                  font-medium

                  text-[var(--foreground)]
                "
              >
                {card.value}
              </p>

              {/* Availability */}

              <div
                className="
                  mt-6

                  flex
                  items-center
                  gap-2

                  text-sm

                  text-[var(--muted)]
                "
              >
                <Clock3
                  size={16}
                  className="shrink-0 text-red-500"
                />

                <span>
                  {card.subtitle}
                </span>
              </div>

              {/* Click Hint */}

              {isFront && (
                <p
                  className="
                    mt-5

                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]

                    text-red-500
                  "
                >
                  Click card to explore
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}