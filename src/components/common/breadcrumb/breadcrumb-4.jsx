import React from "react";
import Link from "next/link";
// internal
import bg from "@assets/img/blog/breadcrumb/blog-breadcrumb-slider-3.jpg";

const BreadcrumbFour = ({title,subtitle}) => {
  return (
    <section className="breadcrumb__area pt-130 pb-115 breadcrumb__style-10 black-bg p-relative z-index-1">
      <div
        className="breadcrumb__bg-4 breadcrumb__bg-overlay m-img include-bg"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="breadcrumb__content text-center">
              <h3 className="breadcrumb__title">{title}</h3>
              <div className="breadcrumb__list">
                <span>
                  <Link href="/">Home</Link>
                </span>
                <span className="dvdr">
                  <i className="fa-solid fa-circle-small"></i>
                </span>
                <span>{subtitle}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbFour;
