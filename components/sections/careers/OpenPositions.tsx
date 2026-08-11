"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  MapPin,
  Clock3,
} from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { openPositions } from "./careers-data";

export default function OpenPositions() {
  return (
    <section
      id="positions"
      className="
        relative
        overflow-hidden
        bg-[var(--background)]
        py-28
        transition-colors
        duration-500
      "
    >
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-180px]
          top-1/4
          h-[450px]
          w-[450px]
          rounded-full
          bg-red-500/[0.035]
          blur-[140px]
        "
      />

      <Container className="relative z-10">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-red-500/20
              bg-red-500/10
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.35em]
              text-red-600
              dark:text-red-500
            "
          >
            Open Positions
          </span>

          <h2
            className="
              mt-8
              text-5xl
              font-bold
              leading-tight
              text-gray-900
              dark:text-white
              lg:text-6xl
            "
          >
            Find Your Next Role
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-gray-600
              dark:text-gray-400
            "
          >
            Join our growing team and help build exceptional digital
            experiences for businesses around the world.
          </p>

          <div
            className="
              mx-auto
              mt-10
              h-px
              w-28
              bg-gradient-to-r
              from-transparent
              via-red-500
              to-transparent
            "
          />
        </div>

        {/* Jobs */}

        <div className="mt-20 space-y-6">

          {openPositions.map((job, index) => (

            <motion.div
              key={job.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -4,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]

                border
                border-gray-200
                dark:border-white/10

                bg-white
                dark:bg-[#111111]

                p-8

                shadow-[0_15px_45px_rgba(15,23,42,.06)]
                dark:shadow-none

                transition-all
                duration-300

                hover:border-red-500/30
                hover:shadow-[0_20px_60px_rgba(229,57,53,.12)]
              "
            >

              {/* Card Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-48
                  w-48
                  rounded-full
                  bg-red-500/[0.04]
                  blur-[80px]
                  transition-all
                  duration-500
                  group-hover:bg-red-500/[0.08]
                "
              />

              <div
                className="
                  relative
                  z-10
                  flex
                  flex-col
                  gap-8
                  lg:flex-row
                  lg:items-center
                  lg:justify-between
                "
              >

                {/* Left */}

                <div>

                  <h3
                    className="
                      text-3xl
                      font-bold
                      text-gray-900
                      transition-colors
                      duration-300
                      group-hover:text-red-600
                      dark:text-white
                      dark:group-hover:text-red-400
                    "
                  >
                    {job.title}
                  </h3>

                  {/* Job Meta */}

                  <div
                    className="
                      mt-5
                      flex
                      flex-wrap
                      gap-x-6
                      gap-y-3
                      text-gray-500
                      dark:text-gray-400
                    "
                  >

                    <div className="flex items-center gap-2">
                      <Briefcase
                        size={18}
                        className="text-red-500"
                      />
                      {job.type}
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin
                        size={18}
                        className="text-red-500"
                      />
                      {job.location}
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock3
                        size={18}
                        className="text-red-500"
                      />
                      {job.experience}
                    </div>

                  </div>

                  {/* Skills */}

                  <div className="mt-6 flex flex-wrap gap-3">

                    {job.skills.map((skill) => (

                      <span
                        key={skill}
                        className="
                          rounded-full
                          border
                          border-gray-200
                          bg-gray-50
                          px-4
                          py-2
                          text-sm
                          font-medium
                          text-gray-700

                          dark:border-red-500/20
                          dark:bg-red-500/10
                          dark:text-red-400
                        "
                      >
                        {skill}
                      </span>

                    ))}

                  </div>

                </div>

                {/* Right */}

                <Link
                  href={`/careers/${job.slug}`}
                  className="
                    inline-flex
                    w-fit
                    shrink-0
                    items-center
                    gap-2
                    rounded-full
                    bg-red-600
                    px-7
                    py-4
                    font-semibold
                    text-white
                    shadow-[0_10px_25px_rgba(229,57,53,.15)]
                    transition-all
                    duration-300

                    hover:scale-105
                    hover:bg-red-700
                    hover:shadow-[0_15px_35px_rgba(229,57,53,.25)]
                  "
                >
                  Apply Now

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

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}