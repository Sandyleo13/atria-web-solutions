import type { ReactNode } from "react";

import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";

export function PageHero({ eyebrow, title, description, children }: { eyebrow: string; title: ReactNode; description: string; children?: ReactNode }) {
  return <section className="border-b border-line bg-surface py-20 sm:py-24"><Container><div className="mx-auto max-w-3xl text-center"><Badge>{eyebrow}</Badge><h1 className="mt-5 text-4xl font-extrabold tracking-[-0.055em] text-ink sm:text-5xl lg:text-6xl">{title}</h1><p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">{description}</p>{children}</div></Container></section>;
}
