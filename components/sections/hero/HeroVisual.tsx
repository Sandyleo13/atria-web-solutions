"use client";

import { useTheme } from "next-themes";

import { HERO_IMAGES } from "./constants";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Laravel",
  "PHP",
  "MySQL",
];

const orbitAngles = [
  -125,
  -90,
  -55,
  -20,
  15,
  50,
  85,
  120,
];

export default function HeroVisual() {
  const { resolvedTheme } = useTheme();
  const heroImage =
    resolvedTheme === "light" ? HERO_IMAGES.heroLight : HERO_IMAGES.heroDark;

  return (
    <div
      className="
        relative
        flex
        h-[470px]
        w-full
        items-center
        justify-center
        sm:h-[520px]
        lg:h-full
        lg:min-h-[650px]
      "
    >
      {/* ================================================================
          TECHNOLOGY ORBIT
          ================================================================ */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[12%]
          z-40
          block
          h-[350px]
          w-[420px]
          -translate-x-1/2
          sm:top-[2%]
          sm:h-[430px]
          sm:w-[650px]
          lg:top-[-2%]
          lg:h-[500px]
          lg:w-[800px]
          xl:h-[540px]
          xl:w-[880px]
          2xl:h-[570px]
          2xl:w-[940px]
        "
      >
        {/* Orbit ring */}
        <div
          aria-hidden="true"
          className="
            absolute
            left-1/2
            top-1/2
            h-[260px]
            w-[400px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-[50%]
            border
            border-slate-300/80
            dark:border-red-500/[0.18]
            sm:h-[370px]
            sm:w-[630px]
            lg:h-[440px]
            lg:w-[820px]
            xl:h-[480px]
            xl:w-[900px]
            2xl:h-[520px]
            2xl:w-[960px]
          "
        />

        {/* Dashed inner orbit */}
        <div
          aria-hidden="true"
          className="
            absolute
            left-1/2
            top-1/2
            h-[220px]
            w-[350px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-[50%]
            border
            border-dashed
            border-slate-300/70
            dark:border-white/[0.05]
            sm:h-[320px]
            sm:w-[565px]
            lg:h-[385px]
            lg:w-[740px]
            xl:h-[420px]
            xl:w-[820px]
            2xl:h-[460px]
            2xl:w-[900px]
          "
        />

        {/* Moving orbit */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-full
            w-full
            -translate-x-1/2
            -translate-y-1/2
          "
        >
          <div className="atria-tech-orbit absolute inset-0">
            {technologies.map((name, index) => {
              const angle = orbitAngles[index];
              const radians = (angle * Math.PI) / 180;
              const x = Math.sin(radians).toFixed(6);
              const y = (-Math.cos(radians)).toFixed(6);

              return (
                <div
                  key={name}
                  className="absolute left-1/2 top-1/2 h-0 w-0"
                  style={{
                    transform: `translate(calc(var(--atria-tech-orbit-x) * ${x}), calc(var(--atria-tech-orbit-y) * ${y})) rotate(${angle}deg)`,
                  }}
                >
                  <div
                    className="
                      atria-tech-counter
                      absolute
                      left-1/2
                      top-1/2
                      -translate-x-1/2
                      -translate-y-1/2
                    "
                  >
                    <div
                      className="
                        atria-tech-pill
                        flex
                        h-10
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-slate-200/90
                        bg-white/95
                        px-3
                        shadow-[0_8px_25px_rgba(15,23,42,.14)]
                        backdrop-blur-xl
                        dark:border-white/10
                        dark:bg-[#111111]/95
                        dark:shadow-[0_8px_25px_rgba(0,0,0,.35)]
                        sm:h-11
                        sm:px-3.5
                        lg:h-[48px]
                        lg:px-4
                      "
                    >
                      <span
                        aria-hidden="true"
                        className="
                          flex
                          h-4
                          w-4
                          shrink-0
                          items-center
                          justify-center
                          rounded-md
                          border
                          border-slate-300
                          text-[7px]
                          font-black
                          text-slate-700
                          dark:border-white/10
                          dark:text-white
                          sm:h-[17px]
                          sm:w-[17px]
                          lg:h-[18px]
                          lg:w-[18px]
                        "
                      >
                        {name.charAt(0)}
                      </span>

                      <span
                        className="
                          h-1.5
                          w-1.5
                          shrink-0
                          rounded-full
                          bg-red-500
                          shadow-[0_0_8px_rgba(239,68,68,.8)]
                        "
                      />

                      <span
                        className="
                          whitespace-nowrap
                          text-[9px]
                          font-semibold
                          tracking-wide
                          text-slate-700
                          dark:text-white
                          sm:text-[10px]
                          lg:text-[11px]
                        "
                      >
                        {name}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================================================================
          HERO GLOW
          ================================================================ */}

      <div
        aria-hidden="true"
        className="
          atria-hero-glow
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-10
          h-[260px]
          w-[260px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-red-500/10
          blur-[70px]
          dark:bg-red-500/15
          sm:h-[320px]
          sm:w-[320px]
          lg:h-[460px]
          lg:w-[460px]
          xl:h-[520px]
          xl:w-[520px]
        "
      />

      {/* ================================================================
          HERO A
          ================================================================ */}

      <div
        className="
          relative
          z-20
          h-[330px]
          w-[330px]
          sm:h-[390px]
          sm:w-[390px]
          md:h-[460px]
          md:w-[460px]
          lg:h-[620px]
          lg:w-[620px]
          xl:h-[680px]
          xl:w-[680px]
        "
      >
        <img
          src={heroImage}
          alt="Atria Web Solutions"
          width={680}
          height={680}
          fetchPriority="high"
          className="
            atria-hero-float
            absolute
            inset-0
            h-full
            w-full
            object-contain
          "
        />
      </div>

      {/* ================================================================
          PROJECT STAT — MOBILE
          ================================================================ */}

      <div
        className="
          absolute
          bottom-2
          right-1/2
          z-50
          translate-x-1/2
          rounded-2xl
          bg-[var(--card)]/90
          px-4
          py-3
          text-center
          shadow-[var(--shadow-lg)]
          backdrop-blur-xl
          dark:bg-white/5
          sm:bottom-4
          sm:px-5
          sm:py-4
          lg:hidden
        "
      >
        <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-red-500">
          Delivered
        </p>

        <h3 className="mt-1 text-2xl font-black text-[var(--foreground)]">
          50+
        </h3>

        <p className="mt-0.5 text-xs text-[var(--muted)]">
          Successful Projects
        </p>
      </div>

      {/* ================================================================
          PROJECT STAT — DESKTOP
          ================================================================ */}

      <div
        className="
          absolute
          bottom-24
          right-2
          z-50
          hidden
          rounded-3xl
          bg-[var(--card)]/90
          px-7
          py-6
          shadow-[var(--shadow-lg)]
          backdrop-blur-xl
          dark:bg-white/5
          lg:block
        "
      >
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-500">
          Delivered
        </p>

        <h3 className="mt-2 text-4xl font-black text-[var(--foreground)]">
          50+
        </h3>

        <p className="mt-1 text-sm text-[var(--muted)]">
          Successful Projects
        </p>
      </div>
    </div>
  );
}
