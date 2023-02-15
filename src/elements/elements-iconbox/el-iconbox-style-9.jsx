import React from "react";
// internal
import { PolityFeaturesItems } from "@components/features/politician-feature";

const ElIconBoxStyleNine = () => {
  return (
    <section className="features__area pt-110 pb-85">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="tp-section-wrapper-3 mb-60 text-center">
              <span className="tp-section-subtitle-3">
                Minimal & Clean Design
              </span>
              <h3 className="tp-section-title-3">Icon Box Style 6</h3>
            </div>
          </div>
        </div>
        {/* PolityFeaturesItems */}
        <PolityFeaturesItems />
        {/* PolityFeaturesItems */}
      </div>
    </section>
  );
};

export default ElIconBoxStyleNine;
