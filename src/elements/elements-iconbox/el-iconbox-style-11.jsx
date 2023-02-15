import React from "react";
// internal
import { per_port_service_data } from "@components/services/portfolio-service";
import SinglePersonalPortSerItem from "@components/services/single-service/single-personal-port-ser-item";

const ElIconBoxStyleEleven = () => {
  return (
    <section className="services__area pt-110 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="tp-section-wrapper-3 mb-60 text-center">
              <span className="tp-section-subtitle-3">
                Minimal & Clean Design
              </span>
              <h3 className="tp-section-title-3">Box Shadow Style</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {per_port_service_data.map((item, i) => (
            <div key={i} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <SinglePersonalPortSerItem style_2={true} item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElIconBoxStyleEleven;
