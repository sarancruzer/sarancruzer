import React from "react";
// internal
import bg from '@assets/img/breadcrumb/breadcrumb-bg-5.jpg';

const BreadcrumbEight = ({title}) => {
  return (
    <section className="breadcrumb__area breadcrumb__style-5 p-relative include-bg pt-170 pb-110 blue-bg">
      <div
        className="breadcrumb__bg bg-luminosity include-bg"
        style={{backgroundImage:`url(${bg.src})`}}
      ></div>
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xxl-7 col-lg-7">
            <div className="breadcrumb__content breadcrumb__content-2 p-relative z-index-1">
              <span className="breadcrumb__title-pre">Services</span>
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
                {title}
              </h3>
            </div>
          </div>
          <div className="col-xxl-5 col-lg-5">
            <div className="breadcrumb__content breadcrumb__content-2 p-relative z-index-1">
              <p>
                Harry IT allows your business and technology computers to store,
                transmit, analyze, and manipulate big data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbEight;
