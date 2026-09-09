import type { IconType } from "react-icons";
import {
  SiDart,
  SiFirebase,
  SiFlutter,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const icons: Record<string, IconType> = {
  "Next.js": SiNextdotjs,
  React: SiReact,
  TypeScript: SiTypescript,
  Laravel: SiLaravel,
  PHP: SiPhp,
  "Tailwind CSS": SiTailwindcss,
  MySQL: SiMysql,
  "Node.js": SiNodedotjs,
  Flutter: SiFlutter,
  Dart: SiDart,
  Firebase: SiFirebase,
};

export function TechnologyBadge({ name }: { name: string }) {
  const Icon = icons[name];

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] shadow-sm transition-transform hover:-translate-y-0.5">
      {Icon ? <Icon aria-hidden className="h-4 w-4 text-red-500" /> : null}
      {name}
    </span>
  );
}
