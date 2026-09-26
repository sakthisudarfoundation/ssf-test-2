import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <Reveal className="max-w-2xl mb-14">
      <div
        className={`inline-flex items-center gap-2 text-xs tracking-widest uppercase font-bold mb-3 ${
          light ? "text-gold-light" : "text-emerald"
        }`}
      >
        <span className="w-5 h-0.5 bg-gold inline-block" />
        {eyebrow}
      </div>
      <h2
        className={`font-display font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={light ? "text-white/75 text-lg" : "text-ink-soft text-lg"}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
