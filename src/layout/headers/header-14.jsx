import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import logo from "@assets/img/logo/logo-black.svg";
import Menus from "./menus";
import { ArrowRightFive } from "@svg/index";
import OffCanvasSix from "@components/common/off-canvas/off-canvas-6";

const HeaderFourteen = () => {
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  return (
    <>
      <header>
        <div className="header__area header__simple header__transparent">
          <div className="header__bottom header__sticky">
            <div className="container">
              <div className="mega-menu-wrapper p-relative">
                <div className="row align-items-center">
                  <div className="col-7">
                    <div className="logo">
                      <Link href="/">
                        <Image src={logo} alt="logo" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="header__bottom-right d-flex justify-content-end align-items-center pl-30">
                      <div className="main-menu pl-55 main-menu-ff-space d-none">
                        <nav id="mobile-menu">
                          <Menus />
                        </nav>
                      </div>
                      <div className="header__btn d-none d-md-block">
                        <Link href="/contact" className="tp-btn tp-btn-black">
                          Let’s talk
                          <span>
                            <ArrowRightFive />
                          </span>
                        </Link>
                      </div>
                      <div className="header__hamburger ml-50 d-xl-none">
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

export default HeaderFourteen;
