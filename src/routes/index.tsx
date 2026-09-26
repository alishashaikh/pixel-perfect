import { createFileRoute } from "@tanstack/react-router";
import { Preloader } from "@/components/royal/Preloader";
import { CustomCursor } from "@/components/royal/CustomCursor";
import { ScrollProgress } from "@/components/royal/ScrollProgress";
import { Navbar } from "@/components/royal/Navbar";
import { Hero } from "@/components/royal/Hero";
import { Marquee } from "@/components/royal/Marquee";
import { Collections } from "@/components/royal/Collections";
import { BestSellers } from "@/components/royal/BestSellers";
import { BrandStory } from "@/components/royal/BrandStory";
import { FragranceNotes } from "@/components/royal/FragranceNotes";
import { Testimonials } from "@/components/royal/Testimonials";
import { Newsletter } from "@/components/royal/Newsletter";
import { Footer } from "@/components/royal/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Royal Mist — Luxury Fragrances" },
      {
        name: "description",
        content:
          "Discover Royal Mist — refined fragrances crafted to become your unforgettable signature.",
      },
      { property: "og:title", content: "Royal Mist — Luxury Fragrances" },
      {
        property: "og:description",
        content:
          "Discover Royal Mist — refined fragrances crafted to become your unforgettable signature.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Collections />
        <BrandStory />
        <BestSellers />
        <FragranceNotes />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
