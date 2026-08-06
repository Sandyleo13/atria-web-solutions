"use client";

import { Container } from "@/components/layout/Container";

export default function NewsletterCTA() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-32">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[140px]" />
      </div>

      <Container className="relative z-10">
        <div
          className="
            mx-auto
            max-w-4xl
            rounded-[36px]
            border
            border-white/10
            bg-white/[0.03]
            p-12
            text-center
            backdrop-blur-xl
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
            Stay Updated
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white lg:text-6xl">
            Never Miss
            <br />
            An Update
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Get the latest insights, web development tips,
            design inspiration and digital strategies
            delivered directly to your inbox.
          </p>

          <form className="mx-auto mt-12 flex max-w-2xl flex-col gap-4 md:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              className="
                flex-1
                rounded-full
                border
                border-white/10
                bg-[#111111]
                px-6
                py-4
                text-white
                outline-none

                focus:border-red-500
              "
            />

            <button
              className="
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
              Subscribe
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}