import { useState, useMemo, useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import CTABlock from "@/components/CTABlock";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingDown, Sparkles } from "lucide-react";

const SHOP_URL = "https://magyx.fr/collections/meilleures-ventes";

const perfumes = [
  { name: "Creed Aventus", price: 250 },
  { name: "Tom Ford Oud Wood", price: 220 },
  { name: "Kilian Love Don't Be Shy", price: 275 },
  { name: "MFK BR540", price: 230 },
  { name: "Dior Sauvage Elixir", price: 150 },
  { name: "Bleu de Chanel Parfum", price: 160 },
  { name: "Baccarat Rouge 540", price: 280 },
  { name: "YSL Libre", price: 130 },
];

const MAGIC_PRICE = 11.99;

const AnimatedBar = ({ width, color, label }: { width: number; color: string; label: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, [width]);

  return (
    <div ref={ref} className="mb-3">
      <div className="text-sm mb-1.5 font-medium">{label}</div>
      <div className="h-8 bg-background rounded-lg overflow-hidden">
        <div className={`h-full ${color} rounded-lg transition-all duration-700`} style={{ width: visible ? `${width}%` : "0%" }} />
      </div>
    </div>
  );
};

const Calculateur = () => {
  const [selected, setSelected] = useState(0);
  const [bottles, setBottles] = useState(3);
  const [years, setYears] = useState(1);

  const result = useMemo(() => {
    const lux = perfumes[selected].price * bottles * years;
    const mp = MAGIC_PRICE * bottles * years;
    const savings = lux - mp;
    const pct = Math.round((savings / lux) * 100);
    return { lux, mp, savings, pct };
  }, [selected, bottles, years]);

  const maxCost = Math.max(result.lux, result.mp);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-background text-foreground py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-sm">CALCULATEUR</span>
              <span className="text-sm text-muted-foreground">Outil gratuit · Calcul en direct · 2 min</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-4xl">
              Combien <span className="text-primary">surpayez-vous</span> ?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Calculez vos économies réelles en passant des parfums de luxe aux alternatives Magic Perfume fabriquées en UE.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-20">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-14">
          {/* Left — inputs */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-5 flex items-center gap-2">
              <Sparkles size={16} className="text-primary" /> Votre parfum actuel
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {perfumes.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className={`text-left px-5 py-4 rounded-xl border text-base font-medium transition-all ${
                    selected === i
                      ? "border-primary bg-primary/10 text-foreground shadow-md"
                      : "border-border bg-secondary text-muted-foreground hover:border-primary/40"
                  }`}
                >
                  <span className="block">{p.name}</span>
                  <span className={`text-sm ${selected === i ? "text-primary font-bold" : "text-muted-foreground"}`}>€{p.price}</span>
                </button>
              ))}
            </div>

            {/* Sliders */}
            <div className="mb-8">
              <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3 block">
                Flacons par an : <span className="text-primary text-lg">{bottles}</span>
              </label>
              <input
                type="range" min={1} max={12} value={bottles}
                onChange={(e) => setBottles(Number(e.target.value))}
                className="w-full accent-primary h-2"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-1"><span>1</span><span>12</span></div>
            </div>

            <div className="mb-8">
              <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3 block">
                Période : <span className="text-primary text-lg">{years} an{years > 1 ? "s" : ""}</span>
              </label>
              <input
                type="range" min={1} max={5} value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full accent-primary h-2"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-1"><span>1 an</span><span>5 ans</span></div>
            </div>
          </div>

          {/* Right — results */}
          <div className="bg-foreground text-background rounded-2xl p-8 lg:p-12 flex flex-col justify-center sticky top-32">
            <div className="flex items-center gap-2 mb-3">
              <Calculator size={20} className="text-primary" />
              <p className="text-xs font-bold uppercase tracking-widest text-background/50">Vos économies totales</p>
            </div>
            <p className="text-6xl lg:text-7xl font-bold text-primary font-serif mb-3">
              €{result.savings.toFixed(2).replace(".", ",")}
            </p>
            <p className="text-base text-background/60 mb-8">
              {result.pct}% économisé · Sur {years} an{years > 1 ? "s" : ""} · {bottles} flacon{bottles > 1 ? "s" : ""} · {perfumes[selected].name}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-background/10 rounded-xl p-5 text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-background/50 mb-2">Coût luxe</p>
                <p className="text-2xl font-bold text-background">€{result.lux.toFixed(2).replace(".", ",")}</p>
                <p className="text-xs text-background/50 mt-1">{bottles}× {perfumes[selected].name}</p>
              </div>
              <div className="bg-primary/20 rounded-xl p-5 text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-background/50 mb-2">Coût Magic Perfume</p>
                <p className="text-2xl font-bold text-primary">€{result.mp.toFixed(2).replace(".", ",")}</p>
                <p className="text-xs text-background/50 mt-1">{bottles}× Magic Perfume</p>
              </div>
            </div>

            <AnimatedBar width={100} color="bg-background/30" label={`Luxe — €${result.lux.toFixed(0)}`} />
            <AnimatedBar width={Math.max(2, (result.mp / maxCost) * 100)} color="bg-primary" label={`Magic Perfume — €${result.mp.toFixed(2)}`} />

            <Button variant="cta" size="xl" className="mt-8 w-full text-base" asChild>
              <a href={SHOP_URL}>Économisez {result.pct}% — Acheter maintenant →</a>
            </Button>
          </div>
        </div>

        <div className="mt-20">
          <CTABlock />
        </div>
      </div>
    </Layout>
  );
};

export default Calculateur;
