import React from "react";
import Link from "next/link";
// internal
import portfolio_data from "@data/portfolio-data";
import LawyerSinglePortfolio from "./single-item/lawyer-single-portfolio";

// case_items
const case_items = portfolio_data.filter((item) => item.home_lower);

const HomeLowyerCase = () => {
  return (
    <>
      <section className="case__area pt-110" id="cases">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xxl-7 col-xl-8 col-lg-8 col-md-7">
              <div className="section__title-wrapper-4 pr-5 mb-60">
                <span className="section__title-pre-4">Case Results</span>
                <h3 className="section__title-4">
                  We are a professional law firm located in Berlin.
                </h3>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-4 col-lg-4 col-md-5">
              <div className="case__more text-md-end mb-70">
                <Link href="/portfolio" className="tp-btn-border-brown">
                  Browse Case Results
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            {case_items.map((item) => (
              <div key={item.id} className="col-xxl-6 col-lg-6">
                <LawyerSinglePortfolio item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeLowyerCase;
