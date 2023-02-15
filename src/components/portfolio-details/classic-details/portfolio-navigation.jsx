import React from "react";
import Link from "next/link";
// internal
import { Dots, NextArrow, PrevArrow } from "@svg/index";

const PortfolioNavigation = () => {
  return (
    <section className="portfolio__navigation-area portfolio__more-border d-none d-md-block">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-5 col-md-5">
            <div className="portfolio__more-left d-flex align-items-center">
              <div className="portfolio__more-icon">
                <Link href="/portfolio-details">
                  <PrevArrow />
                </Link>
              </div>
              <div className="portfolio__more-content">
                <p>Previous Work</p>
                <h4>
                  <a href="portfolio-details">Traveling Solo Is Awesome</a>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-2">
            <div className="portfolio__more-menu text-center">
              <Link href="/portfolio-masonry">
                <span>
                  <Dots />
                </span>
              </Link>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-5">
            <div className="portfolio__more-right d-flex align-items-center justify-content-end">
              <div className="portfolio__more-content">
                <p>Next Work</p>
                <h4>
                  <Link href="/portfolio-details">
                    A Beautiful Sunday Morning
                  </Link>
                </h4>
              </div>
              <div className="portfolio__more-icon">
                <Link href="/portfolio-details">
                  <NextArrow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioNavigation;
