"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import { Container } from "@/components/layout/Container";

export default function ContactCTA() {
  return (
    <section
      className="
        relative
        overflow-hidden

        bg-[var(--background)]

        py-10
        sm:py-12

        transition-colors
        duration-500
      "
    >
      {/* Subtle Glow */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-1/2

            h-[260px]
            w-[260px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-red-500/8
            dark:bg-red-600/12

            blur-[100px]
          "
        />
      </div>

      <Container className="relative z-10">
        <div
          className="
            mx-auto
            max-w-3xl

            rounded-[26px]

            border
            border-[var(--border)]

            bg-[var(--card)]

            px-6
            py-7

            text-center

            shadow-[var(--shadow-lg)]

            transition-all
            duration-500

            sm:px-10
            sm:py-8

            hover:border-red-500/30
          "
        >
          {/* Badge */}

          <span
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              border
              border-red-500/20

              bg-red-500/10

              px-3
              py-1.5

              text-[11px]
              font-semibold
              uppercase
              tracking-[0.3em]

              text-red-500
            "
          >
            <Mail size={12} />

            Let's Talk
          </span>

          {/* Heading */}

          <h2
            className="
              mt-4

              text-3xl
              font-bold
              leading-tight

              text-[var(--foreground)]

              sm:text-4xl
            "
          >
            Have an Idea?

            <span className="text-red-500">
              {" "}
              Let's Make It Real.
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-3

              max-w-xl

              text-sm
              leading-6

              text-[var(--muted)]

              sm:text-base
            "
          >
            Tell us what you're building and where you want to go next.
            We'll help turn your idea into something real.
          </p>

          {/* Actions */}

          <div
            className="
              mt-5

              flex
              flex-col
              items-center
              justify-center
              gap-3

              sm:flex-row
            "
          >
            {/* Primary CTA */}

            <Link
              href="#contact-form"
              className="
                inline-flex
                items-center
                justify-center
                gap-2

                rounded-full

                bg-red-500

                px-6
                py-3

                text-sm
                font-semibold

                text-white

                transition-all
                duration-300

                hover:scale-105
                hover:bg-red-600

                hover:shadow-[0_10px_30px_rgba(239,68,68,.20)]
              "
            >
              Start a Conversation

              <ArrowRight size={16} />
            </Link>

            {/* Email */}

            <a
              href="mailto:hello@atriawebsolutions.com"
              className="
                inline-flex
                items-center
                justify-center

                rounded-full

                border
                border-[var(--border)]

                bg-[var(--card)]

                px-6
                py-3

                text-sm
                font-semibold

                text-[var(--foreground)]

                transition-all
                duration-300

                hover:border-red-500/30
                hover:bg-red-500/10
                hover:text-red-500
              "
            >
              hello@atriawebsolutions.com
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}