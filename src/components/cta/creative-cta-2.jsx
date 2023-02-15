import React from "react";
import Image from "next/image";
// internal
import shape_1 from "@assets/img/cta/6/subscribe-shape-1.png";
import shape_2 from "@assets/img/cta/6/subscribe-shape-2.png";

const CreativeCtaTwo = ({ element_style = false }) => {
  return (
    <section
      className={`subscribe__area p-relative z-index-1 ${
        element_style ? "pt-120 pb-120" : "pt-70 grey-bg-7"
      }`}
    >
      {!element_style && <div className="subscribe__overlay"></div>}
      <div className="container">
        <div className="subscribe__inner p-relative z-index-1 theme-bg-6 fix">
          <div className="subscribe__shape">
            <Image className="subscribe__shape-1" src={shape_1} alt="shape" />
            <Image className="subscribe__shape-2" src={shape_2} alt="shape" />
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-10 col-sm-11">
              <div className="subscribe__wrapper text-center">
                <h3 className="subscribe__title">Subscriber to Newsletter</h3>
                <p>Uncover,analyze,track,and report on SEO data.</p>

                <div className="subscribe__form text-start">
                  <form action="#">
                    <div className="subscribe__input">
                      <input
                        type="email"
                        placeholder="Enter your email address..."
                      />
                      <button type="submit">Subscribe</button>
                    </div>
                  </form>
                  <div className="subscribe__form-list text-sm-center">
                    <ul>
                      <li>
                        <span>
                          <i className="fa-regular fa-check"></i> No credit card
                          required
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa-regular fa-check"></i> Cancel anytime
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeCtaTwo;
