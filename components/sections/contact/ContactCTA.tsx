"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/Container";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-32">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[150px]" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl rounded-[36px] border border-white/10 bg-white/[0.03] p-12 text-center backdrop-blur-xl">
          <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-red-500">
            Ready to Get Started?
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white lg:text-6xl">
            Let's Build Something
            <br />
            Extraordinary.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Every great digital product starts with a conversation.
            Tell us about your idea and we'll help transform it into
            a successful online experience.
          </p>

          <Link
            href="#contact-form"
            className="
              mt-12
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
            Start Your Project

            <ArrowRight size={18} />
          </Link>
        </div>
      </Container>
    </section>
  );
}