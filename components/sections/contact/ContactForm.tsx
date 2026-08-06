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

export default function ContactForm() {
  return (
    <section
      id="contact-form"
      className="bg-[#050505] py-28"
    >
      <Container>
        <div
          className="
            grid
            gap-10

            lg:grid-cols-[1.15fr_.85fr]
          "
        >
          {/* Contact Form */}

          <div
            className="
              rounded-[32px]
              border
              border-white/10
              bg-[#111111]
              p-8

              lg:p-10
            "
          >
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

            <h2 className="mt-6 text-4xl font-bold text-white">
              Tell Us About Your Project
            </h2>

            <p className="mt-4 text-gray-400">
              Fill out the form below and we'll get back to you
              within one business day.
            </p>

            <form className="mt-10 space-y-6">
              {/* Row */}

              <div className="grid gap-6 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="rounded-xl border border-white/10 bg-[#181818] px-5 py-4 text-white outline-none transition focus:border-red-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="rounded-xl border border-white/10 bg-[#181818] px-5 py-4 text-white outline-none transition focus:border-red-500"
                />
              </div>

              {/* Row */}

              <div className="grid gap-6 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Company Name (Optional)"
                  className="rounded-xl border border-white/10 bg-[#181818] px-5 py-4 text-white outline-none transition focus:border-red-500"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="rounded-xl border border-white/10 bg-[#181818] px-5 py-4 text-white outline-none transition focus:border-red-500"
                />
              </div>

              {/* Dropdowns */}

              <div className="grid gap-6 md:grid-cols-2">
                <select className="rounded-xl border border-white/10 bg-[#181818] px-5 py-4 text-white outline-none transition focus:border-red-500">
                  <option>Select Service</option>

                  {services.map((service) => (
                    <option key={service}>
                      {service}
                    </option>
                  ))}
                </select>

                <select className="rounded-xl border border-white/10 bg-[#181818] px-5 py-4 text-white outline-none transition focus:border-red-500">
                  <option>Estimated Budget</option>

                  {budgets.map((budget) => (
                    <option key={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
              </div>

              <textarea
                rows={6}
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-white/10 bg-[#181818] px-5 py-4 text-white outline-none transition focus:border-red-500"
              />

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

                  transition-all
                  duration-300

                  hover:bg-red-600
                "
              >
                Send Message

                <Send size={18} />
              </button>
            </form>
          </div>

          {/* Right Side */}

          <div
            className="
              rounded-[32px]
              border
              border-white/10
              bg-[#111111]
              p-8

              lg:p-10
            "
          >
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
              Why Choose Atria
            </span>

            <h2 className="mt-6 text-4xl font-bold text-white">
              Let's Build Something Amazing
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              We're committed to creating websites and digital
              products that are fast, scalable and designed to
              help your business grow.
            </p>

            <div className="mt-10 space-y-6">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2
                    size={22}
                    className="mt-1 text-red-500"
                  />

                  <span className="leading-7 text-gray-300">
                    {reason}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="
                mt-12
                rounded-2xl
                border
                border-red-500/20
                bg-red-500/10
                p-6
              "
            >
              <h3 className="text-xl font-bold text-white">
                Typical Response Time
              </h3>

              <p className="mt-3 text-gray-300">
                📩 Within 24 Hours
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}