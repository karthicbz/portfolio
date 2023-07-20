import React from "react";
import About from "./About";
import Projects from "./Projects";
import Navbar from "./Navbar";
import ErrorPage from "./ErrorPage";
import { useParams } from "react-router-dom";

const OtherPages = () => {
  const { currPath } = useParams();
  return (
    <div>
      <Navbar />
      {currPath === "about" ? (
        <About />
      ) : currPath === "projects" ? (
        <Projects />
      ) : (
        <ErrorPage />
      )}
    </div>
  );
};

export default OtherPages;
