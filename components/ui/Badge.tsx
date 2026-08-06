import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

type BadgeProps = ComponentPropsWithoutRef<"span"> & {
  children: ReactNode;
  tone?: "brand" | "neutral";
};

const toneClasses = {
  brand: "bg-brand-soft text-brand-dark",
  neutral: "bg-slate-100 text-slate-700",
};

export function Badge({ children, className, tone = "brand", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold tracking-[0.08em] uppercase",
        toneClasses[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
