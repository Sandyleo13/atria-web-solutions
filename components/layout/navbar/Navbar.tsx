"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="
        fixed
        inset-x-0
        top-0
        z-50
        px-4
        pt-4
        sm:px-6
        lg:px-8
        xl:px-10
        2xl:px-12
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1700px]
        "
      >
        <header
          className={cn(
            "navbar-header-reveal",
            "flex items-center justify-between",
            "rounded-[30px]",
            "border border-[var(--border)]",
            "bg-[var(--navbar)]",
            "backdrop-blur-[30px]",
            "transition-[height,box-shadow] duration-300 ease-out",
            scrolled
              ? "h-[76px] shadow-[var(--shadow-lg)]"
              : "h-[92px] shadow-[var(--shadow-md)]",
          )}
        >
          <div
            className="
              flex
              h-full
              w-full
              items-center
              justify-between
              px-6
              lg:px-8
              xl:px-10
            "
          >
            {/* Logo */}
            <Logo scrolled={scrolled} />

            {/* Desktop Navigation + Theme + Phone + CTA */}
            <DesktopNav />

            {/* Mobile Navigation */}
            <MobileNav />
          </div>
        </header>
      </div>
    </div>
  );
}