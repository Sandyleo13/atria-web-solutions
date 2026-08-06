"use client";

import { ArrowRight } from "lucide-react";

import { useProjectModal } from "@/hooks/useProjectModal";

export default function CTAButton() {
  const { openModal } = useProjectModal();

  return (
    <button
      type="button"
      onClick={openModal}
      className="
        group
        relative

        inline-flex
        items-center
        justify-center
        gap-3

        overflow-hidden

        rounded-2xl

        bg-gradient-to-r
        from-red-600
        via-red-500
        to-red-600

        px-7
        py-3.5

        text-sm
        font-semibold
        tracking-wide
        text-white

        shadow-[0_10px_30px_rgba(239,68,68,.25)]

        transition-all
        duration-300

        hover:-translate-y-1
        hover:scale-[1.02]
        hover:shadow-[0_15px_40px_rgba(239,68,68,.45)]

        active:scale-[0.98]
      "
    >
      {/* Glow */}

      <span
        className="
          absolute
          inset-0

          opacity-0

          bg-gradient-to-r
          from-red-400/40
          via-white/20
          to-red-400/40

          transition-opacity
          duration-300

          group-hover:opacity-100
        "
      />

      {/* Shine */}

      <span
        className="
          absolute
          inset-0

          -translate-x-[120%]

          bg-gradient-to-r
          from-transparent
          via-white/25
          to-transparent

          transition-transform
          duration-700

          group-hover:translate-x-[130%]
        "
      />

      <span className="relative z-10">
        Start Project
      </span>

      <ArrowRight
        size={18}
        className="
          relative
          z-10

          transition-all
          duration-300

          group-hover:translate-x-1
        "
      />
    </button>
  );
}