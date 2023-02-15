import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import Menus from "./menus";
import logo from "@assets/img/logo/logo-black.svg";
import useSticky from "@hooks/use-sticky";
import OffCanvasSix from "@components/common/off-canvas/off-canvas-6";

const HeaderSix = () => {
  const { sticky } = useSticky();
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  return (
    <>
      <header>
        <div className="header__area">
          <div
            className={`header__bottom-7 header__transparent header__padding-6 header__sticky header__sticky-white ${
              sticky ? "header-sticky" : ""
            }`}
            id="header-sticky"
          >
            <div className="container">
              <div className="mega-menu-wrapper p-relative">
                <div className="row align-items-center">
                  <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-4 col-sm-5 col-8">
                    <div className="logo">
                      <Link href="/">
                        <Image src={logo} alt="logo" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xxl-7 col-xl-7 col-lg-8 d-none d-xl-block">
                    <div className="main-menu main-menu-7">
                      <nav id="mobile-menu-3">
                        <Menus />
                      </nav>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-8 col-sm-7 col-4">
                    <div className="header__bottom-right-6 d-flex justify-content-end align-items-center pl-30">
                      <div className="header__btn-7 d-flex align-items-center">
                        <Link
                          href="login"
                          className="tp-header-btn-2 d-none d-md-inline-block"
                        >
                          <i className="fi fi-rs-user"></i> Login
                        </Link>
                        <Link
                          href="contact"
                          className="tp-btnr tp-btn-shine-effect d-none d-sm-inline-block ml-30"
                        >
                          {"Les't"} Talk
                        </Link>
                      </div>
                      <div className="header__hamburger ml-50 d-xl-none">
                        <button
                          type="button"
                          onClick={() => setIsOffCanvasOpen(true)}
                          className="hamburger-btn hamburger-btn-black offcanvas-open-btn"
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
        </div>
      </header>

      {/* off canvas start */}
      <OffCanvasSix
        isOffCanvasOpen={isOffCanvasOpen}
        setIsOffCanvasOpen={setIsOffCanvasOpen}
      />
      {/* off canvas end */}
    </>
  );
};

export default HeaderSix;
