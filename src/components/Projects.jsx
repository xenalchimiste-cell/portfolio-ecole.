import Section from './Section';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <Section 
      id="projects" 
      title="Projets" 
      subtitle="Sélection de travaux académiques et personnels."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <div key={project.id} className="group relative flex flex-col p-6 rounded-lg border border-border bg-card hover:border-primary/30 transition-all duration-300">
            <div className="flex-1 space-y-4">
              <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-[10px] font-bold uppercase tracking-widest bg-secondary text-secondary-foreground rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-8 flex items-center justify-between">
              <a 
                href={project.github} 
                className="text-sm font-semibold text-muted-foreground hover:text-foreground underline underline-offset-4 decoration-white/5 transition-colors"
              >
                Code source →
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
