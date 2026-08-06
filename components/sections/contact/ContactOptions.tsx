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
    <section className="bg-[#080808] py-24">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          {options.map((option, index) => {
            const Icon = option.icon;

            return (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="
                  rounded-[30px]
                  border
                  border-white/10
                  bg-[#111111]
                  p-8
                  transition-all
                  duration-300
                  hover:border-red-500/30
                "
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10">
                  <Icon
                    size={28}
                    className="text-red-500"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {option.title}
                </h3>

                <p className="mt-4 text-lg text-white">
                  {option.value}
                </p>

                <p className="mt-4 leading-7 text-gray-400">
                  {option.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}