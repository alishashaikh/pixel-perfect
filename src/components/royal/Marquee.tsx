const phrases = [
  "Royal Mist",
  "Signature Fragrance",
  "Timeless Elegance",
  "The Art of Scent",
  "Crafted in Small Batches",
];

export function Marquee() {
  const strip = [...phrases, ...phrases, ...phrases, ...phrases];

  return (
    <div className="relative overflow-hidden border-y border-gold/12 bg-onyx/60 py-5">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {[0, 1].map((k) => (
          <div key={k} className="flex gap-10">
            {strip.map((p, i) => (
              <span
                key={`${k}-${i}`}
                className="font-display flex items-center gap-10 text-sm tracking-[0.3em] text-ivory/45 uppercase"
              >
                {p}
                <span className="h-1 w-1 rounded-full bg-gold/60" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
