import React from "react";
// internal
import NewsletterPopupOne from "@components/newsletter-popup/newsletter-popup-1";

const ElSubsStyleOne = () => {
  return (
    <div className="newsletter-demo-wrapper pt-110 pb-120 grey-bg-4">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="tp-section-wrapper-3 mb-50 text-center">
              <span className="tp-section-subtitle-3">
                Modern & Clean Design
              </span>
              <h3 className="tp-section-title-3">Newsletter Classic Style</h3>
            </div>
          </div>
        </div>
      </div>
      <NewsletterPopupOne />
    </div>
  );
};

export default ElSubsStyleOne;
