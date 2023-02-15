import { useFormik } from "formik";
import React from "react";
// internal
import ErrorMsg from "./error-msg";
import { portfolio_schema } from "@utils/validation-schema";

const PortfolioContactForm = () => {
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        phone: "",
        subject: "",
        msg: "",
      },
      validationSchema: portfolio_schema,
      onSubmit: (values, { resetForm }) => {
        console.log(values);
        resetForm();
      },
    });
  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-6">
          <div className="contact__input-9">
            <input
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Your name*"
              id="name"
            />
            {touched.name && <ErrorMsg error={errors.name} />}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="contact__input-9">
            <input
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              placeholder="Your email address*"
              id="email"
            />
            {touched.email && <ErrorMsg error={errors.email} />}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="contact__input-9">
            <input
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Mobile Number"
              id="phone"
            />
            {touched.phone && <ErrorMsg error={errors.phone} />}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="contact__input-9">
            <input
              name="subject"
              value={values.company}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Subject"
              id="subject"
            />
            {touched.subject && <ErrorMsg error={errors.subject} />}
          </div>
        </div>
        <div className="col-lg-12">
          <div className="contact__input-9">
            <textarea
              name="msg"
              value={values.msg}
              onChange={handleChange}
              onBlur={handleBlur}
              id="msg"
              placeholder="How can we help you?"
            ></textarea>
            {touched.msg && <ErrorMsg error={errors.msg} />}
          </div>
        </div>
        <div className="col-lg-12">
          <div className="contact__btn-9">
            <button type="submit" className="tp-btn-6 w-100">
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PortfolioContactForm;
