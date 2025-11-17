"use client";

import LiquidCard from "../components/liquid-card";
import WhatsAppButton from "../components/whatsapp-button";
import { photographyServices, photographyBenefits, WHATSAPP_NUMBER } from "../data/landing-content";

export default function PhotographyServiceSection() {
  const whatsappTemplate = "Halo Asyifa Koi Farm, saya tertarik dengan jasa fotografi koi profesional. Mohon informasi lebih lanjut mengenai paket dan harga.";

  return (
    <section id="photography-service" className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-200/50 bg-gradient-to-r from-purple-50/80 to-pink-50/80 px-4 py-2 backdrop-blur-sm">
            <svg className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm font-semibold text-purple-600">
              Jasa Fotografi
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-slate-900 sm:text-5xl lg:text-6xl">
            Abadikan Keindahan{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Koi Anda
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600 sm:text-xl">
            Layanan fotografi profesional untuk mengabadikan momen terbaik koleksi koi Anda
            dengan hasil berkualitas tinggi yang memukau
          </p>
        </div>

        {/* Photography Services Grid */}
        <div className="mb-12 grid gap-8 md:grid-cols-3">
          {photographyServices.map((service, index) => {
            const gradients = [
              "from-purple-500 to-pink-500",
              "from-cyan-500 to-blue-500",
              "from-orange-500 to-rose-500"
            ];

            return (
              <LiquidCard
                key={service.title}
                variant="hover"
                className="group flex flex-col p-8 transition-all duration-500 hover:scale-105"
              >
                {/* Service Icon */}
                <div className="mb-6 flex justify-center">
                  <div className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${gradients[index]} shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {index === 0 && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      )}
                      {index === 1 && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      )}
                      {index === 2 && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      )}
                    </svg>
                  </div>
                </div>

                {/* Service Title & Description */}
                <h3 className="mb-3 text-center text-xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="mb-6 text-center text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="mt-auto space-y-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <svg className={`h-5 w-5 flex-shrink-0 text-transparent bg-gradient-to-r ${gradients[index]} bg-clip-text mt-0.5`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </LiquidCard>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="mb-12">
          <h3 className="mb-8 text-center text-3xl font-bold text-slate-900">
            Mengapa Memilih{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Layanan Kami?
            </span>
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {photographyBenefits.map((benefit) => {
              const iconMap: Record<string, string> = {
                camera: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z",
                eye: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
                clock: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                star: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              };

              return (
                <LiquidCard key={benefit.title} variant="gradient" className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconMap[benefit.icon]} />
                      </svg>
                    </div>
                  </div>
                  <h4 className="mb-2 text-base font-bold text-slate-900">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-slate-600">
                    {benefit.description}
                  </p>
                </LiquidCard>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <LiquidCard variant="gradient" className="overflow-hidden">
          <div className="relative px-8 py-12 sm:px-12 sm:py-16">
            {/* Decorative Elements */}
            <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br from-purple-400/30 to-pink-400/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-gradient-to-tr from-cyan-400/30 to-blue-400/30 blur-3xl" />

            <div className="relative text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2">
                <svg className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span className="text-sm font-semibold text-purple-700">
                  Special Offer
                </span>
              </div>

              <h3 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                Siap Dokumentasikan{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Koleksi Koi Anda?
                </span>
              </h3>

              <p className="mb-8 mx-auto max-w-2xl text-lg text-slate-600">
                Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran spesial
                untuk paket fotografi koi profesional
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <WhatsAppButton
                  label="Booking Sekarang"
                  whatsappNumber={WHATSAPP_NUMBER}
                  whatsappTemplate={whatsappTemplate}
                  className="min-w-[200px] transform transition-all duration-300 hover:scale-110 shadow-[0_20px_60px_-15px_rgba(234,88,12,0.5)]"
                />
                <a
                  href="#photography-service"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 backdrop-blur-sm transition-all duration-300 hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Info Lengkap
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>100% Kepuasan Terjamin</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Fast Response 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Revisi Unlimited</span>
                </div>
              </div>
            </div>
          </div>
        </LiquidCard>
      </div>
    </section>
  );
}
