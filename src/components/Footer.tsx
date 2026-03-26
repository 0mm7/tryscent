import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Package, CreditCard, RotateCcw, Star } from "lucide-react";

const SHOP_URL = "https://magyx.fr/collections/meilleures-ventes";

const footerLinks = [
  { to: "/enquete", label: "Enquête" },
  { to: "/test-aveugle", label: "Test en Aveugle" },
  { to: "/coulisses", label: "Coulisses" },
  { to: "/calculateur", label: "Calculateur" },
  { to: "/boutique", label: "Boutique" },
];

const trustBadges = [
  { icon: ShieldCheck, label: "Fabriqué en UE" },
  { icon: Package, label: "Conforme IFRA" },
  { icon: CreditCard, label: "Paiement sécurisé" },
  { icon: RotateCcw, label: "Retours gratuits" },
];

const Footer = () => (
  <footer className="bg-foreground text-background">
    {/* Pre-footer CTA */}
    <div className="border-b border-background/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-primary text-primary" />
            ))}
            <span className="text-sm text-background/50 ml-2">4.7/5 — 10 400+ avis</span>
          </div>
          <p className="font-serif text-2xl font-bold">Prêt à essayer ?</p>
          <p className="text-base text-background/60 mt-1">€11,99 le flacon · Retours gratuits sous 30 jours</p>
        </div>
        <Button variant="cta" size="xl" asChild>
          <a href={SHOP_URL}>Découvrir la collection →</a>
        </Button>
      </div>
    </div>

    {/* Trust badges */}
    <div className="border-b border-background/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-6 flex flex-wrap justify-center gap-8">
        {trustBadges.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-background/60 text-sm">
            <Icon size={18} className="text-primary" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Main footer */}
    <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <span className="font-serif text-xl tracking-[0.2em] font-bold block mb-4">MAGIC PERFUME</span>
          <p className="text-sm text-background/50 leading-relaxed max-w-xs">
            Les parfums Magic Perfume sont des créations originales dans l'esprit de grandes fragrances. Magic Perfume n'est pas affilié aux marques mentionnées.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-background/40 mb-5">Navigation</p>
          <ul className="space-y-3">
            {footerLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="text-base text-background/70 hover:text-primary transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Trust */}
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-background/40 mb-5">Garanties</p>
          <ul className="space-y-3">
            {trustBadges.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 text-base text-background/70">
                <Icon size={16} className="text-primary shrink-0" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Boutique */}
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-background/40 mb-5">Boutique</p>
          <a href="https://magyx.fr" className="text-base text-background/70 hover:text-primary transition-colors block mb-3">magyx.fr</a>
          <div className="bg-background/5 rounded-xl p-4 mt-4">
            <p className="text-sm font-medium mb-1">Offre spéciale</p>
            <p className="text-xs text-background/50">3 achetés = 1 offert</p>
            <p className="text-xs text-background/50">Livraison gratuite dès €50</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10 pt-8 text-center">
        <p className="text-sm text-background/40">© {new Date().getFullYear()} Magic Perfume. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
