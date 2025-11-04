import Image from "next/image";
import Link from "next/link";

import GlassPanel from "../components/glass-panel";
import SectionHeading from "../components/section-heading";
import { sectionCopies, varietyHighlights } from "../data/landing-content";

export default function VarietySection() {
  const copy = sectionCopies.varieties;

  return (
    <section id="varietas" className="flex flex-col gap-10">
      <SectionHeading {...copy} />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {varietyHighlights.map((variety) => (
          <GlassPanel key={variety.name} className="border-white/40 bg-white/25 p-6">
            <div className="flex flex-col gap-4">
              <div className="aspect-video overflow-hidden rounded-2xl">
                <Image
                  src={variety.media}
                  alt={`Dummy foto varietas ${variety.name}`}
                  width={360}
                  height={240}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-slate-900">{variety.name}</h3>
                <p className="text-sm text-slate-600">{variety.description}</p>
              </div>
              <Link
                href={`/katalog${variety.preset}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 transition hover:text-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                Buka preset filter
                <span aria-hidden>→</span>
              </Link>
            </div>
          </GlassPanel>
        ))}
      </div>
    </section>
  );
}
