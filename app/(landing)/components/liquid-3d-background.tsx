"use client";

export default function Liquid3DBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 -left-48 w-96 h-96 bg-gradient-to-br from-orange-400/30 to-rose-400/30 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/4 -right-48 w-[600px] h-[600px] bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float-slow" />

      {/* Glass reflection effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.05),rgba(255,255,255,0))]" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
    </div>
  );
}
