import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, X } from "lucide-react";
import { useEffect } from "react";
import { formatPrice, whatsappLink, type Product } from "@/lib/site-data";

export function ProductModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 z-[115] flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div
            className="absolute inset-0 bg-onyx/85 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={product.name}
            initial={{ opacity: 0, scale: 0.95, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel relative grid max-h-[88vh] w-full max-w-4xl overflow-y-auto md:grid-cols-2"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 rounded-full border border-gold/25 p-2 text-ivory/70 transition-colors hover:text-gold"
            >
              <X className="h-4 w-4" strokeWidth={1.5} />
            </button>

            <div className="relative aspect-square bg-onyx">
              <img
                src={product.image}
                alt={product.name}
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10">
              <p className="text-[0.6rem] tracking-luxe text-gold/80 uppercase">
                {product.tagline}
              </p>
              <h3 className="font-display mt-4 text-3xl leading-tight text-ivory sm:text-4xl">
                {product.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              <dl className="mt-7 space-y-3 border-t border-gold/15 pt-6 text-xs">
                {[
                  ["Top", product.notes.top],
                  ["Heart", product.notes.heart],
                  ["Base", product.notes.base],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-6">
                    <dt className="tracking-[0.2em] text-ivory/50 uppercase">{k}</dt>
                    <dd className="text-right text-ivory/85">{v}</dd>
                  </div>
                ))}
                <div className="flex justify-between gap-6 border-t border-gold/15 pt-3">
                  <dt className="tracking-[0.2em] text-ivory/50 uppercase">Size</dt>
                  <dd className="text-right text-ivory/85">{product.size}</dd>
                </div>
              </dl>

              <p className="font-display mt-7 text-3xl text-gold">{formatPrice(product.price)}</p>

              <a
                href={whatsappLink(product)}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 flex items-center justify-center gap-3 border border-gold/50 px-6 py-4 text-[0.62rem] tracking-[0.25em] text-ivory uppercase transition-colors duration-500 hover:bg-gold hover:text-onyx"
              >
                Order on WhatsApp
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
