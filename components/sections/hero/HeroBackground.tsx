"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import HeroBackgroundDark from "./HeroBackgroundDark";
import HeroBackgroundLight from "./HeroBackgroundLight";

export default function HeroBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (resolvedTheme === "light") {
    return <HeroBackgroundLight />;
  }

  return <HeroBackgroundDark />;
}