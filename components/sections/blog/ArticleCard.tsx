"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Calendar,
  Clock3,
} from "lucide-react";

interface ArticleCardProps {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  image: string;
}

export default function ArticleCard({
  slug,
  title,
  category,
  readTime,
  image,
}: ArticleCardProps) {
  return (
    <motion.article
      whileHover={{
        y: -10,
        scale: 1.015,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
        group
        overflow-hidden
        rounded-[30px]

        border
        border-gray-200
        dark:border-white/10

        bg-white
        dark:bg-[#111111]

        shadow-[0_18px_45px_rgba(17,24,39,.06)]
        dark:shadow-none

        transition-all
        duration-500

        hover:border-red-500/40
        hover:shadow-[0_25px_70px_rgba(229,57,53,.16)]
      "
    >
      {/* Cover */}

      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
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
            from-black/40
            via-transparent
            to-transparent
          "
        />
      </div>

      {/* Content */}

      <div className="p-7">

        {/* Category */}

        <span
          className="
            inline-flex
            items-center

            rounded-full

            border
            border-red-500/20

            bg-red-500/10

            px-3
            py-1

            text-xs
            font-semibold

            text-red-600
            dark:text-red-400
          "
        >
          {category}
        </span>

        {/* Title */}

        <h3
          className="
            mt-5

            text-2xl
            font-bold
            leading-tight

            text-[var(--foreground)]

            transition-colors
            duration-300

            group-hover:text-red-500
          "
        >
          {title}
        </h3>

        {/* Meta */}

        <div
          className="
            mt-6

            flex
            items-center
            justify-between

            text-sm

            text-[var(--muted)]
          "
        >
          <div className="flex items-center gap-2">
            <Calendar size={15} />
            Aug 2026
          </div>

          <div className="flex items-center gap-2">
            <Clock3 size={15} />
            {readTime}
          </div>
        </div>

        {/* CTA */}

        <Link
          href={`/blog/${slug}`}
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
            className="
              transition-transform
              duration-300

              group-hover:-translate-y-1
              group-hover:translate-x-1
            "
          />
        </Link>

      </div>
    </motion.article>
  );
}
