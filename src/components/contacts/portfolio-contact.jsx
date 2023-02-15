import React from "react";
import Image from "next/image";
// internal
import contact_shape from "@assets/img/contact/contact-icon-shape.png";
import PortfolioContactForm from "@components/forms/portfolio-contact-form";
import { PhoneFour, EmailThree } from "@svg/index";

const PortfolioContact = ({ element_style = false }) => {
  return (
    <>
      <section
        className={`contact__area ${
          element_style ? "pt-110 pb-100" : "pt-150 pb-150"
        } p-relative z-index-1`}
      >
        <div className="contact__shape">
          <span className="contact__shape-1"></span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6">
              <div className="contact__wrapper-9">
                <div className="section__title-wrapper-9 mb-85">
                  <h3 className="section__title-9">Start projects?</h3>
                </div>
                <div className="contact__list-9 mr-100">
                  <div className="contact__list-item-9 flex-wrap d-flex align-items-start">
                    <div className="contact__list-icon-9">
                      <span>
                        <PhoneFour />
                        <Image
                          className="contact-icon-shape"
                          src={contact_shape}
                          alt="shape"
                        />
                      </span>
                    </div>
                    <div className="contact__list-content-9">
                      <h5>Phone Number</h5>
                      <p>
                        <a href="tel:67000-000-9012">+91 95970 09544</a>
                      </p>
                    </div>
                  </div>
                  <div className="contact__list-item-9 flex-wrap d-flex align-items-start">
                    <div className="contact__list-icon-9">
                      <span>
                        <EmailThree />
                        <Image
                          className="contact-icon-shape"
                          src={contact_shape}
                          alt="shape"
                        />
                      </span>
                    </div>
                    <div className="contact__list-content-9">
                      <h5>Email</h5>
                      <p>
                        <a href="mailto:hello@contact.com">sarancruzer@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-6">
              <div className="contact__form-9 pt-20 pl-70">
                <h4 className="contact__form-9-title">
                  {"Let's"} get in touch with us
                </h4>
                <div className="contact__form-9-inner">
                  {/* form start */}
                  <PortfolioContactForm />
                  {/* form end */}
                  <p className="ajax-response"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioContact;
