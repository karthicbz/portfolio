import { projects } from "./projectJson";
import "../App.css";
import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Div = styled.div`
  font-family: "Ubuntu", sans-serif;
  & > .projects-head {
    font-size: 2rem;
    filter: blur(2px);
    font-weight: 700;
    color: fuchsia;
    text-align: left;
    padding: 8px 0px 8px 16px;
  }

  & > .mySwiper > div > .swiper-slide {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 8px 8px 0px 16px;

    & > .projectDetails {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      & > .project-title {
        color: fuchsia;
        font-size: 1.2rem;
        filter: blur(1.5px);
      }

      & > p {
        text-align: left;
        color: green;
      }

      & > .project-links {
        display: flex;
        gap: 1rem;

        & > a {
          color: fuchsia;
          text-decoration: none;
          filter: blur(2px);
          animation-name: link-flicker;
          animation-duration: 2s;
          animation-direction: alternate;
          animation-iteration-count: infinite;
        }

        @keyframes link-flicker {
          from {
            filter: blur(2px);
          }

          50% {
            filter: blur(1.5px);
          }

          to {
            filter: blur(1px);
          }
        }
      }
    }

    & > .imageContainer > img {
      border-radius: 10px;
    }

    & > .more-projects {
      width: 100%;
      height: 100vh;

      & > a {
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
        padding-bottom: 53px;
        font-size: 2rem;
        font-weight: 700;
        color: fuchsia;
        filter: blur(2px);
        animation-name: clickme;
        animation-duration: 1s;
        animation-direction: alternate;
        animation-iteration-count: infinite;
      }

      @keyframes clickme {
        from {
          filter: blur(2px);
        }

        50% {
          filter: blur(1.5);
          /* text-decoration: underline; */
        }

        to {
          filter: blur(1px);
        }
      }
    }
  }

  & > .mySwiper > .swiper-pagination {
    position: fixed;
    bottom: 10px;
    & > .swiper-pagination-bullet-active {
      background-color: green;
    }
  }
`;

const SwipableProjects = () => {
  return (
    <Div>
      <p className="projects-head">Projects</p>
      <Swiper className="mySwiper" pagination={true} modules={[Pagination]}>
        {projects.map((project) => {
          return (
            <SwiperSlide key={project.projectTitle} className="swiper-slide">
              <div className="projectDetails">
                <p className="project-title">{project.projectTitle}</p>
                <p>{project.projectDescription}</p>
                <p style={{ fontFamily: "Ubuntu Mono", marginTop: "8px" }}>
                  Build with: {project.buildWith.join(", ")}
                </p>
                <div className="project-links">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                </div>
              </div>
              <div className="imageContainer">
                <img
                  src={project.screenshot}
                  alt="screenshot of project"
                  className="project-image"
                />
              </div>
            </SwiperSlide>
          );
        })}
        <SwiperSlide>
          <div className="more-projects">
            <a
              href="https://github.com/karthicbz"
              target="_blank"
              rel="noopener noreferrer"
            >
              More projects
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </Div>
  );
};

export default SwipableProjects;
