"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  HeartHandshake,
  Lightbulb,
  Rocket,
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

export default function LifeAtAtria() {
  return (
    <section className="bg-[#050505] py-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
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
              Life at Atria
            </span>

            <h2 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-6xl">
              A Place Where
              <br />
              Ideas Thrive.
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-400">
              We foster a culture where creativity, ownership and continuous
              learning are encouraged. Whether you're just starting your career
              or bringing years of experience, you'll have the opportunity to
              grow while building products that make a real impact.
            </p>

            <div className="mt-10 space-y-6">
              {values.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10">
                      <Icon
                        size={22}
                        className="text-red-500"
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 leading-7 text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex items-center gap-3 text-red-400">
              <CheckCircle2 size={20} />

              <span>
                Flexible, supportive and growth-focused environment.
              </span>
            </div>
          </motion.div>

          {/* Right Placeholder */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              flex
              min-h-[520px]
              items-center
              justify-center
              rounded-[36px]
              border
              border-white/10
              bg-gradient-to-br
              from-red-600
              via-red-500
              to-[#111111]
              shadow-[0_30px_80px_rgba(0,0,0,.35)]
            "
          >
            <div
              className="
                rounded-3xl
                border
                border-white/20
                bg-black/20
                px-12
                py-16
                backdrop-blur-md
                text-center
              "
            >
              <h3 className="text-4xl font-bold text-white">
                Team Culture
              </h3>

              <p className="mt-4 text-lg text-white/80">
                Image Placeholder
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}