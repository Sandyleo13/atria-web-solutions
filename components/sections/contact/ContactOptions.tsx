"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { Container } from "@/components/layout/Container";

const options = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@atriawebsolutions.com",
    description: "We'll reply within 24 hours.",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 98765 43210",
    description: "Monday – Saturday, 10:00 AM – 7:00 PM",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Mumbai, Maharashtra",
    description: "Meet us by appointment.",
  },
];

export default function ContactOptions() {
  return (
    <section className="bg-white py-24">
      <Container>
        {/* Section Intro */}

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
              text-red-600
            "
          >
            Get In Touch
          </span>

          <h2
            className="
              mt-7
              text-4xl
              font-bold
              tracking-tight
              text-gray-900

              lg:text-5xl
            "
          >
            Let's Start a Conversation
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-lg
              leading-8
              text-gray-600
            "
          >
            Have a project in mind or simply want to learn more about
            what we do? Choose the easiest way to reach our team.
          </p>
        </div>

        {/* Contact Cards */}

        <div className="mt-16 grid gap-7 md:grid-cols-3">
          {options.map((option, index) => {
            const Icon = option.icon;

            return (
              <motion.div
                key={option.title}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  rounded-[28px]

                  border
                  border-gray-200

                  bg-white

                  p-8

                  shadow-[0_12px_40px_rgba(15,23,42,.05)]

                  transition-all
                  duration-300

                  hover:border-red-500/25
                  hover:shadow-[0_20px_55px_rgba(239,68,68,.10)]
                "
              >
                {/* Icon */}

                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center

                    rounded-2xl

                    border
                    border-red-500/10

                    bg-red-500/10

                    transition-transform
                    duration-300

                    group-hover:scale-105
                  "
                >
                  <Icon
                    size={28}
                    className="text-red-500"
                  />
                </div>

                {/* Title */}

                <h3
                  className="
                    mt-6
                    text-2xl
                    font-bold
                    text-gray-900
                  "
                >
                  {option.title}
                </h3>

                {/* Value */}

                <p
                  className="
                    mt-4
                    break-words
                    text-lg
                    font-medium
                    text-gray-800
                  "
                >
                  {option.value}
                </p>

                {/* Description */}

                <p
                  className="
                    mt-4
                    leading-7
                    text-gray-500
                  "
                >
                  {option.description}
                </p>

                {/* Bottom Accent */}

                <div
                  className="
                    mt-7
                    h-px
                    w-12
                    bg-red-500/30

                    transition-all
                    duration-300

                    group-hover:w-20
                    group-hover:bg-red-500
                  "
                />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}