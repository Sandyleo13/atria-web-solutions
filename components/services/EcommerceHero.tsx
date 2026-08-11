"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

export default function EcommerceHero() {
  const benefits = [
    "Conversion-focused storefronts",
    "Secure and seamless checkout",
    "Mobile-first shopping experience",
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
              E-Commerce Solutions
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
              Turn Browsers Into
              <br />
              <span className="text-red-500">Loyal Customers.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              We create fast, secure and conversion-focused e-commerce
              experiences that make it easier for customers to discover, trust
              and purchase from your brand.
            </p>

            {/* Benefits */}
            <div className="mt-7 space-y-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 text-sm text-[var(--muted)]"
                >
                  <CheckCircle2 size={17} className="shrink-0 text-red-500" />

                  {benefit}
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#ecommerce-features"
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
            {/* Ambient Glow */}
            <div className="absolute h-[380px] w-[380px] rounded-full bg-red-500/10 blur-[130px]" />

            {/* Main Commerce Dashboard */}
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
              {/* Top Bar */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                </div>

                <div className="h-8 w-28 rounded-full bg-[var(--background)]" />
              </div>

              {/* Dashboard Header */}
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <p className="text-xs font-medium text-[var(--muted)]">
                    Store Overview
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-[var(--foreground)]">
                    ₹1,24,850
                  </h3>
                </div>

                <span className="rounded-full bg-red-500/10 px-3 py-1.5 text-xs font-semibold text-red-500">
                  +24.8%
                </span>
              </div>

              {/* Chart */}
              <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-4">
                <div className="flex h-[130px] items-end gap-3">
                  {[35, 55, 42, 70, 58, 82, 95].map((height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{
                        duration: 0.8,
                        delay: 0.3 + index * 0.08,
                      }}
                      className="
              flex-1
              rounded-t-lg
              bg-red-500/20
              first:bg-red-500
              last:bg-red-500
            "
                    />
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-[var(--background)] p-4">
                  <p className="text-xs text-[var(--muted)]">Orders</p>

                  <p className="mt-2 text-lg font-bold text-[var(--foreground)]">
                    248
                  </p>
                </div>

                <div className="rounded-2xl bg-[var(--background)] p-4">
                  <p className="text-xs text-[var(--muted)]">Customers</p>

                  <p className="mt-2 text-lg font-bold text-[var(--foreground)]">
                    1.8K
                  </p>
                </div>

                <div className="rounded-2xl bg-[var(--background)] p-4">
                  <p className="text-xs text-[var(--muted)]">Conversion</p>

                  <p className="mt-2 text-lg font-bold text-[var(--foreground)]">
                    6.4%
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Product Card */}
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
      w-[180px]
      rounded-2xl
      border
      border-[var(--border)]
      bg-[var(--card)]
      p-3
      shadow-[0_20px_50px_rgba(0,0,0,.15)]
      sm:-left-8
    "
            >
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-red-500/10">
                  <ShoppingCart size={22} className="text-red-500" />
                </div>

                <div>
                  <p className="text-[10px] text-[var(--muted)]">New Order</p>

                  <p className="mt-1 text-sm font-bold text-[var(--foreground)]">
                    ₹4,850
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Growth Card */}
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
                This Month
              </p>

              <div className="mt-1 flex items-center gap-2">
                <span className="text-xl font-bold text-[var(--foreground)]">
                  +32%
                </span>

                <span className="text-xs font-semibold text-red-500">
                  Sales
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
