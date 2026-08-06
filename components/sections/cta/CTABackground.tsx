"use client";

export default function CTABackground() {
  return (
    <>
      {/* Main Glow */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-600/15 blur-[180px]" />

        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-red-700/10 blur-[140px]" />

        <div className="absolute right-0 top-1/2 h-80 w-80 rounded-full bg-red-500/10 blur-[140px]" />
      </div>

      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.03]

          [background-image:linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />
    </>
  );
}