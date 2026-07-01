import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';
import './ProjectCard.css';

type ProjectCardProps = {
  project: Project;
};

function DeviceContent({ project }: ProjectCardProps) {
  return (
    <div className={`project-card__device ${project.screenClassName ?? 'screen--standard'}`}>
      <div className="project-card__screen">
        <img
          src={project.coverSrc}
          alt=""
          className={`project-card__screen-img ${project.coverClassName}`}
          draggable={false}
        />
      </div>
      <img src="/images/macbook.png" alt="" className="project-card__frame" draggable={false} />
    </div>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const shell = project.caseStudyPath ? (
    <Link to={project.caseStudyPath} className="project-card__shell project-card__shell--link">
      <DeviceContent project={project} />
    </Link>
  ) : (
    <div className="project-card__shell">
      <DeviceContent project={project} />
    </div>
  );

  return (
    <article className="project-card">
      {shell}
      <div className="project-card__label">
        <p>{project.title}</p>
      </div>
    </article>
  );
}
