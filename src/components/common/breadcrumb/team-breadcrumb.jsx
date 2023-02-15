import React from "react";
import Image from "next/image";
// internal
import dot_1 from "@assets/img/breadcrumb/breadcrumb-dot-1.png";
import dot_2 from "@assets/img/breadcrumb/breadcrumb-dot-2.png";
import shape from '@assets/img/breadcrumb/breadcrumb-shape-1.png'

const TeamBreadcrumb = () => {
  return (
    <section className="breadcrumb__area breadcrumb__style-7 breadcrumb__bg-3 p-relative z-index-1 include-bg pt-180 pb-100">
      <div
        className="breadcrumb__bg-shape include-bg"
        style={{backgroundImage:`url(${shape.src})`}}
      ></div>
      <div className="breadcrumb__shape">
        <Image className="breadcrumb__shape-1" src={dot_1} alt="dot" />
        <Image className="breadcrumb__shape-2" src={dot_2} alt="dot" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-7 col-xl-8 col-lg-9">
            <div className="breadcrumb__content breadcrumb__content-2 p-relative z-index-1 text-center">
              <h3 className="breadcrumb__title">
                We’ve Most Talented Team Members
              </h3>
              <div className="breadcrumb__list">
                <span>
                  <a href="#">Home</a>
                </span>
                <span className="dvdr">
                  <i className="fa-solid fa-circle-small"></i>
                </span>
                <span>Team Members</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamBreadcrumb;
