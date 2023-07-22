import NameContainer from "./NameContainer";
import Projects from "./Projects";
import About from "./About";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "../App.css";

const SwipeView = () => {
  return (
    <>
      <Swiper direction={"vertical"} className="mySwiper">
        <SwiperSlide>
          <NameContainer />
        </SwiperSlide>
        <SwiperSlide>
          <About />
        </SwiperSlide>
        <SwiperSlide>
          <Projects />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwipeView;
