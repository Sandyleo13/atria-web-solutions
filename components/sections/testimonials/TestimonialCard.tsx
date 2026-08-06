"use client";

import { motion } from "framer-motion";

import StarRating from "./StarRating";
import CompanyBadge from "./CompanyBadge";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  quote: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        relative
        overflow-hidden
        rounded-[32px]

        border
        border-white/10

        bg-white/[0.03]

        p-10

        backdrop-blur-2xl

        shadow-[0_0_50px_rgba(0,0,0,.35)]
      "
    >
      {/* Background Glow */}

      <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-red-600/10 blur-[120px]" />

      <div className="relative z-10">

        <CompanyBadge
          company={testimonial.company}
        />

        <div className="mt-8">
          <StarRating rating={testimonial.rating} />
        </div>

        <blockquote
          className="
            mt-8

            text-2xl
            leading-relaxed

            text-white

            lg:text-3xl
          "
        >
          “{testimonial.quote}”
        </blockquote>

        <div className="mt-12 flex items-center gap-5">

          {/* Avatar */}

          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center

              rounded-full

              bg-gradient-to-br
              from-red-500
              to-red-700

              text-xl
              font-bold
              text-white
            "
          >
            {testimonial.name
              .split(" ")
              .map((word) => word[0])
              .join("")}
          </div>

          <div>

            <h4
              className="
                text-xl
                font-semibold
                text-white
              "
            >
              {testimonial.name}
            </h4>

            <p
              className="
                mt-1
                text-gray-400
              "
            >
              {testimonial.role} • {testimonial.company}
            </p>

          </div>

        </div>

      </div>
    </motion.div>
  );
}