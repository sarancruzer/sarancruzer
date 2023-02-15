import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import thumb_img from "@assets/img/slider/11/slider-thumb-1.png";
import { RightArrowTwo, SliderHighlightShape } from "@svg/index";

const VerticalSliderItemOne = () => {
  return (
    <React.Fragment>
      <div className="slider__bg-text">
        <h3>headphone</h3>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-6 col-10">
            <div className="slider__content-11 mb-80 p-relative z-index-1">
              <h3 className="slider__title-11">Sony Airpods Max</h3>
              <div className="slider__product mb-35">
                <span className="slider__product-price new-price">
                  $320
                  <SliderHighlightShape />{" "}
                </span>
                <span className="slider__product-price old-price">$320</span>
              </div>
              <div className="slider__btn-11">
                <Link href="/product-details" className="tp-btn-9">
                  Shop Now
                  <span>{<RightArrowTwo />}</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-6 col-sm-6 col-2">
            <div className="slider__thumb-11 p-relative">
              <Image
                src={thumb_img}
                alt="image"
                priority
                style={{ width: "auto", height: "auto" }}
              />

              <div className="slider__product-tooltip">
                <div className="tp-tooltip-single">
                  <div className="tp-tooltip-circle">
                    <div className="tp-tooltip-effect-1"></div>
                    <div className="tp-tooltip-effect-2"></div>
                  </div>
                  <div className="tp-tooltip-content transition-3">
                    <h5>Active noise control</h5>
                    <p>Mint Green</p>
                  </div>
                </div>
                <div className="tp-tooltip-single tp-tooltip-two">
                  <div className="tp-tooltip-circle">
                    <div className="tp-tooltip-effect-1"></div>
                    <div className="tp-tooltip-effect-2"></div>
                  </div>
                  <div className="tp-tooltip-content transition-3">
                    <h5>Active noise control</h5>
                    <p>Mint Green</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default VerticalSliderItemOne;
