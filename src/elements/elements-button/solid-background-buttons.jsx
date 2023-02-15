import React from "react";

// single button
function ButtonStyle({ btn_cls }) {
  return (
    <div className="col mb-40">
      <div className="tp-button-demo">
        <a href="#" className={btn_cls}>
          Button Text
        </a>
      </div>
    </div>
  );
}

const SolidBackgroundButtons = () => {
  return (
    <div className="tp-button-wrapper pt-110 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-section-wrapper-3 mb-60 text-center">
              <span className="tp-section-subtitle-3">
                Minimal Button Styles
              </span>
              <h3 className="tp-section-title-3">Solid Background Style</h3>
            </div>
          </div>
        </div>
        <div className="row row-cols-auto align-items-center">
          <ButtonStyle btn_cls="tp-btn" />
          <ButtonStyle btn_cls="tp-btn-brown" />
          <ButtonStyle btn_cls="tp-btn-green" />
          <ButtonStyle btn_cls="tp-btn-5 tp-link-btn-3" />
          <ButtonStyle btn_cls="tp-btn-blue-2 tp-link-btn-3" />
          <ButtonStyle btn_cls="tp-btn-4 tp-style-border" />
          <ButtonStyle btn_cls="tp-btn-10" />
          <ButtonStyle btn_cls="tp-btnr-2 tp-btn-shine-effect" />
          <ButtonStyle btn_cls="tp-btn-7" />
          <ButtonStyle btn_cls="tp-btn-blue-sm" />
          <ButtonStyle btn_cls="tp-btn-grey" />
          <ButtonStyle btn_cls="tp-btn-orange-2" />
        </div>
      </div>
    </div>
  );
};

export default SolidBackgroundButtons;
