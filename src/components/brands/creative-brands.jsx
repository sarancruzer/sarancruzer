import React from "react";
import Image from "next/image";
// internal
import brand_1 from "@assets/img/brand/6/brand-1.png";
import brand_2 from "@assets/img/brand/6/brand-2.png";
import brand_3 from "@assets/img/brand/6/brand-3.png";
import brand_4 from "@assets/img/brand/6/brand-4.png";
import brand_5 from "@assets/img/brand/6/brand-5.png";
import brand_6 from "@assets/img/brand/6/brand-6.png";
import brand_7 from "@assets/img/brand/6/brand-7.png";
import brand_8 from "@assets/img/brand/6/brand-8.png";
import brand_9 from "@assets/img/brand/6/brand-9.png";
import brand_10 from "@assets/img/brand/6/brand-10.png";
import ElBrandSectionWrapper from "@elements/elements-brand/el-brand-section-wrapper";

// single brand item
function BrandItem({ img }) {
  return (
    <div className="brand__item-6">
      <Image src={img} alt="brand" />
    </div>
  );
}

const CreativeBrands = ({ element_style = false }) => {
  return (
    <>
      <section
        className={`brand__area grey-bg-7 ${
          element_style ? "pt-110 pb-70" : ""
        }`}
      >
        <div className="container">
          {!element_style && (
            <div className="row">
              <div className="col-xxl-3 col-xl-4 col-lg-5 col-md-6 col-sm-7">
                <div className="brand__info-2 mb-45">
                  <p>
                    Trusted by 6,000+ Companies Support <span>Sponsor.</span>
                  </p>
                </div>
              </div>
            </div>
          )}
          {element_style && (
            <ElBrandSectionWrapper
              subtitle="Modern & Clean Design"
              title="Brand Grid Style"
            />
          )}
          <div className="brand__item-wrapper-6 d-flex flex-wrap justify-content-between">
            <BrandItem img={brand_1} />
            <BrandItem img={brand_2} />
            <BrandItem img={brand_3} />
            <BrandItem img={brand_4} />
            <BrandItem img={brand_5} />
          </div>
          <div className="brand__item-wrapper-6 d-flex flex-wrap justify-content-between">
            <BrandItem img={brand_6} />
            <BrandItem img={brand_7} />
            <BrandItem img={brand_8} />
            <BrandItem img={brand_9} />
            <BrandItem img={brand_10} />
          </div>
        </div>
      </section>
    </>
  );
};

export default CreativeBrands;
