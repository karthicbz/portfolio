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
  }
`;

const ProjectListDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 25%);
  gap: 1rem;
  margin-top: 1rem;

  &>div{
    display: flex;
    gap: 2rem;
    /* justify-content: center; */
    &>.imageContainer>.project-image{
      width: 400px;
    }
  }

  &>div:nth-child(1){
    grid-column: 1/2;
    grid-row: 1/2;
  }

  &>div:nth-child(2){
    grid-column: 1/2;
    grid-row: 2/3;
  }

  &>div:nth-child(3){
    grid-column: 1/2;
    grid-row: 3/4;
  }

  &>div:nth-child(4){
    grid-column: 1/2;
    grid-row: 4/5;
  }
`

const Projects = () => {
  return (
    <Div>
      <p className="projects-head">Projects</p>
      <ProjectListDiv className="project-list">
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
              <div className="imageContainer">
                <img src={project.screenshot} alt="screenshot of project" className="project-image"/>
              </div>
            </div>
          );
        })}
      </ProjectListDiv>
    </Div>
  );
};

export default Projects;
