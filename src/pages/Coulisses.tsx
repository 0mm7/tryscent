import Layout from "@/components/Layout";
import CTABlock from "@/components/CTABlock";
import { TrendingDown, ShieldCheck, Factory, Truck } from "lucide-react";

const pctRows = [
  { label: "Parfum réel", lux: "2–6%", mp: "33–50%", highlight: true },
  { label: "Flacon & emballage", lux: "8–16%", mp: "8–17%", highlight: false },
  { label: "Marketing & pub", lux: "30–48%", mp: "—", highlight: false },
  { label: "Fabrication UE", lux: "—", mp: "17–25%", highlight: false },
  { label: "Marge distributeur", lux: "25–32%", mp: "—", highlight: false },
  { label: "Logistique directe", lux: "—", mp: "8–12%", highlight: false },
  { label: "Profit / Marge", lux: "10–15%", mp: "8–15%", highlight: false },
];

const euroRows = [
  { label: "Liquide parfumé", lux: "€5–€15", mp: "€4–€6" },
  { label: "Flacon & emballage", lux: "€20–€40", mp: "€1–€2" },
  { label: "Marge distributeur", lux: "€60–€80", mp: "€2–€3" },
  { label: "Marketing de marque", lux: "€80–€120", mp: "€1–€2" },
  { label: "Célébrités & influenceurs", lux: "€10–€30", mp: "€0" },
  { label: "Vous payez", lux: "€250", mp: "€11,99" },
];

