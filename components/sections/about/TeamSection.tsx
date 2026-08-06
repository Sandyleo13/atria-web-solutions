"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import FadeSection from "@/components/animations/FadeSection";
import RevealText from "@/components/animations/RevealText";

import TeamCard from "./TeamCard";
import { teamMembers } from "./team-data";

export default function TeamSection() {
  return (
    <section className="relative overflow-hidden bg-[#080808] py-28">
      <Container>
        {/* Section Header */}

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
      text-red-500
    "
          >
            Our Team
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white lg:text-6xl">
            Meet the People
            <br />
            Behind Atria
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Behind every successful project is a passionate team of developers,
            designers and strategists committed to delivering exceptional
            digital experiences.
          </p>

          <div className="mx-auto mt-10 h-px w-28 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
        </div>

        {/* Team Grid */}

        <div
          className="
            mt-20
            grid
            gap-8

            grid-cols-1

            sm:grid-cols-2

            lg:grid-cols-3

            xl:grid-cols-5
          "
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{
                opacity: 0,
                y: 40,
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
                delay: index * 0.08,
              }}
            >
              <TeamCard
                name={member.name}
                role={member.role}
                image={member.image}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
