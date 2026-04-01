/**
 * Section Component
 * Provides a standardized structure for all portfolio parts.
 * Decouples layout concerns from content logic.
 */


const Section = ({ id, title, subtitle, children, className = "" }) => {
  return (
    <section id={id} className={`space-y-8 animate-in fade-in duration-700 scroll-mt-20 ${className}`}>
      {(title || subtitle) && (
        <div className="space-y-2">
          {title && (
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
};

export default Section;
