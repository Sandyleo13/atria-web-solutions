"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";

const process = [
  {
    number: "01",
    title: "Application",
    description:
      "Submit your application and tell us about your experience and passion.",
  },
  {
    number: "02",
    title: "Initial Discussion",
    description:
      "A friendly conversation to understand your goals and introduce Atria.",
  },
  {
    number: "03",
    title: "Technical Round",
    description:
      "Showcase your skills through a practical discussion or technical assessment.",
  },
  {
    number: "04",
    title: "Welcome Aboard",
    description:
      "If we're a great match, we'll send your offer and begin your onboarding journey.",
  },
];

export default function HiringProcess() {
  return (
    <section className="bg-[#050505] py-28">
      <Container>
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span
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
              tracking-[0.35em]
              text-red-500
            "
          >
            Hiring Process
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white lg:text-6xl">
            Our Recruitment Journey
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            We keep our hiring process simple, transparent and focused on
            finding the right fit for both you and our team.
          </p>
        </div>

        {/* Timeline */}

        <div className="mt-20 grid gap-8 lg:grid-cols-4">
          {process.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="
                relative
                rounded-[28px]
                border
                border-white/10
                bg-[#111111]
                p-8
              "
            >
              {/* Connecting Line */}

              {index < process.length - 1 && (
                <div
                  className="
                    absolute
                    right-[-40px]
                    top-12
                    hidden
                    h-px
                    w-10
                    bg-red-500/30
                    lg:block
                  "
                />
              )}

              <span className="text-5xl font-black text-red-500/20">
                {step.number}
              </span>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {step.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}