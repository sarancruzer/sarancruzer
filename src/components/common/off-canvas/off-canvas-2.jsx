import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import logo from "@assets/img/logo/logo-white-solid.svg";
import shape from "@assets/img/shape/offcanvas-img-1.png";
import Close from "@svg/close";
import MobileMenus from "./mobile-menus";
import SocialLinks from "@components/social";

const OffCanvasTwo = ({ isOffCanvasOpen, setIsOffCanvasOpen }) => {
  return (
    <React.Fragment>
      <div
        className={`offcanvas__area offcanvas__area-4 ${
          isOffCanvasOpen ? "offcanvas-opened" : ""
        }`}
      >
        <div className="offcanvas__wrapper">
          <div
            className="offcanvas__close"
            onClick={() => setIsOffCanvasOpen(false)}
          >
            <button className="offcanvas__close-btn offcanvas__close-btn-4 offcanvas-close-btn">
              <Close />
            </button>
          </div>
          <div className="offcanvas__content">
            <div className="offcanvas__top mb-10 d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo logo">
                <Link href="/">
                  <Image src={logo} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="offcanvas__inner mb-80 d-none d-lg-block">
              <h4>We help to create visual strategies.</h4>
              <p>We want to hear from you. Let us know how we can help.</p>
              <Image src={shape} alt="shape" />
            </div>
            <div className="mobile-menu fix mb-40 menu-counter mean-container d-lg-none">
              <div className="mean-bar">
                {/* MobileMenus start*/}
                <MobileMenus />
                {/* MobileMenus end*/}
              </div>
            </div>

            <div className="offcanvas__inner-btn mb-80">
              <a href="#" className="tp-btn-offcanvas-white w-100">
                Say Hello!
              </a>
            </div>

            <div className="offcanvas__contact mb-40">
              <p className="offcanvas__contact-call">
                <a href="tel:+964-742-44-763">+964 742 44 763</a>
              </p>
              <p className="offcanvas__contact-mail">
                <a href="mailto:info@sarancruzer.com">info@sarancruzer.com</a>
              </p>
            </div>

            <div className="offcanvas__social-4">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* overlay */}
      <div
        onClick={() => setIsOffCanvasOpen(false)}
        className={`body-overlay ${isOffCanvasOpen ? "opened" : ""}`}
      ></div>
       {/* overlay */}
    </React.Fragment>
  );
};

export default OffCanvasTwo;
