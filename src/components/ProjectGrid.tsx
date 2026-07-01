import { pluginProjects, studyProjects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import './ProjectGrid.css';

export function ProjectGrid() {
  return (
    <section className="project-grid" aria-label="Projects">
      <div className="project-grid__column">
        {studyProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <div className="project-grid__column">
        {pluginProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
