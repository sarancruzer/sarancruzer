import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import { RightArrowTwo, SliderBorder, SliderHighlightShape } from "@svg/index";
import product_1 from "@assets/img/product/slider/product-1.png";
import product_2 from "@assets/img/product/slider/product-2.png";
import product_3 from "@assets/img/product/slider/product-3.png";
import product_sm_1 from "@assets/img/product/slider/sm/product-sm-1.png";
import product_sm_2 from "@assets/img/product/slider/sm/product-sm-2.png";
import product_sm_3 from "@assets/img/product/slider/sm/product-sm-3.png";

// sm product
const sm_products = [
  { id: 1, product: product_sm_1 },
  { id: 2, product: product_sm_2 },
  { id: 3, product: product_sm_3 },
];

const VerticalSliderItemTwo = () => {
  const [activeProduct, setActiveProduct] = useState("product-img-2");
  // handleActiveProduct
  const handleActiveProduct = (id) => {
    setActiveProduct(`product-img-${id}`);
  };
  return (
    <React.Fragment>
      <div className="slider__bg-text">
        <h3>headphone</h3>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-8">
            <div className="slider__content-11 slider__content-11-product">
              <h3 className="slider__title-11 slider__title-11-product">
                Bowers & Wilkins <br /> - PX7
              </h3>
              <div className="slider__product mb-35">
                <span className="slider__product-price new-price">
                  $320
                  <SliderHighlightShape />{" "}
                </span>
                <span className="slider__product-price old-price">$320</span>
              </div>
              <div className="slider__btn-11">
                <Link href="/product-details" className="tp-btn-9">
                  Shop Now
                  <span>{<RightArrowTwo />}</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-4">
            <div className="slider__product-wrapper d-flex">
              <div id="product_wrapper" className={activeProduct}>
                <div className="slider__product-thumb-single product-img-1">
                  <Image src={product_1} alt="product image" />
                </div>
                <div className="slider__product-thumb-single product-img-2">
                  <Image src={product_2} alt="product image" />
                </div>
                <div className="slider__product-thumb-single product-img-3">
                  <Image src={product_3} alt="product image" />
                </div>
              </div>
              <div className="slider__product-thumb-nav d-flex flex-lg-column">
                <span className="slider__product-thumb-nav-border">
                  <SliderBorder />
                </span>

                {sm_products.map((item) => (
                  <div
                    key={item.id}
                    className={`slider__product-thumb-sm product-img-sm-${item.id} 
                    ${
                      activeProduct === `product-img-${item.id}` ? "active" : ""
                    }`}
                    onClick={() => handleActiveProduct(item.id)}
                  >
                    <Image src={item.product} alt="product sm img" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default VerticalSliderItemTwo;
