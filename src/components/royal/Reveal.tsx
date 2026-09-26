import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
<<<<<<< HEAD
=======
  delay = 0,
  y = 28,
>>>>>>> 2e7a0abfd80cfb4476e5d0150d9a8f22d06b373c
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
<<<<<<< HEAD
  return <div className={className}>{children}</div>;
=======
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
>>>>>>> 2e7a0abfd80cfb4476e5d0150d9a8f22d06b373c
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <Reveal>
          <p className="text-[0.65rem] tracking-luxe text-gold/80 uppercase">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className="font-display mt-5 text-4xl leading-[1.1] text-ivory sm:text-5xl md:text-6xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {subtitle}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.2}>
        <div className="hairline mx-auto mt-8 w-28" />
      </Reveal>
    </div>
  );
}
