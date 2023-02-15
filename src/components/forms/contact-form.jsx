import React from "react";
import { useFormik } from "formik";
// internal
import { contact_schema } from "@utils/validation-schema";
import ErrorMsg from "./error-msg";

const ContactForm = ({ style_2 = false }) => {
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        phone: "",
        company: "",
        msg: "",
      },
      validationSchema: contact_schema,
      onSubmit: (values, { resetForm }) => {
        console.log(values);
        resetForm();
      },
    });
  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="contact__input-2">
            <input
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Enter your name"
              id="name"
            />
            {touched.name && <ErrorMsg error={errors.name} />}
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact__input-2">
            <input
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              placeholder="Enter your email"
              id="email"
            />
            {touched.email && <ErrorMsg error={errors.email} />}
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact__input-2">
            <input
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Mobile no"
              id="phone"
            />
            {touched.phone && <ErrorMsg error={errors.phone} />}
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact__input-2">
            <input
              name="company"
              value={values.company}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Company"
              id="company"
            />
            {touched.company && <ErrorMsg error={errors.company} />}
          </div>
        </div>
        <div className="col-md-12">
          <div className="contact__input-2">
            <textarea
              name="msg"
              value={values.msg}
              onChange={handleChange}
              onBlur={handleBlur}
              id="msg"
              placeholder="Your message"
            ></textarea>
            {touched.msg && <ErrorMsg error={errors.msg} />}
          </div>
        </div>
        <div className="col-md-12">
          <div className="contact__agree d-flex align-items-start mb-25">
            <input className="e-check-input" type="checkbox" id="e-agree" />
            <label className="e-check-label" htmlFor="e-agree">
              I am bound by the terms of the Service I accept Privacy Policy.
            </label>
          </div>
        </div>
        <div className="col-md-5">
          <div className="contact__btn-2">
            <button type="submit" className="tp-btn">
              Send Message
            </button>
          </div>
        </div>
        {style_2 && (
          <div className="col-md-7">
            <div className="contact__form-call float-md-end">
              <span>Call for Consultation</span>
              <p>
                <a href="tel:2236-384-870">
                  <i className="fa-solid fa-phone-flip"></i> +2236 384 870
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
