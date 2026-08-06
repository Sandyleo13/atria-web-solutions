"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTAButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-5">

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

          hover:bg-red-500
        "
      >
        Start Your Project

        <ArrowRight size={18} />
      </Link>

      <Link
        href="/contact"
        className="
          inline-flex
          items-center
          gap-3

          rounded-xl

          border
          border-white/10

          bg-white/5

          px-8
          py-4

          font-semibold
          text-white

          backdrop-blur-xl

          transition-all

          hover:border-red-500/30
          hover:bg-red-500/10
        "
      >
        Book Discovery Call
      </Link>

    </div>
  );
}