import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import { CorrectIcon, HighlightShapeThree, InfoIcon } from "@svg/index";
import shape from "@assets/img/price/7/price-shape-1.png";
import price_icon from "@assets/img/price/7/price-icon-1.png";
import price_icon_2 from "@assets/img/price/7/price-icon-2.png";

// pricing header
function PricingHeader({ best, tag, price }) {
  return (
    <div className="pricing__top-7 p-relative text-center">
      {best && (
        <div className="pricing__popular-2">
          <span>Best Choice</span>
        </div>
      )}
      <div className="pricing__tag-7">
        <span>{tag}</span>
      </div>
      <div className="pricing__title-wrapper-7">
        <h3 className="pricing__title-7">${price}</h3>
        <p>
          Free forever,! <br /> No credit card required.
        </p>
      </div>
    </div>
  );
}

// pricing item
function PricingItem({ title, info_1, info_2, info_3 }) {
  return (
    <div className="pricing__feature-info-item">
      <div className="row gx-0 align-items-center">
        <div className="col-xl-4 col-4">
          <div className="pricing__feature-info-content d-flex align-items-center">
            <div className="pricing__feature-info-details">
              <span>
                <InfoIcon />
              </span>
              <div className="pricing__feature-info-tooltip transition-3">
                <p>
                  Add gradient heading, button, pricing table testimonial etc.
                </p>
              </div>
            </div>
            <div className="pricing__feature-info-text">
              <p>{title}</p>
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-8">
          <div className="pricing__feature-info-wrapper d-flex align-items-center">
            <div className="pricing__feature-info-available text-center">
              <p>{info_1}</p>
            </div>
            <div className="pricing__feature-info-available text-center">
              <p>{info_2}</p>
            </div>
            <div className="pricing__feature-info-available text-center">
              <p>
                {info_3}
                {/* <span>
                <CorrectIcon/>
                </span> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// StartUpPricing area
const StartUpPricing = ({
  style_2 = false,
  hide_shape = false,
  el_spacing,
}) => {
  return (
    <>
      <section
        className={`pricing__area ${style_2 ? "pt-110 pb-120" : "pt-130"} ${
          el_spacing ? el_spacing : ""
        } p-relative z-index-1`}
      >
        {!hide_shape && (
          <div className="pricing__shape">
            <Image className="pricing__shape-6" src={shape} alt="shape" />
          </div>
        )}
        <div className="container">
          <div className="row justify-content-center">
            <div className={`col-xl-7 col-lg-8 ${style_2 ? "col-md-10" : ""}`}>
              {!style_2 && (
                <div className="section__title-wrapper-7 text-center mb-60">
                  <span className="section__title-pre-7">Our Pricing</span>
                  <h3 className="section__title-7">
                    Simple{" "}
                    <span className="section__title-7-highlight">
                      pricing
                      <HighlightShapeThree />
                    </span>{" "}
                    solutions for everyone.
                  </h3>
                </div>
              )}
              {style_2 && (
                <div className="tp-section-wrapper-2 mb-65 text-center">
                  <span className="tp-section-subtitle-2">PRICING PAGE</span>
                  <h3 className="tp-section-title-2 font-70">
                    Pricing built to suits teams of all sizes.
                  </h3>
                </div>
              )}
            </div>
          </div>
          <div
            className={`pricing__table ${
              style_2 ? "pricing__style-2" : ""
            } white-bg`}
          >
            <div className="pricing__table-wrapper">
              {/* <!-- pricng header --> */}
              <div className="pricing__header grey-bg-13">
                <div className="row gx-0">
                  <div className="col-xl-4 col-4">
                    <div className="pricing__header-content">
                      <h3 className="pricing__header-title">Contact Us!</h3>
                      <Link href="/contact" className="tp-btn-11">
                        Get Started
                      </Link>
                      <Image
                        className="pricing-header-shape"
                        src={style_2 ? price_icon_2 : price_icon}
                        alt="price icon"
                      />
                    </div>
                  </div>
                  <div className="col-xl-8 col-8">
                    <div className="pricing__header-top-wrapper d-flex align-items-center">
                      {/* <!-- pricing heading --> */}
                      <PricingHeader tag="Silver Plan" price="94" />
                      <PricingHeader best={true} tag="Advanced" price="59" />
                      <PricingHeader tag="Enterprise" price="79" />
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- pricing features item wrapper --> */}
              <div className="pricing__feature-item-wrapper">
                {/* <!-- pricing features item --> */}
                <PricingItem
                  title="Unlimited project"
                  info_1={
                    <>
                      <span>
                        <CorrectIcon />
                      </span>
                    </>
                  }
                  info_2={
                    <>
                      <span>
                        <CorrectIcon />
                      </span>
                    </>
                  }
                  info_3={
                    <>
                      <span>
                        <CorrectIcon />
                      </span>
                    </>
                  }
                />

                <PricingItem
                  title="Free Google Analysis"
                  info_1={"$6/Year"}
                  info_2={
                    <>
                      <span>
                        <CorrectIcon />
                      </span>
                    </>
                  }
                  info_3={
                    <>
                      <span>
                        <CorrectIcon />
                      </span>
                    </>
                  }
                />

                <PricingItem
                  title="Lifetime support & SEO Experts"
                  info_1={
                    <>
                      <span>
                        <CorrectIcon />
                      </span>
                    </>
                  }
                  info_2={
                    <>
                      <span>
                        <CorrectIcon />
                      </span>
                    </>
                  }
                  info_3={
                    <>
                      <span>
                        <CorrectIcon />
                      </span>
                    </>
                  }
                />

                <PricingItem
                  title="Data Security & Backup"
                  info_1="100 GB"
                  info_2="1TB"
                  info_3="Unlimited"
                />
                <PricingItem
                  title="Auto Lifetime Upgrade"
                  info_1={
                    <>
                      <span>
                        <CorrectIcon />
                      </span>
                    </>
                  }
                  info_2={
                    <>
                      <span>
                        <CorrectIcon />
                      </span>
                    </>
                  }
                  info_3={
                    <>
                      <span>
                        <CorrectIcon />
                      </span>
                    </>
                  }
                />
                {/* <!-- pricing features item --> */}

                {/* <!-- pricing button --> */}
                <div className="pricing__footer">
                  <div className="row gx-0">
                    <div className="col-xl-4 col-4">
                      <div className="pricing__footer-content"></div>
                    </div>
                    <div className="col-xl-8 col-8">
                      <div className="pricing__btn-wrapper-7 d-flex align-items-center">
                        <div className="pricing__btn-7 text-center">
                          <Link href="/contact" className="tp-btnr-border-2">
                            Choose Plan
                          </Link>
                        </div>
                        <div className="pricing__btn-7 price-active text-center">
                          <Link href="/contact" className="tp-btnr-border-2">
                            Choose Plan
                          </Link>
                        </div>
                        <div className="pricing__btn-7 text-center">
                          <Link href="/contact" className="tp-btnr-border-2">
                            Choose Plan
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartUpPricing;
