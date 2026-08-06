import type { Metadata } from "next";

import BlogHero from "@/components/sections/blog/hero/BlogHero";
import FeaturedArticle from "@/components/sections/blog/FeaturedArticle";
import BlogGrid from "@/components/sections/blog/BlogGrid";
import Categories from "@/components/sections/blog/Categories";
import NewsletterCTA from "@/components/sections/blog/NewsletterCTA";

import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Insights",
  description: "Articles, guides and insights from Atria Web Solutions.",
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />

      <FeaturedArticle />

      <BlogGrid />

      <Categories />

      <NewsletterCTA />

      <Footer />
    </>
  );
}