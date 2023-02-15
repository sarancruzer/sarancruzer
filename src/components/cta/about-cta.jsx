import React from "react";
import Link from "next/link";
// internal
import bg from "@assets/img/cta/5/cta-bg.png";

const AboutCta = ({ element_style = false }) => {
  return (
    <section
      className={`cta__area cta__style-2 p-relative z-index-1 ${
        element_style ? "pb-120 pt-120" : ""
      }`}
    >
      {!element_style && <div className="cta__half-bg"></div>}
      <div className="container">
        <div className="cta__inner-5" data-bg-color="blue-dark">
          <div
            className="cta__shape-bg include-bg"
            style={{ backgroundImage: `url(${bg.src})` }}
          ></div>
          <div className="row align-items-center">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="cta__content-5">
                <span>Get to meet Your Next Agency</span>

                <h3 className="cta__title-5">
                  Let’s talk about your next business challenge
                </h3>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="cta__btn-5 text-lg-end">
                <Link href="/contact" className="tp-btn-orange-2">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCta;
