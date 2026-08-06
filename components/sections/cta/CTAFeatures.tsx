"use client";

import {
  CheckCircle2,
} from "lucide-react";

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
            flex
            items-center
            gap-3

            rounded-xl

            border
            border-white/10

            bg-white/5

            px-5
            py-4
          "
        >
          <CheckCircle2
            size={18}
            className="text-red-500"
          />

          <span className="text-white">
            {feature}
          </span>
        </div>
      ))}
    </div>
  );
}