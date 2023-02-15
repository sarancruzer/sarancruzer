import { useFormik } from "formik";
import React from "react";
// internal
import ErrorMsg from "./error-msg";
import { contact_schema } from "@utils/validation-schema";

const VerticalContactForm = () => {
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
          <div className="contact__input-11">
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
          <div className="contact__input-11">
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
          <div className="contact__input-11">
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
          <div className="contact__input-11">
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
          <div className="contact__input-11">
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
          <div className="contact__btn-11">
            <button type="submit" className="tp-btn-10">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default VerticalContactForm;
