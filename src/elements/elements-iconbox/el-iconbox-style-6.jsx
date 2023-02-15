import React from "react";
// internal
import service_data from "@data/service-data";
import StartupSingleService from "@components/services/single-service/startup-single-service";

// items
const services_items = service_data
  .filter((item) => item.home_startup)
  .slice(0, 3);

const ElIconBoxStyleSix = () => {
  return (
    <section className="services__area p-relative z-index-1 pt-110 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="tp-section-wrapper-3 mb-60 text-center">
              <span className="tp-section-subtitle-3">
                Minimal & Clean Design
              </span>
              <h3 className="tp-section-title-3">Icon Box Style 4</h3>
            </div>
          </div>
        </div>
        <div className="services__item-wrapper-7">
          <div className="row">
            {services_items.map((item) => (
              <StartupSingleService key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElIconBoxStyleSix;
