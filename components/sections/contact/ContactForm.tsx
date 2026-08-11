"use client";

import {
  CheckCircle2,
  Send,
} from "lucide-react";

import { Container } from "@/components/layout/Container";

const services = [
  "Website Development",
  "Web Application",
  "UI / UX Design",
  "SEO & Marketing",
  "Maintenance",
  "Other",
];

const budgets = [
  "Under ₹25,000",
  "₹25,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000+",
];

const reasons = [
  "Transparent communication throughout the project",
  "Modern technologies like Next.js & Laravel",
  "Scalable and performance-focused solutions",
  "Post-launch support and maintenance",
];

const inputClassName = `
  w-full

  rounded-xl

  border
  border-[var(--border)]

  bg-[var(--card)]

  px-5
  py-4

  text-[var(--foreground)]

  placeholder:text-[var(--muted)]

  outline-none

  transition-all
  duration-300

  focus:border-red-500
  focus:bg-[var(--card)]
  focus:ring-4
  focus:ring-red-500/10
`;

export default function ContactForm() {
  return (
    <section
      id="contact-form"
      className="
        relative
        overflow-hidden

        bg-[var(--background)]

        py-20
        sm:py-24
        lg:py-28

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
            top-1/2

            h-[600px]
            w-[600px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-red-500/[0.04]
            dark:bg-red-600/[0.07]

            blur-[160px]
          "
        />
      </div>

      <Container className="relative z-10">
        <div
          className="
            grid
            gap-8

            lg:grid-cols-[1.15fr_.85fr]

            lg:gap-10
          "
        >
          {/* ========================= */}
          {/* CONTACT FORM */}
          {/* ========================= */}

          <div
            className="
              rounded-[32px]

              border
              border-[var(--border)]

              bg-[var(--card)]

              p-6
              sm:p-8
              lg:p-10

              shadow-[var(--shadow-lg)]

              transition-all
              duration-500
            "
          >
            {/* Label */}

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
              Start Your Project
            </span>

            {/* Heading */}

            <h2
              className="
                mt-6

                text-3xl
                font-bold
                tracking-tight

                text-[var(--foreground)]

                sm:text-4xl
              "
            >
              Tell Us About Your Project
            </h2>

            <p
              className="
                mt-4

                max-w-xl

                leading-7

                text-[var(--muted)]
              "
            >
              Fill out the form below and we'll get back to you
              within one business day.
            </p>

            {/* Form */}

            <form className="mt-10 space-y-6">
              {/* Name + Email */}

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="
                      mb-2
                      block

                      text-sm
                      font-medium

                      text-[var(--foreground)]
                    "
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className={inputClassName}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      block

                      text-sm
                      font-medium

                      text-[var(--foreground)]
                    "
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className={inputClassName}
                  />
                </div>
              </div>

              {/* Company + Phone */}

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="company"
                    className="
                      mb-2
                      block

                      text-sm
                      font-medium

                      text-[var(--foreground)]
                    "
                  >
                    Company Name

                    <span className="ml-1 text-[var(--muted)]">
                      (Optional)
                    </span>
                  </label>

                  <input
                    id="company"
                    type="text"
                    placeholder="Your company"
                    className={inputClassName}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="
                      mb-2
                      block

                      text-sm
                      font-medium

                      text-[var(--foreground)]
                    "
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className={inputClassName}
                  />
                </div>
              </div>

              {/* Service + Budget */}

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="service"
                    className="
                      mb-2
                      block

                      text-sm
                      font-medium

                      text-[var(--foreground)]
                    "
                  >
                    Service
                  </label>

                  <select
                    id="service"
                    defaultValue=""
                    className={`
                      ${inputClassName}

                      cursor-pointer

                      appearance-none
                    `}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option
                        key={service}
                        value={service}
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="
                      mb-2
                      block

                      text-sm
                      font-medium

                      text-[var(--foreground)]
                    "
                  >
                    Estimated Budget
                  </label>

                  <select
                    id="budget"
                    defaultValue=""
                    className={`
                      ${inputClassName}

                      cursor-pointer

                      appearance-none
                    `}
                  >
                    <option value="" disabled>
                      Select your budget
                    </option>

                    {budgets.map((budget) => (
                      <option
                        key={budget}
                        value={budget}
                      >
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}

              <div>
                <label
                  htmlFor="message"
                  className="
                    mb-2
                    block

                    text-sm
                    font-medium

                    text-[var(--foreground)]
                  "
                >
                  Tell Us About Your Project
                </label>

                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell us about your goals, requirements, timeline or anything else you'd like us to know..."
                  className={`
                    ${inputClassName}

                    resize-none
                  `}
                />
              </div>

              {/* Submit */}

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

                  shadow-[0_10px_30px_rgba(239,68,68,.18)]

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-red-600

                  hover:shadow-[0_15px_35px_rgba(239,68,68,.25)]
                "
              >
                Send Message

                <Send size={18} />
              </button>
            </form>
          </div>

          {/* ========================= */}
          {/* WHY CHOOSE ATRIA */}
          {/* ========================= */}

          <div
            className="
              relative
              overflow-hidden

              rounded-[32px]

              border
              border-[var(--border)]

              bg-[var(--card)]

              p-6
              sm:p-8
              lg:p-10

              shadow-[var(--shadow-lg)]

              transition-all
              duration-500
            "
          >
            {/* Accent */}

            <div
              className="
                pointer-events-none

                absolute
                right-[-100px]
                top-[-100px]

                h-[280px]
                w-[280px]

                rounded-full

                bg-red-500/[0.06]
                dark:bg-red-600/[0.10]

                blur-[100px]
              "
            />

            <div className="relative z-10">
              {/* Label */}

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
                Why Choose Atria
              </span>

              {/* Heading */}

              <h2
                className="
                  mt-6

                  text-3xl
                  font-bold
                  leading-tight

                  text-[var(--foreground)]

                  sm:text-4xl
                "
              >
                Let's Build Something

                <span className="text-red-500">
                  {" "}
                  Amazing.
                </span>
              </h2>

              <p
                className="
                  mt-5

                  leading-8

                  text-[var(--muted)]
                "
              >
                We're committed to creating websites and digital
                products that are fast, scalable and designed to
                help your business grow.
              </p>

              {/* Reasons */}

              <div className="mt-10 space-y-6">
                {reasons.map((reason) => (
                  <div
                    key={reason}
                    className="
                      flex
                      items-start
                      gap-4
                    "
                  >
                    <div
                      className="
                        mt-0.5

                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center

                        rounded-full

                        bg-red-500/10
                      "
                    >
                      <CheckCircle2
                        size={18}
                        className="text-red-500"
                      />
                    </div>

                    <span
                      className="
                        leading-7

                        text-[var(--foreground)]
                      "
                    >
                      {reason}
                    </span>
                  </div>
                ))}
              </div>

              {/* Response Time */}

              <div
                className="
                  mt-12

                  rounded-2xl

                  border
                  border-red-500/15

                  bg-red-500/5
                  dark:bg-red-500/[0.08]

                  p-6
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-10
                      w-10

                      shrink-0

                      items-center
                      justify-center

                      rounded-xl

                      bg-red-500/10
                    "
                  >
                    <Send
                      size={18}
                      className="text-red-500"
                    />
                  </div>

                  <div>
                    <h3
                      className="
                        font-bold

                        text-[var(--foreground)]
                      "
                    >
                      Typical Response Time
                    </h3>

                    <p
                      className="
                        mt-1

                        text-sm

                        text-[var(--muted)]
                      "
                    >
                      We usually respond within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}