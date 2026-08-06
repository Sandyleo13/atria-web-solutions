"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

const articles = [
  {
    title: "Modern Website Trends",
    category: "Web Development",
    read: "5 min read",
    rotate: -8,
    x: -40,
    y: 30,
  },
  {
    title: "UI/UX Best Practices",
    category: "Design",
    read: "8 min read",
    rotate: 6,
    x: 60,
    y: -10,
  },
  {
    title: "SEO Strategies for 2026",
    category: "Marketing",
    read: "6 min read",
    rotate: -2,
    x: 0,
    y: 0,
  },
];

export default function HeroVisual() {
  return (
    <div className="relative flex h-[650px] items-center justify-center">
      {/* Background Glow */}

      <div className="absolute h-[420px] w-[420px] rounded-full bg-red-500/10 blur-[120px]" />

      {articles.map((article, index) => (
        <motion.div
          key={article.title}
          initial={{
            opacity: 0,
            y: 80,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: article.y,
            x: article.x,
            rotate: article.rotate,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: index * 0.2,
          }}
          whileHover={{
            y: article.y - 12,
            rotate: 0,
            scale: 1.03,
          }}
          className="
            absolute
            w-[320px]
            rounded-[28px]
            border
            border-white/10
            bg-[#121212]
            p-6
            shadow-[0_25px_60px_rgba(0,0,0,.45)]
          "
        >
          {/* Category */}

          <span
            className="
              inline-flex
              rounded-full
              border
              border-red-500/20
              bg-red-500/10
              px-3
              py-1
              text-xs
              font-semibold
              text-red-400
            "
          >
            {article.category}
          </span>

          {/* Title */}

          <h3 className="mt-5 text-2xl font-bold leading-tight text-white">
            {article.title}
          </h3>

          {/* Meta */}

          <div className="mt-6 flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar size={15} />
              <span>Aug 2026</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock3 size={15} />
              <span>{article.read}</span>
            </div>
          </div>

          {/* Read */}

          <div className="mt-8 flex items-center justify-between">
            <span className="font-medium text-white">
              Read Article
            </span>

            <ArrowUpRight
              size={20}
              className="text-red-500"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}