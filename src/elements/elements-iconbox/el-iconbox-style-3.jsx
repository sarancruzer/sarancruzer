import React from "react";
// internal
import service_data from "@data/service-data";
import CreativeSingleFeature from "@components/features/single-feature/creative-single-feature";

// data
const service_items = service_data.filter((item) => item.home_creative);

const ElIconBoxStyleThree = () => {
  return (
    <section className="features__area p-relative z-index-1 grey-bg-7 pt-110 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="tp-section-wrapper-3 mb-60 text-center">
              <span className="tp-section-subtitle-3">
                Minimal & Clean Design
              </span>
              <h3 className="tp-section-title-3">Colourful Icon Box</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {service_items.map((service, i) => (
            <CreativeSingleFeature key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElIconBoxStyleThree;
