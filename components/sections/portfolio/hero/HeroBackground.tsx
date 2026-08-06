"use client";

export default function HeroBackground() {
  return (
    <>
      {/* Base Background */}

      <div className="absolute inset-0 bg-[#050505]" />

      {/* Red Glow */}

      <div
        className="
          absolute
          right-[-10%]
          top-[-15%]
          h-[650px]
          w-[650px]
          rounded-full
          bg-red-600/10
          blur-[140px]
        "
      />

      <div
        className="
          absolute
          left-[-10%]
          bottom-[-15%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-red-500/5
          blur-[150px]
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