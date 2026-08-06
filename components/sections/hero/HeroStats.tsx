"use client";

import { motion } from "framer-motion";
import { Rocket, Users, Star, Headphones } from "lucide-react";

const stats = [
  {
    icon: Rocket,
    value: "150+",
    label: "Projects Delivered",
  },
  {
    icon: Users,
    value: "100+",
    label: "Happy Clients",
  },
  {
    icon: Star,
    value: "5+",
    label: "Years Experience",
  },
  {
    icon: Headphones,
    value: "24/7",
    label: "Support",
  },
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.7 + index * 0.1,
            }}
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-5
              backdrop-blur-xl
              transition-all
              hover:-translate-y-1
              hover:border-red-500/40
            "
          >
            <Icon className="mb-4 text-red-500" size={24} />

            <h3 className="text-3xl font-bold text-white">
              {item.value}
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              {item.label}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}