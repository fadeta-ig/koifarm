"use client";

import Link from "next/link";
import { navigationLinks } from "../data/landing-content";

export default function Footer() {
  return (
    <footer className="relative mt-20 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-white/30 bg-white/70 p-10 shadow-[0_8px_32px_0_rgba(15,23,42,0.1)] backdrop-blur-2xl lg:p-12">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                Asyifa Koi Farm
              </h3>
              <p className="mb-6 text-slate-600 leading-relaxed">
                Premium koi farm dengan bloodline tersertifikasi dan pendampingan ahli untuk setiap pelanggan.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/40 bg-white/60 text-slate-700 backdrop-blur-sm transition-all hover:scale-110 hover:border-orange-400 hover:text-orange-600"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/40 bg-white/60 text-slate-700 backdrop-blur-sm transition-all hover:scale-110 hover:border-orange-400 hover:text-orange-600"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-900">
                Quick Links
              </h4>
              <nav className="grid grid-cols-2 gap-3">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-slate-600 transition-colors hover:text-orange-600"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-900">
                Kontak
              </h4>
              <div className="space-y-3 text-slate-600">
                <p className="flex items-start gap-2">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">Jl. Raya Parung KM 24, Bogor</span>
                </p>
                <p className="flex items-start gap-2">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">Senin - Sabtu, 09:00 - 16:00</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-8">
            <p className="text-center text-sm text-slate-500">
              © {new Date().getFullYear()} Asyifa Koi Farm. All rights reserved.
              <span className="block mt-1 text-xs">Foto dan video untuk keperluan demonstrasi.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
