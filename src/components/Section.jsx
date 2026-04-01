/**
 * Section Component
 * Provides a standardized structure for all portfolio parts.
 * Decouples layout concerns from content logic.
 */


import { useEffect, useRef } from 'react';

const Section = ({ id, title, subtitle, children, className = "" }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`reveal py-12 ${className}`}
    >
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
