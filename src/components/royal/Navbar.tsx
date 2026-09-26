import { AnimatePresence, motion } from "motion/react";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const links = [
  { label: "Home", id: "home" },
  { label: "Collections", id: "collections" },
  { label: "About", id: "about" },
  { label: "Best Sellers", id: "best-sellers" },
  { label: "Contact", id: "contact" },
];

export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[100] transition-all duration-700",
        scrolled
          ? "border-b border-gold/15 bg-onyx/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <button
          onClick={() => go("home")}
          className="flex items-center gap-3"
          aria-label="Royal Mist — back to top"
        >
          <img
            src="/logo.png"
            alt="Royal Mist"
            className="aspect-square h-[42px] w-[42px] shrink-0 overflow-hidden rounded-full object-cover ring-1 ring-gold/40 md:h-[52px] md:w-[52px]"
          />
          <span className="font-display text-lg tracking-[0.25em] text-ivory uppercase sm:text-xl">
            Royal Mist
          </span>
        </button>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="group relative text-[0.68rem] tracking-[0.22em] text-ivory/75 uppercase transition-colors duration-500 hover:text-gold"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            aria-label="Search"
            className="rounded-full p-2.5 text-ivory/70 transition-colors duration-500 hover:text-gold"
          >
            <Search className="h-[18px] w-[18px]" strokeWidth={1.25} />
          </button>
          <button
            aria-label="Shopping bag"
            className="rounded-full p-2.5 text-ivory/70 transition-colors duration-500 hover:text-gold"
          >
            <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.25} />
          </button>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-full p-2.5 text-ivory/80 transition-colors hover:text-gold lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={1.25} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.25} />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-gold/10 bg-onyx/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col px-6 py-4">
              {links.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className="w-full border-b border-gold/10 py-4 text-left text-xs tracking-[0.22em] text-ivory/80 uppercase last:border-0"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
