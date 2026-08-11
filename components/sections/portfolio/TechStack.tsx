"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Laravel",
  "PHP",
  "Node.js",
  "Express",
  "MySQL",
  "MongoDB",
  "WordPress",
  "Shopify",
];

export default function TechStack() {
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

        {/* Heading */}

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
            Technologies
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
            Built With Modern Technology
          </h2>

          <p
            className="
              mt-8

              text-lg
              leading-8

              text-[var(--muted)]
            "
          >
            We use trusted and modern technologies to build scalable,
            secure and high-performing digital products.
          </p>

        </div>

        {/* Tech Stack */}

        <div className="mt-20 flex flex-wrap justify-center gap-5">

          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.05,
              }}
              whileHover={{
                y: -6,
                scale: 1.05,
              }}
              className="
                rounded-full

                border
                border-gray-200
                dark:border-white/10

                bg-white
                dark:bg-[#111111]

                px-6
                py-4

                text-[var(--foreground)]

                shadow-[0_10px_30px_rgba(17,24,39,.05)]
                dark:shadow-none

                transition-all
                duration-300

                hover:border-red-500/40
                hover:bg-red-50
                dark:hover:bg-red-500/10

                hover:shadow-[0_10px_35px_rgba(229,57,53,.18)]
              "
            >
              {tech}
            </motion.div>
          ))}

        </div>

      </Container>
    </section>
  );
}