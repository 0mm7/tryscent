const UrgencyBar = () => (
  <div className="sticky top-0 z-50 bg-background text-foreground py-1.5 sm:py-2.5 text-center font-medium tracking-wide border-b border-border">
    <div className="text-xs sm:text-sm whitespace-nowrap overflow-x-auto px-2 sm:px-4 scrollbar-hide">
      <span className="inline-block">
        <span className="mr-1">⚡</span> Vente du Jour — 30% de réduction · Se termine à minuit · Code appliqué automatiquement
      </span>
    </div>
  </div>
);

export default UrgencyBar;
