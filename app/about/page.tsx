import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";

import AboutHero from "@/components/sections/about/hero/AboutHero";
import CompanyStory from "@/components/sections/about/CompanyStory";
import MissionVision from "@/components/sections/about/MissionVision";
import WhyChooseAtria from "@/components/sections/about/WhyChooseAtria";
import TeamSection from "@/components/sections/about/TeamSection";
import AboutCTA from "@/components/sections/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Atria Web Solutions.",
};

export default function AboutPage() {
  return (
   <>
  <AboutHero />
  <CompanyStory />
  <MissionVision />
  <WhyChooseAtria />
  <TeamSection />
  <AboutCTA />
  <Footer />
</>
  );
}
