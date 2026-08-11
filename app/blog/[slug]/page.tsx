import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { articles } from "@/components/sections/blog/blog-data";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  const article = articles.find(
    (article) => article.slug === slug
  );

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: `${article.title} - Atria Web Solutions`,
  };
}

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;

  const article = articles.find(
    (article) => article.slug === slug
  );

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--background)] py-32">
      <div className="mx-auto max-w-4xl px-6">

        {/* Category */}

        <span
          className="
            inline-flex
            rounded-full
            border
            border-red-500/20
            bg-red-500/10
            px-4
            py-2
            text-xs
            font-semibold
            uppercase
            tracking-[0.25em]
            text-red-600
            dark:text-red-500
          "
        >
          {article.category}
        </span>

        {/* Title */}

        <h1
          className="
            mt-8
            text-4xl
            font-bold
            leading-tight
            text-[var(--foreground)]
            md:text-6xl
          "
        >
          {article.title}
        </h1>

        {/* Meta */}

        <div
          className="
            mt-6
            flex
            items-center
            gap-6
            text-sm
            text-[var(--muted)]
          "
        >
          <span>August 2026</span>
          <span>{article.readTime}</span>
        </div>

        {/* Image */}

        <div className="mt-12 overflow-hidden rounded-[32px]">
          <img
            src={article.image}
            alt={article.title}
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Content */}

        <article
          className="
            mt-12
            text-lg
            leading-8
            text-[var(--muted)]
          "
        >
          <p>
            {article.title} is an important topic for modern
            businesses looking to improve their digital presence.
          </p>

          <p className="mt-6">
            In this article, we explore practical strategies,
            modern technologies and approaches that businesses
            can use to create better digital experiences.
          </p>

          <p className="mt-6">
            At Atria Web Solutions, we focus on building scalable,
            high-performance digital products that combine
            excellent design with reliable technology.
          </p>
        </article>

      </div>
    </main>
  );
}