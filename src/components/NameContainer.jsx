import React from "react";
import styled from "styled-components";

const DIV = styled.div`
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
  filter: blur(2px);

  & > p:first-child {
    font-size: 5rem;
    font-weight: 700;
    color: fuchsia;
  }

  & > p {
    font-size: 2rem;
    font-weight: 400;
    color: green;
  }
`;

const NameContainer = () => {
  return (
    <DIV>
      <p>Hello there,</p>
      <p>
        I am Karthick! I like creating clean, responsive and functional web
        apps.
      </p>
    </DIV>
  );
};

export default NameContainer;