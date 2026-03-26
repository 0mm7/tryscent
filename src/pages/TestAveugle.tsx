import { useEffect, useRef, useState } from "react";
import Layout from "@/components/Layout";
import CTABlock from "@/components/CTABlock";
import { Star, Users, BarChart3, Award } from "lucide-react";

const bars = [
  { label: "Ne voient aucune différence", pct: 73, color: "bg-primary" },
  { label: "Préfèrent Magic Perfume", pct: 14, color: "bg-primary" },
  { label: "Préfèrent la marque de luxe", pct: 13, color: "bg-muted-foreground/40" },
];

const AnimatedBar = ({ label, pct, color }: { label: string; pct: number; color: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-8">
      <div className="flex justify-between text-base mb-2">
        <span className="font-medium">{label}</span>
        <span className="font-bold text-xl">{pct}%</span>
      </div>
      <div className="h-10 bg-background rounded-lg overflow-hidden">
        <div
          className={`h-full ${color} rounded-lg transition-all duration-1000 ease-out`}
          style={{ width: visible ? `${pct}%` : "0%" }}
        />
      </div>
    </div>
  );
};

const TestAveugle = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-background text-foreground py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-sm">TEST EN AVEUGLE</span>
            <span className="text-sm text-muted-foreground">Étude indépendante · Mars 2026 · 5 min de lecture</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            73% des gens ne voient <span className="text-primary">pas la différence</span> entre un parfum à €250 et un à €11,99
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Nous avons fait tester nos parfums en aveugle à 200 personnes. Le résultat a choqué même les experts de l'industrie.
          </p>
        </div>
      </div>
    </section>

    {/* Stats strip */}
    <section className="border-b border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-8 grid grid-cols-3 gap-6 text-center">
        <div className="flex flex-col items-center gap-2">
          <Users size={24} className="text-primary" />
          <p className="text-2xl md:text-3xl font-bold font-serif">200</p>
          <p className="text-sm text-muted-foreground">Participants</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <BarChart3 size={24} className="text-primary" />
          <p className="text-2xl md:text-3xl font-bold font-serif">73%</p>
          <p className="text-sm text-muted-foreground">Aucune différence</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Award size={24} className="text-primary" />
          <p className="text-2xl md:text-3xl font-bold font-serif">87%</p>
          <p className="text-sm text-muted-foreground">Égal ou supérieur</p>
        </div>
      </div>
    </section>

    <article className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-20">
      {/* Video section */}
      <div className="mb-16">
        <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">Regardez le test en vidéo</h2>
        <div className="relative w-full rounded-2xl overflow-hidden bg-foreground/5 aspect-video shadow-xl">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Test en aveugle Magic Perfume"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <p className="text-sm text-muted-foreground mt-4 text-center">
          200 participants testent Magic Perfume vs. marques de luxe en conditions contrôlées.
        </p>
      </div>

      {/* Study results */}
      <div className="grid lg:grid-cols-2 gap-10 mb-16">
        <div>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4">Les résultats parlent d'eux-mêmes</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Dans des conditions contrôlées, nous avons présenté à chaque participant deux bandes parfumées non étiquetées — l'une provenant d'une marque de luxe, l'autre de Magic Perfume. Les résultats ont été vérifiés par un comité indépendant.
          </p>
          <div className="bg-stat border-l-4 border-primary rounded-r-lg p-6">
            <p className="text-xl font-serif font-bold leading-relaxed">
              87% des participants ont jugé Magic Perfume <span className="text-primary">égal ou supérieur</span> au parfum de luxe.
            </p>
          </div>
        </div>
        <div className="bg-secondary rounded-2xl p-8 lg:p-10">
          <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-8">Résultats — 200 participants · Conditions contrôlées</p>
          {bars.map((b, i) => (
            <AnimatedBar key={i} {...b} />
          ))}
        </div>
      </div>

      {/* How it works */}
      <div className="bg-foreground text-background rounded-2xl p-10 lg:p-14 mb-16">
        <h2 className="font-serif text-3xl font-bold mb-10 text-center">Comment fonctionne le test</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Sélection", text: "Deux bandes parfumées non étiquetées — une marque de luxe et Magic Perfume — sont préparées à l'aveugle." },
            { step: "02", title: "Évaluation", text: "Le participant sent chaque bande et évalue la qualité, la tenue et sa préférence sans connaître les marques." },
            { step: "03", title: "Résultat", text: "73% des participants n'ont pas pu identifier quelle bande était la marque de luxe. 14% ont préféré Magic Perfume." },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <span className="text-4xl font-bold text-primary font-serif block mb-4">{s.step}</span>
              <h3 className="font-serif text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-base text-background/70 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-secondary rounded-2xl p-10 mb-16 text-center">
        <div className="flex justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} className="fill-primary text-primary" />
          ))}
        </div>
        <p className="text-2xl font-serif italic leading-relaxed max-w-3xl mx-auto mb-4">
          "J'ai participé au test. J'étais convaincue de pouvoir reconnaître mon Chanel. Je me suis trompée."
        </p>
        <p className="text-sm text-muted-foreground font-medium">— Marie D., participante · Bordeaux</p>
      </div>

      <CTABlock
        headline="Faites le test vous-même. €11,99 le flacon."
        subtext="Si vous voyez la différence, on vous rembourse. Mais 87% des testeurs n'y arrivent pas."
      />
    </article>
  </Layout>
);

export default TestAveugle;
