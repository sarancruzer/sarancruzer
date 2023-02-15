import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import logo from "@assets/img/logo/logo-black.svg";
import signature from "@assets/img/shape/offcanvas-signature.png";
import SocialLinks from "@components/social";
import MobileMenus from "./mobile-menus";
import CloseThree from "@svg/close-3";

const OffCanvasThree = ({ isOffCanvasOpen, setIsOffCanvasOpen }) => {
  return (
    <React.Fragment>
      <div
        className={`offcanvas__area offcanvas__area-2 ${
          isOffCanvasOpen ? "offcanvas-opened" : ""
        }`}
      >
        <div className="offcanvas__wrapper">
          <div className="offcanvas__close">
            <button
              onClick={() => setIsOffCanvasOpen(false)}
              className="offcanvas__close-btn offcanvas__close-btn-2 offcanvas-close-btn"
            >
              <CloseThree />
            </button>
          </div>
          <div className="offcanvas__content">
            <div className="offcanvas__top mb-60 d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo logo">
                <Link href="/">
                  <Image src={logo} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="mobile-menu-2 fix mb-40 menu-counter mean-container">
              <div className="mean-bar">
                {/* MobileMenus start*/}
                <MobileMenus />
                {/* MobileMenus end*/}
              </div>
            </div>

            <div className="offcanvas__btn-2">
              <Link href="/job" className="tp-btn-offcanvas-green">
                We Are Hiring
              </Link>
            </div>
            <div className="offcanvas__text">
              <p>
                Im a UX Designer, Over the past 10+ years I’ve created
                well-crafted mobile and web apps by connecting Business goals
                with user needs.
              </p>

              <div className="offcanvas__signature mb-40">
                <Image src={signature} alt="signature" />
              </div>
            </div>

            <div className="offcanvas__link-btn mb-25">
              <Link href="/contact-2" className="tp-link-btn-circle">
                <span>
                  <i className="fa-regular fa-arrow-right"></i>
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
                Work <br /> With Us
              </Link>
            </div>
            <div className="offcanvas__social">
              <h3 className="offcanvas__social-title">Follow :</h3>
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

export default OffCanvasThree;
