import React from "react";
// internal
import { PortfolioSliderItems } from "@components/portfolios/home-personal-portfolio";

const ElGalleryTwo = () => {
  return (
    <section className="portfolio__area portfolio__overlay-9 pt-110 fix">
      <div className="container-fluid gx-0">
        <div className="row gx-0">
          <div className="col-xxl-12">
            <div className="tp-section-wrapper-3 mb-60 text-center">
              <span className="tp-section-subtitle-3">
                Minimal & Clean Design
              </span>
              <h3 className="tp-section-title-3">Slider With Scrollbar</h3>
            </div>
          </div>
        </div>
        <div className="row gx-0">
          <div className="col-xxl-12">
            <PortfolioSliderItems />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElGalleryTwo;

