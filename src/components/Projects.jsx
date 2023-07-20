import React from "react";
import PageTransitionDiv from "./PageTransition";
import styled from "styled-components";
import { projects } from "./projectJson";

const Div = styled(PageTransitionDiv)`
  grid-column: 1/2;
  grid-row: 2/3;
  font-family: "Ubuntu", sans-serif;

  & > .projects-head {
    font-size: 3rem;
    font-weight: 700;
    color: fuchsia;
  }
`;

const Projects = () => {
  return (
    <Div>
      <p className="projects-head">Projects</p>
      <div>
        {projects.map((project) => {
          return (
            <div key={project.projectTitle}>
              <div className="projectDetails">
                <p>{project.projectTitle}</p>
                <p>{project.projectDescription}</p>
                <p>{project.buildWith.join("")}</p>
                <a href={project.githubLink}>Github</a>
                <a href={project.liveLink}>Live</a>
              </div>
              <div>
                <img src={project.screenshot} alt="screenshot of project" />
              </div>
            </div>
          );
        })}
      </div>
    </Div>
  );
};

export default Projects;
