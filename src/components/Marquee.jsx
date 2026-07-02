import React from "react";

const ITEMS = [
  "React",
  "React Native",
  "Next.js",
  "TypeScript",
  "Node.js",
  "WordPress",
  "Shopify",
  "Tailwind CSS",
  "AWS",
  "Firebase",
  "PostgreSQL",
  "Docker",
];

/**
 * Slow-scrolling strip of technologies. Transform-based so it's cheap on
 * mobile GPUs; the global reduced-motion rule freezes it to a static list.
 */
export default function Marquee() {
  const row = (ariaHidden) => (
    <ul
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center gap-8 pr-8"
    >
      {ITEMS.map((item) => (
        <li key={item} className="flex items-center gap-8 whitespace-nowrap">
          <span className="text-sm font-medium tracking-wide text-muted">
            {item}
          </span>
          <span className="text-accent/60 text-xs" aria-hidden="true">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className="relative overflow-hidden border-y border-white/5 bg-surface/60 py-4"
      aria-label="Technologies I work with"
    >
      <div className="flex w-max animate-marquee">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
