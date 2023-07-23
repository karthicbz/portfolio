import NameContainer from "./NameContainer";
// import Projects from "./Projects";
import SwipableProjects from "./SwipableProjects";
import About from "./About";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import SwipableContact from "./SwipableContact";

import "../App.css";

const SwipeView = () => {
  return (
    <>
      <Swiper direction={"vertical"} className="mySwiper" scrollbar={true}>
        <SwiperSlide>
          <NameContainer />
        </SwiperSlide>
        <SwiperSlide>
          <About />
        </SwiperSlide>
        <SwiperSlide>
          <SwipableProjects />
        </SwiperSlide>
        <SwiperSlide>
          <SwipableContact />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwipeView;
