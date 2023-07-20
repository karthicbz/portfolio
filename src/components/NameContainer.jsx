import React from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import side_anim from "../assets/side_anim.json";
import PageTransitionDiv from "./PageTransition";

const DIV = styled(PageTransitionDiv)`
  /* height: 100%; */
  background-color: transparent;
  font-family: "Ubuntu", sans-serif;
  max-width: 700px;
  padding: 1rem;
  border-radius: 10px;
  grid-column: 1/2;
  grid-row: 2/3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 15rem 0 15rem 5rem;
  gap: 10px;
  /* filter: blur(2px); */

  & > p:first-child {
    font-size: 5rem;
    font-weight: 700;
    color: fuchsia;
    filter: blur(2px);
  }

  & > p {
    font-size: 2rem;
    font-weight: 400;
    color: green;
    filter: blur(2px);
  }
`;

const NameContainer = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <DIV>
        <p>Hello there,</p>
        <p>
          I am Karthick! I like creating <span>clean</span>, responsive and
          functional web apps.
        </p>
      </DIV>
      <Lottie
        animationData={side_anim}
        loop={true}
        style={{ maxWidth: "650px" }}
      />
    </div>
  );
};

export default NameContainer;
