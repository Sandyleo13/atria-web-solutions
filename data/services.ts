import type { LucideIcon } from "lucide-react";
import {
  AtSign,
  BadgeCheck,
  Code2,
  Search,
  Share2,
  Smartphone,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  slug: string;
};

export const services: Service[] = [
  {
    title: "SEO Services",
    description:
      "Search strategies that improve visibility, attract qualified traffic, and compound over time.",
    icon: Search,
    slug: "seo-digital-marketing",
  },

  {
    title: "Social Media Marketing",
    description:
      "Brand-led social campaigns that turn attention into a lasting community.",
    icon: Share2,
    slug: "branding-design",
  },

  {
    title: "Website Designing & Development",
    description:
      "Fast, conversion-focused websites built around your audience and business goals.",
    icon: Code2,
    slug: "web-development",
  },

  {
    title: "Mobile App Development",
    description:
      "Intuitive mobile products that deliver a dependable experience on every device.",
    icon: Smartphone,
    slug: "mobile-app-development",
  },

  {
    title: "Email Marketing",
    description:
      "Thoughtful lifecycle campaigns that nurture customers and create repeat value.",
    icon: AtSign,
    slug: "email-marketing",
  },

  {
    title: "Online Reputation Management",
    description:
      "Practical systems to protect, build, and monitor how your brand is perceived.",
    icon: BadgeCheck,
    slug: "online-reputation-management",
  },
];