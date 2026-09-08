"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { featuredProjects } from "./portfolio-data";

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

      <div className="pointer-events-none absolute inset-0">
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
            blur-[180px]
            dark:bg-red-600/10
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
            Featured Projects
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
            A selection of digital experiences we have designed and
            developed across sports, events, finance and other
            business-critical industries.
          </p>
        </div>

        {/* Featured Projects */}

        <div className="mt-20 space-y-10">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.12,
              }}
              transition={{
                duration: 0.4,
                delay: Math.min(index * 0.06, 0.12),
                ease: "easeOut",
              }}
              className="
                group
                overflow-hidden
                rounded-[36px]
                border
                border-gray-200
                bg-white
                shadow-[0_25px_60px_rgba(17,24,39,.08)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-red-500/40
                dark:border-white/10
                dark:bg-[#111111]
                dark:shadow-[0_30px_80px_rgba(0,0,0,.35)]
                lg:grid
                lg:grid-cols-[1.15fr_.85fr]
              "
            >
              {/* Project Image */}

              <div
                className="
                  relative
                  min-h-[280px]
                  overflow-hidden
                  bg-[#111111]
                  sm:min-h-[360px]
                  lg:min-h-[430px]
                "
              >
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  sizes="
                    (max-width: 1023px) 100vw,
                    57vw
                  "
                  className="
                    object-cover
                    object-top
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:scale-[1.025]
                  "
                />

                {/* Image Overlay */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/35
                    via-transparent
                    to-transparent
                  "
                />

                {/* Project Number */}

                <div
                  className="
                    absolute
                    left-6
                    top-6
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-black/20
                    text-xs
                    font-semibold
                    text-white
                    backdrop-blur-md
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Project Content */}

              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                <span
                  className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-red-500
                  "
                >
                  {project.category}
                </span>

                <h3
                  className="
                    mt-4
                    text-3xl
                    font-bold
                    text-[var(--foreground)]
                    sm:text-4xl
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-6
                    leading-8
                    text-[var(--muted)]
                  "
                >
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="mt-8 flex flex-wrap gap-2.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        border
                        border-red-500/20
                        bg-red-500/10
                        px-3.5
                        py-1.5
                        text-xs
                        font-medium
                        text-red-600
                        dark:text-red-400
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Case Study Button */}

                
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}