"use client";

import { CheckCircle2 } from "lucide-react";

const features = [
  "Free Consultation",
  "Modern Tech Stack",
  "Fast Delivery",
  "Long-Term Support",
];

export default function CTAFeatures() {
  return (
    <div
      className="
        mt-10

        grid
        gap-4

        sm:grid-cols-2
        lg:grid-cols-4
      "
    >
      {features.map((feature) => (
        <div
          key={feature}
          className="
            group

            flex
            items-center
            gap-3

            rounded-xl

            border
            border-gray-200
            dark:border-white/10

            bg-white
            dark:bg-white/5

            px-5
            py-4

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
          <CheckCircle2
            size={18}
            className="
              text-red-600
              dark:text-red-500

              transition-transform
              duration-300

              group-hover:scale-110
            "
          />

          <span
            className="
              font-medium

              text-[var(--foreground)]
            "
          >
            {feature}
          </span>
        </div>
      ))}
    </div>
  );
}