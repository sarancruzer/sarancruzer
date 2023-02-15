import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import shape_1 from "@assets/img/price/5/shape/price-shape-1.png";
import shape_2 from "@assets/img/price/5/shape/price-shape-2.png";
import shape_3 from "@assets/img/price/5/shape/price-shape-3.png";
import shape_4 from "@assets/img/price/5/shape/price-shape-4.png";
// price icon
import price_icon_1 from "@assets/img/price/5/price-icon-1.png";
import price_icon_2 from "@assets/img/price/5/price-icon-2.png";
import price_icon_3 from "@assets/img/price/5/price-icon-3.png";

// data
const pricing_data = [
  {
    id: "nav-monthly",
    pricing_items: [
      {
        icon: price_icon_1,
        price: 0,
        price_text: "free",
        text: "Perfect Plan for Starters.",
        tag: "Starter",
        feature_text: "Includes:",
        lists: [
          "Full Access Library",
          "Business & Financ Analysing",
          "Exclusive Templates",
          "24 hour support",
        ],
      },
      {
        has_popular: true,
        icon: price_icon_2,
        price: 150,
        price_text: "month",
        text: "Collaborate Professionally.",
        tag: "Commercial",
        feature_text: "Everything in Personal Plan, plus",
        lists: [
          "Full Access Library",
          "Business & Financ Analysing",
          "Exclusive Templates",
          "24 hour support",
          "Customer Managemet",
        ],
      },
      {
        icon: price_icon_3,
        price: 220,
        price_text: "month",
        text: "Collaborate Professionally.",
        tag: "Commercial",
        feature_text: "Everything in Personal Plan, plus",
        lists: [
          "User provisioning (SCIM)",
          "Databases with rich property types",
          "Custom guest editors",
          "24 hour support",
          "Customer Managemet",
        ],
      },
    ],
  },
  {
    id: "nav-yearly",
    active: true,
    pricing_items: [
      {
        icon: price_icon_1,
        price: 0,
        price_text: "free",
        text: "Perfect Plan for Starters.",
        tag: "Starter",
        feature_text: "Includes:",
        lists: [
          "Full Access Library",
          "Business & Financ Analysing",
          "Exclusive Templates",
          "24 hour support",
        ],
      },
      {
        has_popular: true,
        icon: price_icon_2,
        price: 198,
        price_text: "month",
        text: "Collaborate Professionally.",
        tag: "Commercial",
        feature_text: "Everything in Personal Plan, plus",
        lists: [
          "Full Access Library",
          "Business & Financ Analysing",
          "Exclusive Templates",
          "24 hour support",
          "Customer Managemet",
        ],
      },
      {
        icon: price_icon_3,
        price: 298,
        price_text: "month",
        text: "Collaborate Professionally.",
        tag: "Commercial",
        feature_text: "Everything in Personal Plan, plus",
        lists: [
          "User provisioning (SCIM)",
          "Databases with rich property types",
          "Custom guest editors",
          "24 hour support",
          "Customer Managemet",
        ],
      },
    ],
  },
];

const AgencyPricing = () => {
  return (
    <>
      <section className="pricing__area pt-110 pb-140 p-relative z-index-1">
        <div className="pricing__shape">
          <Image className="pricing__shape-2" src={shape_1} alt="shape" />
          <Image className="pricing__shape-3" src={shape_2} alt="shape" />
          <Image className="pricing__shape-4" src={shape_3} alt="shape" />
          <Image className="pricing__shape-5" src={shape_4} alt="shape" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__title-wrapper-5 mb-50 text-center">
                <span className="section__title-pre-5">Pricing Plan</span>
                <h3 className="section__title-5">Plans for Everyone</h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
              <div className="pricing__tab-nav tp-tab mb-50 mx-auto">
                <nav>
                  <div
                    className="nav nav-tabs price-tab-slide justify-content-center"
                    id="nav-tab"
                  >
                    <label
                      htmlFor="price-tab-check"
                      className="nav justify-content-center"
                      role="tablist"
                    >
                      <span
                        className="nav-link"
                        id="nav-monthly-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-monthly"
                        role="tab"
                        aria-controls="nav-monthly"
                        aria-selected="false"
                        tabIndex='-1'
                      >
                        Billed monthly
                      </span>
                      <input type="checkbox" id="price-tab-check" />
                      <i></i>
                      <span
                        className="nav-link active"
                        id="nav-yearly-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-yearly"
                        role="tab"
                        aria-controls="nav-yearly"
                        aria-selected="true"
                        tabIndex='-1'
                      >
                        Billed yearly <span>-35%</span>
                      </span>
                    </label>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div
                className="tab-content wow fadeInUp"
                id="nav-tabContent"
                data-wow-delay=".3s"
                data-wow-duration="1s"
              >
                {pricing_data.map((item, i) => (
                  <div
                    key={i}
                    className={`tab-pane fade ${item.active ? "show active" : ""}`}
                    id={`${item.id}`}
                    role="tabpanel"
                    aria-labelledby={`${item.id}-tab`}
                    tabIndex="0"
                  >
                    <div className="row">
                      {item.pricing_items.map((item_box, i) => {
                        const {has_popular,price,price_text,icon,text,lists,feature_text,tag,} = item_box;
                        return (
                          <div
                            key={i}
                            className="col-xxl-4 col-xl-4 col-lg-4 col-md-6"
                          >
                            <div
                              className={`pricing__item-5 d-flex flex-column ${
                                has_popular ? "has-popular" : ""
                              } mb-40`}
                            >
                              {has_popular && (
                                <div className="pricing__popular">
                                  <p>MOST POPULAR</p>
                                </div>
                              )}
                              <div className="pricing__top-5 grey-bg-10 p-relative">
                                <div className="pricing__icon-5">
                                  <Image src={icon} alt="icon" style={{width:'auto',height:'100px'}} />
                                </div>
                                <div className="pricing__title-wrapper">
                                  <h3 className="pricing__title-5">
                                    ${price}
                                    <span>/ {price_text}</span>
                                  </h3>
                                  <p>{text}</p>
                                </div>
                                <div className="pricing__tag-5">
                                  <span>{tag}</span>
                                </div>
                              </div>
                              <div className="pricing__content-5">
                                <div className="pricing__content-5-inner d-flex flex-column justify-content-between">
                                  <div className="pricing__feature-5">
                                    <p>{feature_text}</p>
                                    <ul>
                                      {lists.map((l, i) => (
                                        <li key={i}>{l}</li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div className="pricing__btn-5">
                                    <Link
                                      href="contact"
                                      className="tp-btn-grey w-100"
                                    >
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AgencyPricing;
