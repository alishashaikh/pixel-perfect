import { ArrowUpRight } from "lucide-react";
import { collections } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./Reveal";
import { scrollToSection } from "./Navbar";

export function Collections() {
  return (
    <section id="collections" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Curated Houses"
          title="Explore Our Collections"
          subtitle="Fragrances created for every version of you."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {collections.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.12}>
              <button
                data-cursor="card"
                onClick={() => scrollToSection("best-sellers")}
                className="group relative block h-[440px] w-full overflow-hidden border border-gold/15 text-left transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-gold/45 md:h-[520px]"
                style={{ boxShadow: "var(--shadow-deep)" }}
              >
                <img
                  src={c.image}
                  alt={`Royal Mist ${c.title} collection`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent transition-opacity duration-700 group-hover:from-onyx group-hover:via-onyx/55" />
                <div className="absolute inset-x-0 bottom-0 p-7 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2">
                  <h3 className="font-display text-3xl tracking-[0.2em] text-ivory">{c.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{c.caption}</p>
                  <span className="mt-5 flex items-center gap-2 text-[0.6rem] tracking-[0.25em] text-gold uppercase">
                    Discover
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                      strokeWidth={1.5}
                    />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
