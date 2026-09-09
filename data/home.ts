export const metrics = [
  ["400+", "Projects Delivered"],
  ["100+", "Happy Clients"],
  ["5+", "Years Experience"],
  ["24/7", "Support Available"],
] as const;

export const projects = [
  {
    name: "SnapEdit",
    category: "AI Photo Editing Platform",
    description:
      "An AI-powered image editing platform focused on fast background removal, enhancement and creative editing.",
    technologies: ["Next.js", "Node.js", "OpenAI"],
    accent: "from-slate-950 via-slate-800 to-slate-900",
    href: "/portfolio/snapedit",
    featured: true,
  },
  {
    name: "Box of Vacation",
    category: "Travel Booking Platform",
    description:
      "A modern travel booking platform offering seamless vacation planning and package management.",
    technologies: ["Next.js", "MongoDB", "Node.js"],
    accent: "from-sky-500 via-blue-300 to-amber-200",
    href: "/portfolio/box-of-vacation",
    featured: true,
  },
  {
    name: "Travelopod",
    category: "Travel CRM Solution",
    description:
      "A CRM built for travel agencies with booking, customer and workflow management.",
    technologies: ["Laravel", "MySQL", "Bootstrap"],
    accent: "from-slate-950 via-slate-700 to-cyan-950",
    href: "/portfolio/travelopod",
    featured: true,
  },
  {
    name: "ATZ CRM",
    category: "Customer Relationship Platform",
    description:
      "A scalable CRM solution with analytics, lead management and reporting dashboards.",
    technologies: ["Laravel", "Filament", "MySQL"],
    accent: "from-rose-900 via-red-700 to-rose-500",
    href: "/portfolio/atz-crm",
    featured: true,
  },
  {
    name: "Peaceful",
    category: "Mental Wellness Platform",
    description:
      "A wellness platform focused on mindfulness, meditation and mental health support.",
    technologies: ["React", "Firebase", "Tailwind"],
    accent: "from-red-800 via-rose-600 to-red-400",
    href: "/portfolio/peaceful",
    featured: true,
  },
  {
    name: "BuzzDeck",
    category: "Social Media Management Tool",
    description:
      "A social media dashboard for scheduling, analytics and campaign management.",
    technologies: ["Next.js", "Express", "MongoDB"],
    accent: "from-indigo-950 via-blue-800 to-cyan-600",
    href: "/portfolio/buzzdeck",
    featured: true,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Vivek Sharma",
    role: "CEO",
    company: "SnapEdit",
    rating: 5,
    quote:
      "Atria Web Solutions completely transformed our product. Their communication, attention to detail and technical expertise made the entire process effortless.",
  },

  {
    id: 2,
    name: "Neha Patel",
    role: "Founder",
    company: "Box of Vacation",
    rating: 5,
    quote:
      "Working with Atria felt like working with an in-house team. Every milestone was delivered on time and exceeded our expectations.",
  },

  {
    id: 3,
    name: "Rohan Verma",
    role: "Director",
    company: "ATZ CRM",
    rating: 5,
    quote:
      "The CRM they built streamlined our workflow and improved team productivity significantly. Highly recommended.",
  },

  {
    id: 4,
    name: "Arjun Mehta",
    role: "CTO",
    company: "Travelopod",
    rating: 5,
    quote:
      "Professional, responsive and extremely knowledgeable. The final product was faster, cleaner and better than we imagined.",
  },
];

export const posts = [
  {
    category: "Web Development",
    title: "Best Practices for Modern Web Development in 2024",
    readTime: "5 min read",
    accent: "from-slate-900 to-slate-700",
  },
  {
    category: "UI/UX Design",
    title: "How Good UI/UX Can Improve User Retention",
    readTime: "6 min read",
    accent: "from-sky-900 to-cyan-700",
  },
  {
    category: "Digital Marketing",
    title: "Top 10 SEO Strategies to Rank Higher in 2024",
    readTime: "7 min read",
    accent: "from-rose-900 to-rose-600",
  },
  {
    category: "Business",
    title: "Why Your Business Needs a Strong Digital Presence",
    readTime: "6 min read",
    accent: "from-stone-900 to-stone-600",
  },
];
