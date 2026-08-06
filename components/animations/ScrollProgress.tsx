"use client";

import { motion, MotionValue, useSpring } from "framer-motion";

interface ScrollProgressProps {
  progress: MotionValue<number>;
}

export default function ScrollProgress({
  progress,
}: ScrollProgressProps) {
  const scaleY = useSpring(progress, {
    stiffness: 120,
    damping: 25,
    mass: 0.3,
  });

  return (
    <div
      className="
        absolute
        left-8
        top-0
        h-full
        w-px
        bg-white/10
      "
    >
      <motion.div
        style={{
          scaleY,
          transformOrigin: "top",
        }}
        className="
          h-full
          w-full
          bg-gradient-to-b
          from-red-500
          via-red-400
          to-red-700
        "
      />
    </div>
  );
}