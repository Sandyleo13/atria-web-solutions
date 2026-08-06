"use client";

import { ArrowRight } from "lucide-react";

import { useProjectModal } from "@/hooks/useProjectModal";

export default function StartProjectButton() {
  const { openModal } = useProjectModal();

  return (
    <button
      onClick={openModal}
      className="
        group
        inline-flex
        items-center
        gap-2

        rounded-full

        bg-red-500

        px-6
        py-3

        font-semibold
        text-white

        transition-all
        duration-300

        hover:scale-105
        hover:bg-red-600
      "
    >
      Start Project

      <ArrowRight
        size={18}
        className="
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
      />
    </button>
  );
}