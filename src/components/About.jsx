import Section from './Section';

const About = () => {
  return (
    <Section id="about" title="À propos">
      <div className="grid gap-8 sm:grid-cols-2">
        <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
          <p>
            Anciennement élève en Bac Professionnel Systèmes Numériques (SN), je poursuis actuellement mon parcours en 
            <strong className="text-foreground"> BTS SIO option SLAM</strong> (Solutions Logicielles et Applications Métier) à Lyon Ynov Campus.
          </p>
          <p>
            Mon parcours m&apos;a permis d&apos;acquérir de solides bases techniques, tant en infrastructure qu&apos;en développement. 
            Aujourd&apos;hui, mon intérêt se porte principalement sur le <strong className="text-foreground">développement back-end</strong>, 
            où j&apos;apprécie concevoir des architectures performantes et structurées.
          </p>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
          <p>
            Ma vision du développement repose sur la rigueur, la scalabilité et l&apos;apprentissage continu. 
            Je ne me contente pas de coder une fonctionnalité ; je cherche à comprendre comment elle s&apos;intègre 
            dans un écosystème global, de la base de données au déploiement.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
