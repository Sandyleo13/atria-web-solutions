"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function RevealText({
  children,
  className,
  delay = 0,
}: RevealTextProps) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{
          y: "110%",
          opacity: 0,
        }}
        whileInView={{
          y: "0%",
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.6,
        }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={cn(className)}
      >
        {children}
      </motion.div>
    </div>
  );
}