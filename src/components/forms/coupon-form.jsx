import Link from "next/link";
import React from "react";

const CouponForm = () => {
  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <p className="form-row-first">
        <label>
          Username or email <span className="required">*</span>
        </label>
        <input type="text" />
      </p>
      <p className="form-row-last">
        <label>
          Password <span className="required">*</span>
        </label>
        <input type="text" />
      </p>
      <p className="form-row">
        <button className="tp-btn" type="submit">
          Login
        </button>
        <label>
          <input type="checkbox" /> {" "}
          Remember me
        </label>
      </p>
      <p className="lost-password">
        <Link href="/forgot">Lost your password?</Link>
      </p>
    </form>
  );
};

export default CouponForm;
