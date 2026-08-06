"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Rocket,
  Users,
  LifeBuoy,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";

const reasons = [
  {
    title: "Complete Transparency",
    icon: ShieldCheck,
    description:
      "Clear communication, regular updates and honest project timelines.",
  },
  {
    title: "Scalable Solutions",
    icon: Rocket,
    description:
      "Products built with modern technologies that grow alongside your business.",
  },
  {
    title: "Client Partnership",
    icon: Users,
    description:
      "We don't just deliver projects—we build long-term relationships with our clients.",
  },
  {
    title: "Reliable Support",
    icon: LifeBuoy,
    description:
      "From launch to future improvements, we're here whenever you need us.",
  },
];

export default function WhyChooseAtria() {
  return (
    <section className="bg-[#050505] py-28">
      <Container>

        <SectionHeader
          eyebrow="Why Choose Us"
          title="More Than a Development Partner"
          description="We combine strategy, creativity and engineering to deliver digital solutions that create measurable business value."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-red-500/30
                  hover:bg-red-500/5
                "
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-700">
                  <Icon className="text-white" size={26} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {reason.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}

        </div>
      </Container>
    </section>
  );
}