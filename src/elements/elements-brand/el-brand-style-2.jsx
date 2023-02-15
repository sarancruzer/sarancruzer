import React from "react";
// internal
import HomeLawyerBrands from "@components/brands/home-lawyer-brands";

const ElBrandStyleTwo = () => {
  return (
    <section className="award__area pb-90">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-4 col-xl-4 col-lg-4 col-md-4">
            <div className="award__wrapper-4">
              <div className="tp-section-wrapper-3 mb-30">
                <span className="tp-section-subtitle-3">
                  Modern & Clean Design
                </span>
                <h3 className="tp-section-title-3">Brand Style 2</h3>
              </div>
            </div>
          </div>
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
            <div className="award__slider">
              <HomeLawyerBrands />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElBrandStyleTwo;
