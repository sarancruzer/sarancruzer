import React from "react";
import Image from "next/image";
// internal
import slider_thumb from "@assets/img/slider/11/slider-thumb-4.png";
import SocialLinks from "@components/social";

const VerticalSliderItemFour = () => {
  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <React.Fragment>
      <div className="slider__bg-text">
        <h3>headphone</h3>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-8 col-sm-9">
            <div className="subscribe__wrapper-11 pr-25">
              <p>
                Subscribe to <br /> get updated news
              </p>
              <h3 className="subscribe__title-11">Subscribe Our Newsletter</h3>
              <form onSubmit={handleSubmit}>
                <div className="subscribe__input-11">
                  <input type="email" placeholder="Enter your mail here" />
                  <button type="submit">Subscribe</button>
                </div>
              </form>
              <div className="subscribe__social">
                <SocialLinks/>
              </div>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-6 col-lg-6 col-md-4 col-sm-3">
            <div className="subscribe__thumb text-end">
              <div className="subscribe__thumb-animation-1"></div>
              <div className="subscribe__thumb-animation-2"></div>
              <Image src={slider_thumb} alt="slider thumb" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default VerticalSliderItemFour;
