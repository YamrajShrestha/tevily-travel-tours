import React from "react";
import { Link } from "react-router-dom";
import "../css/Hero.css";
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
      <div className="tour-search-box">
        <div className="search-fields">
          <div className="field">
            <label>Where to</label>
            <input type="text" placeholder="Enter keywords" />
          </div>
          <div className="field">
            <label>When</label>
            <input type="date" defaultValue="2024-03-19" />
          </div>
          <div className="field">
            <label>Type</label>
            <select>
              <option value="adventure" selected>
                Adventure
              </option>
              <option value="wildlife">Wildlife</option>
              <option value="sightseeing">Sightseeing</option>
            </select>
          </div>
          <div className="find-now">
            <button>FIND NOW</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
