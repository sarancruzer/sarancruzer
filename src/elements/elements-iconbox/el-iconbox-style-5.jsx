import React from "react";
// internal
import feature_icon_1 from "@assets/img/features/7/features-icon-1.png";
import feature_icon_2 from "@assets/img/features/7/features-icon-2.png";
import feature_icon_3 from "@assets/img/features/7/features-icon-3.png";
import { SingleFeature } from "@components/features/startup-features";

const ElIconBoxStyleFive = () => {
  return (
    <section className="features__area p-relative z-index-1 pb-90 pt-110">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="tp-section-wrapper-3 mb-60 text-center">
              <span className="tp-section-subtitle-3">
                Minimal & Clean Design
              </span>
              <h3 className="tp-section-title-3">Icon Box Style 3</h3>
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
      </div>
    </section>
  );
};

export default ElIconBoxStyleFive;
