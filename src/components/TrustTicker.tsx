const items = [
  "✓ Fabriqué en UE",
  "✓ Conforme IFRA",
  "✓ 10 400+ acheteurs vérifiés",
  "✓ Note 4.7★",
  "✓ Retours gratuits",
  "✓ Livraison 2–5 jours",
];

const TrustTicker = () => (
  <div className="bg-trust text-trust-foreground overflow-hidden py-2">
    <div className="ticker-scroll flex whitespace-nowrap">
      {[...items, ...items, ...items, ...items].map((item, i) => (
        <span key={i} className="mx-6 text-xs tracking-wide font-medium">{item}</span>
      ))}
    </div>
  </div>
);

export default TrustTicker;
