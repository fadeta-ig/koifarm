"use client";

import { useEffect, useState } from "react";

interface Variety {
  id: string;
  name: string;
  description: string;
  preset: string;
  media: string;
}

export default function VarietiesPage() {
  const [varieties, setVarieties] = useState<Variety[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingVariety, setEditingVariety] = useState<Variety | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    preset: "",
    media: "",
  });

  useEffect(() => {
    fetchVarieties();
  }, []);

  const fetchVarieties = async () => {
    const res = await fetch("/api/admin/varieties");
    const data = await res.json();
    setVarieties(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const url = "/api/admin/varieties";
    const method = editingVariety ? "PUT" : "POST";
    const body = editingVariety
      ? { ...formData, id: editingVariety.id }
      : formData;

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    setIsModalOpen(false);
    setEditingVariety(null);
    setFormData({ name: "", description: "", preset: "", media: "" });
    fetchVarieties();
  };

  const handleEdit = (variety: Variety) => {
    setEditingVariety(variety);
    setFormData({
      name: variety.name,
      description: variety.description,
      preset: variety.preset,
      media: variety.media,
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Yakin ingin menghapus varietas ini?")) {
      await fetch(`/api/admin/varieties?id=${id}`, { method: "DELETE" });
      fetchVarieties();
    }
  };

  const openAddModal = () => {
    setEditingVariety(null);
    setFormData({ name: "", description: "", preset: "", media: "" });
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Kelola Varietas</h1>
          <p className="text-gray-400">Tambah, edit, atau hapus varietas koi</p>
        </div>
        <button
          onClick={openAddModal}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 hover:scale-105 shadow-lg flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span>Tambah Varietas</span>
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {varieties.map((variety, index) => (
          <div
            key={variety.id}
            className="group bg-white/5 backdrop-blur-xl rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={variety.media}
                alt={variety.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <div className="p-4">
              <h3 className="text-xl font-semibold text-white mb-2">{variety.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{variety.description}</p>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleEdit(variety)}
                  className="flex-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => handleDelete(variety.id)}
                  className="flex-1 bg-red-500/20 hover:bg-red-500/30 text-red-400 py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  <span>Hapus</span>
                </button>
              </div>
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
                  {editingVariety ? "Edit Varietas" : "Tambah Varietas"}
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
                <label className="block text-sm font-medium text-gray-200 mb-2">Nama Varietas</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Contoh: Kohaku"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Deskripsi</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  rows={3}
                  placeholder="Deskripsi singkat varietas"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Preset Filter</label>
                <input
                  type="text"
                  value={formData.preset}
                  onChange={(e) => setFormData({ ...formData, preset: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Contoh: ?variety=Kohaku&grade=Show"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">URL Media</label>
                <input
                  type="url"
                  value={formData.media}
                  onChange={(e) => setFormData({ ...formData, media: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://example.com/image.jpg"
                  required
                />
              </div>

              {formData.media && (
                <div className="rounded-lg overflow-hidden">
                  <img src={formData.media} alt="Preview" className="w-full h-48 object-cover" />
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
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all"
                >
                  {editingVariety ? "Simpan Perubahan" : "Tambah Varietas"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
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
