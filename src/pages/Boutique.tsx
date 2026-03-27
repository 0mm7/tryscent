import { useState } from "react";
import Layout from "@/components/Layout";
import CTABlock from "@/components/CTABlock";
import { Button } from "@/components/ui/button";
import { Star, ShieldCheck, Factory, Droplets } from "lucide-react";

const SHOP_URL = "https://magyx.fr/collections/meilleures-ventes";

const products = [
  { id: "113", name: "No. 113", inspiration: "Inspiré Angel", gender: "FEMME", discount: "-92%", url: "https://magyx.fr/products/magic-perfume-no-113w", image: "https://magyx.fr/cdn/shop/files/113W_c.webp?v=1771385180&width=1200" },
  { id: "023", name: "No. 023", inspiration: "Inspiré Lady Million", gender: "FEMME", discount: "-92%", url: "https://magyx.fr/products/magic-perfume-no-023w", image: "https://magyx.fr/cdn/shop/files/023W_c.webp?v=1771385152&width=1200" },
  { id: "132", name: "No. 132", inspiration: "Inspiré Black Opium", gender: "FEMME", discount: "-95%", url: "https://magyx.fr/products/magic-perfume-no-132w", image: "https://magyx.fr/cdn/shop/files/132W_c.webp?v=1771385154&width=1200" },
  { id: "192", name: "No. 192", inspiration: "Inspiré Scandal", gender: "FEMME", discount: "-93%", url: "https://magyx.fr/products/magic-perfume-no-192w", image: "https://magyx.fr/cdn/shop/files/192W_c.webp?v=1771385236&width=1200" },
  { id: "366", name: "No. 366", inspiration: "Inspiré Sauvage Elixir", gender: "HOMME", discount: "-93%", url: "https://magyx.fr/products/magic-perfume-no-366m-2", image: "https://magyx.fr/cdn/shop/files/366M_c.webp?v=1771385242&width=1200" },
  { id: "275", name: "No. 275", inspiration: "Inspiré One Million", gender: "HOMME", discount: "-92%", url: "https://magyx.fr/products/magic-perfume-no-275m", image: "https://magyx.fr/cdn/shop/files/275M_c.webp?v=1771385235&width=1200" },
  { id: "247", name: "No. 247", inspiration: "Inspiré Le Male", gender: "HOMME", discount: "-93%", url: "https://magyx.fr/products/magic-perfume-no-247m", image: "https://magyx.fr/cdn/shop/files/247M_c.webp?v=1772212963&width=1200" },
  { id: "350", name: "No. 350", inspiration: "Inspiré Fahrenheit", gender: "HOMME", discount: "-94%", url: "https://magyx.fr/products/magic-perfume-no-350m", image: "https://magyx.fr/cdn/shop/files/350M_c.webp?v=1772212963&width=1200" },
];

const faqs = [
  { q: "Le parfum sent-il vraiment comme l'original ?", a: "Dans les tests en aveugle avec 200 participants, 73% ne voient aucune différence. Nous utilisons les mêmes composés aromatiques que les grandes maisons." },
  { q: "Est-ce légal de fabriquer des parfums qui ressemblent aux grandes marques ?", a: "Oui — les formules de parfums ne sont pas brevetées dans l'UE. Nous ne copions pas — nous créons nos propres formulations dans l'esprit des meilleures fragrances du monde." },
  { q: "Combien de temps dure un flacon ?", a: "Un flacon de 50ml dure environ 3–4 mois avec une utilisation quotidienne normale (2–3 sprays)." },
  { q: "Et si je n'aime pas ?", a: "Retours gratuits sous 30 jours, sans justification." },
];

