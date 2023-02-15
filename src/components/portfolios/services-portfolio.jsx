import React from "react";
// internal
import portfolio_data from "@data/portfolio-data";
import HomeSinglePort from "./single-item/home-single-port";
// portfolio_items
const portfolio_items = portfolio_data.filter((item) => item.home);

const ServicesPortfolio = () => {
  return (
    <section className="portfolio__area pt-110 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-xxl-7 col-xl-7 col-lg-7">
            <div className="tp-section-wrapper-2 mb-60">
              <span className="tp-section-subtitle-2">Case study</span>
              <h3 className="tp-section-title-2">
                Some recent works we really proud of
              </h3>
            </div>
          </div>
        </div>
        <div className="row gx-2">
          {portfolio_items.map((item) => (
            <div key={item.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <HomeSinglePort item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPortfolio;
