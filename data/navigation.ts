export type ServiceNavItem = {
  title: string;
  href: string;
};

export type NavItem = {
  title: string;
  href: string;
  children?: ServiceNavItem[];
};

export const SERVICE_NAVIGATION: ServiceNavItem[] = [
  {
    title: "Web Development",
    href: "/services/web-development",
  },
  {
    title: "E-Commerce",
    href: "/services/e-commerce",
  },
  {
    title: "SEO Services",
    href: "/services/seo",
  },
  {
    title: "Mobile App Development",
    href: "/services/mobile-app-development",
  },
  {
    title: "Email Marketing",
    href: "/services/email-marketing",
  },
  {
    title: "Online Reputation Management",
    href: "/services/online-reputation-management",
  },
];

export const NAVIGATION: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },

  {
    title: "About",
    href: "/about",
  },

  {
    title: "Services",
    href: "/services",
    children: SERVICE_NAVIGATION,
  },

  {
    title: "Portfolio",
    href: "/portfolio",
  },

  {
    title: "Blog",
    href: "/blog",
  },

  {
    title: "Careers",
    href: "/careers",
  },

  {
    title: "Contact",
    href: "/contact",
  },
];