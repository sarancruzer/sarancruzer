import React from "react";
// internal
import { Bluetooth, Connection, Headphone, Sound } from "@svg/index";
import { SingleProductFeature } from "@components/verticle-slider/slider-item-3";

const ElIconBoxStyleTen = () => {
  return (
    <div className="product-wrapper pt-110 pb-80 grey-bg-4">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="tp-section-wrapper-3 mb-60 text-center">
              <span className="tp-section-subtitle-3">
                Minimal & Clean Design
              </span>
              <h3 className="tp-section-title-3">Icon Box Style 7</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <SingleProductFeature
              icon={<Headphone />}
              title="Ergonomic design"
              subtitle="Ultra-comfortable ultra-light"
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <SingleProductFeature
              icon={<Connection />}
              title="Response frequency"
              subtitle="4 Hz – 40,000 Hz"
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <SingleProductFeature
              icon={<Bluetooth />}
              title="Bluetooth"
              subtitle="Bluetooth version 5.2"
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <SingleProductFeature
              icon={<Sound />}
              title="Sound optimization"
              subtitle="HD Noise Canceling Processor QN1,"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElIconBoxStyleTen;
