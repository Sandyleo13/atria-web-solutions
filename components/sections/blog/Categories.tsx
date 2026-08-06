"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";

const categories = [
  "Web Development",
  "UI / UX",
  "Next.js",
  "React",
  "Laravel",
  "Node.js",
  "SEO",
  "Business",
  "Technology",
  "Case Studies",
];

export default function Categories() {
  return (
    <section className="bg-[#080808] py-24">
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
            Explore Topics
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white lg:text-6xl">
            Browse by Category
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            Find articles that match your interests, whether you're looking
            for development tutorials, design inspiration or business advice.
          </p>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-5">
          {categories.map((category, index) => (
            <motion.button
              key={category}
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
                y: -5,
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
              "
            >
              {category}
            </motion.button>
          ))}
        </div>
      </Container>
    </section>
  );
}