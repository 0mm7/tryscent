import Layout from "@/components/Layout";
import CTABlock from "@/components/CTABlock";
import { Button } from "@/components/ui/button";
import { Star, ShieldCheck, Truck, Award, ChevronRight, Quote, TrendingDown, Users, FlaskConical, Eye, Sparkles } from "lucide-react";
import heroPerfume from "@/assets/hero-perfume.jpg";

const SHOP_URL = "https://magyx.fr/collections/meilleures-ventes";

const stats = [
  { icon: TrendingDown, title: "Vous payez pour la boîte, pas le parfum", text: "Les maisons de luxe consacrent la majorité de leur budget au marketing, aux célébrités et à l'emballage. Sur un flacon à €250, le parfum réel ne coûte que €5 à €15 à produire.", stat: "€235 sur €250", statLabel: "vont dans le marketing et l'emballage" },
  { icon: Users, title: "Un inconnu vous arrêtera dans la rue", text: "Nos clients nous rapportent régulièrement la même expérience : des compliments spontanés de personnes qui pensent qu'ils portent un parfum de luxe.", stat: "94%", statLabel: "des clients reçoivent des compliments spontanés" },
  { icon: FlaskConical, title: "Mêmes molécules, fabriqué en UE", text: "Les mêmes fournisseurs — Givaudan, IFF, Firmenich, Symrise — fournissent les composés aromatiques aux maisons de luxe et aux fabricants indépendants. Magic Perfume utilise ces mêmes ingrédients.", stat: "100%", statLabel: "Mêmes composés aromatiques. Normes UE." },
  { icon: Eye, title: "Les résultats du test aveugle gênent l'industrie", text: "Nous avons fait tester nos parfums en aveugle à 200 personnes dans des conditions contrôlées. Le résultat a surpris même les experts du secteur.", stat: "73%", statLabel: "des participants ne voient pas la différence" },
  { icon: Sparkles, title: "Votre garde-robe mérite plus d'un parfum", text: "À €250 le flacon, la plupart des gens ne possèdent qu'un seul parfum. À €11,99, vous pouvez varier selon l'humeur, la saison, l'occasion.", stat: "4,2", statLabel: "parfums en moyenne par client Magic Perfume" },
];

const testimonials = [
  { text: "Mon mari croit que je porte encore du Chanel. J'économise €800 par an.", name: "Sophie M.", city: "Paris" },
  { text: "Un inconnu m'a arrêtée au supermarché pour me demander mon parfum.", name: "Emma L.", city: "Lyon" },
  { text: "J'ai 6 flacons Magic Perfume. Avant je ne pouvais m'en offrir qu'un.", name: "Anna K.", city: "Bordeaux" },
];

