"use client";

import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  scrolled?: boolean;
};

export default function Logo({ scrolled = false }: LogoProps) {
  return (
    <Link
      href="/"
      className="group flex shrink-0 items-center"
      aria-label="Atria Web Solutions"
    >
      {/* Light Mode Logo */}
      <Image
        src="/icons/atria-logo.webp"
        alt="Atria Web Solutions"
        width={190}
        height={60}
        priority
        className={`block w-auto object-contain transition-all duration-300 group-hover:scale-105 dark:hidden ${
          scrolled ? "h-12" : "h-14"
        }`}
      />

      {/* Dark Mode Logo */}
      <Image
        src="/images/Logo%20Atria%20AI.png"
        alt="Atria Web Solutions"
        width={190}
        height={60}
        priority
        className={`hidden w-auto object-contain transition-all duration-300 group-hover:scale-105 dark:block ${
          scrolled ? "h-12" : "h-14"
        }`}
      />
    </Link>
  );
}