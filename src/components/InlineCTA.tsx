import { Button } from "@/components/ui/button";

const SHOP_URL = "https://magyx.fr/collections/meilleures-ventes";

const InlineCTA = () => (
  <div className="my-8">
    <Button variant="cta" size="lg" asChild>
      <a href={SHOP_URL}>Découvrir la collection — €11,99 →</a>
    </Button>
  </div>
);

export default InlineCTA;
