import type { Metadata } from "next";
import { BlogArticleLayout } from "../_components/BlogArticleLayout";

export const metadata: Metadata = {
  title: "SEO Checklist for Small Businesses",
  description: "A practical small-business SEO checklist covering site structure, local visibility, useful content, and measurement.",
};

export default function SeoChecklistPage() {
  return <BlogArticleLayout article={{
    category: "SEO", date: "August 2, 2026", readTime: "6 min read",
    title: "SEO Checklist for Small Businesses",
    description: "SEO works best as a clear, ongoing process: make the business easy to understand, make pages genuinely useful, and measure what customers do next.",
    image: "/images/blog/seo-checklist.png",
    sections: [
      { heading: "Start with an understandable website", paragraphs: ["Each important service should have a focused page with a clear title, descriptive heading, helpful copy, and a logical link from the main navigation. Search engines and visitors both benefit from a site that answers one question at a time.", "Technical basics matter too: mobile-friendly layouts, fast loading media, secure pages, and descriptive image alt text create a stronger foundation."] },
      { heading: "Make local signals accurate", paragraphs: ["Businesses serving a defined area should keep their name, contact details, opening hours, and location information consistent wherever customers find them. Local service pages should explain the areas served and the real problems the business solves.", "Accuracy is more useful than keyword repetition. It gives potential customers confidence that they have found the right provider."] },
      { heading: "Publish content that helps decisions", paragraphs: ["Useful articles, FAQs, comparisons, and project examples can answer questions before a prospect contacts you. This supports search visibility while also helping sales conversations start at a higher level of understanding.", "Review performance regularly, then improve the pages that attract attention but do not yet create enquiries."] },
    ],
  }} />;
}
