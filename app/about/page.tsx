"use client";

import Navigation from "../(landing)/components/navigation";
import Footer from "../(landing)/components/footer";
import Liquid3DBackground from "../(landing)/components/liquid-3d-background";
import LiquidCard from "../(landing)/components/liquid-card";
import { farmAdvantages, purchaseSteps } from "../(landing)/data/landing-content";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen text-slate-900">
      <Liquid3DBackground />
      <div className="relative flex min-h-screen flex-col">
        <Navigation />

        <main className="flex-1 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {/* Page Header */}
            <div className="mb-20 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-200/50 bg-gradient-to-r from-cyan-50/80 to-blue-50/80 px-4 py-2 backdrop-blur-sm">
                <span className="text-sm font-semibold text-cyan-600">
                  Tentang Kami
                </span>
              </div>
              <h1 className="mb-6 text-5xl font-bold text-slate-900 lg:text-6xl">
                Keunggulan{" "}
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Asyifa Koi Farm
                </span>
              </h1>
              <p className="mx-auto max-w-2xl text-xl text-slate-600">
                Dipercaya kolektor karena komitmen pada kualitas, kesehatan, dan kepuasan pelanggan
              </p>
            </div>

            {/* Advantages Section */}
            <div className="mb-24">
              <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
                Mengapa Memilih Kami
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                {farmAdvantages.map((advantage, index) => (
                  <LiquidCard
                    key={advantage.title}
                    variant="hover"
                    className="group p-8"
                  >
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400/20 to-cyan-400/20">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-cyan-500 text-xl font-bold text-white">
                          {index + 1}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {advantage.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {advantage.description}
                    </p>
                  </LiquidCard>
                ))}
              </div>
            </div>

            {/* Process Section */}
            <div>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-slate-900">
                  Cara Pembelian
                </h2>
                <p className="text-lg text-slate-600">
                  Proses mudah dan transparan dari awal hingga koi tiba di kolam Anda
                </p>
              </div>

              <div className="relative">
                {/* Connection Line */}
                <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-orange-400 via-cyan-400 to-purple-400 opacity-30 md:left-1/2" />

                <div className="space-y-8">
                  {purchaseSteps.map((step, index) => (
                    <div
                      key={step.title}
                      className={`relative flex gap-8 ${
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Step Number */}
                      <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-white/80 to-white/60 border border-white/40 shadow-[0_8px_24px_0_rgba(15,23,42,0.1)] backdrop-blur-xl md:absolute md:left-1/2 md:-translate-x-1/2">
                        <span className="text-2xl font-bold bg-gradient-to-br from-orange-600 to-cyan-600 bg-clip-text text-transparent">
                          {index + 1}
                        </span>
                      </div>

                      {/* Content */}
                      <LiquidCard
                        variant="gradient"
                        className="flex-1 p-8 md:w-[calc(50%-4rem)]"
                      >
                        <h3 className="mb-3 text-2xl font-bold text-slate-900">
                          {step.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {step.detail}
                        </p>
                      </LiquidCard>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