const Enquete = () => (
  <Layout>
    {/* Hero — full-bleed split */}
    <section className="grid lg:grid-cols-2 min-h-[85vh]">
      <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-24">
        <div className="flex items-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} className="fill-primary text-primary" />
          ))}
          <span className="text-sm text-muted-foreground ml-2 font-medium">4.7 étoiles — 10 400+ avis vérifiés</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
          Vous payez <span className="text-primary">€250</span> pour un flacon qui contient <span className="text-primary">€5</span> de parfum
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
          Une enquête approfondie sur l'industrie du parfum de luxe révèle la marge stupéfiante que paient les consommateurs — et l'alternative fabriquée en UE qui change tout.
        </p>

        <p className="text-primary font-semibold text-base mb-6">● Plus que 47 en stock — vente rapide</p>

        <Button variant="cta" size="xl" className="w-full sm:w-auto text-base px-10 py-4 mb-6" asChild>
          <a href={SHOP_URL}>ACHETER LE MIEN — €11,99 →</a>
        </Button>

        <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><ShieldCheck size={16} /> Garantie 30 jours</span>
          <span className="flex items-center gap-1.5"><Truck size={16} /> Livraison gratuite dès €50</span>
          <span className="flex items-center gap-1.5"><Award size={16} /> Conforme IFRA</span>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <img
          src={heroPerfume}
          alt="Flacons de parfum Magic Perfume"
          className="w-full h-full object-cover min-h-[400px] lg:min-h-full"
          width={896}
          height={1120}
        />
        <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-md rounded-xl p-6 shadow-xl border border-border/50">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-primary text-primary" />
            ))}
          </div>
          <p className="text-base italic leading-relaxed">"On me demande quel parfum je porte à chaque sortie."</p>
          <p className="text-sm text-muted-foreground mt-2 font-medium">— Sophie M., Paris · Achat vérifié ✓</p>
        </div>
      </div>
    </section>

    {/* Social proof bar */}
    <section className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <p className="text-3xl md:text-4xl font-bold font-serif text-primary">10 400+</p>
          <p className="text-sm text-background/60 mt-1">Acheteurs vérifiés</p>
        </div>
        <div>
          <p className="text-3xl md:text-4xl font-bold font-serif text-primary">4.7★</p>
          <p className="text-sm text-background/60 mt-1">Note moyenne</p>
        </div>
        <div>
          <p className="text-3xl md:text-4xl font-bold font-serif text-primary">95%</p>
          <p className="text-sm text-background/60 mt-1">Économie moyenne</p>
        </div>
        <div>
          <p className="text-3xl md:text-4xl font-bold font-serif text-primary">73%</p>
          <p className="text-sm text-background/60 mt-1">Ne voient pas la différence</p>
        </div>
      </div>
    </section>

    {/* Article body */}
    <article className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
      {/* Label + Byline */}
      <div className="max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-sm">EXCLUSIF</span>
          <span className="text-sm text-muted-foreground">Enquête UE · Mars 2026</span>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-base text-muted-foreground border-b border-border pb-8 mb-14">
          <span className="font-medium text-foreground">Par Magic Perfume</span>
          <span>·</span>
          <span>Mars 2026</span>
          <span>·</span>
          <span>4 min de lecture</span>
        </div>
      </div>

      {/* Section 1 — Hook */}
      <div className="max-w-4xl mb-16">
        <p className="text-xl lg:text-2xl leading-[1.8] text-foreground/90">
          Entrez dans n'importe quel grand magasin et vous trouverez un flacon de Creed Aventus à €250. Prenez-le. Sentez-le. Reposez-le. C'est ce que la plupart des gens font. Ce qu'ils ne savent pas, c'est que le liquide dans ce flacon coûte au fabricant environ <strong className="text-primary">€5 à €15</strong> à produire. Le reste ? Vous payez pour le flacon, la boîte, la célébrité qui l'a promu et le loyer du comptoir du grand magasin.
        </p>
      </div>

      {/* Section 2 — Le secret */}
      <div className="max-w-4xl mb-16">
        <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">Le secret des ingrédients</h2>
        <p className="text-xl leading-[1.8] text-foreground/90">
          Les six plus grands fournisseurs d'ingrédients — Givaudan, IFF, Firmenich, Symrise, Mane et Robertet — fournissent les matières premières aux maisons de luxe comme aux fabricants indépendants. Les mêmes molécules aromatiques qui entrent dans un flacon de Kilian à €300 peuvent entrer dans un flacon Magic Perfume à <strong className="text-primary">€11,99</strong>. La différence n'est pas la qualité. C'est le budget marketing.
        </p>
      </div>

      {/* Mid-article CTA — full-width banner */}
      <div className="bg-secondary border border-border rounded-2xl p-8 md:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 mb-16">
        <div>
          <p className="font-serif font-bold text-2xl mb-2">Découvrir la collection</p>
          <p className="text-base text-muted-foreground">Mêmes ingrédients. €11,99 le flacon. Livraison gratuite dès €50.</p>
        </div>
        <Button variant="cta" size="xl" asChild className="shrink-0">
          <a href={SHOP_URL} className="flex items-center gap-2">Voir les parfums <ChevronRight size={18} /></a>
        </Button>
      </div>

      {/* Reasons — large editorial cards */}
      <div className="mb-20">
        <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-12 text-center">5 vérités que l'industrie du luxe ne veut pas que vous sachiez</h2>
        <div className="space-y-6">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="bg-secondary/60 border border-border/60 rounded-2xl overflow-hidden">
                <div className="grid md:grid-cols-[1fr_280px]">
                  <div className="p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon size={20} className="text-primary" />
                      </span>
                      <span className="text-primary font-bold text-lg font-sans">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="font-serif text-2xl lg:text-3xl font-bold mb-4">{s.title}</h3>
                    <p className="text-lg leading-relaxed text-foreground/80">{s.text}</p>
                  </div>
                  <div className="bg-foreground text-background p-8 md:p-10 flex flex-col justify-center">
                    <p className="text-4xl md:text-5xl font-bold text-primary leading-none mb-3 font-serif">{s.stat}</p>
                    <p className="text-sm text-background/70 leading-relaxed">{s.statLabel}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Testimonials — full-width dark section */}
    </article>

    <section className="bg-foreground text-background py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-background/40 mb-3 text-center">AVIS VÉRIFIÉS</p>
        <h2 className="font-serif text-3xl lg:text-4xl font-bold text-center mb-12">Ce que disent nos clients</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-background/5 border border-background/10 rounded-2xl p-8 relative">
              <Quote size={32} className="text-primary/30 absolute top-6 right-6" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg italic leading-relaxed mb-6">"{t.text}"</p>
              <div className="border-t border-background/10 pt-4">
                <p className="text-sm font-semibold">{t.name}, {t.city}</p>
                <p className="text-xs text-primary font-medium mt-1">Achat vérifié ✓</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Popular today + Final CTA */}
    <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-20">
      <div className="bg-secondary border border-border rounded-2xl p-8 mb-14 text-center">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground mb-3">Populaire aujourd'hui</p>
        <p className="text-lg font-medium">Dans l'esprit de : <span className="text-primary font-semibold">Baccarat Rouge · Creed Aventus · Lost Cherry · YSL Libre</span></p>
      </div>

      <CTABlock />
    </section>
  </Layout>
);

export default Enquete;
