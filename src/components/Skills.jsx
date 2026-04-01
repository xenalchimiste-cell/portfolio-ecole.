import Section from './Section';
import { skills } from '../data/skills';

const Skills = () => {
  return (
    <Section id="skills" title="Compétences">
      <div className="grid gap-6 sm:grid-cols-3">
        {skills.map((category) => (
          <div key={category.category} className="p-6 rounded-lg border border-border bg-card">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {category.category}
            </h3>
            <ul className="space-y-3">
              {category.items.map((item) => (
                <li key={item} className="flex items-center text-sm font-medium">
                  <span className="mr-2 h-1 w-1 rounded-full bg-primary/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
