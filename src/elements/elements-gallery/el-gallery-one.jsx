import React from "react";
// internal
import { PhotographyGallerySlider } from "@components/portfolios/photographer-portfolio";

const ElGalleryOne = () => {
  return (
    <section className="portfolio__area p-relative portfolio__overlay pt-110 pb-90 fix">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="tp-section-wrapper-3 mb-60 text-center">
              <span className="tp-section-subtitle-3">
                Minimal & Clean Design
              </span>
              <h3 className="tp-section-title-3">Gallery With Slider</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12">
            <PhotographyGallerySlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElGalleryOne;
