import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col justify-center min-h-[60vh] py-10 scroll-mt-20">
      <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground">
          Andréas Giacomello
        </h1>
        <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl">
          Étudiant développeur – BTS SIO SLAM à Lyon Ynov Campus. 
          Passionné par le développement back-end et les architectures robustes.
        </p>
        <div className="flex gap-4 pt-4">
          <a
            href="#projects"
            className="px-6 py-3 text-sm font-semibold text-primary-foreground bg-primary rounded-md hover:opacity-90 transition-opacity"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="px-6 py-3 text-sm font-semibold border border-border bg-background rounded-md hover:bg-muted transition-colors"
          >
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
