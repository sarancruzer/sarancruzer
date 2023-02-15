import React from "react";
import bg from '@assets/img/about/about-breadcrumb.jpg';

const AboutTopBar = () => {
  return (
    <section
      className="about__heading about__heading-overlay about__spacing include-bg jarallax"
      style={{backgroundImage:`url(${bg.src})`}}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="about__heading-content text-center p-relative z-index-1">
              <span className="about__heading-subtitle">About us</span>
              <h3 className="about__heading-title">
                Need a design expert? You found one.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTopBar;
