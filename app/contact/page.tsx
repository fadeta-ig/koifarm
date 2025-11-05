"use client";

import Navigation from "../(landing)/components/navigation";
import Footer from "../(landing)/components/footer";
import Liquid3DBackground from "../(landing)/components/liquid-3d-background";
import LiquidCard from "../(landing)/components/liquid-card";
import WhatsAppButton from "../(landing)/components/whatsapp-button";
import { visitInfo } from "../(landing)/data/landing-content";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen text-slate-900">
      <Liquid3DBackground />
      <div className="relative flex min-h-screen flex-col">
        <Navigation />

        <main className="flex-1 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {/* Page Header */}
            <div className="mb-20 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-200/50 bg-gradient-to-r from-green-50/80 to-emerald-50/80 px-4 py-2 backdrop-blur-sm">
                <span className="text-sm font-semibold text-green-600">
                  Hubungi Kami
                </span>
              </div>
              <h1 className="mb-6 text-5xl font-bold text-slate-900 lg:text-6xl">
                Kunjungi{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Farm Kami
                </span>
              </h1>
              <p className="mx-auto max-w-2xl text-xl text-slate-600">
                Atur janji temu untuk melihat langsung koleksi koi dan fasilitas premium kami
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Info */}
              <div className="space-y-8">
                <LiquidCard variant="hover" className="p-8">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400/20 to-rose-400/20">
                      <svg
                        className="h-7 w-7 text-orange-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Alamat</h3>
                    </div>
                  </div>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    {visitInfo.address}
                  </p>
                  <a
                    href={visitInfo.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                  >
                    Buka di Google Maps
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </LiquidCard>

                <LiquidCard variant="hover" className="p-8">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-400/20">
                      <svg
                        className="h-7 w-7 text-cyan-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Jam Kunjungan</h3>
                    </div>
                  </div>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    {visitInfo.schedule}
                  </p>
                  <p className="mt-4 text-sm text-slate-600">
                    Harap hubungi kami terlebih dahulu untuk membuat janji temu
                  </p>
                </LiquidCard>

                <LiquidCard variant="gradient" className="p-8">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-400/20 to-emerald-400/20">
                      <svg
                        className="h-7 w-7 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">WhatsApp</h3>
                    </div>
                  </div>
                  <p className="mb-6 text-lg text-slate-700">
                    Hubungi kami untuk konsultasi, tanya stok, atau atur kunjungan
                  </p>
                  <WhatsAppButton label="Chat WhatsApp" />
                </LiquidCard>
              </div>

              {/* Quick Contact Form */}
              <div>
                <LiquidCard variant="gradient" className="p-10">
                  <h2 className="mb-8 text-3xl font-bold text-slate-900">
                    Atur Kunjungan
                  </h2>

                  <form className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full rounded-xl border border-white/40 bg-white/60 px-4 py-3 text-slate-900 backdrop-blur-sm transition-all focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Nomor WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full rounded-xl border border-white/40 bg-white/60 px-4 py-3 text-slate-900 backdrop-blur-sm transition-all focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
                        placeholder="08123456789"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="date"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Tanggal Kunjungan
                      </label>
                      <input
                        type="date"
                        id="date"
                        className="w-full rounded-xl border border-white/40 bg-white/60 px-4 py-3 text-slate-900 backdrop-blur-sm transition-all focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Pesan (Opsional)
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full rounded-xl border border-white/40 bg-white/60 px-4 py-3 text-slate-900 backdrop-blur-sm transition-all focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
                        placeholder="Saya tertarik untuk melihat varietas Kohaku dan Showa..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-rose-500 px-8 py-4 text-base font-bold text-white shadow-[0_8px_24px_0_rgba(234,88,12,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_32px_0_rgba(234,88,12,0.4)]"
                    >
                      Kirim Permintaan
                    </button>
                  </form>

                  <p className="mt-6 text-center text-sm text-slate-600">
                    Atau langsung hubungi via WhatsApp untuk respon lebih cepat
                  </p>
                </LiquidCard>
              </div>
            </div>

            {/* Features */}
            <div className="mt-20 grid gap-6 sm:grid-cols-3">
              <LiquidCard variant="gradient" className="p-8 text-center">
                <div className="mb-4 text-4xl">🏠</div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">
                  Fasilitas Lengkap
                </h3>
                <p className="text-sm text-slate-600">
                  Area karantina, kolam display, dan ruang konsultasi nyaman
                </p>
              </LiquidCard>
              <LiquidCard variant="gradient" className="p-8 text-center">
                <div className="mb-4 text-4xl">👨‍🏫</div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">
                  Konsultasi Gratis
                </h3>
                <p className="text-sm text-slate-600">
                  Tim ahli siap memberi rekomendasi sesuai kebutuhan Anda
                </p>
              </LiquidCard>
              <LiquidCard variant="gradient" className="p-8 text-center">
                <div className="mb-4 text-4xl">📸</div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">
                  Dokumentasi Lengkap
                </h3>
                <p className="text-sm text-slate-600">
                  Lihat detail setiap koi dan dapatkan video swimming pattern
                </p>
              </LiquidCard>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
