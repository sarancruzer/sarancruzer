import React from "react";
// internal
import { Location, MailTwo, PhoneTwo } from "@svg/index";
import LawyerContactForm from "../forms/lawyer-contact-form";

const LawyerContact = ({ element_style = false }) => {
  return (
    <>
      <section
        className={`contact__area ${
          element_style ? "pt-120 pb-120" : "pt-140 pb-140"
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 col-xl-6 col-lg-5">
              <div
                className="contact__wrapper wow fadeInLeft"
                data-wow-delay=".3s"
                data-wow-duration="1s"
              >
                <div className="section__title-wrapper-4 mb-20">
                  <span className="section__title-pre-4">Contact us now!</span>
                  <h3 className="section__title-4">Get Free Consultation</h3>
                </div>
                <p>Feel free to ask somthing we are here</p>
                <div className="contact__list">
                  <div className="contact__list-item d-flex align-items-center">
                    <div className="contact__list-icon">
                      <span>
                        <PhoneTwo />
                      </span>
                    </div>
                    <div className="contact__list-content">
                      <h5>Call us at</h5>
                      <p>
                        <a href="tel:602-762-472-96">+(602) 762 472 96</a>
                      </p>
                    </div>
                  </div>
                  <div className="contact__list-item d-flex align-items-center">
                    <div className="contact__list-icon">
                      <span>
                        <MailTwo />
                      </span>
                    </div>
                    <div className="contact__list-content">
                      <h5>Email us on</h5>
                      <p>
                        <a href="mailto:sarancruzer@lawyer.com">sarancruzer@lawyer.com</a>
                      </p>
                    </div>
                  </div>
                  <div className="contact__list-item d-flex align-items-center">
                    <div className="contact__list-icon">
                      <span>
                        <Location />
                      </span>
                    </div>
                    <div className="contact__list-content">
                      <h5>Address</h5>
                      <p>
                        <a
                          href="https://www.google.com/maps/place/102+Thompson+St,+New+York,+NY+10012,+USA/@40.7255437,-74.004061,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598c338f691d:0x6d5f394e7a1962cc!8m2!3d40.7255397!4d-74.0018723"
                          rel="noreferrer"
                          target="_blank"
                        >
                          102 Thompson, New York
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-6 col-lg-7">
              <div
                className="contact__form ml-70 wow fadeInRight"
                data-wow-delay=".3s"
                data-wow-duration="1s"
              >
                {/* form start */}
                <LawyerContactForm />
                {/* form end */}
                <p className="ajax-response"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LawyerContact;
