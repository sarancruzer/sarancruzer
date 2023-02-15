import React from "react";
// internal
import bg from '@assets/img/breadcrumb/breadcrumb-bg-5.jpg';

const BreadcrumbOne = () => {
  return (
    <section className="breadcrumb__area breadcrumb__style-5 p-relative include-bg pt-170 pb-110 blue-bg">
      <div
        className="breadcrumb__bg bg-luminosity include-bg"
        style={{backgroundImage:`url(${bg.src})`}}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-xxl-8">
            <div className="breadcrumb__content breadcrumb__content-2 p-relative z-index-1">
              <span className="breadcrumb__title-pre">Case Studies</span>
              <div className="breadcrumb__list">
                <span>
                  <a href="#">Home</a>
                </span>
                <span className="dvdr">
                  <i className="fa-solid fa-circle-small"></i>
                </span>
                <span>
                  <a href="#">Business</a>
                </span>
                <span className="dvdr">
                  <i className="fa-solid fa-circle-small"></i>
                </span>
                <span>Investment Trend Monitor: Top Trends in 2022 </span>
              </div>
              <h3 className="breadcrumb__title">
                We share our knowledge experience & passion.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbOne;
