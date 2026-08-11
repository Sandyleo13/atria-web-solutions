"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiLaravel,
  SiPhp,
  SiMysql,
} from "react-icons/si";

import { HERO_IMAGES } from "./constants";

const technologies = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Laravel", icon: SiLaravel },
  { name: "PHP", icon: SiPhp },
  { name: "MySQL", icon: SiMysql },
];

export default function HeroVisual() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  /*
   * Technology path:
   *
   * START → LEFT → TOP → RIGHT → END
   *
   * The path is deliberately positioned ABOVE the A.
   */
  const orbitPath = "M 25 420 C 65 170 260 25 380 25 C 500 25 695 170 735 420";

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* =====================================================
          LIGHT MODE GLOW
      ====================================================== */}

      {!isDark && (
        <motion.div
          animate={{
            opacity: [0.12, 0.2, 0.12],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            h-[720px]
            w-[720px]
            rounded-full
            bg-[radial-gradient(circle,rgba(239,68,68,.20)_0%,rgba(239,68,68,.08)_40%,transparent_72%)]
            blur-[130px]
          "
        />
      )}

      {/* =====================================================
          DARK MODE GLOW
      ====================================================== */}

      {isDark && (
        <motion.div
          animate={{
            opacity: [0.35, 0.55, 0.35],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[47%]
            top-1/2
            h-[700px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[radial-gradient(circle,rgba(255,30,30,.6)_0%,rgba(255,30,30,.18)_40%,transparent_72%)]
            blur-[110px]
          "
        />
      )}

      {/* =====================================================
          TECHNOLOGY SEMICIRCLE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute

          left-[48%]
          top-[-2%]

          z-40

          hidden

          h-[430px]
          w-[800px]

          -translate-x-1/2

          lg:block

          xl:h-[470px]
          xl:w-[860px]

          2xl:h-[500px]
          2xl:w-[920px]
        "
      >
        {/* =================================================
            SEMICIRCLE VISUAL PATH
        ================================================== */}

        <svg
          viewBox="0 0 760 500"
          className="
            absolute
            inset-0
            h-full
            w-full
            overflow-visible
          "
          fill="none"
        >
          <path
            d="
              M 25 420
              C 65 170
                260 25
                380 25
              C 500 25
                695 170
                735 420
            "
            stroke="currentColor"
            strokeWidth="1.2"
            className="
              text-red-500/[0.14]
              dark:text-red-500/[0.12]
            "
          />

          <path
            d="
              M 65 420
              C 105 205
                270 65
                380 65
              C 490 65
                655 205
                695 420
            "
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 10"
            className="
              text-red-500/[0.07]
              dark:text-white/[0.05]
            "
          />
        </svg>

        {/* =================================================
            MOVING TECHNOLOGIES
        ================================================== */}

        {technologies.map((tech, index) => {
          const Icon = tech.icon;

          return (
            <motion.div
              key={tech.name}
              className="
                absolute
                left-0
                top-0
                flex
                items-center
                justify-center
              "
              style={{
                offsetPath: `path("${orbitPath}")`,
                offsetRotate: "0deg",
              }}
              animate={{
                offsetDistance: ["0%", "100%"],
                opacity: [0, 0, 1, 1, 1, 0, 0],
              }}
              transition={{
                offsetDistance: {
                  duration: 16,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * -2,
                },

                opacity: {
                  duration: 16,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * -2,
                  times: [0, 0.07, 0.14, 0.68, 0.82, 0.95, 1],
                },
              }}
            >
              {/* Technology Badge */}

              <div
                className="
                  flex
                  h-[48px]
                  items-center
                  gap-2.5
                  rounded-full

                  border
                  border-black/[0.06]

                  bg-white/95

                  px-4

                  shadow-[0_12px_35px_rgba(17,24,39,.12)]

                  backdrop-blur-xl

                  dark:border-white/10
                  dark:bg-[#111111]/95
                  dark:shadow-[0_12px_35px_rgba(0,0,0,.4)]
                "
              >
                <Icon size={18} className="text-[var(--foreground)]" />

                <span
                  className="
                    h-1.5
                    w-1.5
                    shrink-0
                    rounded-full
                    bg-red-500
                    shadow-[0_0_10px_rgba(239,68,68,.65)]
                  "
                />

                <span
                  className="
                    whitespace-nowrap
                    text-[11px]
                    font-semibold
                    tracking-wide
                    text-[var(--foreground)]
                  "
                >
                  {tech.name}
                </span>
              </div>
            </motion.div>
          );
        })}

        {/* =================================================
            ARC PARTICLES
        ================================================== */}

        <span
          className="
            absolute
            left-[2%]
            bottom-[12%]
            h-1.5
            w-1.5
            rounded-full
            bg-red-500
            shadow-[0_0_12px_rgba(239,68,68,.75)]
          "
        />

        <span
          className="
            absolute
            left-1/2
            top-[2%]
            h-1.5
            w-1.5
            -translate-x-1/2
            rounded-full
            bg-red-500
            shadow-[0_0_12px_rgba(239,68,68,.75)]
          "
        />

        <span
          className="
            absolute
            right-[2%]
            bottom-[12%]
            h-1.5
            w-1.5
            rounded-full
            bg-red-400
            shadow-[0_0_12px_rgba(239,68,68,.65)]
          "
        />
      </div>

      {/* =====================================================
          HERO IMAGE / A
      ====================================================== */}

      <motion.div
        animate={{
          y: [0, -16, 0],
          rotate: [0, 1.2, 0, -1.2, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          z-20

          translate-x-0
          lg:-translate-x-2
          xl:-translate-x-6
          2xl:-translate-x-10

          h-[430px]
          w-[430px]

          sm:h-[500px]
          sm:w-[500px]

          lg:h-[620px]
          lg:w-[620px]

          xl:h-[680px]
          xl:w-[680px]
        "
      >
        <Image
          src={isDark ? HERO_IMAGES.heroDark : HERO_IMAGES.heroLight}
          alt="Atria Web Solutions"
          fill
          priority
          className={`object-contain ${
            isDark
              ? "drop-shadow-[0_0_80px_rgba(220,38,38,.45)]"
              : "drop-shadow-[0_30px_45px_rgba(229,57,53,.18)]"
          }`}
        />
      </motion.div>

      {/* =====================================================
          FLOATING PROJECT CARD
      ====================================================== */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-16
          right-2

          z-50

          hidden

          rounded-3xl

          bg-[var(--card)]/90

          px-7
          py-6

          backdrop-blur-2xl

          shadow-[var(--shadow-lg)]

          dark:bg-white/5

          lg:block
        "
      >
        <p
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.28em]
            text-red-500
          "
        >
          Delivered
        </p>

        <h3
          className="
            mt-2
            text-4xl
            font-black
            text-[var(--foreground)]
          "
        >
          50+
        </h3>

        <p className="mt-1 text-sm text-[var(--muted)]">Successful Projects</p>
      </motion.div>
    </div>
  );
}
