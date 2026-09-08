import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { CallToAction } from "@/components/sections/CallToAction";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Atria Web Solutions' digital marketing, web, and mobile development services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={
          <>
            The expertise to make your{" "}
            <span className="text-brand">next move matter.</span>
          </>
        }
        description="From discovery and brand presence to product delivery and ongoing growth, our services are built to work together."
      />

      <section
        className="
          bg-white
          py-24
          transition-colors
          duration-300

          dark:bg-[#050505]

          sm:py-28
        "
      >
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  id={service.slug}
                  key={service.slug}
                  className="
                    scroll-mt-28
                    rounded-2xl
                    border
                    border-gray-200
                    bg-white
                    p-7
                    text-gray-900
                    shadow-card
                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:shadow-card-hover

                    dark:border-white/10
                    dark:bg-[#111111]
                    dark:text-white
                    dark:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                    dark:hover:border-red-500/20
                    dark:hover:shadow-[0_25px_70px_rgba(239,68,68,0.10)]
                  "
                >
                  {/* Icon */}
                  <span
                    className="
                      grid
                      size-12
                      place-items-center
                      rounded-xl
                      bg-brand-soft
                      text-brand

                      dark:bg-red-500/10
                      dark:text-red-500
                    "
                  >
                    <Icon size={23} />
                  </span>

                  {/* Title */}
                  <h2
                    className="
                      mt-6
                      text-xl
                      font-bold
                      tracking-tight
                      text-gray-900

                      dark:text-white
                    "
                  >
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p
                    className="
                      mt-3
                      leading-7
                      text-gray-600

                      dark:text-gray-400
                    "
                  >
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <ul className="mt-6 space-y-2">
                    {[
                      "Strategy tailored to your goals",
                      "Clear reporting and collaboration",
                      "Built for sustainable growth",
                    ].map((item) => (
                      <li
                        className="
                          flex
                          gap-2
                          text-sm
                          text-gray-600

                          dark:text-gray-400
                        "
                        key={item}
                      >
                        <CheckCircle2
                          size={16}
                          className="
                            mt-0.5
                            shrink-0
                            text-brand

                            dark:text-red-500
                          "
                        />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="
                      mt-7
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-bold
                      text-brand
                      transition-colors
                      duration-300

                      hover:text-red-600

                      dark:text-red-500
                      dark:hover:text-red-400
                    "
                  >
                    Talk to our team
                    <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <CallToAction />

      <Footer />
    </>
  );
}