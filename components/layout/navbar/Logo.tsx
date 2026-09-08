"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

type LogoProps = {
  scrolled?: boolean;
};

export default function Logo({ scrolled = false }: LogoProps) {
  const { resolvedTheme } = useTheme();

  const logoSrc =
    resolvedTheme === "dark"
      ? "/images/Logo%20Atria%20AI.png"
      : "/icons/atria-logo.webp";

  return (
    <Link
      href="/"
      className="group flex shrink-0 items-center"
      aria-label="Atria Web Solutions"
    >
      <Image
        src={logoSrc}
        alt="Atria Web Solutions"
        width={190}
        height={60}
        priority
        className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
          scrolled ? "h-12" : "h-14"
        }`}
      />
    </Link>
  );
}