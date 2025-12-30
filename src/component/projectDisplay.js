import React from "react";

const ProjectDisplay = ({ project }) => {
  const displayKeywords = (keywords) => {
    return keywords.map((keyword) => (
      <span className="tag" key={`${project.title}-${keyword}`}>
        {keyword}
      </span>
    ));
  };

  return (
    <div className="card">
      <h3>{project.title}</h3>
      <div className="tag-list">{displayKeywords(project.keywords)}</div>
      {project.description ? <p>{project.description}</p> : null}
      <div className="inline-links">
        {project.github_link ? (
          <a
            className="inline-link"
            href={project.github_link}
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repository
          </a>
        ) : null}
        {project.document_link ? (
          <a
            className="inline-link"
            href={project.document_link}
            target="_blank"
            rel="noreferrer"
          >
            Project Report
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectDisplay;
