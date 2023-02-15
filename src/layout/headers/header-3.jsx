import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import Menus from "./menus";
import logo from "@assets/img/logo/logo-black.svg";
import useSticky from "@hooks/use-sticky";
import OffCanvasThree from "@components/common/off-canvas/off-canvas-3";

const HeaderThree = () => {
  const { sticky } = useSticky();
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  return (
    <>
      <header>
        <div className="header__area">
          <div
            className={`header__bottom header__padding-2 header-box-plr-55 header__sticky 
          ${sticky ? "header-sticky" : ""}`}
            id="header-sticky"
          >
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-5 col-8">
                  <div className="logo logo-2">
                    <Link href="/">
                      <Image src={logo} alt="logo" />
                    </Link>
                  </div>
                </div>
                <div className="col-xxl-7 col-xl-8 col-lg-8 d-none d-lg-block">
                  <div className="main-menu pl-55 main-menu-ff-space">
                    <nav id="mobile-menu-2" className="d-none">
                      <Menus />
                    </nav>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-2 col-lg-2 col-md-8 col-sm-7 col-4">
                  <div className="header__bottom-right d-flex justify-content-end align-items-center pl-30">
                    <div className="header__intro">
                      <p>Intro</p>
                    </div>
                    <div className="header__hamburger header__hamburger-2">
                      <button
                        onClick={() => setIsOffCanvasOpen(true)}
                        type="button"
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
      </header>

      {/* off canvas start */}
      <OffCanvasThree
        isOffCanvasOpen={isOffCanvasOpen}
        setIsOffCanvasOpen={setIsOffCanvasOpen}
      />
      {/* off canvas end */}
    </>
  );
};

export default HeaderThree;
