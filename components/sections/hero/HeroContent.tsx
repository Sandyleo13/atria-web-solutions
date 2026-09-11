import Link from "next/link";
import { ArrowRight } from "lucide-react";

import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="relative z-20 flex flex-col items-start">
      {/* Badge */}
      <p
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-red-200
          bg-red-50
          px-5
          py-2
          text-xs
          font-semibold
          uppercase
          tracking-[0.28em]
          text-red-600
          dark:border-red-500/15
          dark:bg-red-500/5
          dark:text-red-400
        "
      >
        We Design. We Develop. We Deliver.
      </p>

      {/* Heading */}
      <h1
        className="
          mt-8
          text-6xl
          font-black
          uppercase
          leading-[0.88]
          tracking-[-0.05em]
          sm:text-7xl
          xl:text-[88px]
        "
      >
        <span className="block text-[var(--foreground)]">
          Building
        </span>

        <span className="block text-[var(--foreground)]">
          Powerful
        </span>

        <span
          className="
            block
            bg-gradient-to-r
            from-red-600
            via-red-500
            to-red-400
            bg-clip-text
            text-transparent
          "
        >
          Digital
        </span>

        <span
          className="
            block
            bg-gradient-to-r
            from-red-600
            via-red-500
            to-red-400
            bg-clip-text
            text-transparent
          "
        >
          Solutions
        </span>
      </h1>

      {/* Description — LCP element */}
      <p
        className="
          mt-10
          max-w-lg
          text-lg
          leading-8
          text-[var(--muted)]
        "
      >
        We combine creativity, technology and strategy to deliver powerful
        digital experiences that help businesses grow, engage customers and
        build lasting brands.
      </p>

      {/* Buttons */}
      <div className="mt-12 flex flex-wrap gap-5">
        <Link
          href="/services"
          className="
            group
            inline-flex
            items-center
            gap-2
            rounded-xl
            bg-red-600
            px-7
            py-4
            font-semibold
            text-white
            shadow-lg
            shadow-red-500/20
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-red-500
            hover:shadow-red-500/40
          "
        >
          Our Services

          <ArrowRight
            size={18}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </Link>

        <Link
          href="/portfolio"
          className="
            group
            inline-flex
            items-center
            gap-2
            rounded-xl
            border
            border-[var(--border)]
            bg-[var(--card)]
            px-7
            py-4
            font-semibold
            text-[var(--foreground)]
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-red-500
            hover:bg-red-500/10
          "
        >
          View Portfolio

          <ArrowRight
            size={18}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </Link>
      </div>

      {/* Stats */}
      <div className="mt-20 w-full">
        <HeroStats />
      </div>
    </div>
  );
}