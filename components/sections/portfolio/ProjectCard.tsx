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
        border-white/10
        bg-[#111111]
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
            text-red-400
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
              text-white
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

        <p className="mt-4 leading-7 text-gray-400">
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
                border-white/10
                bg-white/[0.04]
                px-3
                py-1
                text-xs
                text-gray-300
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