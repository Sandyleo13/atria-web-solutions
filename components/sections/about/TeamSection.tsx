"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";

import TeamCard from "./TeamCard";
import { teamMembers } from "./team-data";

export default function TeamSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-28
        bg-[var(--background)]
        transition-colors
        duration-500
      "
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-24

            h-80
            w-[720px]

            -translate-x-1/2

            rounded-full

            bg-red-500/8
            blur-[180px]

            dark:bg-red-600/10
          "
        />
      </div>

      <Container className="relative z-10">
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

              text-red-600
              dark:text-red-500
            "
          >
            Our Team
          </span>

          <h2
            className="
              mt-8

              text-5xl
              font-bold

              text-[var(--foreground)]

              lg:text-6xl
            "
          >
            Meet the People
            <br />
            Behind Atria
          </h2>

          <p
            className="
              mx-auto
              mt-8

              max-w-2xl

              text-lg
              leading-8

              text-[var(--muted)]
            "
          >
            Behind every successful project is a passionate team of
            developers, designers and strategists committed to
            delivering exceptional digital experiences.
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

        {/* Team Grid */}

        <div
          className="
            mx-auto
            mt-20

            grid

            max-w-6xl

            grid-cols-1
            gap-8

            sm:grid-cols-2

            xl:grid-cols-4

            items-stretch
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
              className="h-full"
            >
              <TeamCard
                name={member.name}
                role={member.role}
                linkedin={member.linkedin}
                email={member.email}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}