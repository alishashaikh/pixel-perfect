import { useState } from "react";
import { products, type Product } from "@/lib/site-data";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";
import { Reveal, SectionHeading } from "./Reveal";

export function BestSellers() {
  const [active, setActive] = useState<Product | null>(null);

  return (
    <section id="best-sellers" className="relative py-24 sm:py-32">
      <div className="mist-orb top-1/3 left-1/2 h-[600px] w-[600px] -translate-x-1/2 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The House Favourites"
          title="Best Sellers"
          subtitle="Discover the scents everyone remembers."
        />

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.1}>
              <ProductCard product={p} onOpen={() => setActive(p)} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProductModal product={active} onClose={() => setActive(null)} />
    </section>
  );
}
