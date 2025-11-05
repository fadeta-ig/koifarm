"use client";

import { useEffect, useState } from "react";
import { StatCard } from "../components/stat-card";

export default function DashboardPage() {
  const [stats, setStats] = useState({
    varieties: 0,
    gallery: 0,
    testimonials: 0,
  });

  useEffect(() => {
    async function fetchStats() {
      try {
        const [varietiesRes, galleryRes, testimonialsRes] = await Promise.all([
          fetch("/api/admin/varieties"),
          fetch("/api/admin/gallery"),
          fetch("/api/admin/testimonials"),
        ]);

        const varieties = await varietiesRes.json();
        const gallery = await galleryRes.json();
        const testimonials = await testimonialsRes.json();

        setStats({
          varieties: varieties.length,
          gallery: gallery.length,
          testimonials: testimonials.length,
        });
      } catch (error) {
        console.error("Failed to fetch stats:", error);
      }
    }

    fetchStats();
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="animate-fade-in">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">
          Selamat datang di panel admin Asyifa Koi Farm
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Total Varietas"
          value={stats.varieties}
          gradient="from-blue-400 to-blue-600"
          delay={0}
          icon={
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              />
            </svg>
          }
        />

        <StatCard
          title="Item Galeri"
          value={stats.gallery}
          gradient="from-purple-400 to-purple-600"
          delay={100}
          icon={
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          }
        />

        <StatCard
          title="Testimoni"
          value={stats.testimonials}
          gradient="from-pink-400 to-pink-600"
          delay={200}
          icon={
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          }
        />
      </div>

      {/* Quick Actions */}
      <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 animate-fade-in" style={{ animationDelay: "300ms" }}>
        <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="/admin/dashboard/varieties"
            className="group bg-white/5 hover:bg-white/10 rounded-lg p-4 border border-white/10 hover:border-blue-500/50 transition-all duration-200"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium">Tambah Varietas</p>
                <p className="text-gray-400 text-sm">Tambahkan varietas baru</p>
              </div>
            </div>
          </a>

          <a
            href="/admin/dashboard/gallery"
            className="group bg-white/5 hover:bg-white/10 rounded-lg p-4 border border-white/10 hover:border-purple-500/50 transition-all duration-200"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  className="w-5 h-5 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium">Tambah Galeri</p>
                <p className="text-gray-400 text-sm">Upload foto atau video</p>
              </div>
            </div>
          </a>

          <a
            href="/admin/dashboard/testimonials"
            className="group bg-white/5 hover:bg-white/10 rounded-lg p-4 border border-white/10 hover:border-pink-500/50 transition-all duration-200"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  className="w-5 h-5 text-pink-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium">Tambah Testimoni</p>
                <p className="text-gray-400 text-sm">Tambahkan ulasan pelanggan</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
