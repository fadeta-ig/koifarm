import GlassPanel from "../components/glass-panel";
import SectionHeading from "../components/section-heading";
import { sectionCopies } from "../data/landing-content";

async function getTestimonials() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/content`, {
      next: { revalidate: 60 }
    });
    const data = await res.json();
    return data.testimonials || [];
  } catch (error) {
    console.error("Failed to fetch testimonials:", error);
    return [];
  }
}

export default async function TestimonialsSection() {
  const copy = sectionCopies.testimonials;
  const testimonials = await getTestimonials();

  return (
    <section id="testimoni" className="flex flex-col gap-10">
      <SectionHeading {...copy} />
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
