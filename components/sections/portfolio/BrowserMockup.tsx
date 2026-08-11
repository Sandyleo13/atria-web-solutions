"use client";

import Image from "next/image";
import { Globe } from "lucide-react";

interface BrowserMockupProps {
  image: string;
  title: string;
}

export default function BrowserMockup({
  image,
  title,
}: BrowserMockupProps) {
  return (
    <div
      className="
        overflow-hidden

        rounded-2xl

        border
        border-gray-200
        dark:border-white/10

        bg-white
        dark:bg-[#161616]

        shadow-[0_12px_35px_rgba(17,24,39,.06)]
        dark:shadow-[0_15px_35px_rgba(0,0,0,.25)]

        transition-all
        duration-300
      "
    >
      {/* Browser Top */}

      <div
        className="
          flex
          items-center
          justify-between

          border-b
          border-gray-200
          dark:border-white/10

          bg-gray-50
          dark:bg-[#1b1b1b]

          px-5
          py-4
        "
      >
        {/* Browser Dots */}

        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        </div>

        {/* Fake URL */}

        <div
          className="
            flex
            items-center
            gap-2

            rounded-full

            border
            border-gray-200
            dark:border-white/10

            bg-white
            dark:bg-black/30

            px-4
            py-2

            text-xs

            text-gray-600
            dark:text-gray-400
          "
        >
          <Globe size={14} />

          atriawebsolutions.com
        </div>

        <div className="w-10" />
      </div>

      {/* Screenshot */}

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

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t

            from-black/35
            via-transparent
            to-transparent
          "
        />

        {/* Reflection */}

        <div
          className="
            absolute
            inset-y-0
            -left-1/2

            w-1/3

            -skew-x-12

            bg-white/20

            opacity-0

            transition-all
            duration-700

            group-hover:left-[120%]
            group-hover:opacity-100
          "
        />

      </div>
    </div>
  );
}