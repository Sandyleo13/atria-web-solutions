"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Calendar,
  Clock3,
} from "lucide-react";

interface ArticleCardProps {
  title: string;
  category: string;
  readTime: string;
  image: string;
}

export default function ArticleCard({
  title,
  category,
  readTime,
  image,
}: ArticleCardProps) {
  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35 }}
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
      {/* Cover */}

      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            via-transparent
            to-transparent
          "
        />
      </div>

      {/* Content */}

      <div className="p-7">
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
          {category}
        </span>

        <h3
          className="
            mt-5
            text-2xl
            font-bold
            leading-tight
            text-white
            transition-colors
            duration-300
            group-hover:text-red-500
          "
        >
          {title}
        </h3>

        <div className="mt-6 flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Calendar size={15} />
            Aug 2026
          </div>

          <div className="flex items-center gap-2">
            <Clock3 size={15} />
            {readTime}
          </div>
        </div>

        <button
          className="
            mt-8
            inline-flex
            items-center
            gap-2

            font-semibold
            text-red-500

            transition-all
            duration-300

            group-hover:gap-3
          "
        >
          Read Article

          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </button>
      </div>
    </motion.article>
  );
}