const Boutique = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section 
        className="relative py-12 sm:py-16 lg:py-24 text-foreground overflow-hidden"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1594882635126-2e7f5d75ecd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8ZW58MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-foreground/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <span className="bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase px-3 sm:px-4 py-1 sm:py-1.5 rounded-sm">COLLECTION</span>
              <span className="text-xs sm:text-sm text-background/70">8 parfums · Qualité EDP · Livraison rapide</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-background">La Collection</h1>
            <p className="text-base sm:text-lg md:text-xl text-background/80 max-w-3xl leading-relaxed mx-auto mb-6 sm:mb-8">
              Chaque parfum. <span className="text-primary font-bold">€11,99</span>. Sans exception. Mêmes ingrédients. Même concentration. 3 achetés, 1 offert.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 text-xs font-bold tracking-widest uppercase text-background/60">
              <span className="inline-flex items-center gap-1 sm:gap-1.5"><Factory size={12} className="sm:w-4 sm:h-4" /> Fabriqué en UE</span>
              <span className="inline-flex items-center gap-1 sm:gap-1.5"><ShieldCheck size={12} className="sm:w-4 sm:h-4" /> Conforme IFRA</span>
              <span className="inline-flex items-center gap-1 sm:gap-1.5"><Droplets size={12} className="sm:w-4 sm:h-4" /> Concentration EDP</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-16 lg:py-20">
        {/* Product grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 xs:gap-4 md:gap-5 lg:gap-6 mb-12 sm:mb-20">
          {products.map((p) => (
            <div key={p.id} className="bg-secondary rounded-2xl overflow-hidden group hover:shadow-xl transition-all border border-border/40 hover:border-primary/30 flex flex-col h-full">
              <div className="relative aspect-square bg-muted flex items-center justify-center overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-[10px] xs:text-xs font-bold px-2 py-1 rounded-md">{p.discount}</span>
                <span className={`absolute top-2 right-2 text-[10px] xs:text-xs font-bold px-2 py-1 rounded-md ${p.gender === "FEMME" ? "bg-pink-100 text-pink-700" : "bg-blue-100 text-blue-700"}`}>{p.gender}</span>
              </div>
              <div className="p-3 xs:p-4 flex flex-col flex-1 justify-between">
                <p className="font-semibold text-sm xs:text-base mb-1 xs:mb-2">{p.name} — {p.inspiration}</p>
                <div className="flex items-center gap-2 mb-3 xs:mb-4">
                  <span className="text-muted-foreground line-through text-xs xs:text-sm">€250</span>
                  <span className="text-primary font-bold text-lg xs:text-xl">€11,99</span>
                </div>
                <Button variant="cta" size="lg" className="w-full text-xs xs:text-sm py-3 rounded-lg mt-auto" asChild>
                  <a href={p.url} className="w-full flex items-center justify-center">Ajouter au panier</a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 mb-20">
          {[
            { num: "10 400+", label: "Acheteurs vérifiés" },
            { num: "4.7★", label: "Note moyenne" },
            { num: "95%", label: "Économie moyenne" },
          ].map((s, i) => (
            <div key={i} className="bg-foreground text-background rounded-2xl p-6 md:p-8 text-center">
              <p className="text-3xl md:text-4xl font-bold font-serif text-primary">{s.num}</p>
              <p className="text-sm text-background/60 mt-2">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Bundle offers */}
        <div className="mb-20">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-center mb-10">Économisez encore plus</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 xs:gap-5">
            {[
              { qty: "1 flacon", price: "€11,99", orig: null, badge: null },
              { qty: "3 flacons", price: "€29,97", orig: "€35,97", badge: "LE PLUS POPULAIRE" },
              { qty: "6 flacons", price: "€49,99", orig: "€71,94", badge: "MEILLEURE VALEUR" },
            ].map((b, i) => (
              <div key={i} className={`relative rounded-2xl p-5 xs:p-8 text-center border-2 transition-all flex flex-col ${b.badge ? "border-primary bg-primary/5 shadow-lg" : "border-border bg-secondary"}`}>
                {b.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] xs:text-xs font-bold px-3 xs:px-4 py-1 xs:py-1.5 rounded-full whitespace-nowrap">{b.badge}</span>
                )}
                <p className="font-semibold text-base xs:text-xl mb-2 xs:mb-3 font-serif">{b.qty}</p>
                <div className="flex items-center justify-center gap-2 xs:gap-3 mb-3 xs:mb-5">
                  {b.orig && <span className="text-muted-foreground line-through text-sm xs:text-lg">{b.orig}</span>}
                  <span className="text-2xl xs:text-3xl font-bold text-primary">{b.price}</span>
                </div>
                <Button variant="cta" size="lg" className="w-full text-xs xs:text-sm py-3 rounded-lg mt-auto" asChild>
                  <a href={SHOP_URL} className="w-full flex items-center justify-center">Acheter</a>
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-secondary rounded-2xl p-10 mb-20 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="fill-primary text-primary" />
            ))}
          </div>
          <p className="text-2xl font-serif italic leading-relaxed max-w-3xl mx-auto mb-4">
            "J'ai 6 flacons Magic Perfume. Avant je ne pouvais m'en offrir qu'un seul parfum de luxe."
          </p>
          <p className="text-sm text-muted-foreground font-medium">— Anna K., Bordeaux · Achat vérifié ✓</p>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-center mb-10">Questions fréquentes</h2>
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-border">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left py-5 flex justify-between items-center font-medium text-base"
              >
                {f.q}
                <span className="text-primary ml-3 text-xl font-bold">{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && <p className="pb-5 text-base text-muted-foreground leading-relaxed">{f.a}</p>}
            </div>
          ))}
        </div>

        <CTABlock />
      </div>
    </Layout>
  );
};

export default Boutique;
