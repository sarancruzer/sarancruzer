import React from "react";
import Image from "next/image";
// internal
import contact_man from "@assets/img/contact/contact-man.png";
import VerticalContactForm from "@components/forms/verticle-contact-form";
import { Address, EmailAddress, Mobile } from "@svg/index";

// single list item
function SingleList({ color = "", icon, title, bottom_content }) {
  return (
    <div
      className={`contact__list-item-11 ${color} d-flex align-items-center fix`}
    >
      <div className="contact__list-icon-11">
        <span>{icon}</span>
      </div>
      <div className="contact__list-content-11">
        <h5>{title}</h5>
        {bottom_content}
      </div>
    </div>
  );
}

// contact area start
export function HomeVerticalContactArea({ element_style = false }) {
  return (
    <div className="contact__inner-11 mt-50 p-relative z-index-1">
      {!element_style && (
        <div className="contact__shape">
          <span className="contact__shape-circle"></span>
          <Image
            className="contact__shape-2"
            src={contact_man}
            alt="contact man"
          />
        </div>
      )}
      <div className="row">
        <div className="col-xxl-12">
          <div className="section__title-wrapper-11 mb-55">
            <span className="section__title-pre-11">Contact Us</span>
            <h3 className="section__title-11">Get in Touch with us</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-6 d-none d-lg-block">
          <div className="contact__wrapper-11">
            <div className="contact__list-11">
              <SingleList
                icon={<Address />}
                title="Our Address"
                bottom_content={
                  <>
                    <p>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.google.com/maps/place/Orville+St,+La+Presa,+CA+91977,+USA/@32.7092048,-117.0082772,17z/data=!3m1!4b1!4m5!3m4!1s0x80d9508a9aec8cd1:0x72d1ac1c9527b705!8m2!3d32.7092003!4d-117.0060885"
                      >
                        88 New South Head Rd, Triple SFW <br /> 66, New York
                      </a>
                    </p>
                  </>
                }
              />
              <SingleList
                color="is-green"
                icon={<Mobile />}
                title="Phone Number"
                bottom_content={
                  <>
                    <p>
                      Mobile: <a href="tel:688-0687-990">+688 0687 990</a>
                    </p>
                    <p>
                      Hotline: <a href="tel:688-0687-990">1900 26886</a>
                    </p>
                  </>
                }
              />
              <SingleList
                color="is-brown"
                icon={<EmailAddress />}
                title="Email Address"
                bottom_content={
                  <>
                    <p>
                      <a href="mailto:hello@harry.com">hello@harry.com</a>
                    </p>
                    <p>
                      <a href="mailto:hello@harry.com">
                        contact@harryportfolio.com
                      </a>
                    </p>
                  </>
                }
              />
            </div>
          </div>
        </div>
        <div className="col-xxl-8 col-xl-7 col-lg-7 col-md-12">
          <div className="contact__form-11 ml-70">
            {/* form start */}
            <VerticalContactForm />
            {/* form end */}
            <p className="ajax-response"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

const VerticalSliderItemFive = () => {
  return (
    <React.Fragment>
      <div className="slider__bg-text">
        <h3>headphone</h3>
      </div>
      <div className="container">
        <HomeVerticalContactArea />
      </div>
    </React.Fragment>
  );
};

export default VerticalSliderItemFive;
