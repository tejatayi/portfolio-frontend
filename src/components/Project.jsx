import React from "react";
import projectsData from "../data/projectData";
import "./Project.css";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects & Repositories</h2>
      <div className="tile-grid">
        {projectsData.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="tile"
            style={{
              gridColumn: project.gridColumn || "auto",
              gridRow: project.gridRow || "auto",
            }}
          >
            {project.video ? (
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="tile-video"
              />
            ) : (
              <img src={project.image} alt={project.title} />
            )}

            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
