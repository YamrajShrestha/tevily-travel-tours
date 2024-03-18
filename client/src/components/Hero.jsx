import React from "react";
import '../css/Hero.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../css/Header.css";

// import required modules
import { Navigation } from "swiper/modules";

const Hero = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="img-wrapper">
            <img src="/images/main-slider-1.jpg" alt="" />
            <div className="slider-content">
              <h1>Travel & Adventures</h1>
              <p>Where Would You Like To Go?</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-wrapper">
            <img src="images/main-slider-2.jpg" alt="" />
            <div className="slider-content">
              <h1>Travel & Adventures</h1>
              <p>Where Would You Like To Go?</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-wrapper">
            <img src="images/main-slider-3.jpg" alt="" />
            <div className="slider-content">
              <h1>Travel & Adventures</h1>
              <p>Where Would You Like To Go?</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      
    </>
  );
};

export default Hero;
