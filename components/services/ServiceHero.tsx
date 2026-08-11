"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";

type ServiceHeroProps = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  points: string[];
};

export default function ServiceHero({
  eyebrow,
  title,
  highlight,
  description,
  points,
}: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--background)]">
      {/* Ambient background */}

      <div className="absolute inset-0">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-red-500/10 blur-[150px]" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-red-500/5 blur-[150px]" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(120,120,120,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(120,120,120,.3)_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />
      </div>

      <Container className="relative z-10">
        <div
          className="
            grid
            min-h-[760px]
            items-center
            gap-16
            pt-32
            pb-20
            lg:grid-cols-[1fr_0.9fr]
            lg:pt-40
          "
        >
          {/* LEFT */}

          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="
                inline-flex
                rounded-full
                border
                border-red-500/20
                bg-red-500/10
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-red-500
              "
            >
              {eyebrow}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.65,
              }}
              className="
                mt-8
                max-w-3xl
                text-5xl
                font-black
                leading-[1.02]
                tracking-[-0.05em]
                text-[var(--foreground)]
                sm:text-6xl
                lg:text-7xl
              "
            >
              {title}

              <br />

              <span className="text-red-500">
                {highlight}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-8
                text-[var(--muted)]
              "
            >
              {description}
            </motion.p>

            {/* Points */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.6,
              }}
              className="mt-8 space-y-3"
            >
              {points.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 text-sm text-[var(--muted)]"
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-red-500"
                  />

                  {point}
                </div>
              ))}
            </motion.div>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/contact#contact-form"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-red-500
                  px-7
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-red-600
                "
              >
                Start Your Project

                <ArrowRight size={18} />
              </Link>

              <Link
                href="/portfolio"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[var(--border)]
                  bg-[var(--card)]
                  px-7
                  py-4
                  font-semibold
                  text-[var(--foreground)]
                  transition-all
                  duration-300
                  hover:border-red-500/30
                  hover:bg-red-500/10
                "
              >
                View Our Work
              </Link>
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="relative flex min-h-[500px] items-center justify-center"
          >
            {/* Glow */}

            <div className="absolute h-[400px] w-[400px] rounded-full bg-red-500/10 blur-[130px]" />

            {/* Browser */}

            <div
              className="
                relative
                w-full
                max-w-[560px]
                rotate-[-3deg]
                overflow-hidden
                rounded-[28px]
                border
                border-[var(--border)]
                bg-[var(--card)]
                shadow-[0_30px_100px_rgba(0,0,0,.18)]
              "
            >
              {/* Browser header */}

              <div className="flex items-center gap-2 border-b border-[var(--border)] px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-gray-400/40" />
                <span className="h-3 w-3 rounded-full bg-gray-400/30" />

                <div className="ml-4 h-7 flex-1 rounded-lg bg-[var(--background)]" />
              </div>

              {/* Website mockup */}

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="h-7 w-28 rounded-md bg-red-500/15" />

                  <div className="flex gap-3">
                    <span className="h-3 w-12 rounded-full bg-[var(--muted)]/20" />
                    <span className="h-3 w-12 rounded-full bg-[var(--muted)]/20" />
                    <span className="h-3 w-12 rounded-full bg-[var(--muted)]/20" />
                  </div>
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                  <div>
                    <div className="h-8 w-52 rounded-lg bg-[var(--foreground)]/15" />

                    <div className="mt-3 h-8 w-40 rounded-lg bg-red-500/70" />

                    <div className="mt-6 space-y-2">
                      <div className="h-3 w-full rounded-full bg-[var(--muted)]/15" />
                      <div className="h-3 w-[85%] rounded-full bg-[var(--muted)]/15" />
                      <div className="h-3 w-[65%] rounded-full bg-[var(--muted)]/15" />
                    </div>

                    <div className="mt-7 h-10 w-32 rounded-full bg-red-500" />
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="h-40 w-full rounded-3xl bg-red-500/10">
                      <div className="mx-auto mt-8 h-24 w-32 rounded-2xl border border-red-500/20 bg-red-500/10" />
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  <div className="h-16 rounded-xl bg-[var(--background)]" />
                  <div className="h-16 rounded-xl bg-[var(--background)]" />
                  <div className="h-16 rounded-xl bg-[var(--background)]" />
                </div>
              </div>
            </div>

            {/* Floating badge */}

            <div
              className="
                absolute
                -bottom-5
                -left-4
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--card)]
                px-5
                py-4
                shadow-[var(--shadow-lg)]
              "
            >
              <p className="text-xs text-[var(--muted)]">
                Built for
              </p>

              <p className="mt-1 font-bold text-[var(--foreground)]">
                Performance & Growth
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}