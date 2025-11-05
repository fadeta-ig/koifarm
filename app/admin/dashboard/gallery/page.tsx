"use client";

import { useEffect, useState } from "react";

interface GalleryItem {
  id: string;
  title: string;
  tag: string;
  accent: string;
  mediaType: "image" | "video";
  mediaSrc: string;
  mediaPoster?: string;
  mediaAlt: string;
}

export default function GalleryPage() {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    tag: "Ready",
    accent: "from-blue-400 to-blue-600",
    mediaType: "image" as "image" | "video",
    mediaSrc: "",
    mediaPoster: "",
    mediaAlt: "",
  });

  const tagOptions = ["Ready", "Reserved", "Sold"];
  const accentOptions = [
    { name: "Blue", value: "from-blue-400 to-blue-600" },
    { name: "Purple", value: "from-purple-400 to-purple-600" },
    { name: "Orange", value: "from-orange-400 via-rose-400 to-sky-400" },
    { name: "Sky", value: "from-sky-500 via-indigo-500 to-purple-500" },
    { name: "Rose", value: "from-rose-400 via-orange-300 to-amber-400" },
    { name: "Slate", value: "from-slate-500 via-slate-700 to-slate-900" },
  ];

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    const res = await fetch("/api/admin/gallery");
    const data = await res.json();
    setGallery(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const url = "/api/admin/gallery";
    const method = editingItem ? "PUT" : "POST";
    const body = editingItem ? { ...formData, id: editingItem.id } : formData;

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    setIsModalOpen(false);
    setEditingItem(null);
    resetForm();
    fetchGallery();
  };

  const handleEdit = (item: GalleryItem) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      tag: item.tag,
      accent: item.accent,
      mediaType: item.mediaType,
      mediaSrc: item.mediaSrc,
      mediaPoster: item.mediaPoster || "",
      mediaAlt: item.mediaAlt,
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Yakin ingin menghapus item ini?")) {
      await fetch(`/api/admin/gallery?id=${id}`, { method: "DELETE" });
      fetchGallery();
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      tag: "Ready",
      accent: "from-blue-400 to-blue-600",
      mediaType: "image",
      mediaSrc: "",
      mediaPoster: "",
      mediaAlt: "",
    });
  };

  const openAddModal = () => {
    setEditingItem(null);
    resetForm();
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Kelola Galeri</h1>
          <p className="text-gray-400">Tambah, edit, atau hapus item galeri</p>
        </div>
        <button
          onClick={openAddModal}
          className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-700 transition-all duration-200 hover:scale-105 shadow-lg flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span>Tambah Item</span>
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gallery.map((item, index) => (
          <div
            key={item.id}
            className="group bg-white/5 backdrop-blur-xl rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative h-56 overflow-hidden">
              {item.mediaType === "image" ? (
                <img
                  src={item.mediaSrc}
                  alt={item.mediaAlt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <video
                  src={item.mediaSrc}
                  poster={item.mediaPoster}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                />
              )}
              <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${item.accent}`}>
                {item.tag}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="text-white font-semibold">{item.title}</h3>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleEdit(item)}
                  className="flex-1 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
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
                  {editingItem ? "Edit Item Galeri" : "Tambah Item Galeri"}
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
                <label className="block text-sm font-medium text-gray-200 mb-2">Judul</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Contoh: Tosai Kohaku 32cm"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Status</label>
                  <select
                    value={formData.tag}
                    onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    {tagOptions.map((tag) => (
                      <option key={tag} value={tag} className="bg-slate-700">
                        {tag}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Tipe Media</label>
                  <select
                    value={formData.mediaType}
                    onChange={(e) => setFormData({ ...formData, mediaType: e.target.value as "image" | "video" })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="image" className="bg-slate-700">Image</option>
                    <option value="video" className="bg-slate-700">Video</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Warna Accent</label>
                <select
                  value={formData.accent}
                  onChange={(e) => setFormData({ ...formData, accent: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {accentOptions.map((accent) => (
                    <option key={accent.value} value={accent.value} className="bg-slate-700">
                      {accent.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">URL Media</label>
                <input
                  type="url"
                  value={formData.mediaSrc}
                  onChange={(e) => setFormData({ ...formData, mediaSrc: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="https://example.com/image.jpg"
                  required
                />
              </div>

              {formData.mediaType === "video" && (
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">URL Poster (opsional)</label>
                  <input
                    type="url"
                    value={formData.mediaPoster}
                    onChange={(e) => setFormData({ ...formData, mediaPoster: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="https://example.com/poster.jpg"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Deskripsi Alt</label>
                <input
                  type="text"
                  value={formData.mediaAlt}
                  onChange={(e) => setFormData({ ...formData, mediaAlt: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Deskripsi untuk accessibility"
                  required
                />
              </div>

              {formData.mediaSrc && formData.mediaType === "image" && (
                <div className="rounded-lg overflow-hidden">
                  <img src={formData.mediaSrc} alt="Preview" className="w-full h-48 object-cover" />
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
                  className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 px-4 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all"
                >
                  {editingItem ? "Simpan Perubahan" : "Tambah Item"}
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
