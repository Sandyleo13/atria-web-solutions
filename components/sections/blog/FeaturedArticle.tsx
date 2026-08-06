"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock3 } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { featuredArticle } from "./blog-data";

export default function FeaturedArticle() {
  return (
    <section
      id="articles"
      className="relative overflow-hidden bg-[#080808] py-28"
    >
      <Container>
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
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
            Featured Article
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white lg:text-6xl">
            Editor's Pick
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Discover practical insights, proven strategies and modern web
            development techniques that help businesses grow online.
          </p>
        </div>

        {/* Featured Card */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
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
            mt-20
            overflow-hidden
            rounded-[36px]
            border
            border-white/10
            bg-[#111111]
            shadow-[0_25px_80px_rgba(0,0,0,.35)]

            lg:grid
            lg:grid-cols-[1.15fr_.85fr]
          "
        >
          {/* Left */}

          <div
            className="
              relative
              flex
              min-h-[430px]
              items-center
              justify-center

              bg-gradient-to-br
              from-red-600
              via-red-500
              to-[#111111]
            "
          >
            <div
              className="
                rounded-3xl
                border
                border-white/20
                bg-black/20
                px-12
                py-16
                backdrop-blur-md
              "
            >
              <h2 className="text-5xl font-black text-white">
                INSIGHTS
              </h2>

              <p className="mt-4 text-lg text-white/80">
                Article Preview
              </p>
            </div>
          </div>

          {/* Right */}

          <div className="flex flex-col justify-center p-10 lg:p-14">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
              {featuredArticle.category}
            </span>

            <h3 className="mt-5 text-4xl font-bold leading-tight text-white">
              {featuredArticle.title}
            </h3>

            <div className="mt-6 flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                August 2026
              </div>

              <div className="flex items-center gap-2">
                <Clock3 size={16} />
                {featuredArticle.readTime}
              </div>
            </div>

            <p className="mt-8 leading-8 text-gray-400">
              {featuredArticle.description}
            </p>

            <button
              className="
                mt-10
                inline-flex
                w-fit
                items-center
                gap-2

                rounded-full

                bg-red-500

                px-7
                py-4

                font-semibold
                text-white

                transition-all
                duration-300

                hover:bg-red-600
                hover:scale-105
              "
            >
              Read Article

              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}