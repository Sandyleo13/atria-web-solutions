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
    <section className="bg-[#050505] py-28">
      <Container>
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
            Technologies
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white lg:text-6xl">
            Built With Modern Technology
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            We use trusted and modern technologies to build scalable,
            secure and high-performing digital products.
          </p>
        </div>

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
                border-white/10
                bg-[#111111]
                px-6
                py-4
                text-white
                transition-all
                duration-300

                hover:border-red-500/40
                hover:bg-red-500/10
                hover:shadow-[0_10px_35px_rgba(229,57,53,.25)]
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