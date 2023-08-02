import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/Screenshot (226).png";
import profilePic2 from "../../img/Screenshot (227).png";
import profilePic3 from "../../img/Screenshot (228).png";
import profilePic4 from "../../img/Screenshot (229).png";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
     
    },
    {
      img: profilePic2,
    
    },
    {
      img: profilePic3,
       
    },
    {
      img: profilePic4,
      
        
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Welcome to my  </span>
        <span>Youtube </span>
        <span>channel</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;