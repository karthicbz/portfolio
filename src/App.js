import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import NameContainer from "./components/NameContainer";
import styled from "styled-components";

const GridDiv = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 64px calc(100% - 64px);
`;

function App() {
  return (
    <GridDiv>
      <Navbar />
      <NameContainer />
    </GridDiv>
  );
}

export default App;
