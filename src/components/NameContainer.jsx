import React from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import side_anim from "../assets/side_anim.json";
import PageTransitionDiv from "./PageTransition";
import square_anim from "../assets/pink_green_squares.json";

const DIV = styled(PageTransitionDiv)`
  background-color: transparent;
  font-family: "Ubuntu", sans-serif;
  max-width: 700px;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 15rem 0 15rem 5rem;
  gap: 10px;

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

  @media screen and (max-width: 414px) {
    position: absolute;
    left: 0;
    bottom: 250px;
    right: 0;
    z-index: 1;
    margin: 0;

    & > p:nth-child(1) {
      text-align: left;
      font-size: 3.5rem;
      filter: blur(1px);
    }

    & > p:nth-child(2) {
      text-align: left;
      font-size: 1.5rem;
      filter: blur(1.5px);
    }
  }
`;

const GridDiv = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 414px) {
    position: relative;
    height: 100%;

    & > .lottie {
      position: absolute;
      bottom: 0;
    }
  }
`;

const NameContainer = () => {
  return (
    <GridDiv>
      <DIV>
        <p>Hello there,</p>
        <p>
          I am Karthick! I like creating <span>clean</span>, responsive and
          functional web apps.
        </p>
      </DIV>

      <Lottie
        className="lottie"
        animationData={window.screen.width <= 414 ? square_anim : side_anim}
        loop={true}
        style={{ maxWidth: "650px" }}
      />
    </GridDiv>
  );
};

export default NameContainer;
