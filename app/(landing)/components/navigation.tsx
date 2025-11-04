import Link from "next/link";

import { navigationLinks } from "../data/landing-content";
import WhatsAppButton from "./whatsapp-button";

export default function Navigation() {
  return (
    <header className="sticky top-4 z-50 mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/20 bg-white/40 px-6 py-4 text-sm shadow-[0_20px_60px_-40px_rgba(15,23,42,0.65)] backdrop-blur-xl">
      <Link href="#beranda" className="text-lg font-semibold text-slate-900">
        Asyifa Koi Farm
      </Link>
      <nav aria-label="Navigasi utama" className="hidden items-center gap-6 text-slate-700 md:flex">
        {navigationLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="transition hover:text-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="hidden md:block">
        <WhatsAppButton label="WhatsApp" variant="secondary" />
      </div>
      <div className="md:hidden">
        <WhatsAppButton label="Chat" />
      </div>
    </header>
  );
}
