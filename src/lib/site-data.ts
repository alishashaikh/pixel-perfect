
import heroimg1 from "@/assets/hero-img1.jpg";
import logoAsset from "@/assets/royal-mist-logo.jpg.asset.json";
import productNoir from "@/assets/product-noir.jpg";
import productRose from "@/assets/product-rose.jpg";
import productAmber from "@/assets/product-amber.jpg";
import productVelvet from "@/assets/product-velvet.jpg";
import collectionHer from "@/assets/collection-her.jpg";
import collectionHim from "@/assets/collection-him.jpg";
import collectionSignature from "@/assets/collection-signature.jpg";
import brandStory from "@/assets/brand-story.jpg";

export const WHATSAPP_NUMBER = "923XXXXXXXXX";


export const HERO_IMAGE = heroimg1;


export const LOGO_IMAGE = logoAsset.url;
export const BRAND_STORY_IMAGE = brandStory;

export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  size: string;
  image: string;
  notes: { top: string; heart: string; base: string };
};

export const products: Product[] = [
  {
    id: "golden-oud",
    name: "Royal Mist Golden Oud",
    tagline: "The signature house fragrance",
    description:
      "Our founding scent — a warm cascade of aged oud and golden amber, finished with saffron and a breath of soft leather.",
    price: 6499,
    size: "100 ml Eau de Parfum",

    image: heroimg1,

    notes: { top: "Saffron • Bergamot", heart: "Oud • Rose", base: "Amber • Leather" },
  },
  {
    id: "noir",
    name: "Royal Mist Noir",
    tagline: "Deep, smoky, unmistakable",
    description:
      "A midnight composition of smoked woods and black pepper resting on a bed of vetiver and dark musk.",
    price: 5499,
    size: "100 ml Eau de Parfum",
    image: productNoir,
    notes: { top: "Black Pepper • Cardamom", heart: "Smoked Wood • Iris", base: "Vetiver • Musk" },
  },
  {
    id: "rose",
    name: "Royal Mist Rose",
    tagline: "Velvet petals at dusk",
    description:
      "Damask rose absolute layered over lychee and pink pepper, softened by a creamy sandalwood drydown.",
    price: 5299,
    size: "100 ml Eau de Parfum",
    image: productRose,
    notes: { top: "Lychee • Pink Pepper", heart: "Damask Rose • Peony", base: "Sandalwood • Musk" },
  },
  {
    id: "amber",
    name: "Royal Mist Amber",
    tagline: "Warmth that lingers",
    description:
      "Golden amber resin melted with vanilla bean and tonka, wrapped in a glow of honeyed benzoin.",
    price: 5799,
    size: "100 ml Eau de Parfum",
    image: productAmber,
    notes: { top: "Mandarin • Cinnamon", heart: "Amber Resin • Benzoin", base: "Vanilla • Tonka" },
  },
  {
    id: "velvet",
    name: "Royal Mist Velvet",
    tagline: "Opulent and nocturnal",
    description:
      "Plum and violet folded into patchouli and cocoa — a fragrance with the weight of dark velvet.",
    price: 5999,
    size: "100 ml Eau de Parfum",
    image: productVelvet,
    notes: { top: "Plum • Violet", heart: "Patchouli • Cocoa", base: "Vanilla • Oakmoss" },
  },
  {
    id: "signature",
    name: "Royal Mist Signature",
    tagline: "For every version of you",
    description:
      "A luminous, wearable blend of citrus, jasmine and white musk — refined enough for every hour of the day.",
    price: 4999,
    size: "100 ml Eau de Parfum",
    image: collectionSignature,
    notes: { top: "Bergamot • Neroli", heart: "Jasmine • Freesia", base: "White Musk • Cedar" },
  },
];

export const collections = [
  {
    id: "her",
    title: "FOR HER",
    caption: "Florals, amber and quiet power.",
    image: collectionHer,
  },
  {
    id: "him",
title: "FOR HIM",
    caption: "Woods, smoke and clean depth.",
    image: collectionHim,
  },
  {
    id: "signature",
    title: "SIGNATURE",
    caption: "The house blends, worn by everyone.",
    image: collectionSignature,
  },
];

export const formatPrice = (price: number) => `Rs. ${price.toLocaleString("en-PK")}`;

export const whatsappLink = (product?: Product) => {
  const message = product
    ? `Hello Royal Mist! I would like to order:\n\nProduct: ${product.name}\nSize: ${product.size}\nPrice: ${formatPrice(product.price)}\n\nPlease share the order details.`
    : `Hello Royal Mist! I'd like to know more about your fragrances.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
