import Image from "next/image";

import GlassPanel from "../components/glass-panel";
import SectionHeading from "../components/section-heading";
import { galleryItems, sectionCopies } from "../data/landing-content";

export default function GallerySection() {
  const copy = sectionCopies.gallery;

  return (
    <section id="galeri" className="flex flex-col gap-10">
      <SectionHeading {...copy} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {galleryItems.map((item) => (
          <GlassPanel key={item.title} className="flex flex-col border-white/30 bg-white/20 p-4">
            <div className="flex flex-col gap-4">
              <div className="relative overflow-hidden rounded-2xl">
                <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${item.accent} opacity-70`} aria-hidden />
                {item.media.type === "image" ? (
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.media.src}
                      alt={item.media.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1280px) 260px, (min-width: 1024px) 31vw, (min-width: 640px) 45vw, 90vw"
                    />
                  </div>
                ) : (
                  <div className="relative aspect-video">
                    <video
                      className="h-full w-full rounded-2xl border border-white/40 object-cover"
                      controls
                      preload="metadata"
                      poster={item.media.poster}
                      aria-label={item.media.alt}
                      controlsList="nodownload"
                    >
                      <source src={item.media.src} type="video/mp4" />
                      Browser Anda tidak mendukung video HTML5.
                    </video>
                  </div>
                )}
                <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 shadow">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
            </div>
          </GlassPanel>
        ))}
      </div>
    </section>
  );
}
