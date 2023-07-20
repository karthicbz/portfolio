import React from "react";
import PageTransitionDiv from "./PageTransition";
import styled from "styled-components";
import { projects } from "./projectJson";

const Div = styled(PageTransitionDiv)`
  grid-column: 1/2;
  grid-row: 2/3;
  font-family: "Ubuntu", sans-serif;
  max-width: 800px;
  margin: 0 auto;

  & > .projects-head {
    font-size: 3rem;
    font-weight: 700;
    color: fuchsia;
    filter: blur(2px);
  }
`;

const ProjectListDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 25%);
  gap: 1rem;
  margin-top: 1rem;

  & > div {
    display: flex;
    gap: 2rem;
    transition: transform ease-in-out 0.5s, padding ease-in-out 0.5s;
    padding: 8px;
    animation-name: div-flicker;
    animation-duration: 0.1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    & > .imageContainer > .project-image {
      width: 400px;
      border-radius: 4px;
    }

    & > .projectDetails > .project-title {
      color: fuchsia;
      filter: blur(1px);
      padding-bottom: 8px;
      font-size: 1.2rem;
      font-weight: 700;
    }

    & > .projectDetails > .project-links {
      display: flex;
      gap: 10px;
      padding-top: 8px;

      & > a {
        color: fuchsia;
        filter: blur(2px);
      }

      & > a:hover {
        animation-name: div-flicker;
        animation-duration: 0.1s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
      }
    }

    & > .projectDetails > p {
      color: green;
    }

    &:hover {
      transform: scale(1.3);
      background-color: #152815;
      animation: none;
      /* padding: 8px; */
      z-index: 5;
      /* box-shadow: 1px 1px 4px 1px black; */
    }

    @keyframes div-flicker {
      from {
        filter: blur(2px);
      }

      50% {
        filter: blur(0);
      }

      to {
        filter: blur(1px);
      }
    }
  }

  & > div:nth-child(1) {
    grid-column: 1/2;
    grid-row: 1/2;
  }

  & > div:nth-child(2) {
    /* margin-top: 8px; */
    grid-column: 1/2;
    grid-row: 2/3;
  }

  & > div:nth-child(3) {
    grid-column: 1/2;
    grid-row: 3/4;
  }

  & > div:nth-child(4) {
    grid-column: 1/2;
    grid-row: 4/5;
  }
`;

const Projects = () => {
  return (
    <Div>
      <p className="projects-head">Projects</p>
      <ProjectListDiv className="project-list">
        {projects.map((project) => {
          return (
            <div key={project.projectTitle}>
              <div className="projectDetails">
                <p className="project-title">{project.projectTitle}</p>
                <p>{project.projectDescription}</p>
                <p>{project.buildWith.join("")}</p>
                <div className="project-links">
                  <a href={project.githubLink}>Github</a>
                  <a href={project.liveLink}>Live</a>
                </div>
              </div>
              <div className="imageContainer">
                <img
                  src={project.screenshot}
                  alt="screenshot of project"
                  className="project-image"
                />
              </div>
            </div>
          );
        })}
      </ProjectListDiv>
    </Div>
  );
};

export default Projects;
