import React from "react";
import Link from "next/link";
// internal
import { Chat, MailThree } from "@svg/index";
import HelpContactForm from "@components/forms/help-contact-form";

const HelpCenterContacts = () => {
  return (
    <section className="contact__area grey-bg-4 pb-120 pt-110">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="tp-section-wrapper-2 text-center mb-70">
              <h3 className="tp-section-title-2">
                Can’t find what you’re looking for?
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <div className="contact__wrapper-2">
              <div className="contact__content-2">
                <h3 className="contact-title">Send Us a Mail</h3>
                <p>
                  Do you have a query about your order, or need a hand with
                  getting your products set up? If so, please fill in the form
                  below.
                </p>
              </div>
              <div className="contact__info-box">
                <h3 className="contact__info-box-title">Reach Out</h3>
                <p>
                  Any confusion about your order? We <br /> are here to help
                  24/7
                </p>

                <div className="contact__info-item-wrapper d-flex flex-wrap align-items-center">
                  <div className="contact__info-item">
                    <div className="contact__info-icon">
                      <span>
                        <Chat />
                      </span>
                    </div>
                    <div className="contact__info-content">
                      <p>
                        <Link href="/contact">Start Chat</Link>
                      </p>
                    </div>
                  </div>
                  <div className="contact__info-item">
                    <div className="contact__info-icon">
                      <span>
                        <MailThree />
                      </span>
                    </div>
                    <div className="contact__info-content has-fw-400">
                      <p>
                        <a href="mailto:support@harry.com">support@harry.com</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="contact__info-box-refund">
                  <p>
                    See our Refund <Link href="/policy">Policies</Link> or{" "}
                    <Link href="/faq">FAQ</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8">
            <div className="contact__form-3 ml-70">
              {/* form start */}
              <HelpContactForm />
              {/* form end */}
              <p className="ajax-response"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpCenterContacts;
