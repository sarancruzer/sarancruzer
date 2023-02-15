// external
import React from "react";
// internal
import HomeLawyerBrands from "@components/brands/home-lawyer-brands";

const HomeAward = () => {
  return (
    <>
      <section className="award__area pt-30 pb-30">
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-xl-2 col-lg-10 col-md-3">
              <div className="award__wrapper-4">
                <h3 className="award__title-4">Awards & Recognitions</h3>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-9">
              <div className="award__slider">
                <HomeLawyerBrands />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAward;
