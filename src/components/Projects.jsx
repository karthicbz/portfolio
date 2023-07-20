import React from "react";
import PageTransitionDiv from "./PageTransition";
import styled from "styled-components";

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
        <div>
          <div className="projectDetails">
            <p></p>
          </div>
          <div className="projectImg"></div>
        </div>
        <div>
          <div className="projectDetails"></div>
          <div className="projectImg"></div>
        </div>
        <div>
          <div className="projectDetails"></div>
          <div className="projectImg"></div>
        </div>
        <div>
          <div className="projectDetails"></div>
          <div className="projectImg"></div>
        </div>
      </div>
    </Div>
  );
};

export default Projects;
