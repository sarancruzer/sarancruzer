import React from "react";
// internal
import { ArcPortfolioSliderItems } from "@components/portfolios/architecture-portfolio";

const ElGalleryFour = () => {
  return (
    <section className="portfolio_area pt-110">
      <div className="container-fluid gx-0">
        <div className="row gx-0">
          <div className="col-xxl-12">
            <div className="tp-section-wrapper-3 mb-60 text-center">
              <span className="tp-section-subtitle-3">
                Minimal & Clean Design
              </span>
              <h3 className="tp-section-title-3">Slider with hover effect</h3>
            </div>
          </div>
        </div>
        <div className="row gx-0">
          <div className="col-xxl-12">
            {/* ArcPortfolioSliderItems  */}
            <ArcPortfolioSliderItems />
            {/* ArcPortfolioSliderItems  */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElGalleryFour;
