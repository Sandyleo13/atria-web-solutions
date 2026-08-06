import type { Metadata } from "next";

import PortfolioHero from "@/components/sections/portfolio/hero/PortfolioHero";
import FeaturedProjects from "@/components/sections/portfolio/FeaturedProjects";
import PortfolioGrid from "@/components/sections/portfolio/PortfolioGrid";
import TechStack from "@/components/sections/portfolio/TechStack";
import PortfolioCTA from "@/components/sections/portfolio/PortfolioCTA";

import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore our latest work and digital projects.",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />

      <FeaturedProjects />

      <PortfolioGrid />

      <TechStack />

      <PortfolioCTA />

      <Footer />
    </>
  );
}