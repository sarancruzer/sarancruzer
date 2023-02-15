import React, { useState } from "react";
// internal
import LoadMoreBtn from "@components/load-more-btn";
import metro_data from "./metro-data";
import MetroSinglePort from "@components/portfolios/single-item/metro-single-port";

// portfolio items
const portfolio_items = metro_data;
// perView
const perView = 4;

const PortfolioMetroArea = () => {
  const [next, setNext] = useState(perView);
  //   handleLoadMore
  const handleLoadMore = () => {
    setNext((value) => value + 1);
  };
  return (
    <>
      <section className="portfolio__area pb-90 pt-110 p-relative fix">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="portfolio__section-title-wrapper text-center mb-130">
                <span className="portfolio__section-title-pre">
                  CHECK OUT OUR LATEST WORK
                </span>
                <h3 className="portfolio__section-title">
                  Portfolio Sticky Metro
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12 tp-load-item-count">
              {portfolio_items.slice(0,next).map((item, i) => (
                <MetroSinglePort key={i} item={item} />
              ))}
            </div>
          </div>

          {next < portfolio_items.length && (
            <div className="row">
              <div className="col-xxl-12">
                <LoadMoreBtn handleLoadMore={handleLoadMore} />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PortfolioMetroArea;
