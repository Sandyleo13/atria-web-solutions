 "use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/Container";

export default function CareersCTA() {
  return (
    <section className="relative overflow-hidden bg-[#080808] py-32">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[150px]" />
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
            Join Our Journey
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white lg:text-6xl">
            Don't See
            <br />
            The Right Role?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            We're always looking for passionate people who love building
            exceptional digital experiences. Send us your resume and we'll
            reach out when the right opportunity comes along.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                gap-2
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
              Apply Now

              <ArrowRight size={18} />
            </Link>

            <a
              href="mailto:careers@atriawebsolutions.com"
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-8
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:border-red-500/30
                hover:bg-red-500/10
              "
            >
              careers@atriawebsolutions.com
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}