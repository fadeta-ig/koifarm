"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navigationLinks } from "../data/landing-content";
import WhatsAppButton from "./whatsapp-button";

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-6 z-50 mx-auto w-full max-w-7xl px-4 sm:px-6">
      <div className="flex items-center justify-between rounded-3xl border border-white/30 bg-white/70 px-6 py-4 shadow-[0_8px_32px_0_rgba(15,23,42,0.1)] backdrop-blur-2xl transition-all duration-300 hover:shadow-[0_12px_40px_0_rgba(15,23,42,0.15)]">
        <Link
          href="/"
          className="group relative text-xl font-bold text-slate-900 transition-all duration-300"
        >
          <span className="relative z-10">Asyifa Koi Farm</span>
          <div className="absolute -inset-2 -z-10 rounded-lg bg-gradient-to-r from-orange-400/20 to-cyan-400/20 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Navigasi utama" className="hidden items-center gap-1 md:flex">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-orange-600"
                    : "text-slate-700 hover:text-orange-500"
                }`}
              >
                {link.label}
                {isActive && (
                  <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-orange-400/10 to-orange-500/10 backdrop-blur-sm" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <WhatsAppButton label="WhatsApp" variant="secondary" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-xl p-2 text-slate-700 transition-colors hover:bg-white/50 md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mt-4 rounded-2xl border border-white/30 bg-white/80 p-4 backdrop-blur-2xl md:hidden">
          <nav className="flex flex-col gap-2">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-orange-400/20 to-orange-500/20 text-orange-600"
                      : "text-slate-700 hover:bg-white/50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-2 pt-2 border-t border-slate-200">
              <WhatsAppButton label="Chat WhatsApp" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
