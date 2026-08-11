"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function EmailMarketingHero() {
  const benefits = [
    "Campaigns designed around your audience",
    "Automated journeys that nurture leads",
    "Clear messaging focused on conversions",
  ];

  return (
    <section className="relative overflow-hidden bg-[var(--background)]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-red-500/[0.07] blur-[150px]" />

        <div className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-red-500/[0.06] blur-[150px]" />
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
              Email Marketing
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
              Turn Every
              <br />

              <span className="text-red-500">
                Inbox Into Opportunity.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Build meaningful relationships with your audience through
              strategic email campaigns, automated journeys and content that
              turns attention into action.
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
                href="#email-services"
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
                Start Your Campaign
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

            {/* Back email card */}
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
                right-[6%]
                top-[8%]
                hidden
                h-[350px]
                w-[300px]
                rounded-[30px]
                border border-[var(--border)]
                bg-[var(--card)]
                shadow-[0_30px_80px_rgba(0,0,0,.14)]
                sm:block
              "
            >
              <div className="p-7">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[var(--muted)]">
                    CAMPAIGN
                  </span>

                  <Sparkles size={18} className="text-red-500" />
                </div>

                <div className="mt-7 rounded-2xl bg-red-500/10 p-6">
                  <div className="h-3 w-24 rounded-full bg-red-500/40" />
                  <div className="mt-4 h-5 w-40 rounded-full bg-[var(--foreground)]/10" />
                  <div className="mt-3 h-3 w-full rounded-full bg-[var(--foreground)]/5" />
                  <div className="mt-2 h-3 w-4/5 rounded-full bg-[var(--foreground)]/5" />
                </div>

                <div className="mt-5 h-10 rounded-xl bg-red-500" />

                <div className="mt-6 h-3 w-32 rounded-full bg-[var(--foreground)]/10" />
                <div className="mt-3 h-3 w-44 rounded-full bg-[var(--foreground)]/5" />
              </div>
            </motion.div>

            {/* Main email card */}
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
                border border-[var(--border)]
                bg-[var(--card)]
                p-7
                shadow-[0_35px_100px_rgba(0,0,0,.18)]
                sm:w-[370px]
              "
            >
              <div className="flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-red-500/10">
                  <Mail size={24} className="text-red-500" />
                </div>

                <span className="rounded-full bg-red-500/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-red-500">
                  Campaign
                </span>
              </div>

              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                  Email Strategy
                </p>

                <h3 className="mt-3 text-4xl font-black tracking-tight text-[var(--foreground)]">
                  Right Message.
                  <br />
                  Right Moment.
                </h3>
              </div>

              {/* Email Preview */}
              <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-red-500/10">
                    <Mail size={16} className="text-red-500" />
                  </div>

                  <div>
                    <div className="h-2.5 w-24 rounded-full bg-[var(--foreground)]/15" />
                    <div className="mt-2 h-2 w-16 rounded-full bg-[var(--foreground)]/7" />
                  </div>
                </div>

                <div className="mt-6 h-4 w-40 rounded-full bg-[var(--foreground)]/15" />

                <div className="mt-4 h-3 w-full rounded-full bg-[var(--foreground)]/7" />
                <div className="mt-2 h-3 w-5/6 rounded-full bg-[var(--foreground)]/7" />

                <div className="mt-6 h-10 w-28 rounded-xl bg-red-500" />
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[var(--muted)]">
                    Engagement
                  </p>

                  <p className="mt-1 text-lg font-bold text-[var(--foreground)]">
                    Growing
                  </p>
                </div>

                <Send size={20} className="text-red-500" />
              </div>
            </motion.div>

            {/* Floating stats */}
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
              <p className="text-[10px] uppercase tracking-wider text-[var(--muted)]">
                Audience Growth
              </p>

              <p className="mt-1 text-lg font-bold text-[var(--foreground)]">
                +24%
              </p>

              <p className="mt-0.5 text-xs text-red-500">
                Campaign Performance
              </p>
            </motion.div>

            {/* Automation card */}
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
                <Sparkles size={16} className="text-red-500" />

                <span className="text-sm font-bold text-[var(--foreground)]">
                  Automated Journeys
                </span>
              </div>

              <p className="mt-1 text-xs text-[var(--muted)]">
                Working around the clock
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}