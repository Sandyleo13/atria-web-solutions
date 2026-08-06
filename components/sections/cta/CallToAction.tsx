"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";

import CTABackground from "./CTABackground";
import CTAButtons from "./CTAButtons";
import CTAFeatures from "./CTAFeatures";

export default function CallToAction() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] py-28"
    >
      <CTABackground />

      <Container className="relative z-10">

        <div
          className="
            rounded-[36px]

            border
            border-white/10

            bg-white/[0.03]

            p-10

            backdrop-blur-2xl

            shadow-[0_0_80px_rgba(0,0,0,.35)]

            lg:p-16
          "
        >

          <SectionHeader
            eyebrow="Let's Build Together"
            title="Ready To Turn Your Ideas Into Reality?"
            description="Whether you're launching a startup, scaling your business or modernizing your digital presence, we're here to help you build fast, scalable and beautiful digital products."
            align="left"
          />

          <CTAButtons />

          <CTAFeatures />

        </div>

      </Container>
    </section>
  );
}