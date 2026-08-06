import type { Metadata } from "next";

import CareersHero from "@/components/sections/careers/hero/CareersHero";
import WhyJoin from "@/components/sections/careers/WhyJoin";
import LifeAtAtria from "@/components/sections/careers/LifeAtAtria";
import OpenPositions from "@/components/sections/careers/OpenPositions";
import HiringProcess from "@/components/sections/careers/HiringProcess";
import CareersCTA from "@/components/sections/careers/CareersCTA";

import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the team at Atria Web Solutions.",
};

export default function CareersPage() {
  return (
    <>
      <CareersHero />

      <WhyJoin />

      <LifeAtAtria />

      <OpenPositions />

      <HiringProcess />

      <CareersCTA />

      <Footer />
    </>
  );
}