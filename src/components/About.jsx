import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  animation-name: test;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-direction: normal;

  @keyframes test {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

const About = () => {
  return (
    <DIV>
      <h1 style={{ color: "white" }}>About Page</h1>
    </DIV>
  );
};

export default About;
