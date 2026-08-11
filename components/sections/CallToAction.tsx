import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export function CallToAction() {
  return (
    <section id="contact" className="scroll-mt-20 bg-white pb-0">
      <Container>
        <div
          className="
            flex
            flex-col
            items-start
            justify-between
            gap-6

            rounded-t-2xl
            bg-brand
            px-7
            py-10

            text-white

            sm:flex-row
            sm:items-center
            sm:px-10
          "
        >
          <div>
            <h2 className="text-3xl font-bold tracking-[-0.045em]">
              Ready to start your next project?
            </h2>

            <p className="mt-2 text-white/85">
              Let&apos;s build something great together.
            </p>
          </div>

          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@atriawebsolutions.in&su=Project%20Inquiry%20-%20Atria%20Web%20Solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="
    inline-flex
    min-h-12
    items-center
    gap-2
    rounded-lg
    bg-white
    px-5
    text-sm
    font-bold
    text-brand
    shadow-sm
    transition-transform
    hover:scale-[1.02]
  "
          >
            Schedule a Free Call
            <ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
