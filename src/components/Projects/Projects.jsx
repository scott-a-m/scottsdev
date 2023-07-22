import React from "react";
import { GiMagnifyingGlass } from "react-icons/gi";
import "./Projects.css";
import {projects, commercialApplications} from "../../data/projects";
import { useSiteContext } from "../../site_context";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const { getProjectData } = useSiteContext();
  return (
    <div className="projects">
      <h1 className="heading" id="projects-heading">
        Work
      </h1>
      <h1 className="sub-heading" id="commercial-applications">Commerical Applications</h1>
      <div className="projects-block">
        {commercialApplications.map((project, index) => {
          return (
            <div
              className="img-container"
              key={index}
              onClick={() => getProjectData(project)}
              data-aos="zoom-in"
              data-aos-duration="500"
            >
              <img
                src={project.url}
                alt={project.name}
                className="project-img"
              />
              <div className="project-card">
                <h2 className="project-name">{project.name}</h2>
                <div className="learn-more">
                  <p className="code">{"<"}</p>
                  <button
                    className="learn-more-text"
                    type="button"
                    onClick={() => getProjectData(project)}
                  >
                    Learn More
                  </button>
                  <p className="code">{">"}</p>
                </div>
              </div>
              <div className="glass-container">
                <GiMagnifyingGlass className="glass" />
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="sub-heading" id="personal-projects">Personal Projects</h1>
      <div className="projects-block">
        {projects.map((project, index) => {
          return (
            <div
              className="img-container"
              key={index}
              onClick={() => getProjectData(project)}
              data-aos="zoom-in"
              data-aos-duration="500"
            >
              <img
                src={project.url}
                alt={project.name}
                className="project-img"
              />
              <div className="project-card">
                <h2 className="project-name">{project.name}</h2>
                <h3 className="project-description">{project.description}</h3>
                <div className="learn-more">
                  <p className="code">{"<"}</p>
                  <button
                    className="learn-more-text"
                    type="button"
                    onClick={() => getProjectData(project)}
                  >
                    Learn More
                  </button>
                  <p className="code">{">"}</p>
                </div>
              </div>
              <div className="glass-container">
                <GiMagnifyingGlass className="glass" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
