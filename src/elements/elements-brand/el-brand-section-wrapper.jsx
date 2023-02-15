import React from "react";

const ElBrandSectionWrapper = ({cls='', subtitle, title }) => {
  return (
    <div className={`row ${cls}`}>
      <div className="col-xxl-12">
        <div className="tp-section-wrapper-3 mb-60 text-center">
          <span className="tp-section-subtitle-3">{subtitle}</span>
          <h3 className="tp-section-title-3">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default ElBrandSectionWrapper;
