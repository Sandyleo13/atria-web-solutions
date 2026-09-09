import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";

import { Footer } from "@/components/layout/Footer";

export type BlogArticle = {
  category: string;
  date: string;
  description: string;
  image: string;
  readTime: string;
  sections: Array<{ heading: string; paragraphs: string[] }>;
  title: string;
};

export function BlogArticleLayout({ article }: { article: BlogArticle }) {
  return (
    <>
      <main className="bg-[var(--background)] pt-32 pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--muted)] transition-colors hover:text-red-600"
          >
            <ArrowLeft size={16} /> Back to insights
          </Link>

          <span className="mt-10 inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-red-600 dark:text-red-500">
            {article.category}
          </span>

          <h1 className="mt-7 text-4xl font-bold leading-tight text-[var(--foreground)] md:text-6xl">
            {article.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            {article.description}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-5 text-sm text-[var(--muted)]">
            <span className="inline-flex items-center gap-2"><CalendarDays size={16} />{article.date}</span>
            <span className="inline-flex items-center gap-2"><Clock3 size={16} />{article.readTime}</span>
          </div>

          <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-[32px] border border-[var(--border)] shadow-[var(--shadow-lg)]">
            <Image src={article.image} alt="" fill priority sizes="(max-width: 896px) 100vw, 896px" className="object-cover" />
          </div>

          <article className="mt-14 text-lg leading-8 text-[var(--muted)]">
            {article.sections.map((section) => (
              <section key={section.heading} className="mb-12">
                <h2 className="mb-5 text-2xl font-bold text-[var(--foreground)] md:text-3xl">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-5 first:mt-0">{paragraph}</p>)}
              </section>
            ))}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
