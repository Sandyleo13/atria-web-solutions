"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { featuredProject } from "./portfolio-data";

export default function FeaturedProjects() {
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
            top-20

            h-[650px]
            w-[650px]

            -translate-x-1/2

            rounded-full

            bg-red-500/8
            dark:bg-red-600/10

            blur-[180px]
          "
        />
      </div>

      <Container className="relative z-10">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

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
            Selected Work
          </span>

          <h2
            className="
              mt-8

              text-5xl
              font-bold
              leading-tight

              text-[var(--foreground)]

              lg:text-6xl
            "
          >
            Featured Project
          </h2>

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
            Every project is crafted with attention to detail,
            modern technologies and a focus on delivering
            measurable business value.
          </p>

        </div>

        {/* Featured Card */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -6 }}
          className="
            mt-20

            overflow-hidden

            rounded-[36px]

            border
            border-gray-200
            dark:border-white/10

            bg-white
            dark:bg-[#111111]

            shadow-[0_25px_60px_rgba(17,24,39,.08)]
            dark:shadow-[0_30px_80px_rgba(0,0,0,.35)]

            transition-all
            duration-300

            hover:border-red-500/40

            lg:grid
            lg:grid-cols-[1.15fr_.85fr]
          "
        >
          {/* Left */}

          <div
            className="
              relative

              flex
              min-h-[420px]

              items-center
              justify-center

              overflow-hidden

              bg-gradient-to-br
              from-red-600
              via-red-500
              to-[#1b1b1b]
            "
          >
            <div
              className="
                rounded-3xl

                border
                border-white/20

                bg-white/10

                px-10
                py-16

                backdrop-blur-xl

                shadow-[0_20px_40px_rgba(0,0,0,.15)]
              "
            >
              <h3 className="text-4xl font-black text-white">
                PROJECT
              </h3>

              <p className="mt-4 text-lg text-white/80">
                Screenshot Placeholder
              </p>
            </div>
          </div>

          {/* Right */}

          <div className="flex flex-col justify-center p-10 lg:p-14">

            <span
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.3em]

                text-red-500
              "
            >
              {featuredProject.category}
            </span>

            <h3
              className="
                mt-4

                text-4xl
                font-bold

                text-[var(--foreground)]
              "
            >
              {featuredProject.title}
            </h3>

            <p
              className="
                mt-6

                leading-8

                text-[var(--muted)]
              "
            >
              {featuredProject.description}
            </p>

            {/* Technologies */}

            <div className="mt-8 flex flex-wrap gap-3">

              {featuredProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full

                    border
                    border-red-500/20

                    bg-red-500/10

                    px-4
                    py-2

                    text-sm

                    text-red-600
                    dark:text-red-400
                  "
                >
                  {tech}
                </span>
              ))}

            </div>

            {/* Button */}

            <button
              className="
                mt-10

                inline-flex
                w-fit

                items-center
                gap-2

                rounded-full

                bg-red-600

                px-6
                py-4

                font-semibold

                text-white

                transition-all
                duration-300

                hover:scale-105
                hover:bg-red-700

                hover:shadow-[0_15px_35px_rgba(229,57,53,.28)]
              "
            >
              View Case Study

              <ArrowUpRight size={18} />
            </button>

          </div>

        </motion.div>

      </Container>
    </section>
  );
}