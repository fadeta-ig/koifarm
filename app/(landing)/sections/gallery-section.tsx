import Image from "next/image";

import GlassPanel from "../components/glass-panel";
import SectionHeading from "../components/section-heading";
import { galleryItems, sectionCopies } from "../data/landing-content";

export default function GallerySection() {
  const copy = sectionCopies.gallery;

  return (
    <section id="galeri" className="flex flex-col gap-10">
      <SectionHeading {...copy} />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {galleryItems.map((item) => (
          <GlassPanel key={item.title} className="border-white/30 bg-white/20 p-4">
            <div className="flex flex-col gap-4">
              <div className="relative overflow-hidden rounded-2xl">
                <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${item.accent} opacity-80`} aria-hidden />
                {item.media.type === "image" ? (
                  <Image
                    src={item.media.src}
                    alt={item.media.alt}
                    width={320}
                    height={240}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <video
                    className="aspect-video w-full rounded-2xl"
                    controls
                    preload="metadata"
                    poster={item.media.poster}
                  >
                    <source src={item.media.src} type="video/mp4" />
                    Browser Anda tidak mendukung video HTML5.
                  </video>
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
