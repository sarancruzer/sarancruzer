import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import Menus from "./menus";
import logo from "@assets/img/logo/logo-black.svg";
import OffCanvasFour from "@components/common/off-canvas/off-canvas-4";
import useSticky from "@hooks/use-sticky";
import PhoneThree from "@svg/phone-3";

const HeaderFour = () => {
  const { sticky } = useSticky();
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  return (
    <>
      <header>
        <div
          className={`header__area header-box-plr-5-245 header__padding-5 header__style-5 header__sticky header-sticky-blur ${
            sticky ? "header-sticky" : ""
          }`}
          id="header-sticky"
        >
          <div className="header__gradient-bg"></div>
          <div className="header__top-5">
            <div className="mega-menu-wrapper p-relative">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-6">
                    <div className="logo">
                      <Link href="/">
                        <Image src={logo} alt="logo" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-7 d-none d-lg-block">
                    <div className="main-menu main-menu-5 main-menu-ff-space">
                      <nav id="mobile-menu">
                        <Menus />
                      </nav>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-2 col-md-6 col-6">
                    <div className="header__right-5 d-flex align-items-center justify-content-end">
                      <div className="header__call d-none d-xl-flex align-items-center">
                        <div className="header__call-icon">
                          <span>
                            <PhoneThree />
                          </span>
                        </div>
                        <div className="header__call-content">
                          <p>Consultation</p>
                          <h4>
                            <a href="tel:964-742-44-763">+964 742 44 763</a>
                          </h4>
                        </div>
                      </div>
                      <div className="header__btn-5 d-none d-xl-block ml-30">
                        <Link href="/contact" className="tp-btn-orange">
                          Start a Project
                        </Link>
                      </div>
                      <div className="header__hamburger header__hamburger-5 ml-50 d-xl-none">
                        <button
                          onClick={() => setIsOffCanvasOpen(true)}
                          type="button"
                          className="hamburger-btn hamburger-btn-blue hamburger-btn-black offcanvas-open-btn"
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
      <OffCanvasFour
        isOffCanvasOpen={isOffCanvasOpen}
        setIsOffCanvasOpen={setIsOffCanvasOpen}
      />
      {/* off canvas end */}
    </>
  );
};

export default HeaderFour;
