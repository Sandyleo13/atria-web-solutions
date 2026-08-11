"use client";

export default function HeroBackground() {
  return (
    <>
      {/* Base Background */}

      <div className="absolute inset-0 bg-[var(--background)] transition-colors duration-500" />

      {/* Main Glow */}

      <div
        className="
          absolute
          right-[-10%]
          top-[-15%]

          h-[650px]
          w-[650px]

          rounded-full

          bg-red-500/8
          dark:bg-red-600/12

          blur-[150px]
        "
      />

      {/* Secondary Glow */}

      <div
        className="
          absolute
          left-[-10%]
          bottom-[-15%]

          h-[520px]
          w-[520px]

          rounded-full

          bg-red-500/5
          dark:bg-red-600/8

          blur-[160px]
        "
      />

      {/* Grid Pattern */}

      <div
        className="
          absolute
          inset-0

          opacity-[0.03]
          dark:opacity-[0.04]

          [background-image:linear-gradient(rgba(17,24,39,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(17,24,39,.08)_1px,transparent_1px)]

          dark:[background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)]

          [background-size:70px_70px]
        "
      />

      {/* Vignette */}

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,transparent_30%,rgba(250,250,250,.65)_100%)]

          dark:bg-[radial-gradient(circle_at_center,transparent_20%,rgba(5,5,5,.65)_100%)]

          transition-all
          duration-500
        "
      />
    </>
  );
}