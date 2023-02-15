import React from "react";
import Link from "next/link";
// internal
import bg from "@assets/img/cta/6/cta-bg-1.jpg";

const CreativeCta = () => {
  return (
    <section className="cta__area pb-140">
      <div className="container">
        <div
          className="cta__inner-6 p-relative include-bg wow fadeInUp"
          data-wow-delay=".5s"
          data-wow-duration="1s"
          style={{ backgroundImage: `url(${bg.src})` }}
        >
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-7">
              <div
                className="cta__content-6 wow fadeInDown"
                data-wow-delay=".7s"
                data-wow-duration="1s"
              >
                <h3 className="cta__title-6">About Your Next Projects.</h3>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5">
              <div
                className="cta__btn-6 text-lg-end wow fadeInDown"
                data-wow-delay=".9s"
                data-wow-duration="1s"
              >
                <Link href="/contact" className="tp-btn-white-2 tp-link-btn-3">
                  Get Started
                  <span>
                    <i className="fa-regular fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeCta;
