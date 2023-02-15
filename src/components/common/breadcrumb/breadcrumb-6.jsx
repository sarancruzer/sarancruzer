import React from "react";

const BreadcrumbSix = ({
  title = "Investment Trend Monitor: Top Trends in 2022",
  tag = "Business",
}) => {
  return (
    <section className="breadcrumb__area include-bg pb-70 pt-120 grey-bg-4">
      <div className="container">
        <div className="row">
          <div className="col-xxl-10">
            <div className="breadcrumb__content p-relative z-index-1">
              <div className="postbox__category">
                <a href="#">{tag}</a>
              </div>
              <h3 className="breadcrumb__title">{title}</h3>

              <div className="breadcrumb__list">
                <span>
                  <a href="#">Home</a>
                </span>
                <span className="dvdr">
                  <i className="fa-solid fa-circle-small"></i>
                </span>
                <span>
                  <a href="#">{tag}</a>
                </span>
                <span className="dvdr">
                  <i className="fa-solid fa-circle-small"></i>
                </span>
                <span>{title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbSix;
