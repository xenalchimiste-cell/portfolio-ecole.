import projects from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";

function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title">
      <h2 id="projects-title">Projets</h2>

      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}

export default Projects;