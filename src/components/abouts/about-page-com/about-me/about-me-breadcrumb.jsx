import React from "react";
import bg from '@assets/img/about/about-me-breadcrumb.jpg';

const AboutMeBreadcrumb = () => {
  return (
    <section
      className="about__me about__me-spacing about__me-translate include-bg"
      style={{backgroundImage:`url(${bg.src})`}}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div
              className="about__me-content"
            >
              <h3 className="about__me-title">About Me</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeBreadcrumb;
