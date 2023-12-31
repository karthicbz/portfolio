import React from "react";
import PageTransitionDiv from "./PageTransition";
import styled from "styled-components";
import { projects } from "./projectJson";
import "../App.css";

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

  & > .more-projects {
    display: flex;
    padding: 1rem;
    justify-content: center;

    & > a {
      font-size: 1.2rem;
      font-weight: 700;
      color: fuchsia;
      text-decoration: none;
      filter: blur(2px);
    }

    & > a:hover {
      filter: blur(1px);
      text-decoration: underline;
    }
  }
`;

const ProjectListDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
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
        text-decoration: none;
      }

      & > a:hover {
        animation-name: div-flicker;
        animation-duration: 0.1s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        text-decoration: underline;
      }
    }

    & > .projectDetails > p {
      color: green;
    }

    &:hover {
      transform: scale(1.1);
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
                <p style={{ fontFamily: "Ubuntu Mono", marginTop: "8px" }}>
                  Build with: {project.buildWith.join(", ")}
                </p>
                <div className="project-links">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href={project.liveLink}
                    target="_black"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
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
      <div className="more-projects">
        <a
          href="https://github.com/karthicbz"
          target="_blank"
          rel="noopener noreferrer"
        >
          More projects
        </a>
      </div>
    </Div>
  );
};

export default Projects;
