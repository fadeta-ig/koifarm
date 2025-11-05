"use client";

import Navigation from "../(landing)/components/navigation";
import Footer from "../(landing)/components/footer";
import Liquid3DBackground from "../(landing)/components/liquid-3d-background";
import LiquidCard from "../(landing)/components/liquid-card";
import WhatsAppButton from "../(landing)/components/whatsapp-button";
import { testimonials } from "../(landing)/data/landing-content";

export default function TestimonialsPage() {
  return (
    <div className="relative min-h-screen text-slate-900">
      <Liquid3DBackground />
      <div className="relative flex min-h-screen flex-col">
        <Navigation />

        <main className="flex-1 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {/* Page Header */}
            <div className="mb-20 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-200/50 bg-gradient-to-r from-rose-50/80 to-pink-50/80 px-4 py-2 backdrop-blur-sm">
                <span className="text-sm font-semibold text-rose-600">
                  Testimoni
                </span>
              </div>
              <h1 className="mb-6 text-5xl font-bold text-slate-900 lg:text-6xl">
                Apa Kata{" "}
                <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                  Pelanggan Kami
                </span>
              </h1>
              <p className="mx-auto max-w-2xl text-xl text-slate-600">
                Kepercayaan dan kepuasan pelanggan adalah prioritas utama kami
              </p>
            </div>

            {/* Stats Section */}
            <div className="mb-20 grid gap-6 sm:grid-cols-3">
              <LiquidCard variant="gradient" className="p-8 text-center">
                <div className="mb-2 text-4xl font-bold text-slate-900">500+</div>
                <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Pelanggan Puas
                </p>
              </LiquidCard>
              <LiquidCard variant="gradient" className="p-8 text-center">
                <div className="mb-2 text-4xl font-bold text-slate-900">4.9/5</div>
                <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Rating Kepuasan
                </p>
              </LiquidCard>
              <LiquidCard variant="gradient" className="p-8 text-center">
                <div className="mb-2 text-4xl font-bold text-slate-900">98%</div>
                <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Repeat Customer
                </p>
              </LiquidCard>
            </div>

            {/* Testimonials Grid */}
            <div className="mb-20 grid gap-8 lg:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <LiquidCard
                  key={testimonial.name}
                  variant="hover"
                  className="group p-10"
                >
                  {/* Quote Icon */}
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400/20 to-rose-400/20">
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
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-rose-500 text-xl font-bold text-white">
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

            {/* Success Stories */}
            <div className="mb-20">
              <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
                Kisah Sukses Pelanggan
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
                <LiquidCard variant="gradient" className="p-8">
                  <div className="mb-4 text-4xl">🏆</div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    Juara Kontes
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    15+ pelanggan kami memenangkan penghargaan di berbagai kompetisi koi tingkat nasional
                  </p>
                </LiquidCard>
                <LiquidCard variant="gradient" className="p-8">
                  <div className="mb-4 text-4xl">💎</div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    Koleksi Premium
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Koi dari farm kami menghiasi kolam-kolam mewah dan resort ternama di Indonesia
                  </p>
                </LiquidCard>
                <LiquidCard variant="gradient" className="p-8">
                  <div className="mb-4 text-4xl">🌟</div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    Breeding Success
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Banyak pelanggan berhasil breeding dengan koi berkualitas dari farm kami
                  </p>
                </LiquidCard>
              </div>
            </div>

            {/* CTA Section */}
            <LiquidCard variant="gradient" className="p-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                Bergabung dengan Keluarga Besar Kami
              </h2>
              <p className="mb-8 text-lg text-slate-600">
                Dapatkan pengalaman terbaik dalam memilih dan merawat koi premium
              </p>
              <WhatsAppButton label="Mulai Konsultasi" />
            </LiquidCard>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
