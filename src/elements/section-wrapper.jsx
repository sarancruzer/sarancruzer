import React from "react";

const SectionWrapper = ({title,subtitle}) => {
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="tp-section-wrapper-3 mb-50 text-center">
          <span className="tp-section-subtitle-3">{title}</span>
          <h3 className="tp-section-title-3">{subtitle}</h3>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
