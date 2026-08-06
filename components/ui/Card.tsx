import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type CardProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  interactive?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children">;

export function Card<T extends ElementType = "div">({
  as,
  children,
  className,
  interactive = false,
  ...props
}: CardProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        "rounded-card border border-line bg-white p-6 shadow-card sm:p-7",
        interactive && "transition duration-300 ease-out hover:-translate-y-1 hover:shadow-card-hover",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
