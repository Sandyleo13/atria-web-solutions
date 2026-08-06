import type { Metadata } from "next";

import ContactHero from "@/components/sections/contact/hero/ContactHero";
import ContactOptions from "@/components/sections/contact/ContactOptions";
import ContactForm from "@/components/sections/contact/ContactForm";
import FAQ from "@/components/sections/contact/FAQ";
import ContactCTA from "@/components/sections/contact/ContactCTA";

import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Atria Web Solutions to discuss your next website, web application or digital product.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <ContactOptions />

      <ContactForm />

      <FAQ />

      <ContactCTA />

      <Footer />
    </>
  );
}