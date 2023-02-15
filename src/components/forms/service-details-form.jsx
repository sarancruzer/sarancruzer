import React from "react";

const ServiceDetailsForm = () => {
  return (
    <form id="contact-form" onSubmit={e => e.preventDefault()}>
      <div className="services__contact-input">
        <input name="name" type="text" placeholder="Your Name" />
      </div>
      <div className="services__contact-input">
        <input name="email" type="email" placeholder="Your Email Address" />
      </div>
      <div className="services__contact-input">
        <textarea name="message" placeholder="Your message"></textarea>
      </div>
      <div className="services__contact-btn">
        <button type="submit" className="tp-btn w-100">
          Send Email
        </button>
      </div>
    </form>
  );
};

export default ServiceDetailsForm;
