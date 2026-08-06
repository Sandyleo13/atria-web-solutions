import { ArrowRight, Code2, Headphones, Sparkles, UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/common/FadeIn";
import { metrics } from "@/data/home";

const metricIcons = [Code2, UsersRound, Sparkles, Headphones];

export function HeroSection() {
  return (
    <section className="overflow-hidden bg-white pb-16 pt-16 sm:pb-20 sm:pt-24 lg:pb-24 lg:pt-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-4">
          <FadeIn>
            <p className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1.5 text-[11px] font-bold text-brand-dark">
              <Sparkles size={12} aria-hidden="true" /> We build digital experiences that drive growth
            </p>
            <h1 className="mt-5 max-w-xl text-4xl font-extrabold leading-[1.08] tracking-[-0.055em] text-ink sm:text-5xl lg:text-6xl">
              We Build Modern Websites &amp; Digital Solutions That <span className="text-brand">Grow Your Business</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">
              We design and develop high-performance websites, web apps, and digital products that help businesses grow faster and stand out from the competition.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#contact" className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-brand px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark">
                Let&apos;s Start a Project <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="#portfolio" className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-brand px-5 text-sm font-semibold text-brand transition-colors hover:bg-brand-soft">
                View Our Work <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.08} className="group relative mx-auto w-full max-w-2xl lg:max-w-none">
            <div className="absolute right-[6%] top-[4%] size-72 rounded-full bg-brand-soft blur-2xl sm:size-96" />
            <Image src="/images/hero-laptop.png" alt="Laptop showing an analytics dashboard" width={1536} height={1024} priority className="relative h-auto w-full transition-transform duration-700 ease-out group-hover:-translate-y-1 group-hover:scale-[1.015]" />
            <div className="absolute right-[1%] top-[24%] rounded-2xl border border-white/80 bg-white p-4 shadow-card transition-transform duration-500 group-hover:-translate-y-2 sm:right-[4%] sm:p-5">
              <p className="text-[10px] font-medium text-muted">Growth</p><p className="mt-1 text-2xl font-bold tracking-tight">+2.45x</p>
              <div className="mt-3 h-7 w-24 rounded bg-[linear-gradient(135deg,transparent_45%,#e53935_46%,#e53935_50%,transparent_51%)] opacity-80" />
            </div>
          </FadeIn>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-7 border-t border-line pt-9 sm:mt-16 sm:grid-cols-4">
          {metrics.map(([value, label], index) => { const Icon = metricIcons[index]; return <div key={label} className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-xl bg-brand-soft text-brand"><Icon size={18} /></span><div><p className="font-bold tracking-tight text-ink">{value}</p><p className="text-xs text-muted">{label}</p></div></div>; })}
        </div>
      </Container>
    </section>
  );
}
