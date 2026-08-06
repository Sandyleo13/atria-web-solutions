import type { Metadata } from "next";

const siteUrl = new URL("https://atriawebsolutions.com");
const title = "Atria Web Solutions";
const description =
  "Atria Web Solutions builds high-performing websites and digital products for ambitious businesses.";

export const siteMetadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: title,
  title: {
    default: `${title} | Digital products built to perform`,
    template: `%s | ${title}`,
  },
  description,
  keywords: ["web development", "web design", "Next.js", "digital products", "Atria Web Solutions"],
  authors: [{ name: title }],
  creator: title,
  publisher: title,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: title,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};
