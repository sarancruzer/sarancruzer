import React from "react";
import Image from "next/image";
// internal
import shape from "@assets/img/cta/10/subscribe-shape-1.png";

const PoliticianSubscribe = () => {
  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="subscribe__area fix p-relative black-bg-18">
      <div className="subscribe__shape">
        <Image className="subscribe__shape-3" src={shape} alt="shape" />
      </div>
      <div className="container">
        <div className="subscribe__inner-10 pt-70 pb-30 has-border">
          <div className="row align-items-end">
            <div className="col-xxl-7 col-xl-7 col-lg-6">
              <div className="section__title-wrapper-10 is-white mb-45">
                <span className="section__title-pre-10">
                  Subscribe our newsletter
                </span>
                <h3 className="section__title-10">Get update every week</h3>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-6">
              <div className="subscribe__form-10 mb-55">
                <form onSubmit={handleSubmit}>
                  <div className="subscribe__input-10 p-relative">
                    <input type="email" placeholder="Enter your email" />
                    <button type="submit" className="tp-btn-7">
                      Subscribe Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoliticianSubscribe;
