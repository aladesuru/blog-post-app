import React from "react";

import sliderImage1 from "../../assets/images/slider-image-1.jpg";
import sliderImage2 from "../../assets/images/slider-image-2.jpg";
import sliderImage3 from "../../assets/images/slider-image-3.jpg";
import sliderImage4 from "../../assets/images/slider-image-4.jpg";
import sliderImage5 from "../../assets/images/slider-image-5.jpg";

const HeroArea = () => {
  return (
    <div className="hero-container">
      <div className="slider-container">
        <div className="slider">
          <img src={sliderImage1} alt="slider one" />
        </div>
        <div className="slider">
          <img src={sliderImage2} alt="slider two" />
        </div>
        <div className="slider">
          <img src={sliderImage3} alt="slider three" />
        </div>
        <div className="slider">
          <img src={sliderImage4} alt="slider four" />
        </div>
        <div className="slider">
          <img src={sliderImage5} alt="slider five" />
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
