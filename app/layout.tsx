import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import "./globals.css";

import Navbar from "@/components/layout/navbar/Navbar";
import PageWrapper from "@/components/layout/PageWrapper";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { ProjectModalProvider } from "@/components/providers/ProjectModalProvider";

import ProjectModal from "@/components/modals/ProjectModal";

import { siteMetadata } from "@/lib/metadata";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = siteMetadata;

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: "#0A0A0A",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Atria Web Solutions",
  url: "https://atriawebsolutions.com",
  description: "A premium web development and digital product studio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={inter.variable}
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-screen flex-col antialiased">
        <ThemeProvider>
          <ProjectModalProvider>
            <header>
              <Navbar />
            </header>

            {/* Global spacing between navbar and page content */}
            <div
              aria-hidden="true"
              className="h-6 shrink-0"
            />

            <PageWrapper>
              {children}
            </PageWrapper>

            {/* Global Project Modal */}
            <ProjectModal />
          </ProjectModalProvider>
        </ThemeProvider>

        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}