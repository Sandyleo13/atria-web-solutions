import type { Metadata } from "next";
import { BlogArticleLayout } from "../_components/BlogArticleLayout";

export const metadata: Metadata = {
  title: "Top Website Mistakes Businesses Make",
  description: "Avoid common website mistakes that reduce clarity, trust, mobile usability, and conversion opportunities.",
};

export default function WebsiteMistakesPage() {
  return <BlogArticleLayout article={{
    category: "Business", date: "July 27, 2026", readTime: "6 min read",
    title: "Top Website Mistakes Businesses Make",
    description: "A website does not need more features to perform better. It needs clear information, a frictionless journey, and a dependable experience on every screen.",
    image: "/images/blog/website-mistakes.png",
    sections: [
      { heading: "Making visitors work to understand the offer", paragraphs: ["A visitor should be able to tell what a business does, who it helps, and what to do next within the first part of a page. Vague headlines and generic claims force people to search for the value instead of seeing it immediately.", "Lead with a clear promise, support it with proof, and link each service to the next useful action."] },
      { heading: "Treating mobile as an afterthought", paragraphs: ["Many first visits happen on a phone. Dense menus, tiny touch targets, long unbroken text, and slow media create unnecessary friction for those visitors.", "Mobile-friendly design means more than shrinking the desktop layout. It means prioritizing the content and actions that matter in a smaller space."] },
      { heading: "Leaving the next step unclear", paragraphs: ["A strong call to action is specific and timely. It connects naturally to the page's content and tells visitors what happens next, whether that is booking a call, seeing work, or requesting a quote.", "Review the site as a first-time visitor would. If the path to action is unclear, simplify it before adding more content."] },
    ],
  }} />;
}
