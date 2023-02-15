import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import shape from "@assets/img/price/price-shape-1.png";

// pricing data
const pricing_data = [
  {
    category: "Basic",
    category_class: "",
    price: "169",
    delay: ".3s",
    features: [
      {
        position: "left",
        lists: [
          { denied: false, list: "1-4 persons" },
          { denied: false, list: "24 hours turnaround" },
        ],
      },
      {
        position: "right",
        lists: [
          { denied: true, list: "Photo shoot session" },
          { denied: true, list: "All photos delivered on usb" },
        ],
      },
    ],
  },
  {
    category: "Standard",
    category_class: "standard",
    price: "253",
    delay: ".5s",
    features: [
      {
        position: "left",
        lists: [
          { denied: false, list: "1-4 persons" },
          { denied: false, list: "24 hours turnaround" },
        ],
      },
      {
        position: "right",
        lists: [
          { denied: false, list: "Photo shoot session" },
          { denied: true, list: "All photos delivered on usb" },
        ],
      },
    ],
  },
  {
    category: "Premium",
    category_class: "premium",
    price: "364",
    delay: ".7s",
    features: [
      {
        position: "left",
        lists: [
          { denied: false, list: "1-4 persons" },
          { denied: false, list: "24 hours turnaround" },
        ],
      },
      {
        position: "right",
        lists: [
          { denied: false, list: "Photo shoot session" },
          { denied: false, list: "All photos delivered on usb" },
        ],
      },
    ],
  },
];

const PhotographyPrice = ({ element_style = false }) => {
  return (
    <>
      <section
        className={`pricing__area p-relative z-index-1 black-bg-5 ${
          element_style ? "pt-110 pb-120" : "pt-80 pb-120"
        }`}
      >
        <div className="pricing__shape">
          <Image
            className="pricing__shape-1"
            src={shape}
            alt="shape"
            priority
          />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-6">
              <div className="section__title-wrapper-3 text-center mb-60">
                <span className="section__title-pre-3 has-center">
                  03 . PROFESSIONAL
                </span>
                <h3 className="section__title-3 has-gradient">
                  Simple, transparent <span> Pricing.</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            {pricing_data.map((item, i) => {
              const { category, category_class, price, features, delay } = item;
              return (
                <div key={i} className="col-lg-12 col-md-6">
                  <div
                    className="pricing__item mb-20 wow fadeInUp"
                    data-wow-delay={delay}
                    data-wow-duration="1s"
                  >
                    <div className="row align-items-center">
                      <div className="col-xxl-3 col-xl-3 col-lg-3">
                        <div className="pricing__content text-center text-lg-start">
                          <div className="pricing__category">
                            <span className={category_class}>{category}</span>
                          </div>
                          <h3 className="pricing__title">
                            ${price}
                            <span className="pricing-currency"> USD</span>
                          </h3>
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="pricing__feature d-lg-flex align-items-center justify-content-between">
                          {features.map((f, i) => (
                            <div
                              key={i}
                              className={`pricing__feature-${f.position}`}
                            >
                              <ul>
                                {f.lists.map((l, i) => (
                                  <li
                                    key={i}
                                    className={l.denied ? "has-denied" : ""}
                                  >
                                    {l.list}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="col-xxl-3 col-xl-3 col-lg-3">
                        <div className="pricing__btn text-center text-lg-end">
                          <Link href="/contact-2" className="tp-btn-border-3">
                            Choose Plan
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default PhotographyPrice;
