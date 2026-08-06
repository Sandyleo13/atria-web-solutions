"use client";

interface CompanyBadgeProps {
  company: string;
}

export default function CompanyBadge({
  company,
}: CompanyBadgeProps) {
  return (
    <div
      className="
        inline-flex
        items-center

        rounded-full

        border
        border-red-500/20

        bg-red-500/10

        px-4
        py-2

        text-xs
        font-semibold
        uppercase
        tracking-[0.3em]

        text-red-500
      "
    >
      {company}
    </div>
  );
}