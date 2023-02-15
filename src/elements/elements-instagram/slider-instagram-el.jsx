import React from "react";
// internal
import { SliderInstagramItems } from "@components/instagram/photography-instagram";

const SliderInstagramEl = () => {
  return (
    <div className="instagram__slider pt-120 pb-110 box-plr-15">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xxl-12">
            <div className="tp-section-wrapper-3 mb-60 text-center">
              <span className="tp-section-subtitle-3">
                Minimal & Clean Design
              </span>
              <h3 className="tp-section-title-3">Instagram Slider Style</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12">
            {/* SliderInstagramItems */}
            <SliderInstagramItems />
            {/* SliderInstagramItems */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderInstagramEl;
