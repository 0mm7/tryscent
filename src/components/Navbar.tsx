import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const SHOP_URL = "https://magyx.fr/collections/meilleures-ventes";

const links = [
  { to: "/enquete", label: "Enquête" },
  { to: "/test-aveugle", label: "Test en Aveugle" },
  { to: "/coulisses", label: "Coulisses" },
  { to: "/calculateur", label: "Calculateur" },
  { to: "/boutique", label: "Boutique" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-[42px] z-40 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 h-14 gap-4">
        <Link to="/" className="font-serif text-base md:text-lg tracking-[0.25em] font-bold text-foreground whitespace-nowrap flex-shrink-0">
          MAGIC PERFUME
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === l.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Button variant="cta" size="sm" asChild>
            <a href={SHOP_URL}>Acheter</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-4 pb-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium text-foreground hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
          <Button variant="cta" size="default" className="w-full mt-2" asChild>
            <a href={SHOP_URL}>Acheter</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
