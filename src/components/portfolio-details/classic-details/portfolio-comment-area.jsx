import React from "react";
// internal
import PortfolioCommentForm from "@components/forms/portfolio-comment-form";

const PortfolioCommentArea = () => {
  return (
    <>
      <section className="portfolio__comment grey-bg-7 pt-90 pb-105">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="portfolio__comment-top">
                <h3 className="portfolio__comment-title">Post a Comment</h3>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="portfolio__comment-form">
                {/* form start */}
                <PortfolioCommentForm/>
                {/* form end */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioCommentArea;
