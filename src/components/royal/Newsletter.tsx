import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "done">("idle");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
    setStatus(valid ? "done" : "error");
  };

  return (
    <section className="relative overflow-hidden border-y border-gold/12 py-24 sm:py-32">
      <div className="mist-orb top-1/2 left-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 opacity-60" />
      <div className="relative mx-auto max-w-2xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-[0.65rem] tracking-luxe text-gold/80 uppercase">The Private Circle</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display mt-6 text-4xl text-ivory sm:text-5xl">Stay in the Mist</h2>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Join our private circle for new fragrance launches, exclusive offers and Royal Mist
            stories.
          </p>
        </Reveal>

        <Reveal delay={0.26}>
          <form
            onSubmit={submit}
            className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row"
            noValidate
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Your email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setStatus("idle");
              }}
              placeholder="Your email address"
              className="flex-1 border border-gold/25 bg-transparent px-5 py-4 text-sm text-ivory placeholder:text-ivory/35 transition-colors duration-500 focus:border-gold/70 focus:outline-none"
            />
            <button
              type="submit"
              className="border border-gold/50 px-8 py-4 text-[0.62rem] tracking-[0.25em] text-ivory uppercase transition-colors duration-500 hover:bg-gold hover:text-onyx"
            >
              Join the Circle
            </button>
          </form>
        </Reveal>

        <p
          aria-live="polite"
          className="mt-4 h-5 text-xs text-muted-foreground"
        >
          {status === "error" && (
            <span className="text-destructive">Please enter a valid email address.</span>
          )}
          {status === "done" && <span className="text-gold">Welcome to the circle.</span>}
        </p>
      </div>
    </section>
  );
}
