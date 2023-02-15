import React from "react";
// internal
import service_data from "@data/service-data";
import SingleLawyerService from "@components/services/single-service/single-lawyer-service";

// items
const items = service_data.filter((ser) => ser.home_lawyer).slice(0, 3);

const ElIconBoxStyleTwo = () => {
  return (
    <section className="servivces__area pt-110 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="tp-section-wrapper-3 mb-60 text-center">
              <span className="tp-section-subtitle-3">
                Minimal & Clean Design
              </span>
              <h3 className="tp-section-title-3">
                Bordered With Background Image
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {items.map((item) => (
            <SingleLawyerService key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElIconBoxStyleTwo;
