import React from "react";
import Email from "@svg/email";

const ForgotForm = () => {
  return (
    <form>
      <div className="login__input-wrapper">
        <div className="login__input-item">
          <div className="login__input">
            <input type="email" placeholder="Email" />
            <span><Email /></span>
          </div>
        </div>
      </div>
      <div className="login__btn">
        <a href="#" className="tp-btn w-100">
          Send Request
        </a>
      </div>
    </form>
  );
};

export default ForgotForm;
