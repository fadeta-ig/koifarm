"use client";

import { useEffect, useState } from "react";

interface Testimonial {
  id: string;
  name: string;
  title: string;
  message: string;
}

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    message: "",
  });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    const res = await fetch("/api/admin/testimonials");
    const data = await res.json();
    setTestimonials(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const url = "/api/admin/testimonials";
    const method = editingTestimonial ? "PUT" : "POST";
    const body = editingTestimonial
      ? { ...formData, id: editingTestimonial.id }
      : formData;

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    setIsModalOpen(false);
    setEditingTestimonial(null);
    setFormData({ name: "", title: "", message: "" });
    fetchTestimonials();
  };

  const handleEdit = (testimonial: Testimonial) => {
    setEditingTestimonial(testimonial);
    setFormData({
      name: testimonial.name,
      title: testimonial.title,
      message: testimonial.message,
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Yakin ingin menghapus testimoni ini?")) {
      await fetch(`/api/admin/testimonials?id=${id}`, { method: "DELETE" });
      fetchTestimonials();
    }
  };

  const openAddModal = () => {
    setEditingTestimonial(null);
    setFormData({ name: "", title: "", message: "" });
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Kelola Testimoni</h1>
          <p className="text-gray-400">Tambah, edit, atau hapus testimoni pelanggan</p>
        </div>
        <button
          onClick={openAddModal}
          className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-3 rounded-lg font-medium hover:from-pink-600 hover:to-rose-700 transition-all duration-200 hover:scale-105 shadow-lg flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span>Tambah Testimoni</span>
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className="group bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Quote Icon */}
            <div className="mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="mb-4">
              <p className="text-gray-300 text-sm leading-relaxed italic">
                "{testimonial.message}"
              </p>
            </div>

            {/* Author */}
            <div className="border-t border-white/10 pt-4 mb-4">
              <h3 className="text-white font-semibold">{testimonial.name}</h3>
              <p className="text-gray-400 text-sm">{testimonial.title}</p>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleEdit(testimonial)}
                className="flex-1 bg-pink-500/20 hover:bg-pink-500/30 text-pink-400 py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span>Edit</span>
              </button>
              <button
                onClick={() => handleDelete(testimonial.id)}
                className="flex-1 bg-red-500/20 hover:bg-red-500/30 text-red-400 py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <span>Hapus</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="sticky top-0 bg-slate-800 border-b border-white/10 p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">
                  {editingTestimonial ? "Edit Testimoni" : "Tambah Testimoni"}
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Nama</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Contoh: Hendra S."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Jabatan/Keterangan</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Contoh: Collector Jakarta"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Pesan/Testimoni</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
                  rows={5}
                  placeholder="Tuliskan testimoni pelanggan..."
                  required
                />
                <p className="text-gray-400 text-xs mt-1">
                  {formData.message.length} karakter
                </p>
              </div>

              {/* Preview */}
              {formData.message && (
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <p className="text-gray-400 text-xs mb-2">Preview:</p>
                  <p className="text-gray-300 text-sm italic">"{formData.message}"</p>
                  {formData.name && (
                    <div className="mt-3 pt-3 border-t border-white/10">
                      <p className="text-white font-medium text-sm">{formData.name}</p>
                      <p className="text-gray-400 text-xs">{formData.title}</p>
                    </div>
                  )}
                </div>
              )}

              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 bg-white/10 text-white py-3 px-4 rounded-lg hover:bg-white/20 transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-pink-500 to-rose-600 text-white py-3 px-4 rounded-lg hover:from-pink-600 hover:to-rose-700 transition-all"
                >
                  {editingTestimonial ? "Simpan Perubahan" : "Tambah Testimoni"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
