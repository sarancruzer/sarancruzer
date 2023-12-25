import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import { Email, Phone } from "@svg/index";
import logo from "@assets/img/logo/logo-black.svg";
import Menus from "./menus";
import OffCanvasTwo from "@components/common/off-canvas/off-canvas-2";
import useSticky from "@hooks/use-sticky";

const HeaderTwo = () => {
  const { sticky } = useSticky();
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  return (
    <>
      <header>
        <div className="header__area">
          <div className="header__top-4 header__padding-4">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-6">
                  <div className="logo">
                    <Link href={"/"}>
                      <Image src={logo} alt="logo" />
                    </Link>
                  </div>
                </div>
                <div className="col-xxl-5 col-xl-5 col-lg-3 d-none d-lg-block">
                  <div className="header__welcome">
                    <p className="d-none d-xl-inline-block">
                      We are a law firm located in Berlin.
                    </p>
                    <p>
                      <i className="fa-light fa-clock"></i> Sunday-Thures
                      10am-07pm
                    </p>
                  </div>
                </div>
                <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-8 col-6">
                  <div className="header__top-right-4 d-flex align-items-center justify-content-end">
                    <div className="header__info-wrapper-4 d-flex align-items-center justify-content-end">
                      <div className="header__info-item d-none d-lg-flex align-items-center">
                        <div className="header__info-icon">
                          <span>
                            <Phone />
                          </span>
                        </div>
                        <div className="header__info-content">
                          <h4>Call us:</h4>
                          <p>
                            <a href="tel:964-742-44-763">+964 742 44 763</a>
                          </p>
                        </div>
                      </div>
                      <div className="header__info-item d-none d-lg-flex align-items-center">
                        <div className="header__info-icon">
                          <span>
                            <Email />
                          </span>
                        </div>
                        <div className="header__info-content">
                          <h4>Email us:</h4>
                          <p>
                            <a href="mailto:sarancruzer@lawyer.com">
                              sarancruzer@lawyer.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="header__hamburger ml-50 d-lg-none">
                      <button
                        onClick={() => setIsOffCanvasOpen(true)}
                        type="button"
                        className="hamburger-btn hamburger-btn-brown offcanvas-open-btn"
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`header__style-4 header__sticky ${
              sticky ? "header-sticky" : ""
            }`}
            id="header-sticky"
          >
            <div className="container">
              <div className="mega-menu-wrapper p-relative">
                <div className="row align-items-center">
                  <div className="col-xxl-2 col-xl-2 col-lg-2 col-6">
                    <div className="logo">
                      <Link href="/">
                        <Image src={logo} alt="logo" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xxl-8 col-xl-7 col-lg-7 d-none d-lg-block">
                    <div className="main-menu main-menu-4 main-menu-ff-space">
                      <nav id="mobile-menu">
                        <Menus />
                      </nav>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-xl-3 col-lg-3 col-6">
                    <div className="header__style-4-right d-flex align-items-center justify-content-end">
                      <div className="header__btn-4 text-end d-none d-lg-block">
                        <Link href="/contact" className="tp-btn-brown">
                          Free Consultation
                        </Link>
                      </div>
                      <div className="header__hamburger ml-50 d-lg-none">
                        <button
                          onClick={() => setIsOffCanvasOpen(true)}
                          type="button"
                          className="hamburger-btn hamburger-btn-brown offcanvas-open-btn"
                        >
                          <span></span>
                          <span></span>
                          <span></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header__bottom-4 d-none d-lg-block">
            <div className="container">
              <div className="mega-menu-wrapper p-relative">
                <div className="row align-items-center">
                  <div className="col-xxl-8 col-xl-9 col-lg-9">
                    <div className="main-menu main-menu-4 main-menu-ff-space">
                      <nav>
                        <Menus />
                      </nav>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-3 col-lg-3">
                    <div className="header__btn-4 text-end">
                      <Link href="/contact" className="tp-btn-brown">
                        Free Consultation
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* off canvas start */}
      <OffCanvasTwo
        isOffCanvasOpen={isOffCanvasOpen}
        setIsOffCanvasOpen={setIsOffCanvasOpen}
      />
      {/* off canvas end */}
    </>
  );
};

export default HeaderTwo;
