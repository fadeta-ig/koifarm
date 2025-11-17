"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { buildWhatsAppLink } from "../lib/whatsapp";
import { useContent } from "../context/content-context";

export default function WhatsAppFloatingButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);
  const { content } = useContent();

  const defaultContact = content?.contact || {
    whatsappNumber: "6281934301918",
    whatsappTemplate: "Halo Asyifa Koi Farm, saya tertarik dengan koleksi koi premium. Mohon bantu rekomendasinya.",
  };

  useEffect(() => {
    // Show button after a short delay for smooth entrance
    const timer = setTimeout(() => setIsVisible(true), 1000);

    // Stop pulsing after 10 seconds
    const pulseTimer = setTimeout(() => setIsPulsing(false), 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(pulseTimer);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      {/* Main Button Container with 3D Glass Morphism */}
      <Link
        href={buildWhatsAppLink(
          defaultContact.whatsappNumber,
          defaultContact.whatsappTemplate
        )}
        className="group relative block"
        aria-label="Chat dengan Asyifa Koi Farm di WhatsApp"
      >
        {/* Animated Glow Ring - iOS Style */}
        <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 opacity-60 blur-xl transition-all duration-500 group-hover:opacity-100 group-hover:blur-2xl" />

        {/* Pulse Ring Animation */}
        {isPulsing && (
          <div className="absolute -inset-3 animate-ping rounded-full bg-gradient-to-r from-green-400 to-emerald-400 opacity-40" />
        )}

        {/* 3D Liquid Glass Button */}
        <div className="relative h-16 w-16 overflow-hidden rounded-full transition-all duration-500 group-hover:scale-110 group-active:scale-95">
          {/* Glass Background with Gradient */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 via-emerald-500 to-teal-500 opacity-95" />

          {/* Glassmorphism Overlay */}
          <div className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-xl" />

          {/* Liquid Effect - Top Highlight */}
          <div className="absolute -top-6 left-1/2 h-12 w-12 -translate-x-1/2 rounded-full bg-white/40 blur-xl" />

          {/* Glossy Shine Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-60" />

          {/* Bottom Shadow for 3D Effect */}
          <div className="absolute inset-x-2 -bottom-1 h-8 rounded-full bg-gradient-to-b from-black/0 to-black/10 blur-sm" />

          {/* WhatsApp Icon */}
          <div className="relative flex h-full w-full items-center justify-center">
            <svg
              className="h-8 w-8 text-white drop-shadow-lg transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </div>
        </div>

        {/* Badge - "Online" indicator */}
        <div className="absolute -right-1 -top-1">
          {/* Badge Glow */}
          <div className="absolute inset-0 animate-pulse rounded-full bg-orange-400 blur-md" />

          {/* Badge Container */}
          <div className="relative overflow-hidden rounded-full">
            {/* Glass Background */}
            <div className="relative rounded-full bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 px-2.5 py-1 shadow-lg">
              {/* Glassmorphism Layer */}
              <div className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-sm" />

              {/* Shine Effect */}
              <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-white/50 blur-md" />

              {/* Badge Text */}
              <span className="relative text-[10px] font-bold text-white drop-shadow-md">
                Online
              </span>
            </div>
          </div>
        </div>

        {/* Tooltip on Hover */}
        <div className="pointer-events-none absolute bottom-full right-0 mb-3 opacity-0 transition-all duration-300 group-hover:opacity-100">
          {/* Tooltip Glass Container */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            {/* Glass Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/95 via-slate-900/95 to-slate-800/95 backdrop-blur-xl" />

            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

            {/* Content */}
            <div className="relative px-4 py-2.5">
              <p className="whitespace-nowrap text-sm font-semibold text-white drop-shadow">
                Chat di WhatsApp
              </p>
            </div>
          </div>

          {/* Tooltip Arrow */}
          <div className="absolute right-6 top-full h-0 w-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-slate-800/95" />
        </div>
      </Link>

      {/* Ambient Light Effect */}
      <div className="pointer-events-none absolute inset-0 -z-10 animate-pulse rounded-full bg-gradient-to-r from-green-300/20 via-emerald-300/20 to-teal-300/20 blur-3xl" />
    </div>
  );
}
