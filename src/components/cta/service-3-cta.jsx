import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import shape_1 from "@assets/img/cta/7/cta-shape-1.png";
import shape_2 from "@assets/img/cta/7/cta-shape-2.png";
import shape_3 from "@assets/img/cta/7/cta-shape-3.png";
import shape_4 from "@assets/img/cta/7/cta-shape-4.png";

const ServiceThreeCta = () => {
  return (
    <section className="cta__area cta__style-3 p-relative z-index-1 pt-115 pb-60 grey-bg-7">
      <div className="cta__shape">
        <Image className="cta__shape-17" src={shape_1} alt="shape" />
        <Image className="cta__shape-18" src={shape_2} alt="shape" />
        <Image className="cta__shape-19" src={shape_3} alt="shape" />
        <Image className="cta__shape-20" src={shape_4} alt="shape" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-6 col-lg-6">
            <div className="cta__wrapper-7">
              <div className="section__title-wrapper-7 mb-60">
                <span className="section__title-pre-7">
                  Start Your Free Trial
                </span>
                <h3 className="section__title-7">
                  Take your business to the next level.
                </h3>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-lg-6">
            <div className="cta__btn-wrapper-7 d-xl-flex align-items-center mb-40">
              <Link href="/register" className="tp-cta-btn mr-20 mb-20">
                Create a <br /> Free Account{" "}
                <i className="fa-light fa-arrow-up-right"></i>
              </Link>
              <Link href="/help" className="tp-cta-btn-yellow mb-20">
                Talk to our <br /> Support Team{" "}
                <i className="fa-light fa-arrow-up-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceThreeCta;
