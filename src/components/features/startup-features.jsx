import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import shape from "@assets/img/features/7/features-shape-2.png";
import feature_icon_1 from "@assets/img/features/7/features-icon-1.png";
import feature_icon_2 from "@assets/img/features/7/features-icon-2.png";
import feature_icon_3 from "@assets/img/features/7/features-icon-3.png";
import HighlightShapeTwo from "@svg/highlight-shape-2";

// single feature
export function SingleFeature({ delay, icon, title, subtitle }) {
  return (
    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
      <div
        className="features__item-7 text-center mb-30 white-bg transition-3 wow fadeInUp"
        data-wow-delay={delay}
        data-wow-duration="1s"
      >
        <div className="features__icon-7">
          <span>
            <Image src={icon} alt="icon" />
          </span>
        </div>
        <div className="features__content-7">
          <h3 className="features__title-7">{title}</h3>
          <p>{subtitle}</p>
          <div className="features__btn-7">
            <Link href="/service-details" className="tp-link-btn-3">
              Read More
              <span>
                <i className="fa-regular fa-arrow-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const StartupFeatures = () => {
  return (
    <>
      <section className="features__area p-relative z-index-1 pb-50 pt-125">
        <div className="features__shape">
          <Image className="features__shape-6" src={shape} alt="shape" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-7 col-xl-8 col-lg-9">
              <div className="section__title-wrapper-7 text-center mb-60">
                <span className="section__title-pre-7">Explore Features</span>
                <h3 className="section__title-7">
                  Harry for every{" "}
                  <span className="section__title-7-highlight">
                    business
                    <HighlightShapeTwo />{" "}
                  </span>
                  {" "} you need.
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <SingleFeature
              delay=".3s"
              icon={feature_icon_1}
              title="Manage Expenses"
              subtitle="Build an online store that rank higher & sell more and integrates easily."
            />
            <SingleFeature
              delay=".5s"
              icon={feature_icon_2}
              title="Responsive any device"
              subtitle="Build an online store that rank higher & sell more and integrates easily."
            />
            <SingleFeature
              delay=".7s"
              icon={feature_icon_3}
              title="World-class support"
              subtitle="Build an online store that rank higher & sell more and integrates easily."
            />
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-10 col-xl-10 col-lg-11">
              <div
                className="features__offer text-center mt-20 wow fadeInUp"
                data-wow-delay=".9s"
                data-wow-duration="1s"
              >
                <span>NEW FEATURES</span>
                <p>
                  {" "}
                  If you want to join the effort and help with the plugin,
                  please <Link href="/contact">Let Us Know</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartupFeatures;
