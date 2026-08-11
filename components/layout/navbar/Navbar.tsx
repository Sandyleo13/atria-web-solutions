"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
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
        <motion.header
          initial={{
            opacity: 0,
            y: -25,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            height: scrolled ? 76 : 92,
          }}
          transition={{
            duration: 0.45,
            ease: "easeOut",
          }}
          className={cn(
            "flex items-center justify-between",

            "rounded-[30px]",

            "border border-[var(--border)]",

            "bg-[var(--navbar)]",

            "backdrop-blur-[30px]",

            scrolled
              ? "shadow-[var(--shadow-lg)]"
              : "shadow-[var(--shadow-md)]",

            "transition-all duration-300",
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
            <Logo scrolled={scrolled} />

            <DesktopNav />

            <MobileNav />
          </div>
        </motion.header>
      </div>
    </div>
  );
}
