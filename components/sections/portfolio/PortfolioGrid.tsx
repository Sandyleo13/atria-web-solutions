"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";

import ProjectCard from "./ProjectCard";
import { portfolioProjects } from "./portfolio-data";

export default function PortfolioGrid() {
  return (
    <section className="relative overflow-hidden bg-[#080808] py-28">
      <Container>
        {/* Section Heading */}

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
            Recent Work
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white lg:text-6xl">
            More Projects
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            From corporate websites to modern web applications, every project is
            designed with performance, scalability and user experience in mind.
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
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}