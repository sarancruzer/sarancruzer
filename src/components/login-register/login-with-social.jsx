import React from "react";
// internal
import { Facebook, Google, Twitter } from "@svg/index";

const LoginWithSocial = () => {
  return (
    <div className="login__social-item d-flex flex-wrap justify-content-sm-center">
      <a href="#">
        <span className="login-social-icon">
          <Google />
        </span>
        <span>Google</span>
      </a>
      <a href="#">
        <span className="login-social-icon">
          <Facebook />
        </span>
        <span>Facebook</span>
      </a>
      <a href="#">
        <span className="login-social-icon">
          <Twitter />
        </span>
        <span>Twitter</span>
      </a>
    </div>
  );
};

export default LoginWithSocial;
