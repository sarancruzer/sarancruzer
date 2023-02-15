import React from "react";
// internal
import bg from '@assets/img/breadcrumb/breadcrumb-bg-6.jpg';

const BreadcrumbSeven = () => {
  return (
    <section className="breadcrumb__area breadcrumb__style-6 p-relative include-bg pt-200 pb-120">
      <div
        className="breadcrumb__bg-2 breadcrumb__overlay include-bg"
        style={{backgroundImage:`url(${bg.src})`}}
      ></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-8 col-lg-10">
            <div className="breadcrumb__content text-center p-relative z-index-1">
              <h3 className="breadcrumb__title">
                We Offer a Wide Range of Services
              </h3>
              <div className="breadcrumb__list">
                <span>
                  <a href="#">Home</a>
                </span>
                <span className="dvdr">
                  <i className="fa-solid fa-circle-small"></i>
                </span>
                <span>Services</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbSeven;
