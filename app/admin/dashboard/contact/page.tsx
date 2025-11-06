"use client";

import { useEffect, useState } from "react";

interface ContactData {
  whatsappNumber: string;
  whatsappTemplate: string;
  address: string;
  schedule: string;
  latitude: string;
  longitude: string;
  mapUrl: string;
}

export default function ContactPage() {
  const [contactData, setContactData] = useState<ContactData>({
    whatsappNumber: "",
    whatsappTemplate: "",
    address: "",
    schedule: "",
    latitude: "",
    longitude: "",
    mapUrl: "",
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchContactData();
  }, []);

  const fetchContactData = async () => {
    const res = await fetch("/api/admin/contact");
    const data = await res.json();
    setContactData(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      await fetch("/api/admin/contact", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactData),
      });

      alert("Informasi kontak berhasil diperbarui!");
      fetchContactData();
    } catch (error) {
      console.error("Error saving contact data:", error);
      alert("Gagal menyimpan data. Silakan coba lagi.");
    } finally {
      setSaving(false);
    }
  };

  const handleCoordinateChange = (lat: string, lng: string) => {
    setContactData({
      ...contactData,
      latitude: lat,
      longitude: lng,
      mapUrl: `https://www.google.com/maps?q=${lat},${lng}`,
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Informasi Kontak</h1>
        <p className="text-gray-400">Kelola informasi kontak dan lokasi farm</p>
      </div>

      {/* Form */}
      <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden">
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* WhatsApp Number */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Nomor WhatsApp
                <span className="text-gray-400 text-xs ml-2">(format: 628123456789)</span>
              </label>
              <input
                type="text"
                value={contactData.whatsappNumber}
                onChange={(e) => setContactData({ ...contactData, whatsappNumber: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="6281234567890"
                required
              />
            </div>

            {/* WhatsApp Template */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">Template Pesan WhatsApp</label>
              <textarea
                value={contactData.whatsappTemplate}
                onChange={(e) => setContactData({ ...contactData, whatsappTemplate: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Halo Asyifa Koi Farm, saya tertarik dengan..."
                rows={3}
                required
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">Alamat Lengkap</label>
              <textarea
                value={contactData.address}
                onChange={(e) => setContactData({ ...contactData, address: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Jl. Raya..."
                rows={2}
                required
              />
            </div>

            {/* Schedule */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">Jadwal Kunjungan</label>
              <input
                type="text"
                value={contactData.schedule}
                onChange={(e) => setContactData({ ...contactData, schedule: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Kunjungan by appointment, Senin–Sabtu 09.00–16.00 WIB"
                required
              />
            </div>

            {/* Coordinates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Latitude</label>
                <input
                  type="text"
                  value={contactData.latitude}
                  onChange={(e) => handleCoordinateChange(e.target.value, contactData.longitude)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="-6.2088"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Longitude</label>
                <input
                  type="text"
                  value={contactData.longitude}
                  onChange={(e) => handleCoordinateChange(contactData.latitude, e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="106.745"
                  required
                />
              </div>
            </div>

            {/* Map URL (auto-generated) */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Map URL
                <span className="text-gray-400 text-xs ml-2">(otomatis dibuat dari koordinat)</span>
              </label>
              <input
                type="text"
                value={contactData.mapUrl}
                readOnly
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-gray-400"
              />
            </div>

            {/* Preview Map */}
            {contactData.latitude && contactData.longitude && (
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Preview Peta</label>
                <div className="relative h-64 overflow-hidden rounded-lg border border-white/20">
                  <iframe
                    title="Preview Peta"
                    src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1000!2d${contactData.longitude}!3d${contactData.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid`}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

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
              Informasi kontak akan ditampilkan di footer dan bagian kunjungan di halaman beranda.
              Pastikan nomor WhatsApp dan koordinat GPS sudah benar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
