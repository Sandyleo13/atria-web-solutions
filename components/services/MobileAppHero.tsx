"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Smartphone, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function MobileAppHero() {
  const benefits = [
    "Modern and intuitive app experiences",
    "Responsive performance across devices",
    "Built for scalability and growth",
  ];

  return (
    <section className="relative overflow-hidden bg-[var(--background)]">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-[500px] w-[500px] rounded-full bg-red-500/[0.07] blur-[140px]" />

        <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-red-500/[0.05] blur-[150px]" />
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
              Mobile App Development
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
              Apps Built for
              <br />

              <span className="text-red-500">
                Real-World
              </span>

              <br />

              Experiences.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              We design and develop fast, intuitive and scalable mobile
              applications that help businesses connect with customers,
              streamline operations and create better digital experiences.
            </p>

            {/* Benefits */}
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

            {/* Actions */}
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#mobile-app-services"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-red-500
                  px-7
                  py-3.5
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
                  px-7
                  py-3.5
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
            <div className="absolute h-[380px] w-[380px] rounded-full bg-red-500/10 blur-[130px]" />

            {/* Back Phone */}
            <motion.div
              animate={{
                y: [0, 8, 0],
                rotate: [-8, -6, -8],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                right-[12%]
                top-[9%]
                hidden
                h-[390px]
                w-[195px]
                rounded-[34px]
                border
                border-[var(--border)]
                bg-[var(--card)]
                shadow-[0_30px_80px_rgba(0,0,0,.14)]
                sm:block
              "
            >
              <div className="mx-auto mt-3 h-5 w-20 rounded-full bg-[var(--background)]" />

              <div className="mt-6 space-y-4 px-4">
                <div className="h-4 w-20 rounded-full bg-red-500/20" />

                <div className="h-28 rounded-2xl bg-red-500/10" />

                <div className="grid grid-cols-2 gap-3">
                  <div className="h-20 rounded-xl bg-[var(--background)]" />
                  <div className="h-20 rounded-xl bg-[var(--background)]" />
                </div>

                <div className="h-12 rounded-xl bg-red-500/15" />

                <div className="h-12 rounded-xl bg-[var(--background)]" />
              </div>
            </motion.div>

            {/* Main Phone */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [5, 3, 5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-10
                h-[450px]
                w-[225px]
                rounded-[38px]
                border-[7px]
                border-[var(--foreground)]/10
                bg-[var(--card)]
                shadow-[0_35px_100px_rgba(0,0,0,.2)]
              "
            >
              {/* Dynamic Island */}
              <div className="mx-auto mt-3 h-6 w-24 rounded-full bg-[var(--foreground)]/10" />

              {/* App Header */}
              <div className="px-5 pt-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[9px] text-[var(--muted)]">
                      Welcome back
                    </p>

                    <h3 className="mt-1 text-sm font-bold text-[var(--foreground)]">
                      Your Dashboard
                    </h3>
                  </div>

                  <div className="grid h-9 w-9 place-items-center rounded-full bg-red-500/10">
                    <Smartphone
                      size={16}
                      className="text-red-500"
                    />
                  </div>
                </div>

                {/* Main Card */}
                <div className="mt-5 rounded-2xl bg-red-500 p-4 text-white">
                  <p className="text-[9px] text-white/70">
                    Monthly Activity
                  </p>

                  <p className="mt-1 text-2xl font-bold">
                    84%
                  </p>

                  <div className="mt-4 flex h-10 items-end gap-1.5">
                    {[35, 50, 42, 65, 55, 78, 88].map(
                      (height, index) => (
                        <motion.div
                          key={index}
                          initial={{ height: 0 }}
                          animate={{
                            height: `${height}%`,
                          }}
                          transition={{
                            duration: 0.6,
                            delay: 0.6 + index * 0.06,
                          }}
                          className="flex-1 rounded-t bg-white/70"
                        />
                      ),
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="mt-5">
                  <p className="text-[9px] font-medium text-[var(--muted)]">
                    Popular Features
                  </p>

                  <div className="mt-3 space-y-2">
                    {[
                      "Fast Performance",
                      "Secure Experience",
                      "Easy Navigation",
                    ].map((item) => (
                      <div
                        key={item}
                        className="
                          flex
                          items-center
                          gap-2
                          rounded-xl
                          bg-[var(--background)]
                          px-3
                          py-3
                        "
                      >
                        <div className="grid h-6 w-6 place-items-center rounded-lg bg-red-500/10">
                          <CheckCircle2
                            size={13}
                            className="text-red-500"
                          />
                        </div>

                        <span className="text-[10px] font-medium text-[var(--foreground)]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Navigation */}
              <div className="absolute bottom-0 left-0 right-0 rounded-b-[30px] border-t border-[var(--border)] bg-[var(--card)] px-5 py-4">
                <div className="flex justify-between">
                  {[1, 2, 3, 4].map((item, index) => (
                    <div
                      key={item}
                      className={`
                        h-2
                        w-8
                        rounded-full
                        ${
                          index === 0
                            ? "bg-red-500"
                            : "bg-[var(--border)]"
                        }
                      `}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating Rating Card */}
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
                bottom-8
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
              <div className="flex items-center gap-2">
                <Star
                  size={16}
                  fill="currentColor"
                  className="text-red-500"
                />

                <span className="text-lg font-bold text-[var(--foreground)]">
                  4.9
                </span>
              </div>

              <p className="mt-1 text-[10px] text-[var(--muted)]">
                User Experience
              </p>
            </motion.div>

            {/* Floating Performance Card */}
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
                top-20
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
              <p className="text-[10px] uppercase tracking-wider text-[var(--muted)]">
                App Performance
              </p>

              <p className="mt-1 text-lg font-bold text-[var(--foreground)]">
                98/100
              </p>

              <p className="mt-0.5 text-xs text-red-500">
                Optimized
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}