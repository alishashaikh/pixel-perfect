import { Facebook, Instagram, Music2 } from "lucide-react";
import { LOGO_IMAGE, whatsappLink } from "@/lib/site-data";
import { scrollToSection } from "./Navbar";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "Collections", id: "collections" },
  { label: "About", id: "about" },
  { label: "Best Sellers", id: "best-sellers" },
  { label: "Contact", id: "contact" },
];

export function Footer() {
  return (
    <footer id="contact" className="grain relative overflow-hidden bg-onyx pt-20 pb-10">
      <div className="mist-orb top-[-40%] left-1/2 h-[520px] w-[520px] -translate-x-1/2 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
<<<<<<< HEAD
                src="/logo.png"
=======
                src={LOGO_IMAGE}
>>>>>>> 2e7a0abfd80cfb4476e5d0150d9a8f22d06b373c
                alt="Royal Mist"
                className="aspect-square h-[52px] w-[52px] shrink-0 overflow-hidden rounded-full object-cover ring-1 ring-gold/40"
              />
              <span className="font-display text-xl tracking-[0.25em] text-ivory uppercase">
                Royal Mist
              </span>
            </div>
            <p className="font-display mt-6 max-w-xs text-2xl leading-snug text-ivory/70 italic">
              Leave a memory wherever you go.
            </p>
            <div className="mt-8 flex gap-3">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Music2, label: "TikTok" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="rounded-full border border-gold/25 p-3 text-ivory/65 transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:text-gold"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.25} />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-[0.6rem] tracking-luxe text-gold/80 uppercase">Explore</h3>
            <ul className="mt-6 space-y-3">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollToSection(l.id)}
                    className="group relative text-sm text-ivory/65 transition-colors duration-500 hover:text-gold"
                  >
                    {l.label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-[0.6rem] tracking-luxe text-gold/80 uppercase">Orders</h3>
            <p className="mt-6 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
              Every order is placed personally over WhatsApp — tell us the scent and we handle the
              rest.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex border border-gold/45 px-6 py-3.5 text-[0.6rem] tracking-[0.25em] text-ivory uppercase transition-colors duration-500 hover:bg-gold hover:text-onyx"
            >
              Message us
            </a>
            <ul className="mt-8 space-y-2 text-xs text-ivory/45">
              <li>
                <a href="#" className="transition-colors hover:text-gold">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-gold">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-16" />
        <p className="mt-6 text-center text-[0.65rem] tracking-[0.2em] text-ivory/35 uppercase">
          © 2026 Royal Mist. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
