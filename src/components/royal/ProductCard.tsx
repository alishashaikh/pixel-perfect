import { ArrowRight } from "lucide-react";
import { formatPrice, whatsappLink, type Product } from "@/lib/site-data";

export function ProductCard({ product, onOpen }: { product: Product; onOpen: () => void }) {
  return (
    <article
      data-cursor="card"
      onClick={onOpen}
      className="group relative cursor-pointer overflow-hidden border border-gold/15 bg-card/60 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-gold/45"
      style={{ boxShadow: "var(--shadow-deep)" }}
    >
      <span className="pointer-events-none absolute inset-0 z-20 -translate-x-full bg-gradient-to-r from-transparent via-white/8 to-transparent transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-full" />

      <div className="relative aspect-square overflow-hidden bg-onyx">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-70" />
      </div>

      <div className="relative p-6">
        <h3 className="font-display text-2xl text-ivory">{product.name}</h3>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{product.tagline}</p>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-sm tracking-wider text-gold">{formatPrice(product.price)}</span>
          <span className="text-[0.6rem] tracking-[0.2em] text-ivory/45 uppercase">
            {product.size.split(" ").slice(0, 2).join(" ")}
          </span>
        </div>

        <a
          href={whatsappLink(product)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="group/btn mt-6 flex w-full items-center justify-center gap-3 border border-gold/40 px-5 py-3.5 text-[0.6rem] tracking-[0.25em] text-ivory uppercase transition-colors duration-500 hover:bg-gold hover:text-onyx"
        >
          Order on WhatsApp
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform duration-500 group-hover/btn:translate-x-1"
            strokeWidth={1.5}
          />
        </a>
      </div>
    </article>
  );
}
