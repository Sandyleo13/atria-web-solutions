"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Palette, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function BrandingDesignHero() {
  const benefits = [
    "Distinct visual identity built around your brand",
    "Consistent design across every touchpoint",
    "Creative systems designed for long-term growth",
  ];

  return (
    <section className="relative overflow-hidden bg-[var(--background)]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-red-500/[0.07] blur-[150px]" />

        <div className="absolute -right-20 bottom-0 h-[500px] w-[500px] rounded-full bg-red-500/[0.06] blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-[1700px] px-5 pb-24 pt-36 sm:px-8 lg:px-12 lg:pb-28 lg:pt-44">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr] xl:gap-24">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span
              className="
                inline-flex
                rounded-full
                border border-red-500/20
                bg-red-500/10
                px-4 py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-red-500
              "
            >
              Branding & Design
            </span>

            <h1
              className="
                mt-7
                text-5xl
                font-black
                leading-[1.02]
                tracking-[-0.045em]
                text-[var(--foreground)]
                sm:text-6xl
                lg:text-7xl
              "
            >
              Build a Brand
              <br />

              <span className="text-red-500">
                People Remember.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              We create distinctive visual identities and thoughtful design
              systems that help businesses communicate clearly, stand out
              confidently and build lasting connections with their audience.
            </p>

            <div className="mt-7 space-y-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 text-sm text-[var(--muted)]"
                >
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-red-500"
                  />

                  {benefit}
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#branding-services"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-red-500
                  px-7 py-3.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-red-600
                  hover:shadow-[0_15px_35px_rgba(229,57,53,.25)]
                "
              >
                Explore Solutions
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[var(--border)]
                  bg-[var(--card)]
                  px-7 py-3.5
                  text-sm
                  font-semibold
                  text-[var(--foreground)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-red-500/30
                "
              >
                Start Your Project
              </Link>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="relative flex min-h-[520px] items-center justify-center"
          >
            {/* Glow */}
            <div className="absolute h-[400px] w-[400px] rounded-full bg-red-500/10 blur-[130px]" />

            {/* Back Card */}
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [-7, -5, -7],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                right-[7%]
                top-[10%]
                hidden
                h-[360px]
                w-[300px]
                rounded-[30px]
                border
                border-[var(--border)]
                bg-[var(--card)]
                shadow-[0_30px_80px_rgba(0,0,0,.14)]
                sm:block
              "
            >
              <div className="p-7">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[var(--muted)]">
                    BRAND SYSTEM
                  </span>

                  <Sparkles
                    size={18}
                    className="text-red-500"
                  />
                </div>

                <div className="mt-8 h-32 rounded-2xl bg-red-500/10" />

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="h-12 rounded-xl bg-red-500" />
                  <div className="h-12 rounded-xl bg-[var(--background)]" />
                  <div className="h-12 rounded-xl bg-[var(--foreground)]/10" />
                </div>

                <div className="mt-6 h-3 w-32 rounded-full bg-[var(--foreground)]/10" />
                <div className="mt-3 h-3 w-44 rounded-full bg-[var(--foreground)]/5" />
              </div>
            </motion.div>

            {/* Main Brand Card */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [4, 2, 4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-10
                w-[330px]
                rounded-[34px]
                border
                border-[var(--border)]
                bg-[var(--card)]
                p-7
                shadow-[0_35px_100px_rgba(0,0,0,.18)]
                sm:w-[370px]
              "
            >
              <div className="flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-red-500/10">
                  <Palette
                    size={24}
                    className="text-red-500"
                  />
                </div>

                <span className="rounded-full bg-red-500/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-red-500">
                  Identity
                </span>
              </div>

              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                  Brand Identity
                </p>

                <h3 className="mt-3 text-4xl font-black tracking-tight text-[var(--foreground)]">
                  Make Your
                  <br />
                  Mark.
                </h3>
              </div>

              {/* Logo Concept */}
              <div className="mt-8 flex items-center justify-center rounded-2xl bg-[var(--background)] py-8">
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-[8px] border-red-500">
                  <div className="h-8 w-8 rounded-full bg-[var(--foreground)]" />

                  <div className="absolute -right-3 top-2 h-5 w-5 rounded-full bg-red-500" />
                </div>
              </div>

              {/* Color Palette */}
              <div className="mt-6">
                <p className="text-[10px] font-medium uppercase tracking-wider text-[var(--muted)]">
                  Visual Language
                </p>

                <div className="mt-3 flex gap-2">
                  <div className="h-8 flex-1 rounded-lg bg-red-500" />
                  <div className="h-8 flex-1 rounded-lg bg-[var(--foreground)]" />
                  <div className="h-8 flex-1 rounded-lg border border-[var(--border)] bg-[var(--background)]" />
                  <div className="h-8 flex-1 rounded-lg bg-red-500/20" />
                </div>
              </div>
            </motion.div>

            {/* Floating Card */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [-4, -2, -4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-6
                left-0
                z-20
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--card)]
                px-5
                py-4
                shadow-[0_20px_50px_rgba(0,0,0,.15)]
                sm:left-4
              "
            >
              <p className="text-[10px] uppercase tracking-wider text-[var(--muted)]">
                Brand Consistency
              </p>

              <p className="mt-1 text-lg font-bold text-[var(--foreground)]">
                100%
              </p>

              <p className="mt-0.5 text-xs text-red-500">
                Across Every Touchpoint
              </p>
            </motion.div>

            {/* Floating Design Card */}
            <motion.div
              animate={{
                y: [0, 7, 0],
                rotate: [4, 2, 4],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                right-0
                top-24
                z-20
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--card)]
                px-5
                py-4
                shadow-[0_20px_50px_rgba(0,0,0,.15)]
                sm:right-2
              "
            >
              <div className="flex items-center gap-2">
                <Sparkles
                  size={16}
                  className="text-red-500"
                />

                <span className="text-sm font-bold text-[var(--foreground)]">
                  Creative Direction
                </span>
              </div>

              <p className="mt-1 text-xs text-[var(--muted)]">
                Designed with purpose
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}