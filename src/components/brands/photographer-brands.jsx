import React from "react";
import Image from "next/image";
// internal
import brand_1 from "@assets/img/brand/3/brand-1.png";
import brand_2 from "@assets/img/brand/3/brand-2.png";
import brand_3 from "@assets/img/brand/3/brand-3.png";
import brand_4 from "@assets/img/brand/3/brand-4.png";
import brand_5 from "@assets/img/brand/3/brand-5.png";
import brand_6 from "@assets/img/brand/3/brand-6.png";
import brand_7 from "@assets/img/brand/3/brand-7.png";
import brand_8 from "@assets/img/brand/3/brand-8.png";

// single brand
function SingleBrand({ src }) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="brand__item-3 text-center">
        <span className="brand__tooltip">Visit sarancruzer</span>
        <Image src={src} alt="brand" />
      </div>
    </div>
  );
}

const PhotographerBrands = ({ element_style = false }) => {
  return (
    <>
      <section
        className={`brand__area black-bg-5 ${
          element_style ? "pt-110 pb-120" : "pt-70 pb-140"
        }`}
      >
        <div className="container">
          {element_style && (
            <div className="row">
              <div className="col-xl-12">
                <div className="section__title-wrapper-3 mb-60 text-center">
                  <span className="section__title-pre-3 has-center">
                    Black Styled
                  </span>
                  <h3 className="section__title-3 has-gradient">
                    Client <span>Logos</span>
                  </h3>
                </div>
              </div>
            </div>
          )}
          <div className="row gx-0">
            <SingleBrand src={brand_1} />
            <SingleBrand src={brand_2} />
            <SingleBrand src={brand_3} />
            <SingleBrand src={brand_4} />
            <SingleBrand src={brand_5} />
            <SingleBrand src={brand_6} />
            <SingleBrand src={brand_7} />
            <SingleBrand src={brand_8} />
          </div>
        </div>
      </section>
    </>
  );
};

export default PhotographerBrands;
