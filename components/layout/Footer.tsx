import Image from "next/image";
import Link from "next/link";
import { AtSign, Globe2, MapPin, Phone } from "lucide-react";

import { Container } from "./Container";

const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],

  services: [
    {
      label: "Web Development",
      href: "/services/web-development",
    },
    {
      label: "E-Commerce Solutions",
      href: "/services/ecommerce",
    },
    {
      label: "SEO & Digital Marketing",
      href: "/services/seo-digital-marketing",
    },
    {
      label: "Mobile App Development",
      href: "/services/mobile-app-development",
    },
    {
      label: "Email Marketing",
      href: "/services/email-marketing",
    },
    {
      label: "Online Reputation Management",
      href: "/services/online-reputation-management",
    },
  ],
};

const socials = [
  {
    icon: Globe2,
    href: "/",
    label: "Website",
  },
  {
    icon: AtSign,
    href: "mailto:contact@atriawebsolutions.in",
    label: "Email",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <Container>
        <div className="py-20">
          <div className="grid gap-16 lg:grid-cols-[1.35fr_repeat(3,1fr)]">

            {/* Left */}

            <div>
             <div
  className="inline-flex items-center"
  aria-label="Atria Web Solutions"
>
  {/* Light mode */}
  <Image
    src="/logos/atria-logo-light.png"
    alt="Atria Web Solutions"
    width={180}
    height={60}
    className="h-auto w-[140px] object-contain dark:hidden"
    priority
  />

  {/* Dark mode */}
  <Image
    src="/logos/atria-dark.webp"
    alt="Atria Web Solutions"
    width={180}
    height={60}
    className="hidden h-auto w-[140px] object-contain dark:block"
    priority
  />
</div>

              <p className="mt-6 max-w-sm leading-8 text-[var(--muted)]">
                Building modern websites, web applications and digital
                experiences that help startups, businesses and growing brands
                succeed online.
              </p>

              <div className="mt-8 flex gap-4">
                {socials.map(({ icon: Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center

                      rounded-xl

                      border
                      border-[var(--border)]

                      bg-[var(--card)]

                      transition-all
                      duration-300

                      hover:-translate-y-1
                      hover:border-red-500
                      hover:bg-red-500
                      hover:text-white
                    "
                  >
                    <Icon size={18} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}

            <div>
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                Quick Links
              </h3>

              <ul className="mt-6 space-y-4">
                {footerLinks.quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="
                        text-[var(--muted)]

                        transition-all
                        duration-300

                        hover:translate-x-1
                        hover:text-red-500
                      "
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}

            <div>
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                Services
              </h3>

              <ul className="mt-6 space-y-4">
                {footerLinks.services.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="
                        text-[var(--muted)]

                        transition-all
                        duration-300

                        hover:translate-x-1
                        hover:text-red-500
                      "
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}

            <div>
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                Contact
              </h3>

              <div className="mt-6 space-y-6">

                {/* Location */}

                <div className="flex items-start gap-3">
                  <MapPin
                    className="mt-1 shrink-0 text-red-500"
                    size={18}
                  />

                  <p className="leading-7 text-[var(--muted)]">
                    Golden Park, 237-238,
                    <br />
                    Near Parvati Theatre,
                    <br />
                    Navghar Manikpur, Dindayal Nagar,
                    <br />
                    Vasai West, Vasai-Virar,
                    <br />
                    Maharashtra 401202
                  </p>
                </div>

                {/* Phone */}

                <a
                  href="tel:+918766039459"
                  className="
                    flex
                    items-center
                    gap-3

                    text-[var(--muted)]

                    transition-colors
                    duration-300

                    hover:text-red-500
                  "
                >
                  <Phone
                    className="shrink-0 text-red-500"
                    size={18}
                  />

                  <span>+91 8766039459</span>
                </a>

                {/* Email */}

                <a
                  href="mailto:contact@atriawebsolutions.in"
                  className="
                    flex
                    items-start
                    gap-3

                    text-[var(--muted)]

                    transition-colors
                    duration-300

                    hover:text-red-500
                  "
                >
                  <AtSign
                    className="mt-1 shrink-0 text-red-500"
                    size={18}
                  />

                  <span className="break-all">
                    contact@atriawebsolutions.in
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}

          <div
            className="
              mt-16
              flex
              flex-col
              items-center
              justify-between
              gap-4

              border-t
              border-[var(--border)]

              pt-8

              text-sm

              md:flex-row
            "
          >
            <p className="text-[var(--muted)]">
              © {new Date().getFullYear()} Atria Web Solutions. All rights
              reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}