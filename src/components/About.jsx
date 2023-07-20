import React from "react";
import styled from "styled-components";
import PageTransitionDiv from "./PageTransition";

const DIV = styled(PageTransitionDiv)`
  font-family: "Ubuntu", sans-serif;
  max-width: 700px;
  margin: 0 auto;
  grid-column: 1/2;
  grid-row: 2/3;

  & > .about-me-head {
    font-size: 3rem;
    font-weight: 700;
    color: fuchsia;
    text-align: center;
    filter: blur(2px);
  }

  & > .about-me-para {
    padding: 8px;
    font-size: 1.5rem;
    color: green;
    animation: para-flicker;
    animation-duration: 0.1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    text-align: left;

    @keyframes para-flicker {
      from {
        filter: blur(2px);
      }

      50% {
        filter: blur(0.5px);
      }

      to {
        filter: blur(1px);
      }
    }
  }
`;

const About = () => {
  return (
    <DIV>
      <p className="about-me-head">About me</p>
      <p className="about-me-para">
        I am having an affection with computers sice my childhood and got
        inspired by lot of great opensource apps. so I wanted to wet my feet
        with programming and it was the year 2016 i started learning
        programming. My first programming language was python learned in
        codecademy. I learned basics but i don't know how to proceed further
        with python. However, made some small hobby projects in python and
        pushed into github (don't know how to use git so i basically copy and
        pasted into git).
        <br />
        <br /> Inbetween learned some java and learned c# through Head first c#
        book. That was really a nice book which helped me to understand oop
        principles and It was the year 2018 I found the odinproject website. It
        is the website to learn full stack web development with lot of rich
        content. I started learning web development however due to some issue i
        dropped that course.
        <br />
        <br /> After three years I really wanted to change my career. So again I
        took the full stack development course from the odin project. This time
        there is a lot of change in the website. I learned new concepts in
        webdevelopment and started enjoying webdevelopment. one of the benefit i
        liked about webdevelopment is I can show my work to other person easily.
        I have completed all the projects and learned a lot of stuffs and still
        learning.
        <br />
        <br />
        Aside from that I like to read about stuffs which will blow my mind. I
        use reddit mostly. Currently I continue studying (always!) and look
        forward to join a proactive, innovative team filled with empathic people
        where I can continue growing both personally and professionally.{" "}
      </p>
    </DIV>
  );
};

export default About;
