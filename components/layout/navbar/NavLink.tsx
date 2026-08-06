"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  active: boolean;
  children: React.ReactNode;
};

export default function NavLink({
  href,
  active,
  children,
}: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "relative py-2 text-[15px] font-medium transition-colors",
        active
          ? "text-[var(--primary)]"
          : "text-[var(--foreground)] hover:text-[var(--primary)]"
      )}
    >
      {children}

      {active && (
        <motion.span
          layoutId="active-nav"
          className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-[var(--primary)]"
        />
      )}
    </Link>
  );
}