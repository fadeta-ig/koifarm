import { promises as fs } from "fs";
import path from "path";

import GlassPanel from "../components/glass-panel";
import SectionHeading from "../components/section-heading";

async function getContentData() {
  try {
    // Read directly from file system for reliable build-time and runtime data
    const dataPath = path.join(process.cwd(), "app/admin/data/content.json");
    const fileContents = await fs.readFile(dataPath, "utf8");
    const data = JSON.parse(fileContents);
    return {
      testimonials: data.testimonials || [],
      sectionCopy: data.sectionCopies?.testimonials || {
        eyebrow: "Review",
        title: "Testimoni",
        description: "Cerita singkat pelanggan yang puas dengan pendampingan Asyifa Koi Farm.",
      },
    };
  } catch (error) {
    console.error("Failed to fetch testimonials:", error);
    return {
      testimonials: [],
      sectionCopy: {
        eyebrow: "Review",
        title: "Testimoni",
        description: "Cerita singkat pelanggan yang puas dengan pendampingan Asyifa Koi Farm.",
      },
    };
  }
}

export default async function TestimonialsSection() {
  const { testimonials, sectionCopy } = await getContentData();

  return (
    <section id="testimoni" className="flex flex-col gap-10">
      <SectionHeading {...sectionCopy} />
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial: any) => (
          <GlassPanel key={testimonial.id} className="border-white/30 bg-white/20 p-7">
            <div className="flex flex-col gap-3">
              <p className="text-base text-slate-700">"{testimonial.message}"</p>
              <div className="flex flex-col text-sm text-slate-500">
                <span className="font-semibold text-slate-900">{testimonial.name}</span>
                <span>{testimonial.title}</span>
              </div>
            </div>
          </GlassPanel>
        ))}
      </div>
    </section>
  );
}
