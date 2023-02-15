import React from "react";
// internal
import SocialLinks from "@components/social";

const SocialStyles = () => {
  return (
    <div className="tp-social-icon pt-100 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="tp-section-wrapper-3 mb-60 text-center">
              <span className="tp-section-subtitle-3">
                Minimal & Clean Design
              </span>
              <h3 className="tp-section-title-3">Social Icon Style</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {/* style one start */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer__social black-bg-5 text-center pt-50 pb-50 mb-30">
              <SocialLinks />
            </div>
          </div>
          {/* style two start */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div
              className="footer__social-4 text-center pt-50 pb-50 mb-30"
              data-bg-color="footer-bg-green"
            >
              <SocialLinks />
            </div>
          </div>
          {/* style three start */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer__social-3 black-bg-5 text-center pt-50 pb-50 mb-30">
              <SocialLinks />
            </div>
          </div>
          {/* style four start */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer__social-2 text-center pt-50 pb-50 mb-30">
              <SocialLinks />
            </div>
          </div>
          {/* style five start */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div
              className="footer__social-9 text-center pt-50 pb-50 d-block mb-30"
              data-bg-color="footer-bg-grey"
            >
              <SocialLinks />
            </div>
          </div>
          {/* style six start */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div
              className="footer__social-5 text-center pt-50 pb-50 mb-30"
              data-bg-color="footer-bg-black"
            >
              <SocialLinks />
            </div>
          </div>
          {/* style seven start */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div
              className="footer__social-6 text-center pt-50 pb-50 mb-30"
              data-bg-color="footer-bg-black-2"
            >
              <SocialLinks />
            </div>
          </div>
          {/* style eight start */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div
              className="footer__style-green text-center pt-50 pb-50 mb-30"
              data-bg-color="footer-bg-green-dark"
            >
              <div className="footer__social">
                <SocialLinks />
              </div>
            </div>
          </div>
          {/* style nine start */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer__social-8 text-center pt-50 pb-50 black-bg-5 mb-30">
              <SocialLinks />
            </div>
          </div>
          {/* style ten start */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div
              className="footer__social-10 text-center pt-50 pb-50 mb-30"
              data-bg-color="footer-bg-black-4"
            >
              <SocialLinks />
            </div>
          </div>
          {/* style eleven start */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="subscribe__social khaki-bg text-center pt-50 pb-50 mb-30">
              <SocialLinks />
            </div>
          </div>
          {/* style twelve start */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="postbox__share text-center pt-50 pb-50 grey-bg-4 mb-30">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialStyles;
