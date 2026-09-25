import { Reveal, SectionHeading } from "./Reveal";

const layers = [
  { label: "Top Notes", notes: ["Bergamot", "Citrus", "Saffron"], moment: "The first impression" },
  { label: "Heart Notes", notes: ["Rose", "Jasmine", "Oud"], moment: "The character" },
  { label: "Base Notes", notes: ["Amber", "Musk", "Vanilla"], moment: "The memory left behind" },
];

export function FragranceNotes() {
  return (
    <section className="relative overflow-hidden border-y border-gold/12 py-24 sm:py-32">
      <div className="mist-orb bottom-[-30%] left-1/4 h-[520px] w-[520px] opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Composition"
          title="A Fragrance in Three Acts"
          subtitle="Each Royal Mist blend unfolds slowly, layer by layer, across the hours of a day."
        />

        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {layers.map((l, i) => (
            <Reveal key={l.label} delay={i * 0.15}>
              <div className="group relative text-center">
                <span className="font-display block text-6xl text-gold/25 transition-colors duration-700 group-hover:text-gold/45">
                  0{i + 1}
                </span>
                <div className="hairline mx-auto my-7 w-16" />
                <h3 className="text-[0.68rem] tracking-luxe text-gold uppercase">{l.label}</h3>
                <ul className="mt-6 space-y-3">
                  {l.notes.map((n) => (
                    <li key={n} className="font-display text-2xl text-ivory/90">
                      {n}
                    </li>
                  ))}
                </ul>
                <p className="mt-7 text-xs text-muted-foreground italic">{l.moment}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
