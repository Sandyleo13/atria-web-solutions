"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";

import ArticleCard from "./ArticleCard";
import { articles } from "./blog-data";

export default function BlogGrid() {
  return (
    <section className="bg-[#050505] py-28">
      <Container>
        {/* Heading */}

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
            Latest Articles
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white lg:text-6xl">
            Learn. Build. Grow.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Explore practical guides, development insights, UI/UX inspiration
            and digital strategies written to help businesses succeed online.
          </p>
        </div>

        {/* Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
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
              <ArticleCard
                title={article.title}
                category={article.category}
                readTime={article.readTime}
                image={article.image}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}