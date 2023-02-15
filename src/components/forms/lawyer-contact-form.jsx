import React from "react";
import { useFormik } from "formik";
// internal
import { law_schema } from "@utils/validation-schema";
import ErrorMsg from "./error-msg";

const LawyerContactForm = () => {
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        msg: "",
      },
      validationSchema: law_schema,
      onSubmit: (values, { resetForm }) => {
        console.log(values);
        resetForm();
      },
    });
  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="contact__input">
            <input
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="First Name"
              id="firstName"
            />
            {touched.firstName && <ErrorMsg error={errors.firstName} />}
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact__input">
            <input
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Last Name"
              id="lastName"
            />
            {touched.lastName && <ErrorMsg error={errors.lastName} />}
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact__input">
            <input
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              placeholder="Email"
              id="email"
            />
            {touched.email && <ErrorMsg error={errors.email} />}
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact__input">
            <input
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Phone"
              id="phone"
            />
            {touched.phone && <ErrorMsg error={errors.phone} />}
          </div>
        </div>
        <div className="col-md-12">
          <div className="contact__input">
            <textarea
              name="msg"
              value={values.msg}
              onChange={handleChange}
              onBlur={handleBlur}
              id="msg"
              placeholder="Case Details"
            ></textarea>
            {touched.msg && <ErrorMsg error={errors.msg} />}
          </div>
        </div>
        <div className="col-md-12">
          <div className="contact__btn">
            <button type="submit" className="tp-btn-brown">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LawyerContactForm;
