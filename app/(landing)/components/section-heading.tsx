interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className="mx-auto flex max-w-3xl flex-col gap-2 text-center">
      <span className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-500">
        {eyebrow}
      </span>
      <h2 className="text-balance text-3xl font-semibold text-slate-900 sm:text-4xl">{title}</h2>
      <p className="text-base text-slate-600 sm:text-lg">{description}</p>
    </header>
  );
}
