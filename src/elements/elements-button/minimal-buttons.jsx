import Link from "next/link";
import React from "react";
// internal
import ArrowRightThree from "@svg/arrow-right-3";

const MinimalButtons = () => {
  return (
    <div className="tp-button-wrapper pb-110">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-section-wrapper-3 mb-50 text-center">
              <span className="tp-section-subtitle-3">
                Minimal Button Styles
              </span>
              <h3 className="tp-section-title-3">Link Button Style</h3>
            </div>
          </div>
        </div>
        <div className="row row-cols-auto align-items-center justify-content-center">
          
          <div className="col">
            <div className="tp-button-demo">
              <Link href="/services" className="tp-link-btn-2 mr-15">
                My button text
                <span>
                  <ArrowRightThree />
                </span>
              </Link>
            </div>
          </div>

          <div className="col">
            <div className="tp-button-demo">
              <Link
                href="service-details"
                className="tp-link-btn-circle justify-content-center mr-15"
              >
                See More
                <span>
                  <i className="fa-regular fa-arrow-right"></i>
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinimalButtons;
