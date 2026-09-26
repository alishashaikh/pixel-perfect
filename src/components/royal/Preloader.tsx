import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";


export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-onyx"
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mist-orb h-[420px] w-[420px] animate-glow-pulse" />
          <motion.div
            className="relative flex flex-col items-center gap-6"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="/logo.png"
              alt=""
              aria-hidden="true"
              className="aspect-square h-16 w-16 rounded-full object-cover"
            />
            <span className="font-display text-gold-gradient text-4xl tracking-luxe uppercase">
              Royal Mist
            </span>
            <motion.span
              className="block h-px w-40 bg-gold/60"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
