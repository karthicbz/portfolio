import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = styled.div`
  /* box-sizing: border-box; */
  width: 100%;
  background-color: transparent;
  display: grid;
  grid-column: 1/2;
  grid-row: 1/2;
  filter: blur(1px);
  position: fixed;
  z-index: 1;

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
    filter: blur(2px);

    & > a {
      color: fuchsia;
      text-decoration: none;
    }
  }

  & > ul > li:hover {
    border-bottom-color: #48a85a;
    cursor: pointer;
    animation-name: flick;
    animation-duration: 0.1s;
    animation-direction: alternate;
    animation-iteration-count: infinite;

    @keyframes flick {
      from {
        filter: blur(2px);
      }

      50% {
        filter: blur(0);
      }

      to {
        filter: blur(1px);
      }
    }
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
          <Link
            to="mailto:pkarthicbz@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </Link>
        </li>
      </ul>
    </NavBar>
  );
};

export default Navbar;
