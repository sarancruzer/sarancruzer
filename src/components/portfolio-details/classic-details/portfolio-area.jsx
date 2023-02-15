import React from "react";
import DetailsMetaItem from "./details-meta-item";

const PortfolioArea = () => {
  return (
    <>
      <section className="portfolio__area pb-65 pt-110 p-relative">
        <div className="container">
          <div className="row">
            <div className="col-xxl-9 col-xl-10">
              <div className="portfolio__details-wrapper">
                <div className="portfolio__details-content">
                  <h3 className="portfolio__details-title">
                    Easily make your <br /> own artistic muckup design
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    pretium justo orci, ac semper tellus facilisis a. Praesent
                    elit orci, ultrices id sollicitudin aliquam, dapibus ac
                    risus.
                  </p>
                </div>
                <div className="portfolio__details-meta flex-wrap d-flex align-items-center">
                  <DetailsMetaItem title="Client:" subtitle="Nature Planner" />
                  <DetailsMetaItem title="Awards:" subtitle="First Place" />
                  <DetailsMetaItem title="Production:" subtitle="Design Lab" />
                  <DetailsMetaItem title="Category:" subtitle="Portfolio" />
                  <DetailsMetaItem title="Date:" subtitle="October 3, 2021" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioArea;
