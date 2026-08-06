"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";

export default function PortfolioCTA() {
  return (
    <section className="relative overflow-hidden bg-[#080808] py-32">
      {/* Glow */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[140px]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
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
            Let's Build Together
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white lg:text-6xl">
            Ready to Start
            <br />
            Your Next Project?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Whether you need a business website, web application,
            e-commerce platform or custom software,
            we're ready to bring your vision to life.
          </p>

          <Link
            href="/contact"
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

              hover:scale-105
              hover:bg-red-600
            "
          >
            Start Your Project

            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}