import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { BRAND_STORY_IMAGE } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function BrandStory() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? ["0%", "0%"] : ["-8%", "8%"]);

  return (
    <section id="about" ref={ref} className="grain relative overflow-hidden py-24 sm:py-32">
      <div className="mist-orb top-0 right-0 h-[480px] w-[480px] opacity-50" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="relative h-[420px] overflow-hidden border border-gold/15 sm:h-[540px]">
          <motion.img
            src={BRAND_STORY_IMAGE}
            alt="Perfumer's table with oud wood, rose petals and amber essences"
            loading="lazy"
            width={1280}
            height={1024}
            style={{ y }}
            className="h-[120%] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-onyx/70 to-transparent" />
        </div>

        <div>
          <Reveal>
            <p className="text-[0.65rem] tracking-luxe text-gold/80 uppercase">Our Story</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display mt-6 text-4xl leading-[1.08] text-ivory sm:text-5xl lg:text-6xl">
              More than a fragrance.
              <span className="mt-1 block text-gold-gradient italic">A signature.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-lg text-sm leading-[1.9] text-muted-foreground sm:text-base">
              Royal Mist was created for those who believe fragrance is more than a scent — it is a
              memory, an identity, and an unforgettable presence.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-gold/15 pt-8">
              {[
                ["12+", "Signature blends"],
                ["100%", "Small-batch"],
                ["24h", "Lasting wear"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-display text-3xl text-gold">{n}</dt>
                  <dd className="mt-2 text-[0.6rem] tracking-[0.2em] text-ivory/50 uppercase">
                    {l}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
