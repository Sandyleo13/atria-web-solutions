"use client";

const companies = [
  "Pargad",
  "Altitude Quest",
  "Snapp Editt",
  "Baldev Advertising",
  "Evently",
  "OneAxis Partners",
  "OutPlay Sports Foundation",
  "Mumbai Boxing Association",
];

export function TrustedBrands() {
  return (
    <section
      className="
        relative
        overflow-hidden
        border-y
        border-[var(--border)]
        bg-[var(--background)]
        py-10
        sm:py-12
        lg:py-14
      "
    >
      {/* Section heading */}
      <div className="mx-auto mb-7 max-w-[1440px] px-5 text-center sm:px-6 lg:mb-9">
        <p
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.28em]
            text-[var(--muted)]
            sm:text-sm
          "
        >
          Companies We've Worked With
        </p>
      </div>

      {/* Marquee viewport */}
      <div
        className="
          group
          relative
          w-full
          overflow-hidden
        "
      >
        {/* Left fade */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-10
            h-full
            w-16
            bg-gradient-to-r
            from-[var(--background)]
            to-transparent
            sm:w-24
            lg:w-40
          "
        />

        {/* Right fade */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-10
            h-full
            w-16
            bg-gradient-to-l
            from-[var(--background)]
            to-transparent
            sm:w-24
            lg:w-40
          "
        />

        {/* Moving track */}
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
            <div
              key={`first-${company}`}
              className="
                flex
                h-16
                shrink-0
                items-center
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--card)]
                px-8
                text-sm
                font-semibold
                text-[var(--foreground)]
                shadow-[var(--shadow-md)]
                transition-all
                duration-300
                hover:border-red-500/30
                hover:text-red-500
                sm:h-[72px]
                sm:px-10
                sm:text-base
                lg:h-20
                lg:px-12
              "
            >
              {company}
            </div>
          ))}

          {/* Exact duplicate for seamless loop */}
          {companies.map((company) => (
            <div
              key={`second-${company}`}
              aria-hidden="true"
              className="
                flex
                h-16
                shrink-0
                items-center
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--card)]
                px-8
                text-sm
                font-semibold
                text-[var(--foreground)]
                shadow-[var(--shadow-md)]
                transition-all
                duration-300
                sm:h-[72px]
                sm:px-10
                sm:text-base
                lg:h-20
                lg:px-12
              "
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}