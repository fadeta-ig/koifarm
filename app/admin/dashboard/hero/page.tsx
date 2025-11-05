"use client";

import { useEffect, useState } from "react";

interface HeroData {
  mediaSrc: string;
  mediaAlt: string;
  badge: string;
  badgeSubtext: string;
}

export default function HeroPage() {
  const [heroData, setHeroData] = useState<HeroData>({
    mediaSrc: "",
    mediaAlt: "",
    badge: "",
    badgeSubtext: "",
  });
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [mediaPreview, setMediaPreview] = useState<string>("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchHeroData();
  }, []);

  const fetchHeroData = async () => {
    const res = await fetch("/api/admin/hero");
    const data = await res.json();
    setHeroData(data);
    setMediaPreview(data.mediaSrc);
  };

  const uploadFile = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/admin/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to upload file");
    }

    const data = await response.json();
    return data.url;
  };

  const handleMediaFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setMediaFile(file);
      const previewUrl = URL.createObjectURL(file);
      setMediaPreview(previewUrl);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      let mediaSrc = heroData.mediaSrc;

      // Upload media file if new file is selected
      if (mediaFile) {
        setUploading(true);
        mediaSrc = await uploadFile(mediaFile);
        setUploading(false);
      }

      // Validate that media source is provided
      if (!mediaSrc) {
        alert("Silakan upload file media terlebih dahulu");
        setSaving(false);
        return;
      }

      await fetch("/api/admin/hero", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...heroData, mediaSrc }),
      });

      alert("Hero section berhasil diperbarui!");
      setMediaFile(null);
      fetchHeroData();
    } catch (error) {
      console.error("Error saving hero data:", error);
      alert("Gagal menyimpan data. Silakan coba lagi.");
    } finally {
      setSaving(false);
      setUploading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Hero Section</h1>
        <p className="text-gray-400">Kelola foto dan teks di hero section landing page</p>
      </div>

      {/* Form */}
      <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden">
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Current Image Preview */}
            {mediaPreview && (
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Foto Hero Saat Ini</label>
                <div className="rounded-lg overflow-hidden">
                  <img src={mediaPreview} alt="Hero Preview" className="w-full h-64 object-cover" />
                </div>
              </div>
            )}

            {/* Upload New Image */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">Upload Foto Baru (Opsional)</label>
              <input
                type="file"
                accept="image/jpeg,image/jpg,image/png,image/webp"
                onChange={handleMediaFileChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-xs text-gray-400 mt-1">Format: JPEG, PNG, WebP - Max 10MB</p>
            </div>

            {/* Alt Text */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">Deskripsi Alt Text</label>
              <input
                type="text"
                value={heroData.mediaAlt}
                onChange={(e) => setHeroData({ ...heroData, mediaAlt: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Contoh: Foto close-up koi berenang"
                required
              />
            </div>

            {/* Badge Text */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">Badge Teks (Judul Badge)</label>
              <input
                type="text"
                value={heroData.badge}
                onChange={(e) => setHeroData({ ...heroData, badge: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Contoh: Tersertifikasi Bloodline Juara"
                required
              />
            </div>

            {/* Badge Subtext */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">Badge Subteks</label>
              <input
                type="text"
                value={heroData.badgeSubtext}
                onChange={(e) => setHeroData({ ...heroData, badgeSubtext: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Contoh: Kemitraan langsung dengan breeder Jepang"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={saving || uploading}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {uploading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Mengupload...</span>
                  </>
                ) : saving ? (
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
              Pastikan foto berkualitas tinggi dan teks yang menarik untuk meningkatkan konversi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
