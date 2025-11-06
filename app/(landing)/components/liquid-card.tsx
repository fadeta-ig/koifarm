"use client";

import { ReactNode, CSSProperties } from "react";

interface LiquidCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "hover" | "gradient";
  style?: CSSProperties;
}

export default function LiquidCard({
  children,
  className = "",
  variant = "default",
  style
}: LiquidCardProps) {
  const baseClasses = "relative rounded-3xl overflow-hidden transition-all duration-500";

  const variantClasses = {
    default: "bg-white/60 backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_0_rgba(15,23,42,0.1)]",
    hover: "bg-white/50 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(15,23,42,0.1)] hover:shadow-[0_12px_48px_0_rgba(234,88,12,0.15)] hover:scale-[1.02] hover:border-orange-200/50",
    gradient: "bg-gradient-to-br from-white/70 via-white/50 to-white/30 backdrop-blur-2xl border border-white/40 shadow-[0_8px_32px_0_rgba(15,23,42,0.12)]"
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`} style={style}>
      {/* Liquid effect overlay */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-400/20 via-transparent to-cyan-400/20 animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
