"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import BrowserMockup from "./BrowserMockup";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  description: string;
}

export default function ProjectCard({
  title,
  category,
  image,
  description,
}: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        overflow-hidden
        rounded-[30px]
        border
        border-gray-200
        bg-white
        shadow-[0_12px_32px_rgba(15,23,42,.08)]
        dark:border-white/10
        dark:bg-[#111111]
        dark:shadow-none
        transition-all
        duration-500
        hover:border-red-500/30
        hover:shadow-[0_25px_70px_rgba(229,57,53,.18)]
      "
    >
      {/* Browser Mockup */}

      <div className="p-5 pb-0">
        <motion.div
          whileHover={{
            rotateX: 1,
            rotateY: -1,
            scale: 1.01,
          }}
          transition={{
            duration: 0.3,
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <BrowserMockup
            image={image}
            title={title}
          />
        </motion.div>
      </div>

      {/* Content */}

      <div className="p-7">
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
            font-medium
            tracking-wide
            text-red-600
            dark:text-red-400
          "
        >
          {category}
        </span>

        {/* Title */}

        <div className="mt-5 flex items-center justify-between gap-4">
          <h3
            className="
              text-2xl
              font-bold
              text-[var(--foreground)]
              transition-colors
              duration-300
              group-hover:text-red-500
            "
          >
            {title}
          </h3>

          <ArrowUpRight
            size={22}
            className="
              shrink-0
              text-red-500
              transition-all
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
              group-hover:scale-110
            "
          />
        </div>

        {/* Description */}

        <p className="mt-4 leading-7 text-[var(--muted)]">
          {description}
        </p>

        {/* Tech Stack */}

        <div className="mt-6 flex flex-wrap gap-2">
          {["Next.js", "TypeScript", "Tailwind"].map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-gray-200
                bg-gray-50
                px-3
                py-1
                text-xs
                text-gray-600
                dark:border-white/10
                dark:bg-white/[0.04]
                dark:text-gray-300
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
