import type { PropsWithChildren } from "react";

export default function GlassPanel({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-white/40 bg-white/30 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.65)] backdrop-blur-2xl ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/50 via-white/10 to-white/5" aria-hidden />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
