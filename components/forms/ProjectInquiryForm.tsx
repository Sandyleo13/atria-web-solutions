"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Send,
} from "lucide-react";

const services = [
  "Business Website",
  "E-Commerce",
  "Web Application",
  "UI / UX Design",
  "SEO & Marketing",
  "Other",
];

const budgets = [
  "Under ₹25,000",
  "₹25k – ₹50k",
  "₹50k – ₹1L",
  "₹1L – ₹3L",
  "₹3L+",
];

export default function ProjectInquiryForm() {
  const [step, setStep] = useState(1);

  const [service, setService] = useState("");

  return (
    <div className="relative p-10 lg:p-14">
      {/* Header */}

      <div className="mb-10">
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
          Start Your Project
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
          Let's Build Something Amazing
        </h2>

        <p className="mt-5 max-w-2xl leading-8 text-gray-400">
          Tell us about your idea and we'll get back to you
          within one business day.
        </p>
      </div>

      {/* Progress */}

      <div className="mb-10 flex gap-3">
        <div
          className={`h-2 flex-1 rounded-full ${
            step >= 1
              ? "bg-red-500"
              : "bg-white/10"
          }`}
        />

        <div
          className={`h-2 flex-1 rounded-full ${
            step >= 2
              ? "bg-red-500"
              : "bg-white/10"
          }`}
        />
      </div>

      {/* STEP 1 */}

      {step === 1 && (
        <>
          <h3 className="text-3xl font-bold text-white">
            What are you looking to build?
          </h3>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {services.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setService(item)}
                className={`
                  rounded-2xl
                  border
                  p-6
                  text-left
                  transition-all
                  duration-300

                  ${
                    service === item
                      ? "border-red-500 bg-red-500/10"
                      : "border-white/10 bg-[#121212] hover:border-red-500/30"
                  }
                `}
              >
                <h4 className="text-lg font-semibold text-white">
                  {item}
                </h4>
              </button>
            ))}
          </div>

          <button
            disabled={!service}
            onClick={() => setStep(2)}
            className="
              mt-10
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-red-500
              px-8
              py-4
              font-semibold
              text-white
              transition

              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            Continue

            <ArrowRight size={18} />
          </button>
        </>
      )}

      {/* STEP 2 */}

      {step === 2 && (
        <>
          <h3 className="text-3xl font-bold text-white">
            Tell us about yourself
          </h3>

          <form className="mt-8 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <input
                placeholder="Full Name"
                className="rounded-xl border border-white/10 bg-[#121212] px-5 py-4 text-white outline-none focus:border-red-500"
              />

              <input
                placeholder="Email Address"
                type="email"
                className="rounded-xl border border-white/10 bg-[#121212] px-5 py-4 text-white outline-none focus:border-red-500"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <input
                placeholder="Company"
                className="rounded-xl border border-white/10 bg-[#121212] px-5 py-4 text-white outline-none focus:border-red-500"
              />

              <input
                placeholder="Phone Number"
                className="rounded-xl border border-white/10 bg-[#121212] px-5 py-4 text-white outline-none focus:border-red-500"
              />
            </div>

            <select className="w-full rounded-xl border border-white/10 bg-[#121212] px-5 py-4 text-white outline-none focus:border-red-500">
              <option>Select Budget</option>

              {budgets.map((budget) => (
                <option key={budget}>
                  {budget}
                </option>
              ))}
            </select>

            <textarea
              rows={6}
              placeholder="Tell us about your project..."
              className="w-full rounded-xl border border-white/10 bg-[#121212] px-5 py-4 text-white outline-none focus:border-red-500"
            />

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  px-7
                  py-4
                  text-white
                "
              >
                <ArrowLeft size={18} />

                Back
              </button>

              <button
                type="submit"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-red-500
                  px-8
                  py-4
                  font-semibold
                  text-white
                "
              >
                Send Project Request

                <Send size={18} />
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}