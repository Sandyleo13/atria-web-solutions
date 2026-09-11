"use client";

import Image from "next/image";

const companies = [
  {
    name: "Pargad",
    logo: "/images/company%20logos/pargad.webp",
  },
  {
    name: "Altitude Quest",
    logo: "/images/company%20logos/optimized/altitude-quest.webp",
  },
  {
    name: "Snapp Editt",
    logo: "/images/company%20logos/snappeditt.webp",
    imageClass: "scale-[1.45]",
  },
  {
    name: "Baldev Advertising",
    logo: "/images/company%20logos/baldev.webp",
  },
  {
    name: "Evently",
    logo: "/images/company%20logos/evently.svg",
  },
  {
    name: "OneAxis Partners",
    logo: "/images/company%20logos/optimized/oneaxis.webp",
  },
  {
    name: "OutPlay Sports Foundation",
    logo: "/images/company%20logos/outplay.webp",
  },
  {
    name: "Mumbai Boxing Association",
    logo: "/images/company%20logos/optimized/mumbai-boxing-association.webp",
  },
];

function CompanyCard({
  company,
  duplicate = false,
}: {
  company: (typeof companies)[number];
  duplicate?: boolean;
}) {
  return (
    <div
      aria-hidden={duplicate}
      className="
        flex
        h-[78px]
        w-[220px]
        shrink-0
        items-center
        justify-center
        rounded-2xl
        border
        border-slate-200
        bg-white
        px-8
        shadow-[0_4px_16px_rgba(15,23,42,0.06)]
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-slate-300
        hover:shadow-[0_8px_22px_rgba(15,23,42,0.09)]
        sm:h-[84px]
        sm:w-[250px]
        sm:px-10
        lg:h-[88px]
        lg:w-[280px]
        lg:px-12
        dark:border-white/10
        dark:bg-[#111111]
        dark:shadow-[0_4px_16px_rgba(0,0,0,0.18)]
        dark:hover:border-white/15
        dark:hover:shadow-[0_8px_22px_rgba(0,0,0,0.28)]
      "
    >
      <div
        className="
          relative
          h-14
          w-full
          max-w-[190px]
          sm:max-w-[220px]
          lg:h-16
          lg:max-w-[240px]
        "
      >
        <Image
          src={company.logo}
          alt={company.name + " logo"}
          fill
          sizes="(max-width: 640px) 180px, (max-width: 1024px) 220px, 240px"
          className={
            "object-contain transition-transform duration-300 " +
            (company.imageClass ?? "")
          }
        />
      </div>
    </div>
  );
}

export function TrustedBrands() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[var(--background)]
        py-14
        sm:py-16
        lg:py-20
      "
    >
      {/* Section heading */}
      <div
        className="
          mx-auto
          mb-10
          max-w-[1440px]
          px-5
          text-center
          sm:mb-12
          sm:px-6
          lg:mb-14
        "
      >
        <p
          className="
            text-[11px]
            font-bold
            uppercase
            tracking-[0.32em]
            text-[var(--foreground)]
            sm:text-xs
          "
        >
          Companies We've Worked With
        </p>

        <p
          className="
            mx-auto
            mt-3
            max-w-xl
            text-sm
            leading-6
            text-[var(--muted)]
            sm:text-[15px]
          "
        >
          Trusted by organizations that value thoughtful design,
          reliable technology, and measurable digital experiences.
        </p>
      </div>

      {/* Marquee */}
      <div className="group relative w-full overflow-hidden bg-transparent">
        <div
          className="
            atria-company-marquee
            flex
            w-max
            items-center
            gap-4
            group-hover:[animation-play-state:paused]
            sm:gap-5
            lg:gap-6
          "
        >
          {/* First set */}
          {companies.map((company) => (
            <CompanyCard
              key={"first-" + company.name}
              company={company}
            />
          ))}

          {/* Exact duplicate for seamless animation */}
          {companies.map((company) => (
            <CompanyCard
              key={"second-" + company.name}
              company={company}
              duplicate
            />
          ))}
        </div>
      </div>
    </section>
  );
}