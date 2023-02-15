import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import logo from "@assets/img/logo/logo-green.svg";
import Menus from "./menus";
import useSticky from "@hooks/use-sticky";
import OffCanvasTwo from "@components/common/off-canvas/off-canvas-2";

const HeaderEight = () => {
  const { sticky } = useSticky();
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  return (
    <>
      <header>
        <div className="header__area">
          <div
            className={`header__bottom-9 header__sticky ${
              sticky ? "header-sticky" : ""
            }`}
            id="header-sticky"
          >
            <div className="container-fluid">
              <div className="mega-menu-wrapper p-relative">
                <div className="row align-items-center">
                  <div className="col-xxl-3 col-xl-3 col-lg-2 col-md-4 col-sm-5 col-8">
                    <div className="logo">
                      {/* <Link href="/">
                        <Image src={logo} alt="logo" />
                      </Link> */}
                    </div>
                  </div>
                  <div className="col-xxl-7 col-xl-7 col-lg-8 d-none d-lg-block">
                    <div className="main-menu main-menu-9 main-menu-ff-space">
                      
                    </div>
                  </div>
                  <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-8 col-sm-7 col-4">
                    <div className="main-menu main-menu-9 main-menu-ff-space">
                      <nav id="mobile-menu">
                        <Menus />
                      </nav>
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

export default HeaderEight;
