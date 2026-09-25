import { Reveal, SectionHeading } from "./Reveal";

const testimonials = [
  {
    quote:
      "Absolutely beautiful fragrance. The packaging and scent feel incredibly premium — it arrived like a gift.",
    name: "Ayesha",
    city: "Karachi",
  },
  {
    quote: "Royal Mist has become my signature fragrance. People ask about it every single time.",
    name: "Hamza",
    city: "Lahore",
  },
  {
    quote:
      "Golden Oud lasts the entire day on me. Warm, refined, never overpowering — exactly what I wanted.",
    name: "Sana",
    city: "Islamabad",
  },
  {
    quote: "Ordering over WhatsApp was effortless and the bottle is genuinely stunning in person.",
    name: "Bilal",
    city: "Rawalpindi",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Kind Words" title="Worn & Remembered" />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 0.12}>
              <figure className="glass-panel h-full p-8 transition-colors duration-700 hover:border-gold/40">
                <span className="font-display block text-5xl leading-none text-gold/40">&ldquo;</span>
                <blockquote className="font-display mt-4 text-xl leading-relaxed text-ivory/90 sm:text-2xl">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3 text-[0.62rem] tracking-[0.22em] text-gold uppercase">
                  {t.name}
                  <span className="h-px w-8 bg-gold/40" />
                  <span className="text-ivory/40">{t.city}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
