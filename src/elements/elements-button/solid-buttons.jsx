import React from "react";

// single button
function SolidButtonBorder({ btn_cls }) {
  return (
    <div className="col mb-20">
      <div className="tp-button-demo">
        <a href="#" className={btn_cls}>
          Button Text
        </a>
      </div>
    </div>
  );
}

const SolidButtons = () => {
  return (
    <div className="tp-button-wrapper pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-section-wrapper-3 mb-50 text-center">
              <span className="tp-section-subtitle-3">
                Minimal Button Styles
              </span>
              <h3 className="tp-section-title-3">Solid Border Style</h3>
            </div>
          </div>
        </div>
        <div className="row row-cols-auto">
          <SolidButtonBorder btn_cls="tp-btn-border-pink" />
          <SolidButtonBorder btn_cls="tp-btn-border-brown" />
          <SolidButtonBorder btn_cls="tp-btn-border-green" />
          <SolidButtonBorder btn_cls="tp-btn-9" />
          <SolidButtonBorder btn_cls="tp-load-more-btn" />
          <SolidButtonBorder btn_cls="tp-btn-border-5" />
          <SolidButtonBorder btn_cls="tp-btn-border-9" />
          <SolidButtonBorder btn_cls="tp-btnr-border tp-btn-shine-effect" />
        </div>
      </div>
    </div>
  );
};

export default SolidButtons;
