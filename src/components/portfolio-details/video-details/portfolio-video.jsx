import React from "react";
import Link from "next/link";
// internal
import ArrowRightTwo from "@svg/arrow-right-2";
import DetailsMetaItem from "../classic-details/details-meta-item";

const PortfolioVideoArea = () => {
  return (
    <section className="portfolio__area pt-70 pb-85">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5">
            <div className="portfolio__details-wrapper-2 mb-50">
              <span className="portfolio__details-subtitle">DESCRIPTION</span>
              <h3 className="portfolio__details-title-3">About Project</h3>
              <div className="portfolio__details-btn-2">
                <Link href="/" className="tp-btn">
                  Visit Website
                  <ArrowRightTwo />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7">
            <div className="portfolio__details-wrapper-2">
              <div className="portfolio__details-content-2 mb-30">
                <p>
                  We’ve created a unique visual system and strategy across the
                  wide existing spectrum visible mobile applications and found
                  yourself in a wide, straggling with wainscots.Lacus laoreet
                  consequuntur a commodo voluptatibus venenatis vero leo
                  cras?autem maiores adipiscing assumenda, nesciunt deleniti
                  quaerat veritatis culpa dolores sollicitudin, dolorum
                  inceptos? Convallis aut, nostra nonummy!
                </p>
              </div>
              <div className="portfolio__details-task portfolio__details-task-2 mb-50">
                <h3 className="portfolio__details-title-sm portfolio__details-title-sm-2">
                  Task
                </h3>
                <p>
                  Rebuild a unified visual system for the advertising agency,
                  made of steel which can change the world in a while.
                </p>
              </div>
              <div className="portfolio__details-meta flex-wrap d-flex align-items-center">
                <DetailsMetaItem title="Client:" subtitle="Nature Planner" />
                <DetailsMetaItem title="Awards:" subtitle="First Place" />
                <DetailsMetaItem title="Category:" subtitle="Portfolio" />
                <DetailsMetaItem title="Date:" subtitle="October 3, 2021" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioVideoArea;