const Coulisses = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-background text-foreground py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-4xl">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <span className="bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase px-3 sm:px-4 py-1 sm:py-1.5 rounded-sm whitespace-nowrap">COULISSES</span>
            <span className="text-xs sm:text-sm text-muted-foreground">Guide détaillé · Mars 2026 · 8 min de lecture</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 max-w-4xl">
            Où part l'argent — <span className="text-primary">comparaison honnête</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Nous ouvrons les livres. Voici exactement comment se décompose le prix d'un parfum de luxe vs. Magic Perfume.
          </p>
        </div>
      </div>
    </section>

    {/* Key metrics */}
    <section className="border-b border-border">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-10 lg:px-16 py-6 sm:py-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center">
        {[
          { icon: TrendingDown, stat: "95%", label: "Moins cher" },
          { icon: ShieldCheck, stat: "100%", label: "Conforme UE" },
          { icon: Factory, stat: "33–50%", label: "Budget parfum réel" },
          { icon: Truck, stat: "2–5j", label: "Livraison" },
        ].map(({ icon: Icon, stat, label }, i) => (
          <div key={i} className="flex flex-col items-center gap-1 sm:gap-2">
            <Icon size={18} className="sm:w-6 sm:h-6 text-primary" />
            <p className="text-lg sm:text-2xl md:text-3xl font-bold font-serif leading-tight">{stat}</p>
            <p className="text-xs sm:text-sm text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>
    </section>

    <article className="max-w-7xl mx-auto px-3 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-16 lg:py-20">
      {/* Pct table */}
      <div className="mb-16">
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 sm:mb-8">Répartition du prix en %</h2>
        <div className="overflow-x-auto bg-secondary rounded-2xl border border-border scrollbar-hide">
          <table className="min-w-[420px] w-full text-xs sm:text-sm md:text-base">
            <thead>
              <tr className="border-b-2 border-foreground/20">
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-sans font-medium text-muted-foreground text-xs sm:text-sm"></th>
                <th className="text-center py-2 sm:py-3 px-2 sm:px-4 font-sans font-medium text-muted-foreground text-xs sm:text-sm">Marque luxe</th>
                <th className="text-center py-2 sm:py-3 px-2 sm:px-4 font-sans font-medium relative text-xs sm:text-sm">
                  <span className="text-foreground">Magic Perfume — €11,99</span>
                  <span className="ml-1 sm:ml-2 bg-primary text-primary-foreground text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-sm">95% MOINS CHER</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {pctRows.map((r, i) => (
                <tr key={i} className={`border-b border-border/60 ${r.highlight ? "bg-primary/5" : ""}`}>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 font-medium text-xs sm:text-sm">{r.label}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-muted-foreground text-xs sm:text-sm">{r.lux}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-center font-semibold text-primary text-xs sm:text-sm">{r.mp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4 sm:mt-6 text-xs sm:text-sm text-muted-foreground">
          <p className="flex-1">Source : analyses financières secteur parfumerie, rapports annuels LVMH & Coty</p>
          <p className="flex-1 font-medium text-foreground">La majorité de votre argent va dans le parfum, pas dans la pub.</p>
        </div>
      </div>

      {/* Visual breakdown */}
      <div className="bg-foreground text-background rounded-2xl p-10 lg:p-14 mb-16">
        <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4 text-center">Où va votre argent ?</h2>
        <p className="text-center text-background/60 mb-10 text-lg">Sur un flacon à €250, voici la répartition :</p>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-background/40 mb-6">Marque de luxe — €250</h3>
            {[
              { label: "Marketing & Pub", pct: 40, color: "bg-muted-foreground/50" },
              { label: "Marge distributeur", pct: 28, color: "bg-muted-foreground/40" },
              { label: "Flacon & emballage", pct: 12, color: "bg-muted-foreground/30" },
              { label: "Profit marque", pct: 12, color: "bg-muted-foreground/20" },
              { label: "Parfum réel", pct: 4, color: "bg-primary" },
            ].map((item, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-background/70">{item.label}</span>
                  <span className="font-bold">{item.pct}%</span>
                </div>
                <div className="h-4 bg-background/10 rounded-full overflow-hidden">
                  <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-background/40 mb-6">Magic Perfume — €11,99</h3>
            {[
              { label: "Parfum réel", pct: 45, color: "bg-primary" },
              { label: "Fabrication UE", pct: 20, color: "bg-primary/70" },
              { label: "Flacon & emballage", pct: 12, color: "bg-primary/50" },
              { label: "Logistique directe", pct: 10, color: "bg-primary/40" },
              { label: "Marge", pct: 13, color: "bg-primary/30" },
            ].map((item, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-background/70">{item.label}</span>
                  <span className="font-bold">{item.pct}%</span>
                </div>
                <div className="h-4 bg-background/10 rounded-full overflow-hidden">
                  <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Euro breakdown */}
      <div className="mb-16">
        <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-8">Décomposition par flacon</h2>
        <div className="overflow-x-auto bg-secondary rounded-2xl border border-border">
          <table className="w-full text-base">
            <thead>
              <tr className="border-b-2 border-foreground/20">
                <th className="text-left py-5 px-6 font-sans font-medium text-muted-foreground"></th>
                <th className="text-center py-5 px-6 font-sans font-medium text-muted-foreground">Marque de luxe</th>
                <th className="text-center py-5 px-6 font-sans font-medium text-foreground">Magic Perfume</th>
              </tr>
            </thead>
            <tbody>
              {euroRows.map((r, i) => (
                <tr key={i} className={`border-b border-border/60 ${i === euroRows.length - 1 ? "font-bold text-xl bg-primary/5" : ""}`}>
                  <td className="py-5 px-6 font-medium">{r.label}</td>
                  <td className="py-5 px-6 text-center text-muted-foreground">{r.lux}</td>
                  <td className={`py-5 px-6 text-center ${i === euroRows.length - 1 ? "text-primary text-2xl" : "font-semibold"}`}>{r.mp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom section */}
      <div className="text-center my-16">
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Le luxe, c'est le parfum. Pas le prix.</h2>
        <p className="text-xl text-muted-foreground mb-8">Fabriqué en UE. Mêmes ingrédients. Mêmes normes. 95% moins cher.</p>
      </div>

      <CTABlock headline="Faites le test vous-même. €11,99 le flacon." subtext="Si vous voyez la différence, on vous rembourse." buttonText="Découvrir la collection →" />
    </article>
  </Layout>
);

export default Coulisses;
