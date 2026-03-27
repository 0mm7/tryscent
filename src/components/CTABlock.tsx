import { Button } from "@/components/ui/button";
import { ShieldCheck, RotateCcw, Package, Gift, ArrowRight } from "lucide-react";

const SHOP_URL = "https://magyx.fr/collections/meilleures-ventes";

interface CTABlockProps {
  headline?: string;
  subtext?: string;
  buttonText?: string;
}

const trustItems = [
  { icon: ShieldCheck, label: "Fabriqué en UE" },
  { icon: Package, label: "Conforme IFRA" },
  { icon: RotateCcw, label: "Retours gratuits" },
  { icon: Gift, label: "3 achetés = 1 offert" },
];

const CTABlock = ({
  headline = "Faites le test vous-même.",
  subtext = "Si vous voyez la différence, on vous rembourse. Mais 73% des testeurs n'y arrivent pas.",
  buttonText = "Acheter maintenant",
}: CTABlockProps) => (
  <div className="bg-foreground text-background rounded-2xl overflow-hidden">
    <div className="flex flex-col lg:grid lg:grid-cols-[1.2fr_1fr]">
      {/* Left — content */}
      <div className="p-5 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3 sm:mb-4">OFFRE LIMITÉE</p>
        <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">{headline}</h3>
        <p className="text-background/70 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">{subtext}</p>
        <Button variant="cta" size="xl" asChild className="w-full sm:w-auto text-base sm:text-lg">
          <a href={SHOP_URL} className="flex items-center justify-center gap-2 w-full">{buttonText} <ArrowRight size={18} /></a>
        </Button>
      </div>

      {/* Right — price + trust */}
      <div className="bg-background/5 p-5 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center items-center text-center border-t lg:border-t-0 lg:border-l border-background/10">
        <p className="text-xs uppercase tracking-widest text-background/40 mb-3 sm:mb-4 font-bold">Comparez le prix</p>
        {/* Price comparison */}
        <div className="w-full max-w-xs sm:max-w-sm mb-6 sm:mb-8">
          <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between bg-background/5 rounded-xl p-3 sm:p-4 mb-2 sm:mb-3 gap-2 xs:gap-0">
            <span className="text-xs sm:text-sm text-background/60">Marque de luxe</span>
            <span className="text-background/40 line-through text-xl sm:text-2xl font-bold">€250</span>
          </div>
          <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between bg-primary/20 rounded-xl p-3 sm:p-4 border border-primary/30 gap-2 xs:gap-0">
            <span className="text-xs sm:text-sm font-medium">Magic Perfume</span>
            <span className="text-primary text-2xl sm:text-4xl md:text-5xl font-bold font-serif">€11,99</span>
          </div>
        </div>

        <p className="text-background/40 text-xs sm:text-sm mb-6 sm:mb-8">50ml · EDP · Fabriqué en UE</p>

        <div className="grid grid-cols-2 gap-2 sm:gap-4 w-full max-w-xs sm:max-w-sm">
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-1 sm:gap-2 text-background/70 text-xs sm:text-sm">
              <Icon size={16} className="text-primary shrink-0" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default CTABlock;
