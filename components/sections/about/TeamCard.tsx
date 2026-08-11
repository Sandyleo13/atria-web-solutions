"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  email?: string;
}

export default function TeamCard({
  name,
  role,
  image,
  linkedin,
  email,
}: TeamCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        flex
        h-[500px]
        flex-col
        overflow-hidden
        rounded-3xl

        border
        border-gray-200
        dark:border-white/10

        bg-white
        dark:bg-[#111111]

        shadow-[0_18px_40px_rgba(17,24,39,.06)]
        dark:shadow-none

        transition-all
        duration-300

        hover:border-red-500/40
        hover:shadow-[0_20px_50px_rgba(229,57,53,.16)]
      "
    >
      {/* Image */}

      <div className="relative h-[390px] w-full shrink-0 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 20vw"
          className="
            object-cover
            object-center

            transition-transform
            duration-500

            group-hover:scale-105
          "
        />

        {/* Overlay */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0

            bg-gradient-to-t
            from-black/50
            via-black/10
            to-transparent
          "
        />
      </div>

      {/* Content */}

      <div className="flex min-h-0 flex-1 items-center justify-between gap-4 p-5">
        {/* Name + Role */}

        <div className="min-w-0">
          <h3
            className="
              line-clamp-2
              text-xl
              font-bold
              leading-tight

              text-[var(--foreground)]

              transition-colors
              duration-300

              group-hover:text-red-500
            "
          >
            {name}
          </h3>

          <p
            className="
              mt-2
              line-clamp-2

              text-sm
              leading-5
              tracking-wide

              text-[var(--muted)]
            "
          >
            {role}
          </p>
        </div>

        {/* Social Icons */}

        <div className="flex shrink-0 items-center gap-2">
          {/* LinkedIn */}

          <Link
            href={linkedin || "#"}
            target={linkedin ? "_blank" : undefined}
            rel={linkedin ? "noopener noreferrer" : undefined}
            aria-label={`${name} LinkedIn`}
            onClick={(e) => {
              if (!linkedin) e.preventDefault();
            }}
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center

              rounded-full

              border
              border-gray-200
              dark:border-white/10

              bg-gray-50
              dark:bg-white/5

              text-gray-600
              dark:text-gray-400

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-red-500
              hover:bg-red-500
              hover:text-white
            "
          >
            <FaLinkedinIn size={16} />
          </Link>

          {/* Email */}

          <a
            href={
              email
                ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`
                : undefined
            }
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Email ${name}`}
            className="
    flex
    h-9
    w-9
    shrink-0
    items-center
    justify-center

    rounded-full

    border
    border-gray-200
    dark:border-white/10

    bg-gray-50
    dark:bg-white/5

    text-gray-600
    dark:text-gray-400

    transition-all
    duration-300

    hover:-translate-y-1
    hover:border-red-500
    hover:bg-red-500
    hover:text-white
  "
          >
            <Mail size={17} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
