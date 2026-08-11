"use client";

import Link from "next/link";
import { ArrowRight, BadgeCheck, CheckCircle2, MessageCircle, ShieldCheck, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function ReputationManagementHero() {
  const benefits = [
    "Monitor how people perceive your brand",
    "Build trust through consistent brand communication",
    "Respond strategically to customer feedback",
  ];

  return (
    <section className="relative overflow-hidden bg-[var(--background)]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-[550px] w-[550px] rounded-full bg-red-500/[0.07] blur-[150px]" />

        <div className="absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-red-500/[0.05] blur-[150px]" />
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
              Online Reputation Management
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
              Protect Your
              <br />

              <span className="text-red-500">
                Digital Reputation.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Your reputation influences whether people trust your brand.
              We help you monitor, manage and strengthen your online presence
              so your digital reputation reflects the value you provide.
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
                href="#reputation-services"
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
                  border border-[var(--border)]
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
                Protect My Brand
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
                rotate: [-7, -4, -7],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                right-[5%]
                top-[8%]
                hidden
                h-[350px]
                w-[300px]
                rounded-[30px]
                border border-[var(--border)]
                bg-[var(--card)]
                p-7
                shadow-[0_30px_80px_rgba(0,0,0,.14)]
                sm:block
              "
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                  Brand Health
                </span>

                <ShieldCheck
                  size={20}
                  className="text-red-500"
                />
              </div>

              <div className="mt-8 flex items-center gap-3">
                <div className="grid size-11 place-items-center rounded-full bg-red-500/10">
                  <BadgeCheck size={21} className="text-red-500" />
                </div>

                <div>
                  <div className="h-3 w-28 rounded-full bg-[var(--foreground)]/10" />
                  <div className="mt-2 h-2 w-20 rounded-full bg-[var(--foreground)]/5" />
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-[var(--border)] p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[var(--muted)]">
                      Reviews
                    </span>

                    <span className="text-sm font-bold text-red-500">
                      Positive
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl border border-[var(--border)] p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[var(--muted)]">
                      Sentiment
                    </span>

                    <span className="text-sm font-bold text-[var(--foreground)]">
                      Improving
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Reputation Card */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [3, 1, 3],
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
                border border-[var(--border)]
                bg-[var(--card)]
                p-7
                shadow-[0_35px_100px_rgba(0,0,0,.18)]
                sm:w-[370px]
              "
            >
              <div className="flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-red-500/10">
                  <ShieldCheck size={25} className="text-red-500" />
                </div>

                <span className="rounded-full bg-red-500/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-red-500">
                  Protected
                </span>
              </div>

              <p className="mt-8 text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                Online Reputation
              </p>

              <h3 className="mt-3 text-4xl font-black tracking-tight text-[var(--foreground)]">
                Trust
                <br />
                Starts Online.
              </h3>

              {/* Rating */}
              <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[var(--muted)]">
                      Customer Sentiment
                    </p>

                    <p className="mt-2 text-3xl font-black text-[var(--foreground)]">
                      4.8
                    </p>
                  </div>

                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={17}
                        fill="currentColor"
                        className="text-red-500"
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-[var(--foreground)]/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "92%" }}
                    transition={{
                      duration: 1.2,
                      delay: 0.5,
                    }}
                    className="h-full rounded-full bg-red-500"
                  />
                </div>
              </div>

              {/* Activity */}
              <div className="mt-5 flex items-center gap-3 rounded-2xl border border-[var(--border)] p-4">
                <div className="grid size-10 place-items-center rounded-xl bg-red-500/10">
                  <MessageCircle size={18} className="text-red-500" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[var(--foreground)]">
                    Brand Sentiment
                  </p>

                  <p className="mt-0.5 text-xs text-[var(--muted)]">
                    Positive conversations increasing
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge */}
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
                bottom-7
                left-0
                z-20
                rounded-2xl
                border border-[var(--border)]
                bg-[var(--card)]
                px-5
                py-4
                shadow-[0_20px_50px_rgba(0,0,0,.15)]
                sm:left-4
              "
            >
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-red-500" />

                <span className="text-sm font-bold text-[var(--foreground)]">
                  Brand Protected
                </span>
              </div>

              <p className="mt-1 text-xs text-[var(--muted)]">
                Reputation monitoring
              </p>
            </motion.div>

            {/* Floating Review */}
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
                border border-[var(--border)]
                bg-[var(--card)]
                px-5
                py-4
                shadow-[0_20px_50px_rgba(0,0,0,.15)]
                sm:right-2
              "
            >
              <div className="flex items-center gap-2">
                <Star
                  size={16}
                  fill="currentColor"
                  className="text-red-500"
                />

                <span className="text-sm font-bold text-[var(--foreground)]">
                  4.8 / 5
                </span>
              </div>

              <p className="mt-1 text-xs text-[var(--muted)]">
                Positive customer feedback
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}