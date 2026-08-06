"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
} from "lucide-react";

const cards = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@atriawebsolutions.com",
    subtitle: "Reply within 24 hours",
    rotate: -8,
    x: -40,
    y: 30,
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 98765 43210",
    subtitle: "Mon - Sat | 10 AM - 7 PM",
    rotate: 6,
    x: 60,
    y: -10,
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Mumbai, India",
    subtitle: "Remote & On-site Meetings",
    rotate: -2,
    x: 0,
    y: 0,
  },
];

export default function HeroVisual() {
  return (
    <div className="relative flex h-[650px] items-center justify-center">
      {/* Glow */}

      <div className="absolute h-[420px] w-[420px] rounded-full bg-red-500/10 blur-[130px]" />

      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: card.y,
              x: card.x,
              rotate: card.rotate,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            whileHover={{
              rotate: 0,
              y: card.y - 12,
              scale: 1.03,
            }}
            className="
              absolute
              w-[320px]
              rounded-[30px]
              border
              border-white/10
              bg-[#111111]
              p-7
              shadow-[0_25px_70px_rgba(0,0,0,.45)]
            "
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10">
              <Icon
                size={26}
                className="text-red-500"
              />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              {card.title}
            </h3>

            <p className="mt-4 text-lg text-white">
              {card.value}
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-gray-400">
              <Clock3 size={16} />

              {card.subtitle}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}