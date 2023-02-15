import React from "react";

const ServicesSubscribe = ({ element_style }) => {
  return (
    <section
      className={`subscribe__area p-relative z-index-1 ${
        element_style ? "pb-140" : ""
      }`}
    >
      {!element_style && <div className="subscribe__bg"></div>}
      <div className="container">
        <div className="subscribe__inner-14">
          <div className="row gx-0 align-items-center">
            <div className="col-xl-5 col-lg-5">
              <h3 className="subscribe__title-14">Join our Newsletter</h3>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="subscribe__form-14">
                <form>
                  <input
                    type="email"
                    required
                    placeholder="Your Email (required)"
                  />
                  <button type="submit">Subscribe Me</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSubscribe;
