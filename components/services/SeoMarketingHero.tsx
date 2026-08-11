"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Search, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function SeoMarketingHero() {
  const benefits = [
    "Higher search visibility",
    "Qualified organic traffic",
    "Data-driven growth strategies",
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
          {/* Left */}
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
              SEO & Digital Marketing
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
              Get Found.
              <br />

              <span className="text-red-500">
                Get Chosen.
              </span>

              <br />

              Grow.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              We help businesses improve their online visibility, attract
              qualified visitors and turn digital attention into meaningful
              growth through practical, data-driven strategies.
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
                href="#seo-services"
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
                Explore Services
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

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="relative flex min-h-[500px] items-center justify-center"
          >
            {/* Glow */}
            <div className="absolute h-[380px] w-[380px] rounded-full bg-red-500/10 blur-[130px]" />

            {/* Main SEO Dashboard */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-10
                w-full
                max-w-[500px]
                rounded-[32px]
                border
                border-[var(--border)]
                bg-[var(--card)]
                p-5
                shadow-[0_30px_90px_rgba(0,0,0,.12)]
              "
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                </div>

                <div className="h-8 w-28 rounded-full bg-[var(--background)]" />
              </div>

              {/* Search Overview */}
              <div className="mt-6 flex items-center gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-red-500/10">
                  <Search
                    size={26}
                    className="text-red-500"
                  />
                </div>

                <div>
                  <p className="text-xs text-[var(--muted)]">
                    Organic Visibility
                  </p>

                  <div className="mt-1 flex items-center gap-2">
                    <h3 className="text-2xl font-bold text-[var(--foreground)]">
                      84%
                    </h3>

                    <span className="text-xs font-semibold text-red-500">
                      +18.4%
                    </span>
                  </div>
                </div>
              </div>

              {/* Search Results */}
              <div className="mt-6 space-y-3">
                {[
                  ["Website Development", "Position #1"],
                  ["E-Commerce Solutions", "Position #3"],
                  ["Web Design Mumbai", "Position #5"],
                ].map(([keyword, position], index) => (
                  <motion.div
                    key={keyword}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.4 + index * 0.12,
                    }}
                    className="
                      flex
                      items-center
                      justify-between
                      rounded-2xl
                      border
                      border-[var(--border)]
                      bg-[var(--background)]
                      px-4
                      py-4
                    "
                  >
                    <div>
                      <p className="text-sm font-semibold text-[var(--foreground)]">
                        {keyword}
                      </p>

                      <p className="mt-1 text-xs text-[var(--muted)]">
                        Organic keyword
                      </p>
                    </div>

                    <span className="rounded-full bg-red-500/10 px-3 py-1.5 text-xs font-semibold text-red-500">
                      {position}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Growth Chart */}
              <div className="mt-5 rounded-2xl bg-[var(--background)] p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium text-[var(--muted)]">
                    Organic Traffic
                  </p>

                  <TrendingUp
                    size={17}
                    className="text-red-500"
                  />
                </div>

                <div className="mt-4 flex h-20 items-end gap-2">
                  {[30, 38, 35, 50, 48, 65, 72, 88].map(
                    (height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{
                          duration: 0.7,
                          delay: 0.5 + index * 0.06,
                        }}
                        className={`
                          flex-1
                          rounded-t-md
                          ${
                            index >= 6
                              ? "bg-red-500"
                              : "bg-red-500/20"
                          }
                        `}
                      />
                    ),
                  )}
                </div>
              </div>
            </motion.div>

            {/* Floating Growth Card */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [-3, -1, -3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -left-4
                bottom-8
                z-20
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--card)]
                px-5
                py-4
                shadow-[0_20px_50px_rgba(0,0,0,.15)]
                sm:-left-8
              "
            >
              <p className="text-[10px] uppercase tracking-wider text-[var(--muted)]">
                Monthly Growth
              </p>

              <div className="mt-1 flex items-center gap-2">
                <span className="text-xl font-bold text-[var(--foreground)]">
                  +42%
                </span>

                <TrendingUp
                  size={17}
                  className="text-red-500"
                />
              </div>
            </motion.div>

            {/* Floating Ranking Card */}
            <motion.div
              animate={{
                y: [0, 7, 0],
                rotate: [3, 1, 3],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -right-3
                top-16
                z-20
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--card)]
                px-5
                py-4
                shadow-[0_20px_50px_rgba(0,0,0,.15)]
                sm:-right-8
              "
            >
              <p className="text-[10px] uppercase tracking-wider text-[var(--muted)]">
                Search Ranking
              </p>

              <p className="mt-1 text-lg font-bold text-[var(--foreground)]">
                Top 5
              </p>

              <p className="mt-0.5 text-xs text-red-500">
                Keywords improved
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}