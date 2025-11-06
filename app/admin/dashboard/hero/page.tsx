"use client";

import { useEffect, useState } from "react";

interface StatItem {
  label: string;
  value: string;
}

interface FeatureCard {
  title: string;
  description: string;
}

interface HeroData {
  badge: string;
  badgeSubtext: string;
  title: string;
  description: string;
  stats: StatItem[];
  featureCards: FeatureCard[];
}

export default function HeroPage() {
  const [heroData, setHeroData] = useState<HeroData>({
    badge: "Tersertifikasi Bloodline Juara",
    badgeSubtext: "Kemitraan langsung dengan breeder Jepang",
    title: "Koi Premium Terbaik",
    description: "Temukan koi unggulan dari bloodline juara dengan pendampingan ahli end-to-end. Data kesehatan lengkap dan garansi kualitas terjamin.",
    stats: [
      { label: "Koi Siap Kirim", value: "120+" },
      { label: "Bloodline Juara", value: "18" },
      { label: "Tingkat Survival", value: "99%" },
    ],
    featureCards: [
      { title: "Tersertifikasi Bloodline Juara", description: "Kemitraan langsung dengan breeder Jepang" },
      { title: "Garansi Kualitas", description: "Data kesehatan lengkap dan jaminan kualitas terbaik" },
      { title: "Pendampingan Ahli", description: "Konsultasi gratis dari expert koi berpengalaman" },
      { title: "Pengiriman Aman", description: "Sistem packing professional ke seluruh Indonesia" },
    ],
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchHeroData();
  }, []);

  const fetchHeroData = async () => {
    const res = await fetch("/api/admin/hero");
    const data = await res.json();
    setHeroData({
      badge: data.badge || "Tersertifikasi Bloodline Juara",
      badgeSubtext: data.badgeSubtext || "Kemitraan langsung dengan breeder Jepang",
      title: data.title || "Koi Premium Terbaik",
      description: data.description || "Temukan koi unggulan dari bloodline juara dengan pendampingan ahli end-to-end. Data kesehatan lengkap dan garansi kualitas terjamin.",
      stats: data.stats || [
        { label: "Koi Siap Kirim", value: "120+" },
        { label: "Bloodline Juara", value: "18" },
        { label: "Tingkat Survival", value: "99%" },
      ],
      featureCards: data.featureCards || [
        { title: "Tersertifikasi Bloodline Juara", description: "Kemitraan langsung dengan breeder Jepang" },
        { title: "Garansi Kualitas", description: "Data kesehatan lengkap dan jaminan kualitas terbaik" },
        { title: "Pendampingan Ahli", description: "Konsultasi gratis dari expert koi berpengalaman" },
        { title: "Pengiriman Aman", description: "Sistem packing professional ke seluruh Indonesia" },
      ],
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      await fetch("/api/admin/hero", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(heroData),
      });

      alert("Hero section berhasil diperbarui!");
      fetchHeroData();
    } catch (error) {
      console.error("Error saving hero data:", error);
      const errorMessage = error instanceof Error ? error.message : "Gagal menyimpan data. Silakan coba lagi.";
      alert(errorMessage);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Hero Section</h1>
        <p className="text-gray-400">Kelola konten teks dan feature cards di hero section landing page</p>
      </div>

      {/* Form */}
      <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden">
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Divider */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Konten Teks Hero</h3>
            </div>

            {/* Main Title */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">Judul Utama</label>
              <input
                type="text"
                value={heroData.title}
                onChange={(e) => setHeroData({ ...heroData, title: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Contoh: Koi Premium Terbaik"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">Deskripsi</label>
              <textarea
                value={heroData.description}
                onChange={(e) => setHeroData({ ...heroData, description: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Contoh: Temukan koi unggulan dari bloodline juara..."
                required
              />
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 pt-6">
              <h3 className="text-lg font-semibold text-white mb-4">Feature Cards (4 Item)</h3>
              <p className="text-sm text-gray-400 mb-4">Card yang ditampilkan di sisi kanan hero section</p>
            </div>

            {/* Feature Cards */}
            {heroData.featureCards.map((card, index) => (
              <div key={index} className="space-y-3 p-4 bg-white/5 rounded-lg border border-white/10">
                <h4 className="text-sm font-semibold text-gray-300">Feature Card {index + 1}</h4>
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Judul
                  </label>
                  <input
                    type="text"
                    value={card.title}
                    onChange={(e) => {
                      const newCards = [...heroData.featureCards];
                      newCards[index].title = e.target.value;
                      setHeroData({ ...heroData, featureCards: newCards });
                    }}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Contoh: Garansi Kualitas"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Deskripsi
                  </label>
                  <input
                    type="text"
                    value={card.description}
                    onChange={(e) => {
                      const newCards = [...heroData.featureCards];
                      newCards[index].description = e.target.value;
                      setHeroData({ ...heroData, featureCards: newCards });
                    }}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Contoh: Data kesehatan lengkap dan jaminan kualitas terbaik"
                    required
                  />
                </div>
              </div>
            ))}

            {/* Divider */}
            <div className="border-t border-white/10 pt-6">
              <h3 className="text-lg font-semibold text-white mb-4">Statistik Hero (3 Item)</h3>
            </div>

            {/* Stats */}
            {heroData.stats.map((stat, index) => (
              <div key={index} className="grid grid-cols-2 gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Label Stat {index + 1}
                  </label>
                  <input
                    type="text"
                    value={stat.label}
                    onChange={(e) => {
                      const newStats = [...heroData.stats];
                      newStats[index].label = e.target.value;
                      setHeroData({ ...heroData, stats: newStats });
                    }}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Contoh: Koi Siap Kirim"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Nilai Stat {index + 1}
                  </label>
                  <input
                    type="text"
                    value={stat.value}
                    onChange={(e) => {
                      const newStats = [...heroData.stats];
                      newStats[index].value = e.target.value;
                      setHeroData({ ...heroData, stats: newStats });
                    }}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Contoh: 120+"
                    required
                  />
                </div>
              </div>
            ))}

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={saving}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {saving ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Menyimpan...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Simpan Perubahan</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Info Card */}
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
        <div className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 className="text-sm font-semibold text-blue-400 mb-1">Informasi</h3>
            <p className="text-xs text-gray-300">
              Hero section adalah bagian pertama yang dilihat pengunjung di halaman beranda.
              Pastikan konten teks yang menarik dan feature cards yang informatif untuk meningkatkan konversi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
