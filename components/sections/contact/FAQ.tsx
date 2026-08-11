"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { Container } from "@/components/layout/Container";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most business websites are completed within 2–6 weeks depending on the project's complexity and requirements.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes. We offer ongoing maintenance, security updates, performance optimization and technical support after launch.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. Whether you need a visual refresh or a complete rebuild, we can modernize your website while improving performance and user experience.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "We build websites and web applications using Next.js, React, Laravel, PHP, Node.js, Tailwind CSS, MySQL and other modern technologies.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Every project is unique. After understanding your requirements, we'll provide a transparent proposal tailored to your goals and budget.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section
      className="
        relative
        overflow-hidden

        bg-[var(--background)]

        py-28

        transition-colors
        duration-500
      "
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-10

            h-[500px]
            w-[500px]

            -translate-x-1/2

            rounded-full

            bg-red-500/5
            dark:bg-red-600/8

            blur-[150px]
          "
        />
      </div>

      <Container className="relative z-10">

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

              text-red-600
              dark:text-red-400
            "
          >
            Frequently Asked Questions
          </span>

          <h2
            className="
              mt-8

              text-4xl
              font-bold
              tracking-tight

              text-[var(--foreground)]

              sm:text-5xl
              lg:text-6xl
            "
          >
            We've Got Answers
          </h2>

          <p
            className="
              mx-auto
              mt-7
              max-w-2xl

              text-base
              leading-7

              text-[var(--muted)]

              sm:text-lg
              sm:leading-8
            "
          >
            Here are some of the questions we receive most often
            before starting a project.
          </p>
        </div>

        {/* FAQ List */}

        <div className="mx-auto mt-16 max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const isActive = active === index;

            return (
              <div
                key={faq.question}
                className={`
                  overflow-hidden
                  rounded-[24px]

                  border

                  bg-[var(--card)]

                  transition-all
                  duration-300

                  ${
                    isActive
                      ? "border-red-500/30 shadow-[0_12px_40px_rgba(239,68,68,.07)]"
                      : "border-[var(--border)] shadow-[var(--shadow-sm)] hover:border-red-500/20"
                  }
                `}
              >
                {/* Question */}

                <button
                  type="button"
                  onClick={() =>
                    setActive(isActive ? null : index)
                  }
                  aria-expanded={isActive}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-6

                    px-5
                    py-5

                    text-left

                    sm:px-7
                    sm:py-6

                    lg:px-8
                    lg:py-7
                  "
                >
                  <span
                    className={`
                      text-base
                      font-semibold

                      transition-colors
                      duration-300

                      sm:text-lg
                      lg:text-xl

                      ${
                        isActive
                          ? "text-red-500"
                          : "text-[var(--foreground)]"
                      }
                    `}
                  >
                    {faq.question}
                  </span>

                  {/* Icon */}

                  <span
                    className={`
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center

                      rounded-full

                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "bg-red-500 text-white"
                          : "bg-[var(--card-hover)] text-[var(--muted)]"
                      }
                    `}
                  >
                    <ChevronDown
                      size={18}
                      className={`
                        transition-transform
                        duration-300

                        ${
                          isActive
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    />
                  </span>
                </button>

                {/* Answer */}

                <div
                  className={`
                    grid
                    transition-all
                    duration-300
                    ease-in-out

                    ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <div
                      className="
                        border-t
                        border-[var(--border)]

                        px-5
                        pb-6
                        pt-5

                        text-sm
                        leading-7

                        text-[var(--muted)]

                        sm:px-7
                        sm:text-base

                        lg:px-8
                      "
                    >
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}