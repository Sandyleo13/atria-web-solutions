"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";

import ProjectCard from "./ProjectCard";
import { portfolioProjects } from "./portfolio-data";

export default function PortfolioGrid() {
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

        {/* Section Heading */}

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
            Recent Work
          </span>

          <h2
            className="
              mt-8

              text-5xl
              font-bold

              text-[var(--foreground)]

              lg:text-6xl
            "
          >
            More Projects
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
            From corporate websites to modern web applications,
            every project is designed with performance,
            scalability and user experience in mind.
          </p>

        </div>

        {/* Projects */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {portfolioProjects.map((project, index) => (
            <motion.div
              key={project.id}
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >
              <ProjectCard
  title={project.title}
  category={project.category}
  image={project.image}
  description={project.description}
/>
            </motion.div>
          ))}

        </div>

      </Container>
    </section>
  );
}