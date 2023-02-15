import React from "react";
import Image from "next/image";
// internal
import thumb_shape_1 from "@assets/img/about/15/about-thumb-shape.png";
import thumb_shape_2 from "@assets/img/about/15/about-thumb-shape-2.png";
import about_img from "@assets/img/about/15/about-img-1.jpg";

const ServiceThreeAbout = () => {
  return (
    <section className="about__area pt-10 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div
              className="about__thumb-15 p-relative z-index-1 w-img wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <div className="about__thumb-15-shape">
                <Image src={thumb_shape_1} alt="shape" />
              </div>
              <Image
                className="about__thumb-15-shape-2"
                src={thumb_shape_2}
                alt="shape"
              />
              <Image src={about_img} alt="about img" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div
              className="about__wrapper-15 pl-45 wow fadeInUp"
              data-wow-delay=".6s"
              data-wow-duration="1s"
            >
              <div className="tp-section-wrapper-3 mb-25">
                <span className="tp-section-subtitle-3">WHAT WE DO</span>
                <h3 className="tp-section-title-3">
                  World best web design service provider.
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="about__list-2">
                <ul>
                  <li>Art Direction</li>
                  <li>Graphic Design</li>
                  <li>Motion Graphics</li>
                  <li>Brand Strategy</li>
                  <li>Mobile App Design</li>
                  <li>SEO Analytics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceThreeAbout;
