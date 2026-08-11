"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTAButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-5">

      {/* Primary Button */}

      <Link
        href="/contact"
        className="
          inline-flex
          items-center
          gap-3

          rounded-xl

          bg-red-600

          px-8
          py-4

          font-semibold
          text-white

          transition-all
          duration-300

          hover:-translate-y-1
          hover:bg-red-700
          hover:shadow-[0_18px_35px_rgba(239,68,68,.28)]
        "
      >
        Start Your Project
        <ArrowRight size={18} />
      </Link>

      {/* Secondary Button */}

      <Link
        href="/contact"
        className="
          inline-flex
          items-center
          gap-3

          rounded-xl

          border
          border-gray-200
          dark:border-white/10

          bg-white
          dark:bg-white/5

          px-8
          py-4

          font-semibold

          text-[var(--foreground)]

          backdrop-blur-xl

          shadow-[0_10px_25px_rgba(17,24,39,.05)]
          dark:shadow-none

          transition-all
          duration-300

          hover:-translate-y-1
          hover:border-red-500/40
          hover:bg-red-50
          dark:hover:bg-red-500/10
        "
      >
        Book Discovery Call
      </Link>

    </div>
  );
}