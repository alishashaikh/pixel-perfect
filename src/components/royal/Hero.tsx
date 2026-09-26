import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { HERO_IMAGE } from "@/lib/site-data";
import { scrollToSection } from "./Navbar";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduced = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduced || !window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 18;
      const y = (e.clientY / window.innerHeight - 0.5) * 14;
      setOffset({ x, y });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduced]);

  const lines = ["YOUR SIGNATURE", "SHOULD BE", "UNFORGETTABLE."];

  return (
    <section
      id="home"
      className="grain relative flex min-h-[92vh] items-center overflow-hidden pt-28 pb-16 md:min-h-screen md:pt-24"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-veil)" }}
      />
      <div className="mist-orb top-[-10%] right-[-5%] h-[520px] w-[520px] animate-glow-pulse" />
      <div className="mist-orb bottom-[-20%] left-[-10%] h-[420px] w-[420px] opacity-60" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
            className="text-[0.65rem] tracking-luxe text-gold/85 uppercase"
          >
            The Art of Fragrance
          </motion.p>

          <h1 className="font-display mt-7 text-[2.6rem] leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
            {lines.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.1, delay: 0.3 + i * 0.14, ease }}
                >
                  {i === 2 ? <span className="text-gold-gradient italic">{line}</span> : line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease }}
            className="mx-auto mt-7 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base lg:mx-0"
          >
            Discover refined fragrances crafted to leave an unforgettable impression.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.95, ease }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <button
              onClick={() => scrollToSection("collections")}
              className="group relative w-full overflow-hidden border border-gold/50 px-9 py-4 text-[0.65rem] tracking-[0.25em] text-ivory uppercase transition-colors duration-700 hover:text-onyx sm:w-auto"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-gold transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
              <span className="relative flex items-center justify-center gap-3">
                Explore Collection
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </span>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="group relative w-full px-2 py-4 text-[0.65rem] tracking-[0.25em] text-ivory/75 uppercase transition-colors duration-500 hover:text-gold sm:w-auto"
            >
              Our Story
              <span className="absolute bottom-3 left-2 h-px w-0 bg-gold transition-all duration-500 group-hover:w-[calc(100%-1rem)]" />
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.25, ease }}
          className="relative mx-auto w-full max-w-[520px]"
          style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
        >
          <div className="mist-orb top-1/2 left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 animate-glow-pulse" />
          <img
            src="/hero.png"
            alt="Royal Mist Golden Oud perfume bottle surrounded by golden blossoms"
            width={1024}
            height={1024}
            className="relative w-full rounded-sm object-contain"
            style={{ filter: "drop-shadow(0 40px 70px rgba(0,0,0,0.75))" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
