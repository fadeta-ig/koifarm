import Link from "next/link";

import { navigationLinks } from "../data/landing-content";

export default function Footer() {
  return (
    <footer className="mt-16 flex flex-col gap-6 rounded-3xl border border-white/30 bg-white/20 p-8 text-sm text-slate-600 shadow-[0_40px_80px_-60px_rgba(15,23,42,0.6)] backdrop-blur-xl">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <span className="text-base font-semibold text-slate-900">Asyifa Koi Farm</span>
        <nav aria-label="Navigasi footer" className="flex flex-wrap gap-4">
          {navigationLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-orange-500">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <p className="text-xs text-slate-500">
        © {new Date().getFullYear()} Asyifa Koi Farm. Konten media berupa foto dan video dummy untuk tujuan desain awal.
      </p>
    </footer>
  );
}
