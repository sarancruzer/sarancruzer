import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import shape_1 from "@assets/img/about/14/about-shape-1.png";
import shape_2 from "@assets/img/about/14/about-shape-2.png";
import about_img_1 from "@assets/img/about/14/about-img-1.jpg";
import about_img_2 from "@assets/img/about/14/about-img-2.jpg";

const ServicesAbout = () => {
  return (
    <section className="about__area pb-140">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div
              className="about__thumb-wrapper-14 p-relative wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <div className="about__shape">
                <Image className="about__shape-8" src={shape_1} alt="shape" />
                <Image className="about__shape-9" src={shape_2} alt="shape" />
              </div>
              <div className="about__thumb-14 m-img">
                <Image className="about-img-1" src={about_img_1} alt="img" />
                <Image className="about-img-2" src={about_img_2} alt="img" />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div
              className="about__wrapper-14 pl-75 pt-45 wow fadeInUp"
              data-wow-delay=".5s"
              data-wow-duration="1s"
            >
              <div className="tp-section-wrapper-2 mb-40">
                <span className="tp-section-subtitle-2">EXPERIENCE AGENCY</span>
                <h3 className="tp-section-title-2">
                  Create out standing and flexible digital services
                </h3>
                <p>
                  We help our clients succeed by creating brand identities,
                  digital experiences, and print materials achieve marketing
                  goals.!
                </p>
              </div>

              <div className="about-btn">
                <Link href="/services" className="tp-btn">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesAbout;
