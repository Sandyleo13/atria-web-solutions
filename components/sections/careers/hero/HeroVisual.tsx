"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

const jobs = [
  {
    title: "Frontend Developer",
    location: "Mumbai",
    type: "Full Time",
    rotate: -7,
    x: -40,
    y: 40,
  },
  {
    title: "Backend Developer",
    location: "Remote",
    type: "Full Time",
    rotate: 6,
    x: 60,
    y: -20,
  },
  {
    title: "UI / UX Designer",
    location: "Hybrid",
    type: "Internship",
    rotate: -2,
    x: 0,
    y: 0,
  },
];

export default function HeroVisual() {
  return (
    <div className="relative flex h-[650px] items-center justify-center">
      {/* Glow */}

      <div className="absolute h-[430px] w-[430px] rounded-full bg-red-500/10 blur-[120px]" />

      {jobs.map((job, index) => (
        <motion.div
          key={job.title}
          initial={{
            opacity: 0,
            scale: 0.9,
            y: 80,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: job.rotate,
            x: job.x,
            y: job.y,
          }}
          transition={{
            duration: 0.8,
            delay: index * 0.2,
          }}
          whileHover={{
            y: job.y - 12,
            rotate: 0,
            scale: 1.03,
          }}
          className="
            absolute
            w-[320px]
            rounded-[28px]
            border
            border-white/10
            bg-[#111111]
            p-6
            shadow-[0_25px_70px_rgba(0,0,0,.45)]
          "
        >
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10">
              <Briefcase
                className="text-red-500"
                size={22}
              />
            </div>

            <ArrowUpRight
              size={20}
              className="text-red-500"
            />
          </div>

          <h3 className="mt-6 text-2xl font-bold text-white">
            {job.title}
          </h3>

          <div className="mt-6 space-y-3 text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin size={16} />

              {job.location}
            </div>

            <div className="flex items-center gap-2">
              <Clock3 size={16} />

              {job.type}
            </div>
          </div>

          <button
            className="
              mt-8
              rounded-full
              border
              border-red-500/20
              bg-red-500/10
              px-5
              py-3
              text-sm
              font-semibold
              text-red-400
            "
          >
            Apply Now
          </button>
        </motion.div>
      ))}
    </div>
  );
}