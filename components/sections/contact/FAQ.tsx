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
    <section className="bg-[#080808] py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-red-500">
            Frequently Asked Questions
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white lg:text-6xl">
            We've Got Answers
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            Here are some of the questions we receive most often before starting
            a project.
          </p>
        </div>

        <div className="mx-auto mt-20 max-w-4xl space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-[28px] border border-white/10 bg-[#111111]"
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="flex w-full items-center justify-between p-7 text-left"
              >
                <span className="text-xl font-semibold text-white">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {active === index && (
                <div className="px-7 pb-7 text-gray-400 leading-8">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}