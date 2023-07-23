import React from "react";
import styled from "styled-components";
import PageTransitionDiv from "./PageTransition";
import { aboutText } from "./aboutText";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

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
    text-align: left;
    filter: blur(2px);
  }

  & > .about-me-para {
    padding: 8px;
    font-size: 1.5rem;
    color: green;
    animation: para-flicker;
    animation-duration: 0.2s;
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

  @media screen and (max-width: 414px) {
    & > .about-me-head {
      font-size: 2rem;
      padding: 8px 0px 8px 16px;
    }

    & > .mySwiper > div > .swiper-slide > .about-me-para {
      font-size: 1.3rem;
      padding: 8px 8px 8px 16px;
      text-align: left;
      color: green;
      height: 100vh;
      animation-name: para-flicker;
      animation-duration: 0.2s;
      animation-direction: alternate;
      animation-iteration-count: infinite;
    }

    & > .mySwiper > .swiper-pagination {
      position: fixed;
      bottom: 10px;
      & > .swiper-pagination-bullet-active {
        background-color: fuchsia;
      }
    }

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
      {window.screen.width <= 414 ? (
        <Swiper className="mySwiper" pagination={true} modules={[Pagination]}>
          {aboutText.map((about) => {
            return (
              <SwiperSlide className="swiper-slide" key={about.id}>
                <p className="about-me-para">{about.text}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        aboutText.map((about) => {
          return (
            <p key={about.id} className="about-me-para">
              {about.text}
              <br></br>
              {/* <br></br> */}
            </p>
          );
        })
      )}
    </DIV>
  );
};

export default About;
