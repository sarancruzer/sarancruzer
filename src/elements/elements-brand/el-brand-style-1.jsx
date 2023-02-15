import HomeBrandSlider from "@components/brands/home-brand-slider";
import React from "react";
import ElBrandSectionWrapper from "./el-brand-section-wrapper";

const ElBrandStyleOne = () => {
  return (
    <section className="brand__area pt-110 pb-110">
      <div className="container">
        <ElBrandSectionWrapper subtitle='Modern & Clean Design' title="Brand Style 1" />
        <div className="brand__inner purple-bg">
          <div className="row justify-content-center">
            <div className="col-xxl-10 col-xl-9 col-xl-10 col-11">
              <div className="brand__area">
                <div className="brand__thumb-wrapper d-sm-flex align-items-center text-center text-sm-start">
                  <h3 className="brand__title">Global Experts: </h3>
                  <HomeBrandSlider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElBrandStyleOne;
