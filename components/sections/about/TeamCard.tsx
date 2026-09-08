"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";

interface TeamCardProps {
  name: string;
  role: string;
  linkedin?: string;
  email?: string;
}

export default function TeamCard({
  name,
  role,
  linkedin,
  email,
}: TeamCardProps) {
  // Generate initials
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.01,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        flex
        min-h-[280px]
        flex-col
        justify-between

        rounded-3xl

        border
        border-[var(--border)]

        bg-[var(--card)]

        p-6

        shadow-[var(--shadow-sm)]

        transition-all
        duration-300

        hover:border-red-500/40
        hover:shadow-[0_20px_50px_rgba(229,57,53,.12)]
      "
    >
      {/* Top Section */}

      <div>
        {/* Initial Avatar */}

        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center

            rounded-2xl

            border
            border-red-500/20

            bg-red-500/10

            text-xl
            font-bold

            text-red-500

            transition-all
            duration-300

            group-hover:scale-105
            group-hover:bg-red-500
            group-hover:text-white
          "
        >
          {initials}
        </div>

        {/* Name */}

        <h3
          className="
            mt-7

            text-2xl
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

        {/* Role */}

        <p
          className="
            mt-2

            text-sm
            leading-6
            tracking-wide

            text-[var(--muted)]
          "
        >
          {role}
        </p>
      </div>

      {/* Bottom Section */}

      <div>
        {/* Divider */}

        <div
          className="
            mb-5
            h-px
            w-full

            bg-[var(--border)]

            transition-colors
            duration-300

            group-hover:bg-red-500/20
          "
        />

        {/* Social Icons */}

        <div className="flex items-center gap-2">
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
              h-10
              w-10
              shrink-0
              items-center
              justify-center

              rounded-full

              border
              border-[var(--border)]

              bg-[var(--background)]

              text-[var(--muted)]

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

          {email && (
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                email
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Email ${name}`}
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center

                rounded-full

                border
                border-[var(--border)]

                bg-[var(--background)]

                text-[var(--muted)]

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
          )}
        </div>
      </div>
    </motion.div>
  );
}