import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = styled.div`
  /* box-sizing: border-box; */
  width: 100%;
  background-color: #cdffd6;
  display: grid;
  grid-column: 1/2;
  grid-row: 1/2;

  & > ul {
    display: flex;
    list-style-type: none;
    gap: 1rem;
    font-family: "Ubuntu", sans-serif;
    font-size: 1.3rem;
    padding: 10px;
    justify-content: end;
    color: #275d2e;
  }

  & > ul > li {
    padding: 8px;
    border: 2px solid transparent;

    & > a {
      color: #152815;
      text-decoration: none;
    }
  }

  & > ul > li:hover {
    border-bottom-color: #48a85a;
    cursor: pointer;
  }
`;

const Navbar = () => {
  return (
    <NavBar>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/Resume">Resume</Link>
        </li>
        <li>mode</li>
      </ul>
    </NavBar>
  );
};

export default Navbar;
