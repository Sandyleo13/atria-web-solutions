"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { featuredProject } from "./portfolio-data";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#080808] py-28"
    >
      <Container>
        {/* Section Header */}

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
            Selected Work
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-6xl">
            Featured Project
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Every project is crafted with attention to detail, modern
            technologies and a focus on delivering measurable business value.
          </p>
        </div>

        {/* Featured Card */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mt-20
            overflow-hidden
            rounded-[36px]
            border
            border-white/10
            bg-[#111111]
            shadow-[0_30px_80px_rgba(0,0,0,.35)]

            lg:grid
            lg:grid-cols-[1.15fr_.85fr]
          "
        >
          {/* Left - Screenshot */}

          <div
            className="
              relative
              flex
              min-h-[420px]
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
                px-10
                py-16
                backdrop-blur-md
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

          {/* Right - Content */}

          <div className="flex flex-col justify-center p-10 lg:p-14">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
              {featuredProject.category}
            </span>

            <h3 className="mt-4 text-4xl font-bold text-white">
              {featuredProject.title}
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
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
                    text-red-400
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
                bg-red-500
                px-6
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-red-600
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