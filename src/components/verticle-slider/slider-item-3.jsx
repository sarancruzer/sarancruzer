import React from "react";
import Image from "next/image";
// internal
import thumb_img from "@assets/img/slider/11/slider-thumb-3.png";
import {
  Battery,
  Bluetooth,
  Connection,
  Headphone,
  Sound,
  TimeThree,
} from "@svg/index";

// single product feature
export function SingleProductFeature({ icon, title, subtitle }) {
  return (
    <div className="product__features-item mb-35">
      <div className="product__features-icon">
        <span>{icon}</span>
      </div>
      <div className="product__features-content">
        <h3 className="product__features-title">{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

const VerticalSliderItemThree = () => {
  return (
    <React.Fragment>
      <div className="slider__bg-text">
        <h3>headphone</h3>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-sm-10">
            <div className="product__features-wrapper p-relative z-index-1">
              <h3 className="product-section-title">Specifications</h3>

              <div className="product__features-item-wrapper">
                <div className="row justify-content-between">
                  <div className="col-lg-7 col-md-6 col-sm-6 col-6">
                    <SingleProductFeature
                      icon={<Headphone />}
                      title="Ergonomic design"
                      subtitle="Ultra-comfortable ultra-light"
                    />
                  </div>
                  <div className="col-lg-5 col-md-6 col-sm-6 col-6">
                    <SingleProductFeature
                      icon={<Connection />}
                      title="Response frequency"
                      subtitle="4 Hz – 40,000 Hz"
                    />
                  </div>
                  <div className="col-lg-7 col-md-6 col-sm-6 col-6">
                    <SingleProductFeature
                      icon={<Bluetooth />}
                      title="Bluetooth"
                      subtitle="Bluetooth version 5.2"
                    />
                  </div>
                  <div className="col-lg-5 col-md-6 col-sm-6 col-6">
                    <SingleProductFeature
                      icon={<Sound />}
                      title="Sound optimization"
                      subtitle="HD Noise Canceling Processor QN1,"
                    />
                  </div>
                  <div className="col-lg-7 col-md-6 col-sm-6 col-6">
                    <SingleProductFeature
                      icon={<TimeThree />}
                      title="Charging time"
                      subtitle="2 hours ( Full charge)"
                    />
                  </div>
                  <div className="col-lg-5 col-md-6 col-sm-6 col-6">
                    <SingleProductFeature
                      icon={<Battery />}
                      title="Battery life"
                      subtitle="30 hours of continuous music"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-4 col-sm-2">
            <div className="product__features-thumb text-end">
              <Image src={thumb_img} alt="slider thumb" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default VerticalSliderItemThree;
