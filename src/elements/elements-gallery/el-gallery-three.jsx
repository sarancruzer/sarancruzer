import React from "react";
// internal
import { AgencyPortfolioSliderItems } from "@components/portfolios/home-agency-portfolio";

const ElGalleryThree = () => {
  return (
    <section className="portfolio__area portfolio__overlay-5 pt-60 pb-120 p-relative z-index-1">
      <div className="container-fluid g-0">
        <div className="row gx-0">
          <div className="col-xxl-12">
            <div className="tp-section-wrapper-3 mb-60 text-center">
              <span className="tp-section-subtitle-3">
                Minimal & Clean Design
              </span>
              <h3 className="tp-section-title-3">Slider With Arrow</h3>
            </div>
          </div>
        </div>
        <div className="row gx-0">
          <div className="col-xxl-12">
            {/* Agency Portfolio Slider Items */}
            <AgencyPortfolioSliderItems />
            {/* Agency Portfolio Slider Items */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElGalleryThree;
