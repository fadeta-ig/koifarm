import GlassPanel from "../components/glass-panel";
import SectionHeading from "../components/section-heading";
import { sectionCopies, testimonials } from "../data/landing-content";

export default function TestimonialsSection() {
  const copy = sectionCopies.testimonials;

  return (
    <section id="testimoni" className="flex flex-col gap-10">
      <SectionHeading {...copy} />
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <GlassPanel key={testimonial.name} className="border-white/30 bg-white/20 p-7">
            <div className="flex flex-col gap-3">
              <p className="text-base text-slate-700">“{testimonial.message}”</p>
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
