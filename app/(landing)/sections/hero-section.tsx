import Image from "next/image";
import Link from "next/link";

import GlassPanel from "../components/glass-panel";
import WhatsAppButton from "../components/whatsapp-button";
import { heroStats } from "../data/landing-content";

export default function HeroSection() {
  return (
    <section id="beranda" className="relative isolate flex flex-col gap-16">
      <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[520px] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.2),_transparent_60%)]" aria-hidden />
      <GlassPanel className="border-white/30 bg-white/20 p-8 sm:p-12 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-center lg:gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
              Asyifa Koi Farm
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Koi premium siap kirim dengan pendampingan ahli end-to-end
            </h1>
            <p className="max-w-xl text-lg text-slate-600">
              Temukan koi unggulan dari bloodline juara, lengkap dengan data kesehatan, video berenang, dan template konsultasi WhatsApp instan.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <WhatsAppButton label="Konsultasi via WhatsApp" />
            <Link
              href="/katalog"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-700 shadow-[0_12px_30px_-18px_rgba(15,23,42,0.35)] transition hover:border-orange-200 hover:text-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              Jelajah katalog
              <span aria-hidden>→</span>
            </Link>
          </div>
          <dl className="grid grid-cols-1 gap-4 text-sm text-slate-600 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/40 bg-white/40 p-4 text-center shadow-[0_18px_50px_-30px_rgba(15,23,42,0.55)]">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {stat.label}
                </dt>
                <dd className="text-2xl font-semibold text-slate-900">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative mt-10 lg:mt-0">
          <div className="absolute -inset-6 -z-10 bg-gradient-to-br from-orange-200/60 via-white/0 to-sky-300/40 blur-3xl" aria-hidden />
          <GlassPanel className="border-white/20 bg-white/30 p-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[26px]">
              <Image
                src="https://images.unsplash.com/photo-1506345282097-5b614c0371a4?auto=format&fit=crop&w=1200&q=80"
                alt="Foto close-up koi berwarna oranye putih berenang"
                fill
                className="object-cover"
                priority
                sizes="(min-width: 1024px) 420px, (min-width: 640px) 70vw, 90vw"
              />
            </div>
          </GlassPanel>
        </div>
      </GlassPanel>
    </section>
  );
}
