function ProjectCard({ project }) {
    return (
      <article>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
  
        <p>
          <strong>Stack :</strong> {project.stack.join(", ")}
        </p>
  
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          Voir sur GitHub
        </a>
      </article>
    );
  }
  
  export default ProjectCard;