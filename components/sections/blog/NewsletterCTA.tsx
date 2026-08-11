"use client";

import { Container } from "@/components/layout/Container";

export default function NewsletterCTA() {
  return (
    <section
      className="
        relative
        overflow-hidden

        py-28

        bg-[var(--background)]

        transition-colors
        duration-500
      "
    >
      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            left-1/2
            top-1/2

            h-[500px]
            w-[500px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-red-500/8
            dark:bg-red-600/12

            blur-[160px]
          "
        />
      </div>

      <Container className="relative z-10">
        <div
          className="
            mx-auto
            max-w-4xl

            rounded-[36px]

            border
            border-gray-200
            dark:border-white/10

            bg-white
            dark:bg-[#111111]

            p-12

            text-center

            shadow-[0_20px_60px_rgba(17,24,39,.08)]
            dark:shadow-[0_25px_80px_rgba(0,0,0,.35)]

            transition-all
            duration-500

            backdrop-blur-xl
          "
        >
          {/* Badge */}

          <span
            className="
              inline-flex
              items-center

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
              dark:text-red-500
            "
          >
            Stay Updated
          </span>

          {/* Heading */}

          <h2
            className="
              mt-8

              text-5xl
              font-bold

              text-[var(--foreground)]

              lg:text-6xl
            "
          >
            Never Miss
            <br />
            An Update
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-8

              max-w-2xl

              text-lg
              leading-8

              text-[var(--muted)]
            "
          >
            Get the latest insights, web development tips,
            design inspiration and digital strategies
            delivered directly to your inbox.
          </p>

          {/* Form */}

          <form className="mx-auto mt-12 flex max-w-2xl flex-col gap-4 md:flex-row">

            <input
              type="email"
              placeholder="Enter your email address"
              className="
                flex-1

                rounded-full

                border
                border-gray-300
                dark:border-white/10

                bg-white
                dark:bg-[#181818]

                px-6
                py-4

                text-[var(--foreground)]
                placeholder:text-[var(--muted)]

                outline-none

                transition-all
                duration-300

                focus:border-red-500
                focus:ring-2
                focus:ring-red-500/20
              "
            />

            <button
              className="
                rounded-full

                bg-red-600

                px-8
                py-4

                font-semibold
                text-white

                transition-all
                duration-300

                hover:scale-105
                hover:bg-red-700
                hover:shadow-[0_15px_35px_rgba(229,57,53,.30)]
              "
            >
              Subscribe
            </button>

          </form>
        </div>
      </Container>
    </section>
  );
}