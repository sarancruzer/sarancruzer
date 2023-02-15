import React from "react";
// internal
import { SupportItems } from "@components/supports/services-support-area";

const ElIconBoxStyleTwelve = () => {
  return (
    <section className="support__area pt-110 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="tp-section-wrapper-3 mb-60 text-center">
              <span className="tp-section-subtitle-3">
                Minimal & Clean Design
              </span>
              <h3 className="tp-section-title-3">Simple Grid Style</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12">
            <SupportItems />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElIconBoxStyleTwelve;
