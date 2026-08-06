"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  MapPin,
  Clock3,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { openPositions } from "./careers-data";

export default function OpenPositions() {
  return (
    <section
      id="positions"
      className="bg-[#080808] py-28"
    >
      <Container>
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
              inline-flex
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
              text-red-500
            "
          >
            Open Positions
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white lg:text-6xl">
            Find Your Next Role
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Join our growing team and help build exceptional digital experiences
            for businesses around the world.
          </p>
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
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -4,
              }}
              className="
                rounded-[28px]
                border
                border-white/10
                bg-[#111111]
                p-8

                transition-all
                duration-300

                hover:border-red-500/30
                hover:shadow-[0_20px_60px_rgba(229,57,53,.15)]
              "
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                {/* Left */}

                <div>
                  <h3 className="text-3xl font-bold text-white">
                    {job.title}
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-6 text-gray-400">

                    <div className="flex items-center gap-2">
                      <Briefcase size={18} />
                      {job.type}
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={18} />
                      {job.location}
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock3 size={18} />
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
                          border-red-500/20
                          bg-red-500/10
                          px-4
                          py-2
                          text-sm
                          text-red-400
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right */}

                <button
                  className="
                    inline-flex
                    items-center
                    gap-2

                    rounded-full

                    bg-red-500

                    px-7
                    py-4

                    font-semibold
                    text-white

                    transition-all
                    duration-300

                    hover:bg-red-600
                  "
                >
                  Apply Now

                  <ArrowRight size={18} />
                </button>

              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}