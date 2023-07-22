import React from "react";
import About from "./About";
import Projects from "./Projects";
import Navbar from "./Navbar";
import ErrorPage from "./ErrorPage";
import { useParams } from "react-router-dom";
import { GridDiv } from "../App";
import Contact from "./Contact";

const OtherPages = () => {
  const { currPath } = useParams();
  return (
    <GridDiv>
      <Navbar />
      {currPath === "about" ? (
        <About />
      ) : currPath === "projects" ? (
        <Projects />
      ) : currPath === "contact" ? (
        <Contact />
      ) : (
        <ErrorPage />
      )}
    </GridDiv>
  );
};

export default OtherPages;
