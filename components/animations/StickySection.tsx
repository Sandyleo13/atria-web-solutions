"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StickySectionProps {
  children: ReactNode;
  className?: string;
}

export default function StickySection({
  children,
  className,
}: StickySectionProps) {
  return (
    <section
      className={cn(
        "relative min-h-[250vh]",
        className
      )}
    >
      <div
        className="
          sticky
          top-0

          flex
          min-h-screen

          items-center
        "
      >
        {children}
      </div>
    </section>
  );
}