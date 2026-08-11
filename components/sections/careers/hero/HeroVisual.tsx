"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

const jobs = [
  {
    title: "Frontend Developer",
    location: "Mumbai",
    type: "Full Time",
  },
  {
    title: "Backend Developer",
    location: "Remote",
    type: "Full Time",
  },
  {
    title: "UI / UX Designer",
    location: "Hybrid",
    type: "Internship",
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
    <div
      className="
        relative
        flex
        h-[520px]
        w-full
        max-w-[620px]
        items-center
        justify-center

        lg:h-[600px]
      "
    >
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

          h-[450px]
          w-[450px]

          rounded-full

          bg-red-500/10
          dark:bg-red-600/15

          blur-[150px]
        "
      />

      {/* Card Deck */}

      <div className="relative h-[440px] w-[350px]">

        {order.map((jobIndex, position) => {
          const job = jobs[jobIndex];

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
              x: 55,
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
              key={jobIndex}
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
                group
                absolute
                left-1/2
                top-1/2

                w-[280px]
                sm:w-[300px]
                lg:w-[320px]

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
                dark:shadow-[0_25px_70px_rgba(0,0,0,.45)]

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
              {/* Header */}

              <div className="flex items-center justify-between">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center

                    rounded-2xl

                    bg-red-500/10
                    dark:bg-red-500/10
                  "
                >
                  <Briefcase
                    className="text-red-500"
                    size={22}
                  />
                </div>

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

              {/* Job Title */}

              <h3
                className="
                  mt-6

                  text-2xl
                  font-bold

                  text-[var(--foreground)]
                "
              >
                {job.title}
              </h3>

              {/* Details */}

              <div
                className="
                  mt-6

                  space-y-3

                  text-[var(--muted)]
                "
              >
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{job.location}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock3 size={16} />
                  <span>{job.type}</span>
                </div>
              </div>

              {/* Button */}

              <button
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="
                  mt-8

                  rounded-full

                  border
                  border-red-500/20

                  bg-red-500/10

                  px-5
                  py-3

                  text-sm
                  font-semibold

                  text-red-600
                  dark:text-red-400

                  transition-all
                  duration-300

                  hover:bg-red-500
                  hover:text-white
                "
              >
                Apply Now
              </button>

              {/* Click Hint */}

              {isFront && (
                <p
                  className="
                    mt-4

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