import React from "react";
// internal
import portfolio_classic_data from "@components/portfolios/portfolio-page-com/portfolio-classic/portfolio-data";
import ClassicSinglePortfolio from "@components/portfolios/single-item/classic-single-portfolio";

// portfolio_grid_items
const portfolio_grid_items = portfolio_classic_data.slice(0, 3);
// images
const images = portfolio_grid_items.map((item) => item.img.src);

const ElGallerySix = ({tooltip_hover}) => {
  return (
    <section className="portfolio__area pt-20 pb-80 p-relative fix">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="tp-section-wrapper-3 mb-60 text-center">
              <span className="tp-section-subtitle-3">
                Minimal & Clean Design
              </span>
              <h3 className="tp-section-title-3">Gallery Grid hover</h3>
            </div>
          </div>
        </div>
        <div className="row tp-gx-4">
          {portfolio_grid_items.map((item, i) => (
            <div key={i} className="col-xl-4 col-lg-4 col-md-6 tp-portfolio">
              <ClassicSinglePortfolio
                item={item}
                images={images}
                index={i}
                tooltip_hover={tooltip_hover}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElGallerySix;
