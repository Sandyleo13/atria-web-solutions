"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

type LogoProps = {
  scrolled?: boolean;
};

export default function Logo({ scrolled = false }: LogoProps) {
  const { resolvedTheme } = useTheme();

  return (
    <Link
      href="/"
      className="group flex items-center"
      aria-label="Atria Web Solutions"
    >
      <Image
        src={
          resolvedTheme === "dark"
            ? "/icons/atria-logo-light.webp"
            : "/icons/atria-logo.webp"
        }
        alt="Atria Web Solutions"
        width={190}
        height={60}
        priority
        className={`w-auto transition-all duration-300 group-hover:scale-105 ${
          scrolled ? "h-12" : "h-14"
        }`}
      />
    </Link>
  );
}