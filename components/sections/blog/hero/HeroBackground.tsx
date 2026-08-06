"use client";

export default function HeroBackground() {
  return (
    <>
      {/* Base */}

      <div className="absolute inset-0 bg-[#050505]" />

      {/* Red Glow */}

      <div
        className="
          absolute
          left-[-10%]
          top-[-10%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-red-500/10
          blur-[140px]
        "
      />

      <div
        className="
          absolute
          right-[-10%]
          bottom-[-10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-red-500/5
          blur-[160px]
        "
      />

      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.04]

          [background-image:linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)]

          [background-size:70px_70px]
        "
      />
    </>
  );
}