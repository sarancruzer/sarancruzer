import React from "react";
// internal
import portfolio_classic_data from "@components/portfolios/portfolio-page-com/portfolio-classic/portfolio-data";
import ClassicSinglePortfolio from "@components/portfolios/single-item/classic-single-portfolio";

// portfolio items
const portfolio_items = portfolio_classic_data.slice(0, 6);
// images
const images = portfolio_items.map((item) => item.img.src);

const AboutMePortfolio = () => {
  return (
    <section className="portfolio__area pt-110 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section__title-wrapper-9 text-center mb-55">
              <h3 className="section__title">Latest Projects</h3>
            </div>
          </div>
        </div>
        <div className="row tp-gx-4">
          {portfolio_items.map((item, i) => (
            <div key={i} className="col-xl-4 col-lg-4 col-md-6">
              <ClassicSinglePortfolio item={item} images={images} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMePortfolio;
