"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  HeartHandshake,
  Lightbulb,
  Rocket,
  Code2,
  Users,
  TrendingUp,
} from "lucide-react";

import { Container } from "@/components/layout/Container";

const values = [
  {
    icon: HeartHandshake,
    title: "Collaboration",
    description:
      "We believe the best ideas come from teamwork, open communication and mutual respect.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We're always exploring better ways to solve problems using modern technologies and creative thinking.",
  },
  {
    icon: Rocket,
    title: "Growth",
    description:
      "Every project is an opportunity to learn, improve and take on new challenges.",
  },
];

const journey = [
  {
    icon: Users,
    title: "Connect",
    description: "Meet the team",
  },
  {
    icon: Lightbulb,
    title: "Learn",
    description: "Grow your skills",
  },
  {
    icon: Code2,
    title: "Build",
    description: "Work on real projects",
  },
  {
    icon: TrendingUp,
    title: "Grow",
    description: "Take the next step",
  },
];

export default function LifeAtAtria() {
  return (
    <section
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
          right-[-180px]
          top-1/4
          h-[500px]
          w-[500px]
          rounded-full
          bg-red-500/[0.04]
          blur-[150px]
        "
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Eyebrow */}

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
              Life at Atria
            </span>

            {/* Heading */}

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
              A Place Where
              <br />

              <span className="text-red-600 dark:text-red-500">
                Ideas Thrive.
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                mt-8
                text-lg
                leading-8
                text-gray-600
                dark:text-gray-400
              "
            >
              We foster a culture where creativity, ownership and continuous
              learning are encouraged. Whether you're just starting your career
              or bringing years of experience, you'll have the opportunity to
              grow while building products that make a real impact.
            </p>

            {/* Values */}

            <div className="mt-10 space-y-6">
              {values.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-start gap-4"
                  >
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-red-500/10
                      "
                    >
                      <Icon
                        size={22}
                        className="text-red-600 dark:text-red-500"
                      />
                    </div>

                    <div>
                      <h3
                        className="
                          text-xl
                          font-semibold
                          text-gray-900
                          dark:text-white
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          leading-7
                          text-gray-600
                          dark:text-gray-400
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Highlight */}

            <div
              className="
                mt-10
                flex
                items-center
                gap-3
                text-gray-700
                dark:text-gray-300
              "
            >
              <CheckCircle2
                size={20}
                className="text-red-600 dark:text-red-500"
              />

              <span className="text-sm font-medium">
                Flexible, supportive and growth-focused environment.
              </span>
            </div>
          </motion.div>

          {/* RIGHT — CAREER JOURNEY */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex min-h-[560px] items-center justify-center"
          >
            {/* Ambient Glow */}

            <div
              className="
                absolute
                h-[420px]
                w-[420px]
                rounded-full
                bg-red-500/[0.06]
                blur-[120px]
              "
            />

            {/* Main Visual */}

            <div
              className="
                relative
                w-full
                max-w-[520px]
                rounded-[36px]
                border
                border-gray-200
                bg-white
                p-8
                shadow-[0_30px_80px_rgba(15,23,42,.08)]
                dark:border-white/10
                dark:bg-[#111111]
                dark:shadow-none
              "
            >
              {/* Header */}

              <div className="flex items-center justify-between">
                <div>
                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-red-600
                      dark:text-red-500
                    "
                  >
                    Your Journey
                  </p>

                  <h3
                    className="
                      mt-2
                      text-2xl
                      font-bold
                      text-gray-900
                      dark:text-white
                    "
                  >
                    Grow With Atria
                  </h3>
                </div>

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-red-500/10
                  "
                >
                  <TrendingUp
                    size={24}
                    className="text-red-600 dark:text-red-500"
                  />
                </div>
              </div>

              {/* Journey */}

              <div className="relative mt-12">
                {/* Connecting Line */}

                <div
                  className="
                    absolute
                    left-[25px]
                    top-7
                    bottom-7
                    w-px
                    bg-gradient-to-b
                    from-red-500
                    via-red-400
                    to-gray-200
                    dark:to-white/10
                  "
                />

                <div className="space-y-8">
                  {journey.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        initial={{
                          opacity: 0,
                          x: 20,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: index * 0.12,
                          duration: 0.5,
                        }}
                        className="relative flex items-center gap-5"
                      >
                        {/* Step */}

                        <div
                          className="
                            relative
                            z-10
                            flex
                            h-[52px]
                            w-[52px]
                            shrink-0
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-red-500/20
                            bg-white
                            text-red-600
                            shadow-sm
                            dark:bg-[#171717]
                            dark:text-red-500
                          "
                        >
                          <Icon size={22} />
                        </div>

                        {/* Content */}

                        <div
                          className="
                            flex-1
                            rounded-2xl
                            border
                            border-gray-200
                            bg-gray-50
                            px-5
                            py-4
                            dark:border-white/10
                            dark:bg-white/[0.03]
                          "
                        >
                          <div className="flex items-center justify-between">
                            <h4
                              className="
                                font-semibold
                                text-gray-900
                                dark:text-white
                              "
                            >
                              {item.title}
                            </h4>

                            <span
                              className="
                                text-xs
                                font-medium
                                text-red-600
                                dark:text-red-400
                              "
                            >
                              0{index + 1}
                            </span>
                          </div>

                          <p
                            className="
                              mt-1
                              text-sm
                              text-gray-500
                              dark:text-gray-400
                            "
                          >
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Badge */}

              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -bottom-5
                  -right-5
                  rounded-2xl
                  border
                  border-red-500/20
                  bg-white
                  px-5
                  py-4
                  shadow-[0_15px_40px_rgba(15,23,42,.12)]
                  dark:bg-[#171717]
                  dark:shadow-none
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-xl
                      bg-red-500/10
                    "
                  >
                    <Rocket
                      size={18}
                      className="text-red-600 dark:text-red-500"
                    />
                  </div>

                  <div>
                    <p
                      className="
                        text-xs
                        text-gray-500
                        dark:text-gray-400
                      "
                    >
                      Keep moving
                    </p>

                    <p
                      className="
                        text-sm
                        font-semibold
                        text-gray-900
                        dark:text-white
                      "
                    >
                      Keep growing.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}