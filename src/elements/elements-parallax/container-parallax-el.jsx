import React from "react";
import { Parallax } from "react-parallax";
// internal
import bg_2 from "@assets/img/slider/slider-1.jpg";

const ContainerParallaxEl = () => {
  return (
    <div className="elements__parallax-area pt-110 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-section-wrapper-3 mb-60 text-center">
              <span className="tp-section-subtitle-3">
                Clean & Minimal Design
              </span>
              <h3 className="tp-section-title-3">Container Parallax</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <Parallax
              bgImage={bg_2.src}
              className="elements__parallax-item p-relative z-index-1 jarallax"
            ></Parallax>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerParallaxEl;
