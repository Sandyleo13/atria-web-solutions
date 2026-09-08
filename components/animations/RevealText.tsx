"use client";

import { motion, useReducedMotion } from "framer-motion";
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
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="overflow-hidden">
      <motion.div
        initial={
          shouldReduceMotion
            ? { y: "0%", opacity: 1 }
            : { y: "110%", opacity: 0 }
        }
        whileInView={{
          y: "0%",
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.55,
          delay: shouldReduceMotion ? 0 : delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={cn(className)}
      >
        {children}
      </motion.div>
    </div>
  );
}