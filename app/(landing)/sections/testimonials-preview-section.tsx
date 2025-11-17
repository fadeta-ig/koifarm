import Link from "next/link";
import LiquidCard from "../components/liquid-card";
import WhatsAppButton from "../components/whatsapp-button";
import { testimonials } from "../data/landing-content";

export default function TestimonialsPreviewSection() {
  return (
    <section id="testimoni" className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-20 bg-gradient-to-b from-slate-50/50 to-transparent">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-200/50 bg-gradient-to-r from-rose-50/80 to-pink-50/80 px-4 py-2 backdrop-blur-sm">
            <span className="text-sm font-semibold text-rose-600">
              Testimoni
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-slate-900 sm:text-5xl">
            Apa Kata{" "}
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              Pelanggan Kami
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Kepercayaan dan kepuasan pelanggan adalah prioritas utama kami
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mb-12 grid gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <LiquidCard
              key={testimonial.name}
              variant="hover"
              className="group p-10 transition-all duration-500 hover:scale-105"
            >
              {/* Quote Icon */}
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400/20 to-rose-400/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <svg
                  className="h-8 w-8 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Message */}
              <p className="mb-6 text-lg italic text-slate-700 leading-relaxed">
                "{testimonial.message}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-rose-500 text-xl font-bold text-white shadow-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-600">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </LiquidCard>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mb-10 grid gap-6 sm:grid-cols-3">
          <LiquidCard variant="gradient" className="p-8 text-center">
            <div className="mb-2 text-4xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              500+
            </div>
            <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
              Pelanggan Puas
            </p>
          </LiquidCard>
          <LiquidCard variant="gradient" className="p-8 text-center">
            <div className="mb-2 text-4xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
              4.9/5
            </div>
            <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
              Rating Kepuasan
            </p>
          </LiquidCard>
          <LiquidCard variant="gradient" className="p-8 text-center">
            <div className="mb-2 text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              98%
            </div>
            <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
              Repeat Customer
            </p>
          </LiquidCard>
        </div>

        {/* CTA Section */}
        <LiquidCard variant="gradient" className="p-12 text-center">
          <h3 className="mb-4 text-3xl font-bold text-slate-900">
            Bergabung dengan Keluarga Besar Kami
          </h3>
          <p className="mb-8 text-lg text-slate-600">
            Dapatkan pengalaman terbaik dalam memilih dan merawat koi premium
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <WhatsAppButton label="Mulai Konsultasi" />
            <Link
              href="/testimonials"
              className="group inline-flex items-center gap-2 rounded-2xl border border-white/40 bg-white/60 px-8 py-4 text-base font-semibold text-slate-700 shadow-[0_8px_24px_0_rgba(15,23,42,0.1)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_32px_0_rgba(225,29,72,0.15)] hover:border-rose-200/60"
            >
              Lihat Semua Testimoni
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </LiquidCard>
      </div>
    </section>
  );
}
