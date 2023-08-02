import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import proj1 from "../../img/proj1.jpeg";
import proj2 from "../../img/proj2.jpeg";
import proj3 from "../../img/Screenshot (225).png"

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={proj1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={proj2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={proj3} alt="" />
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Portfolio;
