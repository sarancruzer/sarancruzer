import React from "react";
// internal
import { BuildShop, OptimizedTwo, VideoPlayerTwo } from "@svg/index";

// single feature
function SingleFeature({ icon, title, subtitle }) {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6">
      <div className="features__item-15 text-center">
        <div className="features__icon-15 mb-40">
          <span>{icon}</span>
        </div>
        <div className="features__content-15">
          <h3 className="features__title-15">{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

const ServiceThreeFeature = ({ element_style = false }) => {
  return (
    <section
      className={`features__area ${element_style ? "pt-110 pb-120" : ""}`}
    >
      <div className="container">
        {element_style && (
          <div className="row">
            <div className="col-xxl-12">
              <div className="tp-section-wrapper-3 mb-60 text-center">
                <span className="tp-section-subtitle-3">
                  Minimal &amp; Clean Design
                </span>
                <h3 className="tp-section-title-3">Box Shadow with Border</h3>
              </div>
            </div>
          </div>
        )}
        <div
          className={`features__wrapper-15 ${
            element_style ? "" : "is-translate-50"
          } white-bg`}
        >
          <div className="row gx-0">
            <SingleFeature
              icon={<BuildShop />}
              title="Build your shop"
              subtitle="Build a website that loads fast for the highest user experience."
            />
            <SingleFeature
              icon={<VideoPlayerTwo />}
              title="Video Tutorials"
              subtitle="Build a website that loads fast for the highest user experience."
            />
            <SingleFeature
              icon={<OptimizedTwo />}
              title="Speed Optimized"
              subtitle="Build a website that loads fast for the highest user experience."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceThreeFeature;
