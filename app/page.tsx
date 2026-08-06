import { Footer } from "@/components/layout/Footer";

import HeroSection from "@/components/sections/hero/HeroSection";
import TestimonialsSection from "@/components/sections/testimonials/TestimonialsSection";
import CallToAction from "@/components/sections/cta/CallToAction";

import { ServicesSection } from "@/components/sections/ServicesSection";
import { TrustedBrands } from "@/components/sections/TrustedBrands";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <HeroSection />

      <TrustedBrands />

      <ServicesSection />

      <WhyChooseUs />

      <TestimonialsSection />

      <CallToAction />

      <Footer />
    </>
  );
}