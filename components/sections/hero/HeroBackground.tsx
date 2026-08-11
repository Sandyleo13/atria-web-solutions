"use client";

import { useTheme } from "next-themes";

import HeroBackgroundDark from "./HeroBackgroundDark";
import HeroBackgroundLight from "./HeroBackgroundLight";

export default function HeroBackground() {
  const { resolvedTheme } = useTheme();

  if (resolvedTheme === "light") {
    return <HeroBackgroundLight />;
  }

  return <HeroBackgroundDark />;
